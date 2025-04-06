
import React from 'react';
import { motion } from 'framer-motion';

const MethodHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="max-w-4xl mx-auto text-center"
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
        Metodologia <span className="text-space-cyan">CBX Growth</span>
      </h1>
      <p className="text-lg md:text-xl text-space-light mb-12">
        Uma abordagem sistemática para crescimento sustentável através da nossa plataforma integrada
      </p>
    </motion.div>
  );
};

export default MethodHero;
