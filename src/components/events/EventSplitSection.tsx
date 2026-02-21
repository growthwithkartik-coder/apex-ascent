import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Props {
  image: string;
  heading: string;
  description: string;
  cta: string;
  reversed?: boolean;
}

const EventSplitSection = ({ image, heading, description, cta, reversed = false }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reversed ? "lg:direction-rtl" : ""}`}>
        {/* Image */}
        <motion.div
          className={`relative overflow-hidden rounded-2xl ${reversed ? "lg:order-2" : ""}`}
          initial={{ opacity: 0, x: reversed ? 80 : -80 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.img
            src={image}
            alt={heading}
            className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-deep/30 to-transparent rounded-2xl" />
        </motion.div>

        {/* Text */}
        <motion.div
          className={`${reversed ? "lg:order-1" : ""}`}
          initial={{ opacity: 0, x: reversed ? -80 : 80 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            {heading}
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
            {description}
          </p>
          <motion.button
            className="px-8 py-4 rounded-xl gradient-warm font-body font-semibold text-foreground glow-gold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {cta}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default EventSplitSection;
