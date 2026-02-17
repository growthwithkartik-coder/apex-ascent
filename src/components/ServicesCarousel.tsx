import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import brandAssociation from "@/assets/brand-association.jpg";
import brandDevelopment from "@/assets/brand-development.jpg";
import brandMarketing from "@/assets/brand-marketing.jpg";

const items = [
  {
    heading: "Brand Association",
    description: "Our flagship offerings include Brand Association and Capital Procurement—where we collaborate with industrial leaders to fuel strategic brand growth and redefine market dominance.",
    image: brandAssociation,
  },
  {
    heading: "Brand Development",
    description: "We specialize in crafting compelling brand identities that resonate with your target audience. From brand positioning to storytelling, our strategies help establish a strong and lasting presence in the market.",
    image: brandDevelopment,
  },
  {
    heading: "Marketing",
    description: "Our expert marketing solutions span digital, traditional, and innovative strategies to connect brands with their audience effectively. Whether it's campaign management or analytics, we deliver measurable results.",
    image: brandMarketing,
  },
];

const ServicesCarousel = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % items.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + items.length) % items.length), []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section ref={ref} className="py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Our Products <span className="text-gradient-gold">&</span>
            </h2>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient-purple">
              Services
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              Media, Marketing, and Events agency under the DemiGod House Hedge Fund portfolio, crafting impactful brand success stories for associates and clients worldwide.
            </p>
          </motion.div>

          {/* Right - Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-xl">
              {items.map((item, i) => (
                <motion.div
                  key={item.heading}
                  className={`${i === current ? "block" : "hidden"}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={i === current ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <div className="glass-card rounded-xl overflow-hidden group cursor-pointer hover:glow-gold transition-shadow duration-500">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.heading}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading text-2xl font-bold text-foreground mb-3 animated-underline">
                        {item.heading}
                      </h3>
                      <p className="font-body text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex gap-3 mt-6 justify-center">
              <button
                onClick={prev}
                className="p-2 glass-card rounded-full hover:glow-gold transition-all duration-300 text-foreground"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex items-center gap-2">
                {items.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current ? "w-8 gradient-gold" : "w-2 bg-muted"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="p-2 glass-card rounded-full hover:glow-gold transition-all duration-300 text-foreground"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
