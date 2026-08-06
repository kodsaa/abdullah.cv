import { useState, useRef, useEffect } from "react";
import {
  Card,
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
} from "../icon/icon";


const ENGINEERING_PROFILE = [
  {
    icon: <ProductDevelopmentIcon className="h-8 w-8 text-orange-500" />,
    title: "section1Title",
    color: "amber",
    items: [
      "section1Item1",
      "section1Item2",
      "section1Item3",
      "section1Item4",
      "section1Item5",
      "section1Item6",
      "section1Item7",
      "section1Item8",
      "section1Item9",
      "section1Item10",
    ],
  },
  {
    icon: <ArchitectureEngineeringIcon className="h-8 w-8 text-orange-500" />,
    title: "section2Title",
    color: "orange",
    items: [
      "section2Item1",
      "section2Item2",
      "section2Item3",
      "section2Item4",
      "section2Item5",
      "section2Item6",
      "section2Item7",
      "section2Item8",
      "section2Item9",
      "section2Item10",
      "section2Item11",
      "section2Item12",
    ],
  },
  {
    icon: <BusinessUnderstandingIcon className="h-8 w-8 text-orange-500" />,
    title: "section3Title",
    color: "yellow",
    items: [
      "section3Item1",
      "section3Item2",
      "section3Item3",
      "section3Item4",
      "section3Item5",
      "section3Item6",
      "section3Item7",
      "section3Item8",
      "section3Item9",
      "section3Item10",
    ],
  },
];

const STATS = [
  ["5+", "stat1Label"],
  ["20+", "stat2Label"],
  ["10+", "stat3Label"],
  ["100%", "stat4Label"],
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

const EngineeringCard = ({
  section,
}: {
  section: (typeof ENGINEERING_PROFILE)[number];
}) => {
  const { t } = useTranslation();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="theme_card_background"
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "20px",
        border: `1px solid ${hovered ? "rgba(245,158,11,0.45)" : "#292524"}`,
        transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 25px 55px -20px rgba(245,158,11,.28)"
          : "none",
      }}
    >
      {/* diagonal accent band, top-right */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "90px",
          height: "90px",
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "14px",
            right: "-38px",
            width: "140px",
            height: hovered ? "34px" : "0px",
            background: "linear-gradient(90deg, #f59e0b, #fb923c)",
            transform: "rotate(45deg)",
            transition: "height 0.4s ease-out",
            opacity: 0.9,
          }}
        />
      </div>

      {/* header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          padding: "24px 20px 18px",
        }}
      >
        <div
          style={{
            height: "52px",
            width: "52px",
            borderRadius: "16px",
            backgroundColor: "rgba(245,158,11,0.1)",
            border: "1px solid rgba(245,158,11,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transform: hovered ? "rotate(-6deg) scale(1.05)" : "rotate(0deg) scale(1)",
            transition: "transform 0.4s ease",
          }}
        >
          {section.icon}
        </div>

        <div style={{ minWidth: 0, flex: 1 }}>
          <h3
            style={{
              fontSize: "19px",
              fontFamily: "serif",
              color: "#fef3c7",
              lineHeight: 1.25,
              margin: 0,
            }}
          >
            {t(section.title)}
          </h3>
          <span
            style={{
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "#78716c",
              fontFamily: "ui-monospace, SF Mono, Menlo, monospace",
            }}
          >
            {section.items.length} {t("coreSkillsLabel")}
          </span>
        </div>
      </div>

      <div
        style={{
          height: "1px",
          margin: "0 20px",
          background:
            "linear-gradient(to right, rgba(245,158,11,0.25), transparent)",
        }}
      />

      {/* Skills as chips */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          padding: "20px",
        }}
      >
        {section.items.map((item, i) => (
          <SkillChip key={item} item={item} index={i} parentHovered={hovered} />
        ))}
      </div>
    </div>
  );
};

const SkillChip = ({
  item,
  index,
  parentHovered,
}: {
  item: string;
  index: number;
  parentHovered: boolean;
}) => {
  const { t } = useTranslation();
  const [hovered, setHovered] = useState(false);
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        borderRadius: "8px",
        border: `1px solid ${hovered ? "#f59e0b" : "rgba(120,53,15,0.35)"}`,
        backgroundColor: hovered ? "rgba(245,158,11,0.12)" : "rgba(41,37,36,0.5)",
        color: hovered ? "#fef3c7" : "#a8a29e",
        padding: "6px 12px",
        fontSize: "12.5px",
        lineHeight: 1.4,
        transition: "all 0.25s ease, opacity 0.4s ease, transform 0.4s ease",
        opacity: parentHovered ? 1 : 0.85,
        transform: parentHovered ? "translateY(0)" : "translateY(0)",
        transitionDelay: `${index * 25}ms`,
        cursor: "default",
      }}
    >
      {t(item)}
    </span>
  );
};

const StatCard = ({ value, label }: { value: string; label: string }) => {
  const { t } = useTranslation();
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="theme_card_background"
      style={{
        position: "relative",
        overflow: "hidden",
        border: `1px solid ${
          hovered ? "rgba(245,158,11,0.4)" : "rgba(120,53,15,0.2)"
        }`,
        borderRadius: "16px",
        padding: "20px 16px",
        textAlign: "center",
        transition: "all 0.35s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      {/* corner ticks */}
      <span
        style={{
          position: "absolute",
          top: "8px",
          left: "8px",
          width: "10px",
          height: "10px",
          borderTop: `2px solid ${hovered ? "#f59e0b" : "rgba(120,53,15,0.4)"}`,
          borderLeft: `2px solid ${hovered ? "#f59e0b" : "rgba(120,53,15,0.4)"}`,
          transition: "border-color 0.35s ease",
        }}
      />
      <span
        style={{
          position: "absolute",
          bottom: "8px",
          right: "8px",
          width: "10px",
          height: "10px",
          borderBottom: `2px solid ${hovered ? "#f59e0b" : "rgba(120,53,15,0.4)"}`,
          borderRight: `2px solid ${hovered ? "#f59e0b" : "rgba(120,53,15,0.4)"}`,
          transition: "border-color 0.35s ease",
        }}
      />

      <h2
        style={{
          fontSize: "30px",
          fontWeight: 700,
          fontFamily: "serif",
          color: "#fbbf24",
          margin: 0,
          letterSpacing: "-0.02em",
        }}
      >
        {value}
      </h2>
      <div
        style={{
          marginTop: "10px",
          marginLeft: "auto",
          marginRight: "auto",
          height: "2px",
          width: hovered ? "36px" : "20px",
          background: "linear-gradient(to right, #f59e0b, #fb923c)",
          transition: "width 0.4s ease",
        }}
      />
      <p
        style={{
          marginTop: "10px",
          fontSize: "10px",
          textTransform: "uppercase",
          letterSpacing: "0.2em",
          color: "#a8a29e",
          fontFamily: "ui-monospace, SF Mono, Menlo, monospace",
        }}
      >
        {t(label)}
      </p>
    </div>
  );
};

const TechnicalArsenal = () => {
  const { t } = useTranslation();
  const { ref: textRef, isVisible: textVisible } = useScrollAnimate();

  return (
    <Container className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

      {/* Heading */}
      <View className="text-center mb-10 lg:mb-16">
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "4px",
          }}
        >
          <Span
            className="h-px w-8 theme_section_main_heading_dash"
          />
           <Span
            className="uppercase tracking-widest font-mono font-bold text-3xl theme_section_main_heading"
            style={{ letterSpacing: "0.35em" }}
          >
             {t("engineeringProfileLabel")}
          </Span>
          <Span
            className="h-px w-8 theme_section_main_heading_dash"
          />
        </div>

        <H2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight">
          <span
            className="font-serif italic font-light ta-heading-shine"
            data-text={t("engineeringHeadingLine1")}
          >
            {t("engineeringHeadingLine1")}
          </span>
          <span className="inline-block w-3 sm:w-4" />
          <span
            className="font-sans font-bold not-italic ta-heading-shine"
            data-text={t("engineeringHeadingLine2")}
          >
            {t("engineeringHeadingLine2")}
          </span>
        </H2>

        <View className="mt-4 h-px w-20 mx-auto bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />

        <div
          ref={textRef}
          style={
            textVisible
              ? { animation: "textFadeUp 3s cubic-bezier(0.16, 1, 0.3, 1) both" }
              : { opacity: 0 }
          }
        >
          <Text className="mt-6 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg theme_section_paragraph leading-7 lg:leading-8 px-2 font-light tracking-wide">
            {t("profileText1")}
            <span className="font-serif italic theme_section_paragraph_highlight">
              {t("profileHighlight1")}
            </span>
            {t("profileText2")}
            <span className="font-serif italic theme_section_paragraph_highlight">
              {t("profileHighlight2")}
            </span>
            {t("profileText3")}
            <span className="font-serif italic theme_section_paragraph_highlight_secondary">
              {t("profileHighlight3")}
            </span>
            {t("profileText4")}
          </Text>
        </div>
      </View>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {ENGINEERING_PROFILE.map((section) => (
          <EngineeringCard key={section.title} section={section} />
        ))}
      </div>

      {/* Bottom Stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "16px",
          marginTop: "32px",
        }}
      >
        {STATS.map(([value, label]) => (
          <StatCard key={label} value={value} label={label} />
        ))}
      </div>
    </Container>
  );
};

export default TechnicalArsenal;  
