
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import EventSection from '@/components/EventSection';
import TechGrid from '@/components/TechGrid';
import Footer from '@/components/Footer';
import PageLayout from '@/components/layout/PageLayout';
import usePageInitialization from '@/hooks/usePageInitialization';

const Index = () => {
  const { controls } = usePageInitialization();

  return (
    <PageLayout controls={controls}>
      <Navbar />
      <HeroSection />
      <EventSection />
      <TechGrid />
      <Footer />
    </PageLayout>
  );
};

export default Index;
