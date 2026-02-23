import { motion } from "framer-motion";
import splitAbout from "@/assets/events/split-about.jpg";
import demigodVideo from "@/assets/home/demigod.mp4";

const EventSplitSection = () => {
  return (
    <section className="w-full overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        {/* Left — Image */}
        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={splitAbout}
            alt="Crafting Moments"
            className="w-full h-full min-h-[50vh] lg:min-h-full object-cover hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20" />
          <div
            className="absolute bottom-6 left-6 right-6 p-6 rounded-xl"
            style={{ background: "hsl(0 0% 100% / 0.08)", backdropFilter: "blur(12px)", border: "1px solid hsl(0 0% 100% / 0.1)" }}
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
              Crafting Moments That Define Legacies
            </h2>
            <p className="font-body text-primary-foreground/70 text-sm leading-relaxed mb-4">
              At DemiGod House, we believe every event is a canvas for storytelling. Our team brings together creative vision, meticulous planning, and flawless execution.
            </p>
            <button className="btn-gold px-6 py-2.5 rounded-lg font-body font-semibold text-sm">
              Discover Our Approach
            </button>
          </div>
        </motion.div>

        {/* Right — Video */}
        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
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
          <div
            className="absolute bottom-6 left-6 right-6 p-6 rounded-xl"
            style={{ background: "hsl(0 0% 100% / 0.08)", backdropFilter: "blur(12px)", border: "1px solid hsl(0 0% 100% / 0.1)" }}
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
              Immersive Experiences, Elevated Standards
            </h2>
            <p className="font-body text-primary-foreground/70 text-sm leading-relaxed mb-4">
              From the first invitation to the final farewell, we curate immersive experiences that engage all senses and leave lasting memories.
            </p>
            <button className="btn-gold px-6 py-2.5 rounded-lg font-body font-semibold text-sm">
              View Our Portfolio
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventSplitSection;
