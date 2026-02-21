export default function WhySection() {
  return (
    <section
      className="bg-gray-100 py-28"
      aria-labelledby="why-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <h2
            id="why-heading"
            className="text-3xl md:text-4xl font-semibold text-black"
          >
            Why
            <span className="text-[var(--gold)]"> N3&amp;M Imperium Chambers</span>
          </h2>

          <p className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed">
            Clients choose our firm for its
            <strong> focused expertise</strong>,
            <strong> strategic approach</strong>, and
            <strong> unwavering professional integrity</strong>.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">

          {/* Vertical Line */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-[var(--gold)]/40" />

          <div className="space-y-14">

            {[
              {
                title: "Focused Legal Expertise",
                text: "Concentrated practice in arbitration, corporate, commercial, civil, and criminal matters ensures depth, precision, and effective legal representation.",
              },
              {
                title: "Strategic & Commercial Approach",
                text: "Every matter is approached with a balance of legal strategy and commercial practicality, aligned with the client’s long-term objectives.",
              },
              {
                title: "Pan-India Representation",
                text: "While based in Delhi, the firm regularly represents clients before courts and tribunals across multiple jurisdictions in India.",
              },
              {
                title: "Partner-Led Attention",
                text: "Clients receive direct involvement and oversight, ensuring accountability, clarity, and consistent legal strategy.",
              },
              {
                title: "Dispute Resolution Strength",
                text: "Strong command over arbitration, litigation, enforcement, and interim relief proceedings before courts and arbitral tribunals.",
              },
              {
                title: "Confidentiality & Professional Ethics",
                text: "Strict confidentiality, transparent communication, and adherence to professional standards form the foundation of every engagement.",
              },
            ].map((item, index) => (
              <article
                key={index}
                className="relative pl-14"
              >
                {/* Dot */}
                <span className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-[var(--gold)] bg-gray-100" />

                <h3 className="text-lg font-semibold text-black">
                  {item.title}
                </h3>

                <p className="mt-3 text-[15px] text-gray-700 leading-relaxed">
                  {item.text}
                </p>
              </article>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}