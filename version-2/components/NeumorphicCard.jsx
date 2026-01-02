import React from 'react';
import { motion } from 'framer-motion';

const NeumorphicCard = ({
  children,
  delay = 0,
  className = "",
  tilt = false,
  gradientBorder = false
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover={
        tilt
          ? {
              rotateX: -2,
              rotateY: 2,
              scale: 1.03,
              transition: { duration: 0.3 }
            }
          : {}
      }
      className={`relative p-8 rounded-[28px] neumorph-out hover:neumorph-in transition-all duration-500 overflow-hidden group ${className}`}
    >
      {gradientBorder && (
        <div className="absolute inset-0 border border-[transparent]/20 group-hover:border-[#00E5FF]/10 transition-colors duration-500 rounded-[28px] pointer-events-none" />
      )}

      {/* Subtle overlay gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default NeumorphicCard;
