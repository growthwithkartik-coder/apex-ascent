import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import eventGala from "@/assets/events/event-gala.jpg";
import eventWedding from "@/assets/events/event-wedding.jpg";
import eventNetworking from "@/assets/events/event-networking.jpg";
import eventAwards from "@/assets/events/event-awards.jpg";
import eventFestival from "@/assets/events/event-festival.jpg";

const features = [
  { image: eventGala, title: "Bespoke Dining Experiences", desc: "Curated menus by Michelin-starred chefs with personalized table settings.", cta: "Learn More" },
  { image: eventWedding, title: "Luxury Venue Curation", desc: "Access to the world's most prestigious and exclusive event venues.", cta: "Explore Venues" },
  { image: eventNetworking, title: "VIP Concierge Services", desc: "24/7 dedicated event concierge for seamless guest experiences.", cta: "Get Started" },
  { image: eventAwards, title: "Live Entertainment", desc: "World-class performers, DJs, and artists for unforgettable moments.", cta: "Book Artists" },
  { image: eventFestival, title: "Tech-Forward Production", desc: "Cutting-edge AV, lighting, and immersive technology installations.", cta: "See Portfolio" },
];

const EventFeatureCarousel = () => {
  const [active, setActive] = useState(0);
  const next = useCallback(() => setActive((p) => (p + 1) % features.length), []);

  useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-28 px-4 overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-warm-gold/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="px-4 py-1.5 rounded-full text-xs font-body font-semibold tracking-widest uppercase text-warm-gold border border-warm-gold/20 mb-4 inline-block">
            Features
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            What Makes Us <span className="text-gradient-coral">Different</span>
          </h2>
        </motion.div>

        {/* 3D Perspective Carousel */}
        <div className="relative flex items-center justify-center" style={{ perspective: "1200px", height: "480px" }}>
          {features.map((item, i) => {
            const offset = i - active;
            const absOffset = Math.abs(offset);
            if (absOffset > 2) return null;

            return (
              <motion.div
                key={i}
                className="absolute w-[280px] md:w-[340px] cursor-pointer"
                animate={{
                  x: offset * 200,
                  z: -absOffset * 120,
                  rotateY: offset * -8,
                  scale: 1 - absOffset * 0.12,
                  opacity: 1 - absOffset * 0.35,
                  zIndex: 10 - absOffset,
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                onClick={() => setActive(i)}
              >
                <div className="glass-card rounded-2xl overflow-hidden shadow-elevated group">
                  <div className="relative h-52 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="font-body text-muted-foreground text-sm mb-4">{item.desc}</p>
                    <motion.button
                      className="text-sm font-body font-semibold text-warm-gold hover:text-warm-gold-dark transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      {item.cta} →
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {features.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-400 ${i === active ? "bg-warm-gold scale-125" : "bg-muted"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventFeatureCarousel;
