// components/sections/services/CustomDev.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

function CustomDev() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-purple-400 mb-6">¿Necesitas algo más específico?</h2>
          <p className="text-xl text-gray-300 mb-8">
            También desarrollamos software especializado. Si el requerimiento es similar a nuestras soluciones estándar, 
            lo haremos sin costo adicional. ¡Nos adaptamos a ti!
          </p>
          <motion.a 
            href="/contact" 
            className="inline-flex items-center bg-purple-600 text-white font-bold py-3 px-8 rounded-full hover:bg-purple-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hablemos de tu proyecto
            <ChevronRight className="ml-2 h-5 w-5" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default CustomDev;