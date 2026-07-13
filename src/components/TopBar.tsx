"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { useEffect, useState } from "react";
import { fr } from "@/dictionaries/fr";
import { en } from "@/dictionaries/en";

const TopBar = () => {
  const { locale } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const dict = locale === "fr" ? fr : en;

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) {
    return <div className="w-full h-[33px] bg-light-background dark:bg-dark-background border-b border-light-border dark:border-dark-border" />;
  }

  return (
    <div className="w-full bg-light-background dark:bg-dark-background border-b border-light-border dark:border-dark-border py-1.5 transition-colors duration-300">
      <div className="container mx-auto px-6 text-[10px] md:text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 flex justify-between items-center max-w-6xl">
        <span>{dict.common.topbar}</span>
        <span className="hidden md:inline-block text-accent font-bold">● Open to opportunities</span>
      </div>
    </div>
  );
};

export default TopBar;
