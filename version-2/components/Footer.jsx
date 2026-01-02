import React from 'react';
import { Linkedin, Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#0A0A0A] pt-24 pb-12 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="h-14 w-14 mr-3 bg-white rounded-xl p-1 overflow-hidden shadow-lg shadow-white/5">
                <img
                  src="Assets/logo.jpg"
                  alt="Arka Ananta Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="font-bold text-xl tracking-wider text-white">
                ARKA ANANTA
              </span>
            </div>

            <p className="text-[#D1D1D1] text-sm leading-relaxed mb-6">
              Arka Ananta Pvt Ltd is dedicated to transforming renewable energy management through advanced digital tools and AI-driven intelligence.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/arka-ananta-pvt-ltd/"
                className="w-10 h-10 rounded-full neumorph-out flex items-center justify-center text-[#00E5FF] hover:neumorph-in transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">
              Quick Links
            </h4>
            <ul className="space-y-4 text-sm">
              {['About Us', 'Our Services', 'Asset Management', 'Solar Maintenance'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#D1D1D1] hover:text-[#00E5FF] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3 text-[#D1D1D1]">
                <Mail className="w-5 h-5 text-[#00E5FF] shrink-0" />
                <span>support@arkaananta.com</span>
              </li>
              <li className="flex items-start space-x-3 text-[#D1D1D1]">
                <Phone className="w-5 h-5 text-[#00E5FF] shrink-0" />
                <span>+91 95493 01130</span>
              </li>
              <li className="flex items-start space-x-3 text-[#D1D1D1]">
                <MapPin className="w-5 h-5 text-[#00E5FF] shrink-0" />
                <span>
                  Arka Ananta Pvt Ltd
                  <br />
                  Jaipur, Rajasthan, India
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">
              Newsletter
            </h4>
            <p className="text-[#D1D1D1] text-sm mb-6">
              Join the Future of Energy Intelligence.
            </p>

            <div className="relative group">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-[#161616] border border-white/10 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.05)] transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#00E5FF] rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 text-center">
          <p className="text-xs text-[#D1D1D1]/50 uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} Arka Ananta Pvt Ltd. All Rights Reserved.
            <div>
              <span className="mx-1">
              </span>
            </div>
          </p>
            <p className="text-[14px] text-[#D1D1D1]/40 tracking-widest ">
              Crafted by Arka Ananta with a fantastic team behind it.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
