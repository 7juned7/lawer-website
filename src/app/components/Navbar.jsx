"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Practice Areas", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[var(--bg-soft)] border-b border-black/10">

      {/* TOP CALL BAR */}
      <div className="bg-[var(--bg-dark)] py-2 text-center text-xs sm:text-sm">
        <a
          href="tel:+917827795690"
          className="text-white tracking-wide hover:underline"
        >
          Call for Consultation: +91 78277 95690
        </a>
      </div>

      {/* MAIN NAV */}
      <nav
        className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between"
        aria-label="Primary Navigation"
      >
        {/* LOGO */}
        <Link href="/" className="flex items-center focus:outline-none">
          <Image
            src="/logo.png"
            alt="ezeelegal – Litigation and Corporate Advisory Law Firm in India"
            width={380}
            height={48}
            priority
          />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-10 text-sm text-[var(--text-dark)]">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className="relative pb-1 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-0 after:bg-[var(--text-dark)] after:transition-all after:duration-300 hover:after:w-full hover:text-[var(--accent)]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* DESKTOP CTA */}
        <a
          href="tel:+917827795690"
          className="hidden md:inline-flex px-6 py-3 text-sm border border-[var(--text-dark)] text-[var(--text-dark)] rounded-sm hover:bg-[var(--bg-dark)] hover:text-white transition"
        >
          Call Now
        </a>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden p-2 text-[var(--text-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M4 7h20M4 14h20M4 21h20" />
          </svg>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-6 py-6 space-y-5 bg-[var(--bg-light)] text-white">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={pathname === item.href ? "page" : undefined}
                className="block pb-1 border-b border-white/10 hover:text-[var(--accent)] transition"
              >
                {item.label}
              </Link>
            </li>
          ))}

          <li className="pt-4">
            <a
              href="tel:+917827795690"
              className="block text-white text-lg"
            >
              Call Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}