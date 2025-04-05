
import React from 'react';
import { motion } from 'framer-motion';
import MethodologySection from './MethodologySection';
import TestimonialsSection from './TestimonialsSection';

const SidebarContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="space-y-8"
    >
      <MethodologySection />
      <TestimonialsSection />
    </motion.div>
  );
};

export default SidebarContent;
