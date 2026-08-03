"use client";

import {
  Boxes,
  CheckCircle2,
  Factory,
  FlaskConical,
  ShieldCheck,
  Truck,
  Warehouse,
} from "lucide-react";

import Container from "../ui/Container";
import FactoryImage from "../ui/FactoryImage";
import MotionSection from "../ui/MotionSection";
import { motion } from "framer-motion";

const stages = [
  {
    step: "01",
    title: "Raw Material Quality Audit",
    description: "Every polymer emulsion, resin, and chemical additive undergoes strict purity & density verification before entering production.",
    icon: FlaskConical,
  },
  {
    step: "02",
    title: "Precision Polymer Blending",
    description: "Computer-controlled reaction kettles ensure exact thermal conditions and uniform active solid distribution in every batch.",
    icon: Factory,
  },
  {
    step: "03",
    title: "Lab Permeability Certification",
    description: "Pre-dispatch lab testing for slump retention, tensile strength, and water permeability to guarantee performance.",
    icon: ShieldCheck,
  },
  {
    step: "04",
    title: "Sealed Factory Dispatch",
    description: "Automated filling and hermetic sealing for zero contamination, dispatched directly to dealers and site contractors.",
    icon: Truck,
  },
];

export default function ManufacturingExcellence() {
  return (
    <section className="py-10 sm:py-14 lg:py-16">
      <Container>
        <MotionSection direction="bottom">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F3D4D8] bg-[#FFF7F8] px-4 py-1.5 text-xs font-semibold text-[#C8102E]">
              <span>🏭 Controlled Production & Quality Assurance</span>
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-[#111827] sm:text-4xl lg:text-5xl">
              Manufacturing & Quality Excellence
            </h2>

            <p className="mt-4 text-base leading-7 text-[#4B5563] sm:text-lg sm:leading-8">
              Over 25 years of chemical synthesis expertise backed by rigorous quality control at every stage.
            </p>
          </div>

          {/* Plant Showcase & Process Grid */}
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-white p-3 shadow-xs">
              <FactoryImage src="/images/factory/warehouse.png" alt="Conchem Manufacturing Plant & Warehouse" />
              <div className="mt-3 flex items-center justify-between rounded-xl bg-[#FAFAFA] p-4 text-xs font-medium text-[#374151]">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#C8102E]" />
                  100% Batch Quality Tested
                </span>
                <span className="flex items-center gap-2">
                  <Warehouse className="h-4 w-4 text-[#C8102E]" />
                  Centralized Siliguri Plant
                </span>
              </div>
            </div>

            {/* 4-Stage Process Flow */}
            <div className="space-y-4">
              {stages.map((stage) => {
                const Icon = stage.icon;

                return (
                  <motion.div
                    key={stage.step}
                    whileHover={{ x: 4 }}
                    className="group flex items-start gap-5 rounded-[1.5rem] border border-[#E5E7EB] bg-white p-5 shadow-xs transition-all duration-200 hover:border-[#C8102E]/30 hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#F3D4D8] bg-[#FFF7F8] text-[#C8102E] font-bold transition-colors group-hover:bg-[#C8102E] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#C8102E]">STAGE {stage.step}</span>
                        <span className="text-xs text-[#9CA3AF]">•</span>
                        <h3 className="text-base font-bold text-[#111827]">{stage.title}</h3>
                      </div>
                      <p className="mt-1 text-xs leading-5 text-[#4B5563] sm:text-sm">
                        {stage.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </MotionSection>
      </Container>
    </section>
  );
}