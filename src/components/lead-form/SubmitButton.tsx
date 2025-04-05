
import React from 'react';
import { Send } from 'lucide-react';
import GradientButton from '@/components/ui/GradientButton';

interface SubmitButtonProps {
  isSubmitting: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ isSubmitting }) => {
  return (
    <GradientButton 
      type="submit" 
      className="w-full mt-6 py-6 group"
      disabled={isSubmitting}
    >
      <div className="flex items-center justify-center gap-2">
        {isSubmitting ? (
          <>
            <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
            <span>Enviando...</span>
          </>
        ) : (
          <>
            <Send size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            <span>Enviar Formulário</span>
          </>
        )}
      </div>
    </GradientButton>
  );
};

export default SubmitButton;
