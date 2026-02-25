import ContactPage from "../components/ContactPage";
export const metadata = {
  title: "Contact Us | ezeelegal",
  description:
    "Contact ezeelegal for professional legal inquiries. Reach out to our team for consultation regarding arbitration, corporate and commercial advisory, and litigation matters in India.",
  keywords: [
    "ezeelegal contact",
    "law firm contact India",
    "legal consultation",
    "arbitration lawyers India",
    "corporate law firm contact",
  ],
  alternates: {
    canonical: "https://www.ezeelegal.in/contact",
  },
  openGraph: {
    title: "Contact ezeelegal",
    description:
      "Get in touch with ezeelegal for professional legal consultation and inquiries across arbitration, corporate, and litigation matters.",
    url: "https://www.ezeelegal.in/contact",
    siteName: "ezeelegal",
    type: "website",
    images: [
      {
        url: "https://www.ezeelegal.in/og.jpeg",
        width: 1200,
        height: 630,
        alt: "Contact ezeelegal Law Firm",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function Page() {
  return (
    <main>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://www.ezeelegal.in/#organization",
          "name": "ezeelegal",
          "url": "https://www.ezeelegal.in",
          "logo": "https://www.ezeelegal.in/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Legal Consultation",
            "areaServed": "IN",
            "availableLanguage": ["English"]
          }
        },
        {
          "@type": "LegalService",
          "@id": "https://www.ezeelegal.in/#legalservice",
          "name": "ezeelegal Law Firm",
          "url": "https://www.ezeelegal.in/contact",
          "provider": {
            "@id": "https://www.ezeelegal.in/#organization"
          },
          "areaServed": {
            "@type": "Country",
            "name": "India"
          }
        },
        {
          "@type": "ContactPage",
          "@id": "https://www.ezeelegal.in/contact#contactpage",
          "url": "https://www.ezeelegal.in/contact",
          "name": "Contact ezeelegal"
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.ezeelegal.in"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Contact",
              "item": "https://www.ezeelegal.in/contact"
            }
          ]
        }
      ]
    }),
  }}
/>
      <ContactPage />
    </main>
  );
}