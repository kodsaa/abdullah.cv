import { useState, useRef, useEffect } from "react";
import {
  Button,
  Container,
  H2,
  H3,
  Span,
  Text,
  View,
} from "strivui";
import { useTranslation } from "react-i18next";

import {
  ArchitectureEngineeringIcon,
  ProductDevelopmentIcon,
  BusinessUnderstandingIcon,
  CodeIcon,
} from "../icon/icon";
import Reveal from "./Reveal";

export const ENGINEERING_PROFILE = [
  {
    id: "ALL",
    label: "ALL SYSTEMS",
  },

  {
   id: "APPLICATIONS",
  label: "APPLICATIONS",
  icon: <ProductDevelopmentIcon className="h-8 w-8 text-orange-500 theme-icon" />,
  title: "appTitle",
  color: "amber",
  outcome: "appOutcome",
    items: [
      "appItem1",
      "appItem2",
      "appItem3",
      "appItem4",
      "appItem5",
      "appItem6",
      "appItem7",
      "appItem8",
      "appItem9",
      "appItem10",
    ],
  },

  {
    id: "CORE",
    label: "CORE SYSTEMS",
    icon: <ArchitectureEngineeringIcon className="h-8 w-8 text-orange-500 theme-icon" />,
    title: "coreTitle",
    color: "orange",
    outcome:
      "coreOutcome",
    items: ["coreItem1","coreItem2","coreItem3","coreItem4","coreItem5","coreItem6","coreItem7","coreItem8","coreItem9","coreItem10"],
  },

  {
    id: "AUTOMATION",
    label: "AUTOMATION",
    icon: <BusinessUnderstandingIcon className="h-8 w-8 text-orange-500 theme-icon" />,
    title: "autoTitle",
    color: "yellow",
    outcome:
      "autoOutcome",
    items: 
     ["autoItem1","autoItem2","autoItem3","autoItem4","autoItem5","autoItem6","autoItem7","autoItem8","autoItem9","autoItem10"],
    
  },

  {
    id: "PLATFORM",
    label: "PLATFORM",
    icon: <CodeIcon className="h-8 w-8 text-orange-500 theme-icon" />,
    title: "platTitle", 
    color: "stone",
    outcome:
      "platOutcome",
    items: 
     ["platItem1","platItem2","platItem3","platItem4","platItem5","platItem6","platItem7","platItem8","platItem9","platItem10"]
  },
];


const useScrollAnimate = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};

const FilterTab = ({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={active?"theme-glowing-button":"theme-glowing-button-deactivate"}
      style={{
        fontFamily: "monospace",
        fontSize: "11px",
        letterSpacing: "0.05em",
        padding: "10px 18px",
        borderRadius: "8px",
        fontWeight: active ? 700 : 500,
        cursor: "pointer",
        transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
        transform: active ? "translateY(-1px)" : "translateY(0)",
      }}
    >
      {label}
    </Button>
  );
};

const EngineeringCard = ({
  section,
  index,
}: {
  section: (typeof ENGINEERING_PROFILE)[number];
  index: number;
}) => {
  const [hovered, setHovered] = useState(false);
  const { t } = useTranslation();
  const reversed = index % 2 === 1;

  if (section.id === "ALL") return null;

  return (
    <View
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "16px",
        padding: "32px",
        transition: "all 0.5s ease-out",
        display: "flex",
        flexDirection: reversed ? "row-reverse" : "row",
        flexWrap: "wrap",
        gap: "32px",
        alignItems: "flex-start",
      }}
      className="theme_card_background feature-card "
    >
      {/* top glow line */}
      <View
        className="p-0 m-0 absolute top-0 left-0 h-2 feature-card-effect-bg"
        style={{
          height: "2px",
          width: hovered ? "100%" : "0%",
          transition: "width 0.7s ease-out",
        }}
      />

      {/* Left block: icon + title + badge */}
      <View className="p-0 m-0" style={{ flex: "1 1 240px", minWidth: "220px" }}>
        <View
          className="p-0 m-0 h-12 w-12 rounded-md flex items-center justify-center mb-4 theme-bg-effect"
          style={{
            transform: hovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.4s ease",
          }}
        >
          {section.icon}
        </View>

        <H3
          style={{ lineHeight: 1.2 }}
          className="font-serif m-0 p-0 theme-paragraph-heading-secondary  font-normal"
        >
         {t(section.title as string)}
        </H3>

        <Text className="font-serif font-normal mt-2 mb-5 text-xs tmeme-paragraph-card ">
          {t("coreExpertise", { count: section.items?.length })} 
        </Text>

        <View
          className="inline-flex align-center gap-2 rounded-full px-3 py-1 theme-bg-effect"
        >
          <Span className="shrink-0 rounded-xl h-2 w-2 mt-1 theme-bg-effect_first" />
          <Span className="text-xs theme-paragraph-heading font-normal">
          {t(section.outcome as string)}
          </Span>
        </View>
      </View>

      {/* Right block: skill list */}
      <View style={{ flex: "2 1 320px", minWidth: "260px" }}>
        <View
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            rowGap: "10px",
            columnGap: "24px",
          }}
        >
          {section.items?.map((item) => (
            <Text key={item} className="flex align-center gap-2 p-0 m-0">
              <Span className="shrink-0 text-amber-400 text-sm theme-paragraph-heading">→</Span>
             <Span style={{ lineHeight: 1.5 }} className="text-sm text-stone-100 tmeme-paragraph-card"> {t(item)} </Span>
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};


const Feature = () => {
  const [activeTab, setActiveTab] = useState("ALL");
 const { t } = useTranslation();
  const activeSections =
    activeTab === "ALL"
      ? ENGINEERING_PROFILE.filter((item) => item.id !== "ALL")
      : ENGINEERING_PROFILE.filter((item) => item.id === activeTab);

  return (
    <Container className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full">
      {/* Heading */}
     
          <View
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "flex-end",
                justifyContent: "space-between",
                marginBottom: "40px",
                gap: "20px",
              }}
            >
              <View>
                <Span
                  className="theme_section_main_heading"
                  style={{
                    fontFamily: "monospace",
                    fontSize: "12px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                  }}
                >
                  {t("productionArchitecture")}
                </Span>
      
                {/* Heading now uses the same font-serif italic / ta-heading-shine
                    treatment as TechnicalArsenal's H2, so both sections feel
                    part of the same site */}
                <H2
                  style={{
                    fontSize: "40px",
                    marginTop: "6px",
                    lineHeight: 1.2,
                  }}
                >
                  <Span
                    className="font-serif italic font-light ta-heading-shine"
                    data-text={t("featuredWord")}
                  >
                    {t("featuredWord")}{" "}
                  </Span>
                  <span className="inline-block w-2" />
                  <Span
                    className="font-sans font-bold not-italic ta-heading-shine"
                    data-text={t("systemsWord")}
                  >
                    {t("systemsWord")}
                  </Span>
                </H2>
              </View>
      
              {/* Filter Chips */}
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "8px",
                  flexWrap: "wrap",
                }}
              >
                     {ENGINEERING_PROFILE.map((item) => (
          <FilterTab
            key={item.id}
            label={item.label}
            active={activeTab === item.id}
            onClick={() => setActiveTab(item.id)}
          />
        ))}
              </View>
            </View>

      {/* Dynamic Tab Cards Content */}
      <View className="flex flex-col gap-6">
        {activeSections.map((section, index) => (
            <Reveal
                        key={section.id}
                        variant="fade-up"
                        preset="smooth"
                        duration={0.6}
                        margin="0px 0px -12% 0px" // Trigger slightly before full entry to maintain 60 FPS scroll velocity
                      >
          <EngineeringCard
            key={section.id}
            section={section}
            index={index}
          />
          </Reveal>
        ))}
      </View>

  
    </Container>
  );
};

export default Feature;