// src/components/common/T.jsx
// Componente para texto traducible automático

import React from 'react';
import { useFrontendTranslation } from '../../contexts/FrontendLanguageContext';

export const T = ({ children, fallback, className, as: Component = 'span', ...props }) => {
  const { t } = useFrontendTranslation();
  
  return (
    <Component className={className} {...props}>
      {t(children, fallback)}
    </Component>
  );
};

// Componente alternativo más explícito
export const TranslatedText = ({ text, fallback, className, children, ...props }) => {
  const { t } = useFrontendTranslation();
  
  const textToTranslate = text || children;
  
  return (
    <span className={className} {...props}>
      {t(textToTranslate, fallback)}
    </span>
  );
};

export default T;
