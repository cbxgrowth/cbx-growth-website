
import React from 'react';
import { motion } from 'framer-motion';

interface PlatformFeatureProps {
  title: string;
  description: string;
  features: string[];
  isReversed?: boolean;
}

const PlatformFeature = ({ title, description, features, isReversed = false }: PlatformFeatureProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isReversed ? 30 : -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: isReversed ? 0.4 : 0.2 }}
      className="bg-space-dark/50 p-8 rounded-lg border border-space-cyan/20 backdrop-blur-sm"
    >
      <h2 className="text-2xl font-bold mb-4 text-space-cyan">{title}</h2>
      <p className="text-space-light mb-6">
        {description}
      </p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-space-cyan mr-2">→</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default PlatformFeature;
