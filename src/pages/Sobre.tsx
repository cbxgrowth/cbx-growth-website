
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import usePageInitialization from '@/hooks/usePageInitialization';

const Sobre = () => {
  const { controls } = usePageInitialization();
  
  return (
    <PageLayout controls={controls}>
      <div className="container mx-auto px-6 py-24 min-h-screen">
        <h1 className="text-4xl font-bold text-space-light mb-8">Sobre nós</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-space-light/80 text-lg">
            Conteúdo da página Sobre...
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Sobre;
