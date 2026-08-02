import Link from "next/link";
import {
  ChevronDown,
  Clock3,
  Mail,
  MapPin,
  Phone,
  User,
  BriefcaseBusiness,
  MessageSquare,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import CallToAction from "../../components/sections/CallToAction";
import Container from "../../components/ui/Container";
import { company } from "@/data/company";


const contactCards = [
  {
    title: "Phone",
    description: company.phone.primary,
    icon: Phone,
    href: company.phone.primaryHref,
  },
  {
    title: "Email",
    description: company.email.primary,
    icon: Mail,
    href: company.email.primaryHref,
  },
  {
    title: "Office",
    description: company.address.full,
    icon: MapPin,
    href: "/contact",
  },
  {
    title: "Business Hours",
    description: company.businessHours,
    icon: Clock3,
    href: "/contact",
  },
];

const faqItems = [
  "How can I get product recommendations for my project?",
  "Do you support contractors and distributors?",
  "Can I ask about waterproofing systems for existing structures?",
  "What should I share when requesting guidance?",
  "Do you help with product selection for specific applications?",
  "How do I contact the team for follow-up questions?",
];

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col gap-4 px-4 py-4">
      <Navbar />

      <section className="py-8 sm:py-10 lg:py-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
            <div className="order-1 max-w-2xl lg:order-none">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#6B7280] sm:text-sm">
                Contact
              </p>

              <h1 className="mt-4 max-w-xl text-[clamp(2.25rem,4.4vw,4.1rem)] leading-[0.95] font-semibold tracking-[-0.04em] text-[#111827]">
                Let&apos;s Build Something
                <br />
                That Lasts
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-[#4B5563] sm:text-lg sm:leading-8">
                Invite homeowners, contractors, builders and distributors to contact Conchem for
                product guidance.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Button
                  type="button"
                  className="h-12 rounded-full bg-[#111827] px-8 text-sm font-semibold text-white transition-colors hover:bg-[#1F2937]"
                >
                  Contact Us
                </Button>

                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#C8102E] transition-colors hover:text-[#A30E27]"
                >
                  <span>Browse Products</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="order-2 lg:order-none">
              <div className="flex min-h-[320px] items-center justify-center rounded-[2rem] border border-[#E5E7EB] bg-[#F8FAFC] px-6 py-10 shadow-[0_1px_2px_rgba(17,24,39,0.04)] sm:min-h-[420px] lg:min-h-[560px]">
                <div className="flex h-full w-full items-center justify-center rounded-[1.5rem] border border-dashed border-[#CBD5E1] bg-white px-6 py-16 text-center">
                  <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#6B7280] sm:text-base">
                    CONTACT IMAGE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-8 sm:py-10 lg:py-14">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111827] sm:text-4xl">
              Get In Touch
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {contactCards.map((card) => {
              const Icon = card.icon;

              return (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group rounded-[1.5rem] border border-[#E5E7EB] bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(17,24,39,0.05)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#F3D4D8] bg-[#FFF7F8] text-[#C8102E]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-[#111827]">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#4B5563] sm:text-[15px]">
                    {card.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <section id="contact-form" className="py-8 sm:py-10 lg:py-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[55fr_45fr] lg:items-start lg:gap-10">
            <div className="order-1 lg:order-none">
              <div className="rounded-[2rem] border border-[#E5E7EB] bg-white p-6 sm:p-8 lg:p-10">
                <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111827] sm:text-4xl">
                  Send a Message
                </h2>

                <form className="mt-8 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="text-sm font-semibold text-[#111827]">
                        Name
                      </label>
                      <div className="mt-2 flex h-12 items-center gap-3 rounded-full border border-[#D1D5DB] bg-white px-4">
                        <User className="h-4 w-4 text-[#6B7280]" aria-hidden="true" />
                        <input
                          id="name"
                          type="text"
                          placeholder="Your name"
                          className="h-full w-full bg-transparent text-sm text-[#111827] outline-none placeholder:text-[#9CA3AF]"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="text-sm font-semibold text-[#111827]">
                        Company
                      </label>
                      <div className="mt-2 flex h-12 items-center gap-3 rounded-full border border-[#D1D5DB] bg-white px-4">
                        <BriefcaseBusiness className="h-4 w-4 text-[#6B7280]" aria-hidden="true" />
                        <input
                          id="company"
                          type="text"
                          placeholder="Company name"
                          className="h-full w-full bg-transparent text-sm text-[#111827] outline-none placeholder:text-[#9CA3AF]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="text-sm font-semibold text-[#111827]">
                        Email
                      </label>
                      <div className="mt-2 flex h-12 items-center gap-3 rounded-full border border-[#D1D5DB] bg-white px-4">
                        <Mail className="h-4 w-4 text-[#6B7280]" aria-hidden="true" />
                        <input
                          id="email"
                          type="email"
                          placeholder="name@example.com"
                          className="h-full w-full bg-transparent text-sm text-[#111827] outline-none placeholder:text-[#9CA3AF]"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="text-sm font-semibold text-[#111827]">
                        Phone
                      </label>
                      <div className="mt-2 flex h-12 items-center gap-3 rounded-full border border-[#D1D5DB] bg-white px-4">
                        <Phone className="h-4 w-4 text-[#6B7280]" aria-hidden="true" />
                        <input
                          id="phone"
                          type="tel"
                          placeholder="Phone number"
                          className="h-full w-full bg-transparent text-sm text-[#111827] outline-none placeholder:text-[#9CA3AF]"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="product-interest" className="text-sm font-semibold text-[#111827]">
                      Product Interest
                    </label>
                    <div className="mt-2 flex h-12 items-center gap-3 rounded-full border border-[#D1D5DB] bg-white px-4">
                      <MessageSquare className="h-4 w-4 text-[#6B7280]" aria-hidden="true" />
                      <input
                        id="product-interest"
                        type="text"
                        placeholder="What product are you interested in?"
                        className="h-full w-full bg-transparent text-sm text-[#111827] outline-none placeholder:text-[#9CA3AF]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-semibold text-[#111827]">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      placeholder="Tell us about your project"
                      className="mt-2 w-full rounded-[1.5rem] border border-[#D1D5DB] bg-white px-4 py-3 text-sm text-[#111827] outline-none transition-colors placeholder:text-[#9CA3AF] focus:border-[#C8102E]"
                    />
                  </div>

                  <Button
                    type="button"
                    className="h-12 w-full rounded-full bg-[#111827] px-8 text-sm font-semibold text-white transition-colors hover:bg-[#1F2937]"
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </div>

            <div className="order-2 lg:order-none">
              <div className="flex min-h-[320px] items-center justify-center rounded-[2rem] border border-[#E5E7EB] bg-[#F8FAFC] px-6 py-10 shadow-[0_1px_2px_rgba(17,24,39,0.04)] sm:min-h-[420px] lg:min-h-[620px]">
                <div className="flex h-full w-full items-center justify-center rounded-[1.5rem] border border-dashed border-[#CBD5E1] bg-white px-6 py-16 text-center">
                  <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#6B7280] sm:text-base">
                    MAP
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-8 sm:py-10 lg:py-14">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111827] sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {faqItems.map((question) => (
              <article
                key={question}
                className="flex items-center justify-between rounded-[1.5rem] border border-[#E5E7EB] bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(17,24,39,0.05)]"
              >
                <h3 className="text-sm font-semibold leading-6 text-[#111827] sm:text-[15px]">
                  {question}
                </h3>
                <ChevronDown className="h-5 w-5 shrink-0 text-[#C8102E]" aria-hidden="true" />
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CallToAction
        title="Ready to Discuss Your Project?"
        description="Reach out to Conchem and our team will help you identify the right solution for your site or application."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="Browse Products"
        secondaryHref="/products"
      />

      <Footer />
    </main>
  );
}