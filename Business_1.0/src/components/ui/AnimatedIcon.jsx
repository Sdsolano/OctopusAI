// components/ui/AnimatedIcon.jsx
import React from 'react';
import { motion } from 'framer-motion';

function AnimatedIcon({ Icon, size = 6, color = "text-purple-400", bgColor = "bg-purple-900/20", withPulse = true, withRotate = false }) {
  return (
    <motion.div
      className="relative flex justify-center items-center"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {withPulse && (
        <motion.div 
          className={`absolute inset-0 ${bgColor} rounded-full filter blur-md`}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      )}
      
      <motion.div 
        className={`relative ${bgColor} rounded-full p-3`}
        animate={withRotate ? { rotate: [0, 5, 0, -5, 0] } : {}}
        transition={withRotate ? { 
          duration: 5, 
          repeat: Infinity, 
          repeatType: "reverse" 
        } : {}}
      >
        <Icon className={`h-${size} w-${size} ${color}`} />
      </motion.div>
    </motion.div>
  );
}

// Variantes preconfiguradas
AnimatedIcon.Primary = (props) => (
  <AnimatedIcon 
    bgColor="bg-gradient-to-br from-purple-600 to-indigo-600"
    color="text-white"
    {...props}
  />
);

AnimatedIcon.Secondary = (props) => (
  <AnimatedIcon 
    bgColor="bg-gray-800" 
    withPulse={false}
    {...props}
  />
);

AnimatedIcon.Feature = ({ Icon, color = "from-purple-600 to-indigo-600" }) => (
  <motion.div 
    className="mx-auto mb-6 flex justify-center"
    whileHover={{ y: -5, scale: 1.1 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <motion.div
      className={`bg-gradient-to-br ${color} p-4 rounded-xl shadow-lg`}
      initial={{ rotate: 0 }}
      animate={{ rotate: [0, 5, 0, -5, 0] }}
      transition={{ 
        duration: 10, 
        repeat: Infinity, 
        repeatType: "loop" 
      }}
    >
      <Icon className="h-10 w-10 text-white" />
      
      {/* Destellos decorativos */}
      <motion.div 
        className="absolute -right-1 -top-1 h-3 w-3 bg-white rounded-full opacity-70"
        animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  </motion.div>
);

export default AnimatedIcon;