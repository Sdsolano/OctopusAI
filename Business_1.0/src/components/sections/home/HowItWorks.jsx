// components/sections/home/HowItWorks.jsx
import React from 'react';
import { motion } from 'framer-motion';

function HowItWorks() {
  const steps = [
    {
      title: "Cuéntanos qué necesitas",
      description: "Nos contactas contándonos sobre tu negocio, los servicios que ofreces y cómo quieres atender a tus clientes."
    },
    {
      title: "Asignamos un nuevo número",
      description: "Para ofrecerte un servicio dedicado y profesional, te proporcionamos un número exclusivo que se conecta a tu asistente inteligente."
    },
    {
      title: "Diseñamos el flujo ideal",
      description: "Creamos un asistente personalizado que responde consultas, agenda citas y da soporte en cualquier idioma que el cliente utilice."
    },
    {
      title: "Conexión con tus canales",
      description: "Además de WhatsApp, podemos conectar tu asistente a Telegram y Gmail para que no pierdas ninguna oportunidad."
    },
    {
      title: "Lanzamiento y mejora continua",
      description: "Ponemos el asistente en marcha y realizamos monitoreo y ajustes para que siempre esté respondiendo de la mejor forma posible."
    }
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-purple-400 mb-16">¿Cómo funciona Octopus AI?</h2>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-purple-700 hidden md:block"></div>
          
          {/* Process steps */}
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className={`flex items-center mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                <h3 className="text-2xl font-bold text-purple-400 mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
              
              <div className="relative flex items-center justify-center my-8 md:my-0">
                <div className="bg-purple-900 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg z-10">
                  {index + 1}
                </div>
                <div className="absolute w-20 h-20 bg-purple-500 bg-opacity-20 rounded-full animate-pulse"></div>
              </div>
              
              <div className="flex-1"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;