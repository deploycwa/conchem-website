// -----------------------------------------------------------------------------
// Conchem International — Centralized Company Data
// All company identity, contact, and shared content lives here.
// Import from this file in pages, sections, and layout components.
// Never duplicate this information in individual files.
// -----------------------------------------------------------------------------

export const company = {
  // ---------------------------------------------------------------------------
  // Identity
  // ---------------------------------------------------------------------------
  name: "Conchem International",
  shortName: "Conchem",
  tagline: "Trusted Waterproofing Solutions Since 2001",
  foundedYear: 2001,

  description:
    "Conchem International manufactures reliable waterproofing and construction chemical solutions for builders, contractors, distributors and homeowners across Eastern and North-Eastern India.",

  descriptionLong:
    "Conchem International has grown by focusing on dependable manufacturing, practical product performance and the day-to-day needs of construction teams. We make waterproofing and construction chemical solutions designed for real site conditions, with an emphasis on consistency, support and long-term value.",

  // ---------------------------------------------------------------------------
  // Mission & Vision
  // ---------------------------------------------------------------------------
  mission: [
    "Deliver dependable waterproofing and construction chemical solutions.",
    "Support builders and homeowners with practical, site-ready products.",
  ],

  vision: [
    "Remain a trusted manufacturing partner for quality-focused projects.",
    "Strengthen our presence across Eastern and North-Eastern India.",
  ],

  // ---------------------------------------------------------------------------
  // Contact
  // ---------------------------------------------------------------------------
  address: {
    line1: "Siliguri",
    state: "West Bengal",
    country: "India",
    full: "Siliguri, West Bengal, India",
  },

  phone: {
    primary: "+91 00000 00000",
    primaryHref: "tel:+910000000000",
  },

  email: {
    primary: "hello@conchem.com",
    primaryHref: "mailto:hello@conchem.com",
  },

  website: "https://conchem.vercel.app",

  businessHours: "Mon - Sat, 9:30 AM to 6:00 PM",

  // ---------------------------------------------------------------------------
  // Social links
  // ---------------------------------------------------------------------------
  social: {
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: "",
  },

  // ---------------------------------------------------------------------------
  // Regions served
  // ---------------------------------------------------------------------------
  regionsServed: ["West Bengal", "North-East India", "Bihar", "Jharkhand"],

  regionsShort: "Eastern and North-Eastern India",

  // ---------------------------------------------------------------------------
  // Statistics (used in WhyConchem, Hero, etc.)
  // ---------------------------------------------------------------------------
  stats: [
    { label: "Since 2001", description: "Manufacturing since 2001" },
    { label: "9+ Products", description: "Growing product catalogue" },
    { label: "Factory Based", description: "Own manufacturing facility" },
    { label: "Eastern India", description: "Serving Eastern and North-Eastern India" },
  ],

  // Trust points shown on the Hero section
  trustPoints: [
    "Manufacturing Since 2001",
    "Factory in Siliguri, West Bengal",
    "Serving Eastern & North-Eastern India",
  ],

  // ---------------------------------------------------------------------------
  // Our Story / Timeline
  // ---------------------------------------------------------------------------
  story: [
    "Conchem International began in 2001 with a simple focus: create dependable waterproofing and construction chemicals that respond to real conditions on site.",
    "Over time, that focus helped us expand from a local manufacturing base to a regional partner for builders, contractors and distributors who need consistent product performance.",
    "Today, we continue to build on that foundation with careful production, practical support and a long-term view of customer relationships.",
  ],

  timeline: [
    { label: "2001", title: "Company Founded" },
    { label: "Expansion", title: "Regional Growth" },
    { label: "Today", title: "Serving Construction Teams Across the Region" },
  ],

  // Why customers trust us
  trustReasons: [
    "Controlled manufacturing processes that support consistency.",
    "Testing-focused production habits that reinforce quality.",
    "Reliable supply chain planning for ongoing availability.",
    "Responsive customer support for project guidance.",
    "Stable product output across recurring batches.",
  ],

  // ---------------------------------------------------------------------------
  // Legal / Footer
  // ---------------------------------------------------------------------------
  copyrightYear: 2026,
  get copyright() {
    return `© ${this.copyrightYear} ${this.name}. All rights reserved.`;
  },

  // ---------------------------------------------------------------------------
  // Shared CTA content (reused across pages via CallToAction component)
  // ---------------------------------------------------------------------------
  cta: {
    default: {
      title: "Ready to Build Stronger, Longer-Lasting Structures?",
      description:
        "Whether you're a contractor, builder, distributor, or homeowner, our team is ready to help you choose the right waterproofing solution.",
      primaryLabel: "Contact Us",
      primaryHref: "/contact",
      secondaryLabel: "Browse Products",
      secondaryHref: "/products",
    },
  },
} as const;

export type Company = typeof company;
