
import React from 'react';
import { motion } from 'framer-motion';

const Particles = () => {
  return (
    <div className="fixed pointer-events-none inset-0 z-10 overflow-hidden">
      {/* Meteoros animados que percorrem toda a página */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-0.5 meteor-trail"
          style={{
            background: 'linear-gradient(90deg, rgba(255,255,255,0.5), rgba(255,255,255,0))',
            left: `${Math.random() * 100}%`,
            top: -5,
            width: `${Math.random() * 100 + 50}px`,
            height: '2px',
            transformOrigin: 'left'
          }}
          initial={{ 
            opacity: 0,
            top: -5,
            left: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 15 + 15}deg)` 
          }}
          animate={{
            top: '120vh',
            left: `${Math.random() * 100 - 10}%`,
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            ease: "linear",
            repeat: Infinity,
            delay: Math.random() * 20,
            repeatDelay: Math.random() * 20
          }}
        />
      ))}
      
      {/* Partículas flutuantes */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-space-cyan opacity-80"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
