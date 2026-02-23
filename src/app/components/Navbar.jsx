"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--bg-dark)] border-b border-white/10">
      
      {/* Top Call Bar */}
      <div className="bg-black py-2 text-center text-xs sm:text-sm">
        <a
          href="tel:+917827795690"
          className="text-[var(--gold)]  tracking-wide hover:underline"
        >
          Call for Consultation: +91 78277 95690
        </a>
      </div>

      {/* Main Navbar */}
      <nav
        className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between"
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex mt-5 items-center gap-3 focus:outline-none">
          <Image
            src="/logo.png"
            alt="N3&M Imperium Chambers"
            width={300}
            height={300}
            priority
          />
          
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-sm text-gray-300">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="hover:text-[var(--gold)] transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="tel:+917827795690"
          className="hidden md:inline-flex items-center justify-center px-6 py-3 text-sm border border-[var(--gold)] text-[var(--gold)] rounded-sm hover:bg-[var(--gold)] hover:text-black transition"
        >
          Call Now
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <svg
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 7h20M4 14h20M4 21h20" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
        ${open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="px-6 py-6 space-y-5 bg-[#0f1325] text-base text-gray-200 border-t border-white/10">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block py-2"
              >
                {item}
              </Link>
            </li>
          ))}

          <li className="pt-4 border-t border-white/10">
            <a
              href="tel:+919999999999"
              className="block text-[var(--gold)] text-lg"
            >
              Call Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}