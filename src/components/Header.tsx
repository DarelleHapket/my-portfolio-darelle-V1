"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { locale } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks =
    locale === "fr"
      ? [
          { href: "#skills", label: "Compétences" },
          { href: "#projects", label: "Projets" },
          { href: "#experience", label: "Expérience" },
          { href: "#contact", label: "Contact" },
        ]
      : [
          { href: "#skills", label: "Skills" },
          { href: "#projects", label: "Projects" },
          { href: "#experience", label: "Experience" },
          { href: "#contact", label: "Contact" },
        ];

  return (
    <header
      className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-dark-background/90 backdrop-blur-md shadow-sm border-b border-light-border dark:border-dark-border"
          : "bg-white dark:bg-dark-background"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center h-16 max-w-6xl">
        {/* Branding */}
        <Link
          href="#home"
          className="text-xl font-bold tracking-tighter text-light-text dark:text-dark-text hover:text-accent transition-colors"
        >
          DARELLE <span className="text-accent">HAPKET</span> MAOUCHCA
        </Link>

        {/* Navigation Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {mounted &&
            navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 transition-colors hover:text-accent dark:hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-gray-200 dark:border-gray-700">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </div>

        {/* Mobile */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeSwitcher />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-600 dark:text-gray-300"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      {isMobileMenuOpen && mounted && (
        <div className="md:hidden border-t border-light-border dark:border-dark-border bg-white dark:bg-dark-background">
          <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-accent transition-colors"
              >
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
