// components/common/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

// Import placeholder for now - would be replaced with actual assets from assets folder
const octopusLogo = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI2E3OGJmYSIgZD0iTTEyIDJDOS41IDIgNy41IDMgNi41IDVDNS45IDUgNS4zIDUuMyA0LjggNS42QzMuNyA2LjMgMyA3LjYgMyA5QzMgMTAuNCBDMy43IDExLjcgNC44IDEyLjUgNiAxMi45QzYgMTMuMyA2IDEzLjYgNiAxNEM2IDE1LjkgNS42IDE2LjcgNC44IDE3LjNDNC42IDE3LjQgNC4zIDE3LjUgNCAxNy41QzMuNyAxOCA0IDE4LjUgNSAxOC41QzUuMyAxOC41IDYgMTguNCA2LjQgMTguMkM3LjUgMTcuNyA4IDE2LjQgOCAxNC42VjEyLjZDOSAxMi45IDEwIDE3LjQgMTEgMTcuOUMxMS4zIDE4IDEyIDE4LjUgMTIgMTguNUMxMiAxOC41IDEyLjcgMTggMTMgMTcuOUMxNCAxNy40IDE1IDEyLjYgMTYgMTIuNlYxNC42QzE2IDE2LjQgMTYuNSAxNy44IDE3LjYgMTguMkMxOCAxOC40IDE4LjcgMTguNSAxOSAxOC41QzIwIDE4LjUgMjAuMyAxOCAxOSAxNy41QzE4LjcgMTcuNSAxOC40IDE3LjQgMTguMiAxNy4zQzE3LjQgMTYuNyAxNyAxNS45IDE3IDE0QzE3IDEzLjYgMTcgMTMuMyAxNyAxMi45QzE4LjIgMTIuNSAxOS4zIDExLjcgMjAgMTAuNFYxMFYwVjlDMjAgNy42IDE5LjMgNi4zIDE4LjIgNS42QzE3LjcgNS4zIDE3LjEgNSAxNi41IDVDMTU2IDMgMTMuNSAyIDEyIDJaTTUgN0M1LjYgNyA2IDcuNCA2IDhDNiA4LjYgNS42IDkgNSA5QzQuNCA5IDQgOC42IDQgOEM0IDcuNCA0LjQgNyA1IDdaTTE5IDdDMTkuNiA3IDIwIDcuNCAyMCA4QzIwIDguNiAxOS42IDkgMTkgOUMxOC40IDkgMTggOC42IDE4IDhDMTggNy40IDE4LjQgNyAxOSA3WiI+PC9wYXRoPjwvc3ZnPg==";

function Header({ isScrolled }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const location = useLocation();
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
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

  // Define animations for logo
  const logoVariants = {
    expanded: { width: "16ch" },
    collapsed: { scale: 1, width: "6ch" }
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
      transition: { 
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    open: { 
      opacity: 1,
      scale: 1,
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
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <motion.div 
            className="flex items-center z-20"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={octopusLogo} alt="Octopus AI Logo" className="h-12 w-12" />
              </motion.div>
              
              {/* Small purple glow effect */}
              <motion.div 
                className="absolute -inset-1 bg-purple-500 rounded-full filter blur-md opacity-40 -z-10"
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </div>
            
            <motion.div
              className="relative font-bold text-xl text-purple-400 overflow-hidden ml-3"
              variants={logoVariants}
              initial="expanded"
              animate={isScrolled ? "collapsed" : "expanded"}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <motion.span
                className="inline-block absolute left-0"
                variants={fullNameVariants}
                initial="expanded"
                animate={isScrolled ? "collapsed" : "expanded"}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                OCTOPUS AI
              </motion.span>
              <motion.span
                className="inline-block"
                variants={shortNameVariants}
                initial="expanded"
                animate={isScrolled ? "collapsed" : "expanded"}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                OAI
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8 items-center">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="relative group"
                >
                  <Link 
                    to={item.path} 
                    className={`text-gray-300 hover:text-purple-400 transition duration-300 py-2 font-medium ${
                      location.pathname === item.path ? 'text-purple-400' : ''
                    }`}
                  >
                    {item.name}
                    
                    {/* Active indicator underline with animation */}
                    {location.pathname === item.path && (
                      <motion.div 
                        layoutId="navIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    
                    {/* Hover indicator */}
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ opacity: location.pathname === item.path ? 0 : undefined }}
                    />
                  </Link>
                </motion.li>
              ))}
              
              <motion.li
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link 
                  to="/contact" 
                  className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-full transition duration-300 flex items-center"
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Comenzar
                  </motion.span>
                </Link>
              </motion.li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-20">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-purple-400 focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <X className="h-8 w-8" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Menu className="h-8 w-8" />
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
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-gray-900 bg-opacity-80 backdrop-blur-sm z-10 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="absolute top-24 left-4 right-4 bg-gray-800 border border-gray-700 rounded-xl shadow-2xl overflow-hidden md:hidden z-10"
          >
            <motion.nav className="py-4">
              <motion.ul className="space-y-2 p-4">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    variants={menuItemVariants}
                    whileHover={{ x: 5 }}
                    className="border-b border-gray-700 last:border-b-0 py-3"
                  >
                    <Link 
                      to={item.path} 
                      className={`block text-lg font-medium transition duration-300 ${
                        location.pathname === item.path 
                          ? 'text-purple-400' 
                          : 'text-gray-300 hover:text-purple-400'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
                
                <motion.li variants={menuItemVariants} className="pt-4">
                  <Link 
                    to="/contact"
                    onClick={() => setIsMenuOpen(false)} 
                    className="block bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg text-center transition duration-300"
                  >
                    ¡Comienza ahora!
                  </Link>
                </motion.li>
              </motion.ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;