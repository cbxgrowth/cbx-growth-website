
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageLayout from '@/components/layout/PageLayout';
import usePageInitialization from '@/hooks/usePageInitialization';
import { motion } from 'framer-motion';
import { Clock, BarChart2, Heart, Users } from 'lucide-react';

const Sobre = () => {
  const { controls } = usePageInitialization();
  
  const teamMembers = [
    {
      name: "Caio Borges",
      role: "Fundador & CEO",
      image: "/lovable-uploads/77a00950-d417-4718-a5cd-fcdc966d9316.png",
      bio: "Especialista em estratégias de crescimento e transformação digital para e-commerces."
    },
    {
      name: "Ana Silva",
      role: "Head de Operações",
      image: "/lovable-uploads/49a44b66-20bf-4cae-82a7-48164331df1d.png",
      bio: "Mais de 10 anos de experiência em gestão de processos e otimização de operações."
    },
    {
      name: "Rafael Costa",
      role: "Diretor de Tecnologia",
      image: "/lovable-uploads/6acaec1d-bea8-4509-9dc5-f6f5c21c402b.png",
      bio: "Desenvolvedor full-stack especializado em soluções para e-commerce e marketing digital."
    },
  ];
  
  return (
    <PageLayout controls={controls}>
      <Navbar />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Sobre a <span className="text-space-cyan">CBX Growth</span>
            </h1>
            <p className="text-lg md:text-xl text-space-light mb-12">
              Impulsionamos o crescimento de empresas através de metodologia e tecnologia
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Nossa <span className="text-space-cyan">História</span></h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-space-light/90 text-lg mb-4">
                  A CBX Growth nasceu da visão de transformar a maneira como as empresas abordam seu crescimento no mercado digital. Fundada em 2018 por Caio Borges, a empresa começou como uma consultoria especializada em estratégias de marketing para e-commerces.
                </p>
                <p className="text-space-light/90 text-lg mb-4">
                  Ao longo dos anos, identificamos padrões recorrentes nos desafios enfrentados por nossos clientes e desenvolvemos uma metodologia proprietária para abordar esses problemas de forma sistemática.
                </p>
                <p className="text-space-light/90 text-lg">
                  Hoje, integramos tecnologia e metodologia para oferecer soluções completas que permitem às empresas escalarem seus resultados de forma previsível e sustentável.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex items-center justify-center"
            >
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-1 bg-gradient-to-r from-space-cyan/20 to-space-blue/20 rounded-lg blur-lg"></div>
                <img 
                  src="/lovable-uploads/8555eb6e-bfd8-4edb-a829-f9b8618e36ff.png" 
                  alt="CBX Growth Office" 
                  className="relative w-full h-auto rounded-lg object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-space-dark/50">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Nossos <span className="text-space-cyan">Valores</span>
            </h2>
            <p className="text-lg text-space-light">
              Princípios que orientam nossas ações e decisões diariamente
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-space-dark/30 p-6 rounded-lg border border-space-cyan/10 backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-space-cyan/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-space-cyan" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Agilidade</h3>
              <p className="text-space-light">Adaptar-se rapidamente às mudanças do mercado e entregar valor constantemente.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-space-dark/30 p-6 rounded-lg border border-space-cyan/10 backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-space-cyan/10 rounded-full flex items-center justify-center mb-4">
                <BarChart2 className="w-6 h-6 text-space-cyan" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Orientação por Dados</h3>
              <p className="text-space-light">Todas as decisões são fundamentadas em dados e evidências concretas.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-space-dark/30 p-6 rounded-lg border border-space-cyan/10 backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-space-cyan/10 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-space-cyan" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Colaboração</h3>
              <p className="text-space-light">Trabalhamos como extensão do time do cliente, com comunicação transparente.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-space-dark/30 p-6 rounded-lg border border-space-cyan/10 backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-space-cyan/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-space-cyan" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Impacto Genuíno</h3>
              <p className="text-space-light">Comprometidos com resultados reais que transformam os negócios de nossos clientes.</p>
            </motion.div>
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
              Nossa <span className="text-space-cyan">Equipe</span>
            </h2>
            <p className="text-lg text-space-light">
              Profissionais apaixonados por transformação digital e resultados
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-space-dark/30 p-6 rounded-lg border border-space-cyan/10 backdrop-blur-sm text-center"
              >
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-2 border-space-cyan/30">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
                <p className="text-space-cyan mb-3">{member.role}</p>
                <p className="text-space-light">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </PageLayout>
  );
};

export default Sobre;
