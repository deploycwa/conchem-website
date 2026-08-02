import Link from "next/link";

import Container from "../ui/Container";

export default function CallToAction() {
  return (
    <section className="py-8 sm:py-10 lg:py-14">
      <Container>
        <div className="mx-auto max-w-[780px] rounded-[2rem] border border-[#E5E7EB] bg-white px-6 py-12 text-center shadow-[0_1px_2px_rgba(17,24,39,0.03)] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111827] sm:text-4xl">
            Ready to Build Stronger, Longer-Lasting Structures?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#4B5563] sm:text-lg sm:leading-8">
            Whether you&apos;re a contractor, builder, distributor, or homeowner, our team is ready to
            help you choose the right waterproofing solution.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#111827] px-8 text-sm font-semibold text-white transition-colors hover:bg-[#1F2937]"
            >
              Contact Us
            </Link>

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
  );
}