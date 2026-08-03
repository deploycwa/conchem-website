"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import Container from "../ui/Container";
import HeroImage from "../ui/HeroImage";
import MotionSection from "../ui/MotionSection";
import { company } from "@/data/company";
import { triggerHaptic } from "@/src/lib/haptics";

export default function Hero() {
  return (
    <section className="relative py-8 sm:py-10 lg:py-14">
      {/* Logo-inspired ambient red glow orb */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-0 -z-10 h-[360px] w-[360px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(200,16,46,0.12),transparent_70%)] blur-3xl sm:h-[500px] sm:w-[500px]"
      />
      <Container>
        <MotionSection direction="bottom" className="grid gap-10 lg:grid-cols-[55fr_45fr] lg:items-center lg:gap-10">
          <div className="order-1 max-w-2xl lg:order-none">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#6B7280] sm:text-sm">
              {company.name}
            </p>

            <h1 className="mt-4 max-w-xl text-[clamp(2.25rem,4.4vw,4.1rem)] leading-[0.95] font-semibold tracking-[-0.04em] text-[#111827]">
              {company.tagline}
            </h1>

            {/* Mobile-only: image between title and paragraph (centered) */}
            <div className="mt-6 mx-auto flex w-full max-w-lg justify-center lg:hidden">
              <HeroImage className="w-full" />
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

            <div className="mt-8 pt-6 border-t border-[#E5E7EB]/80">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280]">
                Quick Solution Finder
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  { label: "💧 Waterproofing", href: "/products?category=Waterproofing#products-catalog" },
                  { label: "🧱 Crack-Free Plaster", href: "/products?category=Admixtures#products-catalog" },
                  { label: "⛓️ Steel Corrosion", href: "/products?category=Repair+Mortars#products-catalog" },
                  { label: "🪨 Tile & Marble Fixing", href: "/products?category=Tile+Adhesives#products-catalog" },
                ].map((pill) => (
                  <Link
                    key={pill.label}
                    href={pill.href}
                    onClick={() => triggerHaptic(12)}
                    className="inline-flex items-center rounded-full border border-[#E5E7EB] bg-white/80 px-3.5 py-1.5 text-xs font-medium text-[#111827] shadow-xs backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#C8102E]/40 hover:bg-[#FFF7F8] hover:text-[#C8102E] hover:shadow-sm active:scale-95"
                  >
                    {pill.label}
                  </Link>
                ))}
              </div>
            </div>
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