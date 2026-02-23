import { motion } from "framer-motion";
import { Sparkles, Users, Mic, Palette, Zap, Globe } from "lucide-react";

const highlights = [
  { icon: Sparkles, title: "Premium Production", desc: "World-class AV, lighting, and immersive stage design." },
  { icon: Users, title: "Curated Networking", desc: "Connect with 500+ industry leaders and innovators." },
  { icon: Mic, title: "Keynote Speakers", desc: "Insights from global thought leaders and pioneers." },
  { icon: Palette, title: "Bespoke Design", desc: "Every element crafted to reflect your brand identity." },
  { icon: Zap, title: "Live Tech Demos", desc: "Hands-on experience with cutting-edge innovations." },
  { icon: Globe, title: "Global Reach", desc: "Hybrid event capabilities connecting worldwide audiences." },
];

const EventHighlights = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-body text-sm tracking-widest uppercase mb-4 block" style={{ color: "hsl(260 85% 65%)" }}>
            Highlights
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold" style={{ color: "hsl(0 0% 95%)" }}>
            What to <span className="ev-gradient-text">Expect</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              className="ev-glass rounded-2xl p-8 group cursor-pointer transition-all duration-300 hover:border-[hsl(260_85%_65%_/_0.3)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4, boxShadow: "0 20px 60px hsl(260 85% 65% / 0.15)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: "hsl(260 85% 65% / 0.1)" }}
              >
                <item.icon size={22} style={{ color: "hsl(260 85% 65%)" }} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3" style={{ color: "hsl(0 0% 95%)" }}>
                {item.title}
              </h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: "hsl(240 10% 55%)" }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventHighlights;
