// All behavior here is an enhancement. If this file fails to load, the
// header stays visible, menus stay reachable via native <details>/<summary>
// and CSS :hover/:focus-within, and the notice bar stays on screen.

// Hides the main header on scroll-down and brings it back on scroll-up,
// so distributors reading the price table get more vertical space.
function initHeader() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  let lastY = window.scrollY;
  let ticking = false;

  function onScroll() {
    const currentY = window.scrollY;
    const scrollingDown = currentY > lastY && currentY > header.offsetHeight;
    header.classList.toggle('is-hidden', scrollingDown);
    lastY = currentY;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });
}

// Keeps aria-expanded accurate on desktop dropdowns (CSS handles the visual
// open/close via :hover/:focus-within) and closes any open menu on Escape,
// since a sighted mouse user and a keyboard user need different signals.
function initMenus() {
  const dropdownTriggers = document.querySelectorAll('.main-nav__item--has-sub > a');

  dropdownTriggers.forEach((trigger) => {
    const item = trigger.closest('.main-nav__item--has-sub');
    const open = () => trigger.setAttribute('aria-expanded', 'true');
    const close = () => trigger.setAttribute('aria-expanded', 'false');

    item.addEventListener('mouseenter', open);
    item.addEventListener('mouseleave', close);
    item.addEventListener('focusin', open);
    item.addEventListener('focusout', (event) => {
      if (!item.contains(event.relatedTarget)) close();
    });
  });

  const mobileMenu = document.querySelector('.mobile-menu');

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;

    dropdownTriggers.forEach((trigger) => trigger.setAttribute('aria-expanded', 'false'));

    if (mobileMenu && mobileMenu.open) {
      mobileMenu.open = false;
      mobileMenu.querySelector('summary').focus();
    }
  });
}

// Lets a visitor dismiss the compliance notice bar for the rest of the
// browser session, without needing a cookie-consent-style backend.
function initNotice() {
  const notice = document.getElementById('noticeBar');
  const closeButton = document.getElementById('noticeClose');
  if (!notice || !closeButton) return;

  const dismissedKey = 'kalvera-notice-dismissed';

  try {
    if (sessionStorage.getItem(dismissedKey) === 'true') {
      notice.classList.add('is-dismissed');
    }
  } catch (err) {
    // Storage can be unavailable (private browsing, locked-down browsers);
    // the notice just stays visible, which is the safe default.
  }

  closeButton.addEventListener('click', () => {
    notice.classList.add('is-dismissed');
    try {
      sessionStorage.setItem(dismissedKey, 'true');
    } catch (err) {
      // Non-fatal: dismissal just won't persist across page loads.
    }
  });
}

initHeader();
initMenus();
initNotice();
