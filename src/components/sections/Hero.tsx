import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import Container from "../ui/Container";

const trustPoints = [
  "Manufacturing Since 2001",
  "Factory in Siliguri, West Bengal",
  "Serving Eastern & North-Eastern India",
];

export default function Hero() {
  return (
    <section className="py-8 sm:py-10 lg:py-14">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[55fr_45fr] lg:items-center lg:gap-10">
          <div className="order-1 max-w-2xl lg:order-none">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#6B7280] sm:text-sm">
              Trusted Waterproofing Solutions Since 2001
            </p>

            <h1 className="mt-4 max-w-xl text-[clamp(2.25rem,4.4vw,4.1rem)] leading-[0.95] font-semibold tracking-[-0.04em] text-[#111827]">
              Protect Every Structure with Confidence.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#4B5563] sm:text-lg sm:leading-8">
              Conchem International manufactures high-performance waterproofing and construction
              chemicals trusted by builders, contractors and homeowners across{" "}
              <span className="font-medium text-[#C8102E]">Eastern and North-Eastern India.</span>
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="#products"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#111827] px-8 text-sm font-semibold text-white transition-colors hover:bg-[#1F2937]"
              >
                Explore Products
              </Link>
              <Link
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#D1D5DB] bg-white px-6 text-sm font-semibold text-[#111827] transition-colors hover:border-[#9CA3AF] hover:bg-[#F9FAFB]"
              >
                Contact Us
              </Link>
            </div>

            <ul className="mt-8 space-y-3 text-sm text-[#374151] sm:text-[15px]">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#C8102E]" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-2 lg:order-none">
            <div className="flex min-h-[320px] h-full items-center justify-center rounded-[2rem] border border-[#E5E7EB] bg-[#F8FAFC] px-6 py-10 shadow-[0_1px_2px_rgba(17,24,39,0.04)] sm:min-h-[420px] lg:min-h-[560px]">
              <div className="flex h-full w-full items-center justify-center rounded-[1.5rem] border border-dashed border-[#CBD5E1] bg-white px-6 py-16 text-center">
                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#6B7280] sm:text-base">
                  HERO VISUAL
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}