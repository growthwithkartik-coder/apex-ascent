import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import catConference from "@/assets/corporate/cat-conference.jpg";
import catMilestone from "@/assets/corporate/cat-milestone.jpg";
import catShareholder from "@/assets/corporate/cat-shareholder.jpg";
import catNetworking from "@/assets/corporate/cat-networking.jpg";
import catRetreat from "@/assets/corporate/cat-retreat.jpg";
import catPolitical from "@/assets/corporate/cat-political.jpg";

const categories = [
  { title: "Conference", image: catConference },
  { title: "Company Milestone", image: catMilestone },
  { title: "Shareholder Meeting", image: catShareholder },
  { title: "Networking Event", image: catNetworking },
  { title: "Company Retreat", image: catRetreat },
  { title: "Political Event", image: catPolitical },
];

const CorporateCategories = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-primary mb-4 block">
            What We Do
          </span>
          <h2 className="heading-xl text-foreground">
            Event <span className="text-gradient-coral">Categories</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <motion.h3
                  className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300"
                >
                  {cat.title}
                </motion.h3>
                <div className="w-0 h-0.5 bg-primary mt-2 transition-all duration-500 group-hover:w-16" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporateCategories;
