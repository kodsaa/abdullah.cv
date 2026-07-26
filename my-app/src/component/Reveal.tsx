import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type Variant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom"
  | "rotate"
  | "blur";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  variant?: Variant;
  once?: boolean;

  // 0.8 = animate when element reaches 80% viewport height
  triggerPoint?: number;
}

const hiddenStyles: Record<Variant, React.CSSProperties> = {
  "fade-up": {
    opacity: 0,
    transform: "translateY(80px)",
  },

  "fade-down": {
    opacity: 0,
    transform: "translateY(-80px)",
  },

  "fade-left": {
    opacity: 0,
    transform: "translateX(-80px)",
  },

  "fade-right": {
    opacity: 0,
    transform: "translateX(80px)",
  },

  zoom: {
    opacity: 0,
    transform: "scale(.85)",
  },

  rotate: {
    opacity: 0,
    transform: "rotate(-8deg) scale(.9)",
  },

  blur: {
    opacity: 0,
    filter: "blur(12px)",
  },
};

const visibleStyle: React.CSSProperties = {
  opacity: 1,
  transform: "translateX(0) translateY(0) scale(1) rotate(0deg)",
  filter: "blur(0px)",
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 700,
  variant = "fade-up",
  once = true,
  triggerPoint = 0.8,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();

      const trigger = window.innerHeight * triggerPoint;

      if (rect.top <= trigger) {
        setVisible(true);
      } else if (!once) {
        setVisible(false);
      }
    };

    checkVisibility();

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          checkVisibility();
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    window.addEventListener("resize", checkVisibility);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", checkVisibility);
    };
  }, [once, triggerPoint]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...(visible ? visibleStyle : hiddenStyles[variant]),

        transition: `
          opacity ${duration}ms cubic-bezier(.22,1,.36,1),
          transform ${duration}ms cubic-bezier(.22,1,.36,1),
          filter ${duration}ms cubic-bezier(.22,1,.36,1)
        `,

        transitionDelay: `${delay}ms`,

        willChange: "transform, opacity, filter",
      }}
    >
      {children}
    </div>
  );
}