// components/sections/home/Hero.jsx - Versión con tabs de videos
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Play, MessageSquare, Send } from 'lucide-react';
import whatsappVideo from '/src/images/whatsapp.mp4';
import telegramVideo from '/src/images/telegram.mp4';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../../hooks/useTranslation';

function Hero() {
  const { t } = useTranslation();
  const particlesRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const videoRef = useRef(null);
  
  const videos = [
    {
      id: 'whatsapp',
      src: whatsappVideo,
      title: t('services.whatsapp.title'),
      subtitle: t('services.whatsapp.subtitle'),
      description: t('services.whatsapp.automate'),
      icon: MessageSquare,
      color: 'from-green-500 to-emerald-700'
    },
    {
      id: 'telegram',
      src: telegramVideo, 
      title: t('services.telegram.title'),
      subtitle: 'Inteligencia avanzada',
      description: 'Bot personalizado que aprende de tu negocio y responde como un experto',
      icon: Send,
      color: 'from-blue-500 to-indigo-700'
    }
  ];

  // Auto-play del video cuando cambia
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Handle autoplay restrictions
      });
    }
  }, [activeTab]);
  
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
      
      <div className="container mx-auto px-6 pt-32 pb-20 md:pb-32 flex flex-col lg:flex-row items-center justify-between relative z-10 gap-8">
        {/* Contenido */}
        <div className="flex flex-col lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
          {/* Badge */}
          <motion.div 
            className="inline-block bg-purple-900/30 border border-purple-500/30 rounded-full px-4 py-1 text-sm font-medium text-purple-300 mb-6 mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="flex items-center">
              <Star className="h-3 w-3 mr-1 text-purple-400" fill="currentColor" /> 
              {t('hero.title')}
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline lg:block">{t('hero.titlePart1')}</span>{" "}
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 pb-2">
              {t('hero.titleHighlight')}
            </span>{" "}
            <span className="inline lg:block">{t('hero.titlePart2')}</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('hero.description')}
          </motion.p>
          

<motion.div 
  className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.6 }}
>
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <Link
      to="/contact"
      className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-purple-600/20 transition duration-300 relative overflow-hidden group flex items-center justify-center"
    >
      <span className="relative z-10">{t('hero.startButton')}</span>
      <span 
        className="absolute right-4 opacity-0 group-hover:opacity-100 group-hover:right-6 transition-all duration-300"
      >
        <ArrowRight className="h-5 w-5" />
      </span>
      <div 
        className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
    </Link>
  </motion.div>

  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <Link
      to="/services"
      className="border-2 border-purple-500/40 bg-purple-900/10 backdrop-blur-sm text-purple-300 font-bold py-4 px-8 rounded-xl hover:bg-purple-900/30 hover:border-purple-500/60 transition duration-300 flex items-center justify-center"
    >
      {t('hero.viewSolutions')}
    </Link>
  </motion.div>
</motion.div>
          
          {/* Estadísticas */}
          <motion.div 
            className="flex flex-wrap justify-center lg:justify-start gap-6 mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {[
              { value: '98%', label: t('stats.satisfaction') },
              { value: '24/7', label: t('stats.availability') }
            ].map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-2xl font-bold text-purple-400">{stat.value}</span>
                <span className="text-sm text-gray-400">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Videos con Tabs */}
        <motion.div 
          className="relative lg:w-1/2 order-1 lg:order-2 flex justify-center max-w-xs mx-auto lg:max-w-sm"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative w-full">
            {/* Marco con brillo */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur opacity-30" />
            
            <div className="relative bg-gray-800 rounded-2xl overflow-hidden">
              {/* Tabs Navigation */}
              <div className="flex p-2 bg-gray-900/50 backdrop-blur-sm">
                {videos.map((video, index) => {
                  const Icon = video.icon;
                  return (
                    <motion.button
                      key={video.id}
                      onClick={() => setActiveTab(index)}
                      className={`flex-1 flex items-center justify-center space-x-1 py-2 px-2 rounded-lg transition-all duration-300 ${
                        activeTab === index 
                          ? `bg-gradient-to-r ${video.color} text-white shadow-lg` 
                          : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="font-medium text-sm">{video.title}</span>
                    </motion.button>
                  );
                })}
              </div>
              
              {/* Video Content */}
              <div className="relative h-[400px] md:h-[500px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                      autoPlay
                    >
                      <source src={videos[activeTab].src} type="video/mp4" />
                      {t('common.error') || 'Tu navegador no soporta videos HTML5.'}
                    </video>
                  </motion.div>
                </AnimatePresence>
                
                {/* Video Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/95 to-transparent p-4">
                  <motion.div
                    key={`info-${activeTab}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center mb-2">
                      <div className={`bg-gradient-to-r ${videos[activeTab].color} p-1.5 rounded-lg mr-2`}>
                        {React.createElement(videos[activeTab].icon, { className: "h-4 w-4 text-white" })}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{videos[activeTab].title}</h3>
                        <p className="text-xs text-gray-300">{videos[activeTab].subtitle}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      {videos[activeTab].description}
                    </p>
                  </motion.div>
                </div>
                
                {/* Play Button Overlay (opcional) */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/70 transition-all duration-300"
                  onClick={() => {
                    if (videoRef.current) {
                      if (videoRef.current.paused) {
                        videoRef.current.play();
                      } else {
                        videoRef.current.pause();
                      }
                    }
                  }}
                >
                  <Play className="h-4 w-4" />
                </motion.button>
              </div>
            </div>
            
            {/* Elemento decorativo - mensaje flotante */}
            <motion.div 
              className="absolute -bottom-8 -left-8 bg-gray-800 border border-gray-700 p-3 rounded-lg shadow-xl max-w-xs hidden md:block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-purple-500 rounded-full p-1.5 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-300">
                    {t('services.whatsapp.tagline')}
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Elemento decorativo - estrella brillante */}

          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;