// components/sections/pricing/PricingCards.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star } from 'lucide-react';

function PricingCards() {
  const plans = [
    {
      title: "WhatsApp / Gmail",
      price: "$45",
      features: [
        "Asistente IA 24/7",
        "Respuestas automáticas",
        "Gestión de citas",
        "Integración con calendarios",
        "Analytics básicos",
        "Soporte técnico"
      ],
      icon: CheckCircle,
      isPremium: false
    },
    {
      title: "Telegram",
      price: "$35",
      features: [
        "Asistente IA 24/7",
        "Respuestas automáticas",
        "Gestión de citas",
        "Integración con calendarios",
        "Analytics básicos",
        "Soporte técnico"
      ],
      icon: CheckCircle,
      isPremium: false
    },
    {
      title: "Personalizado",
      price: "Flexible",
      features: [
        "Desarrollo a medida",
        "Integraciones personalizadas",
        "Múltiples canales",
        "Analytics avanzados",
        "Soporte prioritario",
        "Funcionalidades específicas"
      ],
      icon: Star,
      isPremium: true
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
      {plans.map((plan, index) => {
        const Icon = plan.icon;
        
        return (
          <motion.div 
            key={index}
            className={`${
              plan.isPremium 
                ? "bg-gradient-to-b from-purple-900 to-gray-800 border-purple-500 hover:shadow-purple-500/30 hover:shadow-2xl" 
                : "bg-gray-800 border-purple-900 hover:border-purple-500"
            } rounded-xl overflow-hidden shadow-xl border transition-all duration-300`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={`${plan.isPremium ? "bg-purple-500" : "bg-purple-900"} bg-opacity-30 px-6 py-4`}>
              <h3 className={`text-2xl font-bold ${plan.isPremium ? "text-white" : "text-purple-300"}`}>{plan.title}</h3>
            </div>
            <div className="p-6">
              <div className="flex items-end mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                {plan.price !== "Flexible" && <span className="text-gray-400 ml-2">USD / mes</span>}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Icon className={`h-5 w-5 ${plan.isPremium ? "text-purple-300" : "text-purple-400"} mr-2 mt-1 flex-shrink-0`} />
                    <span className={plan.isPremium ? "text-gray-200" : "text-gray-300"}>{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.a 
                href="/contact" 
                className={`block text-center ${
                  plan.isPremium 
                    ? "bg-white text-purple-900 hover:bg-gray-100" 
                    : "bg-purple-600 text-white hover:bg-purple-700"
                } font-bold py-3 px-6 rounded-lg transition duration-300 w-full`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {plan.isPremium ? "Contáctanos" : "Comenzar"}
              </motion.a>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default PricingCards;