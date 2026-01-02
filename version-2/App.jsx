import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Team from './components/Team';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen relative overflow-hidden selection:bg-[#00E5FF] selection:text-black">
      {/* Dynamic Background Lighting */}
      <div className="fixed top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#00E5FF] opacity-[0.05] blur-[180px] rounded-full animate-float pointer-events-none" />
      <div
        className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#FF007A] opacity-[0.04] blur-[150px] rounded-full pointer-events-none"
        style={{ animation: 'float 15s ease-in-out infinite reverse' }}
      />
      <div className="fixed top-[40%] left-[30%] w-[30%] h-[30%] bg-[#00E5FF] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />

      <Header />

      <main className="relative z-10">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Contact />
        <Team />
      </main>

      <Footer />
    </div>
  );
};

export default App;
