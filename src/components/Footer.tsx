
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-space-gradient opacity-60"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-space-cyan/90 to-space-blue/70">
            F U T U R E
            <br />
            TECHNOLOGY
          </h1>
          
          <p className="text-space-light mb-12 max-w-2xl mx-auto">
            Tonytm Images produce various kind of high-quality contents constantly updated 
            and those are being distributed all around the world, after discussion about 
            the image production, it would be advisable to be presented by the educated 
            professionals, if you're good at that green technology they always welcome...
          </p>
          
          <div className="relative w-full max-w-lg mx-auto">
            <div className="absolute inset-0 bg-cta-gradient opacity-20 blur-md rounded-full"></div>
            <img 
              src="/lovable-uploads/70883f83-dcb4-488d-8673-b9d5c27eed46.png" 
              alt="Astronaut" 
              className="relative z-10 mx-auto h-auto max-h-80 object-contain" 
            />
          </div>
        </motion.div>
      </div>
      
      <div className="mt-20 border-t border-space-light/20 pt-8">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-space-light text-sm mb-4 md:mb-0">
              © 2023 CBX Growth. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-space-light hover:text-space-cyan transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-space-light hover:text-space-cyan transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-space-light hover:text-space-cyan transition-colors duration-300">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
