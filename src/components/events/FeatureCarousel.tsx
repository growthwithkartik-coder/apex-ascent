import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import hero1 from '@/assets/hero1.jpg';
import hero2 from '@/assets/hero2.jpg';
import hero3 from '@/assets/hero3.jpg';
import split1 from '@/assets/split1.jpg';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { image: hero1, title: 'Global Reach', description: 'Events spanning 40+ countries across 6 continents.' },
  { image: hero2, title: 'Cinematic Production', description: 'Hollywood-level production for every experience.' },
  { image: hero3, title: 'VIP Curation', description: 'Every detail handcrafted for discerning tastes.' },
  { image: split1, title: 'Legacy Building', description: 'Creating moments that define generations.' },
];

const FeatureCarousel = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [hovered, setHovered] = useState(-1);

  useEffect(() => {
    if (!sectionRef.current) return;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      gsap.fromTo(
        card,
        {
          rotateY: i % 2 === 0 ? -15 : 15,
          opacity: 0,
          y: 80,
          scale: 0.9,
        },
        {
          rotateY: 0,
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          delay: i * 0.15,
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="section-padding" style={{ perspective: '1200px' }}>
      <div className="text-center mb-16">
        <h2 className="heading-lg text-foreground mb-4">Why Empire</h2>
        <p className="body-lg max-w-xl mx-auto">The pillars of an extraordinary experience.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {features.map((feature, i) => (
          <div
            key={i}
            ref={el => { cardsRef.current[i] = el; }}
            className={`relative overflow-hidden cursor-pointer transition-all duration-500 group ${
              hovered === i ? 'border-gold-glow border' : 'border border-border'
            }`}
            style={{ transformStyle: 'preserve-3d' }}
            onMouseEnter={() => {
              setHovered(i);
              gsap.to(cardsRef.current[i], { scale: 1.03, rotateY: 5, duration: 0.4, ease: 'power2.out' });
            }}
            onMouseLeave={() => {
              setHovered(-1);
              gsap.to(cardsRef.current[i], { scale: 1, rotateY: 0, duration: 0.4, ease: 'power2.out' });
            }}
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
            {/* Subtle glow on hover */}
            {hovered === i && (
              <div className="absolute inset-0 pointer-events-none" style={{
                background: 'radial-gradient(circle at 50% 100%, hsla(42, 78%, 55%, 0.08), transparent 60%)',
              }} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCarousel;
