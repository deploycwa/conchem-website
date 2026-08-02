// -----------------------------------------------------------------------------
// Conchem International — Centralized Image Data
// All image paths used throughout the project are managed here.
// -----------------------------------------------------------------------------

export const images = {
  logo: {
    primary: "/images/logo/conchem-logo-navbar.png",
    navbar: "/images/logo/conchem-logo-navbar.png",
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
  },
  industries: {
    directory: "/images/industries/",
  },
  factory: {
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
