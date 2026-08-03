"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cardVariants, previewVariants, durations, prefersReduceMotion } from "../../lib/motion";
import {
  ArrowRight,
  Droplets,
  FlameKindling,
  Landmark,
  Radar,
  ShieldAlert,
  Wrench,
} from "lucide-react";

import Container from "../ui/Container";
import { triggerHaptic } from "@/src/lib/haptics";

const problems = [
  {
    title: "Water Leakage",
    description: "Prevent water ingress in roofs, slabs, basements and exterior masonry walls.",
    icon: Droplets,
    image: "/images/problems/Water Leakage.png",
    alt: "Leaking roof ceiling with water damage",
    solutionProduct: "Latex M.P.",
    solutionSlug: "latex-m-p",
    solutionTag: "Polymer Waterproofing",
  },
  {
    title: "Damp Walls",
    description: "Protect interior and exterior plasters from moisture, saltpetre, and long-term decay.",
    icon: ShieldAlert,
    image: "/images/problems/Damp Walls.png",
    alt: "Interior damp wall with moisture stains",
    solutionProduct: "Damposeal Liquid",
    solutionSlug: "damposeal-liquid",
    solutionTag: "Integral Waterproofing",
  },
  {
    title: "Roof & Slab Seepage",
    description: "Super-plasticizing integral waterproofing for exposed roofs and water tanks.",
    icon: Landmark,
    image: "/images/problems/Roof Seepage.png",
    alt: "Waterproofing on a terrace roof",
    solutionProduct: "Damposeal Liquid Gold",
    solutionSlug: "damposeal-liquid-gold",
    solutionTag: "Super-Plasticizing",
  },
  {
    title: "Concrete Cracks",
    description: "Mortar admixture for crack-free plaster, masonry rendering, and moisture retention.",
    icon: Wrench,
    image: "/images/problems/Concrete Cracks.png",
    alt: "Cracked concrete surface close-up",
    solutionProduct: "Plastomix",
    solutionSlug: "plastomix",
    solutionTag: "Plaster Admixture",
  },
  {
    title: "Steel Corrosion",
    description: "Anti-corrosion protective steel rebar coating to halt ongoing rust before repair.",
    icon: Radar,
    image: "/images/problems/Rust Damage.png",
    alt: "Rusted reinforcement steel in concrete",
    solutionProduct: "Rust Stop",
    solutionSlug: "rust-stop",
    solutionTag: "Rebar Protection",
  },
  {
    title: "Tile Slippage & Debonding",
    description: "Waterproofing additive that enhances bond and tensile strength for marble, granite & tiles.",
    icon: FlameKindling,
    image: "/images/problems/Tile Failure.png",
    alt: "Loose or broken ceramic tiles",
    solutionProduct: "Tile-O-Mate",
    solutionSlug: "tile-o-mate",
    solutionTag: "Tile Adhesion",
  },
];

export default function Problems() {
  const [supportsHover, setSupportsHover] = useState<boolean>(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    }
    return true;
  });
  const [teaseIndex, setTeaseIndex] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
      const handler = (e: MediaQueryListEvent) => setSupportsHover(Boolean(e.matches));
      try {
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
      } catch {
        mq.addListener(handler);
        return () => mq.removeListener(handler);
      }
    }
  }, []);

  useEffect(() => {
    if (!supportsHover) return;
    if (prefersReduceMotion()) return;

    let mounted = true;
    let timer: NodeJS.Timeout | null = null;

    const scheduleNext = () => {
      const delay = 10000 + Math.random() * 5000;
      timer = setTimeout(() => {
        if (!mounted) return;
        const idx = Math.floor(Math.random() * problems.length);
        setTeaseIndex(idx);
        setTimeout(() => {
          setTeaseIndex(null);
          if (!mounted) return;
          scheduleNext();
        }, 600);
      }, delay);
    };

    scheduleNext();

    return () => {
      mounted = false;
      if (timer) clearTimeout(timer);
    };
  }, [supportsHover]);

  return (
    <section className="py-10 sm:py-14 lg:py-16">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#F3D4D8] bg-[#FFF7F8] px-4 py-1.5 text-xs font-semibold text-[#C8102E]">
            <span>🛠️ Site Challenges & Solutions</span>
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-[#111827] sm:text-4xl lg:text-5xl">
            Problems We Solve
          </h2>

          <p className="mt-4 text-base leading-7 text-[#4B5563] sm:text-lg sm:leading-8">
            Targeted chemical formulations engineered to solve critical structural and waterproofing failures on site.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {problems.map((problem, i) => {
            const Icon = problem.icon;

            const largeTitleVariants = {
              rest: { opacity: 0, y: 12 },
              hover: { opacity: 1, y: 0 },
            };

            const foregroundVariants = {
              rest: { opacity: 1 },
              hover: { opacity: 0 },
              tease: { opacity: 0.6 },
            };

            return (
              <Link
                key={problem.title}
                href={`/products/${problem.solutionSlug}`}
                onClick={() => triggerHaptic(12)}
                className="block h-full cursor-pointer focus:outline-none"
              >
                <motion.article
                  initial="rest"
                  whileHover={supportsHover ? "hover" : undefined}
                  animate={supportsHover ? (teaseIndex === i ? "tease" : "rest") : "hover"}
                  variants={cardVariants}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-white p-7 shadow-xs transition-all duration-300 hover:border-[#C8102E]/40 hover:shadow-lg active:scale-[0.99]"
                >
                  {/* Background Image Preview */}
                  <motion.div
                    className="pointer-events-none absolute inset-0 z-0"
                    variants={previewVariants}
                    transition={{ duration: durations.preview, ease: "easeOut" }}
                  >
                    <Image
                      src={problem.image}
                      alt={problem.alt}
                      fill
                      className="object-cover"
                      priority={false}
                      loading="lazy"
                    />
                    <motion.div
                      className="absolute inset-0 bg-black/60"
                      variants={{ rest: { opacity: 0 }, hover: { opacity: 0.65 }, tease: { opacity: 0.35 } }}
                      transition={{ duration: durations.preview, ease: "easeOut" }}
                    />
                  </motion.div>

                  {/* Card Main Content */}
                  <motion.div className="relative z-10 flex flex-col justify-between h-full" variants={foregroundVariants} transition={{ duration: 0.2 }}>
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#F3D4D8] bg-[#FFF7F8] text-[#C8102E]">
                          <Icon className="h-6 w-6" aria-hidden="true" />
                        </div>

                        <span className="rounded-full border border-[#E5E7EB] bg-[#FAFAFA] px-3 py-1 text-xs font-semibold text-[#4B5563]">
                          {problem.solutionTag}
                        </span>
                      </div>

                      <h3 className="mt-5 text-xl font-bold tracking-[-0.02em] text-[#111827]">
                        {problem.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-[#4B5563]">
                        {problem.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#F3F4F6]">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-[#6B7280]">Solution:</span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C8102E] group-hover:underline">
                          <span>{problem.solutionProduct}</span>
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Hover Reveal Details */}
                  <motion.div
                    className="pointer-events-none absolute left-7 right-7 bottom-7 z-20 text-white text-left font-bold leading-tight"
                    variants={largeTitleVariants}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    initial="rest"
                    whileInView={!supportsHover ? "hover" : undefined}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#F3D4D8]">
                      Conchem Solution: {problem.solutionProduct}
                    </span>
                    
                    <h3 className="mt-2 text-2xl font-bold text-white tracking-tight">
                      {problem.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-white/90 font-normal">
                      {problem.description}
                    </p>

                    <div className="mt-4">
                      <span className="inline-flex items-center gap-2 rounded-full bg-[#C8102E] px-4 py-1.5 text-xs font-bold text-white shadow-md">
                        <span>Explore {problem.solutionProduct}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </motion.div>
                </motion.article>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}