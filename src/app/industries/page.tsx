import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Factory,
  Landmark,
  School,
  ShieldCheck,
  Store,
  Users,
  Wrench,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import Container from "../../components/ui/Container";
import IndustryImage from "../../components/ui/IndustryImage";
import Industries from "../../components/sections/Industries";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Trusted construction chemical and waterproofing solutions for residential, commercial, industrial, infrastructure, hospitality, and institutional projects.",
  keywords: [
    "residential waterproofing",
    "commercial construction chemicals",
    "industrial waterproofing",
    "infrastructure protection",
  ],
  alternates: {
    canonical: "/industries",
  },
  openGraph: {
    title: `Industries We Serve | ${company.name}`,
    description:
      "Trusted construction chemical and waterproofing solutions for residential, commercial, industrial, infrastructure, hospitality, and institutional projects.",
    url: "/industries",
    siteName: company.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Industries We Serve | ${company.name}`,
    description:
      "Trusted construction chemical and waterproofing solutions for residential, commercial, industrial, infrastructure, hospitality, and institutional projects.",
  },
};

const industryCards = [
  {
    title: "Residential",
    description: "Reliable waterproofing and protection systems for homes and housing communities.",
    icon: Store,
  },
  {
    title: "Commercial",
    description: "Solutions designed for offices, retail spaces and mixed-use developments.",
    icon: Building2,
  },
  {
    title: "Industrial",
    description: "Durable systems for factories, plants and demanding production environments.",
    icon: Factory,
  },
  {
    title: "Infrastructure",
    description: "Protection-focused solutions for public works and large structural projects.",
    icon: Landmark,
  },
  {
    title: "Hospitality",
    description: "Practical systems for hotels, resorts and guest-facing spaces that need reliability.",
    icon: Users,
  },
  {
    title: "Institutional",
    description: "Trusted products for schools, hospitals, campuses and similar facilities.",
    icon: School,
  },
];

const solutionStrengths = [
  {
    title: "Long-lasting performance",
    description: "Designed to support durable results in everyday site conditions.",
    icon: ShieldCheck,
  },
  {
    title: "Easy application",
    description: "Made for practical installation and straightforward on-site use.",
    icon: Wrench,
  },
  {
    title: "Quality manufacturing",
    description: "Built through controlled production and consistent manufacturing practices.",
    icon: Factory,
  },
  {
    title: "Regional support",
    description: "Backed by a team focused on projects across Eastern and North-Eastern India.",
    icon: Landmark,
  },
];

export default function IndustriesPage() {
  return (
    <div className="flex min-h-screen flex-col gap-4 px-4 py-4">
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex flex-col gap-4 outline-none">

      <section className="py-8 sm:py-10 lg:py-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
            <div className="order-1 max-w-2xl lg:order-none">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#6B7280] sm:text-sm">
                Industries
              </p>

              <h1 className="mt-4 max-w-xl text-[clamp(2.25rem,4.4vw,4.1rem)] leading-[0.95] font-semibold tracking-[-0.04em] text-[#111827]">
                Solutions Trusted Across
                <br />
                Every Industry
              </h1>

              {/* Mobile-only image: right after title and before paragraph (centered) */}
              <div className="mt-6 mx-auto flex w-full max-w-lg justify-center lg:hidden">
                <IndustryImage priority />
              </div>

              <p className="mt-5 max-w-2xl text-base leading-7 text-[#4B5563] sm:text-lg sm:leading-8">
                Conchem products are used across residential, commercial, infrastructure and
                industrial projects, with systems built to match the needs of each environment.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Button
                  type="button"
                  className="h-12 rounded-full bg-[#111827] px-8 text-sm font-semibold text-white transition-colors hover:bg-[#1F2937]"
                >
                  Explore Products
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

            {/* Desktop-only image */}
            <div className="hidden lg:block order-2 lg:order-none">
              <IndustryImage priority />
            </div>
          </div>
        </Container>
      </section>

      <Industries showLink={false} />

      <section className="py-8 sm:py-10 lg:py-14">
        <Container>
          <div className="max-w-2xl text-center mx-auto">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111827] sm:text-4xl">
              Why Our Solutions Work
            </h2>
            <p className="mt-4 text-base leading-7 text-[#4B5563] sm:text-lg sm:leading-8">
              Built on manufacturing quality, practical application and dependable regional support.
            </p>
          </div>

          <div className="mt-8 md:hidden">
            <div className="space-y-4">
              {solutionStrengths.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F3D4D8] bg-[#FFF7F8] text-[#C8102E]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      {index !== solutionStrengths.length - 1 ? (
                        <div className="mt-2 min-h-10 w-px bg-[#E5E7EB]" aria-hidden="true" />
                      ) : null}
                    </div>

                    <article className="flex-1 rounded-[1.5rem] border border-[#E5E7EB] bg-white p-5">
                      <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#111827]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[#4B5563]">{item.description}</p>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 hidden md:grid lg:hidden md:grid-cols-2 gap-4">
            {solutionStrengths.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] border border-[#E5E7EB] bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(17,24,39,0.05)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#F3D4D8] bg-[#FFF7F8] text-[#C8102E]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-[#111827]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#4B5563] sm:text-[15px]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-8 hidden lg:grid lg:grid-cols-4 gap-4">
            {solutionStrengths.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] border border-[#E5E7EB] bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(17,24,39,0.05)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#F3D4D8] bg-[#FFF7F8] text-[#C8102E]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-[#111827]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#4B5563] sm:text-[15px]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-8 sm:py-10 lg:py-14">
        <Container>
          <div className="mx-auto max-w-[780px] rounded-[2rem] border border-[#E5E7EB] bg-white px-6 py-12 text-center shadow-[0_1px_2px_rgba(17,24,39,0.03)] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111827] sm:text-4xl">
              Let&apos;s Find the Right Solution
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#4B5563] sm:text-lg sm:leading-8">
              Contact Conchem for recommendations tailored to your project, application and site
              conditions.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button type="button" className="h-12 rounded-full bg-[#111827] px-8 text-sm font-semibold text-white transition-colors hover:bg-[#1F2937]">
                Contact Us
              </Button>

              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#C8102E] transition-colors hover:text-[#A30E27]"
              >
                <span>Browse Products</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      </main>
      <Footer />
    </div>
  );
}