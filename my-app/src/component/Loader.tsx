import React, { useEffect, useMemo, useState } from "react";
import { Main, View, H1, Span, Text, Image } from "strivui";
import imageLoading from "../assets/Loading.jpg";
import syedTown from "../assets/syed.jpeg";

const loadingSteps = [
  { threshold: 0, text: "Initializing System Architecture..." },
  { threshold: 15, text: "Loading Engineering Arsenal..." },
  { threshold: 30, text: "Preparing Enterprise Infrastructure..." },
  { threshold: 45, text: "Compiling React Modules..." },
  { threshold: 60, text: "Establishing Secure Handshake..." },
  { threshold: 75, text: "Optimizing Client Performance..." },
  { threshold: 90, text: "Rendering Digital Experience..." },
];

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 3 + 1;
      });
    }, 80);

    return () => clearInterval(progressInterval);
  }, []);

  const currentMessage = useMemo(() => {
    const matched = [...loadingSteps].reverse().find((step) => progress >= step.threshold);
    return matched ? matched.text : loadingSteps[0].text;
  }, [progress]);

  const particles = useMemo(
    () =>
      Array.from({ length: 40 }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 5,
        duration: Math.random() * 6 + 4,
      })),
    []
  );

  return (
    <Main
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "#130f03", // Stone 950
        color: "#f5f5f4",
      }}
    >
      {/* Background Image Layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:`url(${imageLoading})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
          transform: "scale(1.05)",
          transition: "transform 10s ease-out",
        }}
      />

      {/* Ambient Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
        }}
      />

      {/* Dust Particles */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {particles.map((p, i) => (
          <span
            key={i}
            style={{
              position: "absolute",
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              borderRadius: "50%",
              backgroundColor: "rgba(253, 230, 138, 0.25)",
              animation: `pulseParticle ${p.duration}s infinite ease-in-out`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Center Glassmorphism Card */}
      <View
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "40px 32px",
          maxWidth: "480px",
          width: "90%",
          borderRadius: "16px",
        }}
      >
        {/* Profile / Animated Rings */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "128px",
            height: "128px",
            marginBottom: "24px",
          }}
        >
          {/* Outer Spin */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              border: "1px solid rgba(245, 158, 11, 0.3)",
              borderTopColor: "#fbbf24",
              animation: "spin 2s linear infinite",
            }}
          />
          {/* Inner Reverse Spin */}
          <div
            style={{
              position: "absolute",
              inset: "8px",
              borderRadius: "50%",
              border: "1px solid rgba(68, 64, 60, 0.4)",
              borderRightColor: "rgba(245, 158, 11, 0.7)",
              animation: "spinReverse 4s linear infinite",
            }}
          />
          {/* Background Glow */}
          <div
            style={{
              position: "absolute",
              inset: "16px",
              borderRadius: "50%",
              backgroundColor: "rgba(245, 158, 11, 0.15)",
              filter: "blur(20px)",
            }}
          />

          {/* Profile Image */}
          <div
            style={{
              position: "relative",
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "1px solid rgba(245, 158, 11, 0.4)",
              backgroundColor: "#1c1917",
            }}
          >
            <Image
              src={syedTown}
              alt="Syed Town"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.85,
              }}
            />
          </div>
        </div>

        {/* Status Pill Badge */}
        <View
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            borderRadius: "9999px",
            padding: "4px 14px",
            border: "1px solid rgba(245, 158, 11, 0.35)",
            backgroundColor: "rgba(245, 158, 11, 0.08)",
            marginBottom: "12px",
          }}
        >
          <Span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "#f59e0b",
            }}
          />
          <Span
            style={{
              fontSize: "12px",
              color: "#fbbf24",
              fontWeight: 500,
              letterSpacing: "0.05em",
            }}
          >
            System Initialization
          </Span>
        </View>

        {/* Heading: Mixed Serif Italic & Sans Bold */}
        <H1
          style={{
            textAlign: "center",
            fontSize: "28px",
            lineHeight: 1.2,
            margin: "4px 0 0 0",
            padding: 0,
          }}
        >
          <Span
            style={{
              fontFamily: "serif",
              fontStyle: "italic",
              fontWeight: 300,
              color: "#e7e5e4",
            }}
          >
            Software{" "}
          </Span>
          <Span
            style={{
              fontFamily: "sans-serif",
              fontWeight: 800,
              fontStyle: "normal",
              background: "linear-gradient(to right, #fef3c7, #fcd34d, #f59e0b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Engineer
          </Span>
        </H1>

        {/* Subtitle */}
        <Text
          style={{
            marginTop: "8px",
            fontSize: "11px",
            fontFamily: "monospace",
            letterSpacing: "0.3em",
            fontWeight: 700,
            textTransform: "uppercase",
            color: "rgba(245, 158, 11, 0.8)",
            textAlign: "center",
          }}
        >
          Engineering The Digital Frontier
        </Text>

        <View
          style={{
            marginTop: "16px",
            height: "1px",
            width: "64px",
            background: "linear-gradient(to right, transparent, rgba(245, 158, 11, 0.5), transparent)",
          }}
        />

        {/* Progress Bar & Status Text */}
        <div style={{ width: "100%", marginTop: "32px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <Span
              style={{
                fontFamily: "serif",
                fontStyle: "italic",
                fontSize: "13px",
                color: "#a8a29e",
              }}
            >
              {currentMessage}
            </Span>
            <Span
              style={{
                fontFamily: "monospace",
                fontWeight: 700,
                fontSize: "13px",
                color: "#fbbf24",
                marginLeft: "8px",
              }}
            >
              {Math.min(Math.floor(progress), 100)}%
            </Span>
          </div>

          <div
            style={{
              position: "relative",
              width: "100%",
              height: "6px",
              borderRadius: "9999px",
              backgroundColor: "rgba(41, 37, 36, 0.8)",
              overflow: "hidden",
              border: "1px solid rgba(68, 64, 60, 0.4)",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                borderRadius: "9999px",
                background: "linear-gradient(90deg, #f59e0b, #fde047, #f59e0b)",
                transition: "width 0.15s ease-out",
                boxShadow: "0 0 12px rgba(245, 158, 11, 0.5)",
              }}
            />
          </div>
        </div>

        {/* Pulse Indicator */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "32px" }}>
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "#fbbf24",
              animation: "pulseDot 1.2s infinite ease-in-out",
            }}
          />
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "rgba(251, 191, 36, 0.5)",
            }}
          />
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "rgba(251, 191, 36, 0.2)",
            }}
          />
        </div>

        {/* Brand Footer */}
        <Text
          style={{
            marginTop: "24px",
            fontSize: "10px",
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "#78716c",
          }}
        >
          © STRIVUI ENGINE
        </Text>
      </View>

      {/* Animation Styles */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes spinReverse {
          to { transform: rotate(-360deg); }
        }

        @keyframes pulseParticle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.3); }
        }

        @keyframes pulseDot {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </Main>
  );
}