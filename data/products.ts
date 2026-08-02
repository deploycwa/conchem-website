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
    fullDescription:
      "Bond Plus is an acrylic-based bonding agent that primes substrates for improved adhesion of mortars, plasters, tile adhesives and overlays. Applied to the substrate before the next coat, it creates a tacky, high-grip interface that significantly reduces the risk of delamination. Particularly effective on smooth, low-porosity or aged surfaces where mechanical bonding alone is insufficient.",
    features: [
      "Acrylic polymer formula for high grip adhesion",
      "Compatible with cement mortars, plasters and tile adhesives",
      "Reduces delamination risk on smooth substrates",
      "Effective on concrete, brick, block and fibre-cement board",
      "Interior and exterior grade",
    ],
    applications: ["Bonding", "Surface Preparation", "Repair"],
    benefits: [
      "Eliminates the need for mechanical keying on smooth surfaces",
      "Improves long-term adhesion of overlying finishes",
      "Reduces callback risk from delaminating plaster or tile",
      "Fast-drying formula supports project scheduling",
    ],
    technicalSpecifications: {
      Appearance: "White liquid",
      "Base Type": "Acrylic emulsion",
      Coverage: "Varies by substrate porosity",
      "Shelf Life": "12 months from date of manufacture",
      Packaging: "1 L, 5 L, 20 L containers",
      "Application Method": "Apply to clean, dry surface and allow to tack",
      "Open Time": "Apply next coat while surface is tacky",
    },
    seoTitle: "Bond Plus | Bonding Agent & Primer | Conchem International",
    seoDescription:
      "Bond Plus by Conchem International is an acrylic bonding agent that primes substrates for improved adhesion of mortars, plasters, tile adhesives and overlays.",
    packageSizes: ["1 L", "5 L", "20 L"],
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
    fullDescription:
      "Tile Fix is a polymer-modified tile adhesive formulated for reliable bonding of ceramic, vitrified and porcelain tiles onto cement-rendered, concrete or masonry substrates. Its non-slump consistency holds tiles firmly in position during installation, while the extended open time allows accurate adjustment before the bond sets. Suitable for both wall and floor tile applications in wet and dry areas.",
    features: [
      "Polymer-modified for improved tile bonding strength",
      "Non-slump consistency for vertical wall applications",
      "Extended open time for tile positioning and adjustment",
      "Suitable for ceramic, vitrified and porcelain tiles",
      "For use in wet areas including bathrooms and kitchens",
    ],
    applications: ["Tile Fixing", "Bonding"],
    benefits: [
      "Prevents tile slippage during installation",
      "Reduces hollow-sounding tiles caused by poor bonding",
      "Suitable for a wide range of tile types and sizes",
      "Consistent performance in humid and wet environments",
    ],
    technicalSpecifications: {
      Appearance: "White paste",
      "Base Type": "Polymer-modified cementitious adhesive",
      Coverage: "Approx. 1.5–2 kg per m²",
      "Shelf Life": "12 months from date of manufacture",
      Packaging: "1 L, 5 L containers",
      "Application Method": "Apply with notched trowel, press tiles firmly",
      "Open Time": "Approx. 20–25 minutes",
      "Pot Life": "Approx. 2–3 hours after mixing",
    },
    seoTitle: "Tile Fix | Polymer Tile Adhesive | Conchem International",
    seoDescription:
      "Tile Fix by Conchem International is a polymer-modified tile adhesive for secure, reliable bonding of ceramic, vitrified and porcelain tiles on walls and floors.",
    packageSizes: ["1 L", "5 L"],
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
    fullDescription:
      "Prime Coat is a penetrating primer designed to consolidate porous and friable substrates before the application of renders, coatings or waterproofing systems. It deeply penetrates the surface, binding loose particles and reducing differential suction — the leading cause of uneven finish coats. Prime Coat is particularly effective on newly plastered walls, aged masonry and high-suction block substrates.",
    features: [
      "Deep-penetrating formula for porous and friable substrates",
      "Reduces differential suction before topcoat application",
      "Binds loose surface particles and consolidates the substrate",
      "Compatible with cement renders, paints and waterproofing systems",
      "Suitable for new and existing masonry, block and plaster",
    ],
    applications: ["Surface Preparation", "Bonding"],
    benefits: [
      "Eliminates uneven suction that causes patchy finishes",
      "Improves bond of subsequent coats and reduces cracking",
      "Extends the lifespan of applied finishes",
      "Reduces material waste from over-absorption",
    ],
    technicalSpecifications: {
      Appearance: "Transparent to milky white liquid",
      "Base Type": "Acrylic solution in water",
      Coverage: "Approx. 8–10 m² per litre",
      "Shelf Life": "12 months from date of manufacture",
      Packaging: "1 L, 5 L, 20 L containers",
      "Application Method": "Apply by brush or roller to clean surface",
      "Overcoating Time": "1–2 hours under normal conditions",
    },
    seoTitle: "Prime Coat | Surface Preparation Primer | Conchem International",
    seoDescription:
      "Prime Coat by Conchem International is a penetrating primer that consolidates porous substrates, reduces differential suction and improves adhesion of finishes.",
    packageSizes: ["1 L", "5 L", "20 L"],
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
    fullDescription:
      "Crack Seal is a polymer-modified, low-viscosity crack repair compound designed to penetrate hairline and structural cracks by capillary action or pressure injection. Once cured, it forms a flexible, waterproof seal that resists further water ingress and movement cycling. It is widely used in roof slabs, basement walls, retaining structures and any element where active crack movement and water entry are a concern.",
    features: [
      "Low-viscosity formula for capillary penetration into hairline cracks",
      "Flexible when cured to accommodate minor crack movement",
      "Waterproof barrier after curing prevents further ingress",
      "Can be applied by brush, roller or pressure injection",
      "Compatible with cement-based repair mortars as a follow-up",
    ],
    applications: ["Repair", "Waterproofing"],
    benefits: [
      "Stops active water ingress through cracks immediately",
      "Prevents crack widening through flexible seal formation",
      "Suitable for both fine and medium-width cracks",
      "Reduces the need for costly structural investigation",
    ],
    technicalSpecifications: {
      Appearance: "Grey liquid",
      "Base Type": "Polymer-modified cementitious compound",
      Coverage: "Varies by crack width and depth",
      "Shelf Life": "12 months from date of manufacture",
      Packaging: "1 L, 5 L, 20 L containers",
      "Application Method": "Brush, roller or pressure injection into prepared crack",
      "Curing Time": "24–48 hours under normal conditions",
    },
    seoTitle: "Crack Seal | Crack Repair Compound | Conchem International",
    seoDescription:
      "Crack Seal by Conchem International is a flexible, waterproof crack repair compound for hairline and structural cracks in roof slabs, walls and retaining structures.",
    packageSizes: ["1 L", "5 L", "20 L"],
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
    fullDescription:
      "Flex Bond is an elastomeric, two-in-one bonding and waterproofing agent that accommodates substrate movement without cracking or delaminating. When applied as a slurry coat or brush-applied membrane, it provides a continuous, flexible waterproof layer that bonds strongly to concrete, masonry and plaster. It is particularly valuable in areas subject to thermal cycling, structural vibration or minor settlement movement.",
    features: [
      "Elastomeric formula for movement-tolerant waterproofing",
      "Dual-function: bonding agent and waterproofing membrane",
      "Accommodates crack bridging up to 0.5 mm",
      "Excellent adhesion on concrete, masonry and plaster",
      "Suitable for roofs, bathrooms, water tanks and basements",
    ],
    applications: ["Waterproofing", "Bonding", "Repair"],
    benefits: [
      "Prevents cracking caused by thermal and structural movement",
      "Provides continuous waterproofing without rigid membranes",
      "Extends the service interval between maintenance cycles",
      "Single-component, easy to apply with standard tools",
    ],
    technicalSpecifications: {
      Appearance: "White flexible liquid",
      "Base Type": "Elastomeric acrylic emulsion",
      Coverage: "Varies by application thickness",
      "Shelf Life": "12 months from date of manufacture",
      Packaging: "1 L, 5 L, 20 L containers",
      "Application Method": "Mix with cement or apply neat as directed",
      "Elongation at Break": "Up to 200%",
      "Waterproofing System": "Brush-applied membrane in 2–3 coats",
    },
    seoTitle: "Flex Bond | Elastomeric Waterproofing | Conchem International",
    seoDescription:
      "Flex Bond by Conchem International is an elastomeric bonding and waterproofing agent for surfaces subject to movement, thermal cycling and structural vibration.",
    packageSizes: ["1 L", "5 L", "20 L"],
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
    fullDescription:
      "Damp Shield is a cementitious, crystalline-reinforced waterproofing slurry designed to block rising damp and lateral water migration through masonry walls and floor slabs. When applied to the surface, its active crystals grow into the concrete or masonry matrix in the presence of moisture, creating a permanent, self-sealing barrier. Damp Shield is especially effective in basements, cellars, wet rooms and any interior space where persistent damp is a problem.",
    features: [
      "Crystalline technology grows into the substrate to block water paths",
      "Self-sealing — crystals re-activate in the presence of future moisture",
      "Suitable for positive and negative side waterproofing",
      "Blocks rising damp and lateral water migration",
      "Can be applied to damp or green concrete surfaces",
    ],
    applications: ["Waterproofing", "Surface Preparation"],
    benefits: [
      "Permanent waterproofing that grows with the structure",
      "Reduces mould, mildew and damp-related interior damage",
      "No need for membrane replacement over the product lifespan",
      "Maintains breathability of the treated surface",
    ],
    technicalSpecifications: {
      Appearance: "White liquid",
      "Base Type": "Cementitious crystalline waterproofing slurry",
      Coverage: "Approx. 4–6 m² per litre",
      "Shelf Life": "12 months from date of manufacture",
      Packaging: "1 L, 5 L, 20 L containers",
      "Application Method": "Apply by brush or roller in two coats",
      "Number of Coats": "Minimum 2 coats for effective waterproofing",
      "Curing": "Keep surface damp during first 48 hours of curing",
    },
    seoTitle: "Damp Shield | Crystalline Waterproofing | Conchem International",
    seoDescription:
      "Damp Shield by Conchem International is a crystalline waterproofing slurry that permanently blocks rising damp and lateral water migration in masonry and concrete.",
    packageSizes: ["1 L", "5 L", "20 L"],
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
