/* script.js */

// ── TYPING EFFECT ────────────────────────────────────
(function () {
  const target = document.getElementById('typed-name');
  const cursor = document.querySelector('.cursor');
  if (!target) return;

  const fullName = 'Valerio Massimo Moretti';
  let i = 0;

  function type() {
    if (i <= fullName.length) {
      target.textContent = fullName.slice(0, i);
      i++;
      setTimeout(type, i === 1 ? 600 : 55);
    } else {
      // Keep cursor blinking after name is fully typed
      if (cursor) cursor.style.animation = 'blink 1s step-end infinite';
    }
  }

  // Small delay before starting — feels intentional
  setTimeout(type, 400);
})();


// ── NAVBAR SCROLL BORDER ─────────────────────────────
(function () {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
})();


// ── MOBILE MENU ──────────────────────────────────────
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
})();


// ── FADE-IN ON SCROLL ────────────────────────────────
(function () {
  const targets = [
    '.timeline-item',
    '.skill-group',
    '.project-flagship',
    '.project-card',
    '.stat-card',
    '.about-text p',
  ];

  const elements = document.querySelectorAll(targets.join(', '));
  elements.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
})();