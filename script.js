// script.js
const darkModeToggle = document.getElementById('darkmode-toggle');
const body = document.body;
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');
const darkModeLabel = document.querySelector('.darkmode-label'); // Get the label element


// Hamburger menu toggle
hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburgerMenu.classList.toggle('open');
    hamburgerMenu.querySelector('.material-icons').innerText = navLinks.classList.contains('open') ? 'close' : 'menu';

});

function updateDarkModeUI() {
    const iconSpan = darkModeToggle.querySelector('.material-icons');
    if (body.classList.contains('dark-mode')) {
        iconSpan.innerText = 'light_mode';
        if (darkModeLabel) { // Check if label exists (it will on mobile)
            darkModeLabel.innerText = 'Light Mode';
        }
    } else {
        iconSpan.innerText = 'dark_mode';
        if (darkModeLabel) {
            darkModeLabel.innerText = 'Dark Mode';
        }
    }
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
    updateDarkModeUI(); // Update icon AND label
});

// Initial setup (on page load)
if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
}
updateDarkModeUI();  // Set initial icon and label state


// Touch Device Detection (Optional)
function isTouchDevice() {
  return (('ontouchstart' in window) ||
          (navigator.maxTouchPoints > 0) ||
          (navigator.msMaxTouchPoints > 0));
}

if (isTouchDevice()) {
  body.classList.add('touch-device');
}

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && !hamburgerMenu.contains(event.target) && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        hamburgerMenu.querySelector('.material-icons').innerText = 'menu';
        hamburgerMenu.classList.remove('open');
    }
});

//Close menu if a link is pressed
document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 768) { // Only close on mobile
        navLinks.classList.remove('open');
        hamburgerMenu.querySelector('.material-icons').innerText = 'menu';
        hamburgerMenu.classList.remove('open');
      }
    });
  });