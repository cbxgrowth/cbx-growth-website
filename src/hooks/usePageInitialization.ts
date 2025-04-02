
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { toast } from 'sonner';

export const usePageInitialization = () => {
  const controls = useAnimation();
  
  useEffect(() => {
    // Iniciar animação de entrada
    controls.start({ opacity: 1, y: 0 });
    
    // Mostrar toast de boas-vindas com um pequeno delay para melhor UX
    setTimeout(() => {
      toast.success("Bem-vindo a CBX Growth", {
        description: "Explore o futuro do Growth conosco",
        duration: 5000,
        position: "bottom-right",
      });
    }, 1500);
  }, [controls]);
  
  return { controls };
};

export default usePageInitialization;
