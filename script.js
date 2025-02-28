// script.js
const darkModeToggle = document.getElementById('darkmode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Save the preference to local storage (optional)
    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
});


// Check for saved preference on page load (optional)
if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
}
