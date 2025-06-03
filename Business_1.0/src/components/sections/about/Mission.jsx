// components/sections/about/Mission.jsx - Completamente modernizado
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Sparkles, 
  Zap, 
  Globe, 
  Users, 
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Brain,
  MessageSquare,
  Clock,
  Star,
  Rocket,
  Heart
} from 'lucide-react';

function Mission() {
  // Badge component para la sección
  const SectionBadge = ({ children, icon: Icon }) => (
    <motion.div 
      className="inline-flex items-center bg-purple-900/30 border border-purple-500/30 rounded-full px-4 py-2 text-sm font-medium text-purple-300 backdrop-blur-sm"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {Icon && <Icon className="h-4 w-4 mr-2 text-purple-400" />}
      {children}
    </motion.div>
  );

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Elementos decorativos de fondo espectaculares */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Círculos animados */}
        <motion.div 
          className="absolute top-20 -left-40 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div 
          className="absolute bottom-20 -right-40 w-80 h-80 bg-indigo-500/10 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -10, 0],
            opacity: [0.08, 0.15, 0.08]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        />
        
        {/* Patrón de misión */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0ibWlzc2lvbi1wYXR0ZXJuIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+PHBhdGggZD0iTTEwIDEwaDgwdjgwSDE0eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOTMzM2VhIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIi8+PHBhdGggZD0iTTUwIDIwdjYwTTIwIDUwaDYwIiBzdHJva2U9IiM2MzY2ZjEiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjbWlzc2lvbi1wYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-20" />
        
        {/* Estrellas flotantes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.6, 0.2],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          >
            <Star className="h-4 w-4 text-purple-400/30" fill="currentColor" />
          </motion.div>
        ))}
      </div>

      {/* Líneas decorativas */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionBadge icon={Target}>Nuestro propósito</SectionBadge>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
                Nuestra Misión
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Democratizar el acceso a la inteligencia artificial conversacional para empresas de todos los tamaños
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contenido principal mejorado */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Misión principal */}
            <div className="relative">
              {/* Glow effect sutil */}
              <motion.div 
                className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-2xl blur-lg opacity-50"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <div className="relative bg-gray-800/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
                <div className="flex items-center mb-6">
                  <motion.div 
                    className="bg-gradient-to-br from-purple-600 to-indigo-600 p-4 rounded-xl mr-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Heart className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white">El corazón de Octopus AI</h3>
                </div>
                
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  Creemos firmemente que la automatización inteligente es la clave para que las empresas 
                  puedan <span className="text-purple-400 font-semibold">escalar su atención al cliente 
                  sin sacrificar calidad ni personalización</span>.
                </p>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  Nuestro objetivo es que cualquier empresa, desde una startup hasta una corporación, 
                  pueda ofrecer una experiencia excepcional a sus clientes, 
                  <span className="text-purple-400 font-semibold"> las 24 horas del día, los 365 días del año</span>.
                </p>
              </div>
            </div>

            {/* Valores clave */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Brain,
                  title: "Inteligencia",
                  description: "IA que realmente entiende",
                  color: "from-purple-500 to-violet-600"
                },
                {
                  icon: Zap,
                  title: "Eficiencia",
                  description: "Resultados desde el día 1",
                  color: "from-blue-500 to-indigo-600"
                },
                {
                  icon: Users,
                  title: "Humanidad",
                  description: "Tecnología con toque humano",
                  color: "from-green-500 to-emerald-600"
                },
                {
                  icon: Globe,
                  title: "Accesibilidad",
                  description: "Para empresas de cualquier tamaño",
                  color: "from-pink-500 to-rose-600"
                }
              ].map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    className="relative group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    {/* Glow en hover */}
                    <motion.div 
                      className={`absolute -inset-1 bg-gradient-to-r ${value.color} rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                    />
                    
                    <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 group-hover:border-purple-500/50 transition-all duration-300">
                      <motion.div 
                        className={`bg-gradient-to-r ${value.color} p-3 rounded-lg mb-3 w-fit`}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon className="h-5 w-5 text-white" />
                      </motion.div>
                      <h4 className="font-bold text-white mb-1">{value.title}</h4>
                      <p className="text-gray-400 text-sm">{value.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Visual/Image section modernizada */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Efecto de brillo exterior */}
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 via-indigo-500/20 to-purple-600/20 rounded-3xl blur-2xl opacity-40"
                animate={{ 
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* Card principal con stats */}
              <div className="relative bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 overflow-hidden">
                {/* Patrón decorativo */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full" />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-8 text-center">
                    El impacto de nuestra misión
                  </h3>
                  
                  <div className="space-y-6">
                    {[
                      {
                        icon: MessageSquare,
                        metric: "+1M",
                        label: "Conversaciones automatizadas",
                        description: "Cada mes ayudamos a procesar",
                        color: "from-green-500 to-emerald-600"
                      },
                      {
                        icon: Clock,
                        metric: "95%",
                        label: "Reducción en tiempo de respuesta",
                        description: "Respuestas instantáneas vs horas de espera",
                        color: "from-blue-500 to-indigo-600"
                      },
                      {
                        icon: TrendingUp,
                        metric: "+500",
                        label: "Empresas transformadas",
                        description: "Y seguimos creciendo cada día",
                        color: "from-purple-500 to-violet-600"
                      }
                    ].map((stat, index) => {
                      const Icon = stat.icon;
                      return (
                        <motion.div
                          key={index}
                          className="flex items-center bg-gray-700/30 rounded-xl p-4"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ x: 5 }}
                        >
                          <motion.div 
                            className={`bg-gradient-to-r ${stat.color} p-3 rounded-lg mr-4 flex-shrink-0`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <Icon className="h-6 w-6 text-white" />
                          </motion.div>
                          
                          <div>
                            <div className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-1`}>
                              {stat.metric}
                            </div>
                            <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
                            <div className="text-gray-400 text-xs">{stat.description}</div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Quote flotante */}
            <motion.div 
              className="absolute -bottom-8 -left-8 bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-2xl shadow-2xl max-w-sm hidden lg:block"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              animate={{ 
                y: [0, -5, 0],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="flex items-start">
                <Sparkles className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-medium mb-2">
                    "Nuestra misión es simple: hacer que la IA sea accesible para todos"
                  </p>
                  <p className="text-xs opacity-80">- Fundadores Octopus AI</p>
                </div>
              </div>
              
              {/* Flecha del speech bubble */}
              <div className="absolute top-full right-8 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-6 border-t-purple-600"></div>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-purple-900/30 via-gray-800/50 to-indigo-900/30 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center">
              <Rocket className="h-6 w-6 mr-3 text-purple-400" />
              Únete a nuestra misión
            </h3>
            <p className="text-gray-300 mb-6">
              Forma parte de la revolución de la comunicación empresarial. 
              Juntos podemos hacer que tu negocio sea más eficiente y exitoso.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Ser parte del cambio</span>
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
              </motion.a>
              
              <motion.a
                href="/services"
                className="inline-flex items-center justify-center border-2 border-purple-500/40 bg-purple-900/20 text-purple-300 font-bold py-4 px-8 rounded-xl hover:bg-purple-900/40 hover:border-purple-500/60 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver nuestras soluciones
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Mission;