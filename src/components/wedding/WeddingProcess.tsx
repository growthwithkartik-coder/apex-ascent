import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import consultationImg from "@/assets/wedding/process-consultation.jpg";
import venueImg from "@/assets/wedding/process-venue.jpg";
import decorImg from "@/assets/wedding/process-decor.jpg";

const steps = [
  {
    image: consultationImg,
    title: "Consultation & Planning",
    description:
      "We'll start with a complimentary consultation to understand your love story, wedding vision, and special requests.",
  },
  {
    image: venueImg,
    title: "Destination & Venue Selection",
    description:
      "We curate stunning wedding venues tailored to your style, budget, and guest experience.",
  },
  {
    image: decorImg,
    title: "Design & Decor Management",
    description:
      "Our team handles décor design, logistics, and guest experiences to create a seamless and unforgettable wedding celebration.",
  },
];

const WeddingProcess = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-body tracking-[0.2em] uppercase text-primary mb-4 block">
            How It Works
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Our Wedding Planning Process
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="flex flex-col items-center text-center group"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              {/* Step number */}
              <span className="text-xs font-body font-semibold text-primary tracking-widest mb-4">
                STEP {i + 1}
              </span>

              {/* Circular image with dotted border */}
              <div className="relative mb-6">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-dashed border-primary/40 p-2 group-hover:border-primary transition-colors duration-500">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
                {/* Shadow glow on hover */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl bg-primary/20" />
              </div>

              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingProcess;
