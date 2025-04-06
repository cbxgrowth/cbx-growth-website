
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import EventSection from '@/components/EventSection';
import TechGrid from '@/components/TechGrid';
import PartnersSection from '@/components/PartnersSection';
import Footer from '@/components/Footer';
import PageLayout from '@/components/layout/PageLayout';
import usePageInitialization from '@/hooks/usePageInitialization';
import LeadCaptureForm from '@/components/LeadCaptureForm';

const Index = () => {
  const { controls } = usePageInitialization();

  return (
    <PageLayout controls={controls}>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <EventSection />
        <LeadCaptureForm />
        <TechGrid />
        <PartnersSection />
      </main>
      <Footer />
    </PageLayout>
  );
};

export default Index;
