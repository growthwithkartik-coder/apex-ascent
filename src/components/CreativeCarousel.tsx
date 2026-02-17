import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import brandAssociation from "@/assets/brand-association.jpg";
import ventureCapital from "@/assets/venture-capital.jpg";
import eventManagement from "@/assets/event-management.jpg";
import digitalMedia from "@/assets/digital-media.jpg";

const items = [
  {
    image: brandAssociation,
    heading: "Strategic Alliances",
    description: "Building powerful partnerships that redefine industry standards and drive exponential growth.",
  },
  {
    image: ventureCapital,
    heading: "Capital Solutions",
    description: "Innovative funding models designed to fuel brand ambition and maximize return potential.",
  },
  {
    image: eventManagement,
    heading: "Experiential Events",
    description: "Immersive brand experiences that captivate audiences and create lasting impressions.",
  },
  {
    image: digitalMedia,
    heading: "Digital Dominance",
    description: "Data-driven digital strategies that amplify brand presence across every touchpoint.",
  },
];

const CreativeCarousel = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our <span className="text-gradient-purple">Expertise</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl text-lg">
            A curated portfolio of capabilities that set DemiGod House apart in the industry.
          </p>
        </motion.div>

        {/* Staggered masonry grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.heading}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`${i % 2 === 1 ? "md:mt-12" : ""}`}
            >
              <div className="group relative glass-card rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:glow-blue">
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-2xl p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gold via-deep-purple to-electric-blue animate-shimmer" style={{ backgroundSize: "200% 100%" }} />
                </div>

                <div className="relative rounded-2xl overflow-hidden bg-card">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.heading}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <span className="font-body font-semibold text-primary text-sm tracking-wider uppercase">
                        Learn More →
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-foreground mb-2 animated-underline">
                      {item.heading}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeCarousel;
