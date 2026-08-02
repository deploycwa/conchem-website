import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import Container from "../ui/Container";
import HeroImage from "../ui/HeroImage";
import MotionSection from "../ui/MotionSection";
import { company } from "@/data/company";

export default function Hero() {
  return (
    <section className="py-8 sm:py-10 lg:py-14">
      <Container>
        <MotionSection direction="bottom" className="grid gap-10 lg:grid-cols-[55fr_45fr] lg:items-center lg:gap-10">
          <div className="order-1 max-w-2xl lg:order-none">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#6B7280] sm:text-sm">
              {company.name}
            </p>

            <h1 className="mt-4 max-w-xl text-[clamp(2.25rem,4.4vw,4.1rem)] leading-[0.95] font-semibold tracking-[-0.04em] text-[#111827]">
              {company.tagline}
            </h1>

            {/* Mobile-only: image between title and paragraph */}
            <div className="mt-6 lg:hidden">
              <HeroImage />
            </div>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#4B5563] sm:text-lg sm:leading-8">
              Premium construction chemicals engineered for waterproofing, repair, bonding, and
              long-lasting structural protection.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="/products"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#111827] px-8 text-sm font-semibold text-white transition-colors hover:bg-[#1F2937]"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#D1D5DB] bg-white px-6 text-sm font-semibold text-[#111827] transition-colors hover:border-[#9CA3AF] hover:bg-[#F9FAFB]"
              >
                Contact Us
              </Link>
            </div>

            <ul className="mt-8 space-y-3 text-sm text-[#374151] sm:text-[15px]">
              {company.trustPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#C8102E]" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop-only: image in right column */}
          <div className="hidden lg:flex order-2 lg:order-none items-center">
            <HeroImage className="w-full" />
          </div>
        </MotionSection>
      </Container>
    </section>
  );
}