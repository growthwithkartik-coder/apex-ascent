import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import brandAssociation from "@/assets/brand-association.jpg";
import ventureCapital from "@/assets/venture-capital.jpg";
import eventManagement from "@/assets/event-management.jpg";
import digitalMedia from "@/assets/digital-media.jpg";

const items = [
  {
    image: brandAssociation,
    heading: "Strategic Alliances",
    description: "Building powerful partnerships that redefine industry standards and drive exponential growth.",
    color: "from-coral to-coral-light",
  },
  {
    image: ventureCapital,
    heading: "Capital Solutions",
    description: "Innovative funding models designed to fuel brand ambition and maximize return potential.",
    color: "from-teal to-teal-light",
  },
  {
    image: eventManagement,
    heading: "Experiential Events",
    description: "Immersive brand experiences that captivate audiences and create lasting impressions.",
    color: "from-warm-gold to-warm-gold-dark",
  },
  {
    image: digitalMedia,
    heading: "Digital Dominance",
    description: "Data-driven digital strategies that amplify brand presence across every touchpoint.",
    color: "from-coral to-teal",
  },
];

const CreativeCarousel = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-40 right-0 w-[500px] h-[500px] rounded-full opacity-[0.03] blur-3xl" style={{ background: "hsl(175 55% 30%)" }} />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <div className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-body font-semibold tracking-wider uppercase text-secondary border border-secondary/20">
            Portfolio
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our <span className="text-gradient-teal">Expertise</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl text-lg">
            A curated portfolio of capabilities that set DemiGod House apart in the industry.
          </p>
          <motion.div
            className="mt-6 h-1 w-20 rounded-full gradient-teal"
            initial={{ scaleX: 0, originX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
        </motion.div>

        {/* Staggered masonry grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.heading}
              initial={{ opacity: 0, y: 80, rotateX: 10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`${i % 2 === 1 ? "md:mt-16" : ""}`}
            >
              <motion.div
                className="group relative glass-card rounded-2xl overflow-hidden cursor-pointer shadow-elevated"
                whileHover={{ y: -10, boxShadow: "0 30px 80px hsl(200 25% 12% / 0.12)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="relative h-60 overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.heading}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-foreground/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
                    <motion.div
                      className="w-14 h-14 rounded-full gradient-coral flex items-center justify-center"
                      initial={{ scale: 0, rotate: -45 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                    >
                      <ArrowUpRight size={22} className="text-primary-foreground" />
                    </motion.div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>

                {/* Gradient accent bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${item.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

                <div className="p-7">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {item.heading}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeCarousel;
