// components/ui/AnimatedIcon.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { iconHoverVariants } from '../../utils/animations';

function AnimatedIcon({ Icon, size = 16, color = "text-purple-400" }) {
  return (
    <motion.div
      className="mx-auto mb-6 flex justify-center"
      variants={iconHoverVariants}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Icon className={`h-${size} w-${size} ${color}`} />
    </motion.div>
  );
}

export default AnimatedIcon;