
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageLayout from '@/components/layout/PageLayout';
import usePageInitialization from '@/hooks/usePageInitialization';
import { motion } from 'framer-motion';

const Contato = () => {
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
              Fale <span className="text-space-cyan">Conosco</span>
            </h1>
            <p className="text-lg md:text-xl text-space-light mb-12">
              Estamos prontos para impulsionar o crescimento do seu negócio
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-white">Entre em Contato</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-space-light">Nome</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 bg-space-dark/70 border border-space-cyan/20 rounded-md focus:outline-none focus:border-space-cyan/60 text-white"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-space-light">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 bg-space-dark/70 border border-space-cyan/20 rounded-md focus:outline-none focus:border-space-cyan/60 text-white"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block mb-2 text-space-light">Empresa</label>
                  <input 
                    type="text" 
                    id="company" 
                    className="w-full px-4 py-3 bg-space-dark/70 border border-space-cyan/20 rounded-md focus:outline-none focus:border-space-cyan/60 text-white"
                    placeholder="Nome da empresa"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-space-light">Mensagem</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full px-4 py-3 bg-space-dark/70 border border-space-cyan/20 rounded-md focus:outline-none focus:border-space-cyan/60 text-white"
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="px-8 py-3 bg-space-cyan text-space-dark font-medium rounded-md hover:bg-space-cyan/80 transition-colors"
                >
                  Enviar Mensagem
                </button>
              </form>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-space-dark/50 p-8 rounded-lg border border-space-cyan/20 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold mb-6 text-white">Informações de Contato</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-space-cyan font-medium mb-2">Endereço</h3>
                  <p className="text-space-light">
                    Av. Paulista, 1000<br />
                    Bela Vista, São Paulo - SP<br />
                    CEP: 01310-100
                  </p>
                </div>
                
                <div>
                  <h3 className="text-space-cyan font-medium mb-2">Email</h3>
                  <p className="text-space-light">
                    contato@cbxgrowth.com<br />
                    suporte@cbxgrowth.com
                  </p>
                </div>
                
                <div>
                  <h3 className="text-space-cyan font-medium mb-2">Telefone</h3>
                  <p className="text-space-light">
                    +55 (11) 3456-7890<br />
                    +55 (11) 9876-5432
                  </p>
                </div>
                
                <div>
                  <h3 className="text-space-cyan font-medium mb-2">Horário de Funcionamento</h3>
                  <p className="text-space-light">
                    Segunda a Sexta: 9h - 18h<br />
                    Sábados: 9h - 13h
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </PageLayout>
  );
};

export default Contato;
