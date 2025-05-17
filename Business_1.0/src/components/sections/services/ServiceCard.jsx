// components/sections/services/ServiceCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, MessageSquare, Calendar, Mail, Database } from 'lucide-react';

function ServiceCard({ id, title, description, features, image, imageAlt, icon, reversed }) {
  // Simple icon renderer based on string name
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'MessageSquare': return <MessageSquare className="h-8 w-8 text-purple-400" />;
      case 'Calendar': return <Calendar className="h-8 w-8 text-purple-400" />;
      case 'Mail': return <Mail className="h-8 w-8 text-purple-400" />;
      case 'Database': return <Database className="h-8 w-8 text-purple-400" />;
      default: return <MessageSquare className="h-8 w-8 text-purple-400" />;
    }
  };

  return (
    <div id={id} className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}>
      <motion.div 
        className={`md:w-1/2 mb-8 md:mb-0 ${reversed ? 'md:pl-12' : 'md:pr-12'}`}
        initial={{ opacity: 0, x: reversed ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="bg-purple-900 bg-opacity-20 p-2 rounded-lg inline-block mb-4">
          {renderIcon(icon)}
        </div>
        <h2 className="text-3xl font-bold text-purple-400 mb-4">{title}</h2>
        <p className="text-gray-300 mb-6">
          {description}
        </p>
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center">
              <CheckCircle className="h-5 w-5 text-purple-400 mr-2" />
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </motion.div>
      <motion.div 
        className="md:w-1/2 bg-gray-800 rounded-xl overflow-hidden shadow-xl"
        initial={{ opacity: 0, x: reversed ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <img src={image} alt={imageAlt} className="w-full h-auto" />
      </motion.div>
    </div>
  );
}

export default ServiceCard;