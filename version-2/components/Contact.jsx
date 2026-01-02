import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 md:py-32 bg-black overflow-hidden">
      {/* Spotlight Backdrop Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] opacity-40 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-b from-[#00E5FF]/40 via-[#00E5FF]/5 to-transparent blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Portion */}
        <div className="text-center mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-white/60 uppercase mb-4"
          >
            Let's Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-bold text-white mb-6"
          >
            Contact us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#D1D1D1] text-base md:text-xl font-medium"
          >
            Our team would love to hear from you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-6 md:space-y-8 pt-4"
          >
            <div className="flex items-center space-x-4 group">
              <div className="p-2 bg-white/5 rounded-xl border border-white/5">
                <Mail className="w-5 h-5 text-[#00E5FF]" />
              </div>
              <a
                href="mailto:support@arkaananta.com"
                className="text-[#00E5FF] font-semibold text-sm md:text-base hover:underline transition-all"
              >
                support@arkaananta.com
              </a>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="p-2 bg-white/5 rounded-xl border border-white/5">
                <Phone className="w-5 h-5 text-[#00E5FF]" />
              </div>
              <a
                href="tel:+919549301130"
                className="text-[#00E5FF] font-semibold text-sm md:text-base hover:underline transition-all"
              >
                +91 95493 01130
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-2 bg-white/5 rounded-xl border border-white/5">
                <MapPin className="w-5 h-5 text-[#00E5FF]" />
              </div>
              <span className="text-[#00E5FF] font-semibold text-sm md:text-base">
                Jaipur, Rajasthan, India
              </span>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white block">First name</label>
                  <input
                    type="text"
                    className="w-full bg-[#111] border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#00E5FF]/30 transition-all shadow-inner placeholder:text-white/10"
                    placeholder="Jane"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white block">Last name</label>
                  <input
                    type="text"
                    className="w-full bg-[#111] border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#00E5FF]/30 transition-all shadow-inner placeholder:text-white/10"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white block">Email</label>
                  <input
                    type="email"
                    className="w-full bg-[#111] border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#00E5FF]/30 transition-all shadow-inner placeholder:text-white/10"
                    placeholder="jane@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white block">Phone number</label>
                  <input
                    type="tel"
                    className="w-full bg-[#111] border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#00E5FF]/30 transition-all shadow-inner placeholder:text-white/10"
                    placeholder="+91 00000 00000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-white block">Choose a solution</label>
                <div className="relative">
                  <select className="w-full bg-[#111] border border-white/5 rounded-2xl px-5 py-4 text-white appearance-none focus:outline-none focus:border-[#00E5FF]/30 transition-all shadow-inner">
                    <option className="bg-[#111]">Select one...</option>
                    <option className="bg-[#111]">Asset Management</option>
                    <option className="bg-[#111]">Solar Maintenance</option>
                    <option className="bg-[#111]">Software Licensing</option>
                    <option className="bg-[#111]">Advisory Services</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-white/40"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-white block">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-[#111] border border-white/5 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#00E5FF]/30 transition-all shadow-inner resize-none placeholder:text-white/10"
                  placeholder="Type your message..."
                />
              </div>

              <div className="flex items-center space-x-3 py-2">
                <input
                  type="checkbox"
                  id="tos"
                  className="w-5 h-5 rounded-md bg-[#111] border-white/10 text-[#00E5FF] focus:ring-[#00E5FF]/30 accent-[#00E5FF]"
                />
                <label htmlFor="tos" className="text-sm text-white/80 font-medium">
                  I accept the{' '}
                  <a
                    href="#"
                    className="text-white underline decoration-white/30 hover:decoration-[#00E5FF] transition-all"
                  >
                    Terms of Service
                  </a>
                </label>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full md:w-auto px-12 py-4 bg-white text-black font-extrabold rounded-full hover:bg-gray-200 transition-colors shadow-2xl uppercase tracking-widest text-sm"
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
