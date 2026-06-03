document.addEventListener("DOMContentLoaded", () => {
    // 1. Reveal Elements smoothly on Scroll
    const fadeElements = document.querySelectorAll('.fade-in');

    const appearanceOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearanceObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stops tracking once animated
            }
        });
    }, appearanceOptions);

    fadeElements.forEach(element => {
        appearanceObserver.observe(element);
    });

    // 2. Simple Theme Toggle Hook (Optional feature base)
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
        // Just toggles a placeholder class to alter standard layout colors if desired
        document.body.classList.toggle('light-theme');
    });
});