import Link from "next/link";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";

import Container from "../ui/Container";
import { company } from "@/data/company";

type CallToActionProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CallToAction({
  title = company.cta.default.title,
  description = company.cta.default.description,
  primaryLabel = company.cta.default.primaryLabel,
  primaryHref = company.cta.default.primaryHref,
}: CallToActionProps) {
  return (
    <section className="py-10 sm:py-14 lg:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[#E5E7EB] bg-white px-6 py-12 text-center shadow-xs transition-all duration-200 hover:shadow-md sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          {/* Soft ambient red glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(200,16,46,0.06)_0%,transparent_70%)] blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(200,16,46,0.05)_0%,transparent_70%)] blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#F3D4D8] bg-[#FFF7F8] px-4 py-1.5 text-xs font-semibold text-[#C8102E]">
              <span>🏗️ Direct Factory Sales & Technical Support</span>
            </span>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl lg:text-5xl">
              {title}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#4B5563] sm:text-lg sm:leading-8">
              {description}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={primaryHref}
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#111827] px-8 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-[#1F2937] active:scale-95"
              >
                <span>{primaryLabel}</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <a
                href={`https://wa.me/${company.phone.primary.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#F3D4D8] bg-[#FFF7F8] px-6 text-sm font-semibold text-[#C8102E] transition-all duration-200 hover:bg-[#FEE2E2]"
              >
                <MessageCircle className="mr-2 h-4 w-4 text-[#25D366]" />
                <span>WhatsApp Technical Query</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 border-t border-[#F3F4F6] pt-6 text-xs text-[#6B7280] sm:text-sm">
              <a href={company.phone.primaryHref} className="flex items-center gap-2 font-medium text-[#111827] hover:text-[#C8102E]">
                <Phone className="h-4 w-4 text-[#C8102E]" />
                Call +91 9641335076
              </a>
              <span className="hidden sm:inline">•</span>
              <span>Fast Regional Delivery (East & NE India)</span>
              <span className="hidden sm:inline">•</span>
              <span>Contractor Dosing Support</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}