import * as THREE from 'three';

export function initThreeScene(containerId) {
    console.log('Initializing Three.js scene for container:', containerId);
    const container = document.getElementById(containerId);

    if (!container) {
        console.error('Container not found:', containerId);
        container.innerHTML = '<p>Error: Container not found. Check HTML.</p>';
        return;
    }

    // Set up renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    try {
        renderer.setSize(container.offsetWidth, container.offsetHeight);
        console.log('Renderer size set to:', container.offsetWidth, 'x', container.offsetHeight);
        container.appendChild(renderer.domElement);
    } catch (error) {
        console.error('Renderer setup failed:', error);
        container.innerHTML = '<p>Renderer failed to load. Check console.</p>';
        return;
    }

    // Set up scene and camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    camera.position.z = 3;

    // Create a simple sphere
    const geometry = new THREE.SphereGeometry(1.5, 16, 16); // Reduced segments for performance
    const material = new THREE.MeshBasicMaterial({ color: 0x0d47a1, wireframe: true });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        sphere.rotation.y += 0.01; // Basic auto-rotation
        renderer.render(scene, camera);
    }
    animate();

    // Handle resize
    window.addEventListener('resize', () => {
        console.log('Window resized, updating renderer');
        const width = container.offsetWidth;
        const height = container.offsetHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    });

    console.log('Three.js scene initialized successfully');
}
