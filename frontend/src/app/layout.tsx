import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
