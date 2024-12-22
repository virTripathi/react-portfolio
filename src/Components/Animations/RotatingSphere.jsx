import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function RotatingSphere() {
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
    const geometry = new THREE.SphereGeometry(10, 32, 32);
    const material = new THREE.MeshLambertMaterial({ color: 0xffff00, wireframe: true });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Ambient and Directional lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 2); // Soft light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5).normalize(); // Position the light
    scene.add(ambientLight, directionalLight);

    // Camera position
    camera.position.z = 10;

    // Animation function
    const animate = () => {
      sphere.rotation.x += 0.01;
      sphere.rotation.z += 0.01;
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
    // eslint-disable-next-line
    <div ref={refContainer} style={{ width: '100%', height: '100%', position: 'absolute', zIndex: '-9999' }} />
  );
}
