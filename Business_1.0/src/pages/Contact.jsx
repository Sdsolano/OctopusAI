// pages/Contact.jsx - Completamente modernizado para maximizar conversiones
import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle2, 
  Star,
  Zap,
  Shield,
  Gift,
  Users,
  TrendingUp,
  Sparkles,
  Heart,
  Target,
  Rocket,
  Crown,
  Award,
  ArrowRight,
  Calendar,
  Headphones,
  Globe
} from 'lucide-react';

// Import components
import ContactForm from '../components/sections/contact/ContactForm';
import ContactInfo from '../components/sections/contact/ContactInfo';
import Button from '../components/ui/Button';

// Import animations
import { pageVariants } from '../utils/animations';

function Contact() {
  // Badge component para secciones
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

  return (
    <motion.main
      className="flex flex-col"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      {/* Hero Section - Enfocado en conversión */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 min-h-screen flex items-center">
        {/* Elementos decorativos de fondo espectaculares */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Círculos animados grandes */}
          <motion.div 
            className="absolute -top-40 -right-40 w-96 h-96 bg-green-600/20 rounded-full filter blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div 
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, -10, 0],
              opacity: [0.15, 0.3, 0.15]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
          />
          
          {/* Gradiente de éxito/comunicación */}
          <div className="absolute inset-0 bg-gradient-radial from-green-900/10 via-transparent to-purple-900/10" />
          
          {/* Patrón de comunicación */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iY29udGFjdC1wYXR0ZXJuIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+PHBhdGggZD0iTTMwIDMwcTEwLTEwIDIwIDBxMTAgMTAgMjAgMHEtMTAgMTAtMjAgMHEtMTAtMTAtMjAgMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzkzMzNlYSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIvPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjMiIGZpbGw9IiMxMGI5ODEiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjxjaXJjbGUgY3g9IjgwIiBjeT0iODAiIHI9IjMiIGZpbGw9IiMxMGI5ODEiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNjb250YWN0LXBhdHRlcm4pIi8+PC9zdmc+')] opacity-20" />
          
          {/* Elementos flotantes de contacto */}
          {[MessageSquare, Phone, Mail, Heart].map((Icon, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.2, 0.6, 0.2],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            >
              <Icon className="h-6 w-6 text-green-400/30" />
            </motion.div>
          ))}
        </div>

        {/* Líneas decorativas premium */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SectionBadge icon={Rocket}>¡Tu éxito empieza aquí!</SectionBadge>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-white">Hablemos y</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-purple-400 to-blue-400">
                transformemos tu negocio
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Solo necesitas <span className="text-green-400 font-semibold">10 minutos</span> para 
              contarnos tu proyecto. En <span className="text-green-400 font-semibold">24 horas</span> tendrás 
              una propuesta personalizada y en <span className="text-green-400 font-semibold">48 horas</span> tu 
              asistente IA estará funcionando .
            </motion.p>

            {/* Trust indicators principales */}
            <motion.div 
              className="flex flex-wrap justify-center gap-8 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { 
                  icon: Clock, 
                  value: "< 2h", 
                  label: "Tiempo de respuesta", 
                  color: "from-green-500 to-emerald-600",
                  description: "Te respondemos rápido"
                },
                { 
                  icon: Gift, 
                  value: "Gratis", 
                  label: "Demo personalizada", 
                  color: "from-purple-500 to-violet-600",
                  description: "Sin compromisos"
                },
                { 
                  icon: Shield, 
                  value: "30 días", 
                  label: "Garantía total", 
                  color: "from-blue-500 to-indigo-600",
                  description: "Sin riesgos"
                }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div 
                    key={index}
                    className="relative group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    {/* Glow effect en hover */}
                    <motion.div 
                      className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                    />
                    
                    <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50 group-hover:border-green-500/50 transition-all duration-300">
                      <motion.div 
                        className={`bg-gradient-to-r ${stat.color} p-3 rounded-lg mb-3 mx-auto w-fit`}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </motion.div>
                      
                      <div className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-1`}>
                        {stat.value}
                      </div>
                      <div className="text-white font-semibold mb-1">{stat.label}</div>
                      <div className="text-xs text-gray-400">{stat.description}</div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTAs principales */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Button.Action 
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Crown className="h-5 w-5 mr-2" />
                Solicitar propuesta gratuita
              </Button.Action>
              
              <Button.Secondary href="https://wa.me/573243750360">
                <MessageSquare className="h-4 w-4 mr-2" />
                WhatsApp directo
              </Button.Secondary>
            </motion.div>

           
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section id="contact-form" className="relative py-20 bg-gray-900 overflow-hidden">
        {/* Elementos decorativos sutiles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-20 right-0 w-96 h-96 bg-green-600/5 rounded-full filter blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              x: [0, -20, 0],
            }}
            transition={{ 
              duration: 12, 
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div 
            className="absolute bottom-20 left-0 w-80 h-80 bg-purple-500/5 rounded-full filter blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 20, 0],
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity,
              repeatType: "reverse",
              delay: 2
            }}
          />
        </div>

        {/* Línea decorativa superior */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 via-purple-500 to-green-600"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Header section elegante */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionBadge icon={Target}>Elige tu forma preferida</SectionBadge>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-400">
                  Múltiples formas de contactarnos
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Usa el método que más te guste. Todos llegan al mismo lugar: 
                <span className="text-green-400 font-semibold"> una propuesta personalizada en 7 horas</span>.
              </p>
            </motion.div>
          </div>
          
          {/* Contact Form and Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Form takes 2 columns */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            
            {/* Info takes 1 column */}
            <div className="lg:col-span-1">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

     

      {/* Urgency/FOMO Section */}
      <section className="py-20 bg-gradient-to-r from-green-900/20 via-gray-900 to-purple-900/20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-0 right-0 w-96 h-96 bg-green-600/10 rounded-full filter blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-400">
                Cada día que esperas
              </span>
              <br />
              <span>es dinero que pierdes</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Mientras lo piensas, tu competencia ya está automatizando y capturando a 
              <span className="text-red-400 font-semibold"> los clientes que tú podrías tener</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Button.Action href="https://wa.me/573243750360">
                <MessageSquare className="h-5 w-5 mr-2" />
                WhatsApp ahora mismo
              </Button.Action>
              <Button.Secondary 
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Completar formulario
              </Button.Secondary>
            </div>
            
            {/* Final trust indicators */}
            <motion.div 
              className="flex flex-wrap justify-center gap-8 text-sm text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {[
                "🎯 Propuesta sin compromiso",
                "💰 Sin costos ocultos",
                "🔒 100% confidencial"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center bg-gray-800/30 backdrop-blur-sm rounded-full px-4 py-2"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(34, 197, 94, 0.1)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}

export default Contact;