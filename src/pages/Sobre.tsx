
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageLayout from '@/components/layout/PageLayout';
import usePageInitialization from '@/hooks/usePageInitialization';
import StorySection from '@/components/about/StorySection';
import ValuesSection from '@/components/about/ValuesSection';
import TeamSection from '@/components/about/TeamSection';

const Sobre = () => {
  const { controls } = usePageInitialization();
  
  return (
    <PageLayout controls={controls}>
      <Navbar />
      <StorySection />
      <ValuesSection />
      <TeamSection />
      <Footer />
    </PageLayout>
  );
};

export default Sobre;
