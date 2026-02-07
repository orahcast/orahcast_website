/**
 * Footer Component
 * 
 * Site footer with logo, copyright, and navigation links.
 * Provides consistent branding and legal/utility links.
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
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo and Copyright */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/Orahcast logo2.png"
                alt="OrahCast Logo"
                width={120}
                height={34}
                className="h-6 w-auto"
              />
            </Link>
            <span className="text-sm text-gray-500">
              {currentYear} OrahCast Inc. All rights reserved.
            </span>
          </div>

          {/* Footer Links */}
          <nav className="flex items-center gap-6">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-500 hover:text-primary transition-colors duration-200"
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
