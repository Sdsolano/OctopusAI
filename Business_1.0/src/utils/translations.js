// src/utils/translations.js - COMPLETO para todo el Homepage
export const translations = {
  es: {
    // ===== NAVEGACIÓN =====
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      features: 'Características',
      pricing: 'Precios',
      about: 'Nosotros',
      contact: 'Contacto'
    },

    // ===== ELEMENTOS COMUNES =====
    common: {
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      loading: 'Cargando...',
      error: 'Error',
      success: 'Éxito',
      explore: 'Explorar',
      viewAllSolutions: 'Ver todas las soluciones',
      requestDemo: 'Solicitar demo',
      startNow: 'Empezar ahora',
      learnMore: 'Saber más',
      verified: 'Verificado',
      keyBenefits: 'Beneficios clave',
      idealFor: 'Ideal para',
      successCase: 'Caso de éxito'
    },

    // ===== BADGES =====
    badges: {
      highTechnology: 'Alta tecnología',
      liveDemos: 'Demos en vivo',
      simpleProcess: 'Proceso sencillo',
      testimonials: 'Testimonios',
      customSolutions: 'Soluciones a medida',
      benefits: 'Beneficios',
      frequentQuestions: 'Preguntas frecuentes',
      whyChooseUs: '¿Por qué elegirnos?'
    },

    // ===== HERO SECTION =====
    hero: {
      title: 'La revolución de la IA empresarial',
      subtitle: 'Transforma tu comunicación empresarial con IA',
      titlePart1: 'Transforma tu',
      titleHighlight: 'comunicación empresarial',
      titlePart2: 'con IA',
      description: 'Asistentes inteligentes personalizados para WhatsApp, Telegram y Gmail que atienden a tus clientes 24/7.',
      startButton: 'Empezar ahora',
      viewSolutions: 'Ver soluciones',
      
      // Videos del Hero
      videos: {
        whatsapp: {
          title: 'WhatsApp AI',
          subtitle: 'Asistente 24/7',
          description: 'Automatiza respuestas, agenda citas y gestiona consultas directamente en WhatsApp'
        },
        telegram: {
          title: 'Telegram Bot',
          subtitle: 'Inteligencia avanzada',
          description: 'Bot personalizado que aprende de tu negocio y responde como un experto'
        }
      },

      // Mensaje flotante en el hero
      floatingMessage: 'Automatiza tu atención al cliente y aumenta tus ventas con AI'
    },

    // ===== ESTADÍSTICAS =====
    stats: {
      satisfaction: 'Satisfacción',
      availability: 'Disponibilidad',
      response: 'Respuesta',
      automation: 'Automatización',
      efficiency: 'Eficiencia',
      accuracy: 'Precisión',
      saved: 'Ahorradas',
      productivity: 'Productividad',
      processing: 'Procesamiento',
      errors: 'Errores',
      conversion: 'Conversión',
      cancellations: 'Cancelaciones',
      companies: '+50 empresas confían en nosotros',
      roiAverage: 'ROI promedio',
      instantProcessing: 'Procesamiento instantáneo'
    },

    // ===== SERVICES/FEATURES =====
    services: {
      title: 'Nuestras Soluciones',
      subtitle: 'Automatización inteligente para cada canal de comunicación con tus clientes',
      demoTitle: 'Prueba nuestras soluciones',
      demoSubtitle: 'Cada demo conecta con nuestros sistemas reales. Escribe cualquier consulta y experimenta la inteligencia de Octopus AI en acción.',
      exploreInteractiveDemo: 'Explorar demos interactivos',
      requestFreeConsultation: 'Solicitar consulta gratuita',
      
      whatsapp: {
        title: 'WhatsApp AI',
        subtitle: 'Asistente 24/7',
        description: 'Asistente 24/7 que atiende consultas, agenda citas y guía a tus clientes con comunicación natural e inteligente.',
        automate: 'Automatiza respuestas, agenda citas y gestiona consultas directamente en WhatsApp',
        tagline: 'Automatiza tu atención al cliente y aumenta tus ventas con IA',
        stats: {
          satisfaction: '98%',
          response: '3S',
          availability: '24/7'
        },
        benefits: [
          'Respuestas instantáneas',
          'Detección de intención',
          'Conversación natural',
          'Integración CRM'
        ]
      },

      telegram: {
        title: 'Telegram Bot',
        description: 'Bot personalizado que aprende de tu negocio y responde como un experto'
      },

      appointments: {
        title: 'Gestión de Citas',
        description: 'Sistema automatizado de reservas y reprogramaciones que optimiza tu agenda y reduce cancelaciones.',
        stats: {
          efficient: '+85%',
          cancels: '-60%',
          automation: '95%'
        },
        benefits: [
          'Recordatorios automáticos',
          'Sincronización de calendario',
          'Reprogramación sin fricciones',
          'Confirmaciones personalizadas'
        ]
      },

      gmail: {
        title: 'Automatización Gmail',
        description: 'Gestión inteligente de correos con IA personalizada para clasificar, responder y priorizar mensajes.',
        stats: {
          timesSaved: '5h/día',
          accuracy: '94%',
          productivity: '+120%'
        },
        benefits: [
          'Filtrado inteligente',
          'Respuestas automatizadas',
          'Monitoreo de leads',
          'Análisis de sentimiento'
        ]
      },

      excel: {
        title: 'Integración con Excel',
        description: 'Conecta tu asistente con hojas de cálculo para gestionar pedidos y mantener registros actualizados.',
        stats: {
          accuracy: '99.8%',
          processing: 'Instantáneo',
          error: '-95%'
        },
        benefits: [
          'Actualización en tiempo real',
          'Exportación de datos',
          'Captura estructurada',
          'Reportes automatizados'
        ]
      }
    },

    // ===== PÁGINA DE SERVICIOS =====
    servicesPage: {
      hero: {
        badge: 'Soluciones de automatización',
        title: 'Nuestros Servicios',
        subtitle: 'Automatización inteligente para cada canal de comunicación.',
        description: 'Prueba nuestros demos interactivos y descubre cómo la IA puede transformar tu negocio.',
        stats: {
          uptime: {
            value: '99.9%',
            label: 'Tiempo activo'
          },
          security: {
            value: '100%',
            label: 'Datos seguros'
          }
        },
        buttons: {
          primary: 'Explorar demos interactivos',
          secondary: 'Solicitar consulta gratuita'
        }
      },
      demos: {
        badge: 'Demos en vivo',
        title: 'Prueba nuestras soluciones',
        subtitle: 'Cada demo conecta con nuestros sistemas reales. Escribe cualquier consulta y experimenta la inteligencia de Octopus AI en acción.',
        cards: {
          whatsapp: {
            title: 'Asistente de WhatsApp y Telegram 24/7',
            description: 'Atiende consultas, agenda citas y gestiona tu comunicación automatizada las 24 horas del día. Nuestro asistente entiende el contexto, mantiene conversaciones naturales y se adapta al tono de tu marca.',
            features: [
              'Respuesta instantánea 24/7',
              'Detección de idioma automática',
              'Integración con tu CRM',
              'Personalización completa del asistente',
              'Analíticas detalladas'
            ]
          },
          appointments: {
            title: 'Gestión de citas y reservas automatizadas',
            description: 'Integramos tu calendario y permitimos que tus clientes agenden, reprogramen o cancelen citas sin necesidad de hablar contigo.',
            features: [
              'Integración con Google Calendar y otros',
              'Recordatorios automáticos',
              'Reprogramación sin fricción',
              'Confirmaciones automáticas',
              'Zonificación según disponibilidad'
            ]
          },
          excel: {
            title: 'Gestión de pedidos con integración a Excel',
            description: 'Permite a tus clientes hacer pedidos directamente desde el chat, con toda la información cargada automáticamente en un archivo Excel.',
            features: [
              'Captura de datos estructurada',
              'Actualización en tiempo real',
              'Notificaciones de nuevos pedidos',
              'Exportación a múltiples formatos',
              'Historial de pedidos accesible'
            ]
          }
        }
      },
      cta: {
        title: '¿Listo para automatizar tu negocio?',
        subtitle: 'Únete a las empresas que ya confían en Octopus AI para transformar su comunicación con clientes.',
        buttons: {
          primary: 'Solicitar demo personalizada',
          secondary: 'Ver planes y precios'
        }
      }
    },

    // ===== NUEVA PÁGINA DE SERVICIOS (3 VERTICALES) =====
    servicesNew: {
      hero: {
        badge: 'Nuestros Servicios',
        title: {
          part1: 'Tecnología que',
          highlight: 'impulsa tu crecimiento'
        },
        description: {
          part1: 'Desde inteligencia artificial hasta desarrollo de software completo.',
          highlight: 'Una solución integral',
          part2: 'para todas tus necesidades tecnológicas.'
        },
        stats: {
          verticals: 'Verticales de Servicio',
          solutions: 'Soluciones Específicas',
          custom: 'Personalizado'
        },
        cta: 'Explorar servicios'
      },

      verticals: {
        badge: '3 Verticales Principales',
        title: 'Elige tu camino',
        subtitle: {
          part1: 'Selecciona la vertical que necesitas o',
          highlight: 'combina varias',
          part2: 'para una solución integral.'
        },
        cta: 'Solicitar más información',

        finalCta: {
          title: '¿No estás seguro cuál elegir?',
          description: {
            part1: 'Muchos clientes combinan varias verticales. Agenda una consultoría gratuita y te ayudamos a diseñar',
            highlight: 'la solución perfecta',
            part2: 'para ti.'
          },
          primary: 'Agendar consultoría gratuita',
          secondary: 'Ver precios'
        },

        ai: {
          name: 'Soluciones de IA',
          description: 'Inteligencia Artificial que transforma tu negocio',
          services: {
            conversational: {
              name: 'Agentes Conversacionales',
              description: 'Asistentes virtuales para WhatsApp, Telegram y otras plataformas que atienden 24/7.',
              features: [
                'Respuestas contextuales en tiempo real',
                'Integración con WhatsApp Business API',
                'Manejo de múltiples conversaciones simultáneas',
                'Personalización completa del tono y personalidad'
              ]
            },
            appointments: {
              name: 'Automatización de Citas',
              description: 'Sistema inteligente que agenda, confirma y reprograma citas automáticamente.',
              features: [
                'Sincronización con Google Calendar',
                'Recordatorios automáticos personalizados',
                'Gestión de cancelaciones y reagendamientos',
                'Análisis de disponibilidad en tiempo real'
              ]
            },
            dataCapture: {
              name: 'Captura de Datos',
              description: 'Recopila y organiza información de clientes de forma automática y estructurada.',
              features: [
                'Formularios conversacionales inteligentes',
                'Validación automática de datos',
                'Exportación a Excel/Google Sheets',
                'Integración con CRM y bases de datos'
              ]
            },
            custom: {
              name: 'Agentes Personalizados',
              description: 'Desarrollamos agentes de IA únicos para resolver desafíos específicos de tu negocio.',
              features: [
                'Análisis de requerimientos sin costo',
                'Entrenamiento con datos de tu industria',
                'Integración con tus sistemas existentes',
                'Soporte y optimización continua'
              ]
            }
          }
        },

        data: {
          name: 'Data & Machine Learning',
          description: 'Convierte datos en decisiones inteligentes',
          services: {
            analytics: {
              name: 'Análisis Predictivo',
              description: 'Modelos de ML que anticipan tendencias y comportamientos de tus clientes.',
              features: [
                'Predicción de demanda y ventas',
                'Segmentación inteligente de clientes',
                'Detección de patrones y anomalías',
                'Dashboards interactivos en tiempo real'
              ]
            },
            automation: {
              name: 'Automatización de Procesos',
              description: 'Optimiza operaciones con pipelines de datos inteligentes y automatizados.',
              features: [
                'ETL automatizado y escalable',
                'Limpieza y transformación de datos',
                'Orquestación de workflows complejos',
                'Monitoreo y alertas en tiempo real'
              ]
            },
            business: {
              name: 'Business Intelligence',
              description: 'Visualización y análisis de métricas clave para toma de decisiones estratégicas.',
              features: [
                'Dashboards personalizados interactivos',
                'KPIs y métricas de negocio',
                'Reportes automatizados programados',
                'Análisis comparativo y tendencias'
              ]
            },
            consulting: {
              name: 'Consultoría de Datos',
              description: 'Estrategia y arquitectura de datos diseñada para escalar con tu negocio.',
              features: [
                'Auditoría de infraestructura actual',
                'Diseño de arquitectura de datos',
                'Estrategia de migración a la nube',
                'Capacitación de equipos internos'
              ]
            }
          }
        },

        software: {
          name: 'Desarrollo de Software',
          description: 'Soluciones completas de software a medida',
          services: {
            web: {
              name: 'Desarrollo Web',
              description: 'Aplicaciones web modernas, rápidas y escalables con las últimas tecnologías.',
              features: [
                'React, Next.js, Node.js',
                'Diseño responsive y UX optimizada',
                'SEO y rendimiento optimizados',
                'Arquitectura escalable y segura'
              ]
            },
            mobile: {
              name: 'Apps Móviles',
              description: 'Aplicaciones nativas y multiplataforma para iOS y Android.',
              features: [
                'React Native y Flutter',
                'Experiencia nativa optimizada',
                'Sincronización offline',
                'Notificaciones push integradas'
              ]
            },
            apis: {
              name: 'APIs y Microservicios',
              description: 'Arquitecturas robustas y APIs RESTful para conectar tus sistemas.',
              features: [
                'Diseño RESTful y GraphQL',
                'Documentación automática (Swagger)',
                'Autenticación y seguridad (OAuth, JWT)',
                'Escalabilidad horizontal'
              ]
            },
            integrations: {
              name: 'Integraciones',
              description: 'Conectamos todos tus sistemas y herramientas existentes de forma fluida.',
              features: [
                'Integración con APIs de terceros',
                'Webhooks y eventos en tiempo real',
                'Sincronización bidireccional de datos',
                'Middleware personalizado'
              ]
            }
          }
        }
      },

      demo: {
        badge: 'Prueba en Vivo',
        title: 'Interactúa con nuestros agentes',
        subtitle: {
          part1: 'Prueba directamente cómo funcionan nuestros agentes de IA.',
          highlight: 'En tiempo real',
          part2: ', sin compromisos.'
        },

        whatsapp: {
          title: 'Asistente de WhatsApp',
          description: 'Experimenta cómo nuestro agente de IA maneja consultas de clientes, agenda citas y responde preguntas frecuentes de forma natural.',
          features: [
            'Respuestas instantáneas 24/7',
            'Comprensión de contexto',
            'Integración con calendarios',
            'Personalización completa'
          ]
        },

        appointments: {
          title: 'Gestión de Citas',
          description: 'Ve cómo el agente programa citas, envía recordatorios automáticos y gestiona reagendamientos sin intervención humana.',
          features: [
            'Agenda automática',
            'Recordatorios inteligentes',
            'Gestión de cancelaciones',
            'Sincronización con Google Calendar'
          ]
        },

        excel: {
          title: 'Captura de Datos',
          description: 'Observa cómo el agente recopila información de clientes y la organiza automáticamente en hojas de cálculo estructuradas.',
          features: [
            'Captura automática de datos',
            'Validación de información',
            'Exportación a Excel/Google Sheets',
            'Integración con CRM'
          ]
        },

        cta: {
          title: '¿Listo para implementar tu propio agente?',
          description: 'Agenda una consultoría gratuita y diseñamos el agente perfecto para tu negocio en menos de 48 horas.',
          primary: 'Agendar consultoría gratuita',
          secondary: 'Ver precios'
        }
      }
    },

    // ===== DESARROLLO PERSONALIZADO =====
    customDev: {
      badge: 'Desarrollo personalizado',
      title: {
        part1: '¿Necesitas algo',
        part2: 'más específico?'
      },
      subtitle: 'También desarrollamos software especializado y soluciones únicas. Si el requerimiento es similar a nuestras soluciones estándar,',
      highlight: 'lo haremos sin costo adicional',
      subtitle2: '. ¡Nos adaptamos completamente a ti!',
      
      services: {
        title: 'Servicios personalizados',
        items: [
          {
            title: 'Desarrollo personalizado',
            description: 'Soluciones 100% adaptadas a tu flujo de trabajo específico'
          },
          {
            title: 'Integraciones complejas',
            description: 'Conectamos con cualquier API o sistema que ya uses'
          },
          {
            title: 'Objetivos específicos',
            description: 'Diseñamos la IA para lograr exactamente lo que necesitas'
          }
        ]
      },
      
      examples: {
        title: 'Casos especiales que hemos resuelto',
        items: [
          'Integración con ERP empresarial',
          'Bot multiidioma para soporte global',
          'Automatización de procesos internos',
          'IA para análisis de documentos',
          'Sistemas de notificaciones avanzadas',
          'Dashboards personalizados en tiempo real'
        ]
      },
      
      cta: {
        button: 'Hablemos de tu proyecto',
        subtitle: 'Consulta gratuita • Sin compromiso • Respuesta en 24h'
      },
      
      benefits: {
        title: '¿Por qué elegir desarrollo personalizado con Octopus AI?',
        items: [
          {
            title: 'Implementación rápida',
            description: 'De idea a producción en tiempo récord'
          },
          {
            title: '100% adaptado',
            description: 'Diseñado específicamente para tu negocio'
          },
          {
            title: 'Sin costos ocultos',
            description: 'Precio fijo acordado desde el inicio'
          }
        ]
      }
    },

    // ===== SERVICE CARD =====
    serviceCard: {
      featuresTitle: 'Características principales',
      demo: {
        title: '¡Prueba el asistente!',
        subtitle: 'Este demo se conecta con nuestro sistema real.',
        description: 'Escribe cualquier consulta y experimenta la IA.',
        connected: 'Conectado',
        staticDemo: 'Demo estático',
        liveDemo: 'Demo en vivo',
        placeholder: 'Escribe tu consulta aquí...',
        unavailable: 'Demo no disponible',
        sendHint: 'Presiona Enter para enviar',
        systemConnected: 'Sistema real conectado',
        writing: 'Octopus AI está escribiendo...',
        suggestions: [
          'Hola, ¿qué servicios ofrecen?',
          '¿A que hora cierran?',
          '¿Cuáles son sus precios?'
        ]
      }
    },

    // ===== PRICING PAGE =====
    pricingPage: {
      hero: {
        badge: 'Inversión inteligente',
        title: {
          part1: 'Precios que',
          part2: 'Multiplican tus ganancias'
        },
        subtitle: 'No es un gasto, es la',
        highlight: 'mejor inversión',
        subtitle2: 'que harás para tu negocio.',
        highlight2: 'Sin permanencia',
        subtitle3: ', solo resultados garantizados.',
        
        stats: [
          {
            value: '72h',
            label: 'Setup completo',
            description: 'Listo para usar'
          },
          {
            value: '30 días',
            label: 'Garantía total',
            description: 'Sin riesgos'
          },
          {
            value: 'Gratis',
            label: 'Setup y training',
            description: 'Valor $500'
          }
        ],
        
        buttons: {
          primary: 'Ver planes y precios',
          secondary: 'Probar demos gratis'
        },
        
        socialProof: [
          '✓ 99% de satisfacción del cliente',
          '✓ Soporte 24/7',
          '✓ Sin contratos de permanencia'
        ]
      },
      
      plans: {
        badge: 'Planes flexibles',
        title: 'Elige tu plan perfecto',
        subtitle: 'Cada plan incluye configuración gratuita, soporte premium y garantía de satisfacción.',
        highlight: 'Cancela cuando quieras',
        subtitle2: ', sin penalizaciones.'
      },
      
      comparison: {
        badge: 'Comparación de valor',
        title: '¿Cuánto te cuesta',
        highlight: 'NO',
        title2: 'tener Octopus AI?',
        subtitle: 'Calculamos el costo real de seguir atendiendo manualmente vs automatizar con nosotros',
        
        manual: {
          title: 'Sin Automatización',
          subtitle: 'Atención manual tradicional',
          items: [
            { item: 'Personal adicional (2 personas)', cost: '$2,400/mes' },
            { item: 'Horas extra y fines de semana', cost: '$800/mes' },
            { item: 'Clientes perdidos por demora', cost: '$1,500/mes' },
            { item: 'Errores humanos y retrabajos', cost: '$600/mes' },
            { item: 'Estrés y burnout del equipo', cost: 'Invaluable' }
          ],
          total: '$5,300+/mes',
          totalLabel: 'Costo total mensual'
        },
        
        octopus: {
          title: 'Con Octopus AI',
          badge: 'MEJOR INVERSIÓN',
          items: [
            { item: 'Octopus AI WhatsApp', cost: '$45/mes' },
            { item: 'Setup y training incluido', cost: 'Gratis' },
            { item: 'Soporte 24/7 en español', cost: 'Incluido' },
            { item: 'Atención 24/7 automatizada', cost: 'Incluido' },
            { item: 'ROI promedio +250%', cost: '+$3,000/mes' }
          ],
          total: '$45/mes',
          totalLabel: 'Inversión total',
          savings: '¡Ahorras $5,255/mes!'
        },
        
        cta: {
          title: '¿Seguirás gastando $5,300/mes en atención manual?',
          subtitle: 'Con Octopus AI recuperas tu inversión en la primera semana y empiezas a ahorrar desde el día 1.',
          button: 'Comienza a ahorrar hoy'
        }
      },
      
      finalCta: {
        title: {
          part1: 'Tu competencia ya automatizó',
          part2: '¿Cuándo lo harás tú?'
        },
        subtitle: 'Cada día que esperas, es dinero que dejas en la mesa.',
        highlight: 'Empieza hoy',
        subtitle2: 'y ve los resultados desde la primera semana.',
        
        buttons: {
          primary: 'Solicitar demo personalizada',
          secondary: 'Ver testimonios de clientes'
        },
        
        guarantees: [
          '🛡️ Garantía 30 días o devolvemos tu dinero',
          '🎯 ROI garantizado',
          '💬 Soporte 24/7'
        ]
      }
    },

    // ===== PRICING CARDS =====
    pricingCards: {
      billing: {
        monthly: 'Mensual',
        yearly: 'Anual',
        yearlyDiscount: '-20%'
      },
      
      plans: [
        {
          id: 'whatsapp',
          title: 'WhatsApp AI Pro',
          subtitle: 'Para empresas en crecimiento',
          savings: 'Ahorra $528/año',
          features: [
            'Asistente IA 24/7 en WhatsApp',
            'Respuestas automáticas inteligentes',
            'Gestión completa de citas',
            'Integración con Google Calendar',
            'Analytics básicos y reportes',
            'Soporte técnico prioritario',
            'Setup gratuito (valor $200)',
            'Training del equipo incluido'
          ],
          highlights: [
            'Configuración rápida',
            'ROI promedio 180%',
            'Soporte'
          ],
          cta: 'Comenzar con WhatsApp',
          guarantee: '30 días de garantía'
        },
        {
          id: 'telegram',
          title: 'Telegram AI Plus',
          subtitle: 'Ideal para startups',
          badge: 'MÁS POPULAR',
          savings: 'Ahorra $396/año',
          features: [
            'Asistente IA 24/7 en Telegram',
            'Respuestas automáticas avanzadas',
            'Gestión de citas automatizada',
            'Integración con calendarios',
            'Analytics detallados',
            'Soporte técnico incluido',
            'Setup gratuito (valor $150)',
            'Plantillas personalizadas'
          ],
          highlights: [
            'ROI promedio 160%',
            'Más económico'
          ],
          cta: 'Comenzar con Telegram',
          guarantee: '30 días de garantía'
        },
        {
          id: 'custom',
          title: 'Enterprise AI',
          subtitle: 'Solución completa a medida',
          badge: 'PREMIUM',
          priceFromText: 'Desde $990',
          features: [
            'Desarrollo 100% personalizado',
            'Integraciones multi-canal',
            'WhatsApp + Telegram + Gmail',
            'Analytics avanzados con BI',
            'Soporte dedicado 24/7',
            'Manager de cuenta asignado',
            'Setup y training premium',
            'Funcionalidades específicas',
            'SLA garantizado 99.9%',
            'Escalabilidad ilimitada'
          ],
          highlights: [
            'Solución única',
            'ROI promedio +300%',
            'Soporte VIP'
          ],
          cta: 'Solicitar cotización',
          guarantee: 'Garantía de satisfacción'
        }
      ],
      
      common: {
        allIncluded: 'Todo incluido',
        includedInAllPlans: 'Incluido en todos los planes',
        yearlyEquivalent: 'Equivale a',
        perMonth: 'mes',
        perYear: 'año',
        usd: 'USD',
        
        globalFeatures: [
          {
            text: 'Setup rápido',
            icon: 'clock'
          },
          {
            text: 'Soporte 24/7',
            icon: 'users'
          },
          {
            text: 'Garantía 30 días',
            icon: 'shield'
          },
          {
            text: 'ROI garantizado',
            icon: 'trending'
          }
        ]
      }
    },

    // ===== CARACTERÍSTICAS AVANZADAS =====
    features: {
      title: 'Características Principales',
      subtitle: 'Tecnología de vanguardia adaptada a las necesidades de tu negocio',
      
      advanced: {
        personalization: {
          title: 'Personalización Avanzada',
          description: 'Adaptamos cada asistente virtual para que refleje perfectamente la personalidad y valores de tu marca.',
          details: 'Nuestros asistentes pueden aprender tu tono de voz, términos específicos de tu industria, y preferencias de estilo de comunicación. Cada interacción será única y perfectamente alineada con la identidad de tu empresa.',
          features: [
            'Adaptación de tono y estilo',
            'Terminología específica',
            'Branding personalizado',
            'Flujos únicos'
          ],
          metrics: {
            accuracy: '99.2%',
            setup: '2-3 días',
            satisfaction: '98%'
          }
        },
        
        intentRecognition: {
          title: 'Reconocimiento de Intención',
          description: 'Nuestros asistentes entienden lo que tus clientes quieren, incluso cuando no lo expresan claramente.',
          details: 'Utilizando avanzados algoritmos de procesamiento de lenguaje natural, detectamos la intención real detrás de las preguntas, incluso cuando son imprecisas o contienen errores. Esto reduce la frustración del cliente y aumenta la tasa de resolución al primer contacto.',
          features: [
            'NLP avanzado',
            'Detección de contexto',
            'Análisis de sentimiento',
            'Corrección automática'
          ],
          metrics: {
            accuracy: '96.8%',
            speed: '<150ms',
            languages: '30+'
          }
        },
        
        multiLanguage: {
          title: 'Multi-idioma Nativo',
          description: 'Comunicación fluida con tus clientes en cualquier idioma, detectando automáticamente su preferencia.',
          details: 'Soporte para más de 30 idiomas con detección automática. Tu asistente puede cambiar de idioma en medio de una conversación sin perder contexto. Ideal para negocios con presencia internacional o en áreas con diversidad lingüística.',
          features: [
            '30+ idiomas soportados',
            'Detección automática',
            'Cambio dinámico',
            'Contexto preservado'
          ],
          metrics: {
            languages: '30+',
            accuracy: '94%',
            coverage: 'Global'
          }
        },
        
        continuousLearning: {
          title: 'Aprendizaje Continuo',
          description: 'El sistema aprende de cada interacción para mejorar constantemente sus respuestas y eficacia.',
          details: 'Utilizamos técnicas de aprendizaje automático para analizar patrones en las conversaciones, identificar brechas de conocimiento y mejorar automáticamente. Tu asistente será cada vez más eficiente con el tiempo, sin necesidad de intervención manual.',
          features: [
            'Machine Learning',
            'Mejora automática',
            'Análisis de patrones',
            'Optimización continua'
          ],
          metrics: {
            improvement: '+15%/mes',
            learning: '24/7',
            updates: 'Automáticas'
          }
        },
        
        omnichannel: {
          title: 'Integración Omnicanal',
          description: 'Conecta sin problemas WhatsApp, Telegram, Gmail y otras plataformas para una experiencia coherente.',
          details: 'Centraliza todas tus comunicaciones en una plataforma unificada. Tu cliente puede comenzar una conversación en WhatsApp y continuarla por email sin perder contexto. Todos los canales sincronizados y con seguimiento integral.',
          features: [
            'Múltiples canales',
            'Contexto unificado',
            'Sincronización real-time',
            'Historial completo'
          ],
          metrics: {
            channels: '10+',
            sync: 'Real-time',
            uptime: '99.9%'
          }
        },
        
        analytics: {
          title: 'Analytics en Tiempo Real',
          description: 'Monitorea y analiza el rendimiento de tu asistente con métricas detalladas y reportes.',
          details: 'Panel de control con métricas clave como tiempo de respuesta, tasa de resolución, satisfacción del cliente y volumen de conversaciones. Reportes automáticos semanales y alertas personalizables para mantenerte siempre informado.',
          features: [
            'Dashboard en tiempo real',
            'Métricas personalizadas',
            'Reportes automáticos',
            'Alertas inteligentes'
          ],
          metrics: {
            metrics: '50+',
            reports: 'Automáticos',
            alerts: 'Tiempo real'
          }
        },
        
        security: {
          title: 'Seguridad de Datos',
          description: 'Encriptación de extremo a extremo y cumplimiento total con regulaciones de privacidad.',
          details: 'Infraestructura segura con encriptación AES-256, cumplimiento GDPR y LGPD, auditorías de seguridad regulares, y políticas estrictas de retención de datos. Tu información y la de tus clientes siempre protegida bajo los más altos estándares.',
          features: [
            'Encriptación AES-256',
            'Cumplimiento GDPR',
            'Auditorías regulares',
            'Políticas estrictas'
          ],
          metrics: {
            encryption: 'AES-256',
            compliance: 'GDPR/LGPD',
            uptime: '99.99%'
          }
        }
      }
    },

    // ===== BENEFICIOS =====
    benefits: {
      title: 'Beneficios que Marcan la Diferencia',
      subtitle: 'Optimiza tu negocio con nuestras soluciones de inteligencia artificial hechas a la medida',
      
      items: [
        {
          title: 'Atención inmediata 24/7',
          description: 'Nunca más pierdas un cliente por no responder a tiempo. Nuestro asistente responde al instante, todos los días del año.'
        },
        {
          title: 'Aumento en ventas',
          description: 'Una respuesta rápida y personalizada mejora la experiencia del cliente y multiplica tus oportunidades de cerrar ventas.'
        },
        {
          title: 'Automatización de tareas',
          description: 'Liberamos tu tiempo eliminando tareas manuales como agendar citas, responder preguntas frecuentes o confirmar servicios.'
        },
        {
          title: 'Comunicación multilingüe',
          description: 'Nuestro asistente detecta el idioma del cliente y responde de forma natural en el mismo idioma, sin importar de dónde escriba.'
        },
        {
          title: 'Personalización completa',
          description: 'Cada asistente se adapta perfectamente a tu marca, industria y objetivos específicos, creando una extensión natural de tu negocio.'
        },
        {
          title: 'Escalabilidad sin límite',
          description: 'Atiende a 10, 100 o 1,000 clientes al mismo tiempo sin necesidad de contratar más personal.'
        }
      ]
    },

    // ===== INDUSTRIAS =====
    industries: {
      title: 'Soluciones a la medida',
      subtitle: 'Asistentes adaptados a cada industria',
      description: 'Creamos soluciones personalizadas para cada sector, con conocimientos específicos y flujos adaptados a las necesidades de tu negocio.',
      
      genericDescription: 'Nuestros asistentes para {industry} están diseñados para optimizar la comunicación, automatizar tareas repetitivas y mejorar la experiencia de tus clientes.',
      
      metricLabels: {
        conversion: 'Conversión',
        efficiency: 'Eficiencia',
        satisfaction: 'Satisfacción',
        leads: 'Leads',
        visits: 'Visitas',
        closing: 'Cierre',
        attendance: 'Asistencia',
        cancellations: 'Cancelaciones',
        sales: 'Ventas',
        support: 'Soporte',
        retention: 'Retención',
        enrollment: 'Inscripciones',
        queries: 'Consultas',
        reservations: 'Reservas',
        orders: 'Pedidos',
        revenue: 'Ingresos'
      },
      
      types: {
        services: 'Empresas de Servicios',
        realestate: 'Bienes Raíces',
        health: 'Salud y Bienestar',
        retail: 'Retail',
        education: 'Educación',
        restaurants: 'Restaurantes'
      },
      
      serviceCompanies: {
        title: 'Empresas de Servicios',
        description: 'Nuestros asistentes para empresas de servicios están diseñados para optimizar la comunicación, automatizar tareas repetitivas y mejorar la experiencia de tus clientes.',
        examples: ['Consultoras', 'Agencias de marketing', 'Servicios legales'],
        stats: {
          conversion: '+45%',
          efficiency: '+60%',
          satisfaction: '94%'
        },
        benefits: [
          'Gestión de citas con prospectos',
          'Seguimiento automático de clientes',
          'Respuesta a consultas frecuentes 24/7'
        ],
        successCase: 'Consultora Premium aumentó conversión de leads en 45% con seguimiento automático'
      },
      
      realEstate: {
        title: 'Bienes Raíces',
        examples: ['Inmobiliarias', 'Corredores independientes', 'Administración de propiedades'],
        benefits: [
          'Calificación automática de prospectos',
          'Agendamiento de visitas a propiedades',
          'Envío de información sobre inmuebles'
        ],
        successCase: 'Inmobiliaria Premium aumentó citas en 80% con calificación automática'
      },
      
      health: {
        title: 'Salud y Bienestar',
        examples: ['Clínicas médicas', 'Consultorios dentales', 'Centros de estética'],
        benefits: [
          'Recordatorios de citas médicas',
          'Gestión de cancelaciones y reagendamientos',
          'Seguimiento post-tratamiento'
        ],
        successCase: 'Clínica Dental Sonrisas redujo cancelaciones en 70% con recordatorios automáticos'
      },
      
      retail: {
        title: 'Retail',
        examples: ['Tiendas online', 'Boutiques', 'Comercio electrónico'],
        benefits: [
          'Asesoramiento de productos personalizado',
          'Seguimiento de pedidos automático',
          'Gestión de devoluciones y cambios'
        ],
        successCase: 'TechShop aumentó ventas online 120% con asistente de productos'
      },
      
      education: {
        title: 'Educación',
        examples: ['Academias', 'Colegios', 'Universidades'],
        benefits: [
          'Consultas sobre programas académicos',
          'Gestión de inscripciones',
          'Resolución de dudas administrativas'
        ],
        successCase: 'Academia Digital mejoró inscripciones 55% con asistente educativo'
      },
      
      restaurants: {
        title: 'Restaurantes',
        examples: ['Restaurantes', 'Cafeterías', 'Servicios de catering'],
        benefits: [
          'Reservas automatizadas',
          'Pedidos para llevar o delivery',
          'Consultas sobre el menú'
        ],
        successCase: 'Restaurante Gourmet incrementó reservas 85% con sistema automático'
      }
    },

    // ===== PROCESO (HOW IT WORKS) =====
    process: {
      title: '¿Cómo funciona Octopus AI?',
      subtitle: 'Un proceso simple',
      description: 'Un proceso simple para transformar tu negocio con soluciones tecnológicas hechas a medida',
      
      steps: [
        {
          title: 'Cuéntanos qué necesitas',
          description: 'Nos contactas contándonos sobre tu negocio, los servicios que ofreces y cómo quieres atender a tus clientes.',
          details: ['Análisis de necesidades', 'Definición de objetivos', 'Mapeo de procesos actuales']
        },
        {
          title: 'Diseñamos tu asistente personalizado',
          description: 'Creamos un asistente exclusivo que refleja el tono, valores y objetivos específicos de tu empresa.',
          details: ['Personalización de IA', 'Configuración de respuestas', 'Entrenamiento específico']
        },
        {
          title: 'Configuramos el flujo ideal',
          description: 'Desarrollamos la inteligencia artificial para responder consultas, agendar citas y dar soporte en cualquier idioma.',
          details: ['Flujos de conversación', 'Integración multiidioma', 'Pruebas y optimización']
        },
        {
          title: 'Integración con tus canales',
          description: 'Conectamos tu asistente a WhatsApp, Telegram, Gmail y otros canales que necesites para una experiencia omnicanal.',
          details: ['Conexión de APIs', 'Sincronización de datos', 'Configuración de canales']
        },
        {
          title: 'Lanzamiento y optimización continua',
          description: 'Ponemos el asistente en marcha y realizamos mejoras constantes basadas en datos reales de interacción.',
          details: ['Monitoreo en tiempo real', 'Análisis de métricas', 'Mejoras continuas']
        }
      ]
    },

    // ===== TESTIMONIOS =====
    testimonials: {
      title: 'Lo que dicen nuestros clientes',
      subtitle: 'Testimonios reales de empresas que han transformado su comunicación',
      
      items: [
        {
          name: 'Juan Pérez',
          company: 'Clínica Dental Sonrisas',
          text: 'Desde que implementamos el asistente de WhatsApp, nuestras citas aumentaron un 40% y redujimos las cancelaciones. Los pacientes adoran la facilidad para agendar.',
          rating: 5,
          result: '+40% citas'
        },
        {
          name: 'María González',
          company: 'Consultora Legal MG',
          text: 'La automatización de Gmail ha sido un cambio radical. Ahora puedo filtrar casos urgentes y responder consultas básicas sin intervención, ahorrando horas diarias.',
          rating: 5,
          result: '5h/día ahorradas'
        },
        {
          name: 'Carlos Rodríguez',
          company: 'Inmobiliaria Premier',
          text: 'El asistente de Telegram califica automáticamente los prospectos y agenda visitas. Ha multiplicado nuestra eficiencia sin aumentar el equipo.',
          rating: 5,
          result: '+300% eficiencia'
        }
      ]
    },

    // ===== CALL TO ACTION =====
    cta: {
      badge: 'Soluciones a medida',
      titlePart1: 'Asistentes IA',
      titlePart2: 'personalizados para tu empresa',
      subtitle: 'Diseñamos cada asistente específicamente para tu negocio, integrando tu identidad de marca, conocimiento de productos y flujos de atención únicos.',
      description: 'Cada asistente Octopus es único como tu empresa. No usamos plantillas genéricas, sino que construimos una solución adaptada a tus necesidades específicas.',
      
      mainFeatures: [
        {
          title: 'Personalización total',
          description: 'Adaptado a la identidad y valores de tu marca'
        },
        {
          title: 'Conversaciones naturales',
          description: 'Comunicación fluida y humana con tus clientes'
        },
        {
          title: 'Aprendizaje continuo',
          description: 'Mejora constantemente basado en interacciones reales'
        }
      ],
      
      benefits: [
        'Conocimiento específico de tu industria',
        'Integración con tus sistemas actuales',
        'Voz y tono alineados con tu marca',
        'Soporte prioritario 24/7'
      ],
      
      metrics: {
        roi: '+250%',
        roiLabel: 'ROI promedio',
        satisfaction: '98%',
        satisfactionLabel: 'Satisfacción'
      },
      
      floatingMessage: '+50 empresas confían en nosotros',
      cardTitle: 'Asistente Premium',
      cardSubtitle: 'Personalizado para ti',
      
      buttons: {
        primary: 'Solicita tu demo',
        secondary: 'Ver todas las soluciones'
      },
      
      features: [
        '✓ Demo personalizada',
        '✓ Configuración en 1-2 semanas',
        '✓ Sin contratos de permanencia'
      ]
    },

    // ===== FAQ =====
    faq: {
      badge: 'Resolvemos tus dudas',
      title: 'Preguntas Frecuentes',
      subtitle: 'Resolvemos todas las dudas que surgen antes de tomar la mejor decisión para tu negocio.',
      subtitleHighlight: 'Si no encuentras tu respuesta, contáctanos',
      
      items: [
        {
          question: '¿Necesito tener conocimientos técnicos para implementar Octopus AI?',
          answer: 'Absolutamente no. Nosotros nos encargamos de toda la configuración técnica de principio a fin. Solo necesitas contarnos cómo quieres que funcione tu asistente y nosotros nos ocupamos del resto. Incluimos training completo para tu equipo sin costo adicional.',
          highlight: 'Setup 100% manejado por nosotros',
          tags: ['Sin conocimiento técnico', 'Training incluido', 'Soporte completo']
        },
        {
          question: '¿Cuánto tiempo toma implementar una solución?',
          answer: 'En la mayoría de los casos, tu asistente estará configurado y funcionando en 72 horas. Para proyectos personalizados complejos, el tiempo puede ser de 1-2 semanas. Te damos una fecha exacta antes de empezar y la cumplimos.',
          highlight: 'Listo en 72 horas',
          tags: ['Setup rápido', 'Fechas garantizadas', 'Sin demoras']
        },
        {
          question: '¿Puedo integrar el asistente con mis sistemas actuales?',
          answer: 'Sí, nuestras soluciones se integran perfectamente con CRMs, sistemas de reservas, plataformas de e-commerce, calendarios y prácticamente cualquier herramienta que ya utilices. Si usas un sistema específico, podemos crear la integración.',
          highlight: 'Integra con todo',
          tags: ['CRM compatible', 'APIs flexibles', 'Sistemas existentes']
        },
        {
          question: '¿El asistente puede transferir conversaciones a un humano?',
          answer: 'Por supuesto. Configuramos reglas inteligentes para determinar cuándo una conversación debe ser escalada a un agente humano. Puede ser por complejidad de la consulta, solicitud del cliente, o palabras clave específicas que definas.',
          highlight: 'Escalación inteligente',
          tags: ['Transferencia suave', 'Reglas personalizadas', 'Backup humano']
        },
        {
          question: '¿Existe algún compromiso de permanencia o contrato largo?',
          answer: 'No, todos nuestros planes son mensuales y puedes cancelar cuando quieras sin penalizaciones ni costos ocultos. Nos enfocamos en ganar tu confianza con resultados excepcionales, no con contratos que te aten.',
          highlight: 'Sin compromisos',
          tags: ['Cancelación libre', 'Sin contratos', 'Sin penalizaciones']
        },
        {
          question: '¿Qué garantías ofrecen si no veo resultados?',
          answer: 'Ofrecemos garantía de satisfacción de 30 días. Si en el primer mes no ves mejoras measurables en tu atención al cliente o no estás satisfecho por cualquier razón, te devolvemos tu dinero completo. Además, garantizamos ROI positivo en 90 días.',
          highlight: 'Garantía 30 días',
          tags: ['Dinero de vuelta', 'ROI garantizado', 'Sin riesgos']
        },
        {
          question: '¿Cómo manejan la seguridad y privacidad de los datos?',
          answer: 'La seguridad es nuestra prioridad #1. Usamos encriptación AES-256, cumplimos con GDPR y LGPD, realizamos auditorías regulares y nunca compartimos información de clientes. Tus datos y los de tus clientes están 100% protegidos.',
          highlight: 'Seguridad militar',
          tags: ['GDPR compliant', 'Encriptación AES-256', 'Auditorías regulares']
        },
        {
          question: '¿Puedo ver ejemplos reales funcionando antes de decidir?',
          answer: '¡Absolutamente! Tenemos demos interactivos en vivo en nuestra página de servicios. Además, podemos hacer una demostración personalizada con casos específicos de tu industria. También te conectamos con clientes actuales para que veas resultados reales.',
          highlight: 'Demos en vivo',
          tags: ['Prueba real', 'Casos de éxito', 'Demo personalizada']
        }
      ],
      
      cta: {
        title: '¿Tienes más preguntas?',
        description: 'Nuestro equipo está disponible 24/7 para resolver cualquier duda específica sobre tu caso. Te respondemos en menos de 2 horas.',
        primaryButton: 'Hablar con un especialista',
        secondaryButton: 'WhatsApp directo',
        trustIndicators: [
          '📞 Respuesta en 2 horas máximo',
          '💬 Soporte en español 24/7',
          '🎯 Consulta sin compromiso',
          '✅ +500 empresas nos eligieron'
        ]
      }
    },

    // ===== IMPLEMENTACIÓN =====
    implementation: {
      title: 'Implementación rápida',
      subtitle: 'De idea a producción en 1-2 semanas',
      description: 'Nuestro proceso optimizado te permite tener tu asistente IA funcionando en tiempo récord, sin comprometer la calidad ni la personalización.',
      
      timeline: {
        setup: {
          title: 'Configuración inicial',
          time: '1-3 días'
        },
        development: {
          title: 'Desarrollo y pruebas',
          time: '5-7 días'
        },
        launch: {
          title: 'Lanzamiento',
          time: '1-2 días'
        }
      }
    },

    // ===== DEMO INTERACTIVO =====
    demo: {
      placeholder: 'Escribe tu consulta aquí...',
      send: 'Enviar',
      thinking: 'Pensando...',
      error: 'Error de conexión',
      tryAnother: 'Prueba otra consulta',
      examples: [
        '¿Cómo puedo agendar una cita?',
        '¿Cuáles son sus precios?',
        'Necesito información sobre sus servicios'
      ]
    },

    // ===== FOOTER =====
    footer: {
      sections: {
        services: {
          title: 'Servicios',
          whatsapp: 'WhatsApp AI',
          telegram: 'Telegram Bot',
          gmail: 'Automatización Gmail',
          excel: 'Integración Excel',
          custom: 'Desarrollo Personalizado'
        },
        company: {
          title: 'Empresa',
          home: 'Inicio',
          features: 'Características',
          pricing: 'Precios',
          about: 'Sobre Nosotros',
          contact: 'Contacto'
        },
        support: {
          title: 'Soporte',
          help: 'Centro de Ayuda',
          docs: 'Documentación',
          faq: 'Preguntas Frecuentes',
          cases: 'Casos de Éxito',
          blog: 'Blog'
        },
        contact: {
          title: 'Contacto',
          email: 'Email corporativo',
          phone: 'WhatsApp directo',
          global: 'Atención global',
          hours: 'Lun - Vie: 8:00 AM - 6:00 PM',
          timezone: 'GMT-5',
          demo: 'Solicitar demo'
        }
      },
      copyright: 'Todos los derechos reservados.',
      links: {
        privacy: 'Privacidad',
        terms: 'Términos',
        cookies: 'Cookies'
      },
      backToTop: 'Volver arriba'
    },

    // ===== FEATURES PAGE =====
    featuresPage: {
      hero: {
        badge: 'Tecnología de vanguardia',
        title: 'Características',
        titleHighlight: 'Revolucionarias',
        subtitle: 'Descubre las capacidades avanzadas que hacen de Octopus AI la',
        subtitleHighlight: 'solución más completa',
        subtitleEnd: 'para automatización empresarial. Cada característica está diseñada para maximizar tu ROI.',
        
        stats: [
          {
            value: '99.8%',
            label: 'Precisión IA',
            description: 'Comprensión de intenciones'
          },
          {
            value: '<200ms',
            label: 'Respuesta',
            description: 'Tiempo promedio'
          },
          {
            value: '256-bit',
            label: 'Encriptación',
            description: 'Seguridad militar'
          },
          {
            value: '30+',
            label: 'Idiomas',
            description: 'Soporte nativo'
          }
        ],
        
        buttons: {
          primary: 'Explorar características',
          secondary: 'Ver demos en vivo'
        }
      },
      
      featureCards: {
        badge: 'IA de siguiente generación',
        title: 'Capacidades Avanzadas',
        subtitle: 'Cada característica está respaldada por años de investigación en IA y optimizada para casos de uso empresariales reales.',
        
        detailsTitle: 'Detalles técnicos',
        keyFeaturesTitle: 'Características clave',
        showingText: 'Mostrando',
        featuresText: 'características',
        
        features: [
          {
            title: "Personalización Avanzada",
            description: "Adaptamos cada asistente virtual para que refleje perfectamente la personalidad y valores de tu marca.",
            details: "Nuestros asistentes pueden aprender tu tono de voz, términos específicos de tu industria, y preferencias de estilo de comunicación. Cada interacción será única y perfectamente alineada con la identidad de tu empresa.",
            features: ["Adaptación de tono y estilo", "Terminología específica", "Branding personalizado", "Flujos únicos"],
            metrics: { accuracy: "99.2%", setup: "2-3 días", satisfaction: "98%" }
          },
          {
            title: "Reconocimiento de Intención",
            description: "Nuestros asistentes entienden lo que tus clientes quieren, incluso cuando no lo expresan claramente.",
            details: "Utilizando avanzados algoritmos de procesamiento de lenguaje natural, detectamos la intención real detrás de las preguntas, incluso cuando son imprecisas o contienen errores. Esto reduce la frustración del cliente y aumenta la tasa de resolución al primer contacto.",
            features: ["NLP avanzado", "Detección de contexto", "Análisis de sentimiento", "Corrección automática"],
            metrics: { accuracy: "96.8%", speed: "<150ms", languages: "30+" }
          },
          {
            title: "Multi-idioma Nativo",
            description: "Comunicación fluida con tus clientes en cualquier idioma, detectando automáticamente su preferencia.",
            details: "Soporte para más de 30 idiomas con detección automática. Tu asistente puede cambiar de idioma en medio de una conversación sin perder contexto. Ideal para negocios con presencia internacional o en áreas con diversidad lingüística.",
            features: ["30+ idiomas soportados", "Detección automática", "Cambio dinámico", "Contexto preservado"],
            metrics: { languages: "30+", accuracy: "94%", coverage: "Global" }
          },
          {
            title: "Aprendizaje Continuo",
            description: "El sistema aprende de cada interacción para mejorar constantemente sus respuestas y eficacia.",
            details: "Utilizamos técnicas de aprendizaje automático para analizar patrones en las conversaciones, identificar brechas de conocimiento y mejorar automáticamente. Tu asistente será cada vez más eficiente con el tiempo, sin necesidad de intervención manual.",
            features: ["Machine Learning", "Mejora automática", "Análisis de patrones", "Optimización continua"],
            metrics: { improvement: "+15%/mes", learning: "24/7", updates: "Automáticas" }
          },
          {
            title: "Integración Omnicanal",
            description: "Conecta sin problemas WhatsApp, Telegram, Gmail y otras plataformas para una experiencia coherente.",
            details: "Centraliza todas tus comunicaciones en una plataforma unificada. Tu cliente puede comenzar una conversación en WhatsApp y continuarla por email sin perder contexto. Todos los canales sincronizados y con seguimiento integral.",
            features: ["Múltiples canales", "Contexto unificado", "Sincronización real-time", "Historial completo"],
            metrics: { channels: "10+", sync: "Real-time", uptime: "99.9%" }
          },
          {
            title: "Analytics en Tiempo Real",
            description: "Monitorea y analiza el rendimiento de tu asistente con métricas detalladas y reportes.",
            details: "Panel de control con métricas clave como tiempo de respuesta, tasa de resolución, satisfacción del cliente y volumen de conversaciones. Reportes automáticos semanales y alertas personalizables para mantenerte siempre informado.",
            features: ["Dashboard en tiempo real", "Métricas personalizadas", "Reportes automáticos", "Alertas inteligentes"],
            metrics: { metrics: "50+", reports: "Automáticos", alerts: "Tiempo real" }
          },
          {
            title: "Seguridad de Datos",
            description: "Encriptación de extremo a extremo y cumplimiento total con regulaciones de privacidad.",
            details: "Infraestructura segura con encriptación AES-256, cumplimiento GDPR y LGPD, auditorías de seguridad regulares, y políticas estrictas de retención de datos. Tu información y la de tus clientes siempre protegida bajo los más altos estándares.",
            features: ["Encriptación AES-256", "Cumplimiento GDPR", "Auditorías regulares", "Backup automático"],
            metrics: { encryption: "AES-256", compliance: "100%", uptime: "99.99%" }
          },
          {
            title: "Escalabilidad Garantizada",
            description: "Desde pequeñas empresas hasta grandes corporaciones, nuestra plataforma crece contigo.",
            details: "Arquitectura en la nube que se adapta automáticamente a cualquier volumen de interacciones. Puedes pasar de 10 a 10,000 conversaciones diarias sin degradación del servicio. Ideal para negocios en crecimiento o con temporadas de alta demanda.",
            features: ["Auto-escalado", "Sin límites", "Performance constante", "Arquitectura cloud"],
            metrics: { capacity: "Ilimitada", scaling: "Automático", performance: "Constante" }
          }
        ]
      },
      
      comparison: {
        badge: 'Líder del mercado',
        title: '¿Por qué elegir Octopus AI?',
        subtitle: 'Comparamos con las mejores soluciones del mercado',
        
        octopus: {
          title: 'Octopus AI',
          badge: 'RECOMENDADO',
          features: [
            'Personalización 100% adaptada',
            'Demos reales interactivos',
            'Integración sin fricciones',
            'Soporte 24/7 en español',
            'Sin contratos de permanencia',
            'ROI comprobado +250%'
          ]
        },
        
        generic: {
          title: 'Chatbots Genéricos',
          subtitle: 'Soluciones estándar',
          features: [
            { text: 'Plantillas limitadas', available: false },
            { text: 'Personalización básica', available: true },
            { text: 'Soporte limitado', available: true },
            { text: 'Integraciones complejas', available: false },
            { text: 'Contratos largos', available: false },
            { text: 'ROI incierto', available: false }
          ]
        },
        
        internal: {
          title: 'Desarrollo Interno',
          subtitle: 'Equipos propios',
          features: [
            { text: 'Control total', available: true },
            { text: 'Costos muy altos', available: false },
            { text: 'Tiempo 6+ meses', available: false },
            { text: 'Requiere especialistas', available: false },
            { text: 'Mantenimiento complejo', available: false },
            { text: 'Riesgo de fracaso alto', available: false }
          ]
        }
      },
      
      finalCta: {
        title: 'Experimenta el futuro',
        titleHighlight: 'de la automatización',
        subtitle: 'Únete a las empresas que ya están transformando su comunicación con la IA más avanzada del mercado.',
        buttons: {
          primary: 'Probar demos interactivos',
          secondary: 'Agendar consultoría gratuita'
        },
        trustIndicators: [
          '✓ Demo gratuita',
          '✓ Sin compromisos',
          '✓ ROI garantizado',
          '✓ Soporte premium'
        ]
      }
    },

    // ===== TECH FEATURES =====
    techFeatures: {
      badge: 'Stack tecnológico',
      title: 'Tecnología de Vanguardia',
      subtitle: 'Construida sobre los frameworks más avanzados y las mejores prácticas de la industria, nuestra infraestructura garantiza performance, seguridad y escalabilidad.',
      
      categories: [
        {
          id: 'infrastructure',
          name: 'Infraestructura',
          description: 'Arquitectura robusta y escalable'
        },
        {
          id: 'ai',
          name: 'Inteligencia Artificial',
          description: 'IA de última generación'
        },
        {
          id: 'security',
          name: 'Seguridad',
          description: 'Protección nivel empresarial'
        }
      ],
      
      features: {
        infrastructure: [
          {
            title: 'API REST Robusta',
            description: 'Integración sencilla con tus sistemas existentes mediante nuestra API RESTful de alto rendimiento.',
            techSpecs: ['Rate limiting inteligente', 'Versionado automático', 'Documentación OpenAPI', 'SDKs múltiples'],
            metrics: { uptime: '99.99%', latency: '<50ms', requests: '1M+/día' }
          },
          {
            title: 'Webhooks Personalizables',
            description: 'Configura notificaciones y acciones basadas en eventos específicos en tiempo real.',
            techSpecs: ['Eventos en tiempo real', 'Reintentos automáticos', 'Firma de seguridad', 'Configuración visual'],
            metrics: { delivery: '99.9%', speed: 'Instantáneo', events: '50+ tipos' }
          },
          {
            title: 'Monitoreo 24/7',
            description: 'Supervisión constante y alertas proactivas para garantizar el funcionamiento óptimo.',
            techSpecs: ['Métricas en tiempo real', 'Alertas inteligentes', 'Análisis predictivo', 'Dashboard avanzado'],
            metrics: { monitoring: '24/7', alerts: 'Tiempo real', accuracy: '99.8%' }
          }
        ],
        ai: [
          {
            title: 'Procesamiento de Lenguaje Natural',
            description: 'Tecnología avanzada de NLP para comprender y responder como un humano.',
            techSpecs: ['Transformers avanzados', 'Fine-tuning específico', 'Contexto multi-turno', 'Análisis semántico'],
            metrics: { accuracy: '96.8%', languages: '30+', context: 'Ilimitado' }
          },
          {
            title: 'Aprendizaje Automático',
            description: 'Modelos que mejoran continuamente con cada interacción para optimizar respuestas.',
            techSpecs: ['MLOps automatizado', 'A/B testing continuo', 'Feedback loops', 'Optimización automática'],
            metrics: { improvement: '+2%/semana', models: 'Actualizados', data: 'Segura' }
          },
          {
            title: 'Respuesta a Multimedia',
            description: 'Capacidad para procesar y responder a imágenes, audio y documentos.',
            techSpecs: ['OCR avanzado', 'Análisis de imágenes', 'Transcripción de audio', 'Extracción de texto'],
            metrics: { formats: '50+', accuracy: '94%', speed: '<2s' }
          }
        ],
        security: [
          {
            title: 'Encriptación de Extremo a Extremo',
            description: 'Todos los datos protegidos con encriptación AES-256 y protocolos de seguridad militares.',
            techSpecs: ['AES-256 encryption', 'TLS 1.3', 'Certificados SSL', 'HSM hardware'],
            metrics: { encryption: 'AES-256', compliance: 'SOC2', audits: 'Anuales' }
          },
          {
            title: 'Cumplimiento Normativo',
            description: 'Certificaciones GDPR, LGPD, SOC2 y auditorías de seguridad regulares.',
            techSpecs: ['GDPR compliant', 'LGPD certified', 'SOC2 Type II', 'ISO 27001'],
            metrics: { compliance: '100%', audits: 'Trimestrales', certifications: '4+' }
          },
          {
            title: 'Backup Automático',
            description: 'Copias de seguridad diarias de todas las conversaciones y configuraciones.',
            techSpecs: ['Backup incremental', 'Geo-replicación', 'Restauración instantánea', 'Versionado'],
            metrics: { frequency: 'Diario', retention: '5 años', recovery: '<1 hora' }
          }
        ]
      },
      
      specsLabel: 'Especificaciones',
      
      footer: {
        title: 'Infraestructura de clase empresarial',
        stats: [
          { value: '99.99%', label: 'Uptime garantizado' },
          { value: '<50ms', label: 'Latencia promedio' },
          { value: 'AES-256', label: 'Encriptación' },
          { value: '24/7', label: 'Monitoreo activo' }
        ]
      }
    },

    // ===== ABOUT PAGE =====
    aboutPage: {
      hero: {
        badge: 'Conoce nuestro propósito',
        title: 'Transformamos empresas',
        titleHighlight: 'con inteligencia artificial',
        subtitle: 'Somos un grupo de ingenieros apasionados por la automatización que decidieron',
        subtitleHighlight: 'revolucionar la comunicación empresarial',
        subtitleEnd: '. Nuestro objetivo es simple: hacer que tu negocio sea',
        subtitleHighlight2: 'más eficiente y próspero',
        
        buttons: {
          primary: 'Conoce a los fundadores',
          secondary: 'Agenda una reunión'
        },
        
        story: {
          title: 'Nuestra historia',
          text: 'Todo comenzó cuando nos dimos cuenta de que las empresas perdían clientes simplemente por no responder a tiempo. Como ingenieros, sabíamos que la IA podía resolver este problema de manera elegante. Así nació Octopus AI:',
          highlight: 'la solución que queríamos ver en el mundo'
        }
      },
      
      finalCta: {
        title: '¿Listo para ser parte',
        titleHighlight: 'de esta revolución?',
        subtitle: 'Únete a las empresas que ya transformaron su comunicación con nosotros. Tu éxito es nuestro éxito.',
        
        buttons: {
          primary: 'Hablar con nosotros',
          secondary: 'Ver nuestras soluciones'
        },
        
        trustIndicators: [
          '💬 Respuesta en 2 horas',
          '🎯 Consulta gratuita',
          '✅ Sin compromisos'
        ]
      }
    },

    // ===== MISSION SECTION =====
    mission: {
      badge: 'Nuestro propósito',
      title: 'Nuestra Misión',
      subtitle: 'Democratizar el acceso a la inteligencia artificial conversacional para empresas de todos los tamaños',
      
      heartCard: {
        title: 'El corazón de Octopus AI',
        paragraph1: 'Creemos firmemente que la automatización inteligente es la clave para que las empresas puedan',
        highlight1: 'escalar su atención al cliente sin sacrificar calidad ni personalización',
        paragraph2: 'Nuestro objetivo es que cualquier empresa, desde una startup hasta una corporación, pueda ofrecer una experiencia excepcional a sus clientes,',
        highlight2: 'las 24 horas del día, los 365 días del año'
      },
      
      values: [
        {
          icon: 'Brain',
          title: 'Inteligencia',
          description: 'IA que realmente entiende',
          color: 'from-purple-500 to-violet-600'
        },
        {
          icon: 'Zap',
          title: 'Eficiencia',
          description: 'Resultados desde el día 1',
          color: 'from-blue-500 to-indigo-600'
        },
        {
          icon: 'Users',
          title: 'Humanidad',
          description: 'Tecnología con toque humano',
          color: 'from-green-500 to-emerald-600'
        },
        {
          icon: 'Globe',
          title: 'Accesibilidad',
          description: 'Para empresas de cualquier tamaño',
          color: 'from-pink-500 to-rose-600'
        }
      ],
      
      impact: {
        title: 'El impacto de nuestra misión',
        stats: [
          {
            metric: '+1M',
            label: 'Conversaciones automatizadas',
            description: 'Cada mes ayudamos a procesar'
          },
          {
            metric: '95%',
            label: 'Reducción en tiempo de respuesta',
            description: 'Respuestas instantáneas vs horas de espera'
          },
          {
            metric: '+500',
            label: 'Empresas transformadas',
            description: 'Y seguimos creciendo cada día'
          }
        ]
      },
      
      quote: {
        text: 'Nuestra misión es simple: hacer que la IA sea accesible para todos',
        author: 'Fundadores Octopus AI'
      },
      
      cta: {
        title: 'Únete a nuestra misión',
        description: 'Forma parte de la revolución de la comunicación empresarial. Juntos podemos hacer que tu negocio sea más eficiente y exitoso.',
        buttons: {
          primary: 'Ser parte del cambio',
          secondary: 'Ver nuestras soluciones'
        }
      }
    },

    // ===== NEW TRANSLATIONS FOR UPDATED COMPONENTS (3 VERTICALS) =====

    // HOME: FEATURES (3 Verticales)
    homeFeatures: {
      badge: 'Nuestras Verticales Tecnológicas',
      title: '3 Formas de Transformar tu Negocio',
      subtitle: 'Desde inteligencia artificial hasta desarrollo de software completo. Elige una o',
      subtitleHighlight: 'combínalas',
      subtitle2: 'para una solución integral.',
      verticals: {
        ai: {
          title: 'Inteligencia Artificial',
          description: 'Automatiza tu atención al cliente y procesos repetitivos con agentes inteligentes que trabajan 24/7.',
          highlights: [
            'Agentes conversacionales',
            'Llamadas con IA',
            'Integración omnicanal',
            'Respuestas en tiempo real'
          ],
          metrics: {
            availability: '24/7',
            response: '< 3 seg',
            accuracy: '99%'
          }
        },
        data: {
          title: 'Data & Machine Learning',
          description: 'Transforma tus datos en decisiones inteligentes con modelos predictivos y arquitectura en la nube.',
          highlights: [
            'Modelos predictivos',
            'Consultoría de datos',
            'AWS/Azure Cloud',
            'Dashboards en tiempo real'
          ],
          metrics: {
            accuracy: '95%+',
            processing: 'Real-time',
            insights: 'Accionables'
          }
        },
        software: {
          title: 'Desarrollo de Software',
          description: 'Construimos aplicaciones web y móviles a medida que se adaptan perfectamente a tu negocio.',
          highlights: [
            'Apps web personalizadas',
            'Apps móviles iOS/Android',
            'Sistemas empresariales',
            'Integraciones complejas'
          ],
          metrics: {
            custom: '100%',
            platforms: 'Multi',
            scalable: 'Ilimitado'
          }
        }
      },
      includesLabel: 'Incluye',
      cta: {
        question: '¿No estás seguro cuál necesitas?',
        highlight: 'Combina varias verticales',
        subtitle: 'Muchos clientes usan IA + Software o Data + IA para soluciones completas',
        button: 'Ver todas las soluciones'
      }
    },

    // HOME: HERO (Updated)
    homeHero: {
      badge: 'Soluciones Tecnológicas Integrales',
      title: {
        part1: 'Transformamos tu negocio',
        part2: 'con',
        highlight: 'tecnología de vanguardia'
      },
      description: {
        part1: 'Desde',
        ai: 'Inteligencia Artificial',
        part2: 'hasta',
        data: 'Data & Machine Learning',
        part3: 'y',
        software: 'Desarrollo de Software',
        part4: 'Soluciones completas que impulsan tu crecimiento.'
      },
      stats: {
        verticals: 'Verticales Tech',
        solutions: 'Soluciones',
        support: 'Soporte'
      },
      videos: {
        telegram: {
          subtitle: 'Inteligencia avanzada',
          description: 'Bot personalizado que aprende de tu negocio y responde como un experto'
        }
      }
    },

    // HOME: HOW IT WORKS (Universal Process)
    howItWorks: {
      steps: {
        step1: {
          title: 'Consultoría Inicial',
          description: 'Analizamos tu negocio, identificamos oportunidades de mejora y definimos la solución tecnológica perfecta para ti.',
          details: [
            'Reunión sin compromiso de 30 minutos',
            'Análisis de tus procesos actuales',
            'Identificación de pain points',
            'Propuesta personalizada'
          ]
        },
        step2: {
          title: 'Diseño de Solución',
          description: 'Diseñamos la arquitectura, funcionalidades y flujos específicos que necesitas, ya sea IA, Data o Software.',
          details: [
            'Diseño técnico detallado',
            'Mockups y prototipos',
            'Definición de alcance',
            'Timeline y milestones'
          ]
        },
        step3: {
          title: 'Desarrollo e Implementación',
          description: 'Nuestro equipo construye tu solución con las mejores prácticas, manteniendo comunicación constante contigo.',
          details: [
            'Sprints de desarrollo ágil',
            'Demos cada 2 semanas',
            'Testing continuo',
            'Ajustes en tiempo real'
          ]
        },
        step4: {
          title: 'Lanzamiento',
          description: 'Ponemos tu solución en producción, capacitamos a tu equipo y aseguramos una transición perfecta.',
          details: [
            'Deploy en producción',
            'Capacitación de tu equipo',
            'Documentación completa',
            'Go-live support'
          ]
        },
        step5: {
          title: 'Soporte y Optimización',
          description: 'Monitoreamos el rendimiento, optimizamos continuamente y agregamos mejoras según tu evolución.',
          details: [
            'Monitoreo 24/7',
            'Soporte técnico prioritario',
            'Actualizaciones regulares',
            'Mejoras continuas'
          ]
        }
      },
      stepLabel: 'Paso',
      timeline: {
        badge: 'Implementación Rápida',
        title: 'De la idea a producción en tiempo récord',
        description: 'Nuestro proceso ágil garantiza resultados rápidos sin sacrificar calidad. Empezamos a generar valor desde la primera semana.',
        phases: {
          consultation: {
            label: 'Consultoría',
            time: '1 día'
          },
          proposal: {
            label: 'Propuesta',
            time: '2-3 días'
          },
          results: {
            label: 'Primeros resultados',
            time: '1-2 semanas'
          }
        }
      }
    },

    // PRICING (New Model)
    pricingNew: {
      hero: {
        badge: 'Precios Transparentes',
        title: {
          part1: 'Inversión clara,',
          highlight: 'resultados garantizados'
        },
        description: {
          part1: 'Sin sorpresas. Sin costos ocultos. Solo tecnología que',
          highlight: 'impulsa tu crecimiento',
          part2: '.'
        }
      },
      aiAgents: {
        badge: 'Agentes de IA',
        title: 'Suscripción Mensual',
        subtitle: 'Pago recurrente + inversión inicial de implementación',
        whatsapp: {
          name: 'WhatsApp',
          subtitle: 'Agente Inteligente',
          monthlyPrice: '$55',
          perMonth: '/mes',
          setupLabel: 'Implementación inicial:',
          setupPrice: 'Desde $600 USD',
          setupNote: '(Según complejidad y requerimientos)',
          features: [
            'Asistente 24/7 en WhatsApp',
            'Respuestas inteligentes automáticas',
            'Integración con calendario',
            'Captura de datos',
            'Análisis y reportes',
            'Soporte técnico incluido'
          ],
          button: 'Solicitar cotización'
        },
        telegram: {
          name: 'Telegram',
          subtitle: 'Agente Inteligente',
          monthlyPrice: '$45',
          perMonth: '/mes',
          popularBadge: 'Más Popular',
          setupLabel: 'Implementación inicial:',
          setupPrice: 'Desde $600 USD',
          setupNote: '(Según complejidad y requerimientos)',
          features: [
            'Bot inteligente en Telegram',
            'Respuestas contextuales',
            'Comandos personalizados',
            'Integración con sistemas',
            'Análisis de conversaciones',
            'Soporte técnico incluido'
          ],
          button: 'Solicitar cotización'
        },
        customAi: {
          name: 'IA Personalizada',
          subtitle: 'Agente a Medida',
          monthlyPrice: 'Desde $60',
          perMonth: '/mes',
          setupLabel: 'Implementación inicial:',
          setupPrice: 'Desde $1,500 USD',
          setupNote: '(Según funcionalidades y complejidad)',
          features: [
            'Diseño 100% personalizado',
            'Entrenamiento con tus datos',
            'Múltiples integraciones',
            'Funcionalidades a medida',
            'Escalabilidad garantizada',
            'Soporte dedicado'
          ],
          button: 'Solicitar cotización'
        },
        voiceAgent: {
          name: 'Agente de Voz',
          subtitle: 'Llamadas con IA',
          monthlyPrice: 'Desde $1,000',
          perMonth: '/mes',
          setupLabel: 'Implementación inicial:',
          setupPrice: 'Desde $1,500 USD',
          setupNote: '(Incluye integración telefónica)',
          features: [
            'Llamadas entrantes y salientes',
            'Conversaciones naturales',
            'Integración con CRM',
            'Transcripciones automáticas',
            'Análisis de sentimiento',
            'Soporte técnico prioritario'
          ],
          button: 'Solicitar cotización'
        }
      },
      customServices: {
        badge: 'Proyectos Personalizados',
        title: 'Data, ML & Desarrollo',
        subtitle: 'Proyectos únicos con precio según alcance y complejidad',
        dataMl: {
          name: 'Data & Machine Learning',
          subtitle: 'Proyectos a Medida',
          priceFrom: 'Desde',
          price: '1,500',
          currency: 'USD',
          note: 'Precio final según requerimientos específicos, alcance del proyecto y tecnologías utilizadas.',
          features: [
            'Modelos de ML personalizados',
            'Consultoría de datos estratégica',
            'Arquitectura en AWS/Azure',
            'Pipelines de datos automatizados',
            'Dashboards ejecutivos',
            'Soporte post-implementación'
          ],
          button: 'Solicitar propuesta'
        },
        software: {
          name: 'Desarrollo de Software',
          subtitle: 'Proyectos a Medida',
          priceFrom: 'Desde',
          price: '1,500',
          currency: 'USD',
          note: 'Precio final según requerimientos específicos, alcance del proyecto y tecnologías utilizadas.',
          features: [
            'Aplicaciones web a medida',
            'Apps móviles iOS/Android',
            'Sistemas empresariales',
            'Integraciones complejas',
            'Arquitectura escalable',
            'Mantenimiento incluido'
          ],
          button: 'Solicitar propuesta'
        }
      },
      combinationNote: {
        question: '¿Necesitas combinar servicios?',
        answer: 'Ofrecemos descuentos especiales para clientes que integren múltiples soluciones.'
      },
      finalCta: {
        title: '¿Listo para transformar tu negocio?',
        description: 'Agenda una consultoría gratuita y recibe una propuesta personalizada en 24 horas.',
        buttonPrimary: 'Agendar consultoría gratuita',
        buttonSecondary: 'Ver todas las soluciones'
      }
    },

    // ===== CONTACT PAGE =====
    contactPage: {
      hero: {
        badge: '¡Tu éxito empieza aquí!',
        title: {
          part1: 'Hablemos y',
          highlight: 'transformemos tu negocio'
        },
        subtitle: 'Cuéntanos tu proyecto y recibe una propuesta personalizada en menos de 24 horas.',
        trustIndicators: [
          {
            value: '< 2h',
            label: 'Tiempo de respuesta',
            description: 'Te respondemos rápido'
          },
          {
            value: 'Gratis',
            label: 'Demo personalizada',
            description: 'Sin compromisos'
          },
          {
            value: '30 días',
            label: 'Garantía total',
            description: 'Sin riesgos'
          }
        ],
        cta: {
          primary: 'Solicitar propuesta gratuita',
          secondary: 'WhatsApp directo'
        }
      },
      mainSection: {
        badge: 'Elige tu forma preferida',
        title: 'Múltiples formas de contactarnos',
        subtitle: 'Elige el método que prefieras. Te responderemos en menos de 2 horas.'
      },
      form: {
        title: 'Solicitar Propuesta Gratuita',
        responseTime: 'Respuesta en 2h',
        step: 'Paso',
        of: 'de',
        completed: 'completado',
        step1: {
          title: 'Información básica',
          subtitle: 'Cuéntanos sobre ti y tu empresa',
          name: 'Nombre completo *',
          namePlaceholder: 'Tu nombre',
          email: 'Email *',
          emailPlaceholder: 'name@company.com',
          phone: 'Teléfono *',
          phonePlaceholder: '+1 609 123 4567',
          company: 'Empresa *',
          companyPlaceholder: 'Tu empresa LLC',
          privacy: 'Información 100% confidencial. No compartimos tus datos con terceros.'
        },
        step2: {
          title: 'Detalles del proyecto',
          subtitle: 'Ayúdanos a entender tus necesidades específicas',
          industry: '¿A qué industria perteneces? *',
          projectType: '¿Qué tipo de solución te interesa? *',
          customers: '¿Cuántos clientes atiendes mensualmente? *'
        },
        step3: {
          title: 'Últimos detalles',
          subtitle: 'Para crear la propuesta perfecta para ti',
          urgency: '¿Qué tan urgente es tu proyecto?',
          challenge: '¿Cuál es tu mayor desafío actual?',
          challengePlaceholder: 'Ej: Perdemos muchos clientes porque no respondemos a tiempo en WhatsApp, especialmente en horarios nocturnos y fines de semana...',
          message: '¿Algo más que quieras agregar?',
          messagePlaceholder: 'Requisitos específicos, integraciones necesarias, presupuesto estimado, etc.',
          benefitsTitle: 'Al enviar este formulario recibes:',
          benefits: [
            '✅ Respuesta en máximo 2 horas',
            '✅ Propuesta personalizada en 24h',
            '✅ Análisis de ROI para tu negocio',
            '✅ Consultoría sin compromiso'
          ]
        },
        industries: {
          healthcare: '🏥 Salud y Bienestar',
          retail: '🛍️ Retail y E-commerce',
          realestate: '🏠 Bienes Raíces',
          services: '💼 Servicios Profesionales',
          restaurant: '🍕 Restaurantes',
          education: '📚 Educación',
          automotive: '🚗 Automotriz',
          other: '🌟 Otro'
        },
        projectTypes: {
          ai: { label: '🤖 Inteligencia Artificial', desc: 'Agentes conversacionales, automatización con IA y soluciones inteligentes' },
          dataML: { label: '📊 Data & Machine Learning', desc: 'Análisis predictivo, Business Intelligence y automatización de procesos' },
          development: { label: '💻 Desarrollo de Software', desc: 'Aplicaciones web, móviles y sistemas personalizados' }
        },
        customers: {
          small: { label: '1-50 clientes/mes', bonus: '💰 Plan Starter' },
          medium: { label: '51-200 clientes/mes', bonus: '🚀 Plan Growth' },
          large: { label: '201-500 clientes/mes', bonus: '👑 Plan Professional' },
          enterprise: { label: '500+ clientes/mes', bonus: '💎 Plan Enterprise' }
        },
        urgency: {
          asap: '🔥 ¡Urgente! (Esta semana)',
          soon: '⚡ Pronto (Este mes)',
          planning: '📅 Planeando (1-3 meses)',
          exploring: '🔍 Solo explorando'
        },
        errors: {
          nameRequired: 'El nombre es requerido',
          emailRequired: 'El email es requerido',
          emailInvalid: 'Email inválido',
          phoneRequired: 'El teléfono es requerido',
          companyRequired: 'El nombre de la empresa es requerido',
          industryRequired: 'Selecciona tu industria',
          projectTypeRequired: 'Selecciona el tipo de proyecto',
          customersRequired: 'Selecciona el volumen de clientes'
        },
        buttons: {
          previous: 'Anterior',
          next: 'Siguiente',
          sending: 'Enviando...',
          submit: 'Enviar solicitud'
        },
        success: {
          title: '¡Mensaje enviado con éxito!',
          message: 'Gracias',
          message2: '. Tu solicitud ha sido recibida y nuestro equipo la está revisando.',
          nextSteps: '¿Qué sigue ahora?',
          step1: 'En las próximas',
          step1Time: '2 horas',
          step1Text: 'recibirás nuestra respuesta',
          step2: 'En',
          step2Time: '24 horas',
          step2Text: 'tendrás una propuesta personalizada',
          step3: 'En',
          step3Time: '48 horas',
          step3Text: 'tu asistente IA estará funcionando',
          whatsapp: 'Hablar por WhatsApp',
          sendAnother: 'Enviar otro mensaje',
          error: 'Hubo un problema al enviar el mensaje. Por favor intenta nuevamente o contáctanos por WhatsApp.'
        }
      },
      contactInfo: {
        whatsapp: {
          title: 'WhatsApp Directo',
          subtitle: 'Más rápido y personal',
          description: 'Respuesta inmediata en horario laboral',
          badge: '🔥 Más popular',
          advantages: ['Respuesta en minutos', 'Envío de archivos', 'Llamadas directas'],
          button: 'Abrir WhatsApp'
        },
        email: {
          title: 'Email Corporativo',
          subtitle: 'Para consultas detalladas',
          description: 'Ideal para enviar documentos',
          badge: '📧 Profesional',
          advantages: ['Documentos adjuntos', 'Historial completo', 'Propuestas detalladas'],
          button: 'Enviar email'
        },
        businessHours: {
          title: 'Horario de atención',
          value: 'Lun - Vie: 8:00 AM - 6:00 PM',
          subtitle: 'Hora de Colombia (GMT-5)',
          available: '🟢 Disponible ahora',
          unavailable: '🔴 Fuera de horario'
        },
        languages: {
          title: 'Idiomas',
          value: 'Español, English',
          subtitle: 'Soporte multiidioma',
          status: '🗣️ Atención nativa'
        },
        advantages: 'Ventajas:',
        stats: {
          companies: 'Empresas confían en nosotros',
          responseTime: 'Tiempo promedio de respuesta',
          satisfaction: 'Satisfacción del cliente',
          roi: 'ROI promedio'
        }
      }
    },

    // ===== VALUES SECTION =====
    values: {
      badge: 'Los pilares de nuestro éxito',
      title: 'Nuestros Valores',
      subtitle: {
        part1: 'Estos valores no son solo palabras en la pared. Son los principios que',
        highlight: 'guían cada decisión',
        part2: ', cada línea de código y cada interacción con nuestros clientes.'
      },
      practiceLabel: 'En la práctica:',
      items: [
        {
          title: 'Innovación Constante',
          subtitle: 'Siempre un paso adelante',
          description: 'Buscamos constantemente nuevas formas de mejorar y expandir nuestras soluciones, manteniéndonos al día con las últimas tendencias en IA.',
          detailedDescription: 'No nos conformamos con el status quo. Cada día exploramos nuevas tecnologías, metodologías y enfoques para crear soluciones que marquen la diferencia. La innovación está en nuestro ADN.',
          examples: [
            'Investigación continua en nuevos modelos de IA',
            'Implementación de tecnologías emergentes',
            'Mejora constante de nuestros algoritmos',
            'Anticipación a las necesidades del mercado'
          ],
          stats: {
            metric: '50+',
            label: 'Nuevas features por año'
          }
        },
        {
          title: 'Excelencia sin Compromiso',
          subtitle: 'Calidad en cada detalle',
          description: 'Nos comprometemos con la calidad superior en cada aspecto de nuestro trabajo, desde el código hasta la atención al cliente.',
          detailedDescription: 'La excelencia no es un acto, sino un hábito. Cada línea de código, cada interacción con clientes, cada decisión estratégica pasa por nuestro filtro de calidad sin excepciones.',
          examples: [
            'Código revisado y probado exhaustivamente',
            'Testing automatizado en todos los niveles',
            'Documentación completa y actualizada',
            'Soporte técnico de primer nivel'
          ],
          stats: {
            metric: '99.9%',
            label: 'Uptime garantizado'
          }
        },
        {
          title: 'Simplicidad Elegante',
          subtitle: 'Lo complejo hecho simple',
          description: 'Creamos tecnología avanzada que es sorprendentemente fácil de usar, sin sacrificar funcionalidad ni potencia.',
          detailedDescription: 'Creemos que la verdadera genialidad está en hacer que lo complejo sea simple. Nuestras soluciones de IA más sofisticadas se sienten naturales e intuitivas para cualquier usuario.',
          examples: [
            'Interfaces intuitivas y user-friendly',
            'Setup en menos de 48 horas',
            'Configuración visual sin código',
            'Documentación clara y concisa'
          ],
          stats: {
            metric: '< 5min',
            label: 'Tiempo de aprendizaje'
          }
        },
        {
          title: 'Resultados Medibles',
          subtitle: 'Impacto real y tangible',
          description: 'Nos enfocamos en generar un impacto real y medible para nuestros clientes, no solo tecnología por tecnología.',
          detailedDescription: 'Cada solución que desarrollamos tiene un propósito claro: generar valor real y medible para nuestros clientes. Trabajamos orientados a KPIs y resultados concretos.',
          examples: [
            'Métricas claras de rendimiento',
            'Reportes detallados de impacto',
            'Optimización basada en datos reales'
          ],
          stats: {
            metric: '',
            label: ' '
          }
        },
        {
          title: 'Transparencia Total',
          subtitle: 'Honestidad en cada interacción',
          description: 'Mantenemos comunicación abierta y honesta con nuestros clientes, sin promesas vacías ni términos confusos.',
          detailedDescription: 'La confianza se construye con transparencia. Compartimos abiertamente nuestros procesos, limitaciones y capacidades. No hay letra pequeña ni sorpresas.',
          examples: [
            'Comunicación clara sobre tiempos y costos',
            'Sin contratos con letra pequeña',
            'Reportes abiertos de rendimiento',
            'Acceso completo a métricas y datos'
          ],
          stats: {
            metric: '100%',
            label: 'Transparencia'
          }
        },
        {
          title: 'Pasión por el Cliente',
          subtitle: 'Tu éxito es nuestro éxito',
          description: 'Cada cliente es un partner en nuestra misión. Trabajamos incansablemente para asegurar su éxito y crecimiento.',
          detailedDescription: 'No somos solo un proveedor, somos aliados estratégicos. El éxito de nuestros clientes es la métrica más importante que seguimos. Cuando ellos crecen, nosotros crecemos.',
          examples: [
            'Soporte 24/7 en español',
            'Onboarding personalizado',
            'Seguimiento proactivo del éxito',
            'Ajustes sin costo adicional'
          ],
          stats: {
            metric: '98%',
            label: 'Satisfacción del cliente'
          }
        }
      ]
    },

    // Footer update
    footerNew: {
      sections: {
        company: {
          services: 'Servicios'
        }
      }
    }
  },

  en: {
    // ===== NAVIGATION =====
    nav: {
      home: 'Home',
      services: 'Services',
      features: 'Features',
      pricing: 'Pricing',
      about: 'About Us',
      contact: 'Contact'
    },

    // ===== COMMON ELEMENTS =====
    common: {
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      explore: 'Explore',
      viewAllSolutions: 'View all solutions',
      requestDemo: 'Request demo',
      startNow: 'Start Now',
      learnMore: 'Learn more',
      verified: 'Verified',
      keyBenefits: 'Key benefits',
      idealFor: 'Ideal for',
      successCase: 'Success case'
    },

    // ===== BADGES =====
    badges: {
      highTechnology: 'High-technology',
      liveDemos: 'Live demos',
      simpleProcess: 'Simple process',
      testimonials: 'Testimonials',
      customSolutions: 'Custom solutions',
      benefits: 'Benefits',
      frequentQuestions: 'Frequently asked questions',
      whyChooseUs: 'Why choose us?'
    },

    // ===== HERO SECTION =====
    hero: {
      title: 'The Business AI Revolution',
      subtitle: 'Transform your business communication with AI',
      titlePart1: 'Transform your',
      titleHighlight: 'business communication,',
      titlePart2: 'with AI',
      description: 'Personalized smart assistants for WhatsApp, Telegram and Gmail that serve your customers 24/7.',
      startButton: 'Start Now',
      viewSolutions: 'View Solutions',
      
      // Hero videos
      videos: {
        whatsapp: {
          title: 'WhatsApp AI',
          subtitle: '24/7 Assistant',
          description: 'Automate responses, schedule appointments and manage inquiries directly on WhatsApp'
        },
        telegram: {
          title: 'Telegram Bot',
          subtitle: 'Advanced Intelligence',
          description: 'Custom bot that learns from your business and responds like an expert'
        }
      },

      // Floating message in hero
      floatingMessage: 'Automate your customer support and increase your sales with AI'
    },

    // ===== STATISTICS =====
    stats: {
      satisfaction: 'Satisfaction',
      availability: 'Availability',
      response: 'Response',
      automation: 'Automation',
      efficiency: 'Efficiency',
      accuracy: 'Accuracy',
      saved: 'Saved',
      productivity: 'Productivity',
      processing: 'Processing',
      errors: 'Errors',
      conversion: 'Conversion',
      cancellations: 'Cancellations',
      companies: '+50 companies trust us',
      roiAverage: 'Average ROI',
      instantProcessing: 'Instant processing'
    },

    // ===== SERVICES/FEATURES =====
    services: {
      title: 'Our Solutions',
      subtitle: 'Intelligent automation for every communication channel with your customers',
      demoTitle: 'Try our solutions',
      demoSubtitle: 'Each demo connects to our real systems. Write any query and experience Octopus AI intelligence in action.',
      exploreInteractiveDemo: 'Explore interactive demos',
      requestFreeConsultation: 'Request free consultation',
      
      whatsapp: {
        title: 'WhatsApp AI',
        subtitle: '24/7 Assistant',
        description: '24/7 assistant that handles inquiries, schedules appointments and guides your customers with natural and intelligent communication.',
        automate: 'Automate responses, schedule appointments and manage inquiries directly on WhatsApp',
        tagline: 'Automate your customer support and increase your sales with AI',
        stats: {
          satisfaction: '98%',
          response: '3S',
          availability: '24/7'
        },
        benefits: [
          'Instant Answers',
          'Intention Detection',
          'Natural Conversation',
          'CRM Integration'
        ]
      },

      telegram: {
        title: 'Telegram Bot',
        description: 'Custom bot that learns from your business and responds like an expert'
      },

      appointments: {
        title: 'Appointment Management',
        description: 'Automated booking and rescheduling system that optimizes your schedule and reduces cancellations.',
        stats: {
          efficient: '+85%',
          cancels: '-60%',
          automation: '95%'
        },
        benefits: [
          'Automatic Reminders',
          'Calendar Sync',
          'Frictionless Rescheduling',
          'Custom Confirmations'
        ]
      },

      gmail: {
        title: 'Gmail Automation',
        description: 'Smart email management with personalized AI to classify, respond and prioritize messages.',
        stats: {
          timesSaved: '5h/day',
          accuracy: '94%',
          productivity: '+120%'
        },
        benefits: [
          'Smart Filtering',
          'Automated Responses',
          'Lead Monitoring',
          'Sentiment Analysis'
        ]
      },

      excel: {
        title: 'Excel Integration',
        description: 'Connect your assistant with spreadsheets to manage orders and maintain updated records.',
        stats: {
          accuracy: '99.8%',
          processing: 'Instant',
          error: '-95%'
        },
        benefits: [
          'Real-time Updates',
          'Data Export',
          'Structured Capture',
          'Automated Reports'
        ]
      }
    },

    // ===== SERVICES PAGE =====
    servicesPage: {
      hero: {
        badge: 'Automation solutions',
        title: 'Our Services',
        subtitle: 'Intelligent automation for every communication channel.',
        description: 'Try our interactive demos and discover how AI can transform your business.',
        stats: {
          uptime: {
            value: '99.9%',
            label: 'Uptime'
          },
          security: {
            value: '100%',
            label: 'Secure data'
          }
        },
        buttons: {
          primary: 'Explore interactive demos',
          secondary: 'Request free consultation'
        }
      },
      demos: {
        badge: 'Live demos',
        title: 'Try our solutions',
        subtitle: 'Each demo connects to our real systems. Write any query and experience Octopus AI intelligence in action.',
        cards: {
          whatsapp: {
            title: '24/7 WhatsApp and Telegram Assistant',
            description: 'Handle inquiries, schedule appointments and manage your automated communication 24 hours a day. Our assistant understands context, maintains natural conversations and adapts to your brand tone.',
            features: [
              '24/7 instant response',
              'Automatic language detection',
              'CRM integration',
              'Complete assistant customization',
              'Detailed analytics'
            ]
          },
          appointments: {
            title: 'Automated appointment and booking management',
            description: 'We integrate your calendar and allow your customers to schedule, reschedule or cancel appointments without needing to talk to you.',
            features: [
              'Google Calendar and others integration',
              'Automatic reminders',
              'Frictionless rescheduling',
              'Automatic confirmations',
              'Availability-based zoning'
            ]
          },
          excel: {
            title: 'Order management with Excel integration',
            description: 'Allow your customers to place orders directly from chat, with all information automatically loaded into an Excel file.',
            features: [
              'Structured data capture',
              'Real-time updates',
              'New order notifications',
              'Multi-format export',
              'Accessible order history'
            ]
          }
        }
      },
      cta: {
        title: 'Ready to automate your business?',
        subtitle: 'Join the companies that already trust Octopus AI to transform their customer communication.',
        buttons: {
          primary: 'Request personalized demo',
          secondary: 'View plans and pricing'
        }
      }
    },
    
    pricingPage: {
      hero: {
        badge: 'Smart Investment',
        title: {
          part1: 'Prices that',
          part2: 'Multiply your profits'
        },
        subtitle: 'It\'s not an expense, it\'s the',
        highlight: 'best investment',
        subtitle2: 'you\'ll make for your business.',
        highlight2: 'No commitment',
        subtitle3: ', just guaranteed results.',
        
        stats: [
          {
            value: '72h',
            label: 'Complete setup',
            description: 'Ready to use'
          },
          {
            value: '30 days',
            label: 'Total guarantee',
            description: 'No risks'
          },
          {
            value: 'Free',
            label: 'Setup & training',
            description: 'Value $500'
          }
        ],
        
        buttons: {
          primary: 'See plans and pricing',
          secondary: 'Try free demos'
        },
        
        socialProof: [
          '✓ 99% customer satisfaction',
          '✓ 24/7 Support',
          '✓ No commitment contracts'
        ]
      },
      
      plans: {
        badge: 'Flexible Plans',
        title: 'Choose your perfect plan',
        subtitle: 'Each plan includes free setup, premium support and satisfaction guarantee.',
        highlight: 'Cancel whenever you want',
        subtitle2: ', no penalties.'
      },
      
      comparison: {
        badge: 'Value Comparison',
        title: 'How much does it cost you',
        highlight: 'NOT',
        title2: 'to have Octopus AI?',
        subtitle: 'We calculate the real cost of continuing manual service vs automating with us',
        
        manual: {
          title: 'Without Automation',
          subtitle: 'Traditional manual service',
          items: [
            { item: 'Additional staff (2 people)', cost: '$2,400/month' },
            { item: 'Overtime and weekends', cost: '$800/month' },
            { item: 'Lost customers due to delays', cost: '$1,500/month' },
            { item: 'Human errors and rework', cost: '$600/month' },
            { item: 'Team stress and burnout', cost: 'Priceless' }
          ],
          total: '$5,300+/month',
          totalLabel: 'Total monthly cost'
        },
        
        octopus: {
          title: 'With Octopus AI',
          badge: 'BEST INVESTMENT',
          items: [
            { item: 'Octopus AI WhatsApp', cost: '$45/month' },
            { item: 'Setup & training included', cost: 'Free' },
            { item: '24/7 support in Spanish', cost: 'Included' },
            { item: '24/7 automated service', cost: 'Included' },
            { item: 'Average ROI +250%', cost: '+$3,000/month' }
          ],
          total: '$45/month',
          totalLabel: 'Total investment',
          savings: 'Save $5,255/month!'
        },
        
        cta: {
          title: 'Will you keep spending $5,300/month on manual service?',
          subtitle: 'With Octopus AI you recover your investment in the first week and start saving from day 1.',
          button: 'Start saving today'
        }
      },
      
      finalCta: {
        title: {
          part1: 'Your competition already automated',
          part2: 'When will you do it?'
        },
        subtitle: 'Every day you wait is money you leave on the table.',
        highlight: 'Start today',
        subtitle2: 'and see results from the first week.',
        
        buttons: {
          primary: 'Request personalized demo',
          secondary: 'View customer testimonials'
        },
        
        guarantees: [
          '🛡️ 30-day guarantee or money back',
          '🎯 Guaranteed ROI',
          '💬 24/7 Support'
        ]
      }
    },

    // ===== PRICING CARDS =====
    pricingCards: {
      billing: {
        monthly: 'Monthly',
        yearly: 'Yearly',
        yearlyDiscount: '-20%'
      },
      
      plans: [
        {
          id: 'whatsapp',
          title: 'WhatsApp AI Pro',
          subtitle: 'For growing businesses',
          savings: 'Save $528/year',
          features: [
            '24/7 AI assistant on WhatsApp',
            'Smart automated responses',
            'Complete appointment management',
            'Google Calendar integration',
            'Basic analytics and reports',
            'Priority technical support',
            'Free setup (value $200)',
            'Team training included'
          ],
          highlights: [
            'Quick setup',
            'Average ROI 180%',
            'Support'
          ],
          cta: 'Start with WhatsApp',
          guarantee: '30-day guarantee'
        },
        {
          id: 'telegram',
          title: 'Telegram AI Plus',
          subtitle: 'Ideal for startups',
          badge: 'MOST POPULAR',
          savings: 'Save $396/year',
          features: [
            '24/7 AI assistant on Telegram',
            'Advanced automated responses',
            'Automated appointment management',
            'Calendar integrations',
            'Detailed analytics',
            'Technical support included',
            'Free setup (value $150)',
            'Custom templates'
          ],
          highlights: [
            'Average ROI 160%',
            'Most affordable'
          ],
          cta: 'Start with Telegram',
          guarantee: '30-day guarantee'
        },
        {
          id: 'custom',
          title: 'Enterprise AI',
          subtitle: 'Complete custom solution',
          badge: 'PREMIUM',
          priceFromText: 'From $990',
          features: [
            '100% custom development',
            'Multi-channel integrations',
            'WhatsApp + Telegram + Gmail',
            'Advanced analytics with BI',
            'Dedicated 24/7 support',
            'Assigned account manager',
            'Premium setup & training',
            'Specific functionalities',
            'Guaranteed 99.9% SLA',
            'Unlimited scalability'
          ],
          highlights: [
            'Unique solution',
            'Average ROI +300%',
            'VIP support'
          ],
          cta: 'Request quote',
          guarantee: 'Satisfaction guarantee'
        }
      ],
      
      common: {
        allIncluded: 'Everything included',
        includedInAllPlans: 'Included in all plans',
        yearlyEquivalent: 'Equivalent to',
        perMonth: 'month',
        perYear: 'year',
        usd: 'USD',
        
        globalFeatures: [
          {
            text: 'Quick Setup',
            icon: 'clock'
          },
          {
            text: '24/7 Support',
            icon: 'users'
          },
          {
            text: '30-day guarantee',
            icon: 'shield'
          },
          {
            text: 'Guaranteed ROI',
            icon: 'trending'
          }
        ]
      }
    },

    // ===== NEW SERVICES PAGE (3 VERTICALS) =====
    servicesNew: {
      hero: {
        badge: 'Our Services',
        title: {
          part1: 'Technology that',
          highlight: 'drives your growth'
        },
        description: {
          part1: 'From artificial intelligence to complete software development.',
          highlight: 'An integrated solution',
          part2: 'for all your technological needs.'
        },
        stats: {
          verticals: 'Service Verticals',
          solutions: 'Specific Solutions',
          custom: 'Customized'
        },
        cta: 'Explore services'
      },

      verticals: {
        badge: '3 Main Verticals',
        title: 'Choose your path',
        subtitle: {
          part1: 'Select the vertical you need or',
          highlight: 'combine several',
          part2: 'for an integrated solution.'
        },
        cta: 'Request more information',

        finalCta: {
          title: 'Not sure which to choose?',
          description: {
            part1: 'Many clients combine multiple verticals. Schedule a free consultation and we will help you design',
            highlight: 'the perfect solution',
            part2: 'for you.'
          },
          primary: 'Schedule free consultation',
          secondary: 'View pricing'
        },

        ai: {
          name: 'AI Solutions',
          description: 'Artificial Intelligence that transforms your business',
          services: {
            conversational: {
              name: 'Conversational Agents',
              description: 'Virtual assistants for WhatsApp, Telegram, and other platforms that serve 24/7.',
              features: [
                'Contextual responses in real-time',
                'WhatsApp Business API integration',
                'Handling multiple simultaneous conversations',
                'Complete tone and personality customization'
              ]
            },
            appointments: {
              name: 'Appointment Automation',
              description: 'Intelligent system that schedules, confirms, and reschedules appointments automatically.',
              features: [
                'Google Calendar synchronization',
                'Personalized automatic reminders',
                'Cancellation and rescheduling management',
                'Real-time availability analysis'
              ]
            },
            dataCapture: {
              name: 'Data Capture',
              description: 'Collects and organizes customer information automatically and in a structured way.',
              features: [
                'Intelligent conversational forms',
                'Automatic data validation',
                'Excel/Google Sheets export',
                'CRM and database integration'
              ]
            },
            custom: {
              name: 'Custom Agents',
              description: 'We develop unique AI agents to solve specific challenges for your business.',
              features: [
                'Free requirements analysis',
                'Training with your industry data',
                'Integration with your existing systems',
                'Continuous support and optimization'
              ]
            }
          }
        },

        data: {
          name: 'Data & Machine Learning',
          description: 'Turn data into intelligent decisions',
          services: {
            analytics: {
              name: 'Predictive Analytics',
              description: 'ML models that anticipate trends and customer behaviors.',
              features: [
                'Demand and sales forecasting',
                'Intelligent customer segmentation',
                'Pattern and anomaly detection',
                'Real-time interactive dashboards'
              ]
            },
            automation: {
              name: 'Process Automation',
              description: 'Optimize operations with intelligent and automated data pipelines.',
              features: [
                'Automated and scalable ETL',
                'Data cleaning and transformation',
                'Complex workflow orchestration',
                'Real-time monitoring and alerts'
              ]
            },
            business: {
              name: 'Business Intelligence',
              description: 'Visualization and analysis of key metrics for strategic decision-making.',
              features: [
                'Interactive custom dashboards',
                'Business KPIs and metrics',
                'Scheduled automated reports',
                'Comparative analysis and trends'
              ]
            },
            consulting: {
              name: 'Data Consulting',
              description: 'Data strategy and architecture designed to scale with your business.',
              features: [
                'Current infrastructure audit',
                'Data architecture design',
                'Cloud migration strategy',
                'Internal team training'
              ]
            }
          }
        },

        software: {
          name: 'Software Development',
          description: 'Complete custom software solutions',
          services: {
            web: {
              name: 'Web Development',
              description: 'Modern, fast, and scalable web applications with the latest technologies.',
              features: [
                'React, Next.js, Node.js',
                'Responsive design and optimized UX',
                'Optimized SEO and performance',
                'Scalable and secure architecture'
              ]
            },
            mobile: {
              name: 'Mobile Apps',
              description: 'Native and cross-platform applications for iOS and Android.',
              features: [
                'React Native and Flutter',
                'Optimized native experience',
                'Offline synchronization',
                'Integrated push notifications'
              ]
            },
            apis: {
              name: 'APIs & Microservices',
              description: 'Robust architectures and RESTful APIs to connect your systems.',
              features: [
                'RESTful and GraphQL design',
                'Automatic documentation (Swagger)',
                'Authentication and security (OAuth, JWT)',
                'Horizontal scalability'
              ]
            },
            integrations: {
              name: 'Integrations',
              description: 'We connect all your existing systems and tools seamlessly.',
              features: [
                'Third-party API integration',
                'Real-time webhooks and events',
                'Bidirectional data synchronization',
                'Custom middleware'
              ]
            }
          }
        }
      },

      demo: {
        badge: 'Live Demo',
        title: 'Interact with our agents',
        subtitle: {
          part1: 'Try directly how our AI agents work.',
          highlight: 'In real-time',
          part2: ', no commitments.'
        },

        whatsapp: {
          title: 'WhatsApp Assistant',
          description: 'Experience how our AI agent handles customer inquiries, schedules appointments, and answers frequently asked questions naturally.',
          features: [
            'Instant 24/7 responses',
            'Context understanding',
            'Calendar integration',
            'Complete customization'
          ]
        },

        appointments: {
          title: 'Appointment Management',
          description: 'See how the agent schedules appointments, sends automatic reminders, and manages rescheduling without human intervention.',
          features: [
            'Automatic scheduling',
            'Intelligent reminders',
            'Cancellation management',
            'Google Calendar synchronization'
          ]
        },

        excel: {
          title: 'Data Capture',
          description: 'Watch how the agent collects customer information and automatically organizes it in structured spreadsheets.',
          features: [
            'Automatic data capture',
            'Information validation',
            'Excel/Google Sheets export',
            'CRM integration'
          ]
        },

        cta: {
          title: 'Ready to implement your own agent?',
          description: 'Schedule a free consultation and we will design the perfect agent for your business in less than 48 hours.',
          primary: 'Schedule free consultation',
          secondary: 'View pricing'
        }
      }
    },

    // ===== CUSTOM DEVELOPMENT =====
    customDev: {
      badge: 'Custom development',
      title: {
        part1: 'Need something',
        part2: 'more specific?'
      },
      subtitle: 'We also develop specialized software and unique solutions. If the requirement is similar to our standard solutions,',
      highlight: 'we will do it at no additional cost',
      subtitle2: '. We adapt completely to you!',
      
      services: {
        title: 'Custom services',
        items: [
          {
            title: 'Custom development',
            description: '100% solutions adapted to your specific workflow'
          },
          {
            title: 'Complex integrations',
            description: 'We connect with any API or system you already use'
          },
          {
            title: 'Specific objectives',
            description: 'We design AI to achieve exactly what you need'
          }
        ]
      },
      
      examples: {
        title: 'Special cases we have solved',
        items: [
          'Enterprise ERP integration',
          'Multilingual bot for global support',
          'Internal process automation',
          'AI for document analysis',
          'Advanced notification systems',
          'Real-time custom dashboards'
        ]
      },
      
      cta: {
        button: 'Let\'s talk about your project',
        subtitle: 'Free consultation • No commitment • 24h response'
      },
      
      benefits: {
        title: 'Why choose custom development with Octopus AI?',
        items: [
          {
            title: 'Fast implementation',
            description: 'From idea to production in record time'
          },
          {
            title: '100% adapted',
            description: 'Designed specifically for your business'
          },
          {
            title: 'No hidden costs',
            description: 'Fixed price agreed from the start'
          }
        ]
      }
    },

    // ===== SERVICE CARD =====
    serviceCard: {
      featuresTitle: 'Main features',
      demo: {
        title: 'Try the assistant!',
        subtitle: 'This demo connects to our real system.',
        description: 'Write any query and experience the AI.',
        connected: 'Connected',
        staticDemo: 'Static demo',
        liveDemo: 'Live demo',
        placeholder: 'Write your query here...',
        unavailable: 'Demo not available',
        sendHint: 'Press Enter to send',
        systemConnected: 'Real system connected',
        writing: 'Octopus AI is writing...',
        suggestions: [
          'Hello, what services do you offer?',
          'What time do you close?',
          'What are your prices?'
        ]
      }
    },

    // ===== ADVANCED FEATURES =====
    features: {
      title: 'Main Features',
      subtitle: 'Cutting-edge technology adapted to your business needs',
      
      advanced: {
        personalization: {
          title: 'Advanced Personalization',
          description: 'We adapt each virtual assistant to perfectly reflect your brand personality and values.',
          details: 'Our assistants can learn your tone of voice, industry-specific terms, and communication style preferences. Each interaction will be unique and perfectly aligned with your company identity.',
          features: [
            'Tone and style adaptation',
            'Specific terminology',
            'Custom branding',
            'Unique flows'
          ],
          metrics: {
            accuracy: '99.2%',
            setup: '2-3 days',
            satisfaction: '98%'
          }
        },
        
        intentRecognition: {
          title: 'Intent Recognition',
          description: 'Our assistants understand what your customers want, even when they don\'t express it clearly.',
          details: 'Using advanced natural language processing algorithms, we detect the real intention behind questions, even when they are imprecise or contain errors. This reduces customer frustration and increases first-contact resolution rate.',
          features: [
            'Advanced NLP',
            'Context detection',
            'Sentiment analysis',
            'Automatic correction'
          ],
          metrics: {
            accuracy: '96.8%',
            speed: '<150ms',
            languages: '30+'
          }
        },
        
        multiLanguage: {
          title: 'Native Multi-language',
          description: 'Smooth communication with your customers in any language, automatically detecting their preference.',
          details: 'Support for over 30 languages with automatic detection. Your assistant can switch languages mid-conversation without losing context. Ideal for businesses with international presence or in areas with linguistic diversity.',
          features: [
            '30+ supported languages',
            'Automatic detection',
            'Dynamic switching',
            'Preserved context'
          ],
          metrics: {
            languages: '30+',
            accuracy: '94%',
            coverage: 'Global'
          }
        },
        
        continuousLearning: {
          title: 'Continuous Learning',
          description: 'The system learns from each interaction to constantly improve its responses and effectiveness.',
          details: 'We use machine learning techniques to analyze conversation patterns, identify knowledge gaps and improve automatically. Your assistant will become increasingly efficient over time, without need for manual intervention.',
          features: [
            'Machine Learning',
            'Automatic improvement',
            'Pattern analysis',
            'Continuous optimization'
          ],
          metrics: {
            improvement: '+15%/month',
            learning: '24/7',
            updates: 'Automatic'
          }
        },
        
        omnichannel: {
          title: 'Omnichannel Integration',
          description: 'Seamlessly connect WhatsApp, Telegram, Gmail and other platforms for a coherent experience.',
          details: 'Centralize all your communications in a unified platform. Your customer can start a conversation on WhatsApp and continue it via email without losing context. All channels synchronized with comprehensive tracking.',
          features: [
            'Multiple channels',
            'Unified context',
            'Real-time sync',
            'Complete history'
          ],
          metrics: {
            channels: '10+',
            sync: 'Real-time',
            uptime: '99.9%'
          }
        },
        
        analytics: {
          title: 'Real-time Analytics',
          description: 'Monitor and analyze your assistant performance with detailed metrics and reports.',
          details: 'Control panel with key metrics like response time, resolution rate, customer satisfaction and conversation volume. Weekly automatic reports and customizable alerts to keep you always informed.',
          features: [
            'Real-time dashboard',
            'Custom metrics',
            'Automatic reports',
            'Smart alerts'
          ],
          metrics: {
            metrics: '50+',
            reports: 'Automatic',
            alerts: 'Real-time'
          }
        },
        
        security: {
          title: 'Data Security',
          description: 'End-to-end encryption and full compliance with privacy regulations.',
          details: 'Secure infrastructure with AES-256 encryption, GDPR and LGPD compliance, regular security audits, and strict data retention policies. Your information and your customers\' always protected under the highest standards.',
          features: [
            'AES-256 encryption',
            'GDPR compliance',
            'Regular audits',
            'Strict policies'
          ],
          metrics: {
            encryption: 'AES-256',
            compliance: 'GDPR/LGPD',
            uptime: '99.99%'
          }
        }
      }
    },

    // ===== BENEFITS =====
    benefits: {
      title: 'Benefits That Make a Difference',
      subtitle: 'Optimize your business with our custom-made artificial intelligence solutions',
      
      items: [
        {
          title: 'Immediate 24/7 attention',
          description: 'Never lose a customer again for not responding on time. Our assistant responds instantly, every day of the year.'
        },
        {
          title: 'Increased sales',
          description: 'Quick and personalized response improves customer experience and multiplies your opportunities to close sales.'
        },
        {
          title: 'Task automation',
          description: 'We free up your time by eliminating manual tasks like scheduling appointments, answering frequent questions or confirming services.'
        },
        {
          title: 'Multilingual communication',
          description: 'Our assistant detects the customer\'s language and responds naturally in the same language, regardless of where they write from.'
        },
        {
          title: 'Complete personalization',
          description: 'Each assistant adapts perfectly to your brand, industry and specific objectives, creating a natural extension of your business.'
        },
        {
          title: 'Unlimited scalability',
          description: 'Serve 10, 100 or 1,000 customers at the same time without needing to hire more staff.'
        }
      ]
    },

    // ===== INDUSTRIES =====
    industries: {
      title: 'Custom Solutions',
      subtitle: 'Assistants adapted to each industry',
      description: 'We create personalized solutions for each sector, with specific knowledge and flows adapted to your business needs.',
      
      genericDescription: 'Our assistants for {industry} are designed to optimize communication, automate repetitive tasks and improve your customers\' experience.',
      
      metricLabels: {
        conversion: 'Conversion',
        efficiency: 'Efficiency',
        satisfaction: 'Satisfaction',
        leads: 'Leads',
        visits: 'Visits',
        closing: 'Closing',
        attendance: 'Attendance',
        cancellations: 'Cancellations',
        sales: 'Sales',
        support: 'Support',
        retention: 'Retention',
        enrollment: 'Enrollment',
        queries: 'Queries',
        reservations: 'Reservations',
        orders: 'Orders',
        revenue: 'Revenue'
      },
      
      types: {
        services: 'Service Companies',
        realestate: 'Real Estate',
        health: 'Health & Wellness',
        retail: 'Retail',
        education: 'Education',
        restaurants: 'Restaurants'
      },
      
      serviceCompanies: {
        title: 'Service Companies',
        description: 'Our assistants for service companies are designed to optimize communication, automate repetitive tasks and improve your customers\' experience.',
        examples: ['Consultants', 'Marketing agencies', 'Legal services'],
        stats: {
          conversion: '+45%',
          efficiency: '+60%',
          satisfaction: '94%'
        },
        benefits: [
          'Appointment management with prospects',
          'Automatic customer follow-up',
          '24/7 frequent questions response'
        ],
        successCase: 'Premium consultation increased lead conversion by 45% with automatic follow-up'
      },
      
      realEstate: {
        title: 'Real Estate',
        examples: ['Real estate companies', 'Independent brokers', 'Property management'],
        benefits: [
          'Automatic prospect qualification',
          'Property visit scheduling',
          'Real estate information sending'
        ],
        successCase: 'Premium Real Estate increased appointments by 80% with automatic qualification'
      },
      
      health: {
        title: 'Health & Wellness',
        examples: ['Medical clinics', 'Dental offices', 'Aesthetic centers'],
        benefits: [
          'Medical appointment reminders',
          'Cancellation and rescheduling management',
          'Post-treatment follow-up'
        ],
        successCase: 'Smiles Dental Clinic reduced cancellations by 70% with automatic reminders'
      },
      
      retail: {
        title: 'Retail',
        examples: ['Online stores', 'Boutiques', 'E-commerce'],
        benefits: [
          'Personalized product advice',
          'Automatic order tracking',
          'Returns and exchanges management'
        ],
        successCase: 'TechShop increased online sales by 120% with product assistant'
      },
      
      education: {
        title: 'Education',
        examples: ['Academies', 'Schools', 'Universities'],
        benefits: [
          'Academic program inquiries',
          'Enrollment management',
          'Administrative questions resolution'
        ],
        successCase: 'Digital Academy improved enrollments by 55% with educational assistant'
      },
      
      restaurants: {
        title: 'Restaurants',
        examples: ['Restaurants', 'Cafeterias', 'Catering services'],
        benefits: [
          'Automated reservations',
          'Take-away or delivery orders',
          'Menu inquiries'
        ],
        successCase: 'Gourmet Restaurant increased reservations by 85% with automatic system'
      }
    },

    // ===== PROCESS (HOW IT WORKS) =====
    process: {
      title: 'How does Octopus AI work?',
      subtitle: 'A simple process',
      description: 'A simple process to transform your business with custom-made technology solutions',
      
      steps: [
        {
          title: 'Tell us what you need',
          description: 'Contact us telling us about your business, the services you offer and how you want to serve your customers.',
          details: ['Needs Analysis', 'Goal Definition', 'Current Process Mapping']
        },
        {
          title: 'We design your personalized assistant',
          description: 'We create an exclusive assistant that reflects the tone, values and specific objectives of your company.',
          details: ['AI Customization', 'Response Configuration', 'Specific Training']
        },
        {
          title: 'We configure the ideal flow',
          description: 'We develop artificial intelligence to answer queries, schedule appointments and provide support in any language.',
          details: ['Conversation Flows', 'Multilingual Integration', 'Testing and Optimization']
        },
        {
          title: 'Integration with your channels',
          description: 'We connect your assistant to WhatsApp, Telegram, Gmail and other channels you need for an omnichannel experience.',
          details: ['API Connection', 'Data Synchronization', 'Channel Configuration']
        },
        {
          title: 'Launch and continuous optimization',
          description: 'We launch the assistant and make constant improvements based on real interaction data.',
          details: ['Real-time Monitoring', 'Metrics Analysis', 'Continuous Improvements']
        }
      ]
    },

    // ===== TESTIMONIALS =====
    testimonials: {
      title: 'What our clients say',
      subtitle: 'Real testimonials from companies that have transformed their communication',
      
      items: [
        {
          name: 'Juan Pérez',
          company: 'Smiles Dental Clinic',
          text: 'Since we implemented the WhatsApp assistant, our appointments increased by 40% and we reduced cancellations. Patients love the ease of scheduling.',
          rating: 5,
          result: '+40% appointments'
        },
        {
          name: 'María González',
          company: 'MG Legal Consulting',
          text: 'Gmail automation has been a radical change. Now I can filter urgent cases and respond to basic queries without intervention, saving daily hours.',
          rating: 5,
          result: '5h/day saved'
        },
        {
          name: 'Carlos Rodríguez',
          company: 'Premier Real Estate',
          text: 'The Telegram assistant automatically qualifies prospects and schedules visits. It has multiplied our efficiency without increasing the team.',
          rating: 5,
          result: '+300% efficiency'
        }
      ]
    },

    // ===== CALL TO ACTION =====
    cta: {
      badge: 'Custom Solutions',
      titlePart1: 'Personalized AI assistants',
      titlePart2: 'for your company',
      subtitle: 'We design each assistant specifically for your business, integrating your brand identity, product knowledge and unique service flows.',
      description: 'Each Octopus assistant is unique like your company. We don\'t use generic templates, but build a solution adapted to your specific needs.',
      
      mainFeatures: [
        {
          title: 'Total customization',
          description: 'Adapted to your brand identity and values'
        },
        {
          title: 'Natural conversations',
          description: 'Fluid and human communication with your customers'
        },
        {
          title: 'Continuous learning',
          description: 'Constantly improves based on real interactions'
        }
      ],
      
      benefits: [
        'Industry-specific knowledge',
        'Integration with your current systems',
        'Voice and tone aligned with your brand',
        '24/7 priority support'
      ],
      
      metrics: {
        roi: '+150%',
        roiLabel: 'Average ROI',
        satisfaction: '98%',
        satisfactionLabel: 'Satisfaction'
      },
      
      floatingMessage: '+50 companies trust us',
      cardTitle: 'Premium Assistant',
      cardSubtitle: 'Customized for you',
      
      buttons: {
        primary: 'Request your demo',
        secondary: 'View all solutions'
      },
      
      features: [
        '✓ Personalized demo',
        '✓ Setup in 1-2 weeks',
        '✓ No permanence contracts'
      ]
    },

    // ===== FAQ =====
    faq: {
      badge: 'We resolve your doubts',
      title: 'Frequently Asked Questions',
      subtitle: 'We resolve all the questions that arise before making the best decision for your business.',
      subtitleHighlight: 'If you don\'t find your answer, contact us',
      
      items: [
        {
          question: 'Do I need technical knowledge to implement Octopus AI?',
          answer: 'Absolutely not. We handle all the technical configuration from start to finish. You just need to tell us how you want your assistant to work and we take care of the rest. We include complete team training at no additional cost.',
          highlight: '100% setup handled by us',
          tags: ['No technical knowledge', 'Training included', 'Complete support']
        },
        {
          question: 'How long does it take to implement a solution?',
          answer: 'In most cases, your assistant will be configured and working in 72 hours. For complex custom projects, the time can be 1-2 weeks. We give you an exact date before starting and we meet it.',
          highlight: 'Ready in 72 hours',
          tags: ['Quick setup', 'Guaranteed dates', 'No delays']
        },
        {
          question: 'Can I integrate the assistant with my current systems?',
          answer: 'Yes, our solutions integrate perfectly with CRMs, booking systems, e-commerce platforms, calendars and virtually any tool you already use. If you use a specific system, we can create the integration.',
          highlight: 'Integrates with everything',
          tags: ['CRM compatible', 'Flexible APIs', 'Existing systems']
        },
        {
          question: 'Can the assistant transfer conversations to a human?',
          answer: 'Of course. We configure intelligent rules to determine when a conversation should be escalated to a human agent. It can be due to query complexity, customer request, or specific keywords you define.',
          highlight: 'Intelligent escalation',
          tags: ['Smooth transfer', 'Custom rules', 'Human backup']
        },
        {
          question: 'Is there any permanence commitment or long contract?',
          answer: 'No, all our plans are monthly and you can cancel whenever you want without penalties or hidden costs. We focus on earning your trust with exceptional results, not with contracts that tie you down.',
          highlight: 'No commitments',
          tags: ['Free cancellation', 'No contracts', 'No penalties']
        },
        {
          question: 'What guarantees do you offer if I don\'t see results?',
          answer: 'We offer a 30-day satisfaction guarantee. If in the first month you don\'t see measurable improvements in your customer service or you\'re not satisfied for any reason, we return your money in full. Additionally, we guarantee positive ROI in 90 days.',
          highlight: '30-day guarantee',
          tags: ['Money back', 'Guaranteed ROI', 'No risks']
        },
        {
          question: 'How do you handle data security and privacy?',
          answer: 'Security is our #1 priority. We use AES-256 encryption, comply with GDPR and LGPD, perform regular audits and never share customer information. Your data and your customers\' data are 100% protected.',
          highlight: 'Military security',
          tags: ['GDPR compliant', 'AES-256 encryption', 'Regular audits']
        },
        {
          question: 'Can I see real examples working before deciding?',
          answer: 'Absolutely! We have live interactive demos on our services page. Additionally, we can do a personalized demonstration with specific cases from your industry. We also connect you with current clients so you can see real results.',
          highlight: 'Live demos',
          tags: ['Real testing', 'Success cases', 'Custom demo']
        }
      ],
      
      cta: {
        title: 'Do you have more questions?',
        description: 'Our team is available 24/7 to resolve any specific doubt about your case. We respond to you in less than 2 hours.',
        primaryButton: 'Talk to a specialist',
        secondaryButton: 'Direct WhatsApp',
        trustIndicators: [
          '📞 Response in 2 hours maximum',
          '💬 24/7 support in English',
          '🎯 No-commitment consultation',
          '✅ +500 companies chose us'
        ]
      }
    },

    // ===== IMPLEMENTATION =====
    implementation: {
      title: 'Rapid Implementation',
      subtitle: 'From idea to production in 1-2 weeks',
      description: 'Our optimized process allows you to have your AI assistant running in record time, without compromising quality or customization.',
      
      timeline: {
        setup: {
          title: 'Initial Setup',
          time: '1-3 days'
        },
        development: {
          title: 'Development and Testing',
          time: '5-7 days'
        },
        launch: {
          title: 'Launch',
          time: '1-2 days'
        }
      }
    },

    // ===== INTERACTIVE DEMO =====
    demo: {
      placeholder: 'Write your query here...',
      send: 'Send',
      thinking: 'Thinking...',
      error: 'Connection error',
      tryAnother: 'Try another query',
      examples: [
        'How can I schedule an appointment?',
        'What are your prices?',
        'I need information about your services'
      ]
    },

    // ===== FOOTER =====
    footer: {
      sections: {
        services: {
          title: 'Services',
          whatsapp: 'WhatsApp AI',
          telegram: 'Telegram Bot',
          gmail: 'Gmail Automation',
          excel: 'Excel Integration',
          custom: 'Custom Development'
        },
        company: {
          title: 'Company',
          home: 'Home',
          features: 'Features',
          pricing: 'Pricing',
          about: 'About Us',
          contact: 'Contact'
        },
        support: {
          title: 'Support',
          help: 'Help Center',
          docs: 'Documentation',
          faq: 'Frequently Asked Questions',
          cases: 'Success Cases',
          blog: 'Blog'
        },
        contact: {
          title: 'Contact',
          email: 'Corporate Email',
          phone: 'Direct WhatsApp',
          global: 'Global Support',
          hours: 'Mon - Fri: 8:00 AM - 6:00 PM',
          timezone: 'GMT-5',
          demo: 'Request Demo'
        }
      },
      copyright: 'All rights reserved.',
      links: {
        privacy: 'Privacy',
        terms: 'Terms',
        cookies: 'Cookies'
      },
      backToTop: 'Back to top'
    },

    // ===== FEATURES PAGE =====
    featuresPage: {
      hero: {
        badge: 'Cutting-edge technology',
        title: 'Revolutionary',
        titleHighlight: 'Features',
        subtitle: 'Discover the advanced capabilities that make Octopus AI the',
        subtitleHighlight: 'most complete solution',
        subtitleEnd: 'for business automation. Each feature is designed to maximize your ROI.',
        
        stats: [
          {
            value: '99.8%',
            label: 'AI Accuracy',
            description: 'Intent understanding'
          },
          {
            value: '<200ms',
            label: 'Response',
            description: 'Average time'
          },
          {
            value: '256-bit',
            label: 'Encryption',
            description: 'Military security'
          },
          {
            value: '30+',
            label: 'Languages',
            description: 'Native support'
          }
        ],
        
        buttons: {
          primary: 'Explore features',
          secondary: 'View live demos'
        }
      },
      
      featureCards: {
        badge: 'Next-generation AI',
        title: 'Advanced Capabilities',
        subtitle: 'Each feature is backed by years of AI research and optimized for real business use cases.',
        
        detailsTitle: 'Technical details',
        keyFeaturesTitle: 'Key features',
        showingText: 'Showing',
        featuresText: 'features',
        
        features: [
          {
            title: "Advanced Personalization",
            description: "We adapt each virtual assistant to perfectly reflect your brand's personality and values.",
            details: "Our assistants can learn your tone of voice, industry-specific terms, and communication style preferences. Each interaction will be unique and perfectly aligned with your company's identity.",
            features: ["Tone and style adaptation", "Specific terminology", "Personalized branding", "Unique flows"],
            metrics: { accuracy: "99.2%", setup: "2-3 days", satisfaction: "98%" }
          },
          {
            title: "Intent Recognition",
            description: "Our assistants understand what your customers want, even when they don't express it clearly.",
            details: "Using advanced natural language processing algorithms, we detect the real intent behind questions, even when they are imprecise or contain errors. This reduces customer frustration and increases first contact resolution rates.",
            features: ["Advanced NLP", "Context detection", "Sentiment analysis", "Automatic correction"],
            metrics: { accuracy: "96.8%", speed: "<150ms", languages: "30+" }
          },
          {
            title: "Native Multi-language",
            description: "Fluid communication with your customers in any language, automatically detecting their preference.",
            details: "Support for 30+ languages with automatic detection. Your assistant can switch languages mid-conversation without losing context. Ideal for businesses with international presence or in linguistically diverse areas.",
            features: ["30+ supported languages", "Automatic detection", "Dynamic switching", "Preserved context"],
            metrics: { languages: "30+", accuracy: "94%", coverage: "Global" }
          },
          {
            title: "Continuous Learning",
            description: "The system learns from each interaction to continuously improve its responses and effectiveness.",
            details: "We use machine learning techniques to analyze conversation patterns, identify knowledge gaps, and improve automatically. Your assistant will become more efficient over time, without manual intervention.",
            features: ["Machine Learning", "Automatic improvement", "Pattern analysis", "Continuous optimization"],
            metrics: { improvement: "+15%/month", learning: "24/7", updates: "Automatic" }
          },
          {
            title: "Omnichannel Integration",
            description: "Seamlessly connect WhatsApp, Telegram, Gmail, and other platforms for a coherent experience.",
            details: "Centralize all your communications in a unified platform. Your customer can start a conversation on WhatsApp and continue it via email without losing context. All channels synchronized with comprehensive tracking.",
            features: ["Multiple channels", "Unified context", "Real-time sync", "Complete history"],
            metrics: { channels: "10+", sync: "Real-time", uptime: "99.9%" }
          },
          {
            title: "Real-time Analytics",
            description: "Monitor and analyze your assistant's performance with detailed metrics and reports.",
            details: "Control panel with key metrics like response time, resolution rate, customer satisfaction, and conversation volume. Automatic weekly reports and customizable alerts to keep you always informed.",
            features: ["Real-time dashboard", "Custom metrics", "Automatic reports", "Smart alerts"],
            metrics: { metrics: "50+", reports: "Automatic", alerts: "Real-time" }
          },
          {
            title: "Data Security",
            description: "End-to-end encryption and full compliance with privacy regulations.",
            details: "Secure infrastructure with AES-256 encryption, GDPR and LGPD compliance, regular security audits, and strict data retention policies. Your information and your customers' is always protected under the highest standards.",
            features: ["AES-256 encryption", "GDPR compliance", "Regular audits", "Automatic backup"],
            metrics: { encryption: "AES-256", compliance: "100%", uptime: "99.99%" }
          },
          {
            title: "Guaranteed Scalability",
            description: "From small businesses to large corporations, our platform grows with you.",
            details: "Cloud architecture that automatically adapts to any volume of interactions. You can go from 10 to 10,000 daily conversations without service degradation. Ideal for growing businesses or those with high-demand seasons.",
            features: ["Auto-scaling", "No limits", "Constant performance", "Cloud architecture"],
            metrics: { capacity: "Unlimited", scaling: "Automatic", performance: "Constant" }
          }
        ]
      },
      
      comparison: {
        badge: 'Market leader',
        title: 'Why choose Octopus AI?',
        subtitle: 'We compare with the best solutions in the market',
        
        octopus: {
          title: 'Octopus AI',
          badge: 'RECOMMENDED',
          features: [
            '100% adapted customization',
            'Real interactive demos',
            'Frictionless integration',
            '24/7 support in English',
            'No permanence contracts',
            'Proven ROI +250%'
          ]
        },
        
        generic: {
          title: 'Generic Chatbots',
          subtitle: 'Standard solutions',
          features: [
            { text: 'Limited templates', available: false },
            { text: 'Basic customization', available: true },
            { text: 'Limited support', available: true },
            { text: 'Complex integrations', available: false },
            { text: 'Long contracts', available: false },
            { text: 'Uncertain ROI', available: false }
          ]
        },
        
        internal: {
          title: 'Internal Development',
          subtitle: 'Own teams',
          features: [
            { text: 'Total control', available: true },
            { text: 'Very high costs', available: false },
            { text: 'Time 6+ months', available: false },
            { text: 'Requires specialists', available: false },
            { text: 'Complex maintenance', available: false },
            { text: 'High failure risk', available: false }
          ]
        }
      },
      
      finalCta: {
        title: 'Experience the future',
        titleHighlight: 'of automation',
        subtitle: 'Join the companies that are already transforming their communication with the most advanced AI in the market.',
        buttons: {
          primary: 'Try interactive demos',
          secondary: 'Schedule free consultation'
        },
        trustIndicators: [
          '✓ Free demo',
          '✓ No commitments',
          '✓ Guaranteed ROI',
          '✓ Premium support'
        ]
      }
    },

    // ===== TECH FEATURES =====
    techFeatures: {
      badge: 'Technology stack',
      title: 'Cutting-Edge Technology',
      subtitle: 'Built on the most advanced frameworks and industry best practices, our infrastructure guarantees performance, security and scalability.',
      
      categories: [
        {
          id: 'infrastructure',
          name: 'Infrastructure',
          description: 'Robust and scalable architecture'
        },
        {
          id: 'ai',
          name: 'Artificial Intelligence',
          description: 'Latest generation AI'
        },
        {
          id: 'security',
          name: 'Security',
          description: 'Enterprise-level protection'
        }
      ],
      
      features: {
        infrastructure: [
          {
            title: 'Robust REST API',
            description: 'Easy integration with your existing systems through our high-performance RESTful API.',
            techSpecs: ['Intelligent rate limiting', 'Automatic versioning', 'OpenAPI documentation', 'Multiple SDKs'],
            metrics: { uptime: '99.99%', latency: '<50ms', requests: '1M+/day' }
          },
          {
            title: 'Customizable Webhooks',
            description: 'Configure real-time notifications and actions based on specific events.',
            techSpecs: ['Real-time events', 'Automatic retries', 'Security signature', 'Visual configuration'],
            metrics: { delivery: '99.9%', speed: 'Instant', events: '50+ types' }
          },
          {
            title: '24/7 Monitoring',
            description: 'Constant supervision and proactive alerts to ensure optimal performance.',
            techSpecs: ['Real-time metrics', 'Smart alerts', 'Predictive analysis', 'Advanced dashboard'],
            metrics: { monitoring: '24/7', alerts: 'Real-time', accuracy: '99.8%' }
          }
        ],
        ai: [
          {
            title: 'Natural Language Processing',
            description: 'Advanced NLP technology to understand and respond like a human.',
            techSpecs: ['Advanced transformers', 'Specific fine-tuning', 'Multi-turn context', 'Semantic analysis'],
            metrics: { accuracy: '96.8%', languages: '30+', context: 'Unlimited' }
          },
          {
            title: 'Machine Learning',
            description: 'Models that continuously improve with each interaction to optimize responses.',
            techSpecs: ['Automated MLOps', 'Continuous A/B testing', 'Feedback loops', 'Automatic optimization'],
            metrics: { improvement: '+2%/week', models: 'Updated', data: 'Secure' }
          },
          {
            title: 'Multimedia Response',
            description: 'Ability to process and respond to images, audio and documents.',
            techSpecs: ['Advanced OCR', 'Image analysis', 'Audio transcription', 'Text extraction'],
            metrics: { formats: '50+', accuracy: '94%', speed: '<2s' }
          }
        ],
        security: [
          {
            title: 'End-to-End Encryption',
            description: 'All data protected with AES-256 encryption and military-grade security protocols.',
            techSpecs: ['AES-256 encryption', 'TLS 1.3', 'SSL certificates', 'HSM hardware'],
            metrics: { encryption: 'AES-256', compliance: 'SOC2', audits: 'Annual' }
          },
          {
            title: 'Regulatory Compliance',
            description: 'GDPR, LGPD, SOC2 certifications and regular security audits.',
            techSpecs: ['GDPR compliant', 'LGPD certified', 'SOC2 Type II', 'ISO 27001'],
            metrics: { compliance: '100%', audits: 'Quarterly', certifications: '4+' }
          },
          {
            title: 'Automatic Backup',
            description: 'Daily backups of all conversations and configurations.',
            techSpecs: ['Incremental backup', 'Geo-replication', 'Instant restore', 'Versioning'],
            metrics: { frequency: 'Daily', retention: '5 years', recovery: '<1 hour' }
          }
        ]
      },
      
      specsLabel: 'Specifications',
      
      footer: {
        title: 'Enterprise-class infrastructure',
        stats: [
          { value: '99.99%', label: 'Guaranteed uptime' },
          { value: '<50ms', label: 'Average latency' },
          { value: 'AES-256', label: 'Encryption' },
          { value: '24/7', label: 'Active monitoring' }
        ]
      }
    },

    // ===== ABOUT PAGE =====
    aboutPage: {
      hero: {
        badge: 'Know our purpose',
        title: 'We transform businesses',
        titleHighlight: 'with artificial intelligence',
        subtitle: 'We are a group of engineers passionate about automation who decided to',
        subtitleHighlight: 'revolutionize business communication',
        subtitleEnd: '. Our goal is simple: make your business',
        subtitleHighlight2: 'more efficient and prosperous',
        
        buttons: {
          primary: 'Meet the founders',
          secondary: 'Schedule a meeting'
        },
        
        story: {
          title: 'Our story',
          text: 'It all started when we realized that companies were losing customers simply by not responding on time. As engineers, we knew that AI could solve this problem elegantly. Thus Octopus AI was born:',
          highlight: 'the solution we wanted to see in the world'
        }
      },
      
      finalCta: {
        title: 'Ready to be part',
        titleHighlight: 'of this revolution?',
        subtitle: 'Join the companies that have already transformed their communication with us. Your success is our success.',
        
        buttons: {
          primary: 'Talk to us',
          secondary: 'See our solutions'
        },
        
        trustIndicators: [
          '💬 Response in 2 hours',
          '🎯 Free consultation',
          '✅ No commitments'
        ]
      }
    },

    // ===== MISSION SECTION =====
    mission: {
      badge: 'Our purpose',
      title: 'Our Mission',
      subtitle: 'Democratize access to conversational artificial intelligence for businesses of all sizes',
      
      heartCard: {
        title: 'The heart of Octopus AI',
        paragraph1: 'We firmly believe that intelligent automation is the key for companies to',
        highlight1: 'scale their customer service without sacrificing quality or personalization',
        paragraph2: 'Our goal is for any company, from a startup to a corporation, to be able to offer an exceptional experience to their customers,',
        highlight2: '24 hours a day, 365 days a year'
      },
      
      values: [
        {
          icon: 'Brain',
          title: 'Intelligence',
          description: 'AI that truly understands',
          color: 'from-purple-500 to-violet-600'
        },
        {
          icon: 'Zap',
          title: 'Efficiency',
          description: 'Results from day 1',
          color: 'from-blue-500 to-indigo-600'
        },
        {
          icon: 'Users',
          title: 'Humanity',
          description: 'Technology with human touch',
          color: 'from-green-500 to-emerald-600'
        },
        {
          icon: 'Globe',
          title: 'Accessibility',
          description: 'For businesses of any size',
          color: 'from-pink-500 to-rose-600'
        }
      ],
      
      impact: {
        title: 'The impact of our mission',
        stats: [
          {
            metric: '+1M',
            label: 'Automated conversations',
            description: 'Every month we help process'
          },
          {
            metric: '95%',
            label: 'Response time reduction',
            description: 'Instant responses vs hours of waiting'
          },
          {
            metric: '+500',
            label: 'Transformed businesses',
            description: 'And we keep growing every day'
          }
        ]
      },
      
      quote: {
        text: 'Our mission is simple: make AI accessible to everyone',
        author: 'Octopus AI Founders'
      },
      
      cta: {
        title: 'Join our mission',
        description: 'Be part of the business communication revolution. Together we can make your business more efficient and successful.',
        buttons: {
          primary: 'Be part of the change',
          secondary: 'See our solutions'
        }
      }
    },

    // ===== NEW TRANSLATIONS FOR UPDATED COMPONENTS (3 VERTICALS) =====

    // HOME: FEATURES (3 Verticals)
    homeFeatures: {
      badge: 'Our Technology Verticals',
      title: '3 Ways to Transform Your Business',
      subtitle: 'From artificial intelligence to complete software development. Choose one or',
      subtitleHighlight: 'combine them',
      subtitle2: 'for a comprehensive solution.',
      verticals: {
        ai: {
          title: 'Artificial Intelligence',
          description: 'Automate your customer service and repetitive processes with intelligent agents that work 24/7.',
          highlights: [
            'Conversational agents',
            'AI-powered calls',
            'Omnichannel integration',
            'Real-time responses'
          ],
          metrics: {
            availability: '24/7',
            response: '< 3 sec',
            accuracy: '99%'
          }
        },
        data: {
          title: 'Data & Machine Learning',
          description: 'Transform your data into intelligent decisions with predictive models and cloud architecture.',
          highlights: [
            'Predictive models',
            'Data consulting',
            'AWS/Azure Cloud',
            'Real-time dashboards'
          ],
          metrics: {
            accuracy: '95%+',
            processing: 'Real-time',
            insights: 'Actionable'
          }
        },
        software: {
          title: 'Software Development',
          description: 'We build custom web and mobile applications that perfectly adapt to your business.',
          highlights: [
            'Custom web apps',
            'iOS/Android mobile apps',
            'Enterprise systems',
            'Complex integrations'
          ],
          metrics: {
            custom: '100%',
            platforms: 'Multi',
            scalable: 'Unlimited'
          }
        }
      },
      includesLabel: 'Includes',
      cta: {
        question: 'Not sure which one you need?',
        highlight: 'Combine multiple verticals',
        subtitle: 'Many clients use AI + Software or Data + AI for complete solutions',
        button: 'View all solutions'
      }
    },

    // HOME: HERO (Updated)
    homeHero: {
      badge: 'Comprehensive Technology Solutions',
      title: {
        part1: 'We transform your business',
        part2: 'with',
        highlight: 'cutting-edge technology'
      },
      description: {
        part1: 'From',
        ai: 'Artificial Intelligence',
        part2: 'to',
        data: 'Data & Machine Learning',
        part3: 'and',
        software: 'Software Development',
        part4: 'Complete solutions that drive your growth.'
      },
      stats: {
        verticals: 'Tech Verticals',
        solutions: 'Solutions',
        support: 'Support'
      },
      videos: {
        telegram: {
          subtitle: 'Advanced intelligence',
          description: 'Custom bot that learns from your business and responds like an expert'
        }
      }
    },

    // HOME: HOW IT WORKS (Universal Process)
    howItWorks: {
      steps: {
        step1: {
          title: 'Initial Consultation',
          description: 'We analyze your business, identify improvement opportunities and define the perfect technology solution for you.',
          details: [
            '30-minute no-obligation meeting',
            'Analysis of your current processes',
            'Pain point identification',
            'Personalized proposal'
          ]
        },
        step2: {
          title: 'Solution Design',
          description: 'We design the architecture, functionalities and specific flows you need, whether AI, Data or Software.',
          details: [
            'Detailed technical design',
            'Mockups and prototypes',
            'Scope definition',
            'Timeline and milestones'
          ]
        },
        step3: {
          title: 'Development & Implementation',
          description: 'Our team builds your solution with best practices, maintaining constant communication with you.',
          details: [
            'Agile development sprints',
            'Demos every 2 weeks',
            'Continuous testing',
            'Real-time adjustments'
          ]
        },
        step4: {
          title: 'Launch',
          description: 'We put your solution into production, train your team and ensure a perfect transition.',
          details: [
            'Production deployment',
            'Team training',
            'Complete documentation',
            'Go-live support'
          ]
        },
        step5: {
          title: 'Support & Optimization',
          description: 'We monitor performance, continuously optimize and add improvements according to your evolution.',
          details: [
            '24/7 monitoring',
            'Priority technical support',
            'Regular updates',
            'Continuous improvements'
          ]
        }
      },
      stepLabel: 'Step',
      timeline: {
        badge: 'Fast Implementation',
        title: 'From idea to production in record time',
        description: 'Our agile process guarantees fast results without sacrificing quality. We start generating value from the first week.',
        phases: {
          consultation: {
            label: 'Consultation',
            time: '1 day'
          },
          proposal: {
            label: 'Proposal',
            time: '2-3 days'
          },
          results: {
            label: 'First results',
            time: '1-2 weeks'
          }
        }
      }
    },

    // PRICING (New Model)
    pricingNew: {
      hero: {
        badge: 'Transparent Pricing',
        title: {
          part1: 'Clear investment,',
          highlight: 'guaranteed results'
        },
        description: {
          part1: 'No surprises. No hidden costs. Just technology that',
          highlight: 'drives your growth',
          part2: '.'
        }
      },
      aiAgents: {
        badge: 'AI Agents',
        title: 'Monthly Subscription',
        subtitle: 'Recurring payment + initial implementation investment',
        whatsapp: {
          name: 'WhatsApp',
          subtitle: 'Intelligent Agent',
          monthlyPrice: '$55',
          perMonth: '/month',
          setupLabel: 'Initial implementation:',
          setupPrice: 'From $600 USD',
          setupNote: '(Depending on complexity and requirements)',
          features: [
            '24/7 WhatsApp assistant',
            'Automatic intelligent responses',
            'Calendar integration',
            'Data capture',
            'Analytics and reports',
            'Technical support included'
          ],
          button: 'Request quote'
        },
        telegram: {
          name: 'Telegram',
          subtitle: 'Intelligent Agent',
          monthlyPrice: '$45',
          perMonth: '/month',
          popularBadge: 'Most Popular',
          setupLabel: 'Initial implementation:',
          setupPrice: 'From $600 USD',
          setupNote: '(Depending on complexity and requirements)',
          features: [
            'Intelligent Telegram bot',
            'Contextual responses',
            'Custom commands',
            'System integration',
            'Conversation analytics',
            'Technical support included'
          ],
          button: 'Request quote'
        },
        customAi: {
          name: 'Custom AI',
          subtitle: 'Tailored Agent',
          monthlyPrice: 'From $60',
          perMonth: '/month',
          setupLabel: 'Initial implementation:',
          setupPrice: 'From $1,500 USD',
          setupNote: '(Based on features and complexity)',
          features: [
            '100% personalized design',
            'Training with your data',
            'Multiple integrations',
            'Custom functionalities',
            'Guaranteed scalability',
            'Dedicated support'
          ],
          button: 'Request quote'
        },
        voiceAgent: {
          name: 'Voice Agent',
          subtitle: 'AI Phone Calls',
          monthlyPrice: 'From $1,000',
          perMonth: '/month',
          setupLabel: 'Initial implementation:',
          setupPrice: 'From $1,500 USD',
          setupNote: '(Includes phone integration)',
          features: [
            'Inbound and outbound calls',
            'Natural conversations',
            'CRM integration',
            'Automatic transcriptions',
            'Sentiment analysis',
            'Priority technical support'
          ],
          button: 'Request quote'
        }
      },
      customServices: {
        badge: 'Custom Projects',
        title: 'Data, ML & Development',
        subtitle: 'Unique projects with pricing based on scope and complexity',
        dataMl: {
          name: 'Data & Machine Learning',
          subtitle: 'Custom Projects',
          priceFrom: 'From',
          price: '1,500',
          currency: 'USD',
          note: 'Final price based on specific requirements, project scope and technologies used.',
          features: [
            'Custom ML models',
            'Strategic data consulting',
            'AWS/Azure architecture',
            'Automated data pipelines',
            'Executive dashboards',
            'Post-implementation support'
          ],
          button: 'Request proposal'
        },
        software: {
          name: 'Software Development',
          subtitle: 'Custom Projects',
          priceFrom: 'From',
          price: '1,500',
          currency: 'USD',
          note: 'Final price based on specific requirements, project scope and technologies used.',
          features: [
            'Custom web applications',
            'iOS/Android mobile apps',
            'Enterprise systems',
            'Complex integrations',
            'Scalable architecture',
            'Maintenance included'
          ],
          button: 'Request proposal'
        }
      },
      combinationNote: {
        question: 'Need to combine services?',
        answer: 'We offer special discounts for clients who integrate multiple solutions.'
      },
      finalCta: {
        title: 'Ready to transform your business?',
        description: 'Schedule a free consultation and receive a personalized proposal within 24 hours.',
        buttonPrimary: 'Schedule free consultation',
        buttonSecondary: 'View all solutions'
      }
    },

    // ===== CONTACT PAGE =====
    contactPage: {
      hero: {
        badge: 'Your success starts here!',
        title: {
          part1: 'Let\'s talk and',
          highlight: 'transform your business'
        },
        subtitle: 'Tell us about your project and receive a personalized proposal in less than 24 hours.',
        trustIndicators: [
          {
            value: '< 2h',
            label: 'Response time',
            description: 'We respond quickly'
          },
          {
            value: 'Free',
            label: 'Personalized demo',
            description: 'No commitments'
          },
          {
            value: '30 days',
            label: 'Total guarantee',
            description: 'No risks'
          }
        ],
        cta: {
          primary: 'Request free proposal',
          secondary: 'Direct WhatsApp'
        }
      },
      mainSection: {
        badge: 'Choose your preferred way',
        title: 'Multiple ways to contact us',
        subtitle: 'Choose the method you prefer. We will respond in less than 2 hours.'
      },
      form: {
        title: 'Request Free Proposal',
        responseTime: 'Response in 2h',
        step: 'Step',
        of: 'of',
        completed: 'completed',
        step1: {
          title: 'Basic Information',
          subtitle: 'Tell us about yourself and your company',
          name: 'Full name *',
          namePlaceholder: 'Your name',
          email: 'Email *',
          emailPlaceholder: 'name@company.com',
          phone: 'Phone *',
          phonePlaceholder: '+1 609 123 4567',
          company: 'Company *',
          companyPlaceholder: 'Your company LLC',
          privacy: '100% confidential information. We do not share your data with third parties.'
        },
        step2: {
          title: 'Project Details',
          subtitle: 'Help us understand your specific needs',
          industry: 'What industry do you belong to? *',
          projectType: 'What type of solution are you interested in? *',
          customers: 'How many customers do you serve monthly? *'
        },
        step3: {
          title: 'Final Details',
          subtitle: 'To create the perfect proposal for you',
          urgency: 'How urgent is your project?',
          challenge: 'What is your biggest current challenge?',
          challengePlaceholder: 'E.g: We lose many customers because we don\'t respond on time on WhatsApp, especially during night hours and weekends...',
          message: 'Anything else you want to add?',
          messagePlaceholder: 'Specific requirements, necessary integrations, estimated budget, etc.',
          benefitsTitle: 'By submitting this form you receive:',
          benefits: [
            '✅ Response within 2 hours maximum',
            '✅ Personalized proposal in 24h',
            '✅ ROI analysis for your business',
            '✅ Consultation without commitment'
          ]
        },
        industries: {
          healthcare: '🏥 Health and Wellness',
          retail: '🛍️ Retail and E-commerce',
          realestate: '🏠 Real Estate',
          services: '💼 Professional Services',
          restaurant: '🍕 Restaurants',
          education: '📚 Education',
          automotive: '🚗 Automotive',
          other: '🌟 Other'
        },
        projectTypes: {
          ai: { label: '🤖 Artificial Intelligence', desc: 'Conversational agents, AI automation and intelligent solutions' },
          dataML: { label: '📊 Data & Machine Learning', desc: 'Predictive analytics, Business Intelligence and process automation' },
          development: { label: '💻 Software Development', desc: 'Web applications, mobile apps and custom systems' }
        },
        customers: {
          small: { label: '1-50 customers/month', bonus: '💰 Starter Plan' },
          medium: { label: '51-200 customers/month', bonus: '🚀 Growth Plan' },
          large: { label: '201-500 customers/month', bonus: '👑 Professional Plan' },
          enterprise: { label: '500+ customers/month', bonus: '💎 Enterprise Plan' }
        },
        urgency: {
          asap: '🔥 Urgent! (This week)',
          soon: '⚡ Soon (This month)',
          planning: '📅 Planning (1-3 months)',
          exploring: '🔍 Just exploring'
        },
        errors: {
          nameRequired: 'Name is required',
          emailRequired: 'Email is required',
          emailInvalid: 'Invalid email',
          phoneRequired: 'Phone is required',
          companyRequired: 'Company name is required',
          industryRequired: 'Select your industry',
          projectTypeRequired: 'Select the project type',
          customersRequired: 'Select customer volume'
        },
        buttons: {
          previous: 'Previous',
          next: 'Next',
          sending: 'Sending...',
          submit: 'Send request'
        },
        success: {
          title: 'Message sent successfully!',
          message: 'Thank you',
          message2: '. Your request has been received and our team is reviewing it.',
          nextSteps: 'What\'s next?',
          step1: 'Within the next',
          step1Time: '2 hours',
          step1Text: 'you will receive our response',
          step2: 'In',
          step2Time: '24 hours',
          step2Text: 'you will have a personalized proposal',
          step3: 'In',
          step3Time: '48 hours',
          step3Text: 'your AI assistant will be running',
          whatsapp: 'Talk on WhatsApp',
          sendAnother: 'Send another message',
          error: 'There was a problem sending the message. Please try again or contact us via WhatsApp.'
        }
      },
      contactInfo: {
        whatsapp: {
          title: 'Direct WhatsApp',
          subtitle: 'Faster and more personal',
          description: 'Immediate response during business hours',
          badge: '🔥 Most popular',
          advantages: ['Response in minutes', 'File sharing', 'Direct calls'],
          button: 'Open WhatsApp'
        },
        email: {
          title: 'Corporate Email',
          subtitle: 'For detailed inquiries',
          description: 'Ideal for sending documents',
          badge: '📧 Professional',
          advantages: ['Attached documents', 'Complete history', 'Detailed proposals'],
          button: 'Send email'
        },
        businessHours: {
          title: 'Business hours',
          value: 'Mon - Fri: 8:00 AM - 6:00 PM',
          subtitle: 'Colombia time (GMT-5)',
          available: '🟢 Available now',
          unavailable: '🔴 Outside hours'
        },
        languages: {
          title: 'Languages',
          value: 'Spanish, English',
          subtitle: 'Multi-language support',
          status: '🗣️ Native support'
        },
        advantages: 'Advantages:',
        stats: {
          companies: 'Companies trust us',
          responseTime: 'Average response time',
          satisfaction: 'Customer satisfaction',
          roi: 'Average ROI'
        }
      }
    },

    // ===== VALUES SECTION =====
    values: {
      badge: 'The pillars of our success',
      title: 'Our Values',
      subtitle: {
        part1: 'These values are not just words on the wall. They are the principles that',
        highlight: 'guide every decision',
        part2: ', every line of code and every interaction with our customers.'
      },
      practiceLabel: 'In practice:',
      items: [
        {
          title: 'Constant Innovation',
          subtitle: 'Always one step ahead',
          description: 'We constantly seek new ways to improve and expand our solutions, keeping up with the latest trends in AI.',
          detailedDescription: 'We don\'t settle for the status quo. Every day we explore new technologies, methodologies and approaches to create solutions that make a difference. Innovation is in our DNA.',
          examples: [
            'Continuous research in new AI models',
            'Implementation of emerging technologies',
            'Constant improvement of our algorithms',
            'Anticipation of market needs'
          ],
          stats: {
            metric: '50+',
            label: 'New features per year'
          }
        },
        {
          title: 'Excellence Without Compromise',
          subtitle: 'Quality in every detail',
          description: 'We are committed to superior quality in every aspect of our work, from code to customer service.',
          detailedDescription: 'Excellence is not an act, but a habit. Every line of code, every customer interaction, every strategic decision goes through our quality filter without exceptions.',
          examples: [
            'Code thoroughly reviewed and tested',
            'Automated testing at all levels',
            'Complete and updated documentation',
            'First-class technical support'
          ],
          stats: {
            metric: '99.9%',
            label: 'Guaranteed uptime'
          }
        },
        {
          title: 'Elegant Simplicity',
          subtitle: 'The complex made simple',
          description: 'We create advanced technology that is surprisingly easy to use, without sacrificing functionality or power.',
          detailedDescription: 'We believe that true genius lies in making the complex simple. Our most sophisticated AI solutions feel natural and intuitive to any user.',
          examples: [
            'Intuitive and user-friendly interfaces',
            'Setup in less than 48 hours',
            'Visual configuration without code',
            'Clear and concise documentation'
          ],
          stats: {
            metric: '< 5min',
            label: 'Learning time'
          }
        },
        {
          title: 'Measurable Results',
          subtitle: 'Real and tangible impact',
          description: 'We focus on generating real and measurable impact for our clients, not just technology for technology\'s sake.',
          detailedDescription: 'Every solution we develop has a clear purpose: to generate real and measurable value for our clients. We work oriented to KPIs and concrete results.',
          examples: [
            'Clear performance metrics',
            'Detailed impact reports',
            'Optimization based on real data'
          ],
          stats: {
            metric: '',
            label: ' '
          }
        },
        {
          title: 'Total Transparency',
          subtitle: 'Honesty in every interaction',
          description: 'We maintain open and honest communication with our clients, without empty promises or confusing terms.',
          detailedDescription: 'Trust is built with transparency. We openly share our processes, limitations and capabilities. There is no fine print or surprises.',
          examples: [
            'Clear communication about times and costs',
            'No contracts with fine print',
            'Open performance reports',
            'Full access to metrics and data'
          ],
          stats: {
            metric: '100%',
            label: 'Transparency'
          }
        },
        {
          title: 'Passion for the Customer',
          subtitle: 'Your success is our success',
          description: 'Every client is a partner in our mission. We work tirelessly to ensure their success and growth.',
          detailedDescription: 'We are not just a provider, we are strategic allies. The success of our customers is the most important metric we track. When they grow, we grow.',
          examples: [
            '24/7 support in Spanish',
            'Personalized onboarding',
            'Proactive success tracking',
            'Adjustments at no additional cost'
          ],
          stats: {
            metric: '98%',
            label: 'Customer satisfaction'
          }
        }
      ]
    },

    // Footer update
    footerNew: {
      sections: {
        company: {
          services: 'Services'
        }
      }
    }
  }
};