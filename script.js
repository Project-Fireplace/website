// script.js
const darkModeToggle = document.getElementById('darkmode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
});

if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
}

// Touch Device Detection (Optional, for advanced features)
function isTouchDevice() {
  return (('ontouchstart' in window) ||
          (navigator.maxTouchPoints > 0) ||
          (navigator.msMaxTouchPoints > 0));
}

if (isTouchDevice()) {
  // You could add a class to the body, for example:
  body.classList.add('touch-device');
  // ... and then use this class in your CSS for touch-specific styles.
  // For example, larger tap targets.  This is beyond the basic
  // responsive design, but a good practice.
}
