import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/corporate/hero-corporate.jpg";

const CorporateHero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Parallax BG */}
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <img src={heroImg} alt="Corporate event" className="w-full h-[130%] object-cover" />
      </motion.div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40 z-[1]" />

      {/* Content – left aligned */}
      <motion.div
        className="relative z-20 flex flex-col justify-center h-full px-6 md:px-16 lg:px-24 max-w-3xl"
        style={{ opacity }}
      >
        <motion.span
          className="inline-block w-fit px-4 py-1.5 text-[11px] font-body font-semibold tracking-[0.25em] uppercase text-primary border border-primary/20 rounded-full mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Demigod House Corporate
        </motion.span>

        <motion.h1
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] text-foreground mb-5"
          initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Corporate Events
          <br />
          <span className="text-gradient-coral">With Impact</span>
        </motion.h1>

        <motion.p
          className="font-heading text-lg md:text-xl text-foreground/60 italic mb-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          You Articulate & We Execute Pragmatically
        </motion.p>

        <motion.p
          className="font-body text-muted-foreground text-base md:text-lg max-w-xl mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          We organize outstanding corporate events with innovation, creativity, and flawless execution—from product launches to global conferences.
        </motion.p>

        <motion.button
          className="px-10 py-4 rounded-lg btn-gold font-body font-semibold text-sm tracking-wider uppercase w-fit"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Plan Your Event
        </motion.button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
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
    </section>
  );
};

export default CorporateHero;
