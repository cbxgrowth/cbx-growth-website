
import React from 'react';
import OrbitalRings from './hero/OrbitalRings';
import BackgroundEffects from './hero/BackgroundEffects';
import HeroContent from './hero/HeroContent';
import HeroImage from './hero/HeroImage';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-20 flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <BackgroundEffects />
        <OrbitalRings />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <HeroContent />

          <div className="md:w-1/2 flex justify-center md:justify-end">
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
