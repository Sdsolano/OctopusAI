// components/sections/features/TechFeatures.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Zap, Settings, Clock, MessageSquare, Database, Octagon } from 'lucide-react';

function TechFeatures() {
  const techFeatures = [
    {
      title: "API Robusta",
      description: "Integración sencilla con tus sistemas existentes mediante nuestra API RESTful.",
      icon: 'Code'
    },
    {
      title: "Webhooks Personalizables",
      description: "Configura notificaciones y acciones basadas en eventos específicos.",
      icon: 'Webhook'
    },
    {
      title: "Procesamiento de Lenguaje Natural",
      description: "Tecnología avanzada de NLP para comprender y responder como un humano.",
      icon: 'Brain'
    },
    {
      title: "Monitoreo 24/7",
      description: "Supervisión constante y alertas proactivas para garantizar el funcionamiento óptimo.",
      icon: 'Monitoring'
    },
    {
      title: "Respuesta a Multimedia",
      description: "Capacidad para procesar y responder a imágenes, audio y documentos.",
      icon: 'Media'
    },
    {
      title: "Backup Automático",
      description: "Copias de seguridad diarias de todas las conversaciones y configuraciones.",
      icon: 'Backup'
    }
  ];

  // Simple icon placeholder using lucide icons
  const IconComponent = ({ icon }) => {
    switch (icon) {
      case 'Code': return <Briefcase className="h-6 w-6 text-purple-300" />;
      case 'Webhook': return <Zap className="h-6 w-6 text-purple-300" />;
      case 'Brain': return <Settings className="h-6 w-6 text-purple-300" />;
      case 'Monitoring': return <Clock className="h-6 w-6 text-purple-300" />;
      case 'Media': return <MessageSquare className="h-6 w-6 text-purple-300" />;
      case 'Backup': return <Database className="h-6 w-6 text-purple-300" />;
      default: return <Octagon className="h-6 w-6 text-purple-300" />;
    }
  };

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-purple-400 mb-12">Características Técnicas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techFeatures.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-gray-900 rounded-lg p-6 border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-purple-900 bg-opacity-30 p-2 rounded mr-3">
                  <IconComponent icon={feature.icon} />
                </div>
                <h3 className="text-xl font-semibold text-purple-300">{feature.title}</h3>
              </div>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechFeatures;