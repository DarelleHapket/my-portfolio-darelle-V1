// src/components/Header.tsx
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/hooks/useLanguage';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { locale } = useLanguage();

  // Liens de navigation traduits
  const navLinks = locale === 'fr'
    ? [
        { href: '#experience', label: 'Expérience' },
        { href: '#projects', label: 'Projets' },
        { href: '#skills', label: 'Compétences' },
        { href: '#contact', label: 'Contact' }
      ]
    : [
        { href: '#experience', label: 'Experience' },
        { href: '#projects', label: 'Projects' },
        { href: '#skills', label: 'Skills' },
        { href: '#contact', label: 'Contact' }
      ];

  // Détection du scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile au clic
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#f8f9fa]/80 dark:bg-[#1a1625]/80 backdrop-blur-md shadow-lg'
          : 'bg-white dark:bg-[#1a1625]'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link
          href="#home"
          className="text-xl font-bold text-gray-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-500 transition-colors"
        >
          Gabriel Nomo
        </Link>

        {/* Navigation Desktop */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors duration-200 font-medium"
            >
              <span className="text-orange-600 dark:text-orange-500 text-sm font-mono mr-1">
                0{index + 1}.
              </span>
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 dark:bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Actions (Language + Theme + Mobile Menu) */}
        <div className="flex items-center space-x-3">
          <LanguageSwitcher />
          <ThemeSwitcher />

          {/* Bouton Menu Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#2a2438] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-[#3d3650] bg-white dark:bg-[#1a1625]">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors font-medium"
              >
                <span className="text-orange-600 dark:text-orange-500 text-sm font-mono mr-2">
                  0{index + 1}.
                </span>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;