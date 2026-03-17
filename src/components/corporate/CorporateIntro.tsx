import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CorporateIntro = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 md:py-40 px-6 md:px-12 bg-background">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <motion.div
          className="gold-divider w-16 mx-auto"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8 }}
        />

        <motion.p
          className="font-heading text-xl md:text-2xl lg:text-3xl font-extralight leading-[1.7] text-foreground/90 tracking-wide"
          initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Corporate Events with <span className="font-semibold text-primary">Demigod House</span> is a world-class
          experience integrated with modern attractions like{" "}
          <span className="italic text-foreground">Gen Z tech décor</span>, premium floral setups, pyrotechnics,
          drone shows, and live entertainment.
        </motion.p>

        <motion.p
          className="font-body text-muted-foreground text-base md:text-lg tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          5-star hospitality · accommodation · transport services · PR coverage · market-breaking experiences
        </motion.p>

        <motion.div
          className="gold-divider w-16 mx-auto"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
      </div>
    </section>
  );
};

export default CorporateIntro;
