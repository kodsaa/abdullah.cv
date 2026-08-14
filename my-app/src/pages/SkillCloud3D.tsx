import React, { useState, useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Text, Line, Stars } from "@react-three/drei";
import * as THREE from "three";
import { useTranslation } from "react-i18next";
import { useNavigate, useNavigation, useParams } from "react-router-dom";

// Dynamic Theme Configuration Map
const THEME_STYLES: Record<
  string,
  {
    background: string;
    navBg: string;
    navBorder: string;
    textColor: string;
    activeTextColor: string;
    labelColor: string;
    starsFade: boolean;
    ambientIntensity: number;
    coreColor?: string;
    accentColor?: string;
  }
> = {
  obsidian: {
    background: "linear-gradient(180deg, #050505 0%, #0c0d10 50%, #020202 100%)",
    navBg: "rgba(18, 18, 20, 0.85)",
    navBorder: "rgba(255, 255, 255, 0.12)",
    textColor: "#e4e4e7",
    activeTextColor: "#ffffff",
    labelColor: "#ffffff",
    starsFade: true,
    ambientIntensity: 0.35,
    coreColor: "#6366f1",
    accentColor: "#818cf8",
  },
  midnight: {
    background: "radial-gradient(circle at 50% 30%, #1e1b4b 0%, #0f172a 50%, #020617 100%)",
    navBg: "rgba(15, 23, 42, 0.85)",
    navBorder: "rgba(99, 102, 241, 0.25)",
    textColor: "#cbd5e1",
    activeTextColor: "#ffffff",
    labelColor: "#f8fafc",
    starsFade: true,
    ambientIntensity: 0.4,
    coreColor: "#38bdf8",
    accentColor: "#60a5fa",
  },
  carbon: {
    background: "radial-gradient(circle at center, #27272a 0%, #18181b 50%, #09090b 100%)",
    navBg: "rgba(24, 24, 27, 0.85)",
    navBorder: "rgba(255, 255, 255, 0.15)",
    textColor: "#d4d4d8",
    activeTextColor: "#ffffff",
    labelColor: "#f4f4f5",
    starsFade: true,
    ambientIntensity: 0.35,
    coreColor: "#a1a1aa",
    accentColor: "#e4e4e7",
  },
  titanium: {
    background: "linear-gradient(135deg, #1c1917 0%, #27414a 50%, #0c0a09 100%)",
    navBg: "rgba(41, 37, 36, 0.85)",
    navBorder: "rgba(214, 211, 209, 0.2)",
    textColor: "#e7e5e4",
    activeTextColor: "#ffffff",
    labelColor: "#f5f5f4",
    starsFade: true,
    ambientIntensity: 0.4,
    coreColor: "#f97316",
    accentColor: "#fb923c",
  },
  steel: {
    background: "radial-gradient(circle at top, #1e293b 0%, #34456a 60%, #020617 100%)",
    navBg: "rgba(30, 41, 59, 0.85)",
    navBorder: "rgba(148, 163, 184, 0.25)",
    textColor: "#cbd5e1",
    activeTextColor: "#0f172a",
    labelColor: "#f8fafc",
    starsFade: true,
    ambientIntensity: 0.4,
    coreColor: "#0ea5e9",
    accentColor: "#38bdf8",
  },
  quartz: {
    background: "linear-gradient(180deg, #2e1065 0%, #3b0764 50%, #18022d 100%)",
    navBg: "rgba(59, 7, 100, 0.85)",
    navBorder: "rgba(192, 132, 252, 0.3)",
    textColor: "#e9d5ff",
    activeTextColor: "#ffffff",
    labelColor: "#f3e8ff",
    starsFade: true,
    ambientIntensity: 0.45,
    coreColor: "#c084fc",
    accentColor: "#e879f9",
  },
  sandstone: {
    background: `
      radial-gradient(circle at 50% 45%, rgba(255,191,36,0.12) 0%, transparent 18%),
      radial-gradient(circle at 20% 20%, rgba(180,83,9,0.15) 0%, transparent 30%),
      radial-gradient(circle at 80% 25%, rgba(120,53,15,0.12) 0%, transparent 35%),
      linear-gradient(180deg, #000000 0%, #0B0603 12%, #140A05 28%, #221108 45%, #31180C 62%, #050302 100%)
    `,
    navBg: "rgba(20, 12, 8, 0.85)",
    navBorder: "rgba(245, 158, 11, 0.25)",
    textColor: "#fde68a",
    activeTextColor: "#000000",
    labelColor: "#fef3c7",
    starsFade: true,
    ambientIntensity: 0.3,
    coreColor: "#f59e0b",
    accentColor: "#fbbf24",
  },
  aurora: {
    background: "radial-gradient(circle at 50% 20%, #064e3b 0%, #022c22 50%, #020617 100%)",
    navBg: "rgba(6, 78, 59, 0.85)",
    navBorder: "rgba(52, 211, 153, 0.3)",
    textColor: "#a7f3d0",
    activeTextColor: "#022c22",
    labelColor: "#ecfdf5",
    starsFade: true,
    ambientIntensity: 0.4,
    coreColor: "#10b981",
    accentColor: "#34d399",
  },
  nebula: {
    background: "radial-gradient(circle at 70% 30%, #4c0f50 0%, #300e63 40%, #090514 100%)",
    navBg: "rgba(76, 29, 149, 0.85)",
    navBorder: "rgba(232, 121, 249, 0.3)",
    textColor: "#f5d0fe",
    activeTextColor: "#ffffff",
    labelColor: "#fae8ff",
    starsFade: true,
    ambientIntensity: 0.45,
    coreColor: "#ec4899",
    accentColor: "#f472b6",
  },
  solarized: {
    background: "radial-gradient(circle at center, #073642 0%, #002b36 70%, #001e26 100%)",
    navBg: "rgba(7, 54, 66, 0.85)",
    navBorder: "rgba(42, 161, 152, 0.3)",
    textColor: "#93a1a1",
    activeTextColor: "#002b36",
    labelColor: "#fdf6e3",
    starsFade: true,
    ambientIntensity: 0.35,
    coreColor: "#2aa198",
    accentColor: "#859900",
  },
  contrast: {
    background: "#000000",
    navBg: "rgba(0, 0, 0, 0.95)",
    navBorder: "#ffffff",
    textColor: "#ffffff",
    activeTextColor: "#000000",
    labelColor: "#ffffff",
    starsFade: false,
    ambientIntensity: 0.5,
    coreColor: "#ffffff",
    accentColor: "#ffffff",
  },
  system: {
    background: "radial-gradient(circle at center, #1e170c 0%, #280f08 100%)",
    navBg: "rgba(24, 24, 27, 0.85)",
    navBorder: "rgba(255, 255, 255, 0.15)",
    textColor: "#e4e4e7",
    activeTextColor: "#000000",
    labelColor: "#ffffff",
    starsFade: true,
    ambientIntensity: 0.35,
  },
};

const skillsData = [
  {
    category: "Programming",
    titleKey: "skillOccupationLabel1",
    id: "programming-languages",
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
    id: "frontend-engineering",
    titleKey: "skillOccupationLabel2",
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
    id: "backend-engineering",
    titleKey: "skillOccupationLabel3",
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
    id: "databases",
    titleKey: "skillOccupationLabel4",
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
    id: "system-design",
    color: "#EF4444",
    titleKey: "skillOccupationLabel5",
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
    id: "ai-machine-learning",
    titleKey: "skillOccupationLabel6",
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
    id: "cloud-devops",
    titleKey: "skillOccupationLabel7",
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
    id: "real-time-systems",
    titleKey: "skillOccupationLabel8",
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

function generatePlanetTexture(baseColorHex: string, themeAccentHex: string | undefined, skillIndex: number) {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext("2d")!;

  const base = new THREE.Color(baseColorHex);
  const blendedBase = themeAccentHex 
    ? base.clone().lerp(new THREE.Color(themeAccentHex), 0.45)
    : base;

  const dark = blendedBase.clone().multiplyScalar(0.35);
  const light = blendedBase.clone().lerp(new THREE.Color("#ffffff"), 0.4);

  const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
  grad.addColorStop(0, `#${dark.getHexString()}`);
  grad.addColorStop(0.5, `#${blendedBase.getHexString()}`);
  grad.addColorStop(1, `#${dark.getHexString()}`);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = `#${light.getHexString()}`;
  ctx.globalAlpha = 0.3;

  const styleType = skillIndex % 3;

  if (styleType === 0) {
    for (let y = 0; y < canvas.height; y += 8 + (skillIndex % 5)) {
      if (Math.sin(y * 0.05) > 0) {
        ctx.fillRect(0, y, canvas.width, 4 + (skillIndex % 6));
      }
    }
  } else if (styleType === 1) {
    for (let i = 0; i < 40; i++) {
      const cx = (Math.sin(i * 12.3 + skillIndex) * 0.5 + 0.5) * canvas.width;
      const cy = (Math.cos(i * 4.7 + skillIndex) * 0.5 + 0.5) * canvas.height;
      const r = 18 + (i % 28);
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();
    }
  } else {
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

  ctx.globalAlpha = 0.7;
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, 14);
  ctx.fillRect(0, canvas.height - 14, canvas.width, 14);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

// Dynamic Camera Controller for Smooth Responsiveness
function DynamicCameraController({ screenWidth }: { screenWidth: number }) {
  const { camera } = useThree();

  useEffect(() => {
    const isXS = screenWidth < 480;
    const isMobile = screenWidth >= 480 && screenWidth < 640;
    const isTablet = screenWidth >= 640 && screenWidth < 1024;

    const targetZ = isXS ? 22 : isMobile ? 18 : isTablet ? 15 : 13;
    const targetY = isXS ? 12 : isMobile ? 10 : isTablet ? 9 : 8;

    camera.position.set(0, targetY, targetZ);
    camera.lookAt(0, 0, 0);
  }, [screenWidth, camera]);

  return null;
}

function Planet({
  name,
  level,
  color,
  themeAccent,
  radius,
  speed,
  initialAngle,
  index,
  labelColor,
  scaleFactor = 1,
}: any) {
  const orbitGroupRef = useRef<THREE.Group>(null!);
  const planetMeshRef = useRef<THREE.Mesh>(null!);

  const planetSize = (0.22 + (level / 100) * 0.25) * scaleFactor;

  const surfaceTexture = useMemo(
    () => generatePlanetTexture(color, themeAccent, index),
    [color, themeAccent, index]
  );

  const blendedOrbitColor = useMemo(() => {
    if (!themeAccent) return color;
    return `#${new THREE.Color(color).lerp(new THREE.Color(themeAccent), 0.5).getHexString()}`;
  }, [color, themeAccent]);

  useFrame((_, delta) => {
    if (orbitGroupRef.current) {
      orbitGroupRef.current.rotation.y += speed * delta;
    }
    if (planetMeshRef.current) {
      planetMeshRef.current.rotation.y += (speed * 2.5 + 0.2) * delta;
    }
  });

  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 64; i++) {
      const theta = (i / 64) * Math.PI * 2;
      pts.push(
        new THREE.Vector3(
          Math.cos(theta) * radius,
          0,
          Math.sin(theta) * radius
        )
      );
    }
    return pts;
  }, [radius]);

  return (
    <>
      <Line
        points={points}
        color={blendedOrbitColor}
        opacity={0.3}
        transparent
        lineWidth={1}
      />
      <group ref={orbitGroupRef}>
        <group
          position={[
            Math.cos(initialAngle) * radius,
            0,
            Math.sin(initialAngle) * radius,
          ]}
        >
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
          </group>

          <Text
            position={[0, planetSize + 0.25 * scaleFactor, 0]}
            fontSize={0.16 * scaleFactor}
            color={labelColor || "#ffffff"}
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

function SolarSun({
  name,
  categoryColor,
  themeCoreColor,
  labelColor,
  scaleFactor = 1,
}: {
  name: string;
  categoryColor: string;
  themeCoreColor?: string;
  labelColor: string;
  scaleFactor?: number;
}) {
  const sunMeshRef = useRef<THREE.Mesh>(null!);
  const sunRadius = 0.85 * scaleFactor;

  const blendedCoreColor = useMemo(() => {
    if (!themeCoreColor) return categoryColor;
    const catCol = new THREE.Color(categoryColor);
    const themeCol = new THREE.Color(themeCoreColor);
    return `#${catCol.lerp(themeCol, 0.5).getHexString()}`;
  }, [categoryColor, themeCoreColor]);

  useFrame((_, delta) => {
    if (sunMeshRef.current) {
      sunMeshRef.current.rotation.y += 0.1 * delta;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <mesh ref={sunMeshRef}>
        <sphereGeometry args={[sunRadius, 32, 32]} />
        <meshStandardMaterial
          color={blendedCoreColor}
          emissive={blendedCoreColor}
          emissiveIntensity={1.3}
          roughness={0.2}
        />
      </mesh>

      <mesh scale={[1.22, 1.22, 1.22]}>
        <sphereGeometry args={[sunRadius, 32, 32]} />
        <meshBasicMaterial
          color={blendedCoreColor}
          transparent
          opacity={0.3}
          side={THREE.BackSide}
        />
      </mesh>

      <Text
        position={[0, sunRadius + 0.4 * scaleFactor, 0]}
        fontSize={0.3 * scaleFactor}
        color={labelColor || "#ffffff"}
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
  const {id} = useParams()
  const [activeTab, setActiveTab] = useState<string>(`${id}`);

  const navigate = useNavigate()
  const [theme, setTheme] = useState<string>(
    document.documentElement.dataset.theme ?? "system"
  );
  const [screenWidth, setScreenWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const { t } = useTranslation();

  // Resize Listener for Responsive Adjustments
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.dataset.theme ?? "system");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(()=>{
   setActiveTab(`${id}`)
  },[id])

  const activeThemeConfig = THEME_STYLES[theme] || THEME_STYLES.system;

  const selectedCategory =
    skillsData.find((cat) => cat.id === activeTab) || skillsData[0];

  const activeCategoryColor = useMemo(() => {
    if (!activeThemeConfig.accentColor) return selectedCategory.color;
    return `#${new THREE.Color(selectedCategory.color)
      .lerp(new THREE.Color(activeThemeConfig.accentColor), 0.3)
      .getHexString()}`;
  }, [selectedCategory.color, activeThemeConfig.accentColor]);

  // Responsive Math Scale Calculations
  const isXS = screenWidth < 480;
  const isMobile = screenWidth >= 480 && screenWidth < 640;
  const isTablet = screenWidth >= 640 && screenWidth < 1024;

  const objectScale = isXS ? 0.6 : isMobile ? 0.75 : isTablet ? 0.88 : 1;
  const radiusStep = isXS ? 0.65 : isMobile ? 0.75 : isTablet ? 0.85 : 0.95;
  const baseRadius = isXS ? 1.6 : isMobile ? 1.9 : 2.4;

  return (
    <div
      style={{
        width: "100%",
        marginTop: "60px",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        background: activeThemeConfig.background,
        transition: "background 0.5s ease-in-out",
      }}
    >
      {/* Category Navigation Bar */}
      <div
        style={{
          position: "absolute",
          top: isXS ? "12px" : "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          gap: isXS ? "4px" : "8px",
          background: activeThemeConfig.navBg,
          padding: isXS ? "6px 8px" : "8px 12px",
          borderRadius: "12px",
          border: `1px solid ${activeThemeConfig.navBorder}`,
          backdropFilter: "blur(12px)",
          maxWidth: "94%",
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          transition: "all 0.3s ease",
        }}
      >
        {skillsData.map((cat) => {
          const isActive = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() =>    navigate(`/skill/${cat.id}`)}
              style={{
                padding: isXS ? "6px 12px" : "8px 16px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: isXS ? "11px" : "13px",
                whiteSpace: "nowrap",
                transition: "all 0.3s ease",
                background: isActive ? activeCategoryColor : "transparent",
                color: isActive
                  ? activeThemeConfig.activeTextColor
                  : activeThemeConfig.textColor,
                boxShadow:
                  isActive && activeThemeConfig.accentColor
                    ? `0 0 12px ${activeThemeConfig.accentColor}44`
                    : "none",
              }}
            >
              {t(cat.titleKey)}
            </button>
          );
        })}
      </div>

      {/* 3D Scene Canvas */}
      <Canvas camera={{ position: [0, 8, 13], fov: isXS ? 55 : 45 }}>
        <DynamicCameraController screenWidth={screenWidth} />
        <ambientLight intensity={activeThemeConfig.ambientIntensity} />
        <pointLight
          position={[0, 0, 0]}
          intensity={3.5}
          color={activeThemeConfig.coreColor || selectedCategory.color}
          distance={32}
        />
        <directionalLight position={[5, 10, 5]} intensity={0.5} />

        <Stars
          radius={100}
          depth={50}
          count={isXS ? 1200 : 2500}
          factor={4}
          saturation={0}
          fade={activeThemeConfig.starsFade}
          speed={1}
        />

        {/* Dynamic Energy Core (Sun) */}
        <SolarSun
          name={selectedCategory.category}
          categoryColor={selectedCategory.color}
          themeCoreColor={activeThemeConfig.coreColor}
          labelColor={activeThemeConfig.labelColor}
          scaleFactor={objectScale}
        />

        {/* Dynamic Planets & Orbits */}
        {selectedCategory.skills.map((skill, idx) => {
          const orbitRadius = baseRadius + idx * radiusStep;
          const orbitSpeed = 0.35 / (idx + 1);
          const startAngle =
            (idx / selectedCategory.skills.length) * Math.PI * 2;

          return (
            <Planet
              key={`${theme}-${skill.name}`}
              index={idx}
              name={skill.name}
              level={skill.level}
              color={selectedCategory.color}
              themeAccent={activeThemeConfig.accentColor}
              radius={orbitRadius}
              speed={orbitSpeed}
              initialAngle={startAngle}
              labelColor={activeThemeConfig.labelColor}
              scaleFactor={objectScale}
            />
          );
        })}

        <OrbitControls
          enableZoom={true}
          maxPolarAngle={Math.PI / 2.1}
          minDistance={isXS ? 6 : 5}
          maxDistance={isXS ? 35 : 28}
        />
      </Canvas>
    </div>
  );
}