import React from 'react';
import { PARTNERS } from '../constants';

const Marquee = () => {
  return (
    <div className="py-12 border-y border-white/5 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-7">
        <p className="text-[15px] font-bold uppercase tracking-[0.1em] text-[#00E5FF]/60 text-center">
          Our Trusted Clients
        </p>
      </div>
      <div className="flex overflow-hidden relative group">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {PARTNERS.map((partner, index) => (
            <React.Fragment key={index}>
              <div className="mx-12 text-2xl md:text-4xl font-bold text-white/20 hover:text-white/60 transition-colors cursor-default select-none uppercase tracking-tighter">
                {partner}
              </div>
              <span className="text-white/30 text-xl md:text-3xl font-light select-none">|</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
