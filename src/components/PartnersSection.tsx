
import React from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

interface PartnerLogoProps {
  src: string;
  alt: string;
  link: string;
  index: number;
}

const PartnerLogo: React.FC<PartnerLogoProps> = ({ src, alt, link, index }) => {
  return (
    <motion.div
      className="flex items-center justify-center px-6 py-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="transition-transform hover:opacity-80"
      >
        <img 
          src={src} 
          alt={alt} 
          className="h-20 md:h-24 w-auto object-contain filter brightness-100"
        />
      </a>
    </motion.div>
  );
};

const PartnersSection = () => {
  const partners = [
    { 
      src: "/lovable-uploads/466e7a42-d487-4886-a90e-8a3144f79e7c.png",
      alt: "Magazord",
      link: "https://magazord.com.br"
    },
    { 
      src: "/lovable-uploads/2f50b8dc-e389-4b20-9416-65c8bf48961c.png",
      alt: "Dinamize Partner",
      link: "https://www.dinamize.com.br"
    },
    { 
      src: "/lovable-uploads/57a08f11-3954-4943-bed2-7bb9805bad60.png",
      alt: "Kommo Partner",
      link: "https://www.kommo.com/br/parceiros/encontrar-parceiro/cbx-growth/"
    },
    { 
      src: "/lovable-uploads/22c49c67-3b22-4c23-8887-99c4324edc9e.png",
      alt: "Tray",
      link: "https://www.tray.com.br/parceria/cbx/"
    },
    { 
      src: "/lovable-uploads/5f32dd47-b02f-4a2f-aa54-18e08a899edd.png",
      alt: "Olist Tiny",
      link: "https://www.tiny.com.br"
    },
    { 
      src: "/lovable-uploads/aa99560c-f807-4ae2-a18f-2ab4959fbfe7.png",
      alt: "HubSpot",
      link: "https://www.hubspot.com"
    },
    { 
      src: "/lovable-uploads/244ff618-c3c3-4bfd-bb07-7d0cfdddbb5a.png",
      alt: "ActiveCampaign",
      link: "https://www.activecampaign.com"
    },
    { 
      src: "/lovable-uploads/f7c82eb5-966e-47b1-a7fb-5e615bf0b791.png",
      alt: "RD Station",
      link: "https://www.rdstation.com"
    },
  ];

  return (
    <section className="py-16 bg-space-dark/70 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Nossos <span className="text-space-cyan">Parceiros</span>
          </h2>
          <p className="text-space-light max-w-2xl mx-auto">
            Trabalhamos com as melhores ferramentas e tecnologias do mercado para oferecer soluções completas
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {partners.map((partner, index) => (
            <PartnerLogo
              key={index}
              src={partner.src}
              alt={partner.alt}
              link={partner.link}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
