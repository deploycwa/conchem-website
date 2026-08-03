"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../ui/Container";
import { company } from "@/data/company";

const faqData = [
  {
    question: "How can I get product recommendations for my project?",
    answer:
      "You can submit an inquiry through our contact form or get in touch with our technical support team directly. Share your project type (residential, commercial, infrastructure, or industrial) and application area (e.g. basement, roof slab, wet area, or tile fixing), and our specialists will suggest the ideal Conchem product system and application dosage.",
  },
  {
    question: "Do you support contractors and distributors?",
    answer:
      "Yes, absolutely. We partner closely with contractors, applicators, builders, and regional hardware distributors across West Bengal, Bihar, Jharkhand, and North-East India. We offer on-site technical guidance, application training, bulk order pricing, and reliable regional delivery.",
  },
  {
    question: "Can I ask about waterproofing systems for existing structures?",
    answer:
      "Yes! We specialize in both new construction and repair & restoration waterproofing. Our technical team can help diagnose active leaks, dampness, or structural cracks and recommend suitable repair mortars, injection grouts, and flexible elastomeric waterproofing membranes.",
  },
  {
    question: "What should I share when requesting guidance?",
    answer:
      "To receive the most accurate product recommendation, please share your site location, structural type, specific areas requiring treatment (e.g. roof slab, terrace, basement, water tank, external walls), current site conditions, and estimated surface area.",
  },
  {
    question: "Do you help with product selection for specific applications?",
    answer:
      "Yes. Conchem manufactures specialized formulation ranges—including liquid waterproofing admixtures, tile adhesives, non-shrink grouts, structural repair mortars, and surface primers. Our technical team matches your exact substrate conditions with the right product formulation.",
  },
  {
    question: "How do I contact the team for follow-up questions?",
    answer: `You can reach out via phone at ${company.phone.primary}, email us at ${company.email.primary}, or submit a message through our contact form. Our technical support team responds promptly to all customer and contractor follow-up queries.`,
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-8 sm:py-10 lg:py-14">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111827] sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:items-start">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={item.question}
                className="overflow-hidden rounded-[1.5rem] border border-[#E5E7EB] bg-white transition-all duration-200 hover:border-[#D1D5DB]"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between p-5 text-left transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-sm font-semibold leading-6 text-[#111827] sm:text-[15px]">
                    {item.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="ml-3 shrink-0"
                  >
                    <ChevronDown className="h-5 w-5 text-[#C8102E]" aria-hidden="true" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 pt-1 text-sm leading-6 text-[#4B5563] border-t border-[#F3F4F6]">
                        <p>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
