// components/common/PageTransition.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants } from '../../utils/animations';

// Este componente se usaría para envolver el contenido de cada página
// para aplicar la misma animación de transición
function PageTransition({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;