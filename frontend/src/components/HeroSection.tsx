/**
 * HeroSection Component
 *
 * Landing hero with logo-blue + gray headline, updated description,
 * and two CTA buttons.
 */

import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-24 overflow-hidden bg-white"
    >
      {/* Background decorations */}
      <div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(19,19,236,0.07) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#1313ec 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 section-container w-full flex flex-col items-center text-center">
        {/* Label pill */}
        <div className="animate-fade-up inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1313ec] animate-pulse" />
          <span
            className="text-xs font-mono font-bold tracking-widest uppercase"
            style={{ color: "#1313ec" }}
          >
            Software Engineering Studio
          </span>
        </div>

        {/* Main headline */}
        <h1 className="animate-fade-up-delay-1 text-[clamp(2.4rem,5.5vw,4.2rem)] font-black leading-[1.1] tracking-tight mb-5 max-w-3xl">
          {/* "Illuminating" — logo blue */}
          <span style={{ color: "#1313ec" }}>Illuminating</span>{" "}
          {/* "Data." — logo blue */}
          <span style={{ color: "#1313ec" }}>Data.</span>
          <br />
          {/* "Forecasting a" — neutral gray */}
          <span className="font-semibold italic" style={{ color: "#94a3b8" }}>
            Forecasting a
          </span>{" "}
          {/* "Bright Future." — medium gray */}
          <span className="italic" style={{ color: "#64748b" }}>
            Bright Future.
          </span>
        </h1>

        {/* Description — simple and service-focused */}
        <p className="animate-fade-up-delay-2 text-base md:text-lg text-neutral-500 max-w-xl leading-relaxed mb-10 font-body">
          We build web &amp; mobile apps, AI solutions, cloud infrastructure,
          and data systems — tailored for startups and enterprises ready to scale.
        </p>

        {/* CTA Row */}
        <div className="animate-fade-up-delay-3 flex flex-wrap gap-4 items-center justify-center">
          <Link
            href="#contact"
            className="relative inline-flex items-center gap-2 bg-[#1313ec] hover:bg-[#0a0aaa] font-bold text-sm rounded-xl px-7 py-3 transition-all duration-200 overflow-hidden group"
            style={{ boxShadow: "0 12px 40px -8px rgba(19,19,236,0.4)", color: "#ffffff" }}
          >
            <span className="relative z-10">Start a Project</span>
            <svg
              className="w-4 h-4 relative z-10 transition-transform duration-200 group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
          </Link>

          <Link
            href="#projects"
            className="inline-flex items-center gap-2 text-neutral-600 hover:text-[#1313ec] font-semibold text-sm transition-colors duration-200 group"
          >
            View Our Work
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-float">
        <span className="text-xs text-neutral-400 font-mono tracking-widest uppercase">
          Scroll
        </span>
        <svg
          className="w-4 h-4 text-neutral-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
