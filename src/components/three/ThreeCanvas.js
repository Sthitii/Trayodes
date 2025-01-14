'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';

const WaveMesh = () => {
  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <mesh position={[0, 0, -2]}>
        <torusKnotGeometry args={[9, 2, 256, 32]} />
        <meshPhongMaterial 
          color="#5D2D91"
          opacity={0.2}
          transparent
          wireframe
        />
      </mesh>
    </Float>
  );
};

const ThreeCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <WaveMesh />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
};

export default ThreeCanvas;