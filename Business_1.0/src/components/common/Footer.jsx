// components/common/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, ExternalLink, ChevronRight, Twitter, Linkedin, ArrowUp } from 'lucide-react';

// Import placeholder for now - would be replaced with actual assets from assets folder
const octopusLogo = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI2E3OGJmYSIgZD0iTTEyIDJDOS41IDIgNy41IDMgNi41IDVDNS45IDUgNS4zIDUuMyA0LjggNS42QzMuNyA2LjMgMyA3LjYgMyA5QzMgMTAuNCBDMy43IDExLjcgNC44IDEyLjUgNiAxMi45QzYgMTMuMyA2IDEzLjYgNiAxNEM2IDE1LjkgNS42IDE2LjcgNC44IDE3LjNDNC42IDE3LjQgNC4zIDE3LjUgNCAxNy41QzMuNyAxOCA0IDE4LjUgNSAxOC41QzUuMyAxOC41IDYgMTguNCA2LjQgMTguMkM3LjUgMTcuNyA4IDE2LjQgOCAxNC42VjEyLjZDOSAxMi45IDEwIDE3LjQgMTEgMTcuOUMxMS4zIDE4IDEyIDE4LjUgMTIgMTguNUMxMiAxOC41IDEyLjcgMTggMTMgMTcuOUMxNCAxNy40IDE1IDEyLjYgMTYgMTIuNlYxNC42QzE2IDE2LjQgMTYuNSAxNy44IDE3LjYgMTguMkMxOCAxOC40IDE4LjcgMTguNSAxOSAxOC41QzIwIDE4LjUgMjAuMyAxOCAxOSAxNy41QzE4LjcgMTcuNSAxOC40IDE3LjQgMTguMiAxNy4zQzE3LjQgMTYuNyAxNyAxNS45IDE3IDE0QzE3IDEzLjYgMTcgMTMuMyAxNyAxMi45QzE4LjIgMTIuNSAxOS4zIDExLjcgMjAgMTAuNFYxMFYwVjlDMjAgNy42IDE5LjMgNi4zIDE4LjIgNS42QzE3LjcgNS4zIDE3LjEgNSAxNi41IDVDMTU2IDMgMTMuNSAyIDEyIDJaTTUgN0M1LjYgNyA2IDcuNCA2IDhDNiA4LjYgNS42IDkgNSA5QzQuNCA5IDQgOC42IDQgOEM0IDcuNCA0LjQgNyA1IDdaTTE5IDdDMTkuNiA3IDIwIDcuNCAyMCA4QzIwIDguNiAxOS42IDkgMTkgOUMxOC40IDkgMTggOC42IDE4IDhDMTggNy40IDE4LjQgNyAxOSA3WiI+PC9wYXRoPjwvc3ZnPg==";

function Footer() {
  // Para animar elementos al entrar en viewport
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300 pt-20 pb-8 overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-700"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-700/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-indigo-600/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Sección principal del footer */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-10"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Logo y descripción */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-4 lg:col-span-1">
            <div className="flex items-start mb-6">
              <motion.img 
                src={octopusLogo} 
                alt="Octopus Logo" 
                className="h-12 w-12 mr-3" 
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <div>
                <h3 className="text-2xl font-bold text-purple-400 mb-2">Octopus AI</h3>
                <p className="text-gray-400">Asistentes inteligentes personalizados para tu empresa</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Transformamos la comunicación empresarial con IA adaptada específicamente a las necesidades de cada negocio.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Twitter, link: "#", label: "Twitter" },
                { icon: Linkedin, link: "#", label: "LinkedIn" },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a 
                    key={index}
                    href={social.link}
                    aria-label={social.label}
                    className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-purple-400 hover:bg-gray-700 transition-colors duration-300"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Servicios */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <span className="h-5 w-1 bg-purple-500 rounded-full inline-block mr-2"></span>
              Servicios
            </h4>
            <ul className="space-y-4">
              {[
                { name: "WhatsApp AI", path: "/services#whatsapp" },
                { name: "Telegram AI", path: "/services#telegram" },
                { name: "Gmail Automation", path: "/services#gmail" },
                { name: "Excel Integration", path: "/services#excel" },
                { name: "Asistentes Personalizados", path: "/services#custom" }
              ].map((item, index) => (
                <motion.li key={index} whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link 
                    to={item.path} 
                    className="flex items-center text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 text-purple-500" />
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Enlaces rápidos */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <span className="h-5 w-1 bg-purple-500 rounded-full inline-block mr-2"></span>
              Enlaces
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Inicio", path: "/" },
                { name: "Características", path: "/features" },
                { name: "Precios", path: "/pricing" },
                { name: "Sobre Nosotros", path: "/about" },
                { name: "Contacto", path: "/contact" }
              ].map((item, index) => (
                <motion.li key={index} whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link 
                    to={item.path} 
                    className="flex items-center text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 text-purple-500" />
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contacto */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <span className="h-5 w-1 bg-purple-500 rounded-full inline-block mr-2"></span>
              Contacto
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:info@octopusai.com" 
                  className="flex items-start text-gray-400 hover:text-purple-400 transition-colors duration-300 group"
                >
                  <Mail className="h-5 w-5 mr-3 mt-0.5 text-purple-500 group-hover:scale-110 transition-transform duration-300" />
                  <span>info@octopusai.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/12345678901" 
                  className="flex items-start text-gray-400 hover:text-purple-400 transition-colors duration-300 group"
                >
                  <Phone className="h-5 w-5 mr-3 mt-0.5 text-purple-500 group-hover:scale-110 transition-transform duration-300" />
                  <span>+1 234 567 890</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://t.me/OctopusAI" 
                  className="flex items-start text-gray-400 hover:text-purple-400 transition-colors duration-300 group"
                >
                  <MessageSquare className="h-5 w-5 mr-3 mt-0.5 text-purple-500 group-hover:scale-110 transition-transform duration-300" />
                  <span>@OctopusAI</span>
                </a>
              </li>
              <li className="pt-4">
                <Link 
                  to="/contact" 
                  className="flex items-center text-white bg-gradient-to-r from-purple-600 to-indigo-600 py-2 px-4 rounded-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 font-medium text-sm"
                >
                  <span>Solicitar una demo</span>
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Link>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Separador */}
        <motion.div 
          className="border-t border-gray-800 my-10"
          initial={{ opacity: 0, width: "0%" }}
          whileInView={{ opacity: 1, width: "100%" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        ></motion.div>

        {/* Copyright y botón de subir */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            className="text-gray-500 text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            &copy; {new Date().getFullYear()} Octopus AI. Todos los derechos reservados.
          </motion.p>
          
          <motion.button
            onClick={scrollToTop}
            className="mt-6 md:mt-0 bg-gray-800 p-3 rounded-full text-purple-400 hover:text-white hover:bg-purple-600 transition-colors duration-300 flex items-center"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            aria-label="Volver arriba"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;