import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import hero1 from '@/assets/events/section3/economic_patriots.webp';
import hero2 from '@/assets/events/section3/india_patriots.webp';
import hero3 from '@/assets/events/section3/us_patroits.webp';
import hero4 from '@/assets/events/section3/economic_patriots.webp';

import split1 from '@/assets/split1.jpg';
import split2 from '@/assets/split2.jpg';

gsap.registerPlugin(ScrollTrigger);

const events = [
  { 
    image: hero1, 
    title: 'Economic Patriots Summit Europe', 
    description: "Calling all European business minds! Get ready for an eye-opening summit that'll shake up how we think about Europe's money matters."
  },
  { 
    image: hero2, 
    title: 'Economic Patriots Summit India', 
    description: "Hey India! Ready to be part of something big? Join us for a game-changing summit where we're talking real business, real growth, and real opportunities."
  },
  { 
    image: hero3, 
    title: 'Economic Patriots Summit USA', 
    description: "America, let's talk business! Join us for a no-nonsense summit where we cut through the fluff and focus on what really works in today's economy."
  },
];

const PremiumCarousel = () => {
  const [active, setActive] = useState(2);
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
      }
    );
  }, []);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      const offset = i - active;
      const absOffset = Math.abs(offset);

      gsap.to(card, {
        x: offset * 320,
        scale: absOffset === 0 ? 1 : 0.85 - absOffset * 0.05,
        opacity: absOffset > 2 ? 0 : 1 - absOffset * 0.2,
        filter: absOffset === 0 ? 'blur(0px)' : `blur(${absOffset * 2}px)`,
        zIndex: 10 - absOffset,
        duration: 0.8,
        ease: 'power3.out',
      });
    });
  }, [active]);

  return (
    <section ref={sectionRef} id="events" className="section-padding overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="heading-lg text-foreground mb-4">Premium Events</h2>
        <p className="body-lg max-w-xl mx-auto">Curated experiences that define luxury.</p>
      </div>

      <div ref={carouselRef} className="relative h-[450px] flex items-center justify-center">
        {events.map((event, i) => (
          <div
            key={i}
            ref={el => { cardsRef.current[i] = el; }}
            className="absolute w-[280px] md:w-[320px] cursor-pointer group"
            onClick={() => setActive(i)}
          >
            <div className={`overflow-hidden transition-all duration-500 ${i === active ? 'border-gold-glow border' : 'border border-border'
              }`}>
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-xl font-semibold text-foreground">{event.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{event.date} · {event.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center gap-3 mt-8">
        {events.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-[2px] transition-all duration-500 ${i === active ? 'w-8 bg-primary' : 'w-4 bg-muted-foreground/30'
              }`}
            aria-label={`Go to event ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default PremiumCarousel;
