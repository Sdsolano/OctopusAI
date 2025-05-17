// components/sections/about/Mission.jsx
import React from 'react';
import { motion } from 'framer-motion';

function Mission() {
  return (
    <div className="flex flex-col md:flex-row items-center mb-24">
      <motion.div 
        className="md:w-1/2 mb-12 md:mb-0 md:pr-12"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-purple-400 mb-6">Nuestra Misión</h2>
        <p className="text-gray-300 text-lg mb-6">
          En Octopus AI, nuestra misión es transformar la manera en que los negocios se comunican con sus clientes 
          utilizando inteligencia artificial avanzada. Creemos que la automatización inteligente es la clave para 
          que las empresas puedan escalar su atención al cliente sin sacrificar calidad ni personalización.
        </p>
        <p className="text-gray-300 text-lg">
          Buscamos democratizar el acceso a la IA conversacional, permitiendo que negocios de todos los tamaños 
          ofrezcan una experiencia excepcional a sus clientes, las 24 horas del día, los 365 días del año.
        </p>
      </motion.div>
      <motion.div 
        className="md:w-1/2"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <img src="https://picsum.photos/604/400" alt="Nuestra Misión" className="rounded-xl shadow-2xl" />
      </motion.div>
    </div>
  );
}

export default Mission;