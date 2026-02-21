import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/events/hero-event-1.jpg";
import hero2 from "@/assets/events/hero-event-2.jpg";
import hero3 from "@/assets/events/hero-event-3.jpg";

const slides = [
  {
    image: hero1,
    headline: "Unforgettable Corporate Galas",
    sub: "Where luxury meets strategy — creating powerful experiences that leave lasting impressions on every guest.",
  },
  {
    image: hero2,
    headline: "Dream Weddings, Perfectly Crafted",
    sub: "From intimate ceremonies to grand celebrations, we orchestrate every moment with elegance and precision.",
  },
  {
    image: hero3,
    headline: "World-Class Conferences & Summits",
    sub: "Elevating corporate events with cutting-edge production, premium staging, and flawless execution.",
  },
];

const EventHero = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <img src={slides[current].image} alt={slides[current].headline} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-deep via-slate-deep/60 to-slate-deep/30" />
        </motion.div>
      </AnimatePresence>

      {/* Glow particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-warm-gold/40"
            style={{ left: `${20 + i * 15}%`, top: `${30 + i * 10}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight">
              {slides[current].headline}
            </h1>
            <p className="font-body text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              {slides[current].sub}
            </p>
            <motion.button
              className="px-10 py-4 rounded-xl btn-gold font-body font-semibold text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center hover:bg-warm-gold/30 transition-colors"
      >
        <ChevronLeft className="text-primary-foreground" />
      </button>
      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center hover:bg-warm-gold/30 transition-colors"
      >
        <ChevronRight className="text-primary-foreground" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === current ? "w-12 bg-warm-gold" : "w-6 bg-primary-foreground/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default EventHero;
