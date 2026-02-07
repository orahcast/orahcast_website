/**
 * CTASection Component
 * 
 * Call-to-action section with dark background,
 * compelling headline, and action buttons.
 */

import Link from "next/link";

/**
 * CTASection component for driving user engagement
 */
export default function CTASection() {
  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
          Ready to build something{" "}
          <span className="italic text-purple-400">great</span>?
        </h2>

        {/* Description */}
        <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg">
          Let&apos;s discuss how OrahCast can accelerate your digital transformation with our
          expert engineering team.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="mailto:hello@orahcast.com"
            className="btn btn-primary px-8 py-3"
          >
            Schedule a Consultation
          </Link>
          <Link
            href="#projects"
            className="btn btn-secondary px-8 py-3"
          >
            View Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}
