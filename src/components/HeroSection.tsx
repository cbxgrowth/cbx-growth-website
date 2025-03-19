
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
      
      const moveX = (clientX - centerX) / 50;
      const moveY = (clientY - centerY) / 50;
      
      orbitRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen pt-24 pb-20 flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-glow-circle opacity-30 animate-pulse-glow"></div>
        
        {/* Orbital Ring */}
        <div
          ref={orbitRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
        >
          <div className="orbit-line w-full h-full"></div>
          <div className="orbit-line w-[70%] h-[70%] top-[15%] left-[15%]"></div>
          <div className="orbit-line w-[40%] h-[40%] top-[30%] left-[30%]"></div>
        </div>
        
        {/* Background dots */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-space-cyan animate-pulse-glow"></div>
        <div className="absolute top-3/4 left-1/4 w-1 h-1 rounded-full bg-space-purple animate-pulse-glow"></div>
        <div className="absolute top-1/3 left-2/3 w-1.5 h-1.5 rounded-full bg-space-pink animate-pulse-glow"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl text-space-cyan mb-2">CBX Growth</h2>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                FUTURE
                <br />
                TECHNOLOGY
              </h1>
              <p className="text-space-light mb-8 max-w-lg mx-auto md:mx-0">
                Tonytm Images produce various kind of high-quality contents constantly updated 
                and those are being distributed all around the world, after discussion about 
                the image production, it would be advisable to be presented by the educated 
                professionals, if you're good at that green technology they always welcome...
              </p>
              <GradientButton href="#service">VIEW</GradientButton>
            </motion.div>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img 
                  src="/lovable-uploads/70883f83-dcb4-488d-8673-b9d5c27eed46.png" 
                  alt="Astronaut in space" 
                  className="max-w-full h-auto object-contain animate-float"
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
