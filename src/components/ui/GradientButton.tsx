
import React from 'react';
import { cn } from '@/lib/utils';

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  animated?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const GradientButton = ({ 
  children, 
  onClick, 
  className,
  href,
  animated = true,
  type = 'button'
}: GradientButtonProps) => {
  const ButtonContent = () => (
    <div className="relative z-10 px-8 py-3 font-medium text-white">
      {children}
    </div>
  );

  const buttonClasses = cn(
    "relative overflow-hidden group rounded-md",
    "transition-all duration-300 ease-out transform hover:scale-[1.01]",
    animated ? "before:absolute before:inset-0 before:bg-cyan-gradient before:transition-all" : "",
    animated ? "before:animate-shimmer before:bg-[length:200%_100%]" : "bg-cyan-gradient",
    className
  );

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        <ButtonContent />
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={buttonClasses}>
      <ButtonContent />
    </button>
  );
};

export default GradientButton;
