import { motion } from "framer-motion";
import eventGala from "@/assets/events/event-gala.jpg";
import eventLaunch from "@/assets/events/event-launch.jpg";
import eventWedding from "@/assets/events/event-wedding.jpg";
import eventFestival from "@/assets/events/event-festival.jpg";

const speakers = [
  { image: eventGala, name: "Arjun Kapoor", role: "CEO, TechVista Global", topic: "Future of AI in Events" },
  { image: eventLaunch, name: "Priya Sharma", role: "Creative Director, Luxe Co.", topic: "Design Thinking for Impact" },
  { image: eventWedding, name: "Ravi Mehta", role: "Founder, InnovateLab", topic: "Building Tomorrow's Experiences" },
  { image: eventFestival, name: "Ananya Desai", role: "VP Marketing, BrandForce", topic: "The Art of Storytelling" },
];

const EventSpeakers = () => {
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
            Speakers
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold" style={{ color: "hsl(0 0% 95%)" }}>
            Meet Our <span className="ev-gradient-text">Speakers</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map((speaker, i) => (
            <motion.div
              key={speaker.name}
              className="group rounded-2xl overflow-hidden ev-glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, hsl(240 20% 4%), transparent 60%)" }} />
              </div>
              <div className="p-5 -mt-8 relative z-10">
                <h3 className="font-heading text-lg font-bold" style={{ color: "hsl(0 0% 95%)" }}>
                  {speaker.name}
                </h3>
                <p className="font-body text-xs mb-2" style={{ color: "hsl(260 85% 65%)" }}>
                  {speaker.role}
                </p>
                <p className="font-body text-sm" style={{ color: "hsl(240 10% 55%)" }}>
                  {speaker.topic}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSpeakers;
