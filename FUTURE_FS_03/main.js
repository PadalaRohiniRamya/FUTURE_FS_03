document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const mobileMenu = document.getElementById('mobile-menu');
    const revealElements = document.querySelectorAll('.reveal');

    // Sticky Navbar on Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(44, 27, 18, 0.95)';
            navbar.style.padding = '15px 0';
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.padding = '30px 0';
            navbar.style.boxShadow = 'none';
        }
    });

    // Mobile Menu Toggle logic
    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            alert('Roasted Roots Mobile Menu - Feature Coming Soon!');
        });
    }

    // Intersection Observer for Reveal on Scroll
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
});
