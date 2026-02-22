import Image from "next/image";
import AboutSection from "../components/AboutSection";
import ExpertiseSection from "../components/ExpertiseSection";
import WhySection from "../components/WhySection";
import TeamSection from "../components/TeamSection";
import ProcessSection from "../components/ProcessSection";

export default function AboutPage() {
  return (
    <main className="bg-black text-white">

      {/* PAGE TITLE (simple, no hero) */}
      <section className="pt-24 pb-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold">
            About{" "}
            <span className="text-[var(--gold)]">N3&amp;M Imperium Chambers</span>
          </h1>
        </div>
      </section>

      {/* INTRO (short firm overview) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          
          <article>
            <p className="text-lg text-gray-200 leading-relaxed">
              <strong>N3&amp;M Imperium Chambers</strong> is a New Delhi–based law firm
              operating from the Saket Court Complex, with a pan-India practice
              across multiple judicial forums. With more than
              <strong> five years of professional experience</strong>, the firm
              represents businesses, entrepreneurs, investors, and individuals
              in complex legal and commercial matters.
            </p>

            <p className="mt-6 text-lg text-gray-200 leading-relaxed">
              Our practice spans <strong>arbitration</strong>,
              <strong> commercial and corporate advisory</strong>, and
              <strong> civil and criminal litigation</strong>, combining legal
              expertise with practical commercial insight.
            </p>
          </article>

          <div className="relative w-full h-[420px] rounded-lg overflow-hidden">
            <Image
              src="/Team/team.jpeg"
              alt="N3&M Imperium Chambers office at Saket Court"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>
      </section>

     

      {/* WHY N3&M */}
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