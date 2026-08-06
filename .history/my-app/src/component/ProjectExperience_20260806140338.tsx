"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { useTranslation } from "react-i18next";
import { Button, Card, Container, H2, H3, Span, View, Badge } from "strivui";
import {
  ERPIcon,
  CRMPlatformIcon,
  AIPoweredIcon,
  RealtimeMarketplaceIcon,
} from "../icon/icon";

interface Project {
  title: string;
  icon: ReactNode;
  description: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: "project1Title",
    icon: <ERPIcon className="h-8 w-8 theme-icon" />,
    description:
     "project1Desc",
    technologies: ["React", "Django", "FastAPI", "PostgreSQL", "Redis", "Docker"],
  },
  {
    title: "project2Title",
    icon: <AIPoweredIcon className="h-8 w-8 theme-icon" />,
    description:
      "project2Desc",
    technologies: ["React", "Node.js", "MongoDB", "AI", "React Native", "Stripe"],
  },
  {
    title: "project3Title",
    icon: <CRMPlatformIcon className="h-8 w-8 theme-icon" />,
    description:
      "project3Desc",
    technologies: ["React", "Node", "MongoDB", "Redis", "Socket.io"],
  },
  {
    title: "project4Title",
    icon: <RealtimeMarketplaceIcon className="h-8 w-8 theme-icon" />,
    description:
      "project4Desc",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
  },
];

// Scroll-reveal: adds .pe-in-view the first time the card enters the
// viewport, matching the .pe-reveal CSS transition below.
const useRevealOnView = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
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
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, visible] as const;
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
   const { t } = useTranslation();
  const [ref, visible] = useRevealOnView();

  // Combines a subtle 3D tilt with a cursor-tracked spotlight: the
  // card leans toward the pointer, and a soft amber glow follows it
  // underneath the surface — the one bold interactive moment here.
  const handleMouseMove = (event: ReactMouseEvent<HTMLDivElement>) => {
    const el = event.currentTarget;
    const bounds = el.getBoundingClientRect();
    const px = (event.clientX - bounds.left) / bounds.width;
    const py = (event.clientY - bounds.top) / bounds.height;

    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
    el.style.transform = `perspective(1000px) rotateX(${(py - 0.5) * -6}deg) rotateY(${(px - 0.5) * 6}deg) translateY(-6px)`;
  };

  const handleMouseLeave = (event: ReactMouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
  };

  return (
    <div
      ref={ref}
      className={`pe-reveal ${visible ? "pe-in-view" : ""}`}
      style={{ transitionDelay: visible ? `${index * 120}ms` : "0ms" }}
    >
      <div
        className="pe-card-outer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Card className="pe-card">
          <span className="pe-spotlight" />
          <span className="pe-accent-bar" />

          <View className="pe-card-top">
            <View className="pe-icon">{project.icon}</View>
            <Span className="pe-tag">{t("enterprise")}</Span>
          </View>

          <H3 className="pe-card-title">{t(project.title)}</H3>

         <Span className="pe-card-desc">{t(project.description)}</Span>

          <View className="pe-badges">
            {project.technologies.map((tech, techIndex) => (
              <Badge
                key={tech}
                className="pe-badge"
                style={{ ["--i" as string]: techIndex }}
              >
                {tech}
              </Badge>
            ))}
          </View>

          <Button className="pe-cta">
            {t("viewArchitecture")} <span className="pe-cta-arrow">→</span>
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default function ProjectExperience() {
   const { t } = useTranslation();
  return (
    <Container id="projects" className="max-w-7xl py-28">
      {/*
        Plain CSS, no Tailwind — injected once via a <style> tag so
        this whole section stays a single self-contained file.
        Palette matches the rest of the site: amber/orange accents on
        stone-900/black, no off-theme hues.
      */}
     

    <View className="text-center mb-12 sm:mb-16">
  <View className="inline-flex items-center gap-2 mb-1">
    <Span
            className="h-px w-8 theme_section_main_heading_dash"
          />

    <Span
      className="uppercase tracking-widest text-amber-400 font-mono font-bold text-3xl  theme_section_main_heading"
      style={{ letterSpacing: "0.35em" }}
    >
      {t("portfolio")}
    </Span>
    

    <Span
            className="h-px w-8 theme_section_main_heading_dash"
          />
  </View>

  <H2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight">
    <Span
      className="font-serif italic font-light ta-heading-shine"
      data-text="Selected Project"
    >
      {t("selectedProject")}
    </Span>

    <span className="inline-block w-3 sm:w-4" />

    <Span
      className="font-sans font-bold not-italic ta-heading-shine"
      data-text="Experience"
    >
     {t("experienceWord")}
    </Span>
  </H2>

  <Span className="mt-6 block text-base sm:text-lg  max-w-3xl mx-auto leading-relaxed theme_section_paragraph">
    {t("projectsSectionTagline")}
  </Span>
</View>

      <View className="pe-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </View>
    </Container>
  );
}