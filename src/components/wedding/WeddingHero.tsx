import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/wedding/hero-wedding.jpg";

const WeddingHero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <img
          src={heroImg}
          alt="Luxury wedding venue"
          className="w-full h-[130%] object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background z-[1]" />

      <motion.div
        className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center"
        style={{ opacity }}
      >
        <motion.span
          className="px-5 py-2 text-xs font-body font-semibold tracking-[0.25em] uppercase text-primary glass-card rounded-full mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Demigod House Weddings
        </motion.span>

        <motion.h1
          className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] text-foreground mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Graceful Weddings for{" "}
          <span className="text-primary italic">Exceptional</span>
          <br />
          Love Stories
        </motion.h1>

        <motion.p
          className="font-body text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Your wedding deserves to be as unique and remarkable as your journey
          together. From exquisite décor to flawless planning, we bring your
          vision to life with elegance and precision.
        </motion.p>

        <motion.button
          className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-heading font-semibold text-lg tracking-wide shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.05, boxShadow: "0 8px 40px hsl(42 78% 55% / 0.4)" }}
          whileTap={{ scale: 0.97 }}
        >
          Plan Your Wedding
        </motion.button>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-xs font-body text-muted-foreground tracking-widest uppercase">Scroll</span>
          <motion.div
            className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2 rounded-full bg-primary"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WeddingHero;
