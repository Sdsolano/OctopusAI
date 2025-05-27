// App.jsx - Componente principal actualizado
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

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
    <Router>
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
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="mb-6 relative">
          <img 
            src={octopusLogo} 
            alt="Octopus AI Logo" 
            className="w-20 h-20 mx-auto"
            style={{
              animation: 'spin 1.5s linear infinite'
            }}
          />
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-3 bg-gray-800 rounded-full flex justify-center items-center overflow-hidden">
            <div className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 w-1/2 animate-pulse rounded-full"></div>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-purple-400 mb-1">Octopus AI</h2>
        <p className="text-gray-400">Cargando...</p>
      </div>
      
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

export default App;