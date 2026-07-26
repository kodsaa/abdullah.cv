import {
  Avatar,
  Button,
  Container,
  H3,
  Link,
  Span,
  View,
} from "strivui";

import Sidebar from "./Sidebar";
import { useState } from "react";
import syedTown from "../assets/syed.jpeg";

const MENU = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
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
      {/* Header */}
      <View className="fixed top-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-md border-b border-stone-800">
        <Container className="max-w-7xl mx-auto h-12 flex items-center justify-between">
          {/* Logo */}
          <View className="flex flex-row items-center gap-3">
            <Avatar src={syedTown} alt="Syed Abdullah Ali" />

            <View>
              <H3 className="text-white font-bold text-base">
                Syed Abdullah Ali
              </H3>

              <Span className="text-xs text-stone-400">
                Senior Software Engineer
              </Span>
            </View>
          </View>

          {/* Desktop Navigation */}
          <View className="hidden lg:flex flex-row items-center gap-8">
            {MENU.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-stone-300 hover:text-amber-400 transition"
              >
                {item.label}
              </Link>
            ))}
          </View>

          {/* Right Buttons */}
          <View className="flex flex-row items-center gap-3">
            <Button
              href="#contact"
              className="hidden md:flex bg-amber-500 text-black rounded-xl px-6"
            >
              Hire Me
            </Button>

            {/* Mobile Menu */}
            <Button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden rounded-xl bg-stone-900 border border-stone-700 w-11 h-11 text-xl hover:bg-stone-800"
            >
              ☰
            </Button>

            {/* Settings */}
            <Button
              onClick={() => setSidebarOpen(true)}
              className="rounded-xl bg-stone-900 border border-stone-700 w-11 h-11 text-xl hover:bg-stone-800"
            >
              ⚙
            </Button>
          </View>
        </Container>
      </View>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          {/* Overlay */}
          <View
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          />

          {/* Drawer */}
          <View
            className="
              fixed
              top-0
              left-0
              h-screen
              w-72
              bg-stone-950
              border-r
              border-stone-800
              z-50
              lg:hidden
              p-6
              flex
              flex-col
            "
          >
            {/* Header */}
            <View className="flex flex-row items-center justify-between mb-8">
              <H3 className="text-white">Menu</H3>

              <Button
                onClick={() => setMobileMenuOpen(false)}
                className="bg-transparent text-white text-2xl p-0"
              >
                ✕
              </Button>
            </View>

            {/* User */}
            <View className="flex flex-row items-center gap-3 mb-8">
              <Avatar src={syedTown} alt="Syed Abdullah Ali" />

              <View>
                <H3 className="text-white text-sm">
                  Syed Abdullah Ali
                </H3>

                <Span className="text-xs text-stone-400">
                  Senior Software Engineer
                </Span>
              </View>
            </View>

            {/* Navigation */}
            <View className="flex flex-col gap-2">
              {MENU.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="
                    text-white
                    text-lg
                    px-4
                    py-3
                    rounded-xl
                    hover:bg-stone-800
                    transition
                  "
                >
                  {item.label}
                </Link>
              ))}
            </View>

            {/* Bottom */}
            <View className="mt-auto">
              <Button
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-amber-500 text-black rounded-xl"
              >
                Hire Me
              </Button>
            </View>
          </View>
        </>
      )}

      {/* Settings Sidebar */}
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