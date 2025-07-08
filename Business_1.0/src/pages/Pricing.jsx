// pages/Pricing.jsx - Completamente modernizado para maximizar conversiones
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Zap, 
  Shield, 
  Users,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Crown,
  Target,
  Gift,
  Clock,
  DollarSign,
  Rocket,
  MessageSquare,
  Award,
  ThumbsUp
} from 'lucide-react';

// Import components
import PricingCards from '../components/sections/pricing/PricingCards';
import FAQ from '../components/sections/pricing/FAQ';
import Button from '../components/ui/Button';

// Import animations
import { pageVariants } from '../utils/animations';

function Pricing() {
  // Badge component para secciones
  const SectionBadge = ({ children, icon: Icon }) => (
    <motion.div 
      className="inline-flex items-center bg-purple-900/30 border border-purple-500/30 rounded-full px-4 py-2 text-sm font-medium text-purple-300 backdrop-blur-sm"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {Icon && <Icon className="h-4 w-4 mr-2 text-purple-400" />}
      {children}
    </motion.div>
  );

  return (
    <motion.main
      className="flex flex-col"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      {/* Hero Section - Enfocado en conversión */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 min-h-screen flex items-center">
        {/* Elementos decorativos de fondo espectaculares */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Círculos animados grandes */}
          <motion.div 
            className="absolute -top-40 -right-40 w-96 h-96 bg-green-600/20 rounded-full filter blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div 
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, -10, 0],
              opacity: [0.15, 0.3, 0.15]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
          />
          
          {/* Gradiente de dinero/éxito */}
          <div className="absolute inset-0 bg-gradient-radial from-green-900/10 via-transparent to-purple-900/10" />
          
          {/* Patrón de monedas flotantes */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-green-400/10 text-4xl"
              style={{
                top: `${10 + Math.random() * 80}%`,
                left: `${5 + Math.random() * 90}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.1, 0.3, 0.1],
                rotate: [0, 360, 0],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
            >
              $
            </motion.div>
          ))}
        </div>

        {/* Líneas decorativas premium */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SectionBadge icon={Crown}>Inversión inteligente</SectionBadge>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-white">Precios que</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-purple-400">
                Multiplican tus ganancias
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              No es un gasto, es la <span className="text-green-400 font-semibold">mejor inversión</span> que 
              harás para tu negocio. 
              <span className="text-green-400 font-semibold"> Sin permanencia</span>, 
              solo resultados garantizados.
            </motion.p>

            {/* Value proposition stats */}
            <motion.div 
              className="flex flex-wrap justify-center gap-8 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                
                { 
                  icon: Clock, 
                  value: "72h", 
                  label: "Setup completo", 
                  color: "from-blue-500 to-indigo-600",
                  description: "Listo para usar"
                },
                { 
                  icon: Shield, 
                  value: "30 días", 
                  label: "Garantía total", 
                  color: "from-purple-500 to-violet-600",
                  description: "Sin riesgos"
                },
                { 
                  icon: Gift, 
                  value: "Gratis", 
                  label: "Setup y training", 
                  color: "from-pink-500 to-rose-600",
                  description: "Valor $500"
                }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div 
                    key={index}
                    className="relative group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    {/* Glow effect en hover */}
                    <motion.div 
                      className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                    />
                    
                    <div className="relative bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50 group-hover:border-green-500/50 transition-all duration-300">
                      <motion.div 
                        className={`bg-gradient-to-r ${stat.color} p-3 rounded-lg mb-3 mx-auto w-fit`}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </motion.div>
                      
                      <div className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-1`}>
                        {stat.value}
                      </div>
                      <div className="text-white font-semibold mb-1">{stat.label}</div>
                      <div className="text-xs text-gray-400">{stat.description}</div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Button.Action 
                onClick={() => document.getElementById('pricing-cards')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Crown className="h-5 w-5 mr-2" />
                Ver planes y precios
              </Button.Action>
              
              <Button.Secondary to="/services">
                Probar demos gratis
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button.Secondary>
            </motion.div>

            {/* Social proof rápido */}
            <motion.div 
              className="flex flex-wrap justify-center gap-6 text-sm text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {[
                "✓ 99% de satisfacción del cliente",
                "✓ Soporte 24/7",
                "✓ Sin contratos de permanencia"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center bg-gray-800/30 backdrop-blur-sm rounded-full px-4 py-2"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(34, 197, 94, 0.1)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section - Modernizada */}
      <section id="pricing-cards" className="relative py-20 bg-gray-900 overflow-hidden">
        {/* Elementos decorativos sutiles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-20 right-0 w-96 h-96 bg-green-600/5 rounded-full filter blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              x: [0, -20, 0],
            }}
            transition={{ 
              duration: 12, 
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div 
            className="absolute bottom-20 left-0 w-80 h-80 bg-purple-500/5 rounded-full filter blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 20, 0],
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity,
              repeatType: "reverse",
              delay: 2
            }}
          />
        </div>

        {/* Línea decorativa superior */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 via-purple-500 to-green-600"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Header section elegante */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionBadge icon={Target}>Planes flexibles</SectionBadge>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-400">
                  Elige tu plan perfecto
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Cada plan incluye configuración gratuita, soporte premium y garantía de satisfacción. 
                <span className="text-green-400 font-semibold"> Cancela cuando quieras</span>, 
                sin penalizaciones.
              </p>
            </motion.div>
          </div>
          
          <PricingCards />
        </div>
      </section>

      {/* Comparación de valor */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionBadge icon={DollarSign}>Comparación de valor</SectionBadge>
            
            <h2 className="text-4xl font-bold text-white mb-6">
              ¿Cuánto te cuesta <span className="text-red-400">NO</span> tener Octopus AI?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Calculamos el costo real de seguir atendiendo manualmente vs automatizar con nosotros
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Sin Octopus AI */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-red-900/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-red-500/50">
                <div className="text-center mb-6">
                  <div className="bg-red-500 p-4 rounded-xl w-fit mx-auto mb-4">
                    <ThumbsUp className="h-8 w-8 text-white transform rotate-180" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Sin Automatización</h3>
                  <div className="text-red-400 text-sm">Atención manual tradicional</div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {[
                    { item: "Personal adicional (2 personas)", cost: "$2,400/mes" },
                    { item: "Horas extra y fines de semana", cost: "$800/mes" },
                    { item: "Clientes perdidos por demora", cost: "$1,500/mes" },
                    { item: "Errores humanos y retrabajos", cost: "$600/mes" },
                    { item: "Estrés y burnout del equipo", cost: "Invaluable" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-between p-3 bg-red-900/30 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-gray-300">{item.item}</span>
                      <span className="text-red-400 font-bold">{item.cost}</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="text-center border-t border-red-500/30 pt-6">
                  <div className="text-3xl font-bold text-red-400 mb-2">$5,300+/mes</div>
                  <div className="text-red-300">Costo total mensual</div>
                </div>
              </div>
            </motion.div>

            {/* Con Octopus AI */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Glow effect especial */}
              <motion.div 
                className="absolute -inset-2 bg-gradient-to-r from-green-600 to-purple-600 rounded-2xl blur-lg opacity-30"
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <div className="relative bg-gradient-to-b from-green-900/30 to-gray-800/90 backdrop-blur-xl rounded-2xl p-8 border-2 border-green-500/50">
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4 rounded-xl w-fit mx-auto mb-4">
                    <Rocket className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Con Octopus AI</h3>
                  <div className="bg-gradient-to-r from-green-600 to-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                    MEJOR INVERSIÓN
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {[
                    { item: "Octopus AI WhatsApp", cost: "$45/mes" },
                    { item: "Setup y training incluido", cost: "Gratis" },
                    { item: "Soporte 24/7 en español", cost: "Incluido" },
                    { item: "Atención 24/7 automatizada", cost: "Incluido" },
                    { item: "ROI promedio +250%", cost: "+$3,000/mes" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-between p-3 bg-green-900/30 rounded-lg"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-gray-200">{item.item}</span>
                      <span className="text-green-400 font-bold">{item.cost}</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="text-center border-t border-green-500/30 pt-6">
                  <div className="text-3xl font-bold text-green-400 mb-2">$45/mes</div>
                  <div className="text-green-300">Inversión total</div>
                  <div className="text-lg text-purple-400 font-semibold mt-2">
                    ¡Ahorras $5,255/mes!
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA de conversión */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-green-900/30 to-purple-900/30 backdrop-blur-xl rounded-2xl p-8 border border-green-500/30 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                ¿Seguirás gastando $5,300/mes en atención manual?
              </h3>
              <p className="text-gray-300 mb-6">
                Con Octopus AI recuperas tu inversión en la primera semana y empiezas a ahorrar desde el día 1.
              </p>
              <Button.Action to="/contact">
                <Gift className="h-5 w-5 mr-2" />
                Comienza a ahorrar hoy
              </Button.Action>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Final persuasivo */}
      <section className="py-20 bg-gradient-to-r from-green-900/20 via-gray-900 to-purple-900/20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-0 right-0 w-96 h-96 bg-green-600/10 rounded-full filter blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-400">
                Tu competencia ya automatizó
              </span>
              <br />
              <span>¿Cuándo lo harás tú?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Cada día que esperas, es dinero que dejas en la mesa. 
              <span className="text-green-400 font-semibold"> Empieza hoy</span> y 
              ve los resultados desde la primera semana.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button.Action to="/contact">
                <Award className="h-5 w-5 mr-2" />
                Solicitar demo personalizada
              </Button.Action>
              <Button.Secondary to="/services">
                Ver testimonios de clientes
              </Button.Secondary>
            </div>
            
            {/* Garantía final */}
            <motion.div 
              className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {[
                "🛡️ Garantía 30 días o devolvemos tu dinero",
                "🎯 ROI garantizado",
                "💬 Soporte 24/7"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center bg-gray-800/30 backdrop-blur-sm rounded-full px-4 py-2"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(34, 197, 94, 0.1)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}

export default Pricing;