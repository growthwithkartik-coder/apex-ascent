import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Award, Users, Globe, Star } from "lucide-react";

const stats = [
  { icon: Users, value: 2500, suffix: "+", label: "Attendees" },
  { icon: Mic, value: 40, suffix: "+", label: "Speakers" },
  { icon: Globe, value: 15, suffix: "", label: "Countries" },
  { icon: Star, value: 98, suffix: "%", label: "Satisfaction" },
];

// Fix: import Mic
import { Mic } from "lucide-react";

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const EventStats = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-10" style={{ background: "hsl(260 85% 65%)" }} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-body text-sm tracking-widest uppercase mb-4 block" style={{ color: "hsl(260 85% 65%)" }}>
            Impact
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold" style={{ color: "hsl(0 0% 95%)" }}>
            Why <span className="ev-gradient-text">Attend</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="ev-glass rounded-2xl p-8 text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, boxShadow: "0 20px 60px hsl(260 85% 65% / 0.15)" }}
            >
              <stat.icon size={28} className="mx-auto mb-4 transition-transform group-hover:scale-110" style={{ color: "hsl(260 85% 65%)" }} />
              <div className="font-heading text-3xl md:text-4xl font-bold mb-2 ev-gradient-text">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <span className="font-body text-sm" style={{ color: "hsl(240 10% 55%)" }}>
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventStats;
