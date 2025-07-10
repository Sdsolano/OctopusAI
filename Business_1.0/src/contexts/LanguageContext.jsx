import React, { createContext, useContext, useState, useEffect } from 'react';
import { translatePageToEnglish, restoreOriginalSpanish } from '../utils/pageTranslation';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Detectar idioma del navegador
const detectBrowserLanguage = () => {
  const browserLang = navigator.language || navigator.userLanguage;
  const langCode = browserLang.split('-')[0].toLowerCase();
  return langCode === 'en' ? 'en' : 'es';
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem('octopus-language');
    if (savedLang) return savedLang;
    
    const browserLang = detectBrowserLanguage();
    console.log('🌍 Idioma detectado del navegador:', browserLang);
    return browserLang;
  });

  const [isTranslating, setIsTranslating] = useState(false);
  const [hasAutoTranslated, setHasAutoTranslated] = useState(false);

  useEffect(() => {
    localStorage.setItem('octopus-language', language);
  }, [language]);

  // Auto-traducir cuando carga la página si el navegador está en inglés
  useEffect(() => {
    const autoTranslate = async () => {
      if (language === 'en' && !hasAutoTranslated) {
        console.log('🔄 Auto-traduciendo página a inglés...');
        setIsTranslating(true);
        await translatePageToEnglish();
        setIsTranslating(false);
        setHasAutoTranslated(true);
      }
    };

    const timer = setTimeout(autoTranslate, 1000);
    return () => clearTimeout(timer);
  }, [language, hasAutoTranslated]);

  const changeLanguage = async (newLanguage) => {
    if (newLanguage === language) return;
    
    setIsTranslating(true);
    setLanguage(newLanguage);
    
    try {
      if (newLanguage === 'en') {
        console.log('🔄 Traduciendo a inglés...');
        await translatePageToEnglish();
      } else {
        console.log('🔄 Restaurando español...');
        await restoreOriginalSpanish();
      }
      setHasAutoTranslated(true);
    } catch (error) {
      console.error('Error durante traducción:', error);
    } finally {
      setIsTranslating(false);
    }
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      changeLanguage, 
      isTranslating,
      browserLanguage: detectBrowserLanguage()
    }}>
      {children}
    </LanguageContext.Provider>
  );
};