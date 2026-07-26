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


const MENU = [
  {
    label: "About",
    href: "#about",
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
          bg-black/70
          backdrop-blur-2xl
          border-b
          border-white/10
        "
      >
        <Container className="max-w-7xl mx-auto h-20 flex items-center justify-between px-4">

          {/* Logo */}

          <View className="flex flex-row items-center gap-3">

            <Avatar className="bg-amber-500 text-black">
              🤠
            </Avatar>

            <View>

              <H3 className="text-white font-bold">
                Syed Abdullah Ali
              </H3>

              <Span className="text-xs text-stone-400">
                Senior Software Engineer
              </Span>

            </View>

          </View>

          {/* Desktop Menu */}

          <View className="hidden lg:flex flex-row items-center gap-8">

            {MENU.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  text-stone-300
                  hover:text-amber-400
                  transition
                "
              >
                {item.label}
              </Link>
            ))}

          </View>

          {/* Right */}

          <View className="flex flex-row items-center gap-3">

            <Button
              href="#contact"
              className="
                hidden
                md:flex
                bg-amber-500
                text-black
                rounded-xl
                px-6
              "
            >
              Hire Me
            </Button>

            {/* Settings */}

            <Button
              onClick={() => setSidebarOpen(true)}
              className="
                rounded-xl
                bg-stone-900
                border
                border-stone-700
                w-12
                h-12
                text-xl
                hover:bg-stone-800
              "
            >
              ⚙
            </Button>

          </View>

        </Container>
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