import Image from "next/image";
import AboutSection from "../components/AboutSection";
import ExpertiseSection from "../components/ExpertiseSection";
import WhySection from "../components/WhySection";
import TeamSection from "../components/TeamSection";
import ProcessSection from "../components/ProcessSection";
export const metadata = {
  title: "About Us | ezeelegal",
  description:
    "Learn about ezeelegal, an India-based law firm providing strategic legal representation across arbitration, corporate and commercial advisory, and civil and commercial litigation with a pan-India practice.",
  keywords: [
    "ezeelegal",
    "law firm in India",
    "corporate law firm",
    "arbitration lawyers",
    "commercial litigation",
    "legal advisory India",
  ],
  openGraph: {
    title: "About ezeelegal",
    description:
      "ezeelegal is a professional law firm in India offering strategic legal solutions across arbitration, corporate advisory, and litigation matters.",
    url: "https://www.ezeelegal.in/about",
    siteName: "ezeelegal",
    images: [
      {
        url: "/og.jpeg", // optional (can add later)
        width: 1200,
        height: 630,
        alt: "About ezeelegal Law Firm",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function AboutPage() {
  return (
    <main className="bg-[var(--bg-dark)] text-white">
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://www.ezeelegal.in/#organization",
          "name": "ezeelegal",
          "url": "https://www.ezeelegal.in",
          "logo": "https://www.ezeelegal.in/logo.png",
          "description":
            "ezeelegal is an India-based law firm providing strategic legal representation across arbitration, corporate advisory, and commercial litigation.",
          "sameAs": [
            "https://www.linkedin.com/",
            "https://twitter.com/"
          ]
        },
        {
          "@type": "LegalService",
          "@id": "https://www.ezeelegal.in/#legalservice",
          "name": "ezeelegal Law Firm",
          "url": "https://www.ezeelegal.in/about",
          "provider": {
            "@id": "https://www.ezeelegal.in/#organization"
          },
          "areaServed": {
            "@type": "Country",
            "name": "India"
          },
          "serviceType": [
            "Arbitration",
            "Corporate Advisory",
            "Commercial Litigation",
            "Civil Litigation"
          ]
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.ezeelegal.in"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "About",
              "item": "https://www.ezeelegal.in/about"
            }
          ]
        }
      ]
    }),
  }}
/>
      {/* PAGE TITLE */}
      <section className="pt-24 pb-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold">
            About{" "}
            <span className="text-[var(--accent)]">ezeelegal</span>
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          
          <article>
            <p className="text-lg text-gray-300 leading-relaxed">
              <strong>ezeelegal</strong> is an India-based law firm with a
              pan-India practice across multiple judicial forums. With
              <strong> strong professional experience</strong>, the firm
              represents businesses, entrepreneurs, investors, and individuals
              in complex legal and commercial matters.
            </p>

            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Our practice spans <strong>arbitration</strong>,
              <strong> corporate and commercial advisory</strong>, and
              <strong> civil and commercial litigation</strong>, combining legal
              expertise with practical commercial insight.
            </p>
          </article>

          <div className="relative w-full h-[420px] rounded-lg overflow-hidden">
            <Image
              src="/team/supreme_court.jpeg"
              alt="ezeelegal legal practice in India"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>
      </section>

      {/* WHY ezeelegal */}
      <WhySection />

      {/* AREAS OF PRACTICE */}
      <ExpertiseSection />

      {/* TEAM */}
      <TeamSection />

      {/* CONSULTATION PROCESS */}
      <ProcessSection />

      {/* ETHICS & CONFIDENTIALITY */}
      <section className="py-16 bg-neutral-950">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-400 leading-relaxed">
            All professional engagements are governed by principles of
            confidentiality, transparency, and ethical compliance in accordance
            with applicable laws and the rules of the Bar Council of India.
          </p>
        </div>
      </section>

    </main>
  );
}