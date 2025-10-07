
import React from 'react';
import OrbitalRings from './OrbitalRings';
import BackgroundEffects from './BackgroundEffects';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';

const HeroContainer = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-20 md:pt-32 pb-16 md:pb-24 flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <BackgroundEffects />
        <OrbitalRings />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-16 xl:px-24 relative z-10 max-w-[1600px]">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-20">
          <HeroContent />

          <div className="md:w-1/2 flex justify-center md:justify-end">
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContainer;
