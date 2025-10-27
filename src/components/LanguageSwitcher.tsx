// src/components/LanguageSwitcher.tsx
"use client";

import { useLanguage } from '@/hooks/useLanguage';

const LanguageSwitcher = () => {
  const { locale, setLocale } = useLanguage();

  const handleLanguageChange = () => {
    const newLocale = locale === 'fr' ? 'en' : 'fr';
    setLocale(newLocale);
  };

  return (
    <button onClick={handleLanguageChange} style={{ position: 'fixed', top: 10, right: 10, zIndex: 999 }}>
      {locale === 'fr' ? 'Switch to English' : 'Passer en Français'}
    </button>
  );
};

export default LanguageSwitcher;