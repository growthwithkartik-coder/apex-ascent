import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import serviceSelection from "@/assets/service-selection.jpg";
import connectWithUs from "@/assets/connect-with-us.jpg";
import proposalEvaluation from "@/assets/proposal-evaluation.jpg";

const items = [
  {
    img: serviceSelection,
    name: "Choose Your Service",
    desc: "Select from brand development, marketing, print & electronic media, or third-party manufacturing tailored to your needs.",
  },
  {
    img: connectWithUs,
    name: "Connect With Us",
    desc: "Reach out to Demigod House via our website, email, or phone. Share your vision, and let us guide you forward.",
  },
  {
    img: proposalEvaluation,
    name: "Proposal Evaluation",
    desc: "We'll review your proposal, and if it aligns with our expertise, we'll contact you to discuss next steps.",
  },
];

const SectorsCarousel = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  const next = useCallback(() => setActive((p) => (p + 1) % items.length), []);

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section ref={ref} className="py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          SECTORS WE <span className="text-gradient-gold">CATER</span>:
        </motion.h2>

        <motion.p
          className="font-body text-muted-foreground max-w-4xl mx-auto text-base leading-relaxed mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          At DemiGod House, we transcend the conventional agency model. As a distinguished entity within the Hedge Fund Portfolio, we architect visionary campaigns and immersive brand experiences that generate tangible, sustainable value. Rooted in precision, performance, and creative ingenuity, our multidisciplinary approach consistently delivers 12%–35% ROI.
        </motion.p>

        {/* Center carousel - large active, side blurred */}
        <div className="relative flex items-center justify-center gap-4 md:gap-8 h-[420px]">
          {items.map((item, i) => {
            const offset = ((i - active + items.length) % items.length);
            const isActive = offset === 0;
            const isLeft = offset === items.length - 1;
            const isRight = offset === 1;

            return (
              <motion.div
                key={item.name}
                className="absolute cursor-pointer"
                onClick={() => setActive(i)}
                animate={{
                  x: isActive ? 0 : isLeft ? -280 : isRight ? 280 : 0,
                  scale: isActive ? 1 : 0.75,
                  opacity: isActive ? 1 : 0.5,
                  zIndex: isActive ? 10 : 1,
                  filter: isActive ? "blur(0px)" : "blur(2px)",
                }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className={`glass-card rounded-2xl overflow-hidden w-[300px] md:w-[380px] ${isActive ? "glow-purple" : ""} transition-shadow duration-500`}>
                  <div className="relative h-48 overflow-hidden">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>
                  <div className="p-6 text-left">
                    <h3 className="font-heading text-xl font-bold text-foreground mb-2 animated-underline">
                      {item.name}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Progress bar */}
        <div className="flex justify-center mt-8">
          <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full gradient-purple-blue rounded-full"
              key={active}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 4, ease: "linear" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorsCarousel;
