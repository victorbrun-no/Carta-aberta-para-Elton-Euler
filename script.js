(() => {
  const doc = document.documentElement;
  const progress = document.getElementById('readingProgress');
  const toast = document.getElementById('toast');
  const copyButton = document.getElementById('copyLink');
  const printButton = document.getElementById('printLetter');
  const reveals = document.querySelectorAll('.reveal');
  const sections = document.querySelectorAll('[data-chapter-section]');
  const railLinks = document.querySelectorAll('.desktop-rail a');

  const railProgress = document.getElementById('railProgress');

  const updateProgress = () => {
    const scrollTop = window.scrollY || doc.scrollTop;
    const height = doc.scrollHeight - window.innerHeight;
    const pct = height > 0 ? Math.min(100, Math.max(0, (scrollTop / height) * 100)) : 0;
    if (progress) progress.style.width = `${pct}%`;
    if (railProgress) railProgress.style.width = `${pct}%`;
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });

  reveals.forEach((el) => revealObserver.observe(el));

  const chapterObserver = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    railLinks.forEach((link) => {
      const isActive = link.dataset.chapter === visible.target.id;
      link.classList.toggle('active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }, { rootMargin: '-20% 0px -40% 0px', threshold: [0, .1, .25, .5] });

  sections.forEach((section) => chapterObserver.observe(section));

  const notify = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    window.clearTimeout(notify.timer);
    notify.timer = window.setTimeout(() => toast.classList.remove('show'), 2200);
  };

  copyButton?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      notify('Link copiado.');
    } catch {
      notify('Copie o endereço na barra do navegador.');
    }
  });

  printButton?.addEventListener('click', () => window.print());
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress, { passive: true });
  updateProgress();

  // Presentation mode -------------------------------------------------------
  const presentation = document.getElementById('presentation');
  const openPresentation = document.getElementById('openPresentation');
  const closePresentation = document.getElementById('closePresentation');
  const fullscreenButton = document.getElementById('presentationFullscreen');
  const stage = document.getElementById('presentationStage');
  const slides = [...document.querySelectorAll('.deck-slide')];
  const prevButton = document.getElementById('prevSlide');
  const nextButton = document.getElementById('nextSlide');
  const slideCurrent = document.getElementById('slideCurrent');
  const slideTotal = document.getElementById('slideTotal');
  const slideProgress = document.getElementById('slideProgress');
  let currentSlide = 0;
  let touchStartX = 0;
  let touchStartY = 0;
  let returnFocus = null;

  const formatSlide = (value) => String(value + 1).padStart(2, '0');

  const renderSlide = (index) => {
    if (!slides.length) return;
    currentSlide = Math.max(0, Math.min(slides.length - 1, index));
    slides.forEach((slide, i) => {
      const active = i === currentSlide;
      slide.classList.toggle('active', active);
      slide.setAttribute('aria-hidden', active ? 'false' : 'true');
    });
    if (slideCurrent) slideCurrent.textContent = formatSlide(currentSlide);
    if (slideTotal) slideTotal.textContent = String(slides.length).padStart(2, '0');
    if (slideProgress) slideProgress.style.width = `${((currentSlide + 1) / slides.length) * 100}%`;
    prevButton?.toggleAttribute('disabled', currentSlide === 0);
    nextButton?.toggleAttribute('disabled', currentSlide === slides.length - 1);
  };

  const requestLandscapeFullscreen = async () => {
    try {
      if (!document.fullscreenElement && presentation?.requestFullscreen) {
        await presentation.requestFullscreen({ navigationUI: 'hide' });
      }
      if (screen.orientation?.lock) {
        try { await screen.orientation.lock('landscape'); } catch { /* unsupported on some browsers */ }
      }
    } catch {
      notify('Tela cheia depende do navegador. O modo apresentação continua funcionando.');
    }
  };

  const openDeck = () => {
    if (!presentation) return;
    returnFocus = document.activeElement;
    presentation.classList.add('is-open');
    presentation.setAttribute('aria-hidden', 'false');
    document.body.classList.add('presentation-open');
    renderSlide(currentSlide);
    closePresentation?.focus({ preventScroll: true });
  };

  const closeDeck = async () => {
    if (!presentation) return;
    presentation.classList.remove('is-open');
    presentation.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('presentation-open');
    if (document.fullscreenElement) {
      try { await document.exitFullscreen(); } catch { /* noop */ }
    }
    returnFocus?.focus?.({ preventScroll: true });
  };

  const next = () => renderSlide(currentSlide + 1);
  const prev = () => renderSlide(currentSlide - 1);

  openPresentation?.addEventListener('click', () => {
    openDeck();
    if (window.matchMedia('(max-width: 820px)').matches) {
      requestLandscapeFullscreen();
    }
  });
  closePresentation?.addEventListener('click', closeDeck);
  nextButton?.addEventListener('click', next);
  prevButton?.addEventListener('click', prev);

  document.addEventListener('fullscreenchange', () => {
    if (!fullscreenButton) return;
    fullscreenButton.textContent = document.fullscreenElement ? 'Sair da tela cheia' : 'Tela cheia';
  });

  if (fullscreenButton) {
    fullscreenButton.addEventListener('click', async () => {
      if (document.fullscreenElement) {
        try { await document.exitFullscreen(); } catch { /* noop */ }
      } else {
        await requestLandscapeFullscreen();
      }
    });
  }

  document.addEventListener('keydown', (event) => {
    if (!presentation?.classList.contains('is-open')) return;
    if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') {
      event.preventDefault();
      next();
    } else if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
      event.preventDefault();
      prev();
    } else if (event.key === 'Home') {
      event.preventDefault();
      renderSlide(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      renderSlide(slides.length - 1);
    } else if (event.key === 'Escape' && !document.fullscreenElement) {
      event.preventDefault();
      closeDeck();
    }
  });

  stage?.addEventListener('touchstart', (event) => {
    const touch = event.changedTouches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
  }, { passive: true });

  stage?.addEventListener('touchend', (event) => {
    const touch = event.changedTouches[0];
    const dx = touch.clientX - touchStartX;
    const dy = touch.clientY - touchStartY;
    if (Math.abs(dx) < 42 || Math.abs(dx) < Math.abs(dy) * 1.15) return;
    if (dx < 0) next(); else prev();
  }, { passive: true });

  const params = new URLSearchParams(window.location.search);
  const requestedSlide = Number.parseInt(params.get('slide') || '1', 10) - 1;
  renderSlide(Number.isFinite(requestedSlide) ? requestedSlide : 0);
  if (params.get('present') === '1') openDeck();
})();
