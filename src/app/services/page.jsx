import ExpertiseSection from "../components/ExpertiseSection";
import ProcessSection from "../components/ProcessSection";
export const metadata = {
  title: "Practice Areas | ezeelegal",
  description:
    "Explore the practice areas of ezeelegal, an India-based law firm providing legal services across arbitration, corporate and commercial advisory, and civil and criminal litigation with a pan-India practice.",
  keywords: [
    "ezeelegal",
    "practice areas",
    "law firm in India",
    "arbitration lawyers",
    "corporate law",
    "commercial litigation",
    "legal services India",
  ],
  alternates: {
    canonical: "https://www.ezeelegal.in/services",
  },
  openGraph: {
    title: "Practice Areas | ezeelegal",
    description:
      "ezeelegal offers focused legal representation across arbitration, corporate and commercial law, and litigation matters throughout India.",
    url: "https://www.ezeelegal.in/services",
    siteName: "ezeelegal",
    type: "website",
    images: [
      {
        url: "https://www.ezeelegal.in/og.jpeg",
        width: 1200,
        height: 630,
        alt: "ezeelegal Practice Areas",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function ServicesPage() {
  return (
    <main className="bg-black text-white">

      {/* PAGE TITLE */}
      <section className="pt-24 pb-12 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Practice{" "}
            <span className="text-[var(--gold)]">Areas</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            N3&amp;M Imperium Chambers provides focused legal representation across
            arbitration, corporate, commercial, civil, and criminal matters,
            with a pan-India practice.
          </p>
        </div>
      </section>

      {/* PRACTICE AREAS GRID */}
      <ExpertiseSection />

      {/* HOW WE WORK */}
      <ProcessSection />

      {/* DISCLAIMER / ETHICS */}
      <section className="py-16 bg-neutral-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-400 leading-relaxed">
            The information provided herein is for general informational purposes
            only and does not constitute legal advice. Professional engagement
            is subject to applicable laws and the rules of the Bar Council of India.
          </p>
        </div>
      </section>

    </main>
  );
}