// components/sections/home/CustomAgents.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Building, Heart, ShoppingBag, Users, BookOpen, Utensils, Home, ArrowRight } from 'lucide-react';
import Button from '../../ui/Button';

function CustomAgents() {
  const [activeIndustry, setActiveIndustry] = useState(0);
  
  const industries = [
    {
      name: "Empresas de Servicios",
      icon: Briefcase,
      color: "from-blue-500 to-indigo-700",
      examples: ["Consultoras", "Agencias de marketing", "Servicios legales"],
      benefits: [
        "Gestión de citas con prospectos",
        "Seguimiento automático de clientes",
        "Respuesta a consultas frecuentes 24/7"
      ]
    },
    {
      name: "Bienes Raíces",
      icon: Building,
      color: "from-emerald-500 to-green-700",
      examples: ["Inmobiliarias", "Corredores independientes", "Administración de propiedades"],
      benefits: [
        "Calificación automática de prospectos",
        "Agendamiento de visitas a propiedades",
        "Envío de información sobre inmuebles"
      ]
    },
    {
      name: "Salud y Bienestar",
      icon: Heart,
      color: "from-rose-500 to-pink-700",
      examples: ["Clínicas médicas", "Consultorios dentales", "Centros de estética"],
      benefits: [
        "Recordatorios de citas médicas",
        "Gestión de cancelaciones y reagendamientos",
        "Seguimiento post-tratamiento"
      ]
    },
    {
      name: "Retail",
      icon: ShoppingBag,
      color: "from-amber-500 to-orange-700",
      examples: ["Tiendas online", "Boutiques", "Marketplaces"],
      benefits: [
        "Atención al cliente automatizada",
        "Seguimiento de pedidos y envíos",
        "Recomendación de productos"
      ]
    },
    {
      name: "Educación",
      icon: BookOpen,
      color: "from-violet-500 to-purple-700",
      examples: ["Academias", "Colegios", "Universidades"],
      benefits: [
        "Consultas sobre programas académicos",
        "Gestión de inscripciones",
        "Resolución de dudas administrativas"
      ]
    },
    {
      name: "Restaurantes",
      icon: Utensils,
      color: "from-red-500 to-rose-700",
      examples: ["Restaurantes", "Cafeterías", "Servicios de catering"],
      benefits: [
        "Reservas automatizadas",
        "Pedidos para llevar o delivery",
        "Consultas sobre el menú"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const activeIndustryVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", damping: 15 }
    },
    exit: { 
      opacity: 0, 
      x: -40,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-600/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-indigo-500/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            className="inline-block bg-purple-900/30 border border-purple-500/30 rounded-full px-4 py-1 text-sm font-medium text-purple-300 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Soluciones a la medida
          </motion.span>
          
          <motion.h2 
            className="text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Asistentes IA adaptados a cada industria
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Creamos soluciones personalizadas para cada sector, con conocimientos específicos y flujos adaptados a las necesidades de tu negocio.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Selector de industrias */}
          <motion.div 
            className="lg:w-1/3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                const isActive = activeIndustry === index;
                
                return (
                  <motion.button
                    key={index}
                    className={`relative p-4 rounded-xl transition-all duration-300 overflow-hidden flex flex-col items-center text-center ${
                      isActive 
                        ? 'bg-gradient-to-br ' + industry.color + ' text-white shadow-xl' 
                        : 'bg-gray-800 hover:bg-gray-750 text-gray-300 border border-gray-700 hover:border-purple-500/50'
                    }`}
                    onClick={() => setActiveIndustry(index)}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Fondo con patrón */}
                    {isActive && (
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2Nmg2di02aC02em02IDZ2Nmg2di02aC02em0tMTIgMGg2djZoLTZ2LTZ6bTEyIDBoNnY2aC02di02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
                    )}
                    
                    <Icon className={`h-8 w-8 mb-2 ${isActive ? 'text-white' : 'text-purple-400'}`} />
                    <span className="text-sm font-medium">{industry.name}</span>
                    
                    {/* Indicador activo */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white"></div>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Detalles de la industria seleccionada */}
          <div className="lg:w-2/3 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry}
                variants={activeIndustryVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="h-full"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-6">
                    <div className={`bg-gradient-to-br ${industries[activeIndustry].color} p-3 rounded-lg mr-4`}>
                      {React.createElement(industries[activeIndustry].icon, { className: "h-6 w-6 text-white" })}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{industries[activeIndustry].name}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-8">
                    Nuestros asistentes para <strong>{industries[activeIndustry].name.toLowerCase()}</strong> están diseñados para optimizar la comunicación, automatizar tareas repetitivas y mejorar la experiencia de tus clientes.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 flex-grow">
                    <div>
                      <h4 className="text-lg font-semibold text-purple-300 mb-3">Ideal para</h4>
                      <ul className="space-y-2">
                        {industries[activeIndustry].examples.map((example, i) => (
                          <li key={i} className="flex items-center text-gray-300">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-purple-300 mb-3">Beneficios clave</h4>
                      <ul className="space-y-3">
                        {industries[activeIndustry].benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start text-gray-300">
                            <svg className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-4">
                    <Button.Action to="/contact">
                      Solicitar solución para mi negocio
                    </Button.Action>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomAgents;