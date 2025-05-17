// pages/Features.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Import components
import FeatureCards from '../components/sections/features/FeatureCards';
import TechFeatures from '../components/sections/features/TechFeatures';

// Import animations
import { pageVariants } from '../utils/animations';

function Features() {
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
          <h1 className="text-5xl font-bold text-center text-purple-400 mb-16">Características</h1>
          
          <FeatureCards />
        </div>
      </section>

      <TechFeatures />
    </motion.main>
  );
}

export default Features;