(() => {
  const links = [...document.querySelectorAll('.score-link')];
  const sections = links.map(link => document.querySelector(link.getAttribute('href')));
  if (!('IntersectionObserver' in window)) return;

  const setCurrent = id => {
    links.forEach(link => {
      if (link.getAttribute('href') === `#${id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setCurrent(entry.target.id);
    });
  }, { rootMargin: '-20% 0px -65% 0px', threshold: 0 });
  sections.forEach(section => { if (section) observer.observe(section); });
})();
