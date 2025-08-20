#!/usr/bin/env node

/**
 * Script para aplicar correcciones de compliance SFC
 * Reemplaza términos problemáticos en todos los idiomas
 */

const fs = require('fs');
const path = require('path');

// Archivo de traducciones
const i18nPath = path.join(__dirname, '../src/lib/i18n.ts');
const seoPath = path.join(__dirname, '../src/components/SEOHead.tsx');

// Leer archivos
let i18nContent = fs.readFileSync(i18nPath, 'utf8');
let seoContent = fs.readFileSync(seoPath, 'utf8');

console.log('🔧 Aplicando correcciones de compliance SFC...\n');

// Reemplazos críticos restantes para francés y portugués
const replacements = [
  // Francés - Hero
  {
    file: 'i18n',
    from: `title: "L'avenir du trading, c'est l'IA.",`,
    to: `title: "L'avenir des outils crypto, c'est l'IA.",`,
    lang: 'FR'
  },
  {
    file: 'i18n',
    from: `subtitle: "ORA IA combine l'intelligence artificielle et l'expérience financière mondiale pour générer une croissance optimale, sous n'importe quel momentum de marché.",`,
    to: `subtitle: "ORA IA combine l'intelligence artificielle et l'expérience technologique mondiale pour offrir des outils crypto avancés, sous n'importe quelle condition de marché.",`,
    lang: 'FR'
  },
  {
    file: 'i18n',
    from: `tagline: "L'avenir du trading, c'est l'IA. Faites croître vos actifs avec intelligence."`,
    to: `tagline: "L'avenir des outils crypto, c'est l'IA. Faites croître vos outils avec intelligence."`,
    lang: 'FR'
  },
  
  // Portugués - Hero
  {
    file: 'i18n',
    from: `title: "O futuro do trading é IA.",`,
    to: `title: "O futuro das ferramentas cripto é IA.",`,
    lang: 'PT'
  },
  {
    file: 'i18n',
    from: `subtitle: "ORA IA combina inteligência artificial e experiência financeira global para gerar crescimento ótimo, sob qualquer momentum de mercado.",`,
    to: `subtitle: "ORA IA combina inteligência artificial e experiência tecnológica global para oferecer ferramentas cripto avançadas, sob qualquer condição de mercado.",`,
    lang: 'PT'
  },
  {
    file: 'i18n',
    from: `tagline: "O futuro do trading é IA. Potencialize seus ativos com inteligência."`,
    to: `tagline: "O futuro das ferramentas cripto é IA. Potencialize suas ferramentas com inteligência."`,
    lang: 'PT'
  },

  // SEO updates
  {
    file: 'seo',
    from: `title: 'ORA IA - L\\'avenir du trading, c\\'est l\\'IA | Optimum Return Asset',`,
    to: `title: 'ORA IA - L\\'avenir des outils crypto, c\\'est l\\'IA | Assistant Intelligence',`,
    lang: 'FR'
  },
  {
    file: 'seo',
    from: `title: 'ORA IA - O futuro do trading é IA | Optimum Return Asset',`,
    to: `title: 'ORA IA - O futuro das ferramentas cripto é IA | Assistente de Inteligência',`,
    lang: 'PT'
  },

  // Términos generales en todos los idiomas
  {
    file: 'i18n',
    from: 'trading automatizado',
    to: 'herramientas cripto automatizadas',
    lang: 'ES'
  },
  {
    file: 'i18n',
    from: 'automated trading',
    to: 'automated crypto tools',
    lang: 'EN'
  },
  {
    file: 'i18n',
    from: 'trading automatisé',
    to: 'outils crypto automatisés',
    lang: 'FR'
  },
  {
    file: 'i18n',
    from: 'trading automatizado',
    to: 'ferramentas cripto automatizadas',
    lang: 'PT'
  }
];

let changesCount = 0;

// Aplicar reemplazos
replacements.forEach(replacement => {
  const { file, from, to, lang } = replacement;
  
  if (file === 'i18n') {
    if (i18nContent.includes(from)) {
      i18nContent = i18nContent.replace(from, to);
      console.log(`✅ ${lang}: Reemplazado "${from.substring(0, 50)}..."`);
      changesCount++;
    }
  } else if (file === 'seo') {
    if (seoContent.includes(from)) {
      seoContent = seoContent.replace(from, to);
      console.log(`✅ SEO ${lang}: Reemplazado "${from.substring(0, 50)}..."`);
      changesCount++;
    }
  }
});

// Escribir archivos actualizados
fs.writeFileSync(i18nPath, i18nContent, 'utf8');
fs.writeFileSync(seoPath, seoContent, 'utf8');

console.log(`\n🎉 Correcciones aplicadas: ${changesCount} cambios`);
console.log('📁 Archivos actualizados:');
console.log('   - src/lib/i18n.ts');
console.log('   - src/components/SEOHead.tsx');
console.log('\n✅ Compliance SFC completado');
