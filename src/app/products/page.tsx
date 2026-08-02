import Link from "next/link";
import {
  ArrowRight,
  Droplets,
  FlaskConical,
  Layers3,
  Paintbrush,
  Rows3,
  ShieldCheck,
  Slash,
  Wrench,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import Navbar from "../../components/layout/Navbar";
import Container from "../../components/ui/Container";

const productCategories = [
  {
    title: "Waterproofing",
    description: "Solutions designed to help protect structures from water ingress and seepage.",
    icon: Droplets,
  },
  {
    title: "Admixtures",
    description: "Performance additives created to support stronger concrete and mortar mixes.",
    icon: FlaskConical,
  },
  {
    title: "Repair Mortars",
    description: "Reliable repair materials for restoration, patching and structural maintenance.",
    icon: Layers3,
  },
  {
    title: "Tile Adhesives",
    description: "Bonding solutions for secure tile fixing across varied site conditions.",
    icon: ShieldCheck,
  },
  {
    title: "Grouts",
    description: "Consistent grout products for filling, locking and finishing applications.",
    icon: Rows3,
  },
  {
    title: "Primers",
    description: "Surface-preparation products that help improve adhesion and finish quality.",
    icon: Paintbrush,
  },
];

const catalogProducts = [
  {
    slug: "latex-m-p",
    name: "Latex M.P.",
    category: "Waterproofing",
    description:
      "A dependable waterproofing additive for mortar and repair applications that need stronger bonding and improved flexibility.",
    sizes: ["1L", "5L", "20L"],
    icon: Droplets,
  },
  {
    slug: "plastomix",
    name: "Plastomix",
    category: "Admixtures",
    description:
      "A site-ready admixture designed to support workability, consistency and durable concrete performance.",
    sizes: ["1L", "5L", "20L"],
    icon: FlaskConical,
  },
  {
    slug: "rust-stop",
    name: "Rust Stop",
    category: "Repair Mortars",
    description:
      "A protective solution for reinforcement steel and restoration work where corrosion resistance matters.",
    sizes: ["1L", "5L"],
    icon: ShieldCheck,
  },
  {
    slug: "bond-plus",
    name: "Bond Plus",
    category: "Primers",
    description:
      "A reliable bonding aid that helps prepare surfaces and improve adhesion for construction applications.",
    sizes: ["1L", "5L", "20L"],
    icon: Slash,
  },
  {
    slug: "tile-fix",
    name: "Tile Fix",
    category: "Tile Adhesives",
    description:
      "A practical tile fixing product for secure installation and dependable performance across site conditions.",
    sizes: ["1L", "5L"],
    icon: Layers3,
  },
  {
    slug: "prime-coat",
    name: "Prime Coat",
    category: "Primers",
    description:
      "A surface preparation primer designed to support clean application and consistent finishing results.",
    sizes: ["1L", "5L", "20L"],
    icon: Paintbrush,
  },
  {
    slug: "crack-seal",
    name: "Crack Seal",
    category: "Repair Mortars",
    description:
      "A repair-focused solution for addressing cracks and helping restore surface integrity in demanding areas.",
    sizes: ["1L", "5L", "20L"],
    icon: Wrench,
  },
  {
    slug: "flex-bond",
    name: "Flex Bond",
    category: "Waterproofing",
    description:
      "A flexible bonding solution intended for repair work that needs better adhesion and movement tolerance.",
    sizes: ["1L", "5L", "20L"],
    icon: Droplets,
  },
  {
    slug: "damp-shield",
    name: "Damp Shield",
    category: "Waterproofing",
    description:
      "A protective waterproofing product developed to help reduce damp-related issues in interior spaces.",
    sizes: ["1L", "5L", "20L"],
    icon: ShieldCheck,
  },
];

export default function ProductsPage() {
  return (
    <main className="flex min-h-screen flex-col gap-4 px-4 py-4">
      <Navbar />

      <section className="py-8 sm:py-10 lg:py-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
            <div className="order-1 max-w-2xl lg:order-none">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#6B7280] sm:text-sm">
                Product Range
              </p>

              <h1 className="mt-4 max-w-xl text-[clamp(2.25rem,4.4vw,4.1rem)] leading-[0.95] font-semibold tracking-[-0.04em] text-[#111827]">
                Construction Chemicals Built for Every Project
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-[#4B5563] sm:text-lg sm:leading-8">
                Explore dependable product families designed to support waterproofing, repair and
                protection work across residential, commercial and industrial sites.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Link
                  href="/products"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#111827] px-8 text-sm font-semibold text-white transition-colors hover:bg-[#1F2937]"
                >
                  Browse Categories
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#C8102E] transition-colors hover:text-[#A30E27]"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="order-2 lg:order-none">
              <div className="flex min-h-[320px] items-center justify-center rounded-[2rem] border border-[#E5E7EB] bg-[#F8FAFC] px-6 py-10 shadow-[0_1px_2px_rgba(17,24,39,0.04)] sm:min-h-[420px] lg:min-h-[560px]">
                <div className="flex h-full w-full items-center justify-center rounded-[1.5rem] border border-dashed border-[#CBD5E1] bg-white px-6 py-16 text-center">
                  <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#6B7280] sm:text-base">
                    PRODUCT FAMILY IMAGE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="categories" className="py-8 sm:py-10 lg:py-14">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111827] sm:text-4xl">
              Product Categories
            </h2>
            <p className="mt-4 text-base leading-7 text-[#4B5563] sm:text-lg sm:leading-8">
              Browse the product families that support waterproofing, repair, bonding and surface
              preparation work.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {productCategories.map((category) => {
              const Icon = category.icon;

              return (
                <article
                  key={category.title}
                  className="group rounded-[1.5rem] border border-[#E5E7EB] bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(17,24,39,0.05)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#F3D4D8] bg-[#FFF7F8] text-[#C8102E]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-[#111827]">
                    {category.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#4B5563] sm:text-[15px]">
                    {category.description}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#C8102E] transition-colors group-hover:text-[#A30E27]">
                    <span>Explore</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-8 sm:py-10 lg:py-14">
        <Container>
          <div className="rounded-[2rem] border border-[#E5E7EB] bg-white p-6 sm:p-8 lg:p-10">
            <div className="grid gap-4 lg:grid-cols-[1.25fr_0.85fr_0.85fr_0.85fr] lg:items-end">
              <div>
                <label htmlFor="product-search" className="text-sm font-semibold text-[#111827]">
                  Search
                </label>
                <input
                  id="product-search"
                  type="text"
                  placeholder="Search products"
                  className="mt-2 h-12 w-full rounded-full border border-[#D1D5DB] bg-white px-4 text-sm text-[#111827] outline-none transition-colors placeholder:text-[#9CA3AF] focus:border-[#C8102E]"
                />
              </div>

              <div>
                <label htmlFor="category-filter" className="text-sm font-semibold text-[#111827]">
                  Category
                </label>
                <select
                  id="category-filter"
                  className="mt-2 h-12 w-full rounded-full border border-[#D1D5DB] bg-white px-4 text-sm text-[#111827] outline-none transition-colors focus:border-[#C8102E]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select category
                  </option>
                  <option>Waterproofing</option>
                  <option>Admixtures</option>
                  <option>Repair Mortars</option>
                  <option>Tile Adhesives</option>
                  <option>Grouts</option>
                  <option>Primers</option>
                </select>
              </div>

              <div>
                <label htmlFor="application-filter" className="text-sm font-semibold text-[#111827]">
                  Application
                </label>
                <select
                  id="application-filter"
                  className="mt-2 h-12 w-full rounded-full border border-[#D1D5DB] bg-white px-4 text-sm text-[#111827] outline-none transition-colors focus:border-[#C8102E]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select application
                  </option>
                  <option>Structural</option>
                  <option>Repair</option>
                  <option>Bonding</option>
                  <option>Surface Preparation</option>
                </select>
              </div>

              <div>
                <label htmlFor="package-filter" className="text-sm font-semibold text-[#111827]">
                  Package Size
                </label>
                <select
                  id="package-filter"
                  className="mt-2 h-12 w-full rounded-full border border-[#D1D5DB] bg-white px-4 text-sm text-[#111827] outline-none transition-colors focus:border-[#C8102E]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select size
                  </option>
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                </select>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-8 sm:py-10 lg:py-14">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111827] sm:text-4xl">
              Featured Products
            </h2>
            <p className="mt-4 text-base leading-7 text-[#4B5563] sm:text-lg sm:leading-8">
              Browse some of our most popular construction chemical solutions.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {catalogProducts.map((product) => {
              const Icon = product.icon;

              return (
                <Link
                  key={product.name}
                  href={`/products/${product.slug}`}
                  className="group block rounded-[1.5rem] border border-[#E5E7EB] bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(17,24,39,0.05)]"
                >
                  <article>
                  <div className="aspect-[4/3] w-full rounded-[1.25rem] border border-[#E5E7EB] bg-[#FAFAFA] p-4">
                    <div className="flex h-full w-full items-center justify-center rounded-[1rem] border border-dashed border-[#D1D5DB] bg-white text-center">
                      <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#6B7280]">
                        PRODUCT IMAGE
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#F3D4D8] bg-[#FFF7F8] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#C8102E]">
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    {product.category}
                  </div>

                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-[#111827]">
                    {product.name}
                  </h3>

                  <p className="mt-3 min-h-[3.5rem] text-sm leading-6 text-[#4B5563] sm:text-[15px]">
                    {product.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <span
                        key={size}
                        className="inline-flex items-center rounded-full border border-[#E5E7EB] bg-[#FAFAFA] px-3 py-1 text-xs font-medium text-[#374151]"
                      >
                        {size}
                      </span>
                    ))}
                  </div>

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#C8102E] transition-colors group-hover:text-[#A30E27]">
                    <span>View Details</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                  </article>
                </Link>
              );
            })}
          </div>

          <div className="mt-8 flex justify-center">
            <Button
              type="button"
              className="h-12 rounded-full bg-[#111827] px-8 text-sm font-semibold text-white transition-colors hover:bg-[#1F2937]"
            >
              View All Products
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}