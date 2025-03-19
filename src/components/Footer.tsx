
import React from 'react';
import { motion } from 'framer-motion';
import GradientButton from './ui/GradientButton';
import { ArrowRight, Star, Code, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-space-gradient">
      <div className="absolute inset-0 bg-space-mesh opacity-50"></div>
      <div className="absolute inset-0 bg-neon-glow-gradient opacity-10"></div>
      
      {/* Animated particles */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-space-cyan animate-sparkle"></div>
      <div className="absolute top-3/4 left-1/4 w-1 h-1 rounded-full bg-space-purple animate-sparkle delay-[1s]"></div>
      <div className="absolute top-1/3 left-2/3 w-1.5 h-1.5 rounded-full bg-space-pink animate-sparkle delay-[1.5s]"></div>
      <div className="absolute bottom-1/4 right-1/3 w-1 h-1 rounded-full bg-space-gold animate-sparkle delay-[0.5s]"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-space-cyan mb-3"
          >
            DISCOVER THE FUTURE
          </motion.h2>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-8 tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-space-cyan via-space-purple to-space-pink"
          >
            F U T U R E
            <br />
            TECHNOLOGY
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-space-light mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Tonytm Images produce various kind of high-quality contents constantly updated 
            and those are being distributed all around the world, after discussion about 
            the image production, it would be advisable to be presented by the educated 
            professionals, if you're good at that green technology they always welcome...
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16"
          >
            <div className="glass-panel p-6 flex flex-col items-center max-w-[220px]">
              <Star className="text-space-cyan mb-3" size={24} />
              <h3 className="text-lg font-medium mb-2">Innovation</h3>
              <p className="text-sm text-space-light">Pushing boundaries with cutting-edge technology solutions</p>
            </div>
            
            <div className="glass-panel p-6 flex flex-col items-center max-w-[220px]">
              <Code className="text-space-pink mb-3" size={24} />
              <h3 className="text-lg font-medium mb-2">Development</h3>
              <p className="text-sm text-space-light">Building the future with expert precision and vision</p>
            </div>
            
            <div className="glass-panel p-6 flex flex-col items-center max-w-[220px]">
              <Zap className="text-space-gold mb-3" size={24} />
              <h3 className="text-lg font-medium mb-2">Performance</h3>
              <p className="text-sm text-space-light">Delivering exceptional speed and reliability</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative w-full max-w-lg mx-auto mb-16"
          >
            <div className="absolute inset-0 bg-cta-gradient opacity-20 blur-md rounded-full"></div>
            <img 
              src="/lovable-uploads/70883f83-dcb4-488d-8673-b9d5c27eed46.png" 
              alt="Astronaut" 
              className="relative z-10 mx-auto h-auto max-h-80 object-contain animate-float-gentle" 
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="glass-panel p-8 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-4 text-space-cyan">Ready to start your journey?</h3>
            <p className="text-space-light mb-6">
              Join us in building the technology of tomorrow. Our team of experts is ready to help
              you transform your vision into reality.
            </p>
            <GradientButton className="flex items-center gap-2 mx-auto">
              Contact Us <ArrowRight size={16} />
            </GradientButton>
          </motion.div>
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
