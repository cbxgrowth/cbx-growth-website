
import React from 'react';
import EventContent from './event/EventContent';
import EventImage from './event/EventImage';
import CTASection from './event/CTASection';
import { motion } from 'framer-motion';

const EventSection = () => {
  return (
    <section id="campaign" className="py-32 relative overflow-hidden">
      {/* Conexão visual com o primeiro painel */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-space-dark to-transparent z-0"></div>
      
      <div className="absolute inset-0 bg-neon-glow-gradient opacity-20 z-0"></div>
      
      {/* Círculos orbitais conectando com o primeiro painel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-space-cyan/10 rounded-full z-0 opacity-40"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[800px] h-[800px] border border-space-cyan/15 rounded-full z-0 opacity-50"></div>
      
      {/* Meteoros animados */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div 
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full meteor-trail z-0"
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: -10,
            opacity: 0.7
          }}
          animate={{ 
            x: `${Math.random() * 100}vw`, 
            y: `calc(100vh + ${Math.random() * 200}px)`,
            opacity: 0
          }}
          transition={{ 
            duration: Math.random() * 8 + 7, 
            ease: "linear",
            repeat: Infinity,
            delay: Math.random() * 10 + 5
          }}
        />
      ))}
      
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-space-cyan animate-sparkle"></div>
        <div className="absolute top-3/4 left-1/4 w-1 h-1 rounded-full bg-space-purple animate-sparkle delay-[1s]"></div>
        <div className="absolute top-1/3 left-2/3 w-1.5 h-1.5 rounded-full bg-space-pink animate-sparkle delay-[1.5s]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <EventContent />
          <EventImage />
        </div>
      </div>
      
      <CTASection />
    </section>
  );
};

export default EventSection;
