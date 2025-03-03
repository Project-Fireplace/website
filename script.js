// script.js
const darkModeToggle = document.getElementById('darkmode-toggle');
const body = document.body;
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

// Hamburger menu toggle
hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('open');
     // Toggle 'open' class on hamburger bars for animation (optional)
    hamburgerMenu.querySelectorAll('.bar').forEach(bar => bar.classList.toggle('open'));
});

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
});

if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
}

// Touch Device Detection (Optional)
function isTouchDevice() {
  return (('ontouchstart' in window) ||
          (navigator.maxTouchPoints > 0) ||
          (navigator.msMaxTouchPoints > 0));
}

if (isTouchDevice()) {
  body.classList.add('touch-device');
}

// Close menu when clicking outside (optional, but good UX)
document.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && !hamburgerMenu.contains(event.target) && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        hamburgerMenu.querySelectorAll('.bar').forEach(bar => bar.classList.remove('open'));
    }
});

//Close menu if a link is pressed
document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 768) { // Only close on mobile
        navLinks.classList.remove('open');
        hamburgerMenu.querySelectorAll('.bar').forEach(bar => bar.classList.remove('open'));
      }
    });
  });