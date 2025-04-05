
import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const Particles = () => {
  // Pre-generate random values for meteors with simpler animation properties
  const meteors = useRef(Array.from({ length: 6 }).map(() => ({
    left: Math.floor(Math.random() * 100),
    angle: Math.floor(Math.random() * 15) + 15,
    duration: Math.floor(Math.random() * 10) + 15,
    delay: Math.floor(Math.random() * 20),
    endLeft: Math.floor(Math.random() * 100) - 10
  })));

  // Pre-generate random values for particles with simpler animation properties
  const particles = useRef(Array.from({ length: 10 }).map(() => ({
    top: Math.floor(Math.random() * 100),
    left: Math.floor(Math.random() * 100),
    duration: 3 + Math.floor(Math.random() * 2),
    delay: Math.floor(Math.random() * 2)
  })));

  return (
    <div className="fixed pointer-events-none inset-0 z-10 overflow-hidden">
      {/* Simplified meteors with pre-defined values */}
      {meteors.current.map((meteor, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-0.5 meteor-trail"
          style={{
            background: 'linear-gradient(90deg, rgba(255,255,255,0.5), rgba(255,255,255,0))',
            left: `${meteor.left}%`,
            top: -5,
            width: `${Math.random() * 100 + 50}px`,
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
            duration: meteor.duration,
            ease: "linear",
            repeat: Infinity,
            delay: meteor.delay,
            repeatDelay: Math.random() * 20
          }}
        />
      ))}
      
      {/* Simplified floating particles with pre-defined values */}
      {particles.current.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-space-cyan opacity-80"
          style={{
            top: `${particle.top}%`,
            left: `${particle.left}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.2, 0.8, 0.2]
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
