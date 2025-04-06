
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageLayout from '@/components/layout/PageLayout';
import usePageInitialization from '@/hooks/usePageInitialization';
import { motion } from 'framer-motion';
import PartnersSection from '@/components/PartnersSection';

const Metodo = () => {
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
              Metodologia <span className="text-space-cyan">CBX Growth</span>
            </h1>
            <p className="text-lg md:text-xl text-space-light mb-12">
              Uma abordagem sistemática para crescimento sustentável através da nossa plataforma integrada
            </p>
          </motion.div>

          <div className="mt-20">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-space-cyan/30"></div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="relative mb-24"
              >
                <div className="flex items-center mb-6">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-space-cyan flex items-center justify-center text-space-dark font-bold">1</div>
                  <div className="bg-space-dark/60 p-8 rounded-lg border border-space-cyan/20 backdrop-blur-sm ml-8 lg:ml-0 lg:mr-[50%] lg:pr-20">
                    <h2 className="text-2xl font-bold mb-3 text-space-cyan">Diagnóstico</h2>
                    <p className="text-space-light">
                      Análise completa do seu negócio para identificar oportunidades e desafios. Mapeamos o ciclo de vida do cliente, pontos de contato e principais indicadores de desempenho.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="relative mb-24"
              >
                <div className="flex items-center mb-6">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-space-cyan flex items-center justify-center text-space-dark font-bold">2</div>
                  <div className="bg-space-dark/60 p-8 rounded-lg border border-space-cyan/20 backdrop-blur-sm mr-8 lg:mr-0 lg:ml-[50%] lg:pl-20">
                    <h2 className="text-2xl font-bold mb-3 text-space-cyan">Estratégia</h2>
                    <p className="text-space-light">
                      Desenvolvimento de um plano personalizado com base nos insights do diagnóstico. Definimos objetivos claros, KPIs e marcos para acompanhamento do progresso.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="relative mb-24"
              >
                <div className="flex items-center mb-6">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-space-cyan flex items-center justify-center text-space-dark font-bold">3</div>
                  <div className="bg-space-dark/60 p-8 rounded-lg border border-space-cyan/20 backdrop-blur-sm ml-8 lg:ml-0 lg:mr-[50%] lg:pr-20">
                    <h2 className="text-2xl font-bold mb-3 text-space-cyan">Execução & Otimização</h2>
                    <p className="text-space-light">
                      Implementação da estratégia com monitoramento constante e ajustes baseados em dados. Nossa equipe trabalha lado a lado com seu time para garantir resultados consistentes.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
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
      
      <PartnersSection />
      
      <Footer />
    </PageLayout>
  );
};

export default Metodo;
