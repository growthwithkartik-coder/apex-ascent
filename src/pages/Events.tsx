import Header from "@/components/Header";
import EventExpoCarousel from "@/components/events/EventExpoCarousel";
import SplitSection from "@/components/events/SplitSection";
import split1 from "@/assets/split1.jpg";
import split2 from "@/assets/split2.jpg";
import PremiumCarousel from "@/components/events/PremiumCarousel";
import MembershipAccordion from "@/components/events/MembershipAccordion";
import FeatureCarousel from "@/components/events/FeatureCarousel";
import PowerSection from "@/components/events/PowerSection";
import ExpoCarousel from "@/components/events/ExpoCarousel";

const Events = () => {
  return (
    <div className="event-dark">
      <Header />
      <main className="min-h-screen">
        <EventExpoCarousel />
        <SplitSection
          id="experiences"
          media={split1}
          heading="Crafting Unforgettable Experiences"
          description="Every event is a masterpiece. From intimate gatherings of the world's most influential minds to grand spectacles that command international attention — we architect experiences that transcend the ordinary and enter the realm of the extraordinary."
          cta="Discover More"
        />
        <SplitSection
          media={split2}
          heading="Where Vision Becomes Reality"
          description="Our team of world-class producers, designers, and curators work in harmony to transform bold visions into breathtaking reality. Every detail is considered, every moment choreographed, every sensation elevated to perfection."
          cta="Our Process"
          reverse
        />
        <PremiumCarousel />
        <MembershipAccordion />
        <FeatureCarousel />
        <PowerSection />
        <ExpoCarousel />
      </main>
    </div>
  );
};

export default Events;
