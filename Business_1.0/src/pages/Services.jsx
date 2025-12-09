// pages/Services.jsx - Rediseñado con 3 Vertientes Principales
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import {
  Bot,
  Brain,
  Code2,
  Database,
  Cloud,
  Smartphone,
  Phone,
  MessageSquare,
  LineChart,
  Cpu,
  Sparkles,
  Zap,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Globe,
  BarChart3,
  Layers,
  Settings,
  TrendingUp,
  Shield,
  Rocket
} from 'lucide-react';

import Button from '../components/ui/Button';
import { pageVariants } from '../utils/animations';
import ServiceCard from '../components/sections/services/ServiceCard';

function Services() {
  const { t } = useTranslation();
  const [activeVertical, setActiveVertical] = useState(0);

  // Badge component
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

  // Las 3 vertientes principales
  const verticals = [
    {
      id: 'ai',
      name: t('servicesNew.verticals.ai.name'),
      icon: Bot,
      color: 'from-purple-500 to-indigo-600',
      bgGradient: 'from-purple-900/20 to-indigo-900/20',
      description: t('servicesNew.verticals.ai.description'),
      services: [
        {
          icon: MessageSquare,
          name: t('servicesNew.verticals.ai.services.conversational.name'),
          description: t('servicesNew.verticals.ai.services.conversational.description'),
          features: t('servicesNew.verticals.ai.services.conversational.features')
        },
        {
          icon: Phone,
          name: t('servicesNew.verticals.ai.services.appointments.name'),
          description: t('servicesNew.verticals.ai.services.appointments.description'),
          features: t('servicesNew.verticals.ai.services.appointments.features')
        },
        {
          icon: Settings,
          name: t('servicesNew.verticals.ai.services.dataCapture.name'),
          description: t('servicesNew.verticals.ai.services.dataCapture.description'),
          features: t('servicesNew.verticals.ai.services.dataCapture.features')
        },
        {
          icon: Globe,
          name: t('servicesNew.verticals.ai.services.custom.name'),
          description: t('servicesNew.verticals.ai.services.custom.description'),
          features: t('servicesNew.verticals.ai.services.custom.features')
        }
      ]
    },
    {
      id: 'data',
      name: t('servicesNew.verticals.data.name'),
      icon: Database,
      color: 'from-blue-500 to-cyan-600',
      bgGradient: 'from-blue-900/20 to-cyan-900/20',
      description: t('servicesNew.verticals.data.description'),
      services: [
        {
          icon: Brain,
          name: t('servicesNew.verticals.data.services.analytics.name'),
          description: t('servicesNew.verticals.data.services.analytics.description'),
          features: t('servicesNew.verticals.data.services.analytics.features')
        },
        {
          icon: BarChart3,
          name: t('servicesNew.verticals.data.services.automation.name'),
          description: t('servicesNew.verticals.data.services.automation.description'),
          features: t('servicesNew.verticals.data.services.automation.features')
        },
        {
          icon: Cloud,
          name: t('servicesNew.verticals.data.services.business.name'),
          description: t('servicesNew.verticals.data.services.business.description'),
          features: t('servicesNew.verticals.data.services.business.features')
        },
        {
          icon: TrendingUp,
          name: t('servicesNew.verticals.data.services.consulting.name'),
          description: t('servicesNew.verticals.data.services.consulting.description'),
          features: t('servicesNew.verticals.data.services.consulting.features')
        }
      ]
    },
    {
      id: 'software',
      name: t('servicesNew.verticals.software.name'),
      icon: Code2,
      color: 'from-green-500 to-emerald-600',
      bgGradient: 'from-green-900/20 to-emerald-900/20',
      description: t('servicesNew.verticals.software.description'),
      services: [
        {
          icon: Layers,
          name: t('servicesNew.verticals.software.services.web.name'),
          description: t('servicesNew.verticals.software.services.web.description'),
          features: t('servicesNew.verticals.software.services.web.features')
        },
        {
          icon: Smartphone,
          name: t('servicesNew.verticals.software.services.mobile.name'),
          description: t('servicesNew.verticals.software.services.mobile.description'),
          features: t('servicesNew.verticals.software.services.mobile.features')
        },
        {
          icon: Cpu,
          name: t('servicesNew.verticals.software.services.apis.name'),
          description: t('servicesNew.verticals.software.services.apis.description'),
          features: t('servicesNew.verticals.software.services.apis.features')
        },
        {
          icon: Settings,
          name: t('servicesNew.verticals.software.services.integrations.name'),
          description: t('servicesNew.verticals.software.services.integrations.description'),
          features: t('servicesNew.verticals.software.services.integrations.features')
        }
      ]
    }
  ];

  return (
    <motion.main
      className="flex flex-col"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 min-h-screen flex items-center">
        {/* Elementos decorativos */}
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
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full filter blur-3xl"
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
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SectionBadge icon={Sparkles}>{t('servicesNew.hero.badge')}</SectionBadge>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-white">{t('servicesNew.hero.title.part1')}</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400">
                {t('servicesNew.hero.title.highlight')}
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('servicesNew.hero.description.part1')}
              <span className="text-purple-400 font-semibold"> {t('servicesNew.hero.description.highlight')}</span> {t('servicesNew.hero.description.part2')}
            </motion.p>

            {/* Stats rápidos */}
            <motion.div
              className="flex flex-wrap justify-center gap-12 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { value: '3', label: t('servicesNew.hero.stats.verticals'), icon: Layers },
                { value: '12+', label: t('servicesNew.hero.stats.solutions'), icon: Zap },
                { value: '100%', label: t('servicesNew.hero.stats.custom'), icon: CheckCircle2 }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="flex items-center justify-center mb-2">
                      <Icon className="h-5 w-5 text-purple-400 mr-2" />
                      <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                        {stat.value}
                      </div>
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>


          </div>
        </div>
      </section>

      {/* Verticals Section */}
      <section id="verticals" className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionBadge icon={Rocket}>{t('servicesNew.verticals.badge')}</SectionBadge>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  {t('servicesNew.verticals.title')}
                </span>
              </h2>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {t('servicesNew.verticals.subtitle.part1')} <span className="text-green-400 font-semibold">{t('servicesNew.verticals.subtitle.highlight')}</span> {t('servicesNew.verticals.subtitle.part2')}
              </p>
            </motion.div>
          </div>

          {/* Vertical Tabs */}
          <div className="flex flex-col lg:flex-row gap-8 mb-16">
            {/* Selector de verticales */}
            <div className="lg:w-1/3">
              <div className="space-y-4">
                {verticals.map((vertical, index) => {
                  const Icon = vertical.icon;
                  const isActive = activeVertical === index;

                  return (
                    <motion.button
                      key={index}
                      className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                        isActive
                          ? `bg-gradient-to-r ${vertical.color} text-white shadow-xl`
                          : 'bg-gray-800/50 hover:bg-gray-800 text-gray-300 border border-gray-700'
                      }`}
                      onClick={() => setActiveVertical(index)}
                      whileHover={!isActive ? { x: 10 } : {}}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <Icon className={`h-8 w-8 ${isActive ? 'text-white' : 'text-purple-400'}`} />
                        <ChevronRight className={`h-5 w-5 transition-transform ${isActive ? 'rotate-90' : ''}`} />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{vertical.name}</h3>
                      <p className={`text-sm ${isActive ? 'text-white/90' : 'text-gray-400'}`}>
                        {vertical.description}
                      </p>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Contenido de la vertical seleccionada */}
            <div className="lg:w-2/3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeVertical}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`bg-gradient-to-br ${verticals[activeVertical].bgGradient} backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50`}>
                    <div className="flex items-center mb-8">
                      {React.createElement(verticals[activeVertical].icon, {
                        className: `h-12 w-12 text-transparent bg-clip-text bg-gradient-to-r ${verticals[activeVertical].color} mr-4`
                      })}
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">
                          {verticals[activeVertical].name}
                        </h3>
                        <p className="text-gray-300">
                          {verticals[activeVertical].description}
                        </p>
                      </div>
                    </div>

                    {/* Servicios de la vertical */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {verticals[activeVertical].services.map((service, idx) => {
                        const ServiceIcon = service.icon;
                        return (
                          <motion.div
                            key={idx}
                            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 hover:border-purple-500/50 transition-all"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                          >
                            <div className={`bg-gradient-to-r ${verticals[activeVertical].color} p-3 rounded-lg w-fit mb-4`}>
                              <ServiceIcon className="h-6 w-6 text-white" />
                            </div>

                            <h4 className="text-lg font-bold text-white mb-2">{service.name}</h4>
                            <p className="text-gray-400 text-sm mb-4">{service.description}</p>

                            <ul className="space-y-2">
                              {service.features.map((feature, fIdx) => (
                                <li key={fIdx} className="flex items-start text-sm">
                                  <CheckCircle2 className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-300">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* CTA por vertical */}
                    <div className="mt-8 text-center">
                      <Button.Action to="/contact">
                        {t('servicesNew.verticals.cta')}
                      </Button.Action>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Demos Interactivos - Solo para IA */}
      {activeVertical === 0 && (
        <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <SectionBadge icon={Zap}>{t('servicesNew.demo.badge')}</SectionBadge>

                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                    {t('servicesNew.demo.title')}
                  </span>
                </h2>

                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  {t('servicesNew.demo.subtitle.part1')}
                  <span className="text-purple-400 font-semibold"> {t('servicesNew.demo.subtitle.highlight')}</span>{t('servicesNew.demo.subtitle.part2')}
                </p>
              </motion.div>
            </div>

            {/* Demo Cards */}
            <div className="space-y-20">
              <ServiceCard
                id="whatsapp-demo"
                title={t('servicesNew.demo.whatsapp.title')}
                description={t('servicesNew.demo.whatsapp.description')}
                icon="MessageSquare"
                features={t('servicesNew.demo.whatsapp.features')}
                webhookUrl="https://hook.us2.make.com/k45sj1aabvlwj3h8n7bqvrgd6s4c25om"
                reversed={false}
              />

              <ServiceCard
                id="appointments-demo"
                title={t('servicesNew.demo.appointments.title')}
                description={t('servicesNew.demo.appointments.description')}
                icon="Calendar"
                features={t('servicesNew.demo.appointments.features')}
                webhookUrl="https://hook.us2.make.com/pik6bcnvvx3kc6gmvl6cqoxrfd7x6xew"
                reversed={true}
              />

              <ServiceCard
                id="excel-demo"
                title={t('servicesNew.demo.excel.title')}
                description={t('servicesNew.demo.excel.description')}
                icon="Database"
                features={t('servicesNew.demo.excel.features')}
                webhookUrl="https://hook.us2.make.com/xn4o7btvqm4yfkfjp96sdlm2uo4g3ooe"
                reversed={false}
              />
            </div>

            {/* CTA después de demos */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30 max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t('servicesNew.demo.cta.title')}
                </h3>
                <p className="text-gray-300 mb-6">
                  {t('servicesNew.demo.cta.description')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button.Action to="/contact">
                    {t('servicesNew.demo.cta.primary')}
                  </Button.Action>
                  <Button.Secondary to="/pricing">
                    {t('servicesNew.demo.cta.secondary')}
                  </Button.Secondary>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-gray-900 to-blue-900/20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                {t('servicesNew.verticals.finalCta.title')}
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('servicesNew.verticals.finalCta.description.part1')} <span className="text-green-400 font-semibold">{t('servicesNew.verticals.finalCta.description.highlight')}</span> {t('servicesNew.verticals.finalCta.description.part2')}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button.Action to="/contact">
                {t('servicesNew.verticals.finalCta.primary')}
              </Button.Action>
              <Button.Secondary to="/pricing">
                {t('servicesNew.verticals.finalCta.secondary')}
              </Button.Secondary>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}

export default Services;
