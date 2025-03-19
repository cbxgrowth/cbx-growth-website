
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
      toast.success("Bem-vindo ao CBX Growth", {
        description: "Explore o futuro da tecnologia espacial conosco",
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
      transition={{ duration: 0.6 }}
    >
      <Navbar />
      <HeroSection />
      <EventSection />
      <TechGrid />
      <Footer />
      
      {/* Floating Particles */}
      <div className="fixed pointer-events-none inset-0 z-10 overflow-hidden">
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
