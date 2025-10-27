// src/sections/Hero.tsx
"use client"; // Important, car il utilise des hooks React (useEffect, useRef)

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { en } from '@/dictionaries/en'; // On importe un type pour notre dictionnaire

// On définit les "props" que notre composant va recevoir
interface HeroProps {
  dictionary: typeof en;
}

const Hero = ({ dictionary }: HeroProps) => {
  const el = useRef(null);

  useEffect(() => {
    if (!el.current) return; // Sécurité pour s'assurer que l'élément existe

    const typed = new Typed(el.current, {
      strings: [
        dictionary.hero.subtitle_1,
        dictionary.hero.subtitle_2,
        dictionary.hero.subtitle_3,
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    // Nettoyage à la destruction du composant
    return () => {
      typed.destroy();
    };
  }, [dictionary]); // L'effet se relance si la langue (et donc le dictionnaire) change

  return (
    <section id="home">
      <div>
        <h1>{dictionary.hero.title}</h1>
        <h2><span ref={el}></span></h2>
        <p>{dictionary.hero.tagline}</p>
        
        {/* On gère les deux CVs en fonction de la langue */}
        <a 
          href={dictionary === en ? "/CV_NOMO_GABRIEL_EN.pdf" : "/CV_NOMO_GABRIEL_FR.pdf"} 
          download
        >
          {dictionary.hero.download_cv}
        </a>
      </div>
    </section>
  );
};

export default Hero;