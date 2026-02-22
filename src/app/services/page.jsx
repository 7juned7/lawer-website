import ExpertiseSection from "../components/ExpertiseSection";
import ProcessSection from "../components/ProcessSection";

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