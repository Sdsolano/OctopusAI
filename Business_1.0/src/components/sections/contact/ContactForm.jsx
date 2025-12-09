// components/sections/contact/ContactForm.jsx - Con funcionalidad de emailjs integrada
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  User, 
  Mail, 
  Phone, 
  Building, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Zap,
  Clock,
  Shield,
  Target,
  Users,
  TrendingUp,
  Gift,
  Star,
  Rocket,
  Crown,
  Loader2,
  AlertCircle,
  Globe,
  Calendar
} from 'lucide-react';

function ContactForm() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industryType: '',
    projectType: '',
    currentChallenge: '',
    monthlyCustomers: '',
    urgency: '',
    budget: '',
    message: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const totalSteps = 3;

  // Opciones para los selects
  const industryOptions = [
    { value: 'healthcare', label: '🏥 Salud y Bienestar' },
    { value: 'retail', label: '🛍️ Retail y E-commerce' },
    { value: 'realestate', label: '🏠 Bienes Raíces' },
    { value: 'services', label: '💼 Servicios Profesionales' },
    { value: 'restaurant', label: '🍕 Restaurantes' },
    { value: 'education', label: '📚 Educación' },
    { value: 'automotive', label: '🚗 Automotriz' },
    { value: 'other', label: '🌟 Otro' }
  ];

  const projectTypes = [
    { value: 'whatsapp', label: '💬 WhatsApp AI', desc: 'Asistente para WhatsApp' },
    { value: 'telegram', label: '📱 Telegram Bot', desc: 'Bot inteligente para Telegram' },
    { value: 'email', label: '📧 Automatización Gmail', desc: 'Gestión automática de emails' },
    { value: 'multichannel', label: '🌐 Solución Multicanal', desc: 'WhatsApp + Telegram + Email' },
    { value: 'custom', label: '⚡ Desarrollo Personalizado', desc: 'Algo específico para mi negocio' }
  ];

  const customerVolumes = [
    { value: 'small', label: '1-50 clientes/mes', bonus: '💰 Plan Starter' },
    { value: 'medium', label: '51-200 clientes/mes', bonus: '🚀 Plan Growth' },
    { value: 'large', label: '201-500 clientes/mes', bonus: '👑 Plan Professional' },
    { value: 'enterprise', label: '500+ clientes/mes', bonus: '💎 Plan Enterprise' }
  ];

  const urgencyLevels = [
    { value: 'asap', label: '🔥 ¡Urgente! (Esta semana)', color: 'from-red-500 to-orange-600' },
    { value: 'soon', label: '⚡ Pronto (Este mes)', color: 'from-orange-500 to-yellow-600' },
    { value: 'planning', label: '📅 Planeando (1-3 meses)', color: 'from-blue-500 to-indigo-600' },
    { value: 'exploring', label: '🔍 Solo explorando', color: 'from-purple-500 to-violet-600' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = 'El nombre es requerido';
      if (!formData.email.trim()) newErrors.email = 'El email es requerido';
      if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email inválido';
      }
      if (!formData.phone.trim()) newErrors.phone = 'El teléfono es requerido';
      if (!formData.company.trim()) newErrors.company = 'El nombre de la empresa es requerido';
    }
    
    if (step === 2) {
      if (!formData.industryType) newErrors.industryType = 'Selecciona tu industria';
      if (!formData.projectType) newErrors.projectType = 'Selecciona el tipo de proyecto';
      if (!formData.monthlyCustomers) newErrors.monthlyCustomers = 'Selecciona el volumen de clientes';
    }
    
    // El paso 3 no tiene validaciones obligatorias para navegar, solo para enviar
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = (e) => {
    e.preventDefault(); // Prevenir que el form se envíe
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = (e) => {
    e.preventDefault(); // Prevenir que el form se envíe
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Solo enviar si estamos en el paso 3 y realmente queremos enviar
    if (currentStep !== 3) {
      return;
    }
    
    // Validar que al menos los campos básicos estén llenos
    if (!validateStep(1) || !validateStep(2)) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Preparar los datos para emailjs
      const emailData = {
        name: formData.name,
        email: formData.email,
        subject: `Nueva solicitud de ${formData.projectType || 'consulta'} - ${formData.company}`,
        message: `
INFORMACIÓN BÁSICA:
- Nombre: ${formData.name}
- Email: ${formData.email}
- Teléfono: ${formData.phone}
- Empresa: ${formData.company}

DETALLES DEL PROYECTO:
- Industria: ${industryOptions.find(opt => opt.value === formData.industryType)?.label || 'No especificado'}
- Tipo de proyecto: ${projectTypes.find(opt => opt.value === formData.projectType)?.label || 'No especificado'}
- Volumen de clientes: ${customerVolumes.find(opt => opt.value === formData.monthlyCustomers)?.label || 'No especificado'}
- Urgencia: ${urgencyLevels.find(opt => opt.value === formData.urgency)?.label || 'No especificado'}

DESAFÍO ACTUAL:
${formData.currentChallenge || 'No especificado'}

MENSAJE ADICIONAL:
${formData.message || 'Ninguno'}
        `
      };

      // Enviar con emailjs
      await emailjs.send(
        'service_ktgtb6n',     // Service ID
        'template_t150jh1',    // Template ID
        emailData,
        '91LGQkjJK46SJjFex'    // Public Key
      );

      setIsSubmitted(true);
      
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Hubo un problema al enviar el mensaje. Por favor intenta nuevamente o contáctanos por WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* Success animation background */}
        <motion.div 
          className="absolute -inset-4 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-3xl blur-2xl"
          animate={{ 
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        <div className="relative bg-gradient-to-b from-green-900/30 to-gray-800/90 backdrop-blur-xl rounded-3xl p-8 border-2 border-green-500/50 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
            className="bg-green-500 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center"
          >
            <CheckCircle2 className="h-10 w-10 text-white" />
          </motion.div>
          
          <h3 className="text-3xl font-bold text-white mb-4">
            ¡Mensaje enviado con éxito!
          </h3>
          
          <p className="text-gray-300 mb-6 text-lg">
            Gracias <span className="text-green-400 font-semibold">{formData.name}</span>. 
            Tu solicitud ha sido recibida y nuestro equipo la está revisando.
          </p>
          
          <div className="bg-gray-800/50 rounded-xl p-6 mb-6">
            <h4 className="text-lg font-semibold text-green-400 mb-4">¿Qué sigue ahora?</h4>
            <div className="space-y-3 text-left">
              <div className="flex items-center">
                <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">1</div>
                <span className="text-gray-300">En las próximas <strong>2 horas</strong> recibirás nuestra respuesta</span>
              </div>
              <div className="flex items-center">
                <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">2</div>
                <span className="text-gray-300">En <strong>24 horas</strong> tendrás una propuesta personalizada</span>
              </div>
              <div className="flex items-center">
                <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">3</div>
                <span className="text-gray-300">En <strong>48 horas</strong> tu asistente IA estará funcionando</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://wa.me/573243750360"
              className="inline-flex items-center justify-center bg-green-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-green-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              Hablar por WhatsApp
            </motion.a>
            <motion.button
              onClick={() => {
                setIsSubmitted(false);
                setCurrentStep(1);
                setErrors({}); // Limpiar errores
                setIsSubmitting(false); // Asegurar que no está enviando
                setFormData({
                  name: '', email: '', phone: '', company: '', industryType: '',
                  projectType: '', currentChallenge: '', monthlyCustomers: '',
                  urgency: '', budget: '', message: ''
                });
                // Limpiar también el formulario HTML
                if (form.current) {
                  form.current.reset();
                }
              }}
              className="inline-flex items-center justify-center border-2 border-green-500/40 bg-green-900/20 text-green-300 font-bold py-3 px-6 rounded-xl hover:bg-green-900/40 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enviar otro mensaje
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Glow effect */}
      <motion.div 
        className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-green-600/20 rounded-3xl blur-lg opacity-50"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      
      <div className="relative bg-gray-800/90 backdrop-blur-xl rounded-3xl border border-gray-700/50 overflow-hidden">
        {/* Header con progress */}
        <div className="bg-gradient-to-r from-purple-900/50 to-green-900/50 p-6 border-b border-gray-700/50">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <motion.div
                className="bg-gradient-to-r from-purple-600 to-green-600 p-2 rounded-lg mr-3"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Rocket className="h-6 w-6 text-white" />
              </motion.div>
              Solicitar Propuesta Gratuita
            </h2>
            
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-green-400" />
              <span className="text-green-400 font-semibold text-sm">Respuesta en 2h</span>
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-300">Paso {currentStep} de {totalSteps}</span>
            <span className="text-sm text-gray-300">{Math.round((currentStep / totalSteps) * 100)}% completado</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-purple-500 to-green-500 h-2 rounded-full"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              initial={{ width: 0 }}
              animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <form ref={form} onSubmit={handleSubmit} className="p-8">
          <AnimatePresence mode="wait">
            {/* Step 1: Basic Information */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-purple-400 mb-2">Información básica</h3>
                  <p className="text-gray-400">Cuéntanos sobre ti y tu empresa</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Full name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full bg-gray-700/50 border ${errors.name ? 'border-red-500' : 'border-gray-600'} rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:border-purple-500 transition duration-300 placeholder-gray-400`}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm mt-1 flex items-center"
                        >
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.name}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Email *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full bg-gray-700/50 border ${errors.email ? 'border-red-500' : 'border-gray-600'} rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:border-purple-500 transition duration-300 placeholder-gray-400`}
                        placeholder="name@company.com"
                      />
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm mt-1 flex items-center"
                        >
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.email}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Phone *</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full bg-gray-700/50 border ${errors.phone ? 'border-red-500' : 'border-gray-600'} rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:border-purple-500 transition duration-300 placeholder-gray-400`}
                        placeholder="+1 609 123 4567"
                      />
                      {errors.phone && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm mt-1 flex items-center"
                        >
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.phone}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Company *</label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className={`w-full bg-gray-700/50 border ${errors.company ? 'border-red-500' : 'border-gray-600'} rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:border-purple-500 transition duration-300 placeholder-gray-400`}
                        placeholder="Your company LLC"
                      />
                      {errors.company && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm mt-1 flex items-center"
                        >
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.company}
                        </motion.p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Trust indicator */}
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                  <div className="flex items-center text-green-400 text-sm">
                    <Shield className="h-4 w-4 mr-2" />
                    <span>Información 100% confidencial. No compartimos tus datos con terceros.</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Project Details */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-purple-400 mb-2">Detalles del proyecto</h3>
                  <p className="text-gray-400">Ayúdanos a entender tus necesidades específicas</p>
                </div>

                {/* Industry Type */}
                <div>
                  <label className="block text-gray-300 mb-3 font-medium">¿A qué industria perteneces? *</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {industryOptions.map((option) => (
                      <motion.button
                        key={option.value}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, industryType: option.value }))}
                        className={`p-3 rounded-lg border-2 transition-all duration-300 text-left ${
                          formData.industryType === option.value
                            ? 'border-purple-500 bg-purple-900/30 text-white'
                            : 'border-gray-600 bg-gray-700/30 text-gray-300 hover:border-gray-500'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="text-sm font-medium">{option.label}</span>
                      </motion.button>
                    ))}
                  </div>
                  {errors.industryType && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-2 flex items-center"
                    >
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.industryType}
                    </motion.p>
                  )}
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-gray-300 mb-3 font-medium">¿Qué tipo de solución te interesa? *</label>
                  <div className="space-y-3">
                    {projectTypes.map((option) => (
                      <motion.button
                        key={option.value}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, projectType: option.value }))}
                        className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                          formData.projectType === option.value
                            ? 'border-purple-500 bg-purple-900/30'
                            : 'border-gray-600 bg-gray-700/30 hover:border-gray-500'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="font-medium text-white">{option.label}</span>
                            <p className="text-gray-400 text-sm mt-1">{option.desc}</p>
                          </div>
                          <ArrowRight className={`h-5 w-5 transition-transform duration-300 ${
                            formData.projectType === option.value ? 'text-purple-400 translate-x-1' : 'text-gray-500'
                          }`} />
                        </div>
                      </motion.button>
                    ))}
                  </div>
                  {errors.projectType && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-2 flex items-center"
                    >
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.projectType}
                    </motion.p>
                  )}
                </div>

                {/* Customer Volume */}
                <div>
                  <label className="block text-gray-300 mb-3 font-medium">¿Cuántos clientes atiendes mensualmente? *</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {customerVolumes.map((option) => (
                      <motion.button
                        key={option.value}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, monthlyCustomers: option.value }))}
                        className={`p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                          formData.monthlyCustomers === option.value
                            ? 'border-purple-500 bg-purple-900/30'
                            : 'border-gray-600 bg-gray-700/30 hover:border-gray-500'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="font-medium text-white">{option.label}</div>
                        <div className="text-purple-400 text-sm mt-1">{option.bonus}</div>
                      </motion.button>
                    ))}
                  </div>
                  {errors.monthlyCustomers && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-2 flex items-center"
                    >
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.monthlyCustomers}
                    </motion.p>
                  )}
                </div>
              </motion.div>
            )}

            {/* Step 3: Additional Details */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-purple-400 mb-2">Últimos detalles</h3>
                  <p className="text-gray-400">Para crear la propuesta perfecta para ti</p>
                </div>

                {/* Urgency */}
                <div>
                  <label className="block text-gray-300 mb-3 font-medium">¿Qué tan urgente es tu proyecto?</label>
                  <div className="space-y-3">
                    {urgencyLevels.map((option) => (
                      <motion.button
                        key={option.value}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, urgency: option.value }))}
                        className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                          formData.urgency === option.value
                            ? `border-purple-500 bg-gradient-to-r ${option.color} bg-opacity-20`
                            : 'border-gray-600 bg-gray-700/30 hover:border-gray-500'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="font-medium text-white">{option.label}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Current Challenge */}
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">¿Cuál es tu mayor desafío actual?</label>
                  <textarea
                    name="currentChallenge"
                    value={formData.currentChallenge}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-purple-500 transition duration-300 placeholder-gray-400 resize-none"
                    placeholder="Ej: Perdemos muchos clientes porque no respondemos a tiempo en WhatsApp, especialmente en horarios nocturnos y fines de semana..."
                  />
                </div>

                {/* Additional Message */}
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">¿Algo más que quieras agregar?</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-purple-500 transition duration-300 placeholder-gray-400 resize-none"
                    placeholder="Requisitos específicos, integraciones necesarias, presupuesto estimado, etc."
                  />
                </div>

                {/* Benefits reminder */}
                <div className="bg-gradient-to-r from-green-900/20 to-purple-900/20 border border-green-500/30 rounded-lg p-6">
                  <h4 className="text-green-400 font-semibold mb-3 flex items-center">
                    <Gift className="h-5 w-5 mr-2" />
                    Al enviar este formulario recibes:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    {[
                      '✅ Respuesta en máximo 2 horas',
                      '✅ Propuesta personalizada en 24h',
                      '✅ Demo gratuita de tu solución',
                      '✅ Análisis de ROI para tu negocio',
                      '✅ Consultoría sin compromiso',
                      '✅ Setup gratuito (valor $500 USD)'
                    ].map((benefit, index) => (
                      <motion.div
                        key={index}
                        className="text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {benefit}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-700">
            {currentStep > 1 ? (
              <motion.button
                type="button"
                onClick={prevStep}
                className="flex items-center px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
                Anterior
              </motion.button>
            ) : (
              <div />
            )}

            {currentStep < totalSteps ? (
              <motion.button
                type="button"
                onClick={nextStep}
                className="flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-green-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Siguiente
                <ArrowRight className="h-4 w-4 ml-2" />
              </motion.button>
            ) : (
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Enviar solicitud
                  </>
                )}
              </motion.button>
            )}
          </div>
        </form>
      </div>
    </motion.div>
  );
}

export default ContactForm;