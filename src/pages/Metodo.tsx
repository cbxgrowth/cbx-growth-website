
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageLayout from '@/components/layout/PageLayout';
import usePageInitialization from '@/hooks/usePageInitialization';
import { motion } from 'framer-motion';

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
              Uma abordagem sistemática para crescimento sustentável
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
                className="relative"
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
      
      <Footer />
    </PageLayout>
  );
};

export default Metodo;
