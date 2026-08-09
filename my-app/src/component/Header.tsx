import {
  Avatar,
  Button,
  Container,
  H3,
  Link,
  Span,
  View,
} from "strivui";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import syedTown from "../assets/syed.jpg";
import { useLocation } from "react-router-dom";

const MENU = [
  { label: "home", href: "#home" },
  { label: "skills", href: "#skills" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];
const Header = ({setSidebarOpen}:{setSidebarOpen:()=>void}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll listener to toggle header background
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isSkillPage = location.pathname.startsWith("/skill");


useEffect(() => {


  const handleScroll = () => {
    setIsScrolled(window.scrollY > 20);
  };

  // Set initial state based on current scroll position
  handleScroll();

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
     const { t } = useTranslation();
  return (
    <>
      {/* Header */}
      <View
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled  || isSkillPage
            ? "theme_header_bg"
            : "bg-transparent"
        }`}
      >
        <Container className="max-w-7xl mx-auto flex items-center justify-between p-2">
          {/* Logo */}
          <View className="flex flex-row items-center gap-3">
            <Avatar src={syedTown} alt="Syed Abdullah Ali" />

            <View>
              <H3
                className="text-white font-normal font-serif text-base theme_paragraph  italic"
       
              >
               {t("name")}
              </H3>

              <Span className="text-xs theme_paragraph_secondary">
                {t("seniorSoftwareEngineer")}
              </Span>
            </View>
          </View>

          {/* Desktop Navigation */}
          <View className="hidden lg:flex flex-row items-center gap-8 border theme_border px-4 py-2 rounded-full">
            {MENU.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="theme_paragraph theme_paragraph_hover transition font-normal italic "
                style={{
                  fontFamily: "serif",
                }}
              >
                {t(item.label)}
              </Link>
            ))}
          </View>

          {/* Right Buttons */}
          <View className="flex flex-row items-center gap-3">
     

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
              className="rounded-xl bg-white/10 border border-stone-700 w-11 h-11 text-xl theme_paragraph theme_border transition"
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
              bg-stone-900
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
              <H3 className="text-white">{t("menu")}</H3>

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
                 {t("name")}
                </H3>

                <Span className="text-xs text-stone-400">
                 {t("seniorSoftwareEngineer")}
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
                  {t(item.label)}
                </Link>
              ))}
            </View>

     
          </View>
        </>
      )}

      {/* Settings Sidebar */}
 
    </>
  );
};

export default Header;