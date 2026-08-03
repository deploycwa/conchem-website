"use client";

import {
  Award,
  CheckCircle2,
  Factory,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import Container from "../ui/Container";
import MotionSection from "../ui/MotionSection";
import { motion } from "framer-motion";

const bentoFeatures = [
  {
    id: "manufacturing",
    title: "Direct Factory Manufacturing",
    badge: "In-House Control",
    description:
      "Engineered in our controlled manufacturing plant with strict batch-to-batch quality testing. Eliminates middleman markups while guaranteeing exact chemical purity.",
    icon: Factory,
    colSpan: "lg:col-span-2",
    points: [
      "Controlled polymer reaction kettles for uniform viscosity",
      "Pre-dispatch slump & waterproofing permeability testing",
      "Direct contractor & distributor pricing",
    ],
  },
  {
    id: "iso",
    title: "ISO Standard Quality",
    badge: "Certified",
    description:
      "Formulated to meet stringent national and international structural engineering standards for long-lasting concrete protection.",
    icon: ShieldCheck,
    colSpan: "lg:col-span-1",
  },
  {
    id: "climate",
    title: "Monsoon & Weather Resistant",
    badge: "Regional Testing",
    description:
      "Specifically engineered to withstand heavy tropical monsoons, high atmospheric humidity, and extreme thermal shifts.",
    icon: Award,
    colSpan: "lg:col-span-1",
  },
  {
    id: "support",
    title: "On-Site Contractor Support",
    badge: "Expert Assistance",
    description:
      "Our technical team provides on-site mix proportions, surface preparation guidance, and application troubleshooting for site engineers.",
    icon: Users,
    colSpan: "lg:col-span-2",
    points: [
      "Custom mix dosing advice tailored to site sand & aggregate quality",
      "Rapid delivery network across Eastern & North-Eastern India",
    ],
  },
];

export default function WhyConchem() {
  return (
    <section className="py-10 sm:py-14 lg:py-16">
      <Container>
        <MotionSection direction="bottom">
          {/* Centered Header */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F3D4D8] bg-[#FFF7F8] px-4 py-1.5 text-xs font-semibold text-[#C8102E]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>The Conchem Advantage</span>
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-[#111827] sm:text-4xl lg:text-5xl">
              Why Choose Conchem?
            </h2>

            <p className="mt-4 text-base leading-7 text-[#4B5563] sm:text-lg sm:leading-8">
              Built on over two decades of manufacturing experience, delivering high-performance,
              climate-tested chemical formulations.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {bentoFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  key={feature.id}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-white p-7 sm:p-8 shadow-xs transition-all duration-300 hover:border-[#C8102E]/40 hover:shadow-[0_16px_36px_rgba(200,16,46,0.08)] ${feature.colSpan}`}
                >
                  {/* Soft ambient red glow on hover */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(200,16,46,0.06)_0%,transparent_70%)] blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />

                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#F3D4D8] bg-[#FFF7F8] text-[#C8102E] transition-all duration-300 group-hover:bg-[#C8102E] group-hover:text-white">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>

                      <span className="rounded-full border border-[#E5E7EB] bg-[#FAFAFA] px-3 py-1 text-xs font-semibold text-[#4B5563]">
                        {feature.badge}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-bold tracking-[-0.02em] text-[#111827] sm:text-2xl">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#4B5563] sm:text-[15px]">
                      {feature.description}
                    </p>

                    {feature.points && (
                      <ul className="mt-6 space-y-2.5 border-t border-[#F3F4F6] pt-5">
                        {feature.points.map((pt) => (
                          <li key={pt} className="flex items-start gap-2.5 text-xs text-[#374151] sm:text-sm">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#C8102E]" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}
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