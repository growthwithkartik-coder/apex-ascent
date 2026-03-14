import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import destinationImg from "@/assets/wedding/destination-wedding.jpg";
import celebrityImg from "@/assets/wedding/celebrity-wedding.jpg";
import royalImg from "@/assets/wedding/royal-wedding.jpg";

const showcaseItems = [
  {
    image: destinationImg,
    title: "Destination Weddings",
    description:
      "Exchange vows against the world's most breathtaking backdrops — from clifftop sunsets to tropical paradises.",
  },
  {
    image: celebrityImg,
    title: "Celebrity Weddings",
    description:
      "Red-carpet glamour meets timeless romance. We craft star-studded celebrations worthy of the spotlight.",
  },
  {
    image: royalImg,
    title: "Royal Weddings",
    description:
      "Opulent palaces, crystal chandeliers, and regal grandeur — a wedding fit for royalty.",
  },
];

const WeddingShowcase = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-body tracking-[0.2em] uppercase text-primary mb-4 block">
            Our Expertise
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Destination Wedding Showcase
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
          {showcaseItems.map((item, i) => (
            <motion.div
              key={item.title}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="relative h-[350px] md:h-[420px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                {/* Gold accent line on top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingShowcase;
