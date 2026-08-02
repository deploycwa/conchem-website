import Link from "next/link";
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
  },
  {
    title: "Damp Walls",
    description: "Protect interiors from moisture and long-term damage.",
    icon: ShieldAlert,
  },
  {
    title: "Roof Seepage",
    description: "Durable waterproofing for terraces and rooftops.",
    icon: Landmark,
  },
  {
    title: "Concrete Cracks",
    description: "Improve durability and structural integrity.",
    icon: Wrench,
  },
  {
    title: "Rust Damage",
    description: "Protect reinforcement steel from corrosion.",
    icon: Radar,
  },
  {
    title: "Tile Failure",
    description: "Reliable bonding and adhesive performance.",
    icon: FlameKindling,
  },
];

export default function Problems() {
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
          {problems.map((problem) => {
            const Icon = problem.icon;

            return (
              <article
                key={problem.title}
                className="group rounded-[1.5rem] border border-[#E5E7EB] bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(17,24,39,0.08)]"
              >
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
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}