// components/sections/home/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Placeholder image - would be imported from assets folder
const image1 = "https://picsum.photos/800/600";

function Hero() {
  return (
    <section className="flex hero items-center min-h-screen container mx-auto px-6 py-32 text-center relative overflow-hidden">
      <div className='flex items-center justify-between w-full flex-col-reverse md:flex-row'>
        <div className="relative flex-col flex text-left z-10 max-w-4xl pt-0 md:pt-20">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-purple-400 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Transforma tu comunicación empresarial con IA
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Asistentes inteligentes personalizados para WhatsApp, Telegram y Gmail
          </motion.p>
          <div className='flex space-x-4'>
            <motion.a 
              href="#contact" 
              className="bg-purple-600 text-white font-bold py-3 px-8 rounded-full hover:bg-purple-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Comenzar
            </motion.a>
            <motion.a 
              href="/services" 
              className="border-2 border-purple-500 text-purple-400 font-bold py-3 px-8 rounded-full hover:bg-purple-900 hover:bg-opacity-30 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Ver soluciones
            </motion.a>
          </div>
        </div>
        <div className='relative flex items-center flex-grow'>
          <motion.img 
            src={image1} 
            alt="AI Assistant" 
            className="w-full h-auto max-w-2xl mx-auto md:mt-0 mt-24 rounded-xl shadow-2xl" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;