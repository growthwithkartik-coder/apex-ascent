import EventHeader from "@/components/events/EventHeader";
import EventHero from "@/components/events/EventHero";
import EventSplitSection from "@/components/events/EventSplitSection";
import EventShowcaseCarousel from "@/components/events/EventShowcaseCarousel";
import EventMembership from "@/components/events/EventMembership";
import EventFeatureCarousel from "@/components/events/EventFeatureCarousel";
import EventSimpleSection from "@/components/events/EventSimpleSection";
import EventExpoCarousel from "@/components/events/EventExpoCarousel";
import Footer from "@/components/Footer";
import splitAbout from "@/assets/events/split-about.jpg";
import splitExperience from "@/assets/events/split-experience.jpg";

const Events = () => {
  return (
    <>
      <EventHeader />
      <main className="bg-background min-h-screen">
        <EventHero />
        <div className="section-divider" />
        <EventSplitSection
          image={splitAbout}
          heading="Crafting Moments That Define Legacies"
          description="At DemiGod House, we believe every event is a canvas for storytelling. Our team of seasoned professionals brings together creative vision, meticulous planning, and flawless execution to deliver experiences that transcend expectations. From concept to completion, we handle every detail with the precision and passion that defines luxury event management."
          cta="Discover Our Approach"
        />
        <div className="section-divider" />
        <EventSplitSection
          image={splitExperience}
          heading="Immersive Experiences, Elevated Standards"
          description="Every touchpoint matters. From the first invitation to the final farewell, we curate immersive experiences that engage all senses. Our bespoke approach ensures that your event reflects your unique identity, leaving guests with memories that last a lifetime. We don't just plan events — we architect unforgettable journeys."
          cta="View Our Portfolio"
          reversed
        />
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
