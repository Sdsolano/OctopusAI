// components/sections/contact/ContactInfo.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare } from 'lucide-react';

function ContactInfo() {
  return (
    <motion.div 
      className="flex flex-col justify-between"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="bg-gray-800 rounded-xl p-8 shadow-xl mb-8">
        <h2 className="text-2xl font-bold text-purple-400 mb-6">Información de contacto</h2>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <Mail className="h-6 w-6 text-purple-400 mr-4 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-200 mb-1">Correo electrónico</h3>
              <p className="text-gray-400">info.octopusai@gmail.com</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Phone className="h-6 w-6 text-purple-400 mr-4 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-200 mb-1">WhatsApp</h3>
              <p className="text-gray-400">+57 3243750360</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <MessageSquare className="h-6 w-6 text-purple-400 mr-4 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-200 mb-1">Telegram</h3>
              <p className="text-gray-400">@OctopusAI</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-800 rounded-xl p-8 shadow-xl">
        <h2 className="text-2xl font-bold text-purple-400 mb-6">Agenda una demo</h2>
        <p className="text-gray-300 mb-6">
          ¿Quieres ver nuestras soluciones en acción? Agenda una demostración 
          personalizada con uno de nuestros especialistas.
        </p>
        <motion.a 
          href="#" 
          className="bg-purple-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-purple-700 transition duration-300 inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Solicitar demo
        </motion.a>
      </div>
    </motion.div>
  );
}

export default ContactInfo;