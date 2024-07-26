// script.js
document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById('menu-button');
    const dropdownMenu = document.getElementById('dropdown-menu');

    menuButton.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show');
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            dropdownMenu.classList.remove('show');
        }
    });
});
