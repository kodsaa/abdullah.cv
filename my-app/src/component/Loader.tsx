import React, { useEffect, useMemo, useState } from "react";
import { Main, View, H1, Text, Image } from "strivui";
import imageLoading from "../assets/CBoyLoading.png";
import syedTown from "../assets/syed.jpeg";

const loadingMessages = [
  "Initializing Frontier...",
  "Loading Engineering Arsenal...",
  "Preparing Enterprise Architecture...",
  "Compiling React Components...",
  "Connecting Backend Services...",
  "Optimizing Performance...",
  "Generating Technical Experience...",
  "Rendering Portfolio...",
  "Preparing Digital Frontier...",
];

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState(loadingMessages[0]);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + Math.random() * 4;
      });
    }, 120);

    const messageInterval = setInterval(() => {
      setMessage(
        loadingMessages[
          Math.floor(Math.random() * loadingMessages.length)
        ]
      );
    }, 1800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, []);

  const dust = useMemo(
    () =>
      Array.from({ length: 80 }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 6,
        duration: Math.random() * 8 + 8,
      })),
    []
  );

  const stars = useMemo(
    () =>
      Array.from({ length: 50 }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 5,
      })),
    []
  );

  return (
    <Main
      className="fixed inset-0 z-100 overflow-hidden flex items-center justify-center bg-black"
      style={{
        backgroundImage: `linear-gradient(rgba(18,11,5,.65), rgba(5,5,5,.88)), url(${imageLoading})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        animation: "cameraZoom 18s ease-in-out infinite alternate",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, transparent 30%, rgba(0,0,0,.75) 100%)",
        }}
      />

      {/* Sun Glow */}
      <div
        className="absolute w-[900px] h-[900px] rounded-full blur-[220px] animate-pulse"
        style={{
          background:
            "radial-gradient(circle, rgba(255,193,7,.18), transparent 70%)",
          top: "-260px",
          right: "-120px",
        }}
      />

      {/* Orange Glow */}
      <div className="absolute w-[700px] h-[700px] rounded-full bg-orange-500/10 blur-[180px] animate-pulse" />

      {/* Smoke */}
      <div
        className="absolute bottom-0 left-0 w-full h-72 opacity-25"
        style={{
          background:
            "linear-gradient(to top, rgba(255,180,70,.25), transparent)",
          animation: "floatSmoke 10s ease-in-out infinite",
        }}
      />

      {/* Stars */}
      {stars.map((star, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-yellow-200 animate-pulse"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: star.size,
            height: star.size,
            animationDelay: `${star.delay}s`,
            opacity: 0.8,
          }}
        />
      ))}

      {/* Dust */}
      {dust.map((item, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-amber-100/20"
          style={{
            left: `${item.left}%`,
            top: `${item.top}%`,
            width: item.size,
            height: item.size,
            animation: `dust ${item.duration}s linear infinite`,
            animationDelay: `${item.delay}s`,
          }}
        />
      ))}

      {/* Center */}
      <View className="relative z-20 flex flex-col items-center">

        {/* Rings */}
        <div className="relative w-52 h-52">

          <div className="absolute inset-0 rounded-full border border-amber-500/30" />

          <div
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-yellow-300"
            style={{ animation: "spin 2s linear infinite" }}
          />

          <div
            className="absolute inset-5 rounded-full border-4 border-transparent border-r-orange-500"
            style={{ animation: "spinReverse 3s linear infinite" }}
          />

          <div
            className="absolute inset-10 rounded-full border-4 border-transparent border-b-yellow-400"
            style={{ animation: "spin 1.5s linear infinite" }}
          />

          {/* Glow */}
          <div className="absolute inset-8 rounded-full bg-amber-500/10 blur-3xl animate-pulse" />

          {/* Cowboy */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-28 h-28 rounded-full flex items-center justify-center bg-stone-900 border border-amber-500"
              style={{
                boxShadow: "0 0 60px rgba(255,180,70,.45)",
              }}
            >
             <Image src={syedTown} alt="Syed Town" className="w-full h-full object-cover rounded-full opacity-20" />
            </div>
          </div>
        </div>

        {/* Logo */}
        <H1
          className="mt-12 text-yellow-100 font-black"
          style={{
            fontSize: 64,
            letterSpacing: 14,
            textShadow: "0 0 35px rgba(255,193,7,.45)",
          }}
        >
          SOFTWARE ENGINEER
        </H1>

        <Text
          className="mt-3 uppercase text-amber-300"
          style={{
            letterSpacing: 6,
            fontSize: 14,
          }}
        >
          Engineering The Digital Frontier
        </Text>

        {/* Progress */}
        <div
          className="mt-14 overflow-hidden rounded-full"
          style={{
            width: 420,
            height: 10,
            background: "rgba(255,255,255,.08)",
            border: "1px solid rgba(255,193,7,.2)",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              transition: "width .2s ease",
              background:
                "linear-gradient(90deg,#fde047,#f59e0b,#fb923c,#fde047)",
              boxShadow: "0 0 25px rgba(255,180,70,.7)",
            }}
          />
        </div>

        {/* Percentage */}
        <Text
          className="mt-5 text-yellow-200"
          style={{
            fontSize: 14,
            letterSpacing: 3,
          }}
        >
          {Math.min(Math.floor(progress), 100)}%
        </Text>

        {/* Message */}
        <Text
          className="mt-3 text-amber-300"
          style={{
            letterSpacing: 3,
            fontSize: 13,
          }}
        >
          {message}
        </Text>

        {/* Bottom Dots */}
        <View className="flex gap-4 mt-10">

          <div
            className="w-3 h-3 rounded-full bg-yellow-300"
            style={{ animation: "bounce 1s infinite" }}
          />

          <div
            className="w-3 h-3 rounded-full bg-orange-400"
            style={{
              animation: "bounce 1s infinite",
              animationDelay: ".2s",
            }}
          />

          <div
            className="w-3 h-3 rounded-full bg-yellow-300"
            style={{
              animation: "bounce 1s infinite",
              animationDelay: ".4s",
            }}
          />

        </View>

        <Text
          className="mt-16 text-amber-500"
          style={{
            fontSize: 12,
            letterSpacing: 5,
          }}
        >
          © STRIVUI ENGINE
        </Text>

      </View>

      <style>{`
        @keyframes spin{
          to{transform:rotate(360deg);}
        }

        @keyframes spinReverse{
          to{transform:rotate(-360deg);}
        }

        @keyframes float{
          0%,100%{transform:translateY(0);}
          50%{transform:translateY(-10px);}
        }

        @keyframes bounce{
          0%,100%{transform:translateY(0);}
          50%{transform:translateY(-8px);}
        }

        @keyframes cameraZoom{
          from{transform:scale(1);}
          to{transform:scale(1.08);}
        }

        @keyframes floatSmoke{
          0%,100%{
            transform:translateY(0);
          }
          50%{
            transform:translateY(-30px);
          }
        }

        @keyframes dust{
          from{
            transform:translateY(0) translateX(0);
            opacity:0;
          }

          20%{
            opacity:.6;
          }

          100%{
            transform:translateY(-120px) translateX(50px);
            opacity:0;
          }
        }
      `}</style>
    </Main>
  );
}