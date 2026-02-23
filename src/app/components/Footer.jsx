import { Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-gray-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* TOP GRID */}
        <div className="grid gap-14 md:grid-cols-4">

          {/* BRAND */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              N3&amp;M Imperium Chambers
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              A New Delhi–based law firm providing strategic legal representation
              across arbitration, corporate, civil, and criminal matters, with a
              pan-India practice.
            </p>

            {/* SOCIAL LINKS */}
            <div className="mt-6 flex gap-4 justify-center">
  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/nazma-nazrul-65b450318/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="text-gray-400 hover:text-[var(--gold)] transition"
  >
    <Linkedin size={22} strokeWidth={1.5} />
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/legazma?igsh=MXZsYnI4czhnOWFwNg%3D%3D"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="text-gray-400 hover:text-[var(--gold)] transition"
  >
    <Instagram size={22} strokeWidth={1.5} />
  </a>
</div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-[var(--gold)]">About Us</Link></li>
              <li><Link href="/services" className="hover:text-[var(--gold)]">Practice Areas</Link></li>
              <li><Link href="/team" className="hover:text-[var(--gold)]">Our Team</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--gold)]">Contact</Link></li>
            </ul>
          </div>

          {/* PRACTICE AREAS */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
              Practice Areas
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>Arbitration</li>
              <li>Corporate & Commercial Law</li>
              <li>Civil Litigation</li>
              <li>Criminal Law</li>
              <li>Banking & SARFAESI</li>
            </ul>
          </div>

          {/* MAP */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
              Office Location
            </h4>
            <div className="mt-4 h-[180px] rounded-lg overflow-hidden border border-white/10">
              <iframe
                title="N3&M Imperium Chambers Location"
                src="https://www.google.com/maps?q=Saket%20Court%20Complex%20New%20Delhi&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 pt-8 border-t border-white/10 text-sm text-gray-400 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} N3&amp;M Imperium Chambers. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/disclaimer" className="hover:text-[var(--gold)]">
              Legal Disclaimer
            </Link>
            <Link href="/privacy-policy" className="hover:text-[var(--gold)]">
              Privacy Policy
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}