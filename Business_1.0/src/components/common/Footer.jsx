// components/common/Footer.jsx - Completamente modernizado para impresionar
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  ExternalLink, 
  ChevronRight, 
  ArrowUp,
  MapPin,
  Clock,
  Star,
  Zap,
  Shield,
  Award,
  TrendingUp,
  Users,
  Sparkles,
  Heart,
  Rocket,
  Globe,
  Send,
  Calendar,
  CheckCircle2,
  Crown,
  Coffee,
  Code2,
  Brain,
  Target,
  Gift,
  Lightbulb,
  Copy,
  Twitter,
  Linkedin,
  Instagram,
  Youtube
} from 'lucide-react';
import octopusLogo from "../../assets/octopus-logo.svg";

function Footer() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [hoveredSection, setHoveredSection] = useState(null);

  // Animación para elementos que aparecen al hacer scroll
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Scroll to top function with animation
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Copy to clipboard function
  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'email') {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
      } else if (type === 'phone') {
        setPhoneCopied(true);
        setTimeout(() => setPhoneCopied(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-300 overflow-hidden">
      {/* Background Elements - Premium */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient overlays */}
        <motion.div 
          className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-indigo-600/10 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            opacity: [0.08, 0.15, 0.08]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        />
        
        {/* Floating code elements */}
        {[Code2, Brain, Rocket, Target, Lightbulb, Zap].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${5 + Math.random() * 90}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          >
            <Icon className="h-4 w-4 text-purple-400/20" />
          </motion.div>
        ))}

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZm9vdGVyLWdyaWQiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDEwMCAwIEwgMCAwIDAgMTAwIiBmaWxsPSJub25lIiBzdHJva2U9IiM5MzMzZWEiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZm9vdGVyLWdyaWQpIi8+PC9zdmc+')] opacity-30" />
      </div>

      {/* Top border with gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-700"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <motion.div 
          className="pt-20 pb-12"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >


          {/* Links Sections */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {/* Services */}
            <motion.div 
              className="relative"
              onMouseEnter={() => setHoveredSection('services')}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <div className={`transition-all duration-300 ${hoveredSection === 'services' ? 'transform scale-105' : ''}`}>
                <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                  <motion.div 
                    className="h-6 w-1 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full mr-3"
                    whileHover={{ scaleY: 1.2 }}
                  />
                  Servicios
                </h4>
                <ul className="space-y-4">
                  {[
                    { name: "WhatsApp AI", path: "/services#whatsapp", icon: MessageSquare },
                    { name: "Telegram Bot", path: "/services#telegram", icon: Send },
                    { name: "Automatización Gmail", path: "/services#gmail", icon: Mail },
                    { name: "Integración Excel", path: "/services#excel", icon: Award },
                    { name: "Desarrollo Personalizado", path: "/services#custom", icon: Crown }
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.li 
                        key={index} 
                        whileHover={{ x: 3 }} 
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Link 
                          to={item.path} 
                          className="flex items-center text-gray-400 hover:text-purple-400 transition-colors duration-300 group"
                        >
                          <Icon className="h-4 w-4 mr-3 text-purple-500 group-hover:scale-110 transition-transform duration-300" />
                          <span>{item.name}</span>
                          <ChevronRight className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>

            {/* Company */}
            <motion.div 
              className="relative"
              onMouseEnter={() => setHoveredSection('company')}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <div className={`transition-all duration-300 ${hoveredSection === 'company' ? 'transform scale-105' : ''}`}>
                <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                  <motion.div 
                    className="h-6 w-1 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full mr-3"
                    whileHover={{ scaleY: 1.2 }}
                  />
                  Empresa
                </h4>
                <ul className="space-y-4">
                  {[
                    { name: "Inicio", path: "/", icon: Rocket },
                    { name: "Características", path: "/features", icon: Zap },
                    { name: "Precios", path: "/pricing", icon: Target },
                    { name: "Sobre Nosotros", path: "/about", icon: Heart },
                    { name: "Contacto", path: "/contact", icon: MessageSquare }
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.li 
                        key={index} 
                        whileHover={{ x: 3 }} 
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Link 
                          to={item.path} 
                          className="flex items-center text-gray-400 hover:text-green-400 transition-colors duration-300 group"
                        >
                          <Icon className="h-4 w-4 mr-3 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                          <span>{item.name}</span>
                          <ChevronRight className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>

            {/* Support */}
            <motion.div 
              className="relative"
              onMouseEnter={() => setHoveredSection('support')}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <div className={`transition-all duration-300 ${hoveredSection === 'support' ? 'transform scale-105' : ''}`}>
                <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                  <motion.div 
                    className="h-6 w-1 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full mr-3"
                    whileHover={{ scaleY: 1.2 }}
                  />
                  Soporte
                </h4>
                <ul className="space-y-4">
                  {[
                    { name: "Centro de Ayuda", path: "/help", icon: Lightbulb },
                    { name: "Documentación", path: "/docs", icon: Code2 },
                    { name: "Preguntas Frecuentes", path: "/pricing#faq", icon: Target },
                    { name: "Casos de Éxito", path: "/cases", icon: Award },
                    { name: "Blog", path: "/blog", icon: Coffee }
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.li 
                        key={index} 
                        whileHover={{ x: 3 }} 
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Link 
                          to={item.path} 
                          className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
                        >
                          <Icon className="h-4 w-4 mr-3 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                          <span>{item.name}</span>
                          <ChevronRight className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div 
              className="relative"
              onMouseEnter={() => setHoveredSection('contact')}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <div className={`transition-all duration-300 ${hoveredSection === 'contact' ? 'transform scale-105' : ''}`}>
                <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                  <motion.div 
                    className="h-6 w-1 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full mr-3"
                    whileHover={{ scaleY: 1.2 }}
                  />
                  Contacto
                </h4>
                <ul className="space-y-4">
                  <li>
                    <div className="flex items-start text-gray-400 group">
                      <Mail className="h-5 w-5 mr-3 mt-0.5 text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
                      <div className="flex-1">
                        <div className="flex items-center">
                          <a 
                            href="mailto:info.octopusai@gmail.com" 
                            className="hover:text-yellow-400 transition-colors duration-300"
                          >
                            info.octopusai@gmail.com
                          </a>
                          <motion.button
                            onClick={() => copyToClipboard('info.octopusai@gmail.com', 'email')}
                            className="ml-2 text-gray-500 hover:text-yellow-400 transition-colors duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            {emailCopied ? <CheckCircle2 className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                          </motion.button>
                        </div>
                        <span className="text-xs text-gray-500">Email corporativo</span>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start text-gray-400 group">
                      <Phone className="h-5 w-5 mr-3 mt-0.5 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                      <div className="flex-1">
                        <div className="flex items-center">
                          <a 
                            href="tel:+573243750360" 
                            className="hover:text-green-400 transition-colors duration-300"
                          >
                            +57 324 375 0360
                          </a>
                          <motion.button
                            onClick={() => copyToClipboard('+573243750360', 'phone')}
                            className="ml-2 text-gray-500 hover:text-green-400 transition-colors duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            {phoneCopied ? <CheckCircle2 className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                          </motion.button>
                        </div>
                        <span className="text-xs text-gray-500">WhatsApp directo</span>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start text-gray-400 group">
                      <MapPin className="h-5 w-5 mr-3 mt-0.5 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                      <div>
                        <span className="hover:text-blue-400 transition-colors duration-300">
                          Barranquilla, Colombia
                        </span>
                        <div className="text-xs text-gray-500">Atención global</div>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start text-gray-400 group">
                      <Clock className="h-5 w-5 mr-3 mt-0.5 text-purple-500 group-hover:scale-110 transition-transform duration-300" />
                      <div>
                        <span className="hover:text-purple-400 transition-colors duration-300">
                          Lun - Vie: 8:00 AM - 6:00 PM
                        </span>
                        <div className="text-xs text-gray-500">GMT-5 (Colombia)</div>
                      </div>
                    </div>
                  </li>
                  
                  <li className="pt-4">
                    <motion.a
                      href="https://wa.me/573243750360"
                      className="flex items-center text-white bg-gradient-to-r from-green-600 to-emerald-600 py-3 px-4 rounded-lg hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 font-medium text-sm group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <MessageSquare className="h-4 w-4 mr-2" />
                      <span>Solicitar demo</span>
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ 
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "easeInOut"
                        }}
                      >
                        <ExternalLink className="h-3 w-3" />
                      </motion.div>
                    </motion.a>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>


        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-gray-800 py-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div 
              className="flex items-center space-x-6 mb-6 md:mb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-500 text-sm">
                &copy; {currentYear} Octopus AI. Todos los derechos reservados.
              </p>
              
              <div className="flex space-x-4 text-sm">
                <Link to="/privacy" className="text-gray-500 hover:text-purple-400 transition-colors duration-300">
                  Privacidad
                </Link>
                <Link to="/terms" className="text-gray-500 hover:text-purple-400 transition-colors duration-300">
                  Términos
                </Link>
                <Link to="/cookies" className="text-gray-500 hover:text-purple-400 transition-colors duration-300">
                  Cookies
                </Link>
              </div>
            </motion.div>
            
            {/* Back to top button */}
            <motion.button
              onClick={scrollToTop}
              className="group flex items-center bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm border border-purple-500/30 text-purple-400 hover:text-white hover:border-purple-500/60 font-medium py-3 px-6 rounded-xl transition-all duration-300"
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              aria-label="Volver arriba"
            >
              <span className="mr-2">Volver arriba</span>
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ArrowUp className="h-4 w-4" />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;