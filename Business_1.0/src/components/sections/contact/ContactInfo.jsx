// components/sections/contact/ContactInfo.jsx - Completamente modernizado
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  Calendar, 
  Clock, 
  MapPin, 
  Star,
  CheckCircle2,
  Users,
  Zap,
  Shield,
  Award,
  TrendingUp,
  Headphones,
  Globe,
  ExternalLink,
  Copy,
  ArrowRight,
  Sparkles,
  Heart,
  Coffee,
  Rocket
} from 'lucide-react';

function ContactInfo() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Get Colombia time
  const colombiaTime = new Date().toLocaleString("en-US", {timeZone: "America/Bogota"});
  const isBusinessHours = () => {
    const hour = new Date(colombiaTime).getHours();
    return hour >= 8 && hour < 18; // 8 AM to 6 PM Colombia time
  };

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else if (type === 'phone') {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const contactMethods = [
    {
      icon: MessageSquare,
      title: "WhatsApp Directo",
      subtitle: "Más rápido y personal",
      value: "+57 324 375 0360",
      link: "https://wa.me/573243750360",
      color: "from-green-500 to-emerald-600",
      description: "Respuesta inmediata en horario laboral",
      badge: "🔥 Más popular",
      advantages: ["Respuesta en minutos", "Envío de archivos", "Llamadas directas"]
    },
    {
      icon: Mail,
      title: "Email Corporativo", 
      subtitle: "Para consultas detalladas",
      value: "info.octopusai@gmail.com",
      link: "mailto:info.octopusai@gmail.com",
      color: "from-blue-500 to-indigo-600",
      description: "Ideal para enviar documentos",
      badge: "📧 Profesional",
      advantages: ["Documentos adjuntos", "Historial completo", "Propuestas detalladas"]
    },
    {
      icon: Calendar,
      title: "Demo Personalizada",
      subtitle: "Ve la IA en acción",
      value: "Agenda 30 min",
      link: "https://calendly.com/octopusai",
      color: "from-purple-500 to-violet-600", 
      description: "Demostración en vivo",
      badge: "🎯 Recomendado",
      advantages: ["Demo en vivo", "Casos específicos", "Q&A personalizado"]
    }
  ];

  const businessInfo = [
    {
      icon: Clock,
      title: "Horario de atención",
      value: "Lun - Vie: 8:00 AM - 6:00 PM",
      subtitle: "Hora de Colombia (GMT-5)",
      status: isBusinessHours() ? "🟢 Disponible ahora" : "🔴 Fuera de horario"
    },
    
    {
      icon: Globe,
      title: "Idiomas",
      value: "Español, English",
      subtitle: "Soporte multiidioma",
      status: "🗣️ Atención nativa"
    }
  ];

  const stats = [
    {
      icon: Users,
      value: "+500",
      label: "Empresas confían en nosotros",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Clock,
      value: "< 2h",
      label: "Tiempo promedio de respuesta",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: TrendingUp,
      value: "98%",
      label: "Satisfacción del cliente",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Award,
      value: "250%",
      label: "ROI promedio",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <motion.div 
      className="space-y-8"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {/* Main Contact Methods */}
      <div className="space-y-6">
        {contactMethods.map((method, index) => {
          const Icon = method.icon;
          return (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Glow effect */}
              <motion.div 
                className={`absolute -inset-1 bg-gradient-to-r ${method.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
              />
              
              <div className="relative bg-gray-800/90 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 group-hover:border-purple-500/50 transition-all duration-300">
                {/* Badge */}
                <div className="absolute -top-3 -right-3">
                  <motion.div 
                    className={`bg-gradient-to-r ${method.color} text-white text-xs font-bold px-3 py-1 rounded-full`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {method.badge}
                  </motion.div>
                </div>
                
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <motion.div 
                      className={`bg-gradient-to-br ${method.color} p-3 rounded-xl mr-4`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </motion.div>
                    
                    <div>
                      <h3 className="text-lg font-bold text-white">{method.title}</h3>
                      <p className="text-gray-400 text-sm">{method.subtitle}</p>
                    </div>
                  </div>
                  
                  {/* Copy button for email/phone */}
                  {(method.title.includes('WhatsApp') || method.title.includes('Email')) && (
                    <motion.button
                      onClick={() => copyToClipboard(method.value, method.title.includes('Email') ? 'email' : 'phone')}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {(method.title.includes('Email') && copiedEmail) || (method.title.includes('WhatsApp') && copiedPhone) ? (
                        <CheckCircle2 className="h-5 w-5 text-green-400" />
                      ) : (
                        <Copy className="h-5 w-5" />
                      )}
                    </motion.button>
                  )}
                </div>
                
                {/* Contact value */}
                <div className="mb-4">
                  <div className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${method.color} mb-1`}>
                    {method.value}
                  </div>
                  <p className="text-gray-400 text-sm">{method.description}</p>
                </div>
                
                {/* Advantages */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-purple-300 mb-2">Ventajas:</h4>
                  <div className="space-y-1">
                    {method.advantages.map((advantage, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-300">
                        <CheckCircle2 className="h-3 w-3 text-green-400 mr-2 flex-shrink-0" />
                        <span>{advantage}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* CTA Button */}
                <motion.a
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center bg-gradient-to-r ${method.color} text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 group`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="mr-2">{method.title.includes('Demo') ? 'Agendar demo' : method.title.includes('WhatsApp') ? 'Abrir WhatsApp' : 'Enviar email'}</span>
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut"
                    }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </motion.a>
              </div>
            </motion.div>
          );
        })}
      </div>

    </motion.div>
  );
}

export default ContactInfo;