// src/sections/Hero.tsx
"use client";

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { en } from '@/dictionaries/en';
import Link from 'next/link';

interface HeroProps {
  dictionary: typeof en;
}

const Hero = ({ dictionary }: HeroProps) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        dictionary.hero.subtitle_1,
        dictionary.hero.subtitle_2,
        dictionary.hero.subtitle_3,
      ],
      typeSpeed: 100,
      backSpeed: 60,
      backDelay: 1000,
      loop: true,
    });
    return () => typed.destroy();
  }, [dictionary]);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-light-text dark:text-dark-text mb-4">
          {dictionary.hero.title}
        </h1>
        <h2 className="text-2xl md:text-4xl font-mono text-accent-light dark:text-accent mb-6">
          <span ref={el}></span>
        </h2>
        <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-300 mb-8">
          {dictionary.hero.tagline}
        </p>
        <Link 
          href={dictionary === en ? "/CV_GABRIEL_NOMO_EN.pdf" : "/CV_GABRIEL_NOMO_FR.pdf"} 
          download
          className="inline-block px-8 py-3 bg-accent-light dark:bg-accent text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition-transform duration-300 hover:scale-105"
        >
          {dictionary.hero.download_cv}
        </Link>
      </div>
    </section>
  );
};

export default Hero;