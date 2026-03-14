import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import storyImg from "@/assets/wedding/story-wedding.jpg";
import { Heart } from "lucide-react";

const WeddingStory = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 px-4 bg-background">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-body tracking-[0.2em] uppercase text-primary mb-4 block">
            Our Story
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            Crafting Unforgettable Celebrations
          </h2>
          <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
            Demigod House wedding planners organize your ceremonial life event
            with next-generation visualization, storytelling, and royal décor
            concepts.
          </p>
          <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
            We are dedicated to crafting unforgettable celebrations that reflect
            the unique journey of every couple.
          </p>
        </motion.div>

        {/* Rotating circle + image */}
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Rotating text circle */}
            <svg
              className="absolute inset-0 w-full h-full animate-spin-slow"
              viewBox="0 0 300 300"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 150,150 m -120,0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0"
                />
              </defs>
              <text className="fill-primary/70 text-[13px] font-body tracking-[0.4em] uppercase">
                <textPath href="#circlePath">
                  Tell Your Love Story • Tell Your Love Story •{" "}
                </textPath>
              </text>
            </svg>

            {/* Center ring icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center">
                <Heart className="w-10 h-10 md:w-14 md:h-14 text-primary" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingStory;
