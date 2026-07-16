import Image from "next/image";
import Link from "next/link";

import Container from "../ui/Container";

const navigationItems = [
  { label: "Products", href: "#products" },
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 hidden h-20 border-b border-[#E5E7EB] bg-white md:block">
      <Container className="flex h-full items-center gap-8">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/conchem-logo-placeholder.svg"
            alt="Conchem International"
            width={144}
            height={37}
            priority
            className="h-[37px] w-auto"
          />
        </Link>

        <nav aria-label="Primary" className="flex flex-1 items-center justify-center">
          <ul className="flex items-center gap-8">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-[15px] font-medium text-[#111827] transition-colors duration-200 hover:text-[#C8102E]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center">
          <Link
            href="#contact"
            className="inline-flex h-11 items-center rounded-lg bg-black px-[20px] text-[15px] font-medium text-white transition-colors duration-200 hover:bg-[#111827]"
          >
            Contact Us
          </Link>
        </div>
      </Container>
    </header>
  );
}