"use client";

import { useEffect, useRef, useState } from "react";
import { Award, Building2, Layers, ShieldCheck } from "lucide-react";
import { animate, useInView } from "framer-motion";

import Container from "../ui/Container";
import MotionSection from "../ui/MotionSection";

const stats = [
  {
    icon: Award,
    value: "25+",
    label: "Years of Trust",
    description: "Dependable manufacturing excellence since 2001",
  },
  {
    icon: Layers,
    value: "9+",
    label: "Specialized Systems",
    description: "High-performance formulation product families",
  },
  {
    icon: Building2,
    value: "1,000+",
    label: "Projects Supported",
    description: "Residential, commercial & infrastructure sites",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Quality Assured",
    description: "Rigorous batch-to-batch site performance testing",
  },
];

function AnimatedCounter({ value, duration = 2 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const numericMatch = value.match(/[\d,]+/);
  const targetNumber = numericMatch ? parseInt(numericMatch[0].replace(/,/g, ""), 10) : 0;
  const suffix = value.replace(/[\d,]+/, "");

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || targetNumber === 0) return;

    const controls = animate(0, targetNumber, {
      duration: duration,
      ease: "easeOut",
      onUpdate(current) {
        setCount(Math.floor(current));
      },
    });

    return () => controls.stop();
  }, [isInView, targetNumber, duration]);

  return (
    <span ref={ref}>
      {isInView ? count.toLocaleString("en-US") : 0}
      {suffix}
    </span>
  );
}

export default function StatsBanner() {
  return (
    <section className="py-6 sm:py-8">
      <Container>
        <MotionSection direction="bottom">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-white p-6 sm:p-10 shadow-xs transition-all duration-200 hover:shadow-md">
            {/* Subtle logo-inspired red ambient tint glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(200,16,46,0.06)_0%,transparent_70%)] blur-2xl"
            />

            <div className="relative z-10 grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-8">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className={`flex flex-col ${
                      idx !== stats.length - 1 ? "lg:border-r lg:border-[#E5E7EB] lg:pr-8" : ""
                    }`}
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#F3D4D8] bg-[#FFF7F8] text-[#C8102E]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>

                    <p className="mt-4 text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl lg:text-[2.6rem]">
                      <AnimatedCounter value={stat.value} />
                    </p>

                    <h3 className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-[#111827] sm:text-sm">
                      {stat.label}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-[#4B5563] sm:text-sm">
                      {stat.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </MotionSection>
      </Container>
    </section>
  );
}
