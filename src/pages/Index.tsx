
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
    
    // Show welcome toast
    setTimeout(() => {
      toast.success("Bem-vindo ao CBX Growth", {
        description: "Explore o futuro da tecnologia espacial conosco",
        duration: 5000,
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
    </motion.div>
  );
};

export default Index;
