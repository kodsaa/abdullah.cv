import { useRef, useState, useEffect } from "react";
import { Container, H2, Span, Text, View } from "strivui";
import { useTranslation } from "react-i18next";

// Testimonial images import
import testimonial1Initials from "../Testimonials-images/testimonial1Initials.png";
import testimonial2Initials from "../Testimonials-images/testimonial2Initials.png";
import testimonial3Initials from "../Testimonials-images/testimonial3Initials.png";
import testimonial4Initials from "../Testimonials-images/testimonial4Initials.png";
import testimonial5Initials from "../Testimonials-images/testimonial5Initials.png";
import testimonial6Initials from "../Testimonials-images/testimonial6Initials.png";
import testimonial7Initials from "../Testimonials-images/testimonial7Initials.png";
import testimonial8Initials from "../Testimonials-images/testimonial8Initials.png";
import testimonial9Initials from "../Testimonials-images/testimonial9Initials.png";
import testimonial10Initials from "../Testimonials-images/testimonial10Initials.png";

interface Testimonial {
  name: string;
  title: string;
  relation: string;
  message: string;
  initials: string; // ab yeh image path store karega
}

const LINKEDIN_RECOMMENDATIONS_URL =
  "https://www.linkedin.com/in/syed-abdullah-ali380/details/recommendations/";

const MESSAGE_TRUNCATE_LENGTH = 220;

const TESTIMONIALS: Testimonial[] = [
  {
    name: "testimonial1Name",
    title: "testimonial1Title",
    relation: "testimonial1Relation",
    message: "testimonial1Message",
    initials: testimonial1Initials,
  },
  {
    name: "testimonial2Name",
    title: "testimonial2Title",
    relation: "testimonial2Relation",
    message: "testimonial2Message",
    initials: testimonial2Initials,
  },
  {
    name: "testimonial3Name",
    title: "testimonial3Title",
    relation: "testimonial3Relation",
    message: "testimonial3Message",
    initials: testimonial3Initials,
  },
  {
    name: "testimonial4Name",
    title: "testimonial4Title",
    relation: "testimonial4Relation",
    message: "testimonial4Message",
    initials: testimonial4Initials,
  },
  {
    name: "testimonial5Name",
    title: "testimonial5Title",
    relation: "testimonial5Relation",
    message: "testimonial5Message",
    initials: testimonial5Initials,
  },
  {
    name: "testimonial6Name",
    title: "testimonial6Title",
    relation: "testimonial6Relation",
    message: "testimonial6Message",
    initials: testimonial6Initials,
  },
  {
    name: "testimonial7Name",
    title: "testimonial7Title",
    relation: "testimonial7Relation",
    message: "testimonial7Message",
    initials: testimonial7Initials,
  },
  {
    name: "testimonial8Name",
    title: "testimonial8Title",
    relation: "testimonial8Relation",
    message: "testimonial8Message",
    initials: testimonial8Initials,
  },
  {
    name: "testimonial9Name",
    title: "testimonial9Title",
    relation: "testimonial9Relation",
    message: "testimonial9Message",
    initials: testimonial9Initials,
  },
  {
    name: "testimonial10Name",
    title: "testimonial10Title",
    relation: "testimonial10Relation",
    message: "testimonial10Message",
    initials: testimonial10Initials,
  },
];

const Testimonials = () => {
  const { t } = useTranslation();
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

  const goToLinkedIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(LINKEDIN_RECOMMENDATIONS_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <Container className="max-w-7xl mx-auto py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <View className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 sm:mb-14">
        <View>
          <View className="inline-flex items-center gap-2 mb-2">
            <Span
              className="h-px w-8  theme_section_main_heading_dash"
              
            />
            <Span
              className="uppercase tracking-widest text-amber-400 font-mono font-bold text-xs sm:text-sm  theme_section_main_heading"
              style={{ letterSpacing: "0.35em" }}
            >
              {t("testimonialsLabel")}
            </Span>
          </View>

          <H2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
            <Span
              className="font-serif italic font-light ta-heading-shine"
              data-text = {t("testimonialsHeadingLine1")}
            >
              {t("testimonialsHeadingLine1")}
            </Span>
            <br />
            <Span
              className="font-sans font-bold not-italic ta-heading-shine"
              data-text = {t("testimonialsHeadingLine2")}
            >
              {t("testimonialsHeadingLine2")}
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
          {TESTIMONIALS.map((item) => {
            const fullMessage = t(item.message);
            const isLong = fullMessage.length > MESSAGE_TRUNCATE_LENGTH;
            const displayMessage = isLong
              ? `${fullMessage.slice(0, MESSAGE_TRUNCATE_LENGTH).trimEnd()}… `
              : fullMessage;

            return (
              <div className="tw-card" key={item.name}>
                <span className="tw-quote-mark">"</span>

                <div className="tw-card-top">
                  <div className="tw-avatar">
                    <img
                      src={item.initials}
                      alt={t(item.name)}
                      className="tw-avatar-img"
                    />
                  </div>
                  <div className="tw-head-text">
                    <div className="tw-name-row">
                      <span className="tw-name">{t(item.name)}</span>
                      <span className="tw-verified">✓</span>
                    </div>
                    <span className="tw-title">{t(item.title)}</span>
                  </div>
                </div>

                <p className="tw-message">
                  {displayMessage}
                  {isLong && (
                    <span className="tw-read-more" onClick={goToLinkedIn}>
                      {t("readMore") || "Read more"}
                    </span>
                  )}
                </p>

                <span className="tw-relation">— {t(item.relation)}</span>
              </div>
            );
          })}
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