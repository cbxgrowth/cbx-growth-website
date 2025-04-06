
import React from 'react';
import { motion } from 'framer-motion';

const StorySection = () => {
  return (
    <section className="pt-32 pb-16">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Sobre a <span className="text-space-cyan">CBX Growth</span>
          </h1>
          <p className="text-lg md:text-xl text-space-light mb-12">
            Impulsionamos o crescimento de empresas através de metodologia e tecnologia
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Nossa <span className="text-space-cyan">História</span></h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-space-light/90 text-lg mb-4">
                A CBX Growth nasceu da visão de transformar a maneira como as empresas abordam seu crescimento no mercado digital. Fundada em 2018 por Caio Borges, a empresa começou como uma consultoria especializada em estratégias de marketing para e-commerces.
              </p>
              <p className="text-space-light/90 text-lg mb-4">
                Ao longo dos anos, identificamos padrões recorrentes nos desafios enfrentados por nossos clientes e desenvolvemos uma metodologia proprietária para abordar esses problemas de forma sistemática.
              </p>
              <p className="text-space-light/90 text-lg">
                Hoje, integramos tecnologia e metodologia para oferecer soluções completas que permitem às empresas escalarem seus resultados de forma previsível e sustentável.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-space-cyan/20 to-space-blue/20 rounded-lg blur-lg"></div>
              <img 
                src="/lovable-uploads/8555eb6e-bfd8-4edb-a829-f9b8618e36ff.png" 
                alt="CBX Growth Office" 
                className="relative w-full h-auto rounded-lg object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
