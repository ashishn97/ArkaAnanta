import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import NeumorphicCard from './NeumorphicCard';

const Services = () => {
  // Use state to track which card is currently active (hovered or tapped)
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section
      id="services"
      className="py-32 px-6 bg-[#0A0A0A] relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[50%] bg-[#00E5FF]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-[#FF007A]/10 text-[#FF007A] text-[10px] font-bold uppercase tracking-[0.2em] mb-4 border border-[#FF007A]/20"
          >
            Digital Capabilities
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 text-glow"
          >
            Core Expertise
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-[#D1D1D1]/60 text-lg font-inter"
          >
            Leveraging cutting-edge IoT, AI, and GIS technologies to deliver
            specialized solutions for renewable asset management.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {SERVICES.map((service, index) => {
            const isActive = activeCard === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  opacity: { duration: 0.5, delay: index * 0.05 },
                  y: { duration: 0.5, delay: index * 0.05 }
                }}
                onClick={() => setActiveCard(isActive ? null : index)}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                animate={isActive ? "hover" : "initial"}
                className="relative group perspective-1000 cursor-pointer"
              >
                <NeumorphicCard
                  className="relative flex flex-col items-center text-center border border-white/5 transition-all duration-500 !p-6 md:!p-8 min-h-[180px]"
                  tilt={false}
                >
                  <motion.div
                    variants={{
                      hover: {
                        y: -12,
                        scale: 1.1,
                        filter: "drop-shadow(0 0 15px rgba(0, 229, 255, 0.4))",
                      }
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="mb-6 p-5 rounded-[2rem] bg-black border border-white/5
                               flex items-center justify-center
                               shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]
                               transition-all duration-500 ease-out"
                  >
                    {service.icon}
                  </motion.div>

                  <motion.h3
                    variants={{ hover: { color: "#00E5FF" } }}
                    className="text-lg font-bold text-white mb-4 leading-tight transition-colors duration-500 font-inter px-2"
                  >
                    {service.title}
                  </motion.h3>

                  <div className="flex justify-center w-full">
                    <motion.div
                      variants={{ hover: { width: "80%", opacity: 0.7 } }}
                      initial={{ width: "24px", opacity: 0.2 }}
                      className="h-1 bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent rounded-full"
                    />
                  </div>

                  <motion.div
                    variants={{
                      hover: {
                        height: "auto",
                        opacity: 1,
                        marginTop: "1.5rem",
                        transition: {
                          height: { duration: 0.4, ease: "easeOut" },
                          opacity: { duration: 0.3, delay: 0.1 }
                        }
                      }
                    }}
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm font-medium leading-relaxed text-[#D1D1D1]/90 text-center font-inter antialiased max-w-[240px]">
                      {service.description}
                    </p>
                  </motion.div>

                  <div className={`absolute inset-0 bg-[#00E5FF]/[0.02] transition-opacity duration-700 pointer-events-none ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                </NeumorphicCard>

                <motion.div
                  variants={{ hover: { scale: 1.02, y: -6 } }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute inset-0 -z-10 rounded-[28px]"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
