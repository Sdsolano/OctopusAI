// src/contexts/LanguageContext.jsx - Versión simplificada
import React, { createContext, useContext, useState, useEffect } from 'react';

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

  useEffect(() => {
    localStorage.setItem('octopus-language', language);
    console.log(`💾 Idioma guardado: ${language}`);
  }, [language]);

  const changeLanguage = (newLanguage) => {
    if (newLanguage === language) return;
    
    console.log(`🔄 Cambiando idioma de ${language} a ${newLanguage}`);
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      changeLanguage,
      browserLanguage: detectBrowserLanguage()
    }}>
      {children}
    </LanguageContext.Provider>
  );
};