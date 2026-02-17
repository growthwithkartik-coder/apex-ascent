import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const links = {
    "Quick Links": ["Home", "About Us", "Portfolio", "Blog", "Contact"],
    Services: ["Brand Association", "Brand Development", "Marketing", "Event Management", "Digital Media"],
  };

  const socials = [
    { name: "LinkedIn", icon: "Li" },
    { name: "Instagram", icon: "Ig" },
    { name: "Twitter", icon: "X" },
    { name: "Facebook", icon: "Fb" },
  ];

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer ref={ref} className="relative pt-24 pb-8 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      {/* Background accents */}
      <div className="absolute -bottom-20 left-1/4 w-[400px] h-[400px] rounded-full opacity-[0.03] blur-3xl" style={{ background: "hsl(12 80% 55%)" }} />
      <div className="absolute -bottom-20 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.03] blur-3xl" style={{ background: "hsl(175 55% 30%)" }} />

      <motion.div
        className="relative max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Description */}
          <motion.div variants={itemVariants}>
            <h3 className="font-heading text-2xl font-bold text-gradient-coral mb-4">DemiGod House</h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6">
              Media, Marketing, and Events agency crafting impactful brand success stories worldwide.
            </p>
            <div className="space-y-3">
              {[
                { icon: Mail, text: "contact@demigodhouse.com" },
                { icon: Phone, text: "+1 (555) 000-0000" },
                { icon: MapPin, text: "New York, NY" },
              ].map(({ icon: Icon, text }) => (
                <motion.div
                  key={text}
                  className="flex items-center gap-3 text-muted-foreground font-body text-sm group cursor-pointer"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon size={16} className="text-primary group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-foreground transition-colors">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(links).map(([title, linkItems]) => (
            <motion.div key={title} variants={itemVariants}>
              <h4 className="font-heading text-lg font-semibold text-foreground mb-5">{title}</h4>
              <ul className="space-y-3">
                {linkItems.map((item) => (
                  <li key={item}>
                    <motion.a
                      href="#"
                      className="font-body text-muted-foreground text-sm hover:text-primary transition-colors duration-300 flex items-center gap-1 group"
                      whileHover={{ x: 4 }}
                    >
                      <ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-primary" />
                      {item}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-5">Stay Updated</h4>
            <p className="font-body text-muted-foreground text-sm mb-4">
              Subscribe to our newsletter for industry insights.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-l-xl glass-card font-body text-sm text-foreground placeholder:text-muted-foreground border-0 outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
              />
              <motion.button
                className="px-5 py-3 rounded-r-xl gradient-coral font-body font-semibold text-primary-foreground text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join
              </motion.button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 glass-card rounded-xl flex items-center justify-center text-muted-foreground text-xs font-body font-bold shadow-elevated"
                  whileHover={{
                    scale: 1.15,
                    boxShadow: "0 4px 20px hsl(12 80% 55% / 0.2)",
                    color: "hsl(12 80% 55%)",
                    y: -3,
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="h-px mb-8"
          style={{ background: "linear-gradient(90deg, transparent, hsl(12 80% 55% / 0.15), hsl(175 55% 30% / 0.15), transparent)" }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Copyright */}
        <motion.div
          className="text-center font-body text-muted-foreground text-sm"
          variants={itemVariants}
        >
          © 2026 DemiGod House. All Rights Reserved.
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
