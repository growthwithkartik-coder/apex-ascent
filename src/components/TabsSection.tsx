import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check } from "lucide-react";
import brandAssociation from "@/assets/home/brand_association.webp";
import brandDevelopment from "@/assets/home/Brand_Development.webp";
import ventureCapital from "@/assets/home/venture_capital.webp";
import brandMarketing from "@/assets/home/brand_marketing.jpeg";
import contractManufacturing from "@/assets/home/contract_manufacturing.webp";
import seedFunding from "@/assets/home/brand_seed_funding.webp";
import events from "@/assets/home/b2b_b2c_events.webp";

const tabs = [
  {
    label: "Brand Association",
    image: brandAssociation,
    heading: "Brand Association",
    description:
      "Amplifying brand visibility with strategic, high-impact advertising campaigns that ensure maximum reach, engagement, and conversions across global markets. We integrate traditional, digital, and experiential advertising techniques to position brands at the forefront of consumer attention and market influence.",
    points: [
      "End-to-end Brand Marketing, Strategizing, Development & Capital Procurement solutions.",
      "Powerhouse of strategic marketing and global brand elevation.",
      "Collaboration with industrial leaders to redefine market dominance.",
      "Luxury-driven, influence-focused brand positioning with scale.",
      "Strategic alignment of marketing resources to elevate product sales and long-term revenue growth.",
    ],
  },
  {
    label: "Brand Development",
    image: brandDevelopment,
    heading: "Brand Development",
    description:
      "Articulating, designing and curating a strategic brand market image reflecting consumer demand DNA while structuring brand products and services for global positioning.",
    points: [
      "Guaranteed retail participation of 50M+ consumers via B2B/B2C events and commerce channels.",
      "Time-tested strategic marketing driven by global research & analysis.",
      "ATL/BTL execution across print & digital media adapting to market cycles.",
      "Exclusive competitive positioning aligned with evolving consumer demand.",
      "Full creative liberty with funding-backed execution strategy.",
      "Campaign execution across 90+ countries through media associates.",
    ],
  },
  {
    label: "Venture Capital",
    image: ventureCapital,
    heading: "Venture Capital",
    description:
      "We bridge innovation with strategic funding, empowering businesses through seed investments, growth-stage financing, private equity structuring and scalable financial frameworks.",
    points: [
      "End-to-end VC solutions: Seed, Growth, Private Equity & Exit Strategies.",
      "Strategic capital syndication with institutional & angel networks.",
      "High-value exit planning and equity appreciation models.",
      "Financial scalability aligned with long-term enterprise growth.",
      "Structured capital infusion for dominant market presence.",
    ],
  },
  {
    label: "Brand Marketing",
    image: brandMarketing,
    heading: "Brand Marketing",
    description:
      "We curate high-impact marketing strategies that establish sectoral leadership and create immersive consumer experiences across competitive global landscapes.",
    points: [
      "Market-research driven execution aligned with global trends.",
      "Integrated global print & electronic media campaigns.",
      "Network across 65+ countries including traders & retail ecosystems.",
      "Data-backed demographic targeting strategies.",
      "Proven client retention with zero discontinuation history.",
    ],
  },
  {
    label: "Contract Manufacturing",
    image: contractManufacturing,
    heading: "Contract Manufacturing",
    description:
      "Structuring brand products & services aligned with consumer demand DNA while building seamless third-party partnerships for commercial expansion.",
    points: [
      "Global 3rd party manufacturing partnerships across developed & developing economies.",
      "Diversified sectors: Automotive, Gems, Jewellery, FMCG, Pharma, IT, Real Estate & more.",
      "Permanent long-term manufacturing alliances.",
      "Strategic collaboration between brands & industrial manufacturers.",
      "Dedicated channel partnership ecosystem.",
    ],
  },
  {
    label: "Brand Seed Funding",
    image: seedFunding,
    heading: "Brand Seed Funding",
    description:
      "Providing structured funding frameworks of up to $500M to transition visionary brands into market-dominant enterprises through strategic execution.",
    points: [
      "Up to $500 Million structured investment support.",
      "Operational presence across G20, ASEAN & BRICS corridors.",
      "Global media-backed brand broadcasting & positioning.",
      "Success-driven commercial finance instruments.",
      "Global stock exchange listing platforms for scalable brands.",
    ],
  },
  {
    label: "B2B & B2C Events",
    image: events,
    heading: "B2B & B2C Events",
    description:
      "Designing high-impact global events that connect industry leaders, innovators, corporations, and consumers through immersive brand-driven experiences.",
    points: [
      "1,600+ global events lined up through 2030.",
      "500,000+ average strategic participation base.",
      "Digital hosting & management services worldwide.",
      "High-level networking platforms for decision-makers.",
      "End-to-end event production & engagement execution.",
      "Technology-integrated interactive experiences.",
    ],
  },
];

const TabsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section ref={ref} className="py-28 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full opacity-[0.04] blur-3xl" style={{ background: "hsl(45 95% 55%)" }} />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-body font-semibold tracking-wider uppercase text-primary border border-primary/20">
            Services
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            What We <span className="text-gradient-sunset">Deliver</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive suite of services designed to elevate your brand to new heights.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {tabs.map((tab, i) => (
            <motion.button
              key={tab.label}
              onClick={() => setActiveTab(i)}
              className={`relative px-6 py-3 rounded-full font-body font-medium text-sm transition-all duration-300 ${
                i === activeTab
                  ? "gradient-coral text-primary-foreground"
                  : "glass-card text-muted-foreground hover:text-foreground"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              animate={i === activeTab ? { boxShadow: "0 4px 25px hsl(12 80% 55% / 0.25)" } : { boxShadow: "0 0px 0px transparent" }}
            >
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Image */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-elevated group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={tabs[activeTab].image}
                alt={tabs[activeTab].heading}
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
              {/* Floating label */}
              <motion.div
                className="absolute bottom-4 left-4 px-4 py-2 glass-card rounded-lg font-body font-semibold text-sm text-foreground"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {tabs[activeTab].label}
              </motion.div>
            </motion.div>

            {/* Text */}
            <div>
              <motion.h3
                className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                {tabs[activeTab].heading}
              </motion.h3>
              <motion.p
                className="font-body text-muted-foreground mb-8 leading-relaxed"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                {tabs[activeTab].description}
              </motion.p>
              <ul className="space-y-4">
                {tabs[activeTab].points.map((point, i) => (
                  <motion.li
                    key={point}
                    className="flex items-center gap-4 font-body text-foreground"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <span className="w-7 h-7 rounded-full gradient-coral flex items-center justify-center flex-shrink-0">
                      <Check size={14} className="text-primary-foreground" />
                    </span>
                    {point}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TabsSection;
