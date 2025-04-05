
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const BlogNewsletter = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setEmail('');
      toast.success("Inscrito com sucesso! Obrigado por se inscrever na nossa newsletter.");
    }, 1500);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-4xl mx-auto mt-24 bg-gradient-to-r from-space-dark/80 to-space-dark rounded-xl border border-space-cyan/20 p-8 md:p-10"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Receba nosso conteúdo exclusivo
        </h3>
        <p className="text-space-light max-w-2xl mx-auto">
          Assine nossa newsletter e receba dicas, estratégias e insights sobre marketing digital, growth hacking e tecnologia diretamente no seu email.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
        <Input
          type="email"
          placeholder="Seu melhor email"
          className="bg-space-dark/70 border-space-cyan/30 text-white placeholder:text-space-light/50 flex-grow"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button 
          type="submit" 
          disabled={isLoading}
          className="py-2 px-6 bg-space-cyan text-space-dark font-medium rounded-md hover:bg-space-cyan/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isLoading ? "Inscrevendo..." : "Inscrever-se"}
        </button>
      </form>
      
      <p className="text-xs text-space-light/70 text-center mt-4">
        Nós respeitamos sua privacidade. Você pode cancelar a inscrição a qualquer momento.
      </p>
    </motion.div>
  );
};

export default BlogNewsletter;
