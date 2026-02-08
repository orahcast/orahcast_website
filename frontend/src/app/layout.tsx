/**
 * Root Layout
 * 
 * Main layout component for the OrahCast website.
 * Configures fonts (Space Grotesk, Space Mono, Noto Sans) and metadata.
 */

import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono, Noto_Sans } from "next/font/google";
import "./globals.css";

/**
 * Display font - Space Grotesk
 * Used for headings and prominent text
 */
const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

/**
 * Monospace font - Space Mono
 * Used for labels, tags, and code-like text
 */
const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

/**
 * Body font - Noto Sans
 * Used for body text and descriptions
 */
const notoSans = Noto_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

/**
 * Site metadata for SEO and browser display
 */
export const metadata: Metadata = {
  title: "OrahCast - Illuminating Data. Forecasting the Future.",
  description:
    "OrahCast empowers modern enterprises with scalable, future-proof digital architectures. Expert engineering in web, mobile, AI/ML, and cloud solutions.",
  keywords: [
    "software engineering",
    "digital transformation",
    "AI",
    "machine learning",
    "cloud solutions",
    "web development",
    "mobile development",
  ],
  authors: [{ name: "OrahCast" }],
  openGraph: {
    title: "OrahCast - Illuminating Data. Forecasting the Future.",
    description:
      "Expert engineering in web, mobile, AI/ML, and cloud solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Material Symbols for icons */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${spaceMono.variable} ${notoSans.variable} antialiased bg-white text-neutral-900 font-sans overflow-x-hidden`}
        style={{ fontFamily: 'var(--font-display), "Space Grotesk", sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
