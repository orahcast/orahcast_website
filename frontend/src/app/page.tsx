/**
 * Home Page
 * 
 * Main landing page for OrahCast website.
 * Assembles all section components into a cohesive page layout.
 */

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ProjectsSection from "@/components/ProjectsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

/**
 * Home page component
 * Renders the complete landing page with all sections
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section - Main tagline and mission */}
        <HeroSection />

        {/* Services Overview with Statistics */}
        <ServicesSection />

        {/* Core Capabilities Grid */}
        <CapabilitiesSection />

        {/* Featured Projects Showcase */}
        <ProjectsSection />

        {/* Call to Action */}
        <CTASection />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
