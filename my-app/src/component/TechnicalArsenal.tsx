import { useState, useRef, useEffect } from "react";
import {
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
      className="bg-stone-900"
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
          style={{
            lineHeight: 1.2,
          }}
          className="font-serif m-0 p-0 text-amber-200 font-normal"
        >
          {section.title}
        </H3>

        <Text
        className="font-serif font-normal mt-2 mb-5 text-xs text-stone-400"
        >
          Core expertise across {section.items.length}+ specialized areas
        </Text>

        <View
          style={{
            border: "1px solid rgba(245,158,11,0.35)",
            backgroundColor: "rgba(245,158,11,0.08)",
          }}
          className="inline-flex align-center gap-2 rounded-full px-3 py-1 "
        >
          <Span
    
            className="shrink-0 bg-amber-500 rounded-xl h-2 w-2 mt-1"
          />
          <Span
          className=" text-xs text-amber-400 font-normal "
      
          >
            {section.outcome}
          </Span>
        </View>
      </View>

      {/* Right block: skill list */}
      <View  style={{ flex: "2 1 320px", minWidth: "260px" }}>
        <View
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            rowGap: "10px",
            columnGap: "24px",
          }}
        >
          {section.items.map((item) => (
            <Text
              key={item}
              className="flex align-center gap-2 p-0 m-0"
            >
              <Span
            
                className="shrink-0 text-amber-400 text-sm"
              >
                →
              </Span>
              <Span
                style={{
                  lineHeight: 1.5,
                }}
                className="text-sm text-stone-100 "
              >
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
          margin:"auto"
        }}
      />
      <Text
        className="mt-2 text-xs uppercase text-gray-100"
        style={{

          letterSpacing: "0.2em",

        }}
      >
        {label}
      </Text>
    </View>
  );
};

const TechnicalArsenal = () => {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimate();

  return (
    <Container className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

      {/* Heading */}
      <View className="text-center mb-10 lg:mb-16">
        <View
    
          className="inline-flex items-center gap-2 mb-1"
        >
          <Span
     
            className="h-px w-8 "
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(245,158,11,0.7))",
            }}
          />
          <Span
            style={{
              letterSpacing: "0.35em",
            }}
            className="uppercase tracking-widest text-amber-400 font-mono font-bold text-3xl"
          >
            Engineering Profile
          </Span>
          <Span
          className="h-px w-8"
            style={{
              background:
                "linear-gradient(to left, transparent, rgba(245,158,11,0.7))",
            }}
          />
        </View>

        <H2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight">
          <Span
            className="font-serif italic font-light ta-heading-shine"
            data-text="Building Enterprise "
          >
            Building Enterprise{" "}
          </Span>
          <span className="inline-block w-3 sm:w-4" />
          <Span
            className="font-sans font-bold not-italic ta-heading-shine"
            data-text="Software at Scale"
          >
            Software at Scale
          </Span>
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
            <Span className="font-serif italic text-stone-200">
              architecting enterprise platforms
            </Span>
            , designing{" "}
            <Span className="font-serif italic text-stone-200">
              scalable backend systems
            </Span>
            , leading engineering initiatives, and delivering{" "}
            <Span className="font-serif italic text-amber-200">
              production-ready software
            </Span>{" "}
            used across multiple business domains.
          </Text>
        </div>
      </View>

      {/* Cards */}
      <View
       className="flex flex-col gap-4"   
      >
        {ENGINEERING_PROFILE.map((section, index) => (
          <EngineeringCard key={section.title} section={section} index={index} />
        ))}
      </View>

      {/* Bottom Stats */}
      <View
        className="mt-12 lg:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
      >
        {STATS.map(([value, label]) => (
          <StatCard key={label} value={value} label={label} />
        ))}
      </View>
    </Container>
  );
};

export default TechnicalArsenal;