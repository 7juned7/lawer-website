import Image from "next/image";
import AboutSection from "../components/AboutSection";
import ExpertiseSection from "../components/ExpertiseSection";
import WhySection from "../components/WhySection";
import TeamSection from "../components/TeamSection";
import ProcessSection from "../components/ProcessSection";

export default function AboutPage() {
  return (
    <main className="bg-[var(--bg-dark)] text-white">

      {/* PAGE TITLE */}
      <section className="pt-24 pb-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold">
            About{" "}
            <span className="text-[var(--accent)]">Ezeelegal</span>
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          
          <article>
            <p className="text-lg text-gray-300 leading-relaxed">
              <strong>Ezeelegal</strong> is an India-based law firm with a
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
              src="/team/team.jpeg"
              alt="Ezeelegal legal practice in India"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>
      </section>

      {/* WHY EZEELEGAL */}
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