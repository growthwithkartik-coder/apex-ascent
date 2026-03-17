import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart } from "lucide-react";

const CorporateCharity = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-32 md:py-44 px-6 md:px-12 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />

      {/* Decorative glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04] blur-[100px]"
        style={{ background: "hsl(var(--gold))" }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          className="w-14 h-14 mx-auto rounded-full border border-primary/20 flex items-center justify-center mb-8"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <Heart size={24} className="text-primary" />
        </motion.div>

        <motion.h2
          className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
          initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          Charity &{" "}
          <span className="text-gradient-coral italic">Fundraising</span>
          <br />
          Events
        </motion.h2>

        <motion.p
          className="font-body text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          At Demigod House, we champion global humanitarian causes through impactful fundraising and charity
          initiatives, driving meaningful change for a better future.
        </motion.p>

        <motion.div
          className="gold-divider w-24 mx-auto mt-12"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        />
      </div>
    </section>
  );
};

export default CorporateCharity;
