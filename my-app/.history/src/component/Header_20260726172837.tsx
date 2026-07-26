"use client";

import { Button, Container, H3, Link, Span, View } from "strivui";
import Sidebar from "./Sidebar";
import { useState } from "react";

const MENU = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [saloonLights, setSaloonLights] = useState(true);
  const [season, setSeason] = useState("summer");
  const [timeOfDay, setTimeOfDay] = useState("day");
  const [theme, setTheme] = useState("dark");
  const [music, setMusic] = useState(true);
  const [effects, setEffects] = useState(true);

  return (
    <>
      <View
        className="
          fixed
          top-0
          left-0
          right-0
          z-50
          border-b
          border-white/10
          bg-black/70
          backdrop-blur-2xl
        "
      >
        <Container className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
          {/* Logo */}
          <View className="flex flex-row items-center gap-3">
            {/*
              Plain styled View instead of strivui's <Avatar>: Avatar's
              type doesn't declare a `children` prop, so passing "🤠"
              as children failed to typecheck. This renders identically
              without depending on Avatar's prop shape.
            */}
            <View
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-amber-500
                text-xl
                text-black
                transition-transform
                duration-300
                hover:scale-105
              "
            >
              🤠
            </View>

            <View>
              <H3 className="font-bold text-white">Syed Abdullah Ali</H3>
              <Span className="text-xs text-stone-400">
                Senior Software Engineer
              </Span>
            </View>
          </View>

          {/* Desktop Menu */}
          <View className="hidden flex-row items-center gap-8 lg:flex">
            {MENU.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  relative
                  text-stone-300
                  transition-colors
                  duration-200
                  hover:text-amber-400
                "
              >
                {item.label}
              </Link>
            ))}
          </View>

          {/* Right */}
          <View className="flex flex-row items-center gap-3">
            {/*
              strivui's <Button> types as a plain <button>, which
              can't take `href`. <Link> already works fine above with
              href, so it's used here too, just styled like a button.
            */}
            <Link
              href="#contact"
              className="
                hidden
                items-center
                rounded-xl
                bg-amber-500
                px-6
                font-medium
                text-black
                transition-all
                duration-200
                hover:bg-amber-400
                active:scale-[0.98]
                md:flex
              "
            >
              Hire Me
            </Link>

            {/* Settings */}
            <Button
              onClick={() => setSidebarOpen(true)}
              aria-label="Open settings"
              className="
                h-12
                w-12
                rounded-xl
                border
                border-stone-700
                bg-stone-900
                text-xl
                transition-all
                duration-300
                hover:rotate-45
                hover:bg-stone-800
                hover:border-amber-500/40
              "
            >
              ⚙
            </Button>

            {/* Mobile menu toggle */}
            <Button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                border
                border-stone-700
                bg-stone-900
                text-xl
                transition-colors
                duration-200
                hover:bg-stone-800
                lg:hidden
              "
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </Button>
          </View>
        </Container>

        {/* Mobile Menu Panel */}
        <View
          className={`
            overflow-hidden
            border-t
            border-white/10
            bg-black/90
            backdrop-blur-2xl
            transition-all
            duration-300
            ease-out
            lg:hidden
            ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <View className="flex flex-col gap-1 px-4 py-4">
            {MENU.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="
                  rounded-lg
                  px-3
                  py-2.5
                  text-stone-300
                  transition-colors
                  duration-200
                  hover:bg-white/5
                  hover:text-amber-400
                "
              >
                {item.label}
              </Link>
            ))}
          </View>
        </View>
      </View>

      {/* Sidebar */}
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        season={season}
        setSeason={setSeason}
        timeOfDay={timeOfDay}
        setTimeOfDay={setTimeOfDay}
        saloonLights={saloonLights}
        setSaloonLights={setSaloonLights}
        theme={theme}
        setTheme={setTheme}
        music={music}
        setMusic={setMusic}
        effects={effects}
        setEffects={setEffects}
      />
    </>
  );
};

export default Header;