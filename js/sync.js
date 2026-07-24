(function() {
  var scriptTag = document.currentScript || document.querySelector('script[src*="sync.js"]');
  var STORE_ID = scriptTag ? scriptTag.getAttribute('data-store-id') || 'default' : 'default';
  var API_BASE = 'http://localhost:8080/api/stores/' + STORE_ID;
  var TOKEN = localStorage.getItem('mycart_auth_token');

  function xhrSync(method, url, data) {
    try {
      var xhr = new XMLHttpRequest();
      xhr.open(method, url, false);
      xhr.setRequestHeader('Content-Type', 'application/json');
      if (TOKEN) xhr.setRequestHeader('Authorization', 'Bearer ' + TOKEN);
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
      if (TOKEN) xhr.setRequestHeader('Authorization', 'Bearer ' + TOKEN);
      xhr.send(data ? JSON.stringify(data) : null);
    } catch(e) {}
  }

  // Phase 1: Load all data from server into localStorage
  var serverData = xhrSync('GET', API_BASE + '/data');
  if (serverData) {
    if (serverData.products && serverData.products.length) {
      try { localStorage.setItem('mycart_admin_products', JSON.stringify(serverData.products)); } catch(e) {}
    }
    if (serverData.customers && serverData.customers.length) {
      try { localStorage.setItem('mycart_customers', JSON.stringify(serverData.customers)); } catch(e) {}
    }
    if (serverData.orders && serverData.orders.length) {
      try { localStorage.setItem('mycart_orders', JSON.stringify(serverData.orders)); } catch(e) {}
    }
    if (serverData.settings && Object.keys(serverData.settings).length) {
      try { localStorage.setItem('mycart_admin_settings', JSON.stringify(serverData.settings)); } catch(e) {}
    }
    if (serverData.status && serverData.status.status) {
      var suspended = serverData.status.status === 'suspended';
      try { localStorage.setItem('mycart_store_suspended', suspended ? 'true' : 'false'); } catch(e) {}
      if (suspended) {
        window.location.replace('maintenance.html');
      }
    }
    console.log('[sync] Loaded store data from server');
  } else {
    console.log('[sync] Server not available, using localStorage only');
  }

  // Phase 2: Override localStorage.setItem to also save to server
  var origSetItem = localStorage.setItem.bind(localStorage);
  var PREFIX = 'store_' + STORE_ID + '_';

  localStorage.setItem = function(key, value) {
    origSetItem(key, value);
    var dataKey = null;
    var payload = null;
    var unprefixed = key;
    if (key.startsWith(PREFIX)) {
      unprefixed = key.substring(PREFIX.length);
    }
    if (unprefixed === 'mycart_admin_products') { dataKey = 'products'; payload = value; }
    else if (unprefixed === 'mycart_customers') { dataKey = 'customers'; payload = value; }
    else if (unprefixed === 'mycart_orders') { dataKey = 'orders'; payload = value; }
    else if (unprefixed === 'mycart_admin_settings') { dataKey = 'settings'; payload = value; }
    else if (unprefixed === 'mycart_store_suspended') {
      dataKey = 'status';
      payload = JSON.stringify({status: value === 'true' ? 'suspended' : 'active'});
    }
    if (dataKey && payload) {
      var reqObj = {};
      reqObj[dataKey] = JSON.parse(payload);
      xhrAsync('POST', API_BASE + '/data', reqObj);
    }
  };

  // Override removeItem to also sync
  var origRemoveItem = localStorage.removeItem.bind(localStorage);
  localStorage.removeItem = function(key) {
    origRemoveItem(key);
    var unprefixed = key.startsWith(PREFIX) ? key.substring(PREFIX.length) : key;
    var dataKey = null;
    if (unprefixed === 'mycart_admin_products') dataKey = 'products';
    else if (unprefixed === 'mycart_customers') dataKey = 'customers';
    else if (unprefixed === 'mycart_orders') dataKey = 'orders';
    else if (unprefixed === 'mycart_admin_settings') dataKey = 'settings';
    else if (unprefixed === 'mycart_store_suspended') dataKey = 'status';
    if (dataKey) {
      var payload = {};
      if (dataKey === 'status') payload[dataKey] = {status: 'active'};
      else payload[dataKey] = [];
      xhrAsync('POST', API_BASE + '/data', payload);
    }
  };

  // Phase 3: On page unload, sync all data back
  window.addEventListener('beforeunload', function() {
    var payload = {};
    try {
      var p = localStorage.getItem(PREFIX + 'mycart_admin_products');
      if (p) payload.products = JSON.parse(p);
    } catch(e) {}
    try {
      var c = localStorage.getItem(PREFIX + 'mycart_customers');
      if (c) payload.customers = JSON.parse(c);
    } catch(e) {}
    try {
      var o = localStorage.getItem(PREFIX + 'mycart_orders');
      if (o) payload.orders = JSON.parse(o);
    } catch(e) {}
    try {
      var s = localStorage.getItem(PREFIX + 'mycart_admin_settings');
      if (s) payload.settings = JSON.parse(s);
    } catch(e) {}
    try {
      var susp = localStorage.getItem(PREFIX + 'mycart_store_suspended');
      if (susp !== null) {
        payload.status = {status: susp === 'true' ? 'suspended' : 'active'};
      }
    } catch(e) {}
    if (Object.keys(payload).length) {
      xhrSync('POST', API_BASE + '/data', payload);
    }
  });

  console.log('[sync] Initialized for store:', STORE_ID);
})();