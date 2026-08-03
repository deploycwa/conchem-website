"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Factory,
  Landmark,
  School,
  ShieldCheck,
  Users,
} from "lucide-react";

import Container from "../ui/Container";
import MotionSection from "../ui/MotionSection";
import { cardVariants, previewVariants, durations, prefersReduceMotion } from "../../lib/motion";

const industries = [
  {
    title: "Residential",
    description: "Reliable waterproofing and protection systems for homes and housing communities.",
    icon: HomeIcon,
    image: "/images/applications/resedential.png",
    alt: "Residential building exterior",
  },
  {
    title: "Commercial",
    description: "Solutions designed for offices, retail spaces and mixed-use developments.",
    icon: Building2,
    image: "/images/applications/commercial.png",
    alt: "Commercial building facade",
  },
  {
    title: "Industrial",
    description: "Durable systems for factories, plants and demanding production environments.",
    icon: Factory,
    image: "/images/applications/industrial.png",
    alt: "Industrial warehouse interior",
  },
  {
    title: "Infrastructure",
    description: "Protection-focused solutions for public works and large structural projects.",
    icon: Landmark,
    image: "/images/applications/infrastructure.png",
    alt: "Infrastructure construction site",
  },
  {
    title: "Hospitality",
    description: "Practical systems for hotels, resorts and guest-facing spaces that need reliability.",
    icon: Users,
    image: "/images/applications/hospitality.png",
    alt: "Hospitality resort and hotel space",
  },
  {
    title: "Institutional",
    description: "Trusted products for schools, hospitals, campuses and similar facilities.",
    icon: School,
    image: "/images/applications/institutional.png",
    alt: "Institutional school and campus building",
  },
];

function HomeIcon(props: React.ComponentProps<typeof ShieldCheck>) {
  return <ShieldCheck {...props} />;
}

export default function Industries({ showLink = true }: { showLink?: boolean }) {
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
    <section id="industries-grid" className="py-8 sm:py-10 lg:py-14">
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

            {showLink ? (
              <Link
                href="/industries"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#E5E7EB] bg-white px-6 text-sm font-semibold text-[#111827] shadow-sm transition-colors hover:bg-[#F8FAFC]"
              >
                Learn More
              </Link>
            ) : null}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry, i) => {
              const Icon = industry.icon;

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
                  key={industry.title}
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
                      src={industry.image}
                      alt={industry.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 45vw"
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
                      {industry.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#4B5563] sm:text-[15px]">
                      {industry.description}
                    </p>

                    <Link
                      href="/industries"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#C8102E] transition-colors hover:text-[#A30E27]"
                    >
                      <span>Learn More</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </motion.div>

                  <motion.div
                    className="pointer-events-none absolute left-6 right-6 bottom-6 z-20 text-white text-left uppercase font-bold leading-tight"
                    variants={largeTitleVariants}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    initial="rest"
                    // On non-hover devices, animate when the card scrolls into view
                    whileInView={!supportsHover ? "hover" : undefined}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    {industry.title.toUpperCase().split(" ").map((part, idx) => {
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
                      {industry.description}
                    </motion.p>
                  </motion.div>
                </motion.article>
              );
            })}
          </div>
        </MotionSection>
      </Container>
    </section>
  );
}