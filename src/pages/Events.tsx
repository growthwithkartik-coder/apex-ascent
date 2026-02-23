import EventHeader from "@/components/events/EventHeader";
import EventHero from "@/components/events/EventHero";
import EventSplitSection from "@/components/events/EventSplitSection";
import EventShowcaseCarousel from "@/components/events/EventShowcaseCarousel";
import EventFeatureCarousel from "@/components/events/EventFeatureCarousel";
import EventMembership from "@/components/events/EventMembership";
import EventSimpleSection from "@/components/events/EventSimpleSection";
import EventExpoCarousel from "@/components/events/EventExpoCarousel";
import EventRegistration from "@/components/events/EventRegistration";
import EventFAQ from "@/components/events/EventFAQ";
import Footer from "@/components/Footer";

const Events = () => {
  return (
    <div className="event-dark">
      <EventHeader />
      <main className="min-h-screen">
        <EventHero />
        <EventSplitSection />
        <EventShowcaseCarousel />
        <EventFeatureCarousel />
        <EventMembership />
        <EventSimpleSection />
        <EventExpoCarousel />
        <EventRegistration />
        <EventFAQ />
        <Footer />
      </main>
    </div>
  );
};

export default Events;
