
import React from 'react';
import { motion } from 'framer-motion';
import PlatformFeature from './PlatformFeature';

const PlatformSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Nossa <span className="text-space-cyan">Plataforma</span>
          </h2>
          <p className="text-lg text-space-light">
            Tecnologia que potencializa nossa metodologia e transforma sua estratégia de crescimento
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <PlatformFeature 
            title="Plataforma Intuitiva"
            description="Interface amigável que permite visualizar e gerenciar todo o processo de implementação da metodologia CBX Growth em um único lugar."
            features={[
              "Dashboard personalizado",
              "Métricas em tempo real",
              "Relatórios automáticos"
            ]}
          />
          
          <PlatformFeature 
            title="Inteligência de Dados"
            description="Análises avançadas que transformam dados em insights acionáveis para otimização contínua da sua estratégia de crescimento."
            features={[
              "Previsões baseadas em IA",
              "Segmentação avançada",
              "Recomendações personalizadas"
            ]}
            isReversed
          />
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
