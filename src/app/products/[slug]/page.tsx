import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Download,
  Droplets,
  FlaskConical,
  Layers3,
  Paintbrush,
  Rows3,
  ShieldCheck,
  Slash,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { notFound } from "next/navigation";

import Footer from "../../../components/layout/Footer";
import Navbar from "../../../components/layout/Navbar";
import Container from "../../../components/ui/Container";
import ProductDetailGallery from "../../../components/ui/ProductDetailGallery";
import ProductImage from "../../../components/ui/ProductImage";
import { Button } from "@/components/ui/button";
import { company } from "@/data/company";
import { images } from "@/data/images";
import {
  getProductBySlug,
  getRelatedProducts,
  products,
  type ApplicationArea,
  type ProductCategory,
} from "@/data/products";

type ProductDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.seoTitle,
    description: product.seoDescription,
    keywords: [
      product.name,
      product.category,
      ...product.applications,
      "waterproofing chemicals",
      company.name,
    ],
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title: product.seoTitle,
      description: product.seoDescription,
      url: `/products/${product.slug}`,
      siteName: company.name,
      locale: "en_IN",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: product.seoTitle,
      description: product.seoDescription,
    },
  };
}

// -----------------------------------------------------------------------------
// Icon maps (UI concern — kept in the page layer)
// -----------------------------------------------------------------------------

const categoryIconMap: Record<ProductCategory, LucideIcon> = {
  Waterproofing: Droplets,
  Admixtures: FlaskConical,
  "Repair Mortars": Layers3,
  "Tile Adhesives": ShieldCheck,
  Grouts: Rows3,
  Primers: Slash,
};

const applicationIconMap: Record<ApplicationArea, LucideIcon> = {
  Waterproofing: Droplets,
  Repair: Wrench,
  Bonding: Layers3,
  Plaster: FlaskConical,
  Concrete: ShieldCheck,
  "Surface Preparation": Paintbrush,
  "Corrosion Protection": ShieldCheck,
  "Tile Fixing": Layers3,
};

function getCategoryIcon(category: ProductCategory): LucideIcon {
  return categoryIconMap[category] ?? Wrench;
}

function getApplicationIcon(application: ApplicationArea): LucideIcon {
  return applicationIconMap[application] ?? Wrench;
}

// -----------------------------------------------------------------------------
// Page
// -----------------------------------------------------------------------------

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product);
  const categoryIcon = getCategoryIcon(product.category);
  const productGallery = images.products.bySlug[product.slug]?.gallery ?? [];
  const thumbnailGallery = productGallery.slice(1);

  // Graceful fallbacks for optional/array fields
  const features = product.features ?? [];
  const benefits = product.benefits ?? [];
  const techSpecs = product.technicalSpecifications ?? {};
  const techSpecEntries = Object.entries(techSpecs);

  return (
    <div className="flex min-h-screen flex-col gap-4 px-4 py-4">
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex flex-col gap-4 outline-none">

      <section className="py-8 sm:py-10 lg:py-14">
        <Container>
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-[#6B7280]">
            <Link href="/" className="transition-colors hover:text-[#111827]">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            <Link href="/products" className="transition-colors hover:text-[#111827]">
              Products
            </Link>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            <span className="font-medium text-[#111827]">{product.name}</span>
          </nav>
        </Container>
      </section>

      <section className="py-8 sm:py-10 lg:py-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[55fr_45fr] lg:items-start lg:gap-10">
            <div className="order-1 lg:order-none">
              <ProductDetailGallery
                productName={product.name}
                placeholderText={product.imagePlaceholder}
                gallery={productGallery}
              />
            </div>

            <div className="order-2 max-w-2xl lg:order-none">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#F3D4D8] bg-[#FFF7F8] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#C8102E]">
                {React.createElement(categoryIcon, { className: "h-3.5 w-3.5", "aria-hidden": "true" })}
                {product.category}
              </div>

              <h1 className="mt-4 text-[clamp(2.25rem,4vw,4rem)] leading-[0.95] font-semibold tracking-[-0.04em] text-[#111827]">
                {product.name}
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-[#4B5563] sm:text-lg sm:leading-8">
                {product.fullDescription}
              </p>

              {features.length > 0 && (
                <ul className="mt-6 space-y-2">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-[#374151] sm:text-[15px]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#C8102E]" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-6 flex flex-wrap gap-2">
                {(
                  (product.variants as { size: string; mrp?: number }[] | undefined) ??
                  product.packageSizes.map((s) => ({ size: s } as { size: string; mrp?: number }))
                ).map((v) => (
                  <span
                    key={v.size}
                    className="inline-flex items-center rounded-full border border-[#E5E7EB] bg-[#FAFAFA] px-3 py-1 text-xs font-medium text-[#374151]"
                  >
                    {v.size}
                    {typeof v.mrp === "number" ? <span className="ml-2 text-[#6B7280]">— ₹{v.mrp.toFixed(2)}</span> : null}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Button type="button" className="h-12 rounded-full bg-[#111827] px-8 text-sm font-semibold text-white transition-colors hover:bg-[#1F2937]">
                  Request Quote
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="h-12 rounded-full border-[#D1D5DB] bg-white px-8 text-sm font-semibold text-[#111827] transition-colors hover:border-[#9CA3AF] hover:bg-[#F9FAFB]"
                >
                  Download Datasheet
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-8 sm:py-10 lg:py-14">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111827] sm:text-4xl">
              Applications
            </h2>
            <p className="mt-4 text-base leading-7 text-[#4B5563] sm:text-lg sm:leading-8">
              Common application areas for this product.
            </p>
          </div>

          {product.applications.length > 0 ? (
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {product.applications.map((application) => {
                const Icon = getApplicationIcon(application);

                return (
                  <article
                    key={application}
                    className="rounded-[1.5rem] border border-[#E5E7EB] bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(17,24,39,0.05)]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#F3D4D8] bg-[#FFF7F8] text-[#C8102E]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold tracking-[-0.02em] text-[#111827]">
                      {application}
                    </h3>
                  </article>
                );
              })}
            </div>
          ) : (
            <p className="mt-8 text-sm text-[#6B7280]">No application areas listed for this product.</p>
          )}
        </Container>
      </section>

      {benefits.length > 0 && (
        <section className="py-8 sm:py-10 lg:py-14">
          <Container>
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111827] sm:text-4xl">
                Benefits
              </h2>
              <p className="mt-4 text-base leading-7 text-[#4B5563] sm:text-lg sm:leading-8">
                Key advantages of using {product.name} on your project.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <article
                  key={benefit}
                  className="rounded-[1.5rem] border border-[#E5E7EB] bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(17,24,39,0.05)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[#F3D4D8] bg-[#FFF7F8] text-[#C8102E]">
                      <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <p className="mt-1 text-sm leading-6 text-[#374151] sm:text-[15px]">{benefit}</p>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="py-8 sm:py-10 lg:py-14">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111827] sm:text-4xl">
              Specifications
            </h2>
            <p className="mt-4 text-base leading-7 text-[#4B5563] sm:text-lg sm:leading-8">
              Technical specification values for {product.name}.
            </p>
          </div>

          {techSpecEntries.length > 0 ? (
            <div className="mt-8 overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-white">
              <table className="w-full border-collapse text-left">
                <thead className="bg-[#FAFAFA]">
                  <tr>
                    <th className="border-b border-[#E5E7EB] px-5 py-4 text-sm font-semibold text-[#111827] sm:px-6">
                      Property
                    </th>
                    <th className="border-b border-[#E5E7EB] px-5 py-4 text-sm font-semibold text-[#111827] sm:px-6">
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {techSpecEntries.map(([property, value], index) => (
                    <tr
                      key={property}
                      className={index !== techSpecEntries.length - 1 ? "border-b border-[#E5E7EB]" : ""}
                    >
                      <td className="px-5 py-4 text-sm font-medium text-[#374151] sm:px-6">
                        {property}
                      </td>
                      <td className="px-5 py-4 text-sm text-[#4B5563] sm:px-6">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="mt-8 text-sm text-[#6B7280]">Technical specifications not yet available for this product.</p>
          )}
        </Container>
      </section>

      <section className="py-8 sm:py-10 lg:py-14">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111827] sm:text-4xl">
              Downloads
            </h2>
          </div>

          {product.downloads.length > 0 ? (
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {product.downloads.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] border border-[#E5E7EB] bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(17,24,39,0.05)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#F3D4D8] bg-[#FFF7F8] text-[#C8102E]">
                    <Download className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-[#111827]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#4B5563] sm:text-[15px]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          ) : (
            <p className="mt-8 text-sm text-[#6B7280]">No downloads are currently available for this product.</p>
          )}
        </Container>
      </section>

      {relatedProducts.length > 0 && (
        <section className="py-8 sm:py-10 lg:py-14">
          <Container>
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111827] sm:text-4xl">
                Related Products
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {relatedProducts.map((relatedProduct) => {
                const Icon = getCategoryIcon(relatedProduct.category);

                return (
                  <article
                    key={relatedProduct.slug}
                    className="group rounded-[1.5rem] border border-[#E5E7EB] bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(17,24,39,0.05)]"
                  >
                    <ProductImage
                      slug={relatedProduct.slug}
                      placeholderText={relatedProduct.imagePlaceholder}
                      variant="card"
                    />

                    <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#F3D4D8] bg-[#FFF7F8] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#C8102E]">
                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                      {relatedProduct.category}
                    </div>

                    <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-[#111827]">
                      {relatedProduct.name}
                    </h3>

                    <p className="mt-3 min-h-[3.5rem] text-sm leading-6 text-[#4B5563] sm:text-[15px]">
                      {relatedProduct.shortDescription}
                    </p>

                    <Link
                      href={`/products/${relatedProduct.slug}`}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#C8102E] transition-colors group-hover:text-[#A30E27]"
                    >
                      <span>View Details</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      <section className="py-8 sm:py-10 lg:py-14">
        <Container>
          <div className="mx-auto max-w-[780px] rounded-[2rem] border border-[#E5E7EB] bg-white px-6 py-12 text-center shadow-[0_1px_2px_rgba(17,24,39,0.03)] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111827] sm:text-4xl">
              Ready to Build Stronger, Longer-Lasting Structures?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#4B5563] sm:text-lg sm:leading-8">
              Whether you&apos;re a contractor, builder, distributor, or homeowner, our team is ready
              to help you choose the right waterproofing solution.
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