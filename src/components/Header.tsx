// src/components/Header.tsx
"use client";
import Link from 'next/link';
import { useLanguage } from '@/hooks/useLanguage';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  const { locale } = useLanguage();
  const navLinks = locale === 'fr' 
    ? { home: 'Accueil', projects: 'Projets', contact: 'Contact' }
    : { home: 'Home', projects: 'Projects', contact: 'Contact' };

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow-md z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
          Gabriel Nomo
        </Link>
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
            {navLinks.projects}
          </Link>
          <Link href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
            {navLinks.contact}
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
};

export default Header;