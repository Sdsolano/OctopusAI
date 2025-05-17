// components/sections/about/Values.jsx
import React from 'react';
import { motion } from 'framer-motion';

function Values() {
  const values = [
    {
      title: "Innovación",
      description: "Buscamos constantemente nuevas formas de mejorar y expandir nuestras soluciones."
    },
    {
      title: "Excelencia",
      description: "Nos comprometemos con la calidad superior en cada aspecto de nuestro trabajo."
    },
    {
      title: "Simplicidad",
      description: "Creamos tecnología avanzada que es sorprendentemente fácil de usar."
    },
    {
      title: "Resultados",
      description: "Nos enfocamos en generar un impacto real y medible para nuestros clientes."
    }
  ];

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-purple-400 mb-12">Nuestros Valores</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <motion.div 
            key={index}
            className="bg-gray-800 p-6 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-purple-300 mb-3">{value.title}</h3>
            <p className="text-gray-400">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Values;