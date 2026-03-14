import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import planningImg from "@/assets/wedding/wedding-planning.jpg";

const WeddingIntro = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-body tracking-[0.2em] uppercase text-primary mb-4 block">
            Our Philosophy
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            We integrate divinity and Cloud 9 factor in your wedding planning
          </h2>
          <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
            Demigod House wedding planners not only visualize your dream wedding
            with divine décor and artistic creativity but also execute the entire
            ceremony with professional precision.
          </p>
          <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
            Our wedding specialists bring your dream celebration to life with
            elegance and flawless execution.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="relative overflow-hidden rounded-2xl group"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute inset-0 border border-primary/20 rounded-2xl z-10 pointer-events-none" />
          <img
            src={planningImg}
            alt="Wedding planning essentials"
            className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent rounded-2xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingIntro;
