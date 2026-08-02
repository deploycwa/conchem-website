"use client";

import React, { useState } from "react";
import {
  BriefcaseBusiness,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Mail,
  MessageSquare,
  Phone,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    productInterest: "",
    message: "",
    hp: "", // Honeypot field
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [responseMessage, setResponseMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setResponseMessage("");
    setFieldErrors({});

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setResponseMessage(data.message || "Thank you! Your message has been sent successfully.");
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          productInterest: "",
          message: "",
          hp: "",
        });
      } else {
        setStatus("error");
        setResponseMessage(data.message || "Failed to send message. Please try again.");
        if (data.errors) {
          setFieldErrors(data.errors);
        }
      }
    } catch {
      setStatus("error");
      setResponseMessage("An unexpected error occurred. Please check your connection and try again.");
    }
  };

  return (
    <div className="rounded-[2rem] border border-[#E5E7EB] bg-white p-6 sm:p-8 lg:p-10">
      <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111827] sm:text-4xl">
        Send a Message
      </h2>

      {status === "success" && (
        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50/80 p-4 text-emerald-800">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden="true" />
          <div>
            <p className="text-sm font-semibold">{responseMessage}</p>
            <p className="mt-1 text-xs text-emerald-700">
              Our technical team will review your inquiry and reach out shortly.
            </p>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-rose-200 bg-rose-50/80 p-4 text-rose-800">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-rose-600" aria-hidden="true" />
          <div>
            <p className="text-sm font-semibold">{responseMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        {/* Honeypot field - invisible to real users */}
        <input
          type="text"
          name="hp"
          value={formData.hp}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
          className="sr-only hidden"
          aria-hidden="true"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="text-sm font-semibold text-[#111827]">
              Name <span className="text-[#C8102E]">*</span>
            </label>
            <div className="mt-2 flex h-12 items-center gap-3 rounded-full border border-[#D1D5DB] bg-white px-4 transition-colors focus-within:border-[#C8102E] focus-within:ring-2 focus-within:ring-[#C8102E]/20">
              <User className="h-4 w-4 text-[#6B7280]" aria-hidden="true" />
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                disabled={status === "submitting"}
                className="h-full w-full bg-transparent text-sm text-[#111827] outline-none placeholder:text-[#9CA3AF] disabled:opacity-60"
              />
            </div>
            {fieldErrors.name && (
              <p className="mt-1 pl-4 text-xs text-rose-600">{fieldErrors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="company" className="text-sm font-semibold text-[#111827]">
              Company
            </label>
            <div className="mt-2 flex h-12 items-center gap-3 rounded-full border border-[#D1D5DB] bg-white px-4 transition-colors focus-within:border-[#C8102E] focus-within:ring-2 focus-within:ring-[#C8102E]/20">
              <BriefcaseBusiness className="h-4 w-4 text-[#6B7280]" aria-hidden="true" />
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company name"
                disabled={status === "submitting"}
                className="h-full w-full bg-transparent text-sm text-[#111827] outline-none placeholder:text-[#9CA3AF] disabled:opacity-60"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="text-sm font-semibold text-[#111827]">
              Email <span className="text-[#C8102E]">*</span>
            </label>
            <div className="mt-2 flex h-12 items-center gap-3 rounded-full border border-[#D1D5DB] bg-white px-4 transition-colors focus-within:border-[#C8102E] focus-within:ring-2 focus-within:ring-[#C8102E]/20">
              <Mail className="h-4 w-4 text-[#6B7280]" aria-hidden="true" />
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                disabled={status === "submitting"}
                className="h-full w-full bg-transparent text-sm text-[#111827] outline-none placeholder:text-[#9CA3AF] disabled:opacity-60"
              />
            </div>
            {fieldErrors.email && (
              <p className="mt-1 pl-4 text-xs text-rose-600">{fieldErrors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="text-sm font-semibold text-[#111827]">
              Phone
            </label>
            <div className="mt-2 flex h-12 items-center gap-3 rounded-full border border-[#D1D5DB] bg-white px-4 transition-colors focus-within:border-[#C8102E] focus-within:ring-2 focus-within:ring-[#C8102E]/20">
              <Phone className="h-4 w-4 text-[#6B7280]" aria-hidden="true" />
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                disabled={status === "submitting"}
                className="h-full w-full bg-transparent text-sm text-[#111827] outline-none placeholder:text-[#9CA3AF] disabled:opacity-60"
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="productInterest" className="text-sm font-semibold text-[#111827]">
            Product Interest
          </label>
          <div className="mt-2 flex h-12 items-center gap-3 rounded-full border border-[#D1D5DB] bg-white px-4 transition-colors focus-within:border-[#C8102E] focus-within:ring-2 focus-within:ring-[#C8102E]/20">
            <MessageSquare className="h-4 w-4 text-[#6B7280]" aria-hidden="true" />
            <input
              id="productInterest"
              name="productInterest"
              type="text"
              value={formData.productInterest}
              onChange={handleChange}
              placeholder="What product are you interested in?"
              disabled={status === "submitting"}
              className="h-full w-full bg-transparent text-sm text-[#111827] outline-none placeholder:text-[#9CA3AF] disabled:opacity-60"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="text-sm font-semibold text-[#111827]">
            Message <span className="text-[#C8102E]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project"
            disabled={status === "submitting"}
            className="mt-2 w-full rounded-[1.5rem] border border-[#D1D5DB] bg-white px-4 py-3 text-sm text-[#111827] outline-none transition-colors placeholder:text-[#9CA3AF] focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/20 disabled:opacity-60"
          />
          {fieldErrors.message && (
            <p className="mt-1 pl-4 text-xs text-rose-600">{fieldErrors.message}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={status === "submitting"}
          className="h-12 w-full rounded-full bg-[#111827] px-8 text-sm font-semibold text-white transition-colors hover:bg-[#1F2937] focus-visible:ring-2 focus-visible:ring-[#C8102E] disabled:cursor-not-allowed disabled:opacity-75"
        >
          {status === "submitting" ? (
            <span className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              <span>Sending Message...</span>
            </span>
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </div>
  );
}
