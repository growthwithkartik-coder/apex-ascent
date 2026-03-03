import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import SplitSection from '@/components/SplitSection';
import PremiumCarousel from '@/components/PremiumCarousel';
import MembershipAccordion from '@/components/MembershipAccordion';
import FeatureCarousel from '@/components/FeatureCarousel';
import PowerSection from '@/components/PowerSection';
import ExpoCarousel from '@/components/ExpoCarousel';
import Footer from '@/components/Footer';
import split1 from '@/assets/split1.jpg';
import split2 from '@/assets/split2.jpg';

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <HeroSlider />
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
      <PowerSection />
      <ExpoCarousel />
      <Footer />
    </main>
  );
};

export default Index;
