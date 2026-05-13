/* ============================================================
   GreenTech Solutions — Main JavaScript
   Features: mobile nav, a11y toolbar, form validation,
             product filter/search, scroll animations,
             newsletter, counter animation
   ============================================================ */

/* ── Utility: set active nav link ── */
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    link.classList.toggle('active', href === path);
  });
}

/* ── Mobile hamburger ── */
function initMobileNav() {
  const burger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (!burger || !navLinks) return;

  burger.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    navLinks.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
  });

  // close on outside click
  document.addEventListener('click', e => {
    if (!burger.contains(e.target) && !navLinks.contains(e.target)) {
      burger.classList.remove('open');
      navLinks.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ── Accessibility toolbar ── */
function initA11yBar() {
  // Font size toggle
  let fontSize = 16;
  const htmlEl = document.documentElement;

  const btnLarger = document.getElementById('btnFontLarger');
  const btnReset  = document.getElementById('btnFontReset');
  const btnContrast = document.getElementById('btnContrast');

  if (btnLarger) {
    btnLarger.addEventListener('click', () => {
      fontSize = Math.min(fontSize + 2, 24);
      htmlEl.style.fontSize = fontSize + 'px';
    });
  }
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      fontSize = 16;
      htmlEl.style.fontSize = '';
      document.body.classList.remove('high-contrast');
    });
  }
  if (btnContrast) {
    btnContrast.addEventListener('click', () => {
      document.body.classList.toggle('high-contrast');
    });
  }
}

/* ── Scroll-reveal animation ── */
function initScrollReveal() {
  const targets = document.querySelectorAll('.feature-card, .product-card, .blog-card, .team-card, .timeline-item');

  if (!targets.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  targets.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

/* ── Animated counters ── */
function animateCounter(el, target, duration = 1800) {
  const start = performance.now();
  const suffix = el.dataset.suffix || '';

  requestAnimationFrame(function step(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // easeOutExpo
    const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    el.textContent = Math.round(ease * target).toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(step);
  });
}

function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target, parseInt(entry.target.dataset.count));
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach(el => obs.observe(el));
}

/* ── Product search & filter ── */
function initProductFilter() {
  const searchInput = document.getElementById('productSearch');
  const categorySelect = document.getElementById('categoryFilter');
  const cards = document.querySelectorAll('.product-card');

  if (!searchInput && !categorySelect) return;

  function applyFilter() {
    const query = searchInput ? searchInput.value.toLowerCase() : '';
    const category = categorySelect ? categorySelect.value : '';

    cards.forEach(card => {
      const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
      const desc  = card.querySelector('p')?.textContent.toLowerCase() || '';
      const tag   = card.querySelector('.product-tag')?.textContent.toLowerCase() || '';

      const matchesQuery = !query || title.includes(query) || desc.includes(query);
      const matchesCat   = !category || tag.includes(category.toLowerCase());

      card.style.display = matchesQuery && matchesCat ? '' : 'none';
    });

    // show "no results" if all hidden
    const visible = [...cards].filter(c => c.style.display !== 'none');
    const noResult = document.getElementById('noResults');
    if (noResult) noResult.style.display = visible.length ? 'none' : 'block';
  }

  if (searchInput) searchInput.addEventListener('input', applyFilter);
  if (categorySelect) categorySelect.addEventListener('change', applyFilter);
}

/* ── Contact form validation ── */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  function showError(fieldId, msg) {
    const field = document.getElementById(fieldId);
    const err   = document.getElementById(fieldId + 'Error');
    if (field) field.classList.add('error');
    if (err)  { err.textContent = msg; err.classList.add('visible'); }
  }

  function clearErrors() {
    form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
    form.querySelectorAll('.error-msg').forEach(el => el.classList.remove('visible'));
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    clearErrors();

    const name    = document.getElementById('name')?.value.trim();
    const email   = document.getElementById('email')?.value.trim();
    const message = document.getElementById('message')?.value.trim();
    let valid = true;

    if (!name || name.length < 2) {
      showError('name', 'Please enter your full name (at least 2 characters).');
      valid = false;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError('email', 'Please enter a valid email address.');
      valid = false;
    }
    if (!message || message.length < 10) {
      showError('message', 'Please enter a message (at least 10 characters).');
      valid = false;
    }

    if (valid) {
      const successMsg = document.getElementById('formSuccess');
      if (successMsg) successMsg.classList.add('visible');
      form.reset();
      form.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
}

/* ── Newsletter form ── */
function initNewsletter() {
  const forms = document.querySelectorAll('.newsletter-form');
  forms.forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (!input || !input.value.trim()) return;
      const btn = form.querySelector('button');
      if (btn) {
        btn.textContent = '✓ Subscribed!';
        btn.style.background = '#2d6a4f';
        setTimeout(() => {
          btn.textContent = 'Subscribe';
          btn.style.background = '';
          input.value = '';
        }, 3000);
      }
    });
  });
}

/* ── Smooth anchor links (for same-page) ── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ── Blog search ── */
function initBlogSearch() {
  const searchInput = document.getElementById('blogSearch');
  const cards = document.querySelectorAll('.blog-card');
  if (!searchInput || !cards.length) return;

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    cards.forEach(card => {
      const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
      const text  = card.querySelector('p')?.textContent.toLowerCase() || '';
      card.style.display = !query || title.includes(query) || text.includes(query) ? '' : 'none';
    });
  });
}

/* ── Init all ── */
document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  initMobileNav();
  initA11yBar();
  initScrollReveal();
  initCounters();
  initProductFilter();
  initContactForm();
  initNewsletter();
  initSmoothScroll();
  initBlogSearch();
});
