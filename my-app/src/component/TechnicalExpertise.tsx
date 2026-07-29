"use client";

import { useEffect, useRef, useState, type ReactNode, type RefObject, type MouseEvent as ReactMouseEvent } from "react";
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
  icon: ReactNode;
  title: string;
  description: string;
  skills: {label:string,icon:ReactNode}[];
}

const TECHNICAL_EXPERTISE: ExpertiseItem[] = [
  {
    icon: <CodeIcon className="h-8 w-8 text-orange-500" />,
    title: "Programming Languages",
    description:
      "High-performance application development with modern and low-level languages.",
    skills: [
      { label: "JavaScript", icon: <JavaScriptIcon className="h-5 w-5 text-orange-500" /> },
      { label: "TypeScript", icon: <TypeScriptIcon className="h-5 w-5 text-orange-500" /> },
      { label: "Python", icon: <PythonIcon className="h-5 w-5 text-orange-500" /> },
      { label: "C", icon: "" },
      { label: "OOP", icon: <OOPIcon className="h-5 w-5 text-orange-500" /> },
      { label: "Async Programming", icon: <AsyncProgrammingIcon className="h-5 w-5 text-orange-500" /> },
      { label: "Memory Management", icon: <MemoryManagementIcon className="h-5 w-5 text-orange-500" /> },
      { label: "Performance Profiling", icon: <PerformanceProfilingIcon className="h-5 w-5 text-orange-500" /> },
    ],
  },
  {
    icon: <ReactIcon className="h-8 w-8 text-orange-500" />,
    title: "Frontend Engineering",
    description:
      "Modern React ecosystem with enterprise-scale frontend architecture.",
    skills: [
      { label: "React", icon: <ReactComponentIcon className="h-5 w-5 text-orange-500" /> },
      { label: "Next.js", icon: <NextjsIcon className="h-5 w-5 text-orange-500" /> },
      { label: "React Native", icon: "" },
      { label: "Redux Toolkit", icon: "" },
      { label: "RTK Query", icon: "" },
      { label: "React Query", icon: "" },
      { label: "Tailwind CSS", icon: <TailwindCSSIcon className="h-5 w-5 text-orange-500" /> },
      { label: "StrivUI", icon: "" },
    ],
  },
  {
    icon: <BackendIcon className="h-8 w-8 text-orange-500" />,
    title: "Backend Engineering",
    description:
      "Scalable backend services and enterprise application architecture.",
    skills: [
      { label: "Django", icon: "" },
      { label: "FastAPI", icon: "" },
      { label: "Flask", icon: <FlaskIcon className="h-5 w-5 text-orange-500" /> },
      { label: "Node.js", icon: <NodeJSIcon className="h-5 w-5 text-orange-500" /> },
      { label: "Express", icon: "" },
      { label: "REST API", icon: "" },
      { label: "GraphQL", icon: "" },
      { label: "JWT", icon: "" },
      { label: "RBAC", icon: "" },
    ],
  },
  {
    icon: <DatabaseIcon className="h-8 w-8 text-orange-500" />,
    title: "Databases",
    description:
      "SQL & NoSQL databases with optimization and scaling strategies.",
    skills: [
      { label: "PostgreSQL", icon: "" },
      { label: "MongoDB", icon: <MongoDBIcon className="h-5 w-5 text-orange-500" /> },
      { label: "Redis", icon: "" },
      { label: "MySQL", icon: <MySQLIcon className="h-5 w-5 text-orange-500" /> },
      { label: "Firebase", icon: <FirebaseIcon className="h-5 w-5 text-orange-500" /> },
      { label: "Indexing", icon: "" },
      { label: "Aggregation", icon: "" },
      { label: "Replication", icon: "" },
    ],
  },
  {
    icon: <SystemDesignIcon className="h-8 w-8 text-orange-500" />,
    title: "System Design",
    description:
      "Enterprise architecture, distributed systems and scalable infrastructure.",
    skills: [
      { label: "Microservices", icon: "" },
      { label: "Distributed Systems", icon: "" },
      { label: "Load Balancing", icon: "" },
      { label: "Caching", icon: "" },
      { label: "Queues", icon: "" },
      { label: "Clean Architecture", icon: "" },
      { label: "SOLID", icon: "" },
      { label: "Design Patterns", icon: "" },
    ],
  },
  {
    icon: <RobotIcon className="h-8 w-8 text-orange-500" />,
    title: "AI & Machine Learning",
    description:
      "Building intelligent applications powered by modern AI.",
    skills: [
      { label: "OpenAI", icon: <OpenAIIcon className="h-5 w-5 text-orange-500" /> },
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
    icon: <CloudIcon className="h-8 w-8 text-orange-500" />,
    title: "Cloud & DevOps",
    description:
      "Production deployments with CI/CD and containerized infrastructure.",
    skills: [
      { label: "Docker", icon: "" },
      { label: "Kubernetes", icon: "" },
      { label: "GitHub Actions", icon: <GithubActionIcon className="h-5 w-5 text-orange-500" /> },
      { label: "AWS", icon: "" },
      { label: "Nginx", icon: "" },
      { label: "PM2", icon: "" },
      { label: "Cloudflare", icon: <CloudflareIcon className="h-5 w-5 text-orange-500" /> },
      { label: "CI/CD", icon: "" },
    ],
  },
  {
    icon: <RealtimeIcon className="h-8 w-8 text-orange-500" />,
    title: "Real-Time Systems",
    description:
      "Low-latency communication and streaming platforms.",
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
import { Badge, Button, Card, Container, H2, H3, Modal, Span, Text, View } from "strivui";
import SkillCloud3D from "../pages/SkillCloud3D";
import { useNavigate } from "react-router-dom";

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
  const [ref, visible] = useRevealOnView();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const navigate =  useNavigate()

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
      className={`transition-all duration-700 ease-out ${
        visible ? `${slideAnimation} animate-delay-${delayStep}` : "opacity-0"
      }`}
    >
      <Card
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={handleMouseLeave}
        style={{ transform: cardTransform }}
        className="
        group
        relative
        overflow-hidden
        rounded-3xl
        bg-stone-900
        p-6
        sm:p-7
        transition-transform
        duration-300
        ease-out
        will-change-transform
        hover:border-amber-500
        hover:shadow-[0_20px_50px_rgba(245,158,11,.15)]
        "
      >
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
            group-hover:scale-110
            group-hover:rotate-6
            "
          >
            {item.icon}
          </View>

      
              <H3
          style={{
            lineHeight: 1.2,
          }}
          className="font-serif m-0 p-0 text-amber-200 font-normal"
        >
          {item.title}
        </H3>
        </View>

        <Text className="text-stone-200 text-sm leading-7 mb-6">
          {item.description}
        </Text>

        <View className="flex flex-wrap gap-2">
          {item.skills.map((skill: {label:string,icon:ReactNode}, skillIndex: number) => (
            <Badge

              key={skill.label}
              className="
              rounded-full
              border
              border-amber-300
              text-amber-300
              px-3
              py-2
              text-xs
              transition-all
              duration-300
              bg-transparent
              hover:bg-amber-500
              hover:text-black
              hover:scale-105
              hover:animate-pop
              "
              style={{
                transitionDelay: `${index * 90 + 200 + skillIndex * 35}ms`,
              }}
            >
              {skill.icon}  {skill.label}
            </Badge>
          ))}
        </View>
        <Button onClick={() => navigate(`/skill/${item.title}`)} className="bg-transparent mt-4 text-amber-500 "> View Occupation →</Button>
      </Card>
    </div>
  );
};

const TechnicalExpertise = () => {
  return (
    <Container className="max-w-7xl mx-auto py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <View className="text-center mb-12 sm:mb-16">

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
           Technical Expertise
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
            Engineering Excellence
          </Span>
      
        </H2>


     <Text className="mt-5 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg text-stone-400 leading-7 lg:leading-8 px-2 font-light tracking-wide">
  Building{" "}
  <Span className="font-serif italic text-stone-200">
    scalable enterprise software
  </Span>{" "}
  through modern{" "}
  <Span className="font-serif italic text-stone-200">
    architecture and distributed systems
  </Span>
  , integrating{" "}
  <Span className="font-serif italic text-stone-200">
    AI-driven solutions
  </Span>
  , and delivering{" "}
  <Span className="font-serif italic text-amber-200">
    production-ready engineering
  </Span>{" "}
  that powers real-world business operations.
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
          <ExpertiseCard key={item.title} item={item} index={index} />
        ))}
      </View>
    </Container>
  );
};

export default TechnicalExpertise;