/**
 * CapabilitiesSection Component
 * 
 * Displays the core capabilities/services offered by OrahCast
 * in a responsive grid of service cards.
 */

/**
 * Capability interface definition
 */
interface Capability {
  id: string;
  icon: string;
  title: string;
  description: string;
  tags: string[];
  isCustom?: boolean;
}

/**
 * Service capability configuration
 * Defines each capability with icon, title, description, and tags
 */
const CAPABILITIES: Capability[] = [
  {
    id: "web-mobile",
    icon: "code",
    title: "Web and Mobile Engineering",
    description:
      "Full-stack development for web, iOS, and Android applications. API design, performance optimization, and clean architecture.",
    tags: ["React", "Next.js", "Flutter"],
  },
  {
    id: "ai-ml",
    icon: "brain",
    title: "AI/Machine Learning",
    description:
      "Machine learning, deep learning, NLP, predictive analytics, and computer vision solutions. Transform raw data into actionable insights and automated workflows.",
    tags: ["Python", "TensorFlow", "OpenAI"],
  },
  {
    id: "cloud-devops",
    icon: "cloud",
    title: "Cloud and DevOps",
    description:
      "Cloud-native services, CI/CD pipelines, containerization, and cloud-native infrastructure. We ensure your systems are resilient, secure, and scalable.",
    tags: ["AWS", "Docker", "Kubernetes"],
  },
  {
    id: "consulting",
    icon: "strategy",
    title: "Strategic Consulting",
    description:
      "Technical leadership on-demand. We work with founding teams, CTOs, engineering directors, and C-Suite on advisory matters.",
    tags: ["Strategy", "CTO", "Advisory"],
  },
  {
    id: "product",
    icon: "growth",
    title: "Product Growth",
    description:
      "End-to-end engineering to bring your user acquisition and retention. We build analytics loops and data-backed innovations to drive your success.",
    tags: ["Analytics", "A/B Testing", "UX"],
  },
  {
    id: "custom",
    icon: "puzzle",
    title: "Custom Solutions?",
    description:
      "Need something specific? Let's engineer a solution tailored to your unique requirements.",
    tags: [],
    isCustom: true,
  },
];

/**
 * Icon component for service cards
 * Renders appropriate SVG icon based on type
 */
function ServiceIcon({ type }: { type: string }) {
  const iconClasses = "w-6 h-6 text-primary";

  switch (type) {
    case "code":
      return (
        <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
    case "brain":
      return (
        <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      );
    case "cloud":
      return (
        <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      );
    case "strategy":
      return (
        <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      );
    case "growth":
      return (
        <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      );
    case "puzzle":
      return (
        <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      );
    default:
      return null;
  }
}

/**
 * CapabilitiesSection component displaying service cards
 */
export default function CapabilitiesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Core Capabilities
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Our multidisciplinary teams integrate seamlessly with your organization to tackle
            complex challenges.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((capability) => (
            <article
              key={capability.id}
              className={`
                p-6 rounded-xl border transition-all duration-300 hover:shadow-lg
                ${capability.isCustom 
                  ? "border-dashed border-gray-300 bg-gray-50" 
                  : "border-gray-100 bg-white hover:border-primary/20"
                }
              `}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <ServiceIcon type={capability.icon} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                {capability.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {capability.description}
              </p>

              {/* Tags or Talk to us link */}
              {capability.isCustom ? (
                <a
                  href="#contact"
                  className="text-primary font-medium text-sm hover:underline"
                >
                  Talk to us
                </a>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {capability.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
