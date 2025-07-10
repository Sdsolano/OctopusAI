// App.jsx - Componente principal actualizado
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

// Import components
import Header from './components/common/Header';
import Footer from './components/common/Footer';

// Import pages
import Home from './pages/Home';
import Services from './pages/Services';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';

// Import the octopus logo
import octopusLogo from './assets/octopus-logo.svg';
import { LanguageProvider } from './contexts/LanguageContext';

// ScrollToTop component para manejar el scroll en cambios de página
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Efecto para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Efecto para simular carga inicial
  useEffect(() => {
    // Simular tiempo de carga
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <LanguageProvider>
    <Router basename="/">
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900 text-gray-100 flex flex-col">
        <Header isScrolled={isScrolled} />

        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/features" element={<Features />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </Router>
    </LanguageProvider>
  );
}

// Pantalla de carga
// LoadingScreen - Versión PREMIUM para App.jsx
function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black flex items-center justify-center z-50 overflow-hidden">
      {/* Background Elements - Ultra Premium */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient overlays animados */}
        <motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-600/20 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.4, 1],
            rotate: [360, 180, 0],
            opacity: [0.15, 0.4, 0.15]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Líneas de código flotantes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-purple-500/10 font-mono text-sm"
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${5 + Math.random() * 90}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          >
            {['{ AI }', '< ML >', '[ NLP ]', '( Bot )', '=> AI', 'async', 'await', 'neural'][i]}
          </motion.div>
        ))}

        {/* Grid pattern animado */}
        <motion.div 
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0ibG9hZGluZy1ncmlkIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMDAgMCBMIDAgMCAwIDEwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOTMzM2VhIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1vcGFjaXR5PSIwLjA1Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2xvYWRpbmctZ3JpZCkiLz48L3N2Zz4=')] opacity-30"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      {/* Main Content Container */}
      <motion.div 
        className="text-center relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Logo Container - Espectacular */}
        <div className="mb-8 relative">
          {/* Glow rings múltiples */}
          <motion.div 
            className="absolute inset-0 w-32 h-32 mx-auto"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 opacity-30"
                 style={{ 
                   background: 'conic-gradient(from 0deg, #8b5cf6, #ec4899, #3b82f6, #8b5cf6)',
                   WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))',
                   mask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))'
                 }}>
            </div>
          </motion.div>
          
          <motion.div 
            className="absolute inset-0 w-28 h-28 mx-auto mt-2 ml-2"
            animate={{ rotate: -360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute inset-0 rounded-full border border-transparent bg-gradient-to-r from-indigo-400 to-purple-400 opacity-20"
                 style={{ 
                   background: 'conic-gradient(from 180deg, #3b82f6, #8b5cf6, #3b82f6)',
                   WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 1px), #000 calc(100% - 1px))',
                   mask: 'radial-gradient(farthest-side, transparent calc(100% - 1px), #000 calc(100% - 1px))'
                 }}>
            </div>
          </motion.div>

          {/* Logo principal con efectos */}
          <motion.div 
            className="relative w-24 h-24 mx-auto"
            animate={{ 
              rotateY: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Glow background */}
            <motion.div 
              className="absolute -inset-4 bg-gradient-to-r from-purple-600/40 to-indigo-600/40 rounded-full filter blur-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            <img 
              src={octopusLogo} 
              alt="Octopus AI Logo" 
              className="w-24 h-24 relative z-10 drop-shadow-2xl"
            />
            
            {/* Sparkles alrededor del logo */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
                style={{
                  top: `${20 + Math.cos(i * 60 * Math.PI / 180) * 40}px`,
                  left: `${44 + Math.sin(i * 60 * Math.PI / 180) * 40}px`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Texto con typing effect */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.h2 
            className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              backgroundSize: "200% 200%"
            }}
          >
            OCTOPUS AI
          </motion.h2>
          

        </motion.div>

        {/* Progress Bar Ultra Premium */}
        <motion.div 
          className="w-80 mx-auto mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="relative">
            {/* Background de la barra con glow */}
            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden relative">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-full"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                }}
              />
            </div>
            
            {/* Barra de progreso animada */}
            <motion.div 
              className="absolute top-0 left-0 h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 rounded-full shadow-lg shadow-purple-500/50"
              initial={{ width: "0%" }}
              animate={{ width: ["0%", "100%", "0%"] }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Shine effect en la barra */}
            <motion.div 
              className="absolute top-0 left-0 h-2 w-full bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          
          {/* Porcentaje o estados */}
          <motion.div 
            className="flex justify-between text-sm text-gray-400 mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Cargando IA...
            </motion.span>
            <motion.span
              className="text-purple-400 font-mono"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            >
              99%
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Loading dots premium */}
        <motion.div 
          className="flex justify-center space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Partículas flotantes adicionales */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;