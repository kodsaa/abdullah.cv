import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useTranslation } from "react-i18next";
import {
  Button,
  Container,
  H1,
  Span,
  Text,
  View,
} from "strivui";

const themeColors = {
  obsidian: {
    primary: 0xf59e0b,
    secondary: 0xfbbf24,
    particle: 0xfcd34d,
  },
  midnight: {
    primary: 0x3b82f6,
    secondary: 0x60a5fa,
    particle: 0x93c5fd,
  },
  carbon: {
    primary: 0xef4444,
    secondary: 0xf87171,
    particle: 0xfca5a5,
  },
  titanium: {
    primary: 0x06b6d4,
    secondary: 0x67e8f9,
    particle: 0xa5f3fc,
  },
  steel: {
    primary: 0x38bdf8,
    secondary: 0x7dd3fc,
    particle: 0xbae6fd,
  },
  quartz: {
    primary: 0x836fc7,
    secondary: 0x836fc7,
    particle: 0x836fc7,
  },
  sandstone: {
    primary: 0xb45309,
    secondary: 0xfbbf24,
    particle: 0xfde68a,
  },
  aurora: {
    primary: 0x10b981,
    secondary: 0x2dd4bf,
    particle: 0x99f6e4,
  },
  nebula: {
    primary: 0xa855f7,
    secondary: 0xd8b4fe,
    particle: 0xe9d5ff,
  },
  solarized: {
    primary: 0xb58900,
    secondary: 0x2aa198,
    particle: 0xeee8d5,
  },
  contrast: {
    primary: 0xffff00,
    secondary: 0xffffff,
    particle: 0xffffff,
  },
  system: {
    primary: 0xffe082,
    secondary: 0xfbbf24,
    particle: 0xfcd34d,
  },
} as const;

const Hero = () => {
  const { t, i18n } = useTranslation();
  const mountRef = useRef<HTMLDivElement>(null);
  const isRTL = ["ar", "ur"].includes(i18n.language);

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

  const [theme, setTheme] = useState(
    document.documentElement.dataset.theme ?? "system"
  );

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

  // --- Three.js Scene Setup ---
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const colors =
      themeColors[theme as keyof typeof themeColors] ??
      themeColors.system;

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
      color: colors.primary,
      emissive: colors.primary,
      emissiveIntensity: 0.1,
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
      color: colors.secondary,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainPoly.add(coreMesh);

    // Reduced 3D Globe scale on small screens
    const updateCanvasLayout = () => {
      const width = container.clientWidth;
      const isXS = width < 480;
      const isMobile = width >= 480 && width < 640;
      const isTablet = width >= 640 && width < 1024;

      // Scale globe down significantly on smaller screens
      const scale = isXS ? 0.35 : isMobile ? 0.45 : isTablet ? 0.75 : 1.0;
      mainPoly.scale.set(scale, scale, scale);

      // Reposition globe position dynamically
      const xPos = isXS || isMobile
        ? 0
        : isTablet
        ? isRTL
          ? -1.5
          : 1.5
        : isRTL
        ? -2.2
        : 2.2;

      const yPos = isXS ? 1.1 : isMobile ? 0.9 : 0.2;
      mainPoly.position.set(xPos, yPos, -1);
    };

    updateCanvasLayout();

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
      color: colors.particle,
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

    const pointLight = new THREE.PointLight(colors.primary, 4, 80);
    pointLight.position.set(3, 3, 3);
    scene.add(pointLight);

    if (isRTL) {
      pointLight.position.set(isRTL ? -3 : 3, 3, 3);
    }

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
      updateCanvasLayout();
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
  }, [theme, isRTL]);
  return (
    <Container
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
      }}
      className="relative w-full max-w-full p-0 m-0 theme_hero-container flex align-items-center justify-center relative min-h-screen"
    >
      {/* --- THREE.JS CANVAS MOUNT POINT --- */}
      <div
        ref={mountRef}
        className="absolute inset-0 z-10 pointer-events-none"
   
      />

      {/* Radial Lighting Overlay */}
      <View
        className="absolute inset-0 pointer-events-none theme_overlay-hero"
     
      />

      {/* --- CONTENT LAYER --- */}
      <View
        className="relative z-10 w-full max-w-5xl pt-32 pb-20 px-5  "
        style={{
          maxWidth: "1280px",
          paddingTop: "120px",
          paddingBottom: "80px",
          transformStyle: "preserve-3d",
          transform: `rotateX(${tilt.y * -4}deg) rotateY(${tilt.x * 4}deg)`,
          transition: "transform 0.15s cubic-bezier(0.1, 0.8, 0.2, 1)",
        }}
      >
        {/* Status Badge */}
        <View className="flex align-item-center" style={{ transform: "translateZ(30px)" }}>
          <Span
            className="theme_quote_color text-xs inline-flex align-item-center gap-2 rounded-full border  px-5 py-2 text-xs font-mono font-bold uppercase tracking-widest  shadow-lg backdrop-blur-md"
            style={{
              letterSpacing: "0.25em",
            }}
          >
            <Span

              className="w-3 h-3 flex relative"
            >
              <Span
                className="theme_indicator_hero absolute inset-0 rounded-full animate-ping opacity-75"
      
              />
              <Span
                className="theme_indicator_hero relative rounded-full w-3 h-3"
              />
            </Span>
        {t("heroTagline")}
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
          className="text-3xl md:text-5xl lg:text-6xl"
        >
          <Span
            className="italic font-light font-serif theme_hero-text-heading"
            
          >
       {t("heroEngineering")}{" "}
          </Span>
          <br />
          <Span
            className="theme_hero-text-heading-gradient font-extrabold serif"
          >
           {t("heroScalableSystems")}
          </Span>
          <br />
          <Span
            className="theme_hero-text-heading-secondary font-extrabold serif"
          >
            {t("heroForDigitalWorld")}
          </Span>
        </H1>

        {/* Description */}
        <Text
          className="theme_paragraph_secondary "
          style={{
            marginTop: "32px",
            maxWidth: "700px",
            fontSize: "17px",
            lineHeight: 1.8,
            fontFamily: "sans-serif",
            fontWeight: 400,
            letterSpacing: "0.01em",
            transform: "translateZ(35px)",
          }}
        >
          {t("heroDescription")}
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
            className="border bg-transparent rounded-xl overflow-hidden py-5 px-10 theme_hero-button"
            style={{
              borderRadius: "14px",
              fontWeight: 800,
              padding: "18px 36px",
              fontSize: "15px",
              fontFamily: "sans-serif",
              letterSpacing: "0.05em",
              border: "none",
              cursor: "pointer",
            }}
          >
{t("letsConnect")}
          </Button>

          <Button
            className="border bg-transparent rounded-xl overflow-hidden py-5 px-10"
      
          >
          {t("exploreWork")}
          </Button>
        </View>

        {/* Metric Cards */}
        <View
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          { [ ["5+", t("yearsExperience"), t("enterpriseLeadership"), 50], ["40+", t("projectsDelivered"), t("saasErpAi"), 60], ["20+", t("coreTechnologies"), t("fullStackCloud"), 70], ["100%", t("reliabilityScale"), t("productionReady"), 80], ].map(([number, label, detail, depth]) => (
            <View
              key={label as string}
              className="theme_card-hero relative flex flex-col items-start justify-center rounded-xl border  p-8 backdrop-blur-3xl shadow-lg"
              style={{
                position: "relative",
                transformStyle: "preserve-3d",
                transform: `translateZ(${depth}px)`,
              }}
            >
              <View 
                 className="absolute top-0 left-0 right-0 theme_card-hero-overlay"
                style={{
                  height: "2px",
                }}
              />

              <Text
                className="theme_primary_highlight_hero text-4xl font-extrabold m-0"
                style={{
                  fontFamily: "monospace",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                }}
              >
                {number}
              </Text>

              <Text
                className="theme_paragraph"
                style={{
                  marginTop: "12px",
                  fontSize: "14px",
                  fontFamily: "sans-serif",
                  fontWeight: 700,
                  margin: "12px 0 0 0",
                }}
              >
                {label}
              </Text>

              <Text
                className="theme_paragraph_secondary"
                style={{
                  marginTop: "4px",
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


    </Container>
  );
};

export default Hero;