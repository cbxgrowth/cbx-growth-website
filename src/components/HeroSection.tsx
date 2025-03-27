
import React, { useEffect, useRef } from 'react';
import GradientButton from './ui/GradientButton';
import { motion } from 'framer-motion';
import { ArrowDown, Star } from 'lucide-react';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

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
          <motion.div 
            className="md:w-1/2 text-center md:text-left mb-12 md:mb-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-6">
              <motion.div
                className="inline-flex items-center gap-2 bg-space-blue/30 rounded-full px-4 py-1 border border-space-cyan/30"
                variants={itemVariants}
                transition={{ duration: 0.5 }}
              >
                <Star className="text-space-gold w-4 h-4 animate-pulse-subtle" />
                <span className="text-sm font-medium text-space-light">Assessoria Growth</span>
              </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                transition={{ duration: 0.7 }}
                className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-glow"
              >
                Estratégias de Growth inovadoras
                <br />
                <span className="gradient-text">para o crescimento do seu negócio</span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                transition={{ duration: 0.6 }}
                className="text-space-light mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed"
              >
                Através de uma metodologia própria de growth ajudamos empresas
                e e-commerces em seus desafios de marketing! 
              </motion.p>
              
              <motion.div
                variants={itemVariants}
                transition={{ duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              >
                <GradientButton href="#campaign" className="neon-border hover-scale">
                  SAIBA MAIS
                </GradientButton>
                <div className="hidden md:flex items-center space-x-4">
                  <div className="bg-space-blue/20 backdrop-blur-sm border border-space-cyan/20 rounded-full px-4 py-1 text-sm">
                    <span className="text-space-light">38 Projetos executados</span>
                  </div>
                  <div className="bg-space-blue/20 backdrop-blur-sm border border-space-cyan/20 rounded-full px-4 py-1 text-sm">
                    <span className="text-space-light">Mais de 246 profissionais impactados</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                variants={itemVariants}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-16 hidden md:block"
              >
                <a 
                  href="#campaign" 
                  className="inline-flex flex-col items-center text-space-light hover:text-space-cyan transition-colors group"
                >
                  <span className="text-sm mb-2">Saiba mais</span>
                  <div className="relative w-8 h-8 rounded-full bg-space-blue/30 border border-space-cyan/30 flex items-center justify-center group-hover:bg-space-cyan/20 transition-colors">
                    <ArrowDown className="animate-bounce-subtle" size={16} />
                  </div>
                </a>
              </motion.div>
            </div>
          </motion.div>

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
              <div className="relative z-10 flex items-center justify-center">
                <div className="absolute w-[420px] h-[420px] bg-space-cyan rounded-full opacity-10 blur-3xl animate-breathe"></div>
                <img 
                  src="/lovable-uploads/8555eb6e-bfd8-4edb-a829-f9b8618e36ff.png" 
                  alt="Astronaut in space" 
                  className="max-w-full h-auto object-contain animate-float-gentle relative z-10"
                />
                
                {/* Floating elements */}
                <motion.div 
                  className="absolute -top-10 -right-10 w-20 h-20 bg-space-pink/20 rounded-lg backdrop-blur-md border border-space-pink/30 z-0 flex items-center justify-center"
                  animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                >
                  <div className="w-3 h-3 bg-space-pink rounded-full animate-pulse-glow"></div>
                </motion.div>
                <motion.div 
                  className="absolute bottom-10 -left-10 w-16 h-16 bg-space-cyan/20 rounded-lg backdrop-blur-md border border-space-cyan/30 z-0 flex items-center justify-center"
                  animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                >
                  <div className="w-2 h-2 bg-space-cyan rounded-full animate-pulse-glow"></div>
                </motion.div>
                <motion.div 
                  className="absolute top-20 -left-16 w-12 h-12 bg-space-gold/20 rounded-lg backdrop-blur-md border border-space-gold/30 z-0 flex items-center justify-center"
                  animate={{ y: [0, -8, 0], rotate: [0, -3, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                >
                  <div className="w-2 h-2 bg-space-gold rounded-full animate-pulse-glow"></div>
                </motion.div>
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
