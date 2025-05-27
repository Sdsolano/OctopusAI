// components/ui/Button.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, ChevronRight } from 'lucide-react';

/**
 * Componente Button reutilizable y personalizable
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  isFullWidth = false,
  leftIcon,
  rightIcon,
  to,
  href,
  disabled = false,
  isLoading = false,
  onClick,
  className = '',
  ...props
}) {
  // Configuraciones de variantes
  const variants = {
    primary: 
      'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-purple-600/20 border-transparent hover:from-indigo-600 hover:to-purple-600',
    secondary: 
      'bg-purple-900/30 text-purple-300 hover:bg-purple-900/50 border-purple-500/40 hover:border-purple-500/60',
    outline: 
      'bg-transparent text-purple-400 border-purple-500/40 hover:bg-purple-900/20 hover:border-purple-500/60',
    ghost: 
      'bg-transparent text-purple-400 hover:bg-purple-900/20 border-transparent',
    danger:
      'bg-gradient-to-r from-red-600 to-rose-600 text-white hover:shadow-lg hover:shadow-red-600/20 border-transparent hover:from-rose-600 hover:to-red-600',
  };

  // Configuraciones de tamaños
  const sizes = {
    sm: 'text-xs py-2 px-3',
    md: 'text-sm py-2.5 px-5',
    lg: 'text-base py-3 px-6',
    xl: 'text-lg py-4 px-8',
  };

  // Configuraciones de bordes redondeados
  const rounded = {
    sm: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  };

  // Configuración para el hover del icono derecho
  const iconRightAnimation = rightIcon 
    ? 'group-hover:translate-x-0.5 transition-transform duration-300' 
    : '';

  // Configuraciones base
  const baseClasses = `
    inline-flex items-center justify-center font-medium border-2 transition-all duration-300 relative
    ${sizes[size]}
    ${rounded[size === 'xl' ? 'xl' : 'lg']}
    ${variants[variant]}
    ${isFullWidth ? 'w-full' : ''}
    ${disabled || isLoading ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `;

  // Determinar el componente correcto basado en props
  const Component = to ? Link : href ? 'a' : 'button';
  const routeProps = to ? { to } : href ? { href, target: "_blank", rel: "noopener noreferrer" } : {};
  
  return (
    <Component
      className={baseClasses}
      onClick={onClick}
      disabled={disabled || isLoading}
      {...routeProps}
      {...props}
    >
      {/* Indicador de carga */}
      {isLoading && (
        <svg 
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      
      {/* Icono izquierdo */}
      {!isLoading && leftIcon && (
        <span className="mr-2 flex-shrink-0">
          {leftIcon}
        </span>
      )}
      
      {/* Contenido del botón */}
      <span className="relative z-10">{children}</span>
      
      {/* Icono derecho */}
      {rightIcon && (
        <span className={`ml-2 flex-shrink-0 transition-transform duration-300 hover:translate-x-0.5`}>
          {rightIcon}
        </span>
      )}
      
      {/* Icono para enlaces externos */}
      {href && !rightIcon && (
        <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 hover:translate-x-0.5" />
      )}
    </Component>
  );
}

// Componentes preconfigurados para casos de uso comunes
Button.Primary = (props) => <Button variant="primary" {...props} />;
Button.Secondary = (props) => <Button variant="secondary" {...props} />;
Button.Outline = (props) => <Button variant="outline" {...props} />;
Button.Ghost = (props) => <Button variant="ghost" {...props} />;
Button.Danger = (props) => <Button variant="danger" {...props} />;

// Botón de acción principal con flecha
Button.Action = ({ children, ...props }) => (
  <Button 
    variant="primary" 
    size="lg" 
    rightIcon={<ArrowRight className="h-5 w-5" />} 
    {...props}
  >
    {children}
  </Button>
);

// Botón de enlace
Button.Link = ({ children, ...props }) => (
  <Button 
    variant="ghost" 
    rightIcon={<ChevronRight className="h-4 w-4" />} 
    className="py-1 px-2" 
    {...props}
  >
    {children}
  </Button>
);

export default Button;