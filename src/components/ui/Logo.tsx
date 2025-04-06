
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  withText?: boolean;
}

const Logo = ({ className, size = 'md', withText = true }: LogoProps) => {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  return (
    <Link to="/" className={cn("flex items-center", className)}>
      <div className="relative">
        <img 
          src="/lovable-uploads/259b151f-28a7-4771-9a34-e27a1f0044e4.png" 
          alt="CBX Growth Logo" 
          className={cn(sizeClasses[size])}
        />
      </div>
      {withText && (
        <span className="ml-2 font-semibold text-space-light">
          <span className="text-space-cyan">CBX</span> Growth
        </span>
      )}
    </Link>
  );
};

export default Logo;
