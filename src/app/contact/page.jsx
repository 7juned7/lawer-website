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
  openGraph: {
    title: "Contact ezeelegal",
    description:
      "Get in touch with ezeelegal for professional legal consultation and inquiries across arbitration, corporate, and litigation matters.",
    url: "https://www.ezeelegal.com/contact",
    siteName: "ezeelegal",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function Page() {
  return (
    <main>
      <ContactPage />
    </main>
  );
}