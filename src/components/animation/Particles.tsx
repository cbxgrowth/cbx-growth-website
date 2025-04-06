
import React from 'react';
import { motion } from 'framer-motion';

const Particles = () => {
  // Generate fixed meteor data
  const meteors = [
    { left: 10, endLeft: 20, angle: 20, delay: 0 },
    { left: 30, endLeft: 40, angle: 25, delay: 5 },
    { left: 50, endLeft: 60, angle: 15, delay: 10 },
    { left: 70, endLeft: 80, angle: 30, delay: 15 },
    { left: 90, endLeft: 75, angle: 20, delay: 7 },
    { left: 20, endLeft: 35, angle: 25, delay: 12 }
  ];

  // Generate fixed particle data
  const particles = [
    { top: 10, left: 20, duration: 4, delay: 0 },
    { top: 30, left: 40, duration: 3, delay: 1 },
    { top: 50, left: 60, duration: 5, delay: 0.5 },
    { top: 70, left: 80, duration: 4, delay: 1.5 },
    { top: 90, left: 30, duration: 3, delay: 0.7 },
    { top: 20, left: 70, duration: 5, delay: 0.2 },
    { top: 40, left: 10, duration: 4, delay: 1.2 },
    { top: 60, left: 90, duration: 3, delay: 0.4 },
    { top: 80, left: 50, duration: 5, delay: 0.9 },
    { top: 15, left: 85, duration: 4, delay: 0.1 }
  ];

  return (
    <div className="fixed pointer-events-none inset-0 z-10 overflow-hidden">
      {/* Meteors with simpler animation */}
      {meteors.map((meteor, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-0.5 bg-white"
          style={{
            background: 'linear-gradient(90deg, rgba(255,255,255,0.5), rgba(255,255,255,0))',
            left: `${meteor.left}%`,
            top: -5,
            width: '80px',
            height: '2px',
            transformOrigin: 'left',
            transform: `rotate(${meteor.angle}deg)`
          }}
          animate={{
            top: '120vh',
            left: `${meteor.endLeft}%`,
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: 15,
            ease: "linear",
            repeat: Infinity,
            delay: meteor.delay,
            repeatDelay: 20
          }}
        />
      ))}
      
      {/* Floating particles with simpler animation */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-space-cyan opacity-80"
          style={{
            top: `${particle.top}%`,
            left: `${particle.left}%`,
          }}
          animate={{
            y: [-10, 10, -10]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
