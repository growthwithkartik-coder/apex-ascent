import { motion } from "framer-motion";

const EventSimpleSection = () => {
  return (
    <section className="py-32 px-4 text-center relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-warm-gold/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.h2
          className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Let's Create Something <span className="text-gradient-coral">Extraordinary</span>
        </motion.h2>

        <motion.div
          className="w-24 h-1 mx-auto rounded-full gradient-warm mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />

        <motion.p
          className="font-body text-muted-foreground text-lg leading-relaxed mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          From intimate celebrations to large-scale productions, DemiGod House transforms your vision into an unforgettable reality. Let our team of experts craft an experience that exceeds every expectation.
        </motion.p>

        <motion.button
          className="px-12 py-5 rounded-xl gradient-warm font-body font-bold text-foreground text-lg glow-gold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get In Touch
        </motion.button>
      </div>
    </section>
  );
};

export default EventSimpleSection;
