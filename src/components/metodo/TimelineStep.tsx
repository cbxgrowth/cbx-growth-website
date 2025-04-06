
import React from 'react';
import { motion } from 'framer-motion';

interface TimelineStepProps {
  number: string;
  title: string;
  description: string;
  isRight?: boolean;
}

const TimelineStep = ({ number, title, description, isRight = false }: TimelineStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative mb-24"
    >
      <div className="flex items-center mb-6">
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-space-cyan flex items-center justify-center text-space-dark font-bold">
          {number}
        </div>
        <div 
          className={`bg-space-dark/60 p-8 rounded-lg border border-space-cyan/20 backdrop-blur-sm ${
            isRight 
              ? 'mr-8 lg:mr-0 lg:ml-[50%] lg:pl-20' 
              : 'ml-8 lg:ml-0 lg:mr-[50%] lg:pr-20'
          }`}
        >
          <h2 className="text-2xl font-bold mb-3 text-space-cyan">{title}</h2>
          <p className="text-space-light">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineStep;
