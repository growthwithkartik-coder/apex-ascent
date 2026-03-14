import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import destinationImg from "@/assets/wedding/destination-wedding.jpg";
import celebrityImg from "@/assets/wedding/celebrity-wedding.jpg";
import royalImg from "@/assets/wedding/royal-wedding.jpg";
import storyImg from "@/assets/wedding/story-wedding.jpg";
import processImg from "@/assets/wedding/process-consultation.jpg";
import decorImg from "@/assets/wedding/process-decor.jpg";

const experiences = [
  {
    image: destinationImg,
    category: "Destination",
    title: "Santorini Sunset Vows",
    description:
      "Perched above the Aegean Sea, exchange vows beneath the golden hour glow. Whitewashed elegance meets infinite blue horizons for a truly unforgettable ceremony.",
  },
  {
    image: celebrityImg,
    category: "Celebrity",
    title: "Red Carpet Romance",
    description:
      "A wedding draped in glamour — think couture gowns, paparazzi-worthy moments, and a guest list that reads like a who's who of the elite.",
  },
  {
    image: royalImg,
    category: "Royal",
    title: "Palace of Dreams",
    description:
      "Grand ballrooms, crystal chandeliers, and regal processions. Every detail echoes centuries of tradition reimagined for the modern couple.",
  },
  {
    image: storyImg,
    category: "Intimate",
    title: "Garden Whispers",
    description:
      "An intimate gathering surrounded by nature's finest. Secret garden ceremonies where every guest feels the warmth of your love story.",
  },
  {
    image: processImg,
    category: "Cultural",
    title: "Sacred Traditions",
    description:
      "Honouring ancestral customs with contemporary flair. We weave cultural rituals into a seamless, modern celebration that respects heritage.",
  },
  {
    image: decorImg,
    category: "Luxury",
    title: "Opulent Affair",
    description:
      "No detail is too small, no vision too grand. Our luxury weddings redefine extravagance with bespoke design at every touchpoint.",
  },
];

const WeddingExperiences = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section ref={ref} className="py-20 md:py-32 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-body tracking-[0.2em] uppercase text-primary mb-4 block">
            Curated Experiences
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Weddings Beyond Imagination
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of extraordinary weddings, each uniquely
            crafted to reflect the couple's personality and dreams.
          </p>
        </motion.div>

        {/* Featured experience */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-12">
          <motion.div
            className="relative rounded-2xl overflow-hidden h-80 md:h-[480px] group"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            key={activeIndex}
          >
            <motion.img
              src={experiences[activeIndex].image}
              alt={experiences[activeIndex].title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <span className="inline-block px-3 py-1 text-xs font-body tracking-wider uppercase rounded-full bg-primary/20 text-primary mb-3">
                {experiences[activeIndex].category}
              </span>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
                {experiences[activeIndex].title}
              </h3>
              <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed max-w-lg">
                {experiences[activeIndex].description}
              </p>
            </div>
          </motion.div>

          {/* Thumbnail grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
            {experiences.map((exp, i) => (
              <motion.button
                key={exp.title}
                onClick={() => setActiveIndex(i)}
                className={`relative rounded-xl overflow-hidden h-32 md:h-36 group transition-all duration-300 ${
                  i === activeIndex
                    ? "ring-2 ring-primary ring-offset-2 ring-offset-secondary"
                    : "opacity-70 hover:opacity-100"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              >
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/40" />
                <span className="absolute bottom-2 left-3 text-xs font-body font-semibold text-foreground">
                  {exp.category}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingExperiences;
