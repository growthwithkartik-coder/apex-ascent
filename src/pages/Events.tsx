import EventHeader from "@/components/events/EventHeader";
import EventHero from "@/components/events/EventHero";
import EventSplitSection from "@/components/events/EventSplitSection";
import EventShowcaseCarousel from "@/components/events/EventShowcaseCarousel";
import EventMembership from "@/components/events/EventMembership";
import EventFeatureCarousel from "@/components/events/EventFeatureCarousel";
import EventSimpleSection from "@/components/events/EventSimpleSection";
import EventExpoCarousel from "@/components/events/EventExpoCarousel";
import Footer from "@/components/Footer";

const Events = () => {
  return (
    <>
      <EventHeader />
      <main className="bg-background min-h-screen">
        <EventHero />
        <div className="section-divider" />
        <EventSplitSection />
        <div className="section-divider" />
        <EventShowcaseCarousel />
        <div className="section-divider" />
        <EventMembership />
        <div className="section-divider" />
        <EventFeatureCarousel />
        <div className="section-divider" />
        <EventSimpleSection />
        <div className="section-divider" />
        <EventExpoCarousel />
        <div className="section-divider" />
        <Footer />
      </main>
    </>
  );
};

export default Events;
