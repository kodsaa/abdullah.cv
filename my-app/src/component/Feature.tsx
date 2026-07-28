import { useState, useRef, useEffect } from 'react'
import {
  Container,
  View,
  Card,
  H2,
  H3,
  Text,
  Span,
} from "strivui";

interface SystemItem {
  id: string;
  title: string;
  bounty: string;
  status: string;
  type: string;
  desc: string;
  tech: string[];
}

const PRODUCTION_SYSTEMS: SystemItem[] = [
  {
    id: "1",
    title: "Enterprise HRMS & Resource Management Engine",
    bounty: "Enterprise Scale • Multi-Role Access",
    status: "PROD / DEPLOYED",
    type: "ENTERPRISE",
    desc: "Designed scalable, role-based architecture for Manager, HR, Finance, and Employee portals. Architected transaction boundaries for payroll, leave tracking, and complex timesheet processing.",
    tech: ["Django", "React.js", "Redux Toolkit", "PostgreSQL"],
  },
  {
    id: "2",
    title: "Zero-Downtime Legacy Data Migration Engine",
    bounty: "High Concurrency • ETL",
    status: "MISSION CRITICAL",
    type: "BACKEND",
    desc: "Engineered robust Excel-to-DB migration pipelines to import thousands of employee records and leave models into relational schema without data loss or downtime.",
    tech: ["Python", "Django ORM", "PostgreSQL", "Bulk Ops"],
  },
  {
    id: "3",
    title: "⚡ StrivUI Cross-Platform Framework",
    bounty: "Design System Architecture",
    status: "OPEN SOURCE",
    type: "FRAMEWORK",
    desc: "Cross-platform UI component library bridging web (React) and mobile (React Native) with strict utility-first styling and unified API surfaces.",
    tech: ["TypeScript", "React", "React Native", "SCSS"],
  },
];

const FILTERS = ["ALL", "ENTERPRISE", "BACKEND", "FRAMEWORK"];

// ---- Scroll-triggered visibility hook ----
const useScrollAnimate = (threshold = 0.15) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
};

const FilterChip = ({
  type,
  active,
  onClick,
}: {
  type: string;
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
        padding: "8px 14px",
        borderRadius: "8px",
        border: active
          ? "1px solid #d97706"
          : `1px solid ${hovered ? "rgba(245,158,11,0.4)" : "transparent"}`,
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
      {type}
    </button>
  );
};

const SystemCard = ({ item, index }: { item: SystemItem; index: number }) => {
  const [hovered, setHovered] = useState(false);
  const { ref, isVisible } = useScrollAnimate();

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(160deg, #1c1917 0%, #16130f 100%)",
        border: `1px solid ${hovered ? "#d97706" : "rgba(120,53,15,0.5)"}`,
        borderRadius: "16px",
        padding: "28px",
        marginBottom: "22px",
        transition:
          "border-color 0.4s ease, box-shadow 0.4s ease, transform 0.6s cubic-bezier(0.16,1,0.3,1), opacity 0.6s ease",
        boxShadow: hovered
          ? "0 24px 55px -20px rgba(245,158,11,.28)"
          : "0 8px 20px -12px rgba(0,0,0,.5)",
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? hovered
            ? "translateY(-4px)"
            : "translateY(0)"
          : "translateY(24px)",
        transitionDelay: isVisible ? `${index * 90}ms` : "0ms",
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

      {/* faint corner glow */}
      <div
        style={{
          position: "absolute",
          top: "-60px",
          right: "-60px",
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.5s ease",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "18px",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontSize: "11px",
            fontFamily: "monospace",
            fontWeight: 700,
            padding: "5px 10px",
            borderRadius: "6px",
            background: "rgba(120,53,15,0.25)",
            border: "1px solid rgba(180,83,9,0.4)",
            color: "#fbbf24",
            letterSpacing: "0.04em",
          }}
        >
          {item.status}
        </span>
        <span
          style={{
            fontSize: "11px",
            fontFamily: "monospace",
            color: "#a8a29e",
          }}
        >
          {item.bounty}
        </span>
      </div>

      <h3
        style={{
          fontSize: "24px",
          fontFamily: "Georgia, serif",
          fontWeight: 700,
          color: "#fef3c7",
          margin: 0,
          marginBottom: "10px",
          lineHeight: 1.3,
        }}
      >
        {item.title}
      </h3>

      <p
        style={{
          fontSize: "14px",
          color: "#d6d3d1",
          lineHeight: 1.7,
          marginBottom: "24px",
          fontWeight: 300,
        }}
      >
        {item.desc}
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "8px",
          paddingTop: "18px",
          borderTop: "1px solid rgba(41,37,36,0.8)",
        }}
      >
        {item.tech.map((t, idx) => (
          <span
            key={idx}
            style={{
              fontSize: "11px",
              fontFamily: "monospace",
              background: "#0c0a09",
              color: "#a8a29e",
              padding: "5px 10px",
              borderRadius: "6px",
              border: "1px solid #292524",
              transition: "border-color 0.3s ease, color 0.3s ease",
            }}
          >
            #{t}
          </span>
        ))}
      </div>
    </div>
  );
};

const Feature = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredSystems =
    activeFilter === "ALL"
      ? PRODUCTION_SYSTEMS
      : PRODUCTION_SYSTEMS.filter((item) => item.type === activeFilter);

  return (
    <Container
      id="systems"
      style={{
        padding: "80px 24px",
        maxWidth: "72rem",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
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
            style={{
              color: "#f59e0b",
              fontFamily: "monospace",
              fontSize: "12px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Production Architecture
          </Span>
          <H2
            style={{
              fontSize: "40px",
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              color: "#fef3c7",
              marginTop: "6px",
              lineHeight: 1.2,
            }}
          >
            Featured Systems
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
          {FILTERS.map((type) => (
            <FilterChip
              key={type}
              type={type}
              active={activeFilter === type}
              onClick={() => setActiveFilter(type)}
            />
          ))}
        </View>
      </View>

      <div>
        {filteredSystems.map((item, index) => (
          <SystemCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </Container>
  );
};

export default Feature;