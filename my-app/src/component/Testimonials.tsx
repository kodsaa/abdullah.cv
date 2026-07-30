import { useRef, useState, useEffect } from "react";
import { Container, H2, Span, Text, View } from "strivui";

interface Testimonial {
  name: string;
  title: string;
  relation: string;
  message: string;
  initials: string;
}
  
const TESTIMONIALS: Testimonial[] = [
  {
    name: "Veeramreddy Amarnathreddy",
    title: "Senior React-native and React js developer | Software engineer",
    relation: "Syed Abdullah was senior to Veeramreddy",
    message:
      "I had the opportunity to work with Syed Abdullah on the NESMA Mobile Application project. He is a highly skilled and dedicated software engineer with strong knowledge across multiple technologies. His ability to quickly understand new requirements and deliver high-quality solutions makes him a valuable member of any development team.",
    initials: "VA",
  },
  {
    name: "Sivakumar Ponnambalam",
    title: "Frontend Developer | React Js | React Native | Node Js | Express Js",
    relation: "Sivakumar was senior to Syed Abdullah",
    message:
      "I had a great experience working with Syed. He's a skilled developer who consistently delivers quality work and is always ready to help the team. His technical knowledge, positive attitude, and dedication make him a valuable teammate.",
    initials: "SP",
  },
  {
    name: "Janmejaya Jena",
    title: "Full Stack Developer | React.js | React Native | Node.js | MongoDB",
    relation: "Syed Abdullah was senior to Janmejaya",
    message:
      "It was really great working with Syed Abdullah Ali in the same team. He has good technical knowledge, is always supportive, and is ready to help whenever needed. I really enjoyed collaborating with him.",
    initials: "JJ",
  },
  {
    name: "Rehan Khan",
    title: "Team Lead | Senior Data and Content Research Analyst",
    relation: "Worked with Syed Abdullah on the same team",
    message:
      "I know Syed Abdullah as a hard working individual who prioritizes work over other things. He is always eager to learn new tools and I found him to be really honest.",
    initials: "RK",
  },
  {
    name: "Navanit Vishwakarma",
    title: "Frontend Developer (React.js • Next.js) | MERN Stack",
    relation: "Worked with Syed Abdullah on the same team",
    message:
      "I had the privilege of working under Abdullah's leadership at Adiya Business Solution. An outstanding team leader, guiding us with clarity, professionalism, and strong technical expertise. His problem-solving skills consistently ensured success.",
    initials: "NV",
  },
  {
    name: "Murtaza Shaikh",
    title: "@Rootex",
    relation: "Murtaza and Syed Abdullah studied together",
    message:
      "I've had the pleasure of seeing Abdullah in action as a developer. His problem-solving skills, attention to detail, and dedication to writing clean, efficient code are truly impressive.",
    initials: "MS",
  },
  {
    name: "Mujeeb Ansari",
    title: "Full Stack Developer | Specializing in AI Integrated Solutions",
    relation: "Mujeeb worked with Syed Abdullah but on different teams",
    message:
      "I had the pleasure of working with Abdullah at NexgenDev. I was consistently impressed by his strong grasp of front-end development and his eagerness to keep learning new technologies. A reliable teammate who communicates clearly.",
    initials: "MA",
  },
  {
    name: "Umyma Syed",
    title: "Frontend Developer | React.js • Next.js • TypeScript",
    relation: "Syed Abdullah was senior to Umyma",
    message:
      "I've had the privilege of knowing Syed Abdullah Ali in both professional and personal capacities. Whether as a Full-Stack Engineer, Team Lead, or Project Manager, he has always carried himself with integrity, responsibility, and vision.",
    initials: "US",
  },
];

const Testimonials = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const getStep = () => {
    const el = trackRef.current;
    if (!el || !el.firstElementChild) return 320;
    const card = el.firstElementChild as HTMLElement;
    const gap = parseFloat(getComputedStyle(el).columnGap || "24");
    return card.offsetWidth + gap;
  };

  const updateScrollState = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
    setActiveIndex(Math.round(el.scrollLeft / getStep()));
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scrollByCard = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: getStep() * dir, behavior: "smooth" });
  };

  const scrollToIndex = (i: number) => {
    trackRef.current?.scrollTo({ left: getStep() * i, behavior: "smooth" });
  };

  // drag to scroll
  const isDown = useRef(false);
  const startX = useRef(0);
  const startLeft = useRef(0);

  const onPointerDown = (e: React.MouseEvent) => {
    const el = trackRef.current;
    if (!el) return;
    isDown.current = true;
    el.classList.add("tw-dragging");
    startX.current = e.pageX;
    startLeft.current = el.scrollLeft;
  };

  const onPointerMove = (e: React.MouseEvent) => {
    if (!isDown.current || !trackRef.current) return;
    const dx = e.pageX - startX.current;
    trackRef.current.scrollLeft = startLeft.current - dx;
  };

  const onPointerUp = () => {
    isDown.current = false;
    trackRef.current?.classList.remove("tw-dragging");
  };

  return (
    <Container className="max-w-7xl mx-auto py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <View className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 sm:mb-14">
        <View>
          <View className="inline-flex items-center gap-2 mb-2">
            <Span
              className="h-px w-8"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(245,158,11,0.7))",
              }}
            />
            <Span
              className="uppercase tracking-widest text-amber-400 font-mono font-bold text-xs sm:text-sm"
              style={{ letterSpacing: "0.35em" }}
            >
              Testimonials
            </Span>
          </View>

          <H2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
            <Span
              className="font-serif italic font-light ta-heading-shine"
              data-text="Don't take my"
            >
              Don't take my
            </Span>
            <br />
            <Span
              className="font-sans font-bold not-italic ta-heading-shine"
              data-text="word for it."
            >
              word for it.
            </Span>
          </H2>
        </View>

        <View className="flex items-center gap-3 self-start sm:self-auto">
          <button
            className="tw-nav-btn"
            onClick={() => scrollByCard(-1)}
            disabled={!canScrollLeft}
            aria-label="Previous"
            type="button"
          >
            ←
          </button>
          <button
            className="tw-nav-btn tw-nav-btn--primary"
            onClick={() => scrollByCard(1)}
            disabled={!canScrollRight}
            aria-label="Next"
            type="button"
          >
            →
          </button>
        </View>
      </View>

      <div className="tw-viewport">
        <div
          ref={trackRef}
          className="tw-track"
          onMouseDown={onPointerDown}
          onMouseMove={onPointerMove}
          onMouseUp={onPointerUp}
          onMouseLeave={onPointerUp}
        >
          {TESTIMONIALS.map((item) => (
            <div className="tw-card" key={item.name}>
              <span className="tw-quote-mark">"</span>

              <div className="tw-card-top">
                <div className="tw-avatar">{item.initials}</div>
                <div className="tw-head-text">
                  <div className="tw-name-row">
                    <span className="tw-name">{item.name}</span>
                    <span className="tw-verified">✓</span>
                  </div>
                  <span className="tw-title">{item.title}</span>
                </div>
              </div>

              <p className="tw-message">{item.message}</p>

              <span className="tw-relation">— {item.relation}</span>
            </div>
          ))}
        </div>
      </div>

      <View className="tw-dots">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`tw-dot ${i === activeIndex ? "tw-dot--active" : ""}`}
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </View>
    </Container>
  );
};

export default Testimonials;