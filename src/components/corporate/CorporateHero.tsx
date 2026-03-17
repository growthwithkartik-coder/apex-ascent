import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Users, BarChart3, Heart, Sparkles } from "lucide-react";
import heroImg from "@/assets/corporate/hero-corporate.jpg";

const floatingCards = [
  { icon: Users, title: "Team Building Activity", desc: "Forge stronger bonds through curated experiences", rotate: -8, x: "5%", y: "18%" },
  { icon: BarChart3, title: "Shareholder Meeting", desc: "Precision-driven sessions for key stakeholders", rotate: 6, x: "68%", y: "12%" },
  { icon: Heart, title: "Wellness Events", desc: "Rejuvenate your team with holistic retreats", rotate: -4, x: "72%", y: "58%" },
  { icon: Sparkles, title: "Product Launch", desc: "Grand reveals that captivate global audiences", rotate: 10, x: "2%", y: "60%" },
];

const CorporateHero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <img src={heroImg} alt="Corporate event" className="w-full h-[130%] object-cover" />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background z-[1]" />

      {/* Floating tilted cards */}
      <div className="absolute inset-0 z-10 hidden lg:block">
        {floatingCards.map((card, i) => (
          <motion.div
            key={card.title}
            className="absolute w-56"
            style={{ left: card.x, top: card.y, rotate: card.rotate }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 + i * 0.2, duration: 0.8 }}
          >
            <motion.div
              className="rounded-2xl overflow-hidden shadow-elevated backdrop-blur-sm"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
            >
              <div className="p-4 bg-foreground/10 backdrop-blur-md border-b border-foreground/5">
                <card.icon size={20} className="text-primary mb-2" />
                <h4 className="font-heading text-sm font-semibold text-foreground">{card.title}</h4>
              </div>
              <div className="p-4 bg-background/80 backdrop-blur-md">
                <p className="font-body text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <motion.div className="relative z-20 flex flex-col justify-center h-full px-6 md:px-16 lg:px-24 max-w-4xl" style={{ opacity }}>
        <motion.span
          className="px-4 py-2 text-xs font-body font-semibold tracking-[0.2em] uppercase text-primary glass-card rounded-full w-fit mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Demigod House Corporate
        </motion.span>

        <motion.h1
          className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] text-foreground mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Corporate Events{" "}
          <span className="text-gradient-coral italic">With Impact</span>
        </motion.h1>

        <motion.p
          className="font-heading text-xl md:text-2xl text-primary/80 mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          You Articulate & We Execute Pragmatically
        </motion.p>

        <motion.p
          className="font-body text-muted-foreground text-base md:text-lg max-w-2xl mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          We organize outstanding corporate events with innovation, creativity, and flawless execution—from product launches to global conferences.
        </motion.p>

        <motion.button
          className="px-10 py-4 rounded-xl gradient-coral font-body font-semibold text-primary-foreground w-fit glow-coral"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
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
