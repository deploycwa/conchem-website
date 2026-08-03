"use client";

import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Droplets, FlaskConical, Layers3, Paintbrush, Rows3, ShieldCheck, Slash, Wrench, X, Search, RotateCcw } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import Container from "../ui/Container";
import ProductImage from "../ui/ProductImage";
import { products, type ProductCategory } from "@/data/products";

// Icon map for product category badge
const categoryIconMap: Record<ProductCategory, LucideIcon> = {
  Waterproofing: Droplets,
  Admixtures: FlaskConical,
  "Repair Mortars": Layers3,
  "Tile Adhesives": ShieldCheck,
  Grouts: Rows3,
  Primers: Slash,
};

function getCategoryIcon(category: ProductCategory): LucideIcon {
  return categoryIconMap[category] ?? Wrench;
}

const CATEGORIES: ProductCategory[] = [
  "Waterproofing",
  "Admixtures",
  "Repair Mortars",
  "Tile Adhesives",
  "Grouts",
  "Primers",
];

export default function ProductCatalog() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedApplication, setSelectedApplication] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  // Sync state when URL searchParams change (e.g. from clicking category cards or Quick Solution Finder)
  useEffect(() => {
    const catParam = searchParams.get("category") || "";
    const searchParam = searchParams.get("search") || "";
    const appParam = searchParams.get("application") || "";
    const sizeParam = searchParams.get("size") || "";

    setSelectedCategory(catParam);
    setSearchQuery(searchParam);
    setSelectedApplication(appParam);
    setSelectedSize(sizeParam);

    if (catParam || searchParam || appParam || sizeParam || (typeof window !== "undefined" && window.location.hash === "#products-catalog")) {
      setTimeout(() => {
        const catalogEl = document.getElementById("products-catalog");
        if (catalogEl) {
          catalogEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
    }
  }, [searchParams]);

  // Extract unique applications and package sizes dynamically
  const availableApplications = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => {
      p.applications?.forEach((app) => set.add(app));
    });
    return Array.from(set).sort();
  }, []);

  const availablePackageSizes = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => {
      p.packageSizes?.forEach((s) => set.add(s));
    });
    return Array.from(set);
  }, []);

  // Update URL search parameters seamlessly
  const updateUrlParams = (newCat: string, newSearch: string, newApp: string, newSize: string) => {
    const params = new URLSearchParams();
    if (newCat) params.set("category", newCat);
    if (newSearch) params.set("search", newSearch);
    if (newApp) params.set("application", newApp);
    if (newSize) params.set("size", newSize);

    const queryString = params.toString();
    const newPath = queryString ? `/products?${queryString}#products-catalog` : `/products#products-catalog`;
    router.replace(newPath, { scroll: false });
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    updateUrlParams(cat, searchQuery, selectedApplication, selectedSize);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    updateUrlParams(selectedCategory, query, selectedApplication, selectedSize);
  };

  const handleApplicationChange = (app: string) => {
    setSelectedApplication(app);
    updateUrlParams(selectedCategory, searchQuery, app, selectedSize);
  };

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
    updateUrlParams(selectedCategory, searchQuery, selectedApplication, size);
  };

  const handleClearFilters = () => {
    setSelectedCategory("");
    setSearchQuery("");
    setSelectedApplication("");
    setSelectedSize("");
    router.replace("/products#products-catalog", { scroll: false });
  };

  // Filtered products calculation
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Search query check
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = product.name.toLowerCase().includes(q);
        const matchShort = product.shortDescription.toLowerCase().includes(q);
        const matchFull = product.fullDescription.toLowerCase().includes(q);
        const matchCategory = product.category.toLowerCase().includes(q);
        const matchFeature = product.features?.some((f) => f.toLowerCase().includes(q));
        if (!matchName && !matchShort && !matchFull && !matchCategory && !matchFeature) {
          return false;
        }
      }

      // Category check
      if (selectedCategory && selectedCategory !== "all") {
        if (product.category.toLowerCase() !== selectedCategory.toLowerCase()) {
          return false;
        }
      }

      // Application check
      if (selectedApplication && selectedApplication !== "all") {
        const hasApp = product.applications?.some(
          (app) => app.toLowerCase() === selectedApplication.toLowerCase()
        );
        if (!hasApp) return false;
      }

      // Package size check
      if (selectedSize && selectedSize !== "all") {
        const hasSize = product.packageSizes?.some(
          (s) => s.toLowerCase() === selectedSize.toLowerCase()
        );
        if (!hasSize) return false;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedApplication, selectedSize]);

  const hasActiveFilters = Boolean(
    selectedCategory || searchQuery || selectedApplication || selectedSize
  );

  return (
    <>
      <section id="products-catalog" className="py-8 sm:py-10 lg:py-14">
        <Container>
          <div className="rounded-[2rem] border border-[#E5E7EB] bg-white p-6 sm:p-8 lg:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end justify-between">
              <div className="grid gap-4 flex-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:items-end">
                {/* Search Input */}
                <div>
                  <label htmlFor="product-search" className="text-sm font-semibold text-[#111827]">
                    Search
                  </label>
                  <div className="relative mt-2">
                    <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9CA3AF]" />
                    <input
                      id="product-search"
                      type="text"
                      value={searchQuery}
                      onChange={(e) => handleSearchChange(e.target.value)}
                      placeholder="Search products..."
                      className="h-12 w-full rounded-full border border-[#D1D5DB] bg-white pl-11 pr-10 text-sm text-[#111827] outline-none transition-colors placeholder:text-[#9CA3AF] focus:border-[#C8102E] focus:ring-1 focus:ring-[#C8102E]"
                    />
                    {searchQuery ? (
                      <button
                        type="button"
                        onClick={() => handleSearchChange("")}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#111827]"
                        aria-label="Clear search"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    ) : null}
                  </div>
                </div>

                {/* Category Dropdown */}
                <div>
                  <label htmlFor="category-filter" className="text-sm font-semibold text-[#111827]">
                    Category
                  </label>
                  <select
                    id="category-filter"
                    value={selectedCategory}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                    className="mt-2 h-12 w-full rounded-full border border-[#D1D5DB] bg-white px-4 text-sm text-[#111827] outline-none transition-colors focus:border-[#C8102E] focus:ring-1 focus:ring-[#C8102E]"
                  >
                    <option value="">All Categories</option>
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Application Filter */}
                <div>
                  <label htmlFor="application-filter" className="text-sm font-semibold text-[#111827]">
                    Application
                  </label>
                  <select
                    id="application-filter"
                    value={selectedApplication}
                    onChange={(e) => handleApplicationChange(e.target.value)}
                    className="mt-2 h-12 w-full rounded-full border border-[#D1D5DB] bg-white px-4 text-sm text-[#111827] outline-none transition-colors focus:border-[#C8102E] focus:ring-1 focus:ring-[#C8102E]"
                  >
                    <option value="">All Applications</option>
                    {availableApplications.map((app) => (
                      <option key={app} value={app}>
                        {app}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Package Size Filter */}
                <div>
                  <label htmlFor="package-filter" className="text-sm font-semibold text-[#111827]">
                    Package Size
                  </label>
                  <select
                    id="package-filter"
                    value={selectedSize}
                    onChange={(e) => handleSizeChange(e.target.value)}
                    className="mt-2 h-12 w-full rounded-full border border-[#D1D5DB] bg-white px-4 text-sm text-[#111827] outline-none transition-colors focus:border-[#C8102E] focus:ring-1 focus:ring-[#C8102E]"
                  >
                    <option value="">All Sizes</option>
                    {availablePackageSizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Clear Filters button if active */}
              {hasActiveFilters ? (
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full border border-[#E5E7EB] bg-[#F9FAFB] px-5 text-sm font-semibold text-[#374151] transition-colors hover:bg-[#F3F4F6] hover:text-[#111827]"
                >
                  <RotateCcw className="h-4 w-4 text-[#6B7280]" />
                  <span>Clear Filters</span>
                </button>
              ) : null}
            </div>
          </div>
        </Container>
      </section>

      {/* Catalog Display Section */}
      <section className="py-8 sm:py-10 lg:py-14">
        <Container>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111827] sm:text-4xl">
                {selectedCategory ? `${selectedCategory} Products` : "All Products"}
              </h2>
              <p className="mt-2 text-sm text-[#6B7280] sm:text-base">
                Showing {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
                {selectedCategory ? ` in ${selectedCategory}` : ""}
              </p>
            </div>

            {hasActiveFilters ? (
              <div className="flex flex-wrap items-center gap-2 mt-2 sm:mt-0">
                {selectedCategory ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF7F8] border border-[#F3D4D8] px-3 py-1 text-xs font-semibold text-[#C8102E]">
                    Category: {selectedCategory}
                    <button type="button" onClick={() => handleCategoryChange("")} aria-label="Remove category filter">
                      <X className="h-3 w-3 hover:opacity-75" />
                    </button>
                  </span>
                ) : null}
                {searchQuery ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F3F4F6] border border-[#E5E7EB] px-3 py-1 text-xs font-semibold text-[#374151]">
                    Search: &quot;{searchQuery}&quot;
                    <button type="button" onClick={() => handleSearchChange("")} aria-label="Remove search filter">
                      <X className="h-3 w-3 hover:opacity-75" />
                    </button>
                  </span>
                ) : null}
                {selectedApplication ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F3F4F6] border border-[#E5E7EB] px-3 py-1 text-xs font-semibold text-[#374151]">
                    App: {selectedApplication}
                    <button type="button" onClick={() => handleApplicationChange("")} aria-label="Remove application filter">
                      <X className="h-3 w-3 hover:opacity-75" />
                    </button>
                  </span>
                ) : null}
                {selectedSize ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F3F4F6] border border-[#E5E7EB] px-3 py-1 text-xs font-semibold text-[#374151]">
                    Size: {selectedSize}
                    <button type="button" onClick={() => handleSizeChange("")} aria-label="Remove size filter">
                      <X className="h-3 w-3 hover:opacity-75" />
                    </button>
                  </span>
                ) : null}
              </div>
            ) : null}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => {
                const Icon = getCategoryIcon(product.category);

                return (
                  <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    aria-label={`View details for ${product.name}`}
                    className="group flex flex-col justify-between rounded-[1.5rem] border border-[#E5E7EB] bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(17,24,39,0.06)]"
                  >
                    <article className="flex flex-col justify-between h-full">
                      <div>
                        <ProductImage
                          slug={product.slug}
                          placeholderText={product.imagePlaceholder}
                          variant="card"
                        />

                        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#F3D4D8] bg-[#FFF7F8] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#C8102E]">
                          <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                          {product.category}
                        </div>

                        <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-[#111827] group-hover:text-[#C8102E] transition-colors">
                          {product.name}
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-[#4B5563] sm:text-[15px]">
                          {product.shortDescription}
                        </p>
                      </div>

                      <div>
                        <div className="mt-5 flex flex-wrap gap-2">
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

                        <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#C8102E] transition-colors group-hover:text-[#A30E27]">
                          <span>View Details</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                        </div>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="mt-8 flex flex-col items-center justify-center rounded-[2rem] border border-dashed border-[#CBD5E1] bg-[#F9FAFB] px-6 py-16 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFF7F8] text-[#C8102E] border border-[#F3D4D8]">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#111827]">No products found</h3>
              <p className="mt-2 max-w-md text-sm text-[#6B7280]">
                We couldn&apos;t find any products matching your search criteria. Try adjusting or clearing your filters.
              </p>
              <button
                type="button"
                onClick={handleClearFilters}
                className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-[#111827] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#1F2937]"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
