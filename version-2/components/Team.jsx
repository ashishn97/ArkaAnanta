import React from 'react';
import { Linkedin } from 'lucide-react';
import { TEAM } from '../constants';
import NeumorphicCard from './NeumorphicCard';
import { motion } from 'framer-motion';

const Team = () => {
  return (
    <section id="team" className="py-24 px-6 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-glow">
            Leadership
          </h2>
          <p className="text-[#00E5FF] font-bold uppercase tracking-widest text-sm">
            The Visionaries Behind Arka Ananta
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {TEAM.map((member, index) => (
            <NeumorphicCard
              key={index}
              delay={index * 0.1}
              className="relative overflow-hidden group h-full"
            >
              <div className="relative z-10 flex flex-col items-center h-full text-center">

                {/* Profile Image */}
                <div className="mb-6 relative">
                  
                  {/* Glow BEHIND image (same shape) */}
                  <div
                    className="absolute top-1/2 left-1/2 w-20 h-20 
                               -translate-x-1/2 -translate-y-1/2
                               bg-[#00E5FF]/5 rounded-2xl
                               pointer-events-none
                               shadow-[0_0_120px_rgba(0,229,255,0.25)]"
                  />

                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="relative z-10 w-20 h-20 rounded-2xl object-cover border border-white/10"
                    />
                  ) : (
                    <div className="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#161616] to-[#0A0A0A] border border-white/10 flex items-center justify-center text-3xl font-bold text-[#00E5FF]">
                      {member.name.charAt(0)}
                    </div>
                  )}
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-white min-h-[56px] flex items-center justify-center px-4">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-[#00E5FF] font-medium text-xs uppercase tracking-wider min-h-[32px] flex items-center justify-center mb-6">
                  {member.role}
                </p>

                {/* LinkedIn Icon */}
                <div className="mt-auto pb-4">
                  <motion.a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center 
                               border border-white/10 text-white/40 
                               hover:text-[#00E5FF] hover:border-[#00E5FF]/40
                               transition-all"
                    whileHover={{ scale: 1.15 }}
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                </div>

              </div>
            </NeumorphicCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
