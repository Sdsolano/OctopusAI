// components/sections/home/HowItWorks.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Headphones, Settings, Share2, TrendingUp } from 'lucide-react';

function HowItWorks({ showTitle = true }) {
  const steps = [
    {
      title: "Cuéntanos qué necesitas",
      description: "Nos contactas contándonos sobre tu negocio, los servicios que ofreces y cómo quieres atender a tus clientes.",
      icon: MessageCircle
    },
    {
      title: "Diseñamos tu asistente personalizado",
      description: "Creamos un asistente exclusivo que refleja el tono, valores y objetivos específicos de tu empresa.",
      icon: Settings
    },
    {
      title: "Configuramos el flujo ideal",
      description: "Desarrollamos la inteligencia artificial para responder consultas, agendar citas y dar soporte en cualquier idioma.",
      icon: Headphones
    },
    {
      title: "Integración con tus canales",
      description: "Conectamos tu asistente a WhatsApp, Telegram, Gmail y otros canales que necesites para una experiencia omnicanal.",
      icon: Share2
    },
    {
      title: "Lanzamiento y optimización continua",
      description: "Ponemos el asistente en marcha y realizamos mejoras constantes basadas en datos reales de interacción.",
      icon: TrendingUp
    }
  ];

  return (
    <div className="relative">
      {showTitle && (
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-purple-400 mb-6">¿Cómo funciona Octopus AI?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Un proceso simple para transformar la comunicación de tu negocio con asistentes hechos a medida
          </p>
        </div>
      )}
      
      {/* Línea conectora (solo para pantallas medianas y grandes) */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 via-purple-500 to-indigo-600 hidden md:block"></div>
      
      {/* Pasos del proceso */}
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <motion.div 
            key={index}
            className={`flex items-center mb-20 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
            
            <div className="relative flex items-center justify-center my-8 md:my-0">
              <motion.div 
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg z-10"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon className="h-8 w-8" />
              </motion.div>
              
              {/* Efecto de pulso */}
              <div className="absolute w-24 h-24 rounded-full opacity-70 z-0">
                <motion.div 
                  className="absolute inset-0 rounded-full bg-purple-600/20"
                  animate={{ 
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </div>
              
              {/* Círculo numerador */}
              <div className="absolute -top-5 -right-5 bg-gray-900 border border-purple-500 text-purple-400 h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold">
                {index + 1}
              </div>
            </div>
            
            <div className="flex-1"></div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default HowItWorks;