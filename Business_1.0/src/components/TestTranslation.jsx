// src/components/TestTranslation.jsx - Para probar el sistema
import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';

const TestTranslation = () => {
  const { t, language } = useTranslation();
  const { changeLanguage } = useLanguage();

  return (
    <div style={{ 
      padding: '20px', 
      border: '2px solid #007bff', 
      borderRadius: '10px',
      margin: '20px',
      backgroundColor: '#f8f9fa'
    }}>
      <h2>🧪 Prueba de Traducción</h2>
      
      {/* Selector de idioma */}
      <div style={{ marginBottom: '20px' }}>
        <span>🌍 Idioma actual: <strong>{language}</strong></span>
        <div style={{ marginTop: '10px' }}>
          <button 
            onClick={() => changeLanguage('es')}
            style={{ 
              marginRight: '10px', 
              padding: '8px 16px',
              backgroundColor: language === 'es' ? '#007bff' : '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '5px'
            }}
          >
            🇪🇸 Español
          </button>
          <button 
            onClick={() => changeLanguage('en')}
            style={{ 
              padding: '8px 16px',
              backgroundColor: language === 'en' ? '#007bff' : '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '5px'
            }}
          >
            🇺🇸 English
          </button>
        </div>
      </div>

      {/* Pruebas de traducción */}
      <div style={{ 
        backgroundColor: 'white', 
        padding: '15px', 
        borderRadius: '5px',
        marginBottom: '15px'
      }}>
        <h3>📱 Navegación:</h3>
        <ul>
          <li><strong>Home:</strong> {t('nav.home')}</li>
          <li><strong>Services:</strong> {t('nav.services')}</li>
          <li><strong>Features:</strong> {t('nav.features')}</li>
          <li><strong>Pricing:</strong> {t('nav.pricing')}</li>
        </ul>
      </div>

      <div style={{ 
        backgroundColor: 'white', 
        padding: '15px', 
        borderRadius: '5px',
        marginBottom: '15px'
      }}>
        <h3>🚀 Hero Section:</h3>
        <p><strong>Título:</strong> {t('hero.title')}</p>
        <p><strong>Descripción:</strong> {t('hero.description')}</p>
        <p><strong>Botón:</strong> {t('hero.startButton')}</p>
      </div>

      <div style={{ 
        backgroundColor: 'white', 
        padding: '15px', 
        borderRadius: '5px'
      }}>
        <h3>💼 Servicios:</h3>
        <p><strong>Título:</strong> {t('services.title')}</p>
        <p><strong>WhatsApp AI:</strong> {t('services.whatsapp.title')}</p>
        <p><strong>Gmail:</strong> {t('services.gmail.title')}</p>
      </div>

      {/* Prueba de key que no existe */}
      <div style={{ 
        backgroundColor: '#fff3cd', 
        padding: '10px', 
        borderRadius: '5px',
        marginTop: '15px',
        border: '1px solid #ffeaa7'
      }}>
        <strong>🚨 Prueba de key inexistente:</strong> {t('nonexistent.key')}
        <br />
        <small>(Debe mostrar: "nonexistent.key")</small>
      </div>
    </div>
  );
};

export default TestTranslation;