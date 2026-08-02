import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Download,
  Droplets,
  FlaskConical,
  Layers3,
  Paintbrush,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import Footer from "../../../components/layout/Footer";
import Navbar from "../../../components/layout/Navbar";
import Container from "../../../components/ui/Container";
import { Button } from "@/components/ui/button";

type ProductDetailPageProps = {
  params: {
    slug: string;
  };
};

type ProductDetail = {
  name: string;
  category: string;
  description: string;
  sizes: string[];
  relatedCategory: string;
};

const productCatalog: Record<string, ProductDetail> = {
  "latex-m-p": {
    name: "Latex M.P.",
    category: "Waterproofing",
    description:
      "A dependable waterproofing additive for mortar and repair applications that need stronger bonding and improved flexibility.",
    sizes: ["1L", "5L", "20L"],
    relatedCategory: "Waterproofing",
  },
  "plastomix": {
    name: "Plastomix",
    category: "Admixtures",
    description:
      "A site-ready admixture designed to support workability, consistency and durable concrete performance.",
    sizes: ["1L", "5L", "20L"],
    relatedCategory: "Admixtures",
  },
  "rust-stop": {
    name: "Rust Stop",
    category: "Repair Mortars",
    description:
      "A protective solution for reinforcement steel and restoration work where corrosion resistance matters.",
    sizes: ["1L", "5L"],
    relatedCategory: "Repair Mortars",
  },
  "bond-plus": {
    name: "Bond Plus",
    category: "Primers",
    description:
      "A reliable bonding aid that helps prepare surfaces and improve adhesion for construction applications.",
    sizes: ["1L", "5L", "20L"],
    relatedCategory: "Primers",
  },
  "tile-fix": {
    name: "Tile Fix",
    category: "Tile Adhesives",
    description:
      "A practical tile fixing product for secure installation and dependable performance across site conditions.",
    sizes: ["1L", "5L"],
    relatedCategory: "Tile Adhesives",
  },
  "prime-coat": {
    name: "Prime Coat",
    category: "Primers",
    description:
      "A surface preparation primer designed to support clean application and consistent finishing results.",
    sizes: ["1L", "5L", "20L"],
    relatedCategory: "Primers",
  },
  "crack-seal": {
    name: "Crack Seal",
    category: "Repair Mortars",
    description:
      "A repair-focused solution for addressing cracks and helping restore surface integrity in demanding areas.",
    sizes: ["1L", "5L", "20L"],
    relatedCategory: "Repair Mortars",
  },
  "flex-bond": {
    name: "Flex Bond",
    category: "Waterproofing",
    description:
      "A flexible bonding solution intended for repair work that needs better adhesion and movement tolerance.",
    sizes: ["1L", "5L", "20L"],
    relatedCategory: "Waterproofing",
  },
  "damp-shield": {
    name: "Damp Shield",
    category: "Waterproofing",
    description:
      "A protective waterproofing product developed to help reduce damp-related issues in interior spaces.",
    sizes: ["1L", "5L", "20L"],
    relatedCategory: "Waterproofing",
  },
};

const applicationItems = [
  { label: "Waterproofing", icon: Droplets },
  { label: "Repair", icon: Wrench },
  { label: "Bonding", icon: Layers3 },
  { label: "Plaster", icon: FlaskConical },
  { label: "Concrete", icon: ShieldCheck },
];

const specifications = [
  { property: "Appearance", value: "Placeholder value" },
  { property: "Coverage", value: "Placeholder value" },
  { property: "Shelf Life", value: "Placeholder value" },
  { property: "Packaging", value: "Placeholder value" },
  { property: "Application", value: "Placeholder value" },
];

const downloadItems = [
  { title: "Technical Datasheet", description: "Product details and technical overview.", icon: Download },
  { title: "Safety Datasheet", description: "Safety and handling guidance for the product.", icon: Download },
];

const relatedProducts = [
  {
    name: "Plastomix",
    category: "Admixtures",
    description: "A reliable admixture option for stronger, more consistent site performance.",
    icon: FlaskConical,
  },
  {
    name: "Rust Stop",
    category: "Repair Mortars",
    description: "A practical solution for corrosion protection and restoration work.",
    icon: ShieldCheck,
  },
  {
    name: "Prime Coat",
    category: "Primers",
    description: "A surface preparation option designed to support clean, even application.",
    icon: Paintbrush,
  },
];

function slugToKey(slug: string) {
  return slug.toLowerCase();
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = productCatalog[slugToKey(params.slug)] ?? productCatalog["latex-m-p"];

  return (
    <main className="flex min-h-screen flex-col gap-4 px-4 py-4">
      <Navbar />

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
              <div className="flex min-h-[360px] items-center justify-center rounded-[2rem] border border-[#E5E7EB] bg-[#F8FAFC] px-6 py-10 sm:min-h-[460px] lg:min-h-[620px]">
                <div className="flex h-full w-full items-center justify-center rounded-[1.5rem] border border-dashed border-[#CBD5E1] bg-white px-6 py-16 text-center">
                  <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#6B7280] sm:text-base">
                    PRODUCT IMAGE
                  </span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3 sm:gap-4">
                {[1, 2, 3].map((thumb) => (
                  <div
                    key={thumb}
                    className="flex aspect-square items-center justify-center rounded-[1.25rem] border border-[#E5E7EB] bg-[#FAFAFA] px-4 py-4"
                  >
                    <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6B7280] text-center">
                      THUMBNAIL
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-2 max-w-2xl lg:order-none">
              <div className="inline-flex items-center rounded-full border border-[#F3D4D8] bg-[#FFF7F8] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#C8102E]">
                {product.category}
              </div>

              <h1 className="mt-4 text-[clamp(2.25rem,4vw,4rem)] leading-[0.95] font-semibold tracking-[-0.04em] text-[#111827]">
                {product.name}
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-[#4B5563] sm:text-lg sm:leading-8">
                {product.description}
              </p>

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

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {applicationItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.label}
                  className="rounded-[1.5rem] border border-[#E5E7EB] bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(17,24,39,0.05)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#F3D4D8] bg-[#FFF7F8] text-[#C8102E]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold tracking-[-0.02em] text-[#111827]">
                    {item.label}
                  </h3>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-8 sm:py-10 lg:py-14">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111827] sm:text-4xl">
              Specifications
            </h2>
            <p className="mt-4 text-base leading-7 text-[#4B5563] sm:text-lg sm:leading-8">
              Placeholder specification values for the product detail layout.
            </p>
          </div>

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
                {specifications.map((spec, index) => (
                  <tr key={spec.property} className={index !== specifications.length - 1 ? "border-b border-[#E5E7EB]" : ""}>
                    <td className="px-5 py-4 text-sm font-medium text-[#374151] sm:px-6">
                      {spec.property}
                    </td>
                    <td className="px-5 py-4 text-sm text-[#4B5563] sm:px-6">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="py-8 sm:py-10 lg:py-14">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111827] sm:text-4xl">
              Downloads
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {downloadItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] border border-[#E5E7EB] bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(17,24,39,0.05)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#F3D4D8] bg-[#FFF7F8] text-[#C8102E]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-[#111827]">
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
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111827] sm:text-4xl">
              Related Products
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {relatedProducts.map((productItem) => {
              const Icon = productItem.icon;

              return (
                <article
                  key={productItem.name}
                  className="group rounded-[1.5rem] border border-[#E5E7EB] bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(17,24,39,0.05)]"
                >
                  <div className="aspect-[4/3] w-full rounded-[1.25rem] border border-[#E5E7EB] bg-[#FAFAFA] p-4">
                    <div className="flex h-full w-full items-center justify-center rounded-[1rem] border border-dashed border-[#D1D5DB] bg-white text-center">
                      <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#6B7280]">
                        PRODUCT IMAGE
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#F3D4D8] bg-[#FFF7F8] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#C8102E]">
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    {productItem.category}
                  </div>

                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-[#111827]">
                    {productItem.name}
                  </h3>

                  <p className="mt-3 min-h-[3.5rem] text-sm leading-6 text-[#4B5563] sm:text-[15px]">
                    {productItem.description}
                  </p>

                  <Link
                    href="/products"
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

      <Footer />
    </main>
  );
}