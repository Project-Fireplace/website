// script.js (No major changes needed here, animation is mostly CSS)
const darkModeToggle = document.getElementById('darkmode-toggle');
const body = document.body;
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

// Hamburger menu toggle
hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburgerMenu.classList.toggle('open'); // Add 'open' to the button itself
    hamburgerMenu.querySelector('.material-icons').innerText = navLinks.classList.contains('open') ? 'close' : 'menu';

});

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
     // Change dark mode icon
    const iconSpan = darkModeToggle.querySelector('.material-icons');
     if (body.classList.contains('dark-mode')) {
        iconSpan.innerText = 'light_mode'; // Icon for light mode
    } else {
        iconSpan.innerText = 'dark_mode';  // Icon for dark mode
    }

});
//Check for darkmode
if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
     // Change dark mode icon
    const iconSpan = darkModeToggle.querySelector('.material-icons');
     if (body.classList.contains('dark-mode')) {
        iconSpan.innerText = 'light_mode'; // Icon for light mode
    } else {
        iconSpan.innerText = 'dark_mode';  // Icon for dark mode
    }
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
        hamburgerMenu.querySelector('.material-icons').innerText = 'menu';
        hamburgerMenu.classList.remove('open'); //remove class from button
    }
});

//Close menu if a link is pressed
document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 768) { // Only close on mobile
        navLinks.classList.remove('open');
        hamburgerMenu.querySelector('.material-icons').innerText = 'menu';
        hamburgerMenu.classList.remove('open'); //remove class from button
      }
    });
  });