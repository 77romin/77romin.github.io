(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('[data-theme-toggle]');
  const menuButton = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-menu]');
  try { if (!localStorage.getItem('portfolio-theme')) root.dataset.theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'; } catch (error) { root.dataset.theme = 'dark'; }
  themeButton?.addEventListener('click', () => { const next = root.dataset.theme === 'dark' ? 'light' : 'dark'; root.dataset.theme = next; try { localStorage.setItem('portfolio-theme', next); } catch (error) { /* The selected theme still applies for this visit. */ } });
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
