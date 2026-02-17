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
      <motion.div className="absolute inset-0" style={{ y }}>
        <img src={heroBg} alt="Cityscape" className="w-full h-[130%] object-cover" />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background z-[1]" />

      {/* Particles */}
      <Particles />

      {/* Content */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-2">
            <span className="text-gradient-gold">Media.</span>{" "}
            <span className="text-foreground">Marketing.</span>{" "}
            <span className="text-gradient-purple">Events.</span>
          </h1>
        </motion.div>

        <motion.p
          className="font-body text-muted-foreground text-lg md:text-xl max-w-2xl mt-6 mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Crafting impactful brand success stories through strategic partnerships, innovative marketing, and world-class events.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <button className="px-8 py-4 rounded-lg gradient-gold font-body font-semibold text-primary-foreground hover:scale-105 transition-transform duration-300 glow-gold">
            Get Started
          </button>
          <button className="px-8 py-4 rounded-lg glass-card font-body font-semibold text-foreground border border-foreground/10 hover:border-primary/40 hover:scale-105 transition-all duration-300">
            Explore Services
          </button>
        </motion.div>

        {/* Tags */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-body text-muted-foreground glass-card rounded-full"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
