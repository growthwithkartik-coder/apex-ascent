import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const links = {
    "Quick Links": ["Home", "About Us", "Portfolio", "Blog", "Contact"],
    "Services": ["Brand Association", "Brand Development", "Marketing", "Event Management", "Digital Media"],
  };

  const socials = ["LinkedIn", "Instagram", "Twitter", "Facebook"];

  return (
    <footer className="relative pt-20 pb-8 px-4 md:px-8 lg:px-16">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(var(--gold)/0.03),transparent_50%),radial-gradient(circle_at_80%_50%,hsl(var(--deep-purple)/0.03),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Description */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-gradient-gold mb-4">DemiGod House</h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6">
              Media, Marketing, and Events agency crafting impactful brand success stories worldwide.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground font-body text-sm">
                <Mail size={16} className="text-primary" />
                contact@demigodhouse.com
              </div>
              <div className="flex items-center gap-3 text-muted-foreground font-body text-sm">
                <Phone size={16} className="text-primary" />
                +1 (555) 000-0000
              </div>
              <div className="flex items-center gap-3 text-muted-foreground font-body text-sm">
                <MapPin size={16} className="text-primary" />
                New York, NY
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="font-heading text-lg font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-body text-muted-foreground text-sm hover:text-primary transition-colors duration-300 animated-underline"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-4">Stay Updated</h4>
            <p className="font-body text-muted-foreground text-sm mb-4">
              Subscribe to our newsletter for industry insights.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-l-lg glass-card font-body text-sm text-foreground placeholder:text-muted-foreground border-0 outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="px-4 py-3 rounded-r-lg gradient-gold font-body font-semibold text-primary-foreground text-sm hover:opacity-90 transition-opacity">
                Join
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {socials.map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="w-10 h-10 glass-card rounded-full flex items-center justify-center text-muted-foreground text-xs font-body font-bold hover:text-primary transition-all duration-300"
                  whileHover={{ scale: 1.1, boxShadow: "0 0 20px hsl(40 90% 55% / 0.3)" }}
                >
                  {social[0]}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-8" />

        {/* Copyright */}
        <div className="text-center font-body text-muted-foreground text-sm">
          © 2026 DemiGod House. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
