// pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Import components
import Mission from '../components/sections/about/Mission';
import Team from '../components/sections/about/Team';
import Values from '../components/sections/about/Values';

// Import animations
import { pageVariants } from '../utils/animations';

function About() {
  return (
    <motion.main
      className="flex flex-col pt-32"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold text-center text-purple-400 mb-16">Sobre Nosotros</h1>
          
          <Mission />
          <Team />
          <Values />
        </div>
      </section>
    </motion.main>
  );
}

export default About;