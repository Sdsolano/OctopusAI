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
    <Router basename="/OctopusAI">
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
  );
}

// Pantalla de carga
function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 flex flex-col items-center justify-center z-50 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Elementos decorativos de fondo sutiles (opcional, como en About.jsx) */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 10, 0],
          opacity: [0.1, 0.25, 0.1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/10 rounded-full filter blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -10, 0],
          opacity: [0.05, 0.2, 0.05]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />

      <div className="text-center relative z-10">
        <motion.div
          className="mb-6" // Ajusta el margen si es necesario
          animate={{
            rotate: 360, // Mantiene la animación de giro del logo original
          }}
          transition={{
            duration: 1.5, // Igual que el CSS original
            repeat: Infinity,
            ease: "linear", // Igual que el CSS original
          }}
        >
          <img
            src={octopusLogo}
            alt="Octopus AI Logo"
            className="w-20 h-20 mx-auto" // Mantiene el tamaño original del logo
          />
        </motion.div>

        <motion.h2
          className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Octopus AI
        </motion.h2>

        <motion.p
          className="text-md text-gray-300 mb-8" // Estilo de texto actualizado
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Iniciando la revolución...
        </motion.p>

        {/* Barra de carga modernizada */}
        <div className="w-40 h-1.5 bg-gray-700/50 rounded-full overflow-hidden mx-auto shadow-inner">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
            style={{ width: '40%' }} // El segmento que se mueve es el 40% del ancho de la barra
            initial={{ x: "-150%" }} // Comienza fuera de la pantalla a la izquierda
            animate={{ x: "250%" }}   // Se mueve a través hasta salir por la derecha (100% / 40% = 2.5 -> 250%)
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "linear", // Velocidad constante para un bucle suave
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default App;