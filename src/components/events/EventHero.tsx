import { motion } from "framer-motion";
import { Calendar, MapPin, ChevronDown } from "lucide-react";

const EventHero = () => {
  const words = ["Premium", "Tech", "Conference", "2026"];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20" style={{ background: "hsl(260 85% 65%)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-15" style={{ background: "hsl(220 90% 60%)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] opacity-10" style={{ background: "hsl(280 80% 60%)" }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(260 85% 65% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(260 85% 65% / 0.3) 1px, transparent 1px)`,
        backgroundSize: "60px 60px"
      }} />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full ev-glass mb-8"
        >
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "hsl(260 85% 65%)" }} />
          <span className="font-body text-sm tracking-wider uppercase" style={{ color: "hsl(260 90% 75%)" }}>
            Demigod House Events
          </span>
        </motion.div>

        {/* Animated headline */}
        <div className="mb-6">
          {words.map((word, i) => (
            <motion.span
              key={word}
              className="inline-block font-heading text-5xl md:text-7xl lg:text-8xl font-bold mr-4 md:mr-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
              style={{ color: i === 3 ? undefined : "hsl(0 0% 95%)" }}
            >
              {i === 3 ? <span className="ev-gradient-text">{word}</span> : word}
            </motion.span>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          className="font-body text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "hsl(240 10% 60%)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Join industry leaders for an immersive experience of innovation, networking, and world-class entertainment.
        </motion.p>

        {/* Date & Location badges */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full ev-glass">
            <Calendar size={16} style={{ color: "hsl(260 85% 65%)" }} />
            <span className="font-body text-sm" style={{ color: "hsl(0 0% 80%)" }}>March 15-17, 2026</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full ev-glass">
            <MapPin size={16} style={{ color: "hsl(260 85% 65%)" }} />
            <span className="font-body text-sm" style={{ color: "hsl(0 0% 80%)" }}>Mumbai, India</span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.button
          className="ev-btn px-10 py-4 rounded-xl font-body font-bold text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Register Now
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="font-body text-xs tracking-widest uppercase" style={{ color: "hsl(240 10% 40%)" }}>Scroll</span>
        <ChevronDown size={20} style={{ color: "hsl(240 10% 40%)" }} />
      </motion.div>
    </section>
  );
};

export default EventHero;
