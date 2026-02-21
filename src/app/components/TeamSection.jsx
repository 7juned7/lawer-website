"use client";

import { useRef } from "react";

export default function TeamSection() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;
    const width = sliderRef.current.offsetWidth;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  const teamMembers = [
    { name: "Adv. Nazma Khan", role: "Founder" },
    { name: "Adv. Nadeem Khan", role: "Founder" },
    { name: "Adv. Muskan Ali", role: "Co-Founder" },
    { name: "Adv. Neerav Anand", role: "Co-Founder" },
    { name: "Adv. Naaz", role: "Senior Associate" },
    { name: "Adv. Faisal", role: "Associate" },
    { name: "Md. Faizan", role: "Legal Associate" },
    { name: "Md. Iqbal", role: "Legal Associate" },
  ];

  return (
    <section className="bg-black py-28" aria-labelledby="team-heading">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 id="team-heading" className="text-3xl md:text-4xl font-semibold text-white">
            Our <span className="text-[var(--gold)]">Team</span>
          </h2>

          <p className="mt-6 text-base md:text-lg text-gray-300 leading-relaxed">
            Our team comprises advocates and legal professionals with
            <strong> focused expertise</strong> and a commitment to
            <strong> ethical legal practice</strong>.
          </p>
        </div>

        {/* Carousel */}
        <div
          ref={sliderRef}
          className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-6"
        >
          {teamMembers.map((member, index) => (
            <article
              key={index}
              className="min-w-[260px] sm:min-w-[280px] md:min-w-[320px] snap-start border border-white/15 rounded-xl bg-black"
            >
              <div className="h-[280px] bg-neutral-900 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Photograph</span>
              </div>

              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="mt-2 text-sm text-[var(--gold)] tracking-wide">
                  {member.role}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-6 mt-6">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll team left"
            className="w-10 h-10 flex items-center justify-center border border-white/25 rounded-full text-white hover:border-[var(--gold)] transition"
          >
            ←
          </button>

          <button
            onClick={() => scroll("right")}
            aria-label="Scroll team right"
            className="w-10 h-10 flex items-center justify-center border border-white/25 rounded-full text-white hover:border-[var(--gold)] transition"
          >
            →
          </button>
        </div>

      </div>
    </section>
  );
}