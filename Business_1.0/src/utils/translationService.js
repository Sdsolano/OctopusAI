class TranslationService {
  constructor() {
    this.cache = new Map();
    this.originalTexts = new Map();
    this.isTranslating = false;
    this.loadCacheFromStorage();
  }

  // API gratuita MyMemory
  async translateWithMyMemory(text, fromLang = 'es', toLang = 'en') {
    try {
      const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${fromLang}|${toLang}`;
      
      const response = await fetch(url);
      if (!response.ok) throw new Error('API request failed');
      
      const data = await response.json();
      
      if (data.responseStatus === 200 && data.responseData) {
        return data.responseData.translatedText;
      }
      
      return null;
    } catch (error) {
      console.warn('Translation API error:', error);
      return null;
    }
  }

  // Función principal de traducción
  async translateText(text, fromLang = 'es', toLang = 'en') {
    if (!text || text.trim() === '') return text;
    
    const originalText = text.trim();
    const cacheKey = `${originalText}_${fromLang}_${toLang}`;
    
    // Verificar cache primero
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    // Intentar traducir con API
    try {
      const translation = await this.translateWithMyMemory(originalText, fromLang, toLang);
      
      if (translation && translation !== originalText) {
        // Verificar que la traducción sea válida (no solo números o símbolos)
        if (this.isValidTranslation(translation, originalText)) {
          this.cache.set(cacheKey, translation);
          this.saveCacheToStorage();
          return translation;
        }
      }
    } catch (error) {
      console.warn('Translation failed for:', originalText);
    }

    // Si no se puede traducir, devolver original
    return originalText;
  }

  // Verificar si la traducción es válida
  isValidTranslation(translation, original) {
    // No debe ser igual al original
    if (translation.toLowerCase() === original.toLowerCase()) return false;
    
    // No debe ser solo números o símbolos
    if (/^[\d\s\.,;:!?¿¡()[\]{}"-]+$/.test(translation)) return false;
    
    // Debe tener al menos una letra
    if (!/[a-zA-Z]/.test(translation)) return false;
    
    // No debe ser significativamente más largo (puede indicar error de API)
    if (translation.length > original.length * 3) return false;
    
    return true;
  }

  // Guardar cache en localStorage
  saveCacheToStorage() {
    try {
      const cacheObject = Object.fromEntries(this.cache);
      localStorage.setItem('octopus-translation-cache', JSON.stringify(cacheObject));
    } catch (error) {
      console.warn('Could not save cache:', error);
    }
  }

  // Cargar cache del localStorage
  loadCacheFromStorage() {
    try {
      const cached = localStorage.getItem('octopus-translation-cache');
      if (cached) {
        const cacheObject = JSON.parse(cached);
        this.cache = new Map(Object.entries(cacheObject));
        console.log('💾 Cache cargado:', this.cache.size, 'traducciones');
      }
    } catch (error) {
      console.warn('Could not load cache:', error);
    }
  }

  // Obtener nodos de texto para traducir
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
          
          // Excluir elementos marcados como no traducibles
          if (parent.hasAttribute('data-no-translate') || 
              parent.classList.contains('no-translate')) {
            return NodeFilter.FILTER_REJECT;
          }
          
          const text = node.textContent.trim();
          
          // Solo procesar texto con contenido significativo
          if (!text || text.length < 2) {
            return NodeFilter.FILTER_REJECT;
          }
          
          // Excluir texto que son solo números, símbolos o muy corto
          if (/^[\d\s\.,;:!?¿¡()[\]{}"-]+$/.test(text)) {
            return NodeFilter.FILTER_REJECT;
          }
          
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    let node;
    while (node = walker.nextNode()) {
      textNodes.push(node);
    }
    
    return textNodes;
  }

  // Traducir toda la página
  async translatePage(toLang = 'en') {
    if (this.isTranslating) return;
    this.isTranslating = true;

    try {
      console.log('🔄 Iniciando traducción de página...');
      const textNodes = this.getTextNodes();
      console.log(`📝 Encontrados ${textNodes.length} elementos para traducir`);
      
      let translated = 0;
      let kept = 0;
      
      // Procesar en lotes para mejor control
      const batchSize = 3;
      
      for (let i = 0; i < textNodes.length; i += batchSize) {
        const batch = textNodes.slice(i, i + batchSize);
        
        await Promise.all(batch.map(async (node) => {
          const originalText = node.textContent.trim();
          
          if (originalText) {
            // Guardar texto original
            this.originalTexts.set(node, originalText);
            
            // Intentar traducir
            const translatedText = await this.translateText(originalText, 'es', toLang);
            
            if (translatedText !== originalText) {
              node.textContent = translatedText;
              translated++;
              console.log(`✅ "${originalText}" → "${translatedText}"`);
            } else {
              kept++;
              console.log(`⏭️ Mantenido: "${originalText}"`);
            }
          }
        }));
        
        // Pausa entre lotes para no sobrecargar la API
        await new Promise(resolve => setTimeout(resolve, 200));
      }
      
      console.log(`🎉 Traducción completada:`);
      console.log(`   ✅ ${translated} elementos traducidos`);
      console.log(`   ⏭️ ${kept} elementos mantenidos en original`);
      
    } catch (error) {
      console.error('❌ Error durante traducción:', error);
    } finally {
      this.isTranslating = false;
    }
  }

  // Restaurar textos originales
  restoreOriginalTexts() {
    console.log('🔄 Restaurando textos originales...');
    let restored = 0;
    
    this.originalTexts.forEach((originalText, node) => {
      if (node.parentNode) {
        node.textContent = originalText;
        restored++;
      }
    });
    
    this.originalTexts.clear();
    console.log(`✅ Restauración completada: ${restored} elementos restaurados`);
  }

  // Limpiar cache
  clearCache() {
    this.cache.clear();
    localStorage.removeItem('octopus-translation-cache');
    console.log('🗑️ Cache limpiado');
  }

  // Estadísticas
  getCacheStats() {
    return {
      translations: this.cache.size,
      originalTexts: this.originalTexts.size
    };
  }
}

// Instancia singleton
export const translationService = new TranslationService();
