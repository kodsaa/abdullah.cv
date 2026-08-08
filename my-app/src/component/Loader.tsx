import React, { useEffect, useMemo, useState } from "react";
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
    <main className="loader-container">
      {/* Background Image Layer */}
      <div
        className="loader-bg-image"
        style={{ backgroundImage: `url(${imageLoading})` }}
      />

      {/* Ambient Gradient Overlay */}
      <div className="loader-overlay" />

      {/* Dust Particles */}
      <div className="loader-particles">
        {particles.map((p, i) => (
          <span
            key={i}
            className="loader-particle"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Center Glassmorphism Card */}
      <div className="loader-card">
        {/* Profile / Animated Rings */}
        <div className="ring-container">
          <div className="ring-outer" />
          <div className="ring-inner" />
          <div className="ring-glow" />

          {/* Profile Image */}
          <div className="profile-wrapper">
            <img
              src={syedTown}
              alt="Syed Town"
              className="profile-img"
            />
          </div>
        </div>

        {/* Status Pill Badge */}
        <div className="badge">
          <span className="badge-dot" />
          <span className="badge-text">System Initialization</span>
        </div>

        {/* Heading */}
        <h1 className="loader-heading">
          <span className="heading-text-light">Software </span>
          <span className="heading-text-gradient">Engineer</span>
        </h1>

        {/* Subtitle */}
        <p className="loader-subtitle">Engineering The Digital Frontier</p>

        <div className="divider-line" />

        {/* Progress Bar & Status Text */}
        <div className="progress-section">
          <div className="progress-label-wrapper">
            <span className="progress-message">{currentMessage}</span>
            <span className="progress-percentage">
              {Math.min(Math.floor(progress), 100)}%
            </span>
          </div>

          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Pulse Indicator */}
        <div className="pulse-wrapper">
          <span className="pulse-dot-active" />
          <span className="pulse-dot-dim" />
          <span className="pulse-dot-faint" />
        </div>

        {/* Brand Footer */}
        <p className="brand-footer">© STRIVUI ENGINE</p>
      </div>
    </main>
  );
}