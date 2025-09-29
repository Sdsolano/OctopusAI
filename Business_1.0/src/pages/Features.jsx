// pages/Features.jsx - Completamente modernizado
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Zap, 
  Shield, 
  Users,
  TrendingUp,
  Sparkles,
  Cpu,
  Brain,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Bot,
  MessageSquare
} from 'lucide-react';

// Import components
import FeatureCards from '../components/sections/features/FeatureCards';
import TechFeatures from '../components/sections/features/TechFeatures';
import Button from '../components/ui/Button';
import { useTranslation } from '../hooks/useTranslation.js';

// Import animations
import { pageVariants } from '../utils/animations';

function Features() {
  const { t } = useTranslation();
  // Badge component para secciones
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

  return (
    <motion.main
      className="flex flex-col"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      {/* Hero Section - Completamente modernizado */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 min-h-screen flex items-center">
        {/* Elementos decorativos de fondo espectaculares */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Círculos animados grandes */}
          <motion.div 
            className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div 
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/20 rounded-full filter blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, -10, 0],
              opacity: [0.15, 0.3, 0.15]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
          />
          
          {/* Gradiente adicional para profundidad */}
          <div className="absolute inset-0 bg-gradient-radial from-purple-900/10 via-transparent to-indigo-900/10" />
          
          {/* Patrón de fondo tecnológico */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZmVhdHVyZXMtcGF0dGVybiIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPjxwYXRoIGQ9Ik0wIDBoMTAwdjEwMEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Im0xNSA4NWg3MG0tNzAtNWg3MG0tNzAtNWg3MG0tNzAtNWg3MG0tNzAtNWg3MG0tNzAtNWg3MG0tNzAtNWg3MG0tNzAtNWg3MCIgc3Ryb2tlPSIjOTMzM2VhIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBmaWxsPSJub25lIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2ZlYXR1cmVzLXBhdHRlcm4pIi8+PC9zdmc+')] opacity-30" />
          
          {/* Partículas flotantes */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-400/20 rounded-full"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Líneas decorativas premium */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SectionBadge icon={Cpu}>{t('featuresPage.hero.badge')}</SectionBadge>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-white">{t('featuresPage.hero.title')}</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
                {t('featuresPage.hero.titleHighlight')}
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('featuresPage.hero.subtitle')}
              <span className="text-purple-400 font-semibold"> {t('featuresPage.hero.subtitleHighlight')}</span> {t('featuresPage.hero.subtitleEnd')}
            </motion.p>

            {/* Stats dinámicos */}
            <motion.div 
              className="flex flex-wrap justify-center gap-8 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {t('featuresPage.hero.stats').map((stat, index) => {
                const iconMap = { 0: Brain, 1: Zap, 2: Shield, 3: Rocket };
                const colorMap = [
                  "from-purple-500 to-violet-600",
                  "from-blue-500 to-indigo-600", 
                  "from-green-500 to-emerald-600",
                  "from-pink-500 to-rose-600"
                ];
                const Icon = iconMap[index] || Brain;
                const color = colorMap[index] || "from-gray-500 to-gray-600";
                return (
                  <motion.div 
                    key={index}
                    className="relative group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    {/* Glow effect en hover */}
                    <motion.div 
                      className={`absolute -inset-1 bg-gradient-to-r ${color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                    />
                    
                    <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50 group-hover:border-purple-500/50 transition-all duration-300">
                      <motion.div 
                        className={`bg-gradient-to-r ${color} p-3 rounded-lg mb-3 mx-auto w-fit`}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </motion.div>
                      
                      <div className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${color} mb-1`}>
                        {stat.value}
                      </div>
                      <div className="text-white font-semibold mb-1">{stat.label}</div>
                      <div className="text-xs text-gray-400">{stat.description}</div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTAs mejorados */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Button.Action 
                onClick={() => document.getElementById('feature-cards')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('featuresPage.hero.buttons.primary')}
              </Button.Action>
              
              <Button.Secondary to="/services">
                {t('featuresPage.hero.buttons.secondary')}
              </Button.Secondary>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section - Modernizada */}
      <section id="feature-cards" className="relative py-20 bg-gray-900 overflow-hidden">
        {/* Elementos decorativos sutiles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-20 right-0 w-96 h-96 bg-purple-600/5 rounded-full filter blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              x: [0, -20, 0],
            }}
            transition={{ 
              duration: 12, 
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div 
            className="absolute bottom-20 left-0 w-80 h-80 bg-indigo-500/5 rounded-full filter blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 20, 0],
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity,
              repeatType: "reverse",
              delay: 2
            }}
          />
        </div>

        {/* Línea decorativa superior */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Header section elegante */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionBadge icon={Bot}>{t('featuresPage.featureCards.badge')}</SectionBadge>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                  {t('featuresPage.featureCards.title')}
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                {t('featuresPage.featureCards.subtitle')}
              </p>
            </motion.div>
          </div>
          
          <FeatureCards />
        </div>
      </section>

      {/* Tech Features Section - Modernizada */}
      <TechFeatures />

      {/* Comparación con competencia */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionBadge icon={TrendingUp}>{t('featuresPage.comparison.badge')}</SectionBadge>
            
            <h2 className="text-4xl font-bold text-white mb-6">
              {t('featuresPage.comparison.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('featuresPage.comparison.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Octopus AI - Columna destacada */}
            <motion.div
              className="relative lg:order-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Glow effect especial */}
              <motion.div 
                className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur-lg opacity-20"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <div className="relative bg-gradient-to-b from-purple-900/30 to-gray-800/90 backdrop-blur-xl rounded-2xl p-8 border-2 border-purple-500/50">
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 rounded-xl w-fit mx-auto mb-4">
                    <Bot className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{t('featuresPage.comparison.octopus.title')}</h3>
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                    {t('featuresPage.comparison.octopus.badge')}
                  </div>
                </div>
                
                <div className="space-y-4">
                  {t('featuresPage.comparison.octopus.features').map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle2 className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-200">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Competencia 1 */}
            <motion.div
              className="lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 h-full">
                <div className="text-center mb-6">
                  <div className="bg-gray-700 p-4 rounded-xl w-fit mx-auto mb-4">
                    <MessageSquare className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-300 mb-2">{t('featuresPage.comparison.generic.title')}</h3>
                  <div className="text-gray-500 text-sm">{t('featuresPage.comparison.generic.subtitle')}</div>
                </div>
                
                <div className="space-y-3">
                  {t('featuresPage.comparison.generic.features').map((feature, index) => (
                    <div key={index} className="flex items-center">
                      {feature.available ? (
                        <CheckCircle2 className="h-4 w-4 text-yellow-500 mr-3 flex-shrink-0" />
                      ) : (
                        <div className="w-4 h-4 border-2 border-gray-600 rounded mr-3 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${feature.available ? 'text-gray-300' : 'text-gray-500'}`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Competencia 2 */}
            <motion.div
              className="lg:order-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 h-full">
                <div className="text-center mb-6">
                  <div className="bg-gray-700 p-4 rounded-xl w-fit mx-auto mb-4">
                    <Cpu className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-300 mb-2">{t('featuresPage.comparison.internal.title')}</h3>
                  <div className="text-gray-500 text-sm">{t('featuresPage.comparison.internal.subtitle')}</div>
                </div>
                
                <div className="space-y-3">
                  {t('featuresPage.comparison.internal.features').map((feature, index) => (
                    <div key={index} className="flex items-center">
                      {feature.available ? (
                        <CheckCircle2 className="h-4 w-4 text-yellow-500 mr-3 flex-shrink-0" />
                      ) : (
                        <div className="w-4 h-4 border-2 border-gray-600 rounded mr-3 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${feature.available ? 'text-gray-300' : 'text-gray-500'}`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final impactante */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-gray-900 to-indigo-900/20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                {t('featuresPage.finalCta.title')}
              </span>
              <br />
              <span>{t('featuresPage.finalCta.titleHighlight')}</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('featuresPage.finalCta.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button.Action to="/services">
                {t('featuresPage.finalCta.buttons.primary')}
              </Button.Action>
              <Button.Secondary to="/contact">
                {t('featuresPage.finalCta.buttons.secondary')}
              </Button.Secondary>
            </div>
            
            {/* Trust indicators */}
            <motion.div 
              className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {t('featuresPage.finalCta.trustIndicators').map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center bg-gray-800/30 backdrop-blur-sm rounded-full px-4 py-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}

export default Features;