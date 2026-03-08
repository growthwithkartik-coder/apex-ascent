import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import hero1 from '@/assets/hero1.jpg';
import hero2 from '@/assets/hero2.jpg';
import hero3 from '@/assets/hero3.jpg';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { 
    image: hero1, 
    title: "D'Yacht Party", 
    heading: 'Sail into Luxury & Celebration',
    description: 'Step aboard a magnificent yacht and indulge in an unforgettable evening of luxury, music, and entertainment. Enjoy breathtaking ocean views, gourmet dining, and an exclusive party atmosphere like no other.',
    price: '€749',
    action: 'Sail'
  },
  { 
    image: hero2, 
    title: 'Oktober fest', 
    heading: 'Celebrate Oktoberfest in Style',
    description: 'Join us for a festive Oktoberfest celebration filled with traditional Bavarian music, authentic German cuisine, and the finest selection of beers. Experience the joy of this world-famous festival with exciting games, live performances, and a vibrant atmosphere.',
    price: '€700',
    action: 'Oktoberfest'
  },
  { 
    image: hero3, 
    title: 'Star Wars Theme Party', 
    heading: 'Star Wars Theme Party',
    description: 'Step into a world of cinematic wonder with our exclusive Movie Theme Event. Enjoy immersive decor, live performances, and themed experiences inspired by blockbuster hits.',
    price: '€800',
    action: 'Star'
  },
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full mb-3">
                {feature.price}
              </span>
              <h3 className="font-display text-xl font-semibold text-foreground mb-1">{feature.title}</h3>
              <p className="text-sm text-primary/80 mb-2">{feature.heading}</p>
              <p className="text-sm text-muted-foreground line-clamp-2">{feature.description}</p>
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
