import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import expoPharma from '@/assets/expo-pharma.jpg';
import expoTravel from '@/assets/expo-travel.jpg';
import expoTech from '@/assets/expo-tech.jpg';
import expoRealEstate from '@/assets/expo-realestate.jpg';

gsap.registerPlugin(ScrollTrigger);

const expos = [
  { 
    image: expoPharma, 
    title: 'Pharma Expo', 
    description: 'A Pharma Expo is a specialized trade exhibition focused on the pharmaceutical industry. It serves as a platform for pharmaceutical companies, healthcare professionals, researchers, and manufacturers to showcase innovations, products, and technologies related to medicine, drug development, and healthcare solutions.' 
  },
  { 
    image: expoTravel, 
    title: 'Travel & Tourism Expo', 
    description: 'A Travel & Tourism Expo is a large-scale event that brings together travel agencies, tourism boards, airlines, hospitality brands, and adventure companies to showcase destinations, travel services, and experiences. These expos serve as a hub for networking, business collaborations, and discovering new travel trends.' 
  },
  { 
    image: expoTech, 
    title: 'Tech Expo', 
    description: 'A Tech Expo is a large-scale event that showcases the latest advancements in technology, innovation, and digital transformation. It serves as a platform for tech companies, startups, developers, and industry leaders to present their cutting-edge products, software, and solutions.' 
  },
  { 
    image: expoRealEstate, 
    title: "D'estate Expo", 
    description: "D'Estate Expo is a leading real estate exhibition that brings together industry experts, investors, developers, and homebuyers under one roof. Whether you're looking for residential, commercial, or luxury properties, this expo offers exclusive opportunities to explore top-tier real estate projects and investment prospects." 
  },
  { 
    image: expoPharma, 
    title: 'Career Expo', 
    description: "A Career Expo is a premier event where job seekers, professionals, and recruiters come together to explore career opportunities, industry trends, and skill development. Whether you're a fresh graduate, an experienced professional, or a company looking for top talent, this expo serves as a dynamic platform for networking and career advancement." 
  },
  { 
    image: expoTravel, 
    title: 'Bharatnatyam Dance Competition', 
    description: "Embracing Centuries of Grace and Rhythm, Natya Tarangini is a premier Bharatnatyam competition celebrating the timeless beauty of India's classical dance. This cultural celebration unites rising stars and seasoned performers through expressive storytelling, intricate footwork, and sublime abhinaya." 
  },
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
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
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{expo.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3">{expo.description}</p>
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
