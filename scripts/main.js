function addScrollEventListener(ele, scrollTo) {
    ele.addEventListener('click', () => {
        scrollTo.scrollIntoView({ behavior: 'smooth' });
    });
}

function main() {
    // collect dom elements
    const burgerBtn = document.getElementById('burger');
    const navbar = document.getElementById('nav');
    const coverArrowDown = document.getElementById('reveal-content');
    const mainContainer = document.querySelector('.main');
    const body = document.body;
    const aboutSection = document.querySelector('.about');

    // Burger menu
    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active');
        navbar.classList.toggle('active');
        body.classList.toggle('lock');
    });

    // Close navbar menu on main click
    mainContainer.addEventListener('click', () => {
        if (navbar.classList.contains('active')) {
            burgerBtn.classList.remove('active');
            navbar.classList.remove('active');
            body.classList.remove('lock');
        }
    });

    addScrollEventListener(coverArrowDown, aboutSection);
}

document.addEventListener('DOMContentLoaded', () => {
    main();
});
