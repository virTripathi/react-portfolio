import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function RotatingDisc() {
  const refContainer = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor(0x000000, 0);
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    const currentRef = refContainer.current;
    if (currentRef) {
      currentRef.appendChild(renderer.domElement);
    }

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;

    // Sphere geometry and material
    const circleRadius = window.innerWidth < 768 ? 8 : 14; // Set radius based on screen width
    const geometry = new THREE.CircleGeometry(circleRadius, 32);
    const material = new THREE.MeshLambertMaterial({ color: '#20d761' });
    const circle = new THREE.Mesh(geometry, material);
    
    // Position the circle to the right side of the container
    circle.position.x = circleRadius * 0.5;
    scene.add(circle);

    // Ambient and Directional lighting
    const ambientLight = new THREE.AmbientLight(); // Soft light
    const directionalLight = new THREE.DirectionalLight();
    directionalLight.position.set(5, 10, 7.5).normalize(); // Position the light
    scene.add(ambientLight, directionalLight);

    // Camera position
    camera.position.z = 10;

    // Animation function
    const animate = () => {
      circle.rotation.z += 0.01; // Rotate the circle
      controls.update(); // Update controls for damping to work
      renderer.render(scene, camera);

      // Use requestAnimationFrame for smooth animations
      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resizing
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      controls.dispose();
      if (currentRef) {
        currentRef.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={refContainer} style={{ width: '100%', height: '100%', position: 'absolute', zIndex: '-9999' }} />
  );
}
