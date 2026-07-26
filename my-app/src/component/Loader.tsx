import React from "react";
import { Main, View, H2, Text } from "strivui";

export default function Loader() {
  return (
    <Main className="fixed inset-0 z-100 overflow-hidden bg-amber-900 flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute w-[650px] h-[650px] rounded-full bg-amber-500/10 blur-[180px]" />

      <div className="absolute w-[350px] h-[350px] rounded-full bg-orange-500/10 blur-[140px] animate-pulse" />

      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-yellow-300 animate-pulse"
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <View className="relative flex flex-col items-center">

        {/* Spinner */}
        <div className="relative w-44 h-44">

          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-3xl animate-pulse" />

          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-amber-700/30" />

          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-yellow-300 animate-spin" />

          {/* Middle Ring */}
          <div className="absolute inset-4 rounded-full border-4 border-transparent border-r-orange-400 animate-spin [animation-duration:2.5s] [animation-direction:reverse]" />

          {/* Inner Ring */}
          <div className="absolute inset-8 rounded-full border-4 border-transparent border-b-yellow-500 animate-spin [animation-duration:1.8s]" />

          {/* Center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-stone-900 border border-amber-500 shadow-[0_0_40px_rgba(251,191,36,0.4)] flex items-center justify-center animate-pulse">
              <span className="text-6xl">🤠</span>
            </div>
          </div>
        </div>

        {/* Title */}
        <View className="mt-10 text-center">

          <H2 className="text-5xl font-black tracking-[12px] bg-gradient-to-r from-yellow-200 via-amber-400 to-orange-500 bg-clip-text text-transparent animate-pulse">
            LOADING
          </H2>

          <Text className="mt-4 text-amber-200 tracking-[5px] uppercase text-sm">
            Preparing Engineering Portfolio
          </Text>

        </View>

        {/* Progress */}
        <div className="mt-10 w-80 h-2 rounded-full bg-stone-800 overflow-hidden">

          <div
            className="
              h-full
              rounded-full
              bg-gradient-to-r
              from-yellow-300
              via-amber-400
              to-orange-500
              animate-[loading_2s_ease-in-out_infinite]
            "
          />

        </div>

        {/* Percentage */}
        <Text className="mt-5 text-yellow-300 tracking-[4px] text-xs uppercase animate-pulse">
          Building Digital Frontier...
        </Text>

        {/* Dots */}
        <View className="flex gap-3 mt-8">

          <div className="w-3 h-3 rounded-full bg-yellow-300 animate-bounce" />

          <div
            className="w-3 h-3 rounded-full bg-amber-400 animate-bounce"
            style={{ animationDelay: ".2s" }}
          />

          <div
            className="w-3 h-3 rounded-full bg-orange-400 animate-bounce"
            style={{ animationDelay: ".4s" }}
          />

        </View>
      </View>

      <style>{`
        @keyframes loading {
          0% {
            width: 0%;
          }
          50% {
            width: 70%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </Main>
  );
}