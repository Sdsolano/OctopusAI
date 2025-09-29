
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, CheckCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '../../contexts/FrontendLanguageContext';

export const LanguageToggle = ({ className = "", variant = "default" }) => {
  const { language, changeLanguage, isTranslating, stats } = useLanguage();

  const variants = {
    default: "bg-gray-700 text-gray-300 hover:bg-gray-600",
    header: "bg-gray-800/80 backdrop-blur-sm text-gray-300 hover:bg-gray-700/80",
    floating: "bg-purple-600 text-white hover:bg-purple-700 shadow-lg"
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <motion.button
        onClick={() => changeLanguage(language === 'es' ? 'en' : 'es')}
        disabled={isTranslating}
        className={`
          flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200
          ${language === 'en' 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : variants[variant]
          }
          ${isTranslating ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 cursor-pointer'}
        `}
        whileHover={{ scale: isTranslating ? 1 : 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isTranslating ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <Globe className="w-4 h-4" />
        )}
        
        {isTranslating ? (
          <span>Translating...</span>
        ) : (
          <span>{language === 'es' ? 'English' : 'Español'}</span>
        )}
      </motion.button>

      {/* Indicador de estado */}
      {language === 'en' && !isTranslating && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-1 text-green-400 text-sm"
        >
          <span className="hidden sm:inline">Translated</span>
        </motion.div>
      )}

      {/* Stats para debugging (solo en desarrollo) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="text-xs text-gray-500">
          Cache: {stats.staticTranslations + stats.dynamicCache}
        </div>
      )}
    </div>
  );
};

export default LanguageToggle;