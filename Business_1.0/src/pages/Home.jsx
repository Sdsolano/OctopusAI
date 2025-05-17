// pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Calendar, Mail, Zap, Globe, Users, Clock, Settings, CheckCircle } from 'lucide-react';

// Import page sections
import Hero from '../components/sections/home/Hero';
import Features from '../components/sections/home/Features';
import Benefits from '../components/sections/home/Benefits';
import HowItWorks from '../components/sections/home/HowItWorks';
import CallToAction from '../components/sections/home/CallToAction';

// Import animations
import { pageVariants } from '../utils/animations';

function Home() {
  return (
    <motion.main 
      className="flex flex-col"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Hero />
      <Features />
      <Benefits />
      <HowItWorks />
      <CallToAction />
    </motion.main>
  );
}

export default Home;