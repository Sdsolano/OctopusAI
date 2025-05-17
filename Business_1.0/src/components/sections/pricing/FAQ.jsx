// components/sections/pricing/FAQ.jsx
import React from 'react';
import { motion } from 'framer-motion';

function FAQ() {
  const faqs = [
    {
      question: "¿Necesito tener conocimientos técnicos para implementar Octopus AI?",
      answer: "No, nosotros nos encargamos de toda la configuración técnica. Tú solo necesitas contarnos cómo quieres que funcione tu asistente virtual y nosotros nos ocupamos del resto."
    },
    {
      question: "¿Cuánto tiempo toma implementar una solución?",
      answer: "En la mayoría de los casos, podemos tener tu asistente configurado y funcionando en 1-3 días hábiles, dependiendo de la complejidad de tu caso de uso."
    },
    {
      question: "¿Puedo integrar el asistente con mis sistemas actuales?",
      answer: "Sí, nuestras soluciones son altamente integrables con CRMs, sistemas de reservas, plataformas de e-commerce y otras herramientas que ya utilices en tu negocio."
    },
    {
      question: "¿El asistente puede transferir la conversación a un humano cuando sea necesario?",
      answer: "Absolutamente. Configuramos reglas para determinar cuándo una conversación debe ser escalada a un agente humano, ya sea por la complejidad de la consulta o por solicitud del cliente."
    },
    {
      question: "¿Existe algún compromiso de permanencia?",
      answer: "No, todos nuestros planes son mensuales y puedes cancelar cuando quieras sin penalizaciones. Nos enfocamos en ganar tu confianza con resultados, no con contratos."
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-purple-400 mb-16">Preguntas Frecuentes</h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="bg-gray-900 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-purple-300 mb-3">{faq.question}</h3>
              <p className="text-gray-400">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;