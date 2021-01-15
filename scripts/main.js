const burgerBtn = document.getElementById('burger');
const navbar = document.getElementById('nav');
const cover = document.getElementById('cover');

document.addEventListener('DOMContentLoaded', () => {
    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active');
        navbar.classList.toggle('active');
        document.body.classList.toggle('lock');
    });
});
