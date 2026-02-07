/**
 * HeroSection Component
 * 
 * Main hero section with the company tagline and mission statements.
 * Features a two-column layout on desktop with mission/vision content.
 */

/**
 * HeroSection component for the landing page
 * Displays the main value proposition and mission statements
 */
export default function HeroSection() {
  return (
    <section id="home" className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Main Tagline */}
        <div className="max-w-4xl mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight">
            Illuminating Data.
            <br />
            <span className="italic text-purple-500">Forecasting the</span>
            <br />
            <span className="italic text-purple-500">Future.</span>
          </h1>
        </div>

        {/* Mission and Vision Columns */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
          {/* Our Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                Our Mission
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              To define the horizon of technical leadership by transforming complexity into clarity.
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We exist to build where data isn&apos;t just stored, but purposeful.
              Our quest is to power the next generation of intelligent
              systems that don&apos;t just react, but anticipate.
            </p>
          </div>

          {/* Our Approach */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span>
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                Our Approach
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              Empowering modern enterprises with scalable, future-proof digital architectures.
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We bridge the gap between ambitious ideas and technical
              execution. Through rigorous engineering and strategic
              foresight, we build the foundation for your sustainable
              growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
