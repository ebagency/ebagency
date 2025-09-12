import React from 'react';
import { cn } from '../../utils';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

/**
 * Composant Button avec variantes et tailles
 * 
 * @example
 * // Bouton caché sur mobile, visible sur desktop
 * <Button variant="outline" size="md" className="hidden md:flex">
 *   RÉSERVER MAINTENANT
 * </Button>
 * 
 * @example
 * // Bouton avec classes personnalisées
 * <Button variant="primary" size="sm" className="w-32">
 *   CLICK ME
 * </Button>
 */
export function Button({ 
  children, 
  variant = 'outline', 
  size = 'md', 
  className,
  onClick,
  type = 'button',
  disabled = false
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 border-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary';
  
  const variantClasses = {
    primary: 'bg-primary text-white border-primary hover:bg-primary-dark hover:border-primary-dark focus:ring-primary/50',
    secondary: 'bg-secondary text-white border-secondary hover:bg-primary hover:border-primary focus:ring-secondary/50',
    outline: 'bg-transparent text-primary border-primary hover:bg-primary hover:text-white focus:ring-primary/50'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  const classes = cn(
    baseClasses, 
    variantClasses[variant], 
    sizeClasses[size], 
    disabled && 'opacity-50 cursor-not-allowed hover:scale-100',
    className
  );
  
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
