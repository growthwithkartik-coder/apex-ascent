import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What is the event format?", a: "The event combines keynote sessions, interactive workshops, networking breaks, and an evening gala — all designed for maximum engagement and connection." },
  { q: "Who should attend?", a: "Business leaders, marketing professionals, event planners, brand managers, and anyone passionate about innovation in experiences and technology." },
  { q: "Is there a virtual attendance option?", a: "Yes, we offer a hybrid format with full live-streaming, virtual networking rooms, and on-demand access to all sessions for 30 days post-event." },
  { q: "What's included in the ticket?", a: "Full conference access, networking lunch, workshop materials, gala dinner entry, a welcome kit, and post-event recordings." },
  { q: "How can I become a sponsor?", a: "We offer tiered sponsorship packages with brand visibility, speaking slots, and VIP hosting opportunities. Contact our partnerships team for details." },
];

const EventFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

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
            FAQ
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold" style={{ color: "hsl(0 0% 95%)" }}>
            Common <span className="ev-gradient-text">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              className="ev-glass rounded-xl overflow-hidden transition-colors duration-300"
              style={{ borderColor: openIndex === i ? "hsl(260 85% 65% / 0.3)" : undefined }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span
                  className="font-heading text-lg font-semibold transition-colors"
                  style={{ color: openIndex === i ? "hsl(260 85% 65%)" : "hsl(0 0% 90%)" }}
                >
                  {faq.q}
                </span>
                <motion.div animate={{ rotate: openIndex === i ? 180 : 0 }} transition={{ duration: 0.25 }}>
                  <ChevronDown size={20} style={{ color: openIndex === i ? "hsl(260 85% 65%)" : "hsl(240 10% 50%)" }} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-5 pb-5 font-body text-sm leading-relaxed" style={{ color: "hsl(240 10% 55%)" }}>
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventFAQ;
