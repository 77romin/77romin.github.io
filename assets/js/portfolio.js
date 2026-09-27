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

  const readmeContainers = document.querySelectorAll('[data-github-readme]');
  const absoluteUrlPattern = /^(?:[a-z]+:|\/\/|#)/i;

  const normalizePath = (path) => path.replace(/^\.\//, '').replace(/^\//, '');

  const loadReadme = async (container) => {
    const repository = container.dataset.repository;
    const branch = container.dataset.branch || 'main';
    const githubUrl = container.dataset.githubUrl;

    if (!repository || !/^[\w.-]+\/[\w.-]+$/.test(repository)) return;

    try {
      const response = await fetch(`https://api.github.com/repos/${repository}/readme`, {
        headers: { Accept: 'application/vnd.github.html+json' },
        cache: 'no-store'
      });
      if (!response.ok) throw new Error(`GitHub README request failed: ${response.status}`);

      container.innerHTML = await response.text();
      const rawBase = `https://raw.githubusercontent.com/${repository}/${branch}/`;
      const githubBase = `https://github.com/${repository}/blob/${branch}/`;

      container.querySelectorAll('img[src]').forEach((image) => {
        const source = image.getAttribute('src');
        if (source && !absoluteUrlPattern.test(source)) image.src = new URL(normalizePath(source), rawBase).href;
        image.loading = 'lazy';
        image.decoding = 'async';
      });

      container.querySelectorAll('a[href]').forEach((link) => {
        const href = link.getAttribute('href');
        if (!href || href.startsWith('#')) return;
        if (!absoluteUrlPattern.test(href)) link.href = new URL(normalizePath(href), githubBase).href;
        link.target = '_blank';
        link.rel = 'noreferrer noopener';
      });

      container.classList.add('is-loaded');
    } catch (error) {
      container.innerHTML = `<div class="readme-error"><strong>README를 불러오지 못했습니다.</strong><p>잠시 후 새로고침하거나 GitHub에서 최신 README를 확인해 주세요.</p><a href="${githubUrl}#readme" target="_blank" rel="noreferrer noopener">GitHub README 보기 →</a></div>`;
    }
  };

  readmeContainers.forEach(loadReadme);
})();
