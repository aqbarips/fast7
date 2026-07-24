const DEFAULT_PRODUCTS = [
  { id:1, name:'آيفون 16 برو ماكس', price:4999, oldPrice:5499, category:'جوالات', image:'https://placehold.co/400x400/ef4444/ffffff?text=iPhone+16', features:['شاشة 6.9 بوصة','معالج A18 Pro','كاميرا 48MP','بطارية 4685mAh'], specs:[['المعالج','A18 Pro'],['الرام','8GB'],['التخزين','256GB'],['الشاشة','6.9 بوصة OLED'],['الكاميرا','48+12+12MP'],['البطارية','4685mAh']], discount:9 },
  { id:2, name:'سامسونج S25 ألترا', price:4399, oldPrice:4899, category:'جوالات', image:'https://placehold.co/400x400/3b82f6/ffffff?text=S25+Ultra', features:['شاشة 6.9 بوصة','معالج Snapdragon 8 Gen 4','كاميرا 200MP','قلم S Pen'], specs:[['المعالج','Snapdragon 8 Gen 4'],['الرام','12GB'],['التخزين','256GB'],['الشاشة','6.9 بوصة Dynamic AMOLED'],['الكاميرا','200+50+12+10MP'],['البطارية','5000mAh']], discount:10 },
  { id:3, name:'هواوي Mate 60 Pro', price:3599, oldPrice:3999, category:'جوالات', image:'https://placehold.co/400x400/16a34a/ffffff?text=Huawei+60', features:['شاشة 6.82 بوصة','معالج Kirin 9000S','كاميرا 50MP','اتصال قمر صناعي'], specs:[['المعالج','Kirin 9000S'],['الرام','8GB'],['التخزين','256GB'],['الشاشة','6.82 بوصة OLED'],['الكاميرا','50+48+12MP'],['البطارية','5000mAh']], discount:10 },
  { id:4, name:'شاحن سريع 65W', price:149, oldPrice:199, category:'اكسسوارات', image:'https://placehold.co/400x400/8b5cf6/ffffff?text=Charger+65W', features:['قدرة 65 واط','شحن سريع','USB-C','متوافق مع جميع الأجهزة'], specs:[['القدرة','65W'],['النوع','USB-C'],['الشحن السريع','نعم'],['متوافق مع','جميع الأجهزة']], discount:25 },
  { id:5, name:'سماعات بلوتوث Pro', price:249, oldPrice:299, category:'اكسسوارات', image:'https://placehold.co/400x400/f59e0b/ffffff?text=BT+Earphones', features:['بلوتوث 5.3','عزل ضوضاء','بطارية 8 ساعات','مقاومة للماء'], specs:[['البلوتوث','5.3'],['عزل الضوضاء','نعم'],['البطارية','8 ساعات'],['مقاومة الماء','IPX5']], discount:17 },
  { id:6, name:'حافظة حماية شفافة', price:49, oldPrice:69, category:'اكسسوارات', image:'https://placehold.co/400x400/10b981/ffffff?text=Case', features:['مادة TPU','شفاف','مقاوم للصدمات','دعم MagSafe'], specs:[['المادة','TPU'],['النوع','شفاف'],['مقاومة الصدمات','نعم'],['MagSafe','نعم']], discount:29 },
  { id:7, name:'ساعة ذكية Ultra', price:899, oldPrice:1099, category:'ساعات', image:'https://placehold.co/400x400/6366f1/ffffff?text=Watch+Ultra', features:['شاشة AMOLED','GPS مدمج','مقاومة 100م','بطارية 7 أيام'], specs:[['الشاشة','AMOLED 1.9 بوصة'],['GPS','مدمج'],['مقاومة الماء','100 متر'],['البطارية','7 أيام']], discount:18 },
  { id:8, name:'آيباد برو M4', price:4299, oldPrice:4799, category:'تابلت', image:'https://placehold.co/400x400/dc2626/ffffff?text=iPad+Pro', features:['شاشة 13 بوصة','معالج M4','كاميرا 12MP','متوافق مع Apple Pencil'], specs:[['المعالج','Apple M4'],['الشاشة','13 بوصة Ultra Retina XDR'],['التخزين','256GB'],['الكاميرا','12MP'],['البطارية','10 ساعات']], discount:10 },
  { id:9, name:'شاحن لاسلكي MagSafe', price:179, oldPrice:229, category:'اكسسوارات', image:'https://placehold.co/400x400/ec4899/ffffff?text=MagSafe', features:['شحن لاسلكي 15W','MagSafe','مدمج','LED'], specs:[['القدرة','15W'],['النوع','MagSafe لاسلكي'],['LED','نعم'],['متوافق','iPhone 12+']], discount:22 },
  { id:10, name:'جوال نوكيا 3310', price:199, oldPrice:249, category:'جوالات', image:'https://placehold.co/400x400/22c55e/ffffff?text=Nokia+3310', features:['بطارية تدوم شهر','مقاوم للصدمات','كلاسيك','لعبة الثعبان'], specs:[['البطارية','شهر'],['الشاشة','2.4 بوصة'],['الرام','16MB'],['التخزين','32GB']], discount:20 },
  { id:11, name:'سماعة سلكية HD', price:79, oldPrice:99, category:'اكسسوارات', image:'https://placehold.co/400x400/a855f7/ffffff?text=Wired+HD', features:['جودة صوت عالية','مايك مدمج','مقبس 3.5mm','تصميم مريح'], specs:[['النوع','سلكي'],['المايك','نعم'],['المقبس','3.5mm'],['التردد','20Hz-20kHz']], discount:20 },
  { id:12, name:'ساعة ذكية Fit', price:399, oldPrice:499, category:'ساعات', image:'https://placehold.co/400x400/f97316/ffffff?text=Watch+Fit', features:['شاشة 1.4 بوصة','مراقبة صحة','GPS','بطارية 14 يوم'], specs:[['الشاشة','1.4 بوصة'],['مراقبة الصحة','نعم'],['GPS','نعم'],['البطارية','14 يوم']], discount:20 },
  { id:13, name:'تابلت سامسونج S9', price:2899, oldPrice:3299, category:'تابلت', image:'https://placehold.co/400x400/2563eb/ffffff?text=Tab+S9', features:['شاشة 11 بوصة','معالج Snapdragon 8 Gen 2','قلم S Pen','مقاوم للماء'], specs:[['المعالج','Snapdragon 8 Gen 2'],['الشاشة','11 بوصة Dynamic AMOLED'],['التخزين','128GB'],['الرام','8GB'],['القلم','S Pen']], discount:12 },
  { id:14, name:'باور بانك 20000mAh', price:199, oldPrice:249, category:'اكسسوارات', image:'https://placehold.co/400x400/14b8a6/ffffff?text=PowerBank', features:['سعة 20000mAh','شحن سريع 45W','منفذين','LED'], specs:[['السعة','20000mAh'],['الشحن السريع','45W'],['المنافذ','USB-C + USB-A'],['LED','نعم']], discount:20 },
  { id:15, name:'جوال شاومي 14', price:2599, oldPrice:2999, category:'جوالات', image:'https://placehold.co/400x400/eab308/ffffff?text=Xiaomi+14', features:['شاشة 6.36 بوصة','معالج Snapdragon 8 Gen 3','كاميرا 50MP Leica','شحن 90W'], specs:[['المعالج','Snapdragon 8 Gen 3'],['الشاشة','6.36 بوصة LTPO'],['الكاميرا','50MP Leica'],['الشحن','90W سريع']], discount:13 },
  { id:16, name:'حافظة جلد فاخر', price:129, oldPrice:169, category:'اكسسوارات', image:'https://placehold.co/400x400/7c3aed/ffffff?text=Leather+Case', features:['جلد طبيعي','مقاوم للخدش','دعم MagSafe','متوفر بعدة ألوان'], specs:[['المادة','جلد طبيعي'],['MagSafe','نعم'],['الألوان','أسود - بني - كحلي'],['الحماية','مقاوم للخدش']], discount:24 },
];

function loadProducts() {
  try {
    const stored = localStorage.getItem('mycart_admin_products');
    if (stored) { const p = JSON.parse(stored); if (p.length) return p; }
  } catch(e) {}
  try { localStorage.setItem('mycart_admin_products', JSON.stringify(DEFAULT_PRODUCTS)); } catch(e) {}
  return DEFAULT_PRODUCTS;
}

function saveProductsToLS() {
  try { localStorage.setItem('mycart_admin_products', JSON.stringify(products)); } catch(e) { showToast('⚠️ مساحة التخزين ممتلئة، تعذر حفظ المنتجات', 'error'); }
}

function loadAdminSettings() {
  try {
    const stored = localStorage.getItem('mycart_admin_settings');
    if (stored) return JSON.parse(stored);
  } catch(e) {}
  return { storeName: 'متجري', tagline: 'اختر منتجك المفضل', wholesaleCode: 'ADMIN123', currency: '₪', accentColor: '#ef4444' };
}

let adminSettings = loadAdminSettings();
let WHOLESALE_CODE = localStorage.getItem('mycart_wholesale_code') || adminSettings.wholesaleCode || 'ADMIN123';
const ADMIN_CODE = 'admin123';
let CURRENCY = adminSettings.currency || '₪';
let products = loadProducts();
let adminEditingId = null;

let cart = JSON.parse(localStorage.getItem('mycart_cart')) || [];
let orders = JSON.parse(localStorage.getItem('mycart_orders')) || [];
let customer = JSON.parse(localStorage.getItem('mycart_customer')) || {};
let isWholesale = localStorage.getItem('mycart_wholesale') === 'true';

function variantSwatchHtml(vd) {
  if (!vd || !vd.attrs) return '';
  return vd.attrs.map(a => {
    if (a.t === 'color') return `<span style="display:inline-block;width:12px;height:12px;border-radius:50%;background:${a.c||'#ccc'};border:1px solid var(--border);vertical-align:middle;margin:0 1px" title="${a.n}: ${a.v}"></span>`;
    if (a.t === 'image' && a.i) return `<img src="${a.i}" style="width:14px;height:14px;border-radius:50%;object-fit:cover;border:1px solid var(--border);vertical-align:middle;margin:0 1px" title="${a.n}: ${a.v}">`;
    return '';
  }).join('');
}

let currentProduct = null;
let currentVariant = null;
let currentDetailImg = 0;
let detailQty = 1;
let currentCat = 'الكل';
let wishlist = JSON.parse(localStorage.getItem('mycart_wishlist')) || [];
let appliedDiscount = 0; // percentage

function saveWishlist() { try { localStorage.setItem('mycart_wishlist', JSON.stringify(wishlist)); } catch(e) {} }

function toggleWishlist(id) {
  const idx = wishlist.indexOf(id);
  if (idx > -1) { wishlist.splice(idx, 1); playSound('remove'); showToast('تمت الإزالة من المفضلة', 'info'); }
  else { wishlist.push(id); playSound('wishlist'); showToast('❤️ أضيف للمفضلة!', 'success'); }
  saveWishlist();
  // Update heart icons on product cards
  document.querySelectorAll(`.wishlist-btn[data-id="${id}"]`).forEach(b => b.classList.toggle('active'));
  // If sheet is open, re-render it
  if (document.getElementById('wishlistSheet').classList.contains('show')) renderWishlist();
}

// ===== SOUNDS =====
let audioCtx = null;
function getAudioCtx() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioCtx;
}
// Resume AudioContext on first user tap (required by mobile browsers)
document.addEventListener('pointerdown', () => {
  try { if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume(); } catch(e) {}
}, { once: true });
function playSound(type) {
  try {
    const ctx = getAudioCtx();
    const now = ctx.currentTime;
    const master = ctx.createGain();
    master.gain.value = 0.15;
    master.connect(ctx.destination);

    if (type === 'add') {
      // صعود سعيد: دو - مي - صول
      const t = ctx.createOscillator(); t.type = 'triangle';
      t.frequency.setValueAtTime(523, now); t.frequency.setValueAtTime(659, now + 0.06); t.frequency.setValueAtTime(784, now + 0.12);
      const g = ctx.createGain(); g.gain.setValueAtTime(0.15, now); g.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      t.connect(g); g.connect(master); t.start(now); t.stop(now + 0.3);
      // نغمة تحت خفيفة
      const o2 = ctx.createOscillator(); o2.type = 'sine'; o2.frequency.value = 392;
      const g2 = ctx.createGain(); g2.gain.setValueAtTime(0.06, now + 0.1); g2.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      o2.connect(g2); g2.connect(master); o2.start(now + 0.1); o2.stop(now + 0.25);

    } else if (type === 'remove') {
      // نزول حزين: لا - فا - ري
      const o = ctx.createOscillator(); o.type = 'sawtooth';
      o.frequency.setValueAtTime(440, now); o.frequency.setValueAtTime(349, now + 0.07); o.frequency.setValueAtTime(294, now + 0.14);
      const g = ctx.createGain(); g.gain.setValueAtTime(0.1, now); g.gain.exponentialRampToValueAtTime(0.001, now + 0.32);
      o.connect(g); g.connect(master); o.start(now); o.stop(now + 0.32);

    } else if (type === 'wishlist') {
      // بريق سحري: مي - صول - سي
      const o = ctx.createOscillator(); o.type = 'sine';
      o.frequency.setValueAtTime(659, now); o.frequency.setValueAtTime(784, now + 0.06); o.frequency.setValueAtTime(988, now + 0.12);
      const g = ctx.createGain(); g.gain.setValueAtTime(0.12, now); g.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      o.connect(g); g.connect(master); o.start(now); o.stop(now + 0.35);
      // رنين عالي خفيف
      const o2 = ctx.createOscillator(); o2.type = 'sine'; o2.frequency.value = 1319;
      const g2 = ctx.createGain(); g2.gain.setValueAtTime(0.04, now + 0.15); g2.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      o2.connect(g2); g2.connect(master); o2.start(now + 0.15); o2.stop(now + 0.3);

    } else if (type === 'checkout') {
      // احتفال: دو - مي - صول - دو (أوكتاف أعلى)
      const notes = [523, 659, 784, 1047];
      notes.forEach((freq, i) => {
        const o = ctx.createOscillator(); o.type = 'triangle';
        o.frequency.value = freq;
        const g = ctx.createGain(); g.gain.setValueAtTime(0.12, now + i * 0.08); g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.35);
        o.connect(g); g.connect(master); o.start(now + i * 0.08); o.stop(now + i * 0.08 + 0.35);
      });

    } else if (type === 'error') {
      // خطأ: نغمة منخفضة مزعجة
      const o = ctx.createOscillator(); o.type = 'square';
      o.frequency.setValueAtTime(220, now); o.frequency.setValueAtTime(165, now + 0.1);
      const g = ctx.createGain(); g.gain.setValueAtTime(0.08, now); g.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      o.connect(g); g.connect(master); o.start(now); o.stop(now + 0.35);
    }
  } catch(e) {}
}

// ===== FLY TO CART ANIMATION =====
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
    // Bounce the cart icon
    if (cartIcon) { cartIcon.classList.remove('cart-bounce'); void cartIcon.offsetWidth; cartIcon.classList.add('cart-bounce'); }
  } catch(e) {}
}

function init() {
  // Restore admin nav button if previously logged in (without auto-opening panel)
  if (localStorage.getItem('mycart_admin_logged') === 'true') {
    isWholesale = true;
    try { localStorage.setItem('mycart_wholesale', 'true'); } catch(e) {}
    const loginItem = document.getElementById('loginNavItem');
    if (loginItem) {
      loginItem.innerHTML = '<i class="fa-solid fa-sliders"></i><span>لوحة تحكم</span>';
      loginItem.onclick = function() { document.getElementById('adminOverlay').classList.add('show'); document.body.style.overflow = 'hidden'; adminRefreshAll(); };
    }
  }
  const nameEl = document.getElementById('storeName');
  const tagEl = document.getElementById('storeTagline');
  const logoEl = document.getElementById('storeLogo');
  
  if (nameEl) nameEl.textContent = adminSettings.storeName || 'متجري';
  if (tagEl) tagEl.textContent = adminSettings.tagline || 'اختر منتجك المفضل';
  
  const displayMode = adminSettings.logoDisplayMode || 'both';
  const savedLogo = localStorage.getItem('mycart_logo') || adminSettings.logo;
  
  if (displayMode === 'logo_only') {
    if (logoEl) { logoEl.style.display = savedLogo ? 'block' : 'none'; if (savedLogo) logoEl.src = savedLogo; }
    if (nameEl) nameEl.style.display = 'none';
    if (tagEl) tagEl.style.display = 'none';
  } else if (displayMode === 'text_only') {
    if (logoEl) logoEl.style.display = 'none';
    if (nameEl) nameEl.style.display = 'block';
    if (tagEl) tagEl.style.display = 'block';
  } else if (displayMode === 'none') {
    if (logoEl) logoEl.style.display = 'none';
    if (nameEl) nameEl.style.display = 'none';
    if (tagEl) tagEl.style.display = 'none';
  } else {
    // default: 'both'
    if (logoEl) { logoEl.style.display = savedLogo ? 'block' : 'none'; if (savedLogo) logoEl.src = savedLogo; }
    if (nameEl) nameEl.style.display = 'block';
    if (tagEl) tagEl.style.display = 'block';
  }

  applyAccentColor(adminSettings.accentColor || '#ef4444');
  const yr = document.getElementById('footerYear');
  if (yr) yr.textContent = new Date().getFullYear();
  loadAppearance();
  renderCategories();
  renderProducts(products);
  renderCartItems();
  updateCartBadge();
  if (isWholesale) applyWholesale();
  loadCustomerForm();
  handleRoute();
  applyMarketing();
  initPromoPopup();
  initSocialProof();
}

function applyMarketing() {
  const data = JSON.parse(localStorage.getItem('mycart_marketing')) || {};
  
  // Announcement Bar
  const announce = data.announce || {};
  const annBar = document.getElementById('announcementBar');
  if (annBar) {
    if (announce.show && announce.text) {
      annBar.innerHTML = `<div class="announcement-ticker">${announce.text} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${announce.text} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${announce.text}</div>`;
      annBar.style.backgroundColor = announce.bg || '#ef4444';
      annBar.style.color = announce.color || '#ffffff';
      annBar.style.display = 'block';
    } else {
      annBar.style.display = 'none';
    }
  }

  // Banners
  const slider = document.getElementById('bannerSlider');
  if (slider) {
    const banners = data.banners || [];
    if (banners.length) {
      slider.innerHTML = banners.map(b => `
        <div class="banner-slide" ${b.link?`onclick="window.open('${b.link.replace(/'/g,"\\'")}','_blank')"`:''}>
          <img src="${b.image}" alt="${b.title||''}" loading="lazy">
          ${b.title?`<div class="banner-caption">${b.title}</div>`:''}
        </div>`).join('');
      slider.style.display = '';
    } else {
      slider.innerHTML = '';
      slider.style.display = 'none';
    }
  }
  // Social links
  const soc = data.social || {};
  const fbBtn = document.getElementById('fbBtn');
  if (fbBtn) {
    if (soc.facebook) { fbBtn.href = soc.facebook; fbBtn.style.display = ''; }
    else { fbBtn.style.display = 'none'; }
  }
  const waBtn = document.getElementById('waBtn');
  if (waBtn) {
    if (soc.whatsapp) { waBtn.href = soc.whatsapp; waBtn.style.display = ''; }
    else { waBtn.style.display = 'none'; }
  }
  const igBtn = document.getElementById('igBtn');
  if (igBtn) {
    if (soc.instagram) { igBtn.href = soc.instagram; igBtn.style.display = ''; }
    else { igBtn.style.display = 'none'; }
  }
  const ttBtn = document.getElementById('ttBtn');
  if (ttBtn) {
    if (soc.tiktok) { ttBtn.href = soc.tiktok; ttBtn.style.display = ''; }
    else { ttBtn.style.display = 'none'; }
  }
  const xBtn = document.getElementById('xBtn');
  if (xBtn) {
    if (soc.twitter) { xBtn.href = soc.twitter; xBtn.style.display = ''; }
    else { xBtn.style.display = 'none'; }
  }
  // SEO
  const seo = data.seo || {};
  if (seo.title) document.title = seo.title;
  if (seo.description) {
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = seo.description;
  }
  if (seo.keywords) {
    let meta = document.querySelector('meta[name="keywords"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'keywords'; document.head.appendChild(meta); }
    meta.content = seo.keywords;
  }
  // Tracking codes
  const tr = data.tracking || {};
  if (tr.gaId) {
    const s = document.createElement('script');
    s.src = `https://www.googletagmanager.com/gtag/js?id=${tr.gaId}`;
    s.async = true;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', tr.gaId);
  }
  if (tr.fbPixel) {
    const s = document.createElement('script');
    s.innerHTML = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${tr.fbPixel}');fbq('track','PageView');`;
    document.head.appendChild(s);
  }
  if (tr.headerScript) {
    const s = document.createElement('script');
    s.innerHTML = tr.headerScript;
    document.head.appendChild(s);
  }
  if (tr.footerScript) {
    const s = document.createElement('script');
    s.innerHTML = tr.footerScript;
    document.body.appendChild(s);
  }

  // ─── 🔥 Live Viewers Counter ────────────────────────────────
  const liveV = data.liveViewers || {};
  initLiveViewers(liveV.show || false);

  // ─── 💬 WhatsApp Floating Chat Widget ───────────────────────
  const waChat = data.waChat || {};
  initWaChatWidget(waChat.show || false, waChat.greeting || '', data.social?.whatsapp || '');
}

function getProductCats(p) {
  if (p.categories && Array.isArray(p.categories) && p.categories.length) return p.categories;
  if (p.category) return [p.category];
  return ['أخرى'];
}

function renderCategories() {
  const stored = localStorage.getItem('mycart_categories');
  let catMap = {}, brandCats = [];
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      parsed.forEach(c => { if (c.isBrand) brandCats.push(c.name); else catMap[c.name] = c.image; });
    } catch(e) {}
  }
  const allCats = products.flatMap(p => getProductCats(p));
  const cats = ['الكل', ...new Set(allCats.filter(c => !brandCats.includes(c)))];
  document.getElementById('catFilters').innerHTML = cats.map(c =>
    `<button class="${c === currentCat ? 'active' : ''}" onclick="filterCategory('${c}')">${c === 'الكل' ? '' : catMap[c] ? `<img src="${catMap[c]}" onerror="this.remove()">` : ''}${c}</button>`
  ).join('');
  renderBrands(brandCats);
}

let currentBrand = '';

function renderBrands(brandCats) {
  const brands = [...new Set([...brandCats, ...products.filter(p => p.brand).map(p => p.brand)])];
  const el = document.getElementById('brandFilters');
  if (!el) return;
  if (!brands.length) { el.style.display = 'none'; return; }
  el.style.display = 'flex';
  el.innerHTML = `<button class="${!currentBrand ? 'active' : ''}" onclick="filterBrand('')">كل الماركات</button>` +
    brands.map(b => `<button class="${currentBrand === b ? 'active' : ''}" onclick="filterBrand('${b}')">${b}</button>`).join('');
}

function filterCategory(cat) {
  currentCat = cat;
  document.querySelectorAll('.cat-filters button').forEach(b => b.classList.remove('active'));
  if (event && event.target) event.target.classList.add('active');
  
  const filterBar = document.getElementById('advFilterBar');
  if (filterBar) {
    if (cat !== 'الكل') {
      filterBar.style.display = 'block';
      initFilterRange();
    } else {
      filterBar.style.display = 'none';
      resetAdvFilter();
    }
  }
  renderProducts(getFilteredProducts());
}

function filterBrand(brand) {
  currentBrand = brand;
  document.querySelectorAll('#brandFilters button').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  renderProducts(getFilteredProducts());
}

function getFilteredProducts() {
  let list = products;
  if (currentCat !== 'الكل') list = list.filter(p => getProductCats(p).includes(currentCat));
  if (currentBrand) list = list.filter(p => p.brand === currentBrand || getProductCats(p).includes(currentBrand));
  return list;
}

function renderProducts(list) {
  document.getElementById('productsGrid').innerHTML = list.map(p => `
    <div class="product-card" onclick="openDetail(${p.id})">
      ${p.badge ? `<span class="product-badge-tag">${p.badge}</span>` : ''}
      ${getProductDiscount(p) ? `<span class="discount-badge">-${getProductDiscount(p)}%</span>` : ''}
      <button class="wishlist-btn ${wishlist.includes(p.id) ? 'active' : ''}" data-id="${p.id}" onclick="event.stopPropagation();toggleWishlist(${p.id})"><i class="fa-solid fa-heart"></i></button>
      <img src="${getProductImages(p)[0]}" alt="${p.name}" loading="lazy">
      <div class="product-info">
        <h3>${p.name}</h3>
        <div class="price">${CURRENCY}${isWholesale ? Math.round(p.price * 0.85) : p.price} ${p.oldPrice ? `<span class="old-price">${CURRENCY}${p.oldPrice}</span>` : ''}</div>
        ${p.brand ? `<div class="product-brand">${p.brand}</div>` : ''}
      </div>
      <div class="quick-add" onclick="event.stopPropagation();quickAdd(${p.id}, this)"><i class="fa-solid fa-cart-shopping"></i></div>
    </div>
  `).join('');
  // Featured section
  const featured = products.filter(p => p.featured);
  const featSection = document.getElementById('featuredSection');
  const featScroll = document.getElementById('featuredScroll');
  if (featured.length) {
    featSection.style.display = 'block';
    featScroll.innerHTML = featured.map(p => `
      <div class="mini-card" onclick="openDetail(${p.id})">
        <span class="feat-badge">⭐ مميز</span>
        <img src="${getProductImages(p)[0]}" alt="${p.name}" loading="lazy">
        <div class="info"><h4>${p.name}</h4><div class="p">${CURRENCY}${isWholesale ? Math.round(p.price * 0.85) : p.price}</div></div>
        <div class="feat-add" onclick="event.stopPropagation();quickAdd(${p.id}, this)"><i class="fa-solid fa-cart-shopping"></i></div>
      </div>
    `).join('');
    setTimeout(startFeatAutoScroll, 300);
  } else {
    featSection.style.display = 'none';
    stopFeatAutoScroll();
  }
}

let featScrollInterval = null;

function startFeatAutoScroll() {
  stopFeatAutoScroll();
  const scroll = document.getElementById('featuredScroll');
  if (!scroll || scroll.children.length < 2 || window.innerWidth > 600) return;
  let userStopped = false;
  scroll.addEventListener('touchstart', () => { userStopped = true; stopFeatAutoScroll(); }, { once: true });
  const cards = scroll.children;
  let idx = 0;
  featScrollInterval = setInterval(() => {
    if (userStopped || !cards.length) return;
    idx = (idx + 1) % cards.length;
    const scrollRect = scroll.getBoundingClientRect();
    const cardRect = cards[idx].getBoundingClientRect();
    const targetLeft = scroll.scrollLeft + cardRect.left - scrollRect.left;
    scroll.scrollTo({ left: targetLeft, behavior: 'smooth' });
  }, 2500);
}

function stopFeatAutoScroll() {
  if (featScrollInterval) { clearInterval(featScrollInterval); featScrollInterval = null; }
}

function renderWishlist() {
  const items = products.filter(p => wishlist.includes(p.id));
  const container = document.getElementById('wishlistItems');
  if (!items.length) {
    container.innerHTML = '<div style="padding:30px;text-align:center;color:var(--text-muted)"><i class="fa-solid fa-heart" style="font-size:2.5rem;display:block;margin-bottom:12px;opacity:.3"></i><p>المفضلة فارغة</p><p style="font-size:.8rem;margin-top:4px">أضف منتجات إلى المفضلة بالضغط على ♡</p></div>';
    return;
  }
  container.innerHTML = items.map(p => `
    <div class="cart-item" onclick="openDetail(${p.id});closeWishlistSheet()">
      <img src="${getProductImages(p)[0]}" alt="${p.name}" loading="lazy">
      <div class="cart-item-info">
        <h4>${p.name}</h4>
        <div class="cart-item-price">${CURRENCY}${isWholesale ? Math.round(p.price * 0.85) : p.price}</div>
      </div>
      <button class="qty-btn" style="color:#ef4444" onclick="event.stopPropagation();toggleWishlist(${p.id});renderWishlist()"><i class="fa-solid fa-trash"></i></button>
    </div>
  `).join('');
}

function openWishlistSheet() {
  renderWishlist();
  document.getElementById('wishlistSheet').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeWishlistSheet() {
  document.getElementById('wishlistSheet').classList.remove('show');
  document.body.style.overflow = '';
}

function toggleSearch() {
  const bar = document.getElementById('searchBar');
  const input = document.getElementById('searchInput');
  if (bar.style.display === 'none' || !bar.style.display) {
    bar.style.display = 'block';
    bar.style.animation = 'none';
    void bar.offsetHeight;
    bar.style.animation = 'fadeIn .25s ease';
    setTimeout(() => input.focus(), 100);
  } else {
    bar.style.display = 'none';
    input.value = '';
    input.dispatchEvent(new Event('input'));
  }
}

var searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('input', function() {
    const q = this.value.trim().toLowerCase();
    if (!q) return renderProducts(getFilteredProducts());
    renderProducts(products.filter(p => p.name.toLowerCase().includes(q)));
  });
}

function openDetail(id, fromRoute) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  currentProduct = p;
  detailQty = 1;
  currentVariant = null;
  currentDetailImg = 0;
  document.getElementById('detailQty').textContent = '1';
  document.getElementById('detailImage').src = getProductImages(p)[0];
  // Thumbnails — handled in updateDetailThumbs
  updateDetailThumbs(p);
  document.getElementById('detailName').textContent = p.name;
  document.getElementById('detailBrand').innerHTML = p.brand ? `<i class="fa-solid fa-award"></i> ${p.brand} <span style="font-size:.7rem;font-weight:400;margin-right:4px">› عرض الكل</span>` : '';
  document.getElementById('detailBrand').style.display = p.brand ? 'inline-flex' : 'none';
  document.getElementById('detailBrand').onclick = p.brand ? function(){ filterBrand(p.brand); location.hash='#home'; } : null;
  document.getElementById('detailPrice').innerHTML = `<span style="font-size:1.2rem">${CURRENCY}${isWholesale ? Math.round(p.price * 0.85) : p.price}</span>${p.oldPrice ? `<span style="font-size:.85rem;text-decoration:line-through;color:var(--text-muted);margin-right:8px">${CURRENCY}${p.oldPrice}</span>${getProductDiscount(p) ? `<span class="discount-badge" style="position:static;display:inline-block;margin-right:6px;font-size:.7rem">-${getProductDiscount(p)}%</span>` : ''}` : ''}`;
  document.getElementById('featuresList').innerHTML = `<h4>أبرز الميزات:</h4><ul>${p.features.map(f => `<li><i class="fa-solid fa-check"></i> ${f}</li>`).join('')}</ul>`;
  document.getElementById('specsBody').innerHTML = p.specs.map(s => `<tr><td>${s[0]}</td><td>${s[1]}</td></tr>`).join('');
  
  // Marketing Features
  const marketingData = JSON.parse(localStorage.getItem('mycart_marketing')) || {};
  const cdownEl = document.getElementById('promoCountdown');
  if (cdownEl) {
    if (marketingData.countdown?.show) {
      cdownEl.style.display = 'flex';
      startPromoCountdown(marketingData.countdown.duration);
    } else {
      cdownEl.style.display = 'none';
    }
  }

  // Live Viewers Counter — start ticker when product opens
  startLiveViewersTicker(p.name);

  const shareSection = document.getElementById('shareProductSection');
  if (shareSection) {
    if (marketingData.share?.show) {
      shareSection.style.display = 'flex';
      const prodUrl = encodeURIComponent(`${window.location.origin}${window.location.pathname}#product/${p.id}`);
      const prodText = encodeURIComponent(`شاهد هذا المنتج الرائع: ${p.name}`);
      document.getElementById('shareWa').href = `https://wa.me/?text=${prodText}%20${prodUrl}`;
      document.getElementById('shareFb').href = `https://www.facebook.com/sharer/sharer.php?u=${prodUrl}`;
    } else {
      shareSection.style.display = 'none';
    }
  }
  const quickWaBtn = document.getElementById('quickWaBtn');
  if (quickWaBtn) {
    if (marketingData.waCheckout?.show) {
      quickWaBtn.style.display = 'flex';
    } else {
      quickWaBtn.style.display = 'none';
    }
  }
  // Volume Discount
  const volSection = document.getElementById('volumeDiscountSection');
  if (volSection) {
    if (marketingData.volumeDiscount?.show) {
      volSection.style.display = 'block';
      const type = marketingData.volumeDiscount.type || 'percent';
      const gridContainer = volSection.querySelector('.volume-grid');
      
      if (type === 'bogo') {
        const buy = marketingData.volumeDiscount.bogoBuy || 2;
        const get = marketingData.volumeDiscount.bogoGet || 1;
        if (gridContainer) {
          gridContainer.innerHTML = `
            <div class="volume-item" style="grid-column: 1 / -1; justify-content: center;">
              <span>🎁 عرض خاص لفترة محدودة:</span>
              <strong>اشترِ ${buy} واحصل على ${get} مجاناً!</strong>
            </div>`;
        }
      } else {
        const d2 = marketingData.volumeDiscount.disc2 || 5;
        const d3 = marketingData.volumeDiscount.disc3 || 10;
        const suffix = type === 'fixed' ? ` ${CURRENCY}` : '%';
        if (gridContainer) {
          gridContainer.innerHTML = `
            <div class="volume-item">
              <span>اشترِ قطعتين (2)</span>
              <strong>خصم ${d2}${suffix}</strong>
            </div>
            <div class="volume-item">
              <span>اشترِ 3 قطع فأكثر</span>
              <strong>خصم ${d3}${suffix}</strong>
            </div>`;
        }
      }
    } else {
      volSection.style.display = 'none';
    }
  }
  // Customer Reviews
  const revSection = document.getElementById('reviewsSection');
  if (revSection) {
    if (marketingData.reviews?.show) {
      revSection.style.display = 'block';
      loadProductReviews(p.id);
    } else {
      revSection.style.display = 'none';
    }
  }
  // Frequently Bought Together (FBT)
  let companion = null;
  if (products.length > 1) {
    const pCats = getProductCats(p);
    companion = products.find(x => x.id !== p.id && getProductCats(x).some(c => pCats.includes(c)));
    if (!companion) {
      companion = products.find(x => x.id !== p.id);
    }
  }
  const fbtSection = document.getElementById('frequentlyBoughtSection');
  if (fbtSection) {
    if (companion && marketingData.fbt?.show) {
      fbtSection.style.display = 'block';
      const pImg = Array.isArray(p.images) ? p.images[0] : p.image;
      const cImg = Array.isArray(companion.images) ? companion.images[0] : companion.image;
      document.getElementById('fbtCurrentImg').src = pImg;
      document.getElementById('fbtCurrentName').textContent = p.name;
      document.getElementById('fbtCompanionImg').src = cImg;
      document.getElementById('fbtCompanionName').textContent = companion.name;
      
      const sumPrice = p.price + companion.price;
      const discVal = marketingData.fbt.discount || 10;
      const discType = marketingData.fbt.discountType || 'percent';
      let discountedSum = sumPrice;
      if (discType === 'fixed') {
        discountedSum = Math.max(0, sumPrice - discVal);
      } else {
        discountedSum = Math.round(sumPrice * (1 - (discVal / 100)));
      }
      
      document.getElementById('fbtBundlePrice').textContent = `${CURRENCY}${discountedSum}`;
      document.getElementById('fbtOldBundlePrice').textContent = `${CURRENCY}${sumPrice}`;
      window._fbtCompanion = companion;
    } else {
      fbtSection.style.display = 'none';
      window._fbtCompanion = null;
    }
  }
  // Options / Variants
  const variantsEl = document.getElementById('variantSelector');
  // Reset selected options
  window._selOptions = {};
  if (p.options && p.options.length) {
    variantsEl.style.display = 'block';
    variantsEl.innerHTML = p.options.map(opt => {
      const btns = opt.values.map(v => {
        const swatch = opt.type==='color' ? `<span style="display:inline-block;width:16px;height:16px;border-radius:50%;background:${v.extra||'#ccc'};border:1px solid var(--border);vertical-align:middle;margin-left:4px"></span>` : opt.type==='image' && v.extra ? `<img src="${v.extra}" style="width:18px;height:18px;border-radius:50%;object-fit:cover;border:1px solid var(--border);vertical-align:middle;margin-left:4px">` : '';
        const priceLabel = v.price ? ` +${CURRENCY}${v.price}` : '';
        const out = v.stock === 0 ? 'disabled' : '';
        return `<button class="variant-btn" data-opt="${opt.name}" data-val="${v.value}" onclick="selectOption(this,'${opt.name}','${v.value}')" ${out}>
          ${swatch} ${v.value}${priceLabel}${v.stock===0?' (نفذ)':''}
        </button>`;
      }).join('');
      return `<div class="option-group" style="margin-bottom:8px"><div style="font-size:.8rem;font-weight:700;margin-bottom:4px">${opt.name}</div><div style="display:flex;flex-wrap:wrap;gap:4px">${btns}</div></div>`;
    }).join('');
    // Select first value of each option
    p.options.forEach(opt => {
      if (opt.values.length) {
        window._selOptions[opt.name] = opt.values[0].value;
        // Mark first as selected
        const firstBtn = variantsEl.querySelector(`.variant-btn[data-opt="${opt.name}"]`);
        if (firstBtn && !firstBtn.disabled) firstBtn.classList.add('selected');
      }
    });
    updateOptionPrice(p);
    // Option images: use first option's image if avail
    const firstOptVal = p.options[0] && p.options[0].values[0];
    if (firstOptVal && firstOptVal.extra && (p.options[0].type==='image'||p.options[0].type==='color')) {
      document.getElementById('detailImage').src = firstOptVal.extra;
    } else {
      document.getElementById('detailImage').src = getProductImages(p)[0];
    }
    updateDetailThumbs(p);
    currentVariant = null;
  } else if (p.variants && p.variants.length) {
    variantsEl.style.display = 'flex';
    variantsEl.innerHTML = p.variants.map((v, i) => {
      const varPrice = v.price ? ` (+${CURRENCY}${v.price})` : '';
      const disabled = v.stock === 0 ? 'disabled' : '';
      const label = (v.attrs || []).map(a => a.v).filter(Boolean).join(' - ');
      const swatchHtml = (v.attrs || []).map(a => {
        if (a.t === 'color') return `<span style="display:inline-block;width:16px;height:16px;border-radius:50%;background:${a.c||'#ccc'};border:1px solid var(--border);vertical-align:middle;margin-left:2px" title="${a.n}: ${a.v}"></span>`;
        if (a.t === 'image' && a.i) return `<img src="${a.i}" style="width:18px;height:18px;border-radius:50%;object-fit:cover;border:1px solid var(--border);vertical-align:middle;margin-left:2px" title="${a.n}: ${a.v}">`;
        return '';
      }).join('');
      return `<button class="variant-btn ${i === 0 ? 'selected' : ''}" data-idx="${i}" onclick="selectVariant(${i}, this)" ${disabled}>
        ${swatchHtml} ${label}${varPrice}${v.stock === 0 ? ' (نفذ)' : ''}
      </button>`;
    }).join('');
    currentVariant = p.variants[0];
    const firstImg = p.variants[0].images && p.variants[0].images[0] ? p.variants[0].images[0] : getProductImages(p)[0];
    document.getElementById('detailImage').src = firstImg;
    updateDetailThumbs(p);
  } else {
    variantsEl.style.display = 'none';
    variantsEl.innerHTML = '';
    currentVariant = null;
    document.getElementById('detailImage').src = getProductImages(p)[0];
    updateDetailThumbs(p);
  }
  // Update price when options selected
  function updateOptionPrice(prod) {
    if (!prod.options) return;
    const totalExtra = prod.options.reduce((sum, opt) => {
      const sel = window._selOptions[opt.name];
      const val = opt.values.find(v => v.value === sel);
      return sum + (val ? val.price : 0);
    }, 0);
    const base = isWholesale ? Math.round(prod.price * 0.85) : prod.price;
    const total = base + totalExtra;
    document.getElementById('detailPrice').innerHTML = `<span style="font-size:1.2rem">${CURRENCY}${total}</span>${prod.oldPrice ? `<span style="font-size:.85rem;text-decoration:line-through;color:var(--text-muted);margin-right:8px">${CURRENCY}${prod.oldPrice}</span>${getProductDiscount(prod) ? `<span class="discount-badge" style="position:static;display:inline-block;margin-right:6px;font-size:.7rem">-${getProductDiscount(prod)}%</span>` : ''}` : ''}`;
  }
  window.updateOptionPrice = updateOptionPrice;
  // Related products — also match any category
  const related = products.filter(x => getProductCats(x).some(c => getProductCats(p).includes(c)) && x.id !== p.id).slice(0, 6);
  const relSection = document.getElementById('relatedSection');
  if (related.length) {
    relSection.style.display = 'block';
    document.getElementById('relatedScroll').innerHTML = related.map(r => `
      <div class="mini-card" onclick="openDetail(${r.id})">
        <img src="${r.image}" alt="${r.name}">
        <div class="info"><h4>${r.name}</h4><div class="p">${CURRENCY}${isWholesale ? Math.round(r.price * 0.85) : r.price}</div></div>
      </div>
    `).join('');
  } else relSection.style.display = 'none';
  showPage('detailPage');
  if (!fromRoute) location.hash = `#product/${id}`;
}

function selectOption(btn, optName, val) {
  document.querySelectorAll(`.variant-btn[data-opt="${optName}"]`).forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  window._selOptions[optName] = val;
  if (window.updateOptionPrice) window.updateOptionPrice(currentProduct);
}
function selectVariant(idx, el) {
  document.querySelectorAll('.variant-btn').forEach(b => b.classList.remove('selected'));
  el.classList.add('selected');
  currentVariant = currentProduct.variants[idx];
  if (currentVariant && currentVariant.images && currentVariant.images.length) {
    document.getElementById('detailImage').src = currentVariant.images[0];
  } else {
    document.getElementById('detailImage').src = getProductImages(currentProduct)[0];
  }
  updateDetailThumbs(currentProduct);
  currentDetailImg = 0;
}

function updateDetailThumbs(p) {
  const thumbs = document.getElementById('detailThumbs');
  let imgs;
  if (currentVariant && currentVariant.images && currentVariant.images.length) {
    imgs = currentVariant.images;
  } else {
    imgs = getProductImages(p);
  }
  
  const prevBtn = document.getElementById('prevDetailImgBtn');
  const nextBtn = document.getElementById('nextDetailImgBtn');
  if (prevBtn && nextBtn) {
    if (imgs && imgs.length > 1) {
      prevBtn.style.display = 'flex';
      nextBtn.style.display = 'flex';
    } else {
      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';
    }
  }

  if (imgs && imgs.length > 1 && imgs[0]) {
    thumbs.style.display = 'flex';
    thumbs.innerHTML = imgs.map((img, i) =>
      `<img src="${img}" class="${i === 0 ? 'active' : ''}" onclick="switchDetailImg(${i}, this)" loading="lazy">`
    ).join('');
  } else {
    thumbs.style.display = 'none';
    thumbs.innerHTML = '';
  }
}

function changeDetailQty(delta) { detailQty = Math.max(1, detailQty + delta); document.getElementById('detailQty').textContent = detailQty; }

function switchDetailImg(idx, el) {
  currentDetailImg = idx;
  let imgs;
  if (currentVariant && currentVariant.images && currentVariant.images.length) {
    imgs = currentVariant.images;
  } else {
    imgs = getProductImages(currentProduct);
  }
  if (imgs && imgs[idx]) {
    document.getElementById('detailImage').src = imgs[idx];
  } else if (imgs && imgs[0]) {
    document.getElementById('detailImage').src = imgs[0];
  }
  
  document.querySelectorAll('#detailThumbs img').forEach((thumb, i) => {
    if (i === idx) {
      thumb.classList.add('active');
    } else {
      thumb.classList.remove('active');
    }
  });
}

function navigateDetailImg(dir) {
  let imgs;
  if (currentVariant && currentVariant.images && currentVariant.images.length) {
    imgs = currentVariant.images;
  } else {
    imgs = getProductImages(currentProduct);
  }
  if (!imgs || imgs.length <= 1) return;
  
  let newIdx = currentDetailImg + dir;
  if (newIdx < 0) {
    newIdx = imgs.length - 1;
  } else if (newIdx >= imgs.length) {
    newIdx = 0;
  }
  
  const thumbs = document.querySelectorAll('#detailThumbs img');
  switchDetailImg(newIdx, thumbs[newIdx]);
}

function addFromDetail(el) {
  if (!currentProduct) return;
  if (currentProduct.options && currentProduct.options.length) {
    const selected = currentProduct.options.map(opt => ({ n: opt.name, v: window._selOptions[opt.name] || opt.values[0].value }));
    for (let i = 0; i < detailQty; i++) addToCart(currentProduct, null, selected);
  } else {
    for (let i = 0; i < detailQty; i++) addToCart(currentProduct, currentVariant);
  }
  animateAddToCart(el);
  playSound('add');
  showToast('تمت الإضافة للسلة ✓', 'success');
}

function quickAdd(id, el) {
  const p = products.find(x => x.id === id);
  if (p) { addToCart(p); animateAddToCart(el); playSound('add'); showToast('تمت الإضافة للسلة ✓', 'success'); }
}

// ===== MULTI-STEP CHECKOUT =====
let currentCheckoutStep = 0; // 0 = cart items, 1 = step1 (info), 2 = step2 (delivery), 3 = step3 (review)

function openCartSheet() {
  renderCartItems();
  renderOrders();
  // Restore tabs & footer (hidden by thank you)
  const tabs = document.querySelector('.sheet-tabs');
  if (tabs) tabs.style.display = '';
  const footer = document.getElementById('cartSummary');
  if (footer) footer.style.display = '';
  // Reset to cart items tab
  setCartTabActive('items');
  currentCheckoutStep = 0;
  if (isWholesale) {
    document.getElementById('merchantLoggedIn').style.display = 'block';
    document.getElementById('merchantCode').style.display = 'none';
    const btn = document.querySelector('#merchantBody > button');
    if (btn) btn.style.display = 'none';
  }
  document.getElementById('cartSheet').classList.add('show');
  document.body.style.overflow = 'hidden';
  // Reset to cart items tab
  setCartTabActive('items');
  currentCheckoutStep = 0;
}

function closeCartSheet() {
  document.getElementById('cartSheet').classList.remove('show');
  document.body.style.overflow = '';
}

function setCartTabActive(tab) {
  document.querySelectorAll('.sheet-tabs button').forEach(b => b.classList.remove('active'));
  const buttons = document.querySelectorAll('.sheet-tabs button');
  const views = ['cartItems','cartCheckout','cartHistory'];
  document.querySelectorAll('.sheet-view').forEach(v => v.classList.remove('active'));

  if (tab === 'items') {
    buttons[0].classList.add('active');
    document.getElementById('cartItems').classList.add('active');
    document.getElementById('cartSheetTitle').textContent = 'سلتي';
    updateFooterForStep(0);
  } else if (tab === 'checkout') {
    document.getElementById('cartCheckout').classList.add('active');
    updateFooterForStep(currentCheckoutStep);
  } else if (tab === 'history') {
    buttons[1].classList.add('active');
    document.getElementById('cartHistory').classList.add('active');
    document.getElementById('cartSheetTitle').textContent = 'السجل';
    document.getElementById('cartSummary').style.display = 'none';
  }
}

function switchCartTab(tab, btn) {
  if (tab === 'items') {
    currentCheckoutStep = 0;
    setCartTabActive('items');
    renderCartItems();
  } else if (tab === 'history') {
    setCartTabActive('history');
    renderOrders();
  }
}

function updateFooterForStep(step) {
  const footer = document.getElementById('cartSummary');
  const navBtns = document.getElementById('checkoutNavBtns');
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (step === 0) {
    // Cart items tab footer
    if (cart.length) {
      footer.style.display = 'block';
      navBtns.innerHTML = `<button class="checkout-btn" id="checkoutBtn" ${!cart.length ? 'disabled' : ''} onclick="goToCheckout()"><i class="fa-solid fa-arrow-left"></i> التالي</button>`;
    } else {
      footer.style.display = 'none';
    }
  } else if (step === 1) {
    footer.style.display = 'block';
    document.getElementById('cartSheetTitle').textContent = 'البيانات';
    populateZones();
    navBtns.innerHTML = `
      <button class="back-btn" onclick="goCheckoutBack()"><i class="fa-solid fa-arrow-right"></i></button>
      <button class="checkout-btn" onclick="checkoutStep1Next()">التالي <i class="fa-solid fa-arrow-left"></i></button>`;
  } else if (step === 2) {
    footer.style.display = 'block';
    document.getElementById('cartSheetTitle').textContent = 'الدفع والتوصيل';
    renderStep2Summary();
    navBtns.innerHTML = `
      <button class="back-btn" onclick="goCheckoutBack()"><i class="fa-solid fa-arrow-right"></i></button>
      <button class="checkout-btn" onclick="checkout()" style="background:linear-gradient(135deg,#10b981,#059669)"><i class="fa-solid fa-check"></i> إتمام الطلب</button>`;
  }
}

function renderStep2Summary() {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = appliedDiscount > 0 ? Math.round(total * appliedDiscount / 100) : 0;
  const zoneEl = document.getElementById('custZone');
  const zoneName = zoneEl ? zoneEl.value : '';
  const zones = loadDeliveryZones();
  const zone = zones.find(z => z.name === zoneName);
  const delivery = zone ? zone.price : 0;
  const final = total - discount + delivery;
  document.getElementById('step2Subtotal').textContent = `${CURRENCY}${total.toFixed(2)}`;
  document.getElementById('step2Delivery').textContent = delivery > 0 ? `${CURRENCY}${delivery.toFixed(2)}` : `${CURRENCY}0.00`;
  document.getElementById('step2Total').textContent = `${CURRENCY}${final.toFixed(2)}`;
}

function updateStepIndicator(step) {
  for (let i = 1; i <= 2; i++) {
    const el = document.getElementById(`step-indicator-${i}`);
    const line = document.getElementById(`stepLine${i}`);
    if (el) el.classList.remove('active','done');
    if (line) line.classList.remove('done');
    if (i < step) { if (el) el.classList.add('done'); if (line) line.classList.add('done'); }
    else if (i === step) if (el) el.classList.add('active');
  }
}

function goToCheckout() {
  if (!cart.length) { showToast('السلة فارغة', 'error'); return; }
  currentCheckoutStep = 1;
  setCartTabActive('checkout');
  document.querySelectorAll('.checkout-step-panel').forEach(p => p.classList.remove('active'));
  document.getElementById('checkoutStep1').classList.add('active');
  updateStepIndicator(1);
  updateFooterForStep(1);
  loadCustomerForm();
}

function validatePhone() {
  const phone = document.getElementById('custPhone').value.trim();
  const hint = document.getElementById('phoneHint');
  const input = document.getElementById('custPhone');
  if (!hint || !input) return;
  if (phone.length === 0) {
    hint.style.display = 'none';
    input.style.borderColor = 'var(--border)';
  } else if (phone.length < 10) {
    hint.style.display = 'block';
    hint.textContent = 'يرجى إدخال 10 أرقام (مثلاً: 059xxxxxxx)';
    input.style.borderColor = '#ef4444';
  } else {
    hint.style.display = 'none';
    input.style.borderColor = '#10b981';
  }
}

function togglePhone2() {
  const wrap = document.getElementById('phone2Wrap');
  const icon = document.getElementById('addPhone2Icon');
  const btn = document.getElementById('addPhone2Btn');
  const isOpen = wrap.style.display !== 'none';
  if (isOpen) {
    wrap.style.display = 'none';
    icon.className = 'fa-solid fa-plus';
    btn.style.color = 'var(--accent)';
    // Clear second phone if hidden
    const p2 = document.getElementById('custPhone2');
    if (p2) { p2.value = ''; p2.style.borderColor = 'var(--border)'; }
    const h2 = document.getElementById('phoneHint2');
    if (h2) h2.style.display = 'none';
  } else {
    wrap.style.display = 'block';
    icon.className = 'fa-solid fa-xmark';
    btn.style.color = '#6b7280';
    setTimeout(() => document.getElementById('custPhone2').focus(), 100);
  }
}

function validatePhone2() {
  const phone = document.getElementById('custPhone2').value.trim();
  const hint = document.getElementById('phoneHint2');
  const input = document.getElementById('custPhone2');
  if (!hint || !input) return;
  if (phone.length === 0) {
    hint.style.display = 'none';
    input.style.borderColor = 'var(--border)';
  } else if (phone.length < 10) {
    hint.style.display = 'block';
    hint.textContent = 'يرجى إدخال 10 أرقام (مثلاً: 059xxxxxxx)';
    input.style.borderColor = '#ef4444';
  } else {
    hint.style.display = 'none';
    input.style.borderColor = '#10b981';
  }
}

function clearFieldError(hintId, inputId) {
  const hint = document.getElementById(hintId);
  if (hint) { hint.style.display = 'none'; hint.textContent = ''; }
  const inp = document.getElementById(inputId);
  if (inp) inp.style.borderColor = 'var(--border)';
}

function checkoutStep1Next() {
  // Clear all previous errors
  ['custName','custPhone','custCity'].forEach(id => {
    const inp = document.getElementById(id);
    if (inp) inp.style.borderColor = 'var(--border)';
  });
  ['nameHint','phoneHint','cityHint'].forEach(id => {
    const h = document.getElementById(id);
    if (h) { h.style.display = 'none'; h.textContent = ''; }
  });
  const h2 = document.getElementById('phoneHint2');
  if (h2) { h2.style.display = 'none'; h2.textContent = ''; }
  const p2 = document.getElementById('custPhone2');
  if (p2) p2.style.borderColor = 'var(--border)';

  const name = document.getElementById('custName').value.trim();
  const phone = document.getElementById('custPhone').value.trim();
  const city = document.getElementById('custCity').value.trim();
  const hint = document.getElementById('phoneHint');
  const phoneInput = document.getElementById('custPhone');
  const phone2El = document.getElementById('custPhone2');
  const phone2 = phone2El ? phone2El.value.trim() : '';
  let valid = true;

  if (!name) {
    document.getElementById('nameHint').textContent = 'يرجى إدخال الاسم';
    document.getElementById('nameHint').style.display = 'block';
    document.getElementById('custName').style.borderColor = '#ef4444';
    valid = false;
  }
  if (!phone) {
    if (hint) { hint.textContent = 'يرجى إدخال رقم الموبايل'; hint.style.display = 'block'; }
    if (phoneInput) phoneInput.style.borderColor = '#ef4444';
    valid = false;
  } else if (phone.length !== 10) {
    if (hint) { hint.textContent = 'يرجى إدخال 10 أرقام (مثلاً: 059xxxxxxx)'; hint.style.display = 'block'; }
    if (phoneInput) phoneInput.style.borderColor = '#ef4444';
    valid = false;
  }
  if (phone2 && phone2.length !== 10) {
    const h2 = document.getElementById('phoneHint2');
    if (h2) { h2.textContent = 'يرجى إدخال 10 أرقام (مثلاً: 059xxxxxxx)'; h2.style.display = 'block'; }
    if (phone2El) phone2El.style.borderColor = '#ef4444';
    valid = false;
  }
  if (!city) {
    document.getElementById('cityHint').textContent = 'يرجى إدخال المدينة';
    document.getElementById('cityHint').style.display = 'block';
    document.getElementById('custCity').style.borderColor = '#ef4444';
    valid = false;
  }
  if (!valid) return;
  currentCheckoutStep = 2;
  document.querySelectorAll('.checkout-step-panel').forEach(p => p.classList.remove('active'));
  document.getElementById('checkoutStep2').classList.add('active');
  updateStepIndicator(2);
  updateFooterForStep(2);
}


function goCheckoutBack() {
  if (currentCheckoutStep <= 1) {
    currentCheckoutStep = 0;
    setCartTabActive('items');
    renderCartItems();
    return;
  }
  currentCheckoutStep--;
  document.querySelectorAll('.checkout-step-panel').forEach(p => p.classList.remove('active'));
  document.getElementById(`checkoutStep${currentCheckoutStep}`).classList.add('active');
  updateStepIndicator(currentCheckoutStep);
  updateFooterForStep(currentCheckoutStep);
}

function goToDetails() { goToCheckout(); }

function checkout() {
  if (localStorage.getItem('mycart_store_suspended') === 'true') { showToast('المتجر موقوف حالياً ⛔', 'error'); return; }
  const name = document.getElementById('custName').value.trim();
  const phone = document.getElementById('custPhone').value.trim();
  const city = document.getElementById('custCity').value.trim();
  if (!name || !phone || !city) { showToast('يرجى إكمال البيانات', 'error'); return; }
  if (!cart.length) { showToast('السلة فارغة', 'error'); return; }
  const phone2El = document.getElementById('custPhone2');
  const phone2Wrap = document.getElementById('phone2Wrap');
  const phone2 = (phone2El && phone2Wrap && phone2Wrap.style.display !== 'none') ? phone2El.value.trim() : '';
  const zoneEl = document.getElementById('custZone');
  let zoneName = zoneEl ? zoneEl.value : '';
  const zones = loadDeliveryZones();
  let zone = zones.find(z => z.name === zoneName);
  // Auto-select first zone if none selected
  if (!zone && zones.length) {
    zoneEl.value = zones[0].name;
    zoneName = zones[0].name;
    zone = zones[0];
  }
  const delivery = zone ? zone.price : 0;
  const note = document.getElementById('cartNote') ? document.getElementById('cartNote').value.trim() : '';
  const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
  const payment = paymentMethod ? paymentMethod.value : 'cod';
  customer = { name, phone, phone2, city, address: document.getElementById('custAddress').value.trim(), zone: zoneName };
  try { localStorage.setItem('mycart_customer', JSON.stringify(customer)); } catch(e) {}
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const discount = appliedDiscount > 0 ? Math.round(subtotal * appliedDiscount / 100) : 0;
  const total = subtotal - discount + delivery;
  const order = { id: Date.now(), date: new Date().toLocaleString('ar-SA'), items: [...cart], subtotal, discount, delivery, deliveryZone: zoneName, total, customer: {...customer}, payment };
  if (note) order.note = note;
  if (appliedDiscount > 0) order.discountCode = document.getElementById('discountCode').value.trim().toUpperCase();
  try {
    const existingOrders = JSON.parse(localStorage.getItem('mycart_orders') || '[]');
    orders = existingOrders;
  } catch(e) {}
  orders.unshift(order);
  try { localStorage.setItem('mycart_orders', JSON.stringify(orders)); } catch(e) {}
  // Fee tracking for free plan
  var plan = localStorage.getItem('mycart_subscription_plan') || 'free';
  if (plan === 'free') {
    var cnt = parseInt(localStorage.getItem('mycart_free_orders_count') || '0', 10) + 1;
    localStorage.setItem('mycart_free_orders_count', cnt.toString());
    var s = getAgencySettings();
    var limit = parseFloat(s.feeLimit) || 100;
    var fee = parseFloat(s.freeFee) || 2;
    if (cnt * fee >= limit) {
      if (!localStorage.getItem('mycart_fee_threshold_date')) localStorage.setItem('mycart_fee_threshold_date', new Date(Date.now() + 7*86400000).toISOString());
    }
  }
  cart = [];
  appliedDiscount = 0;
  document.getElementById('discountCode').value = '';
  document.getElementById('discountMsg').textContent = '';
  document.getElementById('cartNote').value = '';
  saveCart();
  renderCartItems();
  updateCartBadge();
  playSound('checkout');
  // Notify store owner via WhatsApp
  sendOwnerWhatsAppNotification(order);
  renderThankYouInCart(order);
}

// ===== THANK YOU INSIDE CART SHEET =====
function renderThankYouInCart(order) {
  document.getElementById('thankYouContent').innerHTML = `
    <div class="ty-confetti-container" id="tyConfettiContainer"></div>
    <div class="ty-checkout">
      <div class="ty-checkout-icon"><i class="fa-solid fa-check"></i></div>
      <h3 style="font-size:1.1rem">تم استلام طلبك بنجاح! 🎉</h3>
      <p style="font-size:.78rem;line-height:1.5;padding:0 8px">سيتم تجهيز طلبك وشحنه في أقرب وقت ممكن.</p>
    </div>
    <div class="ty-info-card">
      <div class="ty-info-row"><span>رقم الطلب</span><span dir="ltr" style="font-weight:700;font-size:.9rem">ORD-${String(order.id).slice(-6)}</span></div>
      <div class="ty-info-row"><span>المبلغ الإجمالي</span><span style="font-weight:900;color:var(--accent);font-size:1rem">${CURRENCY}${order.total.toFixed(2)}</span></div>
    </div>
    <div style="display:flex;flex-direction:column;gap:8px;margin-top:14px">
      <a href="https://wa.me/?text=${encodeURIComponent('📦 استفسار عن الطلب #ORD-' + String(order.id).slice(-6) + '\n\n👤 ' + order.customer.name + '\n📱 ' + order.customer.phone)}" target="_blank" style="width:100%;padding:13px;border:none;border-radius:12px;background:#25D366;color:#fff;font-weight:800;font-size:.9rem;cursor:pointer;font-family:inherit;display:flex;align-items:center;justify-content:center;gap:8px;text-decoration:none"><i class="fa-brands fa-whatsapp" style="font-size:1.15rem"></i> تواصل عبر الواتساب 💬</a>
      <div style="display:flex;gap:8px">
        <button onclick="closeCartSheet()" style="flex:1;padding:13px;border:1.5px solid var(--border);border-radius:12px;background:var(--card);color:var(--text);font-weight:700;font-size:.85rem;cursor:pointer;font-family:inherit;display:flex;align-items:center;justify-content:center;gap:6px"><i class="fa-solid fa-store"></i> العودة للتسوق</button>
        <button onclick="closeCartSheet();setTimeout(function(){openCartSheet();switchCartTab('history')},300)" style="flex:1;padding:13px;border:1.5px solid var(--border);border-radius:12px;background:var(--card);color:var(--text);font-weight:700;font-size:.85rem;cursor:pointer;font-family:inherit;display:flex;align-items:center;justify-content:center;gap:6px"><i class="fa-solid fa-box"></i> تتبع طلباتي</button>
      </div>
    </div>
  `;
  // Show thank you view, hide checkout view and footer
  document.querySelectorAll('.sheet-view').forEach(v => v.classList.remove('active'));
  document.getElementById('cartThankYou').classList.add('active');
  // Hide tabs & footer
  const tabs = document.querySelector('.sheet-tabs');
  if (tabs) tabs.style.display = 'none';
  const footer = document.getElementById('cartSummary');
  if (footer) footer.style.display = 'none';
  // Celebratory effects
  spawnTyConfetti();
  setTimeout(spawnTySparkles, 300);
}

function spawnTyConfetti() {
  const container = document.getElementById('tyConfettiContainer');
  if (!container) return;
  container.innerHTML = '';
  const colors = ['#ef4444','#f97316','#eab308','#22c55e','#3b82f6','#a855f7','#ec4899','#14b8a6'];
  for (let i = 0; i < 40; i++) {
    const piece = document.createElement('div');
    piece.className = 'ty-confetti-piece';
    const left = Math.random() * 100;
    const delay = Math.random() * 2;
    const duration = 2 + Math.random() * 2;
    const size = 4 + Math.random() * 6;
    piece.style.cssText = 'left:' + left + '%;width:' + size + 'px;height:' + size + 'px;background:' + colors[Math.floor(Math.random() * colors.length)] + ';animation-duration:' + duration + 's;animation-delay:' + delay + 's';
    container.appendChild(piece);
  }
}

function spawnTySparkles() {
  const container = document.getElementById('thankYouContent');
  if (!container) return;
  const emojis = ['✨','🎉','🎊','💫','⭐','🌟'];
  for (let i = 0; i < 8; i++) {
    const el = document.createElement('div');
    el.className = 'ty-sparkle';
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left = (10 + Math.random() * 80) + '%';
    el.style.top = (10 + Math.random() * 50) + '%';
    el.style.animationDelay = (Math.random() * 1.5) + 's';
    container.appendChild(el);
    setTimeout(function(e) { e.remove(); }, 3000, el);
  }
}

// ===== CART UTILITY FUNCTIONS =====
function populateZones() {
  const sel = document.getElementById('custZone');
  const grid = document.getElementById('zoneCardsGrid');
  if (!sel) return;
  const zones = loadDeliveryZones();

  // Rebuild hidden select
  const current = sel.value;
  sel.innerHTML = '<option value="">اختر منطقة التوصيل</option>';
  zones.forEach(z => {
    const opt = document.createElement('option');
    opt.value = z.name;
    opt.textContent = `${z.name} — ${CURRENCY}${z.price}`;
    sel.appendChild(opt);
  });
  if (current) sel.value = current;

  // Render cards
  if (!grid) return;
  if (!zones.length) {
    grid.innerHTML = '<div class="zone-no-zones"><i class="fa-solid fa-map-location-dot" style="font-size:1.4rem;display:block;margin-bottom:6px;opacity:.4"></i>لا توجد مناطق توصيل محددة</div>';
    return;
  }
  // Auto-select first zone if none selected
  if (!zones.find(z => z.name === current) && zones.length) {
    sel.value = zones[0].name;
  }
  grid.innerHTML = zones.map(z => `
    <div class="zone-card ${sel.value === z.name ? 'selected' : ''}" onclick="selectZoneCard('${z.name}', this)">
      <div class="zone-card-icon">🚚</div>
      <div class="zone-card-name">${z.name}</div>
      ${z.price === 0
        ? '<div class="zone-card-free">مجاني 🎁</div>'
        : `<div class="zone-card-price">${CURRENCY}${z.price}</div>`}
    </div>
  `).join('');
}

function selectZoneCard(zoneName, el) {
  // Update all cards
  document.querySelectorAll('.zone-card').forEach(c => c.classList.remove('selected'));
  if (el) el.classList.add('selected');
  // Update hidden select
  const sel = document.getElementById('custZone');
  if (sel) {
    sel.value = zoneName;
    sel.dispatchEvent(new Event('change'));
  }
  renderCartItems();
  renderStep2Summary();
}

function toggleLocationShare() {
  const card = document.getElementById('locationToggleCard');
  const cb = document.getElementById('sendLocation');
  const statusEl = document.getElementById('locationStatus');
  const isActive = card.classList.contains('active');

  if (!isActive) {
    // Try to get location
    if (navigator.geolocation) {
      if (statusEl) statusEl.textContent = '⏳ جاري تحديد موقعك...';
      navigator.geolocation.getCurrentPosition(
        pos => {
          card.classList.add('active');
          if (cb) cb.checked = true;
          const lat = pos.coords.latitude.toFixed(4);
          const lng = pos.coords.longitude.toFixed(4);
          if (statusEl) statusEl.textContent = `📍 ${lat}, ${lng}`;
        },
        () => {
          if (statusEl) statusEl.textContent = '⚠️ تعذر الحصول على الموقع';
          card.classList.remove('active');
          if (cb) cb.checked = false;
        }
      );
    } else {
      if (statusEl) statusEl.textContent = '⚠️ المتصفح لا يدعم تحديد الموقع';
    }
  } else {
    card.classList.remove('active');
    if (cb) cb.checked = false;
    if (statusEl) statusEl.textContent = 'اضغط لتحديد موقعك تلقائياً';
  }
}


function addToCart(p, variant, options) {
  const isOptionMode = options && options.length;
  const vLabel = isOptionMode ? options.map(o => o.v).join(' - ') : (variant ? (variant.attrs || []).map(a => a.v).filter(Boolean).join(' - ') : '');
  const vKey = vLabel;
  const existing = cart.find(item => item.id === p.id && (item.variant || '') === vKey);
  if (existing) existing.qty += 1;
  else {
    const basePrice = isWholesale ? Math.round(p.price * 0.85) : p.price;
    let optPrice = 0;
    if (isOptionMode && p.options) {
      optPrice = options.reduce((sum, o) => {
        const opt = p.options.find(op => op.name === o.n);
        if (!opt) return sum;
        const val = opt.values.find(v => v.value === o.v);
        return sum + (val ? val.price : 0);
      }, 0);
    }
    const variantPrice = variant && variant.price ? variant.price : 0;
    const extraPrice = isOptionMode ? optPrice : variantPrice;
    const variantImages = isOptionMode ? [] : (variant ? variant.images || [] : []);
    const firstImg = isOptionMode ? '' : (variantImages[0] || getProductImages(p)[0]);
    cart.push({
      id: p.id,
      name: p.name,
      variant: vKey,
      variantData: isOptionMode ? { attrs: options.map(o => ({ n: o.n, v: o.v })) } : (variant ? { attrs: variant.attrs, images: variant.images } : undefined),
      price: basePrice + extraPrice,
      image: firstImg || getProductImages(p)[0],
      qty: 1
    });
  }
  saveCart();
  updateCartBadge();
}

function removeFromCart(id, variant) {
  cart = cart.filter(item => !(item.id === id && (item.variant || '') === (variant || '')));
  saveCart();
  renderCartItems();
  updateCartBadge();
  playSound('remove');
}

function changeCartQty(id, delta, variant) {
  const item = cart.find(x => x.id === id && (x.variant || '') === (variant || ''));
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(id, variant); return; }
  saveCart();
  renderCartItems();
  updateCartBadge();
}

function saveCart() {
  try { localStorage.setItem('mycart_cart', JSON.stringify(cart)); } catch(e) {}
  document.getElementById('cartCountTab').textContent = cart.reduce((a, b) => a + b.qty, 0);
}

function renderCartItems() {
  const list = document.getElementById('cartItemsList');
  if (!cart.length) {
    list.innerHTML = '<div class="empty-state"><i class="fa-solid fa-bag-shopping"></i><p>السلة فارغة</p></div>';
    document.getElementById('cartSummary').style.display = 'none';
    return;
  }
  // Only show footer if on cart items tab
  if (currentCheckoutStep === 0) {
    document.getElementById('cartSummary').style.display = 'block';
    const navBtns = document.getElementById('checkoutNavBtns');
    navBtns.innerHTML = `<button class="checkout-btn" onclick="goToCheckout()"><i class="fa-solid fa-arrow-left"></i> التالي</button>`;
  }
  list.innerHTML = cart.map(item => {
    const escV = (item.variant || '').replace(/'/g, "\\'");
    return `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-info">
        <h4>${item.name}${item.variant ? ` <span style="font-weight:400;color:var(--text-muted);font-size:.75rem">${variantSwatchHtml(item.variantData)}${item.variant}</span>` : ''}</h4>
        <div class="item-price">${CURRENCY}${item.price}</div>
        <div class="cart-item-qty">
          <button onclick="changeCartQty(${item.id},-1,'${escV}')">-</button>
          <span>${item.qty}</span>
          <button onclick="changeCartQty(${item.id},1,'${escV}')">+</button>
        </div>
      </div>
      <div class="cart-item-remove" onclick="removeFromCart(${item.id},'${escV}')"><i class="fa-solid fa-trash-can"></i></div>
    </div>`;
  }).join('');
  const total = cart.reduce((sum, item) => sum + getVolumeDiscountedPrice(item.price, item.qty), 0);
  // Free Shipping Progress Bar calculation
  const mData = JSON.parse(localStorage.getItem('mycart_marketing')) || {};
  const isFreeShipActive = mData.freeShipping?.show || false;
  const goal = mData.freeShipping?.goal || mData.freeShippingGoal || 300;
  const progressText = document.getElementById('freeShippingProgressText');
  const progressGoal = document.getElementById('freeShippingGoalText');
  const progressBar = document.getElementById('freeShippingProgressBar');
  const progressContainer = document.getElementById('freeShippingProgressContainer');
  if (progressContainer) {
    if (isFreeShipActive) {
      progressContainer.style.display = 'block';
      if (progressGoal) progressGoal.textContent = `${CURRENCY}${goal}`;
      const pct = Math.min(100, (total / goal) * 100);
      if (progressBar) progressBar.style.width = `${pct}%`;
      if (progressText) {
        if (total >= goal) {
          progressText.innerHTML = '🎉 مبروك! حصلت على شحن مجاني للطلب';
          if (progressBar) progressBar.style.background = '#10b981';
        } else {
          const remaining = goal - total;
          progressText.innerHTML = `أضف بقيمة <strong>${CURRENCY}${remaining}</strong> إضافية للشحن المجاني`;
          if (progressBar) progressBar.style.background = 'var(--accent)';
        }
      }
    } else {
      progressContainer.style.display = 'none';
    }
  }
  const discount = appliedDiscount > 0 ? Math.round(total * appliedDiscount / 100) : 0;
  const zoneEl = document.getElementById('custZone');
  const zoneName = zoneEl ? zoneEl.value : '';
  const zones = loadDeliveryZones();
  const zone = zones.find(z => z.name === zoneName);
  let delivery = zone ? zone.price : 0;
  if (isFreeShipActive && total >= goal) {
    delivery = 0;
  }
  const final = total - discount + delivery;
  const discRow = document.getElementById('discountRow');
  const discAmt = document.getElementById('cartDiscount');
  if (discount > 0) { discRow.style.display = 'flex'; discAmt.textContent = `-${CURRENCY}${discount.toFixed(2)}`; }
  else discRow.style.display = 'none';
  const delRow = document.getElementById('deliveryRow');
  if (delivery > 0) { delRow.style.display = 'flex'; document.getElementById('cartDelivery').textContent = `${CURRENCY}${delivery.toFixed(2)}`; }
  else delRow.style.display = 'none';
  document.getElementById('cartTotal').textContent = `${CURRENCY}${final.toFixed(2)}`;
}

function updateCartBadge() {
  const count = cart.reduce((a, b) => a + b.qty, 0);
  const badge = document.getElementById('cartBadge');
  if (count > 0) { badge.style.display = 'flex'; badge.textContent = count; }
  else badge.style.display = 'none';
  document.getElementById('cartCountTab').textContent = count;
}


function applyDiscountCode() {
  const code = document.getElementById('discountCode').value.trim().toUpperCase();
  const msg = document.getElementById('discountMsg');
  if (!code) { msg.textContent = ''; msg.style.color = ''; appliedDiscount = 0; renderCartItems(); return; }
  const stored = localStorage.getItem('mycart_discount_codes');
  let codes = [];
  if (stored) { try { codes = JSON.parse(stored); } catch(e) {} }
  const found = codes.find(c => c.code === code);
  if (found) {
    // Check usage limit
    if (found.limit && found.limit > 0 && (found.uses || 0) >= found.limit) {
      appliedDiscount = 0;
      msg.textContent = '❌ تم استنفاذ استخدامات هذا الكود';
      msg.style.color = '#ef4444';
      renderCartItems();
      return;
    }
    // Check min order
    const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
    if (found.minOrder && subtotal < found.minOrder) {
      appliedDiscount = 0;
      msg.textContent = `❌ الحد الأدنى للطلب لاستخدام هذا الكود هو ${CURRENCY}${found.minOrder}`;
      msg.style.color = '#ef4444';
      renderCartItems();
      return;
    }
    appliedDiscount = found.percent;
    msg.textContent = `✅ تم تطبيق الخصم ${found.percent}%`;
    msg.style.color = '#16a34a';
    // Track usage
    found.uses = (found.uses || 0) + 1;
    try { localStorage.setItem('mycart_discount_codes', JSON.stringify(codes)); } catch(e) {}
    renderCartItems();
  } else {
    appliedDiscount = 0;
    msg.textContent = '❌ كود خصم غير صالح';
    msg.style.color = '#ef4444';
    renderCartItems();
  }
}


function renderOrders() {
  const list = document.getElementById('orderHistoryList');
  if (!orders.length) {
    list.innerHTML = '<div class="empty-state"><i class="fa-solid fa-receipt"></i><p>لا يوجد طلبات سابقة</p></div>';
    return;
  }
  list.innerHTML = orders.slice().reverse().map(o => `
    <div class="order-card" onclick="showOrderDetail(${o.id})" style="cursor:pointer">
      <div class="order-header">
        <span>📅 ${o.date}</span>
        <span style="font-size:.65rem;background:#ef4444;color:#fff;padding:2px 6px;border-radius:4px;font-weight:700">#${String(o.id).slice(-6)}</span>
      </div>
      <div class="order-items">${o.items.map(i => `${i.name}${i.variant ? ` (${variantSwatchHtml(i.variantData)}${i.variant})` : ''} × ${i.qty}`).join(' | ')}</div>
      <div class="order-total">${CURRENCY}${o.total.toFixed(2)}${o.discount ? `<span style="font-size:.7rem;color:#16a34a;margin-right:6px">(-${o.discount}%)</span>` : ''}</div>
    </div>
  `).join('');
}

function showOrderDetail(id) {
  location.hash = '#order/' + id;
}

function renderOrderPage(id) {
  const o = orders.find(x => x.id === id);
  if (!o) { location.hash = '#home'; return; }
  document.getElementById('orderPageTitle').textContent = `طلب #${String(o.id).slice(-6)}`;
  document.getElementById('orderPageBody').innerHTML = `
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:20px;padding-bottom:16px;border-bottom:1px solid var(--border)">
      <span style="background:#ef4444;color:#fff;padding:4px 12px;border-radius:6px;font-weight:800;font-size:.9rem">#${String(o.id).slice(-6)}</span>
      <span style="color:var(--text-muted);font-size:.85rem"><i class="fa-regular fa-calendar"></i> ${o.date}</span>
      <span style="margin-right:auto;padding:4px 12px;border-radius:999px;font-size:.75rem;font-weight:700;background:${o._status === 'done' ? '#dcfce7' : '#fef3c7'};color:${o._status === 'done' ? '#166534' : '#92400e'}">${o._status === 'done' ? '✓ مكتمل' : '🕐 جديد'}</span>
    </div>
    <div style="background:#f8fafc;border-radius:10px;padding:14px;margin-bottom:16px">
      <h4 style="font-size:.85rem;font-weight:700;margin-bottom:10px"><i class="fa-solid fa-user"></i> معلومات العميل</h4>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:.85rem">
        <div><span style="color:var(--text-muted)">الاسم</span><br><strong id="opName">${o.customer?.name || '—'}</strong> ${o.customer?.name ? `<button onclick="copyText(document.getElementById('opName').textContent,'الاسم')" style="background:none;border:none;color:var(--accent);cursor:pointer;font-size:.75rem;margin-right:4px"><i class="fa-regular fa-copy"></i></button>` : ''}</div>
        <div><span style="color:var(--text-muted)">الهاتف</span><br><strong dir="ltr" style="display:inline-block" id="opPhone">${o.customer?.phone || '—'}</strong> ${o.customer?.phone ? `<button onclick="copyText(document.getElementById('opPhone').textContent,'رقم الهاتف')" style="background:none;border:none;color:var(--accent);cursor:pointer;font-size:.75rem"><i class="fa-regular fa-copy"></i></button>` : ''}</div>
        <div><span style="color:var(--text-muted)">المدينة</span><br><strong id="opCity">${o.customer?.city || '—'}</strong> ${o.customer?.city ? `<button onclick="copyText(document.getElementById('opCity').textContent,'المدينة')" style="background:none;border:none;color:var(--accent);cursor:pointer;font-size:.75rem"><i class="fa-regular fa-copy"></i></button>` : ''}</div>
        <div><span style="color:var(--text-muted)">العنوان</span><br><strong id="opAddr">${o.customer?.address || '—'}</strong> ${o.customer?.address ? `<button onclick="copyText(document.getElementById('opAddr').textContent,'العنوان')" style="background:none;border:none;color:var(--accent);cursor:pointer;font-size:.75rem"><i class="fa-regular fa-copy"></i></button>` : ''}</div>
        ${o.deliveryZone ? `<div><span style="color:var(--text-muted)">منطقة التوصيل</span><br><strong>${o.deliveryZone}</strong></div>` : ''}
      </div>
      ${o.note ? `<div style="margin-top:10px;padding-top:10px;border-top:1px dashed var(--border)"><span style="color:var(--text-muted);font-size:.8rem">ملاحظة العميل</span><p style="font-size:.85rem;font-weight:600;margin-top:4px">${o.note}</p></div>` : ''}
    </div>
    <h4 style="font-size:.85rem;font-weight:700;margin-bottom:10px"><i class="fa-solid fa-box"></i> المنتجات</h4>
    <div style="margin-bottom:16px">
      ${o.items.map(item => `
        <div style="display:flex;align-items:center;gap:10px;padding:8px 10px;background:var(--bg);border-radius:8px;margin-bottom:4px">
          <img src="${item.image || 'https://placehold.co/40x40/e2e8f0/64748b?text=' + encodeURIComponent(item.name.slice(0,2))}" style="width:36px;height:36px;border-radius:6px;object-fit:cover;flex-shrink:0;background:#e2e8f0">
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:.85rem">${item.name}${item.variant ? ` <span style="font-weight:400;color:var(--text-muted);font-size:.75rem">${variantSwatchHtml(item.variantData)}${item.variant}</span>` : ''}</div>
            <div style="font-size:.75rem;color:var(--text-muted)">${CURRENCY}${item.price} × ${item.qty}</div>
          </div>
          <div style="font-weight:800;font-size:.9rem;color:var(--accent);flex-shrink:0">${CURRENCY}${(item.price * item.qty).toFixed(2)}</div>
        </div>
      `).join('')}
    </div>
    <div style="background:#f8fafc;border-radius:10px;padding:14px;margin-bottom:16px">
      <div style="display:flex;justify-content:space-between;font-size:.85rem;padding:3px 0"><span>المجموع الفرعي</span><span>${CURRENCY}${o.subtotal?.toFixed(2) || ''}</span></div>
      ${o.discount ? `<div style="display:flex;justify-content:space-between;font-size:.85rem;padding:3px 0;color:#16a34a"><span>الخصم (${o.discount}%)</span><span>-${CURRENCY}${((o.subtotal || 0) - (o.total - (o.delivery || 0))).toFixed(2)}</span></div>` : ''}
      ${o.delivery ? `<div style="display:flex;justify-content:space-between;font-size:.85rem;padding:3px 0"><span>التوصيل ${o.deliveryZone ? `(${o.deliveryZone})` : ''}</span><span>${CURRENCY}${o.delivery.toFixed(2)}</span></div>` : ''}
      <div style="display:flex;justify-content:space-between;font-size:1.1rem;font-weight:800;padding:6px 0 0;border-top:1px solid var(--border);margin-top:4px;color:var(--accent)"><span>الإجمالي</span><span>${CURRENCY}${(o.total || 0).toFixed(2)}</span></div>
    </div>
    <div style="display:flex;gap:8px">
      <button onclick="printOrderData(orders.find(x => x.id === ${o.id}), CURRENCY)" style="flex:1;padding:12px;border:none;border-radius:10px;background:var(--accent);color:#fff;font-weight:700;cursor:pointer;font-family:inherit;font-size:.9rem;display:flex;align-items:center;justify-content:center;gap:6px"><i class="fa-solid fa-print"></i> طباعة</button>
      <button onclick="inquiryOrder(${o.id})" style="flex:1;padding:12px;border:none;border-radius:10px;background:#25D366;color:#fff;font-weight:700;cursor:pointer;font-family:inherit;font-size:.9rem;display:flex;align-items:center;justify-content:center;gap:8px"><i class="fa-brands fa-whatsapp" style="font-size:1.1rem"></i> استفسار</button>
    </div>
  `;
  showPage('orderPage');
}

function inquiryOrder(id) {
  const o = orders.find(x => x.id === id);
  if (!o) return;
  const msg = encodeURIComponent(`📦 استفسار عن الطلب #${String(o.id).slice(-6)}\n\n👤 ${o.customer.name}\n📱 ${o.customer.phone}`);
  window.open(`https://wa.me/?text=${msg}`, '_blank');
}

function toggleMerchant() {
  document.getElementById('merchantBody').classList.toggle('show');
  document.getElementById('merchantArrow').style.transform = document.getElementById('merchantBody').classList.contains('show') ? 'rotate(180deg)' : '';
}

function loginMerchant() {
  const code = document.getElementById('merchantCode').value.trim();
  if (code === ADMIN_CODE) {
    closeCartSheet();
    openAdmin();
    return;
  }
  if (code === WHOLESALE_CODE) {
    isWholesale = true;
    try { localStorage.setItem('mycart_wholesale', 'true'); } catch(e) {}
    applyWholesale();
    document.getElementById('merchantLoggedIn').style.display = 'block';
    document.getElementById('merchantCode').style.display = 'none';
    document.querySelector('#merchantBody > button').style.display = 'none';
    const _wb1 = document.getElementById('wholesaleBadge'); if (_wb1) _wb1.style.display = 'inline-block';
    showToast('✅ تم تسجيل الدخول كتاجر جملة', 'success');
  } else {
    document.getElementById('traderExtra').classList.add('show');
    showToast('⚠️ كود غير صحيح، يمكنك التسجيل كتاجر جديد', 'error');
  }
}

function registerMerchant() {
  const city = document.getElementById('traderCity').value.trim();
  const addr = document.getElementById('traderAddr').value.trim();
  if (!city || !addr) { showToast('يرجى تعبئة جميع الحقول', 'error'); return; }
  isWholesale = true;
  try { localStorage.setItem('mycart_wholesale', 'true'); } catch(e) {}
  applyWholesale();
  document.getElementById('merchantLoggedIn').style.display = 'block';
  const _wb2 = document.getElementById('wholesaleBadge'); if (_wb2) _wb2.style.display = 'inline-block';
  showToast('✅ تم تسجيل طلبك، سنتواصل معك قريباً', 'success');
  const msg = encodeURIComponent(`👑 طلب تسجيل تاجر جديد:\nالمدينة: ${city}\nالعنوان: ${addr}`);
  window.open(`https://wa.me/?text=${msg}`, '_blank');
}

function applyWholesale() {
  renderProducts(getFilteredProducts());
  if (currentProduct) {
    const p = products.find(x => x.id === currentProduct.id);
    if (p) document.getElementById('detailPrice').textContent = `${CURRENCY}${Math.round(p.price * 0.85)}`;
  }
  cart.forEach(item => {
    const p = products.find(x => x.id === item.id);
    if (p) item.price = Math.round(p.price * 0.85);
  });
  saveCart();
  renderCartItems();
  // Update merchant section UI
  const mBody = document.getElementById('merchantBody');
  if (mBody) {
    document.getElementById('merchantLoggedIn').style.display = 'block';
    document.getElementById('merchantCode').style.display = 'none';
    const btn = mBody.querySelector('button');
    if (btn) btn.style.display = 'none';
  }
}

function loadCustomerForm() {
  if (customer.name) document.getElementById('custName').value = customer.name;
  if (customer.phone) { document.getElementById('custPhone').value = customer.phone; validatePhone(); }
  if (customer.phone2 && customer.phone2.length === 10) {
    const wrap = document.getElementById('phone2Wrap');
    const p2 = document.getElementById('custPhone2');
    const icon = document.getElementById('addPhone2Icon');
    const btn = document.getElementById('addPhone2Btn');
    if (wrap) wrap.style.display = 'block';
    if (p2) { p2.value = customer.phone2; p2.style.borderColor = '#10b981'; }
    if (icon) icon.className = 'fa-solid fa-xmark';
    if (btn) btn.style.color = '#6b7280';
  }
  if (customer.city) document.getElementById('custCity').value = customer.city;
  if (customer.address) document.getElementById('custAddress').value = customer.address;
}

// Use event delegation for sendLocation since it's inside a dynamically shown panel
document.addEventListener('change', function(e) {
  if (e.target && e.target.id === 'sendLocation') {
    if (e.target.checked && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => { const el = document.getElementById('locationStatus'); if(el) el.textContent = `📍 ${pos.coords.latitude.toFixed(4)}, ${pos.coords.longitude.toFixed(4)}`; },
        () => { const el = document.getElementById('locationStatus'); if(el) el.textContent = '⚠️ تعذر الحصول على الموقع'; }
      );
    } else { const el = document.getElementById('locationStatus'); if(el) el.textContent = ''; }
  }
});


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

function closeModal() { document.getElementById('backdropModal').classList.remove('show'); }

function openImageViewer(src) { document.getElementById('viewerImage').src = src; document.getElementById('image-viewer').classList.add('show'); }
function closeImageViewer() { document.getElementById('image-viewer').classList.remove('show'); }

function showPage(pageId) {
  var el = document.getElementById(pageId);
  if (!el) return;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  if (pageId === 'homePage') {
    document.querySelector('.nav-item').classList.add('active');
    if (location.hash !== '#home') location.hash = '#home';
  } else if (pageId !== 'orderPage') {
    // For product detail page, update the hash accordingly
    if (pageId === 'detailPage') { /* hash handled by caller */ }
  }
}

function handleRoute() {
  const hash = location.hash || '#home';
  if (hash.startsWith('#product/')) {
    const id = parseInt(hash.split('/')[1]);
    if (id) { stopFeatAutoScroll(); openDetail(id, true); }
  } else if (hash.startsWith('#order/')) {
    const id = parseInt(hash.split('/')[1]);
    if (id) { stopFeatAutoScroll(); renderOrderPage(id); }
  } else {
    stopLiveViewersTicker(); // hide counter when leaving detail
    showPage('homePage');
    setTimeout(startFeatAutoScroll, 300);
  }
}

if (document.getElementById('homePage')) window.addEventListener('hashchange', handleRoute);

function showLogin() {
  // If already admin logged in, open admin panel directly
  if (localStorage.getItem('mycart_admin_logged') === 'true') {
    document.getElementById('adminOverlay').classList.add('show');
    document.body.style.overflow = 'hidden';
    adminRefreshAll();
    return;
  }
  document.getElementById('login-overlay').classList.add('show');
  document.getElementById('loginCode').value = '';
  document.getElementById('loginError').style.display = 'none';
  document.getElementById('loginExtraFields').classList.remove('show');
}

function closeLogin() { document.getElementById('login-overlay').classList.remove('show'); }

function submitLogin() {
  const code = document.getElementById('loginCode').value.trim();
  if (code === ADMIN_CODE) {
    closeLogin();
    openAdmin();
    return;
  }
  if (code === WHOLESALE_CODE) {
    isWholesale = true;
    try { localStorage.setItem('mycart_wholesale', 'true'); } catch(e) {}
    applyWholesale();
    const _wb3 = document.getElementById('wholesaleBadge'); if (_wb3) _wb3.style.display = 'inline-block';
    closeLogin();
    showToast('✅ تم تسجيل الدخول كتاجر جملة', 'success');
  } else if (code.length >= 3) {
    document.getElementById('loginExtraFields').classList.add('show');
    document.getElementById('loginError').style.display = 'none';
  } else {
    document.getElementById('loginError').style.display = 'block';
  }
}

var fbBtn = document.getElementById('fbBtn');
if (fbBtn) fbBtn.addEventListener('click', function(e){ e.preventDefault(); showToast('شارك المتجر على فيسبوك', 'info'); });
var waBtn = document.getElementById('waBtn');
if (waBtn) waBtn.addEventListener('click', function(e){
  e.preventDefault();
  window.open('https://wa.me/?text='+encodeURIComponent('🛍 تسوق من متجري!\n'), '_blank');
});

(function loadVisuals() {
  const savedLogo = localStorage.getItem('mycart_logo');
  const logoEl = document.getElementById('storeLogo');
  if (savedLogo && logoEl) {
    logoEl.src = savedLogo;
  }
  const savedBg = localStorage.getItem('mycart_bg');
  const headerEl = document.getElementById('header');
  if (savedBg && headerEl) {
    headerEl.style.setProperty('--header-bg', `url(${savedBg})`);
    headerEl.classList.add('has-bg');
  } else if (headerEl) {
    headerEl.style.removeProperty('--header-bg');
    headerEl.classList.remove('has-bg');
  }
})();

var bdModal = document.getElementById('backdropModal');
if (bdModal) bdModal.addEventListener('click', function(e) { if (e.target === this) closeModal(); });
var imgViewer = document.getElementById('image-viewer');
if (imgViewer) imgViewer.addEventListener('click', function(e) { if (e.target === this) closeImageViewer(); });

// ===== ADMIN PANEL =====
function openAdmin() {
  try { localStorage.setItem('mycart_admin_logged', 'true'); } catch(e) {}
  // Auto-enable wholesale for admin
  isWholesale = true;
  try { localStorage.setItem('mycart_wholesale', 'true'); } catch(e) {}
  applyWholesale();
  const _wb4 = document.getElementById('wholesaleBadge'); if (_wb4) _wb4.style.display = 'inline-block';
  document.getElementById('adminOverlay').classList.add('show');
  document.body.style.overflow = 'hidden';
  adminRefreshAll();
  // Update nav button
  const loginItem = document.getElementById('loginNavItem');
  if (loginItem) {
    loginItem.innerHTML = '<i class="fa-solid fa-sliders"></i><span>لوحة تحكم</span>';
    loginItem.onclick = function() { document.getElementById('adminOverlay').classList.add('show'); document.body.style.overflow = 'hidden'; adminRefreshAll(); };
  }
}

function closeAdmin() {
  document.getElementById('adminOverlay').classList.remove('show');
  document.body.style.overflow = '';
  document.getElementById('adminSidebar').classList.remove('open');
}

function adminLogout() {
  localStorage.removeItem('mycart_admin_logged');
  isWholesale = false;
  localStorage.removeItem('mycart_wholesale');
  const _wb5 = document.getElementById('wholesaleBadge'); if (_wb5) _wb5.style.display = 'none';
  applyWholesale();
  closeAdmin();
  // Restore nav button
  const loginItem = document.getElementById('loginNavItem');
  if (loginItem) {
    loginItem.innerHTML = '<i class="fa-solid fa-user"></i><span>دخول</span>';
    loginItem.onclick = function() { showLogin(); };
  }
  showToast('👋 تم تسجيل الخروج', 'info');
}

function toggleAdminSidebar() {
  document.getElementById('adminSidebar').classList.toggle('open');
}

function toggleAdminMktSubMenu(e, forceOpen = false) {
  if (e) e.stopPropagation();
  const sub = document.getElementById('adminMktSubMenu');
  const chev = document.getElementById('adminMktChevron');
  if (!sub) return;
  const isOpen = sub.style.display === 'flex';
  if (isOpen && !forceOpen) {
    sub.style.display = 'none';
    if (chev) chev.style.transform = 'rotate(0deg)';
  } else {
    sub.style.display = 'flex';
    if (chev) chev.style.transform = 'rotate(180deg)';
  }
}

function switchAdminTab(tab, subTab = '') {
  const tabMap = ['dashboard','orders','products','categories','addProduct','settings','marketing','appearance'];
  const idx = tabMap.indexOf(tab);
  
  document.querySelectorAll('.admin-sidebar button').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.submenu-btn').forEach(b => b.classList.remove('active'));

  if (idx >= 0) {
    // Find the main button for sidebar by its onclick target (robust to DOM order)
    const mainBtn = Array.from(document.querySelectorAll('.admin-sidebar button')).find(b => {
      const oc = (b.getAttribute('onclick') || '');
      return oc.includes(`switchAdminTab('${tab}'`) || oc.includes(`'${tab}'`);
    });
    if (mainBtn) mainBtn.classList.add('active');
  }

  document.getElementById('admin-' + tab).classList.add('active');
  const titles = { dashboard:'الإحصائيات', orders:'الطلبات', products:'المنتجات', categories:'التصنيفات', addProduct:'إضافة منتج', settings:'الإعدادات', marketing:'التسويق', appearance:'المظهر والتخطيط' };
  document.getElementById('adminPageTitle').textContent = titles[tab] || tab;

  if (tab === 'dashboard') adminRenderDashboard();
  if (tab === 'orders') adminRenderOrders();
  if (tab === 'products') adminRenderProducts();
  if (tab === 'categories') adminRenderCategories();
  if (tab === 'addProduct') adminLoadForm();
  if (tab === 'settings') adminLoadSettings();
  if (tab === 'appearance') adminRenderAppearance();
  
  if (tab === 'marketing') {
    adminRenderMarketing(subTab || 'seo');
    toggleAdminMktSubMenu(null, true);
    
    // Highlight the sub-menu button
    const targetSub = subTab || 'seo';
    document.querySelectorAll('.submenu-btn').forEach(btn => {
      if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(`'${targetSub}'`)) {
        btn.classList.add('active');
      }
    });
  } else {
    // Hide marketing sub-menu when switching to other tabs
    const sub = document.getElementById('adminMktSubMenu');
    const chev = document.getElementById('adminMktChevron');
    if (sub) sub.style.display = 'none';
    if (chev) chev.style.transform = 'rotate(0deg)';
  }

  document.getElementById('adminSidebar').classList.remove('open');
}

function adminRefreshAll() {
  adminSettings = loadAdminSettings();
  WHOLESALE_CODE = adminSettings.wholesaleCode || 'ADMIN123';
  CURRENCY = adminSettings.currency || '₪';
  products = loadProducts();
  // Auto-populate categories from products if empty
  var storedCats = localStorage.getItem('mycart_categories');
  if (!storedCats || JSON.parse(storedCats).length === 0) {
    var prodCats = [...new Set(products.filter(p => p.category).map(p => p.category))];
    if (prodCats.length) {
      try { localStorage.setItem('mycart_categories', JSON.stringify(prodCats.map(c => ({name: c, image: '', isBrand: false})))); } catch(e) {}
    }
  }
  wishlist = JSON.parse(localStorage.getItem('mycart_wishlist')) || [];
  adminRenderDashboard();
  adminRenderOrders();
  adminRenderProducts();
  adminRenderCategories();
}

function adminRenderDashboard() {
  const allOrders = JSON.parse(localStorage.getItem('mycart_orders')) || [];
  const revenue = allOrders.reduce((s, o) => s + (o.total || 0), 0);
  const customers = new Set(allOrders.map(o => o.customer?.phone)).size;
  document.getElementById('admin-dashboard').innerHTML = `
    <div class="admin-stats">
      <div class="admin-stat"><i class="fa-solid fa-box"></i><div><span>${products.length}</span><p>المنتجات</p></div></div>
      <div class="admin-stat"><i class="fa-solid fa-receipt"></i><div><span>${allOrders.length}</span><p>الطلبات</p></div></div>
      <div class="admin-stat"><i class="fa-solid fa-money-bill"></i><div><span>${CURRENCY}${revenue.toFixed(2)}</span><p>الإيرادات</p></div></div>
      <div class="admin-stat"><i class="fa-solid fa-users"></i><div><span>${customers}</span><p>العملاء</p></div></div>
    </div>
    <div style="margin-top:16px">
      <h3 style="font-size:.9rem;font-weight:700;margin-bottom:8px">المبيعات اليومية (آخر 7 أيام)</h3>
      <div style="background:var(--card);border:1px solid var(--border);border-radius:14px;padding:12px;overflow-x:auto">
        <canvas id="adminChart" height="180" style="width:100%;max-height:180px"></canvas>
      </div>
    </div>
    <div class="admin-section-title" style="margin-top:16px">آخر الطلبات</div>
    ${allOrders.slice(0,5).map((o, idx) => `
      <div class="admin-order-card" onclick="adminShowOrderDetail(${idx})" style="cursor:pointer">
        <div class="admin-order-header">
          <span class="oid">#${String(o.id).slice(-6)}</span>
          <span class="odate">${o.date || ''}</span>
          <span class="ostatus ${o._status === 'done' ? 'done' : 'pending'}">${o._status === 'done' ? 'مكتمل' : 'جديد'}</span>
        </div>
        <div class="admin-order-body"><div class="oinfo"><i class="fa-solid fa-user"></i> ${o.customer?.name || '—'} | ${o.customer?.phone || ''}</div><div class="ototal">${CURRENCY}${o.total?.toFixed(2)||'0.00'}</div></div>
      </div>
    `).join('') || '<div class="admin-empty"><i class="fa-solid fa-receipt"></i><p>لا يوجد طلبات</p></div>'}
  `;
  // Render chart
  setTimeout(adminRenderChart, 50);
}

function adminRenderChart() {
  const canvas = document.getElementById('adminChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = Math.max(rect.width, 300) * dpr;
  canvas.height = 180 * dpr;
  canvas.style.height = '180px';
  ctx.scale(dpr, dpr);
  const W = canvas.width / dpr;
  const H = 180;
  const orders = JSON.parse(localStorage.getItem('mycart_orders')) || [];
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = d.toLocaleDateString('ar-SA').split('،')[0];
    const total = orders.filter(o => o.date && o.date.includes(dateStr)).reduce((s, o) => s + (o.total || 0), 0);
    days.push({ label: d.toLocaleDateString('ar-SA', { weekday:'short' }), value: total });
  }
  const max = Math.max(...days.map(d => d.value), 1);
  const barW = Math.min(36, (W - 60) / days.length - 6);
  const gap = 6;
  const startX = 36;
  const bottomY = H - 26;
  ctx.clearRect(0, 0, W, H);
  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = bottomY - (i / 4) * (H - 46);
    ctx.beginPath(); ctx.moveTo(startX, y); ctx.lineTo(W - 10, y); ctx.stroke();
    ctx.fillStyle = '#94a3b8'; ctx.font = '9px Tajawal'; ctx.textAlign = 'right';
    ctx.fillText(`${CURRENCY}${Math.round(max * i / 4)}`, startX - 4, y + 3);
  }
  days.forEach((d, i) => {
    const x = startX + i * (barW + gap) + gap;
    const h = (d.value / max) * (H - 50);
    const y = bottomY - h;
    const grad = ctx.createLinearGradient(0, y, 0, bottomY);
    grad.addColorStop(0, '#ef4444'); grad.addColorStop(1, '#fca5a5');
    ctx.fillStyle = grad;
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(x, y, barW, h, [4, 4, 0, 0]);
    else ctx.rect(x, y, barW, h);
    ctx.fill();
    ctx.fillStyle = '#64748b'; ctx.font = '9px Tajawal'; ctx.textAlign = 'center';
    ctx.fillText(d.label, x + barW / 2, H - 6);
    if (d.value > 0) {
      ctx.fillStyle = '#1e293b'; ctx.font = 'bold 9px Tajawal';
      ctx.fillText(`${CURRENCY}${d.value}`, x + barW / 2, y - 4);
    }
  });
}

function adminRenderOrders() {
  const allOrders = JSON.parse(localStorage.getItem('mycart_orders')) || [];
  document.getElementById('adminOrderBadge').textContent = allOrders.length;
  document.getElementById('admin-orders').innerHTML = `
    <div class="admin-section-title">جميع الطلبات (${allOrders.length})</div>
    ${allOrders.length ? allOrders.map((o, i) => `
      <div class="admin-order-card" style="position:relative;padding-right:48px">
        <div style="position:absolute;right:0;top:0;bottom:0;width:44px;background:${o._status === 'done' ? '#dcfce7' : '#fef3c7'};border-radius:10px 0 0 10px;display:flex;align-items:center;justify-content:center;font-size:1.1rem;color:${o._status === 'done' ? '#166534' : '#92400e'}"><i class="fa-solid ${o._status === 'done' ? 'fa-circle-check' : 'fa-clock'}"></i></div>
        <div class="admin-order-header">
          <span class="oid">#${String(o.id).slice(-6)}</span>
          <span class="odate">${o.date || ''}</span>
          <span class="ostatus ${o._status === 'done' ? 'done' : 'pending'}">${o._status === 'done' ? 'مكتمل' : 'جديد'}</span>
        </div>
        <div class="admin-order-body">
          <div style="display:flex;flex-wrap:wrap;gap:2px 12px;font-size:.82rem;color:var(--text);margin-bottom:4px">
            <span><i class="fa-solid fa-user" style="width:14px;color:var(--accent)"></i> ${o.customer?.name || '—'}</span>
            <span><i class="fa-solid fa-phone" style="width:14px;color:var(--accent)"></i> ${o.customer?.phone || '—'}</span>
            <span><i class="fa-solid fa-location-dot" style="width:14px;color:var(--accent)"></i> ${o.customer?.city || ''} ${o.customer?.address || ''}</span>
          </div>
          <div class="oitems">${o.items?.map(i => `${i.name} × ${i.qty}`).join(' | ') || ''}</div>
          <div style="display:flex;align-items:center;justify-content:space-between;margin-top:3px">
            <div class="ototal" style="margin:0">${CURRENCY}${o.total?.toFixed(2) || '0.00'}</div>
            <div style="display:flex;gap:4px">
              <button class="admin-btn admin-btn-secondary admin-btn-sm" onclick="adminShowOrderDetail(${i})" style="background:#f1f5f9;color:var(--text);padding:3px 7px;font-size:.7rem"><i class="fa-solid fa-pen-to-square"></i></button>
              <button class="admin-btn ${o._status === 'done' ? 'admin-btn-secondary' : 'admin-btn-primary'} admin-btn-sm" onclick="adminToggleOrder(${i})" style="padding:3px 7px;font-size:.7rem">${o._status === 'done' ? '↩' : '✓'}</button>
              <button class="admin-btn admin-btn-danger admin-btn-sm" onclick="adminDeleteOrder(${i})" style="padding:3px 7px;font-size:.7rem"><i class="fa-solid fa-trash"></i></button>
            </div>
          </div>
        </div>
      </div>
    `).join('') : '<div class="admin-empty"><i class="fa-solid fa-receipt"></i><p>لا يوجد طلبات</p></div>'}
  `;
}

function adminToggleOrder(idx) {
  const o = JSON.parse(localStorage.getItem('mycart_orders')) || [];
  if (!o[idx]) return;
  o[idx]._status = o[idx]._status === 'done' ? 'pending' : 'done';
  try { localStorage.setItem('mycart_orders', JSON.stringify(o)); } catch(e) {}
  adminRefreshAll();
}

function adminDeleteOrder(idx) {
  if (!confirm('حذف الطلب؟')) return;
  const o = JSON.parse(localStorage.getItem('mycart_orders')) || [];
  o.splice(idx, 1);
  try { localStorage.setItem('mycart_orders', JSON.stringify(o)); } catch(e) {}
  adminRefreshAll();
}

function exportProductsJSON() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(products, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `products_export_${new Date().toISOString().slice(0,10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast('📥 تم تصدير كافة المنتجات بنجاح!', 'success');
}

function triggerImportProducts() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  input.onchange = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = event => {
      try {
        const imported = JSON.parse(event.target.result);
        if (Array.isArray(imported)) {
          let count = 0;
          imported.forEach(p => {
            if (p.name && p.price !== undefined) {
              if (!p.id) p.id = Date.now() + Math.floor(Math.random() * 1000);
              if (!p.createdAt) p.createdAt = new Date().toLocaleDateString('ar-EG');
              products.unshift(p);
              count++;
            }
          });
          saveProductsToLS();
          adminRenderProducts();
          showToast(`✅ تم استيراد ${count} منتج بنجاح!`, 'success');
        } else {
          showToast('⚠️ صيغة ملف JSON غير صحيحة', 'error');
        }
      } catch(err) {
        showToast('⚠️ خطأ في قراءة ملف JSON', 'error');
      }
    };
    reader.readAsText(file);
  };
  input.click();
}

function adminRenderProducts() {
  const searchQ = (document.getElementById('adminProdSearch')?.value || '').trim().toLowerCase();
  const filtered = searchQ ? products.filter(p => p.name.toLowerCase().includes(searchQ)) : products;
  document.getElementById('admin-products').innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;flex-wrap:wrap;gap:8px">
      <div class="admin-section-title" style="margin:0">إدارة المنتجات (${filtered.length})</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <button class="admin-btn admin-btn-secondary admin-btn-sm" onclick="exportProductsJSON()" title="تصدير المنتجات كملف JSON"><i class="fa-solid fa-file-export"></i> تصدير JSON</button>
        <button class="admin-btn admin-btn-secondary admin-btn-sm" onclick="triggerImportProducts()" title="استيراد منتجات من ملف JSON"><i class="fa-solid fa-file-import"></i> استيراد JSON</button>
        <button class="admin-btn admin-btn-primary admin-btn-sm" onclick="switchAdminTab('addProduct')"><i class="fa-solid fa-plus"></i> إضافة منتج جديد</button>
      </div>
    </div>
    <div style="display:flex;gap:6px;margin-bottom:12px;align-items:center">
      <input type="checkbox" id="adminSelectAllCb" onchange="adminToggleSelectAll()" style="width:16px;height:16px;accent-color:var(--accent);cursor:pointer;flex-shrink:0" ${filtered.length && document.querySelectorAll('.admin-prod-cb:checked').length === filtered.length ? 'checked' : ''}>
      <input type="text" id="adminProdSearch" placeholder="🔍 بحث في المنتجات باسم المنتج..." value="${searchQ}" oninput="adminRenderProducts()" style="flex:1;padding:8px 12px;border:1px solid var(--border);border-radius:8px;font-size:.85rem;font-family:inherit;outline:none">
      <button class="admin-btn admin-btn-danger admin-btn-sm" id="adminDelSelectedBtn" onclick="adminDeleteSelectedProducts()" style="display:${document.querySelectorAll('.admin-prod-cb:checked').length ? 'inline-flex' : 'none'};gap:4px"><i class="fa-solid fa-trash"></i> حذف المحدد</button>
    </div>
    ${filtered.length ? filtered.map((p, i) => {
      const realIdx = products.indexOf(p);
      const addedDate = p.createdAt || p.dateAdded || 'غير محدد';
      return `
      <div class="admin-prod-row" style="padding:10px 12px">
        <input type="checkbox" class="admin-prod-cb" data-idx="${realIdx}" onchange="adminToggleProdSelect()" style="width:16px;height:16px;accent-color:var(--accent);cursor:pointer;flex-shrink:0">
        <img src="${getProductImages(p)[0]}" alt="" style="width:44px;height:44px;border-radius:8px;object-fit:cover;border:1px solid var(--border)">
        <div class="admin-prod-info" style="flex:1;min-width:0">
          <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
            <strong style="font-size:.88rem">${p.name}</strong>
            ${p.brand ? `<span style="font-weight:700;color:var(--accent);font-size:.7rem;background:rgba(239,68,68,.08);padding:1px 6px;border-radius:4px">[${p.brand}]</span>` : ''}
            ${p.featured ? `<span style="font-size:.65rem;background:#fef3c7;color:#d97706;padding:1px 6px;border-radius:4px;font-weight:800">⭐ مميز</span>` : ''}
          </div>
          <div style="font-size:.72rem;color:var(--text-muted);display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:2px">
            <span style="font-weight:800;color:var(--text)">${CURRENCY}${p.price}</span>
            <span>• التصنيف: ${getProductCats(p).join('، ') || 'عام'}</span>
            ${getProductDiscount(p) ? `<span style="color:#ef4444;font-weight:700"> خصم ${getProductDiscount(p)}%</span>` : ''}
            <span style="margin-right:auto;color:#64748b;font-size:.68rem"><i class="fa-solid fa-calendar-days" style="margin-left:2px;color:#94a3b8"></i> تاريخ الإضافة: <strong>${addedDate}</strong></span>
          </div>
        </div>
        <div class="admin-prod-actions" style="display:flex;gap:4px">
          <button class="admin-btn admin-btn-secondary admin-btn-sm" onclick="adminEditProduct(${realIdx})" title="تعديل"><i class="fa-solid fa-pen"></i></button>
          <button class="admin-btn admin-btn-danger admin-btn-sm" onclick="adminDeleteProduct(${realIdx})" title="حذف"><i class="fa-solid fa-trash"></i></button>
        </div>
      </div>
    `}).join('') : '<div class="admin-empty"><i class="fa-solid fa-box"></i><p>لا توجد منتجات مطابقة للبحث</p></div>'}
  `;
  if (searchQ) document.getElementById('adminProdSearch')?.focus();
}

function adminToggleProdSelect() {
  const btn = document.getElementById('adminDelSelectedBtn');
  const checked = document.querySelectorAll('.admin-prod-cb:checked').length;
  btn.style.display = checked ? 'inline-flex' : 'none';
  btn.textContent = checked ? `🗑 حذف (${checked})` : '';
}

function adminDeleteSelectedProducts() {
  const cbs = document.querySelectorAll('.admin-prod-cb:checked');
  if (!cbs.length) return;
  if (!confirm(`حذف ${cbs.length} منتج؟`)) return;
  const indices = [...cbs].map(cb => parseInt(cb.dataset.idx)).sort((a,b) => b - a);
  indices.forEach(idx => products.splice(idx, 1));
  saveProductsToLS();
  adminRefreshAll();
}

function adminToggleSelectAll() {
  const checked = document.getElementById('adminSelectAllCb').checked;
  document.querySelectorAll('.admin-prod-cb').forEach(cb => cb.checked = checked);
  adminToggleProdSelect();
}

// ===== CATEGORIES MANAGEMENT =====
function adminRenderCategories() {
  const stored = localStorage.getItem('mycart_categories');
  let cats = [];
  if (stored) { try { cats = JSON.parse(stored); } catch(e) {} }

  const prods = (typeof products !== 'undefined' && Array.isArray(products) && products.length)
    ? products
    : (JSON.parse(localStorage.getItem('mycart_admin_products') || '[]'));

  const getCatsFn = (typeof getProductCats === 'function') ? getProductCats : function(p) {
    if (p.categories && Array.isArray(p.categories) && p.categories.length) return p.categories;
    if (p.category) return [p.category];
    return ['عام'];
  };

  const prodCatNames = [...new Set(prods.flatMap(p => getCatsFn(p)))];
  const catNamesSet = new Set(cats.map(c => c.name));
  let addedNew = false;
  prodCatNames.forEach(cn => {
    if (cn && !catNamesSet.has(cn)) {
      cats.push({ name: cn, image: '', isBrand: false });
      catNamesSet.add(cn);
      addedNew = true;
    }
  });
  if (addedNew) {
    try { localStorage.setItem('mycart_categories', JSON.stringify(cats)); } catch(e) {}
  }

  document.getElementById('admin-categories').innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:16px;flex-wrap:wrap">
      <div class="admin-section-title" style="margin-bottom:0">إدارة التصنيفات</div>
      <button class="admin-btn admin-btn-primary" onclick="adminOpenAddCategoryModal()" style="display:inline-flex;align-items:center;gap:6px;padding:8px 16px;border-radius:10px;font-weight:700;cursor:pointer">
        <i class="fa-solid fa-plus"></i> إضافة تصنيف جديد
      </button>
    </div>
    <div id="adminCategoriesList">
      ${cats.length ? cats.map((c, idx) => `
        <div style="display:flex;align-items:center;gap:10px;padding:8px 12px;background:var(--card);border:1px solid var(--border);border-radius:8px;margin-bottom:4px">
          <img src="${c.image || 'https://placehold.co/48x48/e2e8f0/64748b?text=' + encodeURIComponent(c.name.slice(0,2))}" style="width:36px;height:36px;border-radius:6px;object-fit:cover;background:#e2e8f0">
          <div style="flex:1"><strong style="font-size:.85rem">${c.name} ${c.isBrand ? '<span style="font-size:.65rem;background:var(--accent);color:#fff;padding:1px 6px;border-radius:4px;margin-right:4px">ماركة</span>' : ''}</strong><br><span style="font-size:.75rem;color:var(--text-muted)">${prods.filter(p => getCatsFn(p).includes(c.name)).length} منتج</span></div>
          <div style="display:flex;gap:4px">
            <button class="admin-btn admin-btn-secondary admin-btn-sm" onclick="adminEditCategory(${idx})" title="تعديل التصنيف"><i class="fa-solid fa-pen"></i></button>
            <button class="admin-btn admin-btn-danger admin-btn-sm" onclick="adminDeleteCategory(${idx})" title="حذف التصنيف"><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>
      `).join('') : '<div class="admin-empty"><i class="fa-solid fa-tags"></i><p>لا يوجد تصنيفات بعد</p></div>'}
    </div>
  `;
}

function adminOpenAddCategoryModal() {
  let modal = document.getElementById('adminCatAddModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'adminCatAddModal';
    modal.style.cssText = 'display:none;position:fixed;inset:0;z-index:99999;background:rgba(15,23,42,.6);backdrop-filter:blur(4px);align-items:center;justify-content:center;padding:16px';
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div style="background:var(--card, #fff);border-radius:20px;padding:24px;max-width:460px;width:100%;box-shadow:0 24px 48px rgba(0,0,0,.2);border:1px solid var(--border,#e2e8f0);position:relative">
      <button onclick="document.getElementById('adminCatAddModal').style.display='none'" style="position:absolute;top:14px;left:14px;background:none;border:none;font-size:1.3rem;cursor:pointer;color:#94a3b8">×</button>
      <h3 style="margin-bottom:16px;font-weight:900;font-size:1.15rem;color:var(--text,#0f172a);display:flex;align-items:center;gap:8px">
        <i class="fa-solid fa-folder-plus" style="color:var(--accent,#ef4444)"></i> إضافة تصنيف جديد
      </h3>
      
      <div class="admin-form-group" style="margin-bottom:14px">
        <label style="display:block;font-size:.82rem;font-weight:800;margin-bottom:6px;color:var(--text,#0f172a)">اسم التصنيف *</label>
        <input type="text" id="acName" placeholder="مثال: جوالات" style="width:100%;padding:10px 14px;border:1.5px solid var(--border,#cbd5e1);border-radius:10px;font-family:inherit;font-size:.88rem;box-sizing:border-box">
      </div>
      
      <div class="admin-form-group" style="margin-bottom:14px">
        <label style="display:block;font-size:.82rem;font-weight:800;margin-bottom:6px;color:var(--text,#0f172a)">صورة التصنيف</label>
        <div style="display:flex;gap:8px;align-items:center">
          <input type="text" id="acImage" placeholder="ضع رابط الصورة أو ارفع صورة..." style="flex:1;padding:10px 14px;border:1.5px solid var(--border,#cbd5e1);border-radius:10px;font-family:inherit;font-size:.85rem;box-sizing:border-box">
          <button class="admin-btn admin-btn-secondary" onclick="adminUploadCatImage('acImage', 'acPreview', 'acPreviewContainer')" style="padding:10px 16px;border-radius:10px;background:#f1f5f9;border:1px solid #cbd5e1;cursor:pointer;font-weight:700;font-family:inherit;display:flex;align-items:center;gap:6px">
            <i class="fa-solid fa-cloud-arrow-up"></i> رفع
          </button>
        </div>
        <div id="acPreviewContainer" style="margin-top:10px;display:none;background:#f8fafc;border:1.5px dashed #cbd5e1;border-radius:14px;padding:12px;text-align:center">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
            <span style="font-size:.75rem;font-weight:700;color:#64748b">🖼️ معاينة الصورة:</span>
            <button onclick="adminRemoveCatImage('acImage', 'acPreviewContainer')" style="background:#fef2f2;color:#ef4444;border:1px solid #fecaca;border-radius:6px;padding:2px 8px;font-size:.72rem;font-weight:700;cursor:pointer;display:inline-flex;align-items:center;gap:4px">
              <i class="fa-solid fa-trash-can"></i> إزالة الصورة
            </button>
          </div>
          <img id="acPreview" style="max-width:120px;max-height:120px;border-radius:12px;object-fit:cover;border:2px solid #fff;box-shadow:0 4px 12px rgba(0,0,0,.1);margin:0 auto;display:block">
        </div>
      </div>

      <div class="admin-form-group" style="margin-bottom:20px">
        <div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:14px;padding:12px 14px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;transition:all .2s" onclick="var cb=document.getElementById('acIsBrand');cb.checked=!cb.checked">
          <div style="display:flex;align-items:center;gap:10px">
            <div style="width:36px;height:36px;border-radius:10px;background:#eff6ff;color:#2563eb;display:flex;align-items:center;justify-content:center;font-size:1.1rem">
              <i class="fa-solid fa-award"></i>
            </div>
            <div>
              <strong style="display:block;font-size:.85rem;color:#0f172a">تصنيف كـ "علامة تجارية" (Brand)</strong>
              <span style="font-size:.72rem;color:#64748b">يظهر هذا التصنيف في شريط فلتر الماركات بالمتجر</span>
            </div>
          </div>
          <input type="checkbox" id="acIsBrand" style="width:20px;height:20px;accent-color:var(--accent,#ef4444);cursor:pointer" onclick="event.stopPropagation()">
        </div>
      </div>

      <div style="display:flex;gap:10px;justify-content:flex-end">
        <button class="admin-btn admin-btn-secondary" onclick="document.getElementById('adminCatAddModal').style.display='none'" style="padding:10px 18px;border-radius:10px;border:1px solid #cbd5e1;background:#f1f5f9;cursor:pointer;font-weight:700;font-family:inherit">إلغاء</button>
        <button class="admin-btn admin-btn-primary" onclick="adminAddCategory()" style="padding:10px 20px;border-radius:10px;border:none;background:var(--accent,#ef4444);color:#fff;cursor:pointer;font-weight:700;font-family:inherit"><i class="fa-solid fa-plus"></i> إضافة التصنيف</button>
      </div>
    </div>
  `;

  modal.style.display = 'flex';

  const imgInput = document.getElementById('acImage');
  if (imgInput) {
    imgInput.oninput = function() {
      const container = document.getElementById('acPreviewContainer');
      const preview = document.getElementById('acPreview');
      const val = this.value.trim();
      if (val) {
        preview.src = val;
        if (container) container.style.display = 'block';
      } else {
        if (container) container.style.display = 'none';
      }
    };
  }
}

function adminRemoveCatImage(inputId, containerId) {
  const imgInput = document.getElementById(inputId);
  const container = document.getElementById(containerId);
  if (imgInput) imgInput.value = '';
  if (container) container.style.display = 'none';
}

function adminEditCategory(idx) {
  const stored = localStorage.getItem('mycart_categories');
  let cats = [];
  if (stored) { try { cats = JSON.parse(stored); } catch(e) {} }
  const cat = cats[idx];
  if (!cat) return;

  let modal = document.getElementById('adminCatEditModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'adminCatEditModal';
    modal.style.cssText = 'display:none;position:fixed;inset:0;z-index:99999;background:rgba(15,23,42,.6);backdrop-filter:blur(4px);align-items:center;justify-content:center;padding:16px';
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div style="background:var(--card, #fff);border-radius:18px;padding:24px;max-width:440px;width:100%;box-shadow:0 20px 40px rgba(0,0,0,.2);border:1px solid var(--border,#e2e8f0);position:relative">
      <button onclick="document.getElementById('adminCatEditModal').style.display='none'" style="position:absolute;top:14px;left:14px;background:none;border:none;font-size:1.2rem;cursor:pointer;color:#94a3b8">×</button>
      <h3 style="margin-bottom:16px;font-weight:800;font-size:1.1rem;color:var(--text,#0f172a);display:flex;align-items:center;gap:8px">
        <i class="fa-solid fa-pen-to-square" style="color:var(--accent,#ef4444)"></i> تعديل التصنيف
      </h3>
      <div class="admin-form-group" style="margin-bottom:12px">
        <label style="display:block;font-size:.82rem;font-weight:700;margin-bottom:4px;color:var(--text)">اسم التصنيف</label>
        <input type="text" id="editCatName" value="${cat.name || ''}" style="width:100%;padding:10px;border:1.5px solid var(--border,#cbd5e1);border-radius:10px;font-family:inherit;box-sizing:border-box">
      </div>
      <div class="admin-form-group" style="margin-bottom:12px">
        <label style="display:block;font-size:.82rem;font-weight:700;margin-bottom:4px;color:var(--text)">صورة التصنيف</label>
        <div style="display:flex;gap:8px;align-items:center">
          <input type="text" id="editCatImage" value="${cat.image || ''}" placeholder="رابط الصورة" style="flex:1;padding:10px;border:1.5px solid var(--border,#cbd5e1);border-radius:10px;font-family:inherit;box-sizing:border-box">
          <img id="editCatPreview" src="${cat.image || ''}" style="width:40px;height:40px;border-radius:8px;object-fit:cover;display:${cat.image ? 'block' : 'none'};border:1px solid #e2e8f0">
        </div>
      </div>
      <div class="admin-form-group" style="margin-bottom:18px">
        <label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:.85rem;font-weight:600">
          <input type="checkbox" id="editCatIsBrand" ${cat.isBrand ? 'checked' : ''} style="width:16px;height:16px">
          علامة تجارية (يظهر في فلتر الماركات)
        </label>
      </div>
      <div style="display:flex;gap:10px;justify-content:flex-end">
        <button class="admin-btn admin-btn-secondary" onclick="document.getElementById('adminCatEditModal').style.display='none'" style="padding:8px 16px;border-radius:10px;border:1px solid #cbd5e1;background:#f1f5f9;cursor:pointer;font-weight:700;font-family:inherit">إلغاء</button>
        <button class="admin-btn admin-btn-primary" onclick="adminSaveEditCategory(${idx})" style="padding:8px 18px;border-radius:10px;border:none;background:var(--accent,#ef4444);color:#fff;cursor:pointer;font-weight:700;font-family:inherit">حفظ التغييرات</button>
      </div>
    </div>
  `;

  modal.style.display = 'flex';

  const imgInput = document.getElementById('editCatImage');
  if (imgInput) {
    imgInput.oninput = function() {
      const preview = document.getElementById('editCatPreview');
      if (this.value.trim()) { preview.src = this.value.trim(); preview.style.display = 'block'; }
      else preview.style.display = 'none';
    };
  }
}

function adminSaveEditCategory(idx) {
  const newName = document.getElementById('editCatName').value.trim();
  const newImage = document.getElementById('editCatImage').value.trim();
  const newIsBrand = document.getElementById('editCatIsBrand').checked;

  if (!newName) {
    if (typeof showToast === 'function') showToast('يرجى إدخال اسم التصنيف', 'error');
    else alert('يرجى إدخال اسم التصنيف');
    return;
  }

  const stored = localStorage.getItem('mycart_categories');
  let cats = [];
  if (stored) { try { cats = JSON.parse(stored); } catch(e) {} }

  if (idx < 0 || idx >= cats.length) return;
  const oldName = cats[idx].name;

  cats[idx] = { name: newName, image: newImage, isBrand: newIsBrand };
  try { localStorage.setItem('mycart_categories', JSON.stringify(cats)); } catch(e) {}

  if (oldName && oldName !== newName) {
    let localProds = JSON.parse(localStorage.getItem('mycart_admin_products') || '[]');
    let updatedProds = false;
    localProds.forEach(p => {
      if (p.category === oldName) { p.category = newName; updatedProds = true; }
      if (Array.isArray(p.categories) && p.categories.includes(oldName)) {
        p.categories = p.categories.map(c => c === oldName ? newName : c);
        updatedProds = true;
      }
    });
    if (updatedProds) {
      try { localStorage.setItem('mycart_admin_products', JSON.stringify(localProds)); } catch(e) {}
    }
  }

  document.getElementById('adminCatEditModal').style.display = 'none';
  if (typeof showToast === 'function') showToast('✅ تم تعديل التصنيف بنجاح', 'success');
  else if (typeof showAlertModal === 'function') showAlertModal('✅ تم تعديل التصنيف بنجاح');

  if (typeof adminRenderCategories === 'function') adminRenderCategories();
  if (typeof renderProducts === 'function') renderProducts();
  if (typeof renderCategories === 'function') renderCategories();
}

function adminAddCategory() {
  const name = document.getElementById('acName').value.trim();
  const image = document.getElementById('acImage').value.trim();
  const isBrand = document.getElementById('acIsBrand').checked;
  if (!name) { showToast('يرجى إدخال اسم التصنيف', 'error'); return; }
  const stored = localStorage.getItem('mycart_categories');
  let cats = [];
  if (stored) { try { cats = JSON.parse(stored); } catch(e) {} }
  if (cats.some(c => c.name === name)) { showToast('هذا التصنيف موجود مسبقاً', 'error'); return; }
  cats.push({ name, image, isBrand });
  try { localStorage.setItem('mycart_categories', JSON.stringify(cats)); } catch(e) { showToast('⚠️ مساحة التخزين ممتلئة', 'error'); return; }
  try { localStorage.setItem('mycart_admin_categories_sync', Date.now().toString()); } catch(e) {}
  document.getElementById('acName').value = '';
  document.getElementById('acImage').value = '';
  document.getElementById('acIsBrand').checked = false;
  document.getElementById('acPreview').style.display = 'none';
  adminRenderCategories();
  renderCategories();
  showToast('✅ تم إضافة التصنيف', 'success');
}

function adminDeleteCategory(idx) {
  const stored = localStorage.getItem('mycart_categories');
  let cats = [];
  if (stored) { try { cats = JSON.parse(stored); } catch(e) {} }
  const c = cats[idx];
  if (!c) return;
  if (!confirm(`حذف التصنيف "${c.name}"؟`)) return;
  cats.splice(idx, 1);
  try { localStorage.setItem('mycart_categories', JSON.stringify(cats)); } catch(e) {}
  try { localStorage.setItem('mycart_admin_categories_sync', Date.now().toString()); } catch(e) {}
  adminRenderCategories();
  renderCategories();
}

function adminUploadCatImage() {
  const input = document.createElement('input');
  input.type = 'file'; input.accept = 'image/*';
  input.onchange = function(e) {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) { showToast('⚠️ الصورة كبيرة جداً', 'error'); return; }
    const reader = new FileReader();
    reader.onload = function(ev) {
      document.getElementById('acImage').value = ev.target.result;
      document.getElementById('acPreview').src = ev.target.result;
      document.getElementById('acPreview').style.display = 'block';
    };
    reader.readAsDataURL(file);
  };
  input.click();
}

function adminDeleteProduct(idx) {
  if (!confirm('حذف هذا المنتج؟')) return;
  products.splice(idx, 1);
  saveProductsToLS();
  adminRefreshAll();
}

function adminEditProduct(idx) {
  const p = products[idx];
  if (!p) return;
  adminEditingId = idx;
  document.getElementById('adminPageTitle').textContent = 'تعديل منتج';
  document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('admin-addProduct').classList.add('active');
  document.querySelectorAll('.admin-sidebar button').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.admin-sidebar button')[3].classList.add('active');
  adminLoadForm(p);
}

function adminLoadForm(p) {
  const prod = p || {};
  const stored = localStorage.getItem('mycart_categories');
  let cats = [];
  if (stored) { try { cats = JSON.parse(stored); } catch(e) {} }
  const prodCats = getProductCats(prod);
  const catCheckboxes = cats.length ? cats.map(c =>
    `<label class="cat-check-label"><input type="checkbox" class="apCatCb" value="${c.name}" ${prodCats.includes(c.name) ? 'checked' : ''}> ${c.name}</label>`
  ).join('') : '<div style="color:var(--text-muted);font-size:.8rem">لا توجد تصنيفات. أضف تصنيفات أولاً.</div>';
  const variants = prod.variants || [];
  document.getElementById('admin-addProduct').innerHTML = `
    <div class="admin-section-title">${adminEditingId !== null ? 'تعديل المنتج' : 'إضافة منتج جديد'}</div>
    <form onsubmit="adminSaveProduct(event)">
      <div class="admin-grid">
        <div class="admin-form-group"><label>اسم المنتج *</label><input type="text" id="apName" value="${prod.name || ''}" required></div>
        <div class="admin-form-group"><label>السعر *</label><input type="number" id="apPrice" step="0.01" value="${prod.price || ''}" required></div>
        <div class="admin-form-group"><label>السعر القديم</label><input type="number" id="apOldPrice" step="0.01" value="${prod.oldPrice || ''}"></div>
        <div class="admin-form-group"><label>التصنيفات</label>
          <input type="text" id="apCatSearch" placeholder="بحث عن تصنيف..." oninput="adminFilterCats()" style="width:100%;padding:8px;border:1px solid var(--border);border-radius:6px;font-family:inherit;font-size:.8rem;margin-bottom:6px">
          <div id="apCatList" style="max-height:150px;overflow-y:auto;display:flex;flex-wrap:wrap;gap:4px">${catCheckboxes}</div>
        </div>
        <div class="admin-form-group">
          <label style="display:block;font-size:.85rem;font-weight:800;margin-bottom:6px">صور المنتج</label>
          <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:8px">
            <button type="button" class="admin-btn admin-btn-secondary admin-btn-sm" onclick="adminUploadImg()" style="display:inline-flex;align-items:center;gap:6px"><i class="fa-solid fa-cloud-arrow-up"></i> رفع صور من الجهاز</button>
            <span style="font-size:.78rem;color:#94a3b8;font-weight:700">أو</span>
            <button type="button" class="admin-btn admin-btn-secondary admin-btn-sm" onclick="adminAddImgUrlPrompt()" style="display:inline-flex;align-items:center;gap:6px;background:#f8fafc;border:1px solid #cbd5e1"><i class="fa-solid fa-link"></i> إضافة رابط صورة مباشر</button>
          </div>
          <div id="apUrlInputContainer" style="display:none;margin-bottom:10px;background:#f8fafc;border:1.5px dashed #cbd5e1;border-radius:12px;padding:12px">
            <div style="display:flex;gap:8px;align-items:center">
              <input type="text" id="apDirectImgUrl" placeholder="ضع رابط الصورة المباشر (http://...)" style="flex:1;padding:8px 12px;border:1.5px solid #cbd5e1;border-radius:8px;font-family:inherit;font-size:.85rem">
              <button type="button" class="admin-btn admin-btn-primary admin-btn-sm" onclick="adminConfirmAddImgUrl()" style="padding:8px 14px">إضافة</button>
              <button type="button" class="admin-btn admin-btn-secondary admin-btn-sm" onclick="document.getElementById('apUrlInputContainer').style.display='none'" style="padding:8px 10px">إلغاء</button>
            </div>
          </div>
          <div id="apImageList" style="display:flex;flex-wrap:wrap;gap:8px"></div>
        </div>
        <div class="admin-form-group"><label>العلامة التجارية</label>
          <input type="text" id="apBrandSearch" placeholder="بحث عن علامة تجارية..." oninput="adminFilterBrands()" style="width:100%;padding:8px;border:1px solid var(--border);border-radius:6px;font-family:inherit;font-size:.8rem;margin-bottom:6px;box-sizing:border-box">
          <div id="apBrandList" style="max-height:130px;overflow-y:auto;display:flex;flex-wrap:wrap;gap:4px"></div>
        </div>
        <div class="admin-form-group" style="display:flex;align-items:center;gap:12px;flex-wrap:wrap">
          <label style="display:flex;align-items:center;gap:8px;cursor:pointer"><input type="checkbox" id="apFeatured" style="width:16px;height:16px" ${prod.featured ? 'checked' : ''}> منتج مميز</label>
        </div>
        <div class="admin-form-group"><label>الشارة الترويجية (الأكثر مبيعاً، جديد...)</label><input type="text" id="apBadge" placeholder="اكتب الشارة هنا..." value="${prod.badge || ''}"></div>
      </div>
      <div class="admin-form-group"><label>الميزات (سطر لكل ميزة)</label><textarea id="apFeatures" rows="2">${(prod.features || []).join('\n')}</textarea></div>
      <div class="admin-form-group"><label>المواصفات (الاسم : القيمة, سطر لكل مواصفة)</label><textarea id="apSpecs" rows="2">${(prod.specs || []).map(s => `${s[0]} : ${s[1]}`).join('\n')}</textarea></div>
      <div class="admin-form-group">
        <label>الخيارات (لون، مقاس، ...)</label>
        <div id="apOptions">
          ${(prod.options || []).map((opt, oi) => `
            <div class="option-card">
              <div class="option-header">
                <input type="text" class="optName" placeholder="اسم الخيار" value="${opt.name}">
                <select class="optType" onchange="optTypeChange(this)">
                  <option value="text" ${opt.type==='text'?'selected':''}>🎨 نص</option>
                  <option value="color" ${opt.type==='color'?'selected':''}>🎨 لون</option>
                  <option value="image" ${opt.type==='image'?'selected':''}>🖼️ صورة</option>
                </select>
                <button type="button" onclick="adminRemoveOption(this)"><i class="fa-solid fa-trash-can"></i></button>
              </div>
              <div class="optValues">
                <div class="opt-label-row"><span class="lbl-choice">الاختيار</span><span class="lbl-price">السعر+</span><span class="lbl-extra"></span><span class="lbl-stock">المخزون</span><span class="lbl-spacer"></span></div>
                ${(opt.values || []).map(v => `
                <div class="opt-value">
                  <input type="text" class="optV" placeholder="اختيار" value="${v.value}">
                  <label>+<input type="number" class="optPrice" step="0.01" value="${v.price||0}"></label>
                  ${opt.type==='color'?`<input type="color" class="optExtra" value="${v.extra||'#000000'}">`:opt.type==='image'?`<img class="optExtra" src="${v.extra||''}" onclick="this.nextElementSibling.click()"><input type="file" accept="image/*" style="display:none" onchange="optImgUpload(this)">`:`<input type="hidden" class="optExtra" value="">`}
                  <label><i class="fa-solid fa-box"></i><input type="number" class="optStock" value="${v.stock||''}"></label>
                  <button type="button" class="del-opt" onclick="this.closest('.opt-value').remove()"><i class="fa-solid fa-xmark"></i></button>
                </div>`).join('')}
                <button type="button" onclick="adminAddOptValue(this)" style="padding:4px 10px;border:1px dashed var(--border);border-radius:6px;background:none;cursor:pointer;color:var(--text-muted);font-size:.7rem;font-family:inherit;margin-top:2px"><i class="fa-solid fa-plus"></i> إضافة اختيار</button>
              </div>
            </div>
          `).join('')}
        </div>
        <button type="button" class="admin-btn admin-btn-secondary admin-btn-sm" onclick="adminAddOption()" style="margin-top:4px"><i class="fa-solid fa-plus"></i> إضافة خيار جديد</button>
      <div style="display:flex;gap:8px;margin-top:10px">
        <button type="submit" class="admin-btn admin-btn-primary">${adminEditingId !== null ? 'تحديث' : 'حفظ'}</button>
        <button type="button" class="admin-btn admin-btn-secondary" onclick="adminResetForm()">إعادة تعيين</button>
      </div>
    </form>
  `;
  adminRenderImageList(getProductImages(prod));
  adminInitBrandList(prod);
}

function adminInitBrandList(prod) {
  const container = document.getElementById('apBrandList');
  if (!container) return;
  try {
    const cats = JSON.parse(localStorage.getItem('mycart_categories') || '[]');
    const brandCats = cats.filter(c => c.isBrand);
    const selected = prod.brand || '';
    container.innerHTML = '<label class="cat-check-label" onclick="adminSelectBrand(this,\'\')" style="cursor:pointer' + (selected === '' ? ';background:var(--accent);color:#fff;border-color:var(--accent)' : '') + '">بدون</label>' +
      brandCats.map(c => `<label class="cat-check-label" onclick="adminSelectBrand(this,'${c.name}')" style="cursor:pointer${selected === c.name ? ';background:var(--accent);color:#fff;border-color:var(--accent)' : ''}">${c.name}</label>`).join('');
    // Set internal value on the initially selected label
    container.querySelectorAll('.cat-check-label').forEach(l => {
      if (l.style.background.includes('var(--accent)')) l._brandVal = l.textContent.trim() === 'بدون' ? '' : l.textContent.trim();
    });
  } catch(e) { container.innerHTML = ''; }
}

function adminSelectBrand(el, name) {
  document.querySelectorAll('#apBrandList .cat-check-label').forEach(l => { l.style.background = ''; l.style.color = ''; l.style.borderColor = ''; l._brandVal = undefined; });
  el.style.background = 'var(--accent)';
  el.style.color = '#fff';
  el.style.borderColor = 'var(--accent)';
  el._brandVal = name;
}

function adminFilterCats() {
  const q = document.getElementById('apCatSearch').value.trim().toLowerCase();
  document.querySelectorAll('#apCatList .cat-check-label').forEach(l => {
    l.style.display = l.textContent.trim().toLowerCase().includes(q) ? '' : 'none';
  });
}

function adminGetSelectedBrand() {
  const sel = document.querySelector('#apBrandList .cat-check-label[style*="var(--accent)"]');
  return sel ? (sel._brandVal !== undefined ? sel._brandVal : '') : '';
}

function adminFilterBrands() {
  const q = document.getElementById('apBrandSearch').value.trim().toLowerCase();
  document.querySelectorAll('#apBrandList .cat-check-label').forEach(l => {
    l.style.display = l.textContent.trim().toLowerCase().includes(q) ? '' : 'none';
  });
}

function adminRenderImageList(imgs) {
  const container = document.getElementById('apImageList');
  if (!container) return;
  if (!imgs || !imgs.length) {
    container.innerHTML = '<div style="font-size:.8rem;color:var(--text-muted)">لم يتم إضافة صور بعد</div>';
    return;
  }
  let html = `<div style="margin-bottom:10px;position:relative">
    <img src="${imgs[0]}" style="width:100%;height:130px;border-radius:10px;object-fit:cover;border:3px solid var(--accent);display:block;background:var(--card)">
    <div style="position:absolute;top:8px;right:8px;display:flex;gap:4px">
      <button type="button" onclick="adminRemoveImg(0)" style="width:28px;height:28px;border-radius:6px;border:none;background:rgba(239,68,68,0.9);color:#fff;cursor:pointer;font-size:.75rem;display:flex;align-items:center;justify-content:center"><i class="fa-solid fa-trash-can"></i></button>
      <button type="button" onclick="adminMoveImg(0,1)" ${imgs.length === 1 ? 'disabled style="opacity:.3"' : ''} style="width:28px;height:28px;border-radius:6px;border:none;background:rgba(0,0,0,0.5);color:#fff;cursor:pointer;font-size:.75rem;display:flex;align-items:center;justify-content:center"><i class="fa-solid fa-chevron-left"></i></button>
    </div>
    <div style="position:absolute;bottom:8px;right:8px;background:var(--card);padding:3px 10px;border-radius:6px;font-size:.7rem;font-weight:600;color:var(--accent);box-shadow:0 2px 8px rgba(0,0,0,0.12)">★ ${imgs[0].startsWith('data:') ? 'الصورة الرئيسية' : 'الصورة الرئيسية'}</div>
  </div>`;
  if (imgs.length > 1) {
    html += '<div style="display:flex;gap:6px;flex-wrap:wrap">';
    for (let i = 1; i < imgs.length; i++) {
      html += `<div style="position:relative;width:70px">
        <img src="${imgs[i]}" onclick="adminSetPrimaryImg(${i})" style="width:100%;height:58px;border-radius:8px;object-fit:cover;cursor:pointer;border:2px solid var(--border);display:block">
        <div style="display:flex;gap:2px;margin-top:2px;justify-content:center">
          <button type="button" onclick="adminMoveImg(${i},-1)" style="width:20px;height:20px;border-radius:4px;border:1px solid var(--border);background:var(--card);cursor:pointer;font-size:.5rem;display:flex;align-items:center;justify-content:center;font-family:inherit"><i class="fa-solid fa-chevron-right"></i></button>
          <button type="button" onclick="adminSetPrimaryImg(${i})" style="width:20px;height:20px;border-radius:4px;border:1px solid var(--border);background:var(--card);cursor:pointer;font-size:.5rem;display:flex;align-items:center;justify-content:center;font-family:inherit" title="تعيين كأساسية"><i class="fa-solid fa-star"></i></button>
          <button type="button" onclick="adminMoveImg(${i},1)" ${i === imgs.length - 1 ? 'disabled style="opacity:.3"' : ''} style="width:20px;height:20px;border-radius:4px;border:1px solid var(--border);background:var(--card);cursor:pointer;font-size:.5rem;display:flex;align-items:center;justify-content:center;font-family:inherit"><i class="fa-solid fa-chevron-left"></i></button>
          <button type="button" onclick="adminRemoveImg(${i})" style="width:20px;height:20px;border-radius:4px;border:1px solid #ef4444;background:#fef2f2;color:#ef4444;cursor:pointer;font-size:.5rem;display:flex;align-items:center;justify-content:center;font-family:inherit"><i class="fa-solid fa-xmark"></i></button>
        </div>
      </div>`;
    }
    html += '</div>';
  }
  container.innerHTML = html;
}

function adminGetImages() {
  const imgs = [];
  document.querySelectorAll('#apImageList img').forEach(img => imgs.push(img.src));
  return imgs;
}

function adminSetPrimaryImg(idx) {
  const imgs = adminGetImages();
  if (idx < 0 || idx >= imgs.length || idx === 0) return;
  const item = imgs.splice(idx, 1)[0];
  imgs.unshift(item);
  adminRenderImageList(imgs);
}

function adminMoveImg(idx, dir) {
  const imgs = adminGetImages();
  const newIdx = idx + dir;
  if (newIdx < 0 || newIdx >= imgs.length) return;
  [imgs[idx], imgs[newIdx]] = [imgs[newIdx], imgs[idx]];
  adminRenderImageList(imgs);
}

function adminRemoveImg(idx) {
  const imgs = adminGetImages();
  imgs.splice(idx, 1);
  adminRenderImageList(imgs);
}

function adminAddOption() {
  const container = document.getElementById('apOptions');
  const div = document.createElement('div');
  div.className = 'option-card';
  div.innerHTML = `<div class="option-header">
    <input type="text" class="optName" placeholder="اسم الخيار">
    <select class="optType" onchange="optTypeChange(this)">
      <option value="text">🎨 نص</option>
      <option value="color">🎨 لون</option>
      <option value="image">🖼️ صورة</option>
    </select>
    <button type="button" onclick="adminRemoveOption(this)"><i class="fa-solid fa-trash-can"></i></button>
  </div>
  <div class="optValues">
    <button type="button" onclick="adminAddOptValue(this)" style="padding:4px 10px;border:1px dashed var(--border);border-radius:6px;background:none;cursor:pointer;color:var(--text-muted);font-size:.7rem;font-family:inherit"><i class="fa-solid fa-plus"></i> إضافة اختيار</button>
  </div>`;
  container.appendChild(div);
}
function adminRemoveOption(btn) { btn.closest('.option-card').remove(); }
function adminAddOptValue(btn) {
  const container = btn.closest('.optValues');
  const type = container.closest('.option-card').querySelector('.optType').value;
  const div = document.createElement('div');
  div.className = 'opt-value';
  div.innerHTML = `<input type="text" class="optV" placeholder="اختيار">
    <label>+<input type="number" class="optPrice" step="0.01" value="0"></label>
    ${type==='color'?`<input type="color" class="optExtra" value="#000000">`:type==='image'?`<img class="optExtra" src="" onclick="this.nextElementSibling.click()"><input type="file" accept="image/*" style="display:none" onchange="optImgUpload(this)">`:`<input type="hidden" class="optExtra" value="">`}
    <label><i class="fa-solid fa-box"></i><input type="number" class="optStock" value=""></label>
    <button type="button" class="del-opt" onclick="this.closest('.opt-value').remove()"><i class="fa-solid fa-xmark"></i></button>`;
  btn.before(div);
}
function optTypeChange(sel) {
  const card = sel.closest('.option-card');
  const type = sel.value;
  card.querySelectorAll('.opt-value').forEach(el => {
    const v = el.querySelector('.optV').value;
    const price = el.querySelector('.optPrice').value;
    const stock = el.querySelector('.optStock').value;
    const oldExtra = el.querySelector('.optExtra');
    const oldVal = oldExtra ? (oldExtra.type==='color'?oldExtra.value:oldExtra.src) : '';
    el.innerHTML = `<input type="text" class="optV" placeholder="اختيار" value="${v}">
      <label>+<input type="number" class="optPrice" step="0.01" value="${price}"></label>
      ${type==='color'?`<input type="color" class="optExtra" value="${oldVal||'#000000'}">`:type==='image'?`<img class="optExtra" src="${oldVal||''}" onclick="this.nextElementSibling.click()"><input type="file" accept="image/*" style="display:none" onchange="optImgUpload(this)">`:`<input type="hidden" class="optExtra" value="${oldVal}">`}
      <label><i class="fa-solid fa-box"></i><input type="number" class="optStock" value="${stock}"></label>
      <button type="button" class="del-opt" onclick="this.closest('.opt-value').remove()"><i class="fa-solid fa-xmark"></i></button>`;
  });
}
function optImgUpload(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    const img = input.parentElement.querySelector('.optExtra');
    if (img) img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}
function adminPickVariantImgs(btn) {
  const row = btn.closest('.vc-row') || btn.closest('.variant-card');
  const available = adminGetImages();
  if (!available.length) { showToast('⚠️ لا توجد صور للمنتج. ارفع صور أولاً.', 'error'); return; }
  const current = (row.querySelector('.vImages').value ? row.querySelector('.vImages').value.split('|||') : []);
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center';
  const box = document.createElement('div');
  box.style.cssText = 'background:var(--card);border-radius:14px;padding:20px;max-width:500px;width:90%;max-height:80vh;overflow-y:auto';
  box.innerHTML = `<h3 style="margin:0 0 12px;font-size:1rem">اختر صوراً للمتغير</h3><div id="vPickerGrid" style="display:flex;flex-wrap:wrap;gap:8px">${available.map((img, i) => `<img src="${img}" data-idx="${i}" style="width:80px;height:80px;border-radius:8px;object-fit:cover;cursor:pointer;border:3px solid ${current.includes(img) ? 'var(--accent)' : 'var(--border)'}">`).join('')}</div><div style="display:flex;gap:8px;margin-top:12px"><button class="admin-btn admin-btn-primary" id="vPickerConfirm">تأكيد</button><button class="admin-btn admin-btn-secondary" id="vPickerCancel">إلغاء</button></div>`;
  overlay.appendChild(box);
  document.body.appendChild(overlay);
  const grid = box.querySelector('#vPickerGrid');
  const selected = [...current];
  grid.querySelectorAll('img').forEach(img => {
    img.onclick = function() {
      const src = this.src;
      const idx = selected.indexOf(src);
      if (idx > -1) { selected.splice(idx, 1); this.style.borderColor = 'var(--border)'; }
      else { selected.push(src); this.style.borderColor = 'var(--accent)'; }
    };
  });
  box.querySelector('#vPickerConfirm').onclick = function() {
    row.querySelector('.vImages').value = selected.join('|||');
    const count = row.querySelector('.vImgCount');
    count.textContent = selected.length ? selected.length + ' ص' : '';
    const thumbs = row.querySelector('.vImgThumbs');
    if (thumbs) thumbs.innerHTML = selected.slice(0,3).map(s => `<img src="${s}" style="width:18px;height:18px;border-radius:3px;object-fit:cover;border:1px solid var(--border)">`).join('');
    document.body.removeChild(overlay);
  };
  box.querySelector('#vPickerCancel').onclick = function() { document.body.removeChild(overlay); };
}
function getProductDiscount(p) {
  const old = p.oldPrice || 0;
  const curr = p.price || 0;
  if (old > 0 && curr < old) return Math.round((old - curr) / old * 100);
  return p.discount || 0;
}

function getProductImages(p) {
  if (p.images && Array.isArray(p.images) && p.images.length) return p.images;
  if (p.image) return [p.image];
  return ['https://placehold.co/400x400/e2e8f0/64748b?text=Product'];
}

async function adminUploadImg() {
  const input = document.createElement('input');
  input.type = 'file'; input.accept = 'image/*'; input.multiple = true;
  input.onchange = async function(e) {
    const files = [...e.target.files];
    if (!files.length) return;
    const valid = files.filter(f => f.size <= 5 * 1024 * 1024);
    if (valid.length !== files.length) showToast('⚠️ بعض الصور كبيرة جداً (الحد 5MB) وتم تخطيها', 'error');
    if (!valid.length) return;
    const currentImgs = adminGetImages().filter(img => img.startsWith('data:') || img.startsWith('images/') || img.startsWith('http'));
    let loaded = 0;
    for (const file of valid) {
      try {
        const url = await adminUploadFile(file);
        currentImgs.push(url);
      } catch(err) {
        const reader = new FileReader();
        await new Promise(resolve => {
          reader.onload = function(ev) {
            currentImgs.push(ev.target.result);
            resolve();
          };
          reader.readAsDataURL(file);
        });
      }
      loaded++;
      if (loaded === valid.length) adminRenderImageList(currentImgs);
    }
  };
  input.click();
}

function adminAddImgUrlPrompt() {
  const container = document.getElementById('apUrlInputContainer');
  if (container) {
    const isHidden = container.style.display === 'none' || !container.style.display;
    container.style.display = isHidden ? 'block' : 'none';
    if (isHidden) {
      const input = document.getElementById('apDirectImgUrl');
      if (input) { input.value = ''; input.focus(); }
    }
  }
}

function adminConfirmAddImgUrl() {
  const input = document.getElementById('apDirectImgUrl');
  const url = input ? input.value.trim() : '';
  if (!url) {
    if (typeof showToast === 'function') showToast('⚠️ يرجى إدخال رابط الصورة', 'error');
    else alert('يرجى إدخال رابط الصورة');
    return;
  }
  const currentImgs = adminGetImages();
  currentImgs.push(url);
  adminRenderImageList(currentImgs);
  if (input) input.value = '';
  const container = document.getElementById('apUrlInputContainer');
  if (container) container.style.display = 'none';
  if (typeof showToast === 'function') showToast('✅ تم إضافة رابط الصورة للمنتج بنجاح', 'success');
}

async function adminUploadFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async function(ev) {
      const dataUrl = ev.target.result;
      try {
        const resp = await fetch('/api/upload', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            data: dataUrl,
            filename: Date.now() + '_' + file.name.replace(/[^a-zA-Z0-9._-]/g, '_')
          })
        });
        if (resp.ok) {
          const result = await resp.json();
          resolve(result.url);
        } else {
          reject(new Error('Upload failed'));
        }
      } catch(e) {
        resolve(dataUrl);
      }
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function adminResetForm() {
  adminEditingId = null;
  adminLoadForm();
}

async function adminSaveProduct(e) {
  e.preventDefault();
  const name = document.getElementById('apName').value.trim();
  const price = parseFloat(document.getElementById('apPrice').value);
  if (!name || !price) { alert('يرجى تعبئة الاسم والسعر'); return; }
  const features = document.getElementById('apFeatures').value.split('\n').map(s => s.trim()).filter(Boolean);
  const specsRaw = document.getElementById('apSpecs').value.split('\n').map(s => s.trim()).filter(Boolean);
  const specs = specsRaw.map(s => {
    const i = s.indexOf(' : '); if (i > 0) return [s.slice(0,i).trim(), s.slice(i+3).trim()];
    const j = s.indexOf(':'); if (j > 0) return [s.slice(0,j).trim(), s.slice(j+1).trim()];
    return [s, ''];
  });
  const categories = [...document.querySelectorAll('.apCatCb:checked')].map(cb => cb.value);
  const options = [...document.querySelectorAll('#apOptions .option-card')].map(card => {
    const name = card.querySelector('.optName').value.trim();
    if (!name) return null;
    const type = card.querySelector('.optType').value;
    const values = [...card.querySelectorAll('.opt-value')].map(el => ({
      value: el.querySelector('.optV').value.trim(),
      price: parseFloat(el.querySelector('.optPrice').value) || 0,
      stock: parseInt(el.querySelector('.optStock').value) || 0,
      extra: type==='color' ? (el.querySelector('.optExtra')||{}).value || '#000000' : type==='image' ? (el.querySelector('.optExtra')||{}).src || '' : ''
    })).filter(x => x.value);
    return values.length ? { name, type, values } : null;
  }).filter(Boolean);
  // Pack images into IndexedDB to avoid localStorage quota issues
  const rawImages = adminGetImages().filter(img => !img.includes('placehold.co'));
  let packedImages = rawImages.length ? rawImages : ['https://placehold.co/400x400/e2e8f0/64748b?text=Product'];
  if (packedImages.some(img => img.startsWith('data:'))) {
    try {
      if (typeof mediaStorePackImages === 'function') {
        packedImages = await mediaStorePackImages(rawImages);
      }
    } catch(e) {}
  }
  for (const opt of options) {
    if (opt.type === 'image' && opt.values) {
      for (const v of opt.values) {
        if (v.extra && v.extra.startsWith('data:')) {
          try {
            if (typeof mediaStoreSave === 'function') {
              v.extra = await mediaStoreSave(v.extra);
            }
          } catch(e) {}
        }
      }
    }
  }
  const existingDate = adminEditingId !== null ? (products[adminEditingId].createdAt || products[adminEditingId].dateAdded) : null;
  const product = {
    id: adminEditingId !== null ? products[adminEditingId].id : Date.now(),
    name,
    price,
    oldPrice: parseFloat(document.getElementById('apOldPrice').value) || 0,
    categories: categories.length ? categories : ['أخرى'],
    images: packedImages,
    brand: adminGetSelectedBrand(),
    featured: document.getElementById('apFeatured').checked,
    badge: document.getElementById('apBadge').value.trim(),
    features, specs,
    options: options.length ? options : undefined,
    createdAt: existingDate || new Date().toLocaleDateString('ar-EG')
  };
  if (adminEditingId !== null) products[adminEditingId] = product;
  else products.unshift(product);
  saveProductsToLS();
  adminEditingId = null;
  adminRefreshAll();
  switchAdminTab('products');
  document.querySelectorAll('.admin-sidebar button')[2].classList.add('active');
  showToast('✅ تم حفظ المنتج', 'success');
}

function adminLoadSettings() {
  const s = loadAdminSettings();
  const logo = localStorage.getItem('mycart_logo');
  const codes = JSON.parse(localStorage.getItem('mycart_discount_codes') || '[]');
  const mode = s.logoDisplayMode || 'both';
  document.getElementById('admin-settings').innerHTML = `
    <div class="admin-section-title">الإعدادات المعروضة</div>
    <div class="admin-settings-grid">
      <div class="admin-card">
        <h4><i class="fa-solid fa-store"></i> معلومات الهيدر والشعار</h4>
        <div class="admin-form-group"><label>اسم المتجر</label><input type="text" id="asName" value="${s.storeName || 'متجري'}"></div>
        <div class="admin-form-group"><label>وصف المتجر (Tagline)</label><input type="text" id="asTagline" value="${s.tagline || 'اختر منتجك المفضل'}"></div>
        <div class="admin-form-group"><label>طريقة عرض الهيدر والشعار</label>
          <select id="asLogoMode" style="width:100%;padding:8px 10px;border:1.5px solid var(--border);border-radius:8px;font-family:inherit;font-size:.85rem">
            <option value="both" ${mode==='both'?'selected':''}>إظهار الشعار + اسم المتجر والوصف</option>
            <option value="logo_only" ${mode==='logo_only'?'selected':''}>إظهار الشعار فقط</option>
            <option value="text_only" ${mode==='text_only'?'selected':''}>إظهار اسم المتجر والوصف فقط (إخفاء الشعار)</option>
            <option value="none" ${mode==='none'?'selected':''}>إخفاء الشعار والاسم والوصف بالكامل</option>
          </select>
        </div>
        <div class="admin-form-group"><label>صورة الشعار</label>
          <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
            <img class="admin-preview-img" id="asLogo" src="${logo || ''}" style="${logo ? 'display:block;width:50px;height:50px;border-radius:10px;object-fit:cover' : 'display:none'}">
            <button class="admin-btn admin-btn-secondary admin-btn-sm" onclick="adminUploadLogo()"><i class="fa-solid fa-upload"></i> تغيير</button>
            <button class="admin-btn admin-btn-danger admin-btn-sm" id="asRemoveLogoBtn" onclick="adminRemoveLogo()" style="${logo ? 'display:inline-block' : 'display:none'}"><i class="fa-solid fa-trash"></i> إزالة</button>
          </div>
        </div>
      </div>
      <div class="admin-card">
        <h4><i class="fa-solid fa-sliders"></i> إعدادات المتجر العامة</h4>
        <div class="admin-form-group"><label>كود الجملة</label><input type="text" id="asWCode" value="${s.wholesaleCode || 'ADMIN123'}"></div>
        <div class="admin-form-group"><label>العملة</label><input type="text" id="asCurrency" value="${s.currency || '₪'}" maxlength="5"></div>
        <div class="admin-form-group"><label>اللون الأساسي</label><div style="display:flex;gap:8px;align-items:center"><input type="color" id="asAccent" value="${s.accentColor || '#ef4444'}" oninput="document.getElementById('asAccentVal').textContent=this.value" style="width:44px;height:40px;border:none;border-radius:6px;cursor:pointer;padding:0;background:none"><span style="font-size:.75rem;color:var(--text-muted)" id="asAccentVal">${s.accentColor || '#ef4444'}</span></div></div>
        <div class="admin-form-group"><label>خلفية الهيدر</label>
          <div style="display:flex;gap:8px;align-items:center">
            <button class="admin-btn admin-btn-secondary admin-btn-sm" onclick="adminUploadBg()"><i class="fa-solid fa-image"></i> تغيير الخلفية</button>
            <button class="admin-btn admin-btn-danger admin-btn-sm" onclick="adminRemoveBg()"><i class="fa-solid fa-trash"></i> إزالة</button>
          </div>
        </div>
      </div>
      <div class="admin-card">
        <h4><i class="fa-solid fa-tag"></i> أكواد الخصم</h4>
        <div style="display:flex;gap:8px;margin-bottom:10px">
          <input type="text" id="asDiscCode" placeholder="الكود" style="flex:1;padding:8px;border:1.5px solid var(--border);border-radius:8px;font-family:inherit;font-size:.85rem">
          <input type="number" id="asDiscPercent" placeholder="% الخصم" min="1" max="100" style="width:70px;padding:8px;border:1.5px solid var(--border);border-radius:8px;font-family:inherit;font-size:.85rem">
          <button class="admin-btn admin-btn-primary admin-btn-sm" onclick="adminAddDiscountCode()" style="padding:8px 14px;font-size:.8rem"><i class="fa-solid fa-plus"></i></button>
        </div>
        <div id="adminDiscCodesList">${codes.length ? codes.map((c, idx) =>
          `<div style="display:flex;align-items:center;justify-content:space-between;padding:6px 8px;background:var(--bg);border-radius:6px;margin-bottom:4px;font-size:.8rem"><span><strong>${c.code}</strong> — خصم ${c.percent}%</span><button onclick="adminDeleteDiscountCode(${idx})" style="background:none;border:none;color:#ef4444;cursor:pointer;font-size:.85rem"><i class="fa-solid fa-xmark"></i></button></div>`
        ).join('') : '<p style="font-size:.8rem;color:var(--text-muted)">لا يوجد أكواد خصم</p>'}</div>
      </div>
      <div class="admin-card">
        <h4><i class="fa-solid fa-truck"></i> مناطق التوصيل</h4>
        <div style="display:flex;gap:8px;margin-bottom:10px">
          <input type="text" id="asZoneName" placeholder="اسم المنطقة" style="flex:1;padding:8px;border:1.5px solid var(--border);border-radius:8px;font-family:inherit;font-size:.85rem">
          <input type="number" id="asZonePrice" placeholder="السعر" min="0" step="0.5" style="width:80px;padding:8px;border:1.5px solid var(--border);border-radius:8px;font-family:inherit;font-size:.85rem">
          <button class="admin-btn admin-btn-primary admin-btn-sm" onclick="adminAddZone()" style="padding:8px 14px;font-size:.8rem"><i class="fa-solid fa-plus"></i></button>
        </div>
        <div id="adminZonesList">${renderAdminZones()}</div>
      </div>
      <div class="admin-card">
        <h4><i class="fa-solid fa-database"></i> البيانات</h4>
        <div style="display:flex;gap:6px;flex-wrap:wrap">
          <button class="admin-btn admin-btn-primary admin-btn-sm" onclick="adminExport()"><i class="fa-solid fa-file-export"></i> تصدير</button>
          <button class="admin-btn admin-btn-secondary admin-btn-sm" onclick="document.getElementById('adminImportFile').click()"><i class="fa-solid fa-file-import"></i> استيراد</button>
          <button class="admin-btn admin-btn-danger admin-btn-sm" onclick="adminResetAll()"><i class="fa-solid fa-trash"></i> إعادة تعيين</button>
        </div>
        <input type="file" id="adminImportFile" accept=".json" style="display:none" onchange="adminImport(event)">
        <div id="adminDataStatus" style="font-size:.7rem;color:var(--text-muted);margin-top:6px"></div>
      </div>
    </div>
    <button class="admin-btn admin-btn-primary" onclick="adminSaveSettings()" style="margin-top:12px;width:100%"><i class="fa-solid fa-floppy-disk"></i> حفظ كافة الإعدادات والشعار</button>
  `;
}

function adminAddDiscountCode() {
  const code = document.getElementById('asDiscCode').value.trim().toUpperCase();
  const percent = parseInt(document.getElementById('asDiscPercent').value);
  if (!code || !percent || percent < 1 || percent > 100) { showToast('أدخل كود الخصم ونسبة مئوية (1-100)', 'error'); return; }
  const stored = localStorage.getItem('mycart_discount_codes');
  let codes = [];
  if (stored) { try { codes = JSON.parse(stored); } catch(e) {} }
  if (codes.some(c => c.code === code)) { showToast('هذا الكود موجود مسبقاً', 'error'); return; }
  codes.push({ code, percent, uses: 0 });
  try { localStorage.setItem('mycart_discount_codes', JSON.stringify(codes)); } catch(e) { showToast('⚠️ مساحة التخزين ممتلئة', 'error'); return; }
  document.getElementById('asDiscCode').value = '';
  document.getElementById('asDiscPercent').value = '';
  adminLoadSettings();
  showToast('✅ تم إضافة كود الخصم', 'success');
}

function adminDeleteDiscountCode(idx) {
  const stored = localStorage.getItem('mycart_discount_codes');
  let codes = [];
  if (stored) { try { codes = JSON.parse(stored); } catch(e) {} }
  codes.splice(idx, 1);
  try { localStorage.setItem('mycart_discount_codes', JSON.stringify(codes)); } catch(e) {}
  adminLoadSettings();
}

// ===== DELIVERY ZONES =====
function loadDeliveryZones() {
  try { return JSON.parse(localStorage.getItem('mycart_delivery_zones')) || []; } catch(e) { return []; }
}
function saveDeliveryZones(zones) {
  try { localStorage.setItem('mycart_delivery_zones', JSON.stringify(zones)); } catch(e) { showToast('⚠️ مساحة التخزين ممتلئة', 'error'); }
}
function renderAdminZones() {
  const zones = loadDeliveryZones();
  return zones.length ? zones.map((z, idx) =>
    `<div style="display:flex;align-items:center;justify-content:space-between;padding:6px 8px;background:var(--bg);border-radius:6px;margin-bottom:4px;font-size:.8rem"><span><strong>${z.name}</strong> — ${CURRENCY}${z.price}</span><button onclick="adminDeleteZone(${idx})" style="background:none;border:none;color:#ef4444;cursor:pointer;font-size:.85rem"><i class="fa-solid fa-xmark"></i></button></div>`
  ).join('') : '<p style="font-size:.8rem;color:var(--text-muted)">لا يوجد مناطق توصيل</p>';
}
function adminAddZone() {
  const name = document.getElementById('asZoneName').value.trim();
  const price = parseFloat(document.getElementById('asZonePrice').value);
  if (!name || isNaN(price) || price < 0) { showToast('أدخل اسم المنطقة والسعر', 'error'); return; }
  const zones = loadDeliveryZones();
  zones.push({ name, price });
  saveDeliveryZones(zones);
  document.getElementById('asZoneName').value = '';
  document.getElementById('asZonePrice').value = '';
  adminLoadSettings();
  showToast('✅ تم إضافة منطقة التوصيل', 'success');
}
function adminDeleteZone(idx) {
  const zones = loadDeliveryZones();
  zones.splice(idx, 1);
  saveDeliveryZones(zones);
  adminLoadSettings();
}

function adminUploadLogo() {
  const input = document.createElement('input');
  input.type = 'file'; input.accept = 'image/*';
  input.onchange = function(e) {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) { showToast('⚠️ الصورة كبيرة جداً، اختر صورة أقل من 5 ميغابايت', 'error'); return; }
    const reader = new FileReader();
    reader.onload = function(ev) {
      const url = ev.target.result;
      const logoImg = document.getElementById('asLogo');
      const rmBtn = document.getElementById('asRemoveLogoBtn');
      if (logoImg) { logoImg.src = url; logoImg.style.display = 'block'; }
      if (rmBtn) rmBtn.style.display = 'inline-block';
      try { localStorage.setItem('mycart_logo', url); } catch(ex) {}
      showToast('✅ تم تغيير الشعار', 'success');
      init();
    };
    reader.readAsDataURL(file);
  };
  input.click();
}

function adminRemoveLogo() {
  localStorage.removeItem('mycart_logo');
  const logoImg = document.getElementById('asLogo');
  const rmBtn = document.getElementById('asRemoveLogoBtn');
  if (logoImg) logoImg.style.display = 'none';
  if (rmBtn) rmBtn.style.display = 'none';
  showToast('✅ تم إزالة الشعار', 'success');
  init();
}

function adminUploadBg() {
  const input = document.createElement('input');
  input.type = 'file'; input.accept = 'image/*';
  input.onchange = function(e) {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) { showToast('⚠️ الصورة كبيرة جداً، اختر صورة أقل من 5 ميغابايت', 'error'); return; }
    const reader = new FileReader();
    reader.onload = function(ev) {
      try { localStorage.setItem('mycart_bg', ev.target.result); } catch(ex) {}
      document.getElementById('header').style.setProperty('--header-bg', `url(${ev.target.result})`);
      document.getElementById('header').classList.add('has-bg');
      showToast('✅ تم تغيير الخلفية', 'success');
    };
    reader.readAsDataURL(file);
  };
  input.click();
}

function adminRemoveBg() {
  localStorage.removeItem('mycart_bg');
  const header = document.getElementById('header');
  if (header) {
    header.style.removeProperty('--header-bg');
    header.classList.remove('has-bg');
  }
  showToast('✅ تم إزالة الخلفية', 'success');
}

function adminSaveSettings() {
  const nameEl = document.getElementById('asName');
  const tagEl = document.getElementById('asTagline');
  const modeEl = document.getElementById('asLogoMode');
  const wCodeEl = document.getElementById('asWCode');
  const currEl = document.getElementById('asCurrency');
  const accentEl = document.getElementById('asAccent');

  const s = {
    storeName: (nameEl ? nameEl.value.trim() : '') || 'متجري',
    tagline: (tagEl ? tagEl.value.trim() : '') || 'اختر منتجك المفضل',
    logoDisplayMode: modeEl ? modeEl.value : 'both',
    wholesaleCode: (wCodeEl ? wCodeEl.value.trim() : '') || 'ADMIN123',
    currency: (currEl ? currEl.value.trim() : '') || '₪',
    accentColor: accentEl ? accentEl.value : '#ef4444'
  };
  try { localStorage.setItem('mycart_admin_settings', JSON.stringify(s)); } catch(e) { showToast('⚠️ مساحة التخزين ممتلئة', 'error'); return; }
  try { localStorage.setItem('mycart_wholesale_code', s.wholesaleCode); } catch(e) {}
  adminSettings = s;
  WHOLESALE_CODE = s.wholesaleCode;
  CURRENCY = s.currency;
  init();
  showToast('✅ تم حفظ الإعدادات والشعار', 'success');
}

// ===== ADMIN APPEARANCE =====
/* ============ APPEARANCE / THEME CUSTOMIZER ============ */
const APPEARANCE_FIELDS = [
  {id:'appAccent',key:'accentColor',type:'color'},
  {id:'appAccentHover',key:'accentHover',type:'color'},
  {id:'appBgColor',key:'bgColor',type:'color'},
  {id:'appCardColor',key:'cardColor',type:'color'},
  {id:'appTextColor',key:'textColor',type:'color'},
  {id:'appTextMuted',key:'textMuted',type:'color'},
  {id:'appBorderColor',key:'borderColor',type:'color'},
  {id:'appPriceColor',key:'priceColor',type:'color'},
  {id:'appSaleColor',key:'saleColor',type:'color'},
  {id:'appSuccessColor',key:'successColor',type:'color'},
  {id:'appDarkMode',key:'darkMode',type:'checkbox'},
  {id:'appFontHeading',key:'fontHeading',type:'select'},
  {id:'appFontBody',key:'fontBody',type:'select'},
  {id:'appFontSize',key:'fontSize',type:'range'},
  {id:'appHeadingScale',key:'headingScale',type:'range',scale:0.01},
  {id:'appFontWeight',key:'fontWeight',type:'select'},
  {id:'appLineHeight',key:'lineHeight',type:'range',scale:0.1},
  {id:'appShowBanners',key:'showBanners',type:'checkbox'},
  {id:'appShowFlashSales',key:'showFlashSales',type:'checkbox'},
  {id:'appShowFeatured',key:'showFeatured',type:'checkbox'},
  {id:'appShowCategories',key:'showCategories',type:'checkbox'},
  {id:'appShowBrands',key:'showBrands',type:'checkbox'},
  {id:'appGridColsDesktop',key:'gridColsDesktop',type:'range'},
  {id:'appGridColsTablet',key:'gridColsTablet',type:'range'},
  {id:'appGridColsMobile',key:'gridColsMobile',type:'range'},
  {id:'appGridGap',key:'gridGap',type:'range'},
  {id:'appImgRatio',key:'imgRatio',type:'select'},
  {id:'appImgRadius',key:'imgRadius',type:'range'},
  {id:'appImgHoverZoom',key:'imgHoverZoom',type:'checkbox'},
  {id:'appImgLazyLoad',key:'imgLazyLoad',type:'checkbox'},
  {id:'appCardRadius',key:'cardRadius',type:'range'},
  {id:'appBtnRadius',key:'btnRadius',type:'range'},
  {id:'appCardStyle',key:'cardStyle',type:'select'},
  {id:'appBtnStyle',key:'btnStyle',type:'select'},
  {id:'appShadows',key:'shadows',type:'checkbox'},
  {id:'appShadowIntensity',key:'shadowIntensity',type:'range',scale:0.01},
  {id:'appStickyHeader',key:'stickyHeader',type:'checkbox'},
  {id:'appShowSearch',key:'showSearch',type:'checkbox'},
  {id:'appShowWishlist',key:'showWishlist',type:'checkbox'},
  {id:'appHeaderFrom',key:'headerFrom',type:'color'},
  {id:'appHeaderTo',key:'headerTo',type:'color'},
  {id:'appHeaderText',key:'headerText',type:'color'},
  {id:'appHeaderPadding',key:'headerPadding',type:'range'},
  {id:'appNavStyle',key:'navStyle',type:'select'},
  {id:'appShowCartCount',key:'showCartCount',type:'checkbox'},
  {id:'appShowNavLabels',key:'showNavLabels',type:'checkbox'},
  {id:'appNavBg',key:'navBg',type:'color'},
  {id:'appNavActive',key:'navActive',type:'color'},
  {id:'appShowBrand',key:'showBrand',type:'checkbox'},
  {id:'appShowOldPrice',key:'showOldPrice',type:'checkbox'},
  {id:'appShowDiscountBadge',key:'showDiscountBadge',type:'checkbox'},
  {id:'appShowQuickAdd',key:'showQuickAdd',type:'checkbox'},
  {id:'appPagePadding',key:'pagePadding',type:'range'},
  {id:'appSectionGap',key:'sectionGap',type:'range'}
];

const THEME_PRESETS = {
  classic:{name:'كلاسيكي أحمر',sub:'الافتراضي',accentColor:'#ef4444',accentHover:'#dc2626',bgColor:'#f8fafc',cardColor:'#ffffff',textColor:'#1e293b',textMuted:'#64748b',borderColor:'#e2e8f0',priceColor:'#ef4444',saleColor:'#ef4444',successColor:'#10b981',headerFrom:'#ef4444',headerTo:'#dc2626',headerText:'#ffffff',navBg:'#ffffff',navActive:'#ef4444',fontHeading:"'Tajawal',sans-serif",fontBody:"'Tajawal',sans-serif"},
  blue:{name:'أزرق احترافي',sub:'هادئ وموثوق',accentColor:'#2563eb',accentHover:'#1d4ed8',bgColor:'#f1f5f9',cardColor:'#ffffff',textColor:'#0f172a',textMuted:'#64748b',borderColor:'#e2e8f0',priceColor:'#2563eb',saleColor:'#f97316',successColor:'#10b981',headerFrom:'#3b82f6',headerTo:'#1d4ed8',headerText:'#ffffff',navBg:'#ffffff',navActive:'#2563eb',fontHeading:"'Cairo',sans-serif",fontBody:"'Tajawal',sans-serif"},
  green:{name:'أخضر طبيعي',sub:'طازج وودود',accentColor:'#16a34a',accentHover:'#15803d',bgColor:'#f0fdf4',cardColor:'#ffffff',textColor:'#14532d',textMuted:'#52796f',borderColor:'#d9f99d',priceColor:'#16a34a',saleColor:'#ea580c',successColor:'#10b981',headerFrom:'#22c55e',headerTo:'#15803d',headerText:'#ffffff',navBg:'#ffffff',navActive:'#16a34a',fontHeading:"'Tajawal',sans-serif",fontBody:"'Tajawal',sans-serif"},
  purple:{name:'بنفسجي فاخر',sub:'عصري وجذاب',accentColor:'#7c3aed',accentHover:'#6d28d9',bgColor:'#faf5ff',cardColor:'#ffffff',textColor:'#2e1065',textMuted:'#7c3aed',borderColor:'#ede9fe',priceColor:'#7c3aed',saleColor:'#ec4899',successColor:'#10b981',headerFrom:'#8b5cf6',headerTo:'#6d28d9',headerText:'#ffffff',navBg:'#ffffff',navActive:'#7c3aed',fontHeading:"'Cairo',sans-serif",fontBody:"'Tajawal',sans-serif"},
  sunset:{name:'غروب دافئ',sub:'طاقة وإثارة',accentColor:'#f97316',accentHover:'#ea580c',bgColor:'#fff7ed',cardColor:'#ffffff',textColor:'#431407',textMuted:'#9a3412',borderColor:'#fed7aa',priceColor:'#f97316',saleColor:'#e11d48',successColor:'#10b981',headerFrom:'#fb923c',headerTo:'#e11d48',headerText:'#ffffff',navBg:'#ffffff',navActive:'#f97316',fontHeading:"'Amiri',serif",fontBody:"'Tajawal',sans-serif"},
  ocean:{name:'محيطي',sub:'انسيابي',accentColor:'#0891b2',accentHover:'#0e7490',bgColor:'#ecfeff',cardColor:'#ffffff',textColor:'#083344',textMuted:'#0e7490',borderColor:'#cffafe',priceColor:'#0891b2',saleColor:'#db2777',successColor:'#10b981',headerFrom:'#06b6d4',headerTo:'#0e7490',headerText:'#ffffff',navBg:'#ffffff',navActive:'#0891b2',fontHeading:"'Tajawal',sans-serif",fontBody:"'Noto Sans Arabic',sans-serif"},
  minimal:{name:'أبيض مينيمال',sub:'نظيف وبسيط',accentColor:'#111827',accentHover:'#374151',bgColor:'#ffffff',cardColor:'#ffffff',textColor:'#111827',textMuted:'#9ca3af',borderColor:'#f3f4f6',priceColor:'#111827',saleColor:'#ef4444',successColor:'#10b981',headerFrom:'#ffffff',headerTo:'#f3f4f6',headerText:'#111827',navBg:'#ffffff',navActive:'#111827',fontHeading:"'Almarai',sans-serif",fontBody:"'Almarai',sans-serif"},
  dark:{name:'داكن أنيق',sub:'ليلي',accentColor:'#f43f5e',accentHover:'#e11d48',bgColor:'#0f172a',cardColor:'#1e293b',textColor:'#f8fafc',textMuted:'#94a3b8',borderColor:'#334155',priceColor:'#f43f5e',saleColor:'#f59e0b',successColor:'#10b981',headerFrom:'#1e293b',headerTo:'#0f172a',headerText:'#f8fafc',navBg:'#1e293b',navActive:'#f43f5e',fontHeading:"'Tajawal',sans-serif",fontBody:"'Tajawal',sans-serif",darkMode:true}
};

function getDefaultAppearance() {
  return {
    accentColor:'#ef4444',accentHover:'#dc2626',bgColor:'#f8fafc',cardColor:'#ffffff',textColor:'#1e293b',textMuted:'#64748b',borderColor:'#e2e8f0',priceColor:'#ef4444',saleColor:'#ef4444',successColor:'#10b981',
    darkMode:false,fontHeading:"'Tajawal',sans-serif",fontBody:"'Tajawal',sans-serif",fontSize:15,headingScale:1,fontWeight:700,lineHeight:1.5,
    showBanners:true,showFlashSales:true,showFeatured:true,showCategories:true,showBrands:true,gridColsDesktop:5,gridColsTablet:3,gridColsMobile:2,gridGap:14,
    imgRatio:'3/4',imgRadius:12,imgHoverZoom:true,imgLazyLoad:true,
    cardRadius:16,btnRadius:12,cardStyle:'shadow',btnStyle:'solid',shadows:true,shadowIntensity:1,
    stickyHeader:true,showSearch:true,showWishlist:true,headerFrom:'#ef4444',headerTo:'#dc2626',headerText:'#ffffff',headerPadding:40,
    navStyle:'default',showCartCount:true,showNavLabels:true,navBg:'#ffffff',navActive:'#ef4444',
    showBrand:true,showOldPrice:true,showDiscountBadge:true,showQuickAdd:true,
    pagePadding:16,sectionGap:24
  };
}

function loadAppearance() {
  const data = Object.assign(getDefaultAppearance(), JSON.parse(localStorage.getItem('mycart_appearance')) || {});
  applyAppearance(data);
}

function applyAppearance(data) {
  const d = Object.assign(getDefaultAppearance(), data || {});
  const root = document.documentElement;

  root.style.setProperty('--accent', d.accentColor);
  root.style.setProperty('--accent-hover', d.accentHover);
  root.style.setProperty('--bg', d.bgColor);
  root.style.setProperty('--card', d.cardColor);
  root.style.setProperty('--text', d.textColor);
  root.style.setProperty('--text-muted', d.textMuted);
  root.style.setProperty('--border', d.borderColor);
  root.style.setProperty('--price-color', d.priceColor);
  root.style.setProperty('--sale-color', d.saleColor);
  root.style.setProperty('--success-color', d.successColor);
  root.style.setProperty('--whatsapp', d.successColor);

  root.style.setProperty('--font-heading', d.fontHeading);
  root.style.setProperty('--font-body', d.fontBody);
  root.style.setProperty('--font-size-base', d.fontSize + 'px');
  root.style.setProperty('--heading-scale', d.headingScale);
  root.style.setProperty('--font-weight', d.fontWeight);
  root.style.setProperty('--line-height', d.lineHeight);

  root.style.setProperty('--grid-cols-desktop', d.gridColsDesktop);
  root.style.setProperty('--grid-cols-tablet', d.gridColsTablet);
  root.style.setProperty('--grid-cols-mobile', d.gridColsMobile);
  root.style.setProperty('--grid-gap', d.gridGap + 'px');

  root.style.setProperty('--img-ratio', d.imgRatio);
  root.style.setProperty('--img-radius', d.imgRadius + 'px');

  root.style.setProperty('--card-radius', d.cardRadius + 'px');
  root.style.setProperty('--btn-radius', d.btnRadius + 'px');

  const m = (d.shadowIntensity || 1);
  if (d.shadows) {
    root.style.setProperty('--shadow-sm', `0 1px 2px rgba(0,0,0,${0.05*m})`);
    root.style.setProperty('--shadow-md', `0 4px 6px rgba(0,0,0,${0.07*m})`);
    root.style.setProperty('--shadow-lg', `0 10px 25px rgba(0,0,0,${0.1*m})`);
  } else {
    root.style.setProperty('--shadow-sm', 'none');
    root.style.setProperty('--shadow-md', 'none');
    root.style.setProperty('--shadow-lg', 'none');
  }

  root.style.setProperty('--header-from', d.headerFrom);
  root.style.setProperty('--header-to', d.headerTo);
  root.style.setProperty('--header-text', d.headerText);
  root.style.setProperty('--header-padding', d.headerPadding + 'px');

  root.style.setProperty('--nav-bg', d.navBg);
  root.style.setProperty('--nav-active', d.navActive);

  root.style.setProperty('--page-padding', d.pagePadding + 'px');
  root.style.setProperty('--section-gap', d.sectionGap + 'px');

  // Body classes
  document.body.classList.toggle('dark-mode', !!d.darkMode);
  ['show-banners','show-flash-sales','show-featured','show-categories','show-brands','show-search','show-wishlist','show-cart-count','show-brand','show-old-price','show-discount-badge','show-quick-add','show-nav-labels','img-hover-zoom','img-lazy-load','sticky-header'].forEach(c => {
    const key = c.replace(/-([a-z])/g, (_,l) => l.toUpperCase());
    document.body.classList.toggle(c, d[key] !== false);
  });
  document.body.classList.remove('card-style-shadow','card-style-outline','card-style-flat');
  document.body.classList.add('card-style-' + (d.cardStyle || 'shadow'));
  document.body.classList.remove('btn-style-solid','btn-style-outline','btn-style-soft');
  document.body.classList.add('btn-style-' + (d.btnStyle || 'solid'));
  document.body.classList.remove('nav-style-default','nav-style-pill','nav-style-minimal');
  document.body.classList.add('nav-style-' + (d.navStyle || 'default'));

  if (typeof renderProducts === 'function' && typeof getFilteredProducts === 'function') {
    try { renderProducts(getFilteredProducts()); } catch(e) {}
  }
}

function toggleLayoutClass(className, enabled) {
  if (enabled) document.body.classList.add(className);
  else document.body.classList.remove(className);
}

function shadeColor(color, percent) {
  const num = parseInt((color || '#000000').replace('#',''), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt, G = (num >> 8 & 0x00FF) + amt, B = (num & 0x0000FF) + amt;
  return '#' + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1);
}

function readAppearanceForm() {
  const data = getDefaultAppearance();
  APPEARANCE_FIELDS.forEach(f => {
    const el = document.getElementById(f.id);
    if (!el) return;
    if (f.type === 'checkbox') data[f.key] = el.checked;
    else if (f.type === 'range') data[f.key] = parseFloat(el.value) * (f.scale || 1);
    else data[f.key] = el.value;
  });
  return data;
}

function fillAppearanceForm(data) {
  APPEARANCE_FIELDS.forEach(f => {
    const el = document.getElementById(f.id);
    if (!el) return;
    let v = data[f.key];
    if (v === undefined) return;
    if (f.type === 'checkbox') el.checked = !!v;
    else if (f.type === 'range') el.value = Math.round((f.scale ? v / f.scale : v));
    else el.value = v;
    const span = document.getElementById(f.id + 'Val');
    if (span) {
      let disp = (f.type === 'color') ? v : (f.scale ? (v / f.scale) : v);
      if (f.id === 'appHeadingScale') span.textContent = Math.round(v*100) + '%';
      else if (f.id === 'appLineHeight') span.textContent = (v).toFixed(1);
      else if (f.id === 'appShadowIntensity') span.textContent = Math.round(v*100) + '%';
      else if (f.type === 'range') span.textContent = disp + (f.id==='appFontSize'||f.id==='appImgRadius'||f.id==='appCardRadius'||f.id==='appBtnRadius'||f.id==='appGridGap'||f.id==='appHeaderPadding'||f.id==='appPagePadding'||f.id==='appSectionGap'?'px':'');
      else if (f.type === 'color') span.textContent = v;
    }
  });
}

function adminRenderAppearance() {
  const host = document.getElementById('admin-appearance');
  if (!host) return;
  if (!host.dataset.rendered) {
    host.innerHTML = `
      <div class="section-header">
        <h3>المظهر والتخطيط</h3>
        <div style="margin-right:auto;display:flex;gap:8px;flex-wrap:wrap">
          <button class="btn-secondary" onclick="resetAppearance()"><i class="fa-solid fa-rotate-left"></i> إعادة تعيين</button>
          <button class="btn-secondary" onclick="exportAppearance()"><i class="fa-solid fa-file-export"></i> تصدير</button>
          <button class="btn-secondary" onclick="document.getElementById('importAppearanceFile').click()"><i class="fa-solid fa-file-import"></i> استيراد</button>
          <input type="file" id="importAppearanceFile" accept=".json" style="display:none" onchange="importAppearance(event)">
          <button class="btn-primary" onclick="saveAppearance()"><i class="fa-solid fa-floppy-disk"></i> حفظ المظهر</button>
        </div>
      </div>
      <div class="appearance-layout">
        <nav class="appearance-nav">
          <button class="app-nav-btn active" data-sec="presets" onclick="switchAppSec(this)"><i class="fa-solid fa-wand-magic-sparkles"></i> الثيمات الجاهزة</button>
          <button class="app-nav-btn" data-sec="colors" onclick="switchAppSec(this)"><i class="fa-solid fa-palette"></i> الألوان</button>
          <button class="app-nav-btn" data-sec="typography" onclick="switchAppSec(this)"><i class="fa-solid fa-font"></i> الخطوط</button>
          <button class="app-nav-btn" data-sec="layout" onclick="switchAppSec(this)"><i class="fa-solid fa-columns"></i> التخطيط</button>
          <button class="app-nav-btn" data-sec="images" onclick="switchAppSec(this)"><i class="fa-solid fa-image"></i> صور المنتجات</button>
          <button class="app-nav-btn" data-sec="cards" onclick="switchAppSec(this)"><i class="fa-solid fa-border-all"></i> البطاقات والأزرار</button>
          <button class="app-nav-btn" data-sec="header" onclick="switchAppSec(this)"><i class="fa-solid fa-mobile-screen"></i> الهيدر</button>
          <button class="app-nav-btn" data-sec="nav" onclick="switchAppSec(this)"><i class="fa-solid fa-bars"></i> التنقل السفلي</button>
          <button class="app-nav-btn" data-sec="product" onclick="switchAppSec(this)"><i class="fa-solid fa-tags"></i> عناصر المنتج</button>
          <button class="app-nav-btn" data-sec="spacing" onclick="switchAppSec(this)"><i class="fa-solid fa-arrows-left-right"></i> المسافات</button>
        </nav>
        <div class="appearance-panels">
          <section class="app-panel active" id="appsec-presets">
            <h4 class="app-sec-title"><i class="fa-solid fa-wand-magic-sparkles"></i> ثيمات جاهزة</h4>
            <p class="app-sec-desc">اختر ثيماً جاهزاً يطبّق مجموعة متناسقة من الألوان والخطوط دفعة واحدة.</p>
            <div class="preset-grid" id="presetGrid"></div>
          </section>
          <section class="app-panel" id="appsec-colors">
            <h4 class="app-sec-title"><i class="fa-solid fa-palette"></i> الألوان</h4>
            <div class="app-fields">
              <div class="app-field"><label>اللون الأساسي (Accent)</label><div class="color-row"><input type="color" id="appAccent" oninput="updVal('appAccent');previewAppearance()"><span id="appAccentVal" class="color-val">#ef4444</span></div></div>
              <div class="app-field"><label>لون التمرير (Accent Hover)</label><div class="color-row"><input type="color" id="appAccentHover" oninput="updVal('appAccentHover');previewAppearance()"><span id="appAccentHoverVal" class="color-val">#dc2626</span></div></div>
              <div class="app-field"><label>لون الخلفية</label><div class="color-row"><input type="color" id="appBgColor" oninput="updVal('appBgColor');previewAppearance()"><span id="appBgColorVal" class="color-val">#f8fafc</span></div></div>
              <div class="app-field"><label>لون البطاقات</label><div class="color-row"><input type="color" id="appCardColor" oninput="updVal('appCardColor');previewAppearance()"><span id="appCardColorVal" class="color-val">#ffffff</span></div></div>
              <div class="app-field"><label>لون النصوص</label><div class="color-row"><input type="color" id="appTextColor" oninput="updVal('appTextColor');previewAppearance()"><span id="appTextColorVal" class="color-val">#1e293b</span></div></div>
              <div class="app-field"><label>لون النصوص الخافتة</label><div class="color-row"><input type="color" id="appTextMuted" oninput="updVal('appTextMuted');previewAppearance()"><span id="appTextMutedVal" class="color-val">#64748b</span></div></div>
              <div class="app-field"><label>لون الحدود</label><div class="color-row"><input type="color" id="appBorderColor" oninput="updVal('appBorderColor');previewAppearance()"><span id="appBorderColorVal" class="color-val">#e2e8f0</span></div></div>
              <div class="app-field"><label>لون السعر</label><div class="color-row"><input type="color" id="appPriceColor" oninput="updVal('appPriceColor');previewAppearance()"><span id="appPriceColorVal" class="color-val">#ef4444</span></div></div>
              <div class="app-field"><label>لون شارة الخصم</label><div class="color-row"><input type="color" id="appSaleColor" oninput="updVal('appSaleColor');previewAppearance()"><span id="appSaleColorVal" class="color-val">#ef4444</span></div></div>
              <div class="app-field"><label>لون النجاح (تأكيد/وتساب)</label><div class="color-row"><input type="color" id="appSuccessColor" oninput="updVal('appSuccessColor');previewAppearance()"><span id="appSuccessColorVal" class="color-val">#10b981</span></div></div>
              <div class="app-field app-field-full"><label style="display:flex;align-items:center;gap:8px;cursor:pointer"><input type="checkbox" id="appDarkMode" onchange="previewAppearance()"> تفعيل الوضع الداكن افتراضياً</label></div>
            </div>
          </section>
          <section class="app-panel" id="appsec-typography">
            <h4 class="app-sec-title"><i class="fa-solid fa-font"></i> الخطوط</h4>
            <div class="app-fields">
              <div class="app-field"><label>خط العناوين</label><select id="appFontHeading" onchange="previewAppearance()"><option value="'Tajawal',sans-serif">Tajawal</option><option value="'Cairo',sans-serif">Cairo</option><option value="'Amiri',serif">Amiri</option><option value="'Noto Sans Arabic',sans-serif">Noto Sans Arabic</option><option value="'Almarai',sans-serif">Almarai</option></select></div>
              <div class="app-field"><label>خط المحتوى</label><select id="appFontBody" onchange="previewAppearance()"><option value="'Tajawal',sans-serif">Tajawal</option><option value="'Cairo',sans-serif">Cairo</option><option value="'Amiri',serif">Amiri</option><option value="'Noto Sans Arabic',sans-serif">Noto Sans Arabic</option><option value="'Almarai',sans-serif">Almarai</option></select></div>
              <div class="app-field"><label>حجم الخط الأساسي</label><div class="color-row"><input type="range" id="appFontSize" min="13" max="18" value="15" oninput="updVal('appFontSize','px');previewAppearance()"><span id="appFontSizeVal" class="color-val">15px</span></div></div>
              <div class="app-field"><label>مقياس العناوين</label><div class="color-row"><input type="range" id="appHeadingScale" min="90" max="130" value="100" oninput="updVal('appHeadingScale','%');previewAppearance()"><span id="appHeadingScaleVal" class="color-val">100%</span></div></div>
              <div class="app-field"><label>وزن الخط</label><select id="appFontWeight" onchange="previewAppearance()"><option value="400">عادي</option><option value="500">متوسط</option><option value="700" selected>عريض</option><option value="800">عريض جداً</option></select></div>
              <div class="app-field"><label>ارتفاع السطر</label><div class="color-row"><input type="range" id="appLineHeight" min="13" max="20" value="15" oninput="updVal('appLineHeight','.');previewAppearance()"><span id="appLineHeightVal" class="color-val">1.5</span></div></div>
            </div>
          </section>
          <section class="app-panel" id="appsec-layout">
            <h4 class="app-sec-title"><i class="fa-solid fa-columns"></i> تخطيط الصفحة الرئيسية</h4>
            <div class="app-fields">
              <div class="app-field app-field-full app-toggles">
                <label class="app-toggle"><input type="checkbox" id="appShowBanners" onchange="previewAppearance()"> البانرات</label>
                <label class="app-toggle"><input type="checkbox" id="appShowFlashSales" onchange="previewAppearance()"> عروض فلاش</label>
                <label class="app-toggle"><input type="checkbox" id="appShowFeatured" onchange="previewAppearance()"> المميزة</label>
                <label class="app-toggle"><input type="checkbox" id="appShowCategories" onchange="previewAppearance()"> التصنيفات</label>
                <label class="app-toggle"><input type="checkbox" id="appShowBrands" onchange="previewAppearance()"> الماركات</label>
              </div>
              <div class="app-field"><label>أعمدة (كمبيوتر)</label><select id="appGridColsDesktop" onchange="previewAppearance()"><option value="3">3</option><option value="4">4</option><option value="5" selected>5</option><option value="6">6</option><option value="7">7</option></select></div>
              <div class="app-field"><label>أعمدة (تابلت)</label><select id="appGridColsTablet" onchange="previewAppearance()"><option value="2">2</option><option value="3" selected>3</option><option value="4">4</option></select></div>
              <div class="app-field"><label>أعمدة (جوال)</label><select id="appGridColsMobile" onchange="previewAppearance()"><option value="1">1</option><option value="2" selected>2</option><option value="3">3</option></select></div>
              <div class="app-field"><label>تباعد الشبكة</label><div class="color-row"><input type="range" id="appGridGap" min="6" max="24" value="14" oninput="updVal('appGridGap','px');previewAppearance()"><span id="appGridGapVal" class="color-val">14px</span></div></div>
            </div>
          </section>
          <section class="app-panel" id="appsec-images">
            <h4 class="app-sec-title"><i class="fa-solid fa-image"></i> صور المنتجات</h4>
            <div class="app-fields">
              <div class="app-field"><label>نسبة الصورة</label><select id="appImgRatio" onchange="previewAppearance()"><option value="1">مربع 1:1</option><option value="4/3">4:3</option><option value="3/4" selected>3:4 عمودي</option><option value="16/9">16:9 عرضي</option></select></div>
              <div class="app-field"><label>زوايا الصورة</label><div class="color-row"><input type="range" id="appImgRadius" min="0" max="24" value="12" oninput="updVal('appImgRadius','px');previewAppearance()"><span id="appImgRadiusVal" class="color-val">12px</span></div></div>
              <div class="app-field app-field-full app-toggles">
                <label class="app-toggle"><input type="checkbox" id="appImgHoverZoom" onchange="previewAppearance()"> تكبير عند التحويم</label>
                <label class="app-toggle"><input type="checkbox" id="appImgLazyLoad" onchange="previewAppearance()"> تحميل كسول</label>
              </div>
            </div>
          </section>
          <section class="app-panel" id="appsec-cards">
            <h4 class="app-sec-title"><i class="fa-solid fa-border-all"></i> البطاقات والأزرار</h4>
            <div class="app-fields">
              <div class="app-field"><label>زوايا البطاقات</label><div class="color-row"><input type="range" id="appCardRadius" min="0" max="28" value="16" oninput="updVal('appCardRadius','px');previewAppearance()"><span id="appCardRadiusVal" class="color-val">16px</span></div></div>
              <div class="app-field"><label>زوايا الأزرار</label><div class="color-row"><input type="range" id="appBtnRadius" min="0" max="28" value="12" oninput="updVal('appBtnRadius','px');previewAppearance()"><span id="appBtnRadiusVal" class="color-val">12px</span></div></div>
              <div class="app-field"><label>ستايل البطاقة</label><select id="appCardStyle" onchange="previewAppearance()"><option value="shadow" selected>ظل</option><option value="outline">إطار</option><option value="flat">مسطح</option></select></div>
              <div class="app-field"><label>ستايل الزر</label><select id="appBtnStyle" onchange="previewAppearance()"><option value="solid" selected>معبأ</option><option value="outline">إطار</option><option value="soft">ناعم</option></select></div>
              <div class="app-field app-field-full app-toggles">
                <label class="app-toggle"><input type="checkbox" id="appShadows" onchange="previewAppearance()"> تفعيل الظلال</label>
              </div>
              <div class="app-field"><label>شدة الظل</label><div class="color-row"><input type="range" id="appShadowIntensity" min="0" max="200" value="100" oninput="updVal('appShadowIntensity','%');previewAppearance()"><span id="appShadowIntensityVal" class="color-val">100%</span></div></div>
            </div>
          </section>
          <section class="app-panel" id="appsec-header">
            <h4 class="app-sec-title"><i class="fa-solid fa-mobile-screen"></i> الهيدر</h4>
            <div class="app-fields">
              <div class="app-field app-field-full app-toggles">
                <label class="app-toggle"><input type="checkbox" id="appStickyHeader" onchange="previewAppearance()"> هيدر ثابت</label>
                <label class="app-toggle"><input type="checkbox" id="appShowSearch" onchange="previewAppearance()"> زر البحث</label>
                <label class="app-toggle"><input type="checkbox" id="appShowWishlist" onchange="previewAppearance()"> المفضلة</label>
              </div>
              <div class="app-field"><label>بداية تدرج الهيدر</label><div class="color-row"><input type="color" id="appHeaderFrom" oninput="updVal('appHeaderFrom');previewAppearance()"><span id="appHeaderFromVal" class="color-val">#ef4444</span></div></div>
              <div class="app-field"><label>نهاية تدرج الهيدر</label><div class="color-row"><input type="color" id="appHeaderTo" oninput="updVal('appHeaderTo');previewAppearance()"><span id="appHeaderToVal" class="color-val">#dc2626</span></div></div>
              <div class="app-field"><label>لون نص الهيدر</label><div class="color-row"><input type="color" id="appHeaderText" oninput="updVal('appHeaderText');previewAppearance()"><span id="appHeaderTextVal" class="color-val">#ffffff</span></div></div>
              <div class="app-field"><label>ارتفاع الهيدر</label><div class="color-row"><input type="range" id="appHeaderPadding" min="20" max="70" value="40" oninput="updVal('appHeaderPadding','px');previewAppearance()"><span id="appHeaderPaddingVal" class="color-val">40px</span></div></div>
            </div>
          </section>
          <section class="app-panel" id="appsec-nav">
            <h4 class="app-sec-title"><i class="fa-solid fa-bars"></i> التنقل السفلي</h4>
            <div class="app-fields">
              <div class="app-field"><label>النمط</label><select id="appNavStyle" onchange="previewAppearance()"><option value="default" selected>افتراضي</option><option value="pill">أقراص</option><option value="minimal">مبسط</option></select></div>
              <div class="app-field app-field-full app-toggles">
                <label class="app-toggle"><input type="checkbox" id="appShowCartCount" onchange="previewAppearance()"> عداد السلة</label>
                <label class="app-toggle"><input type="checkbox" id="appShowNavLabels" onchange="previewAppearance()"> تسميات الأيقونات</label>
              </div>
              <div class="app-field"><label>خلفية التنقل</label><div class="color-row"><input type="color" id="appNavBg" oninput="updVal('appNavBg');previewAppearance()"><span id="appNavBgVal" class="color-val">#ffffff</span></div></div>
              <div class="app-field"><label>لون العنصر النشط</label><div class="color-row"><input type="color" id="appNavActive" oninput="updVal('appNavActive');previewAppearance()"><span id="appNavActiveVal" class="color-val">#ef4444</span></div></div>
            </div>
          </section>
          <section class="app-panel" id="appsec-product">
            <h4 class="app-sec-title"><i class="fa-solid fa-tags"></i> عناصر المنتج</h4>
            <div class="app-fields">
              <div class="app-field app-field-full app-toggles">
                <label class="app-toggle"><input type="checkbox" id="appShowBrand" onchange="previewAppearance()"> الماركة</label>
                <label class="app-toggle"><input type="checkbox" id="appShowOldPrice" onchange="previewAppearance()"> السعر القديم</label>
                <label class="app-toggle"><input type="checkbox" id="appShowDiscountBadge" onchange="previewAppearance()"> شارة الخصم</label>
                <label class="app-toggle"><input type="checkbox" id="appShowQuickAdd" onchange="previewAppearance()"> زر الإضافة السريعة</label>
              </div>
            </div>
          </section>
          <section class="app-panel" id="appsec-spacing">
            <h4 class="app-sec-title"><i class="fa-solid fa-arrows-left-right"></i> المسافات</h4>
            <div class="app-fields">
              <div class="app-field"><label>هامش الصفحة</label><div class="color-row"><input type="range" id="appPagePadding" min="0" max="32" value="16" oninput="updVal('appPagePadding','px');previewAppearance()"><span id="appPagePaddingVal" class="color-val">16px</span></div></div>
              <div class="app-field"><label>تباعد الأقسام</label><div class="color-row"><input type="range" id="appSectionGap" min="8" max="48" value="24" oninput="updVal('appSectionGap','px');previewAppearance()"><span id="appSectionGapVal" class="color-val">24px</span></div></div>
            </div>
          </section>
        </div>
      </div>
      <div id="appearanceStatus" style="font-size:.8rem;color:var(--text-muted);margin-top:12px"></div>`;
    host.dataset.rendered = '1';
  }
  adminLoadAppearance();
}

function adminLoadAppearance() {
  const data = Object.assign(getDefaultAppearance(), JSON.parse(localStorage.getItem('mycart_appearance')) || {});
  fillAppearanceForm(data);
  renderPresetGrid(data);
  previewAppearance();
}

function toggleAppearancePanel() {
  openAdmin();
  switchAdminTab('appearance');
}

function previewAppearance() {
  applyAppearance(readAppearanceForm());
}

function saveAppearance() {
  const data = readAppearanceForm();
  try { localStorage.setItem('mycart_appearance', JSON.stringify(data)); }
  catch(e) { showToast('⚠️ مساحة التخزين ممتلئة', 'error'); return; }
  applyAppearance(data);
  const st = document.getElementById('appearanceStatus');
  if (st) { st.textContent = '✅ تم حفظ المظهر بنجاح'; st.style.color = '#10b981'; setTimeout(() => { st.textContent=''; }, 3000); }
  showToast('✅ تم حفظ المظهر', 'success');
}

function resetAppearance() {
  const defaults = getDefaultAppearance();
  localStorage.setItem('mycart_appearance', JSON.stringify(defaults));
  fillAppearanceForm(defaults);
  applyAppearance(defaults);
  renderPresetGrid(defaults);
  showToast('✅ تمت إعادة تعيين المظهر للافتراضي', 'success');
}

function exportAppearance() {
  const data = localStorage.getItem('mycart_appearance');
  if (!data) { showToast('لا يوجد مظهر للتصدير', 'error'); return; }
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'mycart-theme-' + new Date().toISOString().slice(0,10) + '.json';
  a.click();
  URL.revokeObjectURL(url);
  showToast('✅ تم تصدير الثيم', 'success');
}

function importAppearance(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = Object.assign(getDefaultAppearance(), JSON.parse(e.target.result));
      localStorage.setItem('mycart_appearance', JSON.stringify(data));
      fillAppearanceForm(data);
      applyAppearance(data);
      renderPresetGrid(data);
      showToast('✅ تم استيراد الثيم بنجاح', 'success');
    } catch(err) { showToast('⚠️ ملف غير صالح', 'error'); }
    event.target.value = '';
  };
  reader.readAsText(file);
}

function switchAppSec(btn) {
  document.querySelectorAll('.app-nav-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.app-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  const sec = document.getElementById('appsec-' + btn.dataset.sec);
  if (sec) sec.classList.add('active');
}

function updVal(id, suffix) {
  const el = document.getElementById(id);
  const span = document.getElementById(id + 'Val');
  if (!el || !span) return;
  let v = el.value;
  if (suffix === '.') v = (parseFloat(v) / 10).toFixed(1);
  span.textContent = v + (suffix === '.' ? '' : (suffix || ''));
}

function renderPresetGrid(current) {
  const grid = document.getElementById('presetGrid');
  if (!grid) return;
  grid.innerHTML = Object.entries(THEME_PRESETS).map(([key,p]) => `
    <div class="preset-card" onclick="applyPreset('${key}')">
      <div class="preset-swatch"><span style="background:${p.headerFrom}"></span><span style="background:${p.accentColor}"></span><span style="background:${p.bgColor}"></span><span style="background:${p.textColor}"></span></div>
      <div class="preset-name">${p.name}</div>
      <div class="preset-sub">${p.sub}</div>
    </div>`).join('');
}

function applyPreset(key) {
  const p = THEME_PRESETS[key];
  if (!p) return;
  // Merge preset color/font values into current settings (keep layout/structure)
  const cur = readAppearanceForm();
  const merged = Object.assign(cur, {
    accentColor:p.accentColor,accentHover:p.accentHover,bgColor:p.bgColor,cardColor:p.cardColor,textColor:p.textColor,textMuted:p.textMuted,borderColor:p.borderColor,priceColor:p.priceColor,saleColor:p.saleColor,successColor:p.successColor,headerFrom:p.headerFrom,headerTo:p.headerTo,headerText:p.headerText,navBg:p.navBg,navActive:p.navActive,fontHeading:p.fontHeading,fontBody:p.fontBody,darkMode:!!p.darkMode
  });
  fillAppearanceForm(merged);
  applyAppearance(merged);
  showToast('✅ تم تطبيق ثيم: ' + p.name, 'success');
}


// ===== ADMIN MARKETING =====
function adminRenderMarketing(subTab = 'seo') {
  const container = document.getElementById('admin-marketing');
  const data = JSON.parse(localStorage.getItem('mycart_marketing')) || {};
  const currentOrigin = window.location.origin + '/';
  
  let html = '';

  if (subTab === 'seo') {
    html = `<div class="admin-settings-grid">
      <div class="admin-card"><h4><i class="fa-solid fa-magnifying-glass"></i> تحسين محركات البحث (SEO)</h4>
        <div class="admin-form-group"><label>عنوان الموقع</label><input type="text" id="admMktSeoTitle" placeholder="متجري - أفضل متجر إلكتروني" value="${data.seo?.title||''}" oninput="updateAdminSeoPreview()"></div>
        <div class="admin-form-group"><label>وصف الموقع</label><textarea id="admMktSeoDesc" rows="2" placeholder="وصف مختصر للموقع يظهر في محركات البحث" oninput="updateAdminSeoPreview()">${data.seo?.description||''}</textarea></div>
        <div class="admin-form-group"><label>كلمات مفتاحية</label><input type="text" id="admMktSeoKeywords" placeholder="متجر, تسوق, منتجات, ..." value="${data.seo?.keywords||''}"></div>
        
        <!-- SEO Preview -->
        <div class="seo-preview-card" style="margin-top: 15px; padding: 14px; border: 1px solid var(--border); border-radius: 12px; background: #f8fafc;">
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 8px; font-weight: 700; display: flex; align-items: center; gap: 6px;">
            <i class="fa-solid fa-eye"></i> مظهر محركات البحث (SEO)
          </div>
          <div id="admMktSeoPreviewUrl" style="font-size: 0.72rem; color: #475569; direction: ltr; text-align: right; margin-bottom: 2px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${currentOrigin}</div>
          <div id="admMktSeoPreviewTitle" style="font-size: 1.1rem; color: #1a0dab; font-weight: 500; cursor: pointer; text-decoration: none; margin-bottom: 4px; display: inline-block; word-break: break-word; font-family: sans-serif;">${data.seo?.title || 'متجري - أفضل متجر إلكتروني'}</div>
          <div id="admMktSeoPreviewDesc" style="font-size: 0.82rem; color: #4d5156; line-height: 1.4; word-break: break-word; font-family: sans-serif;">${data.seo?.description || 'وصف مختصر للموقع يظهر في محركات البحث'}</div>
        </div>
      </div>
      <div class="admin-card"><h4><i class="fa-solid fa-images"></i> البانرات</h4>
        <div id="admBannersList">${adminRenderBannersList(data.banners||[])}</div>
        <button class="admin-btn admin-btn-secondary admin-btn-sm" onclick="adminAddBanner()" style="margin-top:8px"><i class="fa-solid fa-plus"></i> إضافة بانر</button>
      </div>
    </div>`;
  } else if (subTab === 'social') {
    html = `<div class="admin-settings-grid">
      <div class="admin-card"><h4><i class="fa-solid fa-share-nodes"></i> التواصل الاجتماعي</h4>
        <div class="admin-form-group"><label><i class="fa-brands fa-facebook"></i> فيسبوك</label><input type="url" id="admMktSocialFb" placeholder="https://facebook.com/..." value="${data.social?.facebook||''}"></div>
        <div class="admin-form-group"><label><i class="fa-brands fa-instagram"></i> إنستغرام</label><input type="url" id="admMktSocialIg" placeholder="https://instagram.com/..." value="${data.social?.instagram||''}"></div>
        <div class="admin-form-group"><label><i class="fa-brands fa-x-twitter"></i> تويتر / X</label><input type="url" id="admMktSocialX" placeholder="https://twitter.com/..." value="${data.social?.twitter||''}"></div>
        <div class="admin-form-group"><label><i class="fa-brands fa-tiktok"></i> تيك توك</label><input type="url" id="admMktSocialTt" placeholder="https://tiktok.com/..." value="${data.social?.tiktok||''}"></div>
        <div class="admin-form-group"><label><i class="fa-brands fa-whatsapp"></i> واتساب</label><input type="url" id="admMktSocialWa" placeholder="https://wa.me/..." value="${data.social?.whatsapp||''}"></div>
      </div>
      <div class="admin-card"><h4><i class="fa-solid fa-code"></i> أكواد التتبع</h4>
        <div class="admin-form-group"><label>Google Analytics ID</label><input type="text" id="admMktGaId" placeholder="G-XXXXXXXXXX" value="${data.tracking?.gaId||''}"></div>
        <div class="admin-form-group"><label>Facebook Pixel ID</label><input type="text" id="admMktFbPixel" placeholder="1234567890" value="${data.tracking?.fbPixel||''}"></div>
        <div class="admin-form-group"><label>كود الرأس (head)</label><textarea id="admMktHeadScript" rows="3" placeholder="أكواد توضع داخل <head>">${data.tracking?.headerScript||''}</textarea></div>
        <div class="admin-form-group"><label>كود التذييل (قبل إغلاق body)</label><textarea id="admMktFooterScript" rows="3" placeholder="أكواد توضع قبل إغلاق </body>">${data.tracking?.footerScript||''}</textarea></div>
      </div>
      <div class="admin-card"><h4>🔗 أزرار مشاركة المنتجات</h4>
        <label style="display:flex;align-items:center;gap:8px;cursor:pointer">
          <input type="checkbox" id="admMktShareShow" style="width:16px;height:16px" ${data.share?.show ? 'checked' : ''}> تفعيل أزرار مشاركة المنتجات
        </label>
        <p style="font-size:0.7rem;color:var(--text-muted);margin:4px 0 0">يعرض أزرار لنشر روابط المنتجات عبر فيسبوك، واتساب وتويتر.</p>
      </div>
      <div class="admin-card"><h4>🎁 النافذة الترويجية المنبثقة</h4>
        <label style="display:flex;align-items:center;gap:8px;cursor:pointer">
          <input type="checkbox" id="admMktPromoPopupShow" style="width:16px;height:16px" ${data.promoPopup?.show ? 'checked' : ''}> تفعيل النافذة الترويجية
        </label>
        <p style="font-size:0.7rem;color:var(--text-muted);margin:4px 0 8px">نافذة ترحيبية تظهر للزائر تقدم له كود خصم فوري.</p>
        <div style="margin-top:8px;display:flex;flex-direction:column;gap:6px">
          <input type="text" id="admMktPromoPopupTitle" placeholder="عنوان النافذة" value="${data.promoPopup?.title||''}">
          <input type="text" id="admMktPromoPopupText" placeholder="نص وصفي للعرض" value="${data.promoPopup?.text||''}">
          <input type="text" id="admMktPromoPopupCode" placeholder="كود الخصم" value="${data.promoPopup?.code||''}" style="font-weight:800;letter-spacing:1px">
        </div>
      </div>
    </div>`;
  } else if (subTab === 'offers') {
    html = `<div class="admin-settings-grid">
      <div class="admin-card"><h4>🏷️ عروض الكميات التراكمية</h4>
        <label style="display:flex;align-items:center;gap:8px;cursor:pointer">
          <input type="checkbox" id="admMktVolDiscShow" style="width:16px;height:16px" ${data.volumeDiscount?.show ? 'checked' : ''}> تفعيل عروض الكميات
        </label>
        <p style="font-size:0.7rem;color:var(--text-muted);margin:4px 0 8px">تخفيض تلقائي للعملاء عند إضافة كمية أكبر من نفس المنتج.</p>
        <div style="margin-top:8px;display:flex;flex-direction:column;gap:8px">
          <div style="display:flex;align-items:center;gap:8px">
            <span style="font-size:0.75rem;font-weight:700">نوع الخصم:</span>
            <select id="admMktVolDiscType" style="padding:6px;border:1px solid var(--border);border-radius:8px;font-size:0.8rem;background:var(--card);color:var(--text)" onchange="
              const t = this.value;
              document.getElementById('admVolDiscVal').style.display = t==='bogo'?'none':'flex';
              document.getElementById('admVolDiscBogo').style.display = t==='bogo'?'flex':'none';
            ">
              <option value="percent" ${data.volumeDiscount?.type==='percent'?'selected':''}>نسبة مئوية (%)</option>
              <option value="fixed" ${data.volumeDiscount?.type==='fixed'?'selected':''}>قيمة ثابتة (₪)</option>
              <option value="bogo" ${data.volumeDiscount?.type==='bogo'?'selected':''}>اشترِ X واحصل على Y مجاناً</option>
            </select>
          </div>
          <div id="admVolDiscVal" style="display:${data.volumeDiscount?.type==='bogo'?'none':'flex'};gap:8px;align-items:center;flex-wrap:wrap">
            <div style="display:flex;align-items:center;gap:4px">
              <span style="font-size:0.7rem;color:var(--text-muted)">عند شراء 2:</span>
              <input type="number" id="admMktVolDisc2" min="1" value="${data.volumeDiscount?.disc2||5}" style="width:60px">
            </div>
            <div style="display:flex;align-items:center;gap:4px">
              <span style="font-size:0.7rem;color:var(--text-muted)">عند شراء 3+:</span>
              <input type="number" id="admMktVolDisc3" min="1" value="${data.volumeDiscount?.disc3||10}" style="width:60px">
            </div>
          </div>
          <div id="admVolDiscBogo" style="display:${data.volumeDiscount?.type==='bogo'?'flex':'none'};gap:8px;align-items:center;flex-wrap:wrap">
            <span style="font-size:0.7rem;color:var(--text-muted)">اشترِ:</span>
            <input type="number" id="admMktVolBogoBuy" min="1" value="${data.volumeDiscount?.bogoBuy||2}" style="width:50px">
            <span style="font-size:0.7rem;color:var(--text-muted)">واحصل على:</span>
            <input type="number" id="admMktVolBogoGet" min="1" value="${data.volumeDiscount?.bogoGet||1}" style="width:50px">
            <span style="font-size:0.7rem;color:var(--text-muted)">مجاناً!</span>
          </div>
        </div>
      </div>
      <div class="admin-card"><h4>📦 حزمة "اشترِ معاً ووفر"</h4>
        <label style="display:flex;align-items:center;gap:8px;cursor:pointer">
          <input type="checkbox" id="admMktFbtShow" style="width:16px;height:16px" ${data.fbt?.show ? 'checked' : ''}> 📦 حزمة "اشترِ معاً ووفر" (منتجات مكملة)
        </label>
        <p style="font-size:0.7rem;color:var(--text-muted);margin:4px 0 8px">عرض حزمة لمنتجين متكاملين معاً بخصم إضافي لتحفيز الشراء المزدوج بضغطة زر.</p>
        <div style="margin-top:8px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
          <span style="font-size:0.75rem">خصم الحزمة:</span>
          <input type="number" id="admMktFbtDiscount" value="${data.fbt?.discount || 10}" style="width:60px">
          <select id="admMktFbtDiscountType" style="padding:6px;border:1px solid var(--border);border-radius:8px;font-size:0.8rem;background:var(--card);color:var(--text)">
            <option value="percent" ${data.fbt?.discountType==='percent'?'selected':''}>% نسبة مئوية</option>
            <option value="fixed" ${data.fbt?.discountType==='fixed'?'selected':''}>قيمة ثابتة (${CURRENCY})</option>
          </select>
        </div>
      </div>
      <div class="admin-card"><h4>🚚 شريط تقدم الشحن المجاني</h4>
        <label style="display:flex;align-items:center;gap:8px;cursor:pointer;margin-bottom:8px">
          <input type="checkbox" id="admMktFreeShippingShow" style="width:16px;height:16px" ${data.freeShipping?.show ? 'checked' : ''}> 🚚 تفعيل شريط التقدم للشحن المجاني
        </label>
        <p style="font-size:0.7rem;color:var(--text-muted);margin:4px 0 8px">شريط ملون متحرك في السلة يشجع العميل على زيادة مشترياته للحصول على توصيل مجاني.</p>
        <div style="display:flex;align-items:center;gap:8px;padding-right:24px">
          <span style="font-size:0.75rem;color:var(--text-muted)">الحد الأدنى للشحن المجاني:</span>
          <input type="number" id="admMktFreeShippingGoal" min="0" value="${data.freeShipping?.goal || 300}" style="width:80px">
        </div>
      </div>
      <div class="admin-card" style="grid-column:1/-1"><h4>📱 تحويل الطلبات تلقائياً إلى واتساب</h4>
        <label style="display:flex;align-items:center;gap:8px;cursor:pointer">
          <input type="checkbox" id="admMktWaNotifShow" style="width:16px;height:16px" ${data.waNotif?.show !== false ? 'checked' : ''}> 📱 تحويل العميل للواتساب تلقائياً بعد إتمام الطلب
        </label>
        <p style="font-size:0.7rem;color:var(--text-muted);margin:4px 0 0">يفتح تطبيق واتساب بالرسالة وتفاصيل الفاتورة فور نقر المشتري على "إتمام الطلب" لتأكيد سريع.</p>
      </div>
      <div class="admin-card"><h4>⚡ عروض فلاش اليوم</h4>
        <label style="display:flex;align-items:center;gap:8px;cursor:pointer;margin-bottom:8px">
          <input type="checkbox" id="admMktFlashSalesShow" style="width:16px;height:16px" ${data.flashSales?.show ? 'checked' : ''}> ⚡ تفعيل قسم "عروض فلاش اليوم" في الصفحة الرئيسية
        </label>
        <p style="font-size:0.7rem;color:var(--text-muted);margin:4px 0 8px">يعرض منتجات بخصم 20%+ مع عداد تنازلي لنهاية اليوم.</p>
      </div>
    </div>`;
  } else if (subTab === 'widgets') {
    html = `<div class="admin-settings-grid">
      <div class="admin-card"><h4>📢 شريط الإعلان العلوي</h4>
        <label style="display:flex;align-items:center;gap:8px;cursor:pointer">
          <input type="checkbox" id="admMktAnnounceShow" style="width:16px;height:16px" ${data.announce?.show ? 'checked' : ''}> تفعيل شريط الإعلان العلوي
        </label>
        <p style="font-size:0.7rem;color:var(--text-muted);margin:4px 0 8px">شريط نصي ملون في أعلى شاشة المتجر لجذب الانتباه (مثال: عروض مميزة بمناسبة الأعياد).</p>
        <div style="margin-top: 8px;">
          <input type="text" id="admMktAnnounceText" placeholder="نص الإعلان (مثال: شحن مجاني للطلبات فوق 200 ₪! 🚚)" value="${data.announce?.text||''}" style="margin-bottom:6px">
          <div style="display:flex;gap:10px;align-items:center">
            <label style="font-size:0.75rem">لون الخلفية:</label>
            <input type="color" id="admMktAnnounceBg" value="${data.announce?.bg||'#ef4444'}" style="width:40px;height:30px;border:none;cursor:pointer">
            <label style="font-size:0.75rem;margin-right:10px">لون النص:</label>
            <input type="color" id="admMktAnnounceColor" value="${data.announce?.color||'#ffffff'}" style="width:40px;height:30px;border:none;cursor:pointer">
          </div>
        </div>
      </div>
      <div class="admin-card"><h4>⏳ عداد العرض التنازلي للمنتجات</h4>
        <label style="display:flex;align-items:center;gap:8px;cursor:pointer">
          <input type="checkbox" id="admMktCountdownShow" style="width:16px;height:16px" ${data.countdown?.show ? 'checked' : ''}> تفعيل عداد العرض التنازلي للمنتجات
        </label>
        <p style="font-size:0.7rem;color:var(--text-muted);margin:4px 0 8px">عداد تنازلي وهمي يظهر داخل تفاصيل المنتج لخلق شعور بالاستعجال للشراء.</p>
        <div style="margin-top: 8px; display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 0.75rem;">مدة العداد (بالدقائق):</span>
          <input type="number" id="admMktCountdownDuration" min="1" max="1440" value="${data.countdown?.duration||180}" style="width:80px">
        </div>
      </div>
      <div class="admin-card"><h4>🔥 عداد المشاهدين الحيّ في صفحة المنتج</h4>
        <label style="display:flex;align-items:center;gap:8px;cursor:pointer">
          <input type="checkbox" id="admMktLiveViewersShow" style="width:16px;height:16px" ${data.liveViewers?.show ? 'checked' : ''}> 🔥 عداد المشاهدين الحيّ في صفحة المنتج
        </label>
        <p style="font-size:0.7rem;color:var(--text-muted);margin:4px 0 0">يعرض نصاً مثل "يشاهد هذا المنتج 13 شخصاً الآن!" ويتغير تلقائياً.</p>
      </div>
      <div class="admin-card"><h4>💬 صندوق دعم واتساب العائم</h4>
        <label style="display:flex;align-items:center;gap:8px;cursor:pointer">
          <input type="checkbox" id="admMktWaChatShow" style="width:16px;height:16px" ${data.waChat?.show ? 'checked' : ''}> 💬 صندوق دعم واتساب العائم
        </label>
        <p style="font-size:0.7rem;color:var(--text-muted);margin:4px 0 6px">زر أخضر ثابت في أسفل الشاشة يأخذ العميل لواتساب مباشرة.</p>
        <input type="text" id="admMktWaChatGreeting" placeholder="نص الترحيب" value="${data.waChat?.greeting || ''}">
      </div>
      <div class="admin-card"><h4>🛍 إشعارات الشراء الحديثة</h4>
        <label style="display:flex;align-items:center;gap:8px;cursor:pointer">
          <input type="checkbox" id="admMktSocialProofShow" style="width:16px;height:16px" ${data.socialProof?.show ? 'checked' : ''}> 🛍 تفعيل إشعارات الشراء الحديثة
        </label>
        <p style="font-size:0.7rem;color:var(--text-muted);margin:4px 0 0">نافذة تنبيه صغيرة أسفل الشاشة تُحاكي عمليات شراء حية لبناء المصداقية.</p>
      </div>
      <div class="admin-card"><h4>💬 زر الشراء السريع عبر واتساب</h4>
        <label style="display:flex;align-items:center;gap:8px;cursor:pointer">
          <input type="checkbox" id="admMktWaCheckoutShow" style="width:16px;height:16px" ${data.waCheckout?.show ? 'checked' : ''}> تفعيل زر الطلب المباشر عبر واتساب
        </label>
        <p style="font-size:0.7rem;color:var(--text-muted);margin:4px 0 0">يضيف زراً أخضر واضحاً في صفحة المنتج للشراء عبر واتساب فوراً.</p>
      </div>
    </div>`;
  } else if (subTab === 'reviews') {
    html = `<div class="admin-settings-grid">
      <div class="admin-card"><h4>💬 تقييمات المنتج بالنجوم</h4>
        <label style="display:flex;align-items:center;gap:8px;cursor:pointer">
          <input type="checkbox" id="admMktReviewsShow" style="width:16px;height:16px" ${data.reviews?.show ? 'checked' : ''}> 💬 تفعيل تقييمات العملاء في صفحة المنتج
        </label>
        <p style="font-size:0.7rem;color:var(--text-muted);margin:4px 0 0">يسمح للمشترين بكتابة تقييمات بالنجوم والتعليقات على المنتجات.</p>
      </div>
      <div class="admin-card" style="grid-column:1/-1"><h4>🎡 عجلة الحظ التفاعلية</h4>
        <label style="display:flex;align-items:center;gap:8px;cursor:pointer">
          <input type="checkbox" id="admMktSpinWinShow" style="width:16px;height:16px" ${data.spinWin?.show ? 'checked' : ''}> 🎡 تفعيل عجلة الحظ التفاعلية
        </label>
        <p style="font-size:0.7rem;color:var(--text-muted);margin:4px 0 12px">لعبة تفاعلية مرحة تمنح الزوار فرصة تدوير العجلة لربح قسيمة خصم.</p>
        <div style="margin-top:12px">
          <span style="font-size:0.78rem;font-weight:700;display:block;margin-bottom:6px">إدارة قطاعات العجلة والجوائز الحالية:</span>
          <div id="admSpinSegmentsList" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:8px;margin-bottom:12px"></div>
          <div style="background:var(--bg);border:1px solid var(--border);border-radius:10px;padding:12px;display:flex;flex-direction:column;gap:8px">
            <div style="font-size:0.75rem;font-weight:800">إضافة قطاع/جائزة جديدة للعجلة:</div>
            <div style="display:flex;gap:8px;flex-wrap:wrap">
              <div style="flex:2;min-width:120px">
                <label style="font-size:0.7rem;color:var(--text-muted)">اسم الجائزة</label>
                <input type="text" id="admNewSegLabel" placeholder="خصم 20%">
              </div>
              <div style="flex:1;min-width:90px">
                <label style="font-size:0.7rem;color:var(--text-muted)">نوع الجائزة</label>
                <select id="admNewSegType" onchange="
                  const val = this.value;
                  document.getElementById('admNewSegDiscFields').style.display = val === 'none' ? 'none' : 'flex';
                ">
                  <option value="discount">خصم %</option>
                  <option value="freeship">شحن مجاني</option>
                  <option value="none">حظ سعيد (لا جائزة)</option>
                </select>
              </div>
            </div>
            <div id="admNewSegDiscFields" style="display:flex;gap:8px;flex-wrap:wrap">
              <div style="flex:1;min-width:80px">
                <label style="font-size:0.7rem;color:var(--text-muted)">نسبة الخصم %</label>
                <input type="number" id="admNewSegPercent" min="1" max="99" value="10">
              </div>
              <div style="flex:2;min-width:120px">
                <label style="font-size:0.7rem;color:var(--text-muted)">كود الخصم المربوط</label>
                <input type="text" id="admNewSegCode" placeholder="SAVE10" style="text-transform:uppercase">
              </div>
              <div style="flex:1;min-width:80px">
                <label style="font-size:0.7rem;color:var(--text-muted)">لون القطاع</label>
                <input type="color" id="admNewSegColor" value="#ef4444">
              </div>
            </div>
            <button onclick="admAddSpinSegment()" class="admin-btn admin-btn-secondary admin-btn-sm" style="align-self:flex-start"><i class="fa-solid fa-plus"></i> إضافة القطاع</button>
          </div>
        </div>
      </div>
    </div>`;
  } else if (subTab === 'popup') {
    const pp = data.promoPopup || {};
    html = `<div class="admin-settings-grid">
      <div class="admin-card" style="grid-column:1/-1"><h4><i class="fa-solid fa-window-restore"></i> النافذة الترويجية المنبثقة</h4>
        <label style="display:flex;align-items:center;gap:8px;cursor:pointer;margin-bottom:10px">
          <input type="checkbox" id="admMktPromoPopupShow" style="width:16px;height:16px" ${pp.show ? 'checked' : ''}> تفعيل النافذة الترويجية المنبثقة عند فتح المتجر
        </label>
        <p style="font-size:0.72rem;color:var(--text-muted);margin:0 0 12px">تظهر نافذة ترويجية للزوار عند دخول المتجر تحفزهم على استخدام كود خصم.</p>
        <div class="admin-form-group"><label>عنوان النافذة</label><input type="text" id="admMktPromoPopupTitle" placeholder="عرض خاص لفترة محدودة!" value="${pp.title||''}"></div>
        <div class="admin-form-group"><label>نص النافذة</label><textarea id="admMktPromoPopupText" rows="2" placeholder="استخدم كود الخصم التالي عند إتمام الطلب للحصول على خصم إضافي">${pp.text||''}</textarea></div>
        <div class="admin-form-group"><label>كود الخصم</label><input type="text" id="admMktPromoPopupCode" placeholder="SPECIAL10" value="${pp.code||''}" style="text-transform:uppercase"></div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:8px">
          <div class="admin-form-group" style="flex:1;min-width:120px"><label>لون خلفية الزر/الكود</label><input type="color" id="admMktPromoPopupColor" value="${pp.color||'#ef4444'}"></div>
          <div class="admin-form-group" style="flex:1;min-width:120px"><label>رابط الزر (اختياري)</label><input type="url" id="admMktPromoPopupLink" placeholder="https://..." value="${pp.link||''}"></div>
        </div>
      </div>
    </div>`;
  }

  container.innerHTML = html + `
  <button class="admin-btn admin-btn-primary" onclick="adminSaveMarketing('${subTab}')" style="margin-top:16px"><i class="fa-solid fa-floppy-disk"></i> حفظ التسويق</button>`;

  if (subTab === 'reviews') {
    admRenderSpinSegmentsList(data.spinWin?.segments || []);
  }
}

function updateAdminSeoPreview() {
  const title = document.getElementById('admMktSeoTitle').value.trim() || 'متجري - أفضل متجر إلكتروني';
  const desc = document.getElementById('admMktSeoDesc').value.trim() || 'وصف مختصر للموقع يظهر في محركات البحث';
  const pTitle = document.getElementById('admMktSeoPreviewTitle');
  const pDesc = document.getElementById('admMktSeoPreviewDesc');
  if (pTitle) pTitle.textContent = title;
  if (pDesc) pDesc.textContent = desc;
}
function adminRenderBannersList(banners) {
  if (!banners || !banners.length) return '<p style="color:var(--text-muted);font-size:.8rem">لا توجد بانرات بعد</p>';
  return banners.map((b, i) => `
    <div class="banner-item">
      <img src="${b.image}" class="banner-preview">
      <div class="banner-info"><strong>${b.title||'بانر'}</strong>${b.link?`<br><span style="font-size:.75rem;color:var(--text-muted)">${b.link}</span>`:''}</div>
      <button class="banner-del" onclick="adminDeleteBanner(${i})"><i class="fa-solid fa-xmark"></i></button>
    </div>`).join('');
}
function adminSaveMarketing(subTab = 'seo') {
  const currentData = JSON.parse(localStorage.getItem('mycart_marketing')) || {};
  
  if (subTab === 'seo') {
    currentData.seo = {
      title: document.getElementById('admMktSeoTitle').value.trim(),
      description: document.getElementById('admMktSeoDesc').value.trim(),
      keywords: document.getElementById('admMktSeoKeywords').value.trim()
    };
    currentData.banners = adminGetBanners();
  } 
  else if (subTab === 'social') {
    currentData.social = {
      facebook: document.getElementById('admMktSocialFb').value.trim(),
      instagram: document.getElementById('admMktSocialIg').value.trim(),
      twitter: document.getElementById('admMktSocialX').value.trim(),
      tiktok: document.getElementById('admMktSocialTt').value.trim(),
      whatsapp: document.getElementById('admMktSocialWa').value.trim()
    };
    currentData.tracking = {
      gaId: document.getElementById('admMktGaId').value.trim(),
      fbPixel: document.getElementById('admMktFbPixel').value.trim(),
      headerScript: document.getElementById('admMktHeadScript').value.trim(),
      footerScript: document.getElementById('admMktFooterScript').value.trim()
    };
    currentData.share = {
      show: document.getElementById('admMktShareShow').checked
    };
  } 
  else if (subTab === 'popup') {
    currentData.promoPopup = {
      show: document.getElementById('admMktPromoPopupShow')?.checked,
      title: document.getElementById('admMktPromoPopupTitle')?.value.trim(),
      text: document.getElementById('admMktPromoPopupText')?.value.trim(),
      code: document.getElementById('admMktPromoPopupCode')?.value.trim(),
      color: document.getElementById('admMktPromoPopupColor')?.value.trim() || '#ef4444',
      link: document.getElementById('admMktPromoPopupLink')?.value.trim()
    };
  }
  else if (subTab === 'offers') {
    currentData.volumeDiscount = {
      show: document.getElementById('admMktVolDiscShow')?.checked,
      type: document.getElementById('admMktVolDiscType').value,
      disc2: parseInt(document.getElementById('admMktVolDisc2')?.value) || 5,
      disc3: parseInt(document.getElementById('admMktVolDisc3')?.value) || 10,
      bogoBuy: parseInt(document.getElementById('admMktVolBogoBuy')?.value) || 2,
      bogoGet: parseInt(document.getElementById('admMktVolBogoGet')?.value) || 1
    };
    currentData.fbt = {
      show: document.getElementById('admMktFbtShow')?.checked,
      discount: parseInt(document.getElementById('admMktFbtDiscount')?.value) || 10,
      discountType: document.getElementById('admMktFbtDiscountType').value
    };
    currentData.freeShipping = {
      show: document.getElementById('admMktFreeShippingShow')?.checked,
      goal: parseInt(document.getElementById('admMktFreeShippingGoal')?.value) || 300
    };
    currentData.waNotif = {
      show: document.getElementById('admMktWaNotifShow')?.checked
    };
    currentData.flashSales = {
      show: document.getElementById('admMktFlashSalesShow')?.checked
    };
  } 
  else if (subTab === 'widgets') {
    currentData.announce = {
      show: document.getElementById('admMktAnnounceShow').checked,
      text: document.getElementById('admMktAnnounceText').value.trim(),
      bg: document.getElementById('admMktAnnounceBg').value,
      color: document.getElementById('admMktAnnounceColor').value
    };
    currentData.countdown = {
      show: document.getElementById('admMktCountdownShow').checked,
      duration: parseInt(document.getElementById('admMktCountdownDuration').value) || 180
    };
    currentData.liveViewers = {
      show: document.getElementById('admMktLiveViewersShow')?.checked || false
    };
    currentData.waChat = {
      show: document.getElementById('admMktWaChatShow')?.checked || false,
      greeting: document.getElementById('admMktWaChatGreeting')?.value.trim() || ''
    };
    currentData.socialProof = {
      show: document.getElementById('admMktSocialProofShow')?.checked
    };
    currentData.waCheckout = {
      show: document.getElementById('admMktWaCheckoutShow').checked
    };
  } 
  else if (subTab === 'reviews') {
    currentData.reviews = {
      show: document.getElementById('admMktReviewsShow')?.checked
    };
    currentData.spinWin = {
      show: document.getElementById('admMktSpinWinShow')?.checked,
      segments: currentData.spinWin?.segments || []
    };
  }

  try { 
    localStorage.setItem('mycart_marketing', JSON.stringify(currentData)); 
  } catch(e) { 
    showToast('⚠️ مساحة التخزين ممتلئة', 'error'); 
    return; 
  }
  applyMarketing();
  showToast('✅ تم حفظ إعدادات التسويق', 'success');
}
function adminGetBanners() {
  const banners = [];
  // Read from existing saved banner-items
  document.querySelectorAll('#admBannersList .banner-item').forEach(el => {
    const img = el.querySelector('.banner-preview');
    const info = el.querySelector('.banner-info');
    if (img && img.src) {
      const titleEl = info ? info.querySelector('strong') : null;
      const linkEl = info ? info.querySelector('span') : null;
      banners.push({ image: img.src, title: titleEl ? titleEl.textContent : '', link: linkEl ? linkEl.textContent : '' });
    }
  });
  // Read from new/unsaved banner-cards
  document.querySelectorAll('#admBannersList .banner-card').forEach(c => {
    const img = c.querySelector('.banner-img-preview');
    const title = c.querySelector('.banner-title-input');
    const link = c.querySelector('.banner-link-input');
    if (img && img.src && img.src !== '') banners.push({ image: img.src, title: title?title.value:'', link: link?link.value:'' });
  });
  return banners;
}
function adminAddBanner() {
  const container = document.getElementById('admBannersList');
  const emptyMsg = container.querySelector('p');
  if (emptyMsg) emptyMsg.remove();
  const card = document.createElement('div');
  card.className = 'banner-card';
  card.innerHTML = `<div class="banner-card-header">
    <button type="button" onclick="this.closest('.banner-card').remove()" style="background:none;border:none;color:#ef4444;cursor:pointer;font-size:1rem;padding:0"><i class="fa-solid fa-xmark"></i></button>
  </div>
  <div class="banner-upload-area" onclick="this.querySelector('.banner-file-input').click()">
    <img class="banner-img-preview" style="display:none;width:100%;max-height:120px;object-fit:cover;border-radius:8px">
    <div class="banner-upload-placeholder"><i class="fa-solid fa-cloud-arrow-up"></i><span>اختر صورة</span></div>
    <input type="file" class="banner-file-input" accept="image/*" style="display:none" onchange="adminBannerUpload(this)">
  </div>
  <input type="text" class="banner-title-input" placeholder="عنوان البانر (اختياري)">
  <input type="text" class="banner-link-input" placeholder="رابط عند الضغط (اختياري)">`;
  container.appendChild(card);
}
function adminBannerUpload(input) {
  const file = input.files[0];
  if (!file) return;
  if (file.size > 5 * 1024 * 1024) { showToast('⚠️ الصورة كبيرة جداً (الحد 5MB)', 'error'); return; }
  const reader = new FileReader();
  reader.onload = function(e) {
    const card = input.closest('.banner-card');
    const preview = card.querySelector('.banner-img-preview');
    preview.src = e.target.result;
    preview.style.display = 'block';
    card.querySelector('.banner-upload-placeholder').style.display = 'none';
  };
  reader.readAsDataURL(file);
}
function adminDeleteBanner(idx) {
  const data = JSON.parse(localStorage.getItem('mycart_marketing')) || {};
  data.banners = data.banners || [];
  data.banners.splice(idx, 1);
  try { localStorage.setItem('mycart_marketing', JSON.stringify(data)); } catch(e) {}
  adminRenderMarketing();
}

function admRenderSpinSegmentsList(segs) {
  const container = document.getElementById('admSpinSegmentsList');
  if (!container) return;
  if (!segs || !segs.length) {
    container.innerHTML = '<p style="color:var(--text-muted);font-size:.8rem">لا توجد قطاعات بعد</p>';
    return;
  }
  container.innerHTML = segs.map((seg, i) => `
    <div style="display:flex;align-items:center;gap:8px;background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:8px 10px">
      <div style="width:18px;height:18px;border-radius:50%;background:${seg.color || '#ef4444'};flex-shrink:0;border:1px solid rgba(0,0,0,.15)"></div>
      <div style="flex:1;min-width:0">
        <div style="font-size:.8rem;font-weight:700">${seg.label}</div>
        <div style="font-size:.7rem;color:var(--text-muted)">
          ${seg.type === 'discount' ? `خصم ${seg.percent}% — كود: <strong>${seg.code}</strong>` : seg.type === 'freeship' ? 'شحن مجاني' : 'حظ سعيد (لا جائزة)'}
        </div>
      </div>
      <button onclick="admDeleteSpinSegment(${i})" style="background:none;border:none;color:#ef4444;cursor:pointer;font-size:.85rem"><i class="fa-solid fa-xmark"></i></button>
    </div>`).join('');
}

function admAddSpinSegment() {
  const label = document.getElementById('admNewSegLabel')?.value.trim();
  const type = document.getElementById('admNewSegType')?.value;
  const percent = parseInt(document.getElementById('admNewSegPercent')?.value) || 0;
  const code = document.getElementById('admNewSegCode')?.value.trim().toUpperCase();
  const color = document.getElementById('admNewSegColor')?.value || '#ef4444';
  if (!label) { alert('أدخل اسم الجائزة أولاً'); return; }
  if (type === 'discount' && (!percent || !code)) { alert('أدخل نسبة الخصم والكود'); return; }
  const data = JSON.parse(localStorage.getItem('mycart_marketing')) || {};
  data.spinWin = data.spinWin || { show: false, segments: [] };
  data.spinWin.segments = data.spinWin.segments || [];
  data.spinWin.segments.push({ label, type, percent: type === 'discount' ? percent : 0, code: type === 'discount' ? code : (type === 'freeship' ? 'FREESHIP' : ''), color });
  try { localStorage.setItem('mycart_marketing', JSON.stringify(data)); } catch(e) {}
  admRenderSpinSegmentsList(data.spinWin.segments);
  document.getElementById('admNewSegLabel').value = '';
  document.getElementById('admNewSegCode').value = '';
  document.getElementById('admNewSegPercent').value = '10';
}

function admDeleteSpinSegment(idx) {
  const data = JSON.parse(localStorage.getItem('mycart_marketing')) || {};
  if (!data.spinWin || !data.spinWin.segments) return;
  data.spinWin.segments.splice(idx, 1);
  try { localStorage.setItem('mycart_marketing', JSON.stringify(data)); } catch(e) {}
  admRenderSpinSegmentsList(data.spinWin.segments);
}

function applyAccentColor(color) {
  document.documentElement.style.setProperty('--accent', color);
  // Derive hover color (darken by 10%)
  const hex = color.replace('#','');
  const r = Math.max(0, parseInt(hex.slice(0,2),16) - 25);
  const g = Math.max(0, parseInt(hex.slice(2,4),16) - 25);
  const b = Math.max(0, parseInt(hex.slice(4,6),16) - 25);
  const hover = `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`;
  document.documentElement.style.setProperty('--accent-hover', hover);
}

function adminExport() {
  const data = {
    products, settings: loadAdminSettings(),
    orders: JSON.parse(localStorage.getItem('mycart_orders') || '[]'),
    cart: JSON.parse(localStorage.getItem('mycart_cart') || '[]'),
    customer: JSON.parse(localStorage.getItem('mycart_customer') || '{}'),
    logo: localStorage.getItem('mycart_logo') || '',
    bg: localStorage.getItem('mycart_bg') || '',
    marketing: JSON.parse(localStorage.getItem('mycart_marketing')) || {},
    categories: JSON.parse(localStorage.getItem('mycart_categories') || '[]'),
    date: new Date().toISOString()
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `متجري-${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
  document.getElementById('adminDataStatus').textContent = '✅ تم التصدير';
}

function adminImport(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(ev) {
    try {
      const data = JSON.parse(ev.target.result);
      if (data.products) { products.length = 0; products.push(...data.products); saveProductsToLS(); }
      if (data.settings) { try { localStorage.setItem('mycart_admin_settings', JSON.stringify(data.settings)); } catch(e) {} adminSettings = data.settings; WHOLESALE_CODE = data.settings.wholesaleCode || 'ADMIN123'; CURRENCY = data.settings.currency || '₪'; }
      if (data.orders) { try { localStorage.setItem('mycart_orders', JSON.stringify(data.orders)); } catch(e) {} }
      if (data.cart) { try { localStorage.setItem('mycart_cart', JSON.stringify(data.cart)); } catch(e) {} }
      if (data.customer) { try { localStorage.setItem('mycart_customer', JSON.stringify(data.customer)); } catch(e) {} }
      if (data.logo) { try { localStorage.setItem('mycart_logo', data.logo); } catch(e) {} document.getElementById('storeLogo').src = data.logo; }
      if (data.bg) { try { localStorage.setItem('mycart_bg', data.bg); } catch(e) {} document.getElementById('header').style.setProperty('--header-bg', `url(${data.bg})`); document.getElementById('header').classList.add('has-bg'); }
      // Re-render store with new settings
      renderProducts(getFilteredProducts());
      renderCartItems();
      document.getElementById('adminDataStatus').textContent = '✅ تم الاستيراد';
      adminRefreshAll();
      showToast('✅ تم استيراد البيانات', 'success');
    } catch(err) { showToast('⚠️ ملف غير صالح', 'error'); }
  };
  reader.readAsText(file);
  e.target.value = '';
}

function adminResetAll() {
  if (!confirm('حذف كل البيانات؟')) return;
  if (!confirm('تأكيد نهائي؟')) return;
  localStorage.removeItem('mycart_admin_products');
  localStorage.removeItem('mycart_admin_settings');
  localStorage.removeItem('mycart_orders');
  localStorage.removeItem('mycart_cart');
  localStorage.removeItem('mycart_customer');
  localStorage.removeItem('mycart_logo');
  localStorage.removeItem('mycart_bg');
  localStorage.removeItem('mycart_wholesale');
  localStorage.removeItem('mycart_marketing');
  products.length = 0;
  adminRefreshAll();
  showToast('✅ تم إعادة تعيين الكل', 'success');
}

// ===== COPY HELPER =====
function copyText(txt, label) {
  navigator.clipboard.writeText(txt).then(() => {
    showToast(`✅ تم نسخ ${label}`, 'success');
  }).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = txt; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); showToast(`✅ تم نسخ ${label}`, 'success'); } catch(e) {}
    document.body.removeChild(ta);
  });
}

// ===== PRINT ORDER =====
function printOrderData(o, currency) {
  const subtotal = o.items.reduce((s, i) => s + i.price * i.qty, 0);
  const discAmt = o.discount ? Math.round(subtotal * o.discount / 100) : 0;
  const itemsHTML = o.items.map(item => `
    <tr>
      <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;font-size:13px">${item.name}${item.variant ? ` (${item.variant})` : ''}</td>
      <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;font-size:13px;text-align:center">${item.qty}</td>
      <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;font-size:13px;text-align:left" dir="ltr">${currency}${item.price.toFixed(2)}</td>
      <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;font-size:13px;text-align:left" dir="ltr">${currency}${(item.price * item.qty).toFixed(2)}</td>
    </tr>
  `).join('');
  const win = window.open('', '_blank');
  win.document.write(`
    <!DOCTYPE html><html dir="rtl"><head><meta charset="UTF-8"><title>طلب #${String(o.id).slice(-6)}</title>
    <style>
      @page { margin: 15mm 10mm }
      * { box-sizing: border-box; margin: 0; padding: 0 }
      body { font-family: 'Tajawal', 'Arial', sans-serif; font-size: 14px; color: #1e293b; padding: 20px; background: #fff }
      .header { text-align: center; padding-bottom: 16px; border-bottom: 2px solid #ef4444; margin-bottom: 20px }
      .header h1 { font-size: 20px; color: #ef4444; margin-bottom: 4px }
      .header p { font-size: 12px; color: #64748b }
      .section { margin-bottom: 20px }
      .section h3 { font-size: 14px; font-weight: 800; margin-bottom: 8px; padding-bottom: 4px; border-bottom: 1px solid #e2e8f0 }
      .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; font-size: 13px }
      .info-grid .label { color: #64748b }
      .info-grid .value { font-weight: 700 }
      table { width: 100%; border-collapse: collapse; margin-top: 8px }
      th { background: #f8fafc; padding: 8px; font-size: 12px; font-weight: 700; border-bottom: 2px solid #e2e8f0; text-align: center }
      th:first-child { text-align: right }
      .totals { margin-top: 16px; padding-top: 8px; border-top: 2px solid #e2e8f0 }
      .totals .row { display: flex; justify-content: space-between; font-size: 13px; padding: 3px 0 }
      .totals .grand { font-size: 17px; font-weight: 800; color: #ef4444; border-top: 1px solid #e2e8f0; margin-top: 4px; padding-top: 6px }
      .footer { margin-top: 24px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 12px }
      @media print { body { padding: 0 } }
    </style>
    </head><body>
    <div class="header">
      <h1>طلب #${String(o.id).slice(-6)}</h1>
      <p>${o.date || ''}</p>
    </div>
    <div class="section">
      <h3>معلومات العميل</h3>
      <div class="info-grid">
        <div><span class="label">الاسم:</span> <span class="value">${o.customer?.name || '—'}</span></div>
        <div><span class="label">الهاتف:</span> <span class="value" dir="ltr" style="display:inline-block">${o.customer?.phone || '—'}</span></div>
        <div><span class="label">المدينة:</span> <span class="value">${o.customer?.city || '—'}</span></div>
        <div><span class="label">العنوان:</span> <span class="value">${o.customer?.address || '—'}</span></div>
        ${o.deliveryZone ? `<div><span class="label">منطقة التوصيل:</span> <span class="value">${o.deliveryZone}</span></div>` : ''}
      </div>
      ${o.note ? `<div style="margin-top:10px;padding-top:8px;border-top:1px dashed #e2e8f0;font-size:13px"><span class="label">ملاحظة:</span> <span class="value">${o.note}</span></div>` : ''}
    </div>
    <div class="section">
      <h3>المنتجات</h3>
      <table>
        <thead><tr><th style="text-align:right">المنتج</th><th>الكمية</th><th>السعر</th><th>الإجمالي</th></tr></thead>
        <tbody>${itemsHTML}</tbody>
      </table>
      <div class="totals">
        <div class="row"><span>المجموع الفرعي</span><span dir="ltr">${currency}${subtotal.toFixed(2)}</span></div>
        ${o.discount ? `<div class="row" style="color:#16a34a"><span>الخصم (${o.discount}%)</span><span dir="ltr">-${currency}${discAmt.toFixed(2)}</span></div>` : ''}
        ${o.delivery ? `<div class="row"><span>التوصيل ${o.deliveryZone ? `(${o.deliveryZone})` : ''}</span><span dir="ltr">${currency}${o.delivery.toFixed(2)}</span></div>` : ''}
        <div class="row grand"><span>الإجمالي</span><span dir="ltr">${currency}${(o.total || 0).toFixed(2)}</span></div>
      </div>
    </div>
    <div class="footer">تمت الطباعة من المتجر — ${new Date().toLocaleString('ar-SA')}</div>
    <script>window.onload = function() { window.print(); window.close(); } <\/script>
    </body></html>
  `);
  win.document.close();
}

// ===== ORDER DETAIL/EDIT MODAL (Admin) =====
let adminOrderEditIdx = -1;
let adminOrderEditData = null;
let adminOrderEditMode = false;

function adminShowOrderDetail(idx) {
  const ords = JSON.parse(localStorage.getItem('mycart_orders')) || [];
  const o = ords[idx];
  if (!o) return;
  adminOrderEditIdx = idx;
  adminOrderEditData = JSON.parse(JSON.stringify(o));
  adminOrderEditMode = false;
  document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.admin-sidebar button').forEach(b => b.classList.remove('active'));
  document.getElementById('adminPageTitle').textContent = `طلب #${String(o.id).slice(-6)}`;
  document.getElementById('admin-orderDetail').classList.add('active');
  adminRenderOrderDetailPage();
}

function adminBackToOrders() {
  adminOrderEditIdx = -1;
  adminOrderEditData = null;
  switchAdminTab('orders');
}

function adminToggleOrderEditMode() {
  adminOrderEditMode = !adminOrderEditMode;
  adminRenderOrderDetailPage();
}

function adminRenderOrderDetailPage() {
  if (adminOrderEditMode) adminRenderOrderEditPage();
  else adminRenderOrderViewPage();
}

function adminRenderOrderViewPage() {
  const d = adminOrderEditData;
  if (!d) return;
  const currency = CURRENCY;
  const subtotal = d.items.reduce((s, i) => s + i.price * i.qty, 0);
  const disc = d.discount || 0;
  const discAmt = disc > 0 ? Math.round(subtotal * disc / 100) : 0;
  const total = subtotal - discAmt + (d.delivery || 0);
  document.getElementById('admin-orderDetail').innerHTML = `
    <div style="margin-bottom:16px">
      <button onclick="adminBackToOrders()" style="background:none;border:none;color:var(--text-muted);cursor:pointer;font-size:.85rem;font-family:inherit;display:flex;align-items:center;gap:4px"><i class="fa-solid fa-arrow-right"></i> العودة للطلبات</button>
    </div>
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;padding-bottom:16px;border-bottom:1px solid var(--border)">
      <span style="background:#ef4444;color:#fff;padding:4px 12px;border-radius:6px;font-weight:800;font-size:.9rem">#${String(d.id).slice(-6)}</span>
      <span style="color:var(--text-muted);font-size:.85rem"><i class="fa-regular fa-calendar"></i> ${d.date}</span>
      <span style="margin-right:auto;padding:4px 12px;border-radius:999px;font-size:.75rem;font-weight:700;background:${d._status === 'done' ? '#dcfce7' : '#fef3c7'};color:${d._status === 'done' ? '#166534' : '#92400e'}">${d._status === 'done' ? '✓ مكتمل' : '🕐 جديد'}</span>
    </div>
    <div style="background:#f8fafc;border-radius:10px;padding:14px;margin-bottom:16px">
      <h4 style="font-size:.85rem;font-weight:700;margin-bottom:10px"><i class="fa-solid fa-user"></i> معلومات العميل</h4>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:.85rem">
        <div><span style="color:var(--text-muted)">الاسم</span><br><strong id="ovName">${d.customer?.name || '—'}</strong> ${d.customer?.name ? `<button onclick="copyText(document.getElementById('ovName').textContent,'الاسم')" style="background:none;border:none;color:var(--accent);cursor:pointer;font-size:.75rem;margin-right:4px"><i class="fa-regular fa-copy"></i></button>` : ''}</div>
        <div><span style="color:var(--text-muted)">الهاتف</span><br><strong dir="ltr" style="display:inline-block" id="ovPhone">${d.customer?.phone || '—'}</strong> ${d.customer?.phone ? `<button onclick="copyText(document.getElementById('ovPhone').textContent,'رقم الهاتف')" style="background:none;border:none;color:var(--accent);cursor:pointer;font-size:.75rem"><i class="fa-regular fa-copy"></i></button>` : ''}</div>
        <div><span style="color:var(--text-muted)">المدينة</span><br><strong id="ovCity">${d.customer?.city || '—'}</strong> ${d.customer?.city ? `<button onclick="copyText(document.getElementById('ovCity').textContent,'المدينة')" style="background:none;border:none;color:var(--accent);cursor:pointer;font-size:.75rem"><i class="fa-regular fa-copy"></i></button>` : ''}</div>
        <div><span style="color:var(--text-muted)">العنوان</span><br><strong id="ovAddr">${d.customer?.address || '—'}</strong> ${d.customer?.address ? `<button onclick="copyText(document.getElementById('ovAddr').textContent,'العنوان')" style="background:none;border:none;color:var(--accent);cursor:pointer;font-size:.75rem"><i class="fa-regular fa-copy"></i></button>` : ''}</div>
        ${d.deliveryZone ? `<div><span style="color:var(--text-muted)">منطقة التوصيل</span><br><strong>${d.deliveryZone}</strong></div>` : ''}
      </div>
      ${d.note ? `<div style="margin-top:10px;padding-top:10px;border-top:1px dashed var(--border)"><span style="color:var(--text-muted);font-size:.8rem">ملاحظة العميل</span><p style="font-size:.85rem;font-weight:600;margin-top:4px">${d.note}</p></div>` : ''}
    </div>
    <h4 style="font-size:.85rem;font-weight:700;margin-bottom:10px"><i class="fa-solid fa-box"></i> المنتجات</h4>
    <div style="margin-bottom:16px">
      ${d.items.map(item => `
        <div style="display:flex;align-items:center;gap:10px;padding:8px 10px;background:var(--bg);border-radius:8px;margin-bottom:4px">
          <img src="${item.image || 'https://placehold.co/40x40/e2e8f0/64748b?text=' + encodeURIComponent(item.name.slice(0,2))}" style="width:36px;height:36px;border-radius:6px;object-fit:cover;flex-shrink:0;background:#e2e8f0">
          <div style="flex:1;min-width:0">
            <div style="font-weight:700;font-size:.85rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${item.name}</div>
            <div style="font-size:.75rem;color:var(--text-muted)">${currency}${item.price} × ${item.qty}</div>
          </div>
          <div style="font-weight:800;font-size:.9rem;color:var(--accent);flex-shrink:0">${currency}${(item.price * item.qty).toFixed(2)}</div>
        </div>
      `).join('')}
    </div>
    <div style="background:#f8fafc;border-radius:10px;padding:14px;margin-bottom:16px">
      <div style="display:flex;justify-content:space-between;font-size:.85rem;padding:3px 0"><span>المجموع الفرعي</span><span>${currency}${subtotal.toFixed(2)}</span></div>
      ${disc > 0 ? `<div style="display:flex;justify-content:space-between;font-size:.85rem;padding:3px 0;color:#16a34a"><span>الخصم (${disc}%)</span><span>-${currency}${discAmt.toFixed(2)}</span></div>` : ''}
      ${d.delivery ? `<div style="display:flex;justify-content:space-between;font-size:.85rem;padding:3px 0"><span>التوصيل ${d.deliveryZone ? `(${d.deliveryZone})` : ''}</span><span>${currency}${d.delivery.toFixed(2)}</span></div>` : ''}
      <div style="display:flex;justify-content:space-between;font-size:1.1rem;font-weight:800;padding:6px 0 0;border-top:1px solid var(--border);margin-top:4px;color:var(--accent)"><span>الإجمالي</span><span>${currency}${total.toFixed(2)}</span></div>
    </div>
    <div style="display:flex;gap:8px">
      <button class="admin-btn admin-btn-primary" onclick="adminToggleOrderEditMode()" style="flex:1"><i class="fa-solid fa-pen"></i> تعديل</button>
      <button class="admin-btn admin-btn-secondary" onclick="printOrderData(adminOrderEditData, CURRENCY)" style="flex:1"><i class="fa-solid fa-print"></i> طباعة</button>
      <button class="admin-btn admin-btn-secondary" onclick="adminBackToOrders()">عودة</button>
    </div>
  `;
}

function adminRenderOrderEditPage() {
  const d = adminOrderEditData;
  if (!d) return;
  const currency = CURRENCY;
  const subtotal = d.items.reduce((s, i) => s + i.price * i.qty, 0);
  const disc = d.discount || 0;
  const discAmt = disc > 0 ? Math.round(subtotal * disc / 100) : 0;
  const total = subtotal - discAmt + (d.delivery || 0);
  document.getElementById('admin-orderDetail').innerHTML = `
    <div style="margin-bottom:16px">
      <button onclick="adminBackToOrders()" style="background:none;border:none;color:var(--text-muted);cursor:pointer;font-size:.85rem;font-family:inherit;display:flex;align-items:center;gap:4px"><i class="fa-solid fa-arrow-right"></i> العودة للطلبات</button>
    </div>
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;padding-bottom:16px;border-bottom:1px solid var(--border)">
      <span style="background:#ef4444;color:#fff;padding:4px 12px;border-radius:6px;font-weight:800;font-size:.9rem">#${String(d.id).slice(-6)}</span>
      <span style="color:var(--text-muted);font-size:.85rem"><i class="fa-regular fa-calendar"></i> ${d.date}</span>
      <label style="margin-right:auto;display:flex;align-items:center;gap:6px;font-size:.8rem;font-weight:600;cursor:pointer">
        <input type="checkbox" id="oeStatus" ${d._status === 'done' ? 'checked' : ''} style="width:16px;height:16px">
        مكتمل
      </label>
    </div>
    <div style="background:#f8fafc;border-radius:10px;padding:14px;margin-bottom:16px">
      <h4 style="font-size:.85rem;font-weight:700;margin-bottom:10px"><i class="fa-solid fa-user"></i> معلومات العميل</h4>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
        <div><label style="font-size:.75rem;color:var(--text-muted);display:block;margin-bottom:2px">الاسم</label><input type="text" id="oeName" value="${d.customer?.name || ''}" style="width:100%;padding:8px;border:1.5px solid var(--border);border-radius:6px;font-family:inherit;font-size:.85rem"></div>
        <div><label style="font-size:.75rem;color:var(--text-muted);display:block;margin-bottom:2px">الهاتف</label><input type="text" id="oePhone" value="${d.customer?.phone || ''}" style="width:100%;padding:8px;border:1.5px solid var(--border);border-radius:6px;font-family:inherit;font-size:.85rem"></div>
        <div><label style="font-size:.75rem;color:var(--text-muted);display:block;margin-bottom:2px">المدينة</label><input type="text" id="oeCity" value="${d.customer?.city || ''}" style="width:100%;padding:8px;border:1.5px solid var(--border);border-radius:6px;font-family:inherit;font-size:.85rem"></div>
        <div><label style="font-size:.75rem;color:var(--text-muted);display:block;margin-bottom:2px">العنوان</label><input type="text" id="oeAddr" value="${d.customer?.address || ''}" style="width:100%;padding:8px;border:1.5px solid var(--border);border-radius:6px;font-family:inherit;font-size:.85rem"></div>
      </div>
    </div>
    <h4 style="font-size:.85rem;font-weight:700;margin-bottom:10px"><i class="fa-solid fa-box"></i> المنتجات</h4>
    <div id="oeItemsList" style="margin-bottom:8px">
      ${d.items.map((item, i) => `
        <div style="display:flex;align-items:center;gap:8px;padding:6px 8px;background:var(--bg);border-radius:8px;margin-bottom:4px">
          <span style="flex:1;min-width:0;font-size:.8rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap"><strong>${item.name}</strong></span>
          <span style="font-size:.75rem;color:var(--text-muted);flex-shrink:0">${currency}${item.price}</span>
          <input type="number" value="${item.qty}" min="1" style="width:45px;padding:4px;border:1px solid var(--border);border-radius:4px;text-align:center;font-family:inherit;font-size:.8rem" onchange="adminOrderEditChangeQty(${i},this.value)">
          <button onclick="adminOrderEditRemoveItem(${i})" style="background:none;border:none;color:#ef4444;cursor:pointer;font-size:1rem;flex-shrink:0"><i class="fa-solid fa-circle-minus"></i></button>
        </div>
      `).join('')}
    </div>
    <div style="display:flex;gap:6px;margin-bottom:16px">
      <button class="admin-btn admin-btn-primary" onclick="openProductPicker()" style="flex:1;padding:10px;font-size:.85rem"><i class="fa-solid fa-plus"></i> إضافة منتج</button>
    </div>
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:10px 14px">
      <span style="font-weight:700;font-size:.85rem;flex-shrink:0"><i class="fa-solid fa-tag"></i> الخصم</span>
      <input type="number" id="oeDiscount" value="${disc}" min="0" max="100" style="width:60px;padding:6px;border:1.5px solid #bbf7d0;border-radius:6px;text-align:center;font-family:inherit;font-size:.85rem" onchange="adminOrderEditUpdateTotal()">
      <span style="font-size:.8rem;color:var(--text-muted)">%</span>
    </div>
    <div style="background:#f8fafc;border-radius:10px;padding:14px">
      <div style="display:flex;justify-content:space-between;font-size:.85rem;padding:3px 0"><span>المجموع الفرعي</span><span>${currency}${subtotal.toFixed(2)}</span></div>
      ${disc > 0 ? `<div style="display:flex;justify-content:space-between;font-size:.85rem;padding:3px 0;color:#16a34a"><span>الخصم (${disc}%)</span><span>-${currency}${discAmt.toFixed(2)}</span></div>` : ''}
      ${d.delivery ? `<div style="display:flex;justify-content:space-between;font-size:.85rem;padding:3px 0"><span>التوصيل ${d.deliveryZone ? `(${d.deliveryZone})` : ''}</span><span>${currency}${d.delivery.toFixed(2)}</span></div>` : ''}
      <div style="display:flex;justify-content:space-between;font-size:1.1rem;font-weight:800;padding:6px 0 0;border-top:1px solid var(--border);margin-top:4px;color:var(--accent)"><span>الإجمالي</span><span id="oeTotal">${currency}${total.toFixed(2)}</span></div>
    </div>
    <div style="display:flex;gap:10px;margin-top:16px">
      <button class="admin-btn admin-btn-primary" onclick="adminSaveOrderEdit()" style="flex:1"><i class="fa-solid fa-floppy-disk"></i> حفظ التعديلات</button>
      <button class="admin-btn admin-btn-secondary" onclick="adminToggleOrderEditMode()">عرض التفاصيل</button>
      <button class="admin-btn admin-btn-danger" onclick="adminBackToOrders()">إلغاء</button>
    </div>
  `;
}

function adminOrderEditChangeQty(idx, val) {
  if (!adminOrderEditData) return;
  const qty = parseInt(val) || 1;
  if (qty < 1) return;
  adminOrderEditData.items[idx].qty = qty;
  adminOrderEditUpdateTotal();
}

function adminOrderEditRemoveItem(idx) {
  if (!adminOrderEditData || !confirm('إزالة هذا المنتج من الطلب؟')) return;
  adminOrderEditData.items.splice(idx, 1);
  adminRenderOrderEditPage();
}

function adminOrderEditAddItem() {
  if (!adminOrderEditData) return;
  const sel = document.getElementById('oeAddProduct');
  const pid = parseInt(sel.value);
  if (!pid) return;
  const p = products.find(x => x.id === pid);
  if (!p) return;
  const existing = adminOrderEditData.items.findIndex(i => i.id === pid);
  if (existing >= 0) {
    adminOrderEditData.items[existing].qty += 1;
  } else {
    adminOrderEditData.items.push({ id: p.id, name: p.name, price: p.price, image: getProductImages(p)[0], qty: 1 });
  }
  sel.value = '';
  adminRenderOrderEditPage();
}

function adminOrderEditUpdateTotal() {
  const discInput = document.getElementById('oeDiscount');
  if (discInput && adminOrderEditData) {
    adminOrderEditData.discount = parseInt(discInput.value) || 0;
  }
  const d = adminOrderEditData;
  if (!d) return;
  const currency = CURRENCY;
  const subtotal = d.items.reduce((s, i) => s + i.price * i.qty, 0);
  const disc = d.discount || 0;
  const discAmt = disc > 0 ? Math.round(subtotal * disc / 100) : 0;
  const total = subtotal - discAmt + (d.delivery || 0);
  const oeTotal = document.getElementById('oeTotal');
  if (oeTotal) oeTotal.textContent = `${currency}${total.toFixed(2)}`;
}

function adminSaveOrderEdit() {
  if (!adminOrderEditData || adminOrderEditIdx < 0) return;
  const ords = JSON.parse(localStorage.getItem('mycart_orders')) || [];
  if (!ords[adminOrderEditIdx]) return;
  if (document.getElementById('oeName')) adminOrderEditData.customer.name = document.getElementById('oeName').value.trim();
  if (document.getElementById('oePhone')) adminOrderEditData.customer.phone = document.getElementById('oePhone').value.trim();
  if (document.getElementById('oeCity')) adminOrderEditData.customer.city = document.getElementById('oeCity').value.trim();
  if (document.getElementById('oeAddr')) adminOrderEditData.customer.address = document.getElementById('oeAddr').value.trim();
  adminOrderEditData._status = document.getElementById('oeStatus')?.checked ? 'done' : 'pending';
  const subtotal = adminOrderEditData.items.reduce((s, i) => s + i.price * i.qty, 0);
  const disc = adminOrderEditData.discount || 0;
  const discAmt = disc > 0 ? Math.round(subtotal * disc / 100) : 0;
  adminOrderEditData.total = subtotal - discAmt;
  adminOrderEditData.subtotal = subtotal;
  ords[adminOrderEditIdx] = adminOrderEditData;
  try { localStorage.setItem('mycart_orders', JSON.stringify(ords)); } catch(e) { showToast('⚠️ مساحة التخزين ممتلئة', 'error'); return; }
  adminBackToOrders();
  adminRefreshAll();
  showToast('✅ تم حفظ التعديلات', 'success');
}

// ===== PRODUCT PICKER =====
function openProductPicker() {
  document.getElementById('pickerSearch').value = '';
  document.getElementById('productPickerModal').style.display = 'block';
  renderPickerProducts();
}

function closeProductPicker() {
  document.getElementById('productPickerModal').style.display = 'none';
}

function renderPickerProducts() {
  const q = (document.getElementById('pickerSearch').value || '').trim().toLowerCase();
  const filtered = q ? products.filter(p => p.name.toLowerCase().includes(q)) : products;
  document.getElementById('pickerProductsGrid').innerHTML = filtered.map(p => `
    <div onclick="pickerAddProduct(${p.id})" style="background:var(--bg);border:1px solid var(--border);border-radius:10px;padding:8px;cursor:pointer;text-align:center;transition:.15s" onmouseover="this.style.borderColor='var(--accent)'" onmouseout="this.style.borderColor=''">
      <img src="${getProductImages(p)[0]}" style="width:100%;height:90px;object-fit:cover;border-radius:6px;display:block;margin-bottom:6px;background:#e2e8f0">
      <div style="font-size:.75rem;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p.name}</div>
      <div style="font-size:.7rem;font-weight:800;color:var(--accent)">${CURRENCY}${p.price}</div>
    </div>
  `).join('');
}

function pickerAddProduct(pid) {
  const p = products.find(x => x.id === pid);
  if (!p || !adminOrderEditData) return;
  const existing = adminOrderEditData.items.findIndex(i => i.id === pid);
  if (existing >= 0) {
    adminOrderEditData.items[existing].qty += 1;
  } else {
    adminOrderEditData.items.push({ id: p.id, name: p.name, price: p.price, image: getProductImages(p)[0], qty: 1 });
  }
  closeProductPicker();
  adminRenderOrderEditPage();
}

// ===== NOTIFICATIONS =====
let adminNotifOrderCount = JSON.parse(localStorage.getItem('mycart_orders') || '[]').length;
let adminNotifInterval = null;

function checkAdminNewOrders() {
  const current = JSON.parse(localStorage.getItem('mycart_orders') || '[]').length;
  if (current > adminNotifOrderCount) {
    const diff = current - adminNotifOrderCount;
    adminNotifOrderCount = current;
    const badge = document.getElementById('adminNotifBadge');
    if (badge) {
      badge.textContent = diff;
      badge.style.display = 'flex';
      // Play beep
      try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain); gain.connect(audioCtx.destination);
        osc.frequency.value = 800; gain.gain.value = 0.3;
        osc.start(); gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
        osc.stop(audioCtx.currentTime + 0.3);
      } catch(e) {}
    }
  } else if (current < adminNotifOrderCount) {
    adminNotifOrderCount = current;
  }
}

function showAdminNotifPanel() {
  var badge = document.getElementById('adminNotifBadge');
  if (badge) badge.style.display = 'none';
  var notifs = getAgencyNotifs();
  notifs.forEach(function(n){ markNotifRead(n.id); });
  var html = '<div id="adminNotifModalOverlay" onclick="closeAdminNotifModal()" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.4);z-index:9999;display:flex;align-items:center;justify-content:center"><div onclick="event.stopPropagation()" style="background:#fff;border-radius:18px;padding:28px;max-width:500px;width:90%;max-height:80vh;overflow-y:auto;box-shadow:0 20px 60px rgba(0,0,0,.3)"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px"><h3 style="font-size:1.1rem;font-weight:900;margin:0">📢 الإشعارات</h3><button onclick="closeAdminNotifModal()" style="background:none;border:none;font-size:1.3rem;cursor:pointer;color:var(--text-gray)"><i class="fa-solid fa-xmark"></i></button></div>';
  if (!notifs.length) html += '<p style="font-size:.85rem;color:var(--text-gray);padding:20px 0;text-align:center">لا توجد إشعارات</p>';
  else html += notifs.map(function(n){ return '<div style="padding:12px 14px;background:#f8fafc;border-radius:12px;margin-bottom:8px;border:1px solid var(--fast7-border)"><div style="font-weight:900;font-size:.85rem">'+n.title+'</div><div style="font-size:.8rem;color:var(--text-gray);margin:4px 0">'+n.message+'</div><div style="font-size:.7rem;color:var(--text-gray)">'+n.date+'</div></div>';}).join('');
  html += '</div></div>';
  var el = document.createElement('div');
  el.id = 'adminNotifModalContainer';
  el.innerHTML = html;
  document.body.appendChild(el);
}

function closeAdminNotifModal() {
  var el = document.getElementById('adminNotifModalContainer');
  if (el) el.remove();
  var overlay = document.getElementById('adminNotifModalOverlay');
  if (overlay) overlay.remove();
}

function startAdminNotifCheck() {
  adminNotifOrderCount = JSON.parse(localStorage.getItem('mycart_orders') || '[]').length;
  if (adminNotifInterval) clearInterval(adminNotifInterval);
  adminNotifInterval = setInterval(function(){ checkAdminNewOrders(); updateAdminNotifBadge(); }, 3000);
  updateAdminNotifBadge();
}

// Start notification check when admin is opened
const origOpenAdmin = openAdmin;
openAdmin = function() {
  origOpenAdmin();
  startAdminNotifCheck();
};
const origCloseAdmin = closeAdmin;
closeAdmin = function() {
  origCloseAdmin();
  if (adminNotifInterval) clearInterval(adminNotifInterval);
};

// Update adminExport to include categories and discounts
const origAdminExport = adminExport;
adminExport = function() {
  const data = {
    products, settings: loadAdminSettings(),
    categories: JSON.parse(localStorage.getItem('mycart_categories') || '[]'),
    discountCodes: JSON.parse(localStorage.getItem('mycart_discount_codes') || '[]'),
    orders: JSON.parse(localStorage.getItem('mycart_orders') || '[]'),
    cart: JSON.parse(localStorage.getItem('mycart_cart') || '[]'),
    customer: JSON.parse(localStorage.getItem('mycart_customer') || '{}'),
    logo: localStorage.getItem('mycart_logo') || '',
    bg: localStorage.getItem('mycart_bg') || '',
    marketing: JSON.parse(localStorage.getItem('mycart_marketing')) || {},
    date: new Date().toISOString()
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `متجري-${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
  document.getElementById('adminDataStatus').textContent = '✅ تم التصدير';
};

// Update adminImport to include categories and discounts
const origAdminImport = adminImport;
adminImport = function(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(ev) {
    try {
      const data = JSON.parse(ev.target.result);
      if (data.categories) { try { localStorage.setItem('mycart_categories', JSON.stringify(data.categories)); } catch(e) {} }
      if (data.discountCodes) { try { localStorage.setItem('mycart_discount_codes', JSON.stringify(data.discountCodes)); } catch(e) {} }
      if (data.products) { products.length = 0; products.push(...data.products); saveProductsToLS(); }
      if (data.settings) { try { localStorage.setItem('mycart_admin_settings', JSON.stringify(data.settings)); } catch(e) {} adminSettings = data.settings; WHOLESALE_CODE = data.settings.wholesaleCode || 'ADMIN123'; CURRENCY = data.settings.currency || '₪'; }
      if (data.orders) { try { localStorage.setItem('mycart_orders', JSON.stringify(data.orders)); } catch(e) {} }
      if (data.cart) { try { localStorage.setItem('mycart_cart', JSON.stringify(data.cart)); } catch(e) {} }
      if (data.customer) { try { localStorage.setItem('mycart_customer', JSON.stringify(data.customer)); } catch(e) {} }
      if (data.logo) { try { localStorage.setItem('mycart_logo', data.logo); } catch(e) {} document.getElementById('storeLogo').src = data.logo; }
      if (data.bg) { try { localStorage.setItem('mycart_bg', data.bg); } catch(e) {} document.getElementById('header').style.setProperty('--header-bg', `url(${data.bg})`); document.getElementById('header').classList.add('has-bg'); }
      if (data.marketing) { try { localStorage.setItem('mycart_marketing', JSON.stringify(data.marketing)); } catch(e) {} }
      renderProducts(getFilteredProducts());
      renderCartItems();
      document.getElementById('adminDataStatus').textContent = '✅ تم الاستيراد';
      adminRefreshAll();
      showToast('✅ تم استيراد البيانات', 'success');
    } catch(err) { showToast('⚠️ ملف غير صالح', 'error'); }
  };
  reader.readAsText(file);
  e.target.value = '';
};

// Update adminResetAll to include categories and discounts
const origAdminResetAll = adminResetAll;
adminResetAll = function() {
  if (!confirm('حذف كل البيانات؟')) return;
  if (!confirm('تأكيد نهائي؟')) return;
  localStorage.removeItem('mycart_admin_products');
  localStorage.removeItem('mycart_admin_settings');
  localStorage.removeItem('mycart_orders');
  localStorage.removeItem('mycart_cart');
  localStorage.removeItem('mycart_customer');
  localStorage.removeItem('mycart_logo');
  localStorage.removeItem('mycart_bg');
  localStorage.removeItem('mycart_wholesale');
  localStorage.removeItem('mycart_categories');
  localStorage.removeItem('mycart_discount_codes');
  localStorage.removeItem('mycart_marketing');
  products.length = 0;
  adminRefreshAll();
  showToast('✅ تم إعادة تعيين الكل', 'success');
};

window.addEventListener('storage', function(e) {
  if (e.key === 'mycart_admin_products_sync' || e.key === 'mycart_admin_settings_sync' || e.key === 'mycart_admin_categories_sync') {
    products = loadProducts();
    adminSettings = loadAdminSettings();
    CURRENCY = adminSettings.currency || '₪';
    WHOLESALE_CODE = localStorage.getItem('mycart_wholesale_code') || adminSettings.wholesaleCode || 'ADMIN123';
    renderCategories();
    renderProducts(getFilteredProducts());
  }
});

// Sync zone change to re-render totals
document.addEventListener('change', function(e) {
  if (e.target.id === 'custZone') {
    renderCartItems();
    renderStep2Summary();
  }
});

// Marketing Helpers
let promoInterval = null;
function startPromoCountdown(durationMinutes) {
  if (promoInterval) clearInterval(promoInterval);
  let totalSeconds = durationMinutes * 60;
  
  function updateTimerDisplay() {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    const pad = (n) => String(n).padStart(2, '0');
    
    const timerText = `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
    const timerEl = document.getElementById('countdownTimer');
    if (timerEl) timerEl.textContent = timerText;
  }
  
  updateTimerDisplay();
  promoInterval = setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds--;
      updateTimerDisplay();
    } else {
      clearInterval(promoInterval);
    }
  }, 1000);
}

function copyProductLink() {
  if (!currentProduct) return;
  const link = `${window.location.origin}${window.location.pathname}#product/${currentProduct.id}`;
  navigator.clipboard.writeText(link).then(() => {
    showToast('✅ تم نسخ رابط المنتج بنجاح!', 'success');
  }).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = link; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    document.execCommand('copy'); document.body.removeChild(ta);
    showToast('✅ تم نسخ رابط المنتج بنجاح!', 'success');
  });
}

function quickWaOrder() {
  if (!currentProduct) return;
  const marketingData = JSON.parse(localStorage.getItem('mycart_marketing')) || {};
  const waNumber = marketingData.social?.whatsapp;
  if (!waNumber) {
    showToast('⚠️ رقم الواتساب غير مضبوط بلوحة التحكم!', 'error');
    return;
  }
  
  let cleanNumber = waNumber.replace(/[^0-9]/g, '');
  if (!cleanNumber.startsWith('972') && !cleanNumber.startsWith('962') && !cleanNumber.startsWith('966') && cleanNumber.startsWith('0')) {
    cleanNumber = '972' + cleanNumber.substring(1);
  }
  
  const quantity = parseInt(document.getElementById('detailQty').textContent) || 1;
  const price = isWholesale ? Math.round(currentProduct.price * 0.85) : currentProduct.price;
  const total = price * quantity;
  
  let selectedDetails = '';
  if (window._selOptions) {
    const opts = Object.entries(window._selOptions).map(([k, v]) => `${k}: ${v}`).join(', ');
    if (opts) selectedDetails = ` (${opts})`;
  }
  
  const msg = `مرحباً، أود طلب المنتج التالي:\n- المنتج: ${currentProduct.name}${selectedDetails}\n- الكمية: ${quantity}\n- السعر: ${CURRENCY}${total}\n\nيرجى تأكيد الطلب.`;
  const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

// ─── Promo Popup ─────────────────────────────────────────────
function initPromoPopup() {
  const mData = JSON.parse(localStorage.getItem('mycart_marketing')) || {};
  const pp = mData.promoPopup;
  if (!pp?.show) return;
  if (sessionStorage.getItem('promoPopupShown')) return;
  const delayMs = (parseInt(pp.delay) || 3) * 1000;
  setTimeout(() => {
    const modal = document.getElementById('promoPopupModal');
    if (!modal) return;

    // Content
    document.getElementById('promoPopupTitle').textContent = pp.title || 'عرض خاص لفترة محدودة!';
    document.getElementById('promoPopupText').textContent = pp.text || 'استخدم كود الخصم التالي عند إتمام طلبك:';
    document.getElementById('promoPopupCode').textContent = pp.code || 'SPECIAL10';

    // Image
    const imgEl = document.getElementById('promoPopupImage');
    const iconEl = document.getElementById('promoPopupIcon');
    if (pp.image && imgEl) {
      imgEl.src = pp.image;
      imgEl.style.display = 'block';
      if (iconEl) iconEl.style.display = 'none';
    } else {
      if (imgEl) imgEl.style.display = 'none';
      if (iconEl) iconEl.style.display = 'block';
    }

    // Hide code box if no code
    const codeBox = document.getElementById('promoCodeBox');
    const copyHint = document.getElementById('promoCopyHint');
    if (codeBox) codeBox.style.display = pp.code ? 'flex' : 'none';
    if (copyHint) copyHint.style.display = pp.code ? 'block' : 'none';

    // Action button
    const btnEl = document.getElementById('promoPopupBtn');
    if (btnEl && pp.link) {
      btnEl.textContent = 'تسوق الآن';
      btnEl.href = pp.link;
      btnEl.style.display = 'block';
      btnEl.style.background = pp.color || '#ef4444';
      btnEl.style.color = '#ffffff';
    } else if (btnEl) {
      btnEl.style.display = 'none';
    }

    // Custom colors for the popup box
    const contentEl = document.getElementById('promoPopupContent');
    if (contentEl && pp.color) {
      contentEl.style.borderTop = '4px solid ' + pp.color;
    }

    modal.style.display = 'flex';
    sessionStorage.setItem('promoPopupShown', '1');
  }, delayMs);
}


function closePromoPopup() {
  const modal = document.getElementById('promoPopupModal');
  if (modal) modal.style.display = 'none';
}

function copyPromoCode() {
  const code = document.getElementById('promoPopupCode')?.textContent;
  if (!code) return;
  navigator.clipboard.writeText(code).then(() => {
    showToast(`✅ تم نسخ الكود: ${code}`, 'success');
    closePromoPopup();
  }).catch(() => {
    showToast(`✅ الكود: ${code}`, 'success');
    closePromoPopup();
  });
}

// ─── Social Proof Notifications ──────────────────────────────
const _SP_NAMES = ['أحمد','محمد','فاطمة','نور','علي','سارة','عمر','مريم','خالد','لانا'];
const _SP_CITIES = ['القدس','رام الله','نابلس','الخليل','جنين','طولكرم','عمّان','جدة','الرياض','دبي'];
const _SP_TIMES = ['منذ دقيقتين','منذ 5 دقائق','منذ 12 دقيقة','منذ 20 دقيقة','قبل ساعة'];
let _spTimer = null;

function initSocialProof() {
  const mData = JSON.parse(localStorage.getItem('mycart_marketing')) || {};
  if (!mData.socialProof?.show || !products.length) return;
  if (_spTimer) clearInterval(_spTimer);
  _spTimer = setInterval(() => showSocialProofToast(), 15000);
  setTimeout(() => showSocialProofToast(), 5000);
}

function showSocialProofToast() {
  const toast = document.getElementById('socialProofToast');
  if (!toast || !products.length) return;
  const rProd = products[Math.floor(Math.random() * products.length)];
  const rName = _SP_NAMES[Math.floor(Math.random() * _SP_NAMES.length)];
  const rCity = _SP_CITIES[Math.floor(Math.random() * _SP_CITIES.length)];
  const rTime = _SP_TIMES[Math.floor(Math.random() * _SP_TIMES.length)];
  document.getElementById('spUser').textContent = `${rName} من ${rCity}`;
  document.getElementById('spAction').textContent = `اشترى "${rProd.name}"`;
  document.getElementById('spTime').textContent = rTime;
  toast.classList.remove('hide');
  toast.style.display = 'flex';
  setTimeout(() => {
    toast.classList.add('hide');
    setTimeout(() => { toast.style.display = 'none'; toast.classList.remove('hide'); }, 400);
  }, 5000);
}

// ─── Customer Reviews ─────────────────────────────────────────
function loadProductReviews(productId) {
  const allReviews = JSON.parse(localStorage.getItem('mycart_reviews') || '{}');
  const reviews = allReviews[productId] || [];
  const listEl = document.getElementById('reviewsList');
  const countEl = document.getElementById('reviewsCount');
  const avgEl = document.getElementById('ratingAvg');
  const starsEl = document.getElementById('ratingStars');
  if (!listEl) return;
  countEl.textContent = reviews.length;
  if (reviews.length) {
    const avg = (reviews.reduce((s, r) => s + r.stars, 0) / reviews.length).toFixed(1);
    avgEl.textContent = avg;
    starsEl.textContent = '⭐'.repeat(Math.round(avg));
    listEl.innerHTML = reviews.map(r => `
      <div class="review-card">
        <div class="review-header">
          <span class="review-author">${r.name}</span>
          <span class="review-stars">${'⭐'.repeat(r.stars)}</span>
        </div>
        <div class="review-text">${r.comment}</div>
      </div>
    `).join('');
  } else {
    avgEl.textContent = '-';
    starsEl.textContent = '☆☆☆☆☆';
    listEl.innerHTML = '<p style="font-size:.8rem;color:var(--text-muted);text-align:center;padding:10px">لا توجد تقييمات بعد، كن أول من يقيّم!</p>';
  }
}

function toggleReviewForm() {
  const form = document.getElementById('addReviewForm');
  if (!form) return;
  form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

function submitCustomerReview(e) {
  e.preventDefault();
  if (!currentProduct) return;
  const name = document.getElementById('revName').value.trim();
  const stars = parseInt(document.getElementById('revStars').value);
  const comment = document.getElementById('revComment').value.trim();
  if (!name || !comment) return;
  const allReviews = JSON.parse(localStorage.getItem('mycart_reviews') || '{}');
  if (!allReviews[currentProduct.id]) allReviews[currentProduct.id] = [];
  allReviews[currentProduct.id].unshift({ name, stars, comment, date: new Date().toLocaleDateString('ar') });
  localStorage.setItem('mycart_reviews', JSON.stringify(allReviews));
  loadProductReviews(currentProduct.id);
  document.getElementById('addReviewForm').reset();
  document.getElementById('addReviewForm').style.display = 'none';
  showToast('✅ تم إرسال تقييمك بنجاح!', 'success');
}

// Volume discount applied on cart totals
function getVolumeDiscountedPrice(basePrice, qty) {
  const mData = JSON.parse(localStorage.getItem('mycart_marketing')) || {};
  if (!mData.volumeDiscount?.show) return basePrice * qty;

  const type = mData.volumeDiscount.type || 'percent';

  if (type === 'bogo') {
    const buy = mData.volumeDiscount.bogoBuy || 2;
    const get = mData.volumeDiscount.bogoGet || 1;
    const groupSize = buy + get;
    const freeGroups = Math.floor(qty / groupSize);
    const paidQty = qty - (freeGroups * get);
    return basePrice * paidQty;
  }

  if (type === 'fixed') {
    const disc2 = mData.volumeDiscount.disc2 || 5;
    const disc3 = mData.volumeDiscount.disc3 || 10;
    if (qty >= 3) {
      return Math.max(0, (basePrice - disc3) * qty);
    }
    if (qty >= 2) {
      return Math.max(0, (basePrice - disc2) * qty);
    }
    return basePrice * qty;
  }

  // default 'percent'
  if (qty >= 3) {
    const disc = (mData.volumeDiscount.disc3 || 10) / 100;
    return Math.round(basePrice * qty * (1 - disc));
  }
  if (qty >= 2) {
    const disc = (mData.volumeDiscount.disc2 || 5) / 100;
    return Math.round(basePrice * qty * (1 - disc));
  }
  return basePrice * qty;
}

// ─── 🌙 Dark Mode ─────────────────────────────────────────────
function toggleTheme() {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('mycart_dark_mode', isDark ? '1' : '0');
  const btn = document.getElementById('themeToggleBtn');
  if (btn) btn.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  if (btn) btn.title = isDark ? 'الوضع النهاري' : 'الوضع الليلي';
}

function applyStoredTheme() {
  const stored = localStorage.getItem('mycart_dark_mode');
  if (stored === '1') {
    document.body.classList.add('dark-mode');
    const btn = document.getElementById('themeToggleBtn');
    if (btn) { btn.innerHTML = '<i class="fa-solid fa-sun"></i>'; btn.title = 'الوضع النهاري'; }
  }
}

// ─── 🔍 Smart Search ──────────────────────────────────────────
function initSmartSearch() {
  const input = document.getElementById('searchInput');
  if (!input) return;
  input.addEventListener('input', function() {
    const q = this.value.trim().toLowerCase();
    const container = document.getElementById('searchSuggestions');
    if (!container) return;
    if (!q || q.length < 1) { container.style.display = 'none'; return; }
    // existing search filter
    filterProducts(q);
    // dropdown suggestions
    const matches = products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      (p.description || '').toLowerCase().includes(q) ||
      (Array.isArray(p.category) ? p.category.join(' ') : (p.category || '')).toLowerCase().includes(q)
    ).slice(0, 6);
    if (!matches.length) { container.style.display = 'none'; return; }
    container.style.display = 'flex';
    container.innerHTML = matches.map(p => {
      const img = Array.isArray(p.images) ? p.images[0] : p.image;
      return `<div class="suggestion-item" onclick="openSuggestion(${p.id})">
        <img src="${img}" alt="${p.name}" onerror="this.src='https://placehold.co/36x36/ef4444/fff?text=?'">
        <div class="suggestion-info">
          <span class="suggestion-name">${p.name}</span>
          <span class="suggestion-price">${CURRENCY}${p.price}</span>
        </div>
      </div>`;
    }).join('');
  });
  document.addEventListener('click', e => {
    if (!e.target.closest('#searchBar')) {
      const c = document.getElementById('searchSuggestions');
      if (c) c.style.display = 'none';
    }
  });
}

function openSuggestion(id) {
  const container = document.getElementById('searchSuggestions');
  if (container) container.style.display = 'none';
  document.getElementById('searchInput').value = '';
  const p = products.find(x => x.id === id);
  if (p) openDetail(p);
}

// ─── 🗂️ Advanced Product Filter ───────────────────────────────
function toggleAdvFilter() {
  const bar = document.getElementById('advFilterBar');
  if (!bar) return;
  const showing = bar.style.display !== 'none';
  bar.style.display = showing ? 'none' : 'block';
  if (!showing) initFilterRange();
}

function initFilterRange() {
  const currentList = getFilteredProducts();
  if (!currentList.length) return;
  const prices = currentList.map(p => p.price);
  const minP = Math.min(...prices);
  const maxP = Math.max(...prices);
  const minEl = document.getElementById('filterMinPrice');
  const maxEl = document.getElementById('filterMaxPrice');
  if (minEl) { minEl.min = minP; minEl.max = maxP; minEl.value = minP; }
  if (maxEl) { maxEl.min = minP; maxEl.max = maxP; maxEl.value = maxP; }
  const minLbl = document.getElementById('filterMinLabel');
  const maxLbl = document.getElementById('filterMaxLabel');
  if (minLbl) minLbl.textContent = minP;
  if (maxLbl) maxLbl.textContent = maxP;
}

function applyAdvFilter() {
  const minPrice = parseFloat(document.getElementById('filterMinPrice')?.value || 0);
  const maxPrice = parseFloat(document.getElementById('filterMaxPrice')?.value || 999999);
  const sort = document.getElementById('filterSort')?.value || 'default';
  const inStockOnly = document.getElementById('filterInStock')?.checked;
  const minLbl = document.getElementById('filterMinLabel');
  const maxLbl = document.getElementById('filterMaxLabel');
  if (minLbl) minLbl.textContent = minPrice;
  if (maxLbl) maxLbl.textContent = maxPrice;
  let filtered = getFilteredProducts().filter(p => {
    const inRange = p.price >= minPrice && p.price <= maxPrice;
    const stock = inStockOnly ? (p.stock === undefined || p.stock > 0) : true;
    return inRange && stock;
  });
  if (sort === 'price_asc') filtered.sort((a, b) => a.price - b.price);
  else if (sort === 'price_desc') filtered.sort((a, b) => b.price - a.price);
  else if (sort === 'discount') filtered.sort((a, b) => (b.discount || 0) - (a.discount || 0));
  else if (sort === 'name_asc') filtered.sort((a, b) => a.name.localeCompare(b.name, 'ar'));
  renderProducts(filtered);
}

function resetAdvFilter() {
  const sortEl = document.getElementById('filterSort');
  const stockEl = document.getElementById('filterInStock');
  if (sortEl) sortEl.value = 'default';
  if (stockEl) stockEl.checked = false;
  initFilterRange();
  renderProducts(getFilteredProducts());
}

// ─── 📱 WhatsApp Order Notifications ─────────────────────────
function sendOwnerWhatsAppNotification(order) {
  const mData = JSON.parse(localStorage.getItem('mycart_marketing')) || {};
  // Only redirect if the toggle is enabled (default: true if never set)
  if (mData.waNotif && mData.waNotif.show === false) return;
  let waNumber = mData.social?.whatsapp || '';
  if (!waNumber) {
    const waBtn = document.getElementById('waBtn');
    if (waBtn) waNumber = (waBtn.href || '').replace('https://wa.me/', '').split('?')[0];
  }
  if (!waNumber) return;
  const cleanNumber = waNumber.replace(/\D/g, '');
  if (!cleanNumber) return;
  const itemsText = (order.items || []).map(i => `• ${i.name} × ${i.qty} = ${CURRENCY}${(i.price * i.qty).toFixed(2)}`).join('\n');
  const msg = `🛒 *طلب جديد #${String(order.id).slice(-6)}*\n\n` +
    `👤 *العميل:* ${order.customer?.name || '—'}\n` +
    `📞 *الهاتف:* ${order.customer?.phone || '—'}\n` +
    `📍 *العنوان:* ${order.customer?.city || ''} ${order.customer?.address || ''}\n\n` +
    `📦 *المنتجات:*\n${itemsText}\n\n` +
    `💰 *الإجمالي:* ${CURRENCY}${order.total?.toFixed(2) || '0.00'}`;
  const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

function addBundleToCart() {
  if (!currentProduct || !window._fbtCompanion) return;
  const companion = window._fbtCompanion;
  const marketingData = JSON.parse(localStorage.getItem('mycart_marketing')) || {};
  const discVal = marketingData.fbt?.discount || 10;
  const discType = marketingData.fbt?.discountType || 'percent';
  
  let discountedPrice1 = currentProduct.price;
  let discountedPrice2 = companion.price;
  
  if (discType === 'fixed') {
    // Distribute fixed discount proportionally or apply half to each
    const halfDisc = Math.round(discVal / 2);
    discountedPrice1 = Math.max(0, currentProduct.price - halfDisc);
    discountedPrice2 = Math.max(0, companion.price - (discVal - halfDisc));
  } else {
    // Percent
    const factor = 1 - (discVal / 100);
    discountedPrice1 = Math.round(currentProduct.price * factor);
    discountedPrice2 = Math.round(companion.price * factor);
  }
  
  addToCartWithPrice(currentProduct, discountedPrice1);
  addToCartWithPrice(companion, discountedPrice2);
  
  const msg = discType === 'fixed' ? `بخصم ${discVal} ${CURRENCY}` : `بخصم ${discVal}%`;
  showToast(`🎉 تم إضافة الحزمة بنجاح ${msg}!`, 'success');
  openCartSheet();
}

function addToCartWithPrice(p, customPrice) {
  let img = Array.isArray(p.images) ? p.images[0] : p.image;
  const item = {
    id: p.id,
    name: p.name,
    price: customPrice,
    image: img,
    qty: 1,
    variant: ''
  };
  const existing = cart.find(x => x.id === p.id && x.variant === '');
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push(item);
  }
  saveCart();
  renderCartItems();
  updateCartBadge();
}

// ─── 🎡 Spin & Win Wheel ─────────────────────────────────────
let _wheelSpinning = false;
function initSpinWin() {
  const mData = JSON.parse(localStorage.getItem('mycart_marketing')) || {};
  if (!mData.spinWin?.show) return;
  if (sessionStorage.getItem('spinWinShown')) return;
  setTimeout(() => {
    const modal = document.getElementById('spinWinModal');
    if (modal) modal.style.display = 'flex';
  }, 6000);
}

function closeSpinWin() {
  const modal = document.getElementById('spinWinModal');
  if (modal) modal.style.display = 'none';
  sessionStorage.setItem('spinWinShown', '1');
}

function spinWheel() {
  if (_wheelSpinning) return;
  _wheelSpinning = true;
  const wheel = document.getElementById('luckyWheel');
  const btn = document.getElementById('spinBtn');
  const resultDiv = document.getElementById('spinResult');
  if (!wheel || !btn) return;
  btn.disabled = true;

  // Load segments from marketing data (fall back to defaults)
  const mData = JSON.parse(localStorage.getItem('mycart_marketing')) || {};
  const rawSegs = mData.spinWin?.segments?.length
    ? mData.spinWin.segments
    : [
        { label: 'خصم 5%', type: 'discount', percent: 5, code: 'LUCKY5', color: '#ff5e62' },
        { label: 'خصم 10%', type: 'discount', percent: 10, code: 'LUCKY10', color: '#ff9966' },
        { label: 'حظ سعيد', type: 'none', percent: 0, code: '', color: '#94a3b8' },
        { label: 'خصم 15%', type: 'discount', percent: 15, code: 'LUCKY15', color: '#ff5e62' },
        { label: 'شحن مجاني', type: 'freeship', percent: 0, code: 'FREESHIP', color: '#38ef7d' }
      ];

  const count = rawSegs.length;
  const segDeg = 360 / count;

  // Rebuild conic-gradient and text labels dynamically
  const gradParts = rawSegs.map((s, i) => {
    const from = i * segDeg;
    const to = from + segDeg;
    return `${s.color || '#ef4444'} ${from}deg ${to}deg`;
  });
  wheel.style.background = `conic-gradient(${gradParts.join(', ')})`;

  // Remove old labels and draw new ones
  wheel.querySelectorAll('.wheel-label').forEach(el => el.remove());
  rawSegs.forEach((s, i) => {
    const midAngle = i * segDeg + segDeg / 2;
    const span = document.createElement('span');
    span.className = 'wheel-label';
    span.textContent = s.label;
    span.style.cssText = `position:absolute;top:25px;left:80px;transform:rotate(${midAngle}deg);transform-origin:center 105px;font-weight:800;color:#fff;font-size:0.68rem;white-space:nowrap;text-shadow:0 1px 2px rgba(0,0,0,.4)`;
    wheel.appendChild(span);
  });

  // Pick a random winner
  const chosenIndex = Math.floor(Math.random() * count);
  const chosen = rawSegs[chosenIndex];
  const chosenMidDeg = chosenIndex * segDeg + segDeg / 2;

  // Spin: 5 full rotations + align chosen segment to top pointer
  const totalDeg = (360 * 5) + (360 - chosenMidDeg);
  wheel.style.transform = `rotate(${totalDeg}deg)`;

  setTimeout(() => {
    _wheelSpinning = false;
    btn.disabled = false;
    if (resultDiv) {
      resultDiv.style.display = 'block';
      if (chosen.type === 'discount' && chosen.percent > 0 && chosen.code) {
        resultDiv.innerHTML = `🎉 مبروك! فزت بـ ${chosen.label}<br>كود الخصم: <strong style="font-size:1.2rem;letter-spacing:1px">${chosen.code}</strong> (تم تطبيقه تلقائياً)`;
        const codes = JSON.parse(localStorage.getItem('mycart_discount_codes') || '[]');
        if (!codes.some(c => c.code === chosen.code)) {
          codes.push({ code: chosen.code, percent: chosen.percent, minOrder: 0, limit: 0, uses: 0 });
          localStorage.setItem('mycart_discount_codes', JSON.stringify(codes));
        }
        navigator.clipboard.writeText(chosen.code).catch(() => {});
        appliedDiscount = chosen.percent;
        const discInput = document.getElementById('discountCode');
        if (discInput) discInput.value = chosen.code;
        const discMsg = document.getElementById('discountMsg');
        if (discMsg) { discMsg.textContent = `✅ تم تطبيق الخصم ${chosen.percent}%`; discMsg.style.color = '#16a34a'; }
        renderCartItems();
      } else if (chosen.type === 'freeship') {
        resultDiv.innerHTML = `🎉 مبروك! فزت بـ ${chosen.label}!<br>سيتم خصم قيمة التوصيل بالكامل عند إتمام الطلب.`;
        sessionStorage.setItem('free_delivery_win', '1');
        renderCartItems();
      } else {
        resultDiv.textContent = `🤞 ${chosen.label}! شكراً لمشاركتك.`;
      }
    }
    setTimeout(closeSpinWin, 4500);
  }, 4000);
}

// ─── ⚡ Daily Flash Sales ────────────────────────────────────
let _flashTimer = null;
function initFlashSales() {
  const container = document.getElementById('flashSaleSection');
  const scroll = document.getElementById('flashSaleScroll');
  if (!container || !scroll || !products.length) return;
  
  // Check if flash sales is enabled in marketing settings
  const marketing = JSON.parse(localStorage.getItem('mycart_marketing')) || {};
  if (!marketing.flashSales?.show) {
    container.style.display = 'none';
    return;
  }
  
  // Flash sale products: products with discount >= 20%
  const flashProducts = products.filter(p => (p.discount || 0) >= 20);
  if (!flashProducts.length) {
    container.style.display = 'none';
    return;
  }
  container.style.display = 'block';
  scroll.innerHTML = flashProducts.map(p => {
    const img = Array.isArray(p.images) ? p.images[0] : p.image;
    // simulated remaining inventory
    const progress = Math.max(10, Math.round((p.id % 7 + 3) * 10)); // e.g. 30%-90%
    return `<div class="product-card" onclick="openDetail(${p.id})" style="flex:0 0 160px; margin-bottom:0">
      <div class="product-badge-tag" style="background:#ef4444; color:#fff">خصم ${p.discount}%</div>
      <img src="${img}" style="height:110px; object-fit:cover; width:100%">
      <h4 style="font-size:0.75rem; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; padding:0 6px">${p.name}</h4>
      <div class="product-price" style="font-size:0.8rem; padding:0 6px">${CURRENCY}${p.price}</div>
      <div style="padding:0 6px 6px">
        <div style="display:flex; justify-content:space-between; font-size:0.55rem; color:var(--text-muted); margin-bottom:2px">
          <span>مباع: ${progress}%</span>
          <span>متبقي: ${100 - progress}%</span>
        </div>
        <div style="background:#f1f5f9; height:4px; border-radius:2px; overflow:hidden">
          <div style="background:#ef4444; height:100%; width:${progress}%"></div>
        </div>
      </div>
    </div>`;
  }).join('');
  
  if (_flashTimer) clearInterval(_flashTimer);
  _flashTimer = setInterval(updateFlashTimer, 1000);
}

function updateFlashTimer() {
  const timerEl = document.getElementById('flashSaleTimer');
  if (!timerEl) return;
  const now = new Date();
  const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
  const diff = endOfDay - now;
  if (diff <= 0) {
    timerEl.textContent = '00:00:00';
    return;
  }
  const h = String(Math.floor(diff / 3600000)).padStart(2, '0');
  const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
  const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
  timerEl.textContent = `${h}:${m}:${s}`;
}

// Hook free delivery win into final price
const origRenderCartItems = renderCartItems;
renderCartItems = function() {
  origRenderCartItems();
  if (sessionStorage.getItem('free_delivery_win') === '1') {
    const delRow = document.getElementById('deliveryRow');
    if (delRow) delRow.style.display = 'none';
    const total = cart.reduce((sum, item) => sum + getVolumeDiscountedPrice(item.price, item.qty), 0);
    const discount = appliedDiscount > 0 ? Math.round(total * appliedDiscount / 100) : 0;
    document.getElementById('cartTotal').textContent = `${CURRENCY}${(total - discount).toFixed(2)}`;
  }
};

// ─── 🔥 Live Viewers Counter ────────────────────────────────────────────────
var _liveViewersInterval = null;
function initLiveViewers(enabled) {
  const container = document.getElementById('liveViewersContainer');
  const textEl = document.getElementById('liveViewersText');
  if (!container) return;
  clearInterval(_liveViewersInterval);
  if (!enabled) { container.style.display = 'none'; return; }
  // Bind to openDetail so it shows only when a product is open
  window._liveViewersEnabled = true;
}

function startLiveViewersTicker(productName) {
  const container = document.getElementById('liveViewersContainer');
  const textEl = document.getElementById('liveViewersText');
  if (!container || !textEl || !window._liveViewersEnabled) return;
  clearInterval(_liveViewersInterval);
  const base = Math.floor(Math.random() * 15) + 8; // 8-22
  let count = base;
  textEl.textContent = `🔥 يشاهد هذا المنتج ${count} شخصاً الآن!`;
  container.style.display = 'flex';
  _liveViewersInterval = setInterval(() => {
    const delta = Math.floor(Math.random() * 3) - 1; // -1, 0, or +1
    count = Math.max(3, Math.min(30, count + delta));
    textEl.textContent = `🔥 يشاهد هذا المنتج ${count} شخصاً الآن!`;
  }, 5000);
}

function stopLiveViewersTicker() {
  clearInterval(_liveViewersInterval);
  const container = document.getElementById('liveViewersContainer');
  if (container) container.style.display = 'none';
}

// ─── 💬 WhatsApp Floating Chat Widget ───────────────────────────────────────
function initWaChatWidget(enabled, greeting, waNumber) {
  const widget = document.getElementById('waChatWidget');
  if (!widget) return;
  if (!enabled) { widget.style.display = 'none'; return; }
  widget.style.display = 'block';
  // Set WhatsApp link
  const cleanNum = (waNumber || '').replace(/\D/g, '');
  const linkEl = document.getElementById('waChatLink');
  if (linkEl && cleanNum) {
    const greetMsg = greeting || 'أهلاً! أحتاج لمساعدة في المتجر.';
    linkEl.href = `https://wa.me/${cleanNum}?text=${encodeURIComponent(greetMsg)}`;
  }
}

function toggleWaChatBox() {
  const box = document.getElementById('waChatBox');
  if (!box) return;
  const isOpen = box.style.display === 'flex' || box.style.display === 'block';
  box.style.display = isOpen ? 'none' : 'flex';
  box.style.flexDirection = 'column';
}

// ====== ADMIN LOGIN (standalone admin.html) ======
function adminLogin() {
  var pass = document.getElementById('adminPass').value.trim();
  var stored = localStorage.getItem('mycart_admin_pass') || 'admin';
  if (pass === stored) {
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('app').style.display = 'grid';
    localStorage.setItem('mycart_admin_logged', 'true');
    if (typeof switchTab === 'function') switchTab('dashboard');
    updateNotifBadge();
  } else {
    document.getElementById('loginError').style.display = 'block';
  }
}

function topbarLogout() {
  localStorage.removeItem('mycart_admin_logged');
  document.getElementById('loginScreen').style.display = 'flex';
  document.getElementById('app').style.display = 'none';
}

function toggleMobileMenu() {
  var sidebar = document.getElementById('sidebar');
  if (sidebar) sidebar.classList.toggle('show');
}

function switchTab(tab, subTab) {
  document.querySelectorAll('.tab-content').forEach(function(t){ t.classList.remove('active'); });
  document.querySelectorAll('.sidebar-btn, .sidebar-btn-sub').forEach(function(b){ b.classList.remove('active'); });
  var el = document.getElementById('tab-' + tab);
  if (el) el.classList.add('active');
  var btn = document.querySelector('[data-tab="' + tab + '"]');
  if (btn) btn.classList.add('active');
}

// ====== AGENCY SETTINGS & SUBSCRIPTION ======
function getAgencySettings() {
  var priv = localStorage.getItem('mycart_store_private_config');
  if (priv) { try { return JSON.parse(priv); } catch(e){} }
  var raw = localStorage.getItem('mycart_agency_site_settings');
  if (raw) { try { return JSON.parse(raw); } catch(e){} }
  return { freeFee:'2', feeLimit:'100', monthlyFee:'100', annualFee:'1000' };
}
var sett = getAgencySettings();
var FREE_FEE = parseFloat(sett.freeFee) || 2;
var FEE_LIMIT = parseFloat(sett.feeLimit) || 100;
var MONTHLY_PRICE = parseFloat(sett.monthlyFee) || 100;
var ANNUAL_PRICE = parseFloat(sett.annualFee) || 1000;

function getStoreConfig() {
  var priv = localStorage.getItem('mycart_store_private_config');
  if (priv) { try { return JSON.parse(priv); } catch(e){} }
  return null;
}

function showAlertModal(msg) {
  var ov = document.createElement('div');
  ov.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.4);z-index:99999;display:flex;align-items:center;justify-content:center';
  ov.innerHTML = '<div style="background:#fff;border-radius:18px;padding:28px 32px;max-width:380px;width:90%;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,.3)"><div style="margin-bottom:14px;font-size:2.2rem"><i class="fa-solid fa-circle-check" style="color:#10b981"></i></div><p style="font-size:.9rem;font-weight:600;margin:0 0 18px;line-height:1.6">'+msg+'</p><button id="alertModalOk" style="width:100%;padding:10px;border:none;border-radius:10px;background:#06b6d4;color:#fff;font-weight:800;font-size:.85rem;cursor:pointer;font-family:inherit">موافق</button></div>';
  document.body.appendChild(ov);
  document.getElementById('alertModalOk').onclick = function(){ document.body.removeChild(ov); };
}

function showConfirmModal(msg, fn) {
  var ov = document.createElement('div');
  ov.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.4);z-index:99999;display:flex;align-items:center;justify-content:center';
  ov.innerHTML = '<div style="background:#fff;border-radius:18px;padding:28px 32px;max-width:380px;width:90%;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,.3)"><div style="margin-bottom:14px;font-size:2.2rem"><i class="fa-solid fa-question-circle" style="color:#f59e0b"></i></div><p style="font-size:.9rem;font-weight:600;margin:0 0 18px;line-height:1.6">'+msg+'</p><div style="display:flex;gap:10px"><button id="confirmModalYes" style="flex:1;padding:10px;border:none;border-radius:10px;background:#06b6d4;color:#fff;font-weight:800;font-size:.85rem;cursor:pointer;font-family:inherit">نعم</button><button id="confirmModalNo" style="flex:1;padding:10px;border:none;border-radius:10px;background:#e2e8f0;color:#1e293b;font-weight:800;font-size:.85rem;cursor:pointer;font-family:inherit">إلغاء</button></div></div>';
  document.body.appendChild(ov);
  document.getElementById('confirmModalYes').onclick = function(){ document.body.removeChild(ov); if (fn) fn(); };
  document.getElementById('confirmModalNo').onclick = function(){ document.body.removeChild(ov); };
}

function getFeeInfo() {
  var cnt = parseInt(localStorage.getItem('mycart_free_orders_count') || '0', 10);
  var sett2 = getAgencySettings();
  var fee = parseFloat(sett2.freeFee) || 2;
  var limit = parseFloat(sett2.feeLimit) || 100;
  var plan = localStorage.getItem('mycart_subscription_plan') || 'free';
  var accrued = plan === 'free' ? cnt * fee : 0;
  return { count:cnt, fee:fee, limit:limit, plan:plan, accrued:accrued, remaining:Math.max(0, limit - accrued) };
}

function paySubscriptionFees() {
  showConfirmModal('هل تريد تأكيد دفع كامل المستحقات ('+getFeeInfo().accrued+' ₪)؟', function(){
    localStorage.removeItem('mycart_fee_threshold_date');
    localStorage.removeItem('mycart_store_suspended');
    localStorage.setItem('mycart_free_orders_count', '0');
    showAlertModal('✅ تم تسديد المستحقات بنجاح!');
    location.reload();
  });
}

function renderFeeAlert() {
  var info = getFeeInfo();
  var container = document.getElementById('feeAlertContainer');
  if (!container) return;
  if (info.plan !== 'free' || info.accrued <= 0) { container.style.display = 'none'; return; }
  container.style.display = 'block';
  var pct = Math.min(100, (info.accrued / info.limit) * 100);
  var color = pct >= 100 ? '#ef4444' : pct >= 80 ? '#f59e0b' : '#10b981';
  var suspDate = localStorage.getItem('mycart_fee_threshold_date');
  var daysLeft = '';
  if (suspDate) {
    var diff = Math.ceil((new Date(suspDate) - new Date()) / 86400000);
    daysLeft = diff > 0 ? '<span style="color:#ef4444;font-weight:900">مهلة '+diff+' يوم</span>' : '<span style="color:#dc2626;font-weight:900">⚠️ منتهي!</span>';
  }
  container.innerHTML = '<div style="background:#fff;border:2px solid '+color+';border-radius:14px;padding:16px;margin-bottom:16px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px"><span style="font-weight:800;font-size:.85rem">الرسوم: '+info.accrued+'/'+info.limit+' ₪</span><span style="font-size:.75rem;color:var(--text-gray)">'+daysLeft+'</span></div><div style="height:8px;background:#e2e8f0;border-radius:999px;overflow:hidden"><div style="width:'+pct+'%;height:100%;background:'+color+';border-radius:999px;transition:width .5s"></div></div>'+(pct>=100?'<button onclick="paySubscriptionFees()" style="width:100%;margin-top:10px;padding:8px;border:none;border-radius:10px;background:#06b6d4;color:#fff;font-weight:800;font-size:.8rem;cursor:pointer;font-family:inherit"><i class="fa-solid fa-wallet"></i> تسديد '+info.accrued+' ₪</button>':'')+'</div>';
}

// ====== AGENCY NOTIFICATIONS ======
function getAgencyNotifs() {
  var list = [];
  try { var r = localStorage.getItem('mycart_agency_notifications'); if (r) list = JSON.parse(r); } catch(e) {}
  return list.filter(function(n){ return n.target === 'all' || n.target === (localStorage.getItem('mycart_store_subdomain') || ''); });
}

function getReadNotifIds() {
  try { var r = localStorage.getItem('mycart_read_notifications'); return r ? JSON.parse(r) : []; } catch(e) { return []; }
}

function markNotifRead(id) {
  var ids = getReadNotifIds();
  if (ids.indexOf(id) === -1) { ids.push(id); localStorage.setItem('mycart_read_notifications', JSON.stringify(ids)); }
}

function showNotifPanel() {
  var badge = document.getElementById('notifBadge');
  if (badge) badge.style.display = 'none';
  var notifs = getAgencyNotifs();
  notifs.forEach(function(n){ markNotifRead(n.id); });
  var html = '<div id="notifModalOverlay" onclick="closeNotifModal()" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.4);z-index:9999;display:flex;align-items:center;justify-content:center"><div onclick="event.stopPropagation()" style="background:#fff;border-radius:18px;padding:28px;max-width:500px;width:90%;max-height:80vh;overflow-y:auto;box-shadow:0 20px 60px rgba(0,0,0,.3)"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px"><h3 style="font-size:1.1rem;font-weight:900;margin:0">📢 الإشعارات</h3><button onclick="closeNotifModal()" style="background:none;border:none;font-size:1.3rem;cursor:pointer;color:var(--text-gray)"><i class="fa-solid fa-xmark"></i></button></div>';
  if (!notifs.length) html += '<p style="font-size:.85rem;color:var(--text-gray);padding:20px 0;text-align:center">لا توجد إشعارات</p>';
  else html += notifs.map(function(n){ return '<div style="padding:12px 14px;background:#f8fafc;border-radius:12px;margin-bottom:8px;border:1px solid var(--fast7-border)"><div style="font-weight:900;font-size:.85rem">'+n.title+'</div><div style="font-size:.8rem;color:var(--text-gray);margin:4px 0">'+n.message+'</div><div style="font-size:.7rem;color:var(--text-gray)">'+n.date+'</div></div>';}).join('');
  html += '</div></div>';
  var el = document.createElement('div');
  el.id = 'notifModalContainer';
  el.innerHTML = html;
  document.body.appendChild(el);
}

function closeNotifModal() {
  var el = document.getElementById('notifModalContainer');
  if (el) el.remove();
  var overlay = document.getElementById('notifModalOverlay');
  if (overlay) overlay.remove();
}

function showAdminNotifPanel() {
  var badge = document.getElementById('adminNotifBadge');
  if (badge) badge.style.display = 'none';
  var notifs = getAgencyNotifs();
  notifs.forEach(function(n){ markNotifRead(n.id); });
  var html = '<div id="adminNotifModalOverlay" onclick="closeAdminNotifModal()" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.4);z-index:9999;display:flex;align-items:center;justify-content:center"><div onclick="event.stopPropagation()" style="background:#fff;border-radius:18px;padding:28px;max-width:500px;width:90%;max-height:80vh;overflow-y:auto;box-shadow:0 20px 60px rgba(0,0,0,.3)"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px"><h3 style="font-size:1.1rem;font-weight:900;margin:0">📢 الإشعارات</h3><button onclick="closeAdminNotifModal()" style="background:none;border:none;font-size:1.3rem;cursor:pointer;color:var(--text-gray)"><i class="fa-solid fa-xmark"></i></button></div>';
  if (!notifs.length) html += '<p style="font-size:.85rem;color:var(--text-gray);padding:20px 0;text-align:center">لا توجد إشعارات</p>';
  else html += notifs.map(function(n){ return '<div style="padding:12px 14px;background:#f8fafc;border-radius:12px;margin-bottom:8px;border:1px solid var(--fast7-border)"><div style="font-weight:900;font-size:.85rem">'+n.title+'</div><div style="font-size:.8rem;color:var(--text-gray);margin:4px 0">'+n.message+'</div><div style="font-size:.7rem;color:var(--text-gray)">'+n.date+'</div></div>';}).join('');
  html += '</div></div>';
  var el = document.createElement('div');
  el.id = 'adminNotifModalContainer';
  el.innerHTML = html;
  document.body.appendChild(el);
}

function closeAdminNotifModal() {
  var el = document.getElementById('adminNotifModalContainer');
  if (el) el.remove();
  var overlay = document.getElementById('adminNotifModalOverlay');
  if (overlay) overlay.remove();
}

function updateNotifBadge() {
  var badge = document.getElementById('notifBadge');
  if (!badge) return;
  var unread = getAgencyNotifs().filter(function(n){ return getReadNotifIds().indexOf(n.id) === -1; }).length;
  if (unread > 0) { badge.textContent = unread; badge.style.display = 'flex'; }
  else { badge.style.display = 'none'; }
}

function updateAdminNotifBadge() {
  var badge = document.getElementById('adminNotifBadge');
  if (!badge) return;
  var unread = getAgencyNotifs().filter(function(n){ return getReadNotifIds().indexOf(n.id) === -1; }).length;
  if (unread > 0) { badge.textContent = unread; badge.style.display = 'flex'; }
  else { badge.style.display = 'none'; }
}

function checkSuspension() {
  var d = localStorage.getItem('mycart_fee_threshold_date');
  if (d && new Date() > new Date(d)) { localStorage.setItem('mycart_store_suspended', 'true'); }
  if (localStorage.getItem('mycart_store_suspended') === 'true' && !window.location.pathname.includes('maintenance.html')) {
    window.location.replace('maintenance.html');
  }
}

document.addEventListener('DOMContentLoaded', function(){ renderFeeAlert(); updateNotifBadge(); updateAdminNotifBadge(); checkSuspension(); });

// Only run storefront init if we're on the store page (has #app)
if (document.getElementById('app') && document.getElementById('storeName')) {
  init();
  applyStoredTheme();
  initSmartSearch();
  initSpinWin();
  initFlashSales();
}


