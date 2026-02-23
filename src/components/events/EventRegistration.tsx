import { motion } from "framer-motion";
import { useState } from "react";

const EventRegistration = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", role: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[150px] opacity-10" style={{ background: "hsl(260 85% 65%)" }} />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10" style={{ background: "hsl(220 90% 60%)" }} />

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-body text-sm tracking-widest uppercase mb-4 block" style={{ color: "hsl(260 85% 65%)" }}>
            Join Us
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4" style={{ color: "hsl(0 0% 95%)" }}>
            Reserve Your <span className="ev-gradient-text">Spot</span>
          </h2>
          <p className="font-body" style={{ color: "hsl(240 10% 55%)" }}>
            Secure your place at the most anticipated event of the year.
          </p>
        </motion.div>

        <motion.form
          className="ev-glass rounded-2xl p-8 md:p-10 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          onSubmit={(e) => e.preventDefault()}
        >
          {[
            { name: "name", label: "Full Name", type: "text", placeholder: "John Doe" },
            { name: "email", label: "Email Address", type: "email", placeholder: "john@company.com" },
            { name: "company", label: "Company", type: "text", placeholder: "Acme Inc." },
            { name: "role", label: "Job Title", type: "text", placeholder: "Product Manager" },
          ].map((field) => (
            <div key={field.name} className="relative">
              <label className="font-body text-xs font-semibold tracking-wider uppercase mb-2 block" style={{ color: "hsl(240 10% 55%)" }}>
                {field.label}
              </label>
              <input
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                value={form[field.name as keyof typeof form]}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl font-body text-sm outline-none transition-all duration-300 focus:ring-2"
                style={{
                  background: "hsl(240 15% 12%)",
                  color: "hsl(0 0% 95%)",
                  border: "1px solid hsl(260 85% 65% / 0.15)",
                }}
              />
            </div>
          ))}

          <motion.button
            type="submit"
            className="w-full ev-btn py-4 rounded-xl font-body font-bold text-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Register Now
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default EventRegistration;
