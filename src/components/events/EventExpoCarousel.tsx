import { motion } from "framer-motion";
import eventGala from "@/assets/events/event-gala.jpg";
import eventLaunch from "@/assets/events/event-launch.jpg";
import eventWedding from "@/assets/events/event-wedding.jpg";
import eventFestival from "@/assets/events/event-festival.jpg";
import eventNetworking from "@/assets/events/event-networking.jpg";
import eventAwards from "@/assets/events/event-awards.jpg";

const gallery = [eventGala, eventLaunch, eventWedding, eventFestival, eventNetworking, eventAwards];

const EventGallery = () => {
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
            Gallery
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold" style={{ color: "hsl(0 0% 95%)" }}>
            Past <span className="ev-gradient-text">Events</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((img, i) => (
            <motion.div
              key={i}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${
                i === 0 || i === 5 ? "md:row-span-2" : ""
              }`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <img
                src={img}
                alt={`Event ${i + 1}`}
                className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                  i === 0 || i === 5 ? "h-full min-h-[300px] md:min-h-[500px]" : "h-56 md:h-60"
                }`}
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                style={{ background: "hsl(260 85% 65% / 0.3)" }}
              >
                <span className="font-body font-semibold tracking-wide" style={{ color: "hsl(0 0% 100%)" }}>View</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventGallery;
