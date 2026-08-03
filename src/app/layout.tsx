import type { Metadata } from "next";
import "./globals.css";
import { Inter, Manrope } from "next/font/google";

import AnalyticsProvider from "@/components/analytics/AnalyticsProvider";
import FloatingContact from "@/src/components/ui/FloatingContact";
import { company } from "@/data/company";
import { images } from "@/data/images";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const baseUrl = new URL(company.website);

export const metadata: Metadata = {
  metadataBase: baseUrl,
  title: {
    default: `${company.name} | ${company.tagline}`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  keywords: [
    "waterproofing chemicals",
    "construction chemicals",
    "mortar admixtures",
    "concrete repair mortars",
    "tile adhesives",
    "primers",
    "waterproofing solutions",
    "Siliguri",
    "West Bengal",
    "Eastern India",
    "North-East India",
    company.name,
    company.shortName,
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: company.website,
    siteName: company.name,
    title: `${company.name} | ${company.tagline}`,
    description: company.description,
    images: [
      {
        url: images.logo.badge,
        width: 1024,
        height: 724,
        alt: `${company.name} Logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | ${company.tagline}`,
    description: company.description,
    images: [images.logo.badge],
  },
  icons: [
    { rel: "icon", url: images.logo.favicon, sizes: "any" },
    { rel: "icon", url: images.logo.favicon, sizes: "192x192", type: "image/png" },
    { rel: "icon", url: images.logo.favicon, sizes: "512x512", type: "image/png" },
    { rel: "apple-touch-icon", url: images.logo.favicon, sizes: "180x180", type: "image/png" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable + " " + inter.variable}>
      <body className="relative min-h-full overflow-x-hidden antialiased selection:bg-[#C8102E] selection:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[#111827] focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white focus:outline-none focus:ring-2 focus:ring-[#C8102E]"
        >
          Skip to main content
        </a>
        {children}
        <FloatingContact />
        <AnalyticsProvider />
      </body>
    </html>
  );
}