// pages/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';

import ServiceCard from '../components/sections/services/ServiceCard';
import CustomDev from '../components/sections/services/CustomDev';

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
              description="Atiende consultas..."
              features={["Respuesta instantánea 24/7", "Detección de idioma automática", "Integración con tu CRM", "Personalización completa del asistente", "Analíticas detalladas"]}
              icon="MessageSquare"
              reversed={false}
              webhookUrl="https://primary-production-b1314.up.railway.app/webhook/62cd14c2-e2dd-492b-afab-d527f827fdb5"
            />
            

            <ServiceCard 
              id="appointments"
              title="Gestión de citas y reservas automatizadas"
              description="Integramos tu calendario y permitimos que tus clientes agenden, reprogramen o cancelen citas sin necesidad de hablar contigo."
              features={["Integración con Google Calendar y otros", "Recordatorios automáticos", "Reprogramación sin fricción", "Confirmaciones automáticas", "Zonificación según disponibilidad"]}
              icon="Calendar"
              reversed={true}
              webhookUrl={"https://primary-production-b1314.up.railway.app/webhook/7dc69b64-2c1f-40b2-8203-90e8218ac147"}
            />

            <ServiceCard 
              id="gmail"
              title="Automatización de correos con Gmail"
              description="Clasificamos, respondemos y gestionamos correos electrónicos entrantes, con flujos automáticos inteligentes según tus reglas."
              features={["Clasificación automática de correos", "Respuestas personalizadas", "Priorización inteligente", "Integración con tu flujo de trabajo", "Análisis de sentimiento"]}
              icon="Mail"
              reversed={false}
            />

            <ServiceCard 
              id="excel"
              title="Gestión de pedidos con integración a Excel"
              description="Permite a tus clientes hacer pedidos directamente desde el chat, con toda la información cargada automáticamente en un archivo Excel."
              features={["Captura de datos estructurada", "Actualización en tiempo real", "Notificaciones de nuevos pedidos", "Exportación a múltiples formatos", "Historial de pedidos accesible"]}
              icon="Database"
              reversed={true}
              webhookUrl={"https://primary-production-b1314.up.railway.app/webhook/7d5c5747-3ec7-4a8c-a6b4-c5dcab3f7f72"}
            />
          </div>
        </div>
      </section>

      <CustomDev />
    </motion.main>
  );
}

export default Services;
