document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
   
    // Function to set the theme
    function setTheme(theme) {
    if (theme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️'; // Sun icon for light mode
    } else {
    body.classList.remove('dark-mode');
    themeToggle.textContent = '🌙'; // Moon icon for dark mode
    }
    // Store the theme in localStorage
    localStorage.setItem('theme', theme);
    }
   
    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
    setTheme(savedTheme);
    } else {
    // Default to light mode
    setTheme('light');
    }
   
    // Toggle theme function
    themeToggle.addEventListener('click', function() {
    if (body.classList.contains('dark-mode')) {
    setTheme('light');
    } else {
    setTheme('dark');
    }
    });
   });
   