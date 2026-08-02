// -----------------------------------------------------------------------------
// Conchem International — Centralized Product Data
// All product information lives here. Import from this file in pages and
// sections. Never duplicate product data in page files.
// -----------------------------------------------------------------------------

export type ProductCategory =
  | "Waterproofing"
  | "Admixtures"
  | "Repair Mortars"
  | "Tile Adhesives"
  | "Grouts"
  | "Primers";

export type ApplicationArea =
  | "Waterproofing"
  | "Repair"
  | "Bonding"
  | "Plaster"
  | "Concrete"
  | "Surface Preparation"
  | "Corrosion Protection"
  | "Tile Fixing";

export type Specification = {
  property: string;
  value: string;
};

export type Download = {
  title: string;
  description: string;
};

export type Product = {
  /** URL-safe identifier used in /products/[slug] */
  slug: string;
  name: string;
  category: ProductCategory;
  /** One-line summary used on listing cards */
  shortDescription: string;
  /** Longer description used on the detail page hero */
  description: string;
  applications: ApplicationArea[];
  packageSizes: string[];
  specifications: Specification[];
  downloads: Download[];
  /** Slugs of related products shown at the bottom of the detail page */
  relatedProducts: string[];
  /** True if this product is promoted in the homepage Featured Products section */
  featured: boolean;
  /** Label rendered inside the placeholder image box */
  imagePlaceholder: string;
};

// -----------------------------------------------------------------------------
// Product records
// -----------------------------------------------------------------------------

export const products: Product[] = [
  {
    slug: "latex-m-p",
    name: "Latex M.P.",
    category: "Waterproofing",
    shortDescription:
      "A dependable waterproofing additive for mortar and repair applications that need stronger bonding and improved flexibility.",
    description:
      "A reliable waterproofing additive designed to improve bonding, flexibility and durability in demanding construction applications.",
    applications: ["Waterproofing", "Bonding", "Repair", "Plaster"],
    packageSizes: ["1 L", "5 L", "20 L"],
    specifications: [
      { property: "Appearance", value: "Milky white liquid" },
      { property: "Coverage", value: "Varies by application" },
      { property: "Shelf Life", value: "12 months from date of manufacture" },
      { property: "Packaging", value: "1 L, 5 L, 20 L containers" },
      { property: "Application", value: "Mix with cement or mortar as directed" },
    ],
    downloads: [
      { title: "Technical Datasheet", description: "Product details and technical overview." },
      { title: "Safety Datasheet", description: "Safety and handling guidance for the product." },
    ],
    relatedProducts: ["plastomix", "rust-stop", "flex-bond"],
    featured: true,
    imagePlaceholder: "LATEX M.P. IMAGE",
  },
  {
    slug: "plastomix",
    name: "Plastomix",
    category: "Admixtures",
    shortDescription:
      "A site-ready admixture designed to support workability, consistency and durable concrete performance.",
    description:
      "A dependable solution for strengthening mortar performance, helping teams achieve consistent results across site conditions.",
    applications: ["Concrete", "Plaster", "Bonding"],
    packageSizes: ["1 L", "5 L", "25 L"],
    specifications: [
      { property: "Appearance", value: "Light brown liquid" },
      { property: "Coverage", value: "Varies by mix ratio" },
      { property: "Shelf Life", value: "12 months from date of manufacture" },
      { property: "Packaging", value: "1 L, 5 L, 25 L containers" },
      { property: "Application", value: "Add to mix water before use" },
    ],
    downloads: [
      { title: "Technical Datasheet", description: "Product details and technical overview." },
      { title: "Safety Datasheet", description: "Safety and handling guidance for the product." },
    ],
    relatedProducts: ["latex-m-p", "crack-seal", "bond-plus"],
    featured: true,
    imagePlaceholder: "PLASTOMIX IMAGE",
  },
  {
    slug: "rust-stop",
    name: "Rust Stop",
    category: "Repair Mortars",
    shortDescription:
      "A protective solution for reinforcement steel and restoration work where corrosion resistance matters.",
    description:
      "A protective treatment that helps safeguard reinforcement steel and critical surfaces from corrosion-related damage.",
    applications: ["Corrosion Protection", "Repair", "Bonding"],
    packageSizes: ["500 ml", "1 L", "5 L"],
    specifications: [
      { property: "Appearance", value: "Grey paste" },
      { property: "Coverage", value: "Approx. 1–1.5 kg per m²" },
      { property: "Shelf Life", value: "12 months from date of manufacture" },
      { property: "Packaging", value: "500 ml, 1 L, 5 L containers" },
      { property: "Application", value: "Apply by brush to clean steel surface" },
    ],
    downloads: [
      { title: "Technical Datasheet", description: "Product details and technical overview." },
      { title: "Safety Datasheet", description: "Safety and handling guidance for the product." },
    ],
    relatedProducts: ["latex-m-p", "crack-seal", "prime-coat"],
    featured: true,
    imagePlaceholder: "RUST STOP IMAGE",
  },
  {
    slug: "bond-plus",
    name: "Bond Plus",
    category: "Primers",
    shortDescription:
      "A reliable bonding aid that helps prepare surfaces and improve adhesion for construction applications.",
    description:
      "A reliable bonding aid that helps prepare surfaces and improve adhesion for construction applications.",
    applications: ["Bonding", "Surface Preparation", "Repair"],
    packageSizes: ["1 L", "5 L", "20 L"],
    specifications: [
      { property: "Appearance", value: "White liquid" },
      { property: "Coverage", value: "Varies by substrate porosity" },
      { property: "Shelf Life", value: "12 months from date of manufacture" },
      { property: "Packaging", value: "1 L, 5 L, 20 L containers" },
      { property: "Application", value: "Apply to clean, dry surface and allow to tack" },
    ],
    downloads: [
      { title: "Technical Datasheet", description: "Product details and technical overview." },
      { title: "Safety Datasheet", description: "Safety and handling guidance for the product." },
    ],
    relatedProducts: ["prime-coat", "plastomix", "latex-m-p"],
    featured: false,
    imagePlaceholder: "BOND PLUS IMAGE",
  },
  {
    slug: "tile-fix",
    name: "Tile Fix",
    category: "Tile Adhesives",
    shortDescription:
      "A practical tile fixing product for secure installation and dependable performance across site conditions.",
    description:
      "A practical tile fixing product for secure installation and dependable performance across site conditions.",
    applications: ["Tile Fixing", "Bonding"],
    packageSizes: ["1 L", "5 L"],
    specifications: [
      { property: "Appearance", value: "White paste" },
      { property: "Coverage", value: "Approx. 1.5–2 kg per m²" },
      { property: "Shelf Life", value: "12 months from date of manufacture" },
      { property: "Packaging", value: "1 L, 5 L containers" },
      { property: "Application", value: "Apply with notched trowel, press tiles firmly" },
    ],
    downloads: [
      { title: "Technical Datasheet", description: "Product details and technical overview." },
      { title: "Safety Datasheet", description: "Safety and handling guidance for the product." },
    ],
    relatedProducts: ["bond-plus", "prime-coat", "flex-bond"],
    featured: false,
    imagePlaceholder: "TILE FIX IMAGE",
  },
  {
    slug: "prime-coat",
    name: "Prime Coat",
    category: "Primers",
    shortDescription:
      "A surface preparation primer designed to support clean application and consistent finishing results.",
    description:
      "A surface preparation primer designed to support clean application and consistent finishing results.",
    applications: ["Surface Preparation", "Bonding"],
    packageSizes: ["1 L", "5 L", "20 L"],
    specifications: [
      { property: "Appearance", value: "Transparent to white liquid" },
      { property: "Coverage", value: "Approx. 8–10 m² per litre" },
      { property: "Shelf Life", value: "12 months from date of manufacture" },
      { property: "Packaging", value: "1 L, 5 L, 20 L containers" },
      { property: "Application", value: "Apply by brush or roller to clean surface" },
    ],
    downloads: [
      { title: "Technical Datasheet", description: "Product details and technical overview." },
      { title: "Safety Datasheet", description: "Safety and handling guidance for the product." },
    ],
    relatedProducts: ["bond-plus", "latex-m-p", "damp-shield"],
    featured: false,
    imagePlaceholder: "PRIME COAT IMAGE",
  },
  {
    slug: "crack-seal",
    name: "Crack Seal",
    category: "Repair Mortars",
    shortDescription:
      "A repair-focused solution for addressing cracks and helping restore surface integrity in demanding areas.",
    description:
      "A repair-focused solution for addressing cracks and helping restore surface integrity in demanding areas.",
    applications: ["Repair", "Waterproofing"],
    packageSizes: ["1 L", "5 L", "20 L"],
    specifications: [
      { property: "Appearance", value: "Grey liquid" },
      { property: "Coverage", value: "Varies by crack width and depth" },
      { property: "Shelf Life", value: "12 months from date of manufacture" },
      { property: "Packaging", value: "1 L, 5 L, 20 L containers" },
      { property: "Application", value: "Inject or brush into prepared crack" },
    ],
    downloads: [
      { title: "Technical Datasheet", description: "Product details and technical overview." },
      { title: "Safety Datasheet", description: "Safety and handling guidance for the product." },
    ],
    relatedProducts: ["rust-stop", "latex-m-p", "flex-bond"],
    featured: false,
    imagePlaceholder: "CRACK SEAL IMAGE",
  },
  {
    slug: "flex-bond",
    name: "Flex Bond",
    category: "Waterproofing",
    shortDescription:
      "A flexible bonding solution intended for repair work that needs better adhesion and movement tolerance.",
    description:
      "A flexible bonding solution intended for repair work that needs better adhesion and movement tolerance.",
    applications: ["Waterproofing", "Bonding", "Repair"],
    packageSizes: ["1 L", "5 L", "20 L"],
    specifications: [
      { property: "Appearance", value: "White flexible liquid" },
      { property: "Coverage", value: "Varies by application" },
      { property: "Shelf Life", value: "12 months from date of manufacture" },
      { property: "Packaging", value: "1 L, 5 L, 20 L containers" },
      { property: "Application", value: "Mix with cement or apply neat as directed" },
    ],
    downloads: [
      { title: "Technical Datasheet", description: "Product details and technical overview." },
      { title: "Safety Datasheet", description: "Safety and handling guidance for the product." },
    ],
    relatedProducts: ["latex-m-p", "damp-shield", "crack-seal"],
    featured: false,
    imagePlaceholder: "FLEX BOND IMAGE",
  },
  {
    slug: "damp-shield",
    name: "Damp Shield",
    category: "Waterproofing",
    shortDescription:
      "A protective waterproofing product developed to help reduce damp-related issues in interior spaces.",
    description:
      "A protective waterproofing product developed to help reduce damp-related issues in interior spaces.",
    applications: ["Waterproofing", "Surface Preparation"],
    packageSizes: ["1 L", "5 L", "20 L"],
    specifications: [
      { property: "Appearance", value: "White liquid" },
      { property: "Coverage", value: "Approx. 4–6 m² per litre" },
      { property: "Shelf Life", value: "12 months from date of manufacture" },
      { property: "Packaging", value: "1 L, 5 L, 20 L containers" },
      { property: "Application", value: "Apply by brush or roller in two coats" },
    ],
    downloads: [
      { title: "Technical Datasheet", description: "Product details and technical overview." },
      { title: "Safety Datasheet", description: "Safety and handling guidance for the product." },
    ],
    relatedProducts: ["flex-bond", "latex-m-p", "prime-coat"],
    featured: false,
    imagePlaceholder: "DAMP SHIELD IMAGE",
  },
];

// -----------------------------------------------------------------------------
// Lookup helpers
// -----------------------------------------------------------------------------

/** Returns a product by slug, or undefined if not found. */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/** Returns only the products marked as featured (used by the homepage section). */
export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

/** Returns products related to the given product by their slugs. */
export function getRelatedProducts(product: Product): Product[] {
  return product.relatedProducts
    .map((slug) => getProductBySlug(slug))
    .filter((p): p is Product => p !== undefined);
}

/** Returns all unique category names present in the product list. */
export function getProductCategories(): ProductCategory[] {
  return [...new Set(products.map((p) => p.category))];
}
