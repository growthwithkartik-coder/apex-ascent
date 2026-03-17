import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import catConference from "@/assets/corporate/cat-conference.jpg";
import catMilestone from "@/assets/corporate/cat-milestone.jpg";
import catShareholder from "@/assets/corporate/cat-shareholder.jpg";
import catNetworking from "@/assets/corporate/cat-networking.jpg";
import catRetreat from "@/assets/corporate/cat-retreat.jpg";
import catPolitical from "@/assets/corporate/cat-political.jpg";

const categories = [
  { title: "Conference", image: catConference, span: "col-span-1 row-span-1 h-72" },
  { title: "Company Milestone", image: catMilestone, span: "col-span-1 row-span-1 h-72 sm:h-[340px]" },
  { title: "Shareholder Meeting", image: catShareholder, span: "col-span-1 row-span-1 h-72" },
  { title: "Networking Event", image: catNetworking, span: "col-span-1 row-span-1 h-72 sm:h-[340px]" },
  { title: "Company Retreat", image: catRetreat, span: "col-span-1 row-span-1 h-72" },
  { title: "Political Event", image: catPolitical, span: "col-span-1 row-span-1 h-72 sm:h-[340px]" },
];

const CorporateCategories = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="section-padding bg-card/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-primary mb-3 block">
            What We Do
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Event Categories
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className={`group relative rounded-xl overflow-hidden cursor-pointer ${cat.span}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent transition-opacity duration-300" />
              
              {/* Title container */}
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                <div>
                  <h3 className="font-heading text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {cat.title}
                  </h3>
                  <div className="w-0 h-[2px] bg-primary mt-2 transition-all duration-500 group-hover:w-12" />
                </div>
                <motion.span
                  className="text-xs font-body text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  View →
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporateCategories;
