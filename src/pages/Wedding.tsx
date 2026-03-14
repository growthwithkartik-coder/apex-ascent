import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WeddingHero from "@/components/wedding/WeddingHero";
import WeddingIntro from "@/components/wedding/WeddingIntro";
import WeddingVenues from "@/components/wedding/WeddingVenues";
import WeddingProcess from "@/components/wedding/WeddingProcess";
import WeddingAccordion from "@/components/wedding/WeddingAccordion";
import WeddingShowcase from "@/components/wedding/WeddingShowcase";
import WeddingStory from "@/components/wedding/WeddingStory";
import WeddingGallery from "@/components/wedding/WeddingGallery";
import WeddingVideo from "@/components/wedding/WeddingVideo";

const Wedding = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <Header />
      <main className="bg-background min-h-screen">
        <WeddingHero />
        <WeddingIntro />
        <WeddingVenues />
        <WeddingProcess />
        <WeddingAccordion />
        <WeddingShowcase />
        <WeddingStory />
        <WeddingGallery />
        <WeddingVideo />
        <Footer />
      </main>
    </>
  );
};

export default Wedding;
