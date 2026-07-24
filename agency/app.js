// FAST7 Agency SaaS Public Landing Page Script

function applyCustomizerToLandingPage() {
  const defaults = {
    brandName: 'FAST7 Platform',
    heroTag: 'منصة FAST7 الرقمية الأحدث لبناء المتاجر ⚡',
    heroTitle: 'انطلق بمتجرك الإلكتروني معنا في FAST7 <br>سرعة فائقة. تصميم ملكي. <span>أرباح بدون حدود!</span>',
    heroSubtitle: 'منظومة FAST7 تمنحك متجراً إلكترونياً استثنائياً، سرعة تصفح خرافية، دعم كامل للواتساب، حساب التوصيل، والدفع عند الاستلام مع تصميم تجاوبي 100% يناسب طموح تجارتك.',
    ctaText: 'تقديم طلب إنشاء متجر جديد',
    feeLimit: '100',
    freeFee: '2',
    monthlyFee: '100',
    annualFee: '1000'
  };

  const raw = localStorage.getItem('mycart_agency_site_settings');
  let s = defaults;
  if (raw) { try { s = { ...defaults, ...JSON.parse(raw) }; } catch(e) {} }

  // Apply to DOM elements if present
  const elTag = document.querySelector('.fast7-badge');
  if (elTag) elTag.innerHTML = `<i class="fa-solid fa-bolt-lightning" style="color:var(--fast7-cyan)"></i> ${s.heroTag}`;

  const elTitle = document.querySelector('.fast7-title');
  if (elTitle) elTitle.innerHTML = s.heroTitle;

  const elSub = document.querySelector('.fast7-subtitle');
  if (elSub) elSub.textContent = s.heroSubtitle;

  const elFreeFees = document.querySelectorAll('.free-fee-val');
  elFreeFees.forEach(el => el.textContent = `${s.freeFee} ₪`);

  const elMonthlyFees = document.querySelectorAll('.monthly-fee-val');
  elMonthlyFees.forEach(el => el.textContent = `${s.monthlyFee} ₪`);

  const elAnnualFees = document.querySelectorAll('.annual-fee-val');
  elAnnualFees.forEach(el => el.textContent = `${s.annualFee} ₪`);
}

document.addEventListener('DOMContentLoaded', () => {
  applyCustomizerToLandingPage();
});
