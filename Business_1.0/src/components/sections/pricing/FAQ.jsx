// components/sections/pricing/FAQ.jsx - Modernizado para conversiones
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  HelpCircle, 
  CheckCircle2, 
  Zap, 
  Shield, 
  Clock,
  DollarSign,
  Users,
  MessageSquare,
  Star,
  Award,
  TrendingUp,
  Phone,
  Mail
} from 'lucide-react';
import Button from '../../ui/Button';
import { useTranslation } from '../../../hooks/useTranslation.js';

function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(0); // Primera pregunta abierta por defecto

  // Iconos y colores para cada pregunta
  const faqStyles = [
    { icon: Zap, color: "from-blue-500 to-indigo-600" },
    { icon: Clock, color: "from-green-500 to-emerald-600" },
    { icon: Users, color: "from-purple-500 to-violet-600" },
    { icon: MessageSquare, color: "from-orange-500 to-red-600" },
    { icon: Shield, color: "from-teal-500 to-cyan-600" },
    { icon: Award, color: "from-yellow-500 to-orange-600" },
    { icon: Shield, color: "from-green-500 to-teal-600" },
    { icon: Star, color: "from-purple-500 to-pink-600" }
  ];

  const faqs = t('faq.items').map((item, index) => ({
    ...item,
    icon: faqStyles[index]?.icon || HelpCircle,
    color: faqStyles[index]?.color || "from-gray-500 to-gray-600"
  }));

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

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
    <section className="relative py-24 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 -right-40 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div 
          className="absolute bottom-20 -left-40 w-80 h-80 bg-green-500/10 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -10, 0],
            opacity: [0.08, 0.15, 0.08]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        />
        
        {/* Patrón de preguntas */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZmFxLXBhdHRlcm4iIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48dGV4dCB4PSIyMCIgeT0iMzAiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM5MzMzZWEiIGZpbGwtb3BhY2l0eT0iMC4wNSI+Pz88L3RleHQ+PHRleHQgeD0iNjAiIHk9IjcwIiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjI0IiBmaWxsPSIjMTBiOTgxIiBmaWxsLW9wYWNpdHk9IjAuMDUiPiE8L3RleHQ+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2ZhcS1wYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-20" />
      </div>

      {/* Líneas decorativas */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionBadge icon={HelpCircle}>{t('faq.badge')}</SectionBadge>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-green-400 to-blue-400">
                {t('faq.title')}
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('faq.subtitle')}
              <span className="text-green-400 font-semibold"> {t('faq.subtitleHighlight')}</span>.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              const isOpen = openIndex === index;
              
              return (
                <motion.div 
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Glow effect sutil */}
                  <motion.div 
                    className={`absolute -inset-1 bg-gradient-to-r ${faq.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />
                  
                  <motion.div
                    className={`relative bg-gray-800/80 backdrop-blur-xl rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen 
                        ? 'border-purple-500/50 shadow-lg shadow-purple-500/10' 
                        : 'border-gray-700/50 hover:border-purple-500/30'
                    }`}
                    whileHover={{ y: -2 }}
                  >
                    {/* Pregunta clickeable */}
                    <motion.button
                      className="w-full p-6 text-left focus:outline-none"
                      onClick={() => toggleFAQ(index)}
                      whileTap={{ scale: 0.995 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-start flex-1">
                          <motion.div 
                            className={`bg-gradient-to-br ${faq.color} p-3 rounded-xl mr-4 flex-shrink-0`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <Icon className="h-5 w-5 text-white" />
                          </motion.div>
                          
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                              {faq.question}
                            </h3>
                            
                            {/* Highlight badge */}
                            <div className="flex items-center space-x-2">
                              <span className={`inline-block bg-gradient-to-r ${faq.color} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                                {faq.highlight}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <motion.div
                          className="text-purple-400 ml-4"
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="h-6 w-6" />
                        </motion.div>
                      </div>
                    </motion.button>
                    
                    {/* Respuesta expandible */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6">
                            <div className="border-t border-gray-700/50 pt-6">
                              <p className="text-gray-300 leading-relaxed mb-4">
                                {faq.answer}
                              </p>
                              
                              {/* Tags de beneficios */}
                              <div className="flex flex-wrap gap-2">
                                {faq.tags.map((tag, tagIndex) => (
                                  <motion.span
                                    key={tagIndex}
                                    className="bg-gray-700/50 text-gray-300 text-xs px-3 py-1 rounded-full border border-gray-600/50"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: tagIndex * 0.05 }}
                                  >
                                    ✓ {tag}
                                  </motion.span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-purple-900/30 via-gray-800/50 to-green-900/30 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('faq.cta.title')}
            </h3>
            <p className="text-gray-300 mb-6">
              {t('faq.cta.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button.Action to="/contact">
                
                {t('faq.cta.primaryButton')}
              </Button.Action>
              
              <Button.Secondary href="https://wa.me/1234567890">
                
                {t('faq.cta.secondaryButton')}
              </Button.Secondary>
            </div>
            
          
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FAQ;