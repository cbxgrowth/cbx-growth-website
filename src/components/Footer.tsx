
import React from 'react';
import { motion } from 'framer-motion';
import GradientButton from './ui/GradientButton';
import { ArrowRight, Star, Code, Zap, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
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
    <section className="py-32 relative overflow-hidden bg-space-gradient">
      <div className="absolute inset-0 bg-space-mesh opacity-50"></div>
      <div className="absolute inset-0 bg-neon-glow-gradient opacity-10"></div>
      
      {/* Animated particles */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-space-cyan animate-sparkle"></div>
      <div className="absolute top-3/4 left-1/4 w-1 h-1 rounded-full bg-space-purple animate-sparkle delay-[1s]"></div>
      <div className="absolute top-1/3 left-2/3 w-1.5 h-1.5 rounded-full bg-space-pink animate-sparkle delay-[1.5s]"></div>
      <div className="absolute bottom-1/4 right-1/3 w-1 h-1 rounded-full bg-space-gold animate-sparkle delay-[0.5s]"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-block mb-4 px-6 py-1 bg-space-blue/30 backdrop-blur-sm border border-space-cyan/20 rounded-full"
          >
            <h2 className="text-sm font-medium text-space-cyan">DISCOVER THE FUTURE</h2>
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-bold mb-8 tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-space-cyan via-space-purple to-space-pink"
          >
            F U T U R E
            <br />
            TECHNOLOGY
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-space-light mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Tonytm Images produz diversos tipos de conteúdos de alta qualidade constantemente atualizados 
            e distribuídos por todo o mundo. Após discussão sobre a produção de imagens, seria aconselhável 
            ser apresentado por profissionais qualificados. Se você é bom em tecnologia verde, eles sempre dão as boas-vindas...
          </motion.p>
          
          <motion.div
            variants={containerVariants}
            className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16"
          >
            <motion.div 
              variants={itemVariants}
              className="cosmic-card p-6 flex flex-col items-center max-w-[220px] hover-lift"
            >
              <Star className="text-space-cyan mb-3" size={24} />
              <h3 className="text-lg font-medium mb-2">Inovação</h3>
              <p className="text-sm text-space-light">Expandindo fronteiras com soluções tecnológicas de ponta</p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="cosmic-card p-6 flex flex-col items-center max-w-[220px] hover-lift"
            >
              <Code className="text-space-pink mb-3" size={24} />
              <h3 className="text-lg font-medium mb-2">Desenvolvimento</h3>
              <p className="text-sm text-space-light">Construindo o futuro com precisão e visão especializada</p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="cosmic-card p-6 flex flex-col items-center max-w-[220px] hover-lift"
            >
              <Zap className="text-space-gold mb-3" size={24} />
              <h3 className="text-lg font-medium mb-2">Performance</h3>
              <p className="text-sm text-space-light">Entregando velocidade e confiabilidade excepcionais</p>
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="relative w-full max-w-lg mx-auto mb-16"
          >
            <div className="absolute inset-0 bg-cta-gradient opacity-20 blur-md rounded-full"></div>
            <img 
              src="/lovable-uploads/70883f83-dcb4-488d-8673-b9d5c27eed46.png" 
              alt="Astronaut" 
              className="relative z-10 mx-auto h-auto max-h-80 object-contain animate-float-gentle" 
            />
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="cosmic-card p-8 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-4 neon-text">Pronto para começar sua jornada?</h3>
            <p className="text-space-light mb-6">
              Junte-se a nós na construção da tecnologia do amanhã. Nossa equipe de especialistas está 
              pronta para ajudar você a transformar sua visão em realidade.
            </p>
            <GradientButton className="flex items-center gap-2 mx-auto hover-scale">
              Entre em Contato <ArrowRight size={16} />
            </GradientButton>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="mt-20 border-t border-space-light/20 pt-8">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-space-light text-sm mb-4 md:mb-0">
              © 2023 CBX Growth. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <div className="flex space-x-6">
                <a href="#" className="text-space-light hover:text-space-cyan transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="text-space-light hover:text-space-cyan transition-colors duration-300">Terms of Service</a>
                <a href="#" className="text-space-light hover:text-space-cyan transition-colors duration-300">Contact</a>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 rounded-full bg-space-blue/30 flex items-center justify-center border border-space-cyan/20 hover:bg-space-blue/50 transition-colors">
                  <Github size={16} className="text-space-light" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-space-blue/30 flex items-center justify-center border border-space-cyan/20 hover:bg-space-blue/50 transition-colors">
                  <Twitter size={16} className="text-space-light" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-space-blue/30 flex items-center justify-center border border-space-cyan/20 hover:bg-space-blue/50 transition-colors">
                  <Linkedin size={16} className="text-space-light" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
