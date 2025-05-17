// components/sections/home/Features.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Calendar, Mail } from 'lucide-react';
import AnimatedIcon from '../../ui/AnimatedIcon';

function Features() {
  const features = [
    { 
      icon: MessageSquare, 
      title: "WhatsApp & Telegram AI", 
      description: "Asistente 24/7 que atiende consultas, agenda citas y guía a tus clientes" 
    },
    { 
      icon: Calendar, 
      title: "Gestión de Citas", 
      description: "Sistema automatizado de reservas y reprogramaciones" 
    },
    { 
      icon: Mail, 
      title: "Automatización Gmail", 
      description: "Gestión inteligente de correos con IA personalizada" 
    }
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-purple-400 mb-16">Nuestras Soluciones</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map(({ icon: Icon, title, description }, index) => (
            <motion.div 
              key={title}
              className="p-8 bg-gray-800 rounded-xl hover:shadow-xl hover:shadow-purple-900/20 hover:cursor-pointer transition duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover="hover"
            >
              <AnimatedIcon Icon={Icon} size={16} color="text-purple-400" />
              <h3 className="text-2xl font-semibold text-center mb-4 text-purple-400">{title}</h3>
              <p className="text-gray-300 text-center">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;