
import React, { useEffect, useRef } from 'react';
import GradientButton from './ui/GradientButton';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const orbitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbitRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = orbitRef.current.getBoundingClientRect();
      
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const moveX = (clientX - centerX) / 35;
      const moveY = (clientY - centerY) / 35;
      
      orbitRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen pt-28 pb-20 flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-neon-glow-gradient opacity-20 animate-glow-pulse"></div>
        
        {/* Orbital Ring */}
        <div
          ref={orbitRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
        >
          <div className="orbit-line w-full h-full animate-pulse-glow"></div>
          <div className="orbit-line w-[70%] h-[70%] top-[15%] left-[15%] animate-float-gentle"></div>
          <div className="orbit-line w-[40%] h-[40%] top-[30%] left-[30%] animate-rotate-slow"></div>
        </div>
        
        {/* Background Particles */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-space-cyan animate-sparkle"></div>
        <div className="absolute top-3/4 left-1/4 w-1 h-1 rounded-full bg-space-purple animate-sparkle delay-[1s]"></div>
        <div className="absolute top-1/3 left-2/3 w-1.5 h-1.5 rounded-full bg-space-pink animate-sparkle delay-[1.5s]"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 rounded-full bg-space-gold animate-sparkle delay-[0.5s]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, staggerChildren: 0.1 }}
              className="space-y-6"
            >
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-2xl text-space-cyan font-medium mb-2"
              >
                CBX Growth
              </motion.h2>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-glow"
              >
                FUTURE
                <br />
                <span className="gradient-text">TECHNOLOGY</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-space-light mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed"
              >
                Tonytm Images produce various kind of high-quality contents constantly updated 
                and those are being distributed all around the world, after discussion about 
                the image production, it would be advisable to be presented by the educated 
                professionals, if you're good at that green technology they always welcome...
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <GradientButton href="#service" className="neon-border">VIEW</GradientButton>
              </motion.div>
            </motion.div>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end">
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
              <div className="relative z-10">
                <img 
                  src="/lovable-uploads/70883f83-dcb4-488d-8673-b9d5c27eed46.png" 
                  alt="Astronaut in space" 
                  className="max-w-full h-auto object-contain animate-float-gentle"
                />
              </div>
              <div className="absolute inset-0 bg-glow-circle opacity-40 filter blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
