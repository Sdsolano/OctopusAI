// components/ui/Section.jsx
import React from 'react';
import { motion } from 'framer-motion';

/**
 * Componente Section reutilizable para crear secciones con animaciones y estilos consistentes
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Contenido de la sección
 * @param {string} props.title - Título principal de la sección
 * @param {string} props.subtitle - Subtítulo opcional
 * @param {string} props.id - ID para navegación con anclas
 * @param {string} props.className - Clases adicionales
 * @param {string} props.bgColor - Color de fondo ('default', 'dark', 'gradient', 'transparent')
 * @param {string} props.titleColor - Color del título ('default', 'gradient')
 * @param {boolean} props.centered - Si el título y subtítulo deben estar centrados
 * @param {string} props.spacing - Espaciado vertical ('sm', 'md', 'lg', 'xl')
 * @param {React.ReactNode} props.badge - Contenido opcional para mostrar un badge arriba del título
 * @param {React.ReactNode} props.action - Acción opcional a mostrar junto al título (botón, enlace, etc.)
 */
function Section({
  children,
  title,
  subtitle,
  id,
  className = '',
  bgColor = 'default',
  titleColor = 'default',
  centered = false,
  spacing = 'lg',
  badge,
  action,
}) {
  // Configuraciones de fondo
  const backgrounds = {
    default: 'bg-gray-900',
    dark: 'bg-gray-950',
    gradient: 'bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800',
    transparent: 'bg-transparent',
    light: 'bg-gray-800',
    purple: 'bg-purple-900/20',
    gradientPurple: 'bg-gradient-to-b from-purple-900/20 via-gray-900 to-gray-900',
  };

  // Configuraciones de título
  const titleColors = {
    default: 'text-purple-400',
    white: 'text-white',
    gradient: 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400',
  };

  // Configuraciones de espaciado
  const spacings = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16 md:py-20',
    xl: 'py-24 md:py-32',
  };

  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section 
      id={id} 
      className={`${backgrounds[bgColor]} ${spacings[spacing]} ${className}`}
    >
      <div className="container mx-auto px-6">
        <motion.div 
          className="flex flex-col"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Encabezado de sección */}
          {(title || subtitle || badge) && (
            <div className={`mb-12 md:mb-16 ${centered ? 'text-center mx-auto' : ''} max-w-3xl`}>
              {badge && (
                <motion.div 
                  className="inline-block mb-4"
                  variants={itemVariants}
                >
                  {badge}
                </motion.div>
              )}
              
              <div className="flex flex-col md:flex-row md:items-end md:justify-between">
                <div className={centered ? 'mx-auto text-center' : ''}>
                  {title && (
                    <motion.h2 
                      className={`text-3xl md:text-4xl font-bold mb-4 ${titleColors[titleColor]}`}
                      variants={itemVariants}
                    >
                      {title}
                    </motion.h2>
                  )}
                  
                  {subtitle && (
                    <motion.p 
                      className="text-gray-300 text-lg md:text-xl"
                      variants={itemVariants}
                    >
                      {subtitle}
                    </motion.p>
                  )}
                </div>
                
                {action && (
                  <motion.div 
                    className="mt-4 md:mt-0"
                    variants={itemVariants}
                  >
                    {action}
                  </motion.div>
                )}
              </div>
            </div>
          )}
          
          {/* Contenido principal */}
          <motion.div 
            variants={itemVariants}
            className={centered ? 'text-center' : ''}
          >
            {children}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Sección con fondo degradado de púrpura
Section.Purple = (props) => <Section bgColor="gradientPurple" {...props} />;

// Sección con título degradado
Section.Gradient = (props) => <Section titleColor="gradient" {...props} />;

// Sección para destacar
Section.Highlight = (props) => <Section bgColor="gradient" titleColor="gradient" {...props} />;

// Sección centrada
Section.Centered = (props) => <Section centered {...props} />;

// Sección para héroe
Section.Hero = ({ children, ...props }) => (
  <Section 
    bgColor="transparent" 
    spacing="xl" 
    {...props}
    className={`min-h-screen flex items-center ${props.className || ''}`}
  >
    {children}
  </Section>
);

export default Section;