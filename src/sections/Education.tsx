// src/sections/Education.tsx
"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import { educationData } from "@/data";
import { en } from '@/dictionaries/en';
import { useLanguage } from "@/hooks/useLanguage";

const Education = ({ dictionary }: { dictionary: typeof en }) => {

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <SectionTitle>{dictionary.sectionTitles.education}</SectionTitle>

        <div className="relative max-w-2xl mx-auto pl-8 border-l-2 border-light-border dark:border-dark-border">
          
          {educationData.map((edu, index) => {
            // On récupère le texte correspondant à l'ID de la formation
            const eduText = dictionary.education[edu.id as keyof typeof dictionary.education];
            
            return (
              <div key={edu.id} className={`mb-12 ${index === educationData.length - 1 ? 'pb-0' : 'pb-8'}`}>
                {/* Point sur la timeline */}
                <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] mt-1"></div>

                {/* Contenu de la carte de formation */}
                <div className="relative">
                  <p className="text-sm font-mono text-accent-light dark:text-accent mb-1">
                    {eduText.status}
                  </p>
                  <h3 className="text-xl font-bold text-light-text dark:text-dark-text">
                    {eduText.degree}
                  </h3>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {eduText.institution}
                  </h4>
                  {eduText.details && (
                    <p className="text-gray-600 dark:text-gray-400">
                      {eduText.details}
                    </p>
                  )}
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Education;