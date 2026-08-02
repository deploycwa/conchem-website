// -----------------------------------------------------------------------------
// Conchem International — Centralized Image Data
// All image paths used throughout the project are managed here.
// -----------------------------------------------------------------------------

export const images = {
  logo: {
    primary: "/images/logo/final navbar logo.png",
    navbar: "/images/logo/final navbar logo.png",
    badge: "/images/logo/conchem-logo-badge.png",
    favicon: "/images/logo/conchem-favicon.png",
    alt: "Conchem International",
  },
  hero: {
    primary: "",
    alt: "Conchem International Waterproofing & Construction Chemicals",
    directory: "/images/hero/",
  },
  products: {
    directory: "/images/products/",
    bySlug: {
      "latex-m-p": { src: "", alt: "Latex M.P. Waterproofing Additive" },
      plastomix: { src: "", alt: "Plastomix Mortar Admixture" },
      "rust-stop": { src: "", alt: "Rust Stop Reinforcement Protection" },
      "bond-plus": { src: "", alt: "Bond Plus Bonding Primer" },
      "tile-fix": { src: "", alt: "Tile Fix Adhesive" },
      "prime-coat": { src: "", alt: "Prime Coat Surface Primer" },
      "crack-seal": { src: "", alt: "Crack Seal Repair Mortar" },
      "flex-bond": { src: "", alt: "Flex Bond Waterproofing Agent" },
      "damp-shield": { src: "", alt: "Damp Shield Protection Coating" },
    } as Record<string, { src?: string; alt?: string }>,
  },
  industries: {
    primary: "",
    alt: "Conchem Construction Chemicals Across Industries",
    directory: "/images/industries/",
    byCategory: {
      residential: { src: "", alt: "Residential Construction Solutions" },
      commercial: { src: "", alt: "Commercial Building Waterproofing" },
      industrial: { src: "", alt: "Industrial Plant & Warehouse Systems" },
      infrastructure: { src: "", alt: "Infrastructure & Public Works Protection" },
      hospitality: { src: "", alt: "Hospitality & Resort Solutions" },
      institutional: { src: "", alt: "Institutional & Campus Building Systems" },
    } as Record<string, { src?: string; alt?: string }>,
  },
  factory: {
    primary: "",
    alt: "Conchem Manufacturing Facility & Factory",
    directory: "/images/factory/",
  },
  icons: {
    directory: "/images/icons/",
  },
  placeholders: {
    logo: "/conchem-logo-placeholder.svg",
    file: "/file.svg",
    globe: "/globe.svg",
    next: "/next.svg",
    vercel: "/vercel.svg",
    window: "/window.svg",
  },
} as const;

export type ImagesData = typeof images;
