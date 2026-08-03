import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import Container from "../ui/Container";
import ProductImage from "../ui/ProductImage";
import MotionSection from "../ui/MotionSection";
import { getFeaturedProducts } from "@/data/products";

const featuredProducts = getFeaturedProducts();

export default function FeaturedProducts() {
  return (
    <section className="py-8 sm:py-10 lg:py-14">
      <Container>
        <MotionSection direction="left">
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
            {featuredProducts.map((product, index) => {
              const isReverse = index % 2 !== 0;
              const imageOrder = isReverse ? "lg:order-2" : "lg:order-1";
              const contentOrder = isReverse ? "lg:order-1" : "lg:order-2";

              return (
                <article key={product.slug} className="group relative p-5 sm:p-8 lg:p-10 transition-colors hover:bg-[#FAFBFD]">
                  <Link
                    href={`/products/${product.slug}`}
                    className="absolute inset-0 z-10"
                    aria-label={`Explore ${product.name}`}
                  />
                  <div className="grid gap-5 lg:grid-cols-2 lg:items-center lg:gap-10">
                    <div className={imageOrder}>
                      <ProductImage
                        slug={product.slug}
                        placeholderText={product.imagePlaceholder}
                        variant="featured"
                        className="min-h-[180px] sm:min-h-[320px] lg:min-h-[360px]"
                      />
                    </div>

                    <div className={contentOrder}>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C8102E]">
                        Featured Product
                      </p>

                      <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-[#111827] transition-colors group-hover:text-[#C8102E] sm:mt-3 sm:text-[2rem]">
                        {product.name}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#4B5563] sm:hidden">
                        {product.shortDescription}
                      </p>
                      <p className="mt-4 hidden max-w-xl text-base leading-7 text-[#4B5563] sm:block">
                        {product.fullDescription}
                      </p>

                      <ul className="mt-6 hidden space-y-3 text-sm text-[#374151] sm:block sm:text-[15px]">
                        {product.applications.slice(0, 3).map((application) => (
                          <li key={application} className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#C8102E]" aria-hidden="true" />
                            <span>{application}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 hidden flex-wrap gap-2 sm:flex">
                        {(
                          (product.variants as { size: string; mrp?: number }[] | undefined) ??
                          product.packageSizes.map((s) => ({ size: s } as { size: string; mrp?: number }))
                        ).map((v) => (
                          <span
                            key={v.size}
                            className="inline-flex items-center rounded-full border border-[#E5E7EB] bg-[#FAFAFA] px-3 py-1 text-xs font-medium text-[#374151]"
                          >
                            {v.size}
                            {typeof v.mrp === "number" ? (
                              <span className="ml-2 text-[#6B7280]">— ₹{v.mrp.toFixed(2)}</span>
                            ) : null}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#C8102E] transition-colors group-hover:text-[#A30E27] sm:mt-6">
                        <span>Explore Product</span>
                        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="/products"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#111827] px-7 text-sm font-semibold text-white transition-colors hover:bg-[#1F2937]"
            >
              View All Products
            </Link>
          </div>
        </MotionSection>
      </Container>
    </section>
  );
}