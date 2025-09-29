// src/components/common/TranslationStats.jsx - ARCHIVO CORREGIDO
import React from "react";
import { useLanguage } from "../../contexts/LanguageContext"; // ✅ CORRECTO
import { frontendTranslationService } from "../../services/frontendTranslationService";
import { motion } from 'framer-motion';

export const TranslationStats = () => {
  const { stats } = useLanguage();
  const [isVisible, setIsVisible] = React.useState(false);

  // Solo mostrar en desarrollo o con query param ?debug=true
  React.useEffect(() => {
    const shouldShow = process.env.NODE_ENV === 'development' || 
                     new URLSearchParams(window.location.search).has('debug');
    setIsVisible(shouldShow);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div 
      className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg text-sm max-w-xs z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <h4 className="font-bold mb-2 text-purple-400">Translation Stats</h4>
      <div className="space-y-1">
        <div className="flex justify-between">
          <span>Static:</span>
          <span className="text-green-400">{stats?.staticTranslations || 0}</span>
        </div>
        <div className="flex justify-between">
          <span>Dynamic:</span>
          <span className="text-blue-400">{stats?.dynamicCache || 0}</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>Total:</span>
          <span className="text-purple-400">{(stats?.staticTranslations || 0) + (stats?.dynamicCache || 0)}</span>
        </div>
        
        {stats?.apiUsage && stats.apiUsage.length > 0 && (
          <div className="mt-2 pt-2 border-t border-gray-600">
            <div className="font-semibold text-yellow-400">API Usage:</div>
            {stats.apiUsage.map(api => (
              <div key={api.name} className="flex justify-between text-xs">
                <span>{api.name}:</span>
                <span>{api.usage} ({api.percentage}%)</span>
              </div>
            ))}
          </div>
        )}
        
        <button 
          onClick={() => {
            if (typeof frontendTranslationService !== 'undefined') {
              frontendTranslationService.clearCache();
              window.location.reload();
            }
          }}
          className="mt-2 px-2 py-1 bg-red-600 hover:bg-red-700 rounded text-xs w-full transition-colors"
        >
          Clear Cache & Reload
        </button>
      </div>
    </motion.div>
  );
};