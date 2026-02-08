/**
 * Header Component
 * 
 * Main navigation header for the OrahCast website.
 * Features the company logo, navigation links, and a call-to-action button.
 * Fully responsive with mobile hamburger menu.
 */

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

/**
 * Navigation link configuration
 * Defines the main navigation items for the header
 */
const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
] as const;

/**
 * Header component providing main site navigation
 */
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when screen becomes larger
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  /**
   * Toggles the mobile navigation menu visibility
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-100">
        <nav className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-20 h-16 md:h-20">
          <div className="flex items-center justify-between h-full">
            {/* Logo - responsive sizing */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/Orahcast logo2 without background.png"
                alt="OrahCast Logo"
                width={200}
                height={52}
                priority
                className="h-[40px] md:h-[48px] w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-neutral-600 hover:text-[#1313ec] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <Link
                href="#contact"
                className="bg-[#1313ec] hover:bg-blue-700 text-sm font-bold rounded-lg px-5 py-2.5 transition-all"
                style={{ boxShadow: '0 10px 40px -10px rgba(19, 19, 236, 0.25)', color: '#ffffff' }}
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-neutral-900 hover:text-[#1313ec] transition-colors relative z-[60]"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                /* Close Icon */
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                /* Hamburger Icon */
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Menu - Full screen overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-[55] md:hidden"
          style={{ backgroundColor: '#ffffff', top: '64px' }}
        >
          <div className="flex flex-col h-full px-6 py-8">
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-2xl font-semibold text-neutral-900 hover:text-[#1313ec] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            <div className="mt-auto pb-8">
              <Link
                href="#contact"
                className="w-full bg-[#1313ec] hover:bg-blue-700 text-lg font-bold rounded-lg py-4 flex items-center justify-center transition-all"
                style={{ color: '#ffffff' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
