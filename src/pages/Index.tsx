import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import SegmentedPaths from "@/components/SegmentedPaths";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import TechnologySection from "@/components/TechnologySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <SegmentedPaths />
      <StatsSection />
      <ServicesSection />
      <TechnologySection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
