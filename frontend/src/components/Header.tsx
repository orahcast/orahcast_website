/**
 * Header Component
 *
 * Main navigation header for the OrahCast website.
 * Scroll-aware frosted glass effect, responsive with mobile hamburger menu.
 */

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
] as const;

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: isScrolled
            ? "rgba(255,255,255,0.85)"
            : "rgba(255,255,255,1)",
          backdropFilter: isScrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(16px)" : "none",
          borderBottom: isScrolled
            ? "1px solid rgba(0,0,0,0.06)"
            : "1px solid rgba(0,0,0,0.04)",
          boxShadow: isScrolled
            ? "0 4px 24px -4px rgba(0,0,0,0.06)"
            : "none",
        }}
      >
        <nav className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-20 h-16 md:h-20">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/Orahcast logo2 without background.png"
                alt="OrahCast Logo"
                width={240}
                height={72}
                priority
                className="h-[38px] md:h-[46px] w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-neutral-500 hover:text-[#1313ec] transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#1313ec] rounded-full transition-all duration-200 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <Link
                href="#contact"
                className="relative inline-flex items-center gap-2 bg-[#1313ec] hover:bg-[#0a0aaa] text-sm font-bold rounded-xl px-5 py-2.5 transition-all duration-200 overflow-hidden group"
                style={{ boxShadow: "0 8px 32px -8px rgba(19,19,236,0.35)", color: "#ffffff" }}
              >
                <span className="relative z-10">Contact Us</span>
                <svg
                  className="w-3.5 h-3.5 relative z-10 transition-transform duration-200 group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                {/* shimmer */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-neutral-700 hover:text-[#1313ec] transition-colors relative z-[60]"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2.5" : ""
                    }`}
                />
                <span
                  className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? "opacity-0 scale-x-0" : ""
                    }`}
                />
                <span
                  className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-[55] md:hidden transition-all duration-300 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        style={{ top: "64px", backgroundColor: "#ffffff" }}
      >
        <div className="flex flex-col h-full px-6 py-8">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-2xl font-semibold text-neutral-900 hover:text-[#1313ec] transition-colors py-3 border-b border-neutral-100"
                style={{
                  transitionDelay: isMobileMenuOpen ? `${i * 60}ms` : "0ms",
                  transform: isMobileMenuOpen ? "translateX(0)" : "translateX(-16px)",
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transition: "all 0.3s ease",
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-auto pb-8">
            <Link
              href="#contact"
              className="w-full bg-[#1313ec] hover:bg-[#0a0aaa] text-lg font-bold rounded-xl py-4 flex items-center justify-center gap-2 transition-all"
              style={{ boxShadow: "0 8px 32px -8px rgba(19,19,236,0.4)", color: "#ffffff" }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
