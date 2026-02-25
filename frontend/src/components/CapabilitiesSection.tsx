/**
 * CapabilitiesSection Component
 *
 * Core capabilities grid with polished hover states:
 * colored border glow + micro arrow reveal on hover.
 */

interface Capability {
  id: string;
  code: string;
  icon: string;
  title: string;
  description: string;
  tags: string[];
  color: string;
  isCustom?: boolean;
}

const CAPABILITIES: Capability[] = [
  {
    id: "web-mobile",
    code: "01_DEV",
    icon: "devices",
    title: "Web & Mobile Engineering",
    description:
      "Full-cycle development for high-scale web applications and native mobile experiences. We focus on performance, accessibility, and clean architecture.",
    tags: ["React", "Next.js", "Flutter"],
    color: "#1313ec",
  },
  {
    id: "ai-ml",
    code: "02_AI",
    icon: "smart_toy",
    title: "AI & Machine Learning",
    description:
      "Custom model development, NLP pipelines, and computer vision solutions. Transform raw data into predictive insights and automated workflows.",
    tags: ["Python", "TensorFlow", "OpenAI"],
    color: "#8b5cf6",
  },
  {
    id: "cloud-devops",
    code: "03_OPS",
    icon: "cloud_queue",
    title: "Cloud & DevOps",
    description:
      "Infrastructure as Code (IaC), CI/CD optimization, and cloud-native architecture. We ensure your systems are resilient, secure, and scalable.",
    tags: ["AWS", "Kubernetes", "Terraform"],
    color: "#06b6d4",
  },
  {
    id: "consulting",
    code: "04_STRAT",
    icon: "handshake",
    title: "Strategic Consulting",
    description:
      "Technical leadership on demand. We assist with roadmap planning, legacy modernization strategies, and CTO-level advisory services.",
    tags: ["Roadmap", "Audit", "Architecture"],
    color: "#f97316",
  },
  {
    id: "product",
    code: "05_GROWTH",
    icon: "trending_up",
    title: "Product Growth",
    description:
      "Data-driven engineering to improve user acquisition and retention. We build analytics loops and A/B testing frameworks directly into your product.",
    tags: ["Analytics", "A/B Testing", "CRO"],
    color: "#22c55e",
  },
  {
    id: "custom",
    code: "",
    icon: "add",
    title: "Custom Solution?",
    description:
      "Need something specific? Let's engineer a solution tailored to your unique requirements.",
    tags: [],
    color: "#737373",
    isCustom: true,
  },
];

export default function CapabilitiesSection() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-6 lg:px-20 pb-24">
      {/* Section Header */}
      <div className="flex flex-col gap-3 mb-12">
        <p
          className="font-mono text-xs tracking-[0.2em] uppercase font-bold"
          style={{ color: "#1313ec" }}
        >
          What We Do
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 leading-tight">
            Core Capabilities
          </h2>
          <p className="text-neutral-500 max-w-sm font-body text-base leading-relaxed">
            Our multidisciplinary teams integrate seamlessly with your
            organisation to tackle complex challenges.
          </p>
        </div>
      </div>

      {/* Capabilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {CAPABILITIES.map((capability) => (
          <article
            key={capability.id}
            className={`
              group relative flex flex-col gap-5 rounded-2xl p-7 transition-all duration-300 overflow-hidden
              ${capability.isCustom
                ? "border-2 border-dashed border-neutral-200 bg-transparent items-center justify-center text-center hover:bg-neutral-50 hover:border-neutral-300 cursor-pointer"
                : "border border-neutral-150 bg-white hover:shadow-xl cursor-pointer"
              }
            `}
            style={
              !capability.isCustom
                ? {
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                }
                : undefined
            }
          >
            {/* Hover border glow overlay (non-custom cards) */}
            {!capability.isCustom && (
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: `inset 0 0 0 1.5px ${capability.color}40, 0 16px 48px -12px ${capability.color}20`,
                }}
              />
            )}

            {/* Background color bleed on hover */}
            {!capability.isCustom && (
              <div
                className="absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"
                style={{ backgroundColor: capability.color }}
              />
            )}

            {/* Icon Row */}
            {capability.isCustom ? (
              <div
                className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mb-1 group-hover:bg-neutral-200 transition-colors"
              >
                <svg
                  className="w-6 h-6 text-neutral-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
            ) : (
              <div className="flex items-center justify-between relative z-10">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${capability.color}12` }}
                >
                  <span
                    className="material-symbols-outlined text-2xl"
                    style={{ color: capability.color }}
                  >
                    {capability.icon}
                  </span>
                </div>
                <span className="font-mono text-xs text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {capability.code}
                </span>
              </div>
            )}

            {/* Title and Description */}
            <div className="flex flex-col gap-2 relative z-10">
              <h3 className="text-lg font-bold text-neutral-900 transition-colors duration-200 group-hover:text-neutral-800">
                {capability.title}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed font-body">
                {capability.description}
              </p>
            </div>

            {/* Tags or CTA */}
            {capability.isCustom ? (
              <a
                href="#contact"
                className="font-bold text-sm transition-colors"
                style={{ color: "#1313ec" }}
              >
                Talk to us →
              </a>
            ) : (
              <div className="mt-auto pt-4 border-t border-neutral-100 flex items-center justify-between relative z-10">
                <div className="flex flex-wrap gap-1.5">
                  {capability.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-neutral-50 border border-neutral-100 text-xs font-mono text-neutral-500 group-hover:border-neutral-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Micro arrow */}
                <span
                  className="text-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-200 font-bold"
                  style={{ color: capability.color }}
                >
                  →
                </span>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
