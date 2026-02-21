import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import automotive from "../assets/home/Automotive.webp";
import realEstate from "../assets/home/Real_estate.webp";
import eventManagement from "../assets/home/Event_management.webp";
import jewellery from "../assets/home/Jewellery.webp";
import gems from "../assets/home/gems.webp";
import pharmaOTC from "../assets/home/Pharma_OTC.webp";
import fmcg from "../assets/home/Fmcg.webp";

const items = 
  [
  {
    img: automotive, // import this
    name: "Automotive",
    desc: "We create marketing strategies that drive awareness and sales for automotive brands, focusing on both traditional and digital marketing approaches.",
    step: "01",
  },
  {
    img: realEstate,
    name: "Real Estate",
    desc: "Our real estate marketing strategies use the latest tools to connect potential buyers with properties, resulting in higher conversions and faster sales cycles.",
    step: "02",
  },
  {
    img: eventManagement,
    name: "Event Management",
    desc: "From corporate events to large-scale consumer experiences, we craft memorable moments that resonate with attendees, ensuring a lasting impression.",
    step: "03",
  },
  {
    img: jewellery,
    name: "Jewellery",
    desc: "Our expertise in jewellery marketing ensures an impactful presence, driving brand recognition and engagement with affluent clientele.",
    step: "04",
  },
  {
    img: gems,
    name: "Gems",
    desc: "We provide bespoke solutions for the gemstone industry, leveraging creativity and innovation to elevate brand positioning and visibility.",
    step: "05",
  },
  {
    img: pharmaOTC,
    name: "Pharma OTC",
    desc: "Our tailored marketing and event management services promote OTC products with a focus on customer trust and long-term growth.",
    step: "06",
  },
  {
    img: fmcg,
    name: "FMCG",
    desc: "We help FMCG brands establish dominance through strategic campaigns that increase market penetration and brand loyalty.",
    step: "07",
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
    <section ref={ref} className="py-28 px-4 md:px-8 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03] blur-3xl" style={{ background: "hsl(175 55% 30%)" }} />

      <div className="max-w-6xl mx-auto text-center relative">
        <motion.div
          className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-body font-semibold tracking-wider uppercase text-primary border border-primary/20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          How It Works
        </motion.div>

        <motion.h2
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          SECTORS WE <span className="text-gradient-coral">CATER</span>:
        </motion.h2>

        <motion.p
          className="font-body text-muted-foreground max-w-3xl mx-auto text-base leading-relaxed mb-16"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          At DemiGod House, we transcend the conventional agency model. As a distinguished entity within the Hedge Fund Portfolio, we architect visionary campaigns and immersive brand experiences that generate tangible, sustainable value. Our multidisciplinary approach consistently delivers 12%–35% ROI.
        </motion.p>

        {/* Center carousel */}
        <div className="relative flex items-center justify-center gap-4 md:gap-8 h-[450px]">
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
                  x: isActive ? 0 : isLeft ? -300 : isRight ? 300 : 0,
                  scale: isActive ? 1 : 0.78,
                  opacity: isActive ? 1 : 0.4,
                  zIndex: isActive ? 10 : 1,
                  filter: isActive ? "blur(0px)" : "blur(3px)",
                  rotateY: isActive ? 0 : isLeft ? 8 : -8,
                }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <motion.div
                  className={`glass-card rounded-2xl overflow-hidden w-[300px] md:w-[400px] shadow-elevated ${isActive ? "glow-teal" : ""}`}
                  whileHover={isActive ? { y: -8 } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-52 overflow-hidden">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                    {/* Step badge */}
                    <motion.div
                      className="absolute top-4 left-4 px-3 py-1 rounded-full gradient-teal text-primary-foreground font-body font-bold text-xs"
                      animate={isActive ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                    >
                      Step {item.step}
                    </motion.div>
                  </div>
                  <div className="p-6 text-left">
                    <h3 className="font-heading text-xl font-bold text-foreground mb-2 animated-underline">
                      {item.name}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Progress bar + dots */}
        <div className="flex flex-col items-center gap-4 mt-8">
          <div className="flex gap-3">
            {items.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                className="w-3 h-3 rounded-full"
                animate={{
                  scale: i === active ? 1.3 : 1,
                  backgroundColor: i === active ? "hsl(175 55% 30%)" : "hsl(180 8% 85%)",
                }}
                whileHover={{ scale: 1.4 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
          <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full gradient-teal rounded-full"
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
