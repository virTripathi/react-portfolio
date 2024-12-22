import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { ParametricGeometry } from 'three/examples/jsm/geometries/ParametricGeometry.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function Maze() {
  const refContainer = useRef(null);
  const cameraRef = useRef(null);
  
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    cameraRef.current = camera;
    
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const currentRef = refContainer.current;
    if (currentRef) {
      currentRef.appendChild(renderer.domElement);
    }

    // OrbitControls for mouse interaction
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;
    controls.enableRotate = true;
    controls.enablePan = false;

    // Mobius strip parametric function
    const mobiusStrip = (u, v, target) => {
      u = u * Math.PI * 2;
      v = v * 2 - 1;

      const x = (1 + (v / 2) * Math.cos(u / 2)) * Math.cos(u);
      const y = (1 + (v / 2) * Math.cos(u / 2)) * Math.sin(u);
      const z = (v / 2) * Math.sin(u / 2);

      target.set(x, y, z);
    };

    // Create Mobius strip geometry
    const geometry = new ParametricGeometry(mobiusStrip, 100, 100);
    const material = new THREE.MeshBasicMaterial({ color: '#75c133', wireframe: true });
    const mobiusMesh = new THREE.Mesh(geometry, material);
    scene.add(mobiusMesh);

    // Function to add points on the strip
    const addPoint = (u, v, label) => {
      const pointGeometry = new THREE.SphereGeometry(0.05, 32, 32);
      const pointMaterial = new THREE.MeshBasicMaterial({ color: '#ff0000' });
      const pointMesh = new THREE.Mesh(pointGeometry, pointMaterial);
      
      const pos = new THREE.Vector3();
      mobiusStrip(u, v, pos);
      pointMesh.position.copy(pos);
      scene.add(pointMesh);

      // Add label (optional, replace with real 3D text if needed)
      const div = document.createElement('div');
      div.style.position = 'absolute';
      div.style.color = 'white';
      div.style.backgroundColor = 'black';
      div.style.padding = '2px';
      div.innerHTML = label;
      document.body.appendChild(div);

      // Update label position based on 3D point projection
      const updateLabelPosition = () => {
        const vector = pointMesh.position.clone();
        vector.project(camera);
        const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
        const y = (-vector.y * 0.5 + 0.5) * window.innerHeight;
        div.style.left = `${x}px`;
        div.style.top = `${y}px`;
      };
      updateLabelPosition();

      // Zoom on point click
      pointMesh.userData.label = label;
      pointMesh.callback = () => {
        zoomToPoint(pointMesh.position);
      };

      return updateLabelPosition;
    };

    // Zoom to a specific point
    const zoomToPoint = (targetPosition) => {
      const duration = 1000;
      const startPosition = camera.position.clone();
      const startFov = camera.fov;
      const targetFov = 35;
      const distance = startPosition.distanceTo(targetPosition);

      let startTime;
      const animateZoom = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1); // normalize progress between 0 and 1

        // Interpolate camera position and FOV
        camera.position.lerpVectors(startPosition, targetPosition, progress * (distance > 0 ? 0.5 : 1));
        camera.fov = startFov + (targetFov - startFov) * progress;
        camera.updateProjectionMatrix();

        if (progress < 1) {
          requestAnimationFrame(animateZoom);
        }
      };

      requestAnimationFrame(animateZoom);
    };

    // Add five equal points on the Mobius strip
    const points = [
      { u: 0, v: 0, label: 'Start' },
      { u: 0.25, v: 0, label: 'Home' },
      { u: 0.5, v: 0, label: 'About' },
      { u: 0.75, v: 0, label: 'Services' },
      { u: 1, v: 0, label: 'Contact' },
    ];

    const labelUpdaters = points.map((p) => addPoint(p.u, p.v, p.label));

    // Raycaster for detecting clicks
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onMouseClick = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(scene.children);
      if (intersects.length > 0) {
        const object = intersects[0].object;
        if (object.callback) {
          object.callback(); // Call the associated click callback
        }
      }
    };

    window.addEventListener('click', onMouseClick);

    // Camera positioning
    camera.position.z = 5;

    // Animation loop
    const animate = function () {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);

      // Update label positions
      labelUpdaters.forEach((updateLabel) => updateLabel());
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('click', onMouseClick);
      controls.dispose();
      if (currentRef) {
        currentRef.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={refContainer} style={{ width: '100%', height: '100vh', position: 'relative', zIndex: '1' }} />
  );
}
