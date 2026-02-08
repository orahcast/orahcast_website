/**
 * Footer Component
 * 
 * Site footer with logo, copyright, and navigation links.
 * Responsive design - stacks vertically on mobile, horizontal on desktop.
 */

import Image from "next/image";
import Link from "next/link";

/**
 * Footer link type definition
 */
interface FooterLink {
  href: string;
  label: string;
  external?: boolean;
}

/**
 * Footer link configuration
 * Defines the utility links displayed in the footer
 */
const FOOTER_LINKS: FooterLink[] = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "https://twitter.com/orahcast", label: "Twitter", external: true },
];

/**
 * Footer component with logo and utility links
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-white overflow-visible">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-20 py-6">
        {/* Mobile Layout - Stacked */}
        <div className="flex flex-col items-center gap-4 md:hidden">
          {/* Logo */}
          <Link href="/" className="flex items-center -ml-8">
            <Image
              src="/Orahcast logo2 without background.png"
              alt="OrahCast Logo"
              width={580}
              height={150}
              className="h-[60px] w-auto"
            />
          </Link>

          {/* Links */}
          <nav className="flex items-center gap-4">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-500 hover:text-[#1313ec] transition-colors text-sm"
                {...(link.external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-neutral-400 text-xs text-center">
            {"\u00A9"} {currentYear} OrahCast Inc. All rights reserved.
          </p>
        </div>

        {/* Desktop Layout - Three columns */}
        <div className="hidden md:flex flex-row items-center justify-between">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center -ml-20 flex-1">
            <Image
              src="/Orahcast logo2 without background.png"
              alt="OrahCast Logo"
              width={580}
              height={150}
              style={{ height: '80px', width: 'auto' }}
            />
          </Link>

          {/* Copyright - Center */}
          <p className="text-neutral-500 text-sm flex-1 text-center">
            {"\u00A9"} {currentYear} OrahCast Inc. All rights reserved.
          </p>

          {/* Footer Links - Right */}
          <nav className="flex items-center gap-6 flex-1 justify-end">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-500 hover:text-[#1313ec] transition-colors text-sm"
                {...(link.external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
