import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  motion,
  useInView,
  type Variants,
  type Transition,
  type TargetAndTransition,
} from "motion/react";

type Variant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom"
  | "rotate"
  | "blur"
  | "glitch"
  | "flip-3d"
  | "glow";

type Presets = "smooth" | "bouncy" | "snappy" | "heavy";

type InViewOptions = NonNullable<Parameters<typeof useInView>[1]>;

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  variant?: Variant;
  preset?: Presets;
  staggerChildren?: number;

  /**
   * Re-trigger animation every time the element enters view.
   * Default: false
   */
  once?: boolean;

  /** IntersectionObserver margin */
  margin?: InViewOptions["margin"];

  /** Mount children only after first intersection */
  lazy?: boolean;
}

const easings: Record<Presets, Transition> = {
  smooth: { ease: [0.16, 1, 0.3, 1] },
  bouncy: { type: "spring", stiffness: 300, damping: 15 },
  snappy: { ease: [0.87, 0, 0.13, 1] },
  heavy: { type: "spring", stiffness: 100, damping: 20, mass: 1.5 },
};

const baseVariants: Record<Variant, Variants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 100, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  "fade-down": {
    hidden: { opacity: 0, y: -100, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  "fade-left": {
    hidden: { opacity: 0, x: -100, rotateY: 15 },
    visible: { opacity: 1, x: 0, rotateY: 0 },
  },
  "fade-right": {
    hidden: { opacity: 0, x: 100, rotateY: -15 },
    visible: { opacity: 1, x: 0, rotateY: 0 },
  },
  zoom: {
    hidden: { opacity: 0, scale: 0.6 },
    visible: { opacity: 1, scale: 1 },
  },
  rotate: {
    hidden: { opacity: 0, rotate: -18, scale: 0.8 },
    visible: { opacity: 1, rotate: 0, scale: 1 },
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(20px)", scale: 1.1 },
    visible: { opacity: 1, filter: "blur(0px)", scale: 1 },
  },
  "flip-3d": {
    hidden: { opacity: 0, rotateX: 90, y: 40 },
    visible: { opacity: 1, rotateX: 0, y: 0 },
  },
  glow: {
    hidden: {
      opacity: 0,
      scale: 0.9,
      boxShadow: "0px 0px 0px rgba(0,255,255,0)",
      filter: "brightness(0.5)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      boxShadow: "0px 0px 30px rgba(0,255,255,0.4)",
      filter: "brightness(1)",
    },
  },
  glitch: {
    hidden: { opacity: 0, x: -20, skewX: 20, filter: "invert(100%)" },
    visible: {
      opacity: [0.2, 0.8, 0.4, 1],
      x: [-10, 15, -5, 0],
      skewX: [-15, 10, -5, 0],
      filter: "invert(0%)",
    },
  },
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  variant = "fade-up",
  preset = "smooth",
  staggerChildren = 0,
  once = false, // Set to false so it re-animates on every intersection
  margin = "0px 0px -10% 0px",
  lazy = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin });
  const [mounted, setMounted] = useState(!lazy);

  useEffect(() => {
    if (isInView && !mounted) {
      setMounted(true);
    }
  }, [isInView, mounted]);

  const selectedEasing = easings[preset];

  const transitionConfig: Transition = {
    ...selectedEasing,
    delay,
    staggerChildren,
    ...(selectedEasing.type !== "spring" ? { duration } : {}),
  };

  const activeVariant = baseVariants[variant];

  const componentVariants: Variants = {
    hidden: activeVariant.hidden,
    visible: {
      ...(activeVariant.visible as TargetAndTransition),
      transition: transitionConfig,
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`w-full ${className}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={componentVariants}
      style={{
        perspective: 1200,
        willChange: "transform, opacity, filter",
      }}
    >
      {mounted ? children : null}
    </motion.div>
  );
}