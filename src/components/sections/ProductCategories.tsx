"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Droplets,
  FlaskConical,
  Layers3,
  Paintbrush,
  Rows3,
  ShieldCheck,
} from "lucide-react";

import Container from "../ui/Container";
import { cardVariants, previewVariants, durations, prefersReduceMotion } from "../../lib/motion";

const productCategories = [
  {
    title: "Waterproofing",
    description: "Solutions designed to help protect structures from water ingress and seepage.",
    icon: Droplets,
    image: "/images/applications/waterproofing.png",
    alt: "Waterproofing application",
  },
  {
    title: "Admixtures",
    description: "Performance additives created to support stronger concrete and mortar mixes.",
    icon: FlaskConical,
    image: "/images/applications/admixtures.png",
    alt: "Concrete admixtures application",
  },
  {
    title: "Repair Mortars",
    description: "Reliable repair materials for restoration, patching and structural maintenance.",
    icon: Layers3,
    image: "/images/applications/repairmotars.png",
    alt: "Repair mortars application",
  },
  {
    title: "Tile Adhesives",
    description: "Bonding solutions for secure tile fixing across varied site conditions.",
    icon: ShieldCheck,
    image: "/images/applications/tileadhesives.png",
    alt: "Tile adhesives application",
  },
  {
    title: "Grouts",
    description: "Consistent grout products for filling, locking and finishing applications.",
    icon: Rows3,
    image: "/images/applications/grouts.png",
    alt: "Grouts application",
  },
  {
    title: "Primers",
    description: "Surface-preparation products that help improve adhesion and finish quality.",
    icon: Paintbrush,
    image: "/images/applications/primers.png",
    alt: "Primers application",
  },
];

export default function ProductCategories() {
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
        const idx = Math.floor(Math.random() * productCategories.length);
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
    <section id="categories" className="py-8 sm:py-10 lg:py-14">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111827] sm:text-4xl">
            Product Categories
          </h2>
          <p className="mt-4 text-base leading-7 text-[#4B5563] sm:text-lg sm:leading-8">
            Browse the product families that support waterproofing, repair, bonding and surface
            preparation work.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {productCategories.map((category, i) => {
            const Icon = category.icon;

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
                key={category.title}
                initial="rest"
                whileHover={supportsHover ? "hover" : undefined}
                animate={supportsHover ? (teaseIndex === i ? "tease" : "rest") : "hover"}
                variants={cardVariants}
                className="group relative overflow-hidden rounded-[1.5rem] border border-[#E5E7EB] bg-white p-6 transition-all duration-200"
              >
                <Link
                  href={`/products?category=${encodeURIComponent(category.title)}#products-catalog`}
                  className="absolute inset-0 z-30"
                  aria-label={`View ${category.title} products`}
                />

                <motion.div
                  className="pointer-events-none absolute inset-0 z-0"
                  variants={previewVariants}
                  transition={{ duration: durations.preview, ease: "easeOut" }}
                >
                  <Image
                    src={category.image}
                    alt={category.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
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
                    {category.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#4B5563] sm:text-[15px]">
                    {category.description}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#C8102E] transition-colors group-hover:text-[#A30E27]">
                    <span>Explore</span>
                    <span aria-hidden="true">→</span>
                  </div>
                </motion.div>

                <motion.div
                  className="pointer-events-none absolute left-6 right-6 bottom-6 z-20 text-white text-left uppercase font-bold leading-tight"
                  variants={largeTitleVariants}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  initial="rest"
                  whileInView={!supportsHover ? "hover" : undefined}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {category.title.toUpperCase().split(" ").map((part, idx) => {
                    const fontSizeClass =
                      part.length > 11
                        ? "text-xl sm:text-2xl md:text-3xl"
                        : part.length > 8
                        ? "text-2xl sm:text-3xl md:text-4xl"
                        : "text-3xl sm:text-4xl md:text-5xl";

                    return (
                      <motion.span
                        key={idx}
                        className={`block font-bold tracking-tight break-words ${fontSizeClass}`}
                        variants={largeTitleVariants}
                      >
                        {part}
                      </motion.span>
                    );
                  })}

                  <motion.p
                    className="mt-3 max-w-[90%] text-sm leading-6 text-white/90 normal-case font-normal uppercase:normal-case"
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={!supportsHover ? { y: 0, opacity: 1 } : undefined}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
                  >
                    {category.description}
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
