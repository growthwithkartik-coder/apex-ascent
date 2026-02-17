import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
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
    points: [
      "Seed to Series B funding support",
      "Strategic brand growth partnerships",
      "Revenue sharing models",
      "Portfolio management & advisory",
    ],
  },
  {
    label: "Event Management",
    image: eventManagement,
    heading: "World-Class Events",
    description: "From intimate B2B summits to large-scale consumer events, we craft unforgettable experiences that elevate brands and forge lasting connections.",
    points: [
      "B2B & B2C event production",
      "Private & corporate galas",
      "Brand activation events",
      "Full-service event logistics",
    ],
  },
  {
    label: "Digital Media",
    image: digitalMedia,
    heading: "Digital-First Marketing",
    description: "Leverage cutting-edge digital strategies to amplify your brand's reach across all platforms with data-driven precision.",
    points: [
      "Social media campaigns",
      "Content strategy & creation",
      "Performance marketing",
      "Analytics & ROI tracking",
    ],
  },
  {
    label: "Manufacturing",
    image: manufacturing,
    heading: "Contract Manufacturing",
    description: "End-to-end manufacturing solutions that maintain the highest quality standards while optimizing production costs.",
    points: [
      "Third-party manufacturing",
      "Quality assurance protocols",
      "Supply chain optimization",
      "Scalable production capacity",
    ],
  },
];

const TabsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section ref={ref} className="py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            What We <span className="text-gradient-gold">Deliver</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive suite of services designed to elevate your brand to new heights.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(i)}
              className={`relative px-6 py-3 rounded-full font-body font-medium text-sm transition-all duration-400 ${
                i === activeTab
                  ? "gradient-gold text-primary-foreground glow-gold"
                  : "glass-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
              {i === activeTab && (
                <motion.div
                  className="absolute inset-0 rounded-full gradient-gold opacity-20"
                  layoutId="activeTab"
                  transition={{ duration: 0.4 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden glass-card">
              <img
                src={tabs[activeTab].image}
                alt={tabs[activeTab].heading}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
            </div>

            {/* Text */}
            <div>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                {tabs[activeTab].heading}
              </h3>
              <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                {tabs[activeTab].description}
              </p>
              <ul className="space-y-3">
                {tabs[activeTab].points.map((point, i) => (
                  <motion.li
                    key={point}
                    className="flex items-center gap-3 font-body text-foreground"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="w-2 h-2 rounded-full gradient-gold flex-shrink-0" />
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
