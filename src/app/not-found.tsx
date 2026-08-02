import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Container from "../components/ui/Container";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col gap-4 px-4 py-4">
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex flex-1 flex-col items-center justify-center outline-none">
        <section className="py-12 sm:py-16 lg:py-24">
          <Container>
            <div className="mx-auto max-w-xl text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#F3D4D8] bg-[#FFF7F8] text-[#C8102E]">
                <Compass className="h-8 w-8" aria-hidden="true" />
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.32em] text-[#C8102E] sm:text-sm">
                404 Error
              </p>

              <h1 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-[#111827] sm:text-4xl">
                Page Not Found
              </h1>

              <p className="mt-4 text-base leading-7 text-[#4B5563] sm:text-lg">
                The page you are looking for might have been moved, removed, or is temporarily unavailable.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#111827] px-8 text-sm font-semibold text-white transition-colors hover:bg-[#1F2937]"
                >
                  Back to Home
                </Link>

                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#C8102E] transition-colors hover:text-[#A30E27]"
                >
                  <span>Browse Products</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
