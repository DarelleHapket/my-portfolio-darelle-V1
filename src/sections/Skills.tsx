// src/sections/Skills.tsx
"use client";

import { useEffect, useState } from 'react';
import SkillTag from "@/components/ui/SkillTag";
import { skillsData } from "@/data";
import { en } from '@/dictionaries/en';

const Skills = ({ dictionary }: { dictionary: typeof en }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Ordre d'affichage des catégories
  const categories = [
    { key: 'backend', data: skillsData.backend },
    { key: 'databases', data: skillsData.databases },
    { key: 'frontend', data: skillsData.frontend },
    { key: 'ai_data', data: skillsData.ai_data },
    { key: 'tools_methods', data: skillsData.tools_methods },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-background transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 text-center text-light-text dark:text-dark-text tracking-tight">
          {dictionary.sectionTitles.skills}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-10">
          {categories.map((cat) => (
            <div key={cat.key} className="flex flex-col">
              {/* En-tête de catégorie */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-6 bg-accent rounded-full"></div>
                <h3 className="text-sm font-black text-gray-900 dark:text-gray-100 uppercase tracking-[0.2em]">
                  {dictionary.skills[cat.key as keyof typeof dictionary.skills]}
                </h3>
              </div>

              {/* Grille de tags */}
              <div className="flex flex-wrap gap-2">
                {cat.data.map((skill) => (
                  <SkillTag key={skill.name} name={skill.name} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;