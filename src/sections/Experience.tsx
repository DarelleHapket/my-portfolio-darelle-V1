"use client";

import { useEffect, useState } from "react";
import { en } from "@/dictionaries/en";
import { experienceData } from "@/data";

const Experience = ({ dictionary }: { dictionary: typeof en }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <section id="experience" className="py-20 bg-light-secondary dark:bg-dark-secondary transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl">

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-light-text dark:text-dark-text section-title-underline">
            {dictionary.sectionTitles.experience}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto relative pl-8 border-l-2 border-accent/30">
          {experienceData.map((exp) => {
            const expText = dictionary.experience[exp.id as keyof typeof dictionary.experience];
            return (
              <div key={exp.id} className="mb-12 relative">
                {/* Point timeline */}
                <div className="absolute w-4 h-4 bg-accent rounded-full -left-[41px] mt-1.5 border-4 border-light-secondary dark:border-dark-secondary"></div>

                <p className="text-sm font-mono text-accent mb-1 font-semibold italic">{exp.period}</p>
                <h3 className="text-xl font-bold text-light-text dark:text-dark-text">{expText.title}</h3>
                <h4 className="font-semibold text-gray-600 dark:text-gray-300 mb-1">{expText.company}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {expText.location}
                </p>

                <ul className="space-y-2">
                  {expText.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm">
                      <span className="text-accent mt-1 flex-shrink-0">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
