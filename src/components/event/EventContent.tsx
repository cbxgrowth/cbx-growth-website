
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Megaphone, Layers, Code } from 'lucide-react';
import EventCard from './EventCard';
import GradientButton from '../ui/GradientButton';

const EventContent = () => {
  return (
    <motion.div 
      className="lg:w-1/2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-left mb-12">
        <h2 className="text-sm text-space-cyan font-medium uppercase tracking-wider mb-2">Growth Marketing e Sales</h2>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Growth aplicado em <span className="gradient-text">performance</span></h1>
        <p className="text-space-light max-w-xl">
          Metodologia 100% focada no alcance de resultados em até 90 dias. Nosso método é um funil contínuo e otimizado para o seu negócio crescer.
        </p>
      </div>

      <div className="space-y-6 relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-space-cyan/30 z-0"></div>
        
        <EventCard
          icon={<Megaphone className="text-white" size={18} />}
          date="Aquisição"
          title="Geração de Leads"
          description="Atraimos e direcionamos potenciais clientes para os canais de vendas."
          delay={0.1}
        />
        
        <EventCard
          icon={<Layers className="text-white" size={18} />}
          date="Engajamento"
          title="Jornada do Consumidor"
          description="Desenvolvemos o processo e jornada online do potencial cliente para a conversão em vendas."
          delay={0.2}
          color="bg-space-purple"
        />
        
        <EventCard
          icon={<Code className="text-white" size={18} />}
          date="Conversão"
          title="Lead para Cliente"
          description="Atraimos, engajamos, agora convertemos o Lead em Cliente com o objetivo fidelizá-lo."
          delay={0.3}
          color="bg-space-pink"
        />
        
        <EventCard
          icon={<Calendar className="text-white" size={18} />}
          date="Retenção"
          title="Rentabilidade e crescimento"
          description="Mantemos clientes que compraram, transformando-os em consumidores recorrentes e defensores da marca."
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
          APLICAR MÉTODO
        </GradientButton>
      </motion.div>
    </motion.div>
  );
};

export default EventContent;
