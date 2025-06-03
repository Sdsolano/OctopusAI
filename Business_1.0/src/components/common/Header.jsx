// components/common/Header.jsx - Completamente modernizado para impresionar
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Zap, 
  Star, 
  Rocket,
  Sparkles,
  ArrowRight,
  MessageSquare,
  Phone,
  Crown,
  Globe,
  ExternalLink
} from 'lucide-react';
import octopusLogo from "../../assets/octopus-logo.svg";

function Header({ isScrolled }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const location = useLocation();
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  // Close menu when screen resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Track mouse for premium effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Logo animation variants
  const logoVariants = {
    expanded: { width: "16ch" },
    collapsed: { width: "8ch" }
  };

  const fullNameVariants = {
    expanded: { opacity: 1, x: 0 },
    collapsed: { opacity: 0, x: -20 }
  };

  const shortNameVariants = {
    expanded: { opacity: 0, x: 20 },
    collapsed: { opacity: 1, x: 0 }
  };

  // Menu animation variants
  const menuVariants = {
    closed: { 
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: { 
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    open: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    }
  };

  const menuItemVariants = {
    closed: { y: 20, opacity: 0 },
    open: { y: 0, opacity: 1 }
  };

  // Navigation items
  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/services' },
    { name: 'Características', path: '/features' },
    { name: 'Precios', path: '/pricing' },
    { name: 'Nosotros', path: '/about' }
  ];

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled || isMenuOpen 
          ? 'bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-gray-800/50' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Glow effect when scrolled */}
      {isScrolled && (
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-transparent to-indigo-600/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      )}

      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Section - Premium */}
          <motion.div 
            className="flex items-center z-20 relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link to="/" className="flex items-center group">
              <div className="relative mr-4">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img src={octopusLogo} alt="Octopus AI Logo" className="h-12 w-12 relative z-10" />
                  
                  {/* Glow effect */}
                  <motion.div 
                    className="absolute -inset-2 bg-gradient-to-r from-purple-600/40 to-indigo-600/40 rounded-full filter blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{ 
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                  
                  {/* Rotating border */}
                  <motion.div 
                    className="absolute -inset-1 border-2 border-transparent bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100"
                    style={{ 
                      background: 'conic-gradient(from 0deg, #8b5cf6, #3b82f6, #8b5cf6)',
                      WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))',
                      mask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))'
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.div>
              </div>
              
              <motion.div
                className="relative font-bold text-xl overflow-hidden"
                variants={logoVariants}
                initial="expanded"
                animate={isScrolled ? "collapsed" : "expanded"}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <motion.span
                  className="absolute left-0 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent"
                  variants={fullNameVariants}
                  initial="expanded"
                  animate={isScrolled ? "collapsed" : "expanded"}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  OCTOPUS AI
                </motion.span>
                <motion.span
                  className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent"
                  variants={shortNameVariants}
                  initial="expanded"
                  animate={isScrolled ? "collapsed" : "expanded"}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  OAI
                </motion.span>
              </motion.div>
            </Link>
          </motion.div>

          {/* Desktop Navigation - Premium */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-2 items-center">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                  className="relative group"
                >
                  <Link 
                    to={item.path} 
                    className={`relative flex items-center text-gray-300 hover:text-white transition-all duration-300 py-3 px-4 rounded-xl font-medium group ${
                      location.pathname === item.path ? 'text-purple-400' : ''
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    
                    {/* Hover background */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.05 }}
                    />
                    
                    {/* Active indicator */}
                    {location.pathname === item.path && (
                      <motion.div 
                        layoutId="navIndicator"
                        className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-indigo-600/30 rounded-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.li>
              ))}
              
              {/* CTA Button - Premium */}
              <motion.li
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/contact" 
                    className="relative bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 ml-4 overflow-hidden group flex items-center"
                  >
                    <span className="relative z-10 flex items-center">
                      <Rocket className="h-4 w-4 mr-2" />
                      Comenzar
                    </span>
                    
                    {/* Animated background */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    
                    {/* Shine effect */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: '-100%' }}
                      animate={{ x: '100%' }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        repeatDelay: 3,
                        ease: "easeInOut"
                      }}
                    />
                  </Link>
                </motion.div>
              </motion.li>
            </ul>
          </nav>

          {/* Mobile Menu Button - Premium */}
          <div className="lg:hidden z-20">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-3 text-gray-300 hover:text-purple-400 focus:outline-none group"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {/* Button background */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10"
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10"
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-10 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu - Premium */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="absolute top-full left-4 right-4 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden lg:hidden z-10 mt-2"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-2xl blur" />
            
            <motion.nav className="relative z-10 py-6">
              <motion.ul className="space-y-2 px-6">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    variants={menuItemVariants}
                    whileHover={{ x: 5 }}
                    className="border-b border-gray-700/30 last:border-b-0 pb-4 last:pb-0"
                  >
                    <Link 
                      to={item.path} 
                      className={`flex items-center justify-between text-lg font-medium transition-colors duration-300 py-2 ${
                        location.pathname === item.path 
                          ? 'text-purple-400' 
                          : 'text-gray-300 hover:text-purple-400'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span>{item.name}</span>
                      {location.pathname === item.path && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-2 h-2 bg-purple-400 rounded-full"
                        />
                      )}
                    </Link>
                  </motion.li>
                ))}
                
                {/* Mobile CTA */}
                <motion.li variants={menuItemVariants} className="pt-4">
                  <Link 
                    to="/contact"
                    onClick={() => setIsMenuOpen(false)} 
                    className="flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 group"
                  >
                    <Sparkles className="h-5 w-5 mr-2" />
                    <span>¡Comienza ahora!</span>
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
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </Link>
                </motion.li>
                
                {/* Quick contact */}
                <motion.li variants={menuItemVariants} className="pt-4">
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="https://wa.me/573243750360"
                      className="flex items-center justify-center bg-green-600/20 border border-green-500/30 text-green-400 font-medium py-3 px-4 rounded-lg hover:bg-green-600/30 transition-all duration-300"
                    >
                      <MessageSquare className="h-4 w-4 mr-2" />
                      WhatsApp
                    </a>
                    <a
                      href="tel:+573243750360"
                      className="flex items-center justify-center bg-blue-600/20 border border-blue-500/30 text-blue-400 font-medium py-3 px-4 rounded-lg hover:bg-blue-600/30 transition-all duration-300"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Llamar
                    </a>
                  </div>
                </motion.li>
              </motion.ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background particles (subtle) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/20 rounded-full"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </motion.header>
  );
}

export default Header;