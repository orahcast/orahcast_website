/**
 * CTASection Component
 * 
 * Call-to-action section with dark background, dot pattern,
 * compelling headline, and action buttons.
 */

import Link from "next/link";

/**
 * CTASection component for driving user engagement
 */
export default function CTASection() {
  return (
    <section 
      id="contact" 
      className="w-full mt-auto relative overflow-hidden"
      style={{ backgroundColor: '#101018' }}
    >
      {/* Dot pattern background */}
      <div 
        className="absolute inset-0 z-0 opacity-40"
        style={{ 
          backgroundImage: 'radial-gradient(#1313ec 1px, transparent 1px)', 
          backgroundSize: '32px 32px' 
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 py-20 lg:px-20 lg:py-32 flex flex-col items-center text-center gap-8">
        {/* Headline */}
        <h2 
          className="text-4xl md:text-5xl font-black tracking-tight max-w-3xl"
          style={{ color: '#ffffff' }}
        >
          Ready to build something{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">great</span>?
        </h2>

        {/* Description */}
        <p style={{ color: '#9ca3af' }} className="text-lg max-w-2xl font-body">
          Let&apos;s discuss how OrahCast can accelerate your digital transformation with our expert engineering teams.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
          <Link
            href="mailto:hello@orahcast.com"
            className="bg-[#1313ec] hover:bg-blue-600 text-base font-bold rounded-lg h-12 px-8 transition-all min-w-[200px] flex items-center justify-center"
            style={{ boxShadow: '0 20px 40px -10px rgba(19, 19, 236, 0.3)', color: '#ffffff' }}
          >
            Schedule Consultation
          </Link>
          <Link
            href="#projects"
            className="bg-transparent hover:bg-white/5 border border-neutral-600 text-base font-bold rounded-lg h-12 px-8 transition-all min-w-[200px] flex items-center justify-center"
            style={{ color: '#ffffff' }}
          >
            View Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}
