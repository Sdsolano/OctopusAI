// components/sections/about/Values.jsx - Completamente modernizado
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../../../hooks/useTranslation';
import { 
  Lightbulb, 
  Award, 
  Zap, 
  TrendingUp, 
  Target,
  Heart,
  Users,
  Shield,
  Star,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Rocket,
  Brain,
  Code2,
  Globe,
  Clock,
  Gem,
  Crown,
  Eye
} from 'lucide-react';

function Values() {
  const { t } = useTranslation();
  const [hoveredValue, setHoveredValue] = useState(null);
  const [selectedValue, setSelectedValue] = useState(0);

  // Badge component para la sección
  const SectionBadge = ({ children, icon: Icon }) => (
    <motion.div 
      className="inline-flex items-center bg-purple-900/30 border border-purple-500/30 rounded-full px-4 py-2 text-sm font-medium text-purple-300 backdrop-blur-sm"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {Icon && <Icon className="h-4 w-4 mr-2 text-purple-400" />}
      {children}
    </motion.div>
  );

  const icons = [Lightbulb, Award, Zap, TrendingUp, Eye, Heart];
  const colors = [
    "from-yellow-500 via-orange-500 to-red-600",
    "from-purple-500 via-violet-500 to-indigo-600",
    "from-blue-500 via-cyan-500 to-teal-600",
    "from-green-500 via-emerald-500 to-teal-600",
    "from-indigo-500 via-purple-500 to-pink-600",
    "from-pink-500 via-rose-500 to-red-600"
  ];

  const values = t('values.items').map((item, index) => ({
    ...item,
    icon: icons[index],
    color: colors[index]
  }));

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Elementos decorativos de fondo espectaculares */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Círculos animados con diferentes colores */}
        <motion.div 
          className="absolute top-20 -right-40 w-96 h-96 bg-gradient-to-r from-yellow-600/10 to-orange-600/10 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div 
          className="absolute bottom-20 -left-40 w-80 h-80 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -10, 0],
            opacity: [0.08, 0.15, 0.08]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-600/5 to-teal-600/5 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 4
          }}
        />
        
        {/* Patrón de valores */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0idmFsdWVzLXBhdHRlcm4iIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cG9seWdvbiBwb2ludHM9IjUwLDEwIDYwLDQwIDkwLDQwIDcwLDYwIDgwLDkwIDUwLDcwIDIwLDkwIDMwLDYwIDEwLDQwIDQwLDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiM5MzMzZWEiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjdmFsdWVzLXBhdHRlcm4pIi8+PC9zdmc+')] opacity-20" />
        
        {/* Símbolos flotantes de valores */}
        {[Star, Gem, Crown, Target, Rocket, Globe].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${15 + Math.random() * 70}%`,
              left: `${5 + Math.random() * 90}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.1, 0.4, 0.1],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
          >
            <Icon className="h-5 w-5 text-purple-400/20" />
          </motion.div>
        ))}
      </div>

      {/* Líneas decorativas con gradientes multicolor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/30 via-purple-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 via-pink-500/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionBadge icon={Star}>{t('values.badge')}</SectionBadge>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-purple-400 to-blue-400">
                {t('values.title')}
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('values.subtitle.part1')}
              <span className="text-purple-400 font-semibold"> {t('values.subtitle.highlight')}</span>
              {t('values.subtitle.part2')}
            </p>
          </motion.div>
        </div>

        {/* Values Grid - Desktop */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {values.map((value, index) => {
              const Icon = value.icon;
              const isHovered = hoveredValue === index;
              
              return (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onHoverStart={() => setHoveredValue(index)}
                  onHoverEnd={() => setHoveredValue(null)}
                  whileHover={{ y: -10 }}
                >
                  {/* Glow effect único para cada valor */}
                  <motion.div 
                    className={`absolute -inset-2 bg-gradient-to-r ${value.color} rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-700`}
                  />
                  
                  <motion.div 
                    className="relative bg-gray-800/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-700/50 group-hover:border-purple-500/50 transition-all duration-500 h-full"
                    whileHover={{ 
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
                    }}
                  >
                    {/* Barra de color superior */}
                    <motion.div 
                      className={`h-2 bg-gradient-to-r ${value.color}`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                    
                    <div className="p-8">
                      {/* Header con icono */}
                      <div className="flex items-start justify-between mb-6">
                        <motion.div 
                          className={`bg-gradient-to-br ${value.color} p-4 rounded-xl relative overflow-hidden`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Icon className="h-8 w-8 text-white relative z-10" />
                          
                          {/* Efecto de brillo */}
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            initial={{ x: '-100%' }}
                            animate={{ x: '100%' }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity, 
                              repeatDelay: 4,
                              ease: "easeInOut"
                            }}
                          />
                        </motion.div>
                        
                        {/* Métrica destacada */}
                        <motion.div 
                          className="text-right"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                          viewport={{ once: true }}
                        >
                          <div className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${value.color}`}>
                            {value.stats.metric}
                          </div>
                          <div className="text-xs text-gray-400">{value.stats.label}</div>
                        </motion.div>
                      </div>
                      
                      {/* Títulos */}
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className={`text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r ${value.color} mb-4`}>
                        {value.subtitle}
                      </p>
                      
                      {/* Descripción */}
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {value.description}
                      </p>
                      
                      {/* Ejemplos */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-purple-300 mb-3">{t('values.practiceLabel')}</h4>
                        {value.examples.slice(0, 3).map((example, i) => (
                          <motion.div
                            key={i}
                            className="flex items-center text-sm text-gray-400"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + i * 0.05 }}
                            viewport={{ once: true }}
                          >
                            <CheckCircle2 className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                            <span>{example}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Patrón decorativo de fondo */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${value.color} opacity-5 rounded-bl-full group-hover:opacity-10 transition-opacity duration-500`} />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Values Carousel - Mobile */}
        <div className="lg:hidden mb-16">
          {/* Selector de valores */}
          <div className="flex overflow-x-auto pb-4 mb-8 space-x-4">
            {values.map((value, index) => (
              <button
                key={index}
                onClick={() => setSelectedValue(index)}
                className={`flex-shrink-0 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedValue === index 
                    ? `bg-gradient-to-r ${value.color} text-white` 
                    : 'bg-gray-800/50 text-gray-400 hover:text-white'
                }`}
              >
                {value.title}
              </button>
            ))}
          </div>

          {/* Valor seleccionado */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedValue}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-md mx-auto"
            >
              {/* Similar al desktop pero adaptado para mobile */}
            </motion.div>
          </AnimatePresence>
        </div>



        
      </div>
    </section>
  );
}

export default Values;