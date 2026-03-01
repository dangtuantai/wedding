document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       Theme Switcher Logic
    ========================================= */
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    let isPinkMode = false;

    themeToggleBtn.addEventListener('click', () => {
        isPinkMode = !isPinkMode;
        if (isPinkMode) {
            body.classList.replace('light-mode', 'pink-mode');
        } else {
            body.classList.replace('pink-mode', 'light-mode');
        }
    });

    /* =========================================
       Navbar Scroll Effect
    ========================================= */
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = 'var(--glass-shadow)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.boxShadow = 'none';
        }
    });

    /* =========================================
       Scroll Reveal Animation
    ========================================= */
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);
    reveal(); // trigger once on load

    /* =========================================
       Flying Hearts Cursor Effect
    ========================================= */
    const heartsContainer = document.getElementById('hearts-container');
    let lastHeartTime = 0;

    document.addEventListener('mousemove', (e) => {
        const now = Date.now();
        // Limit heart creation rate to avoid performance issues
        if (now - lastHeartTime > 50) {
            createHeart(e.clientX, e.clientY);
            lastHeartTime = now;
        }
    });

    function createHeart(x, y) {
        const heart = document.createElement('div');
        heart.classList.add('cursor-heart');
        heart.innerHTML = '<i class="bi bi-heart-fill"></i>';

        // Randomize initial position slightly around the cursor
        const randomX = x + (Math.random() - 0.5) * 20;
        const randomY = y + (Math.random() - 0.5) * 20;

        heart.style.left = `${randomX}px`;
        heart.style.top = `${randomY}px`;

        // Add random size variation
        const scale = 0.5 + Math.random() * 0.5;
        heart.style.transform = `scale(${scale})`;

        heartsContainer.appendChild(heart);

        // Remove the heart from the DOM after the animation completes
        setTimeout(() => {
            heart.remove();
        }, 1000); // 1000ms matches the animation duration
    }
});
