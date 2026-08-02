import { Boxes, Factory, ShieldCheck, Truck, Warehouse } from "lucide-react";

import Container from "../ui/Container";
import FactoryImage from "../ui/FactoryImage";

const features = [
  {
    title: "Modern Manufacturing",
    description: "Built with controlled processes and dependable production practices.",
    icon: Factory,
  },
  {
    title: "Quality Control",
    description: "Checked against strict quality standards at every key stage.",
    icon: ShieldCheck,
  },
  {
    title: "Warehousing",
    description: "Organized inventory handling that supports smooth fulfillment.",
    icon: Warehouse,
  },
  {
    title: "Reliable Distribution",
    description: "Prepared for consistent movement of products across the region.",
    icon: Truck,
  },
];

const supportCards = [
  {
    title: "Factory",
    description: "A production environment designed for dependable output.",
  },
  {
    title: "Warehouse",
    description: "Well-managed storage that keeps supply moving efficiently.",
  },
  {
    title: "Packaging",
    description: "Clean, consistent packaging that supports safe delivery.",
  },
];

export default function ManufacturingExcellence() {
  return (
    <section className="py-8 sm:py-10 lg:py-14">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
          <div className="order-1 lg:order-none">
            <FactoryImage />
          </div>

          <div className="order-2 lg:order-none">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111827] sm:text-4xl">
              Manufacturing Excellence
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-[#4B5563] sm:text-lg sm:leading-8">
              Built on decades of manufacturing experience and quality-focused production.
            </p>

            <ul className="mt-7 space-y-4 text-sm text-[#374151] sm:text-[15px]">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <li key={feature.title} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#F3D4D8] bg-[#FFF7F8] text-[#C8102E]">
                      <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                    </span>
                    <span className="pt-1">
                      <span className="font-semibold text-[#111827]">{feature.title}</span>{" "}
                      <span className="text-[#4B5563]">{feature.description}</span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {supportCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[1.5rem] border border-[#E5E7EB] bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(17,24,39,0.05)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#F3D4D8] bg-[#FFF7F8] text-[#C8102E]">
                <Boxes className="h-5 w-5" aria-hidden="true" />
              </div>

              <h3 className="mt-4 text-lg font-semibold tracking-[-0.02em] text-[#111827]">
                {card.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#4B5563]">{card.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}