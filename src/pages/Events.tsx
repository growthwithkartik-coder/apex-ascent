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
import EventGallery from "@/components/events/EventExpoCarousel";
import SplitSection from "@/components/events/SplitSection";
import split1 from '@/assets/split1.jpg';
import split2 from '@/assets/split2.jpg';
import PremiumCarousel from "@/components/events/PremiumCarousel";
import MembershipAccordion from "@/components/events/MembershipAccordion";
import FeatureCarousel from "@/components/events/FeatureCarousel";
import PowerSection from "@/components/events/PowerSection";
import ExpoCarousel from "@/components/events/ExpoCarousel";
const Events = () => {
  return (
    <div className="event-dark">
      <EventHeader />
      <main className="min-h-screen">
        {/* <EventHero /> */}
        <EventGallery/>
        <SplitSection
        id="experiences"
        image={split1}
        heading="Crafting Unforgettable Experiences"
        description="Every event is a masterpiece. From intimate gatherings of the world's most influential minds to grand spectacles that command international attention — we architect experiences that transcend the ordinary and enter the realm of the extraordinary."
        cta="Discover More"
      />
      <SplitSection
        image={split2}
        heading="Where Vision Becomes Reality"
        description="Our team of world-class producers, designers, and curators work in harmony to transform bold visions into breathtaking reality. Every detail is considered, every moment choreographed, every sensation elevated to perfection."
        cta="Our Process"
        reverse
      />
       <PremiumCarousel />
      <MembershipAccordion />
      <FeatureCarousel />
      <PowerSection/>
      <ExpoCarousel />



        {/* <EventSplitSection />
        <EventShowcaseCarousel />
        <EventFeatureCarousel />
        <EventMembership />
        <EventSimpleSection />
        <EventExpoCarousel />
        <EventRegistration />
        <EventFAQ />
        <Footer /> */}
      </main>
    </div>
  );
};

export default Events;
