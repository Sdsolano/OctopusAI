// components/sections/services/CustomDev.jsx - Modernizado
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  Code2, 
  Cog, 
  Rocket, 
  Sparkles, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Lightbulb,
  Target,
  Puzzle
} from 'lucide-react';

function CustomDev() {
  // Servicios personalizados
  const customServices = [
    {
      icon: Code2,
      title: "Desarrollo personalizado",
      description: "Soluciones 100% adaptadas a tu flujo de trabajo específico",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Puzzle,
      title: "Integraciones complejas",
      description: "Conectamos con cualquier API o sistema que ya uses",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Target,
      title: "Objetivos específicos",
      description: "Diseñamos la IA para lograr exactamente lo que necesitas",
      color: "from-green-500 to-emerald-600"
    }
  ];

  // Ejemplos de casos especiales
  const customExamples = [
    "Integración con ERP empresarial",
    "Bot multiidioma para soporte global",
    "Automatización de procesos internos",
    "IA para análisis de documentos",
    "Sistemas de notificaciones avanzadas",
    "Dashboards personalizados en tiempo real"
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 via-purple-900/10 to-gray-900 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 -left-20 w-72 h-72 bg-purple-600/10 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div 
          className="absolute bottom-20 -right-20 w-80 h-80 bg-indigo-500/10 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        />
        
        {/* Patrón de código decorativo */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iY29kZSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPjx0ZXh0IHg9IjEwIiB5PSIyMCIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSI4IiBmaWxsPSIjOTMzM2VhIiBmaWxsLW9wYWNpdHk9IjAuMDMiPnt9ICgpID0+PC90ZXh0Pjx0ZXh0IHg9IjIwIiB5PSI0MCIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSI4IiBmaWxsPSIjOTMzM2VhIiBmaWxsLW9wYWNpdHk9IjAuMDMiPmlmIChjb25kaXRpb24pPC90ZXh0Pjx0ZXh0IHg9IjUiIHk9IjYwIiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjgiIGZpbGw9IiM5MzMzZWEiIGZpbGwtb3BhY2l0eT0iMC4wMyI+Y29uc3QgYWk8L3RleHQ+PHRleHQgeD0iMzAiIHk9IjgwIiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjgiIGZpbGw9IiM5MzMzZWEiIGZpbGwtb3BhY2l0eT0iMC4wMyI+YXN5bmMvYXdhaXQ8L3RleHQ+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0idXJsKCNjb2RlKSIvPjwvc3ZnPg==')] opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center bg-purple-900/30 border border-purple-500/30 rounded-full px-4 py-2 text-sm font-medium text-purple-300 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Lightbulb className="h-4 w-4 mr-2 text-purple-400" />
              Desarrollo personalizado
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">¿Necesitas algo</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
                más específico?
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              También desarrollamos software especializado y soluciones únicas. 
              Si el requerimiento es similar a nuestras soluciones estándar, 
              <span className="text-purple-400 font-semibold"> lo haremos sin costo adicional</span>. 
              ¡Nos adaptamos completamente a ti!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Servicios personalizados */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Sparkles className="h-6 w-6 mr-3 text-purple-400" />
                Servicios personalizados
              </h3>
              
              <div className="space-y-6">
                {customServices.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-start group cursor-pointer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 10 }}
                    >
                      <motion.div 
                        className={`bg-gradient-to-br ${service.color} p-3 rounded-xl mr-4 flex-shrink-0`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </motion.div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                          {service.title}
                        </h4>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Ejemplos y CTA */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Card principal */}
              <div className="relative">
                {/* Efecto de brillo */}
                <motion.div 
                  className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 rounded-2xl blur opacity-20"
                  animate={{ opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <div className="relative bg-gray-800/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
                  <div className="flex items-center mb-6">
                    <motion.div 
                      className="bg-gradient-to-br from-purple-600 to-indigo-600 p-3 rounded-xl mr-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <Rocket className="h-6 w-6 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white">
                      Casos especiales que hemos resuelto
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-3 mb-8">
                    {customExamples.map((example, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center group"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                      >
                        <CheckCircle2 className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm">
                          {example}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* CTA mejorado */}
                  <div className="text-center">
                    <motion.a 
                      href="/contact" 
                      className="inline-flex items-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-purple-600/25 transition-all duration-300 relative overflow-hidden group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Efecto de brillo en hover */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      
                      <span className="relative z-10 flex items-center">
                        <Cog className="h-5 w-5 mr-2" />
                        Hablemos de tu proyecto
                        
                        <motion.div
                          className="ml-2"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ 
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut"
                          }}
                        >
                          <ArrowRight className="h-5 w-5" />
                        </motion.div>
                      </span>
                    </motion.a>
                    
                    <p className="text-sm text-gray-400 mt-4">
                      Consulta gratuita • Sin compromiso • Respuesta en 24h
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sección de beneficios adicional */}
          <motion.div 
            className="text-center bg-gradient-to-r from-purple-900/20 via-gray-800/30 to-indigo-900/20 rounded-2xl p-8 border border-purple-500/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              ¿Por qué elegir desarrollo personalizado con Octopus AI?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Implementación rápida",
                  description: "De idea a producción en tiempo récord"
                },
                {
                  icon: Target,
                  title: "100% adaptado",
                  description: "Diseñado específicamente para tu negocio"
                },
                {
                  icon: CheckCircle2,
                  title: "Sin costos ocultos",
                  description: "Precio fijo acordado desde el inicio"
                }
              ].map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <motion.div 
                      className="bg-gradient-to-br from-purple-600 to-indigo-600 p-4 rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CustomDev;