"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cardVariants, previewVariants, durations, prefersReduceMotion } from "../../lib/motion";
import {
  Droplets,
  FlameKindling,
  Landmark,
  Radar,
  ShieldAlert,
  Wrench,
} from "lucide-react";

import Container from "../ui/Container";

const problems = [
  {
    title: "Water Leakage",
    description: "Prevent water ingress in roofs, basements and exterior walls.",
    icon: Droplets,
    image: "/images/problems/Water Leakage.png",
    alt: "Leaking roof ceiling with water damage",
  },
  {
    title: "Damp Walls",
    description: "Protect interiors from moisture and long-term damage.",
    icon: ShieldAlert,
    image: "/images/problems/Damp Walls.png",
    alt: "Interior damp wall with moisture stains",
  },
  {
    title: "Roof Seepage",
    description: "Durable waterproofing for terraces and rooftops.",
    icon: Landmark,
    image: "/images/problems/Roof Seepage.png",
    alt: "Waterproofing on a terrace roof",
  },
  {
    title: "Concrete Cracks",
    description: "Improve durability and structural integrity.",
    icon: Wrench,
    image: "/images/problems/Concrete Cracks.png",
    alt: "Cracked concrete surface close-up",
  },
  {
    title: "Rust Damage",
    description: "Protect reinforcement steel from corrosion.",
    icon: Radar,
    image: "/images/problems/Rust Damage.png",
    alt: "Rusted reinforcement steel in concrete",
  },
  {
    title: "Tile Failure",
    description: "Reliable bonding and adhesive performance.",
    icon: FlameKindling,
    image: "/images/problems/Tile Failure.png",
    alt: "Loose or broken ceramic tiles",
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

  // Random tease logic — only on hover-capable devices and when user hasn't requested reduced motion
  useEffect(() => {
    if (!supportsHover) return;
    if (prefersReduceMotion()) return;

    let mounted = true;
    let timer: NodeJS.Timeout | null = null;

    const scheduleNext = () => {
      const delay = 10000 + Math.random() * 5000; // 10-15s
        timer = setTimeout(() => {
        if (!mounted) return;
        const idx = Math.floor(Math.random() * problems.length);
        setTeaseIndex(idx);
        // clear tease after a short duration
        setTimeout(() => {
          setTeaseIndex(null);
          if (!mounted) return;
          scheduleNext();
        }, 600);
        // ensure clearTimer cleaned up if unmount
      }, delay);
    };

    scheduleNext();

    return () => {
      mounted = false;
      if (timer) clearTimeout(timer);
    };
  }, [supportsHover]);

  

  return (
    <section className="py-8 sm:py-10 lg:py-14">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111827] sm:text-4xl">
            Problems We Solve
          </h2>
          <p className="mt-4 text-base leading-7 text-[#4B5563] sm:text-lg sm:leading-8">
            Protecting structures starts with solving the most common construction challenges.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
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
              <motion.article
                key={problem.title}
                initial="rest"
                whileHover={supportsHover ? "hover" : undefined}
                animate={supportsHover ? (teaseIndex === i ? "tease" : "rest") : "hover"}
                variants={cardVariants}
                className="group relative overflow-hidden rounded-[1.5rem] border border-[#E5E7EB] bg-white p-6 transition-all duration-200"
              >
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
                    className="absolute inset-0 bg-black/50"
                    variants={{ rest: { opacity: 0 }, hover: { opacity: 0.52 }, tease: { opacity: 0.35 } }}
                    transition={{ duration: durations.preview, ease: "easeOut" }}
                  />
                </motion.div>

                <motion.div className="relative z-10" variants={foregroundVariants} transition={{ duration: 0.2 }}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#F3D4D8] bg-[#FFF7F8] text-[#C8102E]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-[#111827]">
                    {problem.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#4B5563] sm:text-[15px]">
                    {problem.description}
                  </p>

                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#C8102E] transition-colors hover:text-[#A30E27]"
                  >
                    <span>Learn More</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </motion.div>

                <motion.div
                  className="pointer-events-none absolute left-6 bottom-6 z-20 text-white text-left uppercase font-bold leading-tight"
                  variants={largeTitleVariants}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  initial="rest"
                  // On non-hover devices, animate when the card scrolls into view
                  whileInView={!supportsHover ? "hover" : undefined}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {problem.title.toUpperCase().split(" ").map((part, idx) => (
                    <motion.span key={idx} className="block text-3xl sm:text-4xl md:text-5xl" variants={largeTitleVariants}>
                      {part}
                    </motion.span>
                  ))}

                  <motion.p
                    className="mt-3 max-w-[70%] text-sm leading-6 text-white/90 normal-case font-normal uppercase:normal-case"
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={!supportsHover ? { y: 0, opacity: 1 } : undefined}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
                  >
                    {problem.description}
                  </motion.p>
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}