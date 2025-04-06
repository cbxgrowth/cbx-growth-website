
import React from 'react';
import { motion } from 'framer-motion';
import FloatingElements from './FloatingElements';

const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 1, 
        delay: 0.4
      }}
      className="relative"
    >
      <div className="relative z-10 flex items-center justify-center">
        <div className="absolute w-[420px] h-[420px] bg-space-cyan rounded-full opacity-10 blur-3xl"></div>
        <img 
          src="/lovable-uploads/51a211a0-96b2-404e-abcb-f26b0c683071.png" 
          alt="Astronauta no espaço" 
          className="max-w-full h-auto object-contain relative z-10"
        />
        
        {/* Floating elements */}
        <FloatingElements />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-space-cyan/20 to-space-blue/20 opacity-40 filter blur-xl"></div>
    </motion.div>
  );
};

export default HeroImage;
