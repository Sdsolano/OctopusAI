// components/sections/home/CustomAgents.jsx - Modernizado para sintonía
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Building, Heart, ShoppingBag, BookOpen, Utensils, ArrowRight, Sparkles, CheckCircle2, TrendingUp, Zap } from 'lucide-react';
import Button from '../../ui/Button';
import { useTranslation } from '../../../hooks/useTranslation';

function CustomAgents() {
  const { t } = useTranslation();
  const [activeIndustry, setActiveIndustry] = useState(0);
  
  const industries = [
    {
      name: t('industries.types.services'),
      icon: Briefcase,
      color: "from-blue-500 to-indigo-700",
      bgPattern: "services",
      examples: t('industries.serviceCompanies.examples'),
      benefits: t('industries.serviceCompanies.benefits'),
      metrics: { 
        conversion: t('industries.serviceCompanies.stats.conversion'), 
        efficiency: t('industries.serviceCompanies.stats.efficiency'), 
        satisfaction: t('industries.serviceCompanies.stats.satisfaction') 
      },
      description: t('industries.serviceCompanies.description'),
      caseStudy: t('industries.serviceCompanies.successCase')
    },
    {
      name: t('industries.types.realestate'),
      icon: Building,
      color: "from-emerald-500 to-green-700",
      bgPattern: "realestate",
      examples: t('industries.realEstate.examples'),
      benefits: t('industries.realEstate.benefits'),
      metrics: { leads: "+80%", visits: "+35%", closing: "+25%" },
      caseStudy: t('industries.realEstate.successCase')
    },
    {
      name: t('industries.types.health'),
      icon: Heart,
      color: "from-rose-500 to-pink-700",
      bgPattern: "health",
      examples: t('industries.health.examples'),
      benefits: t('industries.health.benefits'),
      metrics: { attendance: "+92%", cancellations: "-70%", satisfaction: "96%" },
      caseStudy: t('industries.health.successCase')
    },
    {
      name: t('industries.types.retail'),
      icon: ShoppingBag,
      color: "from-amber-500 to-orange-700",
      bgPattern: "retail",
      examples: t('industries.retail.examples'),
      benefits: t('industries.retail.benefits'),
      metrics: { sales: "+120%", support: "+200%", retention: "+40%" },
      caseStudy: t('industries.retail.successCase')
    },
    {
      name: t('industries.types.education'),
      icon: BookOpen,
      color: "from-violet-500 to-purple-700",
      bgPattern: "education",
      examples: t('industries.education.examples'),
      benefits: t('industries.education.benefits'),
      metrics: { enrollment: "+55%", queries: "+180%", efficiency: "+75%" },
      caseStudy: t('industries.education.successCase')
    },
    {
      name: t('industries.types.restaurants'),
      icon: Utensils,
      color: "from-red-500 to-rose-700",
      bgPattern: "restaurant",
      examples: t('industries.restaurants.examples'),
      benefits: t('industries.restaurants.benefits'),
      metrics: { reservations: "+85%", orders: "+150%", revenue: "+65%" },
      caseStudy: t('industries.restaurants.successCase')
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const activeIndustryVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", damping: 15 }
    },
    exit: { 
      opacity: 0, 
      x: -40,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-purple-950/40 via-gray-900 to-indigo-950/40 relative overflow-hidden">
      {/* Elementos decorativos de fondo especiales para sección importante */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 right-0 w-96 h-96 bg-purple-600/12 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 15, 0],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div 
          className="absolute bottom-10 left-0 w-80 h-80 bg-indigo-500/12 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.4, 1],
            rotate: [0, -15, 0],
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        />
        
        {/* Elementos adicionales para destacar la importancia */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-radial from-purple-600/8 via-purple-600/4 to-transparent rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        {/* Líneas decorativas destacadas */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
        
        {/* Patrón especial para sección destacada */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0ic3BlY2lhbCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjIiIGZpbGw9IiM5MzMzZWEiIGZpbGwtb3BhY2l0eT0iMC4wNiIvPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9IiM2MzY2ZjEiIGZpbGwtb3BhY2l0eT0iMC4wNCIvPjxjaXJjbGUgY3g9IjgwIiBjeT0iMzAiIHI9IjEuNSIgZmlsbD0iI2E4NTVmNyIgZmlsbC1vcGFjaXR5PSIwLjA0Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3NwZWNpYWwpIi8+PC9zdmc+')] opacity-50" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Badge mejorado */}
          <motion.div 
            className="inline-flex items-center bg-purple-900/30 border border-purple-500/30 rounded-full px-4 py-2 text-sm font-medium text-purple-300 mb-6 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="h-4 w-4 mr-2 text-purple-400" />
            {t('industries.title')}
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
              {t('industries.subtitle')}
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('industries.description')}
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Selector de industrias mejorado */}
          <motion.div 
            className="lg:w-1/3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                const isActive = activeIndustry === index;
                
                return (
                  <motion.button
                    key={index}
                    className={`relative p-4 rounded-xl transition-all duration-300 overflow-hidden flex flex-col items-center text-center group ${
                      isActive 
                        ? 'bg-gradient-to-br ' + industry.color + ' text-white shadow-xl scale-105' 
                        : 'bg-gray-800/80 backdrop-blur-sm hover:bg-gray-750 text-gray-300 border border-gray-700 hover:border-purple-500/50'
                    }`}
                    onClick={() => setActiveIndustry(index)}
                    variants={itemVariants}
                    whileHover={!isActive ? { y: -5, scale: 1.02 } : { scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Efecto de brillo para el activo */}
                    {isActive && (
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      />
                    )}
                    
                    {/* Patrón de fondo */}
                    {isActive && (
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2Nmg2di02aC02em02IDZ2Nmg2di02aC02em0tMTIgMGg2djZoLTZ2LTZ6bTEyIDBoNnY2aC02di02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
                    )}
                    
                    <motion.div
                      className="relative z-10"
                      animate={isActive ? { rotate: [0, 5, -5, 0] } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className={`h-8 w-8 mb-3 ${isActive ? 'text-white' : 'text-purple-400 group-hover:text-purple-300'}`} />
                    </motion.div>
                    
                    <span className="text-sm font-medium relative z-10">{industry.name}</span>
                    
                    {/* Indicador activo mejorado */}
                    {isActive && (
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 h-1 bg-white"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Detalles de la industria seleccionada mejorado */}
          <div className="lg:w-2/3">
            <div className="relative">
              {/* Efecto glow exterior */}
              <motion.div 
                className={`absolute -inset-1 bg-gradient-to-r ${industries[activeIndustry].color} rounded-2xl blur opacity-20`}
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <div className="relative bg-gray-800/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndustry}
                    variants={activeIndustryVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="h-full"
                  >
                    <div className="flex flex-col h-full">
                      {/* Header mejorado */}
                      <div className="flex items-center mb-6">
                        <motion.div 
                          className={`bg-gradient-to-br ${industries[activeIndustry].color} p-4 rounded-xl mr-4 relative overflow-hidden`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {React.createElement(industries[activeIndustry].icon, { className: "h-8 w-8 text-white" })}
                          
                          {/* Efecto de brillo */}
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: '100%' }}
                            transition={{ duration: 0.6 }}
                          />
                        </motion.div>
                        
                        <div>
                          <h3 className="text-3xl font-bold text-white">{industries[activeIndustry].name}</h3>
                          
                          {/* Línea decorativa */}
                          <motion.div 
                            className={`h-1 bg-gradient-to-r ${industries[activeIndustry].color} rounded-full mt-2`}
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 0.8 }}
                          />
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                        {activeIndustry === 0 
                          ? industries[activeIndustry].description 
                          : t('industries.genericDescription').replace('{industry}', industries[activeIndustry].name.toLowerCase())
                        }
                      </p>
                      
                      {/* Métricas destacadas */}
                      <motion.div 
                        className="grid grid-cols-3 gap-4 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        {Object.entries(industries[activeIndustry].metrics).map(([key, value], i) => (
                          <motion.div
                            key={i}
                            className="text-center p-3 bg-gray-700/50 rounded-lg border border-gray-600/30"
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <div className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${industries[activeIndustry].color}`}>
                              {value}
                            </div>
                            <div className="text-xs text-gray-400 capitalize">
                              {t(`industries.metricLabels.${key}`) || key.replace(/([A-Z])/g, ' $1')}
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 flex-grow">
                        <div>
                          <h4 className="text-lg font-semibold text-purple-300 mb-4 flex items-center">
                            <TrendingUp className="h-5 w-5 mr-2" />
                            {t('common.idealFor')}
                          </h4>
                          <ul className="space-y-3">
                            {industries[activeIndustry].examples.map((example, i) => (
                              <motion.li 
                                key={i} 
                                className="flex items-center text-gray-300"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                              >
                                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                                {example}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-purple-300 mb-4 flex items-center">
                            <Zap className="h-5 w-5 mr-2" />
                            {t('common.keyBenefits')}
                          </h4>
                          <ul className="space-y-3">
                            {industries[activeIndustry].benefits.map((benefit, i) => (
                              <motion.li 
                                key={i} 
                                className="flex items-start text-gray-300"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                              >
                                <CheckCircle2 className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                                {benefit}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      {/* Caso de estudio */}
                      <motion.div 
                        className="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 rounded-xl p-4 mb-6 border border-purple-500/20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <div className="flex items-center mb-2">
                          <Sparkles className="h-4 w-4 text-purple-400 mr-2" />
                          <span className="text-sm font-semibold text-purple-300">{t('common.successCase')}</span>
                        </div>
                        <p className="text-gray-300 text-sm italic">
                          {industries[activeIndustry].caseStudy}
                        </p>
                      </motion.div>
                      
                      <div className="mt-auto pt-4">
                        <Button.Action to="/contact">
                          <span>{t('cta.buttons.primary')}</span>
                        </Button.Action>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomAgents;