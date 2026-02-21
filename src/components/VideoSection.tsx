import { motion } from "framer-motion";
import demigodVideo from "@/assets/home/demigod.mp4";

const VideoSection = () => {
  return (
    <section className="relative h-[85vh] overflow-hidden">
      {/* Background video */}
      <video
        src={demigodVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-deep via-slate-deep/70 to-slate-deep/40" />

      {/* Slow zoom animation layer */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <motion.span
          className="px-4 py-2 text-xs font-body font-semibold tracking-[0.2em] uppercase text-warm-gold border border-warm-gold/20 rounded-full mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Vision
        </motion.span>

        <motion.h2
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 max-w-4xl leading-tight"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Where Vision Meets <span className="text-gradient-coral">Execution</span>
        </motion.h2>

        <motion.p
          className="font-body text-primary-foreground/70 text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We craft strategic brand partnerships, deliver cutting-edge marketing solutions, 
          and produce world-class events that elevate your brand to legendary status.
        </motion.p>

        <motion.button
          className="px-10 py-4 rounded-xl btn-gold font-body font-semibold text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Our Work
        </motion.button>
      </div>
    </section>
  );
};

export default VideoSection;
