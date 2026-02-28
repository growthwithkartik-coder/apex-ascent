import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import HomeHeader from "@/components/HomeHeader";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import ServicesCarousel from "@/components/ServicesCarousel";
import SectorsCarousel from "@/components/SectorsCarousel";
import TabsSection from "@/components/TabsSection";
import CreativeCarousel from "@/components/CreativeCarousel";
import Footer from "@/components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <HomeHeader />
      <main className="home-dark min-h-screen">
        <HeroSection />
        <div className="section-divider" />
        <VideoSection />
        <div className="section-divider" />
        <ServicesCarousel />
        <div className="section-divider" />
        <SectorsCarousel />
        <div className="section-divider" />
        <TabsSection />
        <div className="section-divider" />
        <CreativeCarousel />
        <div className="section-divider" />
        <Footer />
      </main>
    </>
  );
};

export default Index;
