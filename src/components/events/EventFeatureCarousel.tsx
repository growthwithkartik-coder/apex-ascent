import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
  const prev = useCallback(() => setActive((p) => (p - 1 + features.length) % features.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-24 px-4 overflow-hidden">
      <div className="w-[90%] max-w-[1600px] mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="px-4 py-1.5 rounded-full text-xs font-body font-semibold tracking-widest uppercase text-warm-gold border border-warm-gold/20 mb-4 inline-block">
            Features
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            What Makes Us <span className="text-gradient-coral">Different</span>
          </h2>
        </motion.div>

        {/* Simple sliding carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out gap-6"
            style={{ transform: `translateX(-${active * 340}px)` }}
          >
            {features.map((item, i) => (
              <div
                key={i}
                className={`flex-shrink-0 w-[320px] md:w-[400px] rounded-2xl overflow-hidden border transition-all duration-300 ${
                  i === active ? "border-warm-gold/30" : "border-border"
                }`}
              >
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                <div className="p-6 bg-card">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="font-body text-muted-foreground text-sm mb-4">{item.desc}</p>
                  <button className="text-sm font-body font-semibold text-warm-gold hover:text-warm-gold-dark transition-colors">
                    {item.cta} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button onClick={prev} className="w-10 h-10 rounded-full border border-muted-foreground/20 flex items-center justify-center hover:border-warm-gold transition-colors">
            <ChevronLeft size={18} className="text-muted-foreground" />
          </button>
          <div className="flex gap-2">
            {features.map((_, i) => (
              <button key={i} onClick={() => setActive(i)} className={`h-1 rounded-full transition-all duration-300 ${i === active ? "w-8 bg-warm-gold" : "w-4 bg-muted"}`} />
            ))}
          </div>
          <button onClick={next} className="w-10 h-10 rounded-full border border-muted-foreground/20 flex items-center justify-center hover:border-warm-gold transition-colors">
            <ChevronRight size={18} className="text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventFeatureCarousel;
