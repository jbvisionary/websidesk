const $ = (s, el = document) => el.querySelector(s);

function smoothScrollTo(target) {
  const el = typeof target === 'string' ? $(target) : target;
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.querySelector('.site-nav')?.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  e.preventDefault();
  smoothScrollTo(a.getAttribute('href'));
});

document.getElementById('homeLink')?.addEventListener('click', (e) => {
  e.preventDefault();
  smoothScrollTo('#top');
});

document.getElementById('exploreBtn')?.addEventListener('click', () => smoothScrollTo('#products'));

const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
