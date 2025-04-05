
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WordPressPanel = () => {
  return (
    <Card className="bg-space-dark/60 border border-space-cyan/20">
      <CardHeader>
        <CardTitle className="text-xl text-white">
          Painel WordPress
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-space-light mb-4">
          Acesse o painel WordPress para gerenciar seus artigos, agendar publicações e mais.
        </p>
        <a 
          href="/wp-admin" 
          target="_blank" 
          className="block w-full py-2 bg-space-cyan/20 hover:bg-space-cyan/30 text-space-cyan text-center rounded-md transition-colors"
        >
          Acessar WP Admin
        </a>
      </CardContent>
    </Card>
  );
};

export default WordPressPanel;
