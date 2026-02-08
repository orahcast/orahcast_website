/**
 * ServicesSection Component
 * 
 * Services overview section featuring the "Engineering The Future" heading
 * and descriptive text.
 */

/**
 * ServicesSection component showing company capabilities overview
 */
export default function ServicesSection() {
  return (
    <section id="services" className="w-full max-w-[1280px] mx-auto px-6 py-12 md:py-20 lg:px-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-neutral-200 pb-12">
        <div className="flex flex-col gap-4 max-w-2xl">
          <p className="font-mono text-sm tracking-widest uppercase font-bold" style={{ color: '#1313ec' }}>
            Services &amp; Projects
          </p>
          <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tight text-neutral-900">
            Engineering
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1313ec] to-purple-500">
              The Future
            </span>
          </h2>
        </div>

        <div className="max-w-md pb-2">
          <p className="text-neutral-600 text-lg leading-relaxed font-body">
            We deploy high-performance technical teams to build scalable solutions. From strategic consulting to full-stack execution.
          </p>
        </div>
      </div>
    </section>
  );
}
