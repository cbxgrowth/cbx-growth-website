
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashScreenProps {
  onFinish?: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish = () => {} }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [stage, setStage] = useState(1);

  useEffect(() => {
    // Timeline for splash screen animation sequence
    const stageOneTimer = setTimeout(() => {
      setStage(2);
    }, 1000);

    const stageTwoTimer = setTimeout(() => {
      setStage(3);
    }, 2000);

    const finalStageTimer = setTimeout(() => {
      setIsVisible(false);
      // Allow time for exit animation before calling onFinish
      setTimeout(onFinish, 500);
    }, 2500);

    return () => {
      clearTimeout(stageOneTimer);
      clearTimeout(stageTwoTimer);
      clearTimeout(finalStageTimer);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-space-dark"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 overflow-hidden">
            {/* Static particles instead of animated ones */}
            {Array.from({ length: 20 }).map((_, i) => {
              const size = Math.floor(Math.random() * 10) + 2;
              const x = Math.floor(Math.random() * 100);
              const y = Math.floor(Math.random() * 100);
              const opacity = Math.random() * 0.4 + 0.1;
              
              return (
                <div
                  key={i}
                  className="absolute rounded-full bg-space-cyan/20"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    left: `${x}%`,
                    top: `${y}%`,
                    opacity
                  }}
                />
              );
            })}
          </div>

          <div className="relative max-w-lg text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1
              }}
              transition={{
                duration: 1,
                ease: "easeOut"
              }}
              className="relative z-10 mx-auto mb-4"
            >
              <img 
                src="/lovable-uploads/ce8a34c4-6656-4890-b493-a5309f2f4a5c.png" 
                alt="CBX Growth Logo" 
                className="w-64 h-64 mx-auto object-contain" 
              />
              
              {/* Static orbiting element instead of animated */}
              <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2">
                <div className="absolute -top-6 left-1/2 w-3 h-3 -ml-1.5 rounded-full bg-space-cyan"></div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: stage >= 2 ? 1 : 0
              }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-space-cyan to-space-light">
                CBX Growth
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ 
                width: stage >= 3 ? '100%' : '0%' 
              }}
              transition={{ duration: 0.5 }}
              className="h-1 bg-gradient-to-r from-space-cyan via-space-light to-space-cyan mx-auto rounded-full mb-6"
            />
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: stage >= 3 ? 1 : 0
              }}
              transition={{ duration: 0.5 }}
              className="text-space-light text-lg"
            >
              Transformando ideias em crescimento exponencial
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
