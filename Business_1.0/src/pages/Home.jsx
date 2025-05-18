// pages/Home.jsx - Versión final integrada
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

// Componentes UI
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

// Secciones
import Hero from '../components/sections/home/Hero';
import Features from '../components/sections/home/Features';
import Benefits from '../components/sections/home/Benefits';
import HowItWorks from '../components/sections/home/HowItWorks';
import CallToAction from '../components/sections/home/CallToAction';
import CustomAgents from '../components/sections/home/CustomAgents';

// Badge personalizado para secciones
const SectionBadge = ({ children }) => (
  <div className="inline-flex items-center bg-purple-900/30 border border-purple-500/30 rounded-full px-4 py-1 text-sm font-medium text-purple-300">
    <Star className="h-3 w-3 mr-2 text-purple-400" fill="currentColor" />
    {children}
  </div>
);

function Home() {
  return (
    <motion.main 
      className="flex flex-col"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Hero Section */}
      <Hero />
      
      {/* Sección de Soluciones */}
      <Section 
        title="Nuestras Soluciones" 
        subtitle="Automatización inteligente para cada canal de comunicación con tus clientes"
        bgColor="light"
        spacing="lg"
        centered
        badge={<SectionBadge>Tecnología de punta</SectionBadge>}
      >
        <Features />
      </Section>
      
      {/* Sección de agentes personalizados */}
      <CustomAgents />
      
      {/* Sección de Beneficios */}
      <Section 
        title="Beneficios"
        subtitle="Optimiza tu negocio con nuestras soluciones de inteligencia artificial"
        bgColor="default"
        spacing="lg"
        centered
        badge={<SectionBadge>Resultados probados</SectionBadge>}
      >
        <Benefits showTitle={false} />
      </Section>
      
      {/* Sección de Cómo Funciona */}
      <Section 
        id="como-funciona"
        title="¿Cómo funciona Octopus AI?"
        subtitle="Un proceso simple para transformar la comunicación de tu negocio"
        bgColor="light"
        spacing="lg"
        centered
        badge={<SectionBadge>Proceso sencillo</SectionBadge>}
      >
        <HowItWorks showTitle={false} />
      </Section>
      
      {/* Sección de testimonios */}
      <Section 
        title="Lo que dicen nuestros clientes"
        bgColor="default"
        spacing="lg"
        centered
        badge={<SectionBadge>Testimonios</SectionBadge>}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Juan Pérez",
              company: "Clínica Dental Sonrisas",
              image: "https://picsum.photos/100/100?random=1",
              text: "Desde que implementamos el asistente de WhatsApp, nuestras citas aumentaron un 40% y redujimos las cancelaciones. Los pacientes adoran la facilidad para agendar.",
              rating: 5
            },
            {
              name: "María González",
              company: "Consultora Legal MG",
              image: "https://picsum.photos/100/100?random=2",
              text: "La automatización de Gmail ha sido un cambio radical. Ahora puedo filtrar casos urgentes y responder consultas básicas sin intervención, ahorrando horas diarias.",
              rating: 5
            },
            {
              name: "Carlos Rodríguez",
              company: "Tienda Online TechShop",
              image: "https://picsum.photos/100/100?random=3",
              text: "Nuestro asistente de Telegram responde dudas sobre productos y procesa pedidos automáticamente. La satisfacción de clientes aumentó y las ventas crecieron un 25%.",
              rating: 4
            }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="relative mr-4 flex-shrink-0">
                  <div className="h-14 w-14 rounded-full overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-purple-600 rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.company}</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
              
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-600'}`}
                    fill={i < testimonial.rating ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* Llamada a la acción */}
      <CallToAction />
      
      {/* Sección de FAQ */}
      <Section 
        title="Preguntas Frecuentes"
        bgColor="light"
        spacing="lg"
        centered
      >
        <div className="max-w-3xl mx-auto">
          {[
            {
              question: "¿Pueden crear un asistente específico para mi industria?",
              answer: "Absolutamente. Nos especializamos en crear soluciones a medida para cada industria y negocio. Nuestros asistentes se diseñan considerando tus procesos, terminología específica y necesidades particulares."
            },
            {
              question: "¿Cuánto tiempo toma implementar una solución personalizada?",
              answer: "Generalmente, podemos tener tu asistente personalizado configurado y funcionando en 1-2 semanas, dependiendo de la complejidad. Esto incluye tiempo para entender tus necesidades, desarrollar la solución y realizar ajustes."
            },
            {
              question: "¿Puedo integrar el asistente con mis sistemas actuales?",
              answer: "Sí, nuestras soluciones son altamente integrables con CRMs, sistemas de reservas, plataformas de e-commerce y otras herramientas que ya utilices en tu negocio."
            }
          ].map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4 last:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <details className="group bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
                <summary className="flex justify-between items-center cursor-pointer p-6 focus:outline-none">
                  <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                  <div className="text-purple-400 transition-transform duration-300 group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6 text-gray-300">
                  <p>{faq.answer}</p>
                </div>
              </details>
            </motion.div>
          ))}
          
          <div className="mt-10 text-center">
            <Button.Secondary to="/pricing#faq">
              Ver todas las preguntas frecuentes
            </Button.Secondary>
          </div>
        </div>
      </Section>
    </motion.main>
  );
}

export default Home;