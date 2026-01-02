import React from 'react';
import { Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur-md border-b border-[#0a0a0a]/15 bg-[#0A0A0A]/30">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center group"
        >
          <div className="relative h-10 w-10 mr-2 bg-white rounded-lg p-0.5 overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            <img
              src="/assets/logo.jpg"
              alt="Arka Ananta Logo"
              className="h-full w-full object-contain"
            />
          </div>
          <span className="font-bold text-lg tracking-widest text-white hidden sm:block group-hover:text-[#f4f4f4] transition-colors">
            ARKA ANANTA
          </span>
        </motion.a>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {['About', 'Services', 'Team', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[#f4f4f4] hover:text-[#00E5FF] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        <motion.a
          href="https://www.linkedin.com/company/arka-ananta-pvt-ltd/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-white/5 transition-all"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <Linkedin className="w-5 h-5 text-[#00E5FF]" />
        </motion.a>
      </div>
    </header>
  );
};

export default Header;
