import Link from "next/link";
import {
  Building2,
  Factory,
  Landmark,
  ShieldCheck,
} from "lucide-react";

import Container from "../ui/Container";

const industries = [
  {
    title: "Residential",
    description: "Reliable protection for homes, apartments and housing developments.",
    icon: HomeIcon,
  },
  {
    title: "Commercial",
    description: "Trusted solutions for offices, retail spaces and mixed-use properties.",
    icon: Building2,
  },
  {
    title: "Industrial",
    description: "Durable products for plants, warehouses and production facilities.",
    icon: Factory,
  },
  {
    title: "Infrastructure",
    description: "Built for bridges, public works and large-scale structural projects.",
    icon: Landmark,
  },
];

function HomeIcon(props: React.ComponentProps<typeof ShieldCheck>) {
  return <ShieldCheck {...props} />;
}

export default function Industries() {
  return (
    <section className="py-8 sm:py-10 lg:py-14">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111827] sm:text-4xl">
            Industries We Serve
          </h2>

          <p className="mt-4 text-base leading-7 text-[#4B5563] sm:text-lg sm:leading-8">
            Reliable waterproofing and construction chemical solutions for projects of every scale.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <article
                key={industry.title}
                className="rounded-[1.5rem] border border-[#E5E7EB] bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(17,24,39,0.05)]"
              >
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
                  href="#contact"
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