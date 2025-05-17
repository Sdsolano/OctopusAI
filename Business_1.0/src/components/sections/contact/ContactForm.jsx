// components/sections/contact/ContactForm.jsx
import React from 'react';
import { motion } from 'framer-motion';

function ContactForm() {
  return (
    <motion.div 
      className="bg-gray-800 rounded-xl p-8 shadow-xl"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-bold text-purple-400 mb-6">Envíanos un mensaje</h2>
      
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-300 mb-2">Nombre</label>
            <input 
              type="text" 
              className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-purple-500 transition duration-300"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Correo electrónico</label>
            <input 
              type="email" 
              className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-purple-500 transition duration-300"
              placeholder="Tu email"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-gray-300 mb-2">Asunto</label>
          <input 
            type="text" 
            className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-purple-500 transition duration-300"
            placeholder="Asunto de tu mensaje"
          />
        </div>
        
        <div>
          <label className="block text-gray-300 mb-2">Mensaje</label>
          <textarea 
            className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white h-40 focus:outline-none focus:border-purple-500 transition duration-300"
            placeholder="¿Cómo podemos ayudarte?"
          ></textarea>
        </div>
        
        <motion.button 
          type="submit"
          className="bg-purple-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-purple-700 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Enviar mensaje
        </motion.button>
      </form>
    </motion.div>
  );
}

export default ContactForm;