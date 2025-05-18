// components/sections/home/Features.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Calendar, Mail, Database, ArrowRight, ExternalLink } from 'lucide-react';
import Button from '../../ui/Button';

function Features() {
  // Características principales con datos mejorados
  const features = [
    { 
      icon: MessageSquare, 
      title: "WhatsApp & Telegram AI", 
      description: "Asistente 24/7 que atiende consultas, agenda citas y guía a tus clientes con comunicación natural.",
      color: "from-green-500 to-emerald-700",
      benefits: ["Respuestas instantáneas", "Detección de intenciones", "Conversación natural", "Integración con CRM"],
      path: "/services#whatsapp"
    },
    { 
      icon: Calendar, 
      title: "Gestión de Citas", 
      description: "Sistema automatizado de reservas y reprogramaciones que optimiza tu agenda y reduce cancelaciones.",
      color: "from-blue-500 to-indigo-700",
      benefits: ["Recordatorios automáticos", "Sincronización con calendario", "Reprogramación sin fricciones", "Confirmaciones personalizadas"],
      path: "/services#appointments"
    },
    { 
      icon: Mail, 
      title: "Automatización Gmail", 
      description: "Gestión inteligente de correos con IA personalizada para clasificar, responder y priorizar mensajes.",
      color: "from-purple-500 to-violet-700",
      benefits: ["Filtrado inteligente", "Respuestas automatizadas", "Seguimiento de leads", "Análisis de sentimiento"],
      path: "/services#gmail"
    },
    { 
      icon: Database, 
      title: "Excel Integration", 
      description: "Conecta tu asistente con hojas de cálculo para gestionar pedidos y mantener registros actualizados.",
      color: "from-rose-500 to-pink-700",
      benefits: ["Actualización en tiempo real", "Exportación de datos", "Captura estructurada", "Reportes automatizados"],
      path: "/services#excel"
    }
  ];

  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <motion.div 
      className="w-full overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          
          return (
            <motion.div 
              key={index}
              className="relative group"
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Fondo con efecto de brillo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <div className="relative bg-gray-800/80 backdrop-blur-md rounded-xl overflow-hidden border border-gray-700 group-hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col">
                {/* Barra de color superior */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${feature.color}`}></div>
                
                <div className="p-6 flex-grow">
                  {/* Encabezado con icono */}
                  <div className="flex items-start">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${feature.color} mr-4`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors duration-300">{feature.title}</h3>
                      <div className="h-1 w-10 bg-purple-500 rounded mb-3 group-hover:w-20 transition-all duration-300"></div>
                    </div>
                  </div>
                  
                  {/* Descripción */}
                  <p className="text-gray-300 mb-6 mt-4">{feature.description}</p>
                  
                  {/* Lista de beneficios */}
                  <div className="mb-6">
                    <h4 className="text-sm uppercase text-purple-400 font-semibold mb-3">Beneficios clave</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {feature.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center text-gray-300 text-sm">
                          <svg className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Footer con enlace */}
                <div className="p-4 border-t border-gray-700 mt-auto">
                  <Button.Link to={feature.path} className="text-purple-400 font-medium flex items-center justify-center w-full group">
                    <span>Conocer más sobre {feature.title}</span>
                    <motion.div 
                      className="ml-2" 
                      initial={{ x: 0 }} 
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
                
                {/* Efecto overlay en hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      <div className="mt-14 text-center">
        <Button.Action to="/services">
          Ver todas las soluciones
        </Button.Action>
      </div>
    </motion.div>
  );
}

export default Features;