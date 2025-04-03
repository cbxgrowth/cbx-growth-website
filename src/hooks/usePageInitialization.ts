
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { toast } from 'sonner';

export const usePageInitialization = () => {
  const controls = useAnimation();
  
  useEffect(() => {
    // Iniciar animação de entrada com um pequeno delay para dar tempo ao splash screen
    setTimeout(() => {
      controls.start({ opacity: 1, y: 0 });
    }, 500);
    
    // Mostrar toast de boas-vindas com um delay maior para não competir com o splash screen
    setTimeout(() => {
      toast.success("Bem-vindo a CBX Growth", {
        description: "Explore o futuro do Growth conosco",
        duration: 5000,
        position: "bottom-right",
      });
    }, 3500);
  }, [controls]);
  
  return { controls };
};

export default usePageInitialization;
