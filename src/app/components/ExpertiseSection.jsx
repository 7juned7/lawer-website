/* ================= ICONS ================= */

import Image from "next/image";

function ArbitrationIcon() {
  return <Image src="/icons/intermediary.png" alt="Arbitration icon" width={56} height={56} />;
}
function CorporateIcon() {
  return <Image src="/icons/commercial.png" alt="Corporate law icon" width={56} height={56} />;
}
function CriminalIcon() {
  return <Image src="/icons/criminal-law.png" alt="Criminal law icon" width={56} height={56} />;
}
function CivilIcon() {
  return <Image src="/icons/civil-rights.png" alt="Civil law icon" width={56} height={56} />;
}
function BankingIcon() {
  return <Image src="/icons/banking-law.png" alt="Banking law icon" width={56} height={56} />;
}
function FamilyIcon() {
  return <Image src="/icons/family.png" alt="Family law icon" width={56} height={56} />;
}

/* ================= DATA ================= */

const expertiseData = [
  { title: "Arbitration", desc: "Domestic and international commercial arbitration matters.", seo: "Domestic and international commercial arbitration, enforcement and challenge of arbitral awards under the Arbitration and Conciliation Act, 1996.", icon: <ArbitrationIcon /> },
  { title: "Commercial Law", desc: "Business contracts and commercial dispute resolution.", seo: "Commercial contracts, joint ventures, and business dispute resolution.", icon: <CorporateIcon /> },
  { title: "Corporate Advisory", desc: "Corporate structuring and regulatory compliance.", seo: "Corporate structuring, regulatory compliance, mergers, acquisitions, and investment advisory.", icon: <CorporateIcon /> },
  { title: "Criminal Litigation", desc: "Trials, appeals, and white-collar offences.", seo: "Criminal trials, appeals, white-collar crimes, and corporate criminal liability.", icon: <CriminalIcon /> },
  { title: "Bail Matters", desc: "Regular, anticipatory, and interim bail.", seo: "Regular, anticipatory, and interim bail applications before competent courts.", icon: <CriminalIcon /> },
  { title: "Civil Litigation", desc: "Civil and commercial court disputes.", seo: "Civil and commercial suits, injunctions, and recovery proceedings.", icon: <CivilIcon /> },
  { title: "Banking & SARFAESI", desc: "Financial recovery and SARFAESI matters.", seo: "Banking disputes and matters under the SARFAESI Act.", icon: <BankingIcon /> },
  { title: "Matrimonial Law", desc: "Divorce, maintenance, and custody disputes.", seo: "Matrimonial disputes, divorce proceedings, maintenance, and custody matters.", icon: <FamilyIcon /> },
  { title: "Property & RERA", desc: "Property disputes and RERA litigation.", seo: "Property disputes and matters under the Real Estate (Regulation and Development) Act.", icon: <CivilIcon /> },
  { title: "Labour & Employment", desc: "Employment disputes and service matters.", seo: "Labour and employment disputes, service matters, and compliance issues.", icon: <CorporateIcon /> },
  { title: "Environmental Law", desc: "Environmental compliance and litigation.", seo: "Environmental compliance, regulatory litigation, and environmental protection matters.", icon: <CivilIcon /> },
  { title: "Public Interest Litigation", desc: "Constitutional and public law issues.", seo: "Public interest litigation involving constitutional, human rights, and public law issues.", icon: <ArbitrationIcon /> },
];

/* ================= COMPONENT ================= */

export default function ExpertiseSection() {
  return (
    <section className="bg-[var(--bg-soft)] py-28" aria-labelledby="expertise-heading">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 id="expertise-heading" className="text-3xl md:text-4xl font-semibold text-[var(--text-dark)]">
            Areas of <span className="text-[var(--accent)]">Legal Expertise</span>
          </h2>

          <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
            <strong>ezeelegal</strong> provides focused legal representation across
            <strong> arbitration, corporate, civil, and criminal matters</strong> with a pan-India practice.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {expertiseData.map((item, index) => (
            <article
              key={index}
              className="bg-white rounded-xl p-7 min-h-[190px]
                         border border-black/5
                         shadow-sm hover:shadow-lg
                         transition-all duration-300
                         flex flex-col items-center text-center"
            >
              <div className="mb-4">{item.icon}</div>

              <h3 className="text-lg font-semibold text-[var(--text-dark)]">
                {item.title}
              </h3>

              <p className="mt-2 text-[15px] text-gray-600 leading-relaxed">
                {item.desc}
              </p>

              {/* SEO-only */}
              <p className="sr-only">{item.seo}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}