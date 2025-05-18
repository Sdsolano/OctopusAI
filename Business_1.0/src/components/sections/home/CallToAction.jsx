// components/sections/home/CallToAction.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, MessageCircle, Bot, Star } from 'lucide-react';
import Button from '../../ui/Button';

function CallToAction() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 z-0"></div>
      
      {/* Patrón de fondo */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20 z-0"></div>
      
      {/* Elementos decorativos */}
      <motion.div 
        className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 rounded-full bg-purple-600/20 filter blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 5, 0],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 rounded-full bg-indigo-500/20 filter blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, -5, 0],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      ></motion.div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Contenido principal */}
          <div className="lg:w-2/3 lg:pr-12 mb-10 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Badge */}
              <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full py-1 px-4 mb-6">
                <Star className="w-4 h-4 text-yellow-300 mr-2" fill="currentColor" />
                <span className="text-gray-100 text-sm font-medium">Soluciones a medida</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Asistentes IA <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-purple-300">personalizados</span> para tu empresa
              </h2>
              
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
                Diseñamos cada asistente específicamente para tu negocio, integrando tu identidad de marca, conocimiento de productos y flujos de atención únicos.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  { 
                    icon: Bot, 
                    title: "Personalización total", 
                    desc: "Adaptado a la identidad y valores de tu marca" 
                  },
                  { 
                    icon: MessageCircle, 
                    title: "Conversaciones naturales", 
                    desc: "Comunicación fluida y humana con tus clientes" 
                  },
                  { 
                    icon: Cpu, 
                    title: "Aprendizaje continuo", 
                    desc: "Mejora constantemente basado en interacciones reales" 
                  }
                ].map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="bg-white/10 rounded-lg p-2 mr-4">
                        <Icon className="h-5 w-5 text-purple-300" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">{feature.title}</h3>
                        <p className="text-gray-300 text-sm">{feature.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button.Action to="/contact">
                  Solicita tu demo
                </Button.Action>
                
                <Link to="/services" className="inline-flex items-center justify-center border-2 border-white/30 bg-white/5 backdrop-blur-sm text-white font-medium py-3 px-6 rounded-xl hover:bg-white/10 transition-colors duration-300">
                  <span>Ver todas las soluciones</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>
          
          {/* Tarjeta flotante */}
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative mx-auto max-w-sm">
              {/* Efecto de brillo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl blur-md opacity-70"></div>
              
              <div className="relative bg-gray-900 border border-gray-800 p-6 rounded-xl shadow-2xl">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-2 rounded-lg mr-3">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Asistente Personalizado</h3>
                </div>
                
                <p className="text-gray-300 mb-5">
                  "Cada asistente Octopus es único como tu empresa. No usamos plantillas genéricas, sino que construimos una solución adaptada a tus necesidades específicas."
                </p>
                
                <div className="border-t border-gray-800 pt-5">
                  <div className="flex items-center mb-2">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-300 text-sm">Conocimiento específico de tu industria</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-300 text-sm">Integración con tus sistemas actuales</span>
                  </div>
                  <div className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-300 text-sm">Voz y tono alineados con tu marca</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Icono de checkmark personalizado
const CheckIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

export default CallToAction;