
import React from 'react';
import { motion } from 'framer-motion';
import GradientButton from './ui/GradientButton';
import { ArrowRight, Instagram, Linkedin, MessageSquare, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const Footer = () => {
  const isMobile = useIsMobile();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="relative overflow-hidden bg-space-gradient">
      <div className="absolute inset-0 bg-space-mesh opacity-50"></div>
      <div className="absolute inset-0 bg-neon-glow-gradient opacity-10"></div>
      
      {/* Main footer content section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-block mb-4 px-6 py-1 bg-space-blue/30 backdrop-blur-sm border border-space-cyan/20 rounded-full"
            >
              <h2 className="text-sm font-medium text-space-cyan">PARCERIA ESTRATÉGICA</h2>
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className={`${isMobile ? 'text-4xl' : 'text-6xl md:text-7xl'} font-bold mb-8 tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-space-cyan via-space-light to-space-cyan`}
            >
              CRESCIMENTO
              <br />
              EXPONENCIAL
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-space-light mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Temos o objetivo de ser a melhor parceira para a sua empresa  
              e conseguir resultados reais com ações de marketing digital.
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="relative w-full max-w-lg mx-auto mb-16"
            >
              <div className="absolute inset-0 bg-cyan-gradient opacity-20 blur-md rounded-full"></div>
              <img 
                src="/lovable-uploads/6f98435d-af71-4a55-9e03-803c9ff925ec.png" 
                alt="Foguete" 
                className="relative z-10 mx-auto h-auto max-h-80 object-contain animate-float-gentle" 
              />
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="cosmic-card p-8 max-w-2xl mx-auto"
            >
              <h3 className="text-2xl font-bold mb-4 text-space-cyan">Pronto para começar sua jornada de Growth?</h3>
              <p className="text-space-light mb-6">
                Iremos te ajudar na construção de um novo patamar de empresa. Nossa equipe de especialistas está 
                pronta para transformar o seu negócio em até 90 dias.
              </p>
              <GradientButton className="flex items-center gap-2 mx-auto hover-scale" href="/contato">
                Entre em Contato <ArrowRight size={16} />
              </GradientButton>
            </motion.div>
          </motion.div>
          
          {/* Footer Columns */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-12 border-t border-space-light/20">
            {/* Column 1: About */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-space-cyan">Sobre CBX Growth</h3>
              <p className="text-space-light mb-6">
                Somos especialistas em Growth Marketing e Sales, desenvolvendo estratégias de crescimento para negócios que buscam resultados acima da média.
              </p>
              
              {/* Partner badges */}
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="h-16 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-md flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/1d70eff7-2af2-4a36-86a9-4d159674f1f4.png" 
                    alt="Google Partner" 
                    className="h-10 object-contain" 
                  />
                </div>
                <div className="h-16 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-md flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/64c73edc-d39a-4e77-b286-344a4b924cfb.png" 
                    alt="Meta Partner" 
                    className="h-10 object-contain" 
                  />
                </div>
              </div>
            </div>
            
            {/* Column 2: Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-space-cyan">Navegação</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-space-light hover:text-space-cyan transition-colors">Início</Link>
                </li>
                <li>
                  <Link to="/produto" className="text-space-light hover:text-space-cyan transition-colors">Produto</Link>
                </li>
                <li>
                  <Link to="/metodo" className="text-space-light hover:text-space-cyan transition-colors">Método</Link>
                </li>
                <li>
                  <Link to="/cases" className="text-space-light hover:text-space-cyan transition-colors">Cases</Link>
                </li>
                <li>
                  <Link to="/sobre" className="text-space-light hover:text-space-cyan transition-colors">Sobre</Link>
                </li>
                <li>
                  <Link to="/blog" className="text-space-light hover:text-space-cyan transition-colors">Blog</Link>
                </li>
                <li>
                  <Link to="/contato" className="text-space-light hover:text-space-cyan transition-colors">Contato</Link>
                </li>
              </ul>
            </div>
            
            {/* Column 3: Contact */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-space-cyan">Contato</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin size={18} className="text-space-cyan mr-2 mt-1 flex-shrink-0" />
                  <span className="text-space-light">
                    Rua Doutor Possidonio Bem, 371. Sala 05 CXPST 24. Lagoa Seca.<br />
                    Juazeiro do Norte - CE, 63040-300.
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone size={18} className="text-space-cyan mr-2 flex-shrink-0" />
                  <span className="text-space-light">(88) 98843-2310</span>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="text-space-cyan mr-2 flex-shrink-0" />
                  <a href="mailto:contato@cbxgrowth.com.br" className="text-space-light hover:text-space-cyan transition-colors">
                    contato@cbxgrowth.com.br
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Column 4: Social and Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-space-cyan">Siga-nos</h3>
              <div className="flex space-x-4 mb-8">
                <a href="https://www.instagram.com/cbxgrowth/" target="_blank" rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-space-blue/30 flex items-center justify-center border border-space-cyan/20 hover:bg-space-blue/50 transition-colors">
                  <Instagram size={18} className="text-space-light" />
                </a>
                <a href="https://www.linkedin.com/in/caioborgesgrowth/" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-space-blue/30 flex items-center justify-center border border-space-cyan/20 hover:bg-space-blue/50 transition-colors">
                  <Linkedin size={18} className="text-space-light" />
                </a>
                <a href="https://www.facebook.com/cbxgrowth" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-space-blue/30 flex items-center justify-center border border-space-cyan/20 hover:bg-space-blue/50 transition-colors">
                  <Facebook size={18} className="text-space-light" />
                </a>
                <a href="https://wa.me/88988432310" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-space-blue/30 flex items-center justify-center border border-space-cyan/20 hover:bg-space-blue/50 transition-colors">
                  <MessageSquare size={18} className="text-space-light" />
                </a>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-space-cyan">Newsletter</h3>
              <p className="text-space-light mb-4 text-sm">
                Assine nossa newsletter para receber as últimas notícias e atualizações.
              </p>
              <form className="flex flex-col space-y-3">
                <input 
                  type="email" 
                  placeholder="Seu email corporativo" 
                  className="px-4 py-3 bg-space-blue/30 border border-space-cyan/30 rounded-md text-white placeholder:text-space-light/70 focus:outline-none focus:border-space-cyan"
                />
                <GradientButton type="submit" className="w-full">
                  Assinar
                </GradientButton>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer bottom with copyright */}
      <div className="border-t border-space-light/20 py-6 relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-space-light text-sm mb-4 md:mb-0">
              © 2025 CBX Growth. Todos os direitos reservados.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div className="flex space-x-4 md:space-x-6 mb-4 md:mb-0 flex-wrap justify-center">
                <a href="#" className="text-space-light hover:text-space-cyan transition-colors duration-300 text-sm">Política de Privacidade</a>
                <a href="#" className="text-space-light hover:text-space-cyan transition-colors duration-300 text-sm">Termos de Serviços</a>
                <a href="#" className="text-space-light hover:text-space-cyan transition-colors duration-300 text-sm">Contato</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
