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

import {
  ArchitectureEngineeringIcon,
  ProductDevelopmentIcon,
  BusinessUnderstandingIcon,
} from "../icon/icon";


const ENGINEERING_PROFILE = [
  {
    icon: <ProductDevelopmentIcon className="h-8 w-8 text-orange-500" />,
    title: "Product Development",
    color: "amber",
    items: [
      "Enterprise SaaS Platforms",
      "ERP Solutions",
      "CRM Systems",
      "E-Commerce Platforms",
      "Marketplace Applications",
      "Admin Dashboards",
      "Vendor Portals",
      "Customer Platforms",
      "AI-powered Applications",
      "Mobile Applications",
    ],
  },
  {
    icon: <ArchitectureEngineeringIcon className="h-8 w-8 text-orange-500" />,
    title: "Architecture & Engineering",
    color: "orange",
    items: [
      "Software Architecture",
      "System Design",
      "Distributed Systems",
      "Microservices",
      "REST APIs & WebSockets",
      "Authentication & RBAC",
      "Database Design",
      "Performance Optimization",
      "Clean Architecture",
      "SOLID Principles",
      "Design Patterns",
      "Cloud Deployments & CI/CD",
    ],
  },
  {
    icon: <BusinessUnderstandingIcon className="h-8 w-8 text-orange-500" />,
    title: "Business Understanding",
    color: "yellow",
    items: [
      "Requirement Gathering",
      "Product Discovery",
      "Sprint Planning",
      "Technical Roadmaps",
      "Feature Prioritization",
      "Stakeholder Communication",
      "Agile Development",
      "Risk Management",
      "Production Releases",
      "Technical Documentation",
    ],
  },
];

const STATS = [
  ["5+", "Years Experience"],
  ["20+", "Enterprise Projects"],
  ["10+", "Business Domains"],
  ["100%", "Production Focus"],
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
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "20px",
        border: `1px solid ${hovered ? "rgba(245,158,11,0.45)" : "#292524"}`,
        backgroundColor: "#1c1917",
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
            {section.title}
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
            {section.items.length} core skills
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
      {item}
    </span>
  );
};

const StatCard = ({ value, label }: { value: string; label: string }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#1c1917",
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
        {label}
      </p>
    </div>
  );
};

const TechnicalArsenal = () => {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimate();

  return (
    <Container className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <style>{`
        @keyframes textFadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shineSweep {
          0% { background-position: -150% 0; }
          100% { background-position: 150% 0; }
        }
        .ta-heading-shine {
          position: relative;
          display: inline-block;
          color: #d97706;
        }
        .ta-heading-shine::before {
          content: attr(data-text);
          position: absolute;
          inset: 0;
          background-image: linear-gradient(
            100deg,
            transparent 35%,
            #ffffff 50%,
            transparent 65%
          );
          background-size: 250% 100%;
          background-repeat: no-repeat;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shineSweep 2s ease-in-out infinite alternate;
          pointer-events: none;
        }
      `}</style>

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
          <span
            style={{
              height: "1px",
              width: "32px",
              background:
                "linear-gradient(to right, transparent, rgba(245,158,11,0.7))",
            }}
          />
          <span
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.35em",
              color: "#f59e0b",
              fontFamily: "monospace",
            }}
          >
            Engineering Profile
          </span>
          <span
            style={{
              height: "1px",
              width: "32px",
              background:
                "linear-gradient(to left, transparent, rgba(245,158,11,0.7))",
            }}
          />
        </div>

        <H2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight">
          <span
            className="font-serif italic font-light ta-heading-shine"
            data-text="Building Enterprise "
          >
            Building Enterprise{" "}
          </span>
          <span className="inline-block w-3 sm:w-4" />
          <span
            className="font-sans font-bold not-italic ta-heading-shine"
            data-text="Software at Scale"
          >
            Software at Scale
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
          <Text className="mt-6 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg text-stone-400 leading-7 lg:leading-8 px-2 font-light tracking-wide">
            Experienced in{" "}
            <span className="font-serif italic text-stone-200">
              architecting enterprise platforms
            </span>
            , designing{" "}
            <span className="font-serif italic text-stone-200">
              scalable backend systems
            </span>
            , leading engineering initiatives, and delivering{" "}
            <span className="font-serif italic text-amber-200/90">
              production-ready software
            </span>{" "}
            used across multiple business domains.
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