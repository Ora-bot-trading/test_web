import { useEffect } from 'react';
import { Language } from '@/lib/i18n';

interface SEOHeadProps {
  language: Language;
  page?: 'home' | 'products' | 'roadmap' | 'about';
}

const seoContent = {
  es: {
    home: {
      title: 'ORA IA - El futuro del trading es IA | Asistente de Inteligencia ORA',
      description: 'ORA IA combina inteligencia artificial y experiencia financiera global para generar crecimiento óptimo. Bot Multicripto, Staking USDT/USDC, Bot Acciones y más.',
      keywords: 'trading automatizado, inteligencia artificial, criptomonedas, bot trading, staking USDT, USDC, acciones, futuros, ORA IA'
    },
    products: {
      title: 'Herramientas de Trading IA | ORA IA - Bots Automatizados',
      description: 'Descubre nuestras herramientas de trading automatizado: Bot Multicripto Spot, Staking USDT/USDC, Bot Acciones, Bot Futuros Cripto y El Cazador.',
      keywords: 'bot multicripto, staking USDT, bot acciones, bot futuros, el cazador, trading automatizado, IA'
    },
    roadmap: {
      title: 'Roadmap 2025-2026 | ORA IA - Visión y Desarrollo',
      description: 'Conoce nuestro roadmap de desarrollo desde Q4 2025 hasta Q4 2026. Lanzamiento, ampliación, expansión, IA avanzada y servicios institucionales.',
      keywords: 'roadmap, desarrollo, lanzamiento, IA avanzada, servicios institucionales, ORA IA'
    },
    about: {
      title: 'Quiénes Somos | ORA IA - Experiencia en Trading IA',
      description: 'Conoce al equipo de ORA IA. +8 años de experiencia en mercados financieros, gestión de riesgo profesional y IA avanzada para optimización.',
      keywords: 'equipo, experiencia, mercados financieros, gestión de riesgo, IA, optimización'
    }
  },
  en: {
    home: {
      title: 'ORA IA - The future of trading is AI | Intelligence Assistant',
      description: 'ORA IA combines artificial intelligence and global financial experience to generate optimal growth. Multi-Crypto Bot, USDT/USDC Staking, Stock Bot and more.',
      keywords: 'automated trading, artificial intelligence, cryptocurrencies, trading bot, USDT staking, USDC, stocks, futures, ORA IA'
    },
    products: {
      title: 'AI Trading Tools | ORA IA - Automated Bots',
      description: 'Discover our automated trading tools: Multi-Crypto Spot Bot, USDT/USDC Staking, Stock Bot, Crypto Futures Bot and The Hunter.',
      keywords: 'multi-crypto bot, USDT staking, stock bot, futures bot, the hunter, automated trading, AI'
    },
    roadmap: {
      title: 'Roadmap 2025-2026 | ORA IA - Vision and Development',
      description: 'Learn about our development roadmap from Q4 2025 to Q4 2026. Launch, expansion, growth, advanced AI and institutional services.',
      keywords: 'roadmap, development, launch, advanced AI, institutional services, ORA IA'
    },
    about: {
      title: 'Who We Are | ORA IA - AI Trading Experience',
      description: 'Meet the ORA IA team. +8 years of experience in financial markets, professional risk management and advanced AI for optimization.',
      keywords: 'team, experience, financial markets, risk management, AI, optimization'
    }
  },
  fr: {
    home: {
      title: 'ORA IA - L\'avenir du trading, c\'est l\'IA | Assistant Intelligence',
      description: 'ORA IA combine l\'intelligence artificielle et l\'expérience financière mondiale pour générer une croissance optimale. Bot Multi-Crypto, Staking USDT/USDC, Bot Actions et plus.',
      keywords: 'trading automatisé, intelligence artificielle, cryptomonnaies, bot trading, staking USDT, USDC, actions, futures, ORA IA'
    },
    products: {
      title: 'Outils de Trading IA | ORA IA - Bots Automatisés',
      description: 'Découvrez nos outils de trading automatisé : Bot Multi-Crypto Spot, Staking USDT/USDC, Bot Actions, Bot Futures Crypto et Le Chasseur.',
      keywords: 'bot multi-crypto, staking USDT, bot actions, bot futures, le chasseur, trading automatisé, IA'
    },
    roadmap: {
      title: 'Roadmap 2025-2026 | ORA IA - Vision et Développement',
      description: 'Découvrez notre roadmap de développement de Q4 2025 à Q4 2026. Lancement, expansion, croissance, IA avancée et services institutionnels.',
      keywords: 'roadmap, développement, lancement, IA avancée, services institutionnels, ORA IA'
    },
    about: {
      title: 'Qui Nous Sommes | ORA IA - Expérience Trading IA',
      description: 'Rencontrez l\'équipe ORA IA. +8 ans d\'expérience sur les marchés financiers, gestion des risques professionnelle et IA avancée pour l\'optimisation.',
      keywords: 'équipe, expérience, marchés financiers, gestion des risques, IA, optimisation'
    }
  },
  pt: {
    home: {
      title: 'ORA IA - O futuro do trading é IA | Assistente de Inteligência',
      description: 'ORA IA combina inteligência artificial e experiência financeira global para gerar crescimento ótimo. Bot Multi-Cripto, Staking USDT/USDC, Bot Ações e mais.',
      keywords: 'trading automatizado, inteligência artificial, criptomoedas, bot trading, staking USDT, USDC, ações, futuros, ORA IA'
    },
    products: {
      title: 'Ferramentas de Trading IA | ORA IA - Bots Automatizados',
      description: 'Descubra nossas ferramentas de trading automatizado: Bot Multi-Cripto Spot, Staking USDT/USDC, Bot Ações, Bot Futuros Cripto e O Caçador.',
      keywords: 'bot multi-cripto, staking USDT, bot ações, bot futuros, o caçador, trading automatizado, IA'
    },
    roadmap: {
      title: 'Roadmap 2025-2026 | ORA IA - Visão e Desenvolvimento',
      description: 'Conheça nosso roadmap de desenvolvimento de Q4 2025 a Q4 2026. Lançamento, expansão, crescimento, IA avançada e serviços institucionais.',
      keywords: 'roadmap, desenvolvimento, lançamento, IA avançada, serviços institucionais, ORA IA'
    },
    about: {
      title: 'Quem Somos | ORA IA - Experiência em Trading IA',
      description: 'Conheça a equipe ORA IA. +8 anos de experiência em mercados financeiros, gestão de risco profissional e IA avançada para otimização.',
      keywords: 'equipe, experiência, mercados financeiros, gestão de risco, IA, otimização'
    }
  }
};

export const SEOHead = ({ language, page = 'home' }: SEOHeadProps) => {
  const content = seoContent[language][page];

  useEffect(() => {
    // Update title
    document.title = content.title;

    // Update or create meta tags
    updateMetaTag('description', content.description);
    updateMetaTag('keywords', content.keywords);
    
    // Open Graph tags
    updateMetaTag('og:title', content.title, 'property');
    updateMetaTag('og:description', content.description, 'property');
    updateMetaTag('og:type', 'website', 'property');
    updateMetaTag('og:site_name', 'ORA IA', 'property');
    updateMetaTag('og:locale', getOGLocale(language), 'property');
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', content.title);
    updateMetaTag('twitter:description', content.description);
    
    // Additional SEO tags
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('author', 'ORA IA Team');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    
    // Language and locale
    document.documentElement.lang = language;
    updateMetaTag('language', language);
    
  }, [language, page, content]);

  return null;
};

function updateMetaTag(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
  
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, name);
    document.head.appendChild(meta);
  }
  
  meta.content = content;
}

function getOGLocale(language: Language): string {
  const localeMap = {
    es: 'es_ES',
    en: 'en_US',
    fr: 'fr_FR',
    pt: 'pt_BR'
  };
  return localeMap[language];
}
