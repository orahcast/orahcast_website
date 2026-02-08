/**
 * CapabilitiesSection Component
 * 
 * Displays the core capabilities/services offered by OrahCast
 * in a responsive grid of service cards with hover effects.
 */

/**
 * Capability interface definition
 */
interface Capability {
  id: string;
  code: string;
  title: string;
  description: string;
  tags: string[];
  color: string;
  isCustom?: boolean;
}

/**
 * Service capability configuration
 * Defines each capability with icon, title, description, and tags
 */
const CAPABILITIES: Capability[] = [
  {
    id: "web-mobile",
    code: "01_DEV",
    title: "Web & Mobile Engineering",
    description:
      "Full-cycle development for high-scale web applications and native mobile experiences. We focus on performance, accessibility, and clean architecture.",
    tags: ["React", "Next.js", "Flutter"],
    color: "#1313ec",
  },
  {
    id: "ai-ml",
    code: "02_AI",
    title: "AI & Machine Learning",
    description:
      "Custom model development, NLP pipelines, and computer vision solutions. Transform raw data into predictive insights and automated workflows.",
    tags: ["Python", "TensorFlow", "OpenAI"],
    color: "#8b5cf6",
  },
  {
    id: "cloud-devops",
    code: "03_OPS",
    title: "Cloud & DevOps",
    description:
      "Infrastructure as Code (IaC), CI/CD optimization, and cloud-native architecture. We ensure your systems are resilient, secure, and scalable.",
    tags: ["AWS", "Kubernetes", "Terraform"],
    color: "#06b6d4",
  },
  {
    id: "consulting",
    code: "04_STRAT",
    title: "Strategic Consulting",
    description:
      "Technical leadership on demand. We assist with roadmap planning, legacy modernization strategies, and CTO-level advisory services.",
    tags: ["Roadmap", "Audit", "Architecture"],
    color: "#f97316",
  },
  {
    id: "product",
    code: "05_GROWTH",
    title: "Product Growth",
    description:
      "Data-driven engineering to improve user acquisition and retention. We build analytics loops and A/B testing frameworks directly into your product.",
    tags: ["Analytics", "A/B Testing", "CRO"],
    color: "#22c55e",
  },
  {
    id: "custom",
    code: "",
    title: "Custom Solution?",
    description:
      "Need something specific? Let's engineer a solution tailored to your unique requirements.",
    tags: [],
    color: "#737373",
    isCustom: true,
  },
];

/**
 * CapabilitiesSection component displaying service cards
 */
export default function CapabilitiesSection() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-6 lg:px-20 pb-20">
      {/* Section Header */}
      <div className="flex flex-col gap-4 mb-10">
        <h2 className="text-3xl font-bold text-neutral-900">
          Core Capabilities
        </h2>
        <p className="text-neutral-600 max-w-2xl font-body">
          Our multidisciplinary teams integrate seamlessly with your organization to tackle complex challenges.
        </p>
      </div>

      {/* Capabilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CAPABILITIES.map((capability) => (
          <article
            key={capability.id}
            className={`
              group relative flex flex-col gap-6 rounded-xl p-8 transition-all overflow-hidden
              ${capability.isCustom 
                ? "border border-dashed border-neutral-300 bg-transparent items-center justify-center text-center hover:bg-neutral-50" 
                : "border border-neutral-200 bg-white hover:shadow-2xl"
              }
            `}
            style={!capability.isCustom ? { 
              '--hover-border-color': `${capability.color}50`,
              '--hover-shadow-color': `${capability.color}08`
            } as React.CSSProperties : undefined}
          >
            {/* Background blur effect */}
            {!capability.isCustom && (
              <div 
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl transition-colors opacity-5 group-hover:opacity-10"
                style={{ backgroundColor: capability.color }}
              />
            )}

            {/* Icon and Code */}
            {capability.isCustom ? (
              <div className="size-12 rounded-full bg-neutral-100 flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <span 
                  className="material-symbols-outlined text-4xl"
                  style={{ color: capability.color }}
                >
                  {capability.id === 'web-mobile' ? 'devices' : 
                   capability.id === 'ai-ml' ? 'smart_toy' :
                   capability.id === 'cloud-devops' ? 'cloud_queue' :
                   capability.id === 'consulting' ? 'handshake' :
                   capability.id === 'product' ? 'trending_up' : 'add'}
                </span>
                <span className="font-mono text-xs text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  {capability.code}
                </span>
              </div>
            )}

            {/* Title and Description */}
            <div className="flex flex-col gap-3 relative z-10">
              <h3 
                className="text-xl font-bold text-neutral-900 transition-colors"
                style={{ '--hover-color': capability.color } as React.CSSProperties}
              >
                {capability.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed font-body">
                {capability.description}
              </p>
            </div>

            {/* Tags or Talk to us link */}
            {capability.isCustom ? (
              <a
                href="#contact"
                className="font-bold text-sm hover:underline"
                style={{ color: '#1313ec' }}
              >
                Talk to us
              </a>
            ) : (
              <div className="mt-auto pt-4 border-t border-neutral-100 flex flex-wrap gap-2">
                {capability.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-2 py-1 rounded bg-neutral-100 text-xs font-mono text-neutral-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
