
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
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
      toast.success("Welcome to CBX Growth", {
        description: "Explore the future of technology with us",
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
      <TechGrid />
      <Footer />
    </motion.div>
  );
};

export default Index;
