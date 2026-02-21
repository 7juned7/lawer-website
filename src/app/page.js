import AboutSection from "./components/AboutSection";
import ExpertiseSection from "./components/ExpertiseSection";
import Hero from "./components/Hero";
import ServiceIntro from "./components/ServiceIntro";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <ServiceIntro /> */}
      <AboutSection/>
      <ExpertiseSection />
    </>
  );
}