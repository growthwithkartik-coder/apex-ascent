import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import brandAssociation from "../assets/home/brand_association.webp";
import brandDevelopment from "../assets/home/Brand_Development.webp";
import brandMarketing from "../assets/home/brand_marketing.jpeg";
import printMedia from "../assets/home/PRINT_MEDIA_MARKETING.webp";
import seedFunding from "../assets/home/brand_seed_funding.webp";
import privateEquity from "../assets/home/Brand_Private_Equity_Offering.jpeg";
import events from "../assets/home/b2b_b2c_events.webp";
import startups from "../assets/home/startups.jpeg";
import hybrid from "../assets/home/hybrid.jpeg";


const items = [
 {
            heading: "Brand Association",
            description:
                "Our flagship offerings include Brand Association and Capital Procurement—where we collaborate with industrial leaders to fuel strategic brand growth and redefine market dominance.",
            image: brandAssociation
        },
        {
            heading: "Brand Development",
            description:
                "We specialize in crafting compelling brand identities that resonate with your target audience. From brand positioning to storytelling, our strategies help establish a strong and lasting presence in the market.",
            image: brandDevelopment
        },
        {
            heading: "Marketing",
            description:
                "Our expert marketing solutions span digital, traditional, and innovative strategies to connect brands with their audience effectively. Whether it's campaign management or analytics, we deliver measurable results.",
            image: brandMarketing
        },
        {
            heading: "Print & Electronic Media",
            description:
                "Partnering with top-tier media outlets worldwide, we provide unmatched visibility for your brand through expertly curated content in both print and electronic formats.",
            image: printMedia
        },
        {
            heading: "Brand Seed Funding",
            description:
                "We support emerging brands by facilitating seed funding opportunities. Our network of investors and industry experts ensures the financial backing needed to turn visionary ideas into reality.",
            image: seedFunding
        },
        {
            heading: "Brand Private Equity Offering",
            description:
                "DemiGod House assists brands in accessing private equity markets, offering strategic advice and execution to fuel growth and expansion.",
            image: privateEquity
        },
        {
            heading: "B2B & B2C Events",
            description:
                "As part of outdoor-marketing campaign, we organize and manage variety of B2B & B2C events for brands direct interactions with their consumers via our events globally.",
            image: events
        },
        {
            heading: "From Startups to Multinationals",
            description:
                "At Demigod House, we cater to businesses of all sizes. Whether you're a budding startup or a global multinational, our expertise ensures tailored strategies that drive growth and success across industries.",
            image:startups
        },
        {
            heading: "Hybrid Environments",
            description:
                "We embrace the future of work and collaboration by fostering hybrid environments. Our solutions bridge physical and digital spaces, enabling seamless operations and connectivity for your business.",
            image:hybrid
        },
];

const ServicesCarousel = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % items.length);
  }, []);
  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + items.length) % items.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0, rotateY: dir > 0 ? 15 : -15 }),
    center: { x: 0, opacity: 1, rotateY: 0 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0, rotateY: dir > 0 ? -15 : 15 }),
  };

  return (
    <section ref={ref} className="py-28 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.04] blur-3xl"
        style={{ background: "hsl(12 80% 55%)" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div>
            <motion.div
              className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-body font-semibold tracking-wider uppercase text-secondary border border-secondary/20"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Our Expertise
            </motion.div>
            <motion.h2
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-[1.1]"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Our Products <span className="text-gradient-coral">&</span>
            </motion.h2>
            <motion.h2
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gradient-teal leading-[1.1]"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Services
            </motion.h2>
            <motion.p
              className="font-body text-muted-foreground text-lg leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Media, Marketing, and Events agency under the DemiGod House Hedge Fund portfolio, crafting impactful brand success stories for associates and clients worldwide.
            </motion.p>

            {/* Decorative line */}
            <motion.div
              className="mt-8 h-1 w-20 rounded-full gradient-coral"
              initial={{ scaleX: 0, originX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            />
          </div>

          {/* Right - Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative perspective-[1200px]"
          >
            <div className="relative overflow-hidden rounded-2xl min-h-[420px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="absolute inset-0"
                >
                  <motion.div
                    className="glass-card rounded-2xl overflow-hidden group cursor-pointer h-full shadow-elevated"
                    whileHover={{ y: -5, boxShadow: "0 25px 60px hsl(12 80% 55% / 0.12)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={items[current].image}
                        alt={items[current].heading}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                      {/* Number badge */}
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full gradient-coral flex items-center justify-center text-primary-foreground font-body font-bold text-sm">
                        {String(current + 1).padStart(2, "0")}
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="font-heading text-2xl font-bold text-foreground mb-3 animated-underline">
                        {items[current].heading}
                      </h3>
                      <p className="font-body text-muted-foreground text-sm leading-relaxed">
                        {items[current].description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex gap-3 mt-8 justify-center items-center">
              <motion.button
                onClick={prev}
                className="p-3 glass-card rounded-full text-foreground shadow-elevated"
                whileHover={{ scale: 1.1, boxShadow: "0 4px 20px hsl(12 80% 55% / 0.2)" }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={18} />
              </motion.button>
              <div className="flex items-center gap-2 mx-4">
                {items.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                    className="h-2 rounded-full transition-colors duration-300"
                    animate={{
                      width: i === current ? 32 : 8,
                      backgroundColor: i === current ? "hsl(12 80% 55%)" : "hsl(180 8% 85%)",
                    }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>
              <motion.button
                onClick={next}
                className="p-3 glass-card rounded-full text-foreground shadow-elevated"
                whileHover={{ scale: 1.1, boxShadow: "0 4px 20px hsl(12 80% 55% / 0.2)" }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={18} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
