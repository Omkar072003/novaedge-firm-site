import { initThreeScene } from './threeScene.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import anime from 'animejs';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Debug: Confirm script is loaded
console.log('main.js loaded');

// Initialize Three.js scene
try {
    console.log('Initializing Three.js scene');
    initThreeScene('three-container');
} catch (error) {
    console.error('Three.js initialization failed:', error);
    document.getElementById('three-container').innerHTML = '<p>Three.js scene failed to load. Check console for details.</p>';
}

// GSAP animations for header elements
try {
    console.log('Applying GSAP animations');
    gsap.from("#firm-name", { opacity: 0, y: -50, duration: 1.2, ease: "power3.out" });
    gsap.from("#tagline", { opacity: 0, y: 50, duration: 1.2, ease: "power3.out", delay: 0.4 });
    gsap.from(".contact-button", { opacity: 0, scale: 0.8, duration: 1, ease: "back.out(1.7)", delay: 0.8 });
} catch (error) {
    console.error('GSAP animation failed:', error);
}

// Staggered animations for team and project cards
try {
    console.log('Applying card animations');
    gsap.from(".team-member", { 
        opacity: 0, 
        y: 1, 
        duration: 1, 
        stagger: 0.2, 
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#who-we-are",
            start: "top 80%",
        }
    });
    gsap.from(".project-card", { 
        opacity: 0, 
        y: 1, 
        duration: 1, 
        stagger: 0.2, 
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#projects",
            start: "top 80%",
        }
    });
} catch (error) {
    console.error('Card animation failed:', error);
}

// Anime.js text color pulse with scale
try {
    console.log('Applying Anime.js animation');
    anime({
        targets: '#firm-name',
        color: ['#0d47a1', '#1565c0', '#0d47a1'],
        scale: [1, 1.05, 1],
        duration: 4000,
        loop: true,
        easing: 'easeInOutSine'
    });
} catch (error) {
    console.error('Anime.js animation failed:', error);
}

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.links');

if (menuToggle && navLinks) {
    console.log('Setting up menu toggle');
    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        console.log('Menu toggle clicked, isExpanded:', isExpanded);
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        navLinks.classList.toggle('active');
    });

    menuToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            console.log('Menu toggle key pressed, isExpanded:', isExpanded);
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            navLinks.classList.toggle('active');
        }
    });
} else {
    console.warn('Menu toggle or nav links not found in DOM');
}

// Animated navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        console.log('Scroll detected, y:', window.scrollY);
        if (window.scrollY > 50) {
            navbar.style.background = 'linear-gradient(90deg, #1565c0, #1e88e5)';
        } else {
            navbar.style.background = 'linear-gradient(90deg, #0d47a1, #1565c0)';
        }
    } else {
        console.warn('Navbar not found');
    }
});
