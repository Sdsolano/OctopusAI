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

  // Variantes de animación optimizadas - más simples y rápidas
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1] // easeOut más suave
      }
    }
  };

  return (
    <motion.div
      className="w-full overflow-hidden relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Elementos decorativos de fondo - simplificados */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-purple-600/5 rounded-full filter blur-2xl" />
        <div className="absolute bottom-20 -left-20 w-80 h-80 bg-blue-500/5 rounded-full filter blur-2xl" />
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
              {/* Efecto glow exterior - simplificado */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${vertical.color} rounded-2xl blur-sm opacity-0 group-hover:opacity-20 transition-opacity duration-200`} />

              <div
                className="relative bg-gray-800/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 group-hover:border-purple-500/50 transition-all duration-200 h-full flex flex-col"
              >
                {/* Barra de color superior - animación simplificada con CSS */}
                <div 
                  className={`h-2 w-full bg-gradient-to-r ${vertical.color}`}
                  style={{
                    animation: `slideIn 0.4s ease-out ${index * 0.1}s both`
                  }}
                />

                <div className="p-6 flex-grow">
                  {/* Icono destacado - sin animaciones complejas */}
                  <div
                    className={`p-4 rounded-xl bg-gradient-to-br ${vertical.color} w-fit mb-6 relative overflow-hidden group/icon transition-transform duration-200 hover:scale-105`}
                  >
                    <Icon className="h-10 w-10 text-white relative z-10" />
                  </div>

                  {/* Título */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-200">
                    {vertical.title}
                  </h3>

                  {/* Línea decorativa - estática */}
                  <div className={`h-1 w-[70%] bg-gradient-to-r ${vertical.color} rounded-full mb-4`} />

                  {/* Descripción */}
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                    {vertical.description}
                  </p>

                  {/* Métricas destacadas */}
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {Object.entries(vertical.metrics).map(([key, value], i) => (
                      <div
                        key={i}
                        className="text-center p-2 bg-gray-700/50 rounded-lg border border-gray-600/30 group-hover:border-purple-500/30 transition-all duration-200 hover:scale-105"
                      >
                        <div className={`text-base font-bold text-transparent bg-clip-text bg-gradient-to-r ${vertical.color}`}>
                          {value}
                        </div>
                        <div className="text-xs text-gray-400 capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-xs uppercase text-purple-400 font-semibold mb-3 flex items-center">
                      <Sparkles className="h-3 w-3 mr-1" />
                      {t('homeFeatures.includesLabel')}
                    </h4>

                    <div className="space-y-2">
                      {vertical.highlights.map((highlight, i) => (
                        <div
                          key={i}
                          className="flex items-start text-gray-300 text-sm group/item transition-transform duration-200 hover:translate-x-1"
                        >
                          <CheckCircle2 className="h-4 w-4 text-green-400 mr-2 flex-shrink-0 mt-0.5 transition-transform duration-200 group-hover/item:scale-110" />
                          <span className="group-hover/item:text-white transition-colors duration-200">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Efecto overlay en hover - simplificado */}
                <div className={`absolute inset-0 bg-gradient-to-t ${vertical.color} opacity-0 group-hover:opacity-5 transition-opacity duration-200 pointer-events-none`} />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* CTA final */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
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
