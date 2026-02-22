export const metadata = {
  title: "Legal Disclaimer | N3&M Imperium Chambers",
  description:
    "Legal disclaimer in compliance with the Bar Council of India rules.",
};

export default function DisclaimerPage() {
  return (
    <main className="bg-black text-white">
      <section className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6">

          <h1 className="text-3xl md:text-4xl font-semibold mb-8">
            Legal <span className="text-[var(--gold)]">Disclaimer</span>
          </h1>

          <div className="space-y-6 text-gray-300 text-sm leading-relaxed">

            <p>
              Under the rules of the Bar Council of India, advocates and law firms
              are prohibited from soliciting work or advertising in any manner.
              By accessing this website, the user acknowledges and confirms that
              they are seeking information about <strong>N3&amp;M Imperium Chambers</strong>
              voluntarily and without any solicitation, advertisement, or
              inducement by the firm or its members.
            </p>

            <p>
              The information provided on this website is for general
              informational purposes only and does not constitute legal advice
              or a legal opinion.
            </p>

            <p>
              Accessing or using this website does not create a lawyer–client
              relationship between the user and N3&amp;M Imperium Chambers. A
              lawyer–client relationship shall arise only upon execution of a
              formal engagement letter.
            </p>

            <p>
              N3&amp;M Imperium Chambers shall not be liable for any consequences
              of actions taken by users relying on information provided on this
              website.
            </p>

            <p>
              All content on this website is the intellectual property of
              N3&amp;M Imperium Chambers and may not be reproduced without prior
              written permission.
            </p>

            <p>
              By continuing to access this website, the user confirms that they
              have read and understood this disclaimer.
            </p>

          </div>

        </div>
      </section>
    </main>
  );
}