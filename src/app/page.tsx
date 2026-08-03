import type { Metadata } from "next";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Problems from "../components/sections/Problems";
import StatsBanner from "../components/sections/StatsBanner";
import FeaturedProducts from "../components/sections/FeaturedProducts";
import ManufacturingExcellence from "../components/sections/ManufacturingExcellence";
import Industries from "../components/sections/Industries";
import WhyConchem from "../components/sections/WhyConchem";
import CallToAction from "../components/sections/CallToAction";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: `${company.name} | ${company.tagline}`,
  description: company.description,
  keywords: [
    "waterproofing chemicals",
    "construction chemicals",
    "mortar admixtures",
    "repair mortars",
    "tile adhesives",
    "Siliguri waterproofing",
    "Eastern India construction",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${company.name} | ${company.tagline}`,
    description: company.description,
    url: "/",
    siteName: company.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | ${company.tagline}`,
    description: company.description,
  },
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col gap-4 px-4 py-4">
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex flex-col gap-4 outline-none">
        <Hero />
        <Problems />
        <StatsBanner />
        <FeaturedProducts />
        <ManufacturingExcellence />
        <Industries />
        <WhyConchem />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}