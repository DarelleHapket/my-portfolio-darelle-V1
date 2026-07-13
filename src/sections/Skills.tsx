"use client";

import { en } from "@/dictionaries/en";
import { skillsData } from "@/data";
import SkillBar from "@/components/ui/SkillBar";

const categories = [
  { key: "backend",       data: skillsData.backend },
  { key: "frontend",      data: skillsData.frontend },
  { key: "ai_data",       data: skillsData.ai_data },
  { key: "databases",     data: skillsData.databases },
  { key: "tools_methods", data: skillsData.tools_methods },
];

const Skills = ({ dictionary }: { dictionary: typeof en }) => {
  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-dark-secondary transition-colors duration-300"
    >
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-light-text dark:text-dark-text section-title-underline">
            {dictionary.sectionTitles.skills}
          </h2>
        </div>

        {/* Grille des catégories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.key}
              className="bg-light-background dark:bg-dark-background rounded-2xl p-6 shadow-md card-hover border border-light-border dark:border-dark-border"
            >
              {/* En-tête */}
              <h3 className="text-lg font-bold text-accent mb-6 flex items-center gap-2">
                <span className="w-1 h-5 bg-accent rounded-full inline-block"></span>
                {dictionary.skills[cat.key as keyof typeof dictionary.skills]}
              </h3>

              {/* Barres */}
              <div>
                {cat.data.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                  />
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
