
import React from 'react';
import TimelineStep from './TimelineStep';

const MethodTimeline = () => {
  return (
    <div className="mt-20">
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-space-cyan/30"></div>
        
        <TimelineStep 
          number="1" 
          title="Diagnóstico" 
          description="Análise completa do seu negócio para identificar oportunidades e desafios. Mapeamos o ciclo de vida do cliente, pontos de contato e principais indicadores de desempenho."
        />
        
        <TimelineStep 
          number="2" 
          title="Estratégia" 
          description="Desenvolvimento de um plano personalizado com base nos insights do diagnóstico. Definimos objetivos claros, KPIs e marcos para acompanhamento do progresso."
          isRight
        />
        
        <TimelineStep 
          number="3" 
          title="Execução & Otimização" 
          description="Implementação da estratégia com monitoramento constante e ajustes baseados em dados. Nossa equipe trabalha lado a lado com seu time para garantir resultados consistentes."
        />
      </div>
    </div>
  );
};

export default MethodTimeline;
