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
} from "../icon/icon";

interface ExpertiseItem {
  icon: ReactNode;
  title: string;
  description: string;
  skills: string[];
}

const TECHNICAL_EXPERTISE: ExpertiseItem[] = [
  {
    icon: <CodeIcon className="h-8 w-8 text-orange-500" />,
    title: "Programming Languages",
    description: "High-performance application development with modern and low-level languages.",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "C",
      "OOP",
      "Async Programming",
      "Memory Management",
      "Performance Profiling",
    ],
  },
  {
    icon: <ReactIcon className="h-8 w-8 text-orange-500" />,
    title: "Frontend Engineering",
    description: "Modern React ecosystem with enterprise-scale frontend architecture.",
    skills: [
      "React",
      "Next.js",
      "React Native",
      "Redux Toolkit",
      "RTK Query",
      "React Query",
      "Tailwind CSS",
      "StrivUI",
    ],
  },
  {
    icon: <BackendIcon className="h-8 w-8 text-orange-500" />,
    title: "Backend Engineering",
    description: "Scalable backend services and enterprise application architecture.",
    skills: [
      "Django",
      "FastAPI",
      "Flask",
      "Node.js",
      "Express",
      "REST API",
      "GraphQL",
      "JWT",
      "RBAC",
    ],
  },
  {
    icon: <DatabaseIcon className="h-8 w-8 text-orange-500" />,
    title: "Databases",
    description: "SQL & NoSQL databases with optimization and scaling strategies.",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "MySQL",
      "Firebase",
      "Indexing",
      "Aggregation",
      "Replication",
    ],
  },
  {
    icon: <SystemDesignIcon className="h-8 w-8 text-orange-500" />,
    title: "System Design",
    description: "Enterprise architecture, distributed systems and scalable infrastructure.",
    skills: [
      "Microservices",
      "Distributed Systems",
      "Load Balancing",
      "Caching",
      "Queues",
      "Clean Architecture",
      "SOLID",
      "Design Patterns",
    ],
  },
  {
    icon: <RobotIcon className="h-8 w-8 text-orange-500" />,
    title: "AI & Machine Learning",
    description: "Building intelligent applications powered by modern AI.",
    skills: ["OpenAI", "LangChain", "LangGraph", "PyTorch", "TensorFlow", "LLMs", "RAG", "AI Agents"],
  },
  {
    icon: <CloudIcon className="h-8 w-8 text-orange-500" />,
    title: "Cloud & DevOps",
    description: "Production deployments with CI/CD and containerized infrastructure.",
    skills: ["Docker", "Kubernetes", "GitHub Actions", "AWS", "Nginx", "PM2", "Cloudflare", "CI/CD"],
  },
  {
    icon: <RealtimeIcon className="h-8 w-8 text-orange-500" />,
    title: "Real-Time Systems",
    description: "Low-latency communication and streaming platforms.",
    skills: ["WebRTC", "Socket.io", "WebSockets", "Pusher", "Streaming", "Real-Time Sync"],
  },
];

import { Button, Card, Container, H2, H3, Span, Text, View } from "strivui";

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
    ? `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-10px) scale(1.015)`
    : "perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)";

  // Fast response while the cursor is actively moving over the card,
  // but a slower, softer glide back to flat once it leaves — this is
  // what makes a tilt effect feel fluid instead of rubbery.
  const transformSpeedClass = isHovering ? "duration-150" : "duration-500";

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
        className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        bg-stone-900
        p-6
        sm:p-7
        transition-transform
        ${transformSpeedClass}
        ease-out
        will-change-transform
        hover:border-amber-500
        hover:shadow-[0_20px_50px_rgba(245,158,11,.15)]
        `}
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

          <H3 className="text-lg sm:text-xl font-serif text-amber-100 leading-snug">
            {item.title}
          </H3>
        </View>

        <Text className="text-stone-400 text-sm leading-7 mb-6">
          {item.description}
        </Text>

        <View className="flex flex-wrap gap-2">
          {item.skills.map((skill: string, skillIndex: number) => (
            <Button
              key={skill}
              className="
              rounded-full
              border
              border-amber-800/40
              bg-amber-600
              px-3
              py-1.5
              text-xs
              transition-all
              duration-300
              hover:bg-amber-500
              hover:text-black
              hover:scale-105
              hover:animate-pop
              "
              style={{
                transitionDelay: `${index * 90 + 200 + skillIndex * 35}ms`,
              }}
            >
              {skill}
            </Button>
          ))}
        </View>
      </Card>
    </div>
  );
};

const TechnicalExpertise = () => {
  return (
    <Container id="skills" className="max-w-7xl mx-auto py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <View className="text-center mb-12 sm:mb-16">
        <Span className="uppercase tracking-[0.4em] text-amber-500 font-mono text-xs sm:text-sm">
          Technical Expertise
        </Span>

        <H2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-serif text-amber-100">
          Engineering Excellence
        </H2>

        <Text className="mt-5 max-w-3xl mx-auto text-stone-400 leading-7 sm:leading-8 text-sm sm:text-base px-2">
          Building scalable enterprise software through modern architecture,
          distributed systems, AI integration, and production-ready engineering.
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