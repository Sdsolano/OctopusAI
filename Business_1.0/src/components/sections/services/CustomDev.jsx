// components/sections/services/CustomDev.jsx - Modernizado
import { motion } from 'framer-motion';
import { useTranslation } from '../../../hooks/useTranslation';
import { 
  Code2, 
  Cog, 
  Rocket, 
  Sparkles, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Lightbulb,
  Target,
  Puzzle
} from 'lucide-react';

function CustomDev() {
  const { t } = useTranslation();
  
  // Servicios personalizados (ahora usando traducciones)
  const customServices = t('customDev.services.items').map((service, index) => ({
    ...service,
    icon: [Code2, Puzzle, Target][index],
    color: ["from-blue-500 to-indigo-600", "from-purple-500 to-violet-600", "from-green-500 to-emerald-600"][index]
  }));

  // Ejemplos de casos especiales (ahora usando traducciones)
  const customExamples = t('customDev.examples.items');

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 via-purple-900/10 to-gray-900 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 -left-20 w-72 h-72 bg-purple-600/10 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div 
          className="absolute bottom-20 -right-20 w-80 h-80 bg-indigo-500/10 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        />
        
        {/* Patrón de código decorativo */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iY29kZSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPjx0ZXh0IHg9IjEwIiB5PSIyMCIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSI4IiBmaWxsPSIjOTMzM2VhIiBmaWxsLW9wYWNpdHk9IjAuMDMiPnt9ICgpID0+PC90ZXh0Pjx0ZXh0IHg9IjIwIiB5PSI0MCIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSI4IiBmaWxsPSIjOTMzM2VhIiBmaWxsLW9wYWNpdHk9IjAuMDMiPmlmIChjb25kaXRpb24pPC90ZXh0Pjx0ZXh0IHg9IjUiIHk9IjYwIiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjgiIGZpbGw9IiM5MzMzZWEiIGZpbGwtb3BhY2l0eT0iMC4wMyI+Y29uc3QgYWk8L3RleHQ+PHRleHQgeD0iMzAiIHk9IjgwIiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjgiIGZpbGw9IiM5MzMzZWEiIGZpbGwtb3BhY2l0eT0iMC4wMyI+YXN5bmMvYXdhaXQ8L3RleHQ+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0idXJsKCNjb2RlKSIvPjwvc3ZnPg==')] opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center bg-purple-900/30 border border-purple-500/30 rounded-full px-4 py-2 text-sm font-medium text-purple-300 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Lightbulb className="h-4 w-4 mr-2 text-purple-400" />
              {t('customDev.badge')}
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">{t('customDev.title.part1')}</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
                {t('customDev.title.part2')}
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('customDev.subtitle')}{' '}
              <span className="text-purple-400 font-semibold">{t('customDev.highlight')}</span>
              {t('customDev.subtitle2')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Servicios personalizados */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Sparkles className="h-6 w-6 mr-3 text-purple-400" />
                {t('customDev.services.title')}
              </h3>
              
              <div className="space-y-6">
                {customServices.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-start group cursor-pointer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 10 }}
                    >
                      <motion.div 
                        className={`bg-gradient-to-br ${service.color} p-3 rounded-xl mr-4 flex-shrink-0`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </motion.div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                          {service.title}
                        </h4>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Ejemplos y CTA */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Card principal */}
              <div className="relative">
                {/* Efecto de brillo */}
                <motion.div 
                  className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 rounded-2xl blur opacity-20"
                  animate={{ opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <div className="relative bg-gray-800/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
                  <div className="flex items-center mb-6">
                    <motion.div 
                      className="bg-gradient-to-br from-purple-600 to-indigo-600 p-3 rounded-xl mr-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <Rocket className="h-6 w-6 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white">
                      {t('customDev.examples.title')}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-3 mb-8">
                    {customExamples.map((example, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center group"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                      >
                        <CheckCircle2 className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm">
                          {example}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* CTA mejorado */}
                  <div className="text-center">
                    <motion.a 
                      href="/contact" 
                      className="inline-flex items-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-purple-600/25 transition-all duration-300 relative overflow-hidden group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Efecto de brillo en hover */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      
                      <span className="relative z-10 flex items-center">
                        <Cog className="h-5 w-5 mr-2" />
                        {t('customDev.cta.button')}
                        
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
                    
                    <p className="text-sm text-gray-400 mt-4">
                      {t('customDev.cta.subtitle')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sección de beneficios adicional */}
          <motion.div 
            className="text-center bg-gradient-to-r from-purple-900/20 via-gray-800/30 to-indigo-900/20 rounded-2xl p-8 border border-purple-500/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              {t('customDev.benefits.title')}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t('customDev.benefits.items').map((benefit, index) => {
                const Icon = [Zap, Target, CheckCircle2][index];
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <motion.div 
                      className="bg-gradient-to-br from-purple-600 to-indigo-600 p-4 rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CustomDev;