// ── NAVBAR SCROLL EFFECT ─────────────────────────
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(13,20,39,0.98)';
  } else {
    navbar.style.background = 'rgba(13,20,39,0.95)';
  }
});

// ── HAMBURGER MENU ────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── SMOOTH ACTIVE NAV ─────────────────────────────
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  sections.forEach(section => {
    const top = section.offsetTop - 80;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) {
      if (scrollY >= top && scrollY < top + height) {
        link.style.color = '#3b82f6';
      } else {
        link.style.color = '';
      }
    }
  });
});

// ── SCROLL FADE-IN ANIMATION ──────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.skill-cat, .project-card, .cert-item, .edu-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// ── CONTACT FORM ──────────────────────────────────
function sendEmail(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const mailtoLink = `mailto:raduanahamedbd@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent('From: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message)}`;
  window.location.href = mailtoLink;
}

// ── TYPING EFFECT ON HERO ─────────────────────────
const titles = [
  'Computer Science Graduate',
  'NLP & AI Enthusiast',
  'Full Stack Developer',
  'Korean Language Learner'
];
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const titleEl = document.querySelector('.hero-title');

function typeEffect() {
  if (!titleEl) return;
  const current = titles[titleIndex];
  if (isDeleting) {
    titleEl.textContent = current.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      setTimeout(typeEffect, 400);
      return;
    }
  } else {
    titleEl.textContent = current.substring(0, charIndex++);
    if (charIndex > current.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1800);
      return;
    }
  }
  setTimeout(typeEffect, isDeleting ? 40 : 80);
}

setTimeout(typeEffect, 1000);
