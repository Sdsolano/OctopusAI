import React, { useState, useEffect } from 'react';
import { Code, Lightbulb, Rocket, School, Cpu, Cloud } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { LockIcon, CircuitBoardIcon, SearchIcon, BarChartIcon } from "lucide-react"
import image1 from './images/image1.png';
import foxIcon from './assets/icon.svg';
function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoVariants = {
    expanded: { width: "16ch" },
    collapsed: { width: "6ch" }
  };

  const fullNameVariants = {
    expanded: { opacity: 1, x: 0 },
    collapsed: { opacity: 0, x: -20 }
  };

  const shortNameVariants = {
    expanded: { opacity: 0, x: 20 },
    collapsed: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 text-gray-800">
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-100 bg-opacity-90 backdrop-blur-md ' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
        <img src={foxIcon} alt="Fox Icon" className="h-10 w-10 text-sky-900 " />           
        <motion.div
              className="relative font-bold text-xl text-gray-800 overflow-hidden"
              variants={logoVariants}
              initial="expanded"
              animate={isScrolled ? "collapsed" : "expanded"}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <motion.span
                className="inline-block absolute left-0"
                variants={fullNameVariants}
                initial="expanded"
                animate={isScrolled ? "collapsed" : "expanded"}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                ARTIC FOX AI
              </motion.span>
              <motion.span
                className="inline-block"
                variants={shortNameVariants}
                initial="expanded"
                animate={isScrolled ? "collapsed" : "expanded"}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                AFAI
              </motion.span>
            </motion.div>
          </motion.div>
          <nav>
            <ul className="flex space-x-6">
              {['Services', 'Process', 'Case Study', 'Contact'].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-600 hover:text-sky-900 transition duration-300">{item}</a>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main className='flex flex-col'>
      <section className="flex hero items-center h-screen container mx-auto px-6 py-32 text-center relative overflow-hidden">
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
          </motion.div>
          <div className='flex items-center justify-between w-full flex-col-reverse md:flex-row'>
            <div className="relative flex-col flex text-left z-10 max-w-4xl pt-0 md:pt-20">
              <motion.h1 
                className="text-6xl font-bold text-gray-800 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Turning Ideas into Powerful Software
              </motion.h1>
              <motion.p 
                className="text-2xl text-gray-600 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                We transform your concepts into custom-tailored software solutions
              </motion.p>
              <div className='max-w-40 flex'>
                <motion.a 
                  href="#contact" 
                  className="bg-sky-900 text-white font-bold py-3 px-8 rounded-full hover:bg-sky-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Get Started
                </motion.a>
              </div>
            </div>
            <div className='relative flex items-center flex-grow'>
              <motion.img 
                src={image1} 
                alt="Tech background" 
                className="w-full h-auto max-w-3xl mx-auto md:mt-0 mt-44 " 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </div>
          </div>
        </section>

        

        <section id="services" className="pb-24  ">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { icon: Lightbulb, title: "Idea Consultation", description: "We help refine and expand your software ideas" },
                { icon: Code, title: "Custom Development", description: "Tailored software solutions to meet your specific needs" },
                { icon: Rocket, title: "Implementation & Support", description: "Seamless deployment and ongoing maintenance" }
              ].map(({ icon: Icon, title, description }, index) => (
                <motion.div 
                  key={title}
                  className="p-8 flex flex-col rounded-xl  hover:cursor-pointer transition duration-300 transform hover:-translate-y-2"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover="hover"
                >
                  <motion.div
                    className="mx-auto mb-6 center"
                    variants={{
                      hover: { scale: 1.2, y: -5 }
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="h-16 w-16 text-sky-900" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-center mb-4 text-gray-800">{title}</h3>
                  <p className="text-gray-600 text-center">{description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id='why-us' className="py-24 w-full px-6">
        <div className="mx-auto container px-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Why IdeaToCode?</h1>
        <p className="text-xl text-gray-800">
          Build with passion for engineering.
        </p>
      </header>

      <section className="pt-6 px-6 mb-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-justify text-gray-800">
        
        <div>
          <h2 className="text-2xl font-bold mb-4 ">Reazon 1</h2>
          <p className="text-gray-800 ">
           why reazon 1
          </p>
        </div>
        <div className="bg-sky-900 p-6 rounded-3xl flex flex-col text-gray-100 aspect-square justify-between">
          <div className="flex flex-grow items-center justify-center">
            <LockIcon className="w-24 h-24"/>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="">Featured post</h3>
            <p className="text-lg font-bold">Post 1</p>
          </div>
        </div>
        <div className="bg-gray-50 p-6 rounded-3xl flex flex-col aspect-square justify-between">
          <div className="flex flex-grow items-center justify-center">
            <CircuitBoardIcon className=" w-3/6 h-3/6" />
          </div>
          <h3 className="">Featured post</h3>
          <p className="text-lg font-bold "> post 2</p>
        </div>
        

      </section>
      <hr className="border-t-2 border-gray-500 px-6 my-8" />
     
      <section className="pt-6 px-6 mb-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-justify text-gray-800">
        <div>
          <h2 className="text-2xl font-bold mb-4">reazon 2</h2>
          <p className="text-gray-800">
            why reazon 2
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-3xl flex flex-col aspect-square justify-between">
          <div className="flex flex-grow items-center justify-center">
            <BarChartIcon className="w-3/6 h-3/6" />
          </div>
          <h3 className="">Featured post</h3>
          <p className="text-lg font-bold">post 3</p>
        </div>
        <div className="bg-sky-900 p-6 rounded-3xl flex flex-col text-gray-50 aspect-square justify-between">
          <div className="flex flex-grow items-center justify-center">
            <SearchIcon className="w-3/6 h-3/6" />
          </div>
          <h3 className="">Featured post</h3>
          <p className="text-lg font-bold">post 4</p>
        </div>
      </section>
    </div>
          </section>

        
        <section id="process" className="py-24 ">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Our Process</h2>
            <div className="flex flex-col md:flex-row justify-between items-stretch space-y-12 md:space-y-0 md:space-x-8">
            {[
              { step: 1, title: "Idea Discussion", description: "We listen to your concept and explore its potential", icon: Lightbulb },
              { step: 2, title: "Planning & Design", description: "We create a detailed roadmap for your software", icon: Cpu },
              { step: 3, title: "Development", description: "We bring your idea to life with cutting-edge technology", icon: Code },
              { step: 4, title: "Delivery & Support", description: "We ensure smooth implementation and provide ongoing assistance", icon: Cloud }
            ].map(({ step, title, description, icon: Icon }, index) => (
              <motion.div 
                key={step} 
                className="flex-1 text-center flex flex-col items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-sky-900 text-white rounded-full h-24 w-24 flex items-center justify-center mb-6 shadow-md">
                  <Icon className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </motion.div>
            ))}
          </div>

          </div>
        </section>

        <section id="case-study" className="py-24 ">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Case Study: University Project</h2>
            <motion.div 
              className="bg-white p-12 rounded-2xl shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-center mb-8">
                <School className="h-20 w-20 text-sky-900 mr-6" />
                <h3 className="text-3xl font-semibold text-gray-800">Product Organization Software</h3>
              </div>
              <p className="text-gray-600 mb-8 text-lg">A university approached us with a theoretical project for organizing products. We took their concept and developed a fully-functional software solution that streamlined their inventory management process.</p>
              <ul className="list-disc list-inside text-gray-800 mb-8 text-lg">
                <li>Transformed academic theory into practical software</li>
                <li>Customized features to meet specific university needs</li>
                <li>Improved efficiency in product organization and tracking</li>
              </ul>
              <div className="text-center">
                <a href="#contact" className="inline-block bg-sky-900 text-white font-bold py-3 px-8 rounded-full hover:bg-sky-900 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">Start Your Project</a>
              </div>
            </motion.div>
          </div>
        </section>

        

        <section id="contact" className="py-24 ">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Let's Turn Your Idea into Reality</h2>
            <motion.form 
              className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {[
                { label: "Name", type: "text", name: "name" },
                { label: "Email", type: "email", name: "email" },
                { label: "Your Idea", type: "textarea", name: "message" }
              ].map(({ label, type, name }) => (
                <div key={name} className="mb-6">
                  <label htmlFor={name} className="block text-gray-700 font-bold mb-2">{label}</label>
                  {type === "textarea" ? (
                    <textarea id={name} name={name} rows={4} className="w-full px-3 py-2 bg-gray-50 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400 transition duration-300" required></textarea>
                  ) : (
                    <input type={type} id={name} name={name} className="w-full px-3 py-2 bg-gray-50 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400 transition duration-300" required />
                  )}
                </div>
              ))}
              <div className="text-center">
                <button type="submit" className="bg-sky-900 text-white font-bold py-3 px-8 rounded-full hover:bg-sky-900 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">Send Message</button>
              </div>
            </motion.form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 IdeaToCode. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            {['Twitter', 'LinkedIn', 'GitHub'].map(platform => (
              <a key={platform} href="#" className="text-gray-400 hover:text-sky-400 transition duration-300">
                {platform}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;