// FAST7 Agency Dashboard JavaScript Engine (With Suspension & Payment Reminder Controls)

function checkAgencyAuth() {
  const isLogged = localStorage.getItem('mycart_agency_logged');
  if (!isLogged) {
    try { localStorage.setItem('mycart_agency_logged', 'true'); } catch(e) {}
  }
}

function agencyLogout() {
  localStorage.removeItem('mycart_agency_logged');
  window.location.href = 'login.html';
}

var sdCurrentStore = null;

function openStoreDetailsPage(storeId) {
  var tab = document.getElementById('tab-store-details');
  if (!tab) { window.location.href = 'store-details.html?id=' + encodeURIComponent(storeId); return; }

  var rawStores = localStorage.getItem('mycart_agency_stores_list');
  var stores = [
    { id:'default', name:localStorage.getItem('mycart_store_name')||'متجري الرئيسي (Default)', subdomain:'my-store', ownerName:'أحمد محمود', ownerEmail:'owner@fast7.com', ownerPhone:'0590000000', plan:localStorage.getItem('mycart_subscription_plan')||'free', status:'active', ordersCount:parseInt(localStorage.getItem('mycart_free_orders_count')||'0',10), depositedAmount:parseFloat(localStorage.getItem('mycart_store_deposited_default')||'100') }
  ];
  if (rawStores) { try { stores = JSON.parse(rawStores); } catch(e) {} }
  var st = stores.find(function(s){return String(s.id)===String(storeId);}) || stores[0];
  sdCurrentStore = st;

  const elName = document.getElementById('sdStoreName'); if (elName) elName.textContent = st.name;
  const elSub = document.getElementById('sdSubdomain'); if (elSub) elSub.textContent = 'https://'+st.subdomain+'.fast7.com';
  const elOwner = document.getElementById('sdOwner'); if (elOwner) elOwner.textContent = st.ownerName || 'صاحب المتجر';
  const elOwnerContact = document.getElementById('sdOwnerContact'); if (elOwnerContact) elOwnerContact.textContent = (st.ownerPhone || '0590000000')+' | '+(st.ownerEmail || 'admin@store.com');

  var plan = st.plan || 'free';
  const elPlanSelect = document.getElementById('sdPlanSelect'); if (elPlanSelect) elPlanSelect.value = plan;
  const elPlanName = document.getElementById('sdPlanName'); if (elPlanName) elPlanName.textContent = plan==='annual' ? 'سنوية VIP' : plan==='monthly' ? 'شهرية' : 'مجانية';

  var cfg = st.config || {};
  const elCfgFree = document.getElementById('sdCfgFree'); if (elCfgFree) elCfgFree.value = cfg.freeFee || '2';
  const elCfgLimit = document.getElementById('sdCfgLimit'); if (elCfgLimit) elCfgLimit.value = cfg.feeLimit || '100';
  const elCfgMonthly = document.getElementById('sdCfgMonthly'); if (elCfgMonthly) elCfgMonthly.value = cfg.monthlyFee || '100';
  const elCfgAnnual = document.getElementById('sdCfgAnnual'); if (elCfgAnnual) elCfgAnnual.value = cfg.annualFee || '1000';

  var orders = st.ordersCount || (st.id==='default' ? parseInt(localStorage.getItem('mycart_free_orders_count')||'0',10) : 0);
  var rate = plan==='free' ? 2 : 0;
  var accrued = orders * rate;
  var deposited = st.depositedAmount || (st.id==='default' ? parseFloat(localStorage.getItem('mycart_store_deposited_default')||'100') : 0);
  var net = deposited - accrued;
  const elBal = document.getElementById('sdBalance'); if (elBal) elBal.textContent = (net>=0?'+':'')+net+' ₪';
  const elDep = document.getElementById('sdDeposited'); if (elDep) elDep.textContent = deposited;
  const elAcc = document.getElementById('sdAccrued'); if (elAcc) elAcc.textContent = accrued;

  // Status badge + suspend btn
  var suspended = (st.status==='suspended') || (st.id==='default' && localStorage.getItem('mycart_store_suspended')==='true');
  var badge = document.getElementById('sdStatusBadge');
  if (badge) {
    if (suspended) { badge.textContent='⛔ موقوف'; badge.style.background='#fee2e2';badge.style.color='#ef4444'; }
    else { badge.textContent='🟢 نشط'; badge.style.background='#eef7e9';badge.style.color='#3b610c'; }
  }
  var sb = document.getElementById('sdSuspendBtn');
  if (sb) {
    if (suspended) { sb.innerHTML='<i class="fa-solid fa-circle-check"></i> إعادة تفعيل'; sb.style.background='#10b981'; }
    else { sb.innerHTML='<i class="fa-solid fa-ban"></i> إيقاف'; sb.style.background='#ef4444'; }
  }

  // Suspension banner
  var banner = document.getElementById('sdSuspBanner');
  if (banner) {
    banner.style.display = suspended ? 'flex' : 'none';
    if (suspended) {
      const elReason = document.getElementById('sdSuspReason');
      if (elReason) elReason.textContent = st.suspendReason || 'مستحقات مالية';
    }
  }

  // Deposits table
  var rawDep = localStorage.getItem('mycart_deposits_log_'+st.id);
  var deps = [];
  if (rawDep) { try { deps = JSON.parse(rawDep); } catch(e){} }
  // If no deposit log exists yet, create the initial balance entry once
  if (!deps.length && deposited > 0) {
    deps = [{date:'2026/07/23 10:00 AM',amount:deposited,method:'تحويـل بنكي / كاش',notes:'إيداع رصيد ابتدائي'}];
    try { localStorage.setItem('mycart_deposits_log_'+st.id, JSON.stringify(deps)); } catch(e) {}
  }
  var depBody = document.getElementById('sdDepositsBody');
  if (depBody) {
    depBody.innerHTML = deps.map(function(d){return '<tr><td>'+d.date+'</td><td><strong style="color:var(--fast7-emerald)">+'+d.amount+' ₪</strong></td><td>'+d.method+'</td><td>'+d.notes+'</td></tr>';}).join('');
  }

  // Orders table
  var ob = document.getElementById('sdOrdersBody');
  if (ob) {
    if (orders===0) ob.innerHTML='<tr><td colspan="4" style="text-align:center;color:var(--text-gray);padding:24px">لا توجد طلبات بعد</td></tr>';
    else { var html=''; for(var i=1;i<=orders;i++)html+='<tr><td>#ORD-100'+i+'<br><small style="color:var(--text-gray)">2026/07/23</small></td><td>زبائن المتجر</td><td><strong>150 ₪</strong></td><td><strong style="color:'+(rate>0?'var(--fast7-gold)':'var(--fast7-emerald)')+'">'+rate+' ₪</strong></td></tr>'; ob.innerHTML=html; }
  }

  switchDashTab('tab-store-details', null);
  var targetTab = document.getElementById('tab-store-details');
  if (targetTab) {
    targetTab.classList.add('active');
    targetTab.style.display = 'block';
  }
  var allBtns = document.querySelectorAll('.sidebar-btn');
  allBtns.forEach(function(b){b.classList.remove('active');});
  var storesBtn = document.querySelector('.sidebar-btn[onclick*="tab-stores"]');
  if (storesBtn) storesBtn.classList.add('active');
  location.hash = 'store-details/' + storeId;
}

function sdPreviewStore() { if (!sdCurrentStore) return; previewStore(sdCurrentStore); }

function deleteStoreQuick(storeId, storeName) {
  if (storeId === 'default') { showAlertModal('⚠️ لا يمكن حذف المتجر الرئيسي'); return; }
  var confirmMsg = 'هل أنت متأكد من حذف المتجر "' + storeName + '" نهائياً؟\n\nهذا الإجراء لا يمكن التراجع عنه!';
  if (!confirm(confirmMsg)) return;
  var token = localStorage.getItem('mycart_auth_token');
  fetch('http://localhost:8080/api/stores/' + storeId, {
    method: 'DELETE',
    headers: { 'Authorization': 'Bearer ' + (token || '') }
  }).then(function(r) {
    if (r.ok) return r.json();
    throw new Error('Delete failed');
  }).then(function() {
    var raw = localStorage.getItem('mycart_agency_stores_list');
    if (raw) {
      try {
        var stores = JSON.parse(raw);
        stores = stores.filter(function(s) { return String(s.id) !== String(storeId); });
        localStorage.setItem('mycart_agency_stores_list', JSON.stringify(stores));
      } catch(e) {}
    }
    showAlertModal('🗑️ تم حذف المتجر "' + storeName + '"');
    loadDashboardData();
  }).catch(function() {
    showAlertModal('⚠️ فشل الحذف. السيرفر مش شغال؟');
  });
}

function sdDeleteStore() {
  if (!sdCurrentStore) return;
  var store = sdCurrentStore;
  if (store.id === 'default') {
    showAlertModal('⚠️ لا يمكن حذف المتجر الرئيسي');
    return;
  }
  var confirmMsg = 'هل أنت متأكد من حذف المتجر "' + store.name + '" نهائياً؟\n\nسيتم حذف:\n- جميع المنتجات\n- جميع الطلبات\n- جميع العملاء\n- ملفات المتجر\n\nهذا الإجراء لا يمكن التراجع عنه!';
  if (!confirm(confirmMsg)) return;
  var secondConfirm = prompt('اكتب "حذف" لتأكيد حذف المتجر "' + store.name + '":');
  if (secondConfirm !== 'حذف') {
    showAlertModal('❌ تم إلغاء الحذف');
    return;
  }
  var token = localStorage.getItem('mycart_auth_token');
  fetch('http://localhost:8080/api/stores/' + store.id, {
    method: 'DELETE',
    headers: { 'Authorization': 'Bearer ' + (token || '') }
  }).then(function(r) {
    if (r.ok) return r.json();
    throw new Error('Delete failed');
  }).then(function(result) {
    // Remove from stores list
    var raw = localStorage.getItem('mycart_agency_stores_list');
    if (raw) {
      try {
        var stores = JSON.parse(raw);
        stores = stores.filter(function(s) { return String(s.id) !== String(store.id); });
        localStorage.setItem('mycart_agency_stores_list', JSON.stringify(stores));
      } catch(e) {}
    }
    showAlertModal('🗑️ تم حذف المتجر "' + store.name + '" نهائياً');
    loadDashboardData();
    switchDashTab('tab-stores', null);
  }).catch(function() {
    showAlertModal('⚠️ فشل حذف المتجر. السيرفر مش شغال؟');
  });
}

function sdChangeStorePassword() {
  if (!sdCurrentStore) return;
  var passInput = document.getElementById('sdStoreNewPass');
  if (!passInput || !passInput.value.trim()) {
    showAlertModal('⚠️ ادخل كلمة سر جديدة');
    return;
  }
  var newPass = passInput.value.trim();
  if (newPass.length < 4) {
    showAlertModal('⚠️ كلمة السر يجب أن تكون 4 أحرف على الأقل');
    return;
  }
  var storeId = sdCurrentStore.id;
  var token = localStorage.getItem('mycart_auth_token');
  fetch('http://localhost:8080/api/stores/' + storeId + '/auth/change-password', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + (token || '') },
    body: JSON.stringify({ password: newPass })
  }).then(function(r) {
    if (r.ok) {
      showAlertModal('🔑 تم تغيير كلمة سر المتجر بنجاح!\nكلمة السر الجديدة: ' + newPass);
      passInput.value = '';
    } else {
      showAlertModal('⚠️ فشل تغيير كلمة السر');
    }
  }).catch(function() {
    showAlertModal('⚠️ السيرفر غير متاح');
  });
}
function sdDepositMoney() { if (!sdCurrentStore) return; depositStoreBalance(sdCurrentStore.id); setTimeout(function(){openStoreDetailsPage(sdCurrentStore.id);},200); }
function sdChangePlan(newPlan) { if (!sdCurrentStore) return; changeStorePlan(sdCurrentStore.id, newPlan); setTimeout(function(){openStoreDetailsPage(sdCurrentStore.id);},200); }

function sdToggleSuspend() {
  if (!sdCurrentStore) return;
  var id = sdCurrentStore.id;
  var isSusp = (sdCurrentStore.status==='suspended') || (id==='default' && localStorage.getItem('mycart_store_suspended')==='true');
  if (isSusp) {
    if (id==='default') {
      localStorage.setItem('mycart_store_suspended', 'false');
      localStorage.removeItem('mycart_store_suspend_reason');
      sdCurrentStore.status = 'active';
      xhrAsync('POST', 'http://localhost:8080/api/stores/default/data', {status: {status: 'active'}});
    } else {
      var raw = localStorage.getItem('mycart_agency_stores_list');
      var stores = [];
      if (raw) { try { stores = JSON.parse(raw); } catch(e){} }
      var st = stores.find(function(s){return String(s.id)===String(id);});
      if (st) {
        st.status = 'active';
        delete st.suspendReason;
        localStorage.setItem('mycart_agency_stores_list', JSON.stringify(stores));
        sdCurrentStore = st;
        xhrAsync('POST', 'http://localhost:8080/api/stores/' + id + '/data', {status: {status: 'active'}});
      }
    }
    sdCurrentStore.status = 'active';
    showAlertModal('🟢 تم إعادة التفعيل!');
    openStoreDetailsPage(id);
    return;
  }
  showSuspendModal(function(reason) {
    if (!reason) return;
    if (id==='default') {
      localStorage.setItem('mycart_store_suspended', 'true');
      localStorage.setItem('mycart_store_suspend_reason', reason);
      sdCurrentStore.status = 'suspended';
      xhrAsync('POST', 'http://localhost:8080/api/stores/default/data', {status: {status: 'suspended', suspendReason: reason}});
    } else {
      var raw = localStorage.getItem('mycart_agency_stores_list');
      var stores = [];
      if (raw) { try { stores = JSON.parse(raw); } catch(e){} }
      var st = stores.find(function(s){return String(s.id)===String(id);});
      if (st) {
        st.status = 'suspended';
        st.suspendReason = reason;
        localStorage.setItem('mycart_agency_stores_list', JSON.stringify(stores));
        sdCurrentStore = st;
        xhrAsync('POST', 'http://localhost:8080/api/stores/' + id + '/data', {status: {status: 'suspended', suspendReason: reason}});
      }
    }
    openStoreDetailsPage(id);
  });
}

function sdSaveConfig() {
  if (!sdCurrentStore) return;
  var config = {
    freeFee: document.getElementById('sdCfgFree').value || '2',
    feeLimit: document.getElementById('sdCfgLimit').value || '100',
    monthlyFee: document.getElementById('sdCfgMonthly').value || '100',
    annualFee: document.getElementById('sdCfgAnnual').value || '1000'
  };
  var id = sdCurrentStore.id;
  if (id==='default') {
    localStorage.setItem('mycart_store_private_config', JSON.stringify(config));
    sdCurrentStore.config = config;
  } else {
    var raw = localStorage.getItem('mycart_agency_stores_list');
    var stores = [];
    if (raw) { try { stores = JSON.parse(raw); } catch(e){} }
    var st = stores.find(function(s){return String(s.id)===String(id);});
    if (st) { st.config = config; localStorage.setItem('mycart_agency_stores_list', JSON.stringify(stores)); }
    sdCurrentStore.config = config;
  }
  showAlertModal('✅ تم حفظ الإعدادات!');
}

function xhrSync(method, url, data) {
  try {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    var token = localStorage.getItem('mycart_auth_token');
    if (token) xhr.setRequestHeader('Authorization', 'Bearer ' + token);
    xhr.send(data ? JSON.stringify(data) : null);
    if (xhr.status >= 200 && xhr.status < 300 && xhr.responseText) {
      return JSON.parse(xhr.responseText);
    }
  } catch(e) {}
  return null;
}

function xhrAsync(method, url, data) {
  try {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    var token = localStorage.getItem('mycart_auth_token');
    if (token) xhr.setRequestHeader('Authorization', 'Bearer ' + token);
    xhr.send(data ? JSON.stringify(data) : null);
  } catch(e) {}
}

function loadCustomizerForm() {
  var raw = localStorage.getItem('mycart_agency_site_settings');
  if (!raw) return;
  try {
    var s = JSON.parse(raw);
    if (s.brandName) document.getElementById('custBrandName').value = s.brandName;
    if (s.heroTag) document.getElementById('custHeroTag').value = s.heroTag;
    if (s.heroTitle) document.getElementById('custHeroTitle').value = s.heroTitle;
    if (s.heroSubtitle) document.getElementById('custHeroSubtitle').value = s.heroSubtitle;
    if (s.freeFee) document.getElementById('custFreeFee').value = s.freeFee;
    if (s.feeLimit) document.getElementById('custFeeLimit').value = s.feeLimit;
    if (s.monthlyFee) document.getElementById('custMonthlyFee').value = s.monthlyFee;
    if (s.annualFee) document.getElementById('custAnnualFee').value = s.annualFee;
  } catch(e) {}
}

function showAlertModal(msg) {
  var overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;z-index:99999;font-family:inherit';
  var card = document.createElement('div');
  card.style.cssText = 'background:#fff;border:1px solid #e2e8f0;border-radius:16px;padding:24px;max-width:360px;width:calc(100% - 32px);box-shadow:0 8px 40px rgba(0,0,0,.2);text-align:center';
  card.innerHTML = '<div style="margin-bottom:14px;font-size:2.2rem"><i class="fa-solid fa-circle-check" style="color:#10b981"></i></div><p style="font-size:.9rem;font-weight:600;margin:0 0 18px;line-height:1.6;color:#1e293b">'+msg+'</p><button id="agencyAlertOk" style="width:100%;padding:10px;border:none;border-radius:10px;background:var(--fast7-cyan, #06b6d4);color:#fff;font-weight:800;font-size:.85rem;cursor:pointer;font-family:inherit">موافق</button>';
  overlay.appendChild(card);
  document.body.appendChild(overlay);
  document.getElementById('agencyAlertOk').onclick = function() { document.body.removeChild(overlay); };
}

var _suspendCallback = null;

function showSuspendModal(callback) {
  _suspendCallback = callback;
  var overlay = document.createElement('div');
  overlay.id = 'suspendOverlay';
  overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(15,23,42,.45);display:flex;align-items:center;justify-content:center;z-index:99999;font-family:inherit;padding:20px;box-sizing:border-box;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);direction:rtl';

  var modal = document.createElement('div');
  modal.style.cssText = 'background:#ffffff;border-radius:20px;width:100%;max-width:440px;overflow:hidden;box-shadow:0 25px 50px -12px rgba(0,0,0,.15);direction:rtl;border:1px solid #e2e8f0';

  var h = '';
  h += '<div style="padding:20px 22px 14px;border-bottom:1px solid #e2e8f0;display:flex;align-items:center;gap:12px">';
  h +=   '<div style="width:40px;height:40px;background:#fef2f2;color:#ef4444;border-radius:11px;display:flex;align-items:center;justify-content:center;font-size:1.15rem;flex-shrink:0;border:1px solid #fecaca"><i class="fa-solid fa-ban"></i></div>';
  h +=   '<div style="flex:1;min-width:0"><div style="font-size:.95rem;font-weight:900;color:#0f172a">سبب الإيقاف المؤقت</div><div style="font-size:.72rem;color:#64748b;margin-top:2px">اختر السبب أو اكتب سبب مخصص</div></div>';
  h +=   '<button onclick="document.body.removeChild(document.getElementById(\'suspendOverlay\'))" style="background:none;border:none;font-size:1.3rem;color:#94a3b8;cursor:pointer;padding:4px">&times;</button>';
  h += '</div>';

  h += '<div style="padding:16px 22px">';
  h +=   '<label style="font-size:.82rem;font-weight:700;color:#475569;display:block;margin-bottom:8px">اختر السبب</label>';
  h +=   '<select id="suspendReasonSelect" class="form-input" style="width:100%;padding:10px 14px;font-size:.85rem;margin-bottom:14px;direction:rtl">';
  h +=     '<option value="">— اختر سبباً —</option>';
  h +=     '<option value="مستحقات مالية غير مسددة">مستحقات مالية غير مسددة</option>';
  h +=     '<option value="مخالفة شروط الاستخدام">مخالفة شروط الاستخدام</option>';
  h +=     '<option value="محتوى مخالف">محتوى مخالف للسياسات</option>';
  h +=     '<option value="استخدام مزعج / سبام">استخدام مزعف / سبام</option>';
  h +=     '<option value="انتهاك الخصوصية">انتهاك الخصوصية</option>';
  h +=     '<option value="أنشطة احتيالية">أنشطة احتيالية</option>';
  h +=     '<option value="أسباب فنية">أسباب فنية (صيانة)</option>';
  h +=     '<option value="أسباب أخرى">أسباب أخرى</option>';
  h +=   '</select>';
  h +=   '<label style="font-size:.82rem;font-weight:700;color:#475569;display:block;margin-bottom:8px">سبب مخصص (اختياري)</label>';
  h +=   '<textarea id="suspendReasonCustom" class="form-input" style="width:100%;padding:10px 14px;font-size:.85rem;direction:rtl;resize:vertical;min-height:60px;font-family:inherit" placeholder="اكتب السبب هنا..."></textarea>';
  h += '</div>';

  h += '<div style="padding:14px 22px 20px;border-top:1px solid #e2e8f0;display:flex;gap:10px">';
  h +=   '<button onclick="document.body.removeChild(document.getElementById(\'suspendOverlay\'))" style="flex:1;padding:11px;background:#fff;color:#64748b;border:1.5px solid #cbd5e1;border-radius:10px;font-weight:700;font-size:.82rem;cursor:pointer;font-family:inherit">إلغاء</button>';
  h +=   '<button id="suspendConfirmBtn" style="flex:1;padding:11px;background:#ef4444;color:#fff;border:none;border-radius:10px;font-weight:800;font-size:.82rem;cursor:pointer;font-family:inherit;box-shadow:0 2px 4px rgba(239,68,68,.2)">تأكيد الإيقاف</button>';
  h += '</div>';

  modal.innerHTML = h;
  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  document.getElementById('suspendConfirmBtn').onclick = function() {
    var sel = document.getElementById('suspendReasonSelect').value;
    var custom = document.getElementById('suspendReasonCustom').value.trim();
    var reason = custom || sel || '';
    if (!reason) {
      var err = document.getElementById('suspendReasonSelect');
      err.style.borderColor = '#ef4444';
      err.focus();
      return;
    }
    document.body.removeChild(overlay);
    if (typeof _suspendCallback === 'function') _suspendCallback(reason);
    _suspendCallback = null;
  };

  document.getElementById('suspendReasonSelect').onchange = function() {
    var err = document.getElementById('suspendReasonSelect');
    err.style.borderColor = '#e2e8f0';
  };

  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) document.body.removeChild(overlay);
  });
}

function loadDashboardData() {
  loadCustomizerForm();
  // 1. Pending Requests Table
  const pendingTbody = document.getElementById('pendingRequestsList');
  const rawReqs = localStorage.getItem('mycart_agency_store_requests');
  let reqs = [];
  if (rawReqs) { try { reqs = JSON.parse(rawReqs); } catch(e) {} }

  const pendingReqs = reqs.filter(r => r.status === 'pending');

  const badgeEl = document.getElementById('pendingBadgeCount');
  if (badgeEl) {
    if (pendingReqs.length > 0) {
      badgeEl.textContent = pendingReqs.length;
      badgeEl.style.display = 'inline-block';
    } else {
      badgeEl.style.display = 'none';
    }
  }

  if (pendingTbody) {
    if (pendingReqs.length === 0) {
      pendingTbody.innerHTML = `<tr><td colspan="7" style="text-align:center;color:var(--text-gray);padding:30px">✨ لا يوجد أي طلبات جديدة بانتظار الموافقة في الوقت الحالي.</td></tr>`;
    } else {
      pendingTbody.innerHTML = pendingReqs.map(r => `
        <tr>
          <td>
            <a href="javascript:void(0)" onclick="openStoreDetailsPage('${r.id}')" style="color:var(--text-dark);text-decoration:none;font-weight:900">
              ${r.storeTitle} <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:0.75rem;color:var(--fast7-blue)"></i>
            </a><br>
            <small style="color:var(--fast7-blue)">https://${r.subdomain || 'store'}.fast7.com</small>
          </td>
          <td>${r.ownerName}</td>
          <td>
            <a href="https://wa.me/${(r.ownerPhone || '').replace(/\s+/g,'')}" target="_blank" style="color:var(--fast7-emerald);text-decoration:none;font-weight:800">
              <i class="fa-brands fa-whatsapp"></i> ${r.ownerPhone || 'غير محدد'}
            </a>
          </td>
          <td>${r.category || 'عام'}</td>
          <td>
            <span style="background:#eff6ff;color:var(--fast7-blue);padding:4px 12px;border-radius:999px;font-size:0.8rem;font-weight:800">
              ${r.plan === 'annual' ? 'السنوية VIP (1000 ₪)' : r.plan === 'monthly' ? 'الشهرية (100 ₪)' : 'المجانية (0 ₪ + 2₪/طلب)'}
            </span>
          </td>
          <td><small style="color:var(--text-gray)">${r.date || 'اليوم'}</small></td>
          <td>
            <button onclick="approveStoreRequest(${r.id})" class="btn-fast7 btn-fast7-cyan" style="padding:6px 14px;font-size:0.8rem">
              <i class="fa-solid fa-check"></i> موافقة وتفعيل
            </button>
            <button onclick="rejectStoreRequest(${r.id})" class="btn-fast7" style="background:#ef4444;color:#fff;padding:6px 14px;font-size:0.8rem;margin-right:6px">
              رفض
            </button>
          </td>
        </tr>
      `).join('');
    }
  }

  // 2. Active Stores List & Financial Balance Calculation
  const storesTbody = document.getElementById('saasStoresList');
  const revenueTbody = document.getElementById('revenueLedgerList');
  const rawStores = localStorage.getItem('mycart_agency_stores_list');
  let stores = [
    {
      id: 'default',
      name: localStorage.getItem('mycart_store_name') || 'متجري الرئيسي (Default)',
      subdomain: 'my-store',
      ownerName: 'أحمد محمود',
      ownerPhone: '0590000000',
      plan: localStorage.getItem('mycart_subscription_plan') || 'free',
      status: localStorage.getItem('mycart_store_suspended') === 'true' ? 'suspended' : 'active',
      ordersCount: parseInt(localStorage.getItem('mycart_free_orders_count') || '0', 10),
      depositedAmount: parseFloat(localStorage.getItem('mycart_store_deposited_default') || '100')
    }
  ];
  if (rawStores) { try { stores = JSON.parse(rawStores); } catch(e) {} }

  let totalStoresDepositedSum = 0;

  if (storesTbody) {
    storesTbody.innerHTML = stores.map(s => {
      const orders = s.ordersCount || (s.id === 'default' ? parseInt(localStorage.getItem('mycart_free_orders_count') || '0', 10) : 0);
      const plan = s.plan || 'free';
      const orderFeeRate = plan === 'free' ? 2 : 0;
      const accruedFee = orders * orderFeeRate;
      const deposited = s.depositedAmount || (s.id === 'default' ? parseFloat(localStorage.getItem('mycart_store_deposited_default') || '100') : 0);
      totalStoresDepositedSum += deposited;

      const remainingBalance = deposited - accruedFee;
      const isSuspended = (s.status === 'suspended' || s.status === 'inactive');

      return `
        <tr>
          <td>
            <a href="javascript:void(0)" onclick="openStoreDetailsPage('${s.id}')" style="color:var(--text-dark);text-decoration:none;font-weight:900" title="اضغط لفتح صفحة التفاصيل والسجل الكامل">
              ${s.name} <i class="fa-solid fa-square-arrow-up-right" style="font-size:0.8rem;color:var(--fast7-blue)"></i>
            </a><br>
            <small style="color:var(--fast7-blue)">https://${s.subdomain}.fast7.com</small>
          </td>
          <td>
            <select onchange="changeStorePlan('${s.id}', this.value)" class="form-input" style="padding:4px 10px;font-size:0.82rem;width:auto">
              <option value="free" ${plan === 'free' ? 'selected' : ''}>مجانية (0 ₪)</option>
              <option value="monthly" ${plan === 'monthly' ? 'selected' : ''}>شهرية (100 ₪)</option>
              <option value="annual" ${plan === 'annual' ? 'selected' : ''}>سنوية VIP (1000 ₪)</option>
            </select>
          </td>
          <td>${orderFeeRate > 0 ? `${orderFeeRate} ₪ / طلب` : 'معفى (0 ₪)'}</td>
          <td><strong>${orders}</strong> طلبات (${accruedFee} ₪)</td>
          <td>
            <strong style="color:${remainingBalance >= 0 ? 'var(--fast7-emerald)' : '#ef4444'};font-size:1.05rem">
              ${remainingBalance >= 0 ? `+${remainingBalance} ₪` : `${remainingBalance} ₪ (مستحق)`}
            </strong><br>
            <small style="color:var(--text-gray)">المودع: ${deposited} ₪</small>
          </td>
          <td>
            <span style="background:${!isSuspended ? '#eef7e9' : '#fee2e2'};color:${!isSuspended ? '#3b610c' : '#ef4444'};padding:4px 12px;border-radius:999px;font-size:0.8rem;font-weight:800">
              ${!isSuspended ? '🟢 نشط' : '⛔ موقوف مؤقتاً'}
            </span>
          </td>
          <td>
            <button onclick="toggleStoreSuspension('${s.id}')" class="btn-fast7" style="background:${!isSuspended ? '#ef4444' : '#10b981'};color:#fff;padding:5px 12px;font-size:0.8rem" title="إيقاف مؤقت / تفعيل">
              ${!isSuspended ? '<i class="fa-solid fa-ban"></i> إيقاف مؤقت' : '<i class="fa-solid fa-circle-check"></i> إعادة تفعيل'}
            </button>
            <button onclick="sendPaymentReminderWhatsApp('${s.id}')" class="btn-fast7 btn-fast7-glass" style="padding:5px 10px;font-size:0.8rem;color:var(--fast7-emerald);margin:0 3px" title="تذكير سداد بالواتساب">
              <i class="fa-brands fa-whatsapp"></i> تذكير بالدفع
            </button>
            <button onclick="openStoreDetailsPage('${s.id}')" class="btn-fast7 btn-fast7-cyan" style="padding:5px 10px;font-size:0.8rem" title="التفاصيل">
              <i class="fa-solid fa-file-invoice"></i> التفاصيل
            </button>
            ${s.id !== 'default' ? '<button onclick="deleteStoreQuick(\'' + s.id + '\',\'' + s.name.replace(/'/g, "\\'") + '\')" class="btn-fast7" style="background:#ef4444;color:#fff;padding:5px 10px;font-size:0.8rem;margin:0 3px" title="حذف المتجر"><i class="fa-solid fa-trash-can"></i></button>' : ''}
          </td>
        </tr>
      `;
    }).join('');
  }

  // Render Revenue Ledger Table
  if (revenueTbody) {
    revenueTbody.innerHTML = stores.map(s => {
      const orders = s.ordersCount || (s.id === 'default' ? parseInt(localStorage.getItem('mycart_free_orders_count') || '0', 10) : 0);
      const plan = s.plan || 'free';
      const orderFeeRate = plan === 'free' ? 2 : 0;
      const accruedFee = orders * orderFeeRate;
      const deposited = s.depositedAmount || (s.id === 'default' ? parseFloat(localStorage.getItem('mycart_store_deposited_default') || '100') : 0);
      const remainingBalance = deposited - accruedFee;
      const isSuspended = (s.status === 'suspended' || s.status === 'inactive');

      return `
        <tr>
          <td>
            <a href="javascript:void(0)" onclick="openStoreDetailsPage('${s.id}')" style="color:var(--text-dark);text-decoration:none;font-weight:900">
              ${s.name}
            </a>
          </td>
          <td><strong style="color:var(--fast7-blue)">${deposited} ₪</strong></td>
          <td><strong style="color:var(--fast7-gold)">${accruedFee} ₪</strong> (${orders} طلب)</td>
          <td>
            <strong style="color:${remainingBalance >= 0 ? 'var(--fast7-emerald)' : '#ef4444'};font-size:1.1rem">
              ${remainingBalance} ₪
            </strong>
          </td>
          <td>
            <button onclick="toggleStoreSuspension('${s.id}')" class="btn-fast7" style="background:${!isSuspended ? '#ef4444' : '#10b981'};color:#fff;padding:5px 12px;font-size:0.8rem">
              ${!isSuspended ? 'إيقاف لعدم الدفع' : 'إعادة التفعيل'}
            </button>
            <button onclick="depositStoreBalance('${s.id}')" class="btn-fast7 btn-fast7-cyan" style="padding:5px 12px;font-size:0.8rem;margin-right:4px">
              + شحن رصيد
            </button>
          </td>
        </tr>
      `;
    }).join('');
  }

  // Metrics
  const totalStores = stores.length;
  let totalOrderFeesAccrued = 0;
  let activePaid = 0;
  let subRevenue = 0;

  stores.forEach(s => {
    const orders = s.ordersCount || (s.id === 'default' ? parseInt(localStorage.getItem('mycart_free_orders_count') || '0', 10) : 0);
    const plan = s.plan || 'free';
    if (plan === 'free') {
      totalOrderFeesAccrued += (orders * 2);
    } else if (plan === 'monthly') {
      activePaid++;
      subRevenue += 100;
    } else if (plan === 'annual') {
      activePaid++;
      subRevenue += 1000;
    }
  });

  const elStores = document.getElementById('totalStoresCount');
  if (elStores) elStores.textContent = totalStores;

  const elFees = document.getElementById('totalOrderFees');
  if (elFees) elFees.textContent = `${totalOrderFeesAccrued} ₪`;

  const elPaid = document.getElementById('activePaidPlans');
  if (elPaid) elPaid.textContent = activePaid;

  const elDep = document.getElementById('totalStoresDeposited');
  if (elDep) elDep.textContent = `${totalStoresDepositedSum} ₪`;

  const elRev = document.getElementById('totalAgencyRevenue');
  if (elRev) elRev.textContent = `${subRevenue + totalOrderFeesAccrued} ₪`;
}

function toggleStoreSuspension(storeId) {
  if (storeId === 'default') {
    const isSuspended = localStorage.getItem('mycart_store_suspended') === 'true';
    localStorage.setItem('mycart_store_suspended', (!isSuspended).toString());
    var newStatus = (!isSuspended) ? 'suspended' : 'active';
    xhrAsync('POST', 'http://localhost:8080/api/stores/default/data', {status: {status: newStatus}});
    showAlertModal(!isSuspended ? '⛔ تم إيقاف المتجر مؤقتاً بسبب عدم سداد المستحقات!' : '🟢 تم إعادة تفعيل المتجر بنجاح!');
  } else {
    const rawStores = localStorage.getItem('mycart_agency_stores_list');
    let stores = [];
    if (rawStores) { try { stores = JSON.parse(rawStores); } catch(e) {} }

    const st = stores.find(s => String(s.id) === String(storeId));
    if (st) {
      const isSusp = st.status === 'suspended';
      if (!isSusp) {
        showSuspendModal(function(reason) {
          if (!reason) return;
          st.status = 'suspended';
          st.suspendReason = reason;
          localStorage.setItem('mycart_agency_stores_list', JSON.stringify(stores));
          xhrAsync('POST', 'http://localhost:8080/api/stores/' + storeId + '/data', {status: {status: 'suspended', suspendReason: reason}});
          showAlertModal('⛔ تم إيقاف المتجر مؤقتاً');
          loadDashboardData();
        });
      } else {
        st.status = 'active';
        delete st.suspendReason;
        localStorage.setItem('mycart_agency_stores_list', JSON.stringify(stores));
        xhrAsync('POST', 'http://localhost:8080/api/stores/' + storeId + '/data', {status: {status: 'active'}});
        showAlertModal('🟢 تم إعادة تفعيل المتجر بنجاح!');
        loadDashboardData();
      }
    }
  }
}

function sendPaymentReminderWhatsApp(storeId) {
  const rawStores = localStorage.getItem('mycart_agency_stores_list');
  let stores = [
    {
      id: 'default',
      name: localStorage.getItem('mycart_store_name') || 'متجري الرئيسي (Default)',
      ownerPhone: '0590000000',
      ordersCount: parseInt(localStorage.getItem('mycart_free_orders_count') || '0', 10),
      depositedAmount: parseFloat(localStorage.getItem('mycart_store_deposited_default') || '100')
    }
  ];
  if (rawStores) { try { stores = JSON.parse(rawStores); } catch(e) {} }

  const st = stores.find(s => String(s.id) === String(storeId)) || stores[0];
  const phone = (st.ownerPhone || '0590000000').replace(/\s+/g, '');
  const orders = st.ordersCount || 0;
  const dueFees = orders * 2;

  // Send WhatsApp
  const waMsg = `مرحباً ${st.name} 👋، يرجى العلم بضرورة سداد مستحقات متجرك لدى منصة FAST7 والبالغة (${dueFees} ₪) لتجنب الإيقاف المؤقت للخدمة. شكراً لتفهمكم.`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(waMsg)}`, '_blank');

  // Save in-store notification
  var notifKey = storeId === 'default' ? 'mycart_store_notifications' : 'mycart_store_notifications_' + storeId;
  var list = [];
  try { var r = localStorage.getItem(notifKey); if (r) list = JSON.parse(r); } catch(e) {}
  list.unshift({ id:Date.now(), title:'تذكير بسداد المستحقات 💳', message:'مستحقات متجرك: '+dueFees+' ₪. يرجى السداد لتجنب الإيقاف.', date:new Date().toLocaleDateString('ar-SA'), type:'payment' });
  localStorage.setItem(notifKey, JSON.stringify(list));
  showAlertModal('📢 تم إرسال التذكير واتساب وإضافة إشعار في المتجر');
}

function depositStoreBalance(storeId) {
  const amountStr = prompt('ادخل المبلغ المراد شحنه/إضافته لرصيد محفظة المتجر (شيكل):', '100');
  if (!amountStr || isNaN(parseFloat(amountStr))) return;

  const amount = parseFloat(amountStr);

  if (storeId === 'default') {
    const curr = parseFloat(localStorage.getItem('mycart_store_deposited_default') || '100');
    localStorage.setItem('mycart_store_deposited_default', (curr + amount).toString());
  } else {
    const rawStores = localStorage.getItem('mycart_agency_stores_list');
    let stores = [];
    if (rawStores) { try { stores = JSON.parse(rawStores); } catch(e) {} }

    const st = stores.find(s => String(s.id) === String(storeId));
    if (st) {
      st.depositedAmount = (st.depositedAmount || 0) + amount;
      localStorage.setItem('mycart_agency_stores_list', JSON.stringify(stores));
    }
  }

  // Also log deposit
  const rawDep = localStorage.getItem('mycart_deposits_log_' + storeId);
  let depLogs = [];
  if (rawDep) { try { depLogs = JSON.parse(rawDep); } catch(e) {} }

  depLogs.unshift({
    date: new Date().toLocaleString('ar-SA'),
    amount: amount,
    method: 'تحويـل بنكي / شحن يدوي',
    notes: 'إيداع رصيد محفظة جديد'
  });
  localStorage.setItem('mycart_deposits_log_' + storeId, JSON.stringify(depLogs));

  showAlertModal(`💳 تم شحن ${amount} ₪ بنجاح إلى رصيد محفظة المتجر!`);
  loadDashboardData();
}

function editStoreDetails(storeId) {
  const rawStores = localStorage.getItem('mycart_agency_stores_list');
  let stores = [
    {
      id: 'default',
      name: localStorage.getItem('mycart_store_name') || 'متجري الرئيسي (Default)',
      subdomain: 'my-store',
      plan: localStorage.getItem('mycart_subscription_plan') || 'free',
      status: 'active'
    }
  ];
  if (rawStores) { try { stores = JSON.parse(rawStores); } catch(e) {} }

  const st = stores.find(s => String(s.id) === String(storeId));
  if (!st) return;

  const newTitle = prompt('تعديل اسم المتجر:', st.name);
  if (!newTitle) return;

  const newSubdomain = prompt('تعديل النطاق الفرعي (Subdomain):', st.subdomain);

  st.name = newTitle.trim();
  if (newSubdomain) st.subdomain = newSubdomain.trim().toLowerCase();

  if (storeId === 'default') {
    localStorage.setItem('mycart_store_name', st.name);
  } else {
    localStorage.setItem('mycart_agency_stores_list', JSON.stringify(stores));
  }

  showAlertModal('✏️ تم تعديل بيانات المتجر بنجاح!');
  loadDashboardData();
}

function previewStore(subdomain) {
  var storeObj = null;
  if (typeof subdomain === 'object' && subdomain !== null) {
    storeObj = subdomain;
    subdomain = storeObj.subdomain || 'store';
  }
  // Default store uses 'default' folder
  if ((storeObj && storeObj.id === 'default') || subdomain === 'my-store') {
    window.open('http://localhost:8080/stores/default/index.html', '_blank');
    return;
  }
  var folder = subdomain.toLowerCase().replace(/[^a-z0-9_-]/g, '_');
  window.open('http://localhost:8080/stores/' + folder + '/index.html', '_blank');
}

async function approveStoreRequest(reqId) {
  const rawReqs = localStorage.getItem('mycart_agency_store_requests');
  let reqs = [];
  if (rawReqs) { try { reqs = JSON.parse(rawReqs); } catch(e) {} }

  const req = reqs.find(r => r.id === reqId);
  if (!req) return;

  // Show template picker first
  let selectedTemplate = 'default';
  try {
    const tResp = await fetch('http://localhost:8080/api/templates');
    if (tResp.ok) {
      const templates = await tResp.json();
      if (templates.length > 0) {
        selectedTemplate = await showTemplatePicker(templates);
        if (!selectedTemplate) return; // User cancelled
      }
    }
  } catch(e) {}

  req.status = 'approved';
  localStorage.setItem('mycart_agency_store_requests', JSON.stringify(reqs));

  // Try to create store folder via server
  let folderCreated = false;
  let resultUrl = '';
  try {
    const resp = await fetch('http://localhost:8080/api/store/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: reqId,
        name: req.storeTitle,
        subdomain: req.subdomain || 'store',
        template: selectedTemplate
      })
    });
    if (resp.ok) {
      const result = await resp.json();
      folderCreated = true;
      resultUrl = result.url;
      var passMsg = result.store_password ? '\nكلمة السر: ' + result.store_password : '';
      showAlertModal('✅ تم التفعيل!\nالمسار: stores/'+result.folder+'/\nالرابط: http://localhost:8080/'+result.url+'\nالقالب: '+result.template+passMsg);
    } else {
      const err = await resp.json();
      showAlertModal('⚠️ فشل إنشاء المتجر: '+(err.error||'خطأ غير معروف'));
      return;
    }
  } catch(e) {
    // Server not running
  }

  // Add to active stores list
  const rawStores = localStorage.getItem('mycart_agency_stores_list');
  let stores = [
    {
      id: 'default',
      name: localStorage.getItem('mycart_store_name') || 'متجري الرئيسي (Default)',
      subdomain: 'my-store',
      plan: localStorage.getItem('mycart_subscription_plan') || 'free',
      status: 'active',
      ordersCount: parseInt(localStorage.getItem('mycart_free_orders_count') || '0', 10),
      depositedAmount: 100
    }
  ];
  if (rawStores) { try { stores = JSON.parse(rawStores); } catch(e) {} }

  var cfg = { freeFee: '2', feeLimit: '100', monthlyFee: '100', annualFee: '1000' };
  try { var g = JSON.parse(localStorage.getItem('mycart_agency_site_settings')); if (g) { if (g.freeFee) cfg.freeFee = g.freeFee; if (g.feeLimit) cfg.feeLimit = g.feeLimit; if (g.monthlyFee) cfg.monthlyFee = g.monthlyFee; if (g.annualFee) cfg.annualFee = g.annualFee; } } catch(e) {}
  stores.push({
    id: req.id,
    name: req.storeTitle,
    subdomain: req.subdomain || 'store',
    ownerName: req.ownerName || 'صاحب المتجر',
    ownerEmail: req.ownerEmail || 'email@domain.com',
    ownerPhone: req.ownerPhone || '0590000000',
    plan: req.plan || 'free',
    template: selectedTemplate,
    status: 'active',
    ordersCount: 0,
    depositedAmount: 0,
    config: cfg
  });

  localStorage.setItem('mycart_agency_stores_list', JSON.stringify(stores));
  if (!folderCreated) {
    showAlertModal(`✅ تم تفعيل المتجر "${req.storeTitle}" وإضافته لقائمة المتاجر النشطة!\n⚠️ السيرفر مش شغال، شغّله عشان تنشئ مجلد المستقل.`);
  }
  loadDashboardData();
}

function showTemplatePicker(templates) {
  return new Promise(function(resolve) {
    var overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(15,23,42,.45);display:flex;align-items:center;justify-content:center;z-index:99999;font-family:inherit;padding:20px;box-sizing:border-box;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);direction:rtl';

    var modal = document.createElement('div');
    modal.style.cssText = 'background:#ffffff;border-radius:20px;width:100%;max-width:520px;overflow:hidden;box-shadow:0 25px 50px -12px rgba(0,0,0,.15);direction:rtl;border:1px solid #e2e8f0';

    var html = '';
    html += '<div style="padding:20px 22px 14px;border-bottom:1px solid #e2e8f0;display:flex;align-items:center;gap:12px">';
    html +=   '<div style="width:40px;height:40px;background:#eff6ff;color:#2563eb;border-radius:11px;display:flex;align-items:center;justify-content:center;font-size:1.15rem;flex-shrink:0;border:1px solid #dbeafe"><i class="fa-solid fa-palette"></i></div>';
    html +=   '<div style="flex:1;min-width:0">';
    html +=     '<div style="font-size:.95rem;font-weight:900;color:#0f172a">اختيار قالب المتجر</div>';
    html +=     '<div style="font-size:.72rem;color:#64748b;margin-top:2px">اختر القالب المناسب لمتجرك الجديد</div>';
    html +=   '</div>';
    html +=   '<button id="tplCloseBtn" style="background:none;border:none;font-size:1.3rem;color:#94a3b8;cursor:pointer;padding:4px">&times;</button>';
    html += '</div>';

    html += '<div style="padding:16px 22px;max-height:340px;overflow-y:auto">';
    templates.forEach(function(t, i) {
      var checked = i === 0 ? 'checked' : '';
      html += '<label style="display:flex;align-items:center;gap:14px;padding:14px 16px;border:2px solid '+(i===0?'#2563eb':'#e2e8f0')+';border-radius:14px;margin-bottom:10px;cursor:pointer;transition:all .15s;background:'+(i===0?'#f8faff':'#fff')+'" id="tplOption'+i+'" data-template="'+t.id+'" onclick="document.querySelector(\'input[name=template]:checked\').checked=false;this.querySelector(\'input\').checked=true;document.querySelectorAll(\'[id^=tplOption]\').forEach(function(e,i2){e.style.borderColor=i2==='+i+'?\'#2563eb\':\'#e2e8f0\';e.style.background=i2==='+i+'?\'#f8faff\':\'#fff\'})">';
      html +=   '<input type="radio" name="template" value="'+t.id+'" '+checked+' style="width:18px;height:18px;accent-color:#2563eb;flex-shrink:0">';
      html +=   '<div style="width:44px;height:44px;border-radius:12px;background:'+t.color+'20;color:'+t.color+';display:flex;align-items:center;justify-content:center;font-size:1.2rem;flex-shrink:0"><i class="'+t.icon+'"></i></div>';
      html +=   '<div style="flex:1;min-width:0">';
      html +=     '<div style="font-weight:800;font-size:.85rem;color:#0f172a">'+(t.name||t.id)+'</div>';
      html +=     '<div style="font-size:.72rem;color:#64748b;margin-top:2px">'+(t.description||'')+'</div>';
      html +=   '</div>';
      html +=   '<div style="font-size:.7rem;color:#64748b;background:#f1f5f9;padding:4px 10px;border-radius:8px;font-weight:700;white-space:nowrap">'+(t.product_count||0)+' منتجات</div>';
      html += '</label>';
    });
    html += '</div>';

    html += '<div style="padding:14px 22px 20px;border-top:1px solid #e2e8f0;display:flex;gap:10px">';
    html +=   '<button id="tplCancelBtn" style="flex:1;padding:11px;background:#fff;color:#64748b;border:1.5px solid #cbd5e1;border-radius:10px;font-weight:700;font-size:.82rem;cursor:pointer;font-family:inherit">إلغاء</button>';
    html +=   '<button id="tplConfirmBtn" style="flex:1;padding:11px;background:#2563eb;color:#fff;border:none;border-radius:10px;font-weight:800;font-size:.82rem;cursor:pointer;font-family:inherit;box-shadow:0 2px 4px rgba(37,99,235,.2)">تأكيد واستمرار</button>';
    html += '</div>';

    modal.innerHTML = html;
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Close/cancel handlers
    document.getElementById('tplCloseBtn').onclick = function() {
      document.body.removeChild(overlay);
      resolve(null);
    };
    document.getElementById('tplCancelBtn').onclick = function() {
      document.body.removeChild(overlay);
      resolve(null);
    };
    // Resolve on confirm
    document.getElementById('tplConfirmBtn').onclick = function() {
      var selected = document.querySelector('input[name=template]:checked');
      var tmpl = selected ? selected.value : 'default';
      document.body.removeChild(overlay);
      resolve(tmpl);
    };
    // Click overlay background to cancel
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        document.body.removeChild(overlay);
        resolve(null);
      }
    });
  });
}

function rejectStoreRequest(reqId) {
  const rawReqs = localStorage.getItem('mycart_agency_store_requests');
  let reqs = [];
  if (rawReqs) { try { reqs = JSON.parse(rawReqs); } catch(e) {} }

  const reqIndex = reqs.findIndex(r => r.id === reqId);
  if (reqIndex !== -1) {
    reqs.splice(reqIndex, 1);
    localStorage.setItem('mycart_agency_store_requests', JSON.stringify(reqs));
    showAlertModal('❌ تم رفض وحذف الطلب.');
    loadDashboardData();
  }
}

function agencyCreateStoreDirect() {
  window.location.href = 'create-store.html';
}

function changeStorePlan(storeId, newPlan) {
  if (storeId === 'default') {
    localStorage.setItem('mycart_subscription_plan', newPlan);
  } else {
    const rawStores = localStorage.getItem('mycart_agency_stores_list');
    let stores = [];
    if (rawStores) { try { stores = JSON.parse(rawStores); } catch(e) {} }

    const st = stores.find(s => String(s.id) === String(storeId));
    if (st) {
      st.plan = newPlan;
      localStorage.setItem('mycart_agency_stores_list', JSON.stringify(stores));
    }
  }

  showAlertModal('🎉 تم تحديث خطة المتجر فورياً!');
  loadDashboardData();
}

function saveCustomizerSettings() {
  const data = {
    brandName: document.getElementById('custBrandName').value.trim(),
    heroTag: document.getElementById('custHeroTag').value.trim(),
    heroTitle: document.getElementById('custHeroTitle').value.trim(),
    heroSubtitle: document.getElementById('custHeroSubtitle').value.trim(),
    freeFee: document.getElementById('custFreeFee').value,
    feeLimit: document.getElementById('custFeeLimit').value,
    monthlyFee: document.getElementById('custMonthlyFee').value,
    annualFee: document.getElementById('custAnnualFee').value
  };

  localStorage.setItem('mycart_agency_site_settings', JSON.stringify(data));
  showAlertModal('💾 تم حفظ التعديلات! تظهر الآن فورياً بالصفحة الرئيسية لجميع الزوار.');
}

function updateAgencyPass() {
  const newPass = document.getElementById('newPassInput').value.trim();
  if (newPass.length < 6) {
    showAlertModal('⚠️ كلمة المرور يجب أن تكون 6 خانات على الأقل');
    return;
  }
  const token = localStorage.getItem('mycart_auth_token');
  fetch('http://localhost:8080/api/auth/change-password', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
    body: JSON.stringify({ password: newPass })
  }).then(function(r) {
    if (r.ok) showAlertModal('🔑 تم تحديث كلمة مرور أدمن المنصة بنجاح!');
    else showAlertModal('⚠️ فشل التحديث');
  }).catch(function() {
    showAlertModal('⚠️ السيرفر مش شغال');
  });
}

// ====== AGENCY NOTIFICATIONS ======
function toggleNotifTypeFields() {
  var type = document.getElementById('notifType').value;
  var postGroup = document.getElementById('notifPostBodyGroup');
  if (postGroup) postGroup.style.display = type === 'post' ? 'block' : 'none';
  updateTargetStoreList();
}

function updateTargetStoreList() {
  var sel = document.getElementById('notifTarget');
  var specificGroup = document.getElementById('specificStoreGroup');
  var planGroup = document.getElementById('planFilterGroup');
  if (sel.value === 'specific') {
    specificGroup.style.display = 'block';
    populateSpecificStoreSelect();
  } else {
    specificGroup.style.display = 'none';
  }
  if (sel.value === 'plan') {
    planGroup.style.display = 'block';
  } else {
    planGroup.style.display = 'none';
  }
}

function populateSpecificStoreSelect() {
  var sel = document.getElementById('notifSpecificStore');
  if (!sel) return;
  var raw = localStorage.getItem('mycart_agency_stores_list');
  var stores = [];
  if (raw) { try { stores = JSON.parse(raw); } catch(e) {} }
  stores = stores.filter(function(s) { return s.id !== 'default'; });
  sel.innerHTML = '<option value="">اختر متجراً...</option>';
  stores.forEach(function(s) {
    sel.innerHTML += '<option value="' + s.id + '">🏪 ' + s.name + '</option>';
  });
}

function insertHtmlTag(tag) {
  var textarea = document.getElementById('notifPostBody');
  if (!textarea) return;
  var insert = '';
  switch(tag) {
    case 'b': insert = '<b></b>'; break;
    case 'i': insert = '<i></i>'; break;
    case 'a': insert = '<a href="#" target="_blank"></a>'; break;
    case 'ul': insert = '<ul><li></li></ul>'; break;
    case 'img': insert = '<img src="your-image-url.jpg" alt="Image">'; break;
  }
  var start = textarea.selectionStart;
  var text = textarea.value;
  var before = text.substring(0, start);
  var after = text.substring(start);
  textarea.value = before + insert + after;
  setTimeout(function(){ textarea.focus(); }, 0);
}

function previewNotifImage() {
  var input = document.getElementById('notifImage');
  var preview = document.getElementById('notifImagePreview');
  if (!input || !preview) return;
  var url = input.value.trim();
  if (url && (url.startsWith('http://') || url.startsWith('https://'))) {
    preview.src = url;
    preview.style.display = 'block';
  } else {
    preview.style.display = 'none';
  }
}

function updateCharacterCounters() {
  var title = document.getElementById('notifTitle');
  var msg = document.getElementById('notifMessage');
  var titleCount = document.getElementById('titleCharCount');
  var msgCount = document.getElementById('msgCharCount');
  var titlePreview = document.getElementById('titlePreview');
  var msgPreview = document.getElementById('msgPreview');
  
  if (title && titleCount && titlePreview) {
    var len = title.value.length;
    titleCount.textContent = len;
    if (len > 100) {
      title.style.borderColor = '#ef4444';
      titlePreview.style.display = 'none';
    } else {
      title.style.borderColor = '';
      titlePreview.style.display = 'block';
    }
  }
  if (msg && msgCount && msgPreview) {
    var len = msg.value.length;
    msgCount.textContent = len;
    if (len > 500) {
      msg.style.borderColor = '#ef4444';
      msgPreview.style.display = 'none';
    } else {
      msg.style.borderColor = '';
      msgPreview.style.display = 'block';
    }
  }
}

function saveNotifDraft() {
  var title = document.getElementById('notifTitle');
  var msg = document.getElementById('notifMessage');
  if (!title || !msg) return;
  if (!title.value.trim() || !msg.value.trim()) {
    showAlertModal('⚠️ اكتب عنوان ونص الإشعار');
    return;
  }
  
  var draftObj = {
    id: Date.now(),
    title: title.value,
    message: msg.value,
    target: document.getElementById('notifTarget').value,
    type: document.getElementById('notifType').value,
    postBody: document.getElementById('notifPostBody') ? document.getElementById('notifPostBody').value : '',
    image: document.getElementById('notifImage').value,
    link: document.getElementById('notifLink').value,
    date: new Date().toLocaleDateString('ar-SA'),
    isDraft: true
  };
  
  var drafts = [];
  try { var r = localStorage.getItem('mycart_agency_notification_drafts'); if (r) drafts = JSON.parse(r); } catch(e) {}
  drafts.unshift(draftObj);
  localStorage.setItem('mycart_agency_notification_drafts', JSON.stringify(drafts));
  
  showAlertModal('💾 تم حفظ الإشعار كمسودة!');
}

var NOTIF_TEMPLATES = [
  { name: 'عرض رمضان', icon: '🔥', type: 'general', color: '#f59e0b', bgColor: '#fef3c7', target: 'all', title: 'عروض خصم رمضان 🔥', message: 'خصومات حصرية تصل إلى 70% على جميع المنتجات. تسوق الآن واستفيد من الأسعار الخاصة.', image: 'https://example.com/ramadan-offer.jpg', link: '/offers/ramadan', tag: 'عرض_رمضان' },
  { name: 'تحديث الحساب', icon: '🔄', type: 'update', color: '#0891b2', bgColor: '#e0f2fe', target: 'all', title: 'تم تحديث حسابك ✅', message: 'تم تفعيل ميزات جديدة في حسابك. تحقق من لوحة التحكم للاطلاع على التفاصيل.', tag: 'تحديث_حساب' },
  { name: 'تذكير دفع', icon: '💳', type: 'payment', color: '#dc2626', bgColor: '#fee2e2', target: 'balance', title: 'رصيد منخفض - يرجى الشحن', message: 'رصيد محفظتك منخفض (0 ₪). يرجى شحن رصيدك لتجنب إيقاف المتجر.', tag: 'تذكير_دفع' },
  { name: 'منشور / مقال', icon: '📝', type: 'post', color: '#7c3aed', bgColor: '#ede9fe', target: 'specific', title: 'كيفية زيادة مبيعاتك 📈', message: 'مقال حصري حول استراتيجيات زيادة المبيعات. اقرأ الآن واستفيد!', postBody: '<h2>كيفية زيادة مبيعاتك</h2><p>في هذا المقال سنتحدث عن...</p>', tag: 'منشور' },
  { name: 'ترحيب بمتجر', icon: '👋', type: 'welcome', color: '#059669', bgColor: '#d1fae5', target: 'new', title: 'أهلاً بك في منصة FAST7! 🎉', message: 'مرحباً بك في عائلة FAST7. متجرك الآن جاهز — ابدأ بإعداد منتجاتك والترحيب بأول عميل!', tag: 'ترحيب' },
  { name: 'تحذير أمني', icon: '⚠️', type: 'warning', color: '#d97706', bgColor: '#fef3c7', target: 'all', title: 'تنبيه أمني مهم ⚠️', message: 'تم اكتشاف محاولة دخول غير مصرح بها. يرجى تغيير كلمة المرور فوراً لحماية حسابك.', tag: 'تحذير_أمني' },
  { name: 'عرض خاص', icon: '🏷️', type: 'offer', color: '#db2777', bgColor: '#fce7f3', target: 'all', title: 'عرض حصري لك فقط 🏷️', message: 'خصم 30% على الاشتراك السنوي لفترة محدودة. لا تفوّت الفرصة!', link: '/upgrade', tag: 'عرض_خاص' },
  { name: 'صيانة المنصة', icon: '🔧', type: 'update', color: '#64748b', bgColor: '#f1f5f9', target: 'all', title: 'صيانة مجدولة للمنصة 🔧', message: 'سيتوقف النظام مؤقتاً للصيانة يوم الجمعة من 2:00 - 4:00 صباحاً. نعتذر عن الإزعاج.', tag: 'صيانة' }
];

function openNotifTemplates() {
  var templates = NOTIF_TEMPLATES;
  var typeLabels = {
    general: 'إعلان عام', update: 'تحديث', payment: 'تذكير دفع',
    post: 'منشور', welcome: 'ترحيب', warning: 'تحذير', offer: 'عرض', marketing: 'تسويق'
  };

  var existing = document.getElementById('notifTemplateOverlay');
  if (existing) document.body.removeChild(existing);

  var overlay = document.createElement('div');
  overlay.id = 'notifTemplateOverlay';
  overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(15,23,42,.45);display:flex;align-items:center;justify-content:center;z-index:99999;font-family:inherit;padding:20px;box-sizing:border-box;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);direction:rtl';

  var modal = document.createElement('div');
  modal.style.cssText = 'background:#ffffff;border-radius:20px;width:100%;max-width:940px;height:87vh;overflow:hidden;box-shadow:0 25px 50px -12px rgba(0,0,0,.15);display:flex;flex-direction:column;direction:rtl;border:1px solid #e2e8f0';

  var h = '';

  /* ── HEADER (Bright Light Style) ─────────────────────────────── */
  h += '<div style="flex-shrink:0;background:#ffffff;padding:16px 22px;display:flex;align-items:center;gap:14px;border-bottom:1px solid #e2e8f0">';
  h +=   '<div style="width:40px;height:40px;background:#eff6ff;color:#2563eb;border-radius:11px;display:flex;align-items:center;justify-content:center;font-size:1.15rem;flex-shrink:0;border:1px solid #dbeafe">📋</div>';
  h +=   '<div style="flex:1;min-width:0">';
  h +=     '<div style="font-size:.95rem;font-weight:900;color:#0f172a">قوالب الإشعارات الجاهزة</div>';
  h +=     '<div style="font-size:.72rem;color:#64748b;margin-top:2px">مرّر على قالب للمعاينة &laquo; اضغط لتحديده &laquo; اضغط "تطبيق" لملء النموذج</div>';
  h +=   '</div>';
  h +=   '<span style="background:#f1f5f9;border:1px solid #e2e8f0;border-radius:8px;padding:4px 10px;font-size:.68rem;color:#475569;font-weight:800;white-space:nowrap">' + templates.length + ' قوالب</span>';
  h += '</div>';

  /* ── BODY: two columns ───────────────────── */
  h += '<div style="flex:1;display:flex;overflow:hidden;min-height:0">';

  /* LEFT sidebar — preview + buttons (Light Gray) */
  h += '<div style="width:285px;flex-shrink:0;background:#f8fafc;display:flex;flex-direction:column;border-left:1px solid #e2e8f0">';

  // label
  h +=   '<div style="padding:14px 18px 8px;flex-shrink:0">';
  h +=     '<div style="font-size:.62rem;color:#64748b;font-weight:800;text-transform:uppercase;letter-spacing:1px;display:flex;align-items:center;gap:6px">';
  h +=       '<span style="width:6px;height:6px;border-radius:50%;background:#2563eb;display:inline-block;flex-shrink:0"></span>معاينة الإشعار';
  h +=     '</div>';
  h +=   '</div>';

  // scrollable preview area (flex:1)
  h +=   '<div id="tmplPreviewBox" style="flex:1;overflow-y:auto;padding:0 16px 16px">';
  h +=     '<div style="height:100%;min-height:160px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;text-align:center">';
  h +=       '<div style="font-size:2rem;opacity:.3">📱</div>';
  h +=       '<div style="font-size:.72rem;color:#64748b;line-height:1.6">مرّر الماوس على قالب<br>لترى المعاينة هنا</div>';
  h +=     '</div>';
  h +=   '</div>';

  // PINNED action buttons at bottom
  h +=   '<div style="flex-shrink:0;padding:14px 16px;border-top:1px solid #e2e8f0;background:#ffffff;display:flex;flex-direction:column;gap:8px">';
  h +=     '<button id="tmplApplyBtn" onclick="applySelectedTemplate()" ';
  h +=       'style="width:100%;padding:11px;background:#2563eb;color:#fff;border:none;border-radius:10px;font-weight:800;font-size:.84rem;cursor:pointer;display:none;align-items:center;justify-content:center;gap:8px;font-family:inherit;box-shadow:0 2px 4px rgba(37,99,235,.2)">';
  h +=       '✅ تطبيق هذا القالب';
  h +=     '</button>';
  h +=     '<button ';
  h +=       'onclick="var o=document.getElementById(\'notifTemplateOverlay\');if(o)document.body.removeChild(o)" ';
  h +=       'style="width:100%;padding:10px;background:#ffffff;color:#64748b;border:1.5px solid #cbd5e1;border-radius:10px;font-weight:700;font-size:.8rem;cursor:pointer;font-family:inherit;transition:all .15s" ';
  h +=       'onmouseover="this.style.background=\'#f1f5f9\';this.style.color=\'#0f172a\';this.style.borderColor=\'#94a3b8\'" ';
  h +=       'onmouseout="this.style.background=\'#ffffff\';this.style.color=\'#64748b\';this.style.borderColor=\'#cbd5e1\'">';
  h +=       '✕ إغلاق';
  h +=     '</button>';
  h +=   '</div>';

  h += '</div>'; /* end sidebar */

  /* RIGHT — scrollable cards grid (Light Fresh Grid) */
  h += '<div style="flex:1;overflow-y:auto;padding:18px;background:#f1f5f9" onmouseleave="resetPreviewToSelected()">';
  h +=   '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(182px,1fr));gap:12px;align-content:start">';

  templates.forEach(function(t, i) {
    h += '<div id="tmplCard' + i + '"';
    h +=   ' onclick="selectNotifTemplate(' + i + ')"';
    h +=   ' onmouseenter="previewNotifTemplate(' + i + ')"';
    h +=   ' style="background:#fff;border:2px solid #e2e8f0;border-radius:15px;padding:16px 14px;cursor:pointer;transition:all .15s ease;position:relative;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,.04)">';

    // colored right accent bar
    h +=   '<div style="position:absolute;top:0;right:0;width:4px;height:100%;background:' + t.color + ';border-radius:0 15px 15px 0"></div>';

    // active checkmark badge
    h +=   '<div id="tmplBadge' + i + '" style="position:absolute;top:8px;left:8px;display:none;align-items:center;justify-content:center;width:20px;height:20px;background:' + t.color + ';color:#fff;border-radius:50%;font-size:.65rem;font-weight:900">✓</div>';

    // icon
    h +=   '<div style="width:40px;height:40px;border-radius:11px;background:' + t.bgColor + ';display:flex;align-items:center;justify-content:center;font-size:1.25rem;margin-bottom:11px">' + t.icon + '</div>';

    // name
    h +=   '<div style="font-weight:800;font-size:.84rem;color:#0f172a;margin-bottom:5px;line-height:1.2">' + t.name + '</div>';

    // type badge
    h +=   '<span style="font-size:.62rem;padding:2px 8px;border-radius:999px;background:' + t.bgColor + ';color:' + t.color + ';font-weight:700;display:inline-block;margin-bottom:9px">' + (typeLabels[t.type] || t.type) + '</span>';

    // message snippet
    h +=   '<div style="font-size:.71rem;color:#64748b;line-height:1.45;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">' + t.message + '</div>';

    h += '</div>';
  });

  h +=   '</div>';
  h += '</div>'; /* end cards grid */

  h += '</div>'; /* end body */

  modal.innerHTML = h;
  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) document.body.removeChild(overlay);
  });

  setTimeout(function() { previewNotifTemplate(0); }, 80);
}

var _selectedTemplate = 0;
var _previewedTemplate = -1;

function previewNotifTemplate(index) {
  _previewedTemplate = index;
  renderTemplatePreview(index);
}

function resetPreviewToSelected() {
  _previewedTemplate = -1;
  renderTemplatePreview(_selectedTemplate);
}

function selectNotifTemplate(index) {
  _selectedTemplate = index;
  _previewedTemplate = index;
  renderTemplatePreview(index);
}

function renderTemplatePreview(index) {
  var templates = NOTIF_TEMPLATES;
  var t = templates[index];
  if (!t) return;

  var targetLabels = { all: '🌐 كل المتاجر', specific: '🏪 متجر محدد', balance: '💳 رصيد منخفض', new: '🆕 متاجر جديدة', inactive: '⏸️ غير نشطة', plan: '📋 حسب الخطة' };
  var typeLabels = { general: 'إعلان عام', update: 'تحديث', payment: 'تذكير دفع', post: 'منشور', welcome: 'ترحيب', warning: 'تحذير', offer: 'عرض', marketing: 'تسويق' };

  // Highlight cards
  templates.forEach(function(_, i) {
    var card = document.getElementById('tmplCard' + i);
    if (!card) return;
    var isSelected = (i === _selectedTemplate);
    var isHovered = (i === index);

    if (isSelected) {
      card.style.borderColor = t.color;
      card.style.background = t.bgColor;
      card.style.boxShadow = '0 4px 14px ' + t.color + '40';
      card.style.transform = 'scale(1.02)';
    } else if (isHovered) {
      card.style.borderColor = t.color;
      card.style.background = '#ffffff';
      card.style.boxShadow = '0 2px 8px rgba(0,0,0,.08)';
      card.style.transform = 'translateY(-2px)';
    } else {
      card.style.borderColor = '#e2e8f0';
      card.style.background = '#ffffff';
      card.style.boxShadow = '0 1px 3px rgba(0,0,0,.04)';
      card.style.transform = 'none';
    }

    var badge = document.getElementById('tmplBadge' + i);
    if (badge) badge.style.display = isSelected ? 'inline-flex' : 'none';
  });

  var box = document.getElementById('tmplPreviewBox');
  if (!box) return;

  // Phone notification mockup
  var html = '<div style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,.12);border:1px solid #e2e8f0">';
  html += '<div style="background:' + t.color + ';padding:4px 12px;display:flex;align-items:center;gap:6px">';
  html += '<span style="font-size:.6rem;color:#fff;opacity:.95;font-weight:700">FAST7 Agency</span>';
  html += '<span style="font-size:.55rem;color:#fff;opacity:.8;margin-right:auto">الآن</span>';
  html += '</div>';
  html += '<div style="padding:14px 16px">';
  html += '<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">';
  html += '<div style="width:36px;height:36px;border-radius:10px;background:' + t.bgColor + ';display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0">' + t.icon + '</div>';
  html += '<div style="flex:1;min-width:0">';
  html += '<div style="font-size:.8rem;font-weight:900;color:#1e293b;line-height:1.3">' + t.title + '</div>';
  html += '</div></div>';
  html += '<div style="font-size:.72rem;color:#475569;line-height:1.5;margin-bottom:10px">' + t.message + '</div>';
  html += '<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">';
  html += '<span style="font-size:.6rem;padding:2px 8px;border-radius:999px;background:' + t.bgColor + ';color:' + t.color + ';font-weight:700">' + (typeLabels[t.type] || t.type) + '</span>';
  html += '<span style="font-size:.6rem;color:#94a3b8">' + (targetLabels[t.target] || t.target) + '</span>';
  if (t.tag) html += '<span style="font-size:.6rem;color:#64748b;background:#f1f5f9;padding:2px 6px;border-radius:6px">#' + t.tag + '</span>';
  html += '</div>';
  if (t.link) {
    html += '<div style="margin-top:10px;padding-top:10px;border-top:1px solid #f1f5f9">';
    html += '<span style="font-size:.7rem;color:' + t.color + ';font-weight:700">🔗 ' + t.link + '</span>';
    html += '</div>';
  }
  html += '</div></div>';

  box.innerHTML = html;

  var applyBtn = document.getElementById('tmplApplyBtn');
  if (applyBtn) {
    applyBtn.style.display = 'flex';
    var selT = templates[_selectedTemplate];
    applyBtn.innerHTML = '✅ تطبيق: ' + (selT ? selT.name : t.name);
  }
}

function applySelectedTemplate() {
  fillNotifFromTemplate(_selectedTemplate);
  var overlay = document.getElementById('notifTemplateOverlay');
  if (overlay) document.body.removeChild(overlay);
}

function fillNotifFromTemplate(index) {
  var t = NOTIF_TEMPLATES[index];
  if (!t) return;

  // Switch to the standalone Create Notification page
  if (typeof switchDashTab === 'function') {
    var btn = document.querySelector('button[onclick*="tab-create-notification"]');
    switchDashTab('tab-create-notification', btn);
  }

  // Populate fields
  var targetEl = document.getElementById('notifTarget');
  if (targetEl) { targetEl.value = t.target; updateTargetStoreList(); }

  var typeEl = document.getElementById('notifType');
  if (typeEl) { typeEl.value = t.type; toggleNotifTypeFields(); }

  var titleEl = document.getElementById('notifTitle');
  if (titleEl) titleEl.value = t.title || '';

  var msgEl = document.getElementById('notifMessage');
  if (msgEl) msgEl.value = t.message || '';

  var imgEl = document.getElementById('notifImage');
  if (imgEl) { imgEl.value = t.image || ''; previewNotifImage(); }

  var linkEl = document.getElementById('notifLink');
  if (linkEl) linkEl.value = t.link || '';

  var postEl = document.getElementById('notifPostBody');
  if (postEl) postEl.value = t.postBody || '';

  var tagEl = document.getElementById('notifTag');
  if (tagEl) tagEl.value = t.tag || '';

  updateCharacterCounters();

  // Highlight filled fields briefly
  [titleEl, msgEl].forEach(function(el) {
    if (el) {
      el.style.transition = 'background .3s';
      el.style.background = '#eff6ff';
      setTimeout(function() { el.style.background = ''; }, 1000);
    }
  });
}

function openScheduledNotifs() {
  var scheduled = [];
  try { var s = localStorage.getItem('mycart_agency_scheduled_notifs'); if (s) scheduled = JSON.parse(s); } catch(e) {}
  
  var html = '<div style="padding:20px;max-height:400px;overflow-y:auto"><h3 style="font-size:1.1rem;margin-bottom:16px">الإشعارات المجدولة</h3>';
  if (!scheduled.length) {
    html += '<div style="text-align:center;padding:40px;color:var(--text-gray)"><i class="fa-solid fa-clock" style="font-size:2rem;margin-bottom:12px"></i><p>لا توجد إشعارات مجدولة</p></div>';
  } else {
    html += '<div style="display:grid;gap:12px">';
    scheduled.forEach(function(n, i) {
      var timeStr = new Date(n.schedule).toLocaleString('ar-SA');
      html += '<div style="border:1px solid var(--fast7-border);border-radius:10px;padding:16px;background:#f9fafb"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px"><div style="font-weight:800;font-size:.85rem">' + n.title + '</div><div style="font-size:.75rem;color:var(--fast7-gold)"><i class="fa-solid fa-clock"></i> ' + timeStr + '</div></div><div style="font-size:.8rem;color:var(--text-gray)">الهدف: ' + (n.target === 'all' ? 'كل المتاجر' : 'متجر محدد') + '</div></div>';
    });
    html += '</div>';
  }
  html += '</div>';
  showAlertModal(html);
}

function loadNotifStats() {
  var stats = { total: 0, read: 0, scheduled: 0, failed: 0 };
  try { var n = localStorage.getItem('mycart_agency_notifications'); if (n) stats.total = JSON.parse(n).length; } catch(e) {}
  if (stats.total > 0) {
    stats.read = Math.floor(stats.total * 0.65);
    stats.scheduled = Math.floor(stats.total * 0.15);
    stats.failed = Math.floor(stats.total * 0.12);
  }
  
  document.getElementById('statTotalSent').textContent = stats.total;
  document.getElementById('statReadRate').textContent = stats.total > 0 ? (stats.read/stats.total*100).toFixed(0) + '%' : '0%';
  document.getElementById('statScheduled').textContent = stats.scheduled;
  document.getElementById('statFailed').textContent = stats.failed;
}

function loadAllNotifs() {
  var sent = [];
  try { var r = localStorage.getItem('mycart_agency_notifications'); if (r) sent = JSON.parse(r); } catch(e) {}
  
  var drafts = [];
  try { var d = localStorage.getItem('mycart_agency_notification_drafts'); if (d) drafts = JSON.parse(d); } catch(e) {}
  
  var scheduled = [];
  try { var sc = localStorage.getItem('mycart_agency_scheduled_notifs'); if (sc) scheduled = JSON.parse(sc); } catch(e) {}
  
  var failed = [];
  try { var f = localStorage.getItem('mycart_agency_failed_notifs'); if (f) failed = JSON.parse(f); } catch(e) {}
  
  return { sent: sent, drafts: drafts, scheduled: scheduled, failed: failed };
}

function renderNotifs(notifs, container) {
  if (!container) return;
  container.innerHTML = notifs.map(function(n) {
    var t = n.type || 'general';
    var tl = NOTIF_TYPE_LABELS[t] || '📢 إعلان';
    var tc = NOTIF_TYPE_COLORS[t] || '#8b5cf6';
    var targetStr = n.target === 'all' ? '🌐 كل المتاجر' : '🏪 ' + (n.targetNames || getStoreName(n.target));
    var countStr = n.targetCount ? '<span style="font-size:.65rem;color:#64748b">(' + n.targetCount + ' متجر' + (n.targetCount > 1 ? '' : '') + ')</span>' : '';
    var statusBadge = n.isDraft ? '<span style="background:#fef3c7;color:#92400e;padding:2px 8px;border-radius:999px;font-size:.65rem;font-weight:700;margin-right:8px">مسودة</span>' : (n.isScheduled ? '<span style="background:#dbeafe;color:#1e40af;padding:2px 8px;border-radius:999px;font-size:.65rem;font-weight:700;margin-right:8px"><i class="fa-solid fa-clock"></i> مجدولة</span>' : '');
    return '<div style="background:#fff;border-radius:14px;margin-bottom:12px;border:1.5px solid #e2e8f0;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,.04);transition:box-shadow .2s" onmouseover="this.style.boxShadow=\'0 4px 16px rgba(0,0,0,.08)\'" onmouseout="this.style.boxShadow=\'0 1px 4px rgba(0,0,0,.04)\'">'
      + '<div style="display:flex;align-items:stretch;gap:0">'
      + '<div style="width:5px;flex-shrink:0;background:' + tc + '"></div>'
      + '<div style="flex:1;padding:14px 16px;min-width:0">'
      + '<div style="display:flex;align-items:center;gap:6px;margin-bottom:8px;flex-wrap:wrap">'
      + '<span style="font-size:.6rem;padding:2px 8px;border-radius:999px;background:' + tc + '20;color:' + tc + ';font-weight:800;white-space:nowrap">' + tl + '</span>'
      + statusBadge
      + '<span style="font-size:.65rem;color:#64748b">' + targetStr + '</span>'
      + countStr
      + '<span style="font-size:.6rem;color:#94a3b8;margin-right:auto">' + n.date + '</span>'
      + '</div>'
      + '<div style="font-size:.88rem;font-weight:900;color:#1e293b;margin-bottom:4px">' + n.title + '</div>'
      + '<div style="font-size:.78rem;color:#475569;line-height:1.5;margin-bottom:8px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">' + n.message + '</div>'
      + ((n.image || n.link) ? '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:8px">' + (n.image ? '<img src="' + n.image + '" style="width:40px;height:40px;border-radius:8px;object-fit:cover;border:1px solid #e2e8f0" onerror="this.style.display=\'none\'">' : '') + (n.link ? '<a href="' + n.link + '" target="_blank" style="font-size:.72rem;color:var(--fast7-blue);font-weight:700;text-decoration:none;display:inline-flex;align-items:center;gap:4px"><i class="fa-solid fa-link"></i> ' + n.link + '</a>' : '') + '</div>' : '')
      + '</div>'
      + '</div>'
      + '</div>';
  }).join('');
}

function filterNotifs(notifs, filter, searchTerm) {
  if (!notifs || !Array.isArray(notifs)) return [];
  return notifs.filter(function(n) {
    var matches = true;
    if (filter !== 'all') {
      if (filter === 'sent' && n.isDraft) matches = false;
      else if (filter === 'sent' && n.isScheduled) matches = false;
      else if (filter === 'draft' && !n.isDraft) matches = false;
      else if (filter === 'scheduled' && !n.isScheduled) matches = false;
      else if (filter === 'failed') {
        if (!n.failed) matches = false;
      }
    }
    if (searchTerm && searchTerm.trim()) {
      var term = searchTerm.toLowerCase();
      matches = matches && (n.title.toLowerCase().includes(term) || n.message.toLowerCase().includes(term));
    }
    return matches;
  });
}

function updateTargetStoreList() {
  var target = document.getElementById('notifTarget');
  var specificGroup = document.getElementById('specificStoreGroup');
  var planGroup = document.getElementById('planFilterGroup');
  if (target === 'specific') {
    specificGroup.style.display = 'block';
    populateSpecificStoreSelect();
  } else {
    specificGroup.style.display = 'none';
  }
  if (target === 'plan') {
    planGroup.style.display = 'block';
  } else {
    planGroup.style.display = 'none';
  }
}

function populateSpecificStoreSelect() {
  var sel = document.getElementById('notifSpecificStore');
  if (!sel) return;
  var raw = localStorage.getItem('mycart_agency_stores_list');
  var stores = [];
  if (raw) { try { stores = JSON.parse(raw); } catch(e) {} }
  stores = stores.filter(function(s) { return s.id !== 'default'; });
  sel.innerHTML = '<option value="">اختر متجراً...</option>';
  stores.forEach(function(s) {
    sel.innerHTML += '<option value="' + s.id + '">🏪 ' + s.name + '</option>';
  });
}

function insertHtmlTag(tag) {
  var textarea = document.getElementById('notifPostBody');
  if (!textarea) return;
  var insert = '';
  switch(tag) {
    case 'b': insert = '<b></b>'; break;
    case 'i': insert = '<i></i>'; break;
    case 'a': insert = '<a href="#" target="_blank"></a>'; break;
    case 'ul': insert = '<ul><li></li></ul>'; break;
    case 'img': insert = '<img src="your-image-url.jpg" alt="Image">'; break;
  }
  var start = textarea.selectionStart;
  var text = textarea.value;
  var before = text.substring(0, start);
  var after = text.substring(start);
  textarea.value = before + insert + after;
  setTimeout(function(){ textarea.focus(); }, 0);
}

function previewNotifImage() {
  var input = document.getElementById('notifImage');
  var preview = document.getElementById('notifImagePreview');
  if (!input || !preview) return;
  var url = input.value.trim();
  if (url && (url.startsWith('http://') || url.startsWith('https://'))) {
    preview.src = url;
    preview.style.display = 'block';
  }
}

function updateCharacterCounters() {
  var title = document.getElementById('notifTitle');
  var msg = document.getElementById('notifMessage');
  var titleCount = document.getElementById('titleCharCount');
  var msgCount = document.getElementById('msgCharCount');
  var titlePreview = document.getElementById('titlePreview');
  var msgPreview = document.getElementById('msgPreview');
  
  if (title && titleCount && titlePreview) {
    var len = title.value.length;
    titleCount.textContent = len;
    if (len > 100) {
      title.style.borderColor = '#ef4444';
      titlePreview.style.display = 'none';
    } else {
      title.style.borderColor = '';
      titlePreview.style.display = 'block';
    }
  }
  if (msg && msgCount && msgPreview) {
    var len = msg.value.length;
    msgCount.textContent = len;
    if (len > 500) {
      msg.style.borderColor = '#ef4444';
      msgPreview.style.display = 'none';
    } else {
      msg.style.borderColor = '';
      msgPreview.style.display = 'block';
    }
  }
}

function saveNotifDraft() {
  var title = document.getElementById('notifTitle');
  var msg = document.getElementById('notifMessage');
  if (!title || !msg) return;
  if (!title.value.trim() || !msg.value.trim()) {
    showAlertModal('⚠️ اكتب عنوان ونص الإشعار');
    return;
  }
  
  var draftObj = {
    id: Date.now(),
    title: title.value,
    message: msg.value,
    target: document.getElementById('notifTarget').value,
    type: document.getElementById('notifType').value,
    postBody: document.getElementById('notifPostBody') ? document.getElementById('notifPostBody').value : '',
    image: document.getElementById('notifImage').value,
    link: document.getElementById('notifLink').value,
    date: new Date().toLocaleDateString('ar-SA'),
    isDraft: true
  };
  
  var drafts = [];
  try { var r = localStorage.getItem('mycart_agency_notification_drafts'); if (r) drafts = JSON.parse(r); } catch(e) {}
  drafts.unshift(draftObj);
  localStorage.setItem('mycart_agency_notification_drafts', JSON.stringify(drafts));
  
  showAlertModal('💾 تم حفظ الإشعار كمسودة!');
}

// openNotifTemplates and fillNotifFromTemplate — see primary definitions above

function openScheduledNotifs() {
  var scheduled = [];
  try { var s = localStorage.getItem('mycart_agency_scheduled_notifs'); if (s) scheduled = JSON.parse(s); } catch(e) {}
  
  var html = '<div style="padding:20px;max-height:400px;overflow-y:auto"><h3 style="font-size:1.1rem;margin-bottom:16px">الإشعارات المجدولة</h3>';
  if (!scheduled.length) {
    html += '<div style="text-align:center;padding:40px;color:var(--text-gray)"><i class="fa-solid fa-clock" style="font-size:2rem;margin-bottom:12px"></i><p>لا توجد إشعارات مجدولة</p></div>';
  } else {
    html += '<div style="display:grid;gap:12px">';
    scheduled.forEach(function(n, i) {
      var timeStr = new Date(n.schedule).toLocaleString('ar-SA');
      html += '<div style="border:1px solid var(--fast7-border);border-radius:10px;padding:16px;background:#f9fafb"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px"><div style="font-weight:800;font-size:.85rem">' + n.title + '</div><div style="font-size:.75rem;color:var(--fast7-gold)"><i class="fa-solid fa-clock"></i> ' + timeStr + '</div></div><div style="font-size:.8rem;color:var(--text-gray)">الهدف: ' + (n.target === 'all' ? 'كل المتاجر' : 'متجر محدد') + '</div></div>';
    });
    html += '</div>';
  }
  html += '</div>';
  showAlertModal(html);
}

function loadNotifStats() {
  var stats = { total: 0, read: 0, scheduled: 0, failed: 0 };
  try { var n = localStorage.getItem('mycart_agency_notifications'); if (n) stats.total = JSON.parse(n).length; } catch(e) {}
  if (stats.total > 0) {
    stats.read = Math.floor(stats.total * 0.65);
    stats.scheduled = Math.floor(stats.total * 0.15);
    stats.failed = Math.floor(stats.total * 0.12);
  }
  
  document.getElementById('statTotalSent').textContent = stats.total;
  document.getElementById('statReadRate').textContent = stats.total > 0 ? (stats.read/stats.total*100).toFixed(0) + '%' : '0%';
  document.getElementById('statScheduled').textContent = stats.scheduled;
  document.getElementById('statFailed').textContent = stats.failed;
}

function loadAllNotifs() {
  var sent = [];
  try { var r = localStorage.getItem('mycart_agency_notifications'); if (r) sent = JSON.parse(r); } catch(e) {}
  
  var drafts = [];
  try { var d = localStorage.getItem('mycart_agency_notification_drafts'); if (d) drafts = JSON.parse(d); } catch(e) {}
  
  var scheduled = [];
  try { var sc = localStorage.getItem('mycart_agency_scheduled_notifs'); if (sc) scheduled = JSON.parse(sc); } catch(e) {}
  
  var failed = [];
  try { var f = localStorage.getItem('mycart_agency_failed_notifs'); if (f) failed = JSON.parse(f); } catch(e) {}
  
  return { sent: sent, drafts: drafts, scheduled: scheduled, failed: failed };
}

function renderNotifs(notifs, container) {
  if (!container) return;
  container.innerHTML = notifs.map(function(n) {
    var t = n.type || 'general';
    var tl = NOTIF_TYPE_LABELS[t] || '📢 إعلان';
    var tc = NOTIF_TYPE_COLORS[t] || '#8b5cf6';
    var targetStr = n.target === 'all' ? '🌐 كل المتاجر' : '🏪 ' + (n.targetNames || getStoreName(n.target));
    var countStr = n.targetCount ? '<span style="font-size:.65rem;color:#64748b">(' + n.targetCount + ' متجر' + (n.targetCount > 1 ? '' : '') + ')</span>' : '';
    var statusBadge = n.isDraft ? '<span style="background:#fef3c7;color:#92400e;padding:2px 8px;border-radius:999px;font-size:.65rem;font-weight:700;margin-right:8px">مسودة</span>' : (n.isScheduled ? '<span style="background:#dbeafe;color:#1e40af;padding:2px 8px;border-radius:999px;font-size:.65rem;font-weight:700;margin-right:8px"><i class="fa-solid fa-clock"></i> مجدولة</span>' : '');
    return '<div style="background:#fff;border-radius:14px;margin-bottom:12px;border:1.5px solid #e2e8f0;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,.04);transition:box-shadow .2s" onmouseover="this.style.boxShadow=\'0 4px 16px rgba(0,0,0,.08)\'" onmouseout="this.style.boxShadow=\'0 1px 4px rgba(0,0,0,.04)\'">'
      + '<div style="display:flex;align-items:stretch;gap:0">'
      + '<div style="width:5px;flex-shrink:0;background:' + tc + '"></div>'
      + '<div style="flex:1;padding:14px 16px;min-width:0">'
      + '<div style="display:flex;align-items:center;gap:6px;margin-bottom:8px;flex-wrap:wrap">'
      + '<span style="font-size:.6rem;padding:2px 8px;border-radius:999px;background:' + tc + '20;color:' + tc + ';font-weight:800;white-space:nowrap">' + tl + '</span>'
      + statusBadge
      + '<span style="font-size:.65rem;color:#64748b">' + targetStr + '</span>'
      + countStr
      + '<span style="font-size:.6rem;color:#94a3b8;margin-right:auto">' + n.date + '</span>'
      + '</div>'
      + '<div style="font-size:.88rem;font-weight:900;color:#1e293b;margin-bottom:4px">' + n.title + '</div>'
      + '<div style="font-size:.78rem;color:#475569;line-height:1.5;margin-bottom:8px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">' + n.message + '</div>'
      + ((n.image || n.link) ? '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:8px">' + (n.image ? '<img src="' + n.image + '" style="width:40px;height:40px;border-radius:8px;object-fit:cover;border:1px solid #e2e8f0" onerror="this.style.display=\'none\'">' : '') + (n.link ? '<a href="' + n.link + '" target="_blank" style="font-size:.72rem;color:var(--fast7-blue);font-weight:700;text-decoration:none;display:inline-flex;align-items:center;gap:4px"><i class="fa-solid fa-link"></i> ' + n.link + '</a>' : '') + '</div>' : '')
      + '</div>'
      + '</div>'
      + '</div>';
  }).join('');
}

function filterNotifs(notifs, filter, searchTerm) {
  if (!notifs || !Array.isArray(notifs)) return [];
  return notifs.filter(function(n) {
    var matches = true;
    if (filter !== 'all') {
      if (filter === 'sent' && n.isDraft) matches = false;
      else if (filter === 'sent' && n.isScheduled) matches = false;
      else if (filter === 'draft' && !n.isDraft) matches = false;
      else if (filter === 'scheduled' && !n.isScheduled) matches = false;
      else if (filter === 'failed') {
        if (!n.failed) matches = false;
      }
    }
    if (searchTerm && searchTerm.trim()) {
      var term = searchTerm.toLowerCase();
      matches = matches && (n.title.toLowerCase().includes(term) || n.message.toLowerCase().includes(term));
    }
    return matches;
  });
}

function updateTargetStoreList() {
  var target = document.getElementById('notifTarget').value;
  var specificGroup = document.getElementById('specificStoreGroup');
  var planGroup = document.getElementById('planFilterGroup');
  if (target === 'specific') {
    specificGroup.style.display = 'block';
    populateSpecificStoreSelect();
  } else {
    specificGroup.style.display = 'none';
  }
  if (target === 'plan') {
    planGroup.style.display = 'block';
  } else {
    planGroup.style.display = 'none';
  }
}

function populateSpecificStoreSelect() {
  var sel = document.getElementById('notifSpecificStore');
  if (!sel) return;
  var raw = localStorage.getItem('mycart_agency_stores_list');
  var stores = [];
  if (raw) { try { stores = JSON.parse(raw); } catch(e) {} }
  stores = stores.filter(function(s) { return s.id !== 'default'; });
  sel.innerHTML = '<option value="">اختر متجراً...</option>';
  stores.forEach(function(s) {
    sel.innerHTML += '<option value="' + s.id + '">🏪 ' + s.name + '</option>';
  });
}

function insertHtmlTag(tag) {
  var textarea = document.getElementById('notifPostBody');
  if (!textarea) return;
  var start = textarea.selectionStart;
  var end = textarea.selectionEnd;
  var text = textarea.value;
  var before = text.substring(0, start);
  var after = text.substring(end);
  
  if (tag === 'b') {
    textarea.value = before + '<b></b>' + after;
  } else if (tag === 'i') {
    textarea.value = before + '<i></i>' + after;
  } else if (tag === 'a') {
    textarea.value = before + '<a href="#" target="_blank"></a>' + after;
  } else if (tag === 'ul') {
    textarea.value = before + '<ul><li></li></ul>' + after;
  } else if (tag === 'img') {
    textarea.value = before + '<img src="your-image-url.jpg" alt="Image">' + after;
  }
  
  textarea.focus();
}

function previewNotifImage() {
  var input = document.getElementById('notifImage');
  var preview = document.getElementById('notifImagePreview');
  if (!input || !preview) return;
  var url = input.value.trim();
  if (url && (url.startsWith('http://') || url.startsWith('https://'))) {
    preview.src = url;
    preview.style.display = 'block';
  } else {
    preview.style.display = 'none';
  }
}

function updateCharacterCounters() {
  var title = document.getElementById('notifTitle');
  var msg = document.getElementById('notifMessage');
  var titleCount = document.getElementById('titleCharCount');
  var msgCount = document.getElementById('msgCharCount');
  var titlePreview = document.getElementById('titlePreview');
  var msgPreview = document.getElementById('msgPreview');
  
  if (title && titleCount && titlePreview) {
    var len = title.value.length;
    titleCount.textContent = len;
    if (len > 100) {
      title.style.borderColor = '#ef4444';
      titlePreview.style.display = 'none';
    } else {
      title.style.borderColor = '';
      titlePreview.style.display = 'block';
    }
  }
  if (msg && msgCount && msgPreview) {
    var len = msg.value.length;
    msgCount.textContent = len;
    if (len > 500) {
      msg.style.borderColor = '#ef4444';
      msgPreview.style.display = 'none';
    } else {
      msg.style.borderColor = '';
      msgPreview.style.display = 'block';
    }
  }
}

function saveNotifDraft() {
  var title = document.getElementById('notifTitle');
  var msg = document.getElementById('notifMessage');
  var target = document.getElementById('notifTarget');
  var type = document.getElementById('notifType');
  if (!title || !msg) return;
  if (!title.value.trim() || !msg.value.trim()) { showAlertModal('⚠️ اكتب عنوان ونص الإشعار'); return; }
  
  var draftObj = {
    id: Date.now(),
    title: title.value,
    message: msg.value,
    target: target.value,
    type: type.value,
    postBody: type.value === 'post' ? document.getElementById('notifPostBody').value : '',
    image: document.getElementById('notifImage').value,
    link: document.getElementById('notifLink').value,
    date: new Date().toLocaleDateString('ar-SA'),
    isDraft: true
  };
  
  var drafts = [];
  try { var r = localStorage.getItem('mycart_agency_notification_drafts'); if (r) drafts = JSON.parse(r); } catch(e) {}
  drafts.unshift(draftObj);
  localStorage.setItem('mycart_agency_notification_drafts', JSON.stringify(drafts));
  
  showAlertModal('💾 تم حفظ الإشعار كمسودة!');
}



function openScheduledNotifs() {
  var scheduled = [];
  try { var s = localStorage.getItem('mycart_agency_scheduled_notifs'); if (s) scheduled = JSON.parse(s); } catch(e) {}
  
  var html = '<div style="padding:20px;max-height:400px;overflow-y:auto"><h3 style="font-size:1.1rem;margin-bottom:16px">الإشعارات المجدولة</h3>';
  if (!scheduled.length) {
    html += '<div style="text-align:center;padding:40px;color:var(--text-gray)"><i class="fa-solid fa-clock" style="font-size:2rem;margin-bottom:12px"></i><p>لا توجد إشعارات مجدولة</p></div>';
  } else {
    html += '<div style="display:grid;gap:12px">';
    scheduled.forEach(function(n, i) {
      var timeStr = new Date(n.schedule).toLocaleString('ar-SA');
      html += '<div style="border:1px solid var(--fast7-border);border-radius:10px;padding:16px;background:#f9fafb"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px"><div style="font-weight:800;font-size:.85rem">' + n.title + '</div><div style="font-size:.75rem;color:var(--fast7-gold)"><i class="fa-solid fa-clock"></i> ' + timeStr + '</div></div><div style="font-size:.8rem;color:var(--text-gray)">الهدف: ' + (n.target === 'all' ? 'كل المتاجر' : 'متجر محدد') + '</div></div>';
    });
    html += '</div>';
  }
  html += '</div>';
  
  showAlertModal(html);
}

function loadNotifStats() {
  var stats = { total: 0, read: 0, scheduled: 0, failed: 0 };
  try { var n = localStorage.getItem('mycart_agency_notifications'); if (n) stats.total = JSON.parse(n).length; } catch(e) {}
  if (stats.total > 0) {
    stats.read = Math.floor(stats.total * 0.65);
    stats.scheduled = Math.floor(stats.total * 0.15);
    stats.failed = Math.floor(stats.total * 0.12);
  }
  
  document.getElementById('statTotalSent').textContent = stats.total;
  document.getElementById('statReadRate').textContent = stats.total > 0 ? (stats.read/stats.total*100).toFixed(0) + '%' : '0%';
  document.getElementById('statScheduled').textContent = stats.scheduled;
  document.getElementById('statFailed').textContent = stats.failed;
}

function loadAllNotifs() {
  var sent = [];
  try { var r = localStorage.getItem('mycart_agency_notifications'); if (r) sent = JSON.parse(r); } catch(e) {}
  
  var drafts = [];
  try { var d = localStorage.getItem('mycart_agency_notification_drafts'); if (d) drafts = JSON.parse(d); } catch(e) {}
  
  var scheduled = [];
  try { var sc = localStorage.getItem('mycart_agency_scheduled_notifs'); if (sc) scheduled = JSON.parse(sc); } catch(e) {}
  
  var failed = [];
  try { var f = localStorage.getItem('mycart_agency_failed_notifs'); if (f) failed = JSON.parse(f); } catch(e) {}
  
  return { sent: sent, drafts: drafts, scheduled: scheduled, failed: failed };
}

function renderNotifs(notifs, container) {
  if (!container) return;
  container.innerHTML = notifs.map(function(n) {
    var t = n.type || 'general';
    var tl = NOTIF_TYPE_LABELS[t] || '📢 إعلان';
    var tc = NOTIF_TYPE_COLORS[t] || '#8b5cf6';
    var targetStr = n.target === 'all' ? '🌐 كل المتاجر' : '🏪 ' + (n.targetNames || getStoreName(n.target));
    var countStr = n.targetCount ? '<span style="font-size:.65rem;color:#64748b">(' + n.targetCount + ' متجر' + (n.targetCount > 1 ? '' : '') + ')</span>' : '';
    var statusBadge = n.isDraft ? '<span style="background:#fef3c7;color:#92400e;padding:2px 8px;border-radius:999px;font-size:.65rem;font-weight:700;margin-right:8px">مسودة</span>' : (n.isScheduled ? '<span style="background:#dbeafe;color:#1e40af;padding:2px 8px;border-radius:999px;font-size:.65rem;font-weight:700;margin-right:8px"><i class="fa-solid fa-clock"></i> مجدولة</span>' : '');
    return '<div style="background:#fff;border-radius:14px;margin-bottom:12px;border:1.5px solid #e2e8f0;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,.04);transition:box-shadow .2s" onmouseover="this.style.boxShadow=\'0 4px 16px rgba(0,0,0,.08)\'" onmouseout="this.style.boxShadow=\'0 1px 4px rgba(0,0,0,.04)\'">'
      + '<div style="display:flex;align-items:stretch;gap:0">'
      + '<div style="width:5px;flex-shrink:0;background:' + tc + '"></div>'
      + '<div style="flex:1;padding:14px 16px;min-width:0">'
      + '<div style="display:flex;align-items:center;gap:6px;margin-bottom:8px;flex-wrap:wrap">'
      + '<span style="font-size:.6rem;padding:2px 8px;border-radius:999px;background:' + tc + '20;color:' + tc + ';font-weight:800;white-space:nowrap">' + tl + '</span>'
      + statusBadge
      + '<span style="font-size:.65rem;color:#64748b">' + targetStr + '</span>'
      + countStr
      + '<span style="font-size:.6rem;color:#94a3b8;margin-right:auto">' + n.date + '</span>'
      + '</div>'
      + '<div style="font-size:.88rem;font-weight:900;color:#1e293b;margin-bottom:4px">' + n.title + '</div>'
      + '<div style="font-size:.78rem;color:#475569;line-height:1.5;margin-bottom:8px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">' + n.message + '</div>'
      + ((n.image || n.link) ? '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:8px">' + (n.image ? '<img src="' + n.image + '" style="width:40px;height:40px;border-radius:8px;object-fit:cover;border:1px solid #e2e8f0" onerror="this.style.display=\'none\'">' : '') + (n.link ? '<a href="' + n.link + '" target="_blank" style="font-size:.72rem;color:var(--fast7-blue);font-weight:700;text-decoration:none;display:inline-flex;align-items:center;gap:4px"><i class="fa-solid fa-link"></i> ' + n.link + '</a>' : '') + '</div>' : '')
      + '</div>'
      + '</div>'
      + '</div>';
  }).join('');
}

function filterNotifs(notifs, filter, searchTerm) {
  if (!notifs || !Array.isArray(notifs)) return [];
  return notifs.filter(function(n) {
    var matches = true;
    if (filter !== 'all') {
      if (filter === 'sent' && n.isDraft) matches = false;
      else if (filter === 'sent' && n.isScheduled) matches = false;
      else if (filter === 'draft' && !n.isDraft) matches = false;
      else if (filter === 'scheduled' && !n.isScheduled) matches = false;
      else if (filter === 'failed') {
        if (!n.failed) matches = false;
      }
    }
    if (searchTerm && searchTerm.trim()) {
      var term = searchTerm.toLowerCase();
      matches = matches && (n.title.toLowerCase().includes(term) || n.message.toLowerCase().includes(term));
    }
    return matches;
  });
}

function toggleNotifForm() {
  // Ensure we are on notifications tab
  var notifTab = document.getElementById('tab-notifications');
  if (notifTab && !notifTab.classList.contains('active')) {
    var notifNavBtn = document.querySelector('button[onclick*="tab-notifications"]');
    if (typeof switchDashTab === 'function') {
      switchDashTab('tab-notifications', notifNavBtn);
    }
  }

  var box = document.getElementById('notifFormBox');
  var btn = document.getElementById('notifFormToggleBtn');
  if (!box) return;
  
  box.style.display = 'block';
  if (btn) {
    btn.innerHTML = '<i class="fa-solid fa-wand-magic-sparkles"></i> <span>إنشاء إشعار جديد</span>';
  }
  
  box.scrollIntoView({ behavior: 'smooth', block: 'start' });
  setTimeout(function() {
    var titleInput = document.getElementById('notifTitle');
    if (titleInput) titleInput.focus();
  }, 300);
}

function populateNotifTargets() {
  var sel = document.getElementById('notifTarget');
  if (!sel) return;
  var val = sel.value;
  sel.innerHTML = '<option value="all">🌐 كل المتاجر</option>';
  var raw = localStorage.getItem('mycart_agency_stores_list');
  var stores = [];
  if (raw) { try { stores = JSON.parse(raw); } catch(e) {} }
  // Ensure default store is included
  var hasDefault = stores.some(function(s){ return s.id === 'default'; });
  if (!hasDefault) {
    var defaultName = localStorage.getItem('mycart_store_name') || 'المتجر الرئيسي';
    stores.unshift({ id:'default', name:defaultName });
  }
  stores.forEach(function(s){ sel.innerHTML += '<option value="'+s.id+'">🏪 '+s.name+'</option>'; });
  sel.value = val;
}

function getStoreName(id) {
  if (id === 'default' || id === 'all') return 'المتجر الرئيسي';
  try { var raw = localStorage.getItem('mycart_agency_stores_list'); if (raw) { var stores = JSON.parse(raw); for (var i=0;i<stores.length;i++) { if (stores[i].id === id) return stores[i].name; } } } catch(e) {}
  return id;
}

function agencySendNotif() {
  var target = document.getElementById('notifTarget').value;
  var type = document.getElementById('notifType').value;
  var title = document.getElementById('notifTitle').value.trim();
  var msg = document.getElementById('notifMessage').value.trim();
  var image = document.getElementById('notifImage').value.trim();
  var link = document.getElementById('notifLink').value.trim();
  var postBody = type === 'post' ? document.getElementById('notifPostBody').value.trim() : '';
  if (!title || !msg) { showAlertModal('⚠️ اكتب عنوان ونص الإشعار'); return; }
  if (type === 'post' && !postBody) { showAlertModal('⚠️ اكتب محتوى المقال للإشعار من نوع مقال'); return; }
  // Calculate target details
  var targetNames = '';
  var targetCount = 0;
  if (target === 'all') {
    var storeList = []; try { var r=localStorage.getItem('mycart_agency_stores_list'); if(r) storeList=JSON.parse(r); } catch(e) {}
    var hasDefault = storeList.some(function(s){return s.id==='default';});
    if (!hasDefault) { var dn=localStorage.getItem('mycart_store_name')||'المتجر الرئيسي'; storeList.unshift({id:'default',name:dn}); }
    targetCount = storeList.length;
    targetNames = storeList.map(function(s){return s.name;}).join('، ');
  } else {
    targetCount = 1;
    targetNames = getStoreName(target);
  }
  var notifObj = { id:Date.now(), target:target, type:type, title:title, message:msg, image:image, link:link, date:new Date().toLocaleDateString('ar-SA'), targetCount:targetCount, targetNames:targetNames };
  if (type === 'post') notifObj.postBody = postBody;
  var list = [];
  try { var r = localStorage.getItem('mycart_agency_notifications'); if (r) list = JSON.parse(r); } catch(e) {}
  list.unshift(notifObj);
  localStorage.setItem('mycart_agency_notifications', JSON.stringify(list));
  // Also save to store inbox(es) so badge appears on store admin
  var storeNotifObj = { type:type, title:title, message:msg, image:image, link:link, date:new Date().toLocaleDateString('ar-SA') };
  if (type === 'post') storeNotifObj.postBody = postBody;

  if (target === 'all') {
    var allList = []; try { var r2 = localStorage.getItem('mycart_store_notifications'); if (r2) allList = JSON.parse(r2); } catch(e) {}
    allList.unshift(storeNotifObj);
    localStorage.setItem('mycart_store_notifications', JSON.stringify(allList));

    var defAll = []; try { var rdef = localStorage.getItem('mycart_store_notifications_default'); if (rdef) defAll = JSON.parse(rdef); } catch(e) {}
    defAll.unshift(storeNotifObj);
    localStorage.setItem('mycart_store_notifications_default', JSON.stringify(defAll));

    try {
      var storesRaw = localStorage.getItem('mycart_agency_stores_list');
      if (storesRaw) {
        JSON.parse(storesRaw).forEach(function(s){
          var k = 'mycart_store_notifications_' + s.id;
          var sl = []; try { var sr = localStorage.getItem(k); if (sr) sl = JSON.parse(sr); } catch(e){}
          sl.unshift(storeNotifObj);
          localStorage.setItem(k, JSON.stringify(sl));
        });
      }
    } catch(e) {}
  } else {
    var storeKeys = ['mycart_store_notifications', 'mycart_store_notifications_default'];
    if (target !== 'default') storeKeys.push('mycart_store_notifications_' + target);
    storeKeys.forEach(function(storeKey) {
      var storeList2 = []; try { var r3 = localStorage.getItem(storeKey); if (r3) storeList2 = JSON.parse(r3); } catch(e) {}
      storeList2.unshift(storeNotifObj);
      localStorage.setItem(storeKey, JSON.stringify(storeList2));
    });
  }
  document.getElementById('notifTitle').value = '';
  document.getElementById('notifMessage').value = '';
  document.getElementById('notifImage').value = '';
  document.getElementById('notifLink').value = '';
  if (document.getElementById('notifPostBody')) document.getElementById('notifPostBody').value = '';

  // Switch tab to Notification History tab & refresh list
  if (typeof switchDashTab === 'function') {
    var notifTabBtn = document.querySelector('button[onclick*="tab-notifications"]');
    switchDashTab('tab-notifications', notifTabBtn);
  }
  if (typeof initNotificationsTab === 'function') {
    initNotificationsTab();
  } else {
    loadSentNotifs();
    loadNotifStats();
  }
  
  showAlertModal('📢 تم إرسال الإشعار بنجاح وتوثيقه في السجل!');
}

var NOTIF_TYPE_LABELS = { general:'📢 إعلان', payment:'💰 تذكير دفع', post:'📝 مقال', update:'🔄 تحديث', offer:'🏷️ عرض', marketing:'📣 تسويق' };
var NOTIF_TYPE_COLORS = { general:'#8b5cf6', payment:'#ef4444', post:'#10b981', update:'#3b82f6', offer:'#f59e0b', marketing:'#ec4899' };

function loadSentNotifs() {
  var container = document.getElementById('sentNotifList');
  if (!container) return;
  var list = [];
  try { var r = localStorage.getItem('mycart_agency_notifications'); if (r) list = JSON.parse(r); } catch(e) {}
  var countEl = document.getElementById('sentNotifCount');
  if (countEl) countEl.textContent = list.length + (list.length===1?' إشعار':' إشعارات');
  if (!list.length) { container.innerHTML = '<div style="text-align:center;padding:40px 20px;color:#94a3b8"><div style="font-size:2.5rem;margin-bottom:12px">📭</div><div style="font-size:.9rem;font-weight:700">لا توجد إشعارات مرسلة بعد</div><div style="font-size:.75rem;margin-top:4px">اضغط على "إضافة إشعار" لإنشاء أول إشعار</div></div>'; return; }
  container.innerHTML = list.map(function(n){
    var t=n.type||'general';
    var tl=NOTIF_TYPE_LABELS[t]||'📢 إعلان';
    var tc=NOTIF_TYPE_COLORS[t]||'#8b5cf6';
    var targetStr = n.target==='all' ? '🌐 كل المتاجر' : '🏪 '+(n.targetNames||getStoreName(n.target));
    var countStr = n.targetCount ? '<span style="font-size:.65rem;color:#64748b">('+n.targetCount+' متجر'+(n.targetCount>1?'':'')+')</span>' : '';
    return '<div style="background:#fff;border-radius:14px;margin-bottom:10px;border:1.5px solid #e2e8f0;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,.04);transition:box-shadow .2s" onmouseover="this.style.boxShadow=\'0 4px 16px rgba(0,0,0,.08)\'" onmouseout="this.style.boxShadow=\'0 1px 4px rgba(0,0,0,.04)\'">'
      + '<div style="display:flex;align-items:stretch;gap:0">'
      // Left color stripe
      + '<div style="width:5px;flex-shrink:0;background:'+tc+'"></div>'
      + '<div style="flex:1;padding:14px 16px;min-width:0">'
      // Top row: type badge + target + date
      + '<div style="display:flex;align-items:center;gap:6px;margin-bottom:8px;flex-wrap:wrap">'
      + '<span style="font-size:.6rem;padding:2px 8px;border-radius:999px;background:'+tc+'20;color:'+tc+';font-weight:800;white-space:nowrap">'+tl+'</span>'
      + '<span style="font-size:.65rem;color:#64748b">'+targetStr+'</span>'
      + countStr
      + '<span style="font-size:.6rem;color:#94a3b8;margin-right:auto">'+n.date+'</span>'
      + '</div>'
      // Title
      + '<div style="font-size:.88rem;font-weight:900;color:#1e293b;margin-bottom:4px">'+n.title+'</div>'
      // Message
      + '<div style="font-size:.78rem;color:#475569;line-height:1.5;margin-bottom:8px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">'+n.message+'</div>'
      // Image + link row
      + ((n.image||n.link) ? '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:8px">'+(n.image?'<img src="'+n.image+'" style="width:40px;height:40px;border-radius:8px;object-fit:cover;border:1px solid #e2e8f0" onerror="this.style.display=\'none\'">':'')+(n.link?'<a href="'+n.link+'" target="_blank" style="font-size:.72rem;color:var(--fast7-blue);font-weight:700;text-decoration:none;display:inline-flex;align-items:center;gap:4px"><i class="fa-solid fa-link"></i> '+n.link+'</a>':'')+'</div>' : '')
      // Actions row
      + '<div style="display:flex;align-items:center;gap:6px;padding-top:8px;border-top:1px solid #f1f5f9">'
      + '<button onclick="resendAgencyNotif('+n.id+')" style="background:#f8fafc;border:1px solid #e2e8f0;color:#475569;cursor:pointer;font-size:.65rem;padding:4px 10px;border-radius:6px;font-weight:700;font-family:inherit;display:inline-flex;align-items:center;gap:4px"><i class="fa-solid fa-rotate"></i> إعادة إرسال</button>'
      + '<button onclick="deleteAgencyNotif('+n.id+')" style="background:none;border:none;color:#94a3b8;cursor:pointer;font-size:.8rem;margin-right:auto;padding:4px" title="حذف"><i class="fa-solid fa-trash-can"></i></button>'
      + '</div>'
      + '</div>'
      + '</div>'
      + '</div>';
  }).join('');
}

function resendAgencyNotif(id) {
  var list = [];
  try { var r = localStorage.getItem('mycart_agency_notifications'); if (r) list = JSON.parse(r); } catch(e) {}
  var n = list.find(function(x){ return x.id === id; });
  if (!n) { showAlertModal('⚠️ الإشعار غير موجود'); return; }

  // Switch to the standalone Create Notification page
  if (typeof switchDashTab === 'function') {
    var createTabBtn = document.querySelector('button[onclick*="tab-create-notification"]');
    switchDashTab('tab-create-notification', createTabBtn);
  }

  // Populate form fields
  var targetEl = document.getElementById('notifTarget');
  if (targetEl) { targetEl.value = n.target; updateTargetStoreList(); }

  var typeEl = document.getElementById('notifType');
  if (typeEl) { typeEl.value = n.type || 'general'; toggleNotifTypeFields(); }

  var titleEl = document.getElementById('notifTitle');
  if (titleEl) titleEl.value = n.title || '';

  var msgEl = document.getElementById('notifMessage');
  if (msgEl) msgEl.value = n.message || '';

  var imgEl = document.getElementById('notifImage');
  if (imgEl) { imgEl.value = n.image || ''; previewNotifImage(); }

  var linkEl = document.getElementById('notifLink');
  if (linkEl) linkEl.value = n.link || '';

  var postEl = document.getElementById('notifPostBody');
  if (postEl) postEl.value = n.postBody || '';

  updateCharacterCounters();
  showAlertModal('📋 تم نسخ بيانات الإشعار إلى صفحة الإنشاء. يمكنك مراجعته أو الإرسال مباشرة!');
}

function deleteAgencyNotif(id) {
  var list = [];
  try { var r = localStorage.getItem('mycart_agency_notifications'); if (r) list = JSON.parse(r); } catch(e) {}
  list = list.filter(function(n){ return n.id !== id; });
  localStorage.setItem('mycart_agency_notifications', JSON.stringify(list));
  loadSentNotifs();
}

var _livePreviewTab = 'card';

function switchLivePreviewTab(tab) {
  _livePreviewTab = tab;
  var btnCard = document.getElementById('prevBtnCard');
  var btnArt = document.getElementById('prevBtnArticle');
  if (btnCard && btnArt) {
    if (tab === 'card') {
      btnCard.style.background = '#fff'; btnCard.style.color = '#0f172a'; btnCard.style.fontWeight = '800';
      btnArt.style.background = 'transparent'; btnArt.style.color = '#64748b'; btnArt.style.fontWeight = '700';
    } else {
      btnArt.style.background = '#fff'; btnArt.style.color = '#0f172a'; btnArt.style.fontWeight = '800';
      btnCard.style.background = 'transparent'; btnCard.style.color = '#64748b'; btnCard.style.fontWeight = '700';
    }
  }
  updateLiveCreatePreview();
}

function updateLiveCreatePreview() {
  var box = document.getElementById('liveCreatePreviewBox');
  if (!box) return;

  var type = document.getElementById('notifType') ? document.getElementById('notifType').value : 'general';
  var target = document.getElementById('notifTarget') ? document.getElementById('notifTarget').value : 'all';
  var title = (document.getElementById('notifTitle') && document.getElementById('notifTitle').value.trim()) || 'عنوان الإشعار يظهر هنا';
  var msg = (document.getElementById('notifMessage') && document.getElementById('notifMessage').value.trim()) || 'محتوى الرسالة المختصرة للإشعار يظهر هنا في التنبيهات...';
  var img = document.getElementById('notifImage') ? document.getElementById('notifImage').value.trim() : '';
  var link = document.getElementById('notifLink') ? document.getElementById('notifLink').value.trim() : '';
  var postBody = document.getElementById('notifPostBody') ? document.getElementById('notifPostBody').value.trim() : '';
  var tag = document.getElementById('notifTag') ? document.getElementById('notifTag').value.trim() : '';

  var ntypes = {
    general: { name: 'إعلان عام', icon: '📢', color: '#2563eb', bg: '#eff6ff' },
    payment: { name: 'تذكير دفع', icon: '💰', color: '#dc2626', bg: '#fef2f2' },
    post:    { name: 'مقال / منشور', icon: '📝', color: '#7c3aed', bg: '#f3e8ff' },
    update:  { name: 'تحديث منصة', icon: '🔄', color: '#0891b2', bg: '#e0f2fe' },
    offer:   { name: 'عرض خاص', icon: '🏷️', color: '#db2777', bg: '#fdf2f8' },
    marketing:{ name: 'حملة تسويق', icon: '📣', color: '#ea580c', bg: '#fff7ed' },
    welcome: { name: 'ترحيب', icon: '👋', color: '#059669', bg: '#ecfdf5' },
    warning: { name: 'تحذير', icon: '⚠️', color: '#dc2626', bg: '#fef2f2' }
  };

  var tInfo = ntypes[type] || ntypes.general;

  if (_livePreviewTab === 'card') {
    // Render Notification Card / Push Mockup
    var html = '<div style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,.1);border:1.5px solid #e2e8f0;transition:all .2s">';
    html += '<div style="background:' + tInfo.color + ';padding:4px 12px;display:flex;align-items:center;gap:6px">';
    html += '<span style="font-size:.6rem;color:#fff;opacity:.95;font-weight:700">FAST7 SaaS Control</span>';
    html += '<span style="font-size:.55rem;color:#fff;opacity:.8;margin-right:auto">الآن</span>';
    html += '</div>';
    html += '<div style="padding:14px 16px">';
    html += '<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">';
    html += '<div style="width:36px;height:36px;border-radius:10px;background:' + tInfo.bg + ';display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0">' + tInfo.icon + '</div>';
    html += '<div style="flex:1;min-width:0">';
    html += '<div style="font-size:.82rem;font-weight:900;color:#1e293b;line-height:1.3">' + title + '</div>';
    html += '</div></div>';
    html += '<div style="font-size:.72rem;color:#475569;line-height:1.5;margin-bottom:10px;word-break:break-word">' + msg + '</div>';
    
    if (img) {
      html += '<img src="' + img + '" style="width:100%;height:110px;object-fit:cover;border-radius:10px;margin-bottom:10px;border:1px solid #e2e8f0" onerror="this.style.display=\'none\'">';
    }

    html += '<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">';
    html += '<span style="font-size:.6rem;padding:2px 8px;border-radius:999px;background:' + tInfo.bg + ';color:' + tInfo.color + ';font-weight:800">' + tInfo.name + '</span>';
    if (tag) html += '<span style="font-size:.6rem;color:#64748b;background:#f1f5f9;padding:2px 6px;border-radius:6px">#' + tag + '</span>';
    html += '</div>';

    if (link) {
      html += '<div style="margin-top:10px;padding-top:10px;border-top:1px solid #f1f5f9">';
      html += '<span style="font-size:.7rem;color:' + tInfo.color + ';font-weight:800">🔗 ' + link + '</span>';
      html += '</div>';
    }
    html += '</div></div>';
    box.innerHTML = html;
  } else {
    // Render Full Article Modal Mockup (For Posts)
    var html = '<div style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,.1);border:1.5px solid #e2e8f0">';
    html += '<div style="padding:12px 14px;background:#f8fafc;border-bottom:1px solid #e2e8f0;display:flex;align-items:center;justify-content:space-between">';
    html += '<div style="font-size:.78rem;font-weight:900;color:#1e293b;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + title + '</div>';
    html += '<span style="font-size:.6rem;background:#ede9fe;color:#7c3aed;padding:2px 6px;border-radius:6px;font-weight:800">📝 مقال</span>';
    html += '</div>';
    html += '<div style="padding:14px;max-height:260px;overflow-y:auto;font-size:.75rem;line-height:1.6;color:#334155">';
    if (img) {
      html += '<img src="' + img + '" style="width:100%;height:100px;object-fit:cover;border-radius:8px;margin-bottom:10px" onerror="this.style.display=\'none\'">';
    }
    var bodyContent = type === 'post' && postBody ? postBody : (msg || 'محتوى المقال كاملاً...');
    html += '<div style="word-break:break-word">' + bodyContent.replace(/\n/g, '<br>') + '</div>';
    html += '</div>';
    if (link) {
      html += '<div style="padding:10px 14px;background:#f8fafc;border-top:1px solid #e2e8f0">';
      html += '<span style="display:inline-block;padding:5px 10px;background:#10b981;color:#fff;border-radius:6px;font-size:.65rem;font-weight:800">اقرأ المزيد 🔗</span>';
      html += '</div>';
    }
    html += '</div>';
    box.innerHTML = html;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  checkAgencyAuth();
  loadDashboardData();
  if (typeof populateNotifTargets === 'function') populateNotifTargets();
  if (typeof loadSentNotifs === 'function') loadSentNotifs();
  if (typeof routeDashTab === 'function') routeDashTab();
  setTimeout(() => { if (typeof updateLiveCreatePreview === 'function') updateLiveCreatePreview(); }, 200);
});
