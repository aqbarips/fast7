(function() {
  // Only protect admin.html pages
  if (!window.location.pathname.includes('/admin.html')) return;

  var scriptTag = document.currentScript || document.querySelector('script[src*="store-auth.js"]');
  var STORE_ID = scriptTag ? scriptTag.getAttribute('data-store-id') || 'default' : 'default';

  var token = localStorage.getItem('mycart_store_token_' + STORE_ID);
  var authKey = 'mycart_store_auth_' + STORE_ID;

  function showLoginOverlay() {
    var overlay = document.createElement('div');
    overlay.id = 'storeAuthOverlay';
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:linear-gradient(135deg,#0f172a,#1e293b);display:flex;align-items:center;justify-content:center;z-index:999999;font-family:"Cairo",sans-serif;direction:rtl';

    var card = document.createElement('div');
    card.style.cssText = 'background:#fff;border-radius:20px;padding:32px 28px;max-width:380px;width:calc(100% - 32px);box-shadow:0 25px 60px rgba(0,0,0,.3);text-align:center';

    card.innerHTML = `
      <div style="width:64px;height:64px;border-radius:16px;background:linear-gradient(135deg,#2563eb,#8b5cf6);display:flex;align-items:center;justify-content:center;margin:0 auto 18px;font-size:1.8rem;color:#fff"><i class="fa-solid fa-store"></i></div>
      <h2 style="font-size:1.3rem;font-weight:900;color:#0f172a;margin:0 0 4px">لوحة تحكم المتجر</h2>
      <p style="font-size:.82rem;color:#64748b;margin:0 0 22px">ادخل كلمة السر لدخول لوحة الإدارة</p>
      <div id="storeAuthError" style="display:none;background:#fef2f2;color:#ef4444;padding:10px 14px;border-radius:10px;font-size:.78rem;font-weight:700;margin-bottom:14px">⚠️ كلمة السر خطأ</div>
      <input type="password" id="storePassInput" placeholder="كلمة سر المتجر" style="width:100%;padding:14px 16px;border:2px solid #e2e8f0;border-radius:12px;font-size:.9rem;font-family:inherit;text-align:center;outline:none;box-sizing:border-box;margin-bottom:16px;transition:border-color .2s" onfocus="this.style.borderColor='#2563eb'" onblur="this.style.borderColor='#e2e8f0'" onkeydown="if(event.key==='Enter')document.getElementById('storeLoginBtn').click()">
      <button id="storeLoginBtn" style="width:100%;padding:14px;background:#2563eb;color:#fff;border:none;border-radius:12px;font-size:.9rem;font-weight:800;cursor:pointer;font-family:inherit;box-shadow:0 4px 12px rgba(37,99,235,.3)"><i class="fa-solid fa-lock-open"></i> دخول</button>
    `;

    overlay.appendChild(card);
    document.body.appendChild(overlay);

    document.getElementById('storeLoginBtn').onclick = function() {
      doLogin();
    };

    document.getElementById('storePassInput').focus();
  }

  function doLogin() {
    var pass = document.getElementById('storePassInput').value.trim();
    if (!pass) return;

    fetch('http://localhost:8080/api/stores/' + STORE_ID + '/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: pass })
    }).then(function(r) {
      if (r.ok) return r.json();
      throw new Error('Login failed');
    }).then(function(data) {
      localStorage.setItem('mycart_store_token_' + STORE_ID, data.token);
      localStorage.setItem(authKey, 'true');
      var overlay = document.getElementById('storeAuthOverlay');
      if (overlay) document.body.removeChild(overlay);
      // Reload to fetch protected data
      window.location.reload();
    }).catch(function() {
      document.getElementById('storeAuthError').style.display = 'block';
    });
  }

  // Check auth
  var isAuthed = localStorage.getItem(authKey) === 'true';
  if (!isAuthed) {
    showLoginOverlay();
  } else {
    // Add token to sync.js requests if it exists
    var origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url) {
      this._url = url;
      return origOpen.apply(this, arguments);
    };
    var origSend = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.send = function(data) {
      if (this._url && this._url.includes('/api/')) {
        this.setRequestHeader('Authorization', 'Bearer ' + (localStorage.getItem('mycart_store_token_' + STORE_ID) || ''));
      }
      return origSend.apply(this, arguments);
    };
  }
})();
