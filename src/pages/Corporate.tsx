import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CorporateHero from "@/components/corporate/CorporateHero";
import CorporateIntro from "@/components/corporate/CorporateIntro";
import CorporateCategories from "@/components/corporate/CorporateCategories";
import CorporateSplit from "@/components/corporate/CorporateSplit";
import CorporateCharity from "@/components/corporate/CorporateCharity";

const Corporate = () => {
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
        <CorporateHero />
        <CorporateIntro />
        <CorporateCategories />
        <CorporateSplit />
        <CorporateCharity />
        <Footer />
      </main>
    </>
  );
};

export default Corporate;
