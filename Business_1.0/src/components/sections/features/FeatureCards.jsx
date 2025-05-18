// components/sections/features/FeatureCards.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, 
  Zap, 
  Globe, 
  Cloud, 
  MessageSquare, 
  Database, 
  Shield, 
  Users,
  ChevronRight,
  Check
} from 'lucide-react';

function FeatureCards() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      title: "Personalización Avanzada",
      description: "Adaptamos cada asistente virtual para que refleje perfectamente la personalidad y valores de tu marca.",
      details: "Nuestros asistentes pueden aprender tu tono de voz, términos específicos de tu industria, y preferencias de estilo de comunicación. Cada interacción será única y perfectamente alineada con la identidad de tu empresa.",
      icon: Settings,
      color: "from-blue-500 to-sky-700"
    },
    {
      title: "Reconocimiento de Intención",
      description: "Nuestros asistentes entienden lo que tus clientes quieren, incluso cuando no lo expresan claramente.",
      details: "Utilizando avanzados algoritmos de procesamiento de lenguaje natural, detectamos la intención real detrás de las preguntas, incluso cuando son imprecisas o contienen errores. Esto reduce la frustración del cliente y aumenta la tasa de resolución al primer contacto.",
      icon: Zap,
      color: "from-amber-500 to-orange-700"
    },
    {
      title: "Multi-idioma Nativo",
      description: "Comunicación fluida con tus clientes en cualquier idioma, detectando automáticamente su preferencia.",
      details: "Soporte para más de 30 idiomas con detección automática. Tu asistente puede cambiar de idioma en medio de una conversación sin perder contexto. Ideal para negocios con presencia internacional o en áreas con diversidad lingüística.",
      icon: Globe,
      color: "from-emerald-500 to-green-700"
    },
    {
      title: "Aprendizaje Continuo",
      description: "El sistema aprende de cada interacción para mejorar constantemente sus respuestas y eficacia.",
      details: "Utilizamos técnicas de aprendizaje automático para analizar patrones en las conversaciones, identificar brechas de conocimiento y mejorar automáticamente. Tu asistente será cada vez más eficiente con el tiempo, sin necesidad de intervención manual.",
      icon: Cloud,
      color: "from-indigo-500 to-blue-700"
    },
    {
      title: "Integración Omnicanal",
      description: "Conecta sin problemas WhatsApp, Telegram, Gmail y otras plataformas para una experiencia coherente.",
      details: "Centraliza todas tus comunicaciones en una plataforma unificada. Tu cliente puede comenzar una conversación en WhatsApp y continuarla por email sin perder contexto. Todos los canales sincronizados y con seguimiento integral.",
      icon: MessageSquare,
      color: "from-violet-500 to-purple-700"
    },
    {
      title: "Analytics en Tiempo Real",
      description: "Monitorea y analiza el rendimiento de tu asistente con métricas detalladas y reportes.",
      details: "Panel de control con métricas clave como tiempo de respuesta, tasa de resolución, satisfacción del cliente y volumen de conversaciones. Reportes automáticos semanales y alertas personalizables para mantenerte siempre informado.",
      icon: Database,
      color: "from-rose-500 to-red-700"
    },
    {
      title: "Seguridad de Datos",
      description: "Encriptación de extremo a extremo y cumplimiento total con regulaciones de privacidad.",
      details: "Infraestructura segura con encriptación AES-256, cumplimiento GDPR y LGPD, auditorías de seguridad regulares, y políticas estrictas de retención de datos. Tu información y la de tus clientes siempre protegida bajo los más altos estándares.",
      icon: Shield,
      color: "from-teal-500 to-emerald-700"
    },
    {
      title: "Escalabilidad Garantizada",
      description: "Desde pequeñas empresas hasta grandes corporaciones, nuestra plataforma crece contigo.",
      details: "Arquitectura en la nube que se adapta automáticamente a cualquier volumen de interacciones. Puedes pasar de 10 a 10,000 conversaciones diarias sin degradación del servicio. Ideal para negocios en crecimiento o con temporadas de alta demanda.",
      icon: Users,
      color: "from-fuchsia-500 to-pink-700"
    }
  ];

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({ 
      y: 0, 
      opacity: 1,
      transition: { 
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: { 
      y: -8,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { type: "spring", stiffness: 300 }
    }
  };

  const iconVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    hover: { 
      scale: 1.1,
      transition: { type: "spring", stiffness: 200 }
    }
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: { width: "2rem" },
    hover: { width: "3rem" }
  };

  const expandButtonVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
    hover: { x: 5 }
  };

  const detailsVariants = {
    closed: { 
      height: 0, 
      opacity: 0,
      transition: { 
        height: { duration: 0.3 },
        opacity: { duration: 0.2 }
      }
    },
    open: { 
      height: "auto", 
      opacity: 1,
      transition: { 
        height: { duration: 0.4 },
        opacity: { duration: 0.3, delay: 0.1 }
      }
    }
  };

  const handleCardClick = (index) => {
    setHoveredCard(hoveredCard === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        const isExpanded = hoveredCard === index;
        
        return (
          <motion.div 
            key={index}
            className="bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 h-full border border-gray-700 group"
            variants={cardVariants}
            custom={index}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, margin: "-50px" }}
            onClick={() => handleCardClick(index)}
          >
            <div 
              className={`relative px-6 pt-6 cursor-pointer ${isExpanded ? '' : 'pb-6'}`}
            >
              <div className="flex items-start">
                <motion.div 
                  className={`bg-gradient-to-br ${feature.color} rounded-lg p-3 flex items-center justify-center mr-4`}
                  variants={iconVariants}
                >
                  <Icon className="h-6 w-6 text-white" />
                </motion.div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-purple-300">{feature.title}</h3>
                    <motion.div
                      variants={expandButtonVariants}
                      animate={isExpanded ? { rotate: 90 } : { rotate: 0 }}
                      className="text-purple-400"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="h-0.5 bg-gradient-to-r from-purple-500 to-transparent my-2 w-8"
                    variants={lineVariants}
                  />
                  
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              </div>
            </div>
            
            <motion.div
              className="px-6 pb-6 overflow-hidden bg-gray-800"
              variants={detailsVariants}
              initial="closed"
              animate={isExpanded ? "open" : "closed"}
            >
              <div className="pt-4 border-t border-gray-700 mt-4">
                <p className="text-gray-400 text-sm mb-4">{feature.details}</p>
                <ul className="space-y-2">
                  {['Personalizable', 'Fácil integración', 'Soporte incluido'].map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-300">
                      <Check className="h-4 w-4 text-purple-400 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-4 text-sm text-purple-400 font-medium flex items-center"
                >
                  Conocer más
                  <ChevronRight className="h-4 w-4 ml-1" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default FeatureCards;