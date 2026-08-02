import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import Container from "../ui/Container";

type FeaturedProduct = {
  name: string;
  description: string;
  bullets: string[];
  sizes: string[];
  reverse: boolean;
};

const featuredProducts: FeaturedProduct[] = [
  {
    name: "Latex M.P.",
    description:
      "A reliable waterproofing additive designed to improve bonding, flexibility and durability in demanding construction applications.",
    bullets: ["Improves adhesion and workability", "Supports waterproof repair mixes", "Helps reduce surface dusting"],
    sizes: ["1 L", "5 L", "20 L"],
    reverse: false,
  },
  {
    name: "Plastomix",
    description:
      "A dependable solution for strengthening mortar performance, helping teams achieve consistent results across site conditions.",
    bullets: ["Enhances mortar cohesiveness", "Supports smoother application", "Built for site-ready reliability"],
    sizes: ["1 L", "5 L", "25 L"],
    reverse: true,
  },
  {
    name: "Rust Stop",
    description:
      "A protective treatment that helps safeguard reinforcement steel and critical surfaces from corrosion-related damage.",
    bullets: ["Protects steel reinforcement", "Supports long-term durability", "Ideal for repair and maintenance work"],
    sizes: ["500 ml", "1 L", "5 L"],
    reverse: false,
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-8 sm:py-10 lg:py-14">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111827] sm:text-4xl">
            Featured Products
          </h2>
          <p className="mt-4 text-base leading-7 text-[#4B5563] sm:text-lg sm:leading-8">
            Engineered to solve real construction challenges with reliable waterproofing and
            protection solutions.
          </p>
        </div>

        <div className="mt-8 space-y-0 divide-y divide-[#E5E7EB] rounded-[2rem] border border-[#E5E7EB] bg-white">
          {featuredProducts.map((product) => {
            const imageOrder = product.reverse ? "lg:order-2" : "lg:order-1";
            const contentOrder = product.reverse ? "lg:order-1" : "lg:order-2";

            return (
              <article key={product.name} className="p-6 sm:p-8 lg:p-10">
                <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
                  <div className={imageOrder}>
                    <div className="flex min-h-[260px] items-center justify-center rounded-[2rem] border border-[#E5E7EB] bg-[#FBFBFB] px-6 py-10 sm:min-h-[320px] lg:min-h-[360px]">
                      <div className="flex h-full w-full items-center justify-center rounded-[1.5rem] border border-dashed border-[#D1D5DB] bg-white px-6 py-14 text-center">
                        <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#6B7280] sm:text-base">
                          PRODUCT IMAGE
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className={contentOrder}>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C8102E]">
                      Featured Product
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#111827] sm:text-[2rem]">
                      {product.name}
                    </h3>

                    <p className="mt-4 max-w-xl text-base leading-7 text-[#4B5563]">
                      {product.description}
                    </p>

                    <ul className="mt-6 space-y-3 text-sm text-[#374151] sm:text-[15px]">
                      {product.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#C8102E]" aria-hidden="true" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {product.sizes.map((size) => (
                        <span
                          key={size}
                          className="inline-flex items-center rounded-full border border-[#E5E7EB] bg-[#FAFAFA] px-3 py-1 text-xs font-medium text-[#374151]"
                        >
                          {size}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="#products"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#C8102E] transition-colors hover:text-[#A30E27]"
                    >
                      <span>Explore Product</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="#products"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#111827] px-7 text-sm font-semibold text-white transition-colors hover:bg-[#1F2937]"
          >
            View All Products
          </Link>
        </div>
      </Container>
    </section>
  );
}