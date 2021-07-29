const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('toggle-active')
    nav.classList.toggle('show-menu')
});