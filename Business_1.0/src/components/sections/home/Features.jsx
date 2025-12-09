// components/sections/home/Features.jsx - Actualizado para 3 Verticales
import { motion } from 'framer-motion';
import { Bot, Database, Code2, ArrowRight, CheckCircle2, Sparkles, Zap, TrendingUp } from 'lucide-react';
import Button from '../../ui/Button';
import { useTranslation } from '../../../hooks/useTranslation';

function Features() {
  const { t } = useTranslation();

  // Las 3 verticales principales con highlights
  const verticals = [
    {
      icon: Bot,
      title: t('homeFeatures.verticals.ai.title'),
      description: t('homeFeatures.verticals.ai.description'),
      color: 'from-purple-500 via-indigo-500 to-purple-600',
      highlights: t('homeFeatures.verticals.ai.highlights'),
      metrics: t('homeFeatures.verticals.ai.metrics'),
      path: '/services'
    },
    {
      icon: Database,
      title: t('homeFeatures.verticals.data.title'),
      description: t('homeFeatures.verticals.data.description'),
      color: 'from-blue-500 via-cyan-500 to-blue-600',
      highlights: t('homeFeatures.verticals.data.highlights'),
      metrics: t('homeFeatures.verticals.data.metrics'),
      path: '/services'
    },
    {
      icon: Code2,
      title: t('homeFeatures.verticals.software.title'),
      description: t('homeFeatures.verticals.software.description'),
      color: 'from-green-500 via-emerald-500 to-green-600',
      highlights: t('homeFeatures.verticals.software.highlights'),
      metrics: t('homeFeatures.verticals.software.metrics'),
      path: '/services'
    }
  ];

  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="w-full overflow-hidden relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-purple-600/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 -left-20 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-600/5 rounded-full filter blur-3xl" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {verticals.map((vertical, index) => {
          const Icon = vertical.icon;

          return (
            <motion.div
              key={index}
              className="relative group"
              variants={cardVariants}
            >
              {/* Efecto glow exterior */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${vertical.color} rounded-2xl blur opacity-0 group-hover:opacity-25 transition-all duration-300`} />

              <motion.div
                className="relative bg-gray-800/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700 group-hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col"
              >
                {/* Barra de color superior */}
                <motion.div
                  className={`h-2 w-full bg-gradient-to-r ${vertical.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true }}
                />

                <div className="p-6 flex-grow">
                  {/* Icono destacado */}
                  <motion.div
                    className={`p-4 rounded-xl bg-gradient-to-br ${vertical.color} w-fit mb-6 relative overflow-hidden`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="h-10 w-10 text-white relative z-10" />

                    {/* Efecto de brillo */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.div>

                  {/* Título */}
                  <motion.h3
                    className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {vertical.title}
                  </motion.h3>

                  {/* Línea decorativa */}
                  <motion.div
                    className={`h-1 bg-gradient-to-r ${vertical.color} rounded-full mb-4`}
                    initial={{ width: 0 }}
                    whileInView={{ width: '70%' }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />

                  {/* Descripción */}
                  <motion.p
                    className="text-gray-300 mb-6 leading-relaxed text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {vertical.description}
                  </motion.p>

                  {/* Métricas destacadas */}
                  <motion.div
                    className="grid grid-cols-3 gap-2 mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {Object.entries(vertical.metrics).map(([key, value], i) => (
                      <motion.div
                        key={i}
                        className="text-center p-2 bg-gray-700/50 rounded-lg border border-gray-600/30 group-hover:border-purple-500/30 transition-all duration-200"
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        <div className={`text-base font-bold text-transparent bg-clip-text bg-gradient-to-r ${vertical.color}`}>
                          {value}
                        </div>
                        <div className="text-xs text-gray-400 capitalize">
                          {key}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <motion.h4
                      className="text-xs uppercase text-purple-400 font-semibold mb-3 flex items-center"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Sparkles className="h-3 w-3 mr-1" />
                      {t('homeFeatures.includesLabel')}
                    </motion.h4>

                    <div className="space-y-2">
                      {vertical.highlights.map((highlight, i) => (
                        <motion.div
                          key={i}
                          className="flex items-start text-gray-300 text-sm group/item"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ x: 5 }}
                        >
                          <CheckCircle2 className="h-4 w-4 text-green-400 mr-2 flex-shrink-0 mt-0.5 transition-transform duration-200 group-hover/item:scale-110" />
                          <span className="group-hover/item:text-white transition-colors duration-300">
                            {highlight}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Efecto overlay en hover */}
                <div className={`absolute inset-0 bg-gradient-to-t ${vertical.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* CTA final */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="mb-4">
          <p className="text-gray-300 text-lg mb-2">
            {t('homeFeatures.cta.question')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-green-400 font-semibold">
              {t('homeFeatures.cta.highlight')}
            </span>
          </p>
          <p className="text-gray-400 text-sm">
            {t('homeFeatures.cta.subtitle')}
          </p>
        </div>

        <Button.Action to="/services">
          {t('homeFeatures.cta.button')}
        </Button.Action>
      </motion.div>
    </motion.div>
  );
}

export default Features;
