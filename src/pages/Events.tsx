import Header from "@/components/Header";
import EventExpoCarousel from "@/components/events/EventExpoCarousel";
import SplitSection from "@/components/events/SplitSection";
import splitAbout from "@/assets/events/split-about.jpg";
import splitExperience from "@/assets/events/split-experience.jpg";
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
          media={splitAbout}
          badge="Our Philosophy"
          heading="Crafting Unforgettable Experiences"
          description="Every event is a masterpiece. From intimate gatherings of the world's most influential minds to grand spectacles that command international attention — we architect experiences that transcend the ordinary."
          cta="Discover More"
          highlights={[
            "Bespoke event conceptualization & design",
            "World-class venue curation",
            "End-to-end production management",
          ]}
        />
        <SplitSection
          media={splitExperience}
          badge="Our Process"
          heading="Where Vision Becomes Reality"
          description="Our team of world-class producers, designers, and curators work in harmony to transform bold visions into breathtaking reality. Every detail is considered, every moment choreographed."
          cta="Our Process"
          reverse
          highlights={[
            "Creative direction & storytelling",
            "Technology-driven immersive experiences",
            "Global logistics & coordination",
          ]}
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
