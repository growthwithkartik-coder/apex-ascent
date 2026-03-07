import Header from "@/components/Header";
import EventExpoCarousel from "@/components/events/EventExpoCarousel";
import SplitSection from "@/components/events/SplitSection";
import splitAbout from "@/assets/events/split-about.jpg";


import beautyPaegeant from "@/assets/events/Beauty_Paegant_Poster.mp4";
import coupleMarathon from "@/assets/events/COUPLE'S_MARATHON.webp";
import culinaryEvent from "@/assets/events/culinary_event.mp4";
import dating from "@/assets/events/dating.png";
import dthrone from "@/assets/events/dthrone.mp4";
import grandWine from "@/assets/events/grand_wine.mp4";

// grand_wine.mp4


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
          media={beautyPaegeant}
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
          media={coupleMarathon}
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
         <SplitSection
          media={culinaryEvent}
          badge="Our Process"
          heading="Where Vision Becomes Reality"
          description="Our team of world-class producers, designers, and curators work in harmony to transform bold visions into breathtaking reality. Every detail is considered, every moment choreographed."
          cta="Our Process"
          
          highlights={[
            "Creative direction & storytelling",
            "Technology-driven immersive experiences",
            "Global logistics & coordination",
          ]}
        />
         <SplitSection
          media={dating}
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
         <SplitSection
          media={dthrone}
          badge="Our Process"
          heading="Where Vision Becomes Reality"
          description="Our team of world-class producers, designers, and curators work in harmony to transform bold visions into breathtaking reality. Every detail is considered, every moment choreographed."
          cta="Our Process"
          
          highlights={[
            "Creative direction & storytelling",
            "Technology-driven immersive experiences",
            "Global logistics & coordination",
          ]}
        />
         <SplitSection
          media={coupleMarathon}
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
