import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import splitImg from "@/assets/corporate/split-event.jpg";

const CorporateSplit = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left — Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-primary mb-4 block">
            Our Promise
          </span>
          <h2 className="heading-xl text-foreground mb-2">
            CORPORATE <span className="text-gradient-coral">EVENTS</span>
          </h2>
          <p className="font-heading text-xl text-primary/70 mb-6">
            You Articulate & We Execute Pragmatically
          </p>
          <p className="body-lg mb-8">
            We organize world-class corporate events powered by innovation, creativity, and flawless execution. From product launches to shareholder meetings, we deliver end-to-end event management across global destinations.
          </p>
          <motion.button
            className="btn-primary rounded-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Explore Services
          </motion.button>
        </motion.div>

        {/* Right — Image */}
        <motion.div
          className="relative rounded-2xl overflow-hidden group"
          initial={{ opacity: 0, x: 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={splitImg}
            alt="Corporate event stage"
            className="w-full h-[400px] lg:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default CorporateSplit;
