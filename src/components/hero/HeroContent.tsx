
import React from 'react';
import { motion } from 'framer-motion';
import GradientButton from '../ui/GradientButton';
import { ArrowDown, Star } from 'lucide-react';

const HeroContent = () => {
  return (
    <motion.div 
      className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 px-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-4 md:space-y-6">
        <motion.div
          className="inline-flex items-center gap-2 bg-space-blue/30 rounded-full px-3 md:px-4 py-1 border border-space-cyan/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Star className="text-space-gold w-3 h-3 md:w-4 md:h-4" />
          <span className="text-xs md:text-sm font-medium text-space-light">Assessoria de Growth</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-tight text-glow leading-tight"
        >
          Estratégias de Growth inovadoras
          <br />
          <span className="gradient-text">para o crescimento do seu negócio</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm md:text-base text-space-light mb-6 md:mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed"
        >
          Através de uma metodologia própria de growth ajudamos empresas
          e e-commerces e equipes em seus desafios de Marketing e Vendas! 
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start"
        >
          <GradientButton href="#campaign" className="hover:scale-105 transition-transform w-full sm:w-auto">
            Agendar reunião
          </GradientButton>
          <div className="hidden lg:flex items-center space-x-4">
            <div className="bg-space-blue/20 backdrop-blur-sm border border-space-cyan/20 rounded-full px-4 py-1 text-sm">
              <span className="text-space-light">Inovações</span>
            </div>
            <div className="bg-space-blue/20 backdrop-blur-sm border border-space-cyan/20 rounded-full px-4 py-1 text-sm">
              <span className="text-space-light">e Estratégias personalizadas</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 md:mt-16 hidden md:block"
        >
          <a 
            href="#campaign" 
            className="inline-flex flex-col items-center text-space-light hover:text-space-cyan transition-colors group"
          >
            <span className="text-sm mb-2">Saiba mais</span>
            <div className="relative w-8 h-8 rounded-full bg-space-blue/30 border border-space-cyan/30 flex items-center justify-center group-hover:bg-space-cyan/20 transition-colors">
              <ArrowDown className="animate-bounce" size={16} />
            </div>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
