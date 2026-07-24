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

function initSocialProof() {
  const mData = JSON.parse(localStorage.getItem('mycart_marketing')) || {};
  if (!mData.socialProof?.show || !products.length) return;
  if (_spTimer) clearInterval(_spTimer);
  _spTimer = setInterval(() => showSocialProofToast(), 15000);
  setTimeout(() => showSocialProofToast(), 5000);
}

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

let _liveViewersInterval = null;

function stopLiveViewersTicker() {
  if (typeof _liveViewersInterval !== 'undefined' && _liveViewersInterval) {
    clearInterval(_liveViewersInterval);
    _liveViewersInterval = null;
  }
  const container = document.getElementById('liveViewersContainer');
  if (container) container.style.display = 'none';
}

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