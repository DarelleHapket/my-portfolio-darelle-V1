// src/sections/Skills.tsx
"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import SkillTag from "@/components/ui/SkillTag";
import { skillsData } from "@/data";
import { en } from '@/dictionaries/en';
import { useLanguage } from "@/hooks/useLanguage";

const Skills = ({ dictionary }: { dictionary: typeof en }) => {
  
  // Object.keys(skillsData) retourne ['backend', 'frontend', 'ai_data', ...]
  // Ce sont les clés que nous allons utiliser pour chercher les titres traduits.
  const categories = Object.keys(skillsData) as Array<keyof typeof dictionary.skills>;

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <SectionTitle>{dictionary.sectionTitles.skills}</SectionTitle>
        
        <div className="space-y-12">
          {categories.map((categoryKey) => (
            <div key={categoryKey}>
              {/* Titre de la catégorie, ex: "Back-End" */}
              <h3 className="text-xl font-semibold mb-6 text-gray-700 dark:text-gray-300 border-b-2 border-accent/20 pb-2">
                {dictionary.skills[categoryKey]}
              </h3>
              {/* Grille des tags de compétences */}
              <div className="flex flex-wrap gap-3">
                {skillsData[categoryKey].map((skill) => (
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