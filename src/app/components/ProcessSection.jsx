"use client";

import { useEffect, useRef, useState } from "react";

export default function ProcessSection() {
  const stepsRef = useRef([]);
  const lineRef = useRef(null);
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            setActiveStep((prev) => Math.max(prev, index));
          }
        });
      },
      { threshold: 0.3 }
    );

    stepsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (lineRef.current && activeStep >= 0) {
      lineRef.current.classList.add("fill");
    }
  }, [activeStep]);

  const steps = [
    {
      title: "Initial Contact",
      text: "Prospective clients may contact the firm through the website or official email. Submission of an inquiry does not create a lawyer–client relationship.",
    },
    {
      title: "Conflict of Interest Check",
      text: "A mandatory conflict check is conducted to ensure compliance with professional and ethical obligations.",
    },
    {
      title: "Preliminary Review",
      text: "We review the basic facts and documents shared to assess legal and commercial dimensions.",
    },
    {
      title: "Consultation Meeting",
      text: "A formal consultation is scheduled to identify legal issues, risks, remedies, timelines, and strategy.",
    },
    {
      title: "Engagement & Fee Structure",
      text: "A formal engagement letter defines scope, fees, confidentiality, and responsibilities.",
    },
    {
      title: "Strategic Roadmap",
      text: "A tailored legal strategy is formulated, including litigation, arbitration, negotiation, or structuring.",
    },
    {
      title: "Confidentiality",
      text: "All information shared is handled with strict confidentiality and professional discretion.",
    },
  ];

  return (
    <section
      className="bg-[var(--bg-soft)] py-28"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <h2
            id="process-heading"
            className="text-3xl md:text-4xl font-semibold text-[var(--text-dark)]"
          >
            Consultation &{" "}
            <span className="text-[var(--accent)]">Engagement Process</span>
          </h2>

          <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
            At <strong>ezeelegal</strong>, we follow a{" "}
            <strong>structured, transparent, and confidential process</strong>{" "}
            to ensure clarity and strategic direction from the first interaction.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          <div
            ref={lineRef}
            className="absolute left-6 top-0 bottom-0 w-px bg-[var(--accent)]/60 timeline-line"
          />

          <div className="space-y-16">
            {steps.map((step, index) => {
              const isActive = index <= activeStep;

              return (
                <article
                  key={step.title}
                  data-index={index}
                  ref={(el) => (stepsRef.current[index] = el)}
                  className="relative pl-20 timeline-step"
                >
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-0 w-12 h-12 rounded-full border-2 flex items-center justify-center font-semibold timeline-dot ${
                      isActive
                        ? "active"
                        : "border-[var(--accent)] text-[var(--accent)] bg-[var(--bg-soft)]"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-lg font-semibold text-[var(--text-dark)]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-[15px] text-gray-600 leading-relaxed">
                    {step.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}