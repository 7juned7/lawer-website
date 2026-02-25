import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsappButton";

export const metadata = {
  title: {
    default: "Ezee Legal | Strategic Legal Solutions",
    template: "%s | Ezee Legal",
  },
  description:
    "Ezee Legal is an India-based law firm providing strategic legal representation across arbitration, corporate and commercial advisory, and civil and criminal litigation with a pan-India practice.",
  openGraph: {
    title: "Ezee Legal | Strategic Legal Solutions",
    description:
      "Ezee Legal offers professional legal representation across arbitration, corporate advisory, and litigation matters in India.",
    siteName: "Ezee Legal",
    url: "https://www.ezeelegal.in",
    images: [
      {
        url: "/og.jpeg",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ LegalService Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Ezee Legal",
              "url": "https://www.ezeelegal.in",
              "logo": "https://www.ezeelegal.in/logo.png",
              "image": "https://www.ezeelegal.in/og.jpeg",
              "description":
                "Ezee Legal is an India-based law firm providing strategic legal representation across arbitration, corporate advisory, and litigation matters.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN",
              },
              "areaServed": {
                "@type": "Country",
                "name": "India",
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Legal Consultation",
                "email": "ezeelegal05@gmail.com",
              },
              "sameAs": [
                "https://www.instagram.com/ezeelegal/",
                "https://www.linkedin.com/in/nazma-nazrul-65b450318/",
              ],
            }),
          }}
        />
      </head>

      <body>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}