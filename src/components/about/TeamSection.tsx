
import React from 'react';
import { motion } from 'framer-motion';

type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
};

const TeamSection = () => {
  const teamMembers: TeamMember[] = [
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
  );
};

export default TeamSection;
