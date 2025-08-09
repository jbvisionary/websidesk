// Helpers
const $ = (s, el = document) => el.querySelector(s);

// Smooth scroll for anchors
document.querySelector('.site-nav')?.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  e.preventDefault();
  document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

$('#homeLink')?.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#top')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

$('#exploreBtn')?.addEventListener('click', () => {
  document.querySelector('#drop-intro')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

$('#viewProductsBtn')?.addEventListener('click', () => {
  document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Reveal on scroll for product cards
const cards = document.querySelectorAll('.card.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.25 });
cards.forEach(c => io.observe(c));
