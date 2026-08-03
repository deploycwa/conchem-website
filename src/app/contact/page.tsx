import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import ContactForm from "@/components/forms/ContactForm";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import FaqSection from "../../components/sections/FaqSection";
import Container from "../../components/ui/Container";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Conchem International for expert waterproofing guidance, product inquiries, contractor support, and project recommendations.",
  keywords: [
    "contact Conchem",
    "waterproofing helpline",
    "construction chemical suppliers Siliguri",
    "Conchem phone email address",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `Contact Us | ${company.name}`,
    description:
      "Get in touch with Conchem International for expert waterproofing guidance, product inquiries, contractor support, and project recommendations.",
    url: "/contact",
    siteName: company.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact Us | ${company.name}`,
    description:
      "Get in touch with Conchem International for expert waterproofing guidance, product inquiries, contractor support, and project recommendations.",
  },
};


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

function ContactHeroBox({ className }: { className?: string }) {
  return (
    <div className={`relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto min-h-[240px] sm:min-h-[320px] lg:min-h-[560px] w-full overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-[#F8FAFC] p-3 shadow-[0_1px_2px_rgba(17,24,39,0.04)] ${className || ""}`}>
      <div className="relative h-full min-h-[216px] sm:min-h-[296px] lg:min-h-[536px] w-full overflow-hidden rounded-[1.5rem] bg-white">
        <Image
          src="/images/solutions/contact-us.png"
          alt="Contact Conchem Team"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center"
        />
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col gap-4 px-4 py-4">
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex flex-col gap-4 outline-none">

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

              {/* Mobile-only image: right after title and before paragraph (centered) */}
              <div className="mt-6 mx-auto flex w-full max-w-lg justify-center lg:hidden">
                <ContactHeroBox className="w-full" />
              </div>

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

            {/* Desktop-only image */}
            <div className="hidden lg:block order-2 lg:order-none">
              <ContactHeroBox />
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
              <ContactForm />
            </div>

            <div className="order-2 lg:order-none">
              <div className="relative min-h-[360px] sm:min-h-[420px] lg:min-h-[620px] w-full overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-[#F8FAFC] p-3 shadow-[0_1px_2px_rgba(17,24,39,0.04)]">
                <div className="relative h-full min-h-[336px] sm:min-h-[396px] lg:min-h-[596px] w-full overflow-hidden rounded-[1.5rem]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222.70290788222178!2d88.41705768583817!3d26.736508014670754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e441213fa6e979%3A0xea21e1373d552dc4!2sNobel's%20Academy%2C%20Champasari!5e0!3m2!1sen!2sin!4v1785714049696!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="absolute inset-0 h-full w-full border-0"
                    title="Conchem Location Map"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FaqSection />
      </main>

      <Footer />
    </div>
  );
}