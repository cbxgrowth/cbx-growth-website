
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, BarChart2, Heart, Users } from 'lucide-react';

const ValuesSection = () => {
  const values = [
    {
      icon: <Clock className="w-6 h-6 text-space-cyan" />,
      title: "Agilidade",
      description: "Adaptar-se rapidamente às mudanças do mercado e entregar valor constantemente."
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-space-cyan" />,
      title: "Orientação por Dados",
      description: "Todas as decisões são fundamentadas em dados e evidências concretas."
    },
    {
      icon: <Users className="w-6 h-6 text-space-cyan" />,
      title: "Colaboração",
      description: "Trabalhamos como extensão do time do cliente, com comunicação transparente."
    },
    {
      icon: <Heart className="w-6 h-6 text-space-cyan" />,
      title: "Impacto Genuíno",
      description: "Comprometidos com resultados reais que transformam os negócios de nossos clientes."
    }
  ];

  return (
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
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-space-dark/30 p-6 rounded-lg border border-space-cyan/10 backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-space-cyan/10 rounded-full flex items-center justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{value.title}</h3>
              <p className="text-space-light">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
