import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import splitImg from "@/assets/corporate/split-event.jpg";

const CorporateSplit = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const leftItems = ["PRODUCT LAUNCH", "ATL / BTL EVENTS", "DIGITAL MEDIA"];
  const rightItems = ["B2B / B2C MARKETING", "META / GOOGLE AD CAMPAIGN"];

  return (
    <section ref={ref} className="section-padding bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left — Bold Typography */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="space-y-3 mb-8">
            {leftItems.map((item, i) => (
              <motion.h2
                key={item}
                className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1] text-foreground"
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              >
                {i === 0 ? (
                  <span className="text-gradient-coral">{item}</span>
                ) : (
                  item
                )}
              </motion.h2>
            ))}
          </div>

          <motion.div
            className="h-[2px] w-20 bg-primary mb-8"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            style={{ transformOrigin: "left" }}
          />

          <div className="space-y-2">
            {rightItems.map((item, i) => (
              <motion.p
                key={item}
                className="font-body text-muted-foreground text-sm md:text-base tracking-[0.15em] uppercase"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
              >
                {item}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Right — Cinematic Image */}
        <motion.div
          className="relative rounded-2xl overflow-hidden group"
          initial={{ opacity: 0, x: 80 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <img
            src={splitImg}
            alt="Corporate launch event"
            className="w-full h-[350px] md:h-[450px] lg:h-[550px] object-cover transition-transform duration-[1.2s] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default CorporateSplit;
