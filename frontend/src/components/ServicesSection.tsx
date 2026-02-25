/**
 * ServicesSection Component
 *
 * "Engineering The Future" heading with descriptive text.
 * Stat cards removed per user request.
 */

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full max-w-[1280px] mx-auto px-6 py-16 md:py-24 lg:px-20"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-neutral-200 pb-14">
        <div className="flex flex-col gap-4 max-w-2xl">
          <p
            className="font-mono text-xs tracking-[0.2em] uppercase font-bold"
            style={{ color: "#1313ec" }}
          >
            Services &amp; Projects
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.0] tracking-tight text-neutral-900">
            Engineering
            <br />
            <span
              style={{
                background:
                  "linear-gradient(90deg, #1313ec 0%, #8b5cf6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              The Future
            </span>
          </h2>
        </div>

        <div className="max-w-sm pb-2">
          <p className="text-neutral-500 text-lg leading-relaxed font-body">
            We deploy high-performance technical teams to build scalable
            solutions — from strategic consulting to full-stack execution.
          </p>
        </div>
      </div>
    </section>
  );
}
