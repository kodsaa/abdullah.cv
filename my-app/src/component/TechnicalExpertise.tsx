"use client";

import { useEffect, useRef, useState, type ReactNode, type RefObject, type MouseEvent as ReactMouseEvent } from "react";
import { useTranslation, Trans } from "react-i18next";

import {
  CodeIcon,
  ReactIcon,
  BackendIcon,
  DatabaseIcon,
  SystemDesignIcon,
  RobotIcon,
  CloudIcon,
  RealtimeIcon,
  ReactComponentIcon,
  TypeScriptIcon,
  PythonIcon,
  JavaScriptIcon,
  NextjsIcon,
  TailwindCSSIcon,
  FlaskIcon,
  NodeJSIcon,
  MySQLIcon,
  MongoDBIcon,
  FirebaseIcon,
  OpenAIIcon,
  GithubActionIcon,
  CloudflareIcon
} from "../icon/icon";
import {OOPIcon,AsyncProgrammingIcon,MemoryManagementIcon,PerformanceProfilingIcon} from "../icon/skill"

interface ExpertiseItem {
  id: string;
  icon: ReactNode;
  titleKey: string;
  descKey: string;
  skills: { label: string; icon: ReactNode }[];
}

// Static metadata only — icons and skill labels are technology names and
// are intentionally NOT translated (industry convention: "React", "Docker",
// etc. stay the same across locales). Title/description come from i18n
// via titleKey/descKey, resolved inside the component with t().
const TECHNICAL_EXPERTISE: ExpertiseItem[] = [
  {
    id: "programming-languages",
    icon: <CodeIcon className="h-8 w-8 theme-icon" />,
    titleKey: "techProgrammingTitle",
    descKey: "techProgrammingDesc",
    skills: [
      { label: "JavaScript", icon: <JavaScriptIcon className="h-5 w-5 " /> },
      { label: "TypeScript", icon: <TypeScriptIcon className="h-5 w-5 " /> },
      { label: "Python", icon: <PythonIcon className="h-5 w-5 " /> },
      { label: "C", icon: "" },
      { label: "OOP", icon: <OOPIcon className="h-5 w-5 " /> },
      { label: "Async Programming", icon: <AsyncProgrammingIcon className="h-5 w-5 " /> },
      { label: "Memory Management", icon: <MemoryManagementIcon className="h-5 w-5 " /> },
      { label: "Performance Profiling", icon: <PerformanceProfilingIcon className="h-5 w-5 " /> },
    ],
  },
  {
    id: "frontend-engineering",
    icon: <ReactIcon className="h-8 w-8 theme-icon" />,
    titleKey: "techFrontendTitle",
    descKey: "techFrontendDesc",
    skills: [
      { label: "React", icon: <ReactComponentIcon className="h-5 w-5" /> },
      { label: "Next.js", icon: <NextjsIcon className="h-5 w-5" /> },
      { label: "React Native", icon: "" },
      { label: "Redux Toolkit", icon: "" },
      { label: "RTK Query", icon: "" },
      { label: "React Query", icon: "" },
      { label: "Tailwind CSS", icon: <TailwindCSSIcon className="h-5 w-5" /> },
      { label: "StrivUI", icon: "" },
      { label: "Micro Frontends", icon: "" },
      { label: "SSR", icon: "" },
      { label: "SSG", icon: "" },
      { label: "Component Architecture", icon: "" },

    ],
  },
  {
    id: "backend-engineering",
    icon: <BackendIcon className="h-8 w-8 theme-icon" />,
    titleKey: "techBackendTitle",
    descKey: "techBackendDesc",
    skills: [
      { label: "Django", icon: "" },
{ label: "FastAPI", icon: "" },
{ label: "Flask", icon: <FlaskIcon className="h-5 w-5" /> },
{ label: "Node.js", icon: <NodeJSIcon className="h-5 w-5" /> },
{ label: "Express.js", icon: "" },
{ label: "Microservices", icon: "" },
{ label: "Message Queues", icon: "" },
{ label: "REST APIs", icon: "" },
{ label: "GraphQL", icon: "" },
{ label: "Event-Driven Architecture", icon: "" },
{ label: "Async Programming", icon: "" },
    ],
  },
  {
    id: "databases",
    icon: <DatabaseIcon className="h-8 w-8 theme-icon" />,
    titleKey: "techDatabaseTitle",
    descKey: "techDatabaseDesc",
    skills: [
      { label: "PostgreSQL", icon: "" },
      { label: "MongoDB", icon: <MongoDBIcon className="h-5 w-5" /> },
      { label: "Redis", icon: "" },
      { label: "MySQL", icon: <MySQLIcon className="h-5 w-5" /> },
      { label: "Firebase", icon: <FirebaseIcon className="h-5 w-5" /> },
      { label: "Indexing", icon: "" },
      { label: "Aggregation", icon: "" },
      { label: "Replication", icon: "" },
      { label: "Query Optimization", icon: "" },
      { label: "Caching", icon: "" },
      { label: "Transactions", icon: "" },
      { label: "Data Modeling", icon: "" },

    ],
  },
  {
    id: "system-design",
    icon: <SystemDesignIcon className="h-8 w-8 theme-icon" />,
    titleKey: "techSystemDesignTitle",
    descKey: "techSystemDesignDesc",
    skills: [
      { label: "SOLID", icon: "" },
      { label: "Caching", icon: "" },
            { label: "Microservices", icon: "" },
                  { label: "Queues", icon: "" },

     { label: "Distributed Systems", icon: "" },
      { label: "Load Balancing", icon: "" },
      { label: "Design Patterns", icon: "" },
            { label: "Clean Architecture", icon: "" },

    ],
  },
  {
    id: "ai-machine-learning",
    icon: <RobotIcon className="h-8 w-8 theme-icon" />,
    titleKey: "techAiMlTitle",
    descKey: "techAiMlDesc",
    skills: [
      { label: "OpenAI", icon: <OpenAIIcon className="h-5 w-5" /> },
      { label: "LangChain", icon: "" },
      { label: "LangGraph", icon: "" },
      { label: "PyTorch", icon: "" },
      { label: "TensorFlow", icon: "" },
      { label: "LLMs", icon: "" },
      { label: "RAG", icon: "" },
      { label: "AI Agents", icon: "" },
    ],
  },
  {
    id: "cloud-devops",
    icon: <CloudIcon className="h-8 w-8 theme-icon" />,
    titleKey: "techCloudDevopsTitle",
    descKey: "techCloudDevopsDesc",
    skills: [
      { label: "Docker", icon: "" },
      { label: "Kubernetes", icon: "" },
      { label: "GitHub Actions", icon: <GithubActionIcon className="h-5 w-5" /> },
      { label: "AWS", icon: "" },
      { label: "Nginx", icon: "" },
      { label: "PM2", icon: "" },
      { label: "Cloudflare", icon: <CloudflareIcon className="h-5 w-5" /> },
      { label: "CI/CD", icon: "" },
    ],
  },
  {
    id: "real-time-systems",
    icon: <RealtimeIcon className="h-8 w-8 theme-icon" />,
    titleKey: "techRealtimeTitle",
    descKey: "techRealtimeDesc",
    skills: [
      { label: "WebRTC", icon: "" },
      { label: "Socket.io", icon: "" },
      { label: "WebSockets", icon: "" },
      { label: "Pusher", icon: "" },
      { label: "Streaming", icon: "" },
      { label: "Real-Time Sync", icon: "" },
    ],
  },
];

import { Badge, Button, Card, Container, H2, H3, Span, Text, View } from "strivui";
import { useNavigate } from "react-router-dom";
import Reveal from "./Reveal";

/**
 * Reveals a card with a fade + rise transition the first time it
 * scrolls into view. Each card observes itself, so the stagger works
 * no matter how many columns the responsive grid currently has.
 *
 * The ref is attached to a plain <div> wrapper rather than strivui's
 * <Card>, since Card's exported types don't declare a `ref` prop.
 */
const useRevealOnView = (): [RefObject<HTMLDivElement | null>, boolean] => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect users who've asked for less motion.
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
};

interface ExpertiseCardProps {
  item: ExpertiseItem;
  index: number;
}

const ExpertiseCard = ({ item, index }: ExpertiseCardProps) => {
  const { t } = useTranslation();
  const [hovered, setHovered] = useState(false);
  const [ref, visible] = useRevealOnView();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();

  // Alternate the slide direction by column so the grid feels like it's
  // being pulled in from both sides rather than just drifting upward.
  const slideAnimation = index % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right";

  // Map the stagger index onto the nearest step in strivui's fixed
  // $delays scale (0/75/100/150/200/300/500/700/1000).
  const delaySteps = [0, 75, 100, 150, 200, 300, 500, 700, 1000];
  const delayStep = delaySteps[Math.min(index, delaySteps.length - 1)];

  // Tracks the cursor over the card and converts its position into a
  // subtle 3D tilt — the card leans away from wherever the pointer is,
  // like light catching an angled surface.
  const handleMouseMove = (event: ReactMouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - bounds.left) / bounds.width - 0.5;
    const py = (event.clientY - bounds.top) / bounds.height - 0.5;
    setTilt({ x: py * -10, y: px * 10 });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTilt({ x: 0, y: 0 });
  };

  const cardTransform = isHovering
    ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-10px) scale(1.015)`
    : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)";

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out  ${
        visible ? `${slideAnimation} animate-delay-${delayStep}` : "opacity-0"
      }`}
    >
      <Card
        onMouseMove={handleMouseMove}
        onMouseEnter={(e) => {
          setHovered(true);
          setIsHovering(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
          handleMouseLeave();
        }}
        style={{
          transform: cardTransform,
          border: `1px solid transparent`,
          transition: "all .3s ease",
        }}
        className="
      
    group
    relative
    overflow-hidden
    rounded-3xl
    theme_card_background
    p-6
    sm:p-7
    will-change-transform
  "
      >
        {/* Top glow line - left to right on hover */}
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "2px",
            width: hovered ? "100%" : "0%",
            transition: "width 0.7s ease-out",
          }}
          className="feature-card-effect-bg"
        />

        {/* Soft ambient glow that sweeps in on hover, purely decorative */}
        <View
          className="
          pointer-events-none
          absolute
          -top-16
          -right-16
          h-40
          w-40
          rounded-full
          bg-amber-500/0
          blur-3xl
          transition-all
          duration-500
          group-hover:bg-amber-500/10
          "
        />

        {/* Diagonal shine that slides across the card on hover */}
        <View
          className="
          pointer-events-none
          absolute
          inset-0
          -translate-x-full
          group-hover:translate-x-full
          transition-transform
          duration-1000
          ease-out
          bg-gradient-to-r
          from-transparent
          via-amber-500/[0.06]
          to-transparent
          -skew-x-[20deg]
          "
        />

        <View className="flex items-center gap-4 mb-5">
          <View
            className="
            w-14
            h-14
            shrink-0
            rounded-2xl
            bg-amber-500/10
            flex
            items-center
            justify-center
            text-3xl
            transition-transform
            duration-500
            ease-out
            theme-bg-effect
            p-2
            "
          >
            {item.icon}
          </View>

          <H3
            style={{
              lineHeight: 1.2,
            }}
            
            className="font-serif m-0 p-0 theme-paragraph-heading-secondary font-normal"
          >
            {t(item.titleKey)}
          </H3>
        </View>

        <Text className="tmeme-paragraph-card text-sm leading-7 mb-6">
          {t(item.descKey)}
        </Text>

        <View className="flex flex-wrap gap-2">
          {item.skills.map((skill: { label: string; icon: ReactNode }, skillIndex: number) => (
            <Badge
              key={skill.label}
              className="
              tmeme-paragraph-card
              rounded-md
              inline-flex
              items-center
              gap-2
              font-mono
              tracking-wide
              uppercase
              border
              border-silver-500
              text-silver-500
              p-2
              text-xs
              transition-all
              duration-300
              bg-transparent
              "
              style={{
                transitionDelay: `${index * 90 + 200 + skillIndex * 35}ms`,
              }}
            >
              {skill.icon}  {skill.label}
            </Badge>
          ))}
        </View>
        <Button onClick={() => navigate(`/skill/${item.id}`)} className="bg-transparent mt-4 theme-paragraph-heading ">
          {t("viewOccupation")}
        </Button>
      </Card>
    </div>
  );
};

const TechnicalExpertise = () => {
  const { t } = useTranslation();

  return (
    <Container id ="skills" className="max-w-7xl mx-auto py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <View className="text-center mb-12 sm:mb-16">
        <View className="inline-flex items-center gap-2 mb-1">
          <Span className="h-px w-8  theme_section_main_heading_dash" />

          <Span
            className="uppercase tracking-widest text-amber-400 font-mono font-bold text-3xl  theme_section_main_heading"
            style={{ letterSpacing: "0.35em" }}
          >
            {t("techExpertiseLabel")}
          </Span>

          <Span className="h-px w-8  theme_section_main_heading_dash" />
        </View>

        <H2  className="mt-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight">
          <Span
            className="font-serif italic font-light ta-heading-shine"
            data-text={t("techEngineeringWord")}
          >
            {t("techEngineeringWord")}
          </Span>

          <span className="inline-block w-3 sm:w-4" />

          <Span
            className="font-sans font-bold not-italic ta-heading-shine"
            data-text={t("techExcellenceWord")}
          >
            {t("techExcellenceWord")}
          </Span>
        </H2>

        <Text className="mt-5 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg theme_section_paragraph leading-7 lg:leading-8 px-2 font-light tracking-wide">
          <Trans i18nKey="techTagline">
            Building{" "}
            <Span className="font-serif italic theme_section_paragraph_highlight">
              scalable enterprise software
            </Span>{" "}
            through modern{" "}
            <Span className="font-serif italic theme_section_paragraph_highlight">
              architecture and distributed systems
            </Span>
            , integrating{" "}
            <Span className="font-serif italic theme_section_paragraph_highlight">
              AI-driven solutions
            </Span>
            , and delivering{" "}
            <Span className="font-serif italic theme_section_paragraph_highlight_secondary">
              production-ready engineering
            </Span>{" "}
            that powers real-world business operations.
          </Trans>
        </Text>
      </View>

      <View
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-4
        gap-5
        sm:gap-6
        "
      >
        {TECHNICAL_EXPERTISE.map((item, index) => (
                 <Reveal
                                            key={item.id}
                                            variant="rotate"
                                            preset="smooth"
                                            duration={0.6}
                                            margin="0px 0px -12% 0px" // Trigger slightly before full entry to maintain 60 FPS scroll velocity
                                          >
          <ExpertiseCard key={item.id} item={item} index={index} />
          </Reveal>
        ))}
      </View>
    </Container>
  );
};

export default TechnicalExpertise;