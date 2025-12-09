// components/sections/home/HowItWorks.jsx - Actualizado para 3 Verticales
import { motion } from 'framer-motion';
import { MessageCircle, Lightbulb, Settings, Rocket, TrendingUp, CheckCircle2, Sparkles, Zap } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';

function HowItWorks({ showTitle = true }) {
  const { t } = useTranslation();

  const steps = [
    {
      title: t('howItWorks.steps.step1.title'),
      description: t('howItWorks.steps.step1.description'),
      icon: MessageCircle,
      color: "from-blue-500 to-indigo-600",
      details: t('howItWorks.steps.step1.details')
    },
    {
      title: t('howItWorks.steps.step2.title'),
      description: t('howItWorks.steps.step2.description'),
      icon: Lightbulb,
      color: "from-purple-500 to-violet-600",
      details: t('howItWorks.steps.step2.details')
    },
    {
      title: t('howItWorks.steps.step3.title'),
      description: t('howItWorks.steps.step3.description'),
      icon: Settings,
      color: "from-green-500 to-emerald-600",
      details: t('howItWorks.steps.step3.details')
    },
    {
      title: t('howItWorks.steps.step4.title'),
      description: t('howItWorks.steps.step4.description'),
      icon: Rocket,
      color: "from-indigo-500 to-purple-600",
      details: t('howItWorks.steps.step4.details')
    },
    {
      title: t('howItWorks.steps.step5.title'),
      description: t('howItWorks.steps.step5.description'),
      icon: TrendingUp,
      color: "from-rose-500 to-pink-600",
      details: t('howItWorks.steps.step5.details')
    }
  ];

  return (
    <div className="relative">


      {/* Línea conectora mejorada */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 hidden md:block">
        <motion.div
          className="h-full bg-gradient-to-b from-purple-600 via-blue-500 to-green-600 rounded-full"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          viewport={{ once: true }}
        />

        {/* Pulso animado */}
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-purple-400 rounded-full"
          animate={{
            y: [0, 20, 40, 60, 80],
            opacity: [1, 0.8, 0.6, 0.4, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Pasos del proceso mejorados */}
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isEven = index % 2 === 0;

        return (
          <motion.div
            key={index}
            className={`flex items-center mb-24 last:mb-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col relative`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Contenido del paso */}
            <motion.div
              className={`flex-1 ${isEven ? 'md:pr-20 md:text-right' : 'md:pl-20'} mb-8 md:mb-0`}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Card del contenido */}
              <motion.div
                className="bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden group"
                whileHover={{ y: -5 }}
              >
                {/* Efecto glow */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${step.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />

                {/* Badge de paso */}
                <motion.div
                  className={`inline-flex items-center bg-gradient-to-r ${step.color} text-white text-sm font-bold px-3 py-1 rounded-full mb-4`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Sparkles className="h-3 w-3 mr-1" />
                  {t('howItWorks.stepLabel')} {index + 1}
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                  {step.title}
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {step.description}
                </p>

                {/* Lista de detalles */}
                <div className="space-y-2">
                  {step.details.map((detail, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center text-sm text-gray-400"
                      initial={{ opacity: 0, x: isEven ? -10 : 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + i * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle2 className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="group-hover:text-gray-300 transition-colors duration-300">
                        {detail}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Overlay sutil */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none rounded-2xl`}
                />
              </motion.div>
            </motion.div>

            {/* Icono central mejorado */}
            <div className="relative flex items-center justify-center my-8 md:my-0 z-10">
              {/* Círculo principal con efecto glow */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Efecto de pulso de fondo */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-full blur-md`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: index * 0.2
                  }}
                />

                {/* Círculo principal */}
                <motion.div
                  className={`bg-gradient-to-r ${step.color} text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-lg relative z-10 border-4 border-gray-800 shadow-2xl`}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                >
                  <Icon className="h-10 w-10" />
                </motion.div>

                {/* Anillos decorativos */}
                <motion.div
                  className="absolute inset-0 border-2 border-purple-500/30 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    width: '140%',
                    height: '140%',
                    top: '-20%',
                    left: '-20%'
                  }}
                />

                {/* Número del paso */}
                <motion.div
                  className="absolute -bottom-2 -right-2 bg-gray-900 border-2 border-purple-500 text-purple-400 h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {index + 1}
                </motion.div>

                {/* Partículas decorativas */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-purple-400 rounded-full"
                    style={{
                      top: `${20 + i * 20}%`,
                      right: `${-10 - i * 5}%`
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2 + i * 0.3
                    }}
                  />
                ))}
              </motion.div>
            </div>

            <div className="flex-1"></div>
          </motion.div>
        );
      })}

      {/* Sección de tiempo estimado */}
      <motion.div
        className="mt-16 text-center bg-gradient-to-r from-purple-900/20 via-gray-800/30 to-indigo-900/20 rounded-2xl p-8 border border-purple-500/20 backdrop-blur-sm"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full mb-4"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Zap className="h-4 w-4 mr-2" />
          <span className="font-semibold">{t('howItWorks.timeline.badge')}</span>
        </motion.div>

        <h3 className="text-2xl font-bold text-white mb-4">
          {t('howItWorks.timeline.title')}
        </h3>

        <p className="text-gray-300 max-w-2xl mx-auto">
          {t('howItWorks.timeline.description')}
        </p>

        {/* Indicadores de tiempo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            { phase: t('howItWorks.timeline.phases.consultation.label'), time: t('howItWorks.timeline.phases.consultation.time'), icon: MessageCircle },
            { phase: t('howItWorks.timeline.phases.proposal.label'), time: t('howItWorks.timeline.phases.proposal.time'), icon: Lightbulb },
            { phase: t('howItWorks.timeline.phases.results.label'), time: t('howItWorks.timeline.phases.results.time'), icon: Rocket }
          ].map((item, index) => {
            const Icon = item.icon;
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
                <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
                  <Icon className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-white">{item.phase}</div>
                  <div className="text-lg font-bold text-green-400">{item.time}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

export default HowItWorks;
