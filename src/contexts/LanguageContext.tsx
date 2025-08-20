import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language, useTranslation } from '@/lib/i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = 'ora-ia-language';
const LANGUAGE_COOKIE_NAME = 'NEXT_LOCALE';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('es');
  const { t } = useTranslation(language);

  // Initialize language from localStorage or browser preference
  useEffect(() => {
    const initializeLanguage = () => {
      // Check localStorage first
      const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language;
      if (storedLanguage && ['es', 'en', 'fr', 'pt'].includes(storedLanguage)) {
        setLanguageState(storedLanguage);
        return;
      }

      // Check cookie
      const cookieLanguage = getCookie(LANGUAGE_COOKIE_NAME) as Language;
      if (cookieLanguage && ['es', 'en', 'fr', 'pt'].includes(cookieLanguage)) {
        setLanguageState(cookieLanguage);
        return;
      }

      // Check browser language
      const browserLanguage = navigator.language.split('-')[0] as Language;
      if (['es', 'en', 'fr', 'pt'].includes(browserLanguage)) {
        setLanguageState(browserLanguage);
        return;
      }

      // Default to Spanish
      setLanguageState('es');
    };

    initializeLanguage();
  }, []);

  // Update document language and persist when language changes
  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    setCookie(LANGUAGE_COOKIE_NAME, language, 365);
  }, [language]);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Helper functions for cookie management
function setCookie(name: string, value: string, days: number) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}

function getCookie(name: string): string | null {
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
