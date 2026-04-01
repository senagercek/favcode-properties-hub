import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedProperties from "@/components/FeaturedProperties";
import WhyUs from "@/components/WhyUs";
import StatsSection from "@/components/StatsSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedProperties />
      <WhyUs />
      <StatsSection />
      <BlogSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
