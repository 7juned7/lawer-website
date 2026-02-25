import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content Wrapper */}
      <div className="relative z-10">

        {/* HERO */}
        <div className="min-h-[85vh] flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-white">
              Strategic Legal Solutions
              <br />
              <span className="text-[var(--accent)]">
                ezeelegal
              </span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-gray-300 leading-relaxed">
              ezeelegal is a forward-thinking law firm based in India, offering
              strategic and result-oriented legal representation across arbitration,
              commercial, corporate, and litigation matters.
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/contact"
                className="
                  px-6 py-3
                  border border-white
                  text-white
                  hover:bg-white
                  hover:text-[var(--bg-dark)]
                  transition
                  text-sm
                "
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

       {/* SERVICE INTRO CARDS */}
<div className="pb-24 -mt-32 relative z-20">
  <div className="max-w-7xl mx-auto px-6 grid gap-8 md:grid-cols-3">

    <div className="bg-white/10 backdrop-blur-md p-8 min-h-[220px] border border-white/20 shadow-lg">
      <h3 className="text-xl font-medium text-white">
        Arbitration & Dispute Resolution
      </h3>
      <p className="mt-4 text-base text-gray-300 leading-relaxed">
        Representation in domestic and international commercial arbitration,
        including enforcement and challenge of arbitral awards before
        appropriate judicial forums.
      </p>
    </div>

    <div className="bg-white/10 backdrop-blur-md p-8 min-h-[220px] border border-white/20 shadow-lg">
      <h3 className="text-xl font-medium text-white">
        Corporate & Commercial Advisory
      </h3>
      <p className="mt-4 text-base text-gray-300 leading-relaxed">
        Comprehensive legal advisory for businesses, covering corporate
        structuring, commercial contracts, regulatory compliance,
        and transactional matters.
      </p>
    </div>

    <div className="bg-white/10 backdrop-blur-md p-8 min-h-[220px] border border-white/20 shadow-lg">
      <h3 className="text-xl font-medium text-white">
        Litigation Practice
      </h3>
      <p className="mt-4 text-base text-gray-300 leading-relaxed">
        Strategic representation in civil and commercial litigation before
        the Supreme Court, High Courts, and other judicial forums.
      </p>
    </div>

  </div>
</div>
      </div>
    </section>
  );
}