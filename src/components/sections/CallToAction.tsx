import Link from "next/link";

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
  secondaryLabel = company.cta.default.secondaryLabel,
  secondaryHref = company.cta.default.secondaryHref,
}: CallToActionProps) {
  return (
    <section className="py-8 sm:py-10 lg:py-14">
      <Container>
        <div className="mx-auto max-w-[780px] rounded-[2rem] border border-[#E5E7EB] bg-white px-6 py-12 text-center shadow-[0_1px_2px_rgba(17,24,39,0.03)] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111827] sm:text-4xl">
            {title}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#4B5563] sm:text-lg sm:leading-8">
            {description}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={primaryHref}
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#111827] px-8 text-sm font-semibold text-white transition-colors hover:bg-[#1F2937]"
            >
              {primaryLabel}
            </Link>

            <Link
              href={secondaryHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#C8102E] transition-colors hover:text-[#A30E27]"
            >
              <span>{secondaryLabel}</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}