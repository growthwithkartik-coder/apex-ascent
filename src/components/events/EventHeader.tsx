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
          ? "backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
      style={scrolled ? { background: "hsl(240 20% 4% / 0.85)", borderBottom: "1px solid hsl(260 85% 65% / 0.1)" } : {}}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/events" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center font-heading font-bold text-lg" style={{ background: "var(--ev-gradient)", color: "hsl(0 0% 100%)" }}>
            D
          </div>
          <span className="font-heading text-xl font-bold" style={{ color: "hsl(0 0% 95%)" }}>
            Demigod House
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="relative font-body text-sm font-medium tracking-wide transition-colors duration-300 group"
              style={{ color: "hsl(0 0% 70%)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(260 85% 65%)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(0 0% 70%)")}
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-400 group-hover:w-full"
                style={{ background: "hsl(260 85% 65%)" }}
              />
            </Link>
          ))}
          <motion.button
            className="ev-btn px-5 py-2.5 rounded-lg font-body font-semibold text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.button>
        </nav>

        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? (
            <X style={{ color: "hsl(0 0% 95%)" }} />
          ) : (
            <Menu style={{ color: "hsl(0 0% 95%)" }} />
          )}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          className="md:hidden px-6 pb-6"
          style={{ background: "hsl(240 20% 4% / 0.95)", backdropFilter: "blur(20px)", borderTop: "1px solid hsl(260 85% 65% / 0.1)" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="block py-3 font-body transition-colors"
              style={{ color: "hsl(0 0% 70%)", borderBottom: "1px solid hsl(0 0% 100% / 0.05)" }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button className="mt-4 w-full ev-btn px-5 py-3 rounded-lg font-body font-semibold">
            Book Now
          </button>
        </motion.div>
      )}
    </motion.header>
  );
};

export default EventHeader;
