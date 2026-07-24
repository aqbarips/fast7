function openAdmin() {
  try { localStorage.setItem('mycart_admin_logged', 'true'); } catch(e) {}
  isWholesale = true;
  try { localStorage.setItem('mycart_wholesale', 'true'); } catch(e) {}
  applyWholesale();
  const _wb = document.getElementById('wholesaleBadge'); if (_wb) _wb.style.display = 'inline-block';
  document.getElementById('adminOverlay').classList.add('show');
  document.body.style.overflow = 'hidden';
  adminRefreshAll();
  updateAdminFeeBadge();
  const loginItem = document.getElementById('loginNavItem');
  if (loginItem) {
    loginItem.innerHTML = '<i class="fa-solid fa-sliders"></i><span>لوحة تحكم</span>';
    loginItem.onclick = function() { document.getElementById('adminOverlay').classList.add('show'); document.body.style.overflow = 'hidden'; adminRefreshAll(); updateAdminFeeBadge(); };
  }
}

function updateAdminFeeBadge() {
  var el = document.getElementById('adminFeeBadge');
  if (!el) return;
  var info = getFeeInfo();
  if (info.plan === 'free') {
    if (info.accrued > 0) {
      el.innerHTML = '<i class="fa-solid fa-coins" style="margin-'+(document.dir==='rtl'?'l':'r')+'eft:3px"></i>'+info.accrued+' ₪';
      el.style.display = 'inline-block';
      el.style.background = info.accrued >= info.limit ? 'rgba(239,68,68,.15)' : 'rgba(245,158,11,.15)';
      el.style.color = info.accrued >= info.limit ? '#ef4444' : '#f59e0b';
    } else {
      el.style.display = 'none';
    }
  } else {
    el.innerHTML = '<i class="fa-solid fa-crown" style="margin-'+(document.dir==='rtl'?'l':'r')+'eft:3px"></i>VIP';
    el.style.display = 'inline-block';
    el.style.background = 'rgba(16,185,129,.12)';
    el.style.color = '#10b981';
  }
}

function closeAdmin() {
  document.getElementById('adminOverlay').classList.remove('show');
  document.body.style.overflow = '';
  document.getElementById('adminSidebar').classList.remove('open');
}

function toggleAdminSidebar() {
  document.getElementById('adminSidebar').classList.toggle('open');
}

function switchAdminTab(tab, subTab = '') {
  const tabMap = ['dashboard','orders','products','categories','addProduct','settings','marketing','appearance','subscription','orderDetail'];
  const idx = tabMap.indexOf(tab);
  
  document.querySelectorAll('.admin-sidebar button').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content, .admin-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.submenu-btn').forEach(b => b.classList.remove('active'));

  if (idx >= 0) {
    const mainBtn = Array.from(document.querySelectorAll('.admin-sidebar button')).find(b => {
      const oc = (b.getAttribute('onclick') || '');
      return oc.includes(`switchAdminTab('${tab}'`) || oc.includes(`'${tab}'`);
    });
    if (mainBtn) mainBtn.classList.add('active');
  }

  const targetTabEl = document.getElementById('tab-' + tab) || document.getElementById('admin-' + tab);
  if (targetTabEl) {
    targetTabEl.classList.add('active');
    targetTabEl.style.display = 'block';
  }
  
  // Hide inactive tabs
  document.querySelectorAll('.tab-content, .admin-tab').forEach(t => {
    if (t !== targetTabEl) {
      t.style.display = 'none';
    }
  });
  const titles = { dashboard:'الإحصائيات', orders:'الطلبات', products:'المنتجات', categories:'التصنيفات', addProduct:'إضافة منتج', settings:'الإعدادات', marketing:'التسويق', appearance:'المظهر والتخطيط', subscription:'الاشتراك' };
  const titleEl = document.getElementById('adminPageTitle') || document.getElementById('pageTitle');
  if (titleEl) titleEl.textContent = titles[tab] || tab;

  if (tab === 'dashboard' && typeof adminRenderDashboard === 'function') adminRenderDashboard();
  if (tab === 'orders' && typeof adminRenderOrders === 'function') adminRenderOrders();
  if (tab === 'products' && typeof adminRenderProducts === 'function') adminRenderProducts();
  if (tab === 'categories' && typeof adminRenderCategories === 'function') adminRenderCategories();
  if (tab === 'addProduct' && typeof adminLoadForm === 'function') adminLoadForm();
  if (tab === 'settings' && typeof adminLoadSettings === 'function') adminLoadSettings();
  if (tab === 'appearance' && typeof adminRenderAppearance === 'function') adminRenderAppearance();
  if (tab === 'subscription' && typeof adminRenderSubscriptionTab === 'function') adminRenderSubscriptionTab();
  
  if (tab === 'marketing') {
    if (typeof adminRenderMarketing === 'function') adminRenderMarketing(subTab || 'seo');
    if (typeof toggleAdminMktSubMenu === 'function') toggleAdminMktSubMenu(null, true);
    
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

  const sidebar = document.getElementById('adminSidebar') || document.getElementById('sidebar');
  if (sidebar) sidebar.classList.remove('open');

  // Update URL hash for browser navigation and bookmarking
  if (location.pathname.includes('admin.html')) {
    const newHash = tab === 'marketing' ? `#marketing/${subTab || 'seo'}` : `#${tab}`;
    if (location.hash !== newHash) {
      history.replaceState(null, '', newHash);
    }
  }
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
  updateAdminFeeBadge();
}

function adminRenderDashboard() {
  const el = document.getElementById('admin-dashboard') || document.getElementById('tab-dashboard');
  if (!el) return;
  const allOrders = JSON.parse(localStorage.getItem('mycart_orders')) || [];
  const revenue = allOrders.reduce((s, o) => s + (o.total || 0), 0);
  const customers = new Set(allOrders.map(o => o.customer?.phone)).size;
  el.innerHTML = `
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
    ${(() => {
      if (!allOrders.length) return '<div class="admin-empty"><i class="fa-solid fa-receipt"></i><p>لا يوجد طلبات</p></div>';
      var last = allOrders.slice(0, 5);
      return last.map(function(o, idx) {
        return '<div class="admin-order-card" onclick="adminShowOrderDetail('+idx+')" style="cursor:pointer"><div class="admin-order-header"><span class="oid">#'+String(o.id).slice(-6)+'</span><span class="odate">'+(o.date||'')+'</span><span class="ostatus '+(o._status==='done'?'done':'pending')+'">'+(o._status==='done'?'مكتمل':'جديد')+'</span></div><div class="admin-order-body"><div class="oinfo"><i class="fa-solid fa-user"></i> '+(o.customer?.name||'—')+' | '+(o.customer?.phone||'')+'</div><div class="ototal">'+CURRENCY+(o.total?.toFixed(2)||'0.00')+'</div></div></div>';
      }).join('');
    })()}
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

let quickAdminOrderSortDir = 'desc'; // 'desc' or 'asc'

function toggleQuickAdminOrderSortDir() {
  quickAdminOrderSortDir = quickAdminOrderSortDir === 'desc' ? 'asc' : 'desc';
  adminRenderOrders();
}

let quickAdminOrderFilterStatus = 'all';

const QUICK_ORDER_STATUSES = {
  pending: { label: 'جديد', color: '#f59e0b', bg: '#fef3c7', text: '#92400e', icon: 'fa-clock' },
  processing: { label: 'قيد التجهيز', color: '#3b82f6', bg: '#dbeafe', text: '#1e40af', icon: 'fa-gears' },
  shipped: { label: 'مشحون', color: '#8b5cf6', bg: '#ede9fe', text: '#5b21b6', icon: 'fa-truck-fast' },
  completed: { label: 'مستلم / مكتمل', color: '#10b981', bg: '#dcfce7', text: '#166534', icon: 'fa-circle-check' },
  returned: { label: 'مرتجع', color: '#ef4444', bg: '#fee2e2', text: '#991b1b', icon: 'fa-rotate-left' },
  cancelled: { label: 'ملغي', color: '#64748b', bg: '#f1f5f9', text: '#334155', icon: 'fa-ban' }
};

function setQuickAdminOrderFilterStatus(status) {
  quickAdminOrderFilterStatus = status;
  adminRenderOrders();
}

function updateQuickOrderStatusSelect(idx, newStatus) {
  const o = JSON.parse(localStorage.getItem('mycart_orders')) || [];
  if (!o[idx]) return;
  o[idx]._status = newStatus;
  try { localStorage.setItem('mycart_orders', JSON.stringify(o)); } catch(e) { showToast('⚠️ مساحة التخزين ممتلئة', 'error'); }
  adminRenderOrders();
}

let quickAdminOrderSearchQuery = '';

function setQuickAdminOrderSearchQuery(q) {
  quickAdminOrderSearchQuery = q.trim().toLowerCase();
  adminRenderOrders();
}

function exportQuickOrdersCSV() {
  const orders = JSON.parse(localStorage.getItem('mycart_orders')) || [];
  if (!orders.length) { showToast('⚠️ لا توجد طلبات لتصديرها', 'error'); return; }

  let csvContent = "\uFEFFرقم الطلب,التاريخ,اسم العميل,رقم الهاتف,المدينة,العنوان,المنتجات,المجموع,الحالة\n";

  orders.forEach(o => {
    const rawSt = o._status === 'done' ? 'completed' : (o._status || 'pending');
    const stLabel = (QUICK_ORDER_STATUSES[rawSt] || QUICK_ORDER_STATUSES.pending).label;
    const itemsStr = (o.items || []).map(i => `${i.name} (${i.qty})`).join(' - ').replace(/"/g, '""');
    const nameStr = (o.customer?.name || '').replace(/"/g, '""');
    const phoneStr = (o.customer?.phone || '').replace(/"/g, '""');
    const cityStr = (o.customer?.city || '').replace(/"/g, '""');
    const addrStr = (o.customer?.address || '').replace(/"/g, '""');
    
    csvContent += `"#${String(o.id).slice(-6)}","${o.date||''}","${nameStr}","${phoneStr}","${cityStr}","${addrStr}","${itemsStr}","${o.total?.toFixed(2)||'0'}","${stLabel}"\n`;
  });

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `orders_export_${new Date().toISOString().slice(0,10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast('📥 تم تصدير ملف الطلبات بنجاح', 'success');
}

function adminRenderOrders() {
  const allOrders = JSON.parse(localStorage.getItem('mycart_orders')) || [];
  const elBadge = document.getElementById('adminOrderBadge');
  if (elBadge) elBadge.textContent = allOrders.length;

  const counts = {
    all: allOrders.length,
    pending: 0,
    processing: 0,
    shipped: 0,
    completed: 0,
    returned: 0,
    cancelled: 0
  };

  allOrders.forEach(o => {
    const st = o._status === 'done' ? 'completed' : (o._status || 'pending');
    if (counts[st] !== undefined) counts[st]++;
    else counts.pending++;
  });

  const filterTabsHtml = `
    <div style="display:flex;align-items:center;gap:6px;overflow-x:auto;padding-bottom:8px;margin-bottom:12px;-webkit-overflow-scrolling:touch">
      <button onclick="setQuickAdminOrderFilterStatus('all')" style="background:${quickAdminOrderFilterStatus==='all'?'#1e293b':'#f1f5f9'};color:${quickAdminOrderFilterStatus==='all'?'#fff':'#475569'};border:none;padding:6px 12px;border-radius:999px;font-size:.78rem;font-weight:800;cursor:pointer;white-space:nowrap;font-family:inherit;display:inline-flex;align-items:center;gap:6px"><i class="fa-solid fa-layer-group"></i> الكل (${counts.all})</button>
      <button onclick="setQuickAdminOrderFilterStatus('pending')" style="background:${quickAdminOrderFilterStatus==='pending'?'#f59e0b':'#fef3c7'};color:${quickAdminOrderFilterStatus==='pending'?'#fff':'#92400e'};border:none;padding:6px 12px;border-radius:999px;font-size:.78rem;font-weight:800;cursor:pointer;white-space:nowrap;font-family:inherit;display:inline-flex;align-items:center;gap:6px"><i class="fa-solid fa-clock"></i> جديد (${counts.pending})</button>
      <button onclick="setQuickAdminOrderFilterStatus('processing')" style="background:${quickAdminOrderFilterStatus==='processing'?'#3b82f6':'#dbeafe'};color:${quickAdminOrderFilterStatus==='processing'?'#fff':'#1e40af'};border:none;padding:6px 12px;border-radius:999px;font-size:.78rem;font-weight:800;cursor:pointer;white-space:nowrap;font-family:inherit;display:inline-flex;align-items:center;gap:6px"><i class="fa-solid fa-gears"></i> التجهيز (${counts.processing})</button>
      <button onclick="setQuickAdminOrderFilterStatus('shipped')" style="background:${quickAdminOrderFilterStatus==='shipped'?'#8b5cf6':'#ede9fe'};color:${quickAdminOrderFilterStatus==='shipped'?'#fff':'#5b21b6'};border:none;padding:6px 12px;border-radius:999px;font-size:.78rem;font-weight:800;cursor:pointer;white-space:nowrap;font-family:inherit;display:inline-flex;align-items:center;gap:6px"><i class="fa-solid fa-truck-fast"></i> المشحون (${counts.shipped})</button>
      <button onclick="setQuickAdminOrderFilterStatus('completed')" style="background:${quickAdminOrderFilterStatus==='completed'?'#10b981':'#dcfce7'};color:${quickAdminOrderFilterStatus==='completed'?'#fff':'#166534'};border:none;padding:6px 12px;border-radius:999px;font-size:.78rem;font-weight:800;cursor:pointer;white-space:nowrap;font-family:inherit;display:inline-flex;align-items:center;gap:6px"><i class="fa-solid fa-circle-check"></i> المستلم (${counts.completed})</button>
      <button onclick="setQuickAdminOrderFilterStatus('returned')" style="background:${quickAdminOrderFilterStatus==='returned'?'#ef4444':'#fee2e2'};color:${quickAdminOrderFilterStatus==='returned'?'#fff':'#991b1b'};border:none;padding:6px 12px;border-radius:999px;font-size:.78rem;font-weight:800;cursor:pointer;white-space:nowrap;font-family:inherit;display:inline-flex;align-items:center;gap:6px"><i class="fa-solid fa-rotate-left"></i> المرتجع (${counts.returned})</button>
      <button onclick="setQuickAdminOrderFilterStatus('cancelled')" style="background:${quickAdminOrderFilterStatus==='cancelled'?'#64748b':'#f1f5f9'};color:${quickAdminOrderFilterStatus==='cancelled'?'#fff':'#334155'};border:none;padding:6px 12px;border-radius:999px;font-size:.78rem;font-weight:800;cursor:pointer;white-space:nowrap;font-family:inherit;display:inline-flex;align-items:center;gap:6px"><i class="fa-solid fa-ban"></i> الملغي (${counts.cancelled})</button>
    </div>
  `;

  var sortedOrdersWithIdx = allOrders.map((o, idx) => ({ order: o, realIdx: idx }));
  sortedOrdersWithIdx.sort((a, b) => {
    const timeA = a.order.id || 0;
    const timeB = b.order.id || 0;
    return quickAdminOrderSortDir === 'desc' ? timeB - timeA : timeA - timeB;
  });

  if (quickAdminOrderFilterStatus !== 'all') {
    sortedOrdersWithIdx = sortedOrdersWithIdx.filter(item => {
      var st = item.order._status === 'done' ? 'completed' : (item.order._status || 'pending');
      return st === quickAdminOrderFilterStatus;
    });
  }

  if (quickAdminOrderSearchQuery) {
    sortedOrdersWithIdx = sortedOrdersWithIdx.filter(item => {
      const o = item.order;
      const idStr = String(o.id || '');
      const name = (o.customer?.name || '').toLowerCase();
      const phone = (o.customer?.phone || '').toLowerCase();
      const city = (o.customer?.city || '').toLowerCase();
      return idStr.includes(quickAdminOrderSearchQuery) || name.includes(quickAdminOrderSearchQuery) || phone.includes(quickAdminOrderSearchQuery) || city.includes(quickAdminOrderSearchQuery);
    });
  }

  var topBar = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;flex-wrap:wrap;gap:8px">
      <div class="admin-section-title" style="margin:0">جميع الطلبات (${allOrders.length})</div>
      <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
        <button onclick="exportQuickOrdersCSV()" class="admin-btn admin-btn-secondary admin-btn-sm" style="padding:6px 12px;border-radius:8px;cursor:pointer;font-weight:700;font-family:inherit;display:inline-flex;align-items:center;gap:6px;background:#f0fdf4;border:1px solid #bbf7d0;color:#166534">
          <i class="fa-solid fa-file-csv"></i> تصدير Excel
        </button>
        <button onclick="toggleQuickAdminOrderSortDir()" class="admin-btn admin-btn-secondary admin-btn-sm" style="padding:6px 12px;border-radius:8px;cursor:pointer;font-weight:700;font-family:inherit;display:inline-flex;align-items:center;gap:6px">
          <i class="fa-solid ${quickAdminOrderSortDir === 'desc' ? 'fa-arrow-down-wide-short' : 'fa-arrow-up-short-wide'}"></i>
          <span>${quickAdminOrderSortDir === 'desc' ? 'الأحدث أولاً' : 'الأقدم أولاً'}</span>
        </button>
      </div>
    </div>

    <!-- Search Input Bar -->
    <div style="position:relative;margin-bottom:12px">
      <i class="fa-solid fa-magnifying-glass" style="position:absolute;right:12px;top:50%;transform:translateY(-50%);color:var(--text-muted);font-size:.85rem"></i>
      <input type="text" placeholder="البحث برقم الطلب، اسم العميل، أو رقم الهاتف..." value="${quickAdminOrderSearchQuery}" oninput="setQuickAdminOrderSearchQuery(this.value)" style="width:100%;padding:9px 36px 9px 12px;border:1.5px solid var(--border);border-radius:10px;font-family:inherit;font-size:.85rem;outline:none;background:var(--card);color:var(--text)">
    </div>
  `;

  const targetEl = document.getElementById('admin-orders') || document.getElementById('tab-orders');
  if (targetEl) {
    targetEl.innerHTML = topBar + filterTabsHtml + `
    ${sortedOrdersWithIdx.length ? sortedOrdersWithIdx.map((item) => {
      var o = item.order;
      var realIdx = item.realIdx;
      var rawSt = o._status === 'done' ? 'completed' : (o._status || 'pending');
      var currSt = QUICK_ORDER_STATUSES[rawSt] || QUICK_ORDER_STATUSES.pending;

      var statusChipsHtml = Object.keys(QUICK_ORDER_STATUSES).map(stKey => {
        var info = QUICK_ORDER_STATUSES[stKey];
        var isCurrent = rawSt === stKey;
        return `<button type="button" onclick="updateQuickOrderStatusSelect(${realIdx}, '${stKey}')" style="background:${isCurrent ? info.color : info.bg};color:${isCurrent ? '#fff' : info.text};border:1.5px solid ${info.color};padding:4px 10px;border-radius:999px;font-size:.72rem;font-weight:800;cursor:pointer;display:inline-flex;align-items:center;gap:4px;font-family:inherit;transition:all .15s;box-shadow:${isCurrent ? '0 2px 8px '+info.color+'40' : 'none'}"><i class="fa-solid ${info.icon}"></i> ${info.label}</button>`;
      }).join('');

      return `
      <div class="admin-order-card" onclick="adminShowOrderDetail(${realIdx})" style="position:relative;padding-right:48px;cursor:pointer;margin-bottom:12px;border:1px solid var(--border);border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,.04)">
        <div style="position:absolute;right:0;top:0;bottom:0;width:44px;background:${currSt.bg};border-radius:10px 0 0 10px;display:flex;align-items:center;justify-content:center;font-size:1.1rem;color:${currSt.text}"><i class="fa-solid ${currSt.icon}"></i></div>
        <div class="admin-order-header" style="padding:10px 14px 4px">
          <span class="oid" style="font-size:.95rem">#${String(o.id).slice(-6)}</span>
          <span class="odate">${o.date || ''}</span>
          <span class="ostatus" style="background:${currSt.bg};color:${currSt.text};display:inline-flex;align-items:center;gap:4px;font-size:.75rem"><i class="fa-solid ${currSt.icon}"></i> ${currSt.label}</span>
        </div>
        <div class="admin-order-body" style="padding:0 14px 12px">
          <div style="display:flex;flex-wrap:wrap;gap:2px 12px;font-size:.82rem;color:var(--text);margin-bottom:4px">
            <span><i class="fa-solid fa-user" style="width:14px;color:var(--accent)"></i> ${o.customer?.name || '—'}</span>
            <span><i class="fa-solid fa-phone" style="width:14px;color:var(--accent)"></i> ${o.customer?.phone || '—'}</span>
            <span><i class="fa-solid fa-location-dot" style="width:14px;color:var(--accent)"></i> ${o.customer?.city || ''} ${o.customer?.address || ''}</span>
          </div>
          <div class="oitems">${o.items?.map(it => `${it.name} × ${it.qty}`).join(' | ') || ''}</div>
          
          <!-- Status Chips Bar -->
          <div style="margin-top:10px;padding-top:8px;border-top:1px dashed var(--border)">
            <div style="font-size:.7rem;font-weight:800;color:var(--text-muted);margin-bottom:6px;display:flex;align-items:center;gap:4px"><i class="fa-solid fa-arrows-rotate"></i> تغيير حالة الطلب:</div>
            <div style="display:flex;flex-wrap:wrap;gap:5px;align-items:center" onclick="event.stopPropagation()">
              ${statusChipsHtml}
            </div>
          </div>

          <div style="display:flex;align-items:center;justify-content:space-between;margin-top:10px">
            <div class="ototal" style="margin:0">${CURRENCY}${o.total?.toFixed(2) || '0.00'}</div>
            <div style="display:flex;gap:6px;align-items:center" onclick="event.stopPropagation()">
              <button class="admin-btn admin-btn-secondary admin-btn-sm" onclick="adminShowOrderDetail(${realIdx})" style="background:#f1f5f9;color:var(--text);padding:4px 8px;font-size:.75rem"><i class="fa-solid fa-pen-to-square"></i> التفاصيل</button>
              <button class="admin-btn admin-btn-danger admin-btn-sm" onclick="adminDeleteOrder(${realIdx})" style="padding:4px 8px;font-size:.75rem"><i class="fa-solid fa-trash"></i></button>
            </div>
          </div>
        </div>
      </div>`;
    }).join('') : '<div class="admin-empty"><i class="fa-solid fa-filter"></i><p>لا توجد طلبات بهذه الحالة</p></div>'}
  `;
  }
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
  const targetEl = document.getElementById('admin-products') || document.getElementById('tab-products');
  if (!targetEl) return;
  targetEl.innerHTML = `
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

function adminDeleteSelectedProducts() {
  const cbs = document.querySelectorAll('.admin-prod-cb:checked');
  if (!cbs.length) return;
  if (!confirm(`حذف ${cbs.length} منتج؟`)) return;
  const indices = [...cbs].map(cb => parseInt(cb.dataset.idx)).sort((a,b) => b - a);
  indices.forEach(idx => products.splice(idx, 1));
  saveProductsToLS();
  adminRefreshAll();
}

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
    <div style="background:var(--card, #fff);border-radius:18px;padding:24px;max-width:440px;width:100%;box-shadow:0 20px 40px rgba(0,0,0,.2);border:1px solid var(--border,#e2e8f0);position:relative">
      <button onclick="document.getElementById('adminCatAddModal').style.display='none'" style="position:absolute;top:14px;left:14px;background:none;border:none;font-size:1.2rem;cursor:pointer;color:#94a3b8">×</button>
      <h3 style="margin-bottom:16px;font-weight:800;font-size:1.1rem;color:var(--text,#0f172a);display:flex;align-items:center;gap:8px">
        <i class="fa-solid fa-folder-plus" style="color:var(--accent,#ef4444)"></i> إضافة تصنيف جديد
      </h3>
      <div class="admin-form-group" style="margin-bottom:12px">
        <label style="display:block;font-size:.82rem;font-weight:700;margin-bottom:4px;color:var(--text)">اسم التصنيف *</label>
        <input type="text" id="acName" placeholder="مثال: جوالات" style="width:100%;padding:10px;border:1.5px solid var(--border,#cbd5e1);border-radius:10px;font-family:inherit;box-sizing:border-box">
      </div>
      <div class="admin-form-group" style="margin-bottom:12px">
        <label style="display:block;font-size:.82rem;font-weight:700;margin-bottom:4px;color:var(--text)">صورة التصنيف</label>
        <div style="display:flex;gap:8px;align-items:center">
          <input type="text" id="acImage" placeholder="رابط الصورة أو ارفع صورة" style="flex:1;padding:10px;border:1.5px solid var(--border,#cbd5e1);border-radius:10px;font-family:inherit;box-sizing:border-box">
          <button class="admin-btn admin-btn-secondary admin-btn-sm" onclick="adminUploadCatImage()" style="padding:10px 14px"><i class="fa-solid fa-upload"></i></button>
          <img id="acPreview" style="width:40px;height:40px;border-radius:8px;object-fit:cover;display:none;border:1px solid #e2e8f0">
        </div>
      </div>
      <div class="admin-form-group" style="margin-bottom:18px">
        <label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:.85rem;font-weight:600">
          <input type="checkbox" id="acIsBrand" style="width:16px;height:16px">
          علامة تجارية (يظهر في فلتر الماركات)
        </label>
      </div>
      <div style="display:flex;gap:10px;justify-content:flex-end">
        <button class="admin-btn admin-btn-secondary" onclick="document.getElementById('adminCatAddModal').style.display='none'" style="padding:8px 16px;border-radius:10px;border:1px solid #cbd5e1;background:#f1f5f9;cursor:pointer;font-weight:700;font-family:inherit">إلغاء</button>
        <button class="admin-btn admin-btn-primary" onclick="adminAddCategory()" style="padding:8px 18px;border-radius:10px;border:none;background:var(--accent,#ef4444);color:#fff;cursor:pointer;font-weight:700;font-family:inherit"><i class="fa-solid fa-plus"></i> إضافة التصنيف</button>
      </div>
    </div>
  `;

  modal.style.display = 'flex';

  const imgInput = document.getElementById('acImage');
  if (imgInput) {
    imgInput.oninput = function() {
      const preview = document.getElementById('acPreview');
      if (this.value.trim()) { preview.src = this.value.trim(); preview.style.display = 'block'; }
      else preview.style.display = 'none';
    };
  }
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

function adminDeleteProduct(idx) {
  if (!confirm('حذف هذا المنتج؟')) return;
  products.splice(idx, 1);
  saveProductsToLS();
  adminRefreshAll();
}

function adminRenderImageList(imgs) {
  const container = document.getElementById('apImageList');
  if (!container) return;
  if (!imgs || !imgs.length) {
    container.innerHTML = '<div style="font-size:.8rem;color:var(--text-muted)">لم يتم إضافة صور بعد</div>';
    return;
  }
  let html = `<div style="margin-bottom:10px;position:relative">
    <img src="${imgs[0]}" data-src="${imgs[0]}" style="width:100%;height:130px;border-radius:10px;object-fit:cover;border:3px solid var(--accent);display:block;background:var(--card)">
    <div style="position:absolute;top:8px;right:8px;display:flex;gap:4px">
      <button type="button" onclick="adminRemoveImg(0)" style="width:28px;height:28px;border-radius:6px;border:none;background:rgba(239,68,68,0.9);color:#fff;cursor:pointer;font-size:.75rem;display:flex;align-items:center;justify-content:center"><i class="fa-solid fa-trash-can"></i></button>
      <button type="button" onclick="adminMoveImg(0,1)" ${imgs.length === 1 ? 'disabled style="opacity:.3"' : ''} style="width:28px;height:28px;border-radius:6px;border:none;background:rgba(0,0,0,0.5);color:#fff;cursor:pointer;font-size:.75rem;display:flex;align-items:center;justify-content:center"><i class="fa-solid fa-chevron-left"></i></button>
    </div>
    <div style="position:absolute;bottom:8px;right:8px;background:var(--card);padding:3px 10px;border-radius:6px;font-size:.7rem;font-weight:600;color:var(--accent);box-shadow:0 2px 8px rgba(0,0,0,0.12)">★ الصورة الرئيسية</div>
  </div>`;
  if (imgs.length > 1) {
    html += '<div style="display:flex;gap:6px;flex-wrap:wrap">';
    for (let i = 1; i < imgs.length; i++) {
      html += `<div style="position:relative;width:70px">
        <img src="${imgs[i]}" data-src="${imgs[i]}" onclick="adminSetPrimaryImg(${i})" style="width:100%;height:58px;border-radius:8px;object-fit:cover;cursor:pointer;border:2px solid var(--border);display:block">
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

function adminResetForm() {
  adminEditingId = null;
  adminLoadForm();
}

function renderAdminZones() {
  const zones = (typeof loadDeliveryZones === 'function') ? loadDeliveryZones() : [];
  const currency = (typeof CURRENCY !== 'undefined') ? CURRENCY : '₪';
  if (!zones.length) return '<p style="font-size:.8rem;color:var(--text-muted)">لا توجد مناطق توصيل</p>';
  return zones.map((z, idx) =>
    `<div style="display:flex;align-items:center;justify-content:space-between;padding:6px 8px;background:var(--bg);border-radius:6px;margin-bottom:4px;font-size:.8rem"><span><strong>${z.name}</strong> — ${currency}${z.price}</span><button onclick="adminDeleteZone(${idx})" style="background:none;border:none;color:#ef4444;cursor:pointer;font-size:.85rem"><i class="fa-solid fa-xmark"></i></button></div>`
  ).join('');
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
            <img class="admin-preview-img" id="asLogo" src="${logo || ''}" style="${logo ? 'display:block;max-width:180px;max-height:60px;width:auto;height:auto;border-radius:10px;object-fit:contain' : 'display:none'}">
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
    compressImage(file, 800, 600, function(url) {
      const logoImg = document.getElementById('asLogo');
      const rmBtn = document.getElementById('asRemoveLogoBtn');
      if (logoImg) { logoImg.src = url; logoImg.style.display = 'block'; }
      if (rmBtn) rmBtn.style.display = 'inline-block';
      
      try { localStorage.setItem('mycart_logo', url); } catch(ex) {}
      adminSettings.logo = url;
      try { localStorage.setItem('mycart_admin_settings', JSON.stringify(adminSettings)); } catch(e) {}
      
      showToast('✅ تم تغيير الشعار', 'success');
      init();
    });
  };
  input.click();
}

function adminRemoveLogo() {
  localStorage.removeItem('mycart_logo');
  delete adminSettings.logo;
  try { localStorage.setItem('mycart_admin_settings', JSON.stringify(adminSettings)); } catch(e) {}
  
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
    compressImage(file, 1200, 800, function(url) {
      try { localStorage.setItem('mycart_bg', url); } catch(ex) {}
      document.getElementById('header').style.setProperty('--header-bg', `url(${url})`);
      document.getElementById('header').classList.add('has-bg');
      showToast('✅ تم تغيير الخلفية', 'success');
    });
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

function adminRenderMarketing(subTab = 'seo') {
  const container = document.getElementById('admin-marketing') || document.getElementById('tab-marketing');
  if (!container) return;
  const data = JSON.parse(localStorage.getItem('mycart_marketing')) || {};
  const currentOrigin = window.location.origin + '/';
  
  let html = '';

  if (subTab === 'seo') {
    const bSettings = typeof loadBannerSettings === 'function' ? loadBannerSettings() : { autoplay: true, interval: 4000, aspectRatio: '2/1', borderRadius: '14px' };
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
      <div class="admin-card"><h4><i class="fa-solid fa-images"></i> البانرات الإعلانية</h4>
        <div style="background:var(--bg);padding:12px;border-radius:10px;border:1px solid var(--border);margin-bottom:12px">
          <div style="font-size:.8rem;font-weight:700;margin-bottom:8px;display:flex;align-items:center;gap:6px"><i class="fa-solid fa-sliders" style="color:var(--accent)"></i> إعدادات تحريك وتصميم البانرات</div>
          <div style="display:flex;flex-direction:column;gap:8px">
            <label style="display:flex;align-items:center;gap:8px;font-size:.78rem;font-weight:700;cursor:pointer">
              <input type="checkbox" id="admBannerAutoplay" ${bSettings.autoplay !== false ? 'checked' : ''} onchange="adminSaveBannerSettings()" style="width:16px;height:16px;accent-color:var(--accent)">
              تفعيل التحريك التلقائي للبانرات (Auto-Play)
            </label>
            <div style="display:flex;gap:8px;flex-wrap:wrap">
              <div style="flex:1;min-width:130px">
                <label style="font-size:.7rem;font-weight:700">سرعة التبديل:</label>
                <select id="admBannerInterval" onchange="adminSaveBannerSettings()" style="width:100%;padding:4px 8px;border:1px solid var(--border);border-radius:6px;font-size:.75rem;background:var(--card);color:var(--text);font-family:inherit">
                  <option value="3000" ${bSettings.interval == 3000 ? 'selected' : ''}>3 ثوانٍ (سريع)</option>
                  <option value="4000" ${bSettings.interval == 4000 || !bSettings.interval ? 'selected' : ''}>4 ثوانٍ (افتراضي)</option>
                  <option value="5000" ${bSettings.interval == 5000 ? 'selected' : ''}>5 ثوانٍ (متوسط)</option>
                  <option value="7000" ${bSettings.interval == 7000 ? 'selected' : ''}>7 ثوانٍ (بطيء)</option>
                </select>
              </div>
              <div style="flex:1;min-width:130px">
                <label style="font-size:.7rem;font-weight:700">نسبة الارتفاع:</label>
                <select id="admBannerAspectRatio" onchange="adminSaveBannerSettings()" style="width:100%;padding:4px 8px;border:1px solid var(--border);border-radius:6px;font-size:.75rem;background:var(--card);color:var(--text);font-family:inherit">
                  <option value="2.5/1" ${bSettings.aspectRatio === '2.5/1' ? 'selected' : ''}>عريض جداً (2.5 : 1)</option>
                  <option value="2/1" ${bSettings.aspectRatio === '2/1' || !bSettings.aspectRatio ? 'selected' : ''}>قياسي (2 : 1)</option>
                  <option value="16/9" ${bSettings.aspectRatio === '16/9' ? 'selected' : ''}>سينمائي (16 : 9)</option>
                </select>
              </div>
              <div style="flex:1;min-width:130px">
                <label style="font-size:.7rem;font-weight:700">شكل الحواف:</label>
                <select id="admBannerBorderRadius" onchange="adminSaveBannerSettings()" style="width:100%;padding:4px 8px;border:1px solid var(--border);border-radius:6px;font-size:.75rem;background:var(--card);color:var(--text);font-family:inherit">
                  <option value="14px" ${bSettings.borderRadius === '14px' || !bSettings.borderRadius ? 'selected' : ''}>حواف ناعمة (14px)</option>
                  <option value="0px" ${bSettings.borderRadius === '0px' ? 'selected' : ''}>حواف حادة (0px)</option>
                  <option value="24px" ${bSettings.borderRadius === '24px' ? 'selected' : ''}>حواف مستديرة (24px)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div id="admBannersList">${adminRenderBannersList(data.banners||[])}</div>
        <button class="admin-btn admin-btn-secondary admin-btn-sm" onclick="adminAddBanner()" style="margin-top:8px"><i class="fa-solid fa-plus"></i> إضافة بانر جديد</button>
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

  if (subTab === 'spinwin' && typeof admRenderSpinSegmentsList === 'function') {
    admRenderSpinSegmentsList(data.spinWin?.segments || []);
  }
}

function adminSaveBannerSettings() {
  const settings = {
    autoplay: document.getElementById('admBannerAutoplay')?.checked ?? true,
    interval: parseInt(document.getElementById('admBannerInterval')?.value || 4000),
    aspectRatio: document.getElementById('admBannerAspectRatio')?.value || '2/1',
    borderRadius: document.getElementById('admBannerBorderRadius')?.value || '14px'
  };
  localStorage.setItem('mycart_banner_settings', JSON.stringify(settings));
  if (typeof startBannerAutoScroll === 'function') {
    startBannerAutoScroll();
  }
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

function adminDeleteBanner(idx) {
  const data = JSON.parse(localStorage.getItem('mycart_marketing')) || {};
  data.banners = data.banners || [];
  data.banners.splice(idx, 1);
  try { localStorage.setItem('mycart_marketing', JSON.stringify(data)); } catch(e) {}
  adminRenderMarketing();
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

function adminRenderOrderDetailPage() {
  if (adminOrderEditMode) adminRenderOrderEditPage();
  else adminRenderOrderViewPage();
}

function adminRenderOrderViewPage() {
  const d = adminOrderEditData;
  if (!d) return;
  const currency = CURRENCY;
  const subtotal = (d.items || []).reduce((s, i) => s + (i.price || 0) * (i.qty || 1), 0);
  const disc = d.discount || 0;
  const discAmt = disc > 0 ? Math.round(subtotal * disc / 100) : 0;
  const total = subtotal - discAmt + (d.delivery || 0);
  const rawSt = d._status === 'done' ? 'completed' : (d._status || 'pending');
  const currSt = QUICK_ORDER_STATUSES[rawSt] || QUICK_ORDER_STATUSES.pending;

  const statusChipsHtml = Object.keys(QUICK_ORDER_STATUSES).map(stKey => {
    var info = QUICK_ORDER_STATUSES[stKey];
    var isCurrent = rawSt === stKey;
    return `<button type="button" onclick="updateQuickOrderStatusSelect(adminOrderEditIdx, '${stKey}'); adminOrderEditData._status = '${stKey}'; adminRenderOrderViewPage();" style="background:${isCurrent ? info.color : info.bg};color:${isCurrent ? '#fff' : info.text};border:1.5px solid ${info.color};padding:6px 14px;border-radius:999px;font-size:.78rem;font-weight:800;cursor:pointer;display:inline-flex;align-items:center;gap:6px;font-family:inherit;transition:all .15s;box-shadow:${isCurrent ? '0 3px 10px '+info.color+'40' : 'none'}"><i class="fa-solid ${info.icon}"></i> ${info.label}</button>`;
  }).join('');

  const parentTab = document.getElementById('tab-orderDetail');
  const innerContainer = document.getElementById('admin-orderDetail');
  if (parentTab) {
    parentTab.style.display = 'block';
    parentTab.classList.add('active');
  }
  const targetEl = innerContainer || parentTab;
  if (!targetEl) return;
  targetEl.style.display = 'block';
  targetEl.innerHTML = `
    <!-- Top Action Bar -->
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:10px">
      <button onclick="adminBackToOrders()" style="background:var(--card);border:1px solid var(--border);color:var(--text);padding:8px 14px;border-radius:10px;cursor:pointer;font-size:.82rem;font-weight:700;font-family:inherit;display:flex;align-items:center;gap:6px"><i class="fa-solid fa-arrow-right"></i> العودة للطلبات</button>
      <div style="display:flex;gap:8px">
        <button class="admin-btn admin-btn-primary" onclick="adminToggleOrderEditMode()" style="padding:8px 16px;border-radius:10px;font-size:.82rem;font-weight:700"><i class="fa-solid fa-pen"></i> تعديل الطلب</button>
        <button class="admin-btn admin-btn-secondary" onclick="printOrderData(adminOrderEditData, CURRENCY)" style="padding:8px 16px;border-radius:10px;font-size:.82rem;font-weight:700"><i class="fa-solid fa-print"></i> طباعة الفاتورة</button>
      </div>
    </div>

    <!-- Header Status Banner -->
    <div style="background:var(--card);border:1px solid var(--border);border-radius:14px;padding:16px;margin-bottom:20px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;box-shadow:0 2px 10px rgba(0,0,0,.03)">
      <div style="display:flex;align-items:center;gap:12px">
        <span style="background:var(--accent);color:#fff;padding:6px 14px;border-radius:8px;font-weight:900;font-size:1.05rem">#${String(d.id).slice(-6)}</span>
        <div>
          <div style="font-size:.78rem;color:var(--text-muted)">تاريخ الطلب</div>
          <div style="font-weight:800;font-size:.88rem;color:var(--text)"><i class="fa-regular fa-calendar" style="color:var(--accent)"></i> ${d.date}</div>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:10px">
        <span style="font-size:.8rem;color:var(--text-muted);font-weight:700">الحالة الحالية:</span>
        <span style="padding:6px 16px;border-radius:999px;font-size:.82rem;font-weight:900;background:${currSt.bg};color:${currSt.text};display:inline-flex;align-items:center;gap:6px;box-shadow:0 2px 8px ${currSt.color}20"><i class="fa-solid ${currSt.icon}"></i> ${currSt.label}</span>
      </div>
    </div>

    <!-- 2-Column Main Dashboard Layout -->
    <div style="display:grid;grid-template-columns:1fr 340px;gap:20px" class="order-details-grid">
      
      <!-- MAIN LEFT COLUMN: Products & Status Changer -->
      <div>
        <!-- Interactive Status Control Box -->
        <div style="background:var(--card);border:1px solid var(--border);border-radius:14px;padding:16px;margin-bottom:20px;box-shadow:0 2px 10px rgba(0,0,0,.03)">
          <div style="font-size:.82rem;font-weight:900;color:var(--text);margin-bottom:10px;display:flex;align-items:center;gap:6px"><i class="fa-solid fa-arrows-rotate" style="color:var(--accent)"></i> تغيير حالة الطلب بنقرة واحدة:</div>
          <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center">
            ${statusChipsHtml}
          </div>
        </div>

        <!-- Products Card -->
        <div style="background:var(--card);border:1px solid var(--border);border-radius:14px;padding:16px;box-shadow:0 2px 10px rgba(0,0,0,.03)">
          <div style="font-size:.9rem;font-weight:900;color:var(--text);margin-bottom:14px;display:flex;align-items:center;gap:8px"><i class="fa-solid fa-box-open" style="color:var(--accent)"></i> محتويات الطلب (${d.items?.length || 0} منتجات)</div>
          <div style="display:flex;flex-direction:column;gap:8px">
            ${(d.items || []).map(item => `
              <div style="display:flex;align-items:center;gap:12px;padding:10px 12px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px">
                <img src="${item.image || 'https://placehold.co/50x50/e2e8f0/64748b?text=' + encodeURIComponent(item.name.slice(0,2))}" style="width:48px;height:48px;border-radius:8px;object-fit:cover;flex-shrink:0;background:#e2e8f0;border:1px solid #cbd5e1">
                <div style="flex:1;min-width:0">
                  <div style="font-weight:800;font-size:.88rem;color:#1e293b;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${item.name}</div>
                  ${item.variant ? `<div style="font-weight:600;color:#64748b;font-size:.78rem;margin-top:2px">${variantSwatchHtml(item.variantData)} الخيار: ${item.variant}</div>` : ''}
                  <div style="font-size:.78rem;color:#64748b;margin-top:2px">${currency}${item.price} × <strong style="color:#1e293b">${item.qty}</strong></div>
                </div>
                <div style="font-weight:900;font-size:.98rem;color:var(--accent);flex-shrink:0">${currency}${(item.price * item.qty).toFixed(2)}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- SIDEBAR RIGHT COLUMN: Customer Info & Order Summary -->
      <div style="display:flex;flex-direction:column;gap:20px">
        <!-- Customer Info Sidebar Card -->
        <div style="background:var(--card);border:1px solid var(--border);border-radius:14px;padding:16px;box-shadow:0 2px 10px rgba(0,0,0,.03)">
          <div style="font-size:.9rem;font-weight:900;color:var(--text);margin-bottom:14px;display:flex;align-items:center;gap:8px"><i class="fa-solid fa-user-gear" style="color:var(--accent)"></i> بيانات الزبون والتوصيل</div>
          <div style="display:flex;flex-direction:column;gap:12px;font-size:.84rem">
            <div style="background:#f8fafc;padding:10px 12px;border-radius:8px;border:1px solid #f1f5f9">
              <span style="color:var(--text-muted);font-size:.74rem">الاسم الكامل</span><br>
              <strong id="ovName" style="font-size:.9rem;color:#0f172a">${d.customer?.name || '—'}</strong>
              ${d.customer?.name ? `<button onclick="copyText(document.getElementById('ovName').textContent,'الاسم')" style="background:none;border:none;color:var(--accent);cursor:pointer;font-size:.75rem;margin-right:6px"><i class="fa-regular fa-copy"></i> نسخ</button>` : ''}
            </div>
            <div style="background:#f8fafc;padding:10px 12px;border-radius:8px;border:1px solid #f1f5f9">
              <span style="color:var(--text-muted);font-size:.74rem">رقم الهاتف</span><br>
              <strong dir="ltr" id="ovPhone" style="font-size:.9rem;color:#0f172a;display:inline-block">${d.customer?.phone || '—'}</strong>
              ${d.customer?.phone ? `<button onclick="copyText(document.getElementById('ovPhone').textContent,'رقم الهاتف')" style="background:none;border:none;color:var(--accent);cursor:pointer;font-size:.75rem;margin-right:6px"><i class="fa-regular fa-copy"></i> نسخ</button>` : ''}
            </div>
            <div style="background:#f8fafc;padding:10px 12px;border-radius:8px;border:1px solid #f1f5f9">
              <span style="color:var(--text-muted);font-size:.74rem">المدينة والعنوان</span><br>
              <strong id="ovCity" style="color:#0f172a">${d.customer?.city || '—'}</strong> - <strong id="ovAddr" style="color:#0f172a">${d.customer?.address || '—'}</strong>
              ${(d.customer?.city || d.customer?.address) ? `<button onclick="copyText((d.customer?.city||'')+' '+(d.customer?.address||''),'العنوان')" style="background:none;border:none;color:var(--accent);cursor:pointer;font-size:.75rem;margin-right:6px"><i class="fa-regular fa-copy"></i> نسخ</button>` : ''}
            </div>
            ${d.deliveryZone ? `<div style="background:#f8fafc;padding:10px 12px;border-radius:8px;border:1px solid #f1f5f9"><span style="color:var(--text-muted);font-size:.74rem">منطقة التوصيل</span><br><strong style="color:#0f172a">${d.deliveryZone}</strong></div>` : ''}
            ${d.note ? `<div style="background:#fff7ed;border:1px solid #ffedd5;padding:10px 12px;border-radius:8px"><span style="color:#c2410c;font-size:.74rem;font-weight:800">📝 ملاحظة الزبون:</span><p style="font-size:.82rem;font-weight:700;color:#9a3412;margin-top:2px">${d.note}</p></div>` : ''}
          </div>
        </div>

        <!-- Order Financial Summary Card -->
        <div style="background:var(--card);border:1px solid var(--border);border-radius:14px;padding:16px;box-shadow:0 2px 10px rgba(0,0,0,.03)">
          <div style="font-size:.9rem;font-weight:900;color:var(--text);margin-bottom:12px;display:flex;align-items:center;gap:8px"><i class="fa-solid fa-calculator" style="color:var(--accent)"></i> الملخص المالي</div>
          <div style="display:flex;flex-direction:column;gap:8px;font-size:.85rem">
            <div style="display:flex;justify-content:space-between;color:#64748b"><span>المجموع الفرعي:</span><strong style="color:#1e293b">${currency}${subtotal.toFixed(2)}</strong></div>
            ${disc > 0 ? `<div style="display:flex;justify-content:space-between;color:#16a34a"><span>الخصم (${disc}%):</span><strong>-${currency}${discAmt.toFixed(2)}</strong></div>` : ''}
            ${d.delivery ? `<div style="display:flex;justify-content:space-between;color:#64748b"><span>التوصيل:</span><strong style="color:#1e293b">${currency}${d.delivery.toFixed(2)}</strong></div>` : ''}
            <div style="display:flex;justify-content:space-between;font-size:1.15rem;font-weight:900;padding-top:8px;border-top:1.5px solid var(--border);margin-top:4px;color:var(--accent)">
              <span>المجموع الكلي:</span>
              <span>${currency}${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

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
  const rawSt = d._status === 'done' ? 'completed' : (d._status || 'pending');
  const currSt = QUICK_ORDER_STATUSES[rawSt] || QUICK_ORDER_STATUSES.pending;

  const statusChipsHtml = Object.keys(QUICK_ORDER_STATUSES).map(stKey => {
    var info = QUICK_ORDER_STATUSES[stKey];
    var isCurrent = rawSt === stKey;
    return `<button type="button" onclick="updateQuickOrderStatusSelect(adminOrderEditIdx, '${stKey}'); adminOrderEditData._status = '${stKey}'; adminRenderOrderEditPage();" style="background:${isCurrent ? info.color : info.bg};color:${isCurrent ? '#fff' : info.text};border:1.5px solid ${info.color};padding:6px 14px;border-radius:999px;font-size:.78rem;font-weight:800;cursor:pointer;display:inline-flex;align-items:center;gap:6px;font-family:inherit;transition:all .15s;box-shadow:${isCurrent ? '0 3px 10px '+info.color+'40' : 'none'}"><i class="fa-solid ${info.icon}"></i> ${info.label}</button>`;
  }).join('');

  const parentTab = document.getElementById('tab-orderDetail');
  const innerContainer = document.getElementById('admin-orderDetail');
  if (parentTab) {
    parentTab.style.display = 'block';
    parentTab.classList.add('active');
  }
  const targetEl = innerContainer || parentTab;
  if (!targetEl) return;
  targetEl.style.display = 'block';
  targetEl.innerHTML = `
    <!-- Top Action Bar -->
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:10px">
      <button onclick="adminBackToOrders()" style="background:var(--card);border:1px solid var(--border);color:var(--text);padding:8px 14px;border-radius:10px;cursor:pointer;font-size:.82rem;font-weight:700;font-family:inherit;display:flex;align-items:center;gap:6px"><i class="fa-solid fa-arrow-right"></i> العودة للطلبات</button>
      <div style="display:flex;gap:8px">
        <button class="admin-btn admin-btn-primary" onclick="adminSaveOrderEdit()" style="padding:8px 18px;border-radius:10px;font-size:.82rem;font-weight:800"><i class="fa-solid fa-floppy-disk"></i> حفظ التعديلات</button>
        <button class="admin-btn admin-btn-secondary" onclick="adminToggleOrderEditMode()" style="padding:8px 16px;border-radius:10px;font-size:.82rem;font-weight:700">إلغاء التعديل</button>
      </div>
    </div>

    <!-- Header Status Banner -->
    <div style="background:var(--card);border:1px solid var(--border);border-radius:14px;padding:16px;margin-bottom:20px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;box-shadow:0 2px 10px rgba(0,0,0,.03)">
      <div style="display:flex;align-items:center;gap:12px">
        <span style="background:#ef4444;color:#fff;padding:6px 14px;border-radius:8px;font-weight:900;font-size:1.05rem">#${String(d.id).slice(-6)} (وضع التعديل)</span>
        <div>
          <div style="font-size:.78rem;color:var(--text-muted)">تاريخ الطلب</div>
          <div style="font-weight:800;font-size:.88rem;color:var(--text)"><i class="fa-regular fa-calendar" style="color:var(--accent)"></i> ${d.date}</div>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:10px">
        <span style="font-size:.8rem;color:var(--text-muted);font-weight:700">الحالة:</span>
        <span style="padding:6px 16px;border-radius:999px;font-size:.82rem;font-weight:900;background:${currSt.bg};color:${currSt.text};display:inline-flex;align-items:center;gap:6px"><i class="fa-solid ${currSt.icon}"></i> ${currSt.label}</span>
      </div>
    </div>

    <!-- 2-Column Main Dashboard Layout (Edit Mode) -->
    <div style="display:grid;grid-template-columns:1fr 340px;gap:20px" class="order-details-grid">
      
      <!-- MAIN LEFT COLUMN: Products & Status Changer -->
      <div>
        <!-- Interactive Status Control Box -->
        <div style="background:var(--card);border:1px solid var(--border);border-radius:14px;padding:16px;margin-bottom:20px;box-shadow:0 2px 10px rgba(0,0,0,.03)">
          <div style="font-size:.82rem;font-weight:900;color:var(--text);margin-bottom:10px;display:flex;align-items:center;gap:6px"><i class="fa-solid fa-arrows-rotate" style="color:var(--accent)"></i> حالة الطلب:</div>
          <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center">
            ${statusChipsHtml}
          </div>
        </div>

        <!-- Products Card Edit -->
        <div style="background:var(--card);border:1px solid var(--border);border-radius:14px;padding:16px;box-shadow:0 2px 10px rgba(0,0,0,.03)">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
            <div style="font-size:.9rem;font-weight:900;color:var(--text);display:flex;align-items:center;gap:8px"><i class="fa-solid fa-box-open" style="color:var(--accent)"></i> المنتجات في الطلب</div>
            <button class="admin-btn admin-btn-primary admin-btn-sm" onclick="openProductPicker()" style="padding:6px 12px;border-radius:8px;font-size:.78rem;font-weight:800"><i class="fa-solid fa-plus"></i> إضافة منتج</button>
          </div>
          <div id="oeItemsList" style="display:flex;flex-direction:column;gap:8px">
            ${d.items.map((item, i) => `
              <div style="display:flex;align-items:center;gap:12px;padding:10px 12px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px">
                <img src="${item.image || 'https://placehold.co/50x50/e2e8f0/64748b?text=' + encodeURIComponent(item.name.slice(0,2))}" style="width:44px;height:44px;border-radius:8px;object-fit:cover;flex-shrink:0;background:#e2e8f0">
                <div style="flex:1;min-width:0">
                  <div style="font-weight:800;font-size:.88rem;color:#1e293b;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${item.name}</div>
                  ${item.variant ? `<div style="font-weight:600;color:#64748b;font-size:.78rem">${variantSwatchHtml(item.variantData)} الخيار: ${item.variant}</div>` : ''}
                  <div style="font-size:.78rem;color:#64748b">${currency}${item.price}</div>
                </div>
                <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
                  <span style="font-size:.75rem;font-weight:700;color:var(--text-muted)">الكمية:</span>
                  <input type="number" value="${item.qty}" min="1" style="width:55px;padding:5px;border:1.5px solid var(--border);border-radius:6px;text-align:center;font-family:inherit;font-size:.85rem;font-weight:800" onchange="adminOrderEditChangeQty(${i},this.value)">
                </div>
                <button onclick="adminOrderEditRemoveItem(${i})" style="background:none;border:none;color:#ef4444;cursor:pointer;font-size:1.1rem;flex-shrink:0;padding:4px"><i class="fa-solid fa-trash-can"></i></button>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- SIDEBAR RIGHT COLUMN: Editable Customer Info & Summary -->
      <div style="display:flex;flex-direction:column;gap:20px">
        <!-- Customer Info Edit Card -->
        <div style="background:var(--card);border:1px solid var(--border);border-radius:14px;padding:16px;box-shadow:0 2px 10px rgba(0,0,0,.03)">
          <div style="font-size:.9rem;font-weight:900;color:var(--text);margin-bottom:14px;display:flex;align-items:center;gap:8px"><i class="fa-solid fa-user-pen" style="color:var(--accent)"></i> تعديل بيانات العميل</div>
          <div style="display:flex;flex-direction:column;gap:10px">
            <div>
              <label style="font-size:.75rem;font-weight:800;color:var(--text-muted);display:block;margin-bottom:3px">الاسم الكامل</label>
              <input type="text" id="oeName" value="${d.customer?.name || ''}" style="width:100%;padding:8px 10px;border:1.5px solid var(--border);border-radius:8px;font-family:inherit;font-size:.85rem;font-weight:700">
            </div>
            <div>
              <label style="font-size:.75rem;font-weight:800;color:var(--text-muted);display:block;margin-bottom:3px">رقم الهاتف</label>
              <input type="text" id="oePhone" value="${d.customer?.phone || ''}" style="width:100%;padding:8px 10px;border:1.5px solid var(--border);border-radius:8px;font-family:inherit;font-size:.85rem;font-weight:700" dir="ltr">
            </div>
            <div>
              <label style="font-size:.75rem;font-weight:800;color:var(--text-muted);display:block;margin-bottom:3px">المدينة</label>
              <input type="text" id="oeCity" value="${d.customer?.city || ''}" style="width:100%;padding:8px 10px;border:1.5px solid var(--border);border-radius:8px;font-family:inherit;font-size:.85rem;font-weight:700">
            </div>
            <div>
              <label style="font-size:.75rem;font-weight:800;color:var(--text-muted);display:block;margin-bottom:3px">العنوان التفصيلي</label>
              <input type="text" id="oeAddr" value="${d.customer?.address || ''}" style="width:100%;padding:8px 10px;border:1.5px solid var(--border);border-radius:8px;font-family:inherit;font-size:.85rem;font-weight:700">
            </div>
          </div>
        </div>

        <!-- Order Financial Summary & Discount Edit Card -->
        <div style="background:var(--card);border:1px solid var(--border);border-radius:14px;padding:16px;box-shadow:0 2px 10px rgba(0,0,0,.03)">
          <div style="font-size:.9rem;font-weight:900;color:var(--text);margin-bottom:12px;display:flex;align-items:center;gap:8px"><i class="fa-solid fa-calculator" style="color:var(--accent)"></i> الملخص والخصم</div>
          <div style="display:flex;flex-direction:column;gap:10px;font-size:.85rem">
            <div style="display:flex;align-items:center;justify-content:space-between;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:8px 10px">
              <span style="font-weight:800;color:#15803d;font-size:.8rem"><i class="fa-solid fa-tag"></i> نسبة الخصم (%)</span>
              <input type="number" id="oeDiscount" value="${disc}" min="0" max="100" style="width:65px;padding:5px;border:1.5px solid #86efac;border-radius:6px;text-align:center;font-family:inherit;font-size:.85rem;font-weight:800" onchange="adminOrderEditUpdateTotal()">
            </div>
            <div style="display:flex;justify-content:space-between;color:#64748b;margin-top:4px"><span>المجموع الفرعي:</span><strong style="color:#1e293b">${currency}${subtotal.toFixed(2)}</strong></div>
            ${d.delivery ? `<div style="display:flex;justify-content:space-between;color:#64748b"><span>التوصيل:</span><strong style="color:#1e293b">${currency}${d.delivery.toFixed(2)}</strong></div>` : ''}
            <div style="display:flex;justify-content:space-between;font-size:1.15rem;font-weight:900;padding-top:8px;border-top:1.5px solid var(--border);margin-top:4px;color:var(--accent)">
              <span>المجموع الكلي:</span>
              <span id="oeTotal">${currency}${total.toFixed(2)}</span>
            </div>
          </div>
          <button class="admin-btn admin-btn-primary" onclick="adminSaveOrderEdit()" style="width:100%;margin-top:14px;padding:10px;border-radius:8px;font-weight:900"><i class="fa-solid fa-floppy-disk"></i> حفظ التعديلات</button>
        </div>
      </div>

    </div>
  `;
}

/* ── Subscription ── */
function adminRenderSubscriptionTab() {
  var container = document.getElementById('admin-subscription') || document.getElementById('adminSubscriptionTabContent') || document.getElementById('tab-subscription');
  if (!container) return;
  var info = getFeeInfo();
  var plans = { free:'مجانية', monthly:'شهرية', annual:'سنوية VIP' };
  var planLabel = plans[info.plan] || info.plan;
  var isFree = info.plan === 'free';
  var statusColor = isFree && info.accrued >= info.limit ? '#ef4444' : '#10b981';
  var sett = getAgencySettings();
  var freeFee = sett.freeFee || '2', monthlyFee = sett.monthlyFee || '100', annualFee = sett.annualFee || '1000';
  var suspDate = localStorage.getItem('mycart_fee_threshold_date');
  var daysLeft = '';
  if (suspDate && isFree) { var diff = Math.ceil((new Date(suspDate) - new Date()) / 86400000); daysLeft = diff > 0 ? 'مهلة '+diff+' يوم' : '⚠️ منتهي!'; }
  var pct = isFree && info.accrued > 0 ? Math.min(100, Math.round((info.accrued/info.limit)*100)) : 0;
  container.innerHTML = ''
    + '<div class="sub-hero"><div style="position:relative;z-index:1">'
    + '<div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:10px;margin-bottom:14px">'
    + '<div><span style="display:inline-flex;align-items:center;gap:4px;font-size:.65rem;background:#f1f5f9;color:#475569;padding:3px 10px;border-radius:999px;font-weight:800;margin-bottom:4px"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> الاشتراك والفوترة</span>'
    + '<h2 style="font-size:1.2rem;font-weight:1000;margin:0;color:#0f172a">'+planLabel+'</h2>'
    + '<p style="font-size:.75rem;color:#64748b;margin:1px 0 0">'+(isFree?'الخطة المجانية • '+freeFee+' ₪ رسم لكل طلب':'إعفاء كامل من عمولات الطلبات')+'</p></div>'
    + '<a href="../../agency/index.html" target="_blank" style="display:inline-flex;align-items:center;gap:4px;padding:6px 12px;border-radius:8px;background:#f1f5f9;color:#1e293b;font-weight:700;font-size:.72rem;text-decoration:none;border:1px solid #e2e8f0"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg> منصة الشركة</a></div>'
    + '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:8px">'
    + '<div class="sub-hero-stat"><div class="label">إجمالي الطلبات</div><div class="value">'+info.count+'</div></div>'
    + (isFree ? '<div class="sub-hero-stat"><div class="label">الرسوم المتراكمة</div><div class="value" style="color:'+statusColor+'">'+info.accrued+' / '+info.limit+' ₪</div></div>' : '<div class="sub-hero-stat"><div class="label">حالة العمولات</div><div class="value" style="color:#10b981">0 ₪ (إعفاء)</div></div>')
    + (daysLeft ? '<div class="sub-hero-stat"><div class="label">المهلة</div><div class="value" style="color:'+statusColor+'">'+daysLeft+'</div></div>' : '<div class="sub-hero-stat"><div class="label">الحالة</div><div class="value" style="color:#10b981">نشط</div></div>')
    + '</div></div></div>'
    + (isFree && info.accrued > 0 ? '<div class="sub-fee-bar"><div style="display:flex;justify-content:space-between;align-items:center"><div><span style="font-weight:800;font-size:.8rem;color:#0f172a">استهلاك حد الطلبات</span><br><span style="font-size:.65rem;color:#64748b">'+info.accrued+' ₪ من أصل '+info.limit+' ₪</span></div><span style="font-size:1rem;font-weight:1000;color:'+statusColor+'">'+pct+'%</span></div><div class="track"><div class="fill" style="width:'+pct+'%;background:'+statusColor+'"></div></div>'+(info.accrued>=info.limit?'<button onclick="paySubscriptionFees();setTimeout(adminRenderSubscriptionTab,300)" style="width:100%;margin-top:10px;padding:9px;border:none;border-radius:10px;background:linear-gradient(135deg,#06b6d4,#0891b2);color:#fff;font-weight:900;font-size:.78rem;cursor:pointer;font-family:inherit;display:flex;align-items:center;justify-content:center;gap:6px;box-shadow:0 3px 10px rgba(6,182,212,.25)"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="1" y="5" width="22" height="15" rx="2"/></svg> تسديد '+info.accrued+' ₪ الآن</button>':'')+'</div>' : '')
    + '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px">'
    // Free
    + '<div class="sub-plan-card'+(info.plan==='free'?' active':'')+'">'
    + (info.plan==='free'?'<span class="sub-plan-badge" style="position:absolute;top:-8px;left:14px">✓ خطتك الحالية</span>':'')
    + '<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px"><div style="width:34px;height:34px;border-radius:10px;background:linear-gradient(135deg,#f1f5f9,#e2e8f0);display:flex;align-items:center;justify-content:center"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg></div><div><h3 style="font-size:.9rem;font-weight:900;margin:0;color:#0f172a">مجانية</h3><p style="font-size:.65rem;color:#64748b;margin:0">بدون تكاليف شهرية</p></div></div>'
    + '<div class="price">0 ₪<span>/ شهرياً</span></div>'
    + '<ul><li><i class="fa-solid fa-check"></i> متجر إلكتروني متكامل</li><li><i class="fa-solid fa-check"></i> <strong>'+freeFee+' ₪</strong> رسم لكل طلب</li><li><i class="fa-solid fa-check"></i> منتجات وتصنيفات بلا حدود</li><li><i class="fa-solid fa-check"></i> استقبال طلبات بالواتساب</li></ul>'
    + (info.plan!=='free'?'<button onclick="adminSwitchPlan(\'free\')" style="width:100%;padding:8px;border:1.5px solid #e2e8f0;border-radius:10px;background:transparent;color:#1e293b;font-weight:800;font-size:.75rem;cursor:pointer;font-family:inherit">التبديل إلى المجانية</button>':'<div style="width:100%;padding:8px;border-radius:10px;background:#f0fdf4;color:#10b981;font-weight:900;font-size:.75rem;text-align:center">✓ خطتك الحالية</div>')
    + '</div>'
    // Monthly
    + '<div class="sub-plan-card recommended'+(info.plan==='monthly'?' active':'')+'">'
    + (info.plan==='monthly'?'<span class="sub-plan-badge" style="position:absolute;top:-8px;left:14px">✓ خطتك الحالية</span>':'<span style="position:absolute;top:-8px;left:14px;background:linear-gradient(135deg,#3b82f6,#2563eb);color:#fff;font-size:.55rem;font-weight:900;padding:3px 12px;border-radius:999px;box-shadow:0 2px 8px rgba(59,130,246,.25)">المفضلة</span>')
    + '<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px"><div style="width:34px;height:34px;border-radius:10px;background:linear-gradient(135deg,#dbeafe,#bfdbfe);display:flex;align-items:center;justify-content:center"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div><div><h3 style="font-size:.9rem;font-weight:900;margin:0;color:#0f172a">شهرية</h3><p style="font-size:.65rem;color:#64748b;margin:0">إلغاء عمولة الطلبات</p></div></div>'
    + '<div class="price">'+monthlyFee+' ₪<span>/ شهرياً</span></div>'
    + '<ul><li><i class="fa-solid fa-check"></i> <strong>0 ₪ عمولة على الطلبات</strong></li><li><i class="fa-solid fa-check"></i> طلبات ومنتجات غير محدودة</li><li><i class="fa-solid fa-check"></i> ميزات التسويق كاملة</li><li><i class="fa-solid fa-check"></i> دعم فني مباشر</li></ul>'
    + (info.plan!=='monthly'?'<button onclick="adminSwitchPlan(\'monthly\')" style="width:100%;padding:8px;border:none;border-radius:10px;background:linear-gradient(135deg,#3b82f6,#2563eb);color:#fff;font-weight:900;font-size:.75rem;cursor:pointer;font-family:inherit;box-shadow:0 3px 10px rgba(59,130,246,.25)">اشترك شهرياً</button>':'<div style="width:100%;padding:8px;border-radius:10px;background:#f0fdf4;color:#10b981;font-weight:900;font-size:.75rem;text-align:center">✓ خطتك الحالية</div>')
    + '</div>'
    // Annual
    + '<div class="sub-plan-card'+(info.plan==='annual'?' active':'')+'">'
    + (info.plan==='annual'?'<span class="sub-plan-badge" style="position:absolute;top:-8px;left:14px">✓ خطتك الحالية</span>':'')
    + '<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px"><div style="width:34px;height:34px;border-radius:10px;background:linear-gradient(135deg,#fef3c7,#fde68a);display:flex;align-items:center;justify-content:center"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></div><div><h3 style="font-size:.9rem;font-weight:900;margin:0;color:#0f172a">سنوية VIP</h3><p style="font-size:.65rem;color:#64748b;margin:0">الأفضل توفيراً</p></div></div>'
    + '<div class="price">'+annualFee+' ₪<span>/ سنوياً</span></div>'
    + '<ul><li><i class="fa-solid fa-check"></i> <strong>توفير 200+ ₪ سنوياً</strong></li><li><i class="fa-solid fa-check"></i> <strong>0 ₪ عمولة (إعفاء كامل)</strong></li><li><i class="fa-solid fa-check"></i> نطاق خاص مجاني</li><li><i class="fa-solid fa-check"></i> دعم VIP وتخصيص ثيمات</li></ul>'
    + (info.plan!=='annual'?'<button onclick="adminSwitchPlan(\'annual\')" style="width:100%;padding:8px;border:none;border-radius:10px;background:linear-gradient(135deg,#1e293b,#0f172a);color:#fff;font-weight:900;font-size:.75rem;cursor:pointer;font-family:inherit;box-shadow:0 3px 10px rgba(15,23,42,.15)">اشترك سنوياً</button>':'<div style="width:100%;padding:8px;border-radius:10px;background:#f0fdf4;color:#10b981;font-weight:900;font-size:.75rem;text-align:center">✓ خطتك الحالية</div>')
    + '</div></div>'
    // History
    + '<div style="background:#fff;border:1px solid #e2e8f0;border-radius:14px;padding:14px 16px;margin-top:14px">'
    + '<h4 style="font-weight:900;margin:0 0 10px;display:flex;align-items:center;gap:6px;color:#0f172a;font-size:.85rem"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> سجل الاشتراك</h4>'
    + renderSubscriptionLog()
    + '</div>';
}
function renderSubscriptionLog() {
  var log = []; try { var r = localStorage.getItem('mycart_subscription_log'); if (r) log = JSON.parse(r); } catch(e) {}
  if (!log.length) return '<p style="font-size:.75rem;color:#94a3b8;text-align:center;padding:10px 0">لا توجد حركات اشتراك بعد</p>';
  return '<div style="display:flex;flex-direction:column;gap:3px">'+log.slice().reverse().map(function(e){
    var icon = e.action === 'plan_change' ? 'fa-arrows-rotate' : e.action === 'payment' ? 'fa-wallet' : 'fa-circle-info';
    var color = e.action === 'plan_change' ? '#3b82f6' : e.action === 'payment' ? '#10b981' : '#64748b';
    return '<div style="display:flex;align-items:center;gap:8px;padding:6px 10px;background:#f8fafc;border-radius:8px;font-size:.75rem">'
      + '<span style="width:24px;height:24px;border-radius:50%;background:'+color+'15;color:'+color+';display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="fa-solid '+icon+'" style="font-size:.6rem"></i></span>'
      + '<div style="flex:1"><div style="font-weight:700;font-size:.75rem">'+e.details+'</div><div style="font-size:.62rem;color:#94a3b8">'+e.date+'</div></div></div>';
  }).join('')+'</div>';
}
function addSubscriptionLog(action, details) {
  var log = []; try { var r = localStorage.getItem('mycart_subscription_log'); if (r) log = JSON.parse(r); } catch(e) {}
  log.push({ action:action, details:details, date:new Date().toLocaleDateString('ar-SA')+' '+new Date().toLocaleTimeString('ar-SA',{hour:'2-digit',minute:'2-digit'}) });
  try { localStorage.setItem('mycart_subscription_log', JSON.stringify(log)); } catch(e) {}
}
function adminSwitchPlan(plan) {
  var plans = { free:'مجانية', monthly:'شهرية', annual:'سنوية VIP' };
  if (plan === localStorage.getItem('mycart_subscription_plan')) { showAlertModal('أنت مشترك في هذه الخطة بالفعل.'); return; }
  showConfirmModal('التبديل إلى الخطة <strong>'+plans[plan]+'</strong>؟', function(){
    var oldPlan = localStorage.getItem('mycart_subscription_plan') || 'free';
    localStorage.setItem('mycart_subscription_plan', plan);
    if (plan !== 'free') { localStorage.removeItem('mycart_free_orders_count'); localStorage.removeItem('mycart_fee_threshold_date'); localStorage.removeItem('mycart_store_suspended'); }
    addSubscriptionLog('plan_change', 'التبديل من '+(plans[oldPlan]||oldPlan)+' ← '+plans[plan]);
    showAlertModal('✅ تم التبديل إلى '+plans[plan]+' بنجاح!');
    adminRenderSubscriptionTab();
  });
}
function openSubscriptionSheet() {
  var sheet = document.getElementById('subscriptionSheet');
  if (!sheet) return;
  sheet.classList.add('open');
  var cnt = document.getElementById('subscriptionSheetContent');
  if (!cnt) return;
  var info = getFeeInfo();
  var plans = { free:'مجانية', monthly:'شهرية', annual:'سنوية VIP' };
  var planLabel = plans[info.plan] || info.plan;
  var isFree = info.plan === 'free';
  var statusColor = isFree && info.accrued >= info.limit ? '#ef4444' : '#10b981';
  var sett = getAgencySettings();
  var freeFee = sett.freeFee || '2', monthlyFee = sett.monthlyFee || '100', annualFee = sett.annualFee || '1000';
  var pct = isFree && info.accrued > 0 ? Math.min(100, Math.round((info.accrued/info.limit)*100)) : 0;
  var suspDate = localStorage.getItem('mycart_fee_threshold_date');
  var daysLeft = '';
  if (suspDate && isFree) { var diff = Math.ceil((new Date(suspDate) - new Date()) / 86400000); daysLeft = diff > 0 ? 'مهلة '+diff+' يوم' : '⚠️ منتهي!'; }
  cnt.innerHTML = '<div style="padding:4px 0">'
    + '<div style="background:#fff;border:1.5px solid #e2e8f0;border-radius:16px;padding:16px 18px;margin-bottom:14px;box-shadow:0 2px 12px rgba(0,0,0,.03)">'
    + '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;flex-wrap:wrap;gap:6px">'
    + '<div><h3 style="font-size:1.1rem;font-weight:1000;margin:0;color:#0f172a">'+planLabel+'</h3><p style="font-size:.72rem;color:#64748b;margin:0">'+(isFree?'الخطة المجانية • رسم '+freeFee+' ₪ لكل طلب':'إعفاء من عمولات الطلبات')+'</p></div>'
    + '<div style="display:flex;gap:8px;align-items:center">'
    + '<span style="font-size:.7rem;background:#f1f5f9;padding:3px 10px;border-radius:999px;color:#475569;font-weight:700">الطلبات: '+info.count+'</span>'
    + (daysLeft ? '<span style="font-size:.7rem;background:#f1f5f9;padding:3px 10px;border-radius:999px;color:'+statusColor+';font-weight:700">'+daysLeft+'</span>' : '')
    + '</div></div>'
    + (isFree && info.accrued > 0 ? '<div style="background:#f8fafc;border-radius:10px;padding:10px 12px"><div style="display:flex;justify-content:space-between;font-size:.78rem;font-weight:700"><span>الرسوم المتراكمة</span><span style="color:'+statusColor+'">'+info.accrued+' / '+info.limit+' ₪</span></div><div style="height:6px;background:#e2e8f0;border-radius:999px;overflow:hidden;margin-top:6px"><div style="width:'+pct+'%;height:100%;background:'+statusColor+';border-radius:999px"></div></div>'+(info.accrued>=info.limit?'<button onclick="paySubscriptionFees();setTimeout(function(){openSubscriptionSheet();location.reload();},500)" style="width:100%;margin-top:8px;padding:8px;border:none;border-radius:8px;background:linear-gradient(135deg,#06b6d4,#0891b2);color:#fff;font-weight:800;font-size:.75rem;cursor:pointer;font-family:inherit;display:flex;align-items:center;justify-content:center;gap:6px"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="1" y="5" width="22" height="15" rx="2"/></svg> تسديد '+info.accrued+' ₪</button>':'')+'</div>' : '')
    + '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:8px">'
    + '<div style="background:#fff;border:1.5px solid '+(info.plan==='free'?'#10b981':'#e2e8f0')+';border-radius:12px;padding:12px;text-align:center">'
    + '<div style="font-size:.85rem;font-weight:900">مجانية</div><div style="font-size:1.1rem;font-weight:1000;margin:4px 0">0 ₪</div>'
    + '<div style="font-size:.6rem;color:#64748b;margin-bottom:6px">/ شهرياً</div>'
    + (info.plan!=='free'?'<button onclick="adminSwitchPlan(\'free\')" style="width:100%;padding:6px;border:1.5px solid #e2e8f0;border-radius:8px;background:transparent;color:#1e293b;font-weight:800;font-size:.65rem;cursor:pointer;font-family:inherit">تبديل</button>':'<div style="font-size:.6rem;color:#10b981;font-weight:800">✓ حالي</div>')
    + '</div>'
    + '<div style="background:#fff;border:1.5px solid '+(info.plan==='monthly'?'#10b981':'#3b82f6')+';border-radius:12px;padding:12px;text-align:center;position:relative">'
    + '<span style="position:absolute;top:-6px;left:50%;transform:translateX(-50%);background:#3b82f6;color:#fff;font-size:.5rem;font-weight:900;padding:2px 8px;border-radius:999px">شائع</span>'
    + '<div style="font-size:.85rem;font-weight:900;margin-top:4px">شهرية</div><div style="font-size:1.1rem;font-weight:1000;margin:4px 0">'+monthlyFee+' ₪</div>'
    + '<div style="font-size:.6rem;color:#64748b;margin-bottom:6px">/ شهرياً</div>'
    + (info.plan!=='monthly'?'<button onclick="adminSwitchPlan(\'monthly\')" style="width:100%;padding:6px;border:none;border-radius:8px;background:linear-gradient(135deg,#3b82f6,#2563eb);color:#fff;font-weight:800;font-size:.65rem;cursor:pointer;font-family:inherit;box-shadow:0 2px 6px rgba(59,130,246,.25)">اشتراك</button>':'<div style="font-size:.6rem;color:#10b981;font-weight:800">✓ حالي</div>')
    + '</div>'
    + '<div style="background:#fff;border:1.5px solid '+(info.plan==='annual'?'#10b981':'#e2e8f0')+';border-radius:12px;padding:12px;text-align:center">'
    + '<div style="font-size:.85rem;font-weight:900">سنوية VIP</div><div style="font-size:1.1rem;font-weight:1000;margin:4px 0">'+annualFee+' ₪</div>'
    + '<div style="font-size:.6rem;color:#64748b;margin-bottom:6px">/ سنوياً</div>'
    + (info.plan!=='annual'?'<button onclick="adminSwitchPlan(\'annual\')" style="width:100%;padding:6px;border:none;border-radius:8px;background:linear-gradient(135deg,#1e293b,#0f172a);color:#fff;font-weight:800;font-size:.65rem;cursor:pointer;font-family:inherit">اشتراك</button>':'<div style="font-size:.6rem;color:#10b981;font-weight:800">✓ حالي</div>')
    + '</div></div></div>'
    + '<div style="background:#fff;border:1px solid #e2e8f0;border-radius:14px;padding:12px 14px">'
    + '<h4 style="font-weight:900;margin:0 0 8px;font-size:.8rem;display:flex;align-items:center;gap:6px;color:#0f172a"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> سجل الاشتراك</h4>'
    + renderSubscriptionLog()+'</div></div>';
}
function closeSubscriptionSheet() {
  var sheet = document.getElementById('subscriptionSheet');
  if (sheet) sheet.classList.remove('open');
}

