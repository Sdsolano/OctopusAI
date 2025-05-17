// pages/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Import components
import ServiceCard from '../components/sections/services/ServiceCard';
import CustomDev from '../components/sections/services/CustomDev';

// Import animations
import { pageVariants } from '../utils/animations';

function Services() {
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
          <h1 className="text-5xl font-bold text-center text-purple-400 mb-16">Nuestros Servicios</h1>
          
          <div className="space-y-24">
            <ServiceCard 
              id="whatsapp"
              title="Asistente de WhatsApp y Telegram 24/7"
              description="Atiende consultas, agenda citas, responde automáticamente preguntas frecuentes y guía al cliente hasta la compra, todo sin intervención humana."
              features={["Respuesta instantánea 24/7", "Detección de idioma automática", "Integración con tu CRM", "Personalización completa del asistente", "Analíticas detalladas"]}
              image="https://picsum.photos/600/400"
              imageAlt="WhatsApp AI Assistant"
              icon="MessageSquare"
              reversed={false}
            />

            <ServiceCard 
              id="appointments"
              title="Gestión de citas y reservas automatizadas"
              description="Integramos tu calendario y permitimos que tus clientes agenden, reprogramen o cancelen citas sin necesidad de hablar contigo."
              features={["Integración con Google Calendar y otros", "Recordatorios automáticos", "Reprogramación sin fricción", "Confirmaciones automáticas", "Zonificación según disponibilidad"]}
              image="https://picsum.photos/601/400"
              imageAlt="Appointment Management"
              icon="Calendar"
              reversed={true}
            />

            <ServiceCard 
              id="gmail"
              title="Automatización de correos con Gmail"
              description="Clasificamos, respondemos y gestionamos correos electrónicos entrantes, con flujos automáticos inteligentes según tus reglas."
              features={["Clasificación automática de correos", "Respuestas personalizadas", "Priorización inteligente", "Integración con tu flujo de trabajo", "Análisis de sentimiento"]}
              image="https://picsum.photos/602/400"
              imageAlt="Gmail Automation"
              icon="Mail"
              reversed={false}
            />

            <ServiceCard 
              id="excel"
              title="Gestión de pedidos con integración a Excel"
              description="Permite a tus clientes hacer pedidos directamente desde el chat, con toda la información cargada automáticamente en un archivo Excel."
              features={["Captura de datos estructurada", "Actualización en tiempo real", "Notificaciones de nuevos pedidos", "Exportación a múltiples formatos", "Historial de pedidos accesible"]}
              image="https://picsum.photos/603/400"
              imageAlt="Excel Integration"
              icon="Database"
              reversed={true}
            />
          </div>
        </div>
      </section>

      <CustomDev />
    </motion.main>
  );
}

export default Services;