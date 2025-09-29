// components/sections/services/ServiceCard.jsx - Modernizado
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, MessageSquare, Calendar, Mail, Database, Send, Sparkles, Zap, Bot, User } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';

function ServiceCard({ id, title, description, features, icon, reversed, webhookUrl }) {
  const { t } = useTranslation();
  
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'MessageSquare': return <MessageSquare className="h-8 w-8 text-white" />;
      case 'Calendar': return <Calendar className="h-8 w-8 text-white" />;
      case 'Mail': return <Mail className="h-8 w-8 text-white" />;
      case 'Database': return <Database className="h-8 w-8 text-white" />;
      default: return <MessageSquare className="h-8 w-8 text-white" />;
    }
  };

  // Colores por servicio
  const getServiceColor = (iconName) => {
    switch (iconName) {
      case 'MessageSquare': return 'from-green-500 via-emerald-500 to-teal-600';
      case 'Calendar': return 'from-blue-500 via-indigo-500 to-purple-600';
      case 'Mail': return 'from-purple-500 via-violet-500 to-indigo-600';
      case 'Database': return 'from-rose-500 via-pink-500 to-purple-600';
      default: return 'from-purple-500 to-indigo-600';
    }
  };

  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [messageHistory, setMessageHistory] = useState([]);

  const sendRequest = async () => {
    const value = inputText.trim();
    if (value.length === 0 || !webhookUrl) return;

    setLoading(true);
    
    // Agregar mensaje del usuario al historial
    const userMessage = { type: 'user', content: value, timestamp: new Date() };
    setMessageHistory(prev => [...prev, userMessage]);
    setInputText('');

    const payload = {
      nombre: 'Cliente',
      message: value,
    };

    try {
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorMessage = 'Error en la conexión con el servidor';
        setMessageHistory(prev => [...prev, { type: 'bot', content: errorMessage, timestamp: new Date() }]);
        setLoading(false);
        return;
      }

      const data = await res.text();
      setMessageHistory(prev => [...prev, { type: 'bot', content: data, timestamp: new Date() }]);
    } catch (error) {
      const errorMessage = 'Error de conexión: ' + error.message;
      setMessageHistory(prev => [...prev, { type: 'bot', content: errorMessage, timestamp: new Date() }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendRequest();
    }
  };

  const LoadingSpinner = () => (
    <motion.div 
      className="flex items-center space-x-2 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex space-x-1">
        <motion.div 
          className="w-2 h-2 bg-purple-500 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
        />
        <motion.div 
          className="w-2 h-2 bg-purple-500 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
        />
        <motion.div 
          className="w-2 h-2 bg-purple-500 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
        />
      </div>
      <span className="text-gray-400 text-sm">{t('serviceCard.demo.writing')}</span>
    </motion.div>
  );

  const serviceColor = getServiceColor(icon);

  return (
    <div
      id={id}
      className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
    >
      {/* Información del servicio */}
      <motion.div
        className={`lg:w-1/2 ${reversed ? 'lg:pl-8' : 'lg:pr-8'}`}
        initial={{ opacity: 0, x: reversed ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Header con icono mejorado */}
        <div className="flex items-start mb-6">
          <motion.div 
            className={`bg-gradient-to-br ${serviceColor} p-4 rounded-xl mr-4 relative overflow-hidden group`}
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {renderIcon(icon)}
            
            {/* Efecto de brillo */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>
          
          <div className="flex-1">
            <motion.h3 
              className="text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {title}
            </motion.h3>
            
            {/* Línea decorativa animada */}
            <motion.div 
              className={`h-1 bg-gradient-to-r ${serviceColor} rounded-full mb-4`}
              initial={{ width: 0 }}
              whileInView={{ width: '60%' }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
        
        {/* Descripción */}
        <motion.p 
          className="text-gray-300 mb-6 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>
        
        {/* Lista de características modernizada */}
        <motion.div 
          className="space-y-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold text-purple-300 mb-4 flex items-center">
            <Sparkles className="h-5 w-5 mr-2 text-purple-400" />
            {t('serviceCard.featuresTitle')}
          </h4>
          
          <div className="grid grid-cols-1 gap-3">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className="flex items-start group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="flex-shrink-0 mr-3 mt-1"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <CheckCircle className="h-5 w-5 text-green-400" />
                </motion.div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Demo interactivo mejorado */}
      <motion.div
        className="lg:w-1/2 w-full"
        initial={{ opacity: 0, x: reversed ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="relative">
          {/* Efecto de brillo exterior */}
          <motion.div 
            className={`absolute -inset-1 bg-gradient-to-r ${serviceColor} rounded-2xl blur opacity-20`}
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          <div className="relative bg-gray-800/90 backdrop-blur-xl rounded-2xl border border-gray-700/50 overflow-hidden">
            {/* Header del demo */}
            <div className="bg-gray-900/80 p-4 border-b border-gray-700/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bot className="h-4 w-4 text-purple-400" />
                    <span className="text-sm font-medium text-gray-300">{t('serviceCard.demo.liveDemo')}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  {webhookUrl ? (
                    <>
                      <motion.div 
                        className="w-2 h-2 bg-green-400 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <span className="text-xs text-green-400 font-medium">{t('serviceCard.demo.connected')}</span>
                    </>
                  ) : (
                    <>
                      <div className="w-2 h-2 bg-gray-400 rounded-full" />
                      <span className="text-xs text-gray-400">{t('serviceCard.demo.staticDemo')}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
            
            {/* Área de chat */}
            <div className="h-80 p-4 bg-gradient-to-b from-gray-900/50 to-gray-800/50 overflow-y-auto">
              {messageHistory.length === 0 ? (
                <motion.div 
                  className="flex flex-col items-center justify-center h-full text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div 
                    className={`bg-gradient-to-br ${serviceColor} p-4 rounded-full mb-4`}
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Bot className="h-8 w-8 text-white" />
                  </motion.div>
                  <h4 className="text-lg font-semibold text-white mb-2">{t('serviceCard.demo.title')}</h4>
                  <p className="text-gray-400 text-sm mb-4">
                    {t('serviceCard.demo.subtitle')}
                    <br />
                    {t('serviceCard.demo.description')}
                  </p>
                  
                  {/* Sugerencias de ejemplo */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {t('serviceCard.demo.suggestions').map((suggestion, i) => (
                      <motion.button
                        key={i}
                        className="text-xs bg-purple-900/30 hover:bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300"
                        onClick={() => setInputText(suggestion)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {suggestion}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <div className="space-y-4">
                  <AnimatePresence>
                    {messageHistory.map((message, index) => (
                      <motion.div
                        key={index}
                        className={`flex items-start space-x-3 ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        {/* Avatar */}
                        <motion.div 
                          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                            message.type === 'user' 
                              ? 'bg-gradient-to-br from-blue-500 to-indigo-600' 
                              : `bg-gradient-to-br ${serviceColor}`
                          }`}
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {message.type === 'user' ? (
                            <User className="h-4 w-4 text-white" />
                          ) : (
                            <Bot className="h-4 w-4 text-white" />
                          )}
                        </motion.div>
                        
                        {/* Mensaje */}
                        <motion.div 
                          className={`max-w-xs p-3 rounded-2xl ${
                            message.type === 'user'
                              ? 'bg-gradient-to-br from-blue-500/20 to-indigo-600/20 border border-blue-500/30 text-blue-100'
                              : 'bg-gray-700/50 border border-gray-600/50 text-gray-100'
                          }`}
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <p className="text-sm leading-relaxed whitespace-pre-wrap">
                            {message.content}
                          </p>
                          <span className="text-xs opacity-60 mt-1 block">
                            {message.timestamp.toLocaleTimeString()}
                          </span>
                        </motion.div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  
                  {/* Indicador de escritura */}
                  <AnimatePresence>
                    {loading && <LoadingSpinner />}
                  </AnimatePresence>
                </div>
              )}
            </div>
            
            {/* Input area */}
            <div className="p-4 bg-gray-900/80 border-t border-gray-700/50">
              <div className="flex items-center space-x-3">
                <div className="flex-1 relative">
                  <textarea
                    className="w-full p-3 pr-12 bg-gray-800/50 border border-gray-600/50 rounded-xl resize-none text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={webhookUrl ? t('serviceCard.demo.placeholder') : t('serviceCard.demo.unavailable')}
                    disabled={loading || !webhookUrl}
                    rows={1}
                    style={{ minHeight: '48px', maxHeight: '120px' }}
                  />
                  
                  {/* Contador de caracteres */}
                  <div className="absolute bottom-1 right-2 text-xs text-gray-500">
                    {inputText.length}/500
                  </div>
                </div>
                
                <motion.button
                  onClick={sendRequest}
                  disabled={loading || !webhookUrl || inputText.trim().length === 0}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    !loading && webhookUrl && inputText.trim().length > 0
                      ? `bg-gradient-to-r ${serviceColor} hover:shadow-lg hover:shadow-purple-500/25 text-white`
                      : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  }`}
                  whileHover={!loading && webhookUrl && inputText.trim().length > 0 ? { scale: 1.05 } : {}}
                  whileTap={!loading && webhookUrl && inputText.trim().length > 0 ? { scale: 0.95 } : {}}
                >
                  <motion.div
                    animate={loading ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 1, repeat: loading ? Infinity : 0, ease: "linear" }}
                  >
                    {loading ? <Zap className="w-5 h-5" /> : <Send className="w-5 h-5" />}
                  </motion.div>
                </motion.button>
              </div>
              
              {/* Info footer */}
              <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                <span>{t('serviceCard.demo.sendHint')}</span>
                {webhookUrl && (
                  <span className="flex items-center">
                    <div className="w-1 h-1 bg-green-400 rounded-full mr-1" />
                    {t('serviceCard.demo.systemConnected')}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ServiceCard;