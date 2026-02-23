import { motion } from "framer-motion";

const EventSimpleSection = () => {
  return (
    <section className="py-28 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Let's Create Something <span className="text-gradient-coral">Extraordinary</span>
        </motion.h2>

        <div className="w-20 h-0.5 mx-auto rounded-full gradient-warm mb-8" />

        <motion.p
          className="font-body text-muted-foreground text-lg leading-relaxed mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          From intimate celebrations to large-scale productions, DemiGod House transforms your vision into an unforgettable reality. Let our team craft an experience that exceeds every expectation.
        </motion.p>

        <button className="px-10 py-4 rounded-xl btn-gold font-body font-bold text-lg hover:scale-105 transition-transform">
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default EventSimpleSection;
