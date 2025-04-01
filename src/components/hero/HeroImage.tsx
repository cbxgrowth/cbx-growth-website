
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
        delay: 0.4,
        type: "spring",
        stiffness: 100 
      }}
      className="relative"
    >
      <div className="relative z-10 flex items-center justify-center">
        <div className="absolute w-[420px] h-[420px] bg-space-cyan rounded-full opacity-10 blur-3xl animate-breathe"></div>
        <img 
          src="/lovable-uploads/09cb2e3b-54da-43b2-870a-9f46455b4b2c.png" 
          alt="Astronauta no espaço" 
          className="max-w-full h-auto object-contain animate-float-gentle relative z-10"
        />
        
        {/* Floating elements */}
        <FloatingElements />
      </div>
      <div className="absolute inset-0 bg-glow-circle opacity-40 filter blur-xl"></div>
    </motion.div>
  );
};

export default HeroImage;
