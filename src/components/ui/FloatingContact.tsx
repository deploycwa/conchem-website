"use client";

import { useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { company } from "@/data/company";
import { triggerHaptic } from "@/src/lib/haptics";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    triggerHaptic(15);
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-2 rounded-2xl border border-[#E5E7EB] bg-white p-4 shadow-2xl backdrop-blur-lg sm:w-72"
          >
            <div className="flex items-center justify-between border-b border-[#F3F4F6] pb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
                Technical Support
              </span>
              <button
                type="button"
                onClick={() => {
                  triggerHaptic(10);
                  setIsOpen(false);
                }}
                className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                aria-label="Close contact menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className="text-sm font-medium text-[#111827]">
              Need product advice or a quote?
            </p>

            <a
              href={`https://wa.me/${company.phone.primary.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => triggerHaptic(15)}
              className="flex items-center gap-3 rounded-xl bg-[#25D366] px-4 py-2.5 text-xs font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="h-4 w-4 fill-white" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={company.phone.primaryHref}
              onClick={() => triggerHaptic(15)}
              className="flex items-center gap-3 rounded-xl bg-[#111827] px-4 py-2.5 text-xs font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="h-4 w-4" />
              <span>Call +91 9641335076</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={toggleOpen}
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#C8102E] text-white shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95"
        aria-label="Contact Technical Support"
      >
        {isOpen ? (
          <X className="h-6 w-6 transition-transform group-hover:rotate-90" />
        ) : (
          <Phone className="h-6 w-6" />
        )}
      </button>
    </div>
  );
}
