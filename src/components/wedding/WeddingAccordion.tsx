import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    id: "personalization",
    title: "Personalization",
    content:
      "Every wedding we plan is uniquely crafted to reflect the couple's personality, culture, and love story. No two celebrations are ever the same.",
  },
  {
    id: "value",
    title: "Unparalleled Value",
    content:
      "We leverage our extensive network of vendors and venues to deliver extraordinary wedding experiences that maximize your budget without compromising on luxury.",
  },
  {
    id: "fees",
    title: "Straightforward Fees",
    content:
      "Our transparent pricing ensures you know exactly what you're investing in. No hidden costs, no surprises — just honest, upfront wedding planning.",
  },
  {
    id: "service",
    title: "Superior Service",
    content:
      "From the first consultation to the last dance, our dedicated team provides white-glove service ensuring every detail is executed to perfection.",
  },
  {
    id: "support",
    title: "24/7 Support",
    content:
      "Wedding planning doesn't follow business hours. Our team is available around the clock to address any concerns, answer questions, and provide peace of mind.",
  },
];

const WeddingAccordion = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-body tracking-[0.2em] uppercase text-primary mb-4 block">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Brides & Grooms Choose Us
          </h2>
          <p className="font-body text-muted-foreground text-base md:text-lg">
            From royal hospitality to majestic execution, we make your divine
            dream wedding come alive.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {items.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border border-border/50 rounded-xl px-6 bg-card/50 backdrop-blur-sm"
              >
                <AccordionTrigger className="font-heading text-lg font-semibold text-foreground hover:text-primary transition-colors py-5">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground text-base leading-relaxed pb-5">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingAccordion;
