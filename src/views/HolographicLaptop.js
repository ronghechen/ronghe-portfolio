
import React, { Suspense, useMemo } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import softwearImage from "../assets/img/softwear.png";
import {
  RoundedBox,
  Float,
  OrbitControls,
} from "@react-three/drei";
import * as THREE from "three";

function LaptopScreen({ image }) {
  const texture = useLoader(THREE.TextureLoader, image);

  useMemo(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 8;
    texture.needsUpdate = true;
  }, [texture]);

  return (
    <group position={[0, 1.35, -0.96]}>
      <RoundedBox args={[3.35, 2.2, 0.12]} radius={0.09}>
        <meshPhysicalMaterial
          color="#c4c5ff"
          metalness={0.75}
          roughness={0.17}
          clearcoat={1}
          clearcoatRoughness={0.08}
        />
      </RoundedBox>


      <mesh position={[0, 0, 0.068]}>
        <planeGeometry args={[3.12, 1.98]} />
        <meshBasicMaterial color="#080510" />
      </mesh>

      <mesh position={[0, 0, 0.072]}>
        <planeGeometry args={[2.94, 1.72]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>

      <mesh position={[0, 1.02, 0.073]}>
        <circleGeometry args={[0.018, 16]} />
        <meshBasicMaterial color="#6d60ba" />
      </mesh>
    </group>
  );
}

function Keyboard() {
  const keys = [];

  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 14; col++) {
      keys.push({
        x: (col - 6.5) * 0.218,
        z: -0.55 + row * 0.245,
        color:
          (row + col) % 3 === 0
            ? "#b5d9ff"
            : (row + col) % 3 === 1
            ? "#e2b7ff"
            : "#d6c9f5",
      });
    }
  }

  return (
    <group>
      {keys.map((key, i) => (
        <RoundedBox
          key={i}
          args={[0.18, 0.025, 0.19]}
          radius={0.025}
          position={[key.x, 0.108, key.z]}
        >
          <meshPhysicalMaterial
            color={key.color}
            metalness={0.45}
            roughness={0.22}
            clearcoat={1}
          />
        </RoundedBox>
      ))}

      <RoundedBox
        args={[1.15, 0.006, 0.53]}
        radius={0.055}
        position={[0, 0.105, 0.91]}
      >
        <meshPhysicalMaterial
          color="#c9b8f7"
          metalness={0.8}
          roughness={0.2}
        />
      </RoundedBox>
    </group>
  );
}

function LaptopModel({ image }) {
  return (
    <group rotation={[0, -0.3, 0]}>
      <RoundedBox
        args={[3.55, 0.16, 2.45]}
        radius={0.11}
        position={[0, 0, 0]}
      >
        <meshPhysicalMaterial
          color="#c8b6ed"
          metalness={0.85}
          roughness={0.14}
          clearcoat={1}
          clearcoatRoughness={0.06}
        />
      </RoundedBox>

      <mesh position={[0, 0.083, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[3.25, 2.2]} />
        <meshPhysicalMaterial
          color="#e3d4ff"
          metalness={0.65}
          roughness={0.2}
          transparent
          opacity={0.85}
        />
      </mesh>

      <Keyboard />
      <LaptopScreen image={image} />

      {/* Hinges */}
      {[-1.25, 1.25].map((x) => (
        <mesh
          key={x}
          position={[x, 0.12, -1.13]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <cylinderGeometry args={[0.065, 0.065, 0.3, 24]} />
          <meshStandardMaterial
            color="#b7caff"
            metalness={0.95}
            roughness={0.12}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function HolographicLaptop({
  image = softwearImage,
}) {
  return (
    <div className="holographic-laptop">
      <Canvas
        camera={{
          position: [4.5, 3.2, 7.5],
          fov: 38,
        }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={1.8} />
        <directionalLight
          position={[4, 6, 5]}
          intensity={3}
          color="#c3d8ff"
        />
        <pointLight
          position={[-4, 3, 2]}
          intensity={35}
          color="#ff7cdb"
        />
        <pointLight
          position={[3, 2, -4]}
          intensity={30}
          color="#6deaff"
        />

        <Suspense fallback={null}>
          <Float
            speed={1.5}
            rotationIntensity={0.08}
            floatIntensity={0.3}
          >
            <LaptopModel image={image} />
          </Float>
        </Suspense>

        <OrbitControls
          target={[0, 0.7, 0]}
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.45}
          minPolarAngle={0.7}
          maxPolarAngle={Math.PI / 2.2}
        />
      </Canvas>
    </div>
  );
}
