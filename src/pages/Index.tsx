import { useReveal } from "@/hooks/useReveal";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoBar from "@/components/LogoBar";
import ProblemSection from "@/components/ProblemSection";
import StepsSection from "@/components/StepsSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FounderSection from "@/components/FounderSection";
import WhyUsSection from "@/components/WhyUsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Index() {
  useReveal();

  return (
    <>
      <div className="grain" />
      <Navbar />
      <HeroSection />
      <LogoBar />
      <ProblemSection />
      <StepsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FounderSection />
      <WhyUsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  );
}
