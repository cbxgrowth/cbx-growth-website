
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import EventSection from '@/components/EventSection';
import TechGrid from '@/components/TechGrid';
import Footer from '@/components/Footer';
import { motion, useAnimation } from 'framer-motion';
import { toast } from 'sonner';

const Index = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
    
    // Show welcome toast with a slight delay for better UX
    setTimeout(() => {
      toast.success("Bem-vindo a CBX Growth", {
        description: "Explore o futuro do Growth conosco",
        duration: 5000,
        position: "bottom-right",
      });
    }, 1500);
  }, [controls]);

  return (
    <motion.div
      className="min-h-screen bg-space-dark text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.9 }}
    >
      <Navbar />
      <HeroSection />
      <EventSection />
      <TechGrid />
      <Footer />
      
      {/* Floating Particles */}
      <div className="fixed pointer-events-none inset-0 z-10 overflow-hidden">
        {/* Meteoros adicionais que percorrem toda a página */}
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
    </motion.div>
  );
};

export default Index;
