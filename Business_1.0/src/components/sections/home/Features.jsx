// components/sections/home/Features.jsx - Modernizado para sintonía
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Calendar, Mail, Database, ArrowRight, ExternalLink, Zap, CheckCircle2, Sparkles } from 'lucide-react';
import Button from '../../ui/Button';

function Features() {
  // Características principales con datos mejorados y colores específicos
  const features = [
    { 
      icon: MessageSquare, 
      title: "WhatsApp & Telegram AI", 
      description: "Asistente 24/7 que atiende consultas, agenda citas y guía a tus clientes con comunicación natural e inteligente.",
      color: "from-green-500 via-emerald-500 to-teal-600",
      benefits: ["Respuestas instantáneas", "Detección de intenciones", "Conversación natural", "Integración con CRM"],
      path: "/services#whatsapp",
      metrics: { satisfaction: "98%", response: "<3s", availability: "24/7" }
    },
    { 
      icon: Calendar, 
      title: "Gestión de Citas", 
      description: "Sistema automatizado de reservas y reprogramaciones que optimiza tu agenda y reduce cancelaciones.",
      color: "from-blue-500 via-indigo-500 to-purple-600",
      benefits: ["Recordatorios automáticos", "Sincronización con calendario", "Reprogramación sin fricciones", "Confirmaciones personalizadas"],
      path: "/services#appointments",
      metrics: { efficiency: "+85%", cancellations: "-60%", automation: "95%" }
    },
    { 
      icon: Mail, 
      title: "Automatización Gmail", 
      description: "Gestión inteligente de correos con IA personalizada para clasificar, responder y priorizar mensajes.",
      color: "from-purple-500 via-violet-500 to-indigo-600",
      benefits: ["Filtrado inteligente", "Respuestas automatizadas", "Seguimiento de leads", "Análisis de sentimiento"],
      path: "/services#gmail",
      metrics: { timesSaved: "5h/día", accuracy: "94%", productivity: "+120%" }
    },
    { 
      icon: Database, 
      title: "Integración con Excel", 
      description: "Conecta tu asistente con hojas de cálculo para gestionar pedidos y mantener registros actualizados.",
      color: "from-rose-500 via-pink-500 to-purple-600",
      benefits: ["Actualización en tiempo real", "Exportación de datos", "Captura estructurada", "Reportes automatizados"],
      path: "/services#excel",
      metrics: { accuracy: "99.8%", processing: "Instantáneo", errors: "-95%" }
    }
  ];

  // Variantes de animación mejoradas
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100
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
      {/* Elementos decorativos de fondo modernos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 -right-20 w-96 h-96 bg-purple-600/5 rounded-full filter blur-3xl"
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
          className="absolute bottom-20 -left-20 w-80 h-80 bg-indigo-500/5 rounded-full filter blur-3xl"
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
              {/* Efecto glow exterior */}
              <motion.div 
                className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-all duration-500`}
                animate={{ opacity: [0, 0.1, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
              />
              
              <motion.div 
                className="relative bg-gray-800/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700 group-hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Barra de color superior */}
                <motion.div 
                  className={`h-2 w-full bg-gradient-to-r ${feature.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  viewport={{ once: true }}
                />
                
                <div className="p-6 flex-grow">
                  {/* Header con icono mejorado */}
                  <div className="flex items-start mb-6">
                    <motion.div 
                      className={`p-4 rounded-xl bg-gradient-to-br ${feature.color} mr-4 relative overflow-hidden group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="h-8 w-8 text-white relative z-10" />
                      
                      {/* Efecto de brillo interno */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.div>
                    
                    <div className="flex-1">
                      <motion.h3 
                        className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {feature.title}
                      </motion.h3>
                      
                      {/* Línea decorativa animada */}
                      <motion.div 
                        className={`h-1 bg-gradient-to-r ${feature.color} rounded-full mb-3`}
                        initial={{ width: 0 }}
                        whileInView={{ width: '80%' }}
                        transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                  
                  {/* Descripción */}
                  <motion.p 
                    className="text-gray-300 mb-6 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {feature.description}
                  </motion.p>
                  
                  {/* Métricas destacadas */}
                  <motion.div 
                    className="grid grid-cols-3 gap-3 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {Object.entries(feature.metrics).map(([key, value], i) => (
                      <motion.div
                        key={i}
                        className="text-center p-2 bg-gray-700/50 rounded-lg border border-gray-600/30 group-hover:border-purple-500/30 transition-colors duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className={`text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${feature.color}`}>
                          {value}
                        </div>
                        <div className="text-xs text-gray-400 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  {/* Lista de beneficios mejorada */}
                  <div className="mb-6">
                    <motion.h4 
                      className="text-sm uppercase text-purple-400 font-semibold mb-3 flex items-center"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Sparkles className="h-4 w-4 mr-2" />
                      Beneficios clave
                    </motion.h4>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {feature.benefits.map((benefit, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center text-gray-300 text-sm group"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.7 + index * 0.1 + i * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <CheckCircle2 className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          </motion.div>
                          <span className="group-hover:text-white transition-colors duration-300">
                            {benefit}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Footer con enlace mejorado */}
                <div className="p-4 border-t border-gray-700/50 mt-auto bg-gray-900/30">
                  <Button.Link 
                    to={feature.path} 
                    className="text-purple-400 font-medium flex items-center justify-center w-full group hover:text-white transition-all duration-300"
                  >
                    <span>Explorar {feature.title}</span>
                    <motion.div 
                      className="ml-2" 
                      animate={{ x: [0, 5, 0] }} 
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                        repeatDelay: 2
                      }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </Button.Link>
                </div>
                
                {/* Efecto overlay sutil en hover */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-t ${feature.color.replace('from-', 'from-').replace('via-', 'via-').replace('to-', 'to-')} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                />
                
                {/* Partículas decorativas */}
                <motion.div 
                  className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full opacity-60"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: index * 0.3 
                  }}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
      
      {/* CTA mejorado */}
      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <Button.Action to="/services">
          <span>Ver todas las soluciones</span>
          <Zap className="h-5 w-5 ml-2" />
        </Button.Action>
      </motion.div>
    </motion.div>
  );
}

export default Features;