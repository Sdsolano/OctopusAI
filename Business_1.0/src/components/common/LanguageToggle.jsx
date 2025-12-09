
import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const LanguageToggle = ({ className = "", variant = "default" }) => {
  const { language, changeLanguage } = useLanguage();

  const variants = {
    default: "bg-gray-700 text-gray-300 hover:bg-gray-600",
    header: "bg-gray-800/80 backdrop-blur-sm text-gray-300 hover:bg-gray-700/80",
    floating: "bg-purple-600 text-white hover:bg-purple-700 shadow-lg"
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <motion.button
        onClick={() => changeLanguage(language === 'es' ? 'en' : 'es')}
        className={`
          flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200
          ${language === 'en' 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : variants[variant]
          }
          hover:scale-105 cursor-pointer
        `}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Globe className="w-4 h-4" />
        <span>{language === 'es' ? 'English' : 'Español'}</span>
      </motion.button>
    </div>
  );
};

export default LanguageToggle;