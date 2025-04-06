
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageLayout from '@/components/layout/PageLayout';
import usePageInitialization from '@/hooks/usePageInitialization';
import PartnersSection from '@/components/PartnersSection';
import MethodHero from '@/components/metodo/MethodHero';
import MethodTimeline from '@/components/metodo/MethodTimeline';
import PlatformSection from '@/components/metodo/PlatformSection';

const Metodo = () => {
  const { controls } = usePageInitialization();

  return (
    <PageLayout controls={controls}>
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <MethodHero />
          <MethodTimeline />
        </div>
      </section>
      
      <PlatformSection />
      
      <PartnersSection />
      
      <Footer />
    </PageLayout>
  );
};

export default Metodo;
