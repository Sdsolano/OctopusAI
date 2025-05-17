// components/sections/home/CallToAction.jsx
import React from 'react';
import { motion } from 'framer-motion';

function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">¿Listo para transformar tu negocio?</h2>
        <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
          Únete a las empresas que han aumentado sus ventas y mejorado su atención al cliente con nuestras soluciones de IA.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <motion.a
            href="/contact"
            className="bg-white text-purple-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contáctanos
          </motion.a>
          <motion.a
            href="/pricing"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver planes
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;