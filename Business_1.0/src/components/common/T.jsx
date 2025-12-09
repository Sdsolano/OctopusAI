// src/components/common/T.jsx
// Componente para texto traducible usando el sistema de claves

import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';

export const T = ({ children, fallback, className, as: Component = 'span', ...props }) => {
  const { t } = useTranslation();
  
  // Si children es una clave de traducción (ej: 'nav.home'), usarla
  // Si no, mostrar el texto directamente (ya que el sistema actual usa claves)
  const translationKey = typeof children === 'string' && children.includes('.') 
    ? children 
    : fallback || children;
  
  return (
    <Component className={className} {...props}>
      {translationKey ? t(translationKey) : children}
    </Component>
  );
};

// Componente alternativo más explícito
export const TranslatedText = ({ text, fallback, className, children, ...props }) => {
  const { t } = useTranslation();
  
  const translationKey = text || children;
  
  return (
    <span className={className} {...props}>
      {translationKey ? t(translationKey) : fallback || children}
    </span>
  );
};

export default T;
