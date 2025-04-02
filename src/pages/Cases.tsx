
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageLayout from '@/components/layout/PageLayout';
import usePageInitialization from '@/hooks/usePageInitialization';
import { motion } from 'framer-motion';

const Cases = () => {
  const { controls } = usePageInitialization();

  // Case study data
  const caseStudies = [
    {
      client: "TechInova",
      industry: "SaaS",
      challenge: "Baixa taxa de conversão e alto custo de aquisição",
      solution: "Implementação de estratégia de growth hacking e otimização do funil de vendas",
      result: "Aumento de 137% nas conversões e redução de 42% no CAC em 6 meses"
    },
    {
      client: "EcoVerde",
      industry: "Varejo Sustentável",
      challenge: "Dificuldade em escalar operações mantendo a qualidade do atendimento",
      solution: "Automatização de processos e implementação de sistema de CRM personalizado",
      result: "Crescimento de 89% em vendas e expansão para 3 novos mercados"
    },
    {
      client: "FinSmart",
      industry: "Fintech",
      challenge: "Alta taxa de abandono durante o onboarding de novos usuários",
      solution: "Redesenho da experiência de usuário e implementação de sistema de gamificação",
      result: "Redução de 67% na taxa de abandono e aumento de 43% na retenção"
    }
  ];

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
              Nossos <span className="text-space-cyan">Cases</span>
            </h1>
            <p className="text-lg md:text-xl text-space-light mb-12">
              Histórias reais de empresas que transformaram seus resultados com nossa metodologia
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.client}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="bg-space-dark/50 p-8 rounded-lg border border-space-cyan/20 backdrop-blur-sm hover:border-space-cyan/50 transition-all duration-500"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">{caseStudy.client}</h3>
                  <span className="text-sm px-3 py-1 bg-space-cyan/20 rounded-full text-space-cyan">
                    {caseStudy.industry}
                  </span>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-space-cyan font-medium mb-1">Desafio</h4>
                    <p className="text-space-light">{caseStudy.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-space-cyan font-medium mb-1">Solução</h4>
                    <p className="text-space-light">{caseStudy.solution}</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-space-cyan/10 to-space-purple/10 p-4 rounded-md">
                  <h4 className="text-space-cyan font-medium mb-1">Resultados</h4>
                  <p className="text-white font-medium">{caseStudy.result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </PageLayout>
  );
};

export default Cases;
