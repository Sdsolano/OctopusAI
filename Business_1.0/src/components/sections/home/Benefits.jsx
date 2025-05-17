// components/sections/home/Benefits.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Zap, Settings, Globe, CheckCircle, Users } from 'lucide-react';

function Benefits() {
  const benefits = [
    { 
      icon: Clock, 
      title: "Atención inmediata 24/7", 
      description: "Nunca más pierdas un cliente por no responder a tiempo. Nuestro asistente responde al instante, todos los días del año." 
    },
    { 
      icon: Zap, 
      title: "Aumento en ventas", 
      description: "Una respuesta rápida y personalizada mejora la experiencia del cliente y multiplica tus oportunidades de cerrar ventas." 
    },
    { 
      icon: Settings, 
      title: "Automatización de tareas", 
      description: "Liberamos tu tiempo eliminando tareas manuales como agendar citas, responder preguntas frecuentes o confirmar servicios." 
    },
    { 
      icon: Globe, 
      title: "Comunicación multilingüe", 
      description: "Nuestro asistente detecta el idioma del cliente y responde de forma natural en el mismo idioma, sin importar de dónde escriba." 
    },
    { 
      icon: CheckCircle, 
      title: "Mayor profesionalismo", 
      description: "Cada mensaje es claro, cortés y alineado a la identidad de tu negocio, sin errores ni tiempos de espera." 
    },
    { 
      icon: Users, 
      title: "Escalabilidad sin límite", 
      description: "Atiende a 10, 100 o 1,000 clientes al mismo tiempo sin necesidad de contratar más personal." 
    },
  ];

  return (
    <section className="py-24 bg-gray-800 bg-opacity-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-purple-400 mb-16">Beneficios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map(({ icon: Icon, title, description }, index) => (
            <motion.div 
              key={title}
              className="p-6 bg-gray-800 rounded-lg border border-purple-900 hover:border-purple-500 transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-start mb-4">
                <div className="bg-purple-900 p-3 rounded-lg mr-4">
                  <Icon className="h-6 w-6 text-purple-300" />
                </div>
                <h3 className="text-xl font-semibold text-purple-300">{title}</h3>
              </div>
              <p className="text-gray-400 ml-16">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;