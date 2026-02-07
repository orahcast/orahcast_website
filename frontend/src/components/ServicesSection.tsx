/**
 * ServicesSection Component
 * 
 * Services overview section featuring the "Engineering The Future" heading,
 * descriptive text, and key statistics about the company.
 */

/**
 * Statistics data configuration
 * Displays key company metrics in a prominent row
 */
const STATS = [
  { value: "150+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "10+ Yrs", label: "Industry Experience" },
  { value: "25+", label: "Expert Team Members" },
] as const;

/**
 * ServicesSection component showing company capabilities overview
 */
export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            Services
          </span>
          <span className="text-gray-300">|</span>
          <span className="text-sm font-medium text-purple-500 uppercase tracking-wider">
            Projects
          </span>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Heading */}
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold">
              Engineering
              <br />
              <span className="italic text-purple-500">The Future</span>
            </h2>
          </div>

          {/* Description */}
          <div className="flex items-center">
            <p className="text-gray-600 text-lg leading-relaxed">
              We develop high-performance technical teams to
              build scalable solutions. From strategic consulting
              to full-stack execution.
            </p>
          </div>
        </div>

        {/* Statistics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-200">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
