// pages/Services.jsx - Versión modernizada manteniendo ServiceCard y CustomDev
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import { 
  Star, 
  Zap, 
  Shield, 
  Users,
  TrendingUp,
  Sparkles,
  Play,
  CheckCircle2,
  MessageSquare,
  Calendar,
  Mail,
  Database,
  ArrowRight
} from 'lucide-react';

import ServiceCard from '../components/sections/services/ServiceCard';
import CustomDev from '../components/sections/services/CustomDev';
import Button from '../components/ui/Button';

import { pageVariants } from '../utils/animations';

function Services() {
  const { t } = useTranslation();
  
  // Badge component para secciones
  const SectionBadge = ({ children, icon: Icon }) => (
    <motion.div 
      className="inline-flex items-center bg-purple-900/30 border border-purple-500/30 rounded-full px-4 py-2 text-sm font-medium text-purple-300 mb-6"
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
      {/* Hero Section Modernizado */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 min-h-screen flex items-center">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, 0],
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
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
          />
          
          {/* Patrón de puntos */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5MzMzZWEiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzIiBjeT0iMyIgcj0iMyIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <SectionBadge icon={Sparkles}>{t('servicesPage.hero.badge')}</SectionBadge>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
                {t('servicesPage.hero.title')}
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('servicesPage.hero.subtitle')}{' '}
              <span className="text-purple-400 font-semibold">{t('servicesPage.hero.description')}</span>
            </motion.p>

            {/* Stats Row */}
            <motion.div 
              className="flex flex-wrap justify-center gap-8 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {[
                { icon: Zap, value: t('servicesPage.hero.stats.uptime.value'), label: t('servicesPage.hero.stats.uptime.label'), color: "text-green-400" },
                { icon: Shield, value: t('servicesPage.hero.stats.security.value'), label: t('servicesPage.hero.stats.security.label'), color: "text-indigo-400" }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div 
                    key={index}
                    className="text-center bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="flex items-center justify-center mb-2">
                      <Icon className={`h-6 w-6 ${stat.color} mr-2`} />
                      <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
                    </div>
                    <span className="text-sm text-gray-400">{stat.label}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button.Primary 
                onClick={() => document.getElementById('demos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('servicesPage.hero.buttons.primary')}
              </Button.Primary>
              <Button.Secondary to="/contact">
                {t('servicesPage.hero.buttons.secondary')}
              </Button.Secondary>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Manteniendo ServiceCard exactamente como está */}
      <section id="demos" className="relative py-20 bg-gray-800 overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-600/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 left-0 w-80 h-80 bg-indigo-500/5 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Header section mejorado */}
          <div className="text-center mb-20">
            <SectionBadge icon={Play}>{t('servicesPage.demos.badge')}</SectionBadge>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {t('servicesPage.demos.title')}
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t('servicesPage.demos.subtitle')}
            </motion.p>
          </div>
          
          {/* ServiceCards - MODERNIZADOS con nuevos componentes */}
          <div className="space-y-32">
            <ServiceCard 
              id="whatsapp"
              title={t('servicesPage.demos.cards.whatsapp.title')}
              description={t('servicesPage.demos.cards.whatsapp.description')}
              features={t('servicesPage.demos.cards.whatsapp.features')}
              icon="MessageSquare"
              reversed={false}
              webhookUrl="https://primary-production-b1314.up.railway.app/webhook/62cd14c2-e2dd-492b-afab-d527f827fdb5"
            />

            <ServiceCard 
              id="appointments"
              title={t('servicesPage.demos.cards.appointments.title')}
              description={t('servicesPage.demos.cards.appointments.description')}
              features={t('servicesPage.demos.cards.appointments.features')}
              icon="Calendar"
              reversed={true}
              webhookUrl="https://primary-production-b1314.up.railway.app/webhook/7dc69b64-2c1f-40b2-8203-90e8218ac147"
            />

            <ServiceCard 
              id="excel"
              title={t('servicesPage.demos.cards.excel.title')}
              description={t('servicesPage.demos.cards.excel.description')}
              features={t('servicesPage.demos.cards.excel.features')}
              icon="Database"
              reversed={false}
              webhookUrl="https://primary-production-b1314.up.railway.app/webhook/7d5c5747-3ec7-4a8c-a6b4-c5dcab3f7f72"
            />
          </div>
        </div>
      </section>

      {/* CustomDev - MODERNIZADO */}
      <CustomDev />

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-gray-900 to-indigo-900/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              {t('servicesPage.cta.title')}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('servicesPage.cta.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button.Action to="/contact">
                {t('servicesPage.cta.buttons.primary')}
              </Button.Action>
              <Button.Secondary to="/pricing">
                {t('servicesPage.cta.buttons.secondary')}
              </Button.Secondary>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}

export default Services;