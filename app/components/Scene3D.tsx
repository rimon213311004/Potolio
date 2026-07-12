"use client";

import { Canvas } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Icosahedron,
  TorusKnot,
  Sparkles,
} from "@react-three/drei";
import { Suspense } from "react";

function Blob({
  position,
  color,
  scale = 1,
  speed = 1.5,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
  speed?: number;
}) {
  return (
    <Float speed={speed} rotationIntensity={1.1} floatIntensity={1.8}>
      <Icosahedron args={[1, 8]} position={position} scale={scale}>
        <MeshDistortMaterial
          color={color}
          distort={0.45}
          speed={2.2}
          roughness={0.15}
          metalness={0.4}
        />
      </Icosahedron>
    </Float>
  );
}

function Knot() {
  return (
    <Float speed={1.4} rotationIntensity={1.4} floatIntensity={1.2}>
      <TorusKnot args={[0.75, 0.24, 180, 32]} position={[3.1, -1.1, -1]} scale={0.9}>
        <meshStandardMaterial
          color="#22d3ee"
          roughness={0.2}
          metalness={0.7}
          emissive="#0e7490"
          emissiveIntensity={0.35}
        />
      </TorusKnot>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.4} color="#ffffff" />
        <pointLight position={[-6, -3, -2]} intensity={40} color="#7c5cff" />
        <pointLight position={[6, 3, 2]} intensity={30} color="#22d3ee" />
        <pointLight position={[0, -4, 3]} intensity={22} color="#f471b5" />

        <Blob position={[-3, 0.8, 0]} color="#7c5cff" scale={1.35} speed={1.6} />
        <Blob position={[2.6, 1.4, -1.5]} color="#f471b5" scale={0.7} speed={2.1} />
        <Knot />

        <Sparkles
          count={60}
          scale={[12, 8, 6]}
          size={2.4}
          speed={0.35}
          color="#a5b4fc"
          opacity={0.7}
        />
      </Suspense>
    </Canvas>
  );
}
