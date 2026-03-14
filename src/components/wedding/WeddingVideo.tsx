import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/wedding/hero-wedding.jpg";

const WeddingVideo = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Parallax background image (replace with video if available) */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <img
          src={heroImg}
          alt="Wedding cinematic"
          className="w-full h-[130%] object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-background/60 z-[1]" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <motion.h2
          className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold text-foreground mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Every Wedding Tells a Story
        </motion.h2>

        <motion.p
          className="font-body text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We capture every magical moment to turn your special day into timeless
          memories.
        </motion.p>
      </div>
    </section>
  );
};

export default WeddingVideo;
