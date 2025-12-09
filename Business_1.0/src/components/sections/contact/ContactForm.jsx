// components/sections/contact/ContactForm.jsx - Con funcionalidad de emailjs integrada
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useTranslation } from '../../../hooks/useTranslation';
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
  const { t } = useTranslation();
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

  // Opciones para los selects - usando traducciones
  const industryOptions = [
    { value: 'healthcare', label: t('contactPage.form.industries.healthcare') },
    { value: 'retail', label: t('contactPage.form.industries.retail') },
    { value: 'realestate', label: t('contactPage.form.industries.realestate') },
    { value: 'services', label: t('contactPage.form.industries.services') },
    { value: 'restaurant', label: t('contactPage.form.industries.restaurant') },
    { value: 'education', label: t('contactPage.form.industries.education') },
    { value: 'automotive', label: t('contactPage.form.industries.automotive') },
    { value: 'other', label: t('contactPage.form.industries.other') }
  ];

  const projectTypes = [
    { value: 'ai', label: t('contactPage.form.projectTypes.ai.label'), desc: t('contactPage.form.projectTypes.ai.desc') },
    { value: 'dataML', label: t('contactPage.form.projectTypes.dataML.label'), desc: t('contactPage.form.projectTypes.dataML.desc') },
    { value: 'development', label: t('contactPage.form.projectTypes.development.label'), desc: t('contactPage.form.projectTypes.development.desc') }
  ];

  const customerVolumes = [
    { value: 'small', label: t('contactPage.form.customers.small.label'), bonus: t('contactPage.form.customers.small.bonus') },
    { value: 'medium', label: t('contactPage.form.customers.medium.label'), bonus: t('contactPage.form.customers.medium.bonus') },
    { value: 'large', label: t('contactPage.form.customers.large.label'), bonus: t('contactPage.form.customers.large.bonus') },
    { value: 'enterprise', label: t('contactPage.form.customers.enterprise.label'), bonus: t('contactPage.form.customers.enterprise.bonus') }
  ];

  const urgencyLevels = [
    { value: 'asap', label: t('contactPage.form.urgency.asap'), color: 'from-red-500 to-orange-600' },
    { value: 'soon', label: t('contactPage.form.urgency.soon'), color: 'from-orange-500 to-yellow-600' },
    { value: 'planning', label: t('contactPage.form.urgency.planning'), color: 'from-blue-500 to-indigo-600' },
    { value: 'exploring', label: t('contactPage.form.urgency.exploring'), color: 'from-purple-500 to-violet-600' }
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
      if (!formData.name.trim()) newErrors.name = t('contactPage.form.errors.nameRequired');
      if (!formData.email.trim()) newErrors.email = t('contactPage.form.errors.emailRequired');
      if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = t('contactPage.form.errors.emailInvalid');
      }
      if (!formData.phone.trim()) newErrors.phone = t('contactPage.form.errors.phoneRequired');
      if (!formData.company.trim()) newErrors.company = t('contactPage.form.errors.companyRequired');
    }
    
    if (step === 2) {
      if (!formData.industryType) newErrors.industryType = t('contactPage.form.errors.industryRequired');
      if (!formData.projectType) newErrors.projectType = t('contactPage.form.errors.projectTypeRequired');
      if (!formData.monthlyCustomers) newErrors.monthlyCustomers = t('contactPage.form.errors.customersRequired');
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
      alert(t('contactPage.form.success.error'));
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
            {t('contactPage.form.success.title')}
          </h3>
          
          <p className="text-gray-300 mb-6 text-lg">
            {t('contactPage.form.success.message')} <span className="text-green-400 font-semibold">{formData.name}</span>. 
            {t('contactPage.form.success.message2')}
          </p>
          
          <div className="bg-gray-800/50 rounded-xl p-6 mb-6">
            <h4 className="text-lg font-semibold text-green-400 mb-4">{t('contactPage.form.success.nextSteps')}</h4>
            <div className="space-y-3 text-left">
              <div className="flex items-center">
                <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">1</div>
                <span className="text-gray-300">{t('contactPage.form.success.step1')} <strong>{t('contactPage.form.success.step1Time')}</strong> {t('contactPage.form.success.step1Text')}</span>
              </div>
              <div className="flex items-center">
                <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">2</div>
                <span className="text-gray-300">{t('contactPage.form.success.step2')} <strong>{t('contactPage.form.success.step2Time')}</strong> {t('contactPage.form.success.step2Text')}</span>
              </div>
              <div className="flex items-center">
                <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">3</div>
                <span className="text-gray-300">{t('contactPage.form.success.step3')} <strong>{t('contactPage.form.success.step3Time')}</strong> {t('contactPage.form.success.step3Text')}</span>
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
              {t('contactPage.form.success.whatsapp')}
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
              {t('contactPage.form.success.sendAnother')}
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
              {t('contactPage.form.title')}
            </h2>
            
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-green-400" />
              <span className="text-green-400 font-semibold text-sm">{t('contactPage.form.responseTime')}</span>
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-300">{t('contactPage.form.step')} {currentStep} {t('contactPage.form.of')} {totalSteps}</span>
            <span className="text-sm text-gray-300">{Math.round((currentStep / totalSteps) * 100)}% {t('contactPage.form.completed')}</span>
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
                  <h3 className="text-xl font-bold text-purple-400 mb-2">{t('contactPage.form.step1.title')}</h3>
                  <p className="text-gray-400">{t('contactPage.form.step1.subtitle')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">{t('contactPage.form.step1.name')}</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full bg-gray-700/50 border ${errors.name ? 'border-red-500' : 'border-gray-600'} rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:border-purple-500 transition duration-300 placeholder-gray-400`}
                        placeholder={t('contactPage.form.step1.namePlaceholder')}
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
                    <label className="block text-gray-300 mb-2 font-medium">{t('contactPage.form.step1.email')}</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full bg-gray-700/50 border ${errors.email ? 'border-red-500' : 'border-gray-600'} rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:border-purple-500 transition duration-300 placeholder-gray-400`}
                        placeholder={t('contactPage.form.step1.emailPlaceholder')}
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
                    <label className="block text-gray-300 mb-2 font-medium">{t('contactPage.form.step1.phone')}</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full bg-gray-700/50 border ${errors.phone ? 'border-red-500' : 'border-gray-600'} rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:border-purple-500 transition duration-300 placeholder-gray-400`}
                        placeholder={t('contactPage.form.step1.phonePlaceholder')}
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
                    <label className="block text-gray-300 mb-2 font-medium">{t('contactPage.form.step1.company')}</label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className={`w-full bg-gray-700/50 border ${errors.company ? 'border-red-500' : 'border-gray-600'} rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:border-purple-500 transition duration-300 placeholder-gray-400`}
                        placeholder={t('contactPage.form.step1.companyPlaceholder')}
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
                    <span>{t('contactPage.form.step1.privacy')}</span>
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
                  <h3 className="text-xl font-bold text-purple-400 mb-2">{t('contactPage.form.step2.title')}</h3>
                  <p className="text-gray-400">{t('contactPage.form.step2.subtitle')}</p>
                </div>

                {/* Industry Type */}
                <div>
                  <label className="block text-gray-300 mb-3 font-medium">{t('contactPage.form.step2.industry')}</label>
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
                  <label className="block text-gray-300 mb-3 font-medium">{t('contactPage.form.step2.projectType')}</label>
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
                  <label className="block text-gray-300 mb-3 font-medium">{t('contactPage.form.step2.customers')}</label>
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
                  <h3 className="text-xl font-bold text-purple-400 mb-2">{t('contactPage.form.step3.title')}</h3>
                  <p className="text-gray-400">{t('contactPage.form.step3.subtitle')}</p>
                </div>

                {/* Urgency */}
                <div>
                  <label className="block text-gray-300 mb-3 font-medium">{t('contactPage.form.step3.urgency')}</label>
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
                  <label className="block text-gray-300 mb-2 font-medium">{t('contactPage.form.step3.challenge')}</label>
                  <textarea
                    name="currentChallenge"
                    value={formData.currentChallenge}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-purple-500 transition duration-300 placeholder-gray-400 resize-none"
                    placeholder={t('contactPage.form.step3.challengePlaceholder')}
                  />
                </div>

                {/* Additional Message */}
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">{t('contactPage.form.step3.message')}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-purple-500 transition duration-300 placeholder-gray-400 resize-none"
                    placeholder={t('contactPage.form.step3.messagePlaceholder')}
                  />
                </div>

                {/* Benefits reminder */}
                <div className="bg-gradient-to-r from-green-900/20 to-purple-900/20 border border-green-500/30 rounded-lg p-6">
                  <h4 className="text-green-400 font-semibold mb-3 flex items-center">
                    <Gift className="h-5 w-5 mr-2" />
                    {t('contactPage.form.step3.benefitsTitle')}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    {t('contactPage.form.step3.benefits').map((benefit, index) => (
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
                {t('contactPage.form.buttons.previous')}
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
                {t('contactPage.form.buttons.next')}
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
                    {t('contactPage.form.buttons.sending')}
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    {t('contactPage.form.buttons.submit')}
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