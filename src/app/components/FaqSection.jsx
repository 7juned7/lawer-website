"use client";

import { useState } from "react";

export default function FAQSection() {
  const faqs = [
    {
      q: "How do I initiate a consultation with N3&M Imperium Chambers?",
      a: "You may initiate contact through the website contact form or by writing to our official email address. Brief details regarding the nature of the dispute or transaction may be shared for a preliminary assessment. Submission of an inquiry does not create a lawyer–client relationship.",
    },
    {
      q: "Does submitting an inquiry create a lawyer–client relationship?",
      a: "No. A lawyer–client relationship is created only after a conflict-of-interest check is completed, a formal engagement letter is issued, and the agreed fee is received.",
    },
    {
      q: "Do you conduct a conflict-of-interest check before accepting a matter?",
      a: "Yes. A mandatory conflict-of-interest check is conducted prior to accepting any matter to ensure compliance with professional and ethical obligations.",
    },
    {
      q: "What areas of law does the firm practice?",
      a: "The firm practices in arbitration, corporate and commercial law, civil and criminal litigation, banking and SARFAESI matters, matrimonial disputes, property and RERA matters, labour and employment law, environmental law, and public interest litigation.",
    },
    {
      q: "Do you handle matters outside Delhi?",
      a: "Yes. While the firm is based in Delhi, we regularly represent clients before courts, tribunals, and arbitral forums across multiple jurisdictions in India.",
    },
    {
      q: "Do you handle arbitration and commercial disputes?",
      a: "Yes. The firm advises and represents clients in domestic and international commercial arbitration, enforcement and challenge of arbitral awards, and related court proceedings.",
    },
    {
      q: "Are consultations conducted online or in person?",
      a: "Consultations may be conducted either virtually or in person, depending on the nature of the matter and client preference.",
    },
    {
      q: "How are professional fees determined?",
      a: "Professional fees are determined based on the nature, complexity, and urgency of the matter. The fee structure and scope of work are clearly outlined in the engagement letter.",
    },
    {
      q: "Is client information kept confidential?",
      a: "Yes. All information shared with the firm is handled with strict confidentiality and professional discretion, in accordance with applicable ethical obligations.",
    },
    {
      q: "Do you provide legal advice through the website?",
      a: "No. The information provided on the website is for general informational purposes only and should not be construed as legal advice.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-gray-100 py-28" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-16 text-center">
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl font-semibold text-black"
          >
            Frequently Asked
            <span className="text-[var(--gold)]"> Questions</span>
          </h2>

          <p className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed">
            The following responses address common queries regarding our
            consultation process, areas of practice, and professional engagement.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border border-black/10 bg-white rounded-lg"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center p-6 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="text-base font-medium text-black">
                  {item.q}
                </span>
                <span className="text-xl text-[var(--gold)]">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-[15px] text-gray-700 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((f) => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": f.a,
              },
            })),
          }),
        }}
      />
    </section>
  );
}