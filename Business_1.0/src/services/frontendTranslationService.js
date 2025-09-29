// src/services/frontendTranslationService.js
// Sistema de traducción frontend-only optimizado para GitHub Pages

// Diccionario estático con las frases más comunes de tu app
const staticTranslations = {
  // Navegación
  "Inicio": "Home",
  "Servicios": "Services", 
  "Características": "Features",
  "Precios": "Pricing",
  "Acerca de": "About",
  "Contacto": "Contact",
  
  // Hero/CTA
  "Empezar ahora": "Get started now",
  "Saber más": "Learn more",
  "Contáctanos": "Contact us",
  "Ver demo": "View demo",
  "Empezar gratis": "Start free",
  
  // How it works (tu contenido actual)
  "¿Cómo funciona Octopus AI?": "How does Octopus AI work?",
  "Un proceso simple para transformar la comunicación de tu negocio": "A simple process to transform your business communication",
  "Cuéntanos qué necesitas": "Tell us what you need",
  "Nos contactas contándonos sobre tu negocio, los servicios que ofreces y cómo quieres atender a tus clientes": "Contact us telling us about your business, the services you offer and how you want to serve your customers",
  "Diseñamos tu asistente personalizado": "We design your personalized assistant",
  "Creamos un asistente exclusivo que refleja el tono, valores y objetivos específicos de tu empresa": "We create an exclusive assistant that reflects the tone, values and specific objectives of your company",
  "Configuramos el flujo ideal": "We configure the ideal flow",
  "Desarrollamos la inteligencia artificial para responder consultas, agendar citas y dar soporte en cualquier idioma": "We develop artificial intelligence to answer queries, schedule appointments and provide support in any language",
  "Integración con tus canales": "Integration with your channels",
  "Conectamos tu asistente a WhatsApp, Telegram, Gmail y otros canales que necesites para una experiencia omnicanal": "We connect your assistant to WhatsApp, Telegram, Gmail and other channels you need for an omnichannel experience",
  "Lanzamiento y optimización continua": "Launch and continuous optimization",
  "Ponemos el asistente en marcha y realizamos mejoras constantes basadas en datos reales de interacción": "We launch the assistant and make constant improvements based on real interaction data",
  
  // Características
  "Optimiza tu negocio con nuestras soluciones de inteligencia artificial hechas a la medida": "Optimize your business with our custom artificial intelligence solutions",
  "Proceso sencillo": "Simple process",
  "Tecnología avanzada": "Advanced technology",
  "Soporte 24/7": "24/7 Support",
  "Integración sencilla": "Easy integration",
  "Escalabilidad completa": "Complete scalability",
  "Seguridad garantizada": "Guaranteed security",
  
  // Tech features
  "Infraestructura": "Infrastructure",
  "Inteligencia Artificial": "Artificial Intelligence",
  "Seguridad": "Security",
  "API REST Robusta": "Robust REST API",
  "Integración sencilla con tus sistemas existentes mediante nuestra API RESTful de alto rendimiento": "Easy integration with your existing systems through our high-performance RESTful API",
  "Webhooks Personalizables": "Customizable Webhooks",
  "Configura notificaciones y acciones basadas en eventos específicos en tiempo real": "Configure notifications and actions based on specific events in real time",
  "Monitoreo 24/7": "24/7 Monitoring",
  "Supervisión constante y alertas proactivas para garantizar el funcionamiento óptimo": "Constant monitoring and proactive alerts to ensure optimal performance",
  
  // Frases comunes
  "Más información": "More information",
  "Ver detalles": "View details",
  "Características principales": "Main features",
  "Beneficios": "Benefits",
  "Soluciones": "Solutions",
  "Empresa": "Company",
  "Productos": "Products",
  "Equipo": "Team",
  "Misión": "Mission",
  "Visión": "Vision",
  "Valores": "Values",

   // Palabras clave que faltan
  "empresarial" : "business",
  "empresa": "company", 
  "Company": "Company",
  "compañía": "company",
  "Solutions": "Solutions", // Ya está en inglés
  "Creamos": "We create",
  "creamos": "we create",
  "desarrollamos": "we develop",
  "ofrecemos": "we offer",
  "brindamos": "we provide",
  
  // Frases del home que faltan
  "La revolución de la IA empresarial": "The business AI revolution",
  "Transform your comunicación empresarial": "Transform your business communication",
  "comunicación empresarial": "business communication",
  "Ver Soluciones": "View Solutions", 
  "Ver Solutions": "View Solutions",
  "Soluciones a la medida": "Custom Solutions",
  "Solutions a la medida": "Custom Solutions",
  "Creamos soluciones personalizadas": "We create personalized solutions",
  "Creamos Solutions personalizadas": "We create personalized Solutions",
  "para cada sector": "for each sector",
  "con conocimientos específicos": "with specific knowledge",
  "flujos adaptados": "adapted flows",
  "necesidades de tu negocio": "needs of your business",
  
  // Empresas y sectores
  "Empresas de Servicios": "Service Companies",
  "Empresas de Services": "Service Companies", 
  "Bienes Raíces": "Real Estate",
  "Salud y Bienestar": "Health and Wellness",
  "Estudios Jurídicos": "Law Firms", 
  "Restaurantes": "Restaurants",
  "Consultores": "Consultants",
  "Agencias de Marketing": "Marketing Agencies",
  "Servicios legales": "Legal Services",
  

  // Features y beneficios
  "Respuestas Instantáneas": "Instant Answers",
  "Detección de intención": "Intention detection", 
  "Conversación natural": "Natural conversation",
  "Integración CRM": "CRM Integration",
  "Gestión de Citas": "Appointment Management",
  "Recordatorios Automáticos": "Automatic Reminders",
  "Sincronización de calendario": "Calendar sync",
  "Reprogramación sin fricciones": "Frictionless reprogramming",
  "Confirmaciones personalizadas": "Custom confirmations",
  
  // Gmail y automation
  "Automatización Gmail": "Gmail Automation",
  "Filtrado Inteligente": "Smart Filtering", 
  "Respuestas automatizadas": "Automated responses",
  "Monitoreo de leads": "Lead monitoring",
  "Análisis de sentimientos": "Sentiment analysis",
  
  // Excel integration
  "Integración con Excel": "Integration with Excel",
  "Conecta tu asistente": "Connect your assistant",
  "hojas de cálculo": "spreadsheets",
  "registros actualizados": "up-to-date records",
  "Actualización en vivo": "Live updating", 
  "Exportación de datos": "Data Export",
  "Captura estructurada": "Structured Capture",
  "Reportes automatizados": "Automated Reports",
  
  // Customización y personalization
  "Asistentes personalizados": "Personalized Assistants",
  "para tu empresa": "for your company",
  "identidad de marca": "brand identity",
  "conocimiento de productos": "product knowledge",
  "flujos de atención únicos": "unique service flows",
  "Personalización total": "Total customization",
  "Adaptado a la identidad": "Adapted to the identity",
  "valores de tu marca": "values of your brand",
  "Conversaciones naturales": "Natural conversations",
  "comunicación fluida": "smooth communication",
  "Aprendizaje continuo": "Ongoing learning",
  "mejorando constantemente": "constantly improving",
  "interacciones reales": "real interactions",
  
  // Call to actions
  "Solicita tu demo gratuito": "Request your free demo",
  "Solicitar demo": "Request demo",
  "Ver todas las soluciones": "View all solutions",
  "Ver todas las Solutions": "View all Solutions",
  "Solicitar solución para mi negocio": "Request solution for my business",
  
  // Footer y contact
  "Centro de Ayuda": "Help Center",
  "Documentación": "Documentation", 
  "Preguntas Frecuentes": "Frequently Asked Questions",
  "Casos de Éxito": "Success Cases",
  "Sobre Nosotros": "About Us",
  "Soporte": "Support",
  "Email corporativo": "Corporate Email",
  "WhatsApp directo": "Direct WhatsApp",
  "Atención global": "Global Support",
  
  // Metrics y stats
  "Satisfacción": "Satisfaction",
  "Disponibilidad": "Availability", 
  "conversión": "conversion",
  "eficiencia": "efficiency",
  "satisfacción": "satisfaction",
  "cancelaciones": "cancellations",
  "automatización": "automation",
  "tiempo ahorrado": "time saved",
  "precisión": "accuracy", 
  "productividad": "productivity",
  "procesamiento": "processing",
  "errores": "errors",
  
  // Tiempos y procesos
  "De la idea a producción": "From idea to production",
  "en tiempo récord": "in record time",
  "Configuración inicial": "Initial setup",
  "Desarrollo y pruebas": "Development and testing",
  "Lanzamiento": "Launch",
  "días": "days",
  "semanas": "weeks",
    "Nuestras Soluciones": "Our Solutions",
  "Nuestras Solutions": "Our Solutions", // fallback
  "Beneficios clave": "Key benefits",
  "Benefits clave": "Key benefits", // fallback
  
  "Automatización inteligente para cada canal de comunicación con tus clientes": "Intelligent automation for every communication channel with your customers",
  "automation inteligente para cada canal de comunicación con tus clientes": "Intelligent automation for every communication channel with your customers",
  
  "Sistema automatizado de reservas y reprogramaciones que optimiza tu agenda y reduce cancelaciones.": "Automated booking and rescheduling system that optimizes your schedule and reduces cancellations.",
  "Sistema automatizado de reservas y reprogramaciones que optimiza tu agenda y reduce cancellations.": "Automated booking and rescheduling system that optimizes your schedule and reduces cancellations.",
  
  "Conecta tu asistente con hojas de cálculo para gestionar pedidos y mantener registros actualizados.": "Connect your assistant with spreadsheets to manage orders and maintain updated records.",
  "Conecta tu asistente con hojas de cálculo para gestionar pedidos y mantener up-to-date records.": "Connect your assistant with spreadsheets to manage orders and maintain updated records.",
  
  "Creamos soluciones personalizadas para cada sector, con conocimientos específicos y flujos adaptados a las necesidades de tu negocio.": "We create personalized solutions for each sector, with specific knowledge and flows adapted to your business needs.",
  "We create personalized solutions para cada sector, con conocimientos específicos y flujos adaptados a las necesidades de tu negocio.": "We create personalized solutions for each sector, with specific knowledge and flows adapted to your business needs.",
  
  "Nuestro proceso optimizado te permite tener tu asistente IA funcionando en tiempo récord, sin comprometer la calidad ni la personalización.": "Our optimized process allows you to have your AI assistant running in record time, without compromising quality or customization.",
  "Nuestro proceso optimizado te permite tener tu asistente IA funcionando in record time, sin comprometer la calidad ni la personalización.": "Our optimized process allows you to have your AI assistant running in record time, without compromising quality or customization.",
  
  ", conocimiento de productos y flujos de atención únicos.": ", product knowledge and unique service flows.",
  ", product knowledge y flujos de atención únicos.": ", product knowledge and unique service flows.",
  
  "Adaptado a la identidad y valores de tu marca": "Adapted to your brand identity and values",
  "Adapted to the identity y valores de tu marca": "Adapted to your brand identity and values",
  
  "Comunicación fluida y humana con tus clientes": "Smooth and human communication with your customers",
  "smooth communication y humana con tus clientes": "Smooth and human communication with your customers",
  
  "Mejora constantemente basado en interacciones reales": "Constantly improves based on real interactions",
  "Mejora constantemente basado en real interactions": "Constantly improves based on real interactions",
  
  "✓ Configuración en 1-2 semanas": "✓ Setup in 1-2 weeks",
  "✓ Configuración en 1-2 weeks": "✓ Setup in 1-2 weeks",
  
  "Cada asistente Octopus es único como tu empresa. No usamos plantillas genéricas, sino que construimos una solución adaptada a tus necesidades específicas.": "Each Octopus assistant is unique like your company. We don't use generic templates, but build a solution adapted to your specific needs.",

  "Soporte prioritario 24/7": "24/7 priority support",
  "Support prioritario 24/7": "24/7 priority support",
  
  "+500 empresas confían en nosotros": "+500 companies trust us",
  "+500 Companys confían en nosotros": "+500 companies trust us",
  
  "Gestión de citas con prospectos": "Appointment management with prospects",
  "Appointment Management con prospectos": "Appointment management with prospects",
  
  "Soluciones a medida": "Custom solutions",
  "Solutions a medida": "Custom solutions",
  

  "empresas": "companies",
  "Companys": "companies",
  "soluciones": "solutions", 

  "automation": "automation",
  "beneficios": "benefits",
  "Benefits": "benefits",
  "clave": "key",
  "inteligente": "intelligent",
  "personalizadas": "personalized",
  "específicos": "specific",
  "únicos": "unique",
  "récord": "record",
  "optimizado": "optimized",
  "calidad": "quality",
  "personalización": "customization",
  "identidad": "identity",
  "valores": "values",
  "marca": "brand",
  "fluida": "smooth",
  "humana": "human",
  "constantemente": "constantly",
  "basado": "based",
  "interacciones": "interactions",
  "reales": "real",

  "soporte": "support",
  "prioritario": "priority",
  "confían": "trust",
  "nosotros": "us",
  "gestión": "management",
  "citas": "appointments",
  "prospectos": "prospects"



};

class FrontendTranslationService {
  constructor() {
    this.staticDict = new Map(Object.entries(staticTranslations));
    this.dynamicCache = new Map();
    this.originalTexts = new Map();
    this.isTranslating = false;
    this.apiQueue = [];
    this.isProcessingQueue = false;
    
    // APIs gratuitas múltiples para balanceo
  this.apis = [
    { 
      name: 'MyMemory', 
      endpoint: this.translateWithMyMemory.bind(this),
      dailyLimit: 100,
      currentUsage: 0,
      lastReset: this.getTodayKey()
    },
    { 
      name: 'Lingva', 
      endpoint: this.translateWithLingva.bind(this),
      dailyLimit: 100,
      currentUsage: 0,
      lastReset: this.getTodayKey()
    }
  ];
    
    this.loadFromStorage();
  }

    async translateWithLingva(text, fromLang, toLang) {
    // Usar proxy CORS-friendly
    const url = `https://api.allorigins.win/get?url=${encodeURIComponent(`https://lingva.ml/api/v1/${fromLang}/${toLang}/${encodeURIComponent(text)}`)}`;
    
    const response = await fetch(url);
    if (!response.ok) throw new Error('Lingva API failed');
    
    const data = await response.json();
    const result = JSON.parse(data.contents);
    
    if (result.translation) {
      return result.translation;
    }
    throw new Error('Invalid Lingva response');
  }


  getTodayKey() {
    return new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  }

  // Traducción instantánea principal
  translateText(text, fromLang = 'es', toLang = 'en') {
    if (!text || text.trim() === '') return text;
    
    const cleanText = text.trim();
    const cacheKey = `${cleanText}_${fromLang}_${toLang}`;
    
    // 1. Verificar diccionario estático - EXACTO PRIMERO
    if (this.staticDict.has(cleanText)) {
      return this.staticDict.get(cleanText);
    }

    // 2. Verificar cache dinámico
    if (this.dynamicCache.has(cacheKey)) {
      return this.dynamicCache.get(cacheKey);
    }

    // 3. Buscar FRASES COMPLETAS primero (mejorado)
    const exactPhraseMatch = this.findExactPhraseMatch(cleanText);
    if (exactPhraseMatch && exactPhraseMatch !== cleanText) {
      this.dynamicCache.set(cacheKey, exactPhraseMatch);
      return exactPhraseMatch;
    }

    // 4. Solo entonces buscar coincidencias parciales
    const partialMatch = this.findPartialMatch(cleanText);
    if (partialMatch && partialMatch !== cleanText) {
      this.dynamicCache.set(cacheKey, partialMatch);
      return partialMatch;
    }

    // 5. Agregar a cola para traducción background (no bloquea)
    this.queueTranslation(cleanText, fromLang, toLang);
    
    return cleanText; // Retorna original mientras traduce en background
  }


  findExactPhraseMatch(text) {
    const lowerText = text.toLowerCase();
    
    // 1. Buscar coincidencia exacta primero
    for (const [spanish, english] of this.staticDict) {
      if (spanish.toLowerCase() === lowerText) {
        return english;
      }
    }
    
    // 2. Buscar frases que contengan el texto (frases largas primero)
    let bestMatch = null;
    let bestMatchLength = 0;
    
    const sortedByLength = Array.from(this.staticDict.entries())
      .sort((a, b) => b[0].length - a[0].length);
    
    for (const [spanish, english] of sortedByLength) {
      const spanishLower = spanish.toLowerCase();
      if (lowerText.includes(spanishLower) && spanish.length > bestMatchLength) {
        // Hacer reemplazo completo de la frase
        bestMatch = text.replace(new RegExp(spanish, 'gi'), english);
        bestMatchLength = spanish.length;
      }
    }
    
    return bestMatch;
  }

  // Buscar coincidencias parciales en diccionario
  findPartialMatch(text) {
    const lowerText = text.toLowerCase();
    let result = text;
    let hasChanges = false;
    
    // Primero: Buscar frases completas (más de 3 palabras)
    const longPhrases = Array.from(this.staticDict.entries())
      .filter(([spanish, english]) => spanish.split(' ').length > 3)
      .sort((a, b) => b[0].length - a[0].length);
    
    for (const [spanish, english] of longPhrases) {
      if (result.toLowerCase().includes(spanish.toLowerCase())) {
        result = result.replace(new RegExp(spanish, 'gi'), english);
        hasChanges = true;
        break; // Solo una sustitución completa por vez
      }
    }
    
    // Si no hubo cambios, buscar frases medianas (2-3 palabras)
    if (!hasChanges) {
      const mediumPhrases = Array.from(this.staticDict.entries())
        .filter(([spanish, english]) => spanish.split(' ').length >= 2 && spanish.split(' ').length <= 3)
        .sort((a, b) => b[0].length - a[0].length);
      
      for (const [spanish, english] of mediumPhrases) {
        if (result.toLowerCase().includes(spanish.toLowerCase())) {
          result = result.replace(new RegExp(spanish, 'gi'), english);
          hasChanges = true;
          break; // Solo una sustitución por vez
        }
      }
    }
    
    // Solo como último recurso: palabras individuales
    if (!hasChanges) {
      const singleWords = Array.from(this.staticDict.entries())
        .filter(([spanish, english]) => spanish.split(' ').length === 1)
        .sort((a, b) => b[0].length - a[0].length);
      
      for (const [spanish, english] of singleWords) {
        const regex = new RegExp(`\\b${spanish}\\b`, 'gi');
        if (regex.test(result)) {
          result = result.replace(regex, english);
          hasChanges = true;
        }
      }
    }
    
    return hasChanges ? result : null;
  }


  // Cola de traducción en background
  queueTranslation(text, fromLang, toLang) {
    const cacheKey = `${text}_${fromLang}_${toLang}`;
    
    if (!this.apiQueue.find(item => item.cacheKey === cacheKey)) {
      this.apiQueue.push({ text, fromLang, toLang, cacheKey });
      this.processQueue();
    }
  }

  async processQueue() {
    if (this.isProcessingQueue || this.apiQueue.length === 0) return;
    
    this.isProcessingQueue = true;
    
    while (this.apiQueue.length > 0) {
      const item = this.apiQueue.shift();
      
      try {
        const translation = await this.translateWithAPIs(item.text, item.fromLang, item.toLang);
        
        if (translation && translation !== item.text) {
          this.dynamicCache.set(item.cacheKey, translation);
          this.saveToStorage();
          
          // Actualizar elementos existentes en la página
          this.updateExistingElements(item.text, translation);
        }
      } catch (error) {
        console.warn('Background translation failed:', error);
      }
      
      // Pausa entre peticiones para no saturar APIs
      await new Promise(resolve => setTimeout(resolve, 300));
    }
    
    this.isProcessingQueue = false;
  }

  // Usar múltiples APIs con balanceo
  async translateWithAPIs(text, fromLang, toLang) {
    this.resetDailyCountersIfNeeded();
    
    // Filtrar APIs disponibles
    const availableAPIs = this.apis.filter(api => api.currentUsage < api.dailyLimit);
    
    if (availableAPIs.length === 0) {
      console.warn('All translation APIs exhausted for today');
      return null;
    }

    // Intentar con cada API disponible
    for (const api of availableAPIs) {
      try {
        const result = await api.endpoint(text, fromLang, toLang);
        if (result && this.isValidTranslation(result, text)) {
          api.currentUsage++;
          this.saveApiUsage();
          return result;
        }
      } catch (error) {
        console.warn(`${api.name} failed:`, error.message);
        continue;
      }
    }

    return null;
  }

  // APIs de traducción
  async translateWithMyMemory(text, fromLang, toLang) {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${fromLang}|${toLang}`;
    
    const response = await fetch(url);
    if (!response.ok) throw new Error('MyMemory API failed');
    
    const data = await response.json();
    if (data.responseStatus === 200 && data.responseData) {
      return data.responseData.translatedText;
    }
    throw new Error('Invalid MyMemory response');
  }

  async translateWithLibre(text, fromLang, toLang) {
    const url = 'https://libretranslate.de/translate';
    
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        q: text,
        source: fromLang,
        target: toLang
      })
    });
    
    if (!response.ok) throw new Error('LibreTranslate API failed');
    
    const data = await response.json();
    if (data.translatedText) {
      return data.translatedText;
    }
    throw new Error('Invalid LibreTranslate response');
  }

  isValidTranslation(translation, original) {
    if (!translation || translation.toLowerCase() === original.toLowerCase()) return false;
    if (translation.length > original.length * 4) return false;
    if (!/[a-zA-Z]/.test(translation)) return false;
    return true;
  }

  // Actualizar elementos existentes en tiempo real
  updateExistingElements(originalText, translation) {
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      node => node.textContent.trim() === originalText ? 
        NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
    );

    let node;
    while (node = walker.nextNode()) {
      node.textContent = translation;
    }
  }

  // Traducir página completa (súper rápido)
  translatePage(toLang = 'en') {
    if (this.isTranslating) return;
    this.isTranslating = true;

    const startTime = performance.now();
    const textNodes = this.getTextNodes();
    
    console.log(`🔄 Iniciando traducción de ${textNodes.length} elementos...`);
    
    let translated = 0;
    let kept = 0;
    
    textNodes.forEach(node => {
      const originalText = node.textContent.trim();
      if (originalText && originalText.length > 1) {
        this.originalTexts.set(node, originalText);
        
        // Traducción sincrónica mejorada
        const translatedText = this.translateText(originalText, 'es', toLang);
        if (translatedText !== originalText) {
          node.textContent = translatedText;
          translated++;
          console.log(`✅ "${originalText}" → "${translatedText}"`);
        } else {
          kept++;
        }
      }
    });

    const endTime = performance.now();
    console.log(`🎉 Traducción completada en ${(endTime - startTime).toFixed(2)}ms`);
    console.log(`   ✅ ${translated} elementos traducidos`);
    console.log(`   ⏭️ ${kept} elementos mantenidos`);
    
    this.isTranslating = false;
  }
  getTextNodes(element = document.body) {
    const textNodes = [];
    const walker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => {
          const parent = node.parentElement;
          if (!parent) return NodeFilter.FILTER_REJECT;
          
          const tagName = parent.tagName.toLowerCase();
          if (['script', 'style', 'meta', 'title', 'noscript'].includes(tagName)) {
            return NodeFilter.FILTER_REJECT;
          }
          
          if (parent.hasAttribute('data-no-translate') || 
              parent.classList.contains('no-translate')) {
            return NodeFilter.FILTER_REJECT;
          }
          
          const text = node.textContent.trim();
          return text && text.length > 1 ? 
            NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        }
      }
    );

    let node;
    while (node = walker.nextNode()) {
      textNodes.push(node);
    }
    
    return textNodes;
  }

  restoreOriginalTexts() {
    this.originalTexts.forEach((originalText, node) => {
      if (node.parentNode) {
        node.textContent = originalText;
      }
    });
    this.originalTexts.clear();
  }

  resetDailyCountersIfNeeded() {
    const today = this.getTodayKey();
    
    this.apis.forEach(api => {
      if (api.lastReset !== today) {
        api.currentUsage = 0;
        api.lastReset = today;
      }
    });
    
    this.saveApiUsage();
  }

  // Persistencia en localStorage
  saveToStorage() {
    try {
      const dynamicCache = Object.fromEntries(this.dynamicCache);
      localStorage.setItem('octopus-dynamic-cache', JSON.stringify(dynamicCache));
    } catch (error) {
      console.warn('Could not save dynamic cache:', error);
    }
  }

  saveApiUsage() {
    try {
      const usage = this.apis.map(api => ({
        name: api.name,
        currentUsage: api.currentUsage,
        lastReset: api.lastReset
      }));
      localStorage.setItem('octopus-api-usage', JSON.stringify(usage));
    } catch (error) {
      console.warn('Could not save API usage:', error);
    }
  }

  loadFromStorage() {
    try {
      // Cargar cache dinámico
      const cached = localStorage.getItem('octopus-dynamic-cache');
      if (cached) {
        const cacheObject = JSON.parse(cached);
        this.dynamicCache = new Map(Object.entries(cacheObject));
      }

      // Cargar uso de APIs
      const usage = localStorage.getItem('octopus-api-usage');
      if (usage) {
        const usageArray = JSON.parse(usage);
        usageArray.forEach(apiUsage => {
          const api = this.apis.find(a => a.name === apiUsage.name);
          if (api) {
            api.currentUsage = apiUsage.currentUsage;
            api.lastReset = apiUsage.lastReset;
          }
        });
      }
    } catch (error) {
      console.warn('Could not load from storage:', error);
    }
  }

  // Estadísticas
  getStats() {
    return {
      staticTranslations: this.staticDict.size,
      dynamicCache: this.dynamicCache.size,
      queueLength: this.apiQueue.length,
      apiUsage: this.apis.map(api => ({
        name: api.name,
        usage: `${api.currentUsage}/${api.dailyLimit}`,
        percentage: Math.round((api.currentUsage / api.dailyLimit) * 100)
      }))
    };
  }

  clearCache() {
    this.dynamicCache.clear();
    localStorage.removeItem('octopus-dynamic-cache');
    console.log('🗑️ Cache dinámico limpiado');
  }
}

// Instancia singleton
export const frontendTranslationService = new FrontendTranslationService();