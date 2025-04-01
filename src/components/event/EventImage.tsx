
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
        <div className="absolute inset-0 bg-gradient-to-tr from-space-purple/40 via-space-cyan/30 to-transparent rounded-lg z-10 mix-blend-overlay group-hover:opacity-70 transition-opacity duration-500"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-space-dark/50 to-transparent rounded-lg z-10 mix-blend-multiply"></div>
        
        <img 
          src="/lovable-uploads/77a00950-d417-4718-a5cd-fcdc966d9316.png" 
          alt="Instrutor do curso" 
          className="rounded-lg max-w-full mx-auto relative z-0 transition-transform duration-700 ease-in-out group-hover:scale-[1.02]"
        />
        
        <div className="absolute inset-0 bg-glow-circle opacity-30 filter blur-xl"></div>
        
        <div className="absolute -inset-0.5 bg-gradient-to-r from-space-cyan/20 to-space-purple/20 rounded-lg blur opacity-40 group-hover:opacity-60 transition-opacity duration-700 z-0"></div>
      </div>
    </motion.div>
  );
};

export default EventImage;
