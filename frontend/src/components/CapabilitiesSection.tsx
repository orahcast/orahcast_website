/**
 * CapabilitiesSection Component
 *
 * Core capabilities grid with clean, professional UI tailored for the Rwandan market.
 */

interface Capability {
  id: string;
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
    icon: "devices",
    title: "Custom Websites & Apps",
    description:
      "Building fast, beautiful websites and mobile apps (iOS & Android) that work perfectly for your local and global customers.",
    tags: ["Websites", "Mobile Apps", "E-commerce"],
    color: "#1313ec",
  },
  {
    id: "ai-automation",
    icon: "smart_toy",
    title: "AI & Business Automation",
    description:
      "Smart tools to save time, reduce operational costs, and predict business trends—tailored for the Rwandan market.",
    tags: ["AI Tools", "Automation", "Data"],
    color: "#8b5cf6",
  },
  {
    id: "cloud-it",
    icon: "cloud_queue",
    title: "IT & Cloud Solutions",
    description:
      "Reliable and secure hosting, business emails, and scalable systems to keep your business running smoothly 24/7.",
    tags: ["Hosting", "Security", "Cloud"],
    color: "#06b6d4",
  },
  {
    id: "payments",
    icon: "payments",
    title: "Payment Integrations",
    description:
      "Seamlessly integrate local and international payment gateways like Mobile Money (MoMo) and bank card payments.",
    tags: ["MoMo", "Fintech", "Payments"],
    color: "#22c55e",
  },
  {
    id: "digital-strategy",
    icon: "trending_up",
    title: "Digital Strategy",
    description:
      "Expert guidance to help you digitize operations, reach more customers, and build a roadmap for sustainable growth.",
    tags: ["Consulting", "Planning", "Growth"],
    color: "#f97316",
  },
  {
    id: "custom",
    icon: "handshake",
    title: "Custom Solutions",
    description:
      "Have a unique business challenge? Let's sit down and build a tailored software solution just for you.",
    tags: [],
    color: "#101022",
    isCustom: true,
  },
];

export default function CapabilitiesSection() {
  return (
    <section className="w-full bg-slate-50 py-24 border-t border-neutral-100">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
      {/* Section Header */}
      <div className="flex flex-col gap-3 mb-14 text-center items-center">
        <p
          className="font-mono text-xs tracking-[0.2em] uppercase font-bold"
          style={{ color: "#1313ec" }}
        >
          Our Services
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-neutral-900 leading-tight">
          How We Help You Grow
        </h2>
        <p className="text-neutral-500 max-w-2xl font-body text-base leading-relaxed mt-2">
          We provide simple, reliable, and powerful digital tools to help Rwandan businesses operate better, sell more, and scale faster.
        </p>
      </div>

      {/* Capabilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {CAPABILITIES.map((capability) => (
          <article
            key={capability.id}
            className={`
              group relative flex flex-col gap-6 rounded-3xl p-8 transition-all duration-300
              ${
                capability.isCustom
                  ? "bg-white/50 border-2 border-dashed border-neutral-300 hover:bg-white hover:border-[#1313ec]/50 items-center text-center justify-center cursor-pointer"
                  : "bg-white border border-neutral-200 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.08)] hover:shadow-[0_24px_50px_-12px_rgba(19,19,236,0.15)] hover:border-[#1313ec]/30 hover:-translate-y-1.5 cursor-pointer"
              }
            `}
          >
            {/* Icon */}
            {capability.isCustom ? (
              <div className="w-16 h-16 rounded-full bg-neutral-200/50 flex items-center justify-center mb-2 group-hover:bg-neutral-200 transition-colors">
                <span className="material-symbols-outlined text-3xl text-neutral-500">
                  {capability.icon}
                </span>
              </div>
            ) : (
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${capability.color}15` }}
              >
                <span
                  className="material-symbols-outlined text-3xl"
                  style={{ color: capability.color }}
                >
                  {capability.icon}
                </span>
              </div>
            )}

            {/* Title and Description */}
            <div className="flex flex-col gap-3 relative z-10">
              <h3 className="text-xl font-bold text-neutral-900 leading-tight group-hover:text-primary transition-colors">
                {capability.title}
              </h3>
              <p className="text-neutral-500 text-base leading-relaxed font-body">
                {capability.description}
              </p>
            </div>

            {/* Tags / Footer */}
            {capability.isCustom ? (
              <a
                href="#contact"
                className="font-bold text-base transition-colors hover:underline mt-2"
                style={{ color: "#1313ec" }}
              >
                Talk to us →
              </a>
            ) : (
              <div className="mt-auto pt-6 border-t border-neutral-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {capability.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-lg bg-neutral-50 text-xs font-semibold text-neutral-600 border border-neutral-100 group-hover:bg-white transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}
