document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animation Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once animated
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach(el => observer.observe(el));

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Toast Notification Logic
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = '<div class="toast-icon"></div><span id="toast-msg">Connecting to secure server...</span>';
    document.body.appendChild(toast);

    function showToast(message, duration = 3000) {
        const msgEl = document.getElementById('toast-msg');
        msgEl.textContent = message;
        toast.classList.add('visible');

        setTimeout(() => {
            toast.classList.remove('visible');
        }, duration);
    }

    // Handle Download Buttons
    document.querySelectorAll('.btn-store, .nav-cta').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();

            // Simulation Sequence
            showToast("Connecting to secure server...", 4000);

            setTimeout(() => {
                const msgEl = document.getElementById('toast-msg');
                if (msgEl) msgEl.textContent = "Redirecting to Store...";
            }, 2000);
        });
    });
});
