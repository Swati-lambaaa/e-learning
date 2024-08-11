// Mobile Menu Toggle
const menuToggle = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Scroll Animation
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;

    sections.forEach(section => {
        if (scrollPosition >= section.offsetTop - window.innerHeight / 2) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        } else {
            section.style.opacity = 0;
            section.style.transform = 'translateY(50px)';
        }
    });
});