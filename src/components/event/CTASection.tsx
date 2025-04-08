
import React from 'react';
import { motion } from 'framer-motion';
import GradientButton from '../ui/GradientButton';

const CTASection = () => {
  return (
    <motion.div 
      className="mt-24 py-12 bg-space-cyan/90 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-space-dark mb-4">
              Não perca espaço para o seu concorrente!
              <span className="block mt-2">Converse com nossos especialistas agora.</span>
            </h2>
          </div>
          <div className="md:w-1/3 flex justify-end">
            <GradientButton href="#service" className="bg-space-dark border-0 hover:bg-space-dark/80">
              Acelerar meus resultados
            </GradientButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CTASection;
