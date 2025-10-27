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
    <button
      onClick={handleLanguageChange}
      className="group relative px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-all duration-200 rounded-lg hover:bg-gray-100 dark:hover:bg-[#2a2438]"
      aria-label="Change language"
    >
      {/* Badge visuel pour la langue */}
      <span className="flex items-center gap-2">
        {/* Icône Globe */}
        <svg 
          className="w-4 h-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" 
          />
        </svg>
        
        {/* Code de la langue */}
        <span className="font-mono font-semibold">
          {locale.toUpperCase()}
        </span>
      </span>

      {/* Indicateur de hover */}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-orange-600 dark:bg-orange-500 group-hover:w-3/4 transition-all duration-300"></span>
    </button>
  );
};

export default LanguageSwitcher;