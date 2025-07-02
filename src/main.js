import { initThreeScene } from './threeScene.js';
import gsap from 'gsap';
import anime from 'animejs';

// Initialize Three.js
initThreeScene('three-container');

// GSAP animations
gsap.from("#firm-name", { opacity: 0, y: -50, duration: 1 });
gsap.from("#tagline", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
gsap.from(".contact-button", { opacity: 0, scale: 0.8, duration: 1, delay: 1 });

// Anime.js text color pulse
anime({
    targets: '#firm-name',
    color: ['#0d47a1', '#1565c0', '#0d47a1'],
    duration: 4000,
    loop: true,
    easing: 'easeInOutSine'
});

// Animated Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#1565c0';
    } else {
        navbar.style.background = '#0d47a1';
    }
});
