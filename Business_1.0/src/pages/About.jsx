// pages/About.jsx - Completamente modernizado al nivel de las otras páginas
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Zap, 
  Users, 
  TrendingUp,
  Sparkles,
  Heart,
  Target,
  Award,
  Rocket,
  Code2,
  Brain,
  Coffee,
  MapPin,
  Calendar,
  Globe,
  CheckCircle2
} from 'lucide-react';

// Import components
import Mission from '../components/sections/about/Mission';
import Team from '../components/sections/about/Team';
import Values from '../components/sections/about/Values';
import Button from '../components/ui/Button';

// Import animations
import { pageVariants } from '../utils/animations';

// Import translations
import { useTranslation } from '../hooks/useTranslation.js';

function About() {
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
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYWJvdXQtcGF0dGVybiIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPjxwYXRoIGQ9Ik0wIDBoMTAwdjEwMEgweiIgZmlsbD0ibm9uZSIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjMiIGZpbGw9IiM5MzMzZWEiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjIiIGZpbGw9IiM2MzY2ZjEiIGZpbGwtb3BhY2l0eT0iMC4wMyIvPjxjaXJjbGUgY3g9IjgwIiBjeT0iODAiIHI9IjIiIGZpbGw9IiM2MzY2ZjEiIGZpbGwtb3BhY2l0eT0iMC4wMyIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhYm91dC1wYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-30" />
          
          {/* Elementos flotantes decorativos */}
          {[...Array(8)].map((_, i) => (
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
              <SectionBadge icon={Heart}>{t('aboutPage.hero.badge')}</SectionBadge>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-white">{t('aboutPage.hero.title')}</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
                {t('aboutPage.hero.titleHighlight')}
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('aboutPage.hero.subtitle')}
              <span className="text-purple-400 font-semibold"> {t('aboutPage.hero.subtitleHighlight')}</span>
              {t('aboutPage.hero.subtitleEnd')} 
              <span className="text-purple-400 font-semibold"> {t('aboutPage.hero.subtitleHighlight2')}</span>.
            </motion.p>

            {/* Company stats */}


            {/* CTAs mejorados */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >

              
              <Button.Secondary to="/contact">
                {t('aboutPage.hero.buttons.secondary')}
              </Button.Secondary>
            </motion.div>

            {/* Company origin story */}
            <motion.div 
              className="max-w-3xl mx-auto bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="flex items-center justify-center mb-4">
                <Coffee className="h-6 w-6 text-purple-400 mr-3" />
                <span className="text-purple-300 font-semibold">{t('aboutPage.hero.story.title')}</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {t('aboutPage.hero.story.text')} 
                <span className="text-purple-400 font-semibold"> {t('aboutPage.hero.story.highlight')}</span>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <Mission />
      
      {/* Team Section */}
      {/* <Team /> */}

      {/* Values Section */}
      <Values />
    </motion.main>
  );
}

export default About;