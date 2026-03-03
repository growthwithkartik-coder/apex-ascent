import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "M&M", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Corporate", href: "/events" },
  { label: "Wedding", href: "/events" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

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
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Demigod House"
            className="w-10 h-10 rounded-lg object-cover"
          />
          <span className="font-heading text-xl font-bold text-white transition-colors duration-300">
            Demigod House
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`relative font-body text-sm font-medium tracking-wide transition-colors duration-300 group ${
                location.pathname === link.href
                  ? "text-warm-gold"
                  : "text-white/80 hover:text-warm-gold"
              }`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-warm-gold transition-all duration-400 group-hover:w-full" />
            </Link>
          ))}
          <motion.button
            className="px-5 py-2.5 rounded-lg btn-gold font-body font-semibold text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </nav>

        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? (
            <X className="text-white" />
          ) : (
            <Menu className="text-white" />
          )}
        </button>
      </div>

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
              className="block py-3 font-body text-white/80 hover:text-warm-gold transition-colors border-b border-white/5"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button className="mt-4 w-full px-5 py-3 rounded-lg btn-gold font-body font-semibold">
            Contact Us
          </button>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
