// src/sections/Education.tsx
"use client";
import { useEffect, useState } from "react";
import { educationData } from "@/data";
import { en } from "@/dictionaries/en";

const Education = ({ dictionary }: { dictionary: typeof en }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <section id="education" className="py-20 bg-white dark:bg-dark-background transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-light-text dark:text-dark-text section-title-underline">
            {dictionary.sectionTitles.education}
          </h2>
        </div>
        <div className="relative max-w-2xl mx-auto pl-8 border-l-2 border-accent/30">
          {educationData.map((edu, index) => {
            const eduText = dictionary.education[edu.id as keyof typeof dictionary.education];
            return (
              <div key={edu.id} className={`mb-10 ${index === educationData.length - 1 ? "pb-0" : ""}`}>
                <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] mt-1.5 border-4 border-white dark:border-dark-background"></div>
                <p className="text-sm font-mono text-accent mb-1 font-bold italic">{eduText.status}</p>
                <h3 className="text-lg font-bold text-light-text dark:text-dark-text">{eduText.degree}</h3>
                <h4 className="font-semibold text-gray-600 dark:text-gray-400">{eduText.institution}</h4>
                {eduText.details && <p className="mt-1 text-sm text-gray-500 dark:text-gray-500 italic">{eduText.details}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
