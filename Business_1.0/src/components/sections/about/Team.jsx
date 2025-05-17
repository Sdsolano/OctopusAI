// components/sections/about/Team.jsx
import React from 'react';
import { motion } from 'framer-motion';

function Team() {
  const team = [
    {
      name: "Samuel Solano",
      role: "Co-Fundador & CEO",
      bio: "Ingeniero electrónico especializado en inteligencia artificial y procesamiento de lenguaje natural. Apasionado por crear soluciones que eliminan tareas repetitivas y optimizan procesos.",
      image: "https://picsum.photos/400/401"
    },
    {
      name: "Pablo Martínez",
      role: "Co-Fundador & CTO",
      bio: "Ingeniero electrónico con amplia experiencia en desarrollo de software y automatización. Enfocado en crear tecnologías que ayuden a las empresas a modernizarse y crecer en la era digital.",
      image: "https://picsum.photos/400/402"
    }
  ];

  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-purple-400 mb-6">Nuestro Equipo</h2>
      <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-16">
        Somos Samuel Solano y Pablo Martínez, dos ingenieros electrónicos y grandes amigos, apasionados por 
        la eficiencia, la automatización y la innovación.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {team.map((member, index) => (
          <motion.div 
            key={index}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-full h-64 object-cover object-center" 
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-purple-400 mb-1">{member.name}</h3>
              <p className="text-purple-300 mb-4">{member.role}</p>
              <p className="text-gray-400">{member.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Team;