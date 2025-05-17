// pages/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Import components
import ContactForm from '../components/sections/contact/ContactForm';
import ContactInfo from '../components/sections/contact/ContactInfo';

// Import animations
import { pageVariants } from '../utils/animations';

function Contact() {
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
          <h1 className="text-5xl font-bold text-center text-purple-400 mb-6">Contáctanos</h1>
          <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
            Estamos listos para ayudarte a transformar la comunicación de tu negocio. 
            Cuéntanos sobre tu proyecto y te responderemos a la brevedad.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </motion.main>
  );
}

export default Contact;