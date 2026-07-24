
if (typeof DEFAULT_PRODUCTS === 'undefined') {
  var DEFAULT_PRODUCTS = [
    { id:1, name:'آيفون 16 برو ماكس', price:4999, oldPrice:5499, category:'جوالات', image:'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&auto=format&fit=crop', features:['شاشة 6.9 بوصة','معالج A18 Pro','كاميرا 48MP','بطارية 4685mAh'], specs:[['المعالج','A18 Pro'],['الرام','8GB'],['التخزين','256GB'],['الشاشة','6.9 بوصة OLED'],['الكاميرا','48+12+12MP'],['البطارية','4685mAh']], discount:9 },
    { id:2, name:'سامسونج S25 ألترا', price:4399, oldPrice:4899, category:'جوالات', image:'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&auto=format&fit=crop', features:['شاشة 6.9 بوصة','معالج Snapdragon 8 Gen 4','كاميرا 200MP','قلم S Pen'], specs:[['المعالج','Snapdragon 8 Gen 4'],['الرام','12GB'],['التخزين','256GB'],['الشاشة','6.9 بوصة Dynamic AMOLED'],['الكاميرا','200+50+12+10MP'],['البطارية','5000mAh']], discount:10 },
    { id:3, name:'هواوي Mate 60 Pro', price:3599, oldPrice:3999, category:'جوالات', image:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop', features:['شاشة 6.82 بوصة','معالج Kirin 9000S','كاميرا 50MP','اتصال قمر صناعي'], specs:[['المعالج','Kirin 9000S'],['الرام','8GB'],['التخزين','256GB'],['الشاشة','6.82 بوصة OLED'],['الكاميرا','50+48+12MP'],['البطارية','5000mAh']], discount:10 }
  ];
}

function loadProducts() {
  try {
    const stored = localStorage.getItem('mycart_admin_products');
    if (stored) {
      const p = JSON.parse(stored);
      if (p.length) {
        let updated = false;
        p.forEach(item => {
          if (item.image && item.image.startsWith('images/')) {
            if (item.image.includes('iphone')) item.image = 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&auto=format&fit=crop';
            else if (item.image.includes('s25') || item.image.includes('samsung')) item.image = 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&auto=format&fit=crop';
            else item.image = 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop';
            updated = true;
          }
        });
        if (updated) {
          try { localStorage.setItem('mycart_admin_products', JSON.stringify(p)); } catch(e) {}
        }
        return p;
      }
    }
  } catch(e) {}
  try { localStorage.setItem('mycart_admin_products', JSON.stringify(DEFAULT_PRODUCTS)); } catch(e) {}
  return DEFAULT_PRODUCTS;
}

function saveProductsToLS() {
  try { localStorage.setItem('mycart_admin_products', JSON.stringify(products)); } catch(e) { if (typeof showToast === 'function') showToast('⚠️ مساحة التخزين ممتلئة، تعذر حفظ المنتجات', 'error'); }
}

function loadAdminSettings() {
  try {
    const stored = localStorage.getItem('mycart_admin_settings');
    if (stored) return JSON.parse(stored);
  } catch(e) {}
  return { storeName: 'متجري', tagline: 'اختر منتجك المفضل', wholesaleCode: 'ADMIN123', currency: '₪', accentColor: '#ef4444' };
}

let adminSettings = loadAdminSettings();

let CURRENCY = adminSettings.currency || '₪';

var products = loadProducts();

// Boot: resolve image references from IndexedDB
(async function() {
  try {
    if (typeof mediaStoreGet === 'function') {
      products = await resolveProductImages();
    }
  } catch(e) {}
})();

async function resolveProductImages() {
  const prods = loadProducts();
  for (const p of prods) {
    if (p.images && p.images.length) {
      const resolved = [];
      for (const img of p.images) {
        const data = await mediaStoreGet(img);
        resolved.push(data || img);
      }
      p.images = resolved;
    }
    if (p.options) {
      for (const opt of p.options) {
        if (opt.type === 'image' && opt.values) {
          for (const v of opt.values) {
            if (v.extra) {
              const data = await mediaStoreGet(v.extra);
              if (data) v.extra = data;
            }
          }
        }
      }
    }
  }
  return prods;
}

let cart = JSON.parse(localStorage.getItem('mycart_cart')) || [];

let currentCat = 'الكل';

let wishlist = JSON.parse(localStorage.getItem('mycart_wishlist')) || [];

function playSound(type) {
  try {
    const ctx = getAudioCtx();
    const now = ctx.currentTime;
    const master = ctx.createGain();
    master.gain.value = 0.15;
    master.connect(ctx.destination);

    if (type === 'add') {
      const t = ctx.createOscillator(); t.type = 'triangle';
      t.frequency.setValueAtTime(523, now); t.frequency.setValueAtTime(659, now + 0.06); t.frequency.setValueAtTime(784, now + 0.12);
      const g = ctx.createGain(); g.gain.setValueAtTime(0.15, now); g.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      t.connect(g); g.connect(master); t.start(now); t.stop(now + 0.3);
    } else if (type === 'remove') {
      const o = ctx.createOscillator(); o.type = 'sawtooth';
      o.frequency.setValueAtTime(440, now); o.frequency.setValueAtTime(349, now + 0.07); o.frequency.setValueAtTime(294, now + 0.14);
      const g = ctx.createGain(); g.gain.setValueAtTime(0.1, now); g.gain.exponentialRampToValueAtTime(0.001, now + 0.32);
      o.connect(g); g.connect(master); o.start(now); o.stop(now + 0.32);
    } else if (type === 'error') {
      const o = ctx.createOscillator(); o.type = 'square';
      o.frequency.setValueAtTime(220, now); o.frequency.setValueAtTime(165, now + 0.1);
      const g = ctx.createGain(); g.gain.setValueAtTime(0.08, now); g.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      o.connect(g); g.connect(master); o.start(now); o.stop(now + 0.35);
    }
  } catch(e) {}
}

function animateAddToCart(el) {
  try {
    if (!el) return;
    const startRect = el.getBoundingClientRect();
    const cartIcon = document.querySelector('.bottom-nav .nav-item:nth-child(3)') || document.querySelector('.nav-item[onclick*="CartSheet"]');
    if (!cartIcon) return;
    const endRect = cartIcon.getBoundingClientRect();
    const dot = document.createElement('div');
    dot.style.cssText = 'position:fixed;z-index:9999;width:16px;height:16px;background:var(--accent,#ef4444);border-radius:50%;pointer-events:none;transition:all .55s cubic-bezier(.22,.61,.36,1);box-shadow:0 0 6px rgba(239,68,68,.4)';
    dot.style.left = (startRect.left + startRect.width / 2 - 8) + 'px';
    dot.style.top = (startRect.top + startRect.height / 2 - 8) + 'px';
    dot.style.transform = 'scale(.6)';
    dot.style.opacity = '1';
    document.body.appendChild(dot);
    requestAnimationFrame(() => {
      dot.style.left = (endRect.left + endRect.width / 2 - 8) + 'px';
      dot.style.top = (endRect.top + endRect.height / 2 - 8) + 'px';
      dot.style.transform = 'scale(0) translateY(-20px)';
      dot.style.opacity = '.2';
    });
    setTimeout(() => dot.remove(), 600);
    if (cartIcon) { cartIcon.classList.remove('cart-bounce'); void cartIcon.offsetWidth; cartIcon.classList.add('cart-bounce'); }
  } catch(e) {}
}

function showToast(msg, type = 'info') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.className = `toast ${type} show`;
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 3000);
  if (type === 'error' && typeof playSound === 'function') playSound('error');
}

function applyAccentColor(color) {
  if (!color) return;
  document.documentElement.style.setProperty('--accent', color);
  const hex = color.replace('#','');
  if (hex.length === 6) {
    const r = Math.max(0, parseInt(hex.slice(0,2),16) - 25);
    const g = Math.max(0, parseInt(hex.slice(2,4),16) - 25);
    const b = Math.max(0, parseInt(hex.slice(4,6),16) - 25);
    const hover = `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`;
    document.documentElement.style.setProperty('--accent-hover', hover);
  }
}

function compressImage(file, maxWidth, maxHeight, callback) {
  if (!file) return;
  const isPng = file.type === 'image/png' || (file.name && file.name.toLowerCase().endsWith('.png'));
  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement('canvas');
      let w = img.width;
      let h = img.height;
      if (w > maxWidth || h > maxHeight) {
        if (w / h > maxWidth / maxHeight) {
          h = Math.round((h * maxWidth) / w);
          w = maxWidth;
        } else {
          w = Math.round((w * maxHeight) / h);
          h = maxHeight;
        }
      }
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(img, 0, 0, w, h);
      const format = isPng ? 'image/png' : 'image/jpeg';
      const compressedUrl = canvas.toDataURL(format, isPng ? 0.85 : 0.7);
      callback(compressedUrl);
    };
    img.onerror = function() { callback(e.target.result); };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function getProductDiscount(p) {
  const old = p.oldPrice || 0;
  const curr = p.price || 0;
  if (old > 0 && curr < old) return Math.round((old - curr) / old * 100);
  return p.discount || 0;
}

function getProductImages(p) {
  if (!p) return ['https://placehold.co/400x400/e2e8f0/64748b?text=Product'];
  if (p.images && Array.isArray(p.images) && p.images.length) return p.images;
  if (p.image) return [p.image];
  return ['https://placehold.co/400x400/e2e8f0/64748b?text=Product'];
}

function getProductCats(p) {
  if (!p) return ['عام'];
  if (p.categories && Array.isArray(p.categories) && p.categories.length) return p.categories;
  if (p.category) return [p.category];
  return ['عام'];
}

function getFeeInfo() {
  const plan = localStorage.getItem('mycart_subscription_plan') || localStorage.getItem('mycart_store_plan') || 'free';
  
  var pCfg = {};
  try { var r = localStorage.getItem('mycart_store_private_config'); if (r) pCfg = JSON.parse(r); } catch(e) {}
  var aCfg = {};
  try { var r2 = localStorage.getItem('mycart_agency_site_settings'); if (r2) aCfg = JSON.parse(r2); } catch(e) {}

  const feePerOrder = parseFloat(pCfg.freeFee || aCfg.freeFee || '2');
  const limit = parseFloat(pCfg.feeLimit || aCfg.feeLimit || localStorage.getItem('mycart_fee_limit') || '100');

  const orders = JSON.parse(localStorage.getItem('mycart_orders') || '[]');
  const count = Array.isArray(orders) ? orders.length : 0;
  const accrued = plan === 'free' ? (count * feePerOrder) : 0;

  return { plan: plan, accrued: accrued, limit: limit, count: count, feePerOrder: feePerOrder };
}

function getAgencySettings() {
  var pCfg = {};
  try { var r = localStorage.getItem('mycart_store_private_config'); if (r) pCfg = JSON.parse(r); } catch(e) {}
  var aCfg = {};
  try { var r2 = localStorage.getItem('mycart_agency_site_settings'); if (r2) aCfg = JSON.parse(r2); } catch(e) {}

  return {
    freeFee: pCfg.freeFee || aCfg.freeFee || '2',
    monthlyFee: pCfg.monthlyFee || aCfg.monthlyFee || '100',
    annualFee: pCfg.annualFee || aCfg.annualFee || '1000'
  };
}