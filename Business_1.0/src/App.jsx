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
          <svg className="w-20 h-20 mx-auto" viewBox="0 0 24 24">
            <path
              fill="#a78bfa"
              d="M12 2C9.5 2 7.5 3 6.5 5C5.9 5 5.3 5.3 4.8 5.6C3.7 6.3 3 7.6 3 9C3 10.4 C3.7 11.7 4.8 12.5 6 12.9C6 13.3 6 13.6 6 14C6 15.9 5.6 16.7 4.8 17.3C4.6 17.4 4.3 17.5 4 17.5C3.7 18 4 18.5 5 18.5C5.3 18.5 6 18.4 6.4 18.2C7.5 17.7 8 16.4 8 14.6V12.6C9 12.9 10 17.4 11 17.9C11.3 18 12 18.5 12 18.5C12 18.5 12.7 18 13 17.9C14 17.4 15 12.6 16 12.6V14.6C16 16.4 16.5 17.8 17.6 18.2C18 18.4 18.7 18.5 19 18.5C20 18.5 20.3 18 19 17.5C18.7 17.5 18.4 17.4 18.2 17.3C17.4 16.7 17 15.9 17 14C17 13.6 17 13.3 17 12.9C18.2 12.5 19.3 11.7 20 10.4V10V0V9C20 7.6 19.3 6.3 18.2 5.6C17.7 5.3 17.1 5 16.5 5C15.6 3 13.5 2 12 2Z"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 12 12"
                to="360 12 12"
                dur="1.5s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-3 bg-gray-800 rounded-full flex justify-center items-center overflow-hidden">
            <div className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 w-1/2 animate-pulse rounded-full"></div>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-purple-400 mb-1">Octopus AI</h2>
        <p className="text-gray-400">Cargando...</p>
      </div>
    </div>
  );
}

export default App;