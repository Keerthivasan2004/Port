document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const navLinks = document.querySelector('nav ul.dropdown-menu');

    menuButton.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
});
