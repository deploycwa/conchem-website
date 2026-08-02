import {
  Award,
  Building2,
  Factory,
  ShieldCheck,
  Truck,
  Users,
} from "lucide-react";

import Container from "../ui/Container";

const stats = ["Since 2001", "9+ Products", "Factory Based", "Eastern India"];

const features = [
  {
    title: "Factory Manufacturing",
    description: "Manufactured with controlled production processes.",
    icon: Factory,
  },
  {
    title: "ISO Certified",
    description: "Committed to recognized quality standards.",
    icon: ShieldCheck,
  },
  {
    title: "Reliable Quality",
    description: "Consistent performance across every batch.",
    icon: Award,
  },
  {
    title: "Trusted by Builders",
    description: "Chosen by contractors and homeowners.",
    icon: Users,
  },
  {
    title: "Consistent Supply",
    description: "Reliable product availability.",
    icon: Truck,
  },
  {
    title: "Regional Distribution",
    description: "Serving Eastern and North-Eastern India.",
    icon: Building2,
  },
];

export default function WhyConchem() {
  return (
    <section className="bg-[#fafafa] py-8 sm:py-10 lg:py-14">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_1.2fr] lg:items-start lg:gap-10">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111827] sm:text-4xl">
              Why Choose Conchem?
            </h2>

            <p className="mt-4 text-base leading-7 text-[#4B5563] sm:text-lg sm:leading-8">
              Built on over two decades of manufacturing experience, Conchem International delivers
              reliable waterproofing and construction chemical solutions trusted across Eastern and
              North-Eastern India.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat}
                  className="rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm font-medium text-[#374151] shadow-[0_1px_2px_rgba(17,24,39,0.02)]"
                >
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C8102E]" aria-hidden="true" />
                    {stat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="rounded-[1.5rem] border border-[#E5E7EB] bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(17,24,39,0.05)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#F3D4D8] bg-[#FFF7F8] text-[#C8102E]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <h3 className="mt-4 text-lg font-semibold tracking-[-0.02em] text-[#111827]">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#4B5563]">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}