import AboutSection from "./components/AboutSection";
import ContactPage from "./components/ContactPage";
import ExpertiseSection from "./components/ExpertiseSection";
import FAQSection from "./components/FaqSection";
import Hero from "./components/Hero";
import ProcessSection from "./components/ProcessSection";
import TeamSection from "./components/TeamSection";
import WhySection from "./components/WhySection";
export const metadata = {
  title: "Ezee Legal | Strategic Legal Solutions in India",
  description:
    "Ezee Legal is an India-based law firm providing strategic legal representation across arbitration, corporate and commercial advisory, and civil and criminal litigation with a pan-India practice.",
  keywords: [
    "ezeelegal",
    "law firm in India",
    "arbitration lawyers India",
    "corporate law firm",
    "commercial litigation",
    "legal advisory India",
  ],
  alternates: {
    canonical: "https://www.ezeelegal.in",
  },
  openGraph: {
    title: "Ezee Legal | Strategic Legal Solutions",
    description:
      "Ezee Legal offers professional legal representation across arbitration, corporate advisory, and litigation matters in India.",
    url: "https://www.ezeelegal.in",
    siteName: "Ezee Legal",
    images: [
      {
        url: "https://www.ezeelegal.in/og.jpeg",
        width: 1200,
        height: 630,
        alt: "Ezee Legal – Strategic Legal Solutions in India",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function Home() {
  return (
    <>
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://www.ezeelegal.in/#organization",
          "name": "Ezee Legal",
          "url": "https://www.ezeelegal.in",
          "description":
            "Ezee Legal is an India-based law firm providing strategic legal representation across arbitration, corporate advisory, and litigation matters.",
          "areaServed": {
            "@type": "Country",
            "name": "India"
          }
        },
        {
          "@type": "LegalService",
          "@id": "https://www.ezeelegal.in/#legalservice",
          "name": "Ezee Legal Law Firm",
          "url": "https://www.ezeelegal.in",
          "provider": {
            "@id": "https://www.ezeelegal.in/#organization"
          },
          "areaServed": {
            "@type": "Country",
            "name": "India"
          },
          "serviceType": [
            "Arbitration",
            "Corporate Advisory",
            "Commercial Litigation",
            "Civil Litigation",
            "Criminal Litigation",
            "Banking and SARFAESI",
            "Matrimonial Law",
            "Property and RERA",
            "Labour and Employment",
            "Environmental Law",
            "Public Interest Litigation"
          ]
        },
        {
          "@type": "WebSite",
          "@id": "https://www.ezeelegal.in/#website",
          "url": "https://www.ezeelegal.in",
          "name": "Ezee Legal",
          "publisher": {
            "@id": "https://www.ezeelegal.in/#organization"
          }
        },
        {
          "@type": "FAQPage",
          "@id": "https://www.ezeelegal.in/#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How do I initiate a consultation with ezeelegal?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You may initiate contact through the website contact form or by writing to our official email address. Submission of an inquiry does not create a lawyer–client relationship."
              }
            },
            {
              "@type": "Question",
              "name": "Does submitting an inquiry create a lawyer–client relationship?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. A lawyer–client relationship is created only after a conflict-of-interest check is completed, a formal engagement letter is issued, and the agreed fee is received."
              }
            },
            {
              "@type": "Question",
              "name": "What areas of law does the firm practice?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The firm practices in arbitration, corporate and commercial law, civil and criminal litigation, banking and SARFAESI matters, matrimonial disputes, property and RERA matters, labour and employment law, environmental law, and public interest litigation."
              }
            },
            {
              "@type": "Question",
              "name": "Is client information kept confidential?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. All information shared with the firm is handled with strict confidentiality and professional discretion, in accordance with applicable ethical obligations."
              }
            }
          ]
        }
      ]
    }),
  }}
/>
      <Hero />
      
      <AboutSection/>
      <ExpertiseSection />
      <WhySection/>
      <TeamSection/>
      <ProcessSection/>
      <FAQSection/>
      <ContactPage/>
      
    </>
  );
}