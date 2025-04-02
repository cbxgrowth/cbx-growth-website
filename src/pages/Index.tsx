
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import EventSection from '@/components/EventSection';
import TechGrid from '@/components/TechGrid';
import PartnersSection from '@/components/PartnersSection';
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
      <PartnersSection />
      <Footer />
    </PageLayout>
  );
};

export default Index;
