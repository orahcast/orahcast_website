/**
 * CTASection Component
 *
 * "Get In Touch" call-to-action — light background, fully visible text and buttons.
 */

import Link from "next/link";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#eef1ff" }}
    >
      {/* Dot pattern */}
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(rgba(19,19,236,0.18) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Floating orbs */}
      <div
        className="absolute top-10 left-1/4 w-72 h-72 rounded-full blur-[80px] opacity-25 animate-float-slow pointer-events-none"
        style={{ backgroundColor: "#1313ec" }}
      />
      <div
        className="absolute bottom-10 right-1/4 w-56 h-56 rounded-full blur-[60px] opacity-20 animate-float pointer-events-none"
        style={{ backgroundColor: "#8b5cf6", animationDelay: "1.5s" }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 py-24 lg:px-20 lg:py-36 flex flex-col items-center text-center gap-8">
        {/* Label */}
        <div className="inline-flex items-center gap-2 border border-blue-200 bg-blue-100 rounded-full px-4 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1313ec] animate-pulse" />
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#1313ec]">
            Get In Touch
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 max-w-3xl leading-tight">
          Ready to build something{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #1313ec 0%, #8b5cf6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            remarkable
          </span>
          ?
        </h2>

        {/* Description */}
        <p className="text-neutral-600 text-lg max-w-xl leading-relaxed font-body">
          Let&apos;s discuss how OrahCast can accelerate your digital
          transformation with our expert engineering teams.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full justify-center">
          <Link
            href="mailto:hello@orahcast.com"
            className="relative inline-flex items-center justify-center gap-2 bg-[#1313ec] hover:bg-[#0a0aaa] text-base font-bold rounded-xl px-8 transition-all duration-200 overflow-hidden group animate-pulse-glow min-w-[220px]"
            style={{ height: "52px", boxShadow: "0 8px 32px -8px rgba(19,19,236,0.4)", color: "#ffffff" }}
          >
            <span className="relative z-10">Schedule Consultation</span>
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
            className="inline-flex items-center justify-center gap-2 border-2 border-[#1313ec] hover:bg-[#1313ec] text-base font-bold rounded-xl px-8 transition-all duration-200 min-w-[220px]"
            style={{ height: "52px", color: "#1313ec" }}
          >
            View Case Studies
          </Link>
        </div>

        {/* Social proof line */}
        <p className="text-neutral-500 text-sm font-mono mt-2">
          Trusted by startups and enterprises across 12+ industries
        </p>
      </div>
    </section>
  );
}
