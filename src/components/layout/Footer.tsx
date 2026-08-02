import Link from "next/link";

import Container from "../ui/Container";
import Logo from "../ui/Logo";
import { company } from "@/data/company";

const productLinks = [
  { label: "Latex M.P.", href: "/products" },
  { label: "Plastomix", href: "/products" },
  { label: "Rust Stop", href: "/products" },
  { label: "All Products", href: "/products" },
];

const companyLinks = [
  { label: "About Conchem", href: "/about" },
  { label: "Manufacturing Excellence", href: "/about" },
  { label: "Industries We Serve", href: "/industries" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E7EB] bg-white">
      <Container>
        <div className="grid gap-10 py-10 sm:py-12 lg:grid-cols-4 lg:gap-8 lg:py-14">
          <div className="max-w-sm">
            <Link href="/" aria-label="Conchem International Home" className="inline-flex items-center">
              <Logo size="lg" />
            </Link>

            <p className="mt-4 text-sm leading-6 text-[#4B5563]">
              {company.description}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#111827]">
              Products
            </h2>

            <ul className="mt-4 space-y-3 text-sm text-[#4B5563]">
              {productLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-[#C8102E]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#111827]">
              Company
            </h2>

            <ul className="mt-4 space-y-3 text-sm text-[#4B5563]">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-[#C8102E]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#111827]">
              Contact
            </h2>

            <ul className="mt-4 space-y-3 text-sm text-[#4B5563]">
              <li>{company.name}</li>
              <li>{company.address.full}</li>
              <li>{company.email.primary}</li>
              <li>{company.phone.primary}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-[#E5E7EB] py-5 text-sm text-[#4B5563] sm:flex-row sm:items-center sm:justify-between">
          <p>{company.copyright}</p>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/contact" className="transition-colors hover:text-[#C8102E]">
              Privacy Policy
            </Link>
            <Link href="/contact" className="transition-colors hover:text-[#C8102E]">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}