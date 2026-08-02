import type { MetadataRoute } from "next";

import { company } from "@/data/company";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.name,
    short_name: company.shortName,
    description: company.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#C8102E",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/logo/conchem-favicon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
