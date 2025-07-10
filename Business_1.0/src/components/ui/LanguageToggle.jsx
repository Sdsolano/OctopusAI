import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown, Loader2, Zap } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, changeLanguage, isTranslating, browserLanguage } = useLanguage();
  const [isOpen, setIsOpen] = React.useState(false);

  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);
  const isBrowserDetected = browserLanguage === language;

  const handleLanguageChange = async (langCode) => {
    setIsOpen(false);
    await changeLanguage(langCode);
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => !isTranslating && setIsOpen(!isOpen)}
        disabled={isTranslating}
        className={`flex items-center space-x-2 bg-purple-900/30 hover:bg-purple-900/50 border border-purple-500/40 hover:border-purple-500/60 rounded-lg px-3 py-2 text-sm font-medium text-purple-300 transition-all duration-300 ${
          isTranslating ? 'opacity-60 cursor-not-allowed' : ''
        }`}
        whileHover={!isTranslating ? { scale: 1.05 } : {}}
        whileTap={!isTranslating ? { scale: 0.95 } : {}}
      >
        {isTranslating ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Globe className="h-4 w-4" />
        )}
        
        <span className="hidden sm:inline">{currentLanguage?.flag}</span>
        
        <span className="hidden md:inline flex items-center space-x-1">
          <span>
            {isTranslating ? 'Translating...' : currentLanguage?.name}
          </span>
          {isBrowserDetected && !isTranslating && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center"
              title="Auto-detected from browser"
            >
              <Zap className="h-3 w-3 text-green-400 ml-1" />
            </motion.div>
          )}
        </span>
        
        <ChevronDown 
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && !isTranslating && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 bg-gray-800/95 backdrop-blur-sm border border-purple-500/30 rounded-lg shadow-xl z-50"
          >
            <div className="p-2">
              <div className="text-xs text-gray-400 px-2 py-1 mb-2 border-b border-gray-700">
                {browserLanguage === 'en' ? 'Browser: English' : 'Navegador: Español'}
              </div>
              
              {languages.map((lang) => (
                <motion.button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                    language === lang.code
                      ? 'bg-purple-600/50 text-white'
                      : 'text-gray-300 hover:bg-purple-900/30 hover:text-white'
                  }`}
                  whileHover={{ x: 4 }}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span className="flex-1 text-left">{lang.name}</span>
                  
                  {browserLanguage === lang.code && (
                    <Zap className="h-3 w-3 text-green-400" title="Browser language" />
                  )}
                  
                  {language === lang.code && (
                    <motion.div
                      layoutId="activeLanguage"
                      className="w-2 h-2 bg-purple-400 rounded-full"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default LanguageToggle;