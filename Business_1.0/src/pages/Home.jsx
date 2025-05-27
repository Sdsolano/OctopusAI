// pages/Home.jsx - Modernizado para igualar el nivel de Services
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Sparkles, TrendingUp, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

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

// Badge mejorado para que coincida con Services
const SectionBadge = ({ children, icon: Icon }) => (
  <motion.div 
    className="inline-flex items-center bg-purple-900/30 border border-purple-500/30 rounded-full px-4 py-2 text-sm font-medium text-purple-300 backdrop-blur-sm"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    {Icon && <Icon className="h-4 w-4 mr-2 text-purple-400" />}
    {children}
  </motion.div>
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
      
      {/* Sección de Soluciones - Mejorada */}
      <Section 
        bgColor="default"
        spacing="xl"
        className="relative overflow-hidden"
      >
        {/* Elementos decorativos mejorados */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-20 -right-20 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, 0],
            }}
            transition={{ 
              duration: 12, 
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div 
            className="absolute bottom-20 -left-20 w-80 h-80 bg-indigo-500/10 rounded-full filter blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, -10, 0],
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity,
              repeatType: "reverse",
              delay: 2
            }}
          />
          
          {/* Patrón de fondo sutil */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5MzMzZWEiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMyIgY3k9IjMiIHI9IjMiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40" />
        </div>

        <div className="text-center mb-16 relative z-10">
          <SectionBadge icon={Zap}>Tecnología de punta</SectionBadge>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
              Nuestras Soluciones
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Automatización inteligente para cada canal de comunicación con tus clientes
          </motion.p>
        </div>

        <div className="relative z-10">
          <Features />
        </div>
      </Section>
      
      {/* Sección de agentes personalizados */}
      <CustomAgents />
      
      {/* Sección de Beneficios - Mejorada */}
      <Section 
        bgColor="default"
        spacing="xl"
        className="relative overflow-hidden"
      >
        {/* Elementos decorativos */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-40 -left-20 w-72 h-72 bg-purple-600/8 rounded-full filter blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              x: [0, 20, 0],
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          
          {/* Líneas decorativas */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
        </div>

        <div className="text-center mb-16 relative z-10">
          <SectionBadge icon={TrendingUp}>Resultados probados</SectionBadge>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
              Beneficios
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Optimiza tu negocio con nuestras soluciones de inteligencia artificial hechas a la medida
          </motion.p>
        </div>

        <div className="relative z-10">
          <Benefits showTitle={false} />
        </div>
      </Section>
      
      {/* Sección de Cómo Funciona - Mejorada */}
      <Section 
        id="como-funciona"
        bgColor="default"
        spacing="xl"
        className="relative overflow-hidden"
      >
        {/* Patrón de fondo */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzkzMzNlYSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2Utb3BhY2l0eT0iMC4wMyIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30 pointer-events-none" />

        <div className="text-center mb-16 relative z-10">
          <SectionBadge icon={Sparkles}>Proceso sencillo</SectionBadge>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
              ¿Cómo funciona Octopus AI?
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Un proceso simple para transformar la comunicación de tu negocio
          </motion.p>
        </div>

        <div className="relative z-10">
          <HowItWorks showTitle={false} />
        </div>
      </Section>
      
      {/* Sección de testimonios - Completamente mejorada */}
      <Section 
        bgColor="default"
        spacing="xl"
        className="relative overflow-hidden"
      >
        {/* Elementos decorativos */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-20 right-0 w-96 h-96 bg-indigo-600/8 rounded-full filter blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              y: [0, -20, 0],
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>

        <div className="text-center mb-16 relative z-10">
          <SectionBadge icon={Star}>Testimonios</SectionBadge>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
              Lo que dicen nuestros clientes
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
          {[
            {
              name: "Juan Pérez",
              company: "Clínica Dental Sonrisas",
              image: "https://picsum.photos/100/100?random=1",
              text: "Desde que implementamos el asistente de WhatsApp, nuestras citas aumentaron un 40% y redujimos las cancelaciones. Los pacientes adoran la facilidad para agendar.",
              rating: 5,
              result: "+40% citas",
              color: "from-green-500 to-emerald-600"
            },
            {
              name: "María González",
              company: "Consultora Legal MG",
              image: "https://picsum.photos/100/100?random=2",
              text: "La automatización de Gmail ha sido un cambio radical. Ahora puedo filtrar casos urgentes y responder consultas básicas sin intervención, ahorrando horas diarias.",
              rating: 5,
              result: "5h/día ahorradas",
              color: "from-purple-500 to-violet-600"
            },
            {
              name: "Carlos Rodríguez",
              company: "Tienda Online TechShop",
              image: "https://picsum.photos/100/100?random=3",
              text: "Nuestro asistente de Telegram responde dudas sobre productos y procesa pedidos automáticamente. La satisfacción de clientes aumentó y las ventas crecieron un 25%.",
              rating: 4,
              result: "+25% ventas",
              color: "from-blue-500 to-indigo-600"
            }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Efecto glow */}
              <motion.div 
                className={`absolute -inset-1 bg-gradient-to-r ${testimonial.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />
              
              <motion.div
                className="relative bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700 group-hover:border-purple-500/50 transition-all duration-300 h-full"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Header mejorado */}
                <div className="flex items-center mb-4">
                  <div className="relative mr-4 flex-shrink-0">
                    <motion.div 
                      className="h-14 w-14 rounded-full overflow-hidden ring-2 ring-purple-500/20"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="h-full w-full object-cover"
                      />
                    </motion.div>
                    
                    {/* Badge de resultado */}
                    <motion.div 
                      className={`absolute -bottom-2 -right-2 bg-gradient-to-r ${testimonial.color} text-white text-xs font-bold px-2 py-1 rounded-full`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {testimonial.result}
                    </motion.div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">"{testimonial.text}"</p>
                
                {/* Rating mejorado */}
                <div className="flex items-center justify-between">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.1 + i * 0.05 }}
                      >
                        <Star 
                          className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-600'}`}
                          fill={i < testimonial.rating ? 'currentColor' : 'none'}
                        />
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div 
                    className="text-xs text-gray-500 flex items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    <CheckCircle2 className="h-3 w-3 mr-1 text-green-400" />
                    Verificado
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* Llamada a la acción */}
      <CallToAction />
      
      {/* Sección de FAQ - Mejorada */}
      <Section 
        bgColor="default"
        spacing="xl"
        className="relative overflow-hidden"
      >
        {/* Elementos decorativos */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
        </div>

        <div className="text-center mb-16 relative z-10">
          <SectionBadge icon={Sparkles}>Preguntas frecuentes</SectionBadge>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
              Preguntas Frecuentes
            </span>
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
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
              <details className="group bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <summary className="flex justify-between items-center cursor-pointer p-6 focus:outline-none group-hover:bg-gray-700/30 transition-colors duration-300">
                  <h3 className="text-lg font-medium text-white group-hover:text-purple-300 transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <motion.div 
                    className="text-purple-400 transition-transform duration-300 group-open:rotate-180"
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </summary>
                <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                  <p>{faq.answer}</p>
                </div>
              </details>
            </motion.div>
          ))}
          
          <motion.div 
            className="mt-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button.Secondary to="/pricing#faq">
              <span>Ver todas las preguntas frecuentes</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button.Secondary>
          </motion.div>
        </div>
      </Section>
    </motion.main>
  );
}

export default Home;