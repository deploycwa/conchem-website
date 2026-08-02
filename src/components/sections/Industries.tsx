"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Factory,
  Landmark,
  ShieldCheck,
} from "lucide-react";

import Container from "../ui/Container";
import MotionSection from "../ui/MotionSection";
import { cardVariants, previewVariants, durations, prefersReduceMotion } from "../../lib/motion";

const industries = [
  {
    title: "Residential",
    description: "Reliable protection for homes, apartments and housing developments.",
    icon: HomeIcon,
    image: "/images/applications/resedential.png",
    alt: "Residential building exterior",
  },
  {
    title: "Commercial",
    description: "Trusted solutions for offices, retail spaces and mixed-use properties.",
    icon: Building2,
    image: "/images/applications/commercial.png",
    alt: "Commercial building facade",
  },
  {
    title: "Industrial",
    description: "Durable products for plants, warehouses and production facilities.",
    icon: Factory,
    image: "/images/applications/industrial.png",
    alt: "Industrial warehouse interior",
  },
  {
    title: "Infrastructure",
    description: "Built for bridges, public works and large-scale structural projects.",
    icon: Landmark,
    image: "/images/applications/infrastructure.png",
    alt: "Infrastructure construction site",
  },
];

function HomeIcon(props: React.ComponentProps<typeof ShieldCheck>) {
  return <ShieldCheck {...props} />;
}

export default function Industries() {
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
        const idx = Math.floor(Math.random() * industries.length);
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
    <section className="py-8 sm:py-10 lg:py-14">
      <Container>
        <MotionSection direction="right">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111827] sm:text-4xl">
                Industries We Serve
              </h2>

              <p className="mt-4 text-base leading-7 text-[#4B5563] sm:text-lg sm:leading-8">
                Reliable waterproofing and construction chemical solutions for projects of every scale.
              </p>
            </div>

            <Link
              href="/industries"
              className="inline-flex h-12 items-center justify-center rounded-full border border-[#E5E7EB] bg-white px-6 text-sm font-semibold text-[#111827] shadow-sm transition-colors hover:bg-[#F8FAFC]"
            >
              Learn More
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {industries.map((industry, i) => {
              const Icon = industry.icon;

              return (
                <motion.article
                  key={industry.title}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-[#E5E7EB] bg-white p-6"
                  initial="rest"
                  whileHover={supportsHover ? "hover" : undefined}
                  animate={supportsHover ? (teaseIndex === i ? "tease" : "rest") : "hover"}
                  variants={cardVariants}
                >
                  <motion.div
                    className="pointer-events-none absolute inset-0 z-0"
                    variants={previewVariants}
                    transition={{ duration: durations.preview }}
                  >
                    <Image
                      src={industry.image}
                      alt={industry.alt}
                      fill
                      className="object-cover opacity-70"
                      sizes="(max-width: 768px) 100vw, 45vw"
                      priority={false}
                    />
                    <motion.div
                      className="absolute inset-0"
                      variants={{ rest: { opacity: 0 }, hover: { opacity: 0.52 }, tease: { opacity: 0.35 } }}
                      transition={{ duration: durations.preview }}
                    />
                  </motion.div>

                  <div className="relative z-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#F3D4D8] bg-[#FFF7F8] text-[#C8102E]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>

                    <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-[#111827]">
                      {industry.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#4B5563] sm:text-[15px]">
                      {industry.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </MotionSection>
      </Container>
    </section>
  );
}