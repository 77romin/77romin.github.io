(() => {
  const menuButton = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-menu]');
  menuButton?.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') === 'true'; menuButton.setAttribute('aria-expanded', String(!open)); menu?.classList.toggle('is-open', !open); document.body.classList.toggle('menu-open', !open); });
  menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { menuButton?.setAttribute('aria-expanded', 'false'); menu.classList.remove('is-open'); document.body.classList.remove('menu-open'); }));
  const revealElements = document.querySelectorAll('.reveal:not(.is-visible)');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: 0.12, rootMargin: '0px 0px -40px' });
    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add('is-visible'));
  }
})();
