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
    outcome: "Faster shipping, fewer bugs, and production-ready platforms.",
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
    outcome: "Scalable systems built to handle growth without rewrites.",
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
    outcome: "Clear roadmaps, aligned stakeholders, and on-time delivery.",
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
  index,
}: {
  section: (typeof ENGINEERING_PROFILE)[number];
  index: number;
}) => {
  const [hovered, setHovered] = useState(false);
  const reversed = index % 2 === 1;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "16px",
        border: `1px solid ${hovered ? "rgba(245,158,11,0.5)" : "#292524"}`,
        backgroundColor: "#1c1917",
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
    >
      {/* top glow line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "2px",
          width: hovered ? "100%" : "0%",
          background: "linear-gradient(to right, #f59e0b, #fb923c, #f59e0b)",
          transition: "width 0.7s ease-out",
        }}
      />

      {/* Left block: icon + title + badge */}
      <div style={{ flex: "1 1 240px", minWidth: "220px" }}>
        <div
          style={{
            height: "48px",
            width: "48px",
            borderRadius: "12px",
            border: "1px solid rgba(245,158,11,0.4)",
            backgroundColor: "rgba(245,158,11,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "16px",
            transform: hovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.4s ease",
          }}
        >
          {section.icon}
        </div>

        <h3
          style={{
            fontSize: "22px",
            fontFamily: "serif",
            fontWeight: 700,
            color: "#fafaf9",
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          {section.title}
        </h3>

        <p
          style={{
            fontSize: "13px",
            color: "#a8a29e",
            marginTop: "6px",
            marginBottom: "20px",
          }}
        >
          Core expertise across {section.items.length}+ specialized areas
        </p>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            border: "1px solid rgba(245,158,11,0.35)",
            backgroundColor: "rgba(245,158,11,0.08)",
            borderRadius: "999px",
            padding: "8px 14px",
          }}
        >
          <span
            style={{
              height: "6px",
              width: "6px",
              borderRadius: "50%",
              backgroundColor: "#f59e0b",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: "12px",
              fontWeight: 600,
              color: "#fbbf24",
            }}
          >
            {section.outcome}
          </span>
        </div>
      </div>

      {/* Right block: skill list */}
      <div style={{ flex: "2 1 320px", minWidth: "260px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            rowGap: "10px",
            columnGap: "24px",
          }}
        >
          {section.items.map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span
                style={{
                  color: "#f59e0b",
                  fontSize: "13px",
                  flexShrink: 0,
                }}
              >
                →
              </span>
              <span
                style={{
                  fontSize: "14px",
                  color: "#d6d3d1",
                  lineHeight: 1.5,
                }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ value, label }: { value: string; label: string }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
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
      <div
        style={{
          marginTop: "8px",
          marginLeft: "auto",
          marginRight: "auto",
          height: "1px",
          width: "24px",
          backgroundColor: "rgba(245,158,11,0.4)",
        }}
      />
      <p
        style={{
          marginTop: "8px",
          fontSize: "10px",
          textTransform: "uppercase",
          letterSpacing: "0.2em",
          color: "#a8a29e",
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
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {ENGINEERING_PROFILE.map((section, index) => (
          <EngineeringCard key={section.title} section={section} index={index} />
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