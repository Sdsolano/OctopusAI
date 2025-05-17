// components/sections/features/FeatureCards.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Zap, Globe, Cloud, MessageSquare, Database, Shield, Users } from 'lucide-react';

function FeatureCards() {
  const features = [
    {
      title: "Personalización Avanzada",
      description: "Adaptamos cada asistente virtual para que refleje perfectamente la personalidad y valores de tu marca.",
      icon: Settings
    },
    {
      title: "Reconocimiento de Intención",
      description: "Nuestros asistentes entienden lo que tus clientes quieren, incluso cuando no lo expresan claramente.",
      icon: Zap
    },
    {
      title: "Multi-idioma Nativo",
      description: "Comunicación fluida con tus clientes en cualquier idioma, detectando automáticamente su preferencia.",
      icon: Globe
    },
    {
      title: "Aprendizaje Continuo",
      description: "El sistema aprende de cada interacción para mejorar constantemente sus respuestas y eficacia.",
      icon: Cloud
    },
    {
      title: "Integración Omnicanal",
      description: "Conecta sin problemas WhatsApp, Telegram, Gmail y otras plataformas para una experiencia coherente.",
      icon: MessageSquare
    },
    {
      title: "Analytics en Tiempo Real",
      description: "Monitorea y analiza el rendimiento de tu asistente con métricas detalladas y reportes.",
      icon: Database
    },
    {
      title: "Seguridad de Datos",
      description: "Encriptación de extremo a extremo y cumplimiento total con regulaciones de privacidad.",
      icon: Shield
    },
    {
      title: "Escalabilidad Garantizada",
      description: "Desde pequeñas empresas hasta grandes corporaciones, nuestra plataforma crece contigo.",
      icon: Users
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <motion.div 
            key={index}
            className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="bg-purple-900 rounded-lg p-3 inline-block mb-4">
              <Icon className="h-6 w-6 text-purple-300" />
            </div>
            <h3 className="text-2xl font-bold text-purple-400 mb-3">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}

export default FeatureCards;