import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import {
  Button,
  Container,
  H1,
  Span,
  Text,
  View,
} from "strivui";

interface HeroProps {
  setIsTelegraphOpen: (value: boolean) => void;
}

const Hero = ({ setIsTelegraphOpen }: HeroProps) => {
  const mountRef = useRef<HTMLDivElement>(null);

  // Mouse tracking state for HTML elements parallax
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Handle Mouse Movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    const x = ((clientX - left) / width - 0.5) * 2;
    const y = ((clientY - top) / height - 0.5) * 2;

    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // --- Three.js Scene Setup ---
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. 3D Wireframe Icosahedron (Geometric Accent)
    const geometry = new THREE.IcosahedronGeometry(1.6, 1);
    const material = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      wireframe: true,
      roughness: 0.3,
      metalness: 0.8,
    });
    const mainPoly = new THREE.Mesh(geometry, material);
    mainPoly.position.set(2.2, 0.2, -1);
    scene.add(mainPoly);

    // Inner Core Solid Sphere
    const coreGeo = new THREE.SphereGeometry(0.8, 16, 16);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xfbbf24,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainPoly.add(coreMesh);

    // 3. Floating Particle Field (Dust / Stars)
    const particleCount = 200;
    const particlesGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 12;
      positions[i + 1] = (Math.random() - 0.5) * 12;
      positions[i + 2] = (Math.random() - 0.5) * 8;
    }

    particlesGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const particlesMat = new THREE.PointsMaterial({
      color: 0xfcd34d,
      size: 0.035,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particleSystem);

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xf59e0b, 2, 50);
    pointLight.position.set(3, 3, 3);
    scene.add(pointLight);

    // 5. Mouse Parallax Target Variables
    let targetMouseX = 0;
    let targetMouseY = 0;

    const onPointerMove = (event: MouseEvent) => {
      targetMouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", onPointerMove);

    // 6. Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Continuous mesh rotation
      mainPoly.rotation.x = elapsedTime * 0.2;
      mainPoly.rotation.y = elapsedTime * 0.25;

      // Particle system subtle float
      particleSystem.rotation.y = elapsedTime * 0.05;

      // Smooth camera interpolation based on mouse
      camera.position.x += (targetMouseX * 0.6 - camera.position.x) * 0.05;
      camera.position.y += (-targetMouseY * 0.6 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // 7. Handle Resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // Clean up WebGL resources on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      material.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <Container
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 24px",
        backgroundColor: "#080707",
        color: "#f5f5f4",
        perspective: "1000px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="max-w-full p-0 m-0"
    >
      {/* --- THREE.JS CANVAS MOUNT POINT --- */}
      <div
        ref={mountRef}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Radial Lighting Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          background:
            "radial-gradient(circle at 50% 30%, rgba(245, 158, 11, 0.1) 0%, rgba(8,7,7,0.8) 75%)",
          pointerEvents: "none",
        }}
      />

      {/* --- CONTENT LAYER --- */}
      <View
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "1280px",
          paddingTop: "120px",
          paddingBottom: "80px",
          transformStyle: "preserve-3d",
          transform: `rotateX(${tilt.y * -4}deg) rotateY(${tilt.x * 4}deg)`,
          transition: "transform 0.15s cubic-bezier(0.1, 0.8, 0.2, 1)",
        }}
      >
        {/* Status Badge */}
        <View style={{ display: "flex", alignItems: "center", transform: "translateZ(30px)" }}>
          <Span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              borderRadius: "9999px",
              border: "1px solid rgba(245, 158, 11, 0.4)",
              backgroundColor: "rgba(245, 158, 11, 0.08)",
              backdropFilter: "blur(16px)",
              padding: "8px 20px",
              fontSize: "11px",
              fontFamily: "monospace",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              color: "#fbbf24",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
            }}
          >
            <Span
              style={{
                position: "relative",
                display: "flex",
                width: "13px",
                height: "13px",
              }}
            >
              <Span
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  backgroundColor: "#f59e0b",
                  animation: "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
                  opacity: 0.75,
                }}
              />
              <Span
                style={{
                  position: "relative",
                  width: "13px",
                  height: "13px",
                  borderRadius: "50%",
                  backgroundColor: "#f59e0b",
                }}
              />
            </Span>
            Every launch starts with a single line of brave code.
          </Span>
        </View>

        {/* Heading */}
        <H1
          style={{
            marginTop: "36px",
            maxWidth: "1100px",
            lineHeight: 1.02,
            margin: "36px 0 0 0",
            padding: 0,
            letterSpacing: "-0.02em",
            transform: "translateZ(50px)",
          }}
          className="text-6xl"
        >
          <Span
            style={{
              fontFamily: "serif",
              fontStyle: "italic",
              fontWeight: 200,
              color: "#f5f5f4",
            }}
            
          >
            Engineering{" "}
          </Span>
          <br />
          <Span
            style={{
              fontFamily: "sans-serif",
              fontWeight: 900,
              background:
                "linear-gradient(135deg, #ffffff 0%, #fef3c7 40%, #f59e0b 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 10px 30px rgba(245, 158, 11, 0.3)",
            }}
          >
            Scalable Systems
          </Span>
          <br />
          <Span
            style={{
              fontFamily: "sans-serif",
              fontWeight: 800,
              color: "#d6d3d1",
              fontSize: "0.85em",
            }}
          >
            For Enterprise Scale
          </Span>
        </H1>

        {/* Description */}
        <Text
          style={{
            marginTop: "32px",
            maxWidth: "700px",
            fontSize: "17px",
            lineHeight: 1.8,
            color: "#a8a29e",
            fontFamily: "sans-serif",
            fontWeight: 400,
            letterSpacing: "0.01em",
            transform: "translateZ(35px)",
          }}
        >
          Senior Software Engineer specializing in high-throughput enterprise 
          architecture, AI-integrated cloud systems, and resilient full-stack platforms 
          designed for real-world impact.
        </Text>

        {/* Buttons */}
        <View
          style={{
            marginTop: "48px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "20px",
            transform: "translateZ(45px)",
          }}
        >
          <Button
            onClick={() => setIsTelegraphOpen(true)}
            style={{
              borderRadius: "14px",
              background: "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)",
              color: "#080707",
              fontWeight: 800,
              padding: "18px 36px",
              fontSize: "15px",
              fontFamily: "sans-serif",
              letterSpacing: "0.05em",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 15px 35px -5px rgba(245, 158, 11, 0.5)",
            }}
          >
            Let's Connect →
          </Button>

          <Button
            href="#projects"
            variant="outline"
            style={{
              borderRadius: "14px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              backgroundColor: "rgba(28, 25, 23, 0.6)",
              backdropFilter: "blur(20px)",
              color: "#f5f5f4",
              fontWeight: 600,
              padding: "18px 36px",
              fontSize: "15px",
              fontFamily: "sans-serif",
              cursor: "pointer",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Explore Technical Work
          </Button>
        </View>

        {/* Metric Cards */}
        <View
          style={{
            marginTop: "80px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            transformStyle: "preserve-3d",
          }}
        >
          {[
            ["5+", "Years Experience", "Enterprise Leadership", 50],
            ["40+", "Projects Delivered", "SaaS, ERP & AI Solutions", 60],
            ["20+", "Core Technologies", "Full-Stack & Cloud Native", 70],
            ["100%", "Reliability & Scale", "Production-Ready Code", 80],
          ].map(([number, label, detail, depth]) => (
            <View
              key={label as string}
              style={{
                position: "relative",
                borderRadius: "20px",
                border: "1px solid rgba(245, 158, 11, 0.25)",
                backgroundColor: "rgba(18, 16, 15, 0.75)",
                backdropFilter: "blur(24px)",
                padding: "28px",
                overflow: "hidden",
                transformStyle: "preserve-3d",
                transform: `translateZ(${depth}px)`,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background:
                    "linear-gradient(90deg, transparent, rgba(245, 158, 11, 0.8), transparent)",
                }}
              />

              <Text
                style={{
                  fontSize: "42px",
                  fontWeight: 900,
                  color: "#f59e0b",
                  fontFamily: "monospace",
                  lineHeight: 1,
                  margin: 0,
                  letterSpacing: "-0.03em",
                  textShadow: "0 5px 15px rgba(245, 158, 11, 0.4)",
                }}
              >
                {number}
              </Text>

              <Text
                style={{
                  marginTop: "12px",
                  color: "#f5f5f4",
                  fontSize: "14px",
                  fontFamily: "sans-serif",
                  fontWeight: 700,
                  margin: "12px 0 0 0",
                }}
              >
                {label}
              </Text>

              <Text
                style={{
                  marginTop: "4px",
                  color: "#78716c",
                  fontSize: "12px",
                  fontFamily: "monospace",
                  margin: "4px 0 0 0",
                }}
              >
                {detail}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <style>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2.2);
            opacity: 0;
          }
        }
      `}</style>
    </Container>
  );
};

export default Hero;