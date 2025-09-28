// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');
navToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// Smooth scroll for nav links
document.querySelectorAll('.nav-link, .footer-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      navList.classList.remove('active'); // Close menu on mobile
    }
  });
});

// Back to Top Button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// AOS Animation Init
AOS.init({
  duration: 900,
  once: true,
  easing: 'ease-in-out',
});
