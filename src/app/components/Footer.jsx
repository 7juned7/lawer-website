import { Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-gray-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* TOP GRID */}
        <div className="grid gap-14 md:grid-cols-4">

          {/* BRAND */}
          <div>
            <h3 className="text-lg font-semibold text-white">ezeelegal</h3>
           <address className="mt-4 text-sm leading-relaxed text-gray-400 not-italic">
  A New Delhi–based law firm providing strategic legal representation
  across arbitration, corporate, civil, and criminal matters, with a
  pan-India practice.
</address>

            {/* SOCIAL LINKS */}
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.linkedin.com/in/nazma-nazrul-65b450318/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-[var(--accent)] transition"
              >
                <Linkedin size={22} strokeWidth={1.5} />
              </a>

              <a
                href="https://www.instagram.com/legazma"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-400 hover:text-[var(--accent)] transition"
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
              <li><Link href="/about" className="hover:text-[var(--accent)]">About Us</Link></li>
              <li><Link href="/services" className="hover:text-[var(--accent)]">Practice Areas</Link></li>
              <li><Link href="/team" className="hover:text-[var(--accent)]">Our Team</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--accent)]">Contact</Link></li>
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
                title="ezeelegal Office Location"
                src="https://www.google.com/maps?q=Saket%20Court%20Complex%20New%20Delhi&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 pt-8 border-t border-white/10 text-sm text-gray-400 flex flex-col items-center gap-4">

          <p className="text-center">
            © {CURRENT_YEAR} ezeelegal. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/disclaimer" className="hover:text-[var(--accent)]">
              Legal Disclaimer
            </Link>
            <Link href="/privacy-policy" className="hover:text-[var(--accent)]">
              Privacy Policy
            </Link>
          </div>

          {/* CREDIT */}
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>Website developed by</span>
            <a
  href="https://www.webjuncture.in"
  target="_blank"
  rel="nofollow noopener noreferrer"
  className="hover:text-[var(--accent)] transition font-medium"
  aria-label="WebJuncture Web Development Agency"
>
  WebJuncture
</a>
<span className="sr-only">
  WebJuncture is a web development and SEO agency in India
</span>
          </div>

        </div>

      </div>
    </footer>
  );
}