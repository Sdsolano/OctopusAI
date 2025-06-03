// components/sections/about/Team.jsx - Completamente modernizado para destacar a los fundadores
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Star, 
  Code2, 
  Brain, 
  Zap, 
  Award, 
  Coffee,
  Lightbulb,
  Rocket,
  Heart,
  MessageSquare,
  Github,
  Linkedin,
  Mail,
  MapPin,
  GraduationCap,
  Trophy,
  Target,
  Sparkles,
  Crown,
  TrendingUp
} from 'lucide-react';

function Team() {
  const [hoveredFounder, setHoveredFounder] = useState(null);
  const [selectedFounder, setSelectedFounder] = useState(0);

  // Badge component para la sección
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

  const founders = [
    {
      name: "Samuel Solano",
      role: "Co-Fundador & CEO",
      shortRole: "CEO",
      bio: "Ingeniero electrónico especializado en inteligencia artificial y procesamiento de lenguaje natural. Apasionado por crear soluciones que eliminan tareas repetitivas y optimizan procesos.",
      extendedBio: "Con más de 5 años de experiencia en desarrollo de IA, Samuel ha liderado proyectos de automatización para empresas Fortune 500. Su visión es democratizar el acceso a la inteligencia artificial para negocios de todos los tamaños.",
      image: "https://picsum.photos/400/401",
      skills: ["Inteligencia Artificial", "NLP", "Machine Learning", "Liderazgo", "Estrategia"],
      achievements: [
        "Más de 10 proyectos de IA implementados exitosamente",
        "Especialización en procesamiento de lenguaje natural",
        "Experiencia liderando equipos técnicos",
        "Certificaciones en AWS y Google Cloud AI"
      ],
      personalQuote: "\"La IA no reemplaza a los humanos, los potencia para hacer cosas extraordinarias.\"",
      location: "Barranquilla, Colombia",
      education: "Ingeniería Electrónica",
      color: "from-blue-500 to-indigo-700",
      socialLinks: {
        linkedin: "#",
        github: "#",
        email: "samuel@octopusai.com"
      }
    },
    {
      name: "Pablo Martínez",
      role: "Co-Fundador & CTO",
      shortRole: "CTO",
      bio: "Ingeniero electrónico con amplia experiencia en desarrollo de software y automatización. Enfocado en crear tecnologías que ayuden a las empresas a modernizarse y crecer en la era digital.",
      extendedBio: "Pablo es un maestro de la arquitectura de software y la infraestructura escalable. Ha construido sistemas que manejan millones de transacciones diarias y tiene una pasión especial por crear código limpio y eficiente.",
      image: "https://picsum.photos/400/402",
      skills: ["Desarrollo Backend", "Arquitectura", "DevOps", "APIs", "Escalabilidad"],
      achievements: [
        "Arquitecto de sistemas que procesan +1M transacciones/día",
        "Experiencia en infraestructura cloud escalable",
        "Experto en microservicios y APIs REST",
        "Implementación de CI/CD en múltiples proyectos"
      ],
      personalQuote: "\"El código bien escrito es como una sinfonía: cada línea tiene su propósito perfecto.\"",
      location: "Barranquilla, Colombia",
      education: "Ingeniería Electrónica",
      color: "from-purple-500 to-violet-700",
      socialLinks: {
        linkedin: "#",
        github: "#",
        email: "pablo@octopusai.com"
      }
    }
  ];

  return (
    <section id="team" className="relative py-24 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 overflow-hidden">
      {/* Elementos decorativos de fondo espectaculares */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Círculos animados */}
        <motion.div 
          className="absolute top-20 -right-40 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div 
          className="absolute bottom-20 -left-40 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -10, 0],
            opacity: [0.08, 0.15, 0.08]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        />
        
        {/* Patrón de personas/team */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0idGVhbS1wYXR0ZXJuIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzkzMzNlYSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2Utb3BhY2l0eT0iMC4wMyIvPjxjaXJjbGUgY3g9IjcwIiBjeT0iNzAiIHI9IjEwIiBmaWxsPSJub25lIiBzdHJva2U9IiM2MzY2ZjEiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjdGVhbS1wYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-20" />
        
        {/* Elementos flotantes de colaboración */}
        {[Coffee, Lightbulb, Code2, Heart].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -12, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          >
            <Icon className="h-5 w-5 text-purple-400/20" />
          </motion.div>
        ))}
      </div>

      {/* Líneas decorativas */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionBadge icon={Users}>Los cerebros detrás de la magia</SectionBadge>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400">
                Nuestro Equipo Fundador
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Dos ingenieros electrónicos y grandes amigos que comparten una pasión: 
              <span className="text-purple-400 font-semibold"> crear tecnología que transforme empresas</span> 
              y mejore la vida de las personas.
            </p>
          </motion.div>
        </div>

        {/* Founders Section - Desktop Layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-2 gap-16 max-w-6xl mx-auto mb-16">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredFounder(index)}
                onHoverEnd={() => setHoveredFounder(null)}
              >
                {/* Glow effect espectacular */}
                <motion.div 
                  className={`absolute -inset-4 bg-gradient-to-r ${founder.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700`}
                />
                
                <motion.div 
                  className="relative bg-gray-800/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-700/50 group-hover:border-purple-500/50 transition-all duration-500"
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Header con gradiente */}
                  <div className={`h-2 bg-gradient-to-r ${founder.color}`} />
                  
                  {/* Badge de fundador */}
                  <div className="absolute top-6 right-6 z-20">
                    <motion.div 
                      className={`bg-gradient-to-r ${founder.color} text-white text-xs font-bold px-3 py-1 rounded-full flex items-center`}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Crown className="h-3 w-3 mr-1" />
                      FUNDADOR
                    </motion.div>
                  </div>
                  
                  <div className="p-8">
                    {/* Foto con efectos premium */}
                    <div className="relative mb-6">
                      <motion.div 
                        className="relative mx-auto w-32 h-32 rounded-full overflow-hidden ring-4 ring-gray-700/50 group-hover:ring-purple-500/50 transition-all duration-500"
                        whileHover={{ scale: 1.05 }}
                      >
                        <img 
                          src={founder.image} 
                          alt={founder.name} 
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Overlay con gradiente en hover */}
                        <motion.div 
                          className={`absolute inset-0 bg-gradient-to-t ${founder.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                        />
                      </motion.div>
                      
                      {/* Elementos decorativos alrededor */}
                      <motion.div 
                        className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        animate={{ 
                          scale: [1, 1.2, 1],
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                    </div>
                    
                    {/* Info principal */}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                        {founder.name}
                      </h3>
                      <p className={`text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r ${founder.color} mb-3`}>
                        {founder.role}
                      </p>

                    </div>
                    
                    {/* Bio */}
                    <p className="text-gray-300 text-center mb-6 leading-relaxed">
                      {founder.bio}
                    </p>
                    
                    {/* Skills */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-purple-300 mb-3 text-center">Especialidades</h4>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {founder.skills.slice(0, 3).map((skill, i) => (
                          <motion.span
                            key={i}
                            className={`bg-gradient-to-r ${founder.color} text-white text-xs font-medium px-3 py-1 rounded-full`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.1 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Social Links */}
                    <div className="flex justify-center space-x-4">
                      {[
                        { icon: Linkedin, link: founder.socialLinks.linkedin, color: "hover:text-blue-400" },
                        { icon: Github, link: founder.socialLinks.github, color: "hover:text-gray-300" },
                        { icon: Mail, link: `mailto:${founder.socialLinks.email}`, color: "hover:text-purple-400" }
                      ].map((social, i) => {
                        const Icon = social.icon;
                        return (
                          <motion.a
                            key={i}
                            href={social.link}
                            className={`text-gray-500 ${social.color} transition-colors duration-300`}
                            whileHover={{ scale: 1.2, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Icon className="h-5 w-5" />
                          </motion.a>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Patrón decorativo de fondo */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMyIgY3k9IjMiIHI9IjMiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Founders Section - Mobile Layout */}
        <div className="lg:hidden mb-16">
          {/* Tabs selector */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-1 border border-gray-700/50">
              {founders.map((founder, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedFounder(index)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedFounder === index 
                      ? `bg-gradient-to-r ${founder.color} text-white` 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {founder.shortRole}
                </button>
              ))}
            </div>
          </div>

          {/* Selected founder */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedFounder}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-md mx-auto"
            >
              {/* Render del fundador seleccionado similar al desktop */}
              {/* (contenido similar al desktop pero adaptado para mobile) */}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Partnership Story */}
        <motion.div 
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-gray-800/50 via-purple-900/20 to-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center">
                <Heart className="h-6 w-6 mr-3 text-red-400" />
                La historia de nuestra sociedad
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Samuel y Pablo se conocieron durante sus estudios de ingeniería electrónica y desde entonces 
                han sido compañeros inseparables en cada proyecto. Su amistad y visión compartida de usar 
                la tecnología para resolver problemas reales los llevó a fundar Octopus AI.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: GraduationCap,
                  title: "Formación académica",
                  description: "Ambos graduados en Ingeniería Electrónica",
                  color: "from-blue-500 to-indigo-600"
                },
                {
                  icon: Rocket,
                  title: "Visión compartida",
                  description: "Democratizar el acceso a la IA empresarial",
                  color: "from-purple-500 to-violet-600"
                },
                {
                  icon: Trophy,
                  title: "Éxito conjunto",
                  description: "+500 empresas transformadas exitosamente",
                  color: "from-green-500 to-emerald-600"
                }
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
                    <motion.div 
                      className={`bg-gradient-to-r ${item.color} p-4 rounded-xl w-fit mx-auto mb-4`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <h4 className="font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/30 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Quieres conocer más sobre nosotros?
            </h3>
            <p className="text-gray-300 mb-6">
              Estamos siempre disponibles para una conversación sobre tecnología, 
              automatización o simplemente para compartir un café virtual.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageSquare className="h-5 w-5 mr-2" />
                Agenda una reunión con nosotros
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Team;