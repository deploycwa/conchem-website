// -----------------------------------------------------------------------------
// Conchem International — Centralized Image Data
// All image paths used throughout the project are managed here.
// -----------------------------------------------------------------------------

export const images = {
  logo: {
    navbar: "/images/logo/final navbar logo.png",
    badge: "/images/logo/conchem-logo-badge.png",
    favicon: "/images/logo/conchem-favicon.png",
    alt: "Conchem International",
  },
  hero: {
    primary: "/images/hero/hero.png",
    alt: "Conchem International Waterproofing & Construction Chemicals",
    directory: "/images/hero/",
  },
  products: {
    directory: "/images/products/",
    bySlug: {
      "latex-m-p": {
        src: "/images/products/latex1.png",
        alt: "Latex M.P. Waterproofing Additive",
        gallery: [
          "/images/products/latex1.png",
          "/images/products/latex2.png",
          "/images/products/latex3.png",
          "/images/products/latex4.png",
        ],
      },
      "plastomix": {
        src: "/images/products/plastomix1.png",
        alt: "Plastomix Mortar Admixture",
        gallery: [
          "/images/products/plastomix1.png",
          "/images/products/plastomix2.png",
          "/images/products/plastomix3.png",
        ],
      },
      "rust-stop": {
        src: "/images/products/ruststop1.png",
        alt: "Rust Stop Reinforcement Protection",
        gallery: [
          "/images/products/ruststop1.png",
          "/images/products/ruststop2.png",
          "/images/products/ruststop3.png",
        ],
      },
      "damposeal-powder": {
        src: "/images/products/dp1.png",
        alt: "Damposeal Powder Waterproofing Additive",
        gallery: [
          "/images/products/dp1.png",
          "/images/products/dp2.png",
          "/images/products/dp3.png",
        ],
      },
      "damposeal-liquid": {
        src: "/images/products/dl1.png",
        alt: "Damposeal Liquid Integral Waterproofing",
        gallery: [
          "/images/products/dl1.png",
          "/images/products/dl2.png",
          "/images/products/dl3.png",
        ],
      },
      "damposeal-liquid-gold": {
        src: "/images/products/dlgold1.png",
        alt: "Damposeal Liquid Gold Premium Waterproofing",
        gallery: [
          "/images/products/dlgold1.png",
          "/images/products/dlgold2.png",
          "/images/products/dlgold3.png",
        ],
      },
      "de-rusto": {
        src: "/images/products/derusto1.png",
        alt: "De-Rusto Rust Removal Solution",
        gallery: [
          "/images/products/derusto1.png",
          "/images/products/derusto2.png",
          "/images/products/derusto3.png",
          "/images/products/derusto4.png",
        ],
      },
      "tile-o-mate": {
        src: "/images/products/tileomate1.png",
        alt: "Tile-o-mate Tile Adhesive Additive",
        gallery: [
          "/images/products/tileomate1.png",
          "/images/products/tileomate2.png",
          "/images/products/tileomate3.png",
        ],
      },
      "epoxy-bond-master": {
        src: "/images/products/ebm1.png",
        alt: "Epoxy Bond Master Bonding Agent",
        gallery: ["/images/products/ebm1.png"],
      },
    } as Record<string, { src?: string; alt?: string; gallery?: string[] }>,
  },
  industries: {
    primary: "/images/industries/industries.png",
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
    primary: "/images/factory/factory.png",
    alt: "Conchem Manufacturing Facility & Factory",
    directory: "/images/factory/",
  },
  icons: {
    directory: "/images/icons/",
  },
} as const;

export type ImagesData = typeof images;

