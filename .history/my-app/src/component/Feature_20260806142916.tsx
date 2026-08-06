import { useState, useRef, useEffect } from "react";
import {
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

export const ENGINEERING_PROFILE = [
  {
    id: "ALL",
    label: "ALL SYSTEMS",
  },

  {
    id: "appTitle",
    label: "APPLICATIONS",
    icon: <ProductDevelopmentIcon className="h-8 w-8 text-orange-500" />,
    title: 'title', 
    color: "amber",
    outcome:
     "appOutcome", 
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
    icon: <ArchitectureEngineeringIcon className="h-8 w-8 text-orange-500" />,
    title: "coreTitle",
    color: "orange",
    outcome:
      "coreOutcome",
    items: [
      ["coreItem1","coreItem2","coreItem3","coreItem4","coreItem5","coreItem6","coreItem7","coreItem8","coreItem9","coreItem10"]
    ],
  },

  {
    id: "AUTOMATION",
    label: "AUTOMATION",
    icon: <BusinessUnderstandingIcon className="h-8 w-8 text-orange-500" />,
    title: "autoTitle",
    color: "yellow",
    outcome:
      "autoOutcome",
    items: [
     ["autoItem1","autoItem2","autoItem3","autoItem4","autoItem5","autoItem6","autoItem7","autoItem8","autoItem9","autoItem10"]
    ],
  },

  {
    id: "PLATFORM",
    label: "PLATFORM",
    icon: <CodeIcon className="h-8 w-8 text-orange-500" />,
    title: "platTitle", 
    color: "stone",
    outcome:
      "Reusable tools and developer platforms that accelerate product development.",
    items: [
      "StrivUI Framework",
      "Component Design System",
      "Developer CLI Tools",
      "Deployment Toolkit",
      "Cross-Platform UI Library",
      "Reusable Components",
      "CI/CD Automation",
      "Docker Deployment",
      "GitHub Actions",
      "Developer Productivity Tools",
    ],
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
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "monospace",
        fontSize: "11px",
        letterSpacing: "0.05em",
        padding: "10px 18px",
        borderRadius: "8px",
        border: active
          ? "1px solid #d97706"
          : `1px solid ${hovered ? "rgba(245,158,11,0.4)" : "rgba(120,53,15,0.3)"}`,
        background: active
          ? "linear-gradient(135deg, #f59e0b, #d97706)"
          : "#1c1917",
        color: active ? "#1c1917" : hovered ? "#fde68a" : "#a8a29e",
        fontWeight: active ? 700 : 500,
        cursor: "pointer",
        transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
        transform: active ? "translateY(-1px)" : "translateY(0)",
        boxShadow: active ? "0 8px 20px -6px rgba(245,158,11,0.5)" : "none",
      }}
    >
      {label}
    </button>
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
        border: `1px solid ${hovered ? "rgba(245,158,11,0.5)" : "#292524"}`,
        padding: "32px",
        transition: "all 0.5s ease-out",
        boxShadow: hovered
          ? "0 20px 50px -15px rgba(245,158,11,.2)"
          : "none",
        display: "flex",
        flexDirection: reversed ? "row-reverse" : "row",
        flexWrap: "wrap",
        gap: "32px",
        alignItems: "flex-start",
      }}
      className="theme_card_background"
    >
      {/* top glow line */}
      <View
        className="p-0 m-0 absolute top-0 left-0 h-2"
        style={{
          height: "2px",
          width: hovered ? "100%" : "0%",
          background: "linear-gradient(to right, #f59e0b, #fb923c, #f59e0b)",
          transition: "width 0.7s ease-out",
        }}
      />

      {/* Left block: icon + title + badge */}
      <View className="p-0 m-0" style={{ flex: "1 1 240px", minWidth: "220px" }}>
        <View
          className="p-0 m-0 h-12 w-12 rounded-md flex items-center justify-center mb-4"
          style={{
            border: "1px solid rgba(245,158,11,0.4)",
            backgroundColor: "rgba(245,158,11,0.08)",
            transform: hovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.4s ease",
          }}
        >
          {section.icon}
        </View>

        <H3
          style={{ lineHeight: 1.2 }}
          className="font-serif m-0 p-0 text-amber-200 font-normal"
        >
          {section.title}
        </H3>

        <Text className="font-serif font-normal mt-2 mb-5 text-xs text-stone-400">
          Core expertise across {section.items?.length}+ specialized areas
        </Text>

        <View
          style={{
            border: "1px solid rgba(245,158,11,0.35)",
            backgroundColor: "rgba(245,158,11,0.08)",
          }}
          className="inline-flex align-center gap-2 rounded-full px-3 py-1"
        >
          <Span className="shrink-0 bg-amber-500 rounded-xl h-2 w-2 mt-1" />
          <Span className="text-xs text-amber-400 font-normal">
            {section.outcome}
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
              <Span className="shrink-0 text-amber-400 text-sm">→</Span>
              <Span style={{ lineHeight: 1.5 }} className="text-sm text-stone-100">
                {item}
              </Span>
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

const StatCard = ({ value, label }: { value: string; label: string }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <View
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: "#1c1917",
        border: `1px solid ${
          hovered ? "rgba(245,158,11,0.4)" : "rgba(120,53,15,0.2)"
        }`,
        borderRadius: "12px",
        padding: "16px",
        textAlign: "center",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      <h2
        style={{
          fontSize: "28px",
          fontWeight: 700,
          color: "#fbbf24",
          margin: 0,
        }}
      >
        {value}
      </h2>
      <View
        className="mt-2 w-16 p-0 m-0"
        style={{
          height: "1px",
          backgroundColor: "rgba(245,158,11,0.4)",
          margin: "auto",
        }}
      />
      <Text
        className="mt-2 text-xs uppercase text-gray-100"
        style={{ letterSpacing: "0.2em" }}
      >
        {label}
      </Text>
    </View>
  );
};

const Feature = () => {
  const [activeTab, setActiveTab] = useState("ALL");
  const { ref: textRef, isVisible: textVisible } = useScrollAnimate();

  const activeSections =
    activeTab === "ALL"
      ? ENGINEERING_PROFILE.filter((item) => item.id !== "ALL")
      : ENGINEERING_PROFILE.filter((item) => item.id === activeTab);

  return (
    <Container className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
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
                  Production Architecture
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
                    data-text="Featured "
                  >
                    Featured{" "}
                  </Span>
                  <span className="inline-block w-2" />
                  <Span
                    className="font-sans font-bold not-italic ta-heading-shine"
                    data-text="Systems"
                  >
                    Systems
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
          <EngineeringCard
            key={section.id}
            section={section}
            index={index}
          />
        ))}
      </View>

  
    </Container>
  );
};

export default Feature;