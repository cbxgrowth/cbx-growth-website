
import React from 'react';
import { Satellite, Cpu, Rocket, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TechItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  delay?: number;
  color?: string;
}

const TechItem = ({ title, description, icon, className, delay = 0, color = "bg-space-cyan" }: TechItemProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className={cn(
      "cosmic-card hover-lift group",
      className
    )}
  >
    <div className={cn(
      "tech-circle w-16 h-16 mb-4 group-hover:border-opacity-80 transition-all duration-300",
      `border-${color}`
    )}>
      <div className="absolute inset-0 bg-glow-circle opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
      {icon}
    </div>
    <h3 className="text-space-pink text-lg font-medium mb-2 group-hover:text-space-cyan transition-colors duration-300">
      {title}
    </h3>
    <p className="text-sm text-space-light max-w-[260px] leading-relaxed">
      {description}
    </p>
    
    <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-space-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-space-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </motion.div>
);

const TechGrid = () => {
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

  return (
    <section id="service" className="py-24 relative overflow-hidden cyber-grid">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-6 py-1 bg-space-blue/30 backdrop-blur-sm border border-space-cyan/20 rounded-full">
            <h2 className="text-sm font-medium text-space-cyan">NOSSOS SERVIÇOS</h2>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">FUTURE TECHNOLOGY</h1>
          <p className="text-space-light max-w-xl mx-auto">
            Explorando o limite do que é possível com soluções digitais de próxima geração.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="orbit-line w-full h-full animate-rotate-slow"
            ></motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="orbit-line w-[70%] h-[70%] top-[15%] left-[15%] animate-rotate-slow" 
              style={{ animationDirection: 'reverse' }}
            ></motion.div>

            {/* Connector lines */}
            <motion.div 
              initial={{ opacity: 0, scaleY: 0 }}
              whileInView={{ opacity: 0.6, scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute top-0 left-1/2 h-[50%] w-px bg-space-cyan opacity-60"
              style={{ transformOrigin: 'bottom' }}
            ></motion.div>
            <motion.div 
              initial={{ opacity: 0, scaleY: 0 }}
              whileInView={{ opacity: 0.6, scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute bottom-0 left-1/2 h-[50%] w-px bg-space-cyan opacity-60"
              style={{ transformOrigin: 'top' }}
            ></motion.div>
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 0.6, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}
              className="absolute top-1/2 left-0 w-[50%] h-px bg-space-cyan opacity-60"
              style={{ transformOrigin: 'right' }}
            ></motion.div>
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 0.6, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute top-1/2 right-0 w-[50%] h-px bg-space-cyan opacity-60"
              style={{ transformOrigin: 'left' }}
            ></motion.div>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="tech-circle w-60 h-60 bg-tech-circle border-2 border-space-cyan/30 backdrop-blur-md"
            >
              <div className="text-center p-4">
                <h2 className="text-2xl font-semibold mb-1 neon-text">FUTURE</h2>
                <h2 className="text-2xl font-semibold mb-4 gradient-text">TECHNOLOGY</h2>
                <p className="text-xs text-space-light px-4 leading-relaxed">
                  Tecnologias de ponta e soluções digitais constantemente atualizadas 
                  e distribuídas ao redor do mundo, após discussão sobre desenvolvimento
                </p>
              </div>
              <div className="absolute inset-0 rounded-full bg-neon-glow-gradient animate-glow-pulse"></div>
            </motion.div>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <TechItem 
              title="SATELLITE" 
              description="Tecnologia avançada de satélite para redes de comunicação global e aplicações de sensoriamento remoto."
              icon={<Satellite className="text-space-cyan" size={24} />}
              className="lg:col-start-1 flex flex-col items-center text-center"
              delay={0.1}
              color="space-cyan"
            />
            <TechItem 
              title="PROCESSING" 
              description="Soluções de computação quântica e processamento de ponta para desafios complexos de análise de dados."
              icon={<Cpu className="text-space-purple" size={24} />}
              className="lg:col-start-2 flex flex-col items-center text-center"
              delay={0.2}
              color="space-purple"
            />
            <TechItem 
              title="EXPLORATION" 
              description="Tecnologias de exploração espacial projetadas para expandir as fronteiras do que é possível além da Terra."
              icon={<Rocket className="text-space-pink" size={24} />}
              className="lg:col-start-3 flex flex-col items-center text-center"
              delay={0.3}
              color="space-pink"
            />
            <TechItem 
              title="GLOBAL NETWORK" 
              description="Infraestruturas de rede global interconectadas que permitem comunicação e compartilhamento de dados perfeitos."
              icon={<Globe className="text-space-gold" size={24} />}
              className="lg:col-start-4 flex flex-col items-center text-center"
              delay={0.4}
              color="space-gold"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechGrid;
