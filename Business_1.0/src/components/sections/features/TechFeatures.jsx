// components/sections/features/TechFeatures.jsx - Completamente modernizado
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Webhook, 
  Brain, 
  Monitor, 
  FileImage, 
  Database,
  Cpu,
  Shield,
  Zap,
  Cloud,
  Lock,
  Activity,
  Server,
  GitBranch,
  Layers,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Play,
  TrendingUp,
  Eye
} from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation.js';

function TechFeatures() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const techCategories = t('techFeatures.categories').map((category, index) => ({
    ...category,
    icon: [Server, Brain, Shield][index],
    color: ['from-blue-500 to-indigo-600', 'from-purple-500 to-violet-600', 'from-green-500 to-emerald-600'][index]
  }));

  const techFeatures = [
    // Infraestructura
    ...t('techFeatures.features.infrastructure').map(feature => ({
      ...feature,
      category: 'infrastructure',
      icon: [Code2, Webhook, Monitor][t('techFeatures.features.infrastructure').indexOf(feature)],
      color: ['from-blue-500 to-indigo-700', 'from-indigo-500 to-purple-700', 'from-green-500 to-teal-700'][t('techFeatures.features.infrastructure').indexOf(feature)]
    })),
    
    // IA
    ...t('techFeatures.features.ai').map(feature => ({
      ...feature,
      category: 'ai',
      icon: [Brain, TrendingUp, FileImage][t('techFeatures.features.ai').indexOf(feature)],
      color: ['from-purple-500 to-pink-700', 'from-violet-500 to-indigo-700', 'from-pink-500 to-red-700'][t('techFeatures.features.ai').indexOf(feature)]
    })),
    
    // Seguridad
    ...t('techFeatures.features.security').map(feature => ({
      ...feature,
      category: 'security',
      icon: [Lock, Shield, Database][t('techFeatures.features.security').indexOf(feature)],
      color: ['from-teal-500 to-cyan-700', 'from-emerald-500 to-green-700', 'from-blue-500 to-teal-700'][t('techFeatures.features.security').indexOf(feature)]
    }))
  ];

  const filteredFeatures = techFeatures.filter(
    feature => feature.category === techCategories[activeTab].id
  );

  const SectionBadge = ({ children, icon: Icon }) => (
    <motion.div 
      className="inline-flex items-center bg-purple-900/30 border border-purple-500/30 rounded-full px-4 py-2 text-sm font-medium text-purple-300 backdrop-blur-sm mb-6"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {Icon && <Icon className="h-4 w-4 mr-2 text-purple-400" />}
      {children}
    </motion.div>
  );

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 overflow-hidden">
      {/* Elementos decorativos espectaculares */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 -right-40 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"
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
          className="absolute bottom-20 -left-40 w-80 h-80 bg-indigo-500/10 rounded-full filter blur-3xl"
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
        
        {/* Grid pattern tecnológico */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0idGVjaC1ncmlkIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+PHBhdGggZD0iTTEwIDEwaDgwdjgwSDE0eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOTMzM2VhIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1vcGFjaXR5PSIwLjA1Ii8+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iMyIgZmlsbD0iIzkzMzNlYSIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjdGVjaC1ncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
        
        {/* Código flotante decorativo */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-purple-500/10 font-mono text-sm"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {['{ API }', '< ML >', '[ AI ]', '( NLP )'][i]}
          </motion.div>
        ))}
      </div>

      {/* Líneas decorativas */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header section espectacular */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionBadge icon={Code2}>{t('techFeatures.badge')}</SectionBadge>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
                {t('techFeatures.title')}
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('techFeatures.subtitle')}
            </p>
          </motion.div>
        </div>

        {/* Tabs navegación mejorada */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            const isActive = activeTab === index;
            
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveTab(index)}
                className={`relative flex items-center space-x-3 px-6 py-4 rounded-xl border transition-all duration-500 ${
                  isActive 
                    ? `bg-gradient-to-r ${category.color} text-white border-transparent shadow-lg shadow-purple-500/25` 
                    : 'bg-gray-800/50 backdrop-blur-sm text-gray-300 border-gray-700 hover:border-purple-500/50 hover:bg-gray-700/50'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className={`p-2 rounded-lg ${
                    isActive ? 'bg-white/20' : 'bg-gray-700/50'
                  }`}
                  whileHover={{ rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-purple-400'}`} />
                </motion.div>
                
                <div className="text-left">
                  <div className="font-bold">{category.name}</div>
                  <div className={`text-xs ${isActive ? 'text-white/80' : 'text-gray-400'}`}>
                    {category.description}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Content area con animación espectacular */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredFeatures.map((feature, index) => {
              const Icon = feature.icon;
              
              return (
                <motion.div
                  key={`${feature.title}-${activeTab}`}
                  className="relative group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredFeature(index)}
                  onHoverEnd={() => setHoveredFeature(null)}
                  whileHover={{ y: -8 }}
                >
                  {/* Glow effect dinámico */}
                  <motion.div 
                    className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                  />
                  
                  <motion.div 
                    className="relative bg-gray-800/90 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 group-hover:border-purple-500/50 transition-all duration-500 h-full overflow-hidden"
                    whileHover={{ 
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
                    }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <motion.div 
                        className={`bg-gradient-to-br ${feature.color} p-3 rounded-xl relative overflow-hidden`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon className="h-6 w-6 text-white relative z-10" />
                        
                        {/* Brillo animado */}
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          initial={{ x: '-100%' }}
                          animate={{ x: '100%' }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            repeatDelay: 4 
                          }}
                        />
                      </motion.div>
                      
                      <motion.button
                        className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Eye className="h-5 w-5" />
                      </motion.button>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    {/* Métricas técnicas */}
                    <div className="grid grid-cols-3 gap-2 mb-6">
                      {Object.entries(feature.metrics).map(([key, value], i) => (
                        <motion.div 
                          key={key}
                          className="text-center bg-gray-700/30 rounded-lg p-2"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + i * 0.05 }}
                        >
                          <div className={`text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r ${feature.color}`}>
                            {value}
                          </div>
                          <div className="text-xs text-gray-400 capitalize">{key}</div>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Specs técnicas */}
                    <div className="space-y-2 mb-6">
                      <h4 className="text-sm font-semibold text-purple-300 flex items-center">
                        <Layers className="h-4 w-4 mr-2" />
                        {t('techFeatures.specsLabel')}
                      </h4>
                      {feature.techSpecs.map((spec, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center text-sm text-gray-300"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + i * 0.05 }}
                        >
                          <CheckCircle2 className="h-3 w-3 text-green-400 mr-2 flex-shrink-0" />
                          <span>{spec}</span>
                        </motion.div>
                      ))}
                    </div>
                    

                    
                    {/* Patrón decorativo */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Footer con stats globales */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-gray-800/50 via-purple-900/20 to-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">
              {t('techFeatures.footer.title')}
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {t('techFeatures.footer.stats').map((stat, index) => {
                const Icon = [Server, Zap, Shield, Activity][index];
                const colors = ["text-green-400", "text-blue-400", "text-purple-400", "text-orange-400"];
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Icon className={`h-8 w-8 ${colors[index]} mx-auto mb-2`} />
                    <div className={`text-2xl font-bold ${colors[index]} mb-1`}>{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TechFeatures;