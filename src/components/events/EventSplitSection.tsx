import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import splitAbout from "@/assets/events/split-about.jpg";

const EventAbout = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} className="py-24 md:py-32 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image with parallax */}
        <motion.div
          className="relative rounded-2xl overflow-hidden group"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.img
            src={splitAbout}
            alt="About the event"
            className="w-full h-[500px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
            style={{ y }}
          />
          <div className="absolute inset-0 rounded-2xl" style={{ background: "linear-gradient(to top, hsl(240 20% 4% / 0.4), transparent)" }} />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl blur-[60px] opacity-40" style={{ background: "hsl(260 85% 65%)" }} />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <span className="font-body text-sm tracking-widest uppercase mb-4 block" style={{ color: "hsl(260 85% 65%)" }}>
            About The Event
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6" style={{ color: "hsl(0 0% 95%)" }}>
            Where Innovation
            <span className="ev-gradient-text block">Meets Excellence</span>
          </h2>
          <p className="font-body leading-relaxed mb-6" style={{ color: "hsl(240 10% 60%)" }}>
            DemiGod House brings together the brightest minds in technology, business, and creativity. Our events are meticulously crafted experiences that blend cutting-edge production with meaningful connections.
          </p>
          <p className="font-body leading-relaxed mb-8" style={{ color: "hsl(240 10% 50%)" }}>
            From intimate boardroom gatherings to grand-scale conferences, every detail is designed to inspire, connect, and transform. Join a community that's shaping the future.
          </p>
          <button className="ev-btn px-8 py-3 rounded-xl font-body font-semibold">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default EventAbout;
