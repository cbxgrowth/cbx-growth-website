
import React from 'react';
import { motion } from 'framer-motion';
import Particles from '../animation/Particles';

interface PageLayoutProps {
  children: React.ReactNode;
  controls: any; // Controles de animação do framer-motion
}

const PageLayout = ({ children, controls }: PageLayoutProps) => {
  return (
    <motion.div
      className="min-h-screen bg-space-dark text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.9 }}
    >
      {children}
      <Particles />
    </motion.div>
  );
};

export default PageLayout;
