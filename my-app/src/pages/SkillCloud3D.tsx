import React, { useState, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, Line, Stars } from "@react-three/drei";
import * as THREE from "three";

const skillsData = [
  {
    category: "Programming",
    color: "#EAB308",
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Python", level: 90 },
      { name: "C", level: 72 },
      { name: "OOP", level: 96 },
      { name: "Async Programming", level: 94 },
      { name: "Memory Management", level: 80 },
      { name: "Performance Profiling", level: 88 },
    ],
  },
  {
    category: "Frontend",
    color: "#3B82F6",
    skills: [
      { name: "React", level: 98 },
      { name: "Next.js", level: 90 },
      { name: "React Native", level: 82 },
      { name: "Redux Toolkit", level: 95 },
      { name: "RTK Query", level: 94 },
      { name: "React Query", level: 90 },
      { name: "Tailwind CSS", level: 97 },
      { name: "StrivUI", level: 100 },
    ],
  },
  {
    category: "Backend",
    color: "#22C55E",
    skills: [
      { name: "Django", level: 88 },
      { name: "FastAPI", level: 93 },
      { name: "Flask", level: 80 },
      { name: "Node.js", level: 96 },
      { name: "Express", level: 95 },
      { name: "REST API", level: 98 },
      { name: "GraphQL", level: 86 },
      { name: "JWT", level: 95 },
      { name: "RBAC", level: 94 },
    ],
  },
  {
    category: "Databases",
    color: "#A855F7",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 96 },
      { name: "Redis", level: 85 },
      { name: "MySQL", level: 90 },
      { name: "Firebase", level: 82 },
      { name: "Indexing", level: 92 },
      { name: "Aggregation", level: 94 },
      { name: "Replication", level: 84 },
    ],
  },
  {
    category: "System Design",
    color: "#EF4444",
    skills: [
      { name: "Microservices", level: 93 },
      { name: "Distributed Systems", level: 88 },
      { name: "Load Balancing", level: 87 },
      { name: "Caching", level: 92 },
      { name: "Queues", level: 86 },
      { name: "Clean Architecture", level: 95 },
      { name: "SOLID", level: 98 },
      { name: "Design Patterns", level: 94 },
    ],
  },
  {
    category: "AI & ML",
    color: "#8B5CF6",
    skills: [
      { name: "OpenAI", level: 96 },
      { name: "LangChain", level: 92 },
      { name: "LangGraph", level: 88 },
      { name: "PyTorch", level: 90 },
      { name: "TensorFlow", level: 82 },
      { name: "LLMs", level: 94 },
      { name: "RAG", level: 93 },
      { name: "AI Agents", level: 95 },
    ],
  },
  {
    category: "Cloud & DevOps",
    color: "#06B6D4",
    skills: [
      { name: "Docker", level: 92 },
      { name: "Kubernetes", level: 80 },
      { name: "GitHub Actions", level: 88 },
      { name: "AWS", level: 84 },
      { name: "Nginx", level: 90 },
      { name: "PM2", level: 94 },
      { name: "Cloudflare", level: 90 },
      { name: "CI/CD", level: 91 },
    ],
  },
  {
    category: "Real-Time",
    color: "#F97316",
    skills: [
      { name: "WebRTC", level: 94 },
      { name: "Socket.io", level: 98 },
      { name: "WebSockets", level: 96 },
      { name: "Pusher", level: 84 },
      { name: "Streaming", level: 90 },
      { name: "Real-Time Sync", level: 95 },
    ],
  },
];

// Custom Shader Material for realistic planetary atmosphere glow
const AtmosphereShader = {
  uniforms: {
    color: { value: new THREE.Color("#3b82f6") },
  },
  vertexShader: `
    varying vec3 vNormal;
    void main() {
      vNormal = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform vec3 color;
    varying vec3 vNormal;
    void main() {
      float intensity = pow(0.6 - dot(vNormal, vec3(0, 0, 1.0)), 2.0);
      gl_FragColor = vec4(color, 1.0) * intensity;
    }
  `,
};

// Procedural Canvas Texture Generator for realistic surfaces
function generatePlanetTexture(baseColorHex: string, skillIndex: number) {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext("2d")!;

  const base = new THREE.Color(baseColorHex);
  const dark = base.clone().multiplyScalar(0.35);
  const light = base.clone().lerp(new THREE.Color("#ffffff"), 0.35);

  // Surface base gradient
  const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
  grad.addColorStop(0, `#${dark.getHexString()}`);
  grad.addColorStop(0.5, `#${base.getHexString()}`);
  grad.addColorStop(1, `#${dark.getHexString()}`);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Surface details (Gas bands, terrestrial noise, or craters)
  ctx.fillStyle = `#${light.getHexString()}`;
  ctx.globalAlpha = 0.25;

  const styleType = skillIndex % 3;

  if (styleType === 0) {
    // Gas giant horizontal atmospheric bands
    for (let y = 0; y < canvas.height; y += 8 + (skillIndex % 5)) {
      if (Math.sin(y * 0.05) > 0) {
        ctx.fillRect(0, y, canvas.width, 4 + (skillIndex % 6));
      }
    }
  } else if (styleType === 1) {
    // Terrestrial continents and landmass patterns
    for (let i = 0; i < 40; i++) {
      const cx = (Math.sin(i * 12.3 + skillIndex) * 0.5 + 0.5) * canvas.width;
      const cy = (Math.cos(i * 4.7 + skillIndex) * 0.5 + 0.5) * canvas.height;
      const r = 18 + (i % 28);
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();
    }
  } else {
    // Cratered rocky surface
    for (let i = 0; i < 65; i++) {
      const cx = Math.random() * canvas.width;
      const cy = Math.random() * canvas.height;
      const r = 2 + Math.random() * 12;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.strokeStyle = `#${light.getHexString()}`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
  }

  // Polar ice caps
  ctx.globalAlpha = 0.65;
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, 16);
  ctx.fillRect(0, canvas.height - 16, canvas.width, 16);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

// Realistic Planet Component
function Planet({ name, level, color, radius, speed, initialAngle, index }: any) {
  const orbitGroupRef = useRef<THREE.Group>(null!);
  const planetMeshRef = useRef<THREE.Mesh>(null!);

  const planetSize = 0.22 + (level / 100) * 0.25;

  // Generate procedural surface texture
  const surfaceTexture = useMemo(() => generatePlanetTexture(color, index), [color, index]);

  useFrame((_, delta) => {
    // Orbital rotation around Sun
    if (orbitGroupRef.current) {
      orbitGroupRef.current.rotation.y += speed * delta;
    }
    // Axial self-rotation
    if (planetMeshRef.current) {
      planetMeshRef.current.rotation.y += (speed * 2.5 + 0.2) * delta;
    }
  });

  // Precompute orbit line geometry
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 64; i++) {
      const theta = (i / 64) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius));
    }
    return pts;
  }, [radius]);

  return (
    <>
      {/* Orbit Ring */}
      <Line points={points} color={color} opacity={0.18} transparent lineWidth={1} />

      {/* Orbiting Axis Group */}
      <group ref={orbitGroupRef}>
        <group position={[Math.cos(initialAngle) * radius, 0, Math.sin(initialAngle) * radius]}>
          
          {/* Planet Mesh with 23.5-degree Axial Tilt */}
          <group rotation={[0.41, 0, 0.15]}>
            <mesh ref={planetMeshRef}>
              <sphereGeometry args={[planetSize, 64, 64]} />
              <meshStandardMaterial
                map={surfaceTexture}
                roughness={0.7}
                metalness={0.1}
                bumpMap={surfaceTexture}
                bumpScale={0.02}
              />
            </mesh>

            {/* Atmosphere Glow Layer */}
            {/* <mesh scale={[1.12, 1.12, 1.12]}>
              <sphereGeometry args={[planetSize, 32, 32]} />
              <shaderMaterial
                attach="material"
                args={[
                  {
                    ...AtmosphereShader,
                    uniforms: { color: { value: new THREE.Color(color) } },
                    blending: THREE.AdditiveBlending,
                    side: THREE.BackSide,
                    transparent: true,
                  },
                ]}
              />
            </mesh> */}
          </group>

          {/* Planet Label */}
          <Text
            position={[0, planetSize + 0.35, 0]}
            fontSize={0.18}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.02}
            outlineColor="#000000"
          >
            {`${name} (${level}%)`}
          </Text>
        </group>
      </group>
    </>
  );
}

// Central Sun Component
function SolarSun({ name, color }: { name: string; color: string }) {
  const sunMeshRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (sunMeshRef.current) {
      sunMeshRef.current.rotation.y += 0.1 * delta;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <mesh ref={sunMeshRef}>
        <sphereGeometry args={[0.85, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.2}
          roughness={0.2}
        />
      </mesh>

      {/* Sun Atmosphere Outer Glow */}
      <mesh scale={[1.18, 1.18, 1.18]}>
        <sphereGeometry args={[0.85, 32, 32]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.25}
          side={THREE.BackSide}
        />
      </mesh>

      <Text
        position={[0, 1.35, 0]}
        fontSize={0.35}
        color="#ffffff"
        anchorX="center"
        outlineWidth={0.03}
        outlineColor="#000000"
      >
        {name} Core
      </Text>
    </group>
  );
}

export default function SkillCloud3D() {
  const [activeTab, setActiveTab] = useState<string>("Frontend");

  const selectedCategory =
    skillsData.find((cat) => cat.category === activeTab) || skillsData[0];

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        background: `
          radial-gradient(circle at 50% 45%, rgba(255,191,36,0.12) 0%, transparent 18%),
          radial-gradient(circle at 20% 20%, rgba(180,83,9,0.15) 0%, transparent 30%),
          radial-gradient(circle at 80% 25%, rgba(120,53,15,0.12) 0%, transparent 35%),
          radial-gradient(circle at 50% 80%, rgba(92,41,12,0.15) 0%, transparent 45%),
          radial-gradient(circle at center, rgba(255,210,120,0.03) 0%, transparent 60%),
          linear-gradient(
            180deg,
            #000000 0%,
            #0B0603 12%,
            #140A05 28%,
            #221108 45%,
            #31180C 62%,
            #1A0D06 82%,
            #050302 100%
          )
        `,
      }}
    >
      {/* Category Navigation Bar */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          gap: "8px",
          background: "rgba(20, 12, 8, 0.85)",
          padding: "8px 12px",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          backdropFilter: "blur(10px)",
          maxWidth: "92%",
          overflowX: "auto",
        }}
      >
        {skillsData.map((cat) => (
          <button
            key={cat.category}
            onClick={() => setActiveTab(cat.category)}
            style={{
              padding: "8px 16px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: "13px",
              whiteSpace: "nowrap",
              transition: "all 0.3s ease",
              background: activeTab === cat.category ? '#c08122' : "transparent",
              color: activeTab === cat.category ? "#000000" : "#fff",
            }}
          >
            {cat.category}
          </button>
        ))}
      </div>

      {/* 3D Canvas Context */}
      <Canvas camera={{ position: [0, 8, 13], fov: 45 }}>
        <ambientLight intensity={0.3} />
        {/* Point light located at the center Sun so planets reflect day/night light correctly */}
        <pointLight position={[0, 0, 0]} intensity={3} color={selectedCategory.color} distance={30} />
        <directionalLight position={[5, 10, 5]} intensity={0.5} />

        <Stars radius={100} depth={50} count={2500} factor={4} saturation={0} fade speed={1} />

        <SolarSun name={selectedCategory.category} color={selectedCategory.color} />

        {selectedCategory.skills.map((skill, idx) => {
          const orbitRadius = 2.4 + idx * 0.95;
          const orbitSpeed = 0.35 / (idx + 1);
          const startAngle = (idx / selectedCategory.skills.length) * Math.PI * 2;

          return (
            <Planet
              key={skill.name}
              index={idx}
              name={skill.name}
              level={skill.level}
              color={selectedCategory.color}
              radius={orbitRadius}
              speed={orbitSpeed}
              initialAngle={startAngle}
            />
          );
        })}

        <OrbitControls
          enableZoom={true}
          maxPolarAngle={Math.PI / 2.1}
          minDistance={5}
          maxDistance={28}
        />
      </Canvas>
    </div>
  );
}