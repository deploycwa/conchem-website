"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

import Container from "../ui/Container";
import Logo from "../ui/Logo";

const navigationItems = [
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
];

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const activeLinkClass = "text-[#C8102E]";
  const inactiveLinkClass = "text-[#111827] hover:text-[#C8102E]";

  const menuItems = useMemo(
    () => navigationItems.map((item) => ({ ...item, active: isActivePath(pathname, item.href) })),
    [pathname]
  );

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((open) => !open);
  };

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const drawer = drawerRef.current;
      if (!drawer) {
        return;
      }

      const focusableElements = Array.from(
        drawer.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((element) => !element.hasAttribute("disabled") && element.tabIndex !== -1);

      if (focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement;

      if (event.shiftKey && activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 hidden h-20 border-b border-[#E5E7EB] bg-white md:block">
        <Container className="flex h-full items-center gap-8">
          <Link href="/" className="flex shrink-0 items-center pl-1 sm:pl-2">
            <Logo size="md" priority />
          </Link>

          <nav aria-label="Primary" className="flex flex-1 items-center justify-center">
            <ul className="flex items-center gap-8">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={item.active ? "page" : undefined}
                    className={`text-[15px] font-medium transition-colors duration-200 ${
                      item.active ? activeLinkClass : inactiveLinkClass
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center rounded-lg bg-black px-[20px] text-[15px] font-medium text-white transition-colors duration-200 hover:bg-[#111827]"
            >
              Contact Us
            </Link>
          </div>
        </Container>
      </header>

      <header className="sticky top-0 z-50 border-b border-[#E5E7EB] bg-white md:hidden">
        <Container className="flex h-16 items-center justify-between">
          <Link href="/" className="flex shrink-0 items-center">
            <Logo size="sm" priority />
          </Link>

          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            onClick={toggleMobileMenu}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] text-[#111827] transition-colors hover:border-[#C8102E] hover:text-[#C8102E]"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </Container>
      </header>
      {isMobileMenuOpen ? (
        <div className="fixed inset-0 z-[60] md:hidden pointer-events-auto opacity-100 animate-[conchem-overlay-in_250ms_ease-out]">
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute inset-0 bg-black/55"
            tabIndex={-1}
          />

          <div
            id="mobile-navigation-drawer"
            ref={drawerRef}
            className="absolute right-0 top-0 flex h-full w-[88vw] max-w-sm flex-col bg-white shadow-[0_20px_50px_rgba(17,24,39,0.18)] translate-x-0 animate-[conchem-drawer-in_250ms_ease-out]"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between border-b border-[#E5E7EB] px-4 py-4">
              <span className="text-sm font-semibold uppercase tracking-[0.28em] text-[#111827]">
                Menu
              </span>

              <button
                ref={closeButtonRef}
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] text-[#111827] transition-colors hover:border-[#C8102E] hover:text-[#C8102E]"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Mobile primary" className="flex-1 px-4 py-6">
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      aria-current={item.active ? "page" : undefined}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex h-12 items-center rounded-xl border px-4 text-[15px] font-medium transition-colors ${
                        item.active
                          ? "border-[#F3D4D8] bg-[#FFF7F8] text-[#C8102E]"
                          : "border-transparent text-[#111827] hover:border-[#E5E7EB] hover:bg-[#FAFAFA] hover:text-[#C8102E]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border-t border-[#E5E7EB] px-4 py-4">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-black px-[20px] text-[15px] font-medium text-white transition-colors duration-200 hover:bg-[#111827]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}