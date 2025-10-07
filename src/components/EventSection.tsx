
import React from 'react';
import EventContent from './event/EventContent';
import EventImage from './event/EventImage';
import CTASection from './event/CTASection';
import { motion } from 'framer-motion';

const EventSection = () => {
  // Create static meteor data instead of random calculations
  const meteors = [
    { xStart: 10, xEnd: 20, delay: 5 },
    { xStart: 30, xEnd: 70, delay: 8 },
    { xStart: 50, xEnd: 40, delay: 12 },
    { xStart: 80, xEnd: 60, delay: 7 },
    { xStart: 20, xEnd: 90, delay: 10 }
  ];

  return (
    <section id="campaign" className="py-24 md:py-40 relative overflow-hidden">
      {/* Conexão visual com o primeiro painel */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-space-dark to-transparent z-0"></div>
      
      <div className="absolute inset-0 bg-neon-glow-gradient opacity-20 z-0"></div>
      
      {/* Círculos orbitais conectando com o primeiro painel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-space-cyan/10 rounded-full z-0 opacity-40"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[800px] h-[800px] border border-space-cyan/15 rounded-full z-0 opacity-50"></div>
      
      {/* Simplified meteors with pre-calculated values */}
      {meteors.map((meteor, i) => (
        <motion.div 
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full meteor-trail z-0"
          initial={{ 
            x: `${meteor.xStart}%`,
            y: -10,
            opacity: 0.7
          }}
          animate={{ 
            x: `${meteor.xEnd}%`, 
            y: '100vh',
            opacity: 0
          }}
          transition={{ 
            duration: 12, 
            ease: "linear",
            repeat: Infinity,
            delay: meteor.delay
          }}
        />
      ))}
      
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-space-cyan animate-sparkle"></div>
        <div className="absolute top-3/4 left-1/4 w-1 h-1 rounded-full bg-space-purple animate-sparkle delay-[1s]"></div>
        <div className="absolute top-1/3 left-2/3 w-1.5 h-1.5 rounded-full bg-space-pink animate-sparkle delay-[1.5s]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24 relative z-10 max-w-[1600px]">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20 xl:gap-24">
          <EventContent />
          <EventImage />
        </div>
      </div>
      
      <CTASection />
    </section>
  );
};

export default EventSection;
