import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Compass,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import Container from "../../components/ui/Container";
import { company } from "@/data/company";

const coreValues = [
  { title: "Quality", description: "We prioritize dependable outcomes in every product we make.", icon: BadgeCheck },
  { title: "Integrity", description: "We keep our work clear, honest and accountable.", icon: HeartHandshake },
  { title: "Innovation", description: "We improve solutions to meet real construction needs.", icon: Lightbulb },
  { title: "Reliability", description: "We focus on consistent performance and dependable supply.", icon: ShieldCheck },
  { title: "Customer First", description: "We listen carefully and respond with practical guidance.", icon: Users },
  { title: "Long-Term Partnerships", description: "We aim to build lasting relationships based on trust.", icon: Sparkles },
];

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col gap-4 px-4 py-4">
      <Navbar />
      <section className="py-8 sm:py-10 lg:py-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
            <div className="order-1 max-w-2xl lg:order-none">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#6B7280] sm:text-sm">
                About {company.name}
              </p>

              <h1 className="mt-4 max-w-xl text-[clamp(2.25rem,4.4vw,4.1rem)] leading-[0.95] font-semibold tracking-[-0.04em] text-[#111827]">
                Building Trust Since {company.foundedYear}
              </h1>

              <div className="mt-5 space-y-4 text-base leading-7 text-[#4B5563] sm:text-lg sm:leading-8">
                <p>{company.descriptionLong}</p>
                <p>
                  We make waterproofing and construction chemical solutions designed for real site
                  conditions, with an emphasis on consistency, support and long-term value.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#111827] px-8 text-sm font-semibold text-white transition-colors hover:bg-[#1F2937]"
                >
                  Contact Us
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#C8102E] transition-colors hover:text-[#A30E27]"
                >
                  <span>Browse Products</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="order-2 lg:order-none">
              <div className="flex min-h-[320px] items-center justify-center rounded-[2rem] border border-[#E5E7EB] bg-[#F8FAFC] px-6 py-10 shadow-[0_1px_2px_rgba(17,24,39,0.04)] sm:min-h-[420px] lg:min-h-[560px]">
                <div className="flex h-full w-full items-center justify-center rounded-[1.5rem] border border-dashed border-[#CBD5E1] bg-white px-6 py-16 text-center">
                  <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#6B7280] sm:text-base">
                    FACTORY IMAGE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-8 sm:py-10 lg:py-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-10">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111827] sm:text-4xl">
                Our Story
              </h2>

              <div className="mt-4 space-y-4 text-base leading-7 text-[#4B5563] sm:text-lg sm:leading-8">
                {company.story.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#E5E7EB] bg-white p-6 sm:p-8">
              <div className="space-y-4">
                {company.timeline.map((item, index) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex min-h-11 min-w-[2.75rem] items-center justify-center rounded-2xl border border-[#F3D4D8] bg-[#FFF7F8] px-2 py-2 text-center text-xs font-semibold uppercase text-[#C8102E]">
                        {item.label}
                      </div>
                      {index !== company.timeline.length - 1 ? (
                        <div className="mt-2 h-10 w-px bg-[#E5E7EB]" aria-hidden="true" />
                      ) : null}
                    </div>

                    <div className="flex-1 rounded-2xl border border-[#E5E7EB] bg-[#FAFAFA] px-4 py-3">
                      <h3 className="text-sm font-semibold tracking-[-0.02em] text-[#111827] sm:text-base">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-8 sm:py-10 lg:py-14">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-[1.5rem] border border-[#E5E7EB] bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(17,24,39,0.05)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#F3D4D8] bg-[#FFF7F8] text-[#C8102E]">
                <Target className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-[#111827]">
                Mission
              </h3>
              <ul className="mt-3 space-y-3 text-sm leading-6 text-[#4B5563] sm:text-[15px]">
                {company.mission.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#C8102E]" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-[1.5rem] border border-[#E5E7EB] bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(17,24,39,0.05)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#F3D4D8] bg-[#FFF7F8] text-[#C8102E]">
                <Compass className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-[#111827]">
                Vision
              </h3>
              <ul className="mt-3 space-y-3 text-sm leading-6 text-[#4B5563] sm:text-[15px]">
                {company.vision.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#C8102E]" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </Container>
      </section>

      <section className="py-8 sm:py-10 lg:py-14">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111827] sm:text-4xl">
              Core Values
            </h2>
            <p className="mt-4 text-base leading-7 text-[#4B5563] sm:text-lg sm:leading-8">
              The standards that shape how we manufacture, serve and grow.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="rounded-[1.5rem] border border-[#E5E7EB] bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(17,24,39,0.05)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#F3D4D8] bg-[#FFF7F8] text-[#C8102E]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <h3 className="mt-4 text-lg font-semibold tracking-[-0.02em] text-[#111827]">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#4B5563]">{value.description}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-8 sm:py-10 lg:py-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-10">
            <div className="order-1 lg:order-none">
              <div className="flex min-h-[320px] items-center justify-center rounded-[2rem] border border-[#E5E7EB] bg-[#F8FAFC] px-6 py-10 shadow-[0_1px_2px_rgba(17,24,39,0.04)] sm:min-h-[420px]">
                <div className="flex h-full w-full items-center justify-center rounded-[1.5rem] border border-dashed border-[#CBD5E1] bg-white px-6 py-16 text-center">
                  <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#6B7280] sm:text-base">
                    FACTORY IMAGE
                  </span>
                </div>
              </div>
            </div>

            <div className="order-2 lg:order-none">
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111827] sm:text-4xl">
                Why Customers Trust Us
              </h2>

              <ul className="mt-6 space-y-4 text-sm text-[#374151] sm:text-[15px]">
                {company.trustReasons.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#C8102E]" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-8 sm:py-10 lg:py-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-10">
            <div className="order-1 lg:order-none">
              <div className="flex min-h-[280px] items-center justify-center rounded-[2rem] border border-[#E5E7EB] bg-white px-6 py-10 shadow-[0_1px_2px_rgba(17,24,39,0.03)] sm:min-h-[360px]">
                <div className="flex h-full w-full items-center justify-center rounded-[1.5rem] border border-dashed border-[#CBD5E1] bg-[#FAFAFA] px-6 py-16 text-center">
                  <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#6B7280] sm:text-base">
                    INDIA MAP
                  </span>
                </div>
              </div>
            </div>

            <div className="order-2 lg:order-none">
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111827] sm:text-4xl">
                Coverage
              </h2>

              <p className="mt-4 text-base leading-7 text-[#4B5563] sm:text-lg sm:leading-8">
                Serving:
              </p>

              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {company.regionsServed.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm font-medium text-[#374151]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-8 sm:py-10 lg:py-14">
        <Container>
          <div className="mx-auto max-w-[780px] rounded-[2rem] border border-[#E5E7EB] bg-white px-6 py-12 text-center shadow-[0_1px_2px_rgba(17,24,39,0.03)] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111827] sm:text-4xl">
              {company.cta.default.title}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#4B5563] sm:text-lg sm:leading-8">
              {company.cta.default.description}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#111827] px-8 text-sm font-semibold text-white transition-colors hover:bg-[#1F2937]"
              >
                Contact Us
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#C8102E] transition-colors hover:text-[#A30E27]"
              >
                <span>Browse Products</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}