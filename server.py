from flask import Flask, request, jsonify, send_from_directory, make_response
from flask_cors import CORS
import json, os, uuid, base64, shutil, re, mimetypes
from datetime import datetime, timedelta
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
from functools import wraps
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'fast7-prod-change-this')
CORS(app)

STORES_DIR = 'stores'
DATA_DIR = 'data'
TEMPLATES_DIR = 'templates'
BASE_TEMPLATE_DIR = os.path.join(TEMPLATES_DIR, 'default')
PORT = 8080

# ----------------------------------------------------------------
#  SUPABASE CLIENT SETUP
# ----------------------------------------------------------------
SUPABASE_URL = os.environ.get('SUPABASE_URL', '')
SUPABASE_KEY = os.environ.get('SUPABASE_KEY', '')

supabase = None
if SUPABASE_URL and SUPABASE_KEY and not SUPABASE_URL.startswith('https://your-supabase'):
    try:
        from supabase import create_client
        supabase = create_client(SUPABASE_URL, SUPABASE_KEY)
        print(f"[Supabase] Connected successfully to: {SUPABASE_URL}")
    except Exception as e:
        print(f"[Supabase Error] Failed to initialize client: {e}")
else:
    print("[Supabase Warning] SUPABASE_URL or SUPABASE_KEY not configured. Set environment variables to enable live online DB & Storage.")

def load_json(path, default=None):
    if not os.path.exists(path):
        return default
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

def save_json(path, data):
    d = os.path.dirname(path)
    if d:
        os.makedirs(d, exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

def token_required(f):
    @wraps(f)
    def dec(*args, **kwargs):
        t = request.headers.get('Authorization', '').replace('Bearer ', '')
        if not t:
            return jsonify({'error': 'No token'}), 401
        try:
            jwt.decode(t, app.config['SECRET_KEY'], algorithms=['HS256'])
        except:
            return jsonify({'error': 'Invalid token'}), 401
        return f(*args, **kwargs)
    return dec

# ----------------------------------------------------------------
#  AGENCY AUTH
# ----------------------------------------------------------------
@app.route('/api/auth/login', methods=['POST'])
def login():
    pwd = request.json.get('password', '')
    h = None
    
    if supabase:
        try:
            res = supabase.table('agency_auth').select('password_hash').eq('id', 'agency').execute()
            if res.data:
                h = res.data[0].get('password_hash')
            else:
                default_h = generate_password_hash('fast7@2024')
                supabase.table('agency_auth').insert({'id': 'agency', 'password_hash': default_h}).execute()
                h = default_h
        except Exception as e:
            print(f"[Supabase Auth Error] {e}")

    if not h:
        auth_path = os.path.join(DATA_DIR, 'agency', 'auth.json')
        h = load_json(auth_path, {}).get('password')
        if not h:
            h = generate_password_hash('fast7@2024')
            save_json(auth_path, {'password': h})

    if not check_password_hash(h, pwd):
        return jsonify({'error': 'كلمة المرور خطأ'}), 401
    
    token = jwt.encode({'role': 'agency', 'exp': datetime.utcnow() + timedelta(days=7)},
                       app.config['SECRET_KEY'])
    return jsonify({'token': token})

@app.route('/api/auth/change-password', methods=['POST'])
@token_required
def change_password():
    pwd = request.json.get('password', '')
    new_h = generate_password_hash(pwd)
    
    if supabase:
        try:
            supabase.table('agency_auth').upsert({'id': 'agency', 'password_hash': new_h}).execute()
        except Exception as e:
            print(f"[Supabase Auth Change Error] {e}")
            
    save_json(os.path.join(DATA_DIR, 'agency', 'auth.json'), {'password': new_h})
    return jsonify({'success': True})

# ----------------------------------------------------------------
#  STORE DATA (SUPABASE / BACKEND PERSISTENCE)
# ----------------------------------------------------------------
@app.route('/api/stores/<store_id>/data', methods=['GET', 'POST'])
def store_data(store_id):
    if request.method == 'GET':
        if supabase:
            try:
                p_res = supabase.table('store_products').select('*').eq('store_id', store_id).execute()
                c_res = supabase.table('store_customers').select('*').eq('store_id', store_id).execute()
                o_res = supabase.table('store_orders').select('*').eq('store_id', store_id).execute()
                s_res = supabase.table('store_settings').select('*').eq('store_id', store_id).execute()
                st_res = supabase.table('stores').select('status').eq('id', store_id).execute()
                
                settings_data = s_res.data[0] if (s_res.data and len(s_res.data) > 0) else {}
                status_val = st_res.data[0].get('status', 'active') if (st_res.data and len(st_res.data) > 0) else 'active'

                return jsonify({
                    'products': p_res.data or [],
                    'customers': c_res.data or [],
                    'orders': o_res.data or [],
                    'settings': settings_data,
                    'status': {'status': status_val}
                })
            except Exception as e:
                print(f"[Supabase Fetch Error] {e}")

        # Local fallback if Supabase not connected
        d = os.path.join(DATA_DIR, store_id)
        return jsonify({
            'products': load_json(os.path.join(d, 'products.json'), []),
            'customers': load_json(os.path.join(d, 'customers.json'), []),
            'orders': load_json(os.path.join(d, 'orders.json'), []),
            'settings': load_json(os.path.join(d, 'settings.json'), {}),
            'status': load_json(os.path.join(d, 'status.json'), {'status': 'active'})
        })

    # POST Method
    body = request.json or {}
    
    if supabase:
        try:
            if 'products' in body and isinstance(body['products'], list):
                # Delete existing and re-insert products for store
                supabase.table('store_products').delete().eq('store_id', store_id).execute()
                if body['products']:
                    items = []
                    for prod in body['products']:
                        items.append({
                            'id': str(prod.get('id', uuid.uuid4())),
                            'store_id': store_id,
                            'name': prod.get('name', 'منتج'),
                            'price': float(prod.get('price', 0) or 0),
                            'compare_at_price': float(prod.get('compareAtPrice', 0) or 0) if prod.get('compareAtPrice') else None,
                            'cost_price': float(prod.get('costPrice', 0) or 0) if prod.get('costPrice') else None,
                            'category': prod.get('category', ''),
                            'image': prod.get('image', ''),
                            'images': prod.get('images', []),
                            'description': prod.get('description', ''),
                            'stock': int(prod.get('stock', 0) or 0)
                        })
                    supabase.table('store_products').insert(items).execute()

            if 'customers' in body and isinstance(body['customers'], list):
                supabase.table('store_customers').delete().eq('store_id', store_id).execute()
                if body['customers']:
                    custs = []
                    for c in body['customers']:
                        custs.append({
                            'id': str(c.get('id', uuid.uuid4())),
                            'store_id': store_id,
                            'name': c.get('name', ''),
                            'phone': c.get('phone', ''),
                            'email': c.get('email', ''),
                            'city': c.get('city', ''),
                            'address': c.get('address', '')
                        })
                    supabase.table('store_customers').insert(custs).execute()

            if 'orders' in body and isinstance(body['orders'], list):
                supabase.table('store_orders').delete().eq('store_id', store_id).execute()
                if body['orders']:
                    ords = []
                    for o in body['orders']:
                        ords.append({
                            'id': str(o.get('id', uuid.uuid4())),
                            'store_id': store_id,
                            'customer_name': o.get('customerName', o.get('customer_name', '')),
                            'customer_phone': o.get('customerPhone', o.get('customer_phone', '')),
                            'city': o.get('city', ''),
                            'address': o.get('address', ''),
                            'items': o.get('items', []),
                            'total': float(o.get('total', 0) or 0),
                            'status': o.get('status', 'new')
                        })
                    supabase.table('store_orders').insert(ords).execute()

            if 'settings' in body and isinstance(body['settings'], dict):
                st = body['settings']
                supabase.table('store_settings').upsert({
                    'store_id': store_id,
                    'name': st.get('name', ''),
                    'logo': st.get('logo', ''),
                    'banner': st.get('banner', ''),
                    'currency': st.get('currency', 'YER'),
                    'theme': st.get('theme', {})
                }).execute()

            if 'status' in body and isinstance(body['status'], dict):
                st_val = body['status'].get('status', 'active')
                supabase.table('stores').update({'status': st_val}).eq('id', store_id).execute()

        except Exception as e:
            print(f"[Supabase Save Error] {e}")

    # Also sync local data folder as backup
    d = os.path.join(DATA_DIR, store_id)
    for k in ['products', 'customers', 'orders', 'settings', 'status']:
        if k in body:
            save_json(os.path.join(d, k + '.json'), body[k])

    return jsonify({'success': True})

# ----------------------------------------------------------------
#  STORE AUTH
# ----------------------------------------------------------------
@app.route('/api/stores/<store_id>/auth/login', methods=['POST'])
def store_login(store_id):
    pwd = request.json.get('password', '')
    h = None

    if supabase:
        try:
            res = supabase.table('store_auth').select('password_hash').eq('store_id', store_id).execute()
            if res.data:
                h = res.data[0].get('password_hash')
        except Exception as e:
            print(f"[Supabase Store Auth Error] {e}")

    if not h:
        ap = os.path.join(DATA_DIR, store_id, 'auth.json')
        h = load_json(ap, {}).get('password')

    if not h:
        return jsonify({'error': 'لا يوجد كلمة سر للمتجر'}), 401
    if not check_password_hash(h, pwd):
        return jsonify({'error': 'كلمة السر خطأ'}), 401

    token = jwt.encode({'role': 'store', 'store_id': store_id,
                        'exp': datetime.utcnow() + timedelta(days=30)},
                       app.config['SECRET_KEY'])
    return jsonify({'token': token})

@app.route('/api/stores/<store_id>/auth/change-password', methods=['POST'])
def store_change_password(store_id):
    pwd = request.json.get('password', '')
    if len(pwd) < 4:
        return jsonify({'error': 'كلمة السر قصيرة جداً'}), 400
    
    new_h = generate_password_hash(pwd)
    
    if supabase:
        try:
            supabase.table('store_auth').upsert({'store_id': store_id, 'password_hash': new_h}).execute()
        except Exception as e:
            print(f"[Supabase Store Pass Change Error] {e}")

    save_json(os.path.join(DATA_DIR, store_id, 'auth.json'), {'password': new_h})
    return jsonify({'success': True})

# ----------------------------------------------------------------
#  UPLOAD (SUPABASE STORAGE / LOCAL FALLBACK)
# ----------------------------------------------------------------
@app.route('/api/upload', methods=['POST'])
def upload():
    data = request.json or {}
    raw = data.get('data', '')
    fn = data.get('filename', '')
    sid = data.get('store_id', 'default')

    if not raw:
        return jsonify({'error': 'ملف فارغ'}), 400

    mime_type = 'image/png'
    ext = '.png'
    if raw.startswith('data:'):
        mime_type = raw.split(';')[0].split(':')[1]
        ext = mimetypes.guess_extension(mime_type) or '.png'
        raw = raw.split(',')[1]

    if not fn:
        fn = f"{uuid.uuid4()}{ext}"

    file_bytes = base64.b64decode(raw)

    # 1. Try ImgBB Unlimited Storage if API key is configured
    imgbb_key = os.environ.get('IMGBB_API_KEY', '')
    if imgbb_key:
        try:
            import urllib.parse, urllib.request
            headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
            payload_data = urllib.parse.urlencode({'key': imgbb_key, 'image': raw}).encode('utf-8')
            req = urllib.request.Request('https://api.imgbb.com/1/upload', data=payload_data, headers=headers)
            with urllib.request.urlopen(req) as resp:
                res_json = json.loads(resp.read().decode('utf-8'))
                if res_json.get('success'):
                    img_url = res_json.get('data', {}).get('url')
                    print(f"[ImgBB Storage] Uploaded image successfully: {img_url}")
                    return jsonify({'url': img_url, 'filename': fn, 'storage': 'imgbb'})
        except Exception as e:
            print(f"[ImgBB Upload Error] {e}")

    # 2. If Supabase is connected, upload to Supabase Storage Bucket 'store-media'
    if supabase:
        try:
            file_path = f"{sid}/{fn}"
            bucket = supabase.storage.from_('store-media')
            
            # Upload file bytes
            bucket.upload(
                path=file_path,
                file=file_bytes,
                file_options={"content-type": mime_type, "upsert": "true"}
            )
            
            # Retrieve Public URL
            public_url = bucket.get_public_url(file_path)
            print(f"[Supabase Storage] Uploaded image: {public_url}")
            return jsonify({'url': public_url, 'filename': fn, 'storage': 'supabase'})
        except Exception as e:
            print(f"[Supabase Upload Error] {e}")

    # Fallback to local disk storage
    d = os.path.join(STORES_DIR, sid, 'images')
    os.makedirs(d, exist_ok=True)
    with open(os.path.join(d, fn), 'wb') as f:
        f.write(file_bytes)

    return jsonify({'url': f'stores/{sid}/images/{fn}', 'filename': fn, 'storage': 'local'})

# ----------------------------------------------------------------
#  TEMPLATES
# ----------------------------------------------------------------
@app.route('/api/templates')
def list_templates():
    ts = []
    if os.path.exists(TEMPLATES_DIR):
        for n in sorted(os.listdir(TEMPLATES_DIR)):
            td = os.path.join(TEMPLATES_DIR, n)
            mp = os.path.join(td, 'template.json')
            if os.path.isdir(td) and os.path.exists(mp):
                m = load_json(mp)
                m['product_count'] = len(load_json(os.path.join(td, 'products.json'), []))
                ts.append(m)
    ts.sort(key=lambda t: t.get('order', 999))
    return jsonify(ts)

# ----------------------------------------------------------------
#  CREATE & LIST STORES
# ----------------------------------------------------------------
@app.route('/api/stores', methods=['GET'])
def list_stores():
    if supabase:
        try:
            res = supabase.table('stores').select('*').execute()
            return jsonify(res.data or [])
        except Exception as e:
            print(f"[Supabase List Stores Error] {e}")

    # Fallback local
    stores = []
    if os.path.exists(STORES_DIR):
        for sf in os.listdir(STORES_DIR):
            cfg_path = os.path.join(STORES_DIR, sf, 'store.config.json')
            if os.path.exists(cfg_path):
                cfg = load_json(cfg_path, {})
                stores.append(cfg)
    return jsonify(stores)

def _replace_products_in_file(path, products_js):
    if not os.path.exists(path):
        return
    with open(path, 'r', encoding='utf-8') as f:
        c = f.read()
    def _fb(text, pos):
        d = 0
        for i in range(pos, len(text)):
            if text[i] == '{': d += 1
            elif text[i] == '}':
                d -= 1
                if d == 0: return i + 1
        return len(text)
    if 'if (typeof DEFAULT_PRODUCTS' in c:
        idx = c.index('if (typeof DEFAULT_PRODUCTS')
        br = c.index('{', idx)
        end = _fb(c, br)
        while end < len(c) and c[end] in '; \t\r\n':
            end += 1
        c = c[:idx] + 'var DEFAULT_PRODUCTS = ' + products_js + ';\n' + c[end:]
    else:
        for kw in ['const', 'let', 'var']:
            m = re.search(kw + r'\s+DEFAULT_PRODUCTS\s*=\s*\[', c)
            if m:
                start = m.start()
                bracket = c.index('[', m.start())
                d = 0
                be = bracket
                for i in range(bracket, len(c)):
                    if c[i] == '[': d += 1
                    elif c[i] == ']':
                        d -= 1
                        if d == 0:
                            be = i + 1
                            break
                while be < len(c) and c[be] in '; \t\r\n':
                    be += 1
                c = c[:start] + kw + ' DEFAULT_PRODUCTS = ' + products_js + ';\n' + c[be:]
                break
    with open(path, 'w', encoding='utf-8') as f:
        f.write(c)

def injection_script(sid):
    return f'<script src="/js/sync.js" data-store-id="{sid}"></script>'

@app.route('/api/store/create', methods=['POST'])
def create_store():
    data = request.json or {}
    sid = str(data.get('id', int(datetime.now().timestamp() * 1000)))
    name = data.get('name', 'new-store')
    subdomain = data.get('subdomain', 'store')
    tid = data.get('template', 'default')
    folder = re.sub(r'[^a-zA-Z0-9_-]', '_', subdomain.lower())
    target = os.path.join(STORES_DIR, folder)

    if os.path.exists(target):
        return jsonify({'error': f'المجلد {folder} موجود'}), 409
    
    shutil.copytree(BASE_TEMPLATE_DIR, target)

    # Save to Supabase DB
    default_store_pass = 'store@' + sid[-4:] if len(sid) >= 4 else 'store@1234'
    pass_hash = generate_password_hash(default_store_pass)

    if supabase:
        try:
            supabase.table('stores').upsert({
                'id': sid,
                'name': name,
                'subdomain': subdomain,
                'folder': folder,
                'template': tid,
                'status': 'active'
            }).execute()

            supabase.table('store_auth').upsert({
                'store_id': sid,
                'password_hash': pass_hash
            }).execute()

            # Default template products into store_products table
            pp = os.path.join(TEMPLATES_DIR, tid or 'default', 'products.json')
            tp = load_json(pp, [])
            if tp:
                items = []
                for prod in tp:
                    items.append({
                        'id': str(prod.get('id', uuid.uuid4())),
                        'store_id': sid,
                        'name': prod.get('name', 'منتج'),
                        'price': float(prod.get('price', 0) or 0),
                        'category': prod.get('category', ''),
                        'image': prod.get('image', ''),
                        'description': prod.get('description', ''),
                        'stock': int(prod.get('stock', 0) or 0)
                    })
                supabase.table('store_products').insert(items).execute()
        except Exception as e:
            print(f"[Supabase Create Store Error] {e}")

    # Override products from template locally
    if tid != 'default':
        pp = os.path.join(TEMPLATES_DIR, tid, 'products.json')
        tp = load_json(pp, [])
        pj = json.dumps(tp, ensure_ascii=False, indent=2)
        for jf in ['js/data.js', 'js/store.js', 'script.js']:
            _replace_products_in_file(os.path.join(target, jf), pj)

    # Save local config & auth
    dd = os.path.join(DATA_DIR, sid)
    os.makedirs(dd, exist_ok=True)
    cfg = {'id': sid, 'name': name, 'subdomain': subdomain, 'folder': folder,
           'template': tid, 'created': str(datetime.now())}
    save_json(os.path.join(dd, 'config.json'), cfg)
    save_json(os.path.join(target, 'store.config.json'), cfg)
    save_json(os.path.join(dd, 'auth.json'), {'password': pass_hash})

    # Inject script tags into store files
    prefix_script = '''<script>
(function(){var P="store_''' + sid + '''_";
var g=localStorage.getItem.bind(localStorage);
var s=localStorage.setItem.bind(localStorage);
var r=localStorage.removeItem.bind(localStorage);
localStorage.getItem=function(k){return k.startsWith("mycart_")?g(P+k):g(k)};
localStorage.setItem=function(k,v){return k.startsWith("mycart_")?s(P+k,v):s(k,v)};
localStorage.removeItem=function(k){return k.startsWith("mycart_")?r(P+k):r(k)};
})();</script>'''
    for hf in ['admin.html', 'index.html']:
        hp = os.path.join(target, hf)
        if os.path.exists(hp):
            with open(hp, 'r', encoding='utf-8') as f:
                c = f.read()
            extras = prefix_script + '\n' + injection_script(sid)
            if hf == 'admin.html':
                extras += '\n' + f'<script src="/js/store-auth.js" data-store-id="{sid}"></script>'
            c = c.replace('</head>', extras + '\n</head>')
            with open(hp, 'w', encoding='utf-8') as f:
                f.write(c)

    return jsonify({'success': True, 'folder': folder, 'template': tid,
                    'store_id': sid, 'url': f'stores/{folder}/admin.html',
                    'store_password': default_store_pass})

# ----------------------------------------------------------------
#  DELETE STORE
# ----------------------------------------------------------------
@app.route('/api/stores/<store_id>', methods=['DELETE'])
def delete_store(store_id):
    if supabase:
        try:
            supabase.table('stores').delete().eq('id', store_id).execute()
        except Exception as e:
            print(f"[Supabase Delete Store Error] {e}")

    folder = None
    if os.path.exists(STORES_DIR):
        for sf in os.listdir(STORES_DIR):
            cfg_path = os.path.join(STORES_DIR, sf, 'store.config.json')
            if os.path.exists(cfg_path):
                try:
                    cfg = load_json(cfg_path, {})
                    if str(cfg.get('id')) == str(store_id):
                        folder = sf
                        break
                except:
                    pass

    if folder:
        target = os.path.join(STORES_DIR, folder)
        shutil.rmtree(target, ignore_errors=True)

    data_target = os.path.join(DATA_DIR, store_id)
    if os.path.exists(data_target):
        shutil.rmtree(data_target, ignore_errors=True)

    return jsonify({'success': True, 'deleted': store_id})

# ----------------------------------------------------------------
#  STATIC FILES
# ----------------------------------------------------------------
@app.route('/')
def index():
    resp = make_response(send_from_directory('.', 'index.html'))
    resp.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate'
    return resp

@app.route('/<path:path>')
def static_files(path):
    if os.path.exists(path) and os.path.isfile(path):
        ext = os.path.splitext(path)[1].lower()
        if ext in ['.js', '.html']:
            resp = make_response(send_from_directory('.', path))
            resp.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate'
            return resp
        return send_from_directory('.', path)
    return jsonify({'error': 'Not found'}), 404

# ----------------------------------------------------------------
#  START SERVER
# ----------------------------------------------------------------
if __name__ == '__main__':
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    os.makedirs(os.path.join(DATA_DIR, 'agency'), exist_ok=True)
    print(f'FAST7 Supabase-Integrated Server running at: http://localhost:{PORT}')
    print(f'Agency Dashboard: http://localhost:{PORT}/agency/dashboard.html')
    app.run(host='0.0.0.0', port=PORT, debug=True, use_reloader=False)
