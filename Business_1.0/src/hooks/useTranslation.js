// src/hooks/useTranslation.js
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

export const useTranslation = () => {
  const { language } = useLanguage();
  
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        console.warn(`🚨 Translation key not found: ${key} for language: ${language}`);
        return key; // Return key if translation not found
      }
    }
    
    return value || key;
  };
  
  // Helper para arrays de traducciones (útil para listas)
  const tArray = (keyBase, count) => {
    const result = [];
    for (let i = 0; i < count; i++) {
      result.push(t(`${keyBase}.${i}`));
    }
    return result;
  };

  // Helper para traducción con fallback personalizado
  const tFallback = (key, fallback) => {
    const translation = t(key);
    return translation === key ? fallback : translation;
  };
  
  return { 
    t, 
    tArray, 
    tFallback,
    language // Exportar el idioma actual también
  };
};