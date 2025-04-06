
import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects = () => {
  return (
    <>
      <div className="absolute inset-0 bg-neon-glow-gradient opacity-20 animate-glow-pulse"></div>
      
      {/* Meteoros animados com animações simplificadas */}
      {[...Array(8)].map((_, i) => (
        <motion.div 
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full meteor-trail z-10"
          initial={{ 
            x: Math.random() * 100 + "%",
            y: -10,
            opacity: 0.7
          }}
          animate={{ 
            x: `calc(${Math.random() * 100}vw - ${Math.random() * 200}px)`, 
            y: `calc(${Math.random() * 100}vh + ${Math.random() * 200}px)`,
            opacity: 0
          }}
          transition={{ 
            duration: Math.random() * 8 + 7, 
            ease: "linear",
            repeat: Infinity,
            delay: Math.random() * 15
          }}
        />
      ))}
      
      {/* Background Particles */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-space-cyan animate-sparkle"></div>
      <div className="absolute top-3/4 left-1/4 w-1 h-1 rounded-full bg-space-purple animate-sparkle delay-[1s]"></div>
      <div className="absolute top-1/3 left-2/3 w-1.5 h-1.5 rounded-full bg-space-pink animate-sparkle delay-[1.5s]"></div>
      <div className="absolute bottom-1/4 right-1/3 w-1 h-1 rounded-full bg-space-gold animate-sparkle delay-[0.5s]"></div>
    </>
  );
};

export default BackgroundEffects;
