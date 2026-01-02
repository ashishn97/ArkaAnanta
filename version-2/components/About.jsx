import React from 'react';
import { ABOUT_CARDS } from '../constants';
import NeumorphicCard from './NeumorphicCard';

const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute -left-20 top-1/4 w-96 h-96 border border-[#00E5FF]/5 rounded-full pointer-events-none" />
      <div className="absolute -right-20 bottom-1/4 w-[500px] h-[500px] border border-[#FF007A]/5 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            <span className="text-[#00E5FF] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
              Our Ecosystem
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 text-glow leading-tight">
              The Renewable <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-white/20">
                Integrated Grid
              </span>
            </h2>
          </div>
          <div className="max-w-md text-center lg:text-right pb-2 mx-auto lg:mx-0">
            <p className="text-[#D1D1D1]/60 text-lg leading-relaxed">
              We provide the digital thread that connects hardware to intelligence,
              ensuring every watt is accounted for and every asset is performing at its peak.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ABOUT_CARDS.map((card, index) => (
            <NeumorphicCard key={index} delay={index * 0.1}>
              <div className="w-12 h-1 bg-[#00E5FF] mb-6 rounded-full opacity-50 mx-auto md:mx-0" />
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00E5FF] transition-colors">
                {card.title}
              </h3>
              <p className="text-[#D1D1D1]/70 leading-relaxed">
                {card.text}
              </p>
              <div className="mt-8 flex justify-end opacity-20 group-hover:opacity-100 transition-opacity">
                <div className="text-[10px] font-bold tracking-widest uppercase text-[#00E5FF]">
                  0{index + 1}
                </div>
              </div>
            </NeumorphicCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
