// components/sections/about/Mission.jsx - Completamente modernizado
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Sparkles, 
  Zap, 
  Globe, 
  Users, 
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Brain,
  MessageSquare,
  Clock,
  Star,
  Rocket,
  Heart
} from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation.js';

function Mission() {
  const { t } = useTranslation();
  
  // Badge component para la sección
  const SectionBadge = ({ children, icon: Icon }) => (
    <motion.div 
      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm mb-6"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Icon className="h-4 w-4 text-purple-400" />
      <span className="text-purple-200 font-semibold text-sm">{children}</span>
    </motion.div>
  );

  return (
    <section className="relative min-h-screen bg-gray-900 overflow-hidden p-16">
      {/* Fondo animado mejorado */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Círculos animados */}
        <motion.div 
          className="absolute top-20 -left-40 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div 
          className="absolute bottom-20 -right-40 w-80 h-80 bg-indigo-500/10 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -10, 0],
            opacity: [0.08, 0.15, 0.08]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        />
        
        {/* Patrón de misión */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0ibWlzc2lvbi1wYXR0ZXJuIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+PHBhdGggZD0iTTEwIDEwaDgwdjgwSDE0eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOTMzM2VhIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIi8+PHBhdGggZD0iTTUwIDIwdjYwTTIwIDUwaDYwIiBzdHJva2U9IiM2MzY2ZjEiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjbWlzc2lvbi1wYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-20" />
        
        {/* Estrellas flotantes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.6, 0.2],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          >
            <Star className="h-4 w-4 text-purple-400/30" fill="currentColor" />
          </motion.div>
        ))}
      </div>

      {/* Líneas decorativas */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionBadge icon={Target}>{t('mission.badge')}</SectionBadge>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
                {t('mission.title')}
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('mission.subtitle')}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contenido principal mejorado */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Misión principal */}
            <div className="relative">
              {/* Glow effect sutil */}
              <motion.div 
                className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-2xl blur-lg opacity-50"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <div className="relative bg-gray-800/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
                <div className="flex items-center mb-6">
                  <motion.div 
                    className="bg-gradient-to-br from-purple-600 to-indigo-600 p-4 rounded-xl mr-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Heart className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white">{t('mission.heartCard.title')}</h3>
                </div>
                
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {t('mission.heartCard.paragraph1')}{' '}
                  <span className="text-purple-400 font-semibold">{t('mission.heartCard.highlight1')}</span>.
                </p>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  {t('mission.heartCard.paragraph2')}{' '}
                  <span className="text-purple-400 font-semibold">{t('mission.heartCard.highlight2')}</span>.
                </p>
              </div>
            </div>

            {/* Valores clave */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t('mission.values').map((value, index) => {
                const iconMap = {
                  'Brain': Brain,
                  'Zap': Zap,
                  'Users': Users,
                  'Globe': Globe
                };
                const Icon = iconMap[value.icon] || Brain;
                return (
                  <motion.div
                    key={index}
                    className="relative group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    {/* Glow en hover */}
                    <motion.div 
                      className={`absolute -inset-1 bg-gradient-to-r ${value.color} rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                    />
                    
                    <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 group-hover:border-purple-500/50 transition-all duration-300">
                      <motion.div 
                        className={`bg-gradient-to-r ${value.color} p-3 rounded-lg mb-3 w-fit`}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon className="h-5 w-5 text-white" />
                      </motion.div>
                      <h4 className="font-bold text-white mb-1">{value.title}</h4>
                      <p className="text-gray-400 text-sm">{value.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Visual/Image section modernizada */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Efecto de brillo exterior */}
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 via-indigo-500/20 to-purple-600/20 rounded-3xl blur-2xl opacity-40"
                animate={{ 
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* Card principal con stats */}
              <div className="relative bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 overflow-hidden">
                {/* Patrón decorativo */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full" />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-8 text-center">
                    {t('mission.impact.title')}
                  </h3>
                  
                  <div className="space-y-6">
                    {t('mission.impact.stats').map((stat, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center justify-between p-4 bg-gray-700/50 rounded-xl border border-gray-600/30"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex-1">
                          <div className="text-3xl font-bold text-purple-400 mb-1">
                            {stat.metric}
                          </div>
                          <div className="text-white font-semibold mb-1">
                            {stat.label}
                          </div>
                          <div className="text-gray-400 text-sm">
                            {stat.description}
                          </div>
                        </div>
                        <motion.div
                          animate={{ rotate: [0, 5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <TrendingUp className="h-8 w-8 text-purple-400" />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Sección de cita inspiracional */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative max-w-4xl mx-auto">
            {/* Fondo decorativo */}
            <motion.div 
              className="absolute -inset-8 bg-gradient-to-r from-purple-600/10 via-indigo-500/10 to-purple-600/10 rounded-3xl blur-2xl"
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.02, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <div className="relative bg-gray-800/80 backdrop-blur-xl rounded-3xl p-12 border border-gray-700/50">
              <div className="mb-6">
                <Sparkles className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <blockquote className="text-2xl md:text-3xl font-light text-gray-200 leading-relaxed italic">
                  &ldquo;{t('mission.quote.text')}&rdquo;
                </blockquote>
              </div>
              <cite className="text-purple-400 font-semibold text-lg">
                — {t('mission.quote.author')}
              </cite>
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  );
}

export default Mission;
