import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Brush,
  Droplets,
  Factory,
  Layers3,
  Lightbulb,
  Search,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import Container from "../../components/ui/Container";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Complete system-based construction solutions for waterproofing, structural repair, concrete protection, tile fixing, and surface preparation.",
  keywords: [
    "waterproofing solutions",
    "structural repair systems",
    "concrete protection",
    "surface preparation",
    "building repair solutions",
  ],
  alternates: {
    canonical: "/solutions",
  },
  openGraph: {
    title: `Solutions | ${company.name}`,
    description:
      "Complete system-based construction solutions for waterproofing, structural repair, concrete protection, tile fixing, and surface preparation.",
    url: "/solutions",
    siteName: company.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Solutions | ${company.name}`,
    description:
      "Complete system-based construction solutions for waterproofing, structural repair, concrete protection, tile fixing, and surface preparation.",
  },
};

const solutionCategories = [
  {
    title: "Waterproofing",
    description: "System-based solutions designed to help protect structures from water ingress.",
    icon: Droplets,
  },
  {
    title: "Repair & Restoration",
    description: "Products and systems that support durable repairs and structural recovery.",
    icon: Wrench,
  },
  {
    title: "Concrete Protection",
    description: "Protection-focused solutions for concrete durability and long-term performance.",
    icon: ShieldCheck,
  },
  {
    title: "Tile & Flooring",
    description: "Bonding and fixing systems for reliable tile and floor installation work.",
    icon: Layers3,
  },
  {
    title: "Surface Preparation",
    description: "Primers and preparation products that help improve application outcomes.",
    icon: Brush,
  },
  {
    title: "Industrial Coatings",
    description: "Coating-oriented solutions for demanding industrial and maintenance needs.",
    icon: Factory,
  },
];

const howWeWorkSteps = [
  {
    title: "Identify",
    description: "Understand the site condition, challenge and project requirement.",
    icon: Search,
  },
  {
    title: "Recommend",
    description: "Suggest a complete solution set aligned to the application.",
    icon: Lightbulb,
  },
  {
    title: "Apply",
    description: "Choose the right products and follow the intended system approach.",
    icon: Brush,
  },
  {
    title: "Protect",
    description: "Deliver durable protection for the structure and its use case.",
    icon: ShieldCheck,
  },
];

export default function SolutionsPage() {
  return (
    <main className="flex min-h-screen flex-col gap-4 px-4 py-4">
      <Navbar />

      <section className="py-8 sm:py-10 lg:py-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
            <div className="order-1 max-w-2xl lg:order-none">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#6B7280] sm:text-sm">
                Solutions
              </p>

              <h1 className="mt-4 max-w-xl text-[clamp(2.25rem,4.4vw,4.1rem)] leading-[0.95] font-semibold tracking-[-0.04em] text-[#111827]">
                Construction Solutions
                <br />
                for Every Challenge
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-[#4B5563] sm:text-lg sm:leading-8">
                Conchem provides complete waterproofing, repair and protection systems rather than
                individual products, helping projects move from diagnosis to lasting performance.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Button
                  type="button"
                  className="h-12 rounded-full bg-[#111827] px-8 text-sm font-semibold text-white transition-colors hover:bg-[#1F2937]"
                >
                  Explore Solutions
                </Button>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#C8102E] transition-colors hover:text-[#A30E27]"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="order-2 lg:order-none">
              <div className="flex min-h-[320px] items-center justify-center rounded-[2rem] border border-[#E5E7EB] bg-[#F8FAFC] px-6 py-10 shadow-[0_1px_2px_rgba(17,24,39,0.04)] sm:min-h-[420px] lg:min-h-[560px]">
                <div className="flex h-full w-full items-center justify-center rounded-[1.5rem] border border-dashed border-[#CBD5E1] bg-white px-6 py-16 text-center">
                  <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#6B7280] sm:text-base">
                    SOLUTION IMAGE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-8 sm:py-10 lg:py-14">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111827] sm:text-4xl">
              Our Solutions
            </h2>
            <p className="mt-4 text-base leading-7 text-[#4B5563] sm:text-lg sm:leading-8">
              Explore system-led solution categories built to address waterproofing, repair and
              protection needs across different project conditions.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {solutionCategories.map((category) => {
              const Icon = category.icon;

              return (
                <article
                  key={category.title}
                  className="group rounded-[1.5rem] border border-[#E5E7EB] bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(17,24,39,0.05)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#F3D4D8] bg-[#FFF7F8] text-[#C8102E]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-[#111827]">
                    {category.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#4B5563] sm:text-[15px]">
                    {category.description}
                  </p>

                  <Link
                    href="/products"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#C8102E] transition-colors group-hover:text-[#A30E27]"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-8 sm:py-10 lg:py-14">
        <Container>
          <div className="max-w-2xl text-center mx-auto">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111827] sm:text-4xl">
              How We Work
            </h2>
            <p className="mt-4 text-base leading-7 text-[#4B5563] sm:text-lg sm:leading-8">
              A simple process focused on understanding the challenge and applying the right
              solution system.
            </p>
          </div>

          <div className="mt-8 md:hidden">
            <div className="space-y-4">
              {howWeWorkSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div key={step.title} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F3D4D8] bg-[#FFF7F8] text-[#C8102E]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      {index !== howWeWorkSteps.length - 1 ? (
                        <div className="mt-2 min-h-10 w-px bg-[#E5E7EB]" aria-hidden="true" />
                      ) : null}
                    </div>

                    <article className="flex-1 rounded-[1.5rem] border border-[#E5E7EB] bg-white p-5">
                      <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#111827]">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[#4B5563]">{step.description}</p>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 hidden md:grid lg:hidden md:grid-cols-2 gap-4">
            {howWeWorkSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.title}
                  className="rounded-[1.5rem] border border-[#E5E7EB] bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(17,24,39,0.05)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#F3D4D8] bg-[#FFF7F8] text-[#C8102E]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-[#111827]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#4B5563] sm:text-[15px]">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-8 hidden lg:flex lg:items-stretch lg:gap-4">
            {howWeWorkSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.title} className="flex flex-1 items-stretch gap-4">
                  <article className="flex-1 rounded-[1.5rem] border border-[#E5E7EB] bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(17,24,39,0.05)]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#F3D4D8] bg-[#FFF7F8] text-[#C8102E]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-[#111827]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#4B5563] sm:text-[15px]">
                      {step.description}
                    </p>
                  </article>

                  {index !== howWeWorkSteps.length - 1 ? (
                    <div className="flex w-10 items-center justify-center text-[#C8102E]" aria-hidden="true">
                      <ArrowDown className="h-5 w-5" />
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}