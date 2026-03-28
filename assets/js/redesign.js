// Burger Menu Toggle
const burgerMenu = document.getElementById('burgerMenu');
const navMenu = document.getElementById('navMenu');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Parallax Effect
const parallaxBg = document.querySelector('.parallax-bg');
const parallaxLayer = document.querySelector('.parallax-layer');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    if (parallaxBg) {
        parallaxBg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
    if (parallaxLayer) {
        parallaxLayer.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    }

    // Update active nav link
    updateActiveNavLink();
});

// Active Nav Link Update
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

// Smooth scroll enhancement
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.project-card, .skill-category, .info-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Mouse move effect on hero
const hero = document.querySelector('.hero');
if (hero) {
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.clientX) / 20;
        const y = (window.innerHeight / 2 - e.clientY) / 20;
        
        parallaxLayer.style.transform = `translateY(${window.scrollY * 0.3}px) translate(${x}px, ${y}px)`;
    });
}

// Navbar blur effect on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.borderBottomColor = 'rgba(42, 47, 74, 0.3)';
    } else {
        navbar.style.borderBottomColor = 'rgba(42, 47, 74, 1)';
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateActiveNavLink();
});

console.log('[v0] Portfolio redesign loaded successfully with parallax effects');
