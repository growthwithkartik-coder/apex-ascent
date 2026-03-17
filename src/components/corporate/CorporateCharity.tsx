import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart } from "lucide-react";

const CorporateCharity = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative section-padding overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.06] blur-3xl"
        style={{ background: "hsl(var(--coral))" }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="w-16 h-16 mx-auto rounded-full glass-card flex items-center justify-center mb-6">
            <Heart size={28} className="text-primary" />
          </div>
        </motion.div>

        <motion.h2
          className="heading-xl text-foreground mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Charity & <span className="text-gradient-coral">Fundraising</span> Events
        </motion.h2>

        <motion.p
          className="body-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          At Demigod House, we champion global humanitarian causes through impactful fundraising and charity initiatives, driving meaningful change for a better future.
        </motion.p>

        <motion.div
          className="gold-divider w-32 mx-auto mt-12"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
      </div>
    </section>
  );
};

export default CorporateCharity;
