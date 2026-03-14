import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import demigodVideo from "@/assets/home/demigod.mp4";
import venueImg from "@/assets/wedding/wedding-venue.jpg";
import planImg from "@/assets/wedding/wedding-planning.jpg";

const WeddingVideoShowcase = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 overflow-hidden">
      {/* Full-width video banner */}
      <div className="relative h-[50vh] md:h-[60vh] mb-16 md:mb-24">
        <video
          src={demigodVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <motion.span
            className="px-4 py-2 text-xs font-body font-semibold tracking-[0.2em] uppercase text-primary border border-primary/20 rounded-full mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Cinematic Experience
          </motion.span>
          <motion.h2
            className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your Love, Our Lens
          </motion.h2>
          <motion.p
            className="font-body text-muted-foreground text-base sm:text-lg max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We turn fleeting moments into cinematic masterpieces — films that
            let you relive the magic forever.
          </motion.p>
        </div>
      </div>

      {/* Two-column image + content below */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          {/* Stacked images */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative rounded-2xl overflow-hidden h-72 md:h-96 group">
              <img
                src={venueImg}
                alt="Luxury wedding venue"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 md:-right-8 w-40 md:w-52 rounded-xl overflow-hidden border-4 border-background shadow-xl group">
              <img
                src={planImg}
                alt="Wedding detail"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <span className="text-xs font-body tracking-[0.2em] uppercase text-primary mb-4 block">
              Behind the Scenes
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
              Where Elegance Meets Emotion
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Every frame tells a story. Our team of cinematographers and
              photographers work seamlessly to capture candid emotions, grand
              celebrations, and intimate moments that define your wedding day.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              From aerial drone shots of your venue to close-up details of your
              rings, we ensure no moment goes unnoticed. Your wedding film
              becomes a timeless heirloom.
            </p>
            <div className="flex flex-wrap gap-4">
              {["4K Cinematography", "Drone Shots", "Same-Day Edits"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 text-xs font-body tracking-wider uppercase rounded-full border border-primary/20 text-primary"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WeddingVideoShowcase;
