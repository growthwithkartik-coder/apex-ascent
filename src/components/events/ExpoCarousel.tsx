import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import expoPharma from '@/assets/expo-pharma.jpg';
import expoTravel from '@/assets/expo-travel.jpg';
import expoTech from '@/assets/expo-tech.jpg';
import expoRealEstate from '@/assets/expo-realestate.jpg';

gsap.registerPlugin(ScrollTrigger);

const expos = [
  { image: expoPharma, title: 'Pharma Expo', description: 'Pioneering health innovation on a global stage.' },
  { image: expoTravel, title: 'Travel Expo', description: 'Luxury destinations and exclusive getaways.' },
  { image: expoTech, title: 'Tech Expo', description: 'The future of technology, unveiled.' },
  { image: expoRealEstate, title: 'Real Estate Expo', description: 'Premium properties and architectural marvels.' },
];

const ExpoCarousel = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [hovered, setHovered] = useState(-1);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { y: 80, opacity: 0, scale: 0.95 },
        {
          y: 0, opacity: 1, scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          delay: i * 0.12,
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} id="expos" className="section-padding">
      <div className="text-center mb-16">
        <h2 className="heading-lg text-foreground mb-4">World Expos</h2>
        <p className="body-lg max-w-xl mx-auto">Industry-defining exhibitions across the globe.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {expos.map((expo, i) => (
          <div
            key={i}
            ref={el => { cardsRef.current[i] = el; }}
            className="relative overflow-hidden cursor-pointer group"
            onMouseEnter={() => {
              setHovered(i);
              gsap.to(cardsRef.current[i], { y: -8, scale: 1.02, duration: 0.4, ease: 'power2.out' });
            }}
            onMouseLeave={() => {
              setHovered(-1);
              gsap.to(cardsRef.current[i], { y: 0, scale: 1, duration: 0.4, ease: 'power2.out' });
            }}
          >
            <div className={`overflow-hidden transition-all duration-500 ${
              hovered === i ? 'border-gold-glow border' : 'border border-border'
            }`}>
              <img
                src={expo.image}
                alt={expo.title}
                className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">{expo.title}</h3>
                <p className="text-sm text-muted-foreground">{expo.description}</p>
              </div>
              {hovered === i && (
                <div className="absolute inset-0 pointer-events-none" style={{
                  background: 'radial-gradient(circle at 50% 100%, hsla(42, 78%, 55%, 0.1), transparent 60%)',
                }} />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpoCarousel;
