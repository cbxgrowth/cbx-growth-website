
import React from 'react';
import { motion } from 'framer-motion';

const EventImage = () => {
  return (
    <motion.div 
      className="lg:w-1/2 relative"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="relative group">
        <img 
          src="/lovable-uploads/49a44b66-20bf-4cae-82a7-48164331df1d.png" 
          alt="Onboarding CBX - Etapas de implementação" 
          className="rounded-lg max-w-full mx-auto relative z-0 transition-transform duration-700 ease-in-out group-hover:scale-[1.02]"
        />
        
        <div className="absolute -inset-0.5 bg-gradient-to-r from-space-cyan/10 to-transparent rounded-lg blur opacity-30 transition-opacity duration-700 z-0"></div>
      </div>
    </motion.div>
  );
};

export default EventImage;
