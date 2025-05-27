// pages/Services.jsx - Versión modernizada manteniendo ServiceCard y CustomDev
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Zap, 
  Shield, 
  Users,
  TrendingUp,
  Sparkles,
  Play,
  CheckCircle2,
  MessageSquare,
  Calendar,
  Mail,
  Database,
  ArrowRight
} from 'lucide-react';

import ServiceCard from '../components/sections/services/ServiceCard';
import CustomDev from '../components/sections/services/CustomDev';
import Button from '../components/ui/Button';

import { pageVariants } from '../utils/animations';

function Services() {
  // Badge component para secciones
  const SectionBadge = ({ children, icon: Icon }) => (
    <motion.div 
      className="inline-flex items-center bg-purple-900/30 border border-purple-500/30 rounded-full px-4 py-2 text-sm font-medium text-purple-300 mb-6"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {Icon && <Icon className="h-4 w-4 mr-2 text-purple-400" />}
      {children}
    </motion.div>
  );

  return (
    <motion.main
      className="flex flex-col"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      {/* Hero Section Modernizado */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 min-h-screen flex items-center">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, 0],
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div 
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/20 rounded-full filter blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, -10, 0],
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
          />
          
          {/* Patrón de puntos */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5MzMzZWEiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzIiBjeT0iMyIgcj0iMyIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <SectionBadge icon={Sparkles}>Soluciones de automatización</SectionBadge>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
                Nuestros Servicios
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Automatización inteligente para cada canal de comunicación. 
              <span className="text-purple-400 font-semibold"> Prueba nuestros demos interactivos</span> y 
              descubre cómo la IA puede transformar tu negocio.
            </motion.p>

            {/* Stats Row */}
            <motion.div 
              className="flex flex-wrap justify-center gap-8 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {[
                { icon: Users, value: "+500", label: "Empresas activas", color: "text-blue-400" },
                { icon: Zap, value: "99.9%", label: "Tiempo activo", color: "text-green-400" },
                { icon: TrendingUp, value: "+250%", label: "ROI promedio", color: "text-purple-400" },
                { icon: Shield, value: "100%", label: "Datos seguros", color: "text-indigo-400" }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div 
                    key={index}
                    className="text-center bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="flex items-center justify-center mb-2">
                      <Icon className={`h-6 w-6 ${stat.color} mr-2`} />
                      <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
                    </div>
                    <span className="text-sm text-gray-400">{stat.label}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button.Primary 
                onClick={() => document.getElementById('demos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explorar demos interactivos
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button.Primary>
              <Button.Secondary to="/contact">
                Solicitar consulta gratuita
              </Button.Secondary>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Manteniendo ServiceCard exactamente como está */}
      <section id="demos" className="relative py-20 bg-gray-800 overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-600/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 left-0 w-80 h-80 bg-indigo-500/5 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Header section mejorado */}
          <div className="text-center mb-20">
            <SectionBadge icon={Play}>Demos en vivo</SectionBadge>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Prueba nuestras soluciones
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Cada demo conecta con nuestros sistemas reales. Escribe cualquier consulta y 
              experimenta la inteligencia de Octopus AI en acción.
            </motion.p>
          </div>
          
          {/* ServiceCards - MODERNIZADOS con nuevos componentes */}
          <div className="space-y-32">
            <ServiceCard 
              id="whatsapp"
              title="Asistente de WhatsApp y Telegram 24/7"
              description="Atiende consultas, agenda citas y gestiona tu comunicación automatizada las 24 horas del día. Nuestro asistente entiende el contexto, mantiene conversaciones naturales y se adapta al tono de tu marca."
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
              webhookUrl="https://primary-production-b1314.up.railway.app/webhook/7dc69b64-2c1f-40b2-8203-90e8218ac147"
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
              webhookUrl="https://primary-production-b1314.up.railway.app/webhook/7d5c5747-3ec7-4a8c-a6b4-c5dcab3f7f72"
            />
          </div>
        </div>
      </section>

      {/* Sección de casos de éxito */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <SectionBadge icon={Star}>Casos de éxito</SectionBadge>
            <motion.h2 
              className="text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Resultados que hablan por sí mismos
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Descubre cómo nuestros clientes han transformado sus negocios con Octopus AI
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                company: "Clínica Dental Premium",
                service: "WhatsApp + Gestión de Citas",
                result: "+120% en reservas",
                detail: "Automatizamos su sistema de citas y consultas, reduciendo tiempo de gestión en 8 horas diarias.",
                icon: Calendar,
                color: "from-blue-500 to-indigo-600"
              },
              {
                company: "E-commerce Fashion",
                service: "Telegram + Excel Integration",
                result: "+300% ventas online",
                detail: "Bot de Telegram procesa pedidos automáticamente y mantiene inventario sincronizado en tiempo real.",
                icon: MessageSquare,
                color: "from-green-500 to-emerald-600"
              },
              {
                company: "Consultora Legal",
                service: "Gmail Automation",
                result: "5 horas/día ahorradas",
                detail: "IA clasifica casos urgentes y responde consultas básicas, permitiendo enfoque en casos complejos.",
                icon: Mail,
                color: "from-purple-500 to-violet-600"
              }
            ].map((case_study, index) => {
              const Icon = case_study.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-gray-700 group hover:border-purple-500/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className={`bg-gradient-to-br ${case_study.color} p-3 rounded-lg mr-4`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{case_study.company}</h3>
                      <p className="text-sm text-gray-400">{case_study.service}</p>
                    </div>
                  </div>
                  
                  <div className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${case_study.color} mb-2`}>
                    {case_study.result}
                  </div>
                  
                  <p className="text-gray-300 text-sm">{case_study.detail}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center">
            <Button.Secondary to="/contact">
              Ver más casos de éxito
            </Button.Secondary>
          </div>
        </div>
      </section>

      {/* CustomDev - MODERNIZADO */}
      <CustomDev />

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-gray-900 to-indigo-900/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              ¿Listo para automatizar tu negocio?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Únete a más de 500 empresas que ya confían en Octopus AI para 
              transformar su comunicación con clientes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button.Action to="/contact">
                Solicitar demo personalizada
              </Button.Action>
              <Button.Secondary to="/pricing">
                Ver planes y precios
              </Button.Secondary>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}

export default Services;