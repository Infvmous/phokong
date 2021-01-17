function smoothScroll(ele, duration) {
    const target = document.querySelector(ele);
    const targetPos = target.getBoundingClientRect().top;
    const startPos = window.pageYOffset;
    const distance = targetPos - startPos;
    let startTime = null;

    const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const runAnimation = ease(timeElapsed, startPos, distance, duration);
        window.scrollTo(0, runAnimation);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
}

function addScrollEventListener(ele, scrollTo, scrollDuration = 300) {
    ele.addEventListener('click', () => {
        smoothScroll(scrollTo, scrollDuration);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // collect dom elements
    const burgerBtn = document.getElementById('burger');
    const navbar = document.getElementById('nav');
    const cover = document.getElementById('cover');
    const coverArrowDown = document.getElementById('reveal-content');
    const scrollToMenuBtn = document.getElementById('scroll-to-menu');
    const main = document.querySelector('.main');
    const body = document.body;

    // Burger menu
    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active');
        navbar.classList.toggle('active');
        body.classList.toggle('lock');
    });

    // Close navbar menu on main click
    main.addEventListener('click', () => {
        if (navbar.classList.contains('active')) {
            burgerBtn.classList.remove('active');
            navbar.classList.remove('active');
            body.classList.remove('lock');
        }
    });

    // Scroll about section
    addScrollEventListener(coverArrowDown, '.about');
});
