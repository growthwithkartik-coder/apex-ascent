import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check } from "lucide-react";
import ventureCapital from "@/assets/venture-capital.jpg";
import eventManagement from "@/assets/event-management.jpg";
import digitalMedia from "@/assets/digital-media.jpg";
import manufacturing from "@/assets/manufacturing.jpg";

const tabs = [
  {
    label: "Venture Capital",
    image: ventureCapital,
    heading: "Strategic Capital Deployment",
    description: "Our venture capital arm identifies and nurtures high-potential brands, providing not just funding but strategic guidance to accelerate growth.",
    points: ["Seed to Series B funding support", "Strategic brand growth partnerships", "Revenue sharing models", "Portfolio management & advisory"],
  },
  {
    label: "Event Management",
    image: eventManagement,
    heading: "World-Class Events",
    description: "From intimate B2B summits to large-scale consumer events, we craft unforgettable experiences that elevate brands and forge lasting connections.",
    points: ["B2B & B2C event production", "Private & corporate galas", "Brand activation events", "Full-service event logistics"],
  },
  {
    label: "Digital Media",
    image: digitalMedia,
    heading: "Digital-First Marketing",
    description: "Leverage cutting-edge digital strategies to amplify your brand's reach across all platforms with data-driven precision.",
    points: ["Social media campaigns", "Content strategy & creation", "Performance marketing", "Analytics & ROI tracking"],
  },
  {
    label: "Manufacturing",
    image: manufacturing,
    heading: "Contract Manufacturing",
    description: "End-to-end manufacturing solutions that maintain the highest quality standards while optimizing production costs.",
    points: ["Third-party manufacturing", "Quality assurance protocols", "Supply chain optimization", "Scalable production capacity"],
  },
];

const TabsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section ref={ref} className="py-28 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full opacity-[0.04] blur-3xl" style={{ background: "hsl(45 95% 55%)" }} />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-body font-semibold tracking-wider uppercase text-primary border border-primary/20">
            Services
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            What We <span className="text-gradient-sunset">Deliver</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive suite of services designed to elevate your brand to new heights.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {tabs.map((tab, i) => (
            <motion.button
              key={tab.label}
              onClick={() => setActiveTab(i)}
              className={`relative px-6 py-3 rounded-full font-body font-medium text-sm transition-all duration-300 ${
                i === activeTab
                  ? "gradient-coral text-primary-foreground"
                  : "glass-card text-muted-foreground hover:text-foreground"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              animate={i === activeTab ? { boxShadow: "0 4px 25px hsl(12 80% 55% / 0.25)" } : { boxShadow: "0 0px 0px transparent" }}
            >
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Image */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-elevated group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={tabs[activeTab].image}
                alt={tabs[activeTab].heading}
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
              {/* Floating label */}
              <motion.div
                className="absolute bottom-4 left-4 px-4 py-2 glass-card rounded-lg font-body font-semibold text-sm text-foreground"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {tabs[activeTab].label}
              </motion.div>
            </motion.div>

            {/* Text */}
            <div>
              <motion.h3
                className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                {tabs[activeTab].heading}
              </motion.h3>
              <motion.p
                className="font-body text-muted-foreground mb-8 leading-relaxed"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                {tabs[activeTab].description}
              </motion.p>
              <ul className="space-y-4">
                {tabs[activeTab].points.map((point, i) => (
                  <motion.li
                    key={point}
                    className="flex items-center gap-4 font-body text-foreground"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <span className="w-7 h-7 rounded-full gradient-coral flex items-center justify-center flex-shrink-0">
                      <Check size={14} className="text-primary-foreground" />
                    </span>
                    {point}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TabsSection;
