// src/contexts/FrontendLanguageContext.jsx
// Context mejorado que reemplaza tu LanguageContext actual

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { frontendTranslationService } from '../services/frontendTranslationService';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a FrontendLanguageProvider');
  }
  return context;
};

const detectBrowserLanguage = () => {
  const browserLang = navigator.language || navigator.userLanguage;
  const langCode = browserLang.split('-')[0].toLowerCase();
  return langCode === 'en' ? 'en' : 'es';
};

export const FrontendLanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem('octopus-language');
    if (savedLang) return savedLang;
    return detectBrowserLanguage();
  });

  const [isTranslating, setIsTranslating] = useState(false);
  const [hasAutoTranslated, setHasAutoTranslated] = useState(false);
  const [stats, setStats] = useState({
    staticTranslations: 0,
    dynamicCache: 0,
    apiUsage: []
  });

  useEffect(() => {
    localStorage.setItem('octopus-language', language);
  }, [language]);

  // Auto-traducir al cargar si el navegador está en inglés (mejorado)
  useEffect(() => {
    if (language === 'en' && !hasAutoTranslated) {
      const timer = setTimeout(() => {
        console.log('🔄 Auto-traduciendo página a inglés...');
        setIsTranslating(true);
        
        try {
          frontendTranslationService.translatePage('en');
          setHasAutoTranslated(true);
          setStats(frontendTranslationService.getStats());
          console.log('✅ Auto-traducción completada');
        } catch (error) {
          console.error('Error en auto-traducción:', error);
        } finally {
          setIsTranslating(false);
        }
      }, 500); // Pequeño delay para que el DOM esté listo

      return () => clearTimeout(timer);
    }
  }, [language, hasAutoTranslated]);

  const changeLanguage = useCallback(async (newLanguage) => {
    if (newLanguage === language) return;
    
    console.log(`🔄 Cambiando idioma de ${language} a ${newLanguage}`);
    setIsTranslating(true);
    setLanguage(newLanguage);
    
    try {
      if (newLanguage === 'en') {
        frontendTranslationService.translatePage('en');
        console.log('✅ Página traducida a inglés');
      } else {
        frontendTranslationService.restoreOriginalTexts();
        console.log('✅ Página restaurada a español');
      }
      
      setHasAutoTranslated(true);
      setStats(frontendTranslationService.getStats());
    } catch (error) {
      console.error('Error durante cambio de idioma:', error);
    } finally {
      setIsTranslating(false);
    }
  }, [language]);

  const value = {
    language,
    changeLanguage,
    isTranslating,
    stats,
    browserLanguage: detectBrowserLanguage(),
    hasAutoTranslated
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personalizado para traducción (compatible con tu código existente)
export const useFrontendTranslation = () => {
  const { language } = useContext(LanguageContext);
  
  const t = useCallback((text, fallback = text) => {
    if (language === 'es') return text;
    
    // Traducción instantánea - no async!
    const translated = frontendTranslationService.translateText(text, 'es', 'en');
    return translated || fallback;
  }, [language]);

  return { t, language };
};

// Para mantener compatibilidad con tu código existente
export const LanguageProvider = FrontendLanguageProvider;