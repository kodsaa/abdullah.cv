import {
  Container,
  H2,
  Text,
  Span,
  View,
  Button,
  Footer,
} from "strivui";
import { useTranslation } from "react-i18next";

const CFooter = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const navigation = ["Home", "Experience", "Projects", "Skills", "Contact"];

  const social = ["GitHub", "LinkedIn", "Email"];

  const sectionIds: Record<string, string> = {
    Experience: "experience",
    Projects: "projects",
    Skills: "skills",
    Contact: "contact",
  };

  const goToSection = (label: string) => {
    if (label === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document
      .getElementById(sectionIds[label])
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks: Record<string, string> = {
    GitHub: "https://github.com/syedabdullahali",
    LinkedIn: "https://www.linkedin.com/in/syed-abdullah-ali380/",
    Email: "mailto:syedabdullahali380@gmail.com",
  };

  const goToSocial = (label: string) => {
    const url = socialLinks[label];
    if (label === "Email") {
      window.location.href = url;
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Footer className="ft-shell">
      <span className="ft-topline" />
      <span className="ft-ghost-text">SA</span>
      <View className="ft-grid" />
      <View className="ft-orb" />

      <Container className="relative z-10">
        <View className="py-16">
          <View className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12">
            {/* Brand */}
            <View className="lg:col-span-5 space-y-5">
              <View className="ft-status">
                <span className="ft-status-dot" />
                <Span className="text-[11px] font-mono tracking-widest text-amber-400 uppercase">
              {t("availableForWork")}
                </Span>
              </View>

              <H2 className="ft-brand">
               {t("firstName")} <span className="ft-brand-accent">{t("lastName")}</span>
              </H2>

              <Text className="max-w-md text-sm leading-7 text-stone-400">
               {t("footerBrandDescription")}
              </Text>

              <View className="ft-badge">
                <Span className="text-xs text-amber-300 font-mono">
                {t("fullStackArchitect")}
                </Span>
              </View>
            </View>

            {/* Navigation */}
            <View className="lg:col-span-3 space-y-5">
              <Span className="ft-col-label">{t("navigation")}</Span>

              <View className="flex flex-col gap-1">
                {navigation.map((item, i) => (
                  <button
                    key={item}
                    onClick={() => goToSection(item)}
                    className="ft-nav-link"
                  >
                    <span className="ft-nav-index">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  <span className="ft-nav-text">{t(item.toLowerCase())}</span>
                    <span className="ft-nav-arrow">→</span>
                  </button>
                ))}
              </View>
            </View>

            {/* Connect */}
            <View className="lg:col-span-4 space-y-5">
              <Span className="ft-col-label">{t("connect")}</Span>

              <View className="flex flex-col gap-3">
                {social.map((item) => (
                  <button
                    key={item}
                    onClick={() => goToSocial(item)}
                    className="ft-social-btn"
                  >
                    <span className="ft-social-dot" />
                    <span className="ft-social-text">{item}</span>
                    <span className="ft-social-arrow">↗</span>
                  </button>
                ))}
              </View>

              <Text className="text-sm leading-6 text-stone-500 pt-2">
                {t("footerTagline")}
              </Text>
            </View>
          </View>

          {/* Bottom */}
          <View className="ft-bottom">
            <Span className="text-xs text-stone-500">
              © {year} {t("firstName")} {t("lastName")}. All rights reserved.
            </Span>

            <View className="ft-stack-strip">
              <span className="ft-stack-item">React</span>
              <span className="ft-stack-sep">•</span>
              <span className="ft-stack-item">TypeScript</span>
              <span className="ft-stack-sep">•</span>
              <span className="ft-stack-item">StrivUI</span>
            </View>
          </View>
        </View>
      </Container>
    </Footer>
  );
};

export default CFooter;