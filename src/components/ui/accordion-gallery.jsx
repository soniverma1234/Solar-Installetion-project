import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const defaultItems = [
  {
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=85",
    label: "Residential rooftop solar",
    alt: "Solar panels on a residential roof",
    link: "/contact",
  },
  {
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1400&q=85",
    label: "Commercial solar rooftops",
    alt: "Large rooftop solar installation",
    link: "/contact",
  },
  {
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1400&q=85",
    label: "Utility-scale solar farms",
    alt: "Rows of panels at a utility-scale solar farm",
    link: "/contact",
  },
  {
    image:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=1400&q=85",
    label: "Solar with battery storage",
    alt: "Renewable energy panels beneath a bright sky",
    link: "/contact",
  },
  {
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=85",
    label: "Community solar projects",
    alt: "Clean energy infrastructure in a green landscape",
    link: "/contact",
  },
];

function AccordionGallery({
  items = defaultItems,
  defaultIndex = 2,
  accentColor = "#D6E5B5",
  overlayColor = "#102E2A",
  textColor = "#FFFFFF",
  height = 460,
  gap = 10,
  radius = 16,
  expandRatio = 0.52,
  duration = 0.6,
  ease = "power3.out",
  parallax = 0.5,
  tilt = 8,
  stagger = 0.06,
  trigger = "hover",
  showLabels = true,
  grayscale = false,
  className = "",
}) {
  const rootRef = useRef(null);
  const panelRefs = useRef([]);
  const mediaRefs = useRef([]);
  const barRefs = useRef([]);
  const textRefs = useRef([]);
  const timelineRef = useRef(null);
  const firstRunRef = useRef(true);
  const mediaSizeRef = useRef(320);
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const count = items.length;
  const [active, setActive] = useState(() =>
    count ? Math.min(Math.max(defaultIndex, 0), count - 1) : 0,
  );

  const applyLayout = useCallback(
    (animate) => {
      const panels = panelRefs.current;
      if (!panels.length || !count) return;

      const ratio = Math.min(Math.max(expandRatio, 0.2), 0.9);
      const grow = count > 1 ? (ratio * (count - 1)) / (1 - ratio) : 1;
      const mediaSize = mediaSizeRef.current;

      timelineRef.current?.kill();
      const transitionDuration = animate && !prefersReduced ? duration : 0;
      const timeline = gsap.timeline();

      panels.forEach((panel, index) => {
        if (!panel) return;

        const isActive = index === active;
        const media = mediaRefs.current[index];
        const bar = barRefs.current[index];
        const text = textRefs.current[index];
        const rotation = isActive ? 0 : index < active ? tilt : -tilt;

        timeline.to(
          panel,
          {
            flexGrow: isActive ? grow : 1,
            rotateY: rotation,
            duration: transitionDuration,
            ease,
          },
          0,
        );

        if (media) {
          const drift = Math.max(-1.5, Math.min(1.5, active - index));
          const shift = drift * parallax * mediaSize * 0.06;
          timeline.to(
            media,
            {
              xPercent: -50,
              yPercent: -50,
              x: isActive ? 0 : shift,
              "--ag-gray": grayscale && !isActive ? 1 : 0,
              "--ag-dim": 0,
              duration: transitionDuration,
              ease,
            },
            0,
          );
        }

        if (showLabels && bar && text) {
          if (isActive) {
            timeline.to(
              [bar, text],
              {
                opacity: 1,
                x: 0,
                duration: transitionDuration,
                ease,
                stagger: prefersReduced ? 0 : stagger,
              },
              0,
            );
          } else {
            timeline.to(
              [bar, text],
              { opacity: 0, x: -14, duration: transitionDuration * 0.6, ease },
              0,
            );
          }
        }
      });

      timelineRef.current = timeline;
    },
    [
      active,
      count,
      expandRatio,
      duration,
      ease,
      tilt,
      parallax,
      grayscale,
      showLabels,
      stagger,
      prefersReduced,
    ],
  );

  useEffect(() => {
    const element = rootRef.current;
    if (!element) return undefined;

    const measure = () => {
      const rect = element.getBoundingClientRect();
      const usable = Math.max(rect.width - gap * (count - 1), 120);
      const size = Math.max(
        140,
        usable * Math.min(Math.max(expandRatio, 0.2), 0.9) * 1.22,
      );
      mediaSizeRef.current = size;
      element.style.setProperty("--ag-media-size", `${size}px`);
      applyLayout(!firstRunRef.current);
    };

    measure();
    const observer =
      typeof ResizeObserver === "undefined" ? null : new ResizeObserver(measure);
    observer?.observe(element);
    return () => observer?.disconnect();
  }, [applyLayout, gap, count, expandRatio]);

  useEffect(() => {
    applyLayout(!firstRunRef.current);
    firstRunRef.current = false;
  }, [applyLayout]);

  useEffect(
    () => () => {
      timelineRef.current?.kill();
    },
    [],
  );

  const handleEnter = (index) => {
    if (trigger === "hover") setActive(index);
  };

  const handleClick = (index, event) => {
    if (index !== active) {
      event.preventDefault();
      setActive(index);
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      setActive((index + 1) % count);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      setActive((index - 1 + count) % count);
    }
  };

  if (!count) return null;

  return (
    <div
      ref={rootRef}
      className={`flex w-full max-w-full flex-row [perspective:1400px] max-[520px]:!flex-col max-[520px]:[perspective:none] ${className}`}
      style={{ gap: `${gap}px`, height: `${height}px` }}
      role="list"
      aria-label="Solar project gallery"
    >
      {items.map((item, index) => {
        const isActive = index === active;
        const Tag = item.link?.startsWith("/") ? Link : item.link ? "a" : "div";

        return (
          <Tag
            key={`${item.label || "solar-project"}-${index}`}
            ref={(element) => {
              panelRefs.current[index] = element;
            }}
            className="group relative block min-h-0 min-w-0 flex-[1_1_0] cursor-pointer overflow-hidden bg-[#1F2937] no-underline outline-none [transform-origin:center] focus-visible:[box-shadow:0_0_0_3px_var(--ag-accent)] max-[520px]:min-h-[76px] max-[520px]:!flex-[1_1_0]"
            style={{
              borderRadius: `${radius}px`,
              "--ag-accent": accentColor,
              willChange: "flex-grow, transform",
            }}
            to={Tag === Link ? item.link : undefined}
            href={Tag === Link ? undefined : item.link || undefined}
            onClick={(event) => handleClick(index, event)}
            onPointerEnter={(event) => {
              if (event.pointerType === "mouse" || event.pointerType === "pen") {
                handleEnter(index);
              }
            }}
            onFocus={() => setActive(index)}
            onKeyDown={(event) => handleKeyDown(index, event)}
            role="listitem"
            tabIndex={0}
            aria-current={isActive ? "true" : undefined}
            aria-label={item.label || item.alt || `Solar project ${index + 1}`}
          >
            <span className="absolute inset-0 overflow-hidden [border-radius:inherit]">
              <span
                ref={(element) => {
                  mediaRefs.current[index] = element;
                }}
                className="absolute left-1/2 top-1/2 [filter:grayscale(var(--ag-gray,1))]"
                style={{
                  width: "var(--ag-media-size, 320px)",
                  height: "100%",
                  willChange: "transform, filter",
                }}
              >
                <img
                  src={item.image}
                  alt={item.alt || item.label || ""}
                  loading={index === defaultIndex ? "eager" : "lazy"}
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </span>
              <span
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(180deg, transparent 40%, color-mix(in srgb, ${overlayColor} 82%, transparent) 100%), color-mix(in srgb, ${overlayColor} calc(var(--ag-dim, 0.35) * 100%), transparent)`,
                }}
              />
            </span>
            {showLabels && item.label && (
              <span
                className="pointer-events-none absolute bottom-5 left-5 right-4 flex items-center gap-3"
                style={{ color: textColor }}
              >
                <span
                  ref={(element) => {
                    barRefs.current[index] = element;
                  }}
                  aria-hidden="true"
                  className="h-8 w-1 shrink-0 rounded-full"
                  style={{
                    backgroundColor: accentColor,
                    opacity: isActive ? 1 : 0,
                  }}
                />
                <span
                  ref={(element) => {
                    textRefs.current[index] = element;
                  }}
                  className="text-sm font-semibold leading-snug opacity-0 md:text-lg"
                  style={{ opacity: isActive ? 1 : 0 }}
                >
                  {item.label}
                </span>
              </span>
            )}
          </Tag>
        );
      })}
    </div>
  );
}

export default AccordionGallery;
