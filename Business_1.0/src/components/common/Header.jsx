// components/common/Header.jsx - Completamente modernizado para impresionar + Idioma
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
  ExternalLink,
  Loader2
} from 'lucide-react';
import octopusLogo from "../../assets/octopus-logo.svg";
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../hooks/useTranslation';

function Header({ isScrolled }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const location = useLocation();
  
  // Language context
  const { language, changeLanguage, isTranslating, browserLanguage } = useLanguage();
  
  // Translation hook
  const { t } = useTranslation();
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsLanguageOpen(false);
  }, [location]);

  // Close menu when screen resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
        setIsLanguageOpen(false);
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
    { name: t('nav.home'), path: '/' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.pricing'), path: '/pricing' },
    { name: t('nav.about'), path: '/about' }
  ];

  // Language configuration
  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);
  const isBrowserDetected = browserLanguage === language;

  const handleLanguageChange = async (langCode) => {
    setIsLanguageOpen(false);
    await changeLanguage(langCode);
  };

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
              
              {/* Language Toggle Button - Desktop */}
              <motion.li
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative"
              >
                <motion.button
                  onClick={() => !isTranslating && setIsLanguageOpen(!isLanguageOpen)}
                  disabled={isTranslating}
                  className={`flex items-center space-x-2 bg-purple-900/30 hover:bg-purple-900/50 border border-purple-500/40 hover:border-purple-500/60 rounded-xl px-3 py-3 text-sm font-medium text-purple-300 transition-all duration-300 ml-2 ${
                    isTranslating ? 'opacity-60 cursor-not-allowed' : ''
                  }`}
                  whileHover={!isTranslating ? { scale: 1.05 } : {}}
                  whileTap={!isTranslating ? { scale: 0.95 } : {}}
                >
                  {isTranslating ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Globe className="h-4 w-4" />
                  )}
                  
                  <span className="hidden sm:inline">{currentLanguage?.flag}</span>
                  
                  <span className="hidden md:flex items-center space-x-1">
                    <span>
                      {isTranslating ? t('common.loading') : currentLanguage?.name}
                    </span>
                    {isBrowserDetected && !isTranslating && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="flex items-center"
                        title="Auto-detected from browser"
                      >
                        <Zap className="h-3 w-3 text-green-400 ml-1" />
                      </motion.div>
                    )}
                  </span>
                  
                  <ChevronDown 
                    className={`h-4 w-4 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} 
                  />
                </motion.button>

                {/* Language Dropdown */}
                <AnimatePresence>
                  {isLanguageOpen && !isTranslating && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-48 bg-gray-800/95 backdrop-blur-sm border border-purple-500/30 rounded-lg shadow-xl z-50"
                    >
                      <div className="p-2">
                        <div className="text-xs text-gray-400 px-2 py-1 mb-2 border-b border-gray-700">
                          {browserLanguage === 'en' ? 'Browser: English' : 'Navegador: Español'}
                        </div>
                        
                        {languages.map((lang) => (
                          <motion.button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className={`w-full flex items-center space-x-3 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                              language === lang.code
                                ? 'bg-purple-600/50 text-white'
                                : 'text-gray-300 hover:bg-purple-900/30 hover:text-white'
                            }`}
                            whileHover={{ x: 4 }}
                          >
                            <span className="text-lg">{lang.flag}</span>
                            <span className="flex-1 text-left">{lang.name}</span>
                            
                            {browserLanguage === lang.code && (
                              <Zap className="h-3 w-3 text-green-400" title="Browser language" />
                            )}
                            
                            {language === lang.code && (
                              <motion.div
                                layoutId="activeLanguage"
                                className="w-2 h-2 bg-purple-400 rounded-full"
                              />
                            )}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
              
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
                      {t('hero.startButton')}
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
              aria-label={isMenuOpen ? t('common.closeMenu') : t('common.openMenu')}
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
                
                {/* Language Toggle - Mobile */}
                <motion.li variants={menuItemVariants} className="pt-4 border-t border-gray-700/30">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">
                        {browserLanguage === 'en' ? 'Language / Idioma' : 'Idioma / Language'}
                      </span>
                      {isTranslating && (
                        <Loader2 className="h-4 w-4 animate-spin text-purple-400" />
                      )}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {languages.map((lang) => (
                        <motion.button
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang.code)}
                          disabled={isTranslating}
                          className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                            language === lang.code
                              ? 'bg-purple-600/50 text-white border border-purple-500/60'
                              : 'bg-gray-800/50 text-gray-300 hover:bg-purple-900/30 border border-gray-600/50'
                          } ${isTranslating ? 'opacity-50 cursor-not-allowed' : ''}`}
                          whileHover={!isTranslating ? { scale: 1.02 } : {}}
                          whileTap={!isTranslating ? { scale: 0.98 } : {}}
                        >
                          <span className="text-lg">{lang.flag}</span>
                          <span className="text-sm">{lang.name}</span>
                          {browserLanguage === lang.code && (
                            <Zap className="h-3 w-3 text-green-400" />
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.li>
                
                {/* Mobile CTA */}
                <motion.li variants={menuItemVariants} className="pt-4">
                  <Link 
                    to="/contact"
                    onClick={() => setIsMenuOpen(false)} 
                    className="flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 group"
                  >
                    <Sparkles className="h-5 w-5 mr-2" />
                    <span>{t('hero.startButton')}</span>
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
                      {t('nav.contact')}
                    </a>
                  </div>
                </motion.li>
              </motion.ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Language Dropdown Overlay (Desktop) */}
      {isLanguageOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsLanguageOpen(false)}
        />
      )}

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