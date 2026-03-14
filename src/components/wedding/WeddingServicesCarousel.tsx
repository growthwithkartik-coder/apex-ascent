import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import t1 from "@/assets/wedding/traditional-1.jpg";
import t2 from "@/assets/wedding/traditional-2.jpg";
import t3 from "@/assets/wedding/traditional-3.jpg";
import t4 from "@/assets/wedding/traditional-4.jpg";
import t5 from "@/assets/wedding/traditional-5.jpg";
import heroImg from "@/assets/wedding/hero-wedding.jpg";

const services = [
  {
    image: t1,
    title: "Floral Artistry",
    description:
      "Bespoke floral arrangements that transform venues into living gardens. From cascading centrepieces to grand altar arches, every petal is placed with intention.",
  },
  {
    image: t2,
    title: "Luxury Catering",
    description:
      "Michelin-inspired menus curated by world-class chefs. Multi-course dining experiences that delight every palate and elevate your celebration.",
  },
  {
    image: t3,
    title: "Couture Styling",
    description:
      "From bridal couture to groomsmen attire, our stylists ensure every member of your wedding party looks picture-perfect.",
  },
  {
    image: t4,
    title: "Live Entertainment",
    description:
      "Orchestras, DJs, cultural performers, and surprise acts — we curate entertainment that keeps your guests captivated all night.",
  },
  {
    image: t5,
    title: "Photography & Film",
    description:
      "Cinematic storytelling captured through the lens. Our award-winning photographers and filmmakers immortalise your love story.",
  },
  {
    image: heroImg,
    title: "Honeymoon Planning",
    description:
      "Your celebration doesn't end at the reception. We craft dream honeymoon itineraries to the world's most romantic destinations.",
  },
];

const WeddingServicesCarousel = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const itemsPerView = 3;
  const maxIndex = Math.max(0, services.length - itemsPerView);

  const next = () => setCurrent((p) => Math.min(p + 1, maxIndex));
  const prev = () => setCurrent((p) => Math.max(p - 1, 0));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((p) => (p >= maxIndex ? 0 : p + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  return (
    <section ref={ref} className="py-20 md:py-32 px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-body tracking-[0.2em] uppercase text-primary mb-4 block">
            Our Services
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Crafting Every Detail
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            From flowers to film, every element is designed to make your wedding
            an unforgettable masterpiece.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${current * (100 / itemsPerView + 2)}%` }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
            >
              {services.map((svc, i) => (
                <motion.div
                  key={svc.title}
                  className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group"
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                >
                  <div className="relative rounded-2xl overflow-hidden h-72 md:h-80">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                        {svc.title}
                      </h3>
                      <p className="font-body text-muted-foreground text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {svc.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              disabled={current === 0}
              className="p-3 rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              disabled={current === maxIndex}
              className="p-3 rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingServicesCarousel;
