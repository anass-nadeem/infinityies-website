// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

navToggle?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

// Case study accordion
document.querySelectorAll('.case-toggle').forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const item = toggle.closest('.case-item');
    const isOpen = item.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
});

// FAQ accordion
document.querySelectorAll('.faq-toggle').forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const item = toggle.closest('.faq-item');
    const isOpen = item.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
});

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Contact form — posts to Formspree (or any endpoint you set in the
// form's action attribute). Falls back gracefully if the request fails.
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalLabel = submitBtn.textContent;

  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending…';
  status.textContent = '';
  status.classList.remove('is-error');

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    });

    if (response.ok) {
      status.textContent = "Request sent. We'll get back to you shortly.";
      form.reset();
    } else {
      throw new Error('Form endpoint rejected the submission');
    }
  } catch (err) {
    status.textContent =
      "Couldn't send automatically — please email info@infinityies.com or use WhatsApp above.";
    status.classList.add('is-error');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalLabel;
  }
});