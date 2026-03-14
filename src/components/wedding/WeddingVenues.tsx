import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import venueImg from "@/assets/wedding/wedding-venue.jpg";

const WeddingVenues = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Image (left on desktop) */}
        <motion.div
          className="relative overflow-hidden rounded-2xl group order-2 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <img
            src={venueImg}
            alt="Destination wedding venue"
            className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent rounded-2xl" />
          <div className="absolute inset-0 border border-primary/20 rounded-2xl pointer-events-none" />
        </motion.div>

        {/* Text (right) */}
        <motion.div
          className="order-1 md:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-xs font-body tracking-[0.2em] uppercase text-primary mb-4 block">
            Dream Destinations
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            Celebrate Love at the World's Most Enchanting Venues
          </h2>
          <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
            From majestic landscapes to iconic locations, our team helps you
            discover breathtaking wedding venues that make your special day
            unforgettable.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingVenues;
