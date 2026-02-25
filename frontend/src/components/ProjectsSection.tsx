/**
 * ProjectsSection Component
 *
 * Featured projects showcase with rich gradient art,
 * hover overlay with CTA, and smooth scale transition.
 */

"use client";

const PROJECTS = [
  {
    id: "nest-africa-travels",
    title: "Nest Africa Travels Ltd",
    category: "Travel & Tourism",
    description: "Rwandan-based travel company crafting unforgettable experiences across Rwanda's landscapes, culture, and communities.",
    href: "https://www.nestafricatravels.com/",
    image: "/projects/nest-africa.png",
    gradient:
      "linear-gradient(to top, rgba(6,31,22,0.95) 0%, rgba(6,31,22,0.5) 50%, rgba(6,31,22,0.2) 100%)",
    accentColor: "#34d399",
    icon: "travel_explore",
    tags: ["Tourism", "Rwanda", "Web"],
    dark: true,
  },
  {
    id: "sme-predictor",
    title: "SME Predictor",
    category: "AI & Analytics",
    description: "AI-powered platform predicting SME success for Rwandan businesses — 93.5% accuracy, real-time risk and growth analysis.",
    href: "",
    image: "/projects/sme-predictor.png",
    gradient:
      "linear-gradient(to top, rgba(30,10,60,0.95) 0%, rgba(30,10,60,0.55) 50%, rgba(30,10,60,0.15) 100%)",
    accentColor: "#a78bfa",
    icon: "smart_toy",
    tags: ["AI", "Python", "Rwanda"],
    dark: true,
  },
  {
    id: "echo-lifestyle",
    title: "Echo Lifestyle App",
    category: "Consumer",
    description: "Habit-forming wellness app with 1M+ monthly active users.",
    href: "",
    gradient:
      "radial-gradient(ellipse at 50% 0%, #faf5ff 0%, #f1f5f9 70%), linear-gradient(135deg, #ede9fe, #e0f2fe)",
    accentColor: "#8b5cf6",
    icon: "self_improvement",
    tags: ["Flutter", "Firebase", "Node.js"],
    dark: false,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p
              className="font-mono text-xs tracking-[0.2em] uppercase font-bold mb-3"
              style={{ color: "#1313ec" }}
            >
              Portfolio
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 leading-tight">
              Featured Projects
            </h2>
          </div>
          <p className="text-neutral-500 max-w-sm font-body text-base leading-relaxed">
            Showcasing our impact across industries through meaningful digital
            transformations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => {
            const isDark = project.dark !== false;
            return (
              <article
                key={project.id}
                className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer"
                style={{
                  background: (project as { image?: string }).image
                    ? undefined
                    : project.gradient,
                  backgroundColor: "#0f172a",
                }}
                onClick={() => project.href && window.open(project.href, "_blank")}
              >
                {/* Real background image (when available) */}
                {(project as { image?: string }).image && (
                  <>
                    <img
                      src={(project as { image?: string }).image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Dark gradient overlay so text is always readable */}
                    <div
                      className="absolute inset-0"
                      style={{ background: project.gradient }}
                    />
                  </>
                )}
                {/* Decorative radial glow */}
                <div
                  className="absolute top-6 right-6 w-32 h-32 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                  style={{ backgroundColor: project.accentColor }}
                />

                {/* Decorative lines */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
                  <div
                    className="absolute top-1/3 left-0 right-0 h-px"
                    style={{ backgroundColor: project.accentColor }}
                  />
                  <div
                    className="absolute left-1/3 top-0 bottom-0 w-px"
                    style={{ backgroundColor: project.accentColor }}
                  />
                </div>

                {/* Icon (centered, placeholder art) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{
                      backgroundColor: `${project.accentColor}25`,
                      border: `1px solid ${project.accentColor}40`,
                    }}
                  >
                    <span
                      className="material-symbols-outlined text-4xl"
                      style={{ color: project.accentColor }}
                    >
                      {project.icon}
                    </span>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-400" />

                {/* Hover CTA */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <span
                    className="flex items-center gap-2 font-bold text-sm px-5 py-2.5 rounded-xl"
                    style={{
                      backgroundColor: project.accentColor,
                      color: "#ffffff",
                      boxShadow: `0 8px 24px -4px ${project.accentColor}80`,
                    }}
                  >
                    {project.href ? "Visit Site" : "View Project"}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>

                {/* Project info (bottom) */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  {/* Tag chips */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-xs font-mono"
                        style={{
                          backgroundColor: isDark
                            ? "rgba(255,255,255,0.12)"
                            : "rgba(0,0,0,0.06)",
                          color: isDark ? "rgba(255,255,255,0.7)" : "#475569",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span
                    className="text-xs font-mono font-bold uppercase tracking-widest mb-1 block"
                    style={{
                      color: project.accentColor,
                    }}
                  >
                    {project.category}
                  </span>
                  <h3
                    className="text-lg font-bold leading-snug"
                    style={{ color: isDark ? "#ffffff" : "#1e293b" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm mt-1 leading-relaxed font-body"
                    style={{
                      color: isDark ? "rgba(255,255,255,0.6)" : "#64748b",
                    }}
                  >
                    {project.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
