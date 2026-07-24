if (typeof DEFAULT_PRODUCTS === 'undefined') {
  var DEFAULT_PRODUCTS = [

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
}

let WHOLESALE_CODE = localStorage.getItem('mycart_wholesale_code') || (typeof adminSettings !== 'undefined' && adminSettings ? adminSettings.wholesaleCode : 'ADMIN123') || 'ADMIN123';

const ADMIN_CODE = 'admin123';

let adminEditingId = null;

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

let appliedDiscount = 0; // percentage

function saveWishlist() { try { localStorage.setItem('mycart_wishlist', JSON.stringify(wishlist)); } catch(e) {} }

function updateWishlistBadge() {
  const badge = document.getElementById('wishlistBadge');
  if (!badge) return;
  if (wishlist.length > 0) { badge.style.display = 'flex'; badge.textContent = wishlist.length; }
  else badge.style.display = 'none';
}

function toggleWishlist(id) {
  const idx = wishlist.indexOf(id);
  if (idx > -1) { wishlist.splice(idx, 1); playSound('remove'); showToast('تمت الإزالة من المفضلة', 'info'); }
  else { wishlist.push(id); playSound('wishlist'); showToast('❤️ أضيف للمفضلة!', 'success'); }
  saveWishlist();
  updateWishlistBadge();
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

// ===== FLY TO CART ANIMATION =====

function init() {
  adminSettings = loadAdminSettings();
  // Restore admin nav button if previously logged in (without auto-opening panel)
  if (localStorage.getItem('mycart_admin_logged') === 'true') {
    isWholesale = true;
    try { localStorage.setItem('mycart_wholesale', 'true'); } catch(e) {}
    const loginItem = document.getElementById('loginNavItem');
    if (loginItem) {
      loginItem.innerHTML = '<i class="fa-solid fa-sliders"></i><span>لوحة تحكم</span>';
      loginItem.onclick = function() { document.getElementById('adminOverlay').classList.add('show'); document.body.style.overflow = 'hidden'; adminRefreshAll(); startAdminNotifCheck(); };
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
  updateWishlistBadge();
  if (isWholesale) applyWholesale();
  loadCustomerForm();
  handleRoute();
  applyMarketing();
  initPromoPopup();
  initSocialProof();
  // Check for unread agency notifications on page load
  checkAdminNewOrders();
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
      setTimeout(startBannerAutoScroll, 200);
    } else {
      slider.innerHTML = '';
      slider.style.display = 'none';
      stopBannerAutoScroll();
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
  let catMap = {}, brandCats = [], customCatNames = [];
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      parsed.forEach(c => {
        if (c.isBrand) {
          brandCats.push(c.name);
        } else {
          catMap[c.name] = c.image;
          customCatNames.push(c.name);
        }
      });
    } catch(e) {}
  }
  const allProductCats = products.flatMap(p => getProductCats(p));
  const combinedCats = [...new Set([...customCatNames, ...allProductCats])].filter(c => c && !brandCats.includes(c));
  const cats = ['الكل', ...combinedCats];

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
  el.innerHTML = `<button class="${!currentBrand ? 'active' : ''}" onclick="filterBrand('')"><i class="fa-solid fa-layer-group"></i> كل الماركات</button>` +
    brands.map(b => `<button class="${currentBrand === b ? 'active' : ''}" onclick="filterBrand('${b}')"><i class="fa-solid fa-award"></i> ${b}</button>`).join('');
}

function cleanHomeHash() {
  if (window.location.hash) {
    try {
      history.replaceState(null, document.title, window.location.pathname + window.location.search);
    } catch(e) {
      location.hash = '';
    }
  }
}

function filterCategory(cat, updateHash = true) {
  currentCat = cat;
  if (updateHash) {
    if (cat !== 'الكل') location.hash = '#category/' + encodeURIComponent(cat);
    else cleanHomeHash();
  }
  document.querySelectorAll('.cat-filters button').forEach(b => {
    b.classList.toggle('active', b.textContent.trim().includes(cat) || (cat === 'الكل' && b.textContent.trim().includes('الكل')));
  });
  
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

  // Hide top banners & featured section when filtering specific category to focus on filtered products
  const bannerSlider = document.getElementById('bannerSlider');
  const featuredSec = document.getElementById('featuredSection');
  if (cat !== 'الكل') {
    if (bannerSlider) bannerSlider.style.display = 'none';
    if (featuredSec) featuredSec.style.display = 'none';
  } else {
    if (bannerSlider) bannerSlider.style.display = 'flex';
    if (featuredSec) featuredSec.style.display = 'block';
  }

  renderProducts(getFilteredProducts());

  // Smooth scroll to products section
  const gridEl = document.getElementById('productsSection') || document.getElementById('productsGrid');
  if (gridEl && cat !== 'الكل' && updateHash) {
    gridEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function filterBrand(brand, updateHash = true) {
  currentBrand = brand;
  if (updateHash) {
    if (brand) location.hash = '#brand/' + encodeURIComponent(brand);
    else cleanHomeHash();
  }
  document.querySelectorAll('#brandFilters button').forEach(b => {
    b.classList.toggle('active', b.textContent.trim() === brand || (!brand && b.textContent.trim() === 'كل الماركات'));
  });

  const bannerSlider = document.getElementById('bannerSlider');
  const featuredSec = document.getElementById('featuredSection');
  if (brand) {
    if (bannerSlider) bannerSlider.style.display = 'none';
    if (featuredSec) featuredSec.style.display = 'none';
  } else if (currentCat === 'الكل') {
    if (bannerSlider) bannerSlider.style.display = 'flex';
    if (featuredSec) featuredSec.style.display = 'block';
  }

  renderProducts(getFilteredProducts());

  const gridEl = document.getElementById('productsSection') || document.getElementById('productsGrid');
  if (gridEl && brand && updateHash) {
    gridEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function toggleAdvFilter() {
  const bar = document.getElementById('advFilterBar');
  if (!bar) return;
  if (bar.style.display === 'none' || !bar.style.display) {
    bar.style.display = 'block';
    initFilterRange();
  } else {
    bar.style.display = 'none';
  }
}

function resetAllFilters() {
  currentCat = 'الكل';
  currentBrand = '';
  const filterBar = document.getElementById('advFilterBar');
  if (filterBar) filterBar.style.display = 'none';
  resetAdvFilter();
  renderCategories();
  renderProducts(getFilteredProducts());
}

function getFilteredProducts() {
  let list = products;
  if (currentCat !== 'الكل') list = list.filter(p => getProductCats(p).includes(currentCat));
  if (currentBrand) list = list.filter(p => p.brand === currentBrand || getProductCats(p).includes(currentBrand));
  return list;
}

function renderProducts(list) {
  const countEl = document.getElementById('filterCount');
  if (countEl) countEl.textContent = list.length;

  const badgesEl = document.getElementById('activeFilterBadges');
  if (badgesEl) {
    let badges = [];
    if (currentCat !== 'الكل') {
      badges.push(`<span class="active-badge" onclick="filterCategory('الكل')">التصنيف: ${currentCat} <i class="fa-solid fa-xmark"></i></span>`);
    }
    if (currentBrand) {
      badges.push(`<span class="active-badge" onclick="filterBrand('')">الماركة: ${currentBrand} <i class="fa-solid fa-xmark"></i></span>`);
    }
    if (badges.length) {
      badges.push(`<button class="clear-all-filters-btn" onclick="resetAllFilters()"><i class="fa-solid fa-rotate-left"></i> مسح الفلاتر</button>`);
      badgesEl.innerHTML = badges.join('');
      badgesEl.style.display = 'flex';
    } else {
      badgesEl.style.display = 'none';
    }
  }

  document.getElementById('productsGrid').innerHTML = list.map(p => `
    <div class="product-card" onclick="openDetail(${p.id})">
      ${p.badge ? `<span class="product-badge-tag">${p.badge}</span>` : ''}
      ${getProductDiscount(p) ? `<span class="discount-badge">-${getProductDiscount(p)}%</span>` : ''}
      <button class="wishlist-btn ${wishlist.includes(p.id) ? 'active' : ''}" data-id="${p.id}" onclick="event.stopPropagation();toggleWishlist(${p.id})"><i class="fa-solid fa-heart"></i></button>
      <img src="${getProductImages(p)[0]}" alt="${p.name}" loading="lazy">
      <div class="product-info">
        <h3>${p.name}</h3>
        <div class="price">${CURRENCY}${isWholesale ? Math.round(p.price * 0.85) : p.price} ${p.oldPrice ? `<span class="old-price">${CURRENCY}${p.oldPrice}</span>` : ''}</div>
        ${p.brand ? `<div class="product-brand"><i class="fa-solid fa-award"></i> ${p.brand}</div>` : ''}
      </div>
      <div class="quick-add" onclick="event.stopPropagation();quickAdd(${p.id}, this)"><i class="fa-solid fa-cart-shopping"></i></div>
    </div>
  `).join('');
  // Featured section (only show when on 'الكل' category and no brand filter is active)
  const featured = products.filter(p => p.featured);
  const featSection = document.getElementById('featuredSection');
  const featScroll = document.getElementById('featuredScroll');
  const showFeaturedSection = (currentCat === 'الكل' && !currentBrand);

  if (featured.length && showFeaturedSection) {
    if (featSection) featSection.style.display = 'block';
    if (featScroll) {
      featScroll.innerHTML = featured.map(p => `
        <div class="mini-card" onclick="openDetail(${p.id})">
          <span class="feat-badge">⭐ مميز</span>
          <img src="${getProductImages(p)[0]}" alt="${p.name}" loading="lazy">
          <div class="info"><h4>${p.name}</h4><div class="p">${CURRENCY}${isWholesale ? Math.round(p.price * 0.85) : p.price}</div></div>
          <div class="feat-add" onclick="event.stopPropagation();quickAdd(${p.id}, this)"><i class="fa-solid fa-cart-shopping"></i></div>
        </div>
      `).join('');
    }
    setTimeout(startFeatAutoScroll, 300);
  } else {
    if (featSection) featSection.style.display = 'none';
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

let bannerScrollInterval = null;

function loadBannerSettings() {
  const saved = localStorage.getItem('mycart_banner_settings');
  if (saved) {
    try { return JSON.parse(saved); } catch(e) {}
  }
  return { autoplay: true, interval: 4000, aspectRatio: '2/1', borderRadius: '14px' };
}

function startBannerAutoScroll() {
  stopBannerAutoScroll();
  const slider = document.getElementById('bannerSlider');
  if (!slider || !slider.children.length) return;

  const settings = loadBannerSettings();

  slider.querySelectorAll('.banner-slide').forEach(slide => {
    if (settings.aspectRatio) slide.style.aspectRatio = settings.aspectRatio;
    if (settings.borderRadius) slide.style.borderRadius = settings.borderRadius;
  });

  if (!settings.autoplay || slider.children.length < 2) return;

  let idx = 0;
  let userStopped = false;

  slider.addEventListener('touchstart', () => { userStopped = true; stopBannerAutoScroll(); }, { passive: true, once: true });

  bannerScrollInterval = setInterval(() => {
    if (userStopped || !slider.children.length) return;
    idx = (idx + 1) % slider.children.length;
    const slide = slider.children[idx];
    if (slide) {
      slider.scrollTo({
        left: slide.offsetLeft,
        behavior: 'smooth'
      });
    }
  }, settings.interval || 4000);
}

function stopBannerAutoScroll() {
  if (bannerScrollInterval) {
    clearInterval(bannerScrollInterval);
    bannerScrollInterval = null;
  }
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

function toggleTheme() {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('mycart_dark_mode', isDark ? '1' : '0');
  const btn = document.getElementById('themeToggleBtn');
  if (btn) btn.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  if (btn) btn.title = isDark ? 'الإضاءة النهارية' : 'الوضع الليلي';
}

const _sInput = document.getElementById('searchInput'); if (_sInput) _sInput.addEventListener('input', function() {
  const q = this.value.trim().toLowerCase();
  if (!q) return renderProducts(getFilteredProducts());
  renderProducts(products.filter(p => p.name.toLowerCase().includes(q)));
});

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

// ===== MULTI-STEP CHECKOUT =====

let currentCheckoutStep = 0; // 0 = cart items, 1 = step1 (info), 2 = step2 (delivery), 3 = step3 (review)

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
  if (typeof sendOwnerWhatsAppNotification === 'function') {
    sendOwnerWhatsAppNotification(order);
  }
  renderThankYouInCart(order);
}

function sendOwnerWhatsAppNotification(order) {
  const mData = JSON.parse(localStorage.getItem('mycart_marketing')) || {};
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

function saveCart() {
  try { localStorage.setItem('mycart_cart', JSON.stringify(cart)); } catch(e) {}
  document.getElementById('cartCountTab').textContent = cart.reduce((a, b) => a + b.qty, 0);
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
    list.innerHTML = '<div class="empty-state" style="text-align:center;padding:30px 10px;color:var(--text-muted)"><i class="fa-solid fa-receipt" style="font-size:2.5rem;margin-bottom:10px;color:var(--border)"></i><p style="font-weight:700">لا يوجد طلبات سابقة بعد</p></div>';
    return;
  }

  const ORDER_STATUS_MAP = {
    pending: { label: 'قيد التجهيز', bg: '#fef3c7', text: '#92400e', icon: 'fa-clock' },
    processing: { label: 'قيد التجهيز', bg: '#dbeafe', text: '#1e40af', icon: 'fa-gears' },
    shipped: { label: 'تم الشحن', bg: '#ede9fe', text: '#5b21b6', icon: 'fa-truck-fast' },
    completed: { label: 'مكـتمل', bg: '#dcfce7', text: '#166534', icon: 'fa-circle-check' },
    done: { label: 'مكـتمل', bg: '#dcfce7', text: '#166534', icon: 'fa-circle-check' },
    returned: { label: 'مرتجع', bg: '#fee2e2', text: '#991b1b', icon: 'fa-rotate-left' },
    cancelled: { label: 'ملغي', bg: '#f1f5f9', text: '#334155', icon: 'fa-ban' }
  };

  const sortedOrders = orders.slice().sort((a, b) => (b.id || 0) - (a.id || 0));

  list.innerHTML = sortedOrders.map(o => {
    const rawSt = o._status || o.status || 'pending';
    const stInfo = ORDER_STATUS_MAP[rawSt] || ORDER_STATUS_MAP.pending;
    const itemsCount = o.items ? o.items.reduce((s, i) => s + i.qty, 0) : 0;

    return `
    <div class="order-card-customer" onclick="showOrderDetail(${o.id})" style="background:var(--card);border:1.5px solid var(--border);border-radius:14px;padding:12px 14px;margin-bottom:12px;cursor:pointer;position:relative;transition:all .2s ease;box-shadow:0 2px 8px rgba(0,0,0,.03)">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;padding-bottom:8px;border-bottom:1px dashed var(--border)">
        <div style="display:flex;align-items:center;gap:8px">
          <span style="background:var(--accent);color:#fff;padding:3px 9px;border-radius:6px;font-weight:900;font-size:.78rem">#${String(o.id).slice(-6)}</span>
          <span style="font-size:.75rem;color:var(--text-muted);font-weight:600"><i class="fa-regular fa-calendar" style="margin-left:2px"></i> ${o.date || ''}</span>
        </div>
        <span style="background:${stInfo.bg};color:${stInfo.text};padding:3px 10px;border-radius:999px;font-size:.72rem;font-weight:800;display:inline-flex;align-items:center;gap:4px">
          <i class="fa-solid ${stInfo.icon}"></i> ${stInfo.label}
        </span>
      </div>

      <div style="font-size:.82rem;font-weight:700;color:var(--text);margin-bottom:8px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
        <i class="fa-solid fa-box-open" style="color:var(--accent);margin-left:4px"></i> ${o.items.map(i => `${i.name}${i.variant ? ` (${i.variant})` : ''} × ${i.qty}`).join(' | ')}
      </div>

      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;padding-top:6px">
        <div style="font-size:.74rem;color:var(--text-muted);font-weight:600">عدد المنتجات: <strong style="color:var(--text)">${itemsCount}</strong></div>
        <div style="display:flex;align-items:center;gap:6px">
          <span style="font-size:1rem;font-weight:900;color:var(--accent)">${CURRENCY}${o.total.toFixed(2)}</span>
          ${o.discount ? `<span style="font-size:.65rem;color:#16a34a;background:#dcfce7;padding:1px 6px;border-radius:4px;font-weight:800">(-${o.discount}%)</span>` : ''}
          <i class="fa-solid fa-chevron-left" style="font-size:.75rem;color:var(--text-muted);margin-right:4px"></i>
        </div>
      </div>
    </div>`;
  }).join('');
}

function showOrderDetail(id) {
  const o = orders.find(x => x.id === id);
  if (!o) return;
  const list = document.getElementById('orderHistoryList');
  if (!list) return;
  
  const currency = CURRENCY;
  const subtotal = o.items.reduce((s, i) => s + i.price * i.qty, 0);
  const disc = o.discount || 0;
  const discAmt = disc > 0 ? Math.round(subtotal * disc / 100) : 0;
  const total = subtotal - discAmt + (o.delivery || 0);

  list.innerHTML = `
    <div style="margin-bottom:12px">
      <button onclick="renderOrders()" style="background:none;border:none;color:var(--text-muted);cursor:pointer;font-size:.82rem;font-family:inherit;display:flex;align-items:center;gap:6px;font-weight:700"><i class="fa-solid fa-arrow-right"></i> العودة لسجل طلباتي</button>
    </div>

    <div style="background:var(--bg);border:1px solid var(--border);border-radius:12px;padding:12px;margin-bottom:12px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--border)">
        <span style="background:var(--accent);color:#fff;padding:3px 10px;border-radius:6px;font-weight:900;font-size:.85rem">#${String(o.id).slice(-6)}</span>
        <span style="color:var(--text-muted);font-size:.78rem"><i class="fa-regular fa-calendar"></i> ${o.date}</span>
      </div>

      <div style="font-size:.8rem;font-weight:800;color:var(--text);margin-bottom:8px"><i class="fa-solid fa-box-open" style="color:var(--accent)"></i> المنتجات المطلوبة:</div>
      <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:12px">
        ${o.items.map(item => `
          <div style="display:flex;align-items:center;gap:8px;padding:6px 8px;background:var(--card);border-radius:8px;border:1px solid var(--border)">
            <img src="${item.image || 'https://placehold.co/40x40/e2e8f0/64748b?text=' + encodeURIComponent(item.name.slice(0,2))}" style="width:36px;height:36px;border-radius:6px;object-fit:cover;flex-shrink:0">
            <div style="flex:1;min-width:0">
              <div style="font-weight:700;font-size:.8rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${item.name}${item.variant ? ` (${item.variant})` : ''}</div>
              <div style="font-size:.72rem;color:var(--text-muted)">${currency}${item.price} × ${item.qty}</div>
            </div>
            <div style="font-weight:800;font-size:.85rem;color:var(--accent);flex-shrink:0">${currency}${(item.price * item.qty).toFixed(2)}</div>
          </div>
        `).join('')}
      </div>

      <div style="background:var(--card);border-radius:8px;padding:10px;font-size:.8rem;border:1px solid var(--border)">
        <div style="display:flex;justify-content:space-between;padding:2px 0"><span>المجموع الفرعي:</span><strong>${currency}${subtotal.toFixed(2)}</strong></div>
        ${disc > 0 ? `<div style="display:flex;justify-content:space-between;padding:2px 0;color:#16a34a"><span>الخصم (${disc}%):</span><strong>-${currency}${discAmt.toFixed(2)}</strong></div>` : ''}
        ${o.delivery ? `<div style="display:flex;justify-content:space-between;padding:2px 0"><span>التوصيل:</span><strong>${currency}${o.delivery.toFixed(2)}</strong></div>` : ''}
        <div style="display:flex;justify-content:space-between;font-size:1rem;font-weight:900;padding-top:6px;border-top:1px solid var(--border);margin-top:4px;color:var(--accent)">
          <span>الإجمالي:</span>
          <span>${currency}${total.toFixed(2)}</span>
        </div>
      </div>

      <div style="display:flex;gap:6px;margin-top:12px">
        <button onclick="printOrderData(orders.find(x => x.id === ${o.id}), CURRENCY)" style="flex:1;padding:8px;border:none;border-radius:8px;background:var(--accent);color:#fff;font-weight:700;cursor:pointer;font-family:inherit;font-size:.8rem"><i class="fa-solid fa-print"></i> طباعة الفاتورة</button>
        <button onclick="inquiryOrder(${o.id})" style="flex:1;padding:8px;border:none;border-radius:8px;background:#25D366;color:#fff;font-weight:700;cursor:pointer;font-family:inherit;font-size:.8rem"><i class="fa-brands fa-whatsapp"></i> استفسار واتساب</button>
      </div>
    </div>
  `;
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

function closeModal() { document.getElementById('backdropModal').classList.remove('show'); }

function openImageViewer(src) { document.getElementById('viewerImage').src = src; document.getElementById('image-viewer').classList.add('show'); }

function closeImageViewer() { document.getElementById('image-viewer').classList.remove('show'); }

function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById(pageId);
  if (page) page.classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  if (pageId === 'homePage') {
    const firstNav = document.querySelector('.nav-item');
    if (firstNav) firstNav.classList.add('active');
  }
}

function handleRoute() {
  const hash = location.hash;
  if (hash.startsWith('#product/')) {
    const id = parseInt(hash.split('/')[1]);
    if (id) { stopFeatAutoScroll(); openDetail(id, true); }
  } else if (hash.startsWith('#order/')) {
    const id = parseInt(hash.split('/')[1]);
    if (id) { stopFeatAutoScroll(); renderOrderPage(id); }
  } else if (hash.startsWith('#category/')) {
    const catName = decodeURIComponent(hash.split('/')[1]);
    if (catName) {
      stopLiveViewersTicker();
      showPage('homePage');
      filterCategory(catName, false);
    }
  } else if (hash.startsWith('#brand/')) {
    const brandName = decodeURIComponent(hash.split('/')[1]);
    if (brandName) {
      stopLiveViewersTicker();
      showPage('homePage');
      filterBrand(brandName, false);
    }
  } else {
    stopLiveViewersTicker(); // hide counter when leaving detail
    showPage('homePage');
    if (currentCat !== 'الكل' || currentBrand) {
      filterCategory('الكل', false);
    }
    cleanHomeHash();
    setTimeout(startFeatAutoScroll, 300);
  }
}

window.addEventListener('hashchange', handleRoute);

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

const _fb = document.getElementById('fbBtn'); if (_fb) _fb.addEventListener('click', e => { e.preventDefault(); showToast('شارك المتجر على فيسبوك', 'info'); });

const _wa = document.getElementById('waBtn'); if (_wa) _wa.addEventListener('click', e => {
  e.preventDefault();
  window.open(`https://wa.me/?text=${encodeURIComponent('🛍 تسوق من متجري!\n')}`, '_blank');
});

const _bm = document.getElementById('backdropModal'); if (_bm) _bm.addEventListener('click', function(e) { if (e.target === this) closeModal(); });

const _iv = document.getElementById('image-viewer'); if (_iv) _iv.addEventListener('click', function(e) { if (e.target === this) closeImageViewer(); });

// ===== ADMIN PANEL =====

function adminLogout() {
  localStorage.removeItem('mycart_admin_logged');
  isWholesale = false;
  localStorage.removeItem('mycart_wholesale');
  const wb = document.getElementById('wholesaleBadge');
  if (wb) wb.style.display = 'none';
  if (typeof applyWholesale === 'function') applyWholesale();
  if (typeof closeAdmin === 'function') closeAdmin();
  if (location.pathname.includes('admin.html')) {
    location.reload();
    return;
  }
  // Restore nav button
  const loginItem = document.getElementById('loginNavItem');
  if (loginItem) {
    loginItem.innerHTML = '<i class="fa-solid fa-user"></i><span>دخول</span>';
    loginItem.onclick = function() { showLogin(); };
  }
  showToast('👋 تم تسجيل الخروج', 'info');
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

function adminToggleOrder(idx) {
  const o = JSON.parse(localStorage.getItem('mycart_orders')) || [];
  if (!o[idx]) return;
  o[idx]._status = o[idx]._status === 'done' ? 'pending' : 'done';
  try { localStorage.setItem('mycart_orders', JSON.stringify(o)); } catch(e) {}
  adminRefreshAll();
}

function adminToggleProdSelect() {
  const btn = document.getElementById('adminDelSelectedBtn');
  const checked = document.querySelectorAll('.admin-prod-cb:checked').length;
  btn.style.display = checked ? 'inline-flex' : 'none';
  btn.textContent = checked ? `🗑 حذف (${checked})` : '';
}

function adminToggleSelectAll() {
  const checked = document.getElementById('adminSelectAllCb').checked;
  document.querySelectorAll('.admin-prod-cb').forEach(cb => cb.checked = checked);
  adminToggleProdSelect();
}

// ===== CATEGORIES MANAGEMENT =====

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

function adminEditProduct(idxOrId) {
  let idx = typeof idxOrId === 'number' ? idxOrId : -1;
  if (idx < 0 || !products[idx]) {
    idx = products.findIndex(x => x.id === idxOrId || String(x.id) === String(idxOrId));
  }
  if (idx < 0 && typeof idxOrId === 'number' && products[idxOrId]) {
    idx = idxOrId;
  }
  const p = products[idx];
  if (!p) return;
  adminEditingId = idx;
  const titleEl = document.getElementById('adminPageTitle') || document.getElementById('pageTitle');
  if (titleEl) titleEl.textContent = 'تعديل منتج';
  
  document.querySelectorAll('.admin-tab, .tab-content').forEach(t => {
    t.classList.remove('active');
    t.style.display = 'none';
  });
  document.querySelectorAll('.admin-sidebar button').forEach(b => b.classList.remove('active'));
  
  const addProdEl = document.getElementById('admin-addProduct') || document.getElementById('tab-addProduct');
  if (addProdEl) {
    addProdEl.classList.add('active');
    addProdEl.style.display = 'block';
  }
  
  if (location.pathname.includes('admin.html')) {
    history.replaceState(null, '', `#addProduct/${p.id || idx}`);
  }
  
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
  const parentTab = document.getElementById('tab-addProduct');
  const innerContainer = document.getElementById('admin-addProduct');
  if (parentTab) {
    parentTab.style.display = 'block';
    parentTab.classList.add('active');
  }
  const targetEl = innerContainer || parentTab;
  if (!targetEl) return;
  targetEl.style.display = 'block';
  targetEl.innerHTML = `
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
        <div class="admin-form-group"><label>صور المنتج</label>
          <button type="button" class="admin-btn admin-btn-secondary admin-btn-sm" onclick="adminUploadImg()" style="margin-bottom:6px"><i class="fa-solid fa-upload"></i> اختر صور (واحدة أو أكثر)</button>
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

function adminGetImages() {
  const imgs = [];
  document.querySelectorAll('#apImageList img').forEach(img => {
    const src = img.getAttribute('data-src') || img.src;
    imgs.push(src);
  });
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

function adminRemoveOption(btn) { btn.closest('.option-card').remove(); }

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
      } catch(err) {}
      loaded++;
      if (loaded === valid.length) adminRenderImageList(currentImgs);
    }
  };
  input.click();
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
        compressImage(file, 600, 600, function(compressedUrl) {
          resolve(compressedUrl);
        });
      }
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
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
  const existingDate = adminEditingId !== null ? (products[adminEditingId].createdAt || products[adminEditingId].dateAdded) : null;
  const rawImages = adminGetImages().filter(img => !img.includes('placehold.co'));
  const displayImages = rawImages.length ? rawImages : ['https://placehold.co/400x400/e2e8f0/64748b?text=Product'];
  let storedImages = displayImages;
  // Pack only base64 images into IndexedDB; file paths are already lightweight
  const hasDataUrls = storedImages.some(img => img.startsWith('data:'));
  if (hasDataUrls) {
    try {
      if (typeof mediaStorePackImages === 'function') {
        storedImages = await mediaStorePackImages(rawImages);
      }
    } catch(e) {}
  }
  // Pack option images too
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
  const product = {
    id: adminEditingId !== null ? products[adminEditingId].id : Date.now(),
    name,
    price,
    oldPrice: parseFloat(document.getElementById('apOldPrice').value) || 0,
    categories: categories.length ? categories : ['أخرى'],
    images: storedImages,
    brand: adminGetSelectedBrand(),
    featured: document.getElementById('apFeatured').checked,
    badge: document.getElementById('apBadge').value.trim(),
    features, specs,
    options: options.length ? options : undefined,
    createdAt: existingDate || new Date().toLocaleDateString('ar-EG')
  };
  if (adminEditingId !== null) products[adminEditingId] = product;
  else products.unshift(product);
  let saved = false;
  try { localStorage.setItem('mycart_admin_products', JSON.stringify(products)); saved = true; } catch(e) {
    showToast('⚠️ مساحة التخزين ممتلئة، تعذر حفظ المنتجات', 'error');
  }
  // Restore display-ready images in the in-memory copy so the UI shows them immediately
  if (adminEditingId !== null) {
    products[adminEditingId] = { ...product, images: displayImages };
  } else {
    products[0] = { ...product, images: displayImages };
  }
  adminEditingId = null;
  // Render without reloading products from localStorage to keep new image in memory
  if (typeof adminRenderDashboard === 'function') adminRenderDashboard();
  if (typeof adminRenderOrders === 'function') adminRenderOrders();
  if (typeof adminRenderProducts === 'function') adminRenderProducts();
  if (typeof adminRenderCategories === 'function') adminRenderCategories();
  if (typeof updateAdminFeeBadge === 'function') updateAdminFeeBadge();
  if (typeof switchAdminTab === 'function') switchAdminTab('products');
  showToast(saved ? '✅ تم حفظ المنتج بنجاح' : '⚠️ تم تحديث المنتج (تقليص الصورة موصى به)', saved ? 'success' : 'error');
}

// ===== DELIVERY ZONES =====

function renderAdminZones() {
  const zones = loadDeliveryZones();
  return zones.length ? zones.map((z, idx) =>
    `<div style="display:flex;align-items:center;justify-content:space-between;padding:6px 8px;background:var(--bg);border-radius:6px;margin-bottom:4px;font-size:.8rem"><span><strong>${z.name}</strong> — ${CURRENCY}${z.price}</span><button onclick="adminDeleteZone(${idx})" style="background:none;border:none;color:#ef4444;cursor:pointer;font-size:.85rem"><i class="fa-solid fa-xmark"></i></button></div>`
  ).join('') : '<p style="font-size:.8rem;color:var(--text-muted)">لا يوجد مناطق توصيل</p>';
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
          <button class="admin-btn admin-btn-secondary admin-btn-sm" onclick="resetAppearance()"><i class="fa-solid fa-rotate-left"></i> إعادة تعيين</button>
          <button class="admin-btn admin-btn-secondary admin-btn-sm" onclick="exportAppearance()"><i class="fa-solid fa-file-export"></i> تصدير</button>
          <button class="admin-btn admin-btn-secondary admin-btn-sm" onclick="document.getElementById('importAppearanceFile').click()"><i class="fa-solid fa-file-import"></i> استيراد</button>
          <input type="file" id="importAppearanceFile" accept=".json" style="display:none" onchange="importAppearance(event)">
          <button class="admin-btn admin-btn-primary admin-btn-sm" onclick="saveAppearance()"><i class="fa-solid fa-floppy-disk"></i> حفظ المظهر</button>
        </div>
      </div>
      <div style="display:flex;gap:16px;align-items:flex-start">
        <div style="flex:1;min-width:0">
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
                  <div class="app-field"><label>اللون الأساسي (Accent)</label><div class="color-row"><input type="color" id="appAccent" oninput="updVal('appAccent');previewAppearance();liveAppPreview()"><span id="appAccentVal" class="color-val">#ef4444</span></div></div>
                  <div class="app-field"><label>لون التمرير (Accent Hover)</label><div class="color-row"><input type="color" id="appAccentHover" oninput="updVal('appAccentHover');previewAppearance();liveAppPreview()"><span id="appAccentHoverVal" class="color-val">#dc2626</span></div></div>
                  <div class="app-field"><label>لون الخلفية</label><div class="color-row"><input type="color" id="appBgColor" oninput="updVal('appBgColor');previewAppearance();liveAppPreview()"><span id="appBgColorVal" class="color-val">#f8fafc</span></div></div>
                  <div class="app-field"><label>لون البطاقات</label><div class="color-row"><input type="color" id="appCardColor" oninput="updVal('appCardColor');previewAppearance();liveAppPreview()"><span id="appCardColorVal" class="color-val">#ffffff</span></div></div>
                  <div class="app-field"><label>لون النصوص</label><div class="color-row"><input type="color" id="appTextColor" oninput="updVal('appTextColor');previewAppearance();liveAppPreview()"><span id="appTextColorVal" class="color-val">#1e293b</span></div></div>
                  <div class="app-field"><label>لون النصوص الخافتة</label><div class="color-row"><input type="color" id="appTextMuted" oninput="updVal('appTextMuted');previewAppearance();liveAppPreview()"><span id="appTextMutedVal" class="color-val">#64748b</span></div></div>
                  <div class="app-field"><label>لون الحدود</label><div class="color-row"><input type="color" id="appBorderColor" oninput="updVal('appBorderColor');previewAppearance();liveAppPreview()"><span id="appBorderColorVal" class="color-val">#e2e8f0</span></div></div>
                  <div class="app-field"><label>لون السعر</label><div class="color-row"><input type="color" id="appPriceColor" oninput="updVal('appPriceColor');previewAppearance();liveAppPreview()"><span id="appPriceColorVal" class="color-val">#ef4444</span></div></div>
                  <div class="app-field"><label>لون شارة الخصم</label><div class="color-row"><input type="color" id="appSaleColor" oninput="updVal('appSaleColor');previewAppearance();liveAppPreview()"><span id="appSaleColorVal" class="color-val">#ef4444</span></div></div>
                  <div class="app-field"><label>لون النجاح (تأكيد/وتساب)</label><div class="color-row"><input type="color" id="appSuccessColor" oninput="updVal('appSuccessColor');previewAppearance()"><span id="appSuccessColorVal" class="color-val">#10b981</span></div></div>
                  <div class="app-field app-field-full"><label style="display:flex;align-items:center;gap:8px;cursor:pointer"><input type="checkbox" id="appDarkMode" onchange="previewAppearance();liveAppPreview()"> تفعيل الوضع الداكن افتراضياً</label></div>
                </div>
              </section>
              <section class="app-panel" id="appsec-typography">
                <h4 class="app-sec-title"><i class="fa-solid fa-font"></i> الخطوط</h4>
                <div class="app-fields">
                  <div class="app-field"><label>خط العناوين</label><select id="appFontHeading" onchange="previewAppearance();liveAppPreview()"><option value="'Tajawal',sans-serif">Tajawal</option><option value="'Cairo',sans-serif">Cairo</option><option value="'Amiri',serif">Amiri</option><option value="'Noto Sans Arabic',sans-serif">Noto Sans Arabic</option><option value="'Almarai',sans-serif">Almarai</option></select></div>
                  <div class="app-field"><label>خط المحتوى</label><select id="appFontBody" onchange="previewAppearance();liveAppPreview()"><option value="'Tajawal',sans-serif">Tajawal</option><option value="'Cairo',sans-serif">Cairo</option><option value="'Amiri',serif">Amiri</option><option value="'Noto Sans Arabic',sans-serif">Noto Sans Arabic</option><option value="'Almarai',sans-serif">Almarai</option></select></div>
                  <div class="app-field"><label>حجم الخط الأساسي</label><div class="color-row"><input type="range" id="appFontSize" min="13" max="18" value="15" oninput="updVal('appFontSize','px');previewAppearance();liveAppPreview()"><span id="appFontSizeVal" class="color-val">15px</span></div></div>
                  <div class="app-field"><label>مقياس العناوين</label><div class="color-row"><input type="range" id="appHeadingScale" min="90" max="130" value="100" oninput="updVal('appHeadingScale','%');previewAppearance()"><span id="appHeadingScaleVal" class="color-val">100%</span></div></div>
                  <div class="app-field"><label>وزن الخط</label><select id="appFontWeight" onchange="previewAppearance();liveAppPreview()"><option value="400">عادي</option><option value="500">متوسط</option><option value="700" selected>عريض</option><option value="800">عريض جداً</option></select></div>
                  <div class="app-field"><label>ارتفاع السطر</label><div class="color-row"><input type="range" id="appLineHeight" min="13" max="20" value="15" oninput="updVal('appLineHeight','.');previewAppearance();liveAppPreview()"><span id="appLineHeightVal" class="color-val">1.5</span></div></div>
                </div>
              </section>
              <section class="app-panel" id="appsec-layout">
                <h4 class="app-sec-title"><i class="fa-solid fa-columns"></i> تخطيط الصفحة الرئيسية</h4>
                <div class="app-fields">
                  <div class="app-field app-field-full app-toggles">
                    <label class="app-toggle"><input type="checkbox" id="appShowBanners" onchange="previewAppearance();liveAppPreview()"> البانرات</label>
                    <label class="app-toggle"><input type="checkbox" id="appShowFlashSales" onchange="previewAppearance();liveAppPreview()"> عروض فلاش</label>
                    <label class="app-toggle"><input type="checkbox" id="appShowFeatured" onchange="previewAppearance();liveAppPreview()"> المميزة</label>
                    <label class="app-toggle"><input type="checkbox" id="appShowCategories" onchange="previewAppearance();liveAppPreview()"> التصنيفات</label>
                    <label class="app-toggle"><input type="checkbox" id="appShowBrands" onchange="previewAppearance();liveAppPreview()"> الماركات</label>
                  </div>
                  <div class="app-field"><label>أعمدة (كمبيوتر)</label><select id="appGridColsDesktop" onchange="previewAppearance();liveAppPreview()"><option value="3">3</option><option value="4">4</option><option value="5" selected>5</option><option value="6">6</option><option value="7">7</option></select></div>
                  <div class="app-field"><label>أعمدة (تابلت)</label><select id="appGridColsTablet" onchange="previewAppearance();liveAppPreview()"><option value="2">2</option><option value="3" selected>3</option><option value="4">4</option></select></div>
                  <div class="app-field"><label>أعمدة (جوال)</label><select id="appGridColsMobile" onchange="previewAppearance();liveAppPreview()"><option value="1">1</option><option value="2" selected>2</option><option value="3">3</option></select></div>
                  <div class="app-field"><label>تباعد الشبكة</label><div class="color-row"><input type="range" id="appGridGap" min="6" max="24" value="14" oninput="updVal('appGridGap','px');previewAppearance();liveAppPreview()"><span id="appGridGapVal" class="color-val">14px</span></div></div>
                </div>
              </section>
              <section class="app-panel" id="appsec-images">
                <h4 class="app-sec-title"><i class="fa-solid fa-image"></i> صور المنتجات</h4>
                <div class="app-fields">
                  <div class="app-field"><label>نسبة الصورة</label><select id="appImgRatio" onchange="previewAppearance();liveAppPreview()"><option value="1">مربع 1:1</option><option value="4/3">4:3</option><option value="3/4" selected>3:4 عمودي</option><option value="16/9">16:9 عرضي</option></select></div>
                  <div class="app-field"><label>زوايا الصورة</label><div class="color-row"><input type="range" id="appImgRadius" min="0" max="24" value="12" oninput="updVal('appImgRadius','px');previewAppearance();liveAppPreview()"><span id="appImgRadiusVal" class="color-val">12px</span></div></div>
                  <div class="app-field app-field-full app-toggles">
                    <label class="app-toggle"><input type="checkbox" id="appImgHoverZoom" onchange="previewAppearance()"> تكبير عند التحويم</label>
                    <label class="app-toggle"><input type="checkbox" id="appImgLazyLoad" onchange="previewAppearance()"> تحميل كسول</label>
                  </div>
                </div>
              </section>
              <section class="app-panel" id="appsec-cards">
                <h4 class="app-sec-title"><i class="fa-solid fa-border-all"></i> البطاقات والأزرار</h4>
                <div class="app-fields">
                  <div class="app-field"><label>زوايا البطاقات</label><div class="color-row"><input type="range" id="appCardRadius" min="0" max="28" value="16" oninput="updVal('appCardRadius','px');previewAppearance();liveAppPreview()"><span id="appCardRadiusVal" class="color-val">16px</span></div></div>
                  <div class="app-field"><label>زوايا الأزرار</label><div class="color-row"><input type="range" id="appBtnRadius" min="0" max="28" value="12" oninput="updVal('appBtnRadius','px');previewAppearance();liveAppPreview()"><span id="appBtnRadiusVal" class="color-val">12px</span></div></div>
                  <div class="app-field"><label>ستايل البطاقة</label><select id="appCardStyle" onchange="previewAppearance();liveAppPreview()"><option value="shadow" selected>ظل</option><option value="outline">إطار</option><option value="flat">مسطح</option></select></div>
                  <div class="app-field"><label>ستايل الزر</label><select id="appBtnStyle" onchange="previewAppearance();liveAppPreview()"><option value="solid" selected>معبأ</option><option value="outline">إطار</option><option value="soft">ناعم</option></select></div>
                  <div class="app-field app-field-full app-toggles">
                    <label class="app-toggle"><input type="checkbox" id="appShadows" onchange="previewAppearance();liveAppPreview()"> تفعيل الظلال</label>
                  </div>
                  <div class="app-field"><label>شدة الظل</label><div class="color-row"><input type="range" id="appShadowIntensity" min="0" max="200" value="100" oninput="updVal('appShadowIntensity','%');previewAppearance();liveAppPreview()"><span id="appShadowIntensityVal" class="color-val">100%</span></div></div>
                </div>
              </section>
              <section class="app-panel" id="appsec-header">
                <h4 class="app-sec-title"><i class="fa-solid fa-mobile-screen"></i> الهيدر</h4>
                <div class="app-fields">
                  <div class="app-field app-field-full app-toggles">
                    <label class="app-toggle"><input type="checkbox" id="appStickyHeader" onchange="previewAppearance();liveAppPreview()"> هيدر ثابت</label>
                    <label class="app-toggle"><input type="checkbox" id="appShowSearch" onchange="previewAppearance();liveAppPreview()"> زر البحث</label>
                    <label class="app-toggle"><input type="checkbox" id="appShowWishlist" onchange="previewAppearance();liveAppPreview()"> المفضلة</label>
                  </div>
                  <div class="app-field"><label>بداية تدرج الهيدر</label><div class="color-row"><input type="color" id="appHeaderFrom" oninput="updVal('appHeaderFrom');previewAppearance();liveAppPreview()"><span id="appHeaderFromVal" class="color-val">#ef4444</span></div></div>
                  <div class="app-field"><label>نهاية تدرج الهيدر</label><div class="color-row"><input type="color" id="appHeaderTo" oninput="updVal('appHeaderTo');previewAppearance();liveAppPreview()"><span id="appHeaderToVal" class="color-val">#dc2626</span></div></div>
                  <div class="app-field"><label>لون نص الهيدر</label><div class="color-row"><input type="color" id="appHeaderText" oninput="updVal('appHeaderText');previewAppearance();liveAppPreview()"><span id="appHeaderTextVal" class="color-val">#ffffff</span></div></div>
                  <div class="app-field"><label>ارتفاع الهيدر</label><div class="color-row"><input type="range" id="appHeaderPadding" min="20" max="70" value="40" oninput="updVal('appHeaderPadding','px');previewAppearance();liveAppPreview()"><span id="appHeaderPaddingVal" class="color-val">40px</span></div></div>
                </div>
              </section>
              <section class="app-panel" id="appsec-nav">
                <h4 class="app-sec-title"><i class="fa-solid fa-bars"></i> التنقل السفلي</h4>
                <div class="app-fields">
                  <div class="app-field"><label>النمط</label><select id="appNavStyle" onchange="previewAppearance();liveAppPreview()"><option value="default" selected>افتراضي</option><option value="pill">أقراص</option><option value="minimal">مبسط</option></select></div>
                  <div class="app-field app-field-full app-toggles">
                    <label class="app-toggle"><input type="checkbox" id="appShowCartCount" onchange="previewAppearance();liveAppPreview()"> عداد السلة</label>
                    <label class="app-toggle"><input type="checkbox" id="appShowNavLabels" onchange="previewAppearance();liveAppPreview()"> تسميات الأيقونات</label>
                  </div>
                  <div class="app-field"><label>خلفية التنقل</label><div class="color-row"><input type="color" id="appNavBg" oninput="updVal('appNavBg');previewAppearance();liveAppPreview()"><span id="appNavBgVal" class="color-val">#ffffff</span></div></div>
                  <div class="app-field"><label>لون العنصر النشط</label><div class="color-row"><input type="color" id="appNavActive" oninput="updVal('appNavActive');previewAppearance();liveAppPreview()"><span id="appNavActiveVal" class="color-val">#ef4444</span></div></div>
                </div>
              </section>
              <section class="app-panel" id="appsec-product">
                <h4 class="app-sec-title"><i class="fa-solid fa-tags"></i> عناصر المنتج</h4>
                <div class="app-fields">
                  <div class="app-field app-field-full app-toggles">
                    <label class="app-toggle"><input type="checkbox" id="appShowBrand" onchange="previewAppearance();liveAppPreview()"> الماركة</label>
                    <label class="app-toggle"><input type="checkbox" id="appShowOldPrice" onchange="previewAppearance();liveAppPreview()"> السعر القديم</label>
                    <label class="app-toggle"><input type="checkbox" id="appShowDiscountBadge" onchange="previewAppearance();liveAppPreview()"> شارة الخصم</label>
                    <label class="app-toggle"><input type="checkbox" id="appShowQuickAdd" onchange="previewAppearance();liveAppPreview()"> زر الإضافة السريعة</label>
                  </div>
                </div>
              </section>
              <section class="app-panel" id="appsec-spacing">
                <h4 class="app-sec-title"><i class="fa-solid fa-arrows-left-right"></i> المسافات</h4>
                <div class="app-fields">
                  <div class="app-field"><label>هامش الصفحة</label><div class="color-row"><input type="range" id="appPagePadding" min="0" max="32" value="16" oninput="updVal('appPagePadding','px');previewAppearance();liveAppPreview()"><span id="appPagePaddingVal" class="color-val">16px</span></div></div>
                  <div class="app-field"><label>تباعد الأقسام</label><div class="color-row"><input type="range" id="appSectionGap" min="8" max="48" value="24" oninput="updVal('appSectionGap','px');previewAppearance();liveAppPreview()"><span id="appSectionGapVal" class="color-val">24px</span></div></div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <!-- Live Preview -->
        <div style="width:240px;flex-shrink:0;position:sticky;top:0">
          <div style="font-size:.65rem;font-weight:800;color:#64748b;margin-bottom:6px;display:flex;align-items:center;gap:4px"><i class="fa-solid fa-eye" style="color:#8b5cf6"></i> معاينة حية</div>
          <div class="app-preview-box" id="appPreviewBox">
            <div class="preview-h" id="previewHeaderG"><span><i class="fa-solid fa-store"></i></span><strong id="previewStoreNameG">متجري</strong><i class="fa-solid fa-bars"></i></div>
            <div class="preview-body">
              <div class="preview-card" id="previewCardG">
                <div class="thumb" id="previewThumbG"></div>
                <div class="info"><div class="line" style="width:70%"></div><div class="line" style="width:40%"></div><div class="line" style="width:55%;height:10px;border-radius:4px"></div></div>
              </div>
            </div>
            <div class="preview-nav" id="previewNavG"><span class="active">الرئيسية</span><span>منتجات</span><span>عروض</span><span>اتصل</span></div>
          </div>
          <div style="margin-top:6px;font-size:.55rem;color:#94a3b8;text-align:center">التغييرات تظهر فوراً</div>
        </div>
      </div>
      <div id="appearanceStatus" style="font-size:.8rem;color:var(--text-muted);margin-top:12px"></div>`;
    host.dataset.rendered = '1';
  }
  adminLoadAppearance();
  setTimeout(liveAppPreview, 100);
}

function liveAppPreview() {
  var d = readAppearanceForm();
  var activeSec = document.querySelector('.app-nav-btn.active');
  var sec = activeSec ? activeSec.dataset.sec : 'colors';
  var box = document.getElementById('appPreviewBox');
  if (!box) return;

  var headerHtml = '<div class="preview-h" id="previewHeaderG" style="background:linear-gradient(135deg,'+d.headerFrom+','+d.headerTo+');color:'+d.headerText+'"><span><i class="fa-solid fa-store"></i></span><strong style="color:'+d.headerText+'">متجري</strong><i class="fa-solid fa-bars"></i></div>';
  var navHtml = '<div class="preview-nav" id="previewNavG" style="background:'+d.navBg+'"><span style="background:'+d.navActive+';color:#fff">الرئيسية</span><span>منتجات</span><span>عروض</span><span>اتصل</span></div>';

  var bodyHtml = '';
  if (sec === 'presets') {
    bodyHtml = '<div style="padding:12px;text-align:center"><i class="fa-solid fa-wand-magic-sparkles" style="font-size:1.5rem;color:'+d.accentColor+';margin-bottom:8px;display:block"></i><div style="font-size:.7rem;color:#64748b">اختر ثيماً لتطبيق ألوان متناسقة</div><div style="display:flex;gap:4px;justify-content:center;margin-top:8px">'+Object.entries(THEME_PRESETS).slice(0,4).map(function(p){return '<div style="width:16px;height:16px;border-radius:50%;background:'+p[1].accentColor+';border:2px solid #fff;box-shadow:0 1px 3px rgba(0,0,0,.15)"></div>';}).join('')+'<div style="font-size:.55rem;color:#94a3b8;margin-right:4px">+أكثر</div></div></div>';
  } else if (sec === 'colors') {
    bodyHtml = '<div style="padding:12px"><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px">'
      + '<div style="text-align:center"><div style="width:100%;height:28px;border-radius:8px;background:'+d.accentColor+';border:2px solid #fff;box-shadow:0 1px 3px rgba(0,0,0,.1)"></div><span style="font-size:.5rem;color:#64748b">أساسي</span></div>'
      + '<div style="text-align:center"><div style="width:100%;height:28px;border-radius:8px;background:'+d.bgColor+';border:2px solid #e2e8f0"></div><span style="font-size:.5rem;color:#64748b">خلفية</span></div>'
      + '<div style="text-align:center"><div style="width:100%;height:28px;border-radius:8px;background:'+d.cardColor+';border:2px solid #e2e8f0"></div><span style="font-size:.5rem;color:#64748b">بطاقات</span></div>'
      + '<div style="text-align:center"><div style="width:100%;height:28px;border-radius:8px;background:'+d.priceColor+';border:2px solid #fff;box-shadow:0 1px 3px rgba(0,0,0,.1)"></div><span style="font-size:.5rem;color:#64748b">سعر</span></div>'
      + '<div style="text-align:center"><div style="width:100%;height:28px;border-radius:8px;background:'+d.textColor+';border:2px solid #fff;box-shadow:0 1px 3px rgba(0,0,0,.1)"></div><span style="font-size:.5rem;color:#64748b">نصوص</span></div>'
      + '<div style="text-align:center"><div style="width:100%;height:28px;border-radius:8px;background:'+d.borderColor+';border:2px solid #fff"></div><span style="font-size:.5rem;color:#64748b">حدود</span></div>'
      + '</div></div>';
  } else if (sec === 'typography') {
    bodyHtml = '<div style="padding:12px;text-align:center">'
      + '<div style="font-size:'+Math.round(d.fontSize*1.8)+'px;font-weight:'+d.fontWeight+';line-height:'+d.lineHeight+';color:'+d.textColor+';margin-bottom:4px;font-family:'+d.fontHeading+'">عناوين</div>'
      + '<div style="font-size:'+d.fontSize+'px;font-weight:400;line-height:'+d.lineHeight+';color:'+d.textMuted+';font-family:'+d.fontBody+'">نصوص المحتوى الأساسية تظهر بهذا الشكل</div>'
      + '<div style="margin-top:8px;display:flex;gap:6px;justify-content:center">'
      + '<span style="font-size:.65rem;background:'+d.accentColor+';color:#fff;padding:2px 10px;border-radius:'+d.btnRadius+'px;font-weight:800">زر</span>'
      + '<span style="font-size:.65rem;border:1.5px solid '+d.accentColor+';color:'+d.accentColor+';padding:2px 10px;border-radius:'+d.btnRadius+'px;font-weight:800">إطار</span>'
      + '</div></div>';
  } else if (sec === 'layout') {
    bodyHtml = '<div style="padding:12px">'
      + '<div style="display:grid;grid-template-columns:repeat('+Math.min(d.gridColsDesktop,4)+',1fr);gap:4px;margin-bottom:6px">'
      + Array(Math.min(d.gridColsDesktop,4)).fill(0).map(function(){return '<div style="aspect-ratio:'+d.imgRatio+';background:'+d.borderColor+';border-radius:'+d.imgRadius+'px"></div>';}).join('')
      + '</div>'
      + '<div style="font-size:.55rem;color:#94a3b8;text-align:center">'+d.gridColsDesktop+' أعمدة • تباعد '+d.gridGap+'px</div></div>';
  } else if (sec === 'images') {
    var rat = d.imgRatio.split('/'); var ratioH = rat.length===2 ? Math.round(100 * parseInt(rat[1]) / parseInt(rat[0])) : 100;
    bodyHtml = '<div style="padding:12px;text-align:center">'
      + '<div style="width:100px;height:'+ratioH+'px;background:linear-gradient(135deg,'+d.bgColor+','+d.borderColor+');border-radius:'+d.imgRadius+'px;margin:0 auto 6px;display:flex;align-items:center;justify-content:center;border:1px solid '+d.borderColor+'"><i class="fa-solid fa-image" style="color:'+d.textMuted+';opacity:.4;font-size:1.2rem"></i></div>'
      + '<div style="font-size:.55rem;color:#94a3b8">نسبة '+d.imgRatio+' • تدوير '+d.imgRadius+'px</div></div>';
  } else if (sec === 'cards') {
    bodyHtml = '<div style="padding:12px">'
      + '<div style="border:'+(d.cardStyle==='outline'?'1.5px solid '+d.borderColor:'none')+';border-radius:'+d.cardRadius+'px;padding:12px;background:'+d.cardColor+';box-shadow:'+(d.shadows&&d.cardStyle!=='flat'?'0 2px 8px rgba(0,0,0,'+(0.05*d.shadowIntensity)+')':'none')+'">'
      + '<div style="display:flex;gap:8px;align-items:center">'
      + '<div style="width:36px;height:36px;border-radius:'+d.imgRadius+'px;background:'+d.bgColor+';flex-shrink:0"></div>'
      + '<div style="flex:1"><div style="height:6px;width:70%;background:'+d.textMuted+';border-radius:999px;margin-bottom:4px;opacity:.3"></div><div style="height:8px;width:40%;background:'+d.priceColor+';border-radius:4px"></div></div>'
      + '</div></div>'
      + '<div style="display:flex;gap:4px;margin-top:6px;justify-content:center">'
      + '<span style="font-size:.6rem;background:'+d.accentColor+';color:#fff;padding:3px 12px;border-radius:'+d.btnRadius+'px;font-weight:800">صلب</span>'
      + '<span style="font-size:.6rem;border:1.5px solid '+d.accentColor+';color:'+d.accentColor+';padding:3px 12px;border-radius:'+d.btnRadius+'px;font-weight:800">حدود</span>'
      + '</div></div>';
  } else if (sec === 'header') {
    bodyHtml = '<div style="padding:0">'+headerHtml.replace('previewHeaderG','previewHeaderG2').replace('style="','style="padding:10px 14px;font-size:85%;')+'</div>'
      + '<div style="padding:10px 12px;text-align:center"><div style="font-size:.55rem;color:#94a3b8">ارتفاع: '+d.headerPadding+'px • '+(d.stickyHeader?'ثابت':'غير ثابت')+'</div>'
      + '<div style="display:flex;gap:4px;justify-content:center;margin-top:4px"><span style="font-size:.55rem;background:rgba(0,0,0,.05);padding:2px 6px;border-radius:4px">🔍 '+(d.showSearch?'ظاهر':'مخفي')+'</span><span style="font-size:.55rem;background:rgba(0,0,0,.05);padding:2px 6px;border-radius:4px">❤️ '+(d.showWishlist?'ظاهر':'مخفي')+'</span></div></div>';
  } else if (sec === 'nav') {
    bodyHtml = '<div style="padding:0">'
      + '<div class="preview-nav" style="background:'+d.navBg+';justify-content:center">'
      + '<span style="background:'+d.navActive+';color:#fff;border-radius:'+(d.navStyle==='pill'?'999px':'8px')+'">الرئيسية</span>'
      + '<span style="color:'+d.textMuted+'">منتجات</span>'
      + '<span style="color:'+d.textMuted+'">عروض</span>'
      + '<span style="color:'+d.textMuted+'">اتصل</span>'
      + '</div></div>';
  } else if (sec === 'product') {
    bodyHtml = '<div style="padding:12px">'
      + '<div style="display:flex;gap:8px;align-items:center;border:1px solid '+d.borderColor+';border-radius:'+d.cardRadius+'px;padding:8px;background:'+d.cardColor+'">'
      + '<div style="width:40px;height:40px;border-radius:'+d.imgRadius+'px;background:'+d.bgColor+';flex-shrink:0"></div>'
      + '<div style="flex:1"><div style="font-size:.65rem;color:'+d.textColor+';font-weight:'+d.fontWeight+'">منتج تجريبي</div>'
      + (d.showBrand?'<div style="font-size:.5rem;color:'+d.textMuted+'">ماركة</div>':'')
      + '<div style="display:flex;align-items:center;gap:4px;margin-top:2px">'
      + '<span style="font-size:.7rem;font-weight:900;color:'+d.priceColor+'">99 ₪</span>'
      + (d.showOldPrice?'<span style="font-size:.5rem;color:'+d.textMuted+';text-decoration:line-through">120 ₪</span>':'')
      + (d.showDiscountBadge?'<span style="font-size:.45rem;background:'+d.saleColor+';color:#fff;padding:1px 4px;border-radius:4px;font-weight:800">خصم</span>':'')
      + '</div></div>'
      + (d.showQuickAdd?'<div style="margin-top:4px"><span style="font-size:.55rem;background:'+d.accentColor+';color:#fff;padding:2px 8px;border-radius:'+d.btnRadius+'px;display:inline-block">+ أضف للسلة</span></div>':'')
      + '</div></div>';
  } else if (sec === 'spacing') {
    bodyHtml = '<div style="padding:12px">'
      + '<div style="background:'+d.borderColor+';border-radius:8px;padding:8px;opacity:.3">'
      + '<div style="background:'+d.cardColor+';border-radius:6px;padding:6px;display:flex;gap:4px">'
      + '<div style="flex:1;height:20px;background:'+d.bgColor+';border-radius:4px"></div>'
      + '<div style="flex:1;height:20px;background:'+d.bgColor+';border-radius:4px"></div>'
      + '</div></div>'
      + '<div style="font-size:.55rem;color:#94a3b8;text-align:center;margin-top:4px">هامش: '+d.pagePadding+'px • تباعد: '+d.sectionGap+'px</div></div>';
  }

  box.innerHTML = headerHtml + '<div class="preview-body">'+bodyHtml+'</div>' + navHtml;
}

function adminLoadAppearance() {
  const data = Object.assign(getDefaultAppearance(), JSON.parse(localStorage.getItem('mycart_appearance')) || {});
  fillAppearanceForm(data);
  renderPresetGrid(data);
  previewAppearance();
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
  liveAppPreview();
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

  // Update announcement bar colors to harmonize with preset theme
  const annBar = document.getElementById('announcementBar');
  if (annBar) {
    annBar.style.backgroundColor = p.headerFrom || p.accentColor;
    annBar.style.color = p.headerText || '#ffffff';
  }
  try {
    const mktData = JSON.parse(localStorage.getItem('mycart_marketing')) || {};
    if (!mktData.announce) mktData.announce = {};
    mktData.announce.bg = p.headerFrom || p.accentColor;
    mktData.announce.color = p.headerText || '#ffffff';
    localStorage.setItem('mycart_marketing', JSON.stringify(mktData));
  } catch(e) {}

  showToast('✅ تم تطبيق ثيم: ' + p.name, 'success');
}

// ===== ADMIN MARKETING =====

function updateAdminSeoPreview() {
  const title = document.getElementById('admMktSeoTitle').value.trim() || 'متجري - أفضل متجر إلكتروني';
  const desc = document.getElementById('admMktSeoDesc').value.trim() || 'وصف مختصر للموقع يظهر في محركات البحث';
  const pTitle = document.getElementById('admMktSeoPreviewTitle');
  const pDesc = document.getElementById('admMktSeoPreviewDesc');
  if (pTitle) pTitle.textContent = title;
  if (pDesc) pDesc.textContent = desc;
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

// ===== ALERT / CONFIRM MODALS =====

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
  const iframe = document.createElement('iframe');
  iframe.style.cssText = 'position:fixed;top:-9999px;left:-9999px;width:1px;height:1px;border:none';
  document.body.appendChild(iframe);
  const doc = iframe.contentWindow.document;
  doc.open();
  doc.write(`
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
    </body></html>
  `);
  doc.close();
  setTimeout(function() {
    iframe.contentWindow.focus();
    iframe.contentWindow.print();
    setTimeout(function() {
      document.body.removeChild(iframe);
    }, 1000);
  }, 300);
}

// ===== ORDER DETAIL/EDIT MODAL (Admin) =====

let adminOrderEditIdx = -1;

let adminOrderEditData = null;

let adminOrderEditMode = false;

function adminShowOrderDetail(idxOrId) {
  const ords = JSON.parse(localStorage.getItem('mycart_orders')) || [];
  if (!ords.length) return;
  
  let idx = -1;
  if (typeof idxOrId === 'number') {
    if (idxOrId >= 0 && idxOrId < ords.length) idx = idxOrId;
    else idx = ords.findIndex(x => x.id === idxOrId);
  }
  if (idx < 0) {
    const searchStr = String(idxOrId).replace('#', '');
    idx = ords.findIndex(x => String(x.id) === searchStr || String(x.id).slice(-6) === searchStr);
  }
  if (idx < 0) idx = 0;
  
  const o = ords[idx];
  if (!o) return;
  adminOrderEditIdx = idx;
  adminOrderEditData = JSON.parse(JSON.stringify(o));
  adminOrderEditMode = false;
  
  document.querySelectorAll('.admin-tab, .tab-content').forEach(t => {
    t.classList.remove('active');
    t.style.display = 'none';
  });
  document.querySelectorAll('.admin-sidebar button').forEach(b => b.classList.remove('active'));
  
  const titleEl = document.getElementById('adminPageTitle') || document.getElementById('pageTitle');
  if (titleEl) titleEl.textContent = `طلب #${String(o.id).slice(-6)}`;
  
  const detailEl = document.getElementById('admin-orderDetail') || document.getElementById('tab-orderDetail');
  if (detailEl) {
    detailEl.classList.add('active');
    detailEl.style.display = 'block';
  }
  
  if (location.pathname.includes('admin.html')) {
    history.replaceState(null, '', `#orderDetail/${o.id}`);
  }
  
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
var adminNotifLastAgency = 0;

function playNotifSound() {
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

function getReadNotifIdsStore() {
  try { var r = localStorage.getItem('mycart_read_notifications'); return r ? JSON.parse(r) : []; } catch(e) { return []; }
}

function markNotifReadStore(id) {
  var ids = getReadNotifIdsStore();
  if (ids.indexOf(String(id)) === -1) {
    ids.push(String(id));
    try { localStorage.setItem('mycart_read_notifications', JSON.stringify(ids)); } catch(e) {}
  }
}

function handleAdminNotifClick(notifId, actionFn) {
  if (notifId) markNotifReadStore(notifId);
  closeAdminNotifDropdown();
  checkAdminNewOrders();
  if (typeof openQuickAdmin === 'function') openQuickAdmin();
  if (typeof actionFn === 'function') actionFn();
}

function checkAdminNewOrders() {
  const currentOrders = JSON.parse(localStorage.getItem('mycart_orders') || '[]').length;
  var agencyNotifs = [];
  try {
    var r = localStorage.getItem('mycart_store_notifications') || localStorage.getItem('mycart_store_notifications_default');
    if (r) agencyNotifs = JSON.parse(r);
  } catch(e) {}

  var readIds = getReadNotifIdsStore();
  var unreadAgency = agencyNotifs.filter(function(n, i){ return readIds.indexOf(String(n.id || 'agency_'+i)) === -1; }).length;

  var orders = JSON.parse(localStorage.getItem('mycart_orders') || '[]');
  var unreadOrders = orders.filter(function(o){ return readIds.indexOf(String(o.id)) === -1; }).length;

  var feeInfo = typeof getFeeInfo === 'function' ? getFeeInfo() : null;
  var hasFeeWarning = feeInfo && feeInfo.plan === 'free' && feeInfo.accrued > 0 && feeInfo.accrued >= feeInfo.limit;
  var total = unreadAgency + unreadOrders + (hasFeeWarning ? 1 : 0);

  const badge = document.getElementById('adminNotifBadge');
  if (badge) {
    if (total > 0) {
      badge.textContent = total;
      badge.style.display = 'flex';
    } else {
      badge.style.display = 'none';
    }
  }
  if (currentOrders > adminNotifOrderCount) {
    adminNotifOrderCount = currentOrders;
    playNotifSound();
  } else if (currentOrders < adminNotifOrderCount) {
    adminNotifOrderCount = currentOrders;
  }
}

var _quickAdminNotifFilter = 'all';

function clearAllQuickAdminNotifs() {
  var readIds = getReadNotifIdsStore();
  var agencyNotifs = [];
  try {
    var r = localStorage.getItem('mycart_store_notifications') || localStorage.getItem('mycart_store_notifications_default');
    if (r) agencyNotifs = JSON.parse(r);
  } catch(e) {}
  agencyNotifs.forEach(function(n, i){
    var nid = String(n.id || ('agency_' + i));
    if (readIds.indexOf(nid) === -1) readIds.push(nid);
  });
  var orders = JSON.parse(localStorage.getItem('mycart_orders') || '[]');
  orders.forEach(function(o){
    var oid = String(o.id);
    if (readIds.indexOf(oid) === -1) readIds.push(oid);
  });
  try { localStorage.setItem('mycart_read_notifications', JSON.stringify(readIds)); } catch(e) {}
  checkAdminNewOrders();
  closeAdminNotifDropdown();
  showAdminNotifPanel();
}

function filterQuickAdminNotifs(filter) {
  _quickAdminNotifFilter = filter;
  closeAdminNotifDropdown();
  showAdminNotifPanel();
}

function showAdminNotifPanel() {
  var existing = document.getElementById('adminNotifDropdown');
  if (existing) { existing.remove(); return; }
  var btn = document.getElementById('adminNotifBtn');
  if (!btn) return;
  var rect = btn.getBoundingClientRect();

  var readIds = getReadNotifIdsStore();
  var orders = JSON.parse(localStorage.getItem('mycart_orders') || '[]');
  var recent = orders.slice(0, 5);

  var agencyNotifs = [];
  try {
    var r = localStorage.getItem('mycart_store_notifications') || localStorage.getItem('mycart_store_notifications_default');
    if (r) agencyNotifs = JSON.parse(r);
  } catch(e) {}

  var drop = document.createElement('div');
  drop.id = 'adminNotifDropdown';
  drop.style.cssText = 'position:fixed;top:'+(rect.bottom+4)+'px;left:'+(rect.left)+'px;min-width:310px;max-width:350px;max-height:450px;overflow-y:auto;background:#fff;border:1.5px solid #e2e8f0;border-radius:16px;box-shadow:0 8px 30px rgba(0,0,0,.15);z-index:99999;padding:12px;font-family:Tajawal,sans-serif;direction:rtl';

  var itemsHtml = '';
  var feeInfo = typeof getFeeInfo === 'function' ? getFeeInfo() : null;
  if (feeInfo && feeInfo.plan === 'free' && feeInfo.accrued > 0 && feeInfo.accrued >= feeInfo.limit) {
    itemsHtml += '<div onclick="handleAdminNotifClick(null, function(){ switchAdminTab(\'subscription\'); })" style="display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:8px;margin-bottom:6px;background:#fef2f2;border:1.5px solid #fecaca;cursor:pointer">'
      + '<div style="width:24px;height:24px;border-radius:50%;background:#ef4444;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.6rem;color:#fff"><i class="fa-solid fa-triangle-exclamation"></i></div>'
      + '<div style="flex:1;min-width:0"><div style="font-size:.72rem;font-weight:800;color:#991b1b">⚠️ مستحقات مالية مستحقة</div>'
      + '<div style="font-size:.62rem;color:#b91c1c">رصيدك الحالي: '+feeInfo.accrued+' ₪ (الحد: '+feeInfo.limit+' ₪). سدد لتجنب الإيقاف.</div></div></div>';
  }

  var ntypes = {
    general:{bg:'#eff6ff',bd:'#bfdbfe',icon:'fa-bullhorn',icBg:'#2563eb',color:'#1e3a8a',sub:'#1d4ed8'},
    payment:{bg:'#fef2f2',bd:'#fecaca',icon:'fa-triangle-exclamation',icBg:'#dc2626',color:'#991b1b',sub:'#b91c1c'},
    post:{bg:'#ecfdf5',bd:'#a7f3d0',icon:'fa-newspaper',icBg:'#7c3aed',color:'#065f46',sub:'#047857'},
    update:{bg:'#e0f2fe',bd:'#bae6fd',icon:'fa-rotate',icBg:'#0891b2',color:'#075985',sub:'#0369a1'},
    offer:{bg:'#fdf2f8',bd:'#fbcfe8',icon:'fa-tag',icBg:'#db2777',color:'#831843',sub:'#9d174d'},
    marketing:{bg:'#fff7ed',bd:'#ffedd5',icon:'fa-bullhorn',icBg:'#ea580c',color:'#7c2d12',sub:'#9a3412'},
    welcome:{bg:'#ecfdf5',bd:'#a7f3d0',icon:'fa-hand-wave',icBg:'#059669',color:'#065f46',sub:'#047857'},
    warning:{bg:'#fef2f2',bd:'#fecaca',icon:'fa-triangle-exclamation',icBg:'#dc2626',color:'#991b1b',sub:'#b91c1c'}
  };

  if (agencyNotifs.length) {
    window._notifList = agencyNotifs;
    var shownAgency = agencyNotifs.slice(0, 4);
    shownAgency.forEach(function(n, idx){
      var nid = String(n.id || ('agency_' + idx));
      var isRead = readIds.indexOf(nid) !== -1;
      if (_quickAdminNotifFilter === 'unread' && isRead) return;

      var t = ntypes[n.type] || ntypes.general;
      var realIdx = window._notifList.indexOf(n);

      var cardBg = isRead ? '#f8fafc' : t.bg;
      var cardBorder = isRead ? '#e2e8f0' : t.bd;
      var titleColor = isRead ? '#64748b' : t.color;
      var subColor = isRead ? '#94a3b8' : t.sub;

      var actionFnCode = "switchAdminTab('dashboard')";
      if (n.type === 'post' || n.image || n.postBody) actionFnCode = "openNotifArticle("+realIdx+")";
      else if (n.type === 'payment' || n.type === 'warning') actionFnCode = "switchAdminTab('subscription')";
      else if (n.type === 'marketing') actionFnCode = "switchAdminTab('marketing','seo')";
      else if (n.type === 'update') actionFnCode = "switchAdminTab('settings')";
      else if (n.type === 'offer') actionFnCode = "switchAdminTab('marketing','offers')";

      itemsHtml += '<div onclick="handleAdminNotifClick(\''+nid+'\', function(){ '+actionFnCode+'; })" style="display:flex;flex-direction:column;gap:6px;padding:10px 12px;border-radius:10px;margin-bottom:6px;background:'+cardBg+';border:1.5px solid '+cardBorder+';cursor:pointer;opacity:'+(isRead ? '0.75' : '1')+'">'
        + '<div style="display:flex;align-items:center;gap:8px">'
        + '<div style="width:26px;height:26px;border-radius:50%;background:'+(isRead ? '#94a3b8' : t.icBg)+';display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.65rem;color:#fff"><i class="fa-solid '+t.icon+'"></i></div>'
        + '<div style="flex:1;min-width:0"><div style="font-size:.78rem;font-weight:800;color:'+titleColor+'">'+(n.type==='payment'?'⚠️ ':'')+n.title+(isRead ? ' <span style="font-size:.58rem;color:#94a3b8;font-weight:400">(مقروء)</span>' : '')+'</div>'
        + '<div style="font-size:.68rem;color:'+subColor+';line-height:1.4">'+n.message+'</div></div></div>'
        + (n.image ? '<img src="'+n.image+'" style="width:100%;max-height:120px;object-fit:cover;border-radius:8px;border:1px solid '+cardBorder+';margin-top:2px;'+(isRead?'filter:grayscale(30%)':'')+'" onerror="this.style.display=\'none\'">' : '')
        + (n.link ? '<div style="font-size:.65rem;font-weight:700;color:'+(isRead?'#94a3b8':t.icBg)+';display:flex;align-items:center;gap:4px"><i class="fa-solid fa-link"></i> '+n.link+'</div>' : '')
        + '</div>';
    });
  }

  if (orders.length > 0) {
    var newestOrder = orders[0];
    var oid = String(newestOrder.id);
    var isReadOrder = readIds.indexOf(oid) !== -1;
    if (_quickAdminNotifFilter !== 'unread' || !isReadOrder) {
      itemsHtml += '<div onclick="handleAdminNotifClick(\''+oid+'\', function(){ adminShowOrderDetail(0); })" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;margin-bottom:8px;background:'+(isReadOrder ? '#f8fafc' : '#f0fdf4')+';border:1.5px solid '+(isReadOrder ? '#bbf7d0' : '#bbf7d0')+';cursor:pointer;opacity:'+(isReadOrder ? '0.75' : '1')+'">'
        + '<div style="width:28px;height:28px;border-radius:50%;background:'+(isReadOrder ? '#94a3b8' : '#16a34a')+';display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.7rem;color:#fff"><i class="fa-solid fa-bag-shopping"></i></div>'
        + '<div style="flex:1;min-width:0">'
        + '<div style="font-size:.78rem;font-weight:800;color:'+(isReadOrder ? '#64748b' : '#166534')+'">🛒 طلب جديد #'+String(newestOrder.id).slice(-6)+(isReadOrder ? ' <span style="font-size:.58rem;color:#94a3b8;font-weight:400">(مقروء)</span>' : '')+'</div>'
        + '<div style="font-size:.68rem;color:'+(isReadOrder ? '#94a3b8' : '#15803d')+'">'+(newestOrder.customer?.name || 'عميل جديد')+' • المجموع: '+(newestOrder.total ? newestOrder.total + ' ₪' : '')+'</div>'
        + '</div>'
        + '<span style="font-size:.6rem;background:'+(isReadOrder ? '#94a3b8' : '#16a34a')+';color:#fff;padding:2px 7px;border-radius:999px;font-weight:800">'+(isReadOrder ? 'تمت المعاينة' : 'جديد')+'</span>'
        + '</div>';
    }
  }

  recent.forEach(function(o, i){
    if (i === 0 && orders.length > 0) return;
    var oid = String(o.id);
    var isReadOrder = readIds.indexOf(oid) !== -1;
    if (_quickAdminNotifFilter === 'unread' && isReadOrder) return;

    var st = o.status || 'pending';
    var stColor = isReadOrder ? '#94a3b8' : (st==='completed'?'#10b981':st==='cancelled'?'#ef4444':'#f59e0b');
    var stLabel = st==='completed'?'مكتمل':st==='cancelled'?'ملغي':'جديد';
    itemsHtml += '<div onclick="handleAdminNotifClick(\''+oid+'\', function(){ adminShowOrderDetail('+i+'); })" style="display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:8px;cursor:pointer;transition:background .15s;margin-bottom:'+(i<recent.length-1?'4px':'0')+';background:'+(isReadOrder ? '#f8fafc' : '#fef2f2')+';border:1px solid '+(isReadOrder ? '#e2e8f0' : '#fecaca')+';opacity:'+(isReadOrder ? '0.75' : '1')+'">'
      + '<div style="width:7px;height:7px;border-radius:50%;background:'+stColor+';flex-shrink:0"></div>'
      + '<div style="flex:1;min-width:0"><div style="font-size:.75rem;font-weight:700;color:'+(isReadOrder ? '#64748b' : '#1e293b')+'">طلب #'+String(o.id).slice(-6)+(isReadOrder ? ' <span style="font-size:.58rem;color:#94a3b8;font-weight:400">(مقروء)</span>' : '')+'</div>'
      + '<div style="font-size:.65rem;color:#64748b">'+(o.customer?.name || '')+' • '+(o.total?o.total+' ₪':'')+'</div></div>'
      + '<span style="font-size:.6rem;padding:2px 7px;border-radius:999px;background:'+stColor+'15;color:'+stColor+';font-weight:800">'+stLabel+'</span>'
      + '</div>';
  });

  var headerControlHtml = '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">'
    + '<div style="display:flex;align-items:center;gap:6px">'
    + '<button onclick="filterQuickAdminNotifs(\'all\')" style="background:'+(_quickAdminNotifFilter==='all'?'#8b5cf6':'#f1f5f9')+';color:'+(_quickAdminNotifFilter==='all'?'#fff':'#64748b')+';border:none;padding:3px 10px;border-radius:999px;font-size:.65rem;font-weight:800;cursor:pointer">الكل</button>'
    + '<button onclick="filterQuickAdminNotifs(\'unread\')" style="background:'+(_quickAdminNotifFilter==='unread'?'#8b5cf6':'#f1f5f9')+';color:'+(_quickAdminNotifFilter==='unread'?'#fff':'#64748b')+';border:none;padding:3px 10px;border-radius:999px;font-size:.65rem;font-weight:800;cursor:pointer">غير مقروء ⚡</button>'
    + '</div>'
    + '<button onclick="clearAllQuickAdminNotifs()" style="background:none;border:none;color:#ef4444;font-size:.65rem;font-weight:800;cursor:pointer;display:flex;align-items:center;gap:4px"><i class="fa-solid fa-check-double"></i> تعليم الكل كمقروء</button>'
    + '</div>';

  drop.innerHTML = '<div style="font-size:.75rem;font-weight:800;color:#1e293b;margin-bottom:8px;display:flex;align-items:center;justify-content:space-between"><span style="display:flex;align-items:center;gap:6px"><i class="fa-solid fa-bell" style="color:#8b5cf6;font-size:.65rem"></i> الإشعارات</span><button onclick="closeAdminNotifDropdown()" style="background:none;border:none;color:#94a3b8;cursor:pointer"><i class="fa-solid fa-xmark"></i></button></div>'
    + headerControlHtml
    + (itemsHtml || '<div style="font-size:.7rem;color:#94a3b8;text-align:center;padding:16px 0">'+(_quickAdminNotifFilter==='unread'?'لا توجد إشعارات غير مقروءة ✨':'لا توجد إشعارات')+'</div>')
    + '<div style="border-top:1px solid #f1f5f9;margin-top:6px;padding-top:6px;text-align:center">'
    + '<button onclick="handleAdminNotifClick(null, function(){ switchAdminTab(\'orders\'); })" style="background:none;border:none;font-size:.65rem;color:#8b5cf6;font-weight:800;cursor:pointer;font-family:inherit;padding:4px 0">عرض كل الطلبات <i class="fa-solid fa-arrow-left"></i></button></div>';
  document.body.appendChild(drop);
  setTimeout(function(){ document.addEventListener('click', closeAdminNotifOutside); }, 10);
}
function closeAdminNotifDropdown() {
  var d = document.getElementById('adminNotifDropdown');
  if (d) d.remove();
  document.removeEventListener('click', closeAdminNotifOutside);
}
function closeAdminNotifOutside(e) {
  var d = document.getElementById('adminNotifDropdown');
  var btn = document.getElementById('adminNotifBtn');
  if (d && btn && !d.contains(e.target) && !btn.contains(e.target)) closeAdminNotifDropdown();
}

function closeNotifArticleModal() {
  var m = document.getElementById('notifArticleModal');
  if (m) { m.remove(); document.body.style.overflow = ''; }
}

function openNotifArticle(idx) {
  var list = window._notifList || [];
  var n = list[idx];
  if (!n) return;
  var overlay = document.createElement('div');
  overlay.id = 'notifArticleModal';
  overlay.style.cssText = 'position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;padding:20px;font-family:Tajawal,sans-serif';
  overlay.onclick = function(e) { if (e.target === overlay) closeNotifArticleModal(); };
  var body = n.postBody || n.message || '';
  overlay.innerHTML = '<div style="background:#fff;border-radius:20px;max-width:640px;width:100%;max-height:90vh;overflow-y:auto;box-shadow:0 20px 60px rgba(0,0,0,.2);animation:fadeUp .25s ease" onclick="event.stopPropagation()">'
    + '<div style="display:flex;align-items:center;justify-content:space-between;padding:18px 20px;border-bottom:1px solid #e2e8f0;position:sticky;top:0;background:#fff;border-radius:20px 20px 0 0;z-index:1">'
    + '<div><h3 style="margin:0;font-size:1.1rem;font-weight:900;color:#1e293b">'+(n.title||'')+'</h3>'
    + '<span style="font-size:.7rem;color:#64748b">📝 مقال</span></div>'
    + '<button onclick="closeNotifArticleModal()" style="background:none;border:none;font-size:1.2rem;cursor:pointer;color:#94a3b8;padding:4px"><i class="fa-solid fa-xmark"></i></button></div>'
    + '<div style="padding:20px;font-size:.9rem;line-height:1.8;color:#334155">'
    + (n.image ? '<img src="'+n.image+'" style="width:100%;max-height:300px;object-fit:cover;border-radius:12px;margin-bottom:16px" onerror="this.style.display=\'none\'">' : '')
    + body.replace(/\n/g,'<br>')
    + '</div>'
    + (n.link ? '<div style="padding:0 20px 18px"><a href="'+n.link+'" target="_blank" style="display:inline-flex;align-items:center;gap:6px;padding:10px 18px;background:#10b981;color:#fff;border-radius:10px;text-decoration:none;font-weight:800;font-size:.85rem"><i class="fa-solid fa-arrow-up-right-from-square"></i> اقرأ المزيد</a></div>' : '')
    + '</div>';
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';
}

function startAdminNotifCheck() {
  adminNotifOrderCount = JSON.parse(localStorage.getItem('mycart_orders') || '[]').length;
  if (adminNotifInterval) clearInterval(adminNotifInterval);
  checkAdminNewOrders();
  adminNotifInterval = setInterval(checkAdminNewOrders, 3000);
}

// Listen for storage changes from other tabs (same origin)
try { window.addEventListener('storage', function(e) {
  if (e.key === 'mycart_store_notifications' || e.key === 'mycart_orders') {
    checkAdminNewOrders();
  }
}); } catch(se) {}

// Start notification check when admin is opened
if (typeof openAdmin === 'function') {
  const origOpenAdmin = openAdmin;
  openAdmin = function() {
    origOpenAdmin();
    if (typeof startAdminNotifCheck === 'function') startAdminNotifCheck();
  };
}

if (typeof closeAdmin === 'function') {
  const origCloseAdmin = closeAdmin;
  closeAdmin = function() {
    origCloseAdmin();
    if (typeof adminNotifInterval !== 'undefined' && adminNotifInterval) clearInterval(adminNotifInterval);
  };
}

// Update adminExport to include categories and discounts
if (typeof adminExport === 'function') {
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
    a.download = `mycart_backup_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
    const statusEl = document.getElementById('adminDataStatus');
    if (statusEl) statusEl.textContent = '✅ تم التصدير';
  };
}

// Update adminImport to include categories and discounts
if (typeof adminImport === 'function') {
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
        if (data.logo) { try { localStorage.setItem('mycart_logo', data.logo); } catch(e) {} }
        if (data.bg) { try { localStorage.setItem('mycart_bg', data.bg); } catch(e) {} }
        if (data.marketing) { try { localStorage.setItem('mycart_marketing', JSON.stringify(data.marketing)); } catch(e) {} }
        if (typeof adminRefreshAll === 'function') adminRefreshAll();
        const statusEl = document.getElementById('adminDataStatus');
        if (statusEl) statusEl.textContent = '✅ تم الاستيراد';
      } catch(err) {}
    };
    reader.readAsText(file);
    e.target.value = '';
  };
}

// Update adminResetAll to include categories and discounts
if (typeof adminResetAll === 'function') {
  const origAdminResetAll = adminResetAll;
  adminResetAll = function() {
    if (typeof origAdminResetAll === 'function') origAdminResetAll();
  };
}
// Auto-start store on DOMContentLoaded if running on store page
document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('productsGrid')) {
    init();
  }
});
