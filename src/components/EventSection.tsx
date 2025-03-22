
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Monitor, Layers, Code } from 'lucide-react';
import GradientButton from './ui/GradientButton';
import { cn } from '@/lib/utils';

interface EventCardProps {
  icon: React.ReactNode;
  date: string;
  title: string;
  description: string;
  delay: number;
  color?: string;
}

const EventCard = ({ icon, date, title, description, delay, color = "bg-space-cyan" }: EventCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="relative glass-panel p-6 backdrop-blur-xl border-space-cyan/30 mb-8 md:mb-10"
  >
    <div className={cn(
      "absolute -left-3 -top-3 w-10 h-10 rounded-full flex items-center justify-center",
      `${color}/90 backdrop-blur-xl border border-white/20`
    )}>
      {icon}
    </div>
    <div className="ml-2">
      <div className="text-space-cyan text-sm mb-1">{date}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-space-light text-sm">{description}</p>
    </div>
  </motion.div>
);

const EventSection = () => {
  return (
    <section id="campaign" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-neon-glow-gradient opacity-20 z-0"></div>
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-space-cyan animate-sparkle"></div>
        <div className="absolute top-3/4 left-1/4 w-1 h-1 rounded-full bg-space-purple animate-sparkle delay-[1s]"></div>
        <div className="absolute top-1/3 left-2/3 w-1.5 h-1.5 rounded-full bg-space-pink animate-sparkle delay-[1.5s]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-left mb-12">
              <h2 className="text-sm text-space-cyan font-medium uppercase tracking-wider mb-2">Cronograma do evento</h2>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">O que você irá <span className="gradient-text">aprender?</span></h1>
              <p className="text-space-light max-w-xl">
                Junte-se a nós para explorar o futuro da tecnologia e desenvolvimento espacial. Nosso evento irá transformar sua visão sobre o que é possível.
              </p>
            </div>

            <div className="space-y-6 relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-space-cyan/30 z-0"></div>
              
              <EventCard
                icon={<Monitor className="text-white" size={18} />}
                date="16/10, às 19h"
                title="Introdução à Tecnologia Espacial"
                description="Tudo o que você precisa saber para entrar e prosperar na área de tecnologia espacial e suas aplicações."
                delay={0.1}
              />
              
              <EventCard
                icon={<Layers className="text-white" size={18} />}
                date="17/10, às 19h"
                title="Criação de Layouts Futurísticos"
                description="Aprenda a criar interfaces futuristas com tecnologias de ponta para aplicações espaciais."
                delay={0.2}
                color="bg-space-purple"
              />
              
              <EventCard
                icon={<Code className="text-white" size={18} />}
                date="18/10, às 19h"
                title="Desenvolvimento Avançado"
                description="Instalação e desenvolvimento de projetos com inteligência artificial e tecnologias emergentes."
                delay={0.3}
                color="bg-space-pink"
              />
              
              <EventCard
                icon={<Calendar className="text-white" size={18} />}
                date="19/10, às 19h"
                title="Lançamento de Projetos"
                description="Divulgação e lançamento de projetos espaciais com estratégias de marketing eficientes."
                delay={0.4}
                color="bg-space-gold"
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10"
            >
              <GradientButton href="#service" className="w-full md:w-auto justify-center">
                ME INSCREVER
              </GradientButton>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-space-purple/40 via-space-cyan/30 to-transparent rounded-lg z-10 mix-blend-overlay group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-space-dark/50 to-transparent rounded-lg z-10 mix-blend-multiply"></div>
              
              <img 
                src="/lovable-uploads/3766087c-2b2a-47bc-852d-d8587ce1cb55.png" 
                alt="Instrutor do curso" 
                className="rounded-lg max-w-full mx-auto relative z-0 transition-transform duration-700 ease-in-out group-hover:scale-[1.02]"
              />
              
              <div className="absolute inset-0 bg-glow-circle opacity-30 filter blur-xl"></div>
              
              <div className="absolute -inset-0.5 bg-gradient-to-r from-space-cyan/20 to-space-purple/20 rounded-lg blur opacity-40 group-hover:opacity-60 transition-opacity duration-700 z-0"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="mt-24 py-12 bg-space-cyan/90 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-space-dark mb-4">
                Um intensivo sobre Tecnologia Espacial. De graça.
                <span className="block mt-2">Vai ficar de fora?</span>
              </h2>
            </div>
            <div className="md:w-1/3 flex justify-end">
              <GradientButton href="#service" className="bg-space-dark border-0 hover:bg-space-dark/80">
                ME INSCREVER AGORA
              </GradientButton>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EventSection;
