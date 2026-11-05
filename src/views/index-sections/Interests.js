
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Container } from "reactstrap";
import { Float } from "@react-three/drei";
import * as THREE from "three";

const interests = [
  { label: "graphic\ndesign", className: "interest-1" },
  { label: "digital\nart", className: "interest-2" },
  { label: "pilates", className: "interest-3" },
  { label: "east asian\nstreet\nfashion", className: "interest-4" },
  { label: "dark zen\naesthetic", className: "interest-5" },
  { label: "cooking", className: "interest-6" },
];


function createInflatedStarGeometry() {
  const points = 5;
  const outlineSegments = 200;
  const rings = 36;
  const positions = [];
  const indices = [];
  const outerRadius = 1;
  const innerRadius = 0.58;

  const corners = [];

  for (let i = 0; i < points * 2; i++) {
    const angle = -Math.PI / 2 + (i * Math.PI) / points;
    const radius = i % 2 === 0 ? outerRadius : innerRadius;

    corners.push(
      new THREE.Vector2(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius
      )
    );
  }

  // Smooth the outline using a closed Catmull-Rom curve
  const curve = new THREE.CatmullRomCurve3(
    corners.map(p => new THREE.Vector3(p.x, p.y, 0)),
    true,
    "centripetal",
    0.5
  );

  const outline = curve.getPoints(outlineSegments);

  for (let side = 0; side < 2; side++) {
    const sign = side === 0 ? 1 : -1;
    const offset = positions.length / 3;

    for (let r = 0; r <= rings; r++) {
      const t = r / rings;

      for (let i = 0; i < outlineSegments; i++) {
        const p = outline[i];

        const x = p.x * t;
        const y = p.y * t;

        // Smooth balloon inflation, fuller center
        const inflation = Math.sqrt(
          Math.max(0, 1 - t * t)
        );

        const z = sign * 0.38 * inflation;

        positions.push(x, y, z);
      }
    }

    for (let r = 0; r < rings; r++) {
      for (let i = 0; i < outlineSegments; i++) {
        const next = (i + 1) % outlineSegments;

        const a = offset + r * outlineSegments + i;
        const b = offset + (r + 1) * outlineSegments + i;
        const c = offset + r * outlineSegments + next;
        const d = offset + (r + 1) * outlineSegments + next;

        if (side === 0) {
          indices.push(a, b, c);
          indices.push(b, d, c);
        } else {
          indices.push(a, c, b);
          indices.push(b, c, d);
        }
      }
    }
  }

  const geometry = new THREE.BufferGeometry();

  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3)
  );

  geometry.setIndex(indices);
  geometry.computeVertexNormals();

  return geometry;
}

function HolographicStar({ position, scale = 1, speed = 1 }) {
  const mesh = useRef();

  const geometry = React.useMemo(
    () => createInflatedStarGeometry(),
    []
  );

  React.useEffect(() => {
    return () => geometry.dispose();
  }, [geometry]);

  useFrame((state) => {
    if (!mesh.current) return;

    const t = state.clock.elapsedTime;

    mesh.current.rotation.y =
      Math.sin(t * 0.35 * speed) * 0.3;

    mesh.current.rotation.x =
      Math.sin(t * 0.25 * speed) * 0.12;

    mesh.current.rotation.z =
      Math.sin(t * 0.2 * speed) * 0.1;

    if (mesh.current.material.uniforms) {
      mesh.current.material.uniforms.uTime.value = t;
    }
  });

  return (
    <Float
      speed={1.4 * speed}
      rotationIntensity={0.1}
      floatIntensity={0.3}
    >
      <mesh
        ref={mesh}
        geometry={geometry}
        position={position}
        scale={[scale * 1.08, scale * 0.96, scale]}
      >
        <shaderMaterial
          transparent={false}
          side={THREE.DoubleSide}
          uniforms={{
            uTime: { value: 0 }
          }}
          
        vertexShader={`
          varying vec3 vNormal;
          varying vec3 vPosition;
          varying vec3 vLocalPosition;

          void main() {
            vLocalPosition = position;
            vNormal = normalize(normalMatrix * normal);

            vec4 viewPosition =
              modelViewMatrix * vec4(position, 1.0);

            vPosition = viewPosition.xyz;

            gl_Position =
              projectionMatrix * viewPosition;
          }
        `}
        fragmentShader={`
          uniform float uTime;

          varying vec3 vNormal;
          varying vec3 vPosition;
          varying vec3 vLocalPosition;

          void main() {
            vec3 normal = normalize(vNormal);
            vec3 viewDir = normalize(-vPosition);

            float fresnel = pow(
              1.0 - abs(dot(normal, viewDir)),
              2.2
            );

            // Gentle flowing iridescence, not radial wedges
            float wave =
              vLocalPosition.x * 2.3 +
              vLocalPosition.y * 1.4 +
              sin(vLocalPosition.y * 3.0 + uTime * 0.3) * 0.5;

            float rainbow = 0.5 + 0.5 * sin(wave);

            vec3 pearl = vec3(0.94, 0.95, 0.96);
            vec3 pink = vec3(1.0, 0.77, 0.82);
            vec3 cyan = vec3(0.62, 0.91, 0.96);
            vec3 lavender = vec3(0.81, 0.76, 0.98);

            vec3 holographic = mix(pink, cyan, rainbow);

            holographic = mix(
              holographic,
              lavender,
              0.15 + 0.15 * sin(wave * 1.8)
            );

            // Pearl center, stronger iridescence at edges
            vec3 color = mix(
              pearl,
              holographic,
              0.25 + fresnel * 0.65
            );

            // Thin colored rim
            float rim = pow(
              1.0 - abs(dot(normal, viewDir)),
              4.0
            );

            color = mix(
              color,
              mix(cyan, pink, rainbow),
              rim * 0.65
            );

            // Broad, soft glossy highlight
            float shine = pow(
              max(
                dot(normal, normalize(vec3(-0.4, 0.6, 1.0))),
                0.0
              ),
              10.0
            );

            color += vec3(1.0) * shine * 0.12;

            gl_FragColor = vec4(color, 1.0);
          }
        `}
        />
      </mesh>
    </Float>
  );
}

function StarScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      gl={{
        alpha: true,
        antialias: true
      }}
      dpr={[1, 2]}
      style={{ background: "transparent" }}
    >
      <HolographicStar
        position={[-0.85, -0.4, 0]}
        scale={1.05}
        speed={0.8}
      />

      <HolographicStar
        position={[0.65, 1.15, -0.3]}
        scale={0.48}
        speed={1.2}
      />

      <HolographicStar
        position={[1.65, 0.1, 0.2]}
        scale={0.38}
        speed={1}
      />
    </Canvas>
  );
}

export default function Interests() {
  return (
    <section className="interests-section" id="interests">
        <Container className="interests-container">
        <h2 className="interests-heading">INTERESTS</h2>

        <div className="interests-stars" aria-hidden="true">
          <StarScene />
        </div>

        {interests.map((interest, index) => (
          <div
            className={`interest-blob ${interest.className}`}
            key={index}
          >
            <span>{interest.label}</span>
          </div>
        ))}
      </Container>
    </section>
  );
}
