import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import eventGala from "@/assets/events/event-gala.jpg";
import eventLaunch from "@/assets/events/event-launch.jpg";
import eventWedding from "@/assets/events/event-wedding.jpg";
import eventFestival from "@/assets/events/event-festival.jpg";
import eventNetworking from "@/assets/events/event-networking.jpg";
import eventAwards from "@/assets/events/event-awards.jpg";

const events = [
  { image: eventGala, name: "Grand Gala Dinner", desc: "An evening of opulence featuring curated dining experiences and world-class entertainment." },
  { image: eventLaunch, name: "Product Launch Summit", desc: "High-impact product reveals with cutting-edge stage design and media coverage." },
  { image: eventWedding, name: "Destination Weddings", desc: "Breathtaking celebrations in the world's most stunning locations, crafted to perfection." },
  { image: eventFestival, name: "VIP Music Festival", desc: "Exclusive festival experiences with premium lounges, backstage access, and luxury amenities." },
  { image: eventNetworking, name: "Elite Networking Night", desc: "Intimate cocktail evenings connecting industry leaders in prestigious venues." },
  { image: eventAwards, name: "Awards Ceremony", desc: "Prestigious award shows with red carpet experiences and world-class production." },
];

const EventShowcaseCarousel = () => {
  const [active, setActive] = useState(0);
  const next = useCallback(() => setActive((p) => (p + 1) % events.length), []);
  const prev = useCallback(() => setActive((p) => (p - 1 + events.length) % events.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const getIndex = (offset: number) => (active + offset + events.length) % events.length;

  return (
    <section className="py-28 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="px-4 py-1.5 rounded-full text-xs font-body font-semibold tracking-widest uppercase text-warm-gold border border-warm-gold/20 mb-4 inline-block">
            Showcase
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Premium Event <span className="text-gradient-coral">Portfolio</span>
          </h2>
        </motion.div>

        {/* Center-focus carousel */}
        <div className="relative flex items-center justify-center h-[420px] md:h-[460px]">
          {[-1, 0, 1].map((offset) => {
            const idx = getIndex(offset);
            const isCenter = offset === 0;
            return (
              <motion.div
                key={`${idx}-${offset}`}
                className="absolute cursor-pointer"
                animate={{
                  x: offset * 320,
                  scale: isCenter ? 1 : 0.82,
                  opacity: isCenter ? 1 : 0.5,
                  zIndex: isCenter ? 10 : 5,
                  filter: isCenter ? "blur(0px)" : "blur(2px)",
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                onClick={() => !isCenter && setActive(idx)}
              >
                <div className="relative w-[300px] md:w-[380px] h-[380px] md:h-[440px] rounded-2xl overflow-hidden group">
                  <img src={events[idx].image} alt={events[idx].name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-deep via-slate-deep/40 to-transparent" />
                  {isCenter && (
                    <div className="absolute inset-0 border-2 border-warm-gold/30 rounded-2xl group-hover:border-warm-gold/60 transition-colors glow-gold" />
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-heading text-xl font-bold text-primary-foreground">{events[idx].name}</h3>
                      <ArrowUpRight size={18} className="text-warm-gold" />
                    </div>
                    <p className="font-body text-primary-foreground/60 text-sm">{events[idx].desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Nav */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button onClick={prev} className="w-10 h-10 rounded-full border border-muted-foreground/20 flex items-center justify-center hover:border-warm-gold transition-colors">
            <ChevronLeft size={18} className="text-muted-foreground" />
          </button>
          <div className="flex gap-2">
            {events.map((_, i) => (
              <button key={i} onClick={() => setActive(i)} className={`h-1 rounded-full transition-all duration-400 ${i === active ? "w-8 bg-warm-gold" : "w-4 bg-muted"}`} />
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

export default EventShowcaseCarousel;
