
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen = ({ onFinish }: SplashScreenProps) => {
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    // Show the name after the logo animation
    const timer = setTimeout(() => {
      setShowName(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-space-dark overflow-hidden">
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4"
        >
          <img 
            src="/lovable-uploads/259b151f-28a7-4771-9a34-e27a1f0044e4.png" 
            alt="CBX Growth Logo" 
            className="w-24 h-24"
          />
        </motion.div>

        {showName && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-2xl font-bold text-white">
              <span className="text-space-cyan">CBX</span> Growth
            </h1>
            <motion.div 
              className="mt-4 h-0.5 w-full bg-space-cyan"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              onAnimationComplete={onFinish}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SplashScreen;
