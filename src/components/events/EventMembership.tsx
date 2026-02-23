import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { useInView } from "framer-motion";
import membershipImg from "@/assets/events/membership.jpg";

const accordionItems = [
  {
    title: "Benefits",
    content: "Enjoy priority booking, exclusive venue access, dedicated event coordinators, complimentary upgrades, and VIP networking opportunities at all DemiGod House events. Members receive up to 25% off on all event packages.",
  },
  {
    title: "Enrollment",
    content: "Join our membership program through a simple application process. Submit your details online, and our team will schedule a personalized consultation to understand your event needs and assign the perfect membership tier.",
  },
  {
    title: "Membership Tiers",
    content: "Choose from Silver, Gold, and Platinum tiers — each offering escalating benefits from priority reservations to fully bespoke event curation, personal concierge services, and exclusive access to invite-only gatherings.",
  },
  {
    title: "Standards",
    content: "Every DemiGod House event adheres to the highest standards of luxury, safety, and sustainability. Our ISO-certified processes ensure impeccable execution, from venue selection to post-event follow-through.",
  },
];

const EventMembership = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section ref={ref} className="py-24 px-4">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="px-4 py-1.5 rounded-full text-xs font-body font-semibold tracking-widest uppercase text-warm-gold border border-warm-gold/20 mb-4 inline-block">
            Exclusive
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Membership <span className="text-gradient-coral">Program</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            {accordionItems.map((item, i) => (
              <div
                key={item.title}
                className={`rounded-xl overflow-hidden border transition-colors duration-300 ${
                  openIndex === i ? "border-warm-gold/30" : "border-border"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className={`font-heading text-lg font-semibold transition-colors ${
                    openIndex === i ? "text-warm-gold" : "text-foreground"
                  }`}>
                    {item.title}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronDown size={20} className={openIndex === i ? "text-warm-gold" : "text-muted-foreground"} />
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
                      <p className="px-5 pb-5 font-body text-muted-foreground text-sm leading-relaxed">
                        {item.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative rounded-2xl overflow-hidden"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img src={membershipImg} alt="VIP Membership" className="w-full h-[500px] object-cover rounded-2xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-deep/30 to-transparent rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventMembership;
