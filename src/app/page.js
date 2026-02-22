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

export default function Home() {
  return (
    <>
      <Hero />
      {/* <ServiceIntro /> */}
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