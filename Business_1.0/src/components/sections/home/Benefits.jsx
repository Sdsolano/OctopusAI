// components/sections/home/Benefits.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Zap, Settings, Globe, CheckCircle, Users, Award, TrendingUp } from 'lucide-react';

function Benefits({ showTitle = true }) {
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
      icon: Award, 
      title: "Personalización completa", 
      description: "Cada asistente se adapta perfectamente a tu marca, industria y objetivos específicos, creando una extensión natural de tu negocio." 
    },
    { 
      icon: TrendingUp, 
      title: "Escalabilidad sin límite", 
      description: "Atiende a 10, 100 o 1,000 clientes al mismo tiempo sin necesidad de contratar más personal." 
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="w-full"
    >
      {showTitle && (
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-purple-400 mb-6">Beneficios</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Optimiza tu negocio con nuestras soluciones de inteligencia artificial hechas a la medida
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map(({ icon: Icon, title, description }, index) => (
          <motion.div 
            key={title}
            className="group p-6 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 relative overflow-hidden"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            {/* Efecto de gradiente en hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="flex items-start relative z-10">
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-3 rounded-lg mr-4 flex-shrink-0">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">{title}</h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Benefits;