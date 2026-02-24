"use client";

import { useRef } from "react";
import Image from "next/image";

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
    { name: "Ms. Nazma Khan", role: "Founder", image: "/team/nazma.jpeg" },
    { name: "Mr. Nadeem Khan", role: "Founder", image: "/team/nadeem.jpeg" },
    { name: "Mr. Neerav Anand", role: "Co-Founder", image: "/team/neerav.jpeg" },
    { name: "Ms. Muskan Ali", role: "Co-Founder", image: "/team/muskaan.jpeg" },
    
    { name: "Mr. Faisal Yaseen", role: "Senior Associate", image: "/team/adv-faisal.jpeg" },
    { name: "Mr. Deepak Singh", role: "Senior Associate", image: "/team/deepak.jpeg" },
    { name: "Md. Faizan", role: "Associate", image: "/team/faizan.jpeg" },
    { name: "Md. Iqbal", role: "Associate", image: "/team/iqbal.jpeg" },
  ];

  return (
    <section className="bg-[var(--bg-dark)] py-28" aria-labelledby="team-heading">
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 id="team-heading" className="text-3xl md:text-4xl font-semibold text-white">
            Our <span className="text-[var(--accent)]">Team</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-gray-300 leading-relaxed">
            Our team comprises advocates and legal professionals with{" "}
            <strong>focused expertise</strong> and a commitment to{" "}
            <strong>ethical legal practice</strong>.
          </p>
        </div>

        <div
          ref={sliderRef}
          className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-6"
        >
          {teamMembers.map((member, index) => (
            <article
              key={index}
              className="min-w-[260px] sm:min-w-[280px] md:min-w-[320px] snap-start rounded-xl overflow-hidden bg-[var(--bg-light)] border border-white/10 hover:shadow-xl transition"
            >
              <div className="relative h-[320px] bg-neutral-900">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="mt-2 text-sm text-[var(--accent)] tracking-wide">
                  {member.role}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center gap-6 mt-6">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll team left"
            className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full text-white hover:border-[var(--accent)] transition"
          >
            ←
          </button>

          <button
            onClick={() => scroll("right")}
            aria-label="Scroll team right"
            className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full text-white hover:border-[var(--accent)] transition"
          >
            →
          </button>
        </div>

      </div>
    </section>
  );
}