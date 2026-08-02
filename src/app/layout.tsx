import type { Metadata } from "next";
import "./globals.css";
import { Inter, Manrope } from "next/font/google";
import { company } from "@/data/company";
import { images } from "@/data/images";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: company.name,
  description: company.description,
  icons: [
    { rel: "icon", url: images.logo.favicon, sizes: "any" },
    { rel: "icon", url: images.logo.favicon, sizes: "192x192", type: "image/png" },
    { rel: "icon", url: images.logo.favicon, sizes: "512x512", type: "image/png" },
    { rel: "apple-touch-icon", url: images.logo.favicon, sizes: "180x180", type: "image/png" },
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable + " " + inter.variable}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}