document.addEventListener('DOMContentLoaded', function() {
    const loginModal = document.getElementById('login-modal');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('login-button');
    const loginMessage = document.getElementById('login-message');
    const dashboardContent = document.getElementById('dashboard-content');
    const closeButton = document.querySelector('.close-button');
    const header = document.querySelector('header');
    const newsTextarea = document.getElementById('news-textarea');
    const saveNewsButton = document.getElementById('save-news-button');

    const correctPassword = "firelight-access-2025"; // CHANGE THIS TO YOUR PASSWORD

    // --- Login Functionality ---
    function showDashboard() {
        loginModal.style.display = 'none';
        dashboardContent.style.display = 'block';
        header.style.display = 'block';
    }

    function handleLogin() {
        if (passwordInput.value === correctPassword) {
            showDashboard();
            localStorage.setItem('isLoggedIn', 'true');

             // Load news from localStorage
            const savedNews = localStorage.getItem('insiderNews');
            if (savedNews) {
                newsTextarea.value = savedNews;
            }

        } else {
            loginMessage.textContent = "Incorrect password. Please try again.";
            passwordInput.value = '';
            passwordInput.focus();
        }
    }

    if (localStorage.getItem('isLoggedIn') === 'true') {
        showDashboard();
         // Load news from localStorage (even if logged in)
        const savedNews = localStorage.getItem('insiderNews');
        if (savedNews) {
            newsTextarea.value = savedNews;
        }
    } else {
        loginModal.style.display = 'flex';
    }

    loginButton.addEventListener('click', handleLogin);

    passwordInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            handleLogin();
        }
    });

    closeButton.addEventListener('click', function() {
        loginModal.style.display = 'none';
        passwordInput.value = '';
    });

    // --- Password Reveal Functionality ---
    document.querySelectorAll('.reveal-icon').forEach(icon => {
        icon.addEventListener('click', function() {
            const passwordSpan = this.previousElementSibling;
            if (passwordSpan.textContent === '••••••••••') {
                // Get the actual password from the data-password attribute (set in initial HTML or via server)
                // For this example, we'll use a placeholder.  In a real app, you'd load this from a database.
                const realPassword = "bot_password_here"; // REPLACE with actual retrieval logic!
                passwordSpan.textContent = realPassword;
                this.textContent = 'visibility_off';
            } else {
                passwordSpan.textContent = '••••••••••';
                this.textContent = 'visibility';
            }
        });
    });

    // --- Insider News Functionality ---
    saveNewsButton.addEventListener('click', function() {
        localStorage.setItem('insiderNews', newsTextarea.value);
        alert('Insider news saved!'); // Simple feedback, consider a more subtle notification
    });
});
