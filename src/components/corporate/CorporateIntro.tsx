import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CorporateIntro = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          className="gold-divider w-24 mx-auto mb-10"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8 }}
        />

        <motion.p
          className="font-heading text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-foreground mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Corporate Events with Demigod House is a world-class experience integrated with modern attractions like{" "}
          <span className="text-primary italic">Gen Z tech décor</span>, premium floral setups, pyrotechnics, drone shows, and live entertainment.
        </motion.p>

        <motion.p
          className="font-body text-muted-foreground text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          5-star hospitality, accommodation, transport services, PR coverage, and market-breaking experiences.
        </motion.p>

        <motion.div
          className="gold-divider w-24 mx-auto mt-10"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
      </div>
    </section>
  );
};

export default CorporateIntro;
