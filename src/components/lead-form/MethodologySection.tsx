
import React from 'react';
import { Star, Rocket, CheckCircle2, Clock } from 'lucide-react';

const MethodologySection = () => {
  return (
    <div className="bg-space-blue/20 backdrop-blur-md rounded-2xl border border-space-cyan/10 p-8">
      <h3 className="text-2xl font-bold mb-6 text-space-cyan flex items-center gap-2">
        <Star className="text-space-gold" /> 
        Metodologia CBX
      </h3>
      
      <ul className="space-y-6">
        <li className="flex gap-4">
          <div className="mt-1">
            <Rocket className="text-space-cyan" size={20} />
          </div>
          <div>
            <h4 className="font-medium text-white mb-1">Análise Completa</h4>
            <p className="text-space-light text-sm">
              Analisamos seu negócio, concorrência e mercado para identificar oportunidades de crescimento e áreas de melhoria.
            </p>
          </div>
        </li>
        
        <li className="flex gap-4">
          <div className="mt-1">
            <Star className="text-space-gold" size={20} />
          </div>
          <div>
            <h4 className="font-medium text-white mb-1">Estratégia Personalizada</h4>
            <p className="text-space-light text-sm">
              Desenvolvemos uma estratégia sob medida para seus objetivos, considerando seu orçamento e prazo.
            </p>
          </div>
        </li>
        
        <li className="flex gap-4">
          <div className="mt-1">
            <CheckCircle2 className="text-space-cyan" size={20} />
          </div>
          <div>
            <h4 className="font-medium text-white mb-1">Implementação Ágil</h4>
            <p className="text-space-light text-sm">
              Implementamos as estratégias com agilidade, ajustando conforme necessário para garantir resultados.
            </p>
          </div>
        </li>
        
        <li className="flex gap-4">
          <div className="mt-1">
            <Clock className="text-space-gold" size={20} />
          </div>
          <div>
            <h4 className="font-medium text-white mb-1">Monitoramento Contínuo</h4>
            <p className="text-space-light text-sm">
              Acompanhamos os resultados em tempo real, otimizando constantemente para maximizar o ROI.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MethodologySection;
