// src/sections/Experience.tsx
import { en } from '@/dictionaries/en';
import { experienceData } from '@/data'; // Nous allons créer ce fichier

interface SectionProps {
  dictionary: typeof en;
}

const Experience = ({ dictionary }: SectionProps) => {
  return (
    <section id="experience" className="py-20 bg-light-secondary dark:bg-dark-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-light-text dark:text-dark-text">
          {dictionary.sectionTitles.experience}
        </h2>
        <div className="relative pl-8 border-l-2 border-light-border dark:border-dark-border">
          {experienceData.map((exp) => {
            const expText = dictionary.experience[exp.id as keyof typeof dictionary.experience];
            return (
              <div key={exp.id} className="mb-12">
                <div className="absolute w-4 h-4 bg-accent rounded-full -left-2 mt-1"></div>
                <p className="text-sm font-mono text-accent-light dark:text-accent mb-1">
                  {exp.period}
                </p>
                <h3 className="text-xl font-bold">{expText.title}</h3>
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">{expText.company}</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {expText.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;