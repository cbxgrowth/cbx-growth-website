
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageLayout from '@/components/layout/PageLayout';
import usePageInitialization from '@/hooks/usePageInitialization';
import { motion } from 'framer-motion';

const Produto = () => {
  const { controls } = usePageInitialization();

  return (
    <PageLayout controls={controls}>
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Nossa <span className="text-space-cyan">Solução</span>
            </h1>
            <p className="text-lg md:text-xl text-space-light mb-12">
              Descubra como nossa plataforma pode transformar sua estratégia de crescimento
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-space-dark/50 p-8 rounded-lg border border-space-cyan/20 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold mb-4 text-space-cyan">Plataforma Intuitiva</h2>
              <p className="text-space-light mb-6">
                Interface amigável que permite visualizar e gerenciar todo o processo de implementação da metodologia CBX Growth em um único lugar.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-space-cyan mr-2">→</span>
                  <span>Dashboard personalizado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-space-cyan mr-2">→</span>
                  <span>Métricas em tempo real</span>
                </li>
                <li className="flex items-start">
                  <span className="text-space-cyan mr-2">→</span>
                  <span>Relatórios automáticos</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-space-dark/50 p-8 rounded-lg border border-space-cyan/20 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold mb-4 text-space-cyan">Inteligência de Dados</h2>
              <p className="text-space-light mb-6">
                Análises avançadas que transformam dados em insights acionáveis para otimização contínua da sua estratégia de crescimento.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-space-cyan mr-2">→</span>
                  <span>Previsões baseadas em IA</span>
                </li>
                <li className="flex items-start">
                  <span className="text-space-cyan mr-2">→</span>
                  <span>Segmentação avançada</span>
                </li>
                <li className="flex items-start">
                  <span className="text-space-cyan mr-2">→</span>
                  <span>Recomendações personalizadas</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </PageLayout>
  );
};

export default Produto;
