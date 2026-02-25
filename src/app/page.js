import AboutSection from "./components/AboutSection";
import ContactPage from "./components/ContactPage";
import ExpertiseSection from "./components/ExpertiseSection";
import FAQSection from "./components/FaqSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProcessSection from "./components/ProcessSection";
import ServiceIntro from "./components/ServiceIntro";
import TeamSection from "./components/TeamSection";
import WhySection from "./components/WhySection";
export const metadata = {
  title: "ezeelegal | Strategic Legal Solutions in India",
  description:
    "ezeelegal is an India-based law firm providing strategic legal representation across arbitration, corporate and commercial advisory, and civil and criminal litigation with a pan-India practice.",
  keywords: [
    "ezeelegal",
    "law firm in India",
    "arbitration lawyers India",
    "corporate law firm",
    "commercial litigation",
    "legal advisory India",
  ],
  openGraph: {
    title: "ezeelegal | Strategic Legal Solutions",
    description:
      "ezeelegal offers professional legal representation across arbitration, corporate advisory, and litigation matters in India.",
    url: "https://www.ezeelegal.com",
    siteName: "ezeelegal",
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