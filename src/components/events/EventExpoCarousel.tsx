import { motion } from "framer-motion";
import expoPharma from "@/assets/events/expo-pharma.jpg";
import expoTravel from "@/assets/events/expo-travel.jpg";
import expoTech from "@/assets/events/expo-tech.jpg";
import expoRealestate from "@/assets/events/expo-realestate.jpg";

const expos = [
  {
    image: expoPharma,
    title: "Pharma Expo",
    desc: "Connecting pharmaceutical leaders with cutting-edge innovations, clinical breakthroughs, and regulatory insights.",
  },
  {
    image: expoTravel,
    title: "Travel Expo",
    desc: "Showcasing luxury destinations, hospitality brands, and travel technology for discerning travelers.",
  },
  {
    image: expoTech,
    title: "Tech Expo",
    desc: "A futuristic showcase of AI, robotics, and emerging technologies with live demos and keynotes.",
  },
  {
    image: expoRealestate,
    title: "Real Estate Expo",
    desc: "Premium property exhibitions featuring luxury developments and exclusive investment opportunities.",
  },
];

const EventExpoCarousel = () => {
  return (
    <section className="py-24 px-4">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="px-4 py-1.5 rounded-full text-xs font-body font-semibold tracking-widest uppercase text-warm-gold border border-warm-gold/20 mb-4 inline-block">
            Expos
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Industry <span className="text-gradient-coral">Expositions</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expos.map((expo, i) => (
            <motion.div
              key={expo.title}
              className="group rounded-2xl overflow-hidden border border-border hover:border-warm-gold/20 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={expo.image}
                  alt={expo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-5 bg-card">
                <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-warm-gold transition-colors">
                  {expo.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                  {expo.desc}
                </p>
                <button className="w-full py-3 rounded-lg btn-gold font-body font-semibold text-sm">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventExpoCarousel;
