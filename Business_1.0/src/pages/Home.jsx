// pages/Home.jsx - Modernizado para igualar el nivel de Services
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Sparkles, TrendingUp, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

// Componentes UI
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

// Secciones
import Hero from '../components/sections/home/Hero';
import Features from '../components/sections/home/Features';
import HowItWorks from '../components/sections/home/HowItWorks';
import CallToAction from '../components/sections/home/CallToAction';
import CustomAgents from '../components/sections/home/CustomAgents';

// Badge mejorado para que coincida con Services
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

function Home() {
  const { t } = useTranslation();
  
  return (
    <motion.main 
      className="flex flex-col"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Hero Section */}
      <Hero />
      
      {/* Sección de Soluciones - Mejorada */}
      <Section 
        bgColor="default"
        spacing="xl"
        className="relative overflow-hidden"
      >
        {/* Elementos decorativos mejorados */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-20 -right-20 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, 0],
            }}
            transition={{ 
              duration: 12, 
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div 
            className="absolute bottom-20 -left-20 w-80 h-80 bg-indigo-500/10 rounded-full filter blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, -10, 0],
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity,
              repeatType: "reverse",
              delay: 2
            }}
          />
          
          {/* Patrón de fondo sutil */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5MzMzZWEiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMyIgY3k9IjMiIHI9IjMiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40" />
        </div>

        <div className="text-center mb-16 relative z-10">
          <SectionBadge icon={Zap}>{t('highTechnology')}</SectionBadge>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
              {t('services.title')}
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('services.subtitle')}
          </motion.p>
        </div>

        <div className="relative z-10">
          <Features />
        </div>
      </Section>
      
      {/* Sección de agentes personalizados */}
      <CustomAgents />
      
     
      
      {/* Sección de Cómo Funciona - Mejorada */}
      <Section 
        id="como-funciona"
        bgColor="default"
        spacing="xl"
        className="relative overflow-hidden"
      >
        {/* Patrón de fondo */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzkzMzNlYSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2Utb3BhY2l0eT0iMC4wMyIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30 pointer-events-none" />

        <div className="text-center mb-16 relative z-10">
          <SectionBadge icon={Sparkles}>{t('process.subtitle')}</SectionBadge>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
              {t('process.title')}
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('process.description')}
          </motion.p>
        </div>

        <div className="relative z-10">
          <HowItWorks showTitle={false} />
        </div>
      </Section>
      
      {/* Llamada a la acción */}
      <CallToAction />
      
     
    </motion.main>
  );
}

export default Home;