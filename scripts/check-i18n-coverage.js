#!/usr/bin/env node

/**
 * Script para verificar la cobertura de claves de traducción
 * Compara las claves entre todos los idiomas (es, en, fr, pt)
 * y reporta claves faltantes o huérfanas
 */

const fs = require('fs');
const path = require('path');

// Importar las traducciones
const i18nPath = path.join(__dirname, '../src/lib/i18n.ts');
const i18nContent = fs.readFileSync(i18nPath, 'utf8');

// Extraer el objeto translations usando regex simple
const translationsMatch = i18nContent.match(/export const translations = ({[\s\S]*?});/);
if (!translationsMatch) {
  console.error('❌ No se pudo encontrar el objeto translations');
  process.exit(1);
}

// Función para extraer todas las claves de un objeto anidado
function extractKeys(obj, prefix = '') {
  const keys = [];
  
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const fullKey = prefix ? `${prefix}.${key}` : key;
      
      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        keys.push(...extractKeys(obj[key], fullKey));
      } else {
        keys.push(fullKey);
      }
    }
  }
  
  return keys;
}

// Función para evaluar el objeto translations de forma segura
function parseTranslations() {
  try {
    // Crear un contexto seguro para evaluar el código
    const translationsCode = translationsMatch[1];
    const translations = eval(`(${translationsCode})`);
    return translations;
  } catch (error) {
    console.error('❌ Error al parsear las traducciones:', error.message);
    process.exit(1);
  }
}

const translations = parseTranslations();
const languages = ['es', 'en', 'fr', 'pt'];

console.log('🔍 Verificando cobertura de traducciones...\n');

// Extraer claves para cada idioma
const keysByLanguage = {};
for (const lang of languages) {
  if (translations[lang]) {
    keysByLanguage[lang] = extractKeys(translations[lang]);
  } else {
    console.error(`❌ Idioma ${lang} no encontrado en translations`);
    process.exit(1);
  }
}

// Encontrar todas las claves únicas
const allKeys = new Set();
for (const lang of languages) {
  keysByLanguage[lang].forEach(key => allKeys.add(key));
}

console.log(`📊 Total de claves únicas encontradas: ${allKeys.size}\n`);

// Verificar claves faltantes por idioma
let hasErrors = false;
const missingKeysByLanguage = {};

for (const lang of languages) {
  const missing = [];
  for (const key of allKeys) {
    if (!keysByLanguage[lang].includes(key)) {
      missing.push(key);
    }
  }
  
  if (missing.length > 0) {
    hasErrors = true;
    missingKeysByLanguage[lang] = missing;
    console.log(`❌ ${lang.toUpperCase()}: ${missing.length} claves faltantes`);
    missing.forEach(key => console.log(`   - ${key}`));
    console.log('');
  } else {
    console.log(`✅ ${lang.toUpperCase()}: Todas las claves presentes`);
  }
}

// Verificar claves huérfanas (presentes en un idioma pero no en el de referencia 'es')
const referenceKeys = keysByLanguage['es'];
for (const lang of languages.filter(l => l !== 'es')) {
  const orphanKeys = keysByLanguage[lang].filter(key => !referenceKeys.includes(key));
  
  if (orphanKeys.length > 0) {
    hasErrors = true;
    console.log(`🔶 ${lang.toUpperCase()}: ${orphanKeys.length} claves huérfanas (no están en español)`);
    orphanKeys.forEach(key => console.log(`   - ${key}`));
    console.log('');
  }
}

// Estadísticas finales
console.log('\n📈 Estadísticas por idioma:');
for (const lang of languages) {
  const coverage = ((keysByLanguage[lang].length / allKeys.size) * 100).toFixed(1);
  console.log(`   ${lang.toUpperCase()}: ${keysByLanguage[lang].length}/${allKeys.size} claves (${coverage}%)`);
}

if (hasErrors) {
  console.log('\n❌ Se encontraron problemas de cobertura de traducciones');
  process.exit(1);
} else {
  console.log('\n✅ Todas las traducciones tienen cobertura completa');
  process.exit(0);
}
