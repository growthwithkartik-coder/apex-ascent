import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import Particles from "./Particles";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const tags = [
    "Brand Association", "Venture Capital", "Revenue Sharing Model",
    "Brand Seed Funding", "Brand Marketing", "Brand Development",
    "Contract Manufacturing", "Retail Interaction & Consumer Base",
    "Print & Electronic Media Advertising", "Digital Media Marketing",
    "Event Management Services (B2B/B2C/Private)",
  ];

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <img src={heroBg} alt="Cityscape" className="w-full h-[130%] object-cover" />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/60 to-background z-[1]" />
      
      {/* Decorative gradient orbs */}
      <motion.div
        className="absolute top-20 right-20 w-80 h-80 rounded-full opacity-20 blur-3xl"
        style={{ background: "hsl(12 80% 55%)" }}
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 rounded-full opacity-15 blur-3xl"
        style={{ background: "hsl(175 55% 30%)" }}
        animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Particles */}
      <Particles />

      {/* Content */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center"
        style={{ opacity }}
      >
        {/* Eyebrow */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="px-4 py-2 text-xs font-body font-semibold tracking-[0.2em] uppercase text-secondary glass-card rounded-full">
            DemiGod House — Est. 2024
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-2">
            <motion.span
              className="text-gradient-coral inline-block"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Media.
            </motion.span>{" "}
            <motion.span
              className="text-foreground inline-block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Marketing.
            </motion.span>{" "}
            <motion.span
              className="text-gradient-teal inline-block"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Events.
            </motion.span>
          </h1>
        </motion.div>

        <motion.p
          className="font-body text-muted-foreground text-lg md:text-xl max-w-2xl mt-6 mb-10"
          initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          Crafting impactful brand success stories through strategic partnerships, innovative marketing, and world-class events.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <motion.button
            className="px-8 py-4 rounded-xl gradient-coral font-body font-semibold text-primary-foreground glow-coral"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 40px hsl(12 80% 55% / 0.35)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            Get Started
          </motion.button>
          <motion.button
            className="px-8 py-4 rounded-xl glass-card font-body font-semibold text-foreground border border-foreground/10"
            whileHover={{ scale: 1.05, borderColor: "hsl(175 55% 30% / 0.4)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            Explore Services
          </motion.button>
        </motion.div>

        {/* Tags */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          {tags.map((tag, i) => (
            <motion.span
              key={tag}
              className="px-3 py-1.5 text-xs font-body text-muted-foreground glass-card rounded-full cursor-default"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 + i * 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.08, color: "hsl(12 80% 55%)" }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
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

export default HeroSection;
