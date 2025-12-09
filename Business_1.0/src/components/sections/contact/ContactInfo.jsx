// components/sections/contact/ContactInfo.jsx - Completamente modernizado
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../../../hooks/useTranslation';
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
  const { t } = useTranslation();
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
      title: t('contactPage.contactInfo.whatsapp.title'),
      subtitle: t('contactPage.contactInfo.whatsapp.subtitle'),
      value: "+57 324 375 0360",
      link: "https://wa.me/573243750360",
      color: "from-green-500 to-emerald-600",
      description: t('contactPage.contactInfo.whatsapp.description'),
      badge: t('contactPage.contactInfo.whatsapp.badge'),
      advantages: t('contactPage.contactInfo.whatsapp.advantages'),
      button: t('contactPage.contactInfo.whatsapp.button')
    },
    {
      icon: Mail,
      title: t('contactPage.contactInfo.email.title'), 
      subtitle: t('contactPage.contactInfo.email.subtitle'),
      value: "info.octopusai@gmail.com",
      link: "mailto:info.octopusai@gmail.com",
      color: "from-blue-500 to-indigo-600",
      description: t('contactPage.contactInfo.email.description'),
      badge: t('contactPage.contactInfo.email.badge'),
      advantages: t('contactPage.contactInfo.email.advantages'),
      button: t('contactPage.contactInfo.email.button')
    }
  ];

  const businessInfo = [
    {
      icon: Clock,
      title: t('contactPage.contactInfo.businessHours.title'),
      value: t('contactPage.contactInfo.businessHours.value'),
      subtitle: t('contactPage.contactInfo.businessHours.subtitle'),
      status: isBusinessHours() ? t('contactPage.contactInfo.businessHours.available') : t('contactPage.contactInfo.businessHours.unavailable')
    },
    
    {
      icon: Globe,
      title: t('contactPage.contactInfo.languages.title'),
      value: t('contactPage.contactInfo.languages.value'),
      subtitle: t('contactPage.contactInfo.languages.subtitle'),
      status: t('contactPage.contactInfo.languages.status')
    }
  ];

  const stats = [
    {
      icon: Users,
      value: "+500",
      label: t('contactPage.contactInfo.stats.companies'),
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Clock,
      value: "< 2h",
      label: t('contactPage.contactInfo.stats.responseTime'),
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: TrendingUp,
      value: "98%",
      label: t('contactPage.contactInfo.stats.satisfaction'),
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Award,
      value: "250%",
      label: t('contactPage.contactInfo.stats.roi'),
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
                  {(method.icon === Mail || method.icon === MessageSquare) && (
                    <motion.button
                      onClick={() => copyToClipboard(method.value, method.icon === Mail ? 'email' : 'phone')}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {(method.icon === Mail && copiedEmail) || (method.icon === MessageSquare && copiedPhone) ? (
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
                  <h4 className="text-sm font-semibold text-purple-300 mb-2">{t('contactPage.contactInfo.advantages')}</h4>
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
                  <span className="mr-2">{method.button}</span>
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