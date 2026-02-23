import { motion } from "framer-motion";

const schedule = [
  { time: "09:00 AM", title: "Registration & Welcome Coffee", desc: "Check in and connect with fellow attendees" },
  { time: "10:00 AM", title: "Opening Keynote", desc: "Setting the vision for the future of events" },
  { time: "11:30 AM", title: "Panel: Innovation in Experience Design", desc: "Industry leaders discuss emerging trends" },
  { time: "01:00 PM", title: "Networking Lunch", desc: "Curated dining experience with roundtable discussions" },
  { time: "02:30 PM", title: "Workshop: Immersive Tech", desc: "Hands-on with VR, AR, and spatial computing" },
  { time: "04:00 PM", title: "Fireside Chat", desc: "Intimate conversation with the CEO of DemiGod House" },
  { time: "06:00 PM", title: "Gala Dinner & Awards", desc: "Evening celebration with live entertainment" },
];

const EventTimeline = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-body text-sm tracking-widest uppercase mb-4 block" style={{ color: "hsl(260 85% 65%)" }}>
            Schedule
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold" style={{ color: "hsl(0 0% 95%)" }}>
            Event <span className="ev-gradient-text">Timeline</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px" style={{ background: "hsl(260 85% 65% / 0.2)" }} />

          <div className="space-y-8">
            {schedule.map((item, i) => (
              <motion.div
                key={item.title}
                className="relative flex gap-6 md:gap-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                {/* Dot */}
                <div className="relative z-10 flex-shrink-0 w-12 md:w-16 flex items-start justify-center pt-1">
                  <motion.div
                    className="w-3 h-3 rounded-full"
                    style={{ background: "hsl(260 85% 65%)", boxShadow: "0 0 12px hsl(260 85% 65% / 0.5)" }}
                    whileInView={{ scale: [0.8, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  />
                </div>

                {/* Content */}
                <div className="ev-glass rounded-xl p-5 flex-1 group hover:border-[hsl(260_85%_65%_/_0.3)] transition-colors duration-300">
                  <span className="font-body text-xs font-semibold tracking-wider uppercase" style={{ color: "hsl(260 85% 65%)" }}>
                    {item.time}
                  </span>
                  <h3 className="font-heading text-lg font-bold mt-1 mb-1" style={{ color: "hsl(0 0% 95%)" }}>
                    {item.title}
                  </h3>
                  <p className="font-body text-sm" style={{ color: "hsl(240 10% 55%)" }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventTimeline;
