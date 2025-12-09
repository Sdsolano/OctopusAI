// pages/Pricing.jsx - Actualizado con nuevo modelo de precios
import React from 'react';
import { motion } from 'framer-motion';
import {
  Star,
  Zap,
  CheckCircle2,
  Crown,
  Rocket,
  MessageSquare,
  Send,
  Database,
  Code2,
  Sparkles,
  AlertCircle,
  ArrowRight,
  Phone
} from 'lucide-react';

import Button from '../components/ui/Button';
import FAQ from '../components/sections/pricing/FAQ';
import { useTranslation } from '../hooks/useTranslation';
import { pageVariants } from '../utils/animations';

function Pricing() {
  const { t } = useTranslation();

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

  // Agentes de IA
  const aiAgents = [
    {
      id: 'whatsapp',
      icon: MessageSquare,
      color: 'from-green-500 to-emerald-600',
      monthlyPrice: 55,
      setupFrom: 600,
      translationKey: 'whatsapp'
    },
    {
      id: 'telegram',
      icon: Send,
      color: 'from-blue-500 to-indigo-600',
      monthlyPrice: 45,
      setupFrom: 600,
      popular: true,
      translationKey: 'telegram'
    },
    {
      id: 'custom-ai',
      icon: Sparkles,
      color: 'from-purple-500 to-pink-600',
      monthlyPrice: 60,
      setupFrom: 1500,
      translationKey: 'customAi'
    },
    {
      id: 'voice-agent',
      icon: Phone,
      color: 'from-orange-500 to-red-600',
      monthlyPrice: 1000,
      setupFrom: 1500,
      translationKey: 'voiceAgent'
    }
  ];

  // Otros servicios
  const customServices = [
    {
      id: 'data-ml',
      icon: Database,
      color: 'from-blue-500 to-cyan-600',
      priceFrom: 1500,
      translationKey: 'dataMl'
    },
    {
      id: 'software',
      icon: Code2,
      color: 'from-green-500 to-emerald-600',
      priceFrom: 1500,
      translationKey: 'software'
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
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800">
        {/* Elementos decorativos */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-40 -right-40 w-96 h-96 bg-green-600/20 rounded-full filter blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.15, 0.3, 0.15]
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
              <SectionBadge icon={Crown}>{t('pricingNew.hero.badge')}</SectionBadge>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-white">{t('pricingNew.hero.title.part1')}</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400">
                {t('pricingNew.hero.title.highlight')}
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('pricingNew.hero.description.part1')}{' '}
              <span className="text-green-400 font-semibold">{t('pricingNew.hero.description.highlight')}</span>{t('pricingNew.hero.description.part2')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Agentes de IA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <SectionBadge icon={Sparkles}>{t('pricingNew.aiAgents.badge')}</SectionBadge>

            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-6 mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-green-400">
                {t('pricingNew.aiAgents.title')}
              </span>
            </motion.h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('pricingNew.aiAgents.subtitle')}
            </p>
          </div>

          {/* Grid de agentes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {aiAgents.map((agent, index) => {
              const Icon = agent.icon;
              return (
                <motion.div
                  key={agent.id}
                  className="relative group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Popular badge */}
                  {agent.popular && (
                    <motion.div
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-4 py-1 rounded-full flex items-center shadow-lg">
                        <Star className="h-3 w-3 mr-1" fill="currentColor" />
                        {t('pricingNew.aiAgents.telegram.popularBadge')}
                      </div>
                    </motion.div>
                  )}

                  {/* Glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${agent.color} rounded-2xl blur opacity-0 group-hover:opacity-25 transition-all duration-300`} />

                  <div className="relative bg-gray-800/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-700 group-hover:border-purple-500/50 transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-center mb-6">
                      <div className={`bg-gradient-to-r ${agent.color} p-3 rounded-xl mr-4`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{t(`pricingNew.aiAgents.${agent.translationKey}.name`)}</h3>
                        <p className="text-gray-400 text-sm">{t(`pricingNew.aiAgents.${agent.translationKey}.subtitle`)}</p>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="mb-6">
                      <div className="flex items-baseline mb-2">
                        <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                          {t(`pricingNew.aiAgents.${agent.translationKey}.monthlyPrice`)}
                        </span>
                        <span className="text-gray-400 ml-2">{t(`pricingNew.aiAgents.${agent.translationKey}.perMonth`)}</span>
                      </div>

                      <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-3 flex items-start">
                        <AlertCircle className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-300">
                            <span className="font-semibold text-white">{t(`pricingNew.aiAgents.${agent.translationKey}.setupLabel`)}</span>{' '}
                            {t(`pricingNew.aiAgents.${agent.translationKey}.setupPrice`)}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            {t(`pricingNew.aiAgents.${agent.translationKey}.setupNote`)}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {t(`pricingNew.aiAgents.${agent.translationKey}.features`).map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Button.Action to="/contact" className="w-full">
                      {t(`pricingNew.aiAgents.${agent.translationKey}.button`)}
                    </Button.Action>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Services Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <SectionBadge icon={Rocket}>{t('pricingNew.customServices.badge')}</SectionBadge>

            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-6 mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                {t('pricingNew.customServices.title')}
              </span>
            </motion.h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('pricingNew.customServices.subtitle')}
            </p>
          </div>

          {/* Grid de servicios custom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {customServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  className="relative group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${service.color} rounded-2xl blur opacity-0 group-hover:opacity-25 transition-all duration-300`} />

                  <div className="relative bg-gray-800/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-700 group-hover:border-blue-500/50 transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-center mb-6">
                      <div className={`bg-gradient-to-r ${service.color} p-3 rounded-xl mr-4`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{t(`pricingNew.customServices.${service.translationKey}.name`)}</h3>
                        <p className="text-gray-400 text-sm">{t(`pricingNew.customServices.${service.translationKey}.subtitle`)}</p>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="mb-6">
                      <div className="flex items-baseline mb-2">
                        <span className="text-gray-400 text-sm mr-2">{t(`pricingNew.customServices.${service.translationKey}.priceFrom`)}</span>
                        <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                          ${t(`pricingNew.customServices.${service.translationKey}.price`)}
                        </span>
                        <span className="text-gray-400 ml-2 text-sm">{t(`pricingNew.customServices.${service.translationKey}.currency`)}</span>
                      </div>

                      <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-3">
                        <p className="text-sm text-gray-300">
                          {t(`pricingNew.customServices.${service.translationKey}.note`)}
                        </p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {t(`pricingNew.customServices.${service.translationKey}.features`).map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Button.Action to="/contact" className="w-full">
                      {t(`pricingNew.customServices.${service.translationKey}.button`)}
                    </Button.Action>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Nota sobre combinaciones */}
          <motion.div
            className="mt-12 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
              <Sparkles className="h-8 w-8 text-purple-400 mx-auto mb-3" />
              <p className="text-gray-300">
                💡 <span className="font-semibold text-white">{t('pricingNew.combinationNote.question')}</span>
                {' '}{t('pricingNew.combinationNote.answer')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <FAQ />
        </div>
      </section>


    </motion.main>
  );
}

export default Pricing;
