
import React from 'react';
import { motion } from 'framer-motion';

const FormHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center mb-8 md:mb-12 px-4"
    >
      <div className="inline-block mb-4 px-4 md:px-6 py-1 bg-space-blue/30 backdrop-blur-sm border border-space-cyan/20 rounded-full">
        <h2 className="text-xs md:text-sm font-medium text-space-cyan">FORMULÁRIO DE CONTATO</h2>
      </div>
      
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-space-cyan via-white to-space-cyan px-2">
        Transforme Seu Negócio
      </h2>
      
      <p className="text-sm md:text-base text-space-light max-w-2xl mx-auto px-2">
        Preencha o formulário abaixo para iniciar sua jornada de crescimento exponencial.
        Nossa equipe irá analisar suas informações e entrar em contato para uma conversa estratégica.
      </p>
    </motion.div>
  );
};

export default FormHeader;
