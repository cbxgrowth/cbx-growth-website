
import React from 'react';

const TestimonialsSection = () => {
  return (
    <div className="bg-space-blue/20 backdrop-blur-md rounded-2xl border border-space-cyan/10 p-8">
      <h3 className="text-2xl font-bold mb-4 text-space-cyan">Depoimentos</h3>
      
      <div className="space-y-6">
        <div className="bg-space-blue/30 p-4 rounded-lg">
          <p className="text-space-light text-sm italic mb-3">
            "Desde que começamos a trabalhar com a CBX Growth, nosso negócio cresceu mais de 200% em apenas 6 meses. A equipe é extremamente profissional e comprometida com resultados."
          </p>
          <div className="flex items-center justify-between">
            <p className="text-white font-medium">Ana Clara</p>
            <p className="text-space-cyan text-xs">CEO, TechSolutions</p>
          </div>
        </div>
        
        <div className="bg-space-blue/30 p-4 rounded-lg">
          <p className="text-space-light text-sm italic mb-3">
            "A metodologia da CBX Growth transformou completamente nossa abordagem de marketing. Os resultados superaram todas as nossas expectativas."
          </p>
          <div className="flex items-center justify-between">
            <p className="text-white font-medium">Marcelo Santos</p>
            <p className="text-space-cyan text-xs">Diretor, Innova Inc</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
