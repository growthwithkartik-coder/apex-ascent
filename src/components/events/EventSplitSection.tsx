import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import splitAbout from "@/assets/events/split-about.jpg";
import demigodVideo from "@/assets/home/demigod.mp4";

const EventSplitSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="w-full overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh]">
        {/* Left — Premium Image */}
        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.img
            src={splitAbout}
            alt="Crafting Moments"
            className="w-full h-full min-h-[50vh] lg:min-h-full object-cover"
            whileInView={{ scale: [1.08, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20" />
          {/* Glass text overlay */}
          <motion.div
            className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl"
            style={{ background: "hsl(0 0% 100% / 0.1)", backdropFilter: "blur(16px)", border: "1px solid hsl(0 0% 100% / 0.15)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-3 leading-tight">
              Crafting Moments That Define Legacies
            </h2>
            <p className="font-body text-primary-foreground/80 text-sm md:text-base leading-relaxed mb-4">
              At DemiGod House, we believe every event is a canvas for storytelling. Our team of seasoned professionals brings together creative vision, meticulous planning, and flawless execution.
            </p>
            <motion.button
              className="btn-gold px-8 py-3 rounded-xl font-body font-semibold text-sm"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Discover Our Approach
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right — Auto-playing muted Video */}
        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0, x: 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        >
          <video
            src={demigodVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full min-h-[50vh] lg:min-h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-deep/40 via-transparent to-slate-deep/20" />
          {/* Glass text overlay */}
          <motion.div
            className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl"
            style={{ background: "hsl(0 0% 100% / 0.1)", backdropFilter: "blur(16px)", border: "1px solid hsl(0 0% 100% / 0.15)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-3 leading-tight">
              Immersive Experiences, Elevated Standards
            </h2>
            <p className="font-body text-primary-foreground/80 text-sm md:text-base leading-relaxed mb-4">
              Every touchpoint matters. From the first invitation to the final farewell, we curate immersive experiences that engage all senses and leave lasting memories.
            </p>
            <motion.button
              className="btn-gold px-8 py-3 rounded-xl font-body font-semibold text-sm"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              View Our Portfolio
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventSplitSection;
