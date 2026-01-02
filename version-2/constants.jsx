import React from 'react';
import { 
  BarChart3, 
  MapPin, 
  Settings, 
  Briefcase, 
  Droplets, 
  Activity, 
  ShieldCheck, 
  Wrench 
} from 'lucide-react';

export const PARTNERS = [
  "Ambey Solar", "Fibro Animal Health", "Mahesh CA Associates", 
  "GreenSun Energy Services", "Mokul Jewellers", "Nirmal Packaging",
  "Ambey Solar", "Fibro Animal Health", "Mahesh CA Associates", 
  "GreenSun Energy Services", "Mokul Jewellers", "Nirmal Packaging"
];

export const ABOUT_CARDS = [
  { title: "Mission", text: "Designing and operating secure digital platforms for solar and renewable energy allied technologies." },
  { title: "Integration", text: "A unified digital thread connecting installers, utilities, financial institutions, and government bodies." },
  { title: "Innovation", text: "Advanced tools for real-time field data capture, remote monitoring, and automated lifecycle analytics." },
  { title: "Ecosystem", text: "Specialized online platforms dedicated to the seamless maintenance and precision cleaning of solar power plants." },
  { title: "Sustainability", text: "Hyper-optimizing energy efficiency and renewable adoption through digital transformation." },
  { title: "Expertise", text: "World-class advisory in AI, Machine Learning, and IoT for renewable infrastructure." }
];

export const SERVICES = [
  { 
    title: "Project Management", 
    icon: <Briefcase className="w-8 h-8 text-[#00E5FF]" />,
    description: "End-to-end orchestration of renewable infrastructure from conception to commissioning."
  },
  { 
    title: "Project Monitoring", 
    icon: <Activity className="w-8 h-8 text-[#00E5FF]" />,
    description: "Real-time oversight and risk mitigation through advanced digital monitoring frameworks."
  },
  { 
    title: "Generation Monitoring", 
    icon: <BarChart3 className="w-8 h-8 text-[#00E5FF]" />,
    description: "Precision tracking of energy yields with AI-driven performance optimization tools."
  },
  { 
    title: "GIS Project Mapping", 
    icon: <MapPin className="w-8 h-8 text-[#00E5FF]" />,
    description: "Spatial intelligence and geographic data modeling for strategic site planning."
  },
  { 
    title: "RPO and REC Compliance", 
    icon: <ShieldCheck className="w-8 h-8 text-[#00E5FF]" />,
    description: "Automated tracking and reporting for seamless regulatory and sustainability compliance."
  },
  { 
    title: "Asset Management", 
    icon: <Settings className="w-8 h-8 text-[#00E5FF]" />,
    description: "Maximizing long-term ROI through predictive maintenance and lifecycle orchestration."
  },
  { 
    title: "Solar Power Plant Cleaning", 
    icon: <Droplets className="w-8 h-8 text-[#00E5FF]" />,
    description: "Digitally managed O&M ecosystems for peak solar efficiency and panel longevity."
  },
  { 
    title: "Digital Tools", 
    icon: <Wrench className="w-8 h-8 text-[#00E5FF]" />,
    description: "Custom software solutions for high-precision field data capture and analytics."
  }
];

export const TEAM = [
  {
    name: "Surendra Kumar Pareek",
    role: "Co-Founder & Director",
    linkedin: "https://www.linkedin.com/in/surendra-kumar-pareek/",
    image: "/assets/surendra.jpg"
  },
  {
    name: "Kushank Pareek",
    role: "Founder & CEO",
    linkedin: "https://www.linkedin.com/in/kushank-pareek-792b571a4/",
    image: "/assets/kushank.jpg"
  },
  {
    name: "Abhimanyu Pareek",
    role: "CFO",
    linkedin: "https://www.linkedin.com/in/abhimanyu-pareek-a27489b8/",
    image: "/assets/abhimanyu.jpg"
  }
];
