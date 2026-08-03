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
  downloads?: Download[];
  /** Slugs of related products shown at the bottom of the detail page */
  relatedProducts: string[];
  /** True if this product is promoted in the homepage Featured Products section */
  featured: boolean;
  /** Label rendered inside the placeholder image box */
  imagePlaceholder: string;
  /** Optional variants with price information */
  variants?: { size: string; mrp?: number }[];
  /** Dosage information */
  dosage?: string;
  /** Mixing ratio guidelines */
  mixingRatio?: string;
  /** Step-by-step application instructions */
  instructions?: string[];
  /** Coverage estimate */
  coverage?: string;
  /** Pot life information */
  potLife?: string;
  /** Pack composition details */
  packComposition?: string;
};

// -----------------------------------------------------------------------------
// Product records — 100% aligned with official Conchem Literature
// -----------------------------------------------------------------------------

export const products: Product[] = [
  {
    slug: "latex-m-p",
    name: "Latex M.P.",
    category: "Waterproofing",
    shortDescription:
      "Water-resistant polymer emulsion additive formulated to improve adhesion, flexibility, impact resistance and waterproofing in cement mortars.",
    fullDescription:
      "Latex M.P. is a water-resistant polymer emulsion additive formulated to improve adhesion, flexibility, impact resistance and waterproofing performance in cement mortars. It acts as a strong bonding agent between new and old concrete while enhancing durability and chemical resistance.",
    features: [
      "Polymer-modified waterproofing additive",
      "Excellent bonding between old and new concrete",
      "Improves flexibility and crack resistance",
      "Enhances impact and abrasion resistance",
      "Increases water resistance",
      "Resistant to chemicals and salt attack",
      "Easy to use across multiple applications",
    ],
    applications: ["Waterproofing", "Bonding", "Repair", "Plaster", "Concrete", "Tile Fixing"],
    benefits: [
      "Superior bonding strength between new and old concrete",
      "Flexible, crack-resistant waterproof mortar matrix",
      "Resistant to chemicals and salt attack for extended service life",
      "Multi-purpose for slurry coatings, repair mortars, plaster & tile fixing",
    ],
    mixingRatio:
      "Latex Coating (Slurry): Latex M.P. : Water = 1 : 3 to 1 : 5 | Cement Mortar: Latex M.P. : Water = 1 : 4 to 1 : 6",
    instructions: [
      "For Latex Coating (Slurry): Mix Latex M.P. : Water in 1 : 3 to 1 : 5 ratio.",
      "For Cement Mortar: Mix Latex M.P. : Water in 1 : 4 to 1 : 6 ratio.",
    ],
    technicalSpecifications: {
      "Base Type": "Polymer emulsion additive",
      "Mixing Ratio (Slurry)": "Latex M.P. : Water = 1 : 3 to 1 : 5",
      "Mixing Ratio (Mortar)": "Latex M.P. : Water = 1 : 4 to 1 : 6",
      "Chemical Resistance": "Resistant to chemicals and salt attack",
      "Available Pack Sizes": "100 ml, 500 ml, 1 L, 5 L, 10 L, 20 L",
    },
    seoTitle: "Latex M.P. | Waterproofing Additive & Bonding Agent | Conchem International",
    seoDescription:
      "Latex M.P. is a polymer-based waterproofing emulsion by Conchem International that improves adhesion, flexibility, and waterproofing in cement mortars and repair slurry.",
    packageSizes: ["100 ml", "500 ml", "1 L", "5 L", "10 L", "20 L"],
    variants: [
      { size: "100 ml", mrp: 81.0 },
      { size: "500 ml", mrp: 340.0 },
      { size: "1 L", mrp: 610.0 },
      { size: "5 L", mrp: 2810.0 },
      { size: "10 L", mrp: 5390.0 },
      { size: "20 L", mrp: 10090.0 },
    ],
    downloads: [
      { title: "Technical Datasheet", description: "Product specifications and mix ratio guidance." },
      { title: "Safety Datasheet", description: "Handling and storage safety instructions." },
    ],
    relatedProducts: ["plastomix", "rust-stop", "damposeal-liquid"],
    featured: true,
    imagePlaceholder: "LATEX M.P. IMAGE",
  },

  {
    slug: "damposeal-liquid",
    name: "Damposeal Liquid",
    category: "Waterproofing",
    shortDescription:
      "Ready-to-use integral waterproofing admixture for concrete and mortar that improves workability and produces denser concrete.",
    fullDescription:
      "Damposeal Liquid is a ready-to-use integral waterproofing admixture for concrete and mortar. It improves workability while allowing lower water-cement ratios for denser, stronger concrete.",
    features: [
      "Improves workability",
      "Produces denser concrete",
      "Easier placement and compaction",
      "Reduces shrinkage",
      "Compatible with all Portland cement varieties",
      "Suitable even with slag cement",
      "Effective at very low dosage",
    ],
    applications: ["Waterproofing", "Concrete", "Plaster"],
    benefits: [
      "Allows lower water-cement ratios for denser, stronger concrete",
      "Easier placement and compaction with reduced shrinkage",
      "Compatible with all Portland and slag cement varieties",
      "Highly effective performance at economical dosage",
    ],
    dosage: "100 ml per 50 kg bag of cement",
    instructions: [
      "Prepare dry cement, sand and aggregate mix.",
      "Add 50% of the required mixing water.",
      "Mix Damposeal Liquid into the remaining water.",
      "Add the water-Damposeal mix to the concrete and continue mixing until homogeneous.",
    ],
    technicalSpecifications: {
      Dosage: "100 ml per 50 kg bag of cement",
      "Cement Compatibility": "All Portland cement varieties and slag cement",
      Appearance: "Brown liquid integral waterproofing compound",
      "Available Pack Sizes": "100 ml, 500 ml, 1 L, 5 L, 10 L, 20 L",
    },
    seoTitle: "Damposeal Liquid | Integral Waterproofing Admixture | Conchem International",
    seoDescription:
      "Damposeal Liquid is a ready-to-use integral waterproofing admixture for concrete and mortar by Conchem International. Improves density and workability.",
    packageSizes: ["100 ml", "500 ml", "1 L", "5 L", "10 L", "20 L"],
    variants: [
      { size: "100 ml", mrp: 39.0 },
      { size: "500 ml", mrp: 185.0 },
      { size: "1 L", mrp: 298.0 },
      { size: "5 L", mrp: 1150.0 },
      { size: "10 L", mrp: 1840.0 },
      { size: "20 L", mrp: 3390.0 },
    ],
    downloads: [
      { title: "Technical Datasheet", description: "Dosage instructions and technical specifications." },
      { title: "Safety Datasheet", description: "Safety and handling information." },
    ],
    relatedProducts: ["damposeal-liquid-gold", "plastomix", "damposeal-powder"],
    featured: false,
    imagePlaceholder: "DAMPOSEAL LIQUID IMAGE",
  },

  {
    slug: "damposeal-liquid-gold",
    name: "Damposeal Liquid Gold",
    category: "Waterproofing",
    shortDescription:
      "Super-plasticizing waterproofing admixture that improves workability, density and durability with anti-rust properties.",
    fullDescription:
      "Damposeal Liquid Gold is a super-plasticizing waterproofing admixture that improves workability without increasing water content, resulting in denser and more durable concrete.",
    features: [
      "Super plasticizer",
      "Improves workability",
      "Dense concrete",
      "Easier compaction",
      "Anti-rust properties",
      "Reduces shrinkage",
      "Compatible with Portland cement",
    ],
    applications: ["Waterproofing", "Concrete"],
    benefits: [
      "High-performance super-plasticizing action for dense concrete",
      "Integrated anti-rust properties to protect rebar",
      "Easier compaction and reduced shrinkage for roof slabs and basements",
    ],
    dosage: "100 ml per 50 kg cement",
    instructions: [
      "Prepare the dry mix of cement and aggregate.",
      "Add half of the required mixing water.",
      "Mix Damposeal Liquid Gold thoroughly with the remaining water.",
      "Pour into the mix and continue mixing thoroughly.",
    ],
    technicalSpecifications: {
      Type: "Super-plasticizing waterproofing admixture",
      Dosage: "100 ml per 50 kg cement",
      "Special Feature": "Anti-rust properties & shrinkage reduction",
      "Available Pack Sizes": "100 ml, 500 ml, 1 L, 5 L, 10 L, 20 L",
    },
    seoTitle: "Damposeal Liquid Gold | Super-Plasticizing Waterproofing Admixture | Conchem",
    seoDescription:
      "Damposeal Liquid Gold is a super-plasticizing waterproofing admixture by Conchem International with anti-rust properties for durable concrete.",
    packageSizes: ["100 ml", "500 ml", "1 L", "5 L", "10 L", "20 L"],
    variants: [
      { size: "100 ml", mrp: 55.0 },
      { size: "500 ml", mrp: 240.0 },
      { size: "1 L", mrp: 390.0 },
      { size: "5 L", mrp: 1350.0 },
      { size: "10 L", mrp: 2100.0 },
      { size: "20 L", mrp: 3790.0 },
    ],
    downloads: [
      { title: "Technical Datasheet", description: "Mixing guidelines and technical parameters." },
    ],
    relatedProducts: ["damposeal-liquid", "latex-m-p"],
    featured: false,
    imagePlaceholder: "DL GOLD IMAGE",
  },

  {
    slug: "damposeal-powder",
    name: "Damposeal Powder",
    category: "Waterproofing",
    shortDescription:
      "Chloride-free waterproofing powder compound that improves concrete density and reduces capillary pores.",
    fullDescription:
      "Damposeal Powder is a chloride-free waterproofing compound designed for concrete and mortar. It improves density, reduces capillary pores and enhances water resistance.",
    features: [
      "Waterproofing admixture",
      "Improves concrete density",
      "Better compaction",
      "Reduces pores",
      "Improves workability",
      "Compatible with Portland cement",
      "Produces superior finish",
    ],
    applications: ["Waterproofing", "Concrete", "Plaster"],
    benefits: [
      "Chloride-free formulation safe for reinforced concrete",
      "Significantly reduces capillary pores and water ingress",
      "Produces a smooth, superior finish on mortar & render",
    ],
    dosage: "500 g per 50 kg cement bag",
    instructions: [
      "Mix Damposeal Powder proportionately with dry cement and sand mortar before adding water.",
    ],
    technicalSpecifications: {
      Type: "Chloride-free powder waterproofing compound",
      Dosage: "500 g per 50 kg cement bag",
      "Mixing Method": "Dry blend with cement/mortar before adding water",
      "Available Pack Size": "500 g",
    },
    seoTitle: "Damposeal Powder | Chloride-Free Waterproofing Compound | Conchem",
    seoDescription:
      "Damposeal Powder by Conchem International is a chloride-free waterproofing powder compound for concrete and mortar that reduces capillary pores.",
    packageSizes: ["500 g"],
    variants: [{ size: "500 g", mrp: 52.0 }],
    downloads: [
      { title: "Technical Datasheet", description: "Dry mixing ratios and application guide." },
    ],
    relatedProducts: ["damposeal-liquid", "plastomix"],
    featured: false,
    imagePlaceholder: "DAMPOSEAL POWDER IMAGE",
  },

  {
    slug: "plastomix",
    name: "Plastomix",
    category: "Admixtures",
    shortDescription:
      "Waterproof mortar admixture that improves workability, moisture retention and bonding strength for crack-free plaster.",
    fullDescription:
      "Plastomix is a waterproof mortar admixture that improves workability, moisture retention and bonding strength while producing crack-free plaster and masonry work.",
    features: [
      "Economical solution",
      "Improves workability",
      "Waterproof plaster",
      "Strong bonding",
      "Crack-free finish",
      "Better moisture retention",
      "Increased coverage",
    ],
    applications: ["Plaster", "Waterproofing", "Concrete", "Bonding"],
    benefits: [
      "Ensures crack-free internal and external plaster finish",
      "Improves moisture retention and trowel coverage",
      "Economical dampness control for brickwork, walls and water tanks",
    ],
    instructions: [
      "Prepare dry cement and sand mix.",
      "Add 50% of required water.",
      "Mix Plastomix thoroughly with the remaining water.",
      "Continue mixing until homogeneous.",
    ],
    technicalSpecifications: {
      Type: "Waterproof mortar admixture",
      Application: "Internal/External plaster, brickwork, water tanks, dampness control",
      "Key Feature": "Crack-free finish, improved coverage & moisture retention",
      "Available Pack Sizes": "100 ml, 500 ml, 1 L, 5 L, 10 L, 20 L",
    },
    seoTitle: "Plastomix | Waterproof Plaster & Mortar Admixture | Conchem International",
    seoDescription:
      "Plastomix by Conchem International is a waterproof mortar admixture that improves workability, moisture retention, and bonding for crack-free plaster.",
    packageSizes: ["100 ml", "500 ml", "1 L", "5 L", "10 L", "20 L"],
    variants: [
      { size: "100 ml", mrp: 49.0 },
      { size: "500 ml", mrp: 210.0 },
      { size: "1 L", mrp: 340.0 },
      { size: "5 L", mrp: 1340.0 },
      { size: "10 L", mrp: 2190.0 },
      { size: "20 L", mrp: 3950.0 },
    ],
    downloads: [
      { title: "Technical Datasheet", description: "Application procedures for plaster and mortar." },
    ],
    relatedProducts: ["latex-m-p", "damposeal-liquid"],
    featured: true,
    imagePlaceholder: "PLASTOMIX IMAGE",
  },

  {
    slug: "rust-stop",
    name: "Rust Stop",
    category: "Repair Mortars",
    shortDescription:
      "Protective anti-corrosion coating designed for reinforcing steel before concrete repair work.",
    fullDescription:
      "Rust Stop is a protective anti-corrosion coating designed for reinforcing steel. It forms a protective layer that prevents further corrosion before concrete repair work.",
    features: [
      "Prevents corrosion",
      "Suitable for existing rusted reinforcement",
      "Protects steel before concreting",
      "Easy brush application",
      "Good adhesion",
    ],
    applications: ["Corrosion Protection", "Repair", "Bonding"],
    benefits: [
      "Halts ongoing corrosion on rusted rebar",
      "Easy brush application directly on prepared steel",
      "Forms a strong bonding surface for repair mortars",
    ],
    potLife: "Approximately 30 minutes at 30°C",
    instructions: [
      "Clean the steel surface thoroughly of loose rust and scale.",
      "Mix cement and sand with Rust Stop in 1:1 ratio (by volume).",
      "Apply the mix onto the steel using a stiff brush.",
      "Ensure a dry coating thickness of approximately 1.5 mm.",
    ],
    technicalSpecifications: {
      Type: "Protective anti-corrosion coating for steel",
      "Mix Ratio": "Cement : Sand : Rust Stop = 1 : 1 (by volume)",
      "Coating Thickness": "Approx. 1.5 mm dry coating",
      "Pot Life": "30 minutes at 30°C",
      "Available Pack Sizes": "100 ml, 500 ml, 1 L",
    },
    seoTitle: "Rust Stop | Anti-Corrosion Coating for Steel Rebar | Conchem",
    seoDescription:
      "Rust Stop by Conchem International is a protective anti-corrosion coating for reinforcing steel used in RCC structural repair.",
    packageSizes: ["100 ml", "500 ml", "1 L"],
    variants: [
      { size: "100 ml", mrp: 90.0 },
      { size: "500 ml", mrp: 370.0 },
      { size: "1 L", mrp: 680.0 },
    ],
    downloads: [
      { title: "Technical Datasheet", description: "Surface preparation and application steps." },
    ],
    relatedProducts: ["de-rusto", "latex-m-p", "epoxy-bond-master"],
    featured: true,
    imagePlaceholder: "RUST STOP IMAGE",
  },

  {
    slug: "de-rusto",
    name: "De-Rusto",
    category: "Repair Mortars",
    shortDescription:
      "Single-component rust remover that chemically removes corrosion while leaving a phosphate coating for paint adhesion.",
    fullDescription:
      "De-Rusto is a single-component rust remover that chemically removes corrosion while leaving a phosphate coating for improved paint adhesion.",
    features: [
      "Removes rust",
      "Provides phosphate coating",
      "Improves paint adhesion",
      "Easy application",
      "Cost-effective rust treatment",
    ],
    applications: ["Corrosion Protection", "Repair", "Surface Preparation"],
    benefits: [
      "Chemical rust removal eliminating heavy grinding",
      "Leaves an integral phosphate conversion layer for superior paint adhesion",
      "Versatile use across steel, aluminium, and galvanized surfaces",
    ],
    instructions: [
      "Remove loose rust and scale.",
      "Apply De-Rusto using a stiff brush or cloth.",
      "Leave for a few minutes to react with rust.",
      "Wipe dry thoroughly.",
      "Apply a second coat if heavy rust remains.",
    ],
    technicalSpecifications: {
      Type: "Single-component chemical rust remover",
      "Conversion Coating": "Phosphate layer",
      Applications: "Reinforcement steel, bridges, overhead tanks, industrial structures, aluminium, galvanized steel",
      "Available Pack Sizes": "100 ml, 500 ml, 1 L",
    },
    seoTitle: "De-Rusto | Chemical Rust Remover & Phosphate Converter | Conchem",
    seoDescription:
      "De-Rusto by Conchem International chemically removes corrosion from steel and metal surfaces while leaving a phosphate coating.",
    packageSizes: ["100 ml", "500 ml", "1 L"],
    variants: [
      { size: "100 ml", mrp: 56.0 },
      { size: "500 ml", mrp: 240.0 },
      { size: "1 L", mrp: 422.0 },
    ],
    downloads: [
      { title: "Technical Datasheet", description: "Chemical cleaning and application instructions." },
    ],
    relatedProducts: ["rust-stop", "latex-m-p"],
    featured: false,
    imagePlaceholder: "DE-RUSTO IMAGE",
  },

  {
    slug: "tile-o-mate",
    name: "Tile-O-Mate",
    category: "Tile Adhesives",
    shortDescription:
      "Waterproofing additive that improves adhesion and tensile strength of mortar used for ceramic, marble and granite tiles.",
    fullDescription:
      "Tile-O-Mate is a waterproofing additive that improves adhesion and tensile strength of mortar used for fixing ceramic tiles, marble and granite.",
    features: [
      "Waterproofs tiled surfaces",
      "Improves mortar adhesion",
      "Higher tensile strength",
      "Easy mixing",
      "Suitable for ceramic, granite and marble",
    ],
    applications: ["Tile Fixing", "Waterproofing", "Bonding"],
    benefits: [
      "Improves bonding strength and prevents tile debonding",
      "Imparts waterproofing to tile bedding mortar",
      "Suitable for ceramic tiles, granite, marble, floor and wall tiles",
    ],
    instructions: [
      "Mix 1 litre Tile-O-Mate with 15 kg cement (use white cement for marble) and fine sand.",
      "Add water to achieve the desired trowelable consistency.",
      "Spread mortar evenly on substrate.",
      "Press tiles firmly into position.",
    ],
    technicalSpecifications: {
      Type: "Waterproofing tile mortar additive",
      Dosage: "1 L Tile-O-Mate per 15 kg cement + fine sand",
      Applications: "Ceramic tiles, mosaic floors, granite, marble, wall & floor tiles, skirting",
      "Available Pack Sizes": "1 L, 5 L",
    },
    seoTitle: "Tile-O-Mate | Waterproofing Tile Mortar Additive | Conchem",
    seoDescription:
      "Tile-O-Mate by Conchem International improves adhesion, tensile strength, and waterproofing of mortar for fixing tiles, granite, and marble.",
    packageSizes: ["1 L", "5 L"],
    variants: [
      { size: "1 L", mrp: 650.0 },
      { size: "5 L", mrp: 2990.0 },
    ],
    downloads: [
      { title: "Technical Datasheet", description: "Tile laying mix design and application guidelines." },
    ],
    relatedProducts: ["latex-m-p", "plastomix"],
    featured: false,
    imagePlaceholder: "TILE-O-MATE IMAGE",
  },

  {
    slug: "epoxy-bond-master",
    name: "Epoxy Bond Master",
    category: "Primers",
    shortDescription:
      "Two-component solvent-free epoxy bonding agent for structural bonding between old and new concrete.",
    fullDescription:
      "Epoxy Bond Master is a two-component solvent-free epoxy bonding agent developed for structural bonding between old and new concrete.",
    features: [
      "Two-component epoxy",
      "Solvent free",
      "Excellent bond strength",
      "Moist surface application",
      "Water resistant",
      "Long pot life",
      "Suitable for structural repairs",
    ],
    applications: ["Bonding", "Repair", "Surface Preparation", "Concrete"],
    benefits: [
      "Exceeds the tensile strength of concrete for structural bonding",
      "100% solids solvent-free formula usable on moist surfaces",
      "Ideal for structural columns, roof slabs, retaining walls & extensions",
    ],
    coverage: "One 600 g pack covers approximately 12–30 sq.ft (depending on substrate porosity).",
    packComposition: "Component A: 400 g Resin | Component B: 200 g Hardener",
    instructions: [
      "Mix Component A (400 g Resin) and Component B (200 g Hardener) in 2:1 ratio by weight.",
      "Mix thoroughly until a uniform grey mixture is obtained.",
      "Apply with a stiff brush onto prepared substrate before the epoxy begins to set.",
    ],
    technicalSpecifications: {
      Type: "Solvent-free two-component epoxy bonding agent",
      "Mix Ratio": "Component A : Component B = 2 : 1 by weight",
      "Pack Composition": "Component A (Resin) 400 g + Component B (Hardener) 200 g",
      Coverage: "12–30 sq.ft per 600 g pack",
      "Surface Application": "Dry or moist concrete surfaces",
      "Available Pack Size": "600 g",
    },
    seoTitle: "Epoxy Bond Master | Two-Component Epoxy Bonding Agent | Conchem",
    seoDescription:
      "Epoxy Bond Master by Conchem International is a solvent-free 2-component epoxy bonding agent for structural bonding between old and new concrete.",
    packageSizes: ["600 g"],
    variants: [{ size: "600 g", mrp: 1290.0 }],
    downloads: [
      { title: "Technical Datasheet", description: "Mixing ratios, pot life and structural repair guide." },
    ],
    relatedProducts: ["latex-m-p", "rust-stop"],
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
