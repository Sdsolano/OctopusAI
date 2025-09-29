// components/sections/home/Features.jsx - Modernizado para sintonía
import { motion } from 'framer-motion';
import { MessageSquare, Calendar, Mail, Database, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import Button from '../../ui/Button';
import { useTranslation } from '../../../hooks/useTranslation';

function Features() {
  const { t } = useTranslation();
  
  // Características principales con datos mejorados y colores específicos
  const features = [
    { 
      icon: MessageSquare, 
      title: t('services.whatsapp.title'), 
      description: t('services.whatsapp.description'),
      color: "from-green-500 via-emerald-500 to-teal-600",
      benefits: t('services.whatsapp.benefits'),
      path: "/services#whatsapp",
      metrics: { 
        satisfaction: t('services.whatsapp.stats.satisfaction'), 
        response: t('services.whatsapp.stats.response'), 
        availability: t('services.whatsapp.stats.availability') 
      }
    },
    { 
      icon: Calendar, 
      title: t('services.appointments.title'), 
      description: t('services.appointments.description'),
      color: "from-blue-500 via-indigo-500 to-purple-600",
      benefits: t('services.appointments.benefits'),
      path: "/services#appointments",
      metrics: { 
        efficiency: t('services.appointments.stats.efficient'), 
        cancellations: t('services.appointments.stats.cancels'), 
        automation: t('services.appointments.stats.automation') 
      }
    },
    { 
      icon: Mail, 
      title: t('services.gmail.title'), 
      description: t('services.gmail.description'),
      color: "from-purple-500 via-violet-500 to-indigo-600",
      benefits: t('services.gmail.benefits'),
      path: "/services#gmail",
      metrics: { 
        timesSaved: t('services.gmail.stats.timesSaved'), 
        accuracy: t('services.gmail.stats.accuracy'), 
        productivity: t('services.gmail.stats.productivity') 
      }
    },
    { 
      icon: Database, 
      title: t('services.excel.title'), 
      description: t('services.excel.description'),
      color: "from-rose-500 via-pink-500 to-purple-600",
      benefits: t('services.excel.benefits'),
      path: "/services#excel",
      metrics: { 
        accuracy: t('services.excel.stats.accuracy'), 
        processing: t('services.excel.stats.processing'), 
        errors: t('services.excel.stats.error') 
      }
    }
  ];

  // Variantes de animación optimizadas para mejor rendimiento
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4, 
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
      {/* Elementos decorativos de fondo optimizados */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-purple-600/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 -left-20 w-80 h-80 bg-indigo-500/5 rounded-full filter blur-3xl" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          
          return (
            <motion.div 
              key={index}
              className="relative group"
              variants={cardVariants}
            >
              {/* Efecto glow exterior optimizado */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-all duration-300`} />
              
              <motion.div 
                className="relative bg-gray-800/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700 group-hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                {/* Barra de color superior */}
                <motion.div 
                  className={`h-2 w-full bg-gradient-to-r ${feature.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
                
                <div className="p-6 flex-grow">
                  {/* Header con icono mejorado */}
                  <div className="flex items-start mb-6">
                    <div 
                      className={`p-4 rounded-xl bg-gradient-to-br ${feature.color} mr-4 relative overflow-hidden group-hover:scale-105 transition-transform duration-200`}
                    >
                      <Icon className="h-8 w-8 text-white relative z-10" />
                    </div>
                    
                    <div className="flex-1">
                      <motion.h3 
                        className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                      >
                        {feature.title}
                      </motion.h3>
                      
                      {/* Línea decorativa animada */}
                      <motion.div 
                        className={`h-1 bg-gradient-to-r ${feature.color} rounded-full mb-3`}
                        initial={{ width: 0 }}
                        whileInView={{ width: '80%' }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                  
                  {/* Descripción */}
                  <motion.p 
                    className="text-gray-300 mb-6 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {feature.description}
                  </motion.p>
                  
                  {/* Métricas destacadas */}
                  <motion.div 
                    className="grid grid-cols-3 gap-3 mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {Object.entries(feature.metrics).map(([key, value], i) => (
                      <div
                        key={i}
                        className="text-center p-2 bg-gray-700/50 rounded-lg border border-gray-600/30 group-hover:border-purple-500/30 transition-all duration-200 hover:scale-105"
                      >
                        <div className={`text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${feature.color}`}>
                          {value}
                        </div>
                        <div className="text-xs text-gray-400 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                  
                  {/* Lista de beneficios mejorada */}
                  <div className="mb-6">
                    <motion.h4 
                      className="text-sm uppercase text-purple-400 font-semibold mb-3 flex items-center"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Sparkles className="h-4 w-4 mr-2" />
                      {t('keyBenefits')}
                    </motion.h4>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {Array.isArray(feature.benefits) ? feature.benefits.map((benefit, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center text-gray-300 text-sm group"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 + i * 0.02 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle2 className="h-4 w-4 text-green-400 mr-2 flex-shrink-0 transition-transform duration-200 group-hover:scale-110" />
                          <span className="group-hover:text-white transition-colors duration-300">
                            {benefit}
                          </span>
                        </motion.div>
                      )) : null}
                    </div>
                  </div>
                </div>
                
                {/* Footer con enlace mejorado */}
                <div className="p-4 border-t border-gray-700/50 mt-auto bg-gray-900/30">
                  <Button.Link 
                    to={feature.path} 
                    className="text-purple-400 font-medium flex items-center justify-center w-full group hover:text-white transition-all duration-300"
                  >
                    <span>{t('explore')} {feature.title}</span>
                    
                  </Button.Link>
                </div>
                
                {/* Efecto overlay sutil en hover */}
                <div className={`absolute inset-0 bg-gradient-to-t ${feature.color.replace('from-', 'from-').replace('via-', 'via-').replace('to-', 'to-')} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
      
      {/* CTA mejorado */}
      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Button.Action to="/services">
          <span>{t('viewAllSolutions')}</span>
        </Button.Action>
      </motion.div>
    </motion.div>
  );
}

export default Features;