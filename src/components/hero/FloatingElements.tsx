
import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  return (
    <>
      <motion.div 
        className="absolute -top-10 -right-10 w-20 h-20 bg-space-pink/20 rounded-lg backdrop-blur-md border border-space-pink/30 z-0 flex items-center justify-center"
        animate={{ y: [-10, 0, -10], rotate: [-2, 2, -2] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      >
        <div className="w-3 h-3 bg-space-pink rounded-full"></div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 -left-10 w-16 h-16 bg-space-cyan/20 rounded-lg backdrop-blur-md border border-space-cyan/30 z-0 flex items-center justify-center"
        animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        <div className="w-2 h-2 bg-space-cyan rounded-full"></div>
      </motion.div>
      
      <motion.div 
        className="absolute top-20 -left-16 w-12 h-12 bg-space-gold/20 rounded-lg backdrop-blur-md border border-space-gold/30 z-0 flex items-center justify-center"
        animate={{ y: [-8, 0, -8], rotate: [-2, 1, -2] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <div className="w-2 h-2 bg-space-gold rounded-full"></div>
      </motion.div>
    </>
  );
};

export default FloatingElements;
