// components/sections/home/CallToAction.jsx - Modernizado con fondo especial
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, MessageCircle, Bot, Star, Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react';
import Button from '../../ui/Button';
import { useTranslation } from '../../../hooks/useTranslation';

function CallToAction() {
  const { t } = useTranslation();
  
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Fondo con gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-gray-900 to-indigo-900/40"></div>
      
      {/* Overlay con textura sutil */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-indigo-900/20"></div>
      
      {/* Patrón de fondo dinámico */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iY3RhLXBhdHRlcm4iIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cGF0aCBkPSJNMCAwSDEwMFYxMDBIMFoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMTAgMTBMMjAgMjBNMzAgMTBMNDAgMjBNNTAgMTBMNjAgMjBNNzAgMTBMODAgMjBNMTAgNTBMMjAgNjBNMzAgNTBMNDAgNjBNNTAgNTBMNjAgNjBNNzAgNTBMODAgNjAiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIgZmlsbD0ibm9uZSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNjdGEtcGF0dGVybikiLz48L3N2Zz4=')] opacity-40"></div>
      
      {/* Elementos decorativos sutiles */}
      <motion.div 
        className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 rounded-full bg-purple-600/10 filter blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 5, 0],
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <motion.div 
        className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 rounded-full bg-indigo-600/10 filter blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, -10, 0],
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />
      
      {/* Partículas sutiles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Líneas decorativas sutiles */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Contenido principal mejorado */}
          <div className="lg:w-2/3 lg:pr-12 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Badge sutil para CTA */}
              <motion.div 
                className="inline-flex items-center bg-purple-900/30 backdrop-blur-md border border-purple-500/30 rounded-full py-2 px-4 mb-8"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Star className="w-4 h-4 text-purple-400 mr-2" fill="currentColor" />
                </motion.div>
                <span className="text-purple-300 text-sm font-medium">{t('cta.badge')}</span>
              </motion.div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                  {t('cta.titlePart1')}
                </span>{' '}
                <span className="text-white">
                  {t('cta.titlePart2')}
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
                {t('cta.subtitle')}
              </p>
              
              {/* Características destacadas */}
              <motion.div 
                className="space-y-4 mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {t('cta.mainFeatures').map((feature, index) => {
                  const iconMap = [Bot, MessageCircle, Cpu];
                  const colorMap = [
                    "from-purple-500 to-purple-600",
                    "from-indigo-500 to-indigo-600", 
                    "from-violet-500 to-violet-600"
                  ];
                  const Icon = iconMap[index];
                  return (
                    <motion.div 
                      key={index} 
                      className="flex items-center group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 10 }}
                    >
                      <motion.div 
                        className={`bg-gradient-to-r ${colorMap[index]} rounded-xl p-3 mr-4 shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-white font-bold text-lg group-hover:text-purple-400 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
              
              {/* CTAs mejorados */}
              <motion.div 
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button.Action to="/contact">
                    <span>{t('cta.buttons.primary')}</span>
                  </Button.Action>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/services" 
                    className="inline-flex items-center justify-center border-2 border-white/40 bg-white/10 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-xl hover:bg-white/20 hover:border-white/60 transition-all duration-300 shadow-lg"
                  >
                    <span>{t('cta.buttons.secondary')}</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </motion.div>
              </motion.div>
              
              {/* Garantía/Beneficios sutiles */}
              <motion.div 
                className="mt-8 flex flex-wrap gap-4 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                {t('cta.features').map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center text-gray-300 bg-gray-800/50 backdrop-blur-sm rounded-full px-3 py-1 border border-gray-700/50"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(107, 114, 128, 0.3)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
          
          {/* Tarjeta flotante mejorada */}
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative mx-auto max-w-sm">
              {/* Efecto de brillo exterior sutil */}
              <motion.div 
                className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 via-indigo-500/20 to-purple-600/20 rounded-2xl blur-xl opacity-40"
                animate={{ 
                  opacity: [0.2, 0.4, 0.2],
                  scale: [1, 1.02, 1],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 rounded-2xl blur-lg opacity-30"
                animate={{ 
                  rotate: [0, 360],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="relative bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 p-8 rounded-2xl shadow-2xl">
                {/* Header de la card */}
                <div className="flex items-center mb-6">
                  <motion.div 
                    className="bg-gradient-to-r from-purple-500 to-indigo-500 p-3 rounded-xl mr-3"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Bot className="h-8 w-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{t('cta.cardTitle')}</h3>
                    <p className="text-purple-300 text-sm">{t('cta.cardSubtitle')}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-8 leading-relaxed">
                  &quot;{t('cta.description')}&quot;
                </p>
                
                {/* Lista de beneficios premium */}
                <div className="space-y-4 mb-8">
                  {t('cta.benefits').map((benefit, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle2 className="h-5 w-5 text-purple-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
                
                {/* Métricas de impacto */}
                <div className="grid grid-cols-2 gap-4 p-4 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-xl border border-purple-500/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">{t('cta.metrics.roi')}</div>
                    <div className="text-xs text-gray-400">{t('cta.metrics.roiLabel')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-400">{t('cta.metrics.satisfaction')}</div>
                    <div className="text-xs text-gray-400">{t('cta.metrics.satisfactionLabel')}</div>
                  </div>
                </div>
              </div>
              
              {/* Mensaje flotante sutil */}
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-3 rounded-lg shadow-xl max-w-xs hidden md:block"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  animate={{ 
                    y: [0, -3, 0],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="flex items-center text-sm">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    <span className="font-medium">{t('cta.floatingMessage')}</span>
                  </div>
                </motion.div>
                {/* Flecha del speech bubble */}
                <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-purple-600"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;