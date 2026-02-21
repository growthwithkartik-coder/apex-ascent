import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "M&M", href: "/" },
  { label: "Corporate", href: "/events" },
  { label: "Wedding", href: "/events" },
  { label: "Events", href: "/events" },
];

const EventHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-deep/90 backdrop-blur-xl shadow-elevated border-b border-warm-gold/10"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/events" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg gradient-warm flex items-center justify-center font-heading font-bold text-foreground text-lg">
            D
          </div>
          <span className={`font-heading text-xl font-bold transition-colors duration-300 ${
            scrolled ? "text-primary-foreground" : "text-foreground"
          }`}>
            Demigod House
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`relative font-body text-sm font-medium tracking-wide transition-colors duration-300 group ${
                scrolled ? "text-primary-foreground/80 hover:text-warm-gold" : "text-foreground/80 hover:text-warm-gold"
              }`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-warm-gold transition-all duration-400 group-hover:w-full" />
            </Link>
          ))}
          <motion.button
            className="px-5 py-2.5 rounded-lg gradient-warm font-body font-semibold text-sm text-foreground"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className={scrolled ? "text-primary-foreground" : "text-foreground"} />
          ) : (
            <Menu className={scrolled ? "text-primary-foreground" : "text-foreground"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          className="md:hidden bg-slate-deep/95 backdrop-blur-xl border-t border-warm-gold/10 px-6 pb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="block py-3 font-body text-primary-foreground/80 hover:text-warm-gold transition-colors border-b border-primary-foreground/5"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button className="mt-4 w-full px-5 py-3 rounded-lg gradient-warm font-body font-semibold text-foreground">
            Book Now
          </button>
        </motion.div>
      )}
    </motion.header>
  );
};

export default EventHeader;
