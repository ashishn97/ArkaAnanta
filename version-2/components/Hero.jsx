import React from "react";
import { motion } from "framer-motion";
import {
  Home,
  BarChart2,
  LayoutDashboard,
  Search,
  TrendingUp,
  CircleDollarSign,
  Play
} from "lucide-react";

const features = [
  { label: "Energy Usage", icon: Home, className: "top-[42%] left-[6%]" },
  { label: "Efficiency", icon: BarChart2, className: "top-[22%] left-[20%]" },
  { label: "Key Metrics", icon: LayoutDashboard, className: "top-[22%] right-[22%]" },
  { label: "Outlier Detection", icon: Search, className: "top-[50%] right-[6%]" },
  { label: "Performance", icon: TrendingUp, className: "bottom-[25%] left-[20%]" },
  { label: "Cost Drivers", icon: CircleDollarSign, className: "bottom-[20%] right-[24%]" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-x-hidden flex items-center justify-center px-6">

      {/* LIGHT BEAMS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[25%] w-[280px] h-[520px] bg-gradient-to-b from-cyan-400/40 to-transparent blur-3xl" />
        <div className="absolute top-0 right-[25%] w-[280px] h-[520px] bg-gradient-to-b from-cyan-400/40 to-transparent blur-3xl" />
        <div className="absolute top-0 right-[42%] w-[280px] h-[520px] bg-gradient-to-b from-cyan-400/40 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00E5FF14,transparent_10%)]" />
      </div>

      {/* FLOATING FEATURES */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none z-40">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 10 }}
              transition={{ delay: i * 0.2 + 0.5, duration: 0.5 }}
              className={`absolute ${f.className} flex flex-col items-center`}
            >
              <span className="mb-3 text-xs font-semibold tracking-widest text-white">
                {f.label}
              </span>
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-2xl">
                <Icon className="w-6 h-6 text-[#00E5FF]" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* CENTER CONTENT */}
      <div className="relative z-20 max-w-6xl mx-auto text-center py-16">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#f4f4f4] text-lg md:text-3xl font-medium mb-0"
        >
          Transforming energy data into
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1 }}
          className="text-[3.5rem] sm:text-[4.5rem] md:text-[6.5rem] lg:text-[8.5rem]
           font-extrabold leading-[1.05]leading-tight tracking-tight mb-8 select-none"
          style={{
            background:
              "linear-gradient(135deg,#4A4AF4 0%,#00E5FF 55%,#4AF4C8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          True Intelligence
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-xl mx-auto text-[#D1D1D1]/60 text-base md:text-lg mb-10"
        >
          We offer the platform for free to utilities,
          enabling massive network effects
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex justify-center"
        >
          <a
            href="#contact"
            className="flex items-center gap-3 px-10 py-4 rounded-full 
                       bg-white text-black font-bold
                       shadow-[0_0_30px_rgba(255,255,255,0.18)]
                       hover:scale-105 transition"
          >
            <Play className="w-5 h-5" />
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;


