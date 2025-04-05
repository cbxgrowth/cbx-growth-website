
import React from 'react';
import { motion } from 'framer-motion';

const FormHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center mb-12"
    >
      <div className="inline-block mb-4 px-6 py-1 bg-space-blue/30 backdrop-blur-sm border border-space-cyan/20 rounded-full">
        <h2 className="text-sm font-medium text-space-cyan">FORMULÁRIO DE CONTATO</h2>
      </div>
      
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-space-cyan via-white to-space-cyan">
        Transforme Seu Negócio
      </h2>
      
      <p className="text-space-light max-w-2xl mx-auto">
        Preencha o formulário abaixo para iniciar sua jornada de crescimento exponencial.
        Nossa equipe irá analisar suas informações e entrar em contato para uma conversa estratégica.
      </p>
    </motion.div>
  );
};

export default FormHeader;
