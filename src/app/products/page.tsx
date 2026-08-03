import { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import Container from "../../components/ui/Container";
import ProductCategories from "../../components/sections/ProductCategories";
import ProductCatalog from "../../components/sections/ProductCatalog";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore our range of high-performance waterproofing chemicals, mortar admixtures, repair mortars, tile adhesives, grouts, and primers.",
  keywords: [
    "waterproofing products",
    "mortar admixtures",
    "repair mortars",
    "tile adhesives",
    "grouts",
    "primers",
    "construction chemicals catalog",
  ],
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: `Products | ${company.name}`,
    description:
      "Explore our range of high-performance waterproofing chemicals, mortar admixtures, repair mortars, tile adhesives, grouts, and primers.",
    url: "/products",
    siteName: company.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Products | ${company.name}`,
    description:
      "Explore our range of high-performance waterproofing chemicals, mortar admixtures, repair mortars, tile adhesives, grouts, and primers.",
  },
};

function HeroProductImage({ className }: { className?: string }) {
  return (
    <div className={`relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto min-h-[240px] sm:min-h-[320px] lg:min-h-[560px] w-full overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-[#F8FAFC] p-3 shadow-[0_1px_2px_rgba(17,24,39,0.04)] ${className || ""}`}>
      <div className="relative h-full min-h-[216px] sm:min-h-[296px] lg:min-h-[536px] w-full overflow-hidden rounded-[1.5rem]">
        <Image
          src="/images/products/productfamily.png"
          alt="Conchem Product Family"
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col gap-4 px-4 py-4">
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex flex-col gap-4 outline-none">

      <section className="py-8 sm:py-10 lg:py-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
            <div className="order-1 max-w-2xl lg:order-none">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#6B7280] sm:text-sm">
                Product Range
              </p>

              <h1 className="mt-4 max-w-xl text-[clamp(2.25rem,4.4vw,4.1rem)] leading-[0.95] font-semibold tracking-[-0.04em] text-[#111827]">
                Construction Chemicals Built for Every Project
              </h1>

              {/* Mobile-only image: right after title and before paragraph (centered) */}
              <div className="mt-6 mx-auto flex w-full max-w-lg justify-center lg:hidden">
                <HeroProductImage />
              </div>

              <p className="mt-5 max-w-2xl text-base leading-7 text-[#4B5563] sm:text-lg sm:leading-8">
                Explore dependable product families designed to support waterproofing, repair and
                protection work across residential, commercial and industrial sites.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Link
                  href="#products-catalog"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#111827] px-8 text-sm font-semibold text-white transition-colors hover:bg-[#1F2937]"
                >
                  Browse Categories
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#C8102E] transition-colors hover:text-[#A30E27]"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Desktop-only image */}
            <div className="hidden lg:block order-2 lg:order-none">
              <HeroProductImage />
            </div>
          </div>
        </Container>
      </section>

      <ProductCategories />

      <Suspense
        fallback={
          <section className="py-8 sm:py-10 lg:py-14">
            <Container>
              <div className="h-64 w-full animate-pulse rounded-[2rem] bg-[#F1F5F9]" />
            </Container>
          </section>
        }
      >
        <ProductCatalog />
      </Suspense>
      </main>
      <Footer />
    </div>
  );
}