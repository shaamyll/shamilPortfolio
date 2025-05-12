import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';


const colorPalette = [
  'rgb(1, 2, 18)', // deep blue
  '#1e1772', // slightly lighter blue
  '#4b0082', // indigo
  '#483d8b', // dark slate blue
  '#2b0778', // deep sky blue
  '#8a2be2', // blue violet
  '#191970', // midnight blue
  '#72b9bc'  // slate blue
];

function ColoredSpheres() {
  const groupRef = useRef();
  const count = 250;
  const radius = 500;

  useEffect(() => {
    const group = groupRef.current;
    if (!group) return;

    while (group.children.length > 0) {
      group.remove(group.children[0]);
    }

    for (let i = 0; i < count; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      const geometry = new THREE.SphereGeometry(45, 42, 44);
      
      // Get a random color from the palette
      const randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      
      const material = new THREE.MeshStandardMaterial({
        color: new THREE.Color(randomColor),
        metalness: 0.7, // Slightly reduced for better color visibility
        roughness: 0.3, // Slightly increased for better color visibility
      });

      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(x, y, z);
      group.add(sphere);
    }
  }, []);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.x = time * 0.4;
      groupRef.current.rotation.y = time * 0.6;
    }
  });

  return <group ref={groupRef} />;
}

function SceneSetup() {
  const { scene } = useThree();
  useEffect(() => {
    scene.fog = new THREE.Fog(0x000000, 1000, 3000);
    return () => {
      scene.fog = null;
    };
  }, [scene]);
  return null;
}

export default function ThreeScene() {
  return (
    <div style={{ width: '100%', height: '100%' }} className="rounded overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 1500], fov: 60, near: 1, far: 3000 }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1.5} 
          color="#ffffff" 
        />
        <SceneSetup />
        <ColoredSpheres />
        <Environment preset="city" />
        <OrbitControls enableZoom={false} /> {/* Optional zoom */}
      </Canvas>
    </div>
  );
}
