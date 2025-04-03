
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Inicia a sequência de animação
    const timer = setTimeout(() => {
      setIsVisible(false);
      
      // Dá tempo para a animação de saída terminar antes de chamar onFinish
      setTimeout(onFinish, 1000);
    }, 2500); // Tempo total de exibição do splash screen

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-space-dark"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className="relative z-10"
            >
              <img 
                src="/lovable-uploads/1d70eff7-2af2-4a36-86a9-4d159674f1f4.png" 
                alt="CBX Growth Logo" 
                className="w-64 h-64 md:w-80 md:h-80" 
              />
            </motion.div>
            
            <motion.div
              className="absolute inset-0 blur-xl opacity-50 bg-space-cyan rounded-full"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: [0.5, 1.2, 1], opacity: [0, 0.8, 0] }}
              transition={{
                duration: 2.5,
                times: [0, 0.7, 1],
                ease: "easeInOut",
              }}
            />
          </div>
          
          <motion.div
            className="absolute bottom-10 left-0 right-0 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="text-space-cyan text-xl font-light">CBX Growth</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
