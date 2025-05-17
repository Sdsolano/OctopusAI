// pages/Pricing.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Import components
import PricingCards from '../components/sections/pricing/PricingCards';
import FAQ from '../components/sections/pricing/FAQ';

// Import animations
import { pageVariants } from '../utils/animations';

function Pricing() {
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
          <h1 className="text-5xl font-bold text-center text-purple-400 mb-6">Planes y Precios</h1>
          <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
            Soluciones flexibles que se adaptan a las necesidades de tu negocio, sin contratos a largo plazo.
          </p>
          
          <PricingCards />
        </div>
      </section>

      <FAQ />
    </motion.main>
  );
}

export default Pricing;