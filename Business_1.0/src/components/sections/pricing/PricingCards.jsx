// components/sections/pricing/PricingCards.jsx - Modernizado para maximizar conversiones
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, 
  Star, 
  Crown, 
  Zap, 
  Gift, 
  ArrowRight, 
  Sparkles,
  MessageSquare,
  Send,
  Settings,
  Award,
  TrendingUp,
  Shield,
  Clock,
  Users,
  Rocket
} from 'lucide-react';

function PricingCards() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [billingPeriod, setBillingPeriod] = useState('monthly'); // monthly or yearly

  const plans = [
    {
      id: 'whatsapp',
      title: "WhatsApp AI Pro",
      subtitle: "Para empresas en crecimiento",
      price: 45,
      originalPrice: 89, // precio "antes"
      yearlyPrice: 432, // precio con descuento anual
      savings: "Ahorra $528/año",
      icon: MessageSquare,
      iconColor: "from-green-500 to-emerald-700",
      popular: false,
      features: [
        "Asistente IA 24/7 en WhatsApp",
        "Respuestas automáticas inteligentes",
        "Gestión completa de citas",
        "Integración con Google Calendar",
        "Analytics básicos y reportes",
        "Soporte técnico prioritario",
        "Setup gratuito (valor $200)",
        "Training del equipo incluido"
      ],
      highlights: [
        "Configuración rápida",
        "ROI promedio 180%",
        "Soporte"
      ],
      cta: "Comenzar con WhatsApp",
      guarantee: "30 días de garantía"
    },
    {
      id: 'telegram',
      title: "Telegram AI Plus",
      subtitle: "Ideal para startups",
      price: 35,
      originalPrice: 69,
      yearlyPrice: 335,
      savings: "Ahorra $396/año",
      icon: Send,
      iconColor: "from-blue-500 to-indigo-700",
      popular: true,
      badge: "MÁS POPULAR",
      features: [
        "Asistente IA 24/7 en Telegram",
        "Respuestas automáticas avanzadas",
        "Gestión de citas automatizada",
        "Integración con calendarios",
        "Analytics detallados",
        "Soporte técnico incluido",
        "Setup gratuito (valor $150)",
        "Plantillas personalizadas"
      ],
      highlights: [
        "ROI promedio 160%",
        "Más económico"
      ],
      cta: "Comenzar con Telegram",
      guarantee: "30 días de garantía"
    },
    {
      id: 'custom',
      title: "Enterprise AI",
      subtitle: "Solución completa a medida",
      price: "Personalizado",
      priceFromText: "Desde $199",
      icon: Crown,
      iconColor: "from-purple-500 to-violet-700",
      premium: true,
      badge: "PREMIUM",
      features: [
        "Desarrollo 100% personalizado",
        "Integraciones multi-canal",
        "WhatsApp + Telegram + Gmail",
        "Analytics avanzados con BI",
        "Soporte dedicado 24/7",
        "Manager de cuenta asignado",
        "Setup y training premium",
        "Funcionalidades específicas",
        "SLA garantizado 99.9%",
        "Escalabilidad ilimitada"
      ],
      highlights: [
        "Solución única",
        "ROI promedio +300%",
        "Soporte VIP"
      ],
      cta: "Solicitar cotización",
      guarantee: "Grantía de satisfacción",
    }
  ];

  const getCardPrice = (plan) => {
    if (plan.price === "Personalizado") return plan.price;
    return billingPeriod === 'yearly' ? plan.yearlyPrice : plan.price;
  };

  const getOriginalPrice = (plan) => {
    if (plan.price === "Personalizado") return null;
    return billingPeriod === 'yearly' ? plan.price : plan.originalPrice;
  };

  return (
    <div className="relative">
      {/* Toggle de facturación */}
      <motion.div 
        className="flex justify-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-700/50">
          <div className="relative flex">
            <motion.div
              className="absolute inset-y-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl"
              animate={{
                x: billingPeriod === 'monthly' ? 4 : 'calc(100% + 4px)',
                width: billingPeriod === 'monthly' ? 'calc(50% - 8px)' : 'calc(50% - 8px)'
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`relative z-10 px-6 py-3 rounded-xl font-medium transition-colors duration-300 ${
                billingPeriod === 'monthly' ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`relative z-10 px-6 py-3 rounded-xl font-medium transition-colors duration-300 flex items-center ${
                billingPeriod === 'yearly' ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Anual
              <span className="ml-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                -20%
              </span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Cards de precios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, index) => {
          const Icon = plan.icon;
          const isHovered = hoveredCard === index;
          const currentPrice = getCardPrice(plan);
          const originalPrice = getOriginalPrice(plan);
          
          return (
            <motion.div
              key={plan.id}
              className={`relative group ${plan.premium ? 'lg:scale-105' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ y: -10 }}
            >
              {/* Glow effect especial para premium */}
              {plan.premium && (
                <motion.div 
                  className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 rounded-3xl blur-lg opacity-30"
                  animate={{ opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              )}
              
              {/* Badge flotante */}
              {(plan.popular || plan.premium) && (
                <motion.div
                  className={`absolute -top-4 left-1/2 transform -translate-x-1/2 z-20 ${
                    plan.premium 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600' 
                      : 'bg-gradient-to-r from-green-600 to-emerald-600'
                  } text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg`}
                  initial={{ scale: 0, y: -20 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center space-x-1">
                    {plan.premium ? <Crown className="h-3 w-3" /> : <Star className="h-3 w-3" />}
                    <span>{plan.badge}</span>
                  </div>
                </motion.div>
              )}

              <motion.div 
                className={`relative rounded-3xl overflow-hidden border-2 transition-all duration-500 h-full ${
                  plan.premium 
                    ? 'bg-gradient-to-b from-purple-900/30 via-gray-800/90 to-gray-800/90 border-purple-500/50 hover:border-purple-400/70' 
                    : plan.popular
                    ? 'bg-gradient-to-b from-green-900/20 via-gray-800/90 to-gray-800/90 border-green-500/50 hover:border-green-400/70'
                    : 'bg-gray-800/90 border-gray-700/50 hover:border-purple-500/50'
                } backdrop-blur-xl`}
                whileHover={{ 
                  boxShadow: plan.premium 
                    ? "0 25px 50px -12px rgba(147, 51, 234, 0.25)" 
                    : plan.popular
                    ? "0 25px 50px -12px rgba(34, 197, 94, 0.25)"
                    : "0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
                }}
              >
                {/* Header del plan */}
                <div className="p-8 pb-6">
                  <div className="flex items-center justify-between mb-6">
                    <motion.div 
                      className={`bg-gradient-to-br ${plan.iconColor} p-4 rounded-xl relative overflow-hidden`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="h-8 w-8 text-white relative z-10" />
                      
                      {/* Efecto de brillo */}
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
                    </motion.div>
                    
                    {/* Savings badge */}
                    {billingPeriod === 'yearly' && plan.savings && (
                      <motion.div 
                        className="bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full border border-green-500/30"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        {plan.savings}
                      </motion.div>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.title}</h3>
                  <p className="text-gray-400 mb-6">{plan.subtitle}</p>
                  
                  {/* Precio */}
                  <div className="mb-6">
                    <div className="flex items-baseline space-x-2">
                      {originalPrice && (
                        <span className="text-lg text-gray-500 line-through">
                          ${originalPrice}
                        </span>
                      )}
                      {plan.priceFromText ? (
                        <span className="text-gray-400 text-lg">{plan.priceFromText}</span>
                      ) : (
                        <div className="flex items-baseline">
                          <span className="text-4xl font-bold text-white">
                            {typeof currentPrice === 'number' ? `$${currentPrice}` : currentPrice}
                          </span>
                          {typeof currentPrice === 'number' && (
                            <span className="text-gray-400 ml-2">
                              USD/{billingPeriod === 'yearly' ? 'año' : 'mes'}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                    {billingPeriod === 'yearly' && typeof currentPrice === 'number' && (
                      <p className="text-sm text-green-400 mt-1">
                        Equivale a ${(currentPrice/12).toFixed(0)}/mes
                      </p>
                    )}
                  </div>
                  
                  {/* Highlights rápidos */}
                  <div className="grid grid-cols-1 gap-2 mb-6">
                    {plan.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        className={`flex items-center text-sm p-2 rounded-lg ${
                          plan.premium ? 'bg-purple-900/30' : 'bg-gray-700/30'
                        }`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 + i * 0.05 }}
                      >
                        <Zap className={`h-4 w-4 mr-2 ${
                          plan.premium ? 'text-purple-400' : 'text-green-400'
                        }`} />
                        <span className="text-gray-300">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Features */}
                <div className="px-8 pb-8">
                  <h4 className="text-lg font-semibold text-purple-300 mb-4 flex items-center">
                    <Gift className="h-5 w-5 mr-2" />
                    Todo incluido
                  </h4>
                  
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                      >
                        <CheckCircle className={`h-5 w-5 mr-3 mt-0.5 flex-shrink-0 ${
                          plan.premium ? 'text-purple-400' : 'text-green-400'
                        }`} />
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <motion.a 
                    href="/contact" 
                    className={`block text-center font-bold py-4 px-6 rounded-xl transition-all duration-300 w-full group relative overflow-hidden ${
                      plan.premium 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/25' 
                        : plan.popular
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-lg hover:shadow-green-500/25'
                        : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-purple-500/25'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Efecto de brillo en hover */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    <span className="relative z-10 flex items-center justify-center">
                      {plan.cta}
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ 
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "easeInOut"
                        }}
                      >
                        <ArrowRight className="h-5 w-5" />
                      </motion.div>
                    </span>
                  </motion.a>
                  
                  {/* Garantía */}
                  <motion.div 
                    className="mt-4 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    <div className="flex items-center justify-center text-sm text-gray-400">
                      <Shield className="h-4 w-4 mr-2 text-green-400" />
                      {plan.guarantee}
                    </div>
                  </motion.div>
                </div>
                
                {/* Patrón decorativo */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${
                  plan.premium 
                    ? 'bg-gradient-to-bl from-purple-500/10 to-transparent' 
                    : 'bg-gradient-to-bl from-green-500/10 to-transparent'
                } rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Trust indicators globales */}
      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
            <Award className="h-6 w-6 mr-3 text-yellow-400" />
            Incluido en todos los planes
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Clock, text: "Setup en 24-48h", color: "text-blue-400" },
              { icon: Users, text: "Soporte 24/7", color: "text-green-400" },
              { icon: Shield, text: "Garantía 30 días", color: "text-purple-400" },
              { icon: TrendingUp, text: "ROI garantizado", color: "text-yellow-400" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Icon className={`h-8 w-8 ${item.color} mx-auto mb-2`} />
                  <div className="text-gray-300 text-sm font-medium">{item.text}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default PricingCards;