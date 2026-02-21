import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import expoPharma from "@/assets/events/expo-pharma.jpg";
import expoTravel from "@/assets/events/expo-travel.jpg";
import expoTech from "@/assets/events/expo-tech.jpg";
import expoRealestate from "@/assets/events/expo-realestate.jpg";

const expos = [
  {
    image: expoPharma,
    title: "Pharma Expo",
    desc: "Connecting pharmaceutical leaders with cutting-edge innovations, clinical breakthroughs, and regulatory insights under one premium roof.",
  },
  {
    image: expoTravel,
    title: "Travel Expo",
    desc: "Showcasing luxury destinations, hospitality brands, and travel technology — bringing the world's finest experiences to discerning travelers.",
  },
  {
    image: expoTech,
    title: "Tech Expo",
    desc: "A futuristic showcase of AI, robotics, and emerging technologies with live demonstrations, keynotes, and hands-on innovation labs.",
  },
  {
    image: expoRealestate,
    title: "Real Estate Expo",
    desc: "Premium property exhibitions featuring luxury developments, architectural masterpieces, and exclusive investment opportunities worldwide.",
  },
];

const EventExpoCarousel = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 px-4 overflow-hidden">
      <div className="w-[90%] max-w-[1600px] mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="px-4 py-1.5 rounded-full text-xs font-body font-semibold tracking-widest uppercase text-warm-gold border border-warm-gold/20 mb-4 inline-block">
            Expos
          </span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground">
            Industry <span className="text-gradient-coral">Expositions</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expos.map((expo, i) => (
            <motion.div
              key={expo.title}
              className="group"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }}
            >
              <motion.div
                className="glass-card rounded-2xl overflow-hidden shadow-elevated cursor-pointer"
                whileHover={{ y: -10, boxShadow: "0 20px 60px hsl(45 95% 55% / 0.15)" }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={expo.image}
                    alt={expo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-warm-gold transition-colors">
                    {expo.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-base leading-relaxed mb-5">
                    {expo.desc}
                  </p>
                  <motion.button
                    className="w-full py-3.5 rounded-xl btn-gold font-body font-semibold text-base"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Book Now
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventExpoCarousel;
