import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import t1 from "@/assets/wedding/traditional-1.jpg";
import t2 from "@/assets/wedding/traditional-2.jpg";
import t3 from "@/assets/wedding/traditional-3.jpg";
import t4 from "@/assets/wedding/traditional-4.jpg";
import t5 from "@/assets/wedding/traditional-5.jpg";
import heroImg from "@/assets/wedding/hero-wedding.jpg";
import venueImg from "@/assets/wedding/wedding-venue.jpg";

const galleryImages = [
  { src: t1, alt: "Traditional wedding ceremony" },
  { src: t2, alt: "Beautiful bride portrait" },
  { src: t3, alt: "Couple moment" },
  { src: t4, alt: "Wedding ritual" },
  { src: t5, alt: "First dance" },
  { src: heroImg, alt: "Beach wedding setup" },
  { src: venueImg, alt: "Palace wedding venue" },
];

const WeddingGallery = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={ref} className="py-20 md:py-32 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-body tracking-[0.2em] uppercase text-primary mb-4 block">
            Gallery
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Traditional Weddings
          </h2>
        </motion.div>
      </div>

      {/* Horizontal scrolling gallery */}
      <motion.div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto pb-6 px-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {galleryImages.map((img, i) => (
          <motion.div
            key={i}
            className="flex-shrink-0 w-64 sm:w-72 md:w-80 snap-center group"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
          >
            <div className="relative rounded-2xl overflow-hidden h-80 md:h-96">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WeddingGallery;
