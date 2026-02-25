"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--bg-soft)] border-b border-black/10">

      {/* Top Call Bar */}
      <div className="bg-[var(--bg-dark)] py-2 text-center text-xs sm:text-sm">
        <a
          href="tel:+917827795690"
          className="text-white tracking-wide hover:underline"
        >
          Call for Consultation: +91 78277 95690
        </a>
      </div>

      {/* Main Navbar */}
      <nav className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center focus:outline-none">
          <Image
            src="/logo.png"
            alt="ezeelegal – Litigation and Corporate Advisory"
            width={400}
            height={400}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-sm text-[var(--text-dark)]">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative pb-1 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-0 after:bg-[var(--text-dark)] after:transition-all after:duration-300 hover:after:w-full hover:text-[var(--accent)]"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="tel:+917827795690"
          className="hidden md:inline-flex px-6 py-3 text-sm border border-[var(--text-dark)] text-[var(--text-dark)] rounded-sm hover:bg-[var(--bg-dark)] hover:text-white transition"
        >
          Call Now
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-[var(--text-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 7h20M4 14h20M4 21h20" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-6 py-6 space-y-5 bg-[var(--bg-light)] text-white">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block pb-1 border-b border-white/10 hover:text-[var(--accent)] transition"
              >
                {item}
              </Link>
            </li>
          ))}

          <li className="pt-4">
            <a href="tel:+917827795690" className="block text-white text-lg">
              Call Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}