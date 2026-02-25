/**
 * Home Page
 *
 * Section order: Hero → Capabilities → Projects → Mission/Vision → Contact → Footer
 */

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ProjectsSection from "@/components/ProjectsSection";
import MissionSection from "@/components/MissionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <Header />

      <main>
        {/* Hero — Headline & CTA */}
        <HeroSection />

        {/* Core Capabilities — 6-card grid */}
        <CapabilitiesSection />

        {/* Projects — Portfolio showcase */}
        <ProjectsSection />

        {/* Mission & Vision */}
        <MissionSection />

        {/* Contact — Email & Phone */}
        <ContactSection />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
