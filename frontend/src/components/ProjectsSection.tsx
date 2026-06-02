"use client";

import { useRef, useState, useEffect } from "react";

const PROJECTS = [
  {
    id: "blessedirembo",
    title: "Blessedirembo",
    description:
      "Operating under Blessed HealthConnect Ltd, Blessed Irembo connects you with verified pharmacies nationwide. Search by location, check availability, and get the medication you need, when you need it.",
    href: "https://www.blessedirembo.com/",
    image: "/projects/blessedirembo.jpg",
  },
  {
    id: "nest-africa-travels",
    title: "Nest Africa Travels Ltd",
    description:
      "Rwandan-based travel company crafting unforgettable experiences across Rwanda's landscapes, culture, and communities.",
    href: "https://www.nestafricatravels.com/",
    image: "/projects/nest-africa.png",
  },
  {
    id: "sme-predictor",
    title: "SME Predictor",
    description:
      "AI-powered platform predicting SME success for Rwandan businesses — 93.5% accuracy, real-time risk and growth analysis.",
    href: "",
    image: "/projects/sme-predictor.png",
  },
  {
    id: "guesthouse-management",
    title: "Guesthouse Digital Management System",
    description:
      "A progressive web app (PWA) designed to automate payment tracking and reporting for family-run guesthouses. Replaces manual paper and SMS systems with a simple, real-time digital solution.",
    href: "",
    image: "/projects/guesthouse.png",
  },
];

export default function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 5);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    const current = scrollRef.current;
    if (current) {
      current.addEventListener("scroll", checkScroll);
      checkScroll();
      
      window.addEventListener("load", checkScroll);
      window.addEventListener("resize", checkScroll);
      
      const timer = setTimeout(checkScroll, 500);
      return () => {
        current.removeEventListener("scroll", checkScroll);
        window.removeEventListener("load", checkScroll);
        window.removeEventListener("resize", checkScroll);
        clearTimeout(timer);
      };
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      const scrollTo = direction === "left" 
        ? scrollLeft - scrollAmount 
        : scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="projects"
      style={{ background: "#f0f4f8", paddingTop: "6rem", paddingBottom: "6rem" }}
      className="overflow-hidden"
    >
      <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-10">

        {/* ── Centered Heading ── */}
        <div className="text-center mb-14">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-black text-neutral-900 mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Featured Projects
          </h2>

          {/* Blue underline accent */}
          <div
            className="mx-auto mb-6 rounded-full"
            style={{ width: "56px", height: "4px", background: "#1313ec" }}
          />

          <p className="text-neutral-500 max-w-xl mx-auto text-base leading-relaxed font-body">
            Explore how we deliver high-impact digital solutions for businesses
            and organisations across Africa.
          </p>
        </div>

        {/* ── Carousel Container ── */}
        <div className="relative px-2">
          {/* Left Arrow Button */}
          {showLeftArrow && (
            <button
              onClick={() => scroll("left")}
              className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full border border-neutral-200 bg-white text-neutral-800 shadow-lg transition-all duration-200 hover:bg-neutral-50 hover:scale-105 active:scale-95 focus:outline-none cursor-pointer"
              aria-label="Previous projects"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Right Arrow Button */}
          {showRightArrow && (
            <button
              onClick={() => scroll("right")}
              className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full border border-neutral-200 bg-white text-neutral-800 shadow-lg transition-all duration-200 hover:bg-neutral-50 hover:scale-105 active:scale-95 focus:outline-none cursor-pointer"
              aria-label="Next projects"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Scrollable Area */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-7 pb-6 no-scrollbar scroll-smooth"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className="w-[85vw] md:w-[calc(50%-14px)] lg:w-[calc(33.333%-19px)] flex-shrink-0 snap-start flex flex-col"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
}: {
  project: {
    id: string;
    title: string;
    description: string;
    href: string;
    image: string;
  };
}) {
  const handleClick = () => {
    if (project.href) window.open(project.href, "_blank");
  };

  return (
    <article
      className="flex flex-col h-full overflow-hidden rounded-2xl group transition-all duration-300"
      style={{
        background: "#ffffff",
        boxShadow: "0 2px 16px 0 rgba(0,0,0,0.07)",
        cursor: project.href ? "pointer" : "default",
      }}
      onClick={handleClick}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 8px 36px 0 rgba(0,0,0,0.13)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 2px 16px 0 rgba(0,0,0,0.07)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      {/* ── Image ── */}
      <div
        className="w-full overflow-hidden"
        style={{ height: "210px", background: "#e2e8f0" }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          /* Placeholder when no image */
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #e0e7ff, #f0fdf4)" }}
          >
            <span
              className="text-5xl opacity-20 select-none"
              style={{ color: "#1313ec" }}
            >
              ◻
            </span>
          </div>
        )}
      </div>

      {/* ── Text ── */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-bold text-neutral-900 mb-2 leading-snug">
          {project.title}
        </h3>
        <p className="text-sm text-neutral-500 font-body leading-relaxed flex-1">
          {project.description}
        </p>

        {project.href && (
          <div className="mt-5 pt-4" style={{ borderTop: "1px solid #f1f5f9" }}>
            <span
              className="inline-flex items-center gap-1.5 text-sm font-bold transition-colors duration-200"
              style={{ color: "#1313ec" }}
            >
              Visit site
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </span>
          </div>
        )}
      </div>
    </article>
  );
}
