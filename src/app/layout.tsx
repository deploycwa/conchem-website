import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Conchem International",
  description: "Conchem International website scaffold.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}