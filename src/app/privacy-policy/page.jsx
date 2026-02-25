export const metadata = {
  title: "Privacy Policy | ezeelegal",
  description:
    "Privacy policy describing data collection, usage, and confidentiality practices followed by ezeelegal.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[var(--bg-dark)] text-white">
      <section className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6">

          <h1 className="text-3xl md:text-4xl font-semibold mb-8">
            Privacy <span className="text-[var(--accent)]">Policy</span>
          </h1>

          <div className="space-y-6 text-gray-300 text-sm leading-relaxed">

            <p>
              <strong>ezeelegal</strong> is committed to protecting the privacy and
              confidentiality of visitors to this website.
            </p>

            <h2 className="text-lg font-semibold text-white">
              Information Collection
            </h2>
            <p>
              We may collect personal information such as name, email address,
              phone number, and other details voluntarily provided through forms
              on this website.
            </p>

            <h2 className="text-lg font-semibold text-white">
              Use of Information
            </h2>
            <p>
              Information collected is used solely for responding to inquiries
              and administrative communication. It is not used for advertising
              or solicitation.
            </p>

            <h2 className="text-lg font-semibold text-white">
              Confidentiality
            </h2>
            <p>
              All information is handled with strict confidentiality, subject to
              applicable laws and professional obligations.
            </p>

            <h2 className="text-lg font-semibold text-white">
              Data Security
            </h2>
            <p>
              Reasonable measures are implemented to protect information from
              unauthorized access or misuse.
            </p>

            <h2 className="text-lg font-semibold text-white">
              Third-Party Links
            </h2>
            <p>
              This website may contain links to third-party websites. We are not
              responsible for the privacy practices of such websites.
            </p>

            {/* GOOGLE ANALYTICS */}
            <h2 className="text-lg font-semibold text-white">
              Analytics and Cookies
            </h2>
            <p>
              This website uses Google Analytics, a web analytics service
              provided by Google Inc., to understand how visitors interact with
              the website. Google Analytics uses cookies and similar technologies
              to collect information such as pages visited, time spent on the
              site, and general usage patterns.
            </p>

            <p>
              The information collected through Google Analytics is aggregated
              and anonymized and is used solely for improving website
              performance and user experience. No personally identifiable
              information is intentionally collected through analytics tools.
            </p>

            <p>
              Users may choose to disable cookies through their individual
              browser settings if they prefer not to participate in analytics
              tracking.
            </p>

            <h2 className="text-lg font-semibold text-white">
              Updates
            </h2>
            <p>
              This Privacy Policy may be updated from time to time without prior
              notice.
            </p>

          </div>

        </div>
      </section>
    </main>
  );
}