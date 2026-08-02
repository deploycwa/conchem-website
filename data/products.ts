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
  fullDescription: string;
  /** Key product features (bullet-list on detail page) */
  features: string[];
  /** Application areas this product supports */
  applications: ApplicationArea[];
  /** Key user/site benefits of using this product */
  benefits: string[];
  /** Optional flat key→value technical specifications object */
  technicalSpecifications?: Record<string, string>;
  /** SEO page title for the product detail page */
  seoTitle: string;
  /** SEO meta description for the product detail page */
  seoDescription: string;
  packageSizes: string[];
  downloads: Download[];
  /** Slugs of related products shown at the bottom of the detail page */
  relatedProducts: string[];
  /** True if this product is promoted in the homepage Featured Products section */
  featured: boolean;
  /** Label rendered inside the placeholder image box */
  imagePlaceholder: string;
  /** Optional variants with price information */
  variants?: { size: string; mrp?: number }[];
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
    fullDescription:
      "Latex M.P. is a polymer-based waterproofing additive that enhances the performance of cement mortars and repair mixes. When blended into the mix, it forms a flexible, water-resistant matrix that significantly improves adhesion to existing concrete and masonry. Ideal for demanding site conditions where both waterproofing and bonding strength are critical.",
    features: [
      "Polymer-modified formula for superior adhesion",
      "Improves flexibility and crack resistance of mortar",
      "Compatible with standard OPC and PPC cement",
      "Reduces permeability of treated surfaces",
      "Suitable for both interior and exterior applications",
    ],
    applications: ["Waterproofing", "Bonding", "Repair", "Plaster"],
    benefits: [
      "Extends the service life of waterproofed surfaces",
      "Reduces maintenance costs on treated structures",
      "Easier application compared to rigid waterproofing membranes",
      "Works in conjunction with existing repair mortars",
    ],
    technicalSpecifications: {
      Appearance: "Milky white liquid",
      "Base Type": "Acrylic polymer emulsion",
      Coverage: "Varies by application and mix ratio",
      "Shelf Life": "12 months from date of manufacture",
      Packaging: "1 L, 5 L, 20 L containers",
      "Application Method": "Mix with cement or mortar as directed",
      "Mix Ratio": "Typically 1 part Latex M.P. to 2–3 parts water",
    },
    seoTitle: "Latex M.P. | Waterproofing Additive | Conchem International",
    seoDescription:
      "Latex M.P. is a polymer-based waterproofing additive by Conchem International that improves bonding, flexibility, and durability in mortar and repair applications.",
    packageSizes: ["1 L", "5 L", "20 L"],
    downloads: [
      { title: "Technical Datasheet", description: "Product details and technical overview." },
      { title: "Safety Datasheet", description: "Safety and handling guidance for the product." },
    ],
    relatedProducts: ["plastomix", "rust-stop"],
    featured: true,
    imagePlaceholder: "LATEX M.P. IMAGE",
      variants: [
        { size: "100 ml", mrp: 81.0 },
        { size: "500 ml", mrp: 340.0 },
        { size: "1 L", mrp: 610.0 },
        { size: "5 L", mrp: 2810.0 },
        { size: "10 L", mrp: 5390.0 },
        { size: "20 L", mrp: 10090.0 },
      ],
  },
  {
    slug: "plastomix",
    name: "Plastomix",
    category: "Admixtures",
    shortDescription:
      "A site-ready admixture designed to support workability, consistency and durable concrete performance.",
    fullDescription:
      "Plastomix is a multi-functional concrete and mortar admixture engineered to improve workability without increasing the water–cement ratio. It disperses cement particles uniformly, leading to a denser, more cohesive mix that sets consistently across varying temperature and humidity conditions. Plastomix is widely used by site teams who require reliable batch-to-batch consistency on high-volume projects.",
    features: [
      "Improves workability without extra water addition",
      "Promotes uniform cement particle dispersion",
      "Reduces segregation and bleeding in the mix",
      "Compatible with OPC, PPC and blended cements",
      "Suitable for slabs, columns, walls and plaster",
    ],
    applications: ["Concrete", "Plaster", "Bonding"],
    benefits: [
      "Consistent mix performance across site batches",
      "Reduces rework caused by segregation or poor workability",
      "Contributes to denser, lower-permeability concrete",
      "Lowers long-term maintenance requirements",
    ],
    technicalSpecifications: {
      Appearance: "Light brown liquid",
      "Base Type": "Plasticising polymer solution",
      Coverage: "Varies by mix ratio",
      "Shelf Life": "12 months from date of manufacture",
      Packaging: "1 L, 5 L, 25 L containers",
      "Application Method": "Add to mix water before use",
      "Dosage": "As per project mix design specifications",
    },
    seoTitle: "Plastomix | Concrete & Mortar Admixture | Conchem International",
    seoDescription:
      "Plastomix by Conchem International is a multi-functional admixture that improves workability, consistency, and durability of concrete and mortar mixes on site.",
    packageSizes: ["1 L", "5 L", "25 L"],
    variants: [
      { size: "100 ml", mrp: 49.0 },
      { size: "500 ml", mrp: 210.0 },
      { size: "1 L", mrp: 340.0 },
      { size: "5 L", mrp: 1340.0 },
      { size: "10 L", mrp: 2190.0 },
      { size: "20 L", mrp: 3950.0 },
    ],
    downloads: [
      { title: "Technical Datasheet", description: "Product details and technical overview." },
      { title: "Safety Datasheet", description: "Safety and handling guidance for the product." },
    ],
    relatedProducts: ["latex-m-p"],
    featured: true,
    imagePlaceholder: "PLASTOMIX IMAGE",
  },
  {
    slug: "rust-stop",
    name: "Rust Stop",
    category: "Repair Mortars",
    shortDescription:
      "A protective solution for reinforcement steel and restoration work where corrosion resistance matters.",
    fullDescription:
      "Rust Stop is an active corrosion-inhibiting treatment formulated to passivate the surface of corroded reinforcement steel before patching or protective coating. It reacts chemically with rust products, converting them into a stable, inert layer that can be overcoated with repair mortars. This makes it an essential first step in structural repair and restoration workflows, particularly in coastal, industrial, or chloride-exposed environments.",
    features: [
      "Chemically converts rust to a stable protective layer",
      "Penetrates surface corrosion to reach base metal",
      "Suitable as a pre-treatment before repair mortars",
      "Provides a bondable surface for subsequent coatings",
      "Single-component, brush-applied for easy site use",
    ],
    applications: ["Corrosion Protection", "Repair", "Bonding"],
    benefits: [
      "Halts active corrosion in reinforcement steel",
      "Extends the lifespan of repaired structural elements",
      "Reduces the cost of full steel replacement",
      "Improves adhesion of repair mortars to treated surfaces",
    ],
    technicalSpecifications: {
      Appearance: "Grey paste",
      "Base Type": "Phosphoric acid derivative with corrosion inhibitors",
      Coverage: "Approx. 1–1.5 kg per m²",
      "Shelf Life": "12 months from date of manufacture",
      Packaging: "500 ml, 1 L, 5 L containers",
      "Application Method": "Apply by brush to clean steel surface",
      "Overcoating Time": "Allow to dry fully before applying repair mortar",
    },
    seoTitle: "Rust Stop | Corrosion Inhibitor for Steel | Conchem International",
    seoDescription:
      "Rust Stop by Conchem International is a corrosion-inhibiting treatment that converts rust on reinforcement steel, protecting structural elements and improving repair outcomes.",
    packageSizes: ["500 ml", "1 L", "5 L"],
    variants: [
      { size: "100 ml", mrp: 90.0 },
      { size: "500 ml", mrp: 370.0 },
      { size: "1 L", mrp: 680.0 },
    ],
    downloads: [
      { title: "Technical Datasheet", description: "Product details and technical overview." },
      { title: "Safety Datasheet", description: "Safety and handling guidance for the product." },
    ],
    relatedProducts: ["latex-m-p"],
    featured: true,
    imagePlaceholder: "RUST STOP IMAGE",
  },
  {
    slug: "damposeal-powder",
    name: "Damposeal Powder",
    category: "Waterproofing",
    shortDescription: "Integral cement waterproofing powder for improved water resistance.",
    fullDescription:
      "Damposeal Powder is a powder additive for cementitious mixes that imparts integral waterproofing properties to mortar and concrete. Ideal for small repairs, rendering and waterproof mortars where a dry-addition product is preferred.",
    features: [
      "Dry-addition integral waterproofing compound",
      "Easy to mix into cement mortar or concrete",
      "Reduces permeability and water penetration",
    ],
    applications: ["Waterproofing", "Plaster"],
    benefits: [
      "Quick to use on-site without changing mix equipment",
      "Improves durability of cementitious repairs",
      "Compatible with standard OPC and PPC cements",
    ],
    technicalSpecifications: {
      Appearance: "Fine powder",
      Packaging: "500 g sachet",
      "Shelf Life": "24 months if stored dry",
    },
    seoTitle: "Damposeal Powder | Integral Cement Waterproofing | Conchem International",
    seoDescription:
      "Damposeal Powder is an integral cement waterproofing compound supplied as a dry additive for mortar and concrete mixes.",
    packageSizes: ["500 g"],
    variants: [{ size: "500 g", mrp: 52.0 }],
    downloads: [{ title: "Technical Datasheet", description: "Usage and mixing guidance." }],
    relatedProducts: [],
    featured: false,
    imagePlaceholder: "DAMPOSEAL POWDER IMAGE",
  },
  {
    slug: "damposeal-liquid",
    name: "Damposeal Liquid",
    category: "Waterproofing",
    shortDescription: "Liquid integral waterproofing compound for mortar and concrete.",
    fullDescription:
      "Damposeal Liquid is a liquid integral waterproofing admixture designed to be added to cement mixes for enhanced water resistance. It provides reliable protection for roofs, slabs and other exposed elements when used as part of a correctly designed mix.",
    features: ["Integral waterproofing liquid", "Improves mix cohesion and water resistance"],
    applications: ["Waterproofing", "Concrete"],
    benefits: ["Flexible dosing across pack sizes", "Reduces permeability of treated mixes"],
    technicalSpecifications: {
      Appearance: "Brown liquid",
      "Base Type": "Polymer-modified admixture",
      "Shelf Life": "12 months",
    },
    seoTitle: "Damposeal Liquid | Integral Waterproofing Admixture | Conchem International",
    seoDescription:
      "Damposeal Liquid is a polymer-modified integral waterproofing admixture for cement mixes, available in multiple pack sizes.",
    packageSizes: ["100 ml", "500 ml", "1 L", "5 L", "10 L", "20 L"],
    variants: [
      { size: "100 ml", mrp: 39.0 },
      { size: "500 ml", mrp: 185.0 },
      { size: "1 L", mrp: 298.0 },
      { size: "5 L", mrp: 1150.0 },
      { size: "10 L", mrp: 1840.0 },
      { size: "20 L", mrp: 3390.0 },
    ],
    downloads: [{ title: "Technical Datasheet", description: "Mix ratios and guidance." }],
    relatedProducts: ["plastomix"],
    featured: false,
    imagePlaceholder: "DAMPOSEAL LIQUID IMAGE",
  },
  {
    slug: "damposeal-liquid-gold",
    name: "Damposeal Liquid Gold",
    category: "Waterproofing",
    shortDescription: "Premium integral waterproofing liquid (DL Gold) for demanding applications.",
    fullDescription:
      "Damposeal Liquid Gold (DL Gold) is a premium-grade integral waterproofing admixture formulated for superior durability and low permeability in exposed roof, terrace and structural applications.",
    features: ["Premium polymer formulation", "Enhanced durability and reduced permeability"],
    applications: ["Waterproofing", "Concrete"],
    benefits: ["Higher performance for exposed applications", "Available in trade pack sizes for contractors"],
    technicalSpecifications: {
      Appearance: "Brown liquid",
      "Shelf Life": "12 months",
    },
    seoTitle: "Damposeal Liquid Gold | Premium Waterproofing Admixture | Conchem International",
    seoDescription:
      "Damposeal Liquid Gold (DL Gold) is a premium integral waterproofing admixture by Conchem International for demanding waterproofing needs.",
    packageSizes: ["5 L", "10 L", "20 L"],
    variants: [
      { size: "5 L", mrp: 1350.0 },
      { size: "10 L", mrp: 2100.0 },
      { size: "20 L", mrp: 3790.0 },
    ],
    downloads: [{ title: "Technical Datasheet", description: "Performance and mixing details." }],
    relatedProducts: ["damposeal-liquid"],
    featured: false,
    imagePlaceholder: "DL GOLD IMAGE",
  },
  {
    slug: "de-rusto",
    name: "De-Rusto",
    category: "Repair Mortars",
    shortDescription: "Rust remover for preparation of corroded steel prior to treatment.",
    fullDescription:
      "De-Rusto is a rust-removal solution for cleaning and preparing reinforcement steel prior to passive corrosion treatments or repair mortars. It removes loose rust and prepares a bondable surface.",
    features: ["Effective rust removal", "Prepares steel for subsequent treatments"],
    applications: ["Corrosion Protection", "Repair"],
    benefits: ["Improves bonding of subsequent coatings", "Reduces labour for mechanical cleaning"],
    technicalSpecifications: { Appearance: "Liquid/gel", "Shelf Life": "12 months" },
    seoTitle: "De-Rusto | Rust Remover | Conchem International",
    seoDescription: "De-Rusto is a rust remover used to prepare reinforcement steel prior to repair and coating.",
    packageSizes: ["100 ml", "500 ml", "1 L"],
    variants: [
      { size: "100 ml", mrp: 56.0 },
      { size: "500 ml", mrp: 240.0 },
      { size: "1 L", mrp: 422.0 },
    ],
    downloads: [{ title: "Technical Datasheet", description: "Application and safety guidance." }],
    relatedProducts: ["rust-stop"],
    featured: false,
    imagePlaceholder: "DE-RUSTO IMAGE",
  },
  {
    slug: "tile-o-mate",
    name: "Tile-o-mate",
    category: "Tile Adhesives",
    shortDescription: "Tile adhesive additive to improve bond and workability.",
    fullDescription:
      "Tile-o-mate is an additive designed to enhance the bond strength and flexibility of tile adhesive mixes. It helps improve workability and reduces the risk of tile slippage during installation.",
    features: ["Improves tile adhesive bond", "Enhances workability"],
    applications: ["Tile Fixing", "Bonding"],
    benefits: ["Reduces tile slippage", "Improves long-term adhesion"],
    technicalSpecifications: { Appearance: "Liquid", "Shelf Life": "12 months" },
    seoTitle: "Tile-o-mate | Tile Adhesive Additive | Conchem International",
    seoDescription: "Tile-o-mate improves bond and workability of tile adhesive mixes.",
    packageSizes: ["1 L", "5 L"],
    downloads: [{ title: "Technical Datasheet", description: "Usage and dosing guidance." }],
    relatedProducts: [],
    featured: false,
    imagePlaceholder: "TILE-O-MATE IMAGE",
    variants: [
      { size: "1 L", mrp: 650.0 },
      { size: "5 L", mrp: 2990.0 },
    ],
  },
  {
    slug: "epoxy-bond-master",
    name: "Epoxy Bond Master",
    category: "Primers",
    shortDescription: "Epoxy bonding agent for high-performance adhesion.",
    fullDescription:
      "Epoxy Bond Master is an epoxy-based bonding agent used where very high adhesion and chemical resistance are required. Suitable for structural repair, anchoring and where robust bonding is essential.",
    features: ["High-adhesion epoxy formula", "Chemical and water resistant"],
    applications: ["Bonding", "Repair"],
    benefits: ["Perfect for heavy-duty bonding and repairs", "Provides a durable substrate for repair mortars"],
    technicalSpecifications: { Appearance: "Viscous liquid", "Shelf Life": "12 months" },
    seoTitle: "Epoxy Bond Master | Epoxy Bonding Agent | Conchem International",
    seoDescription: "Epoxy Bond Master is an epoxy bonding agent for demanding repair and bonding applications.",
    packageSizes: ["600 g"],
    downloads: [{ title: "Technical Datasheet", description: "Mixing and safety information." }],
    variants: [{ size: "600 g", mrp: 1290.0 }],
    relatedProducts: [],
    featured: false,
    imagePlaceholder: "EPOXY BOND MASTER IMAGE",
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
