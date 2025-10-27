// src/app/page.tsx
'use client';

import { en } from '@/dictionaries/en'; 
import { fr } from '@/dictionaries/fr';
import { useLanguage } from '@/hooks/useLanguage';
import Hero from '@/sections/Hero';

// Ce n'est plus un composant async
export default function Home() {
  // On utilise le hook pour obtenir la langue actuelle
  const { locale } = useLanguage();
  const dictionary = locale === 'fr' ? fr : en;

  return (
    <main>
     
      <Hero dictionary={dictionary} />

    </main>
  );
}