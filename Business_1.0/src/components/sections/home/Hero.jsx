// components/sections/home/Hero.jsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

function Hero() {
  const particlesRef = useRef(null);
  
  // Efecto de partículas en el fondo
  useEffect(() => {
    if (!particlesRef.current) return;
    
    const canvas = particlesRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 80;
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `rgba(${167 + Math.random() * 30}, ${139 + Math.random() * 30}, ${250}, ${0.3 + Math.random() * 0.3})`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    const init = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      
      requestAnimationFrame(animate);
    };
    
    init();
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* Fondo de partículas */}
      <canvas 
        ref={particlesRef} 
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />
      
      {/* Gradientes de fondo */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-gray-900/40 to-gray-900 z-0" />
      
      {/* Círculo decorativo */}
      <motion.div 
        className="absolute -top-40 -right-40 w-96 h-96 bg-purple-700/20 rounded-full filter blur-3xl z-0"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 10, 0],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-600/20 rounded-full filter blur-3xl z-0"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, -10, 0],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <div className="container mx-auto px-6 pt-32 pb-20 md:pb-32 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Contenido */}
        <div className="flex flex-col md:w-1/2 text-center md:text-left order-2 md:order-1 mt-12 md:mt-0">
          {/* Badge */}
          <motion.div 
            className="inline-block bg-purple-900/30 border border-purple-500/30 rounded-full px-4 py-1 text-sm font-medium text-purple-300 mb-6 mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="flex items-center">
              <Star className="h-3 w-3 mr-1 text-purple-400" fill="currentColor" /> 
              La revolución de la IA empresarial
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline md:block">Transforma tu</span>{" "}
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 pb-2">
              comunicación empresarial
            </span>{" "}
            <span className="inline md:block">con IA</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Asistentes inteligentes personalizados para WhatsApp, Telegram y Gmail que atienden a tus clientes 24/7.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a 
              href="/contact" 
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-purple-600/20 transition duration-300 relative overflow-hidden group flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Comenzar ahora</span>
              <motion.span 
                className="absolute right-4 opacity-0 group-hover:opacity-100 group-hover:right-6 transition-all duration-300"
              >
                <ArrowRight className="h-5 w-5" />
              </motion.span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.a>
            
            <motion.a 
              href="/services" 
              className="border-2 border-purple-500/40 bg-purple-900/10 backdrop-blur-sm text-purple-300 font-bold py-4 px-8 rounded-xl hover:bg-purple-900/30 hover:border-purple-500/60 transition duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Ver soluciones
            </motion.a>
          </motion.div>
          
          {/* Estadísticas */}
          <motion.div 
            className="flex flex-wrap justify-center md:justify-start gap-6 mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {[
              { value: '95%', label: 'Satisfacción' },
              { value: '24/7', label: 'Disponibilidad' },
              { value: '+200', label: 'Clientes' }
            ].map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-2xl font-bold text-purple-400">{stat.value}</span>
                <span className="text-sm text-gray-400">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Imagen o ilustración */}
        <motion.div 
          className="relative md:w-1/2 order-1 md:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative">
            {/* Marco con brillo */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur opacity-30" />
            <div className="relative bg-gray-800 p-2 rounded-2xl">
              <img 
                src="https://picsum.photos/800/600" 
                alt="AI Assistant" 
                className="w-full h-auto rounded-xl shadow-2xl" 
              />
            </div>
            
            {/* Elemento decorativo - mensaje flotante */}
            <motion.div 
              className="absolute -bottom-10 -left-10 bg-gray-800 border border-gray-700 p-4 rounded-lg shadow-xl max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-purple-500 rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-300">
                    Automatiza tu atención al cliente y aumenta tus ventas con AI
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Elemento decorativo - estrella brillante */}
            <motion.div
              className="absolute -top-5 -right-5 text-yellow-400"
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, 5, 0],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Star className="h-10 w-10" fill="currentColor" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;