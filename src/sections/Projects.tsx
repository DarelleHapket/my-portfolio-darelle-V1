// src/sections/Projects.tsx
"use client";

import { useState } from 'react';
import SectionTitle from "@/components/ui/SectionTitle";
import { projectsData } from "@/data";
import { en } from '@/dictionaries/en';
import { fr } from '@/dictionaries/fr';
import { useLanguage } from "@/hooks/useLanguage";
import Image from 'next/image';
import Link from 'next/link';
import { ProjectCategory } from '@/types';

// Bouton de filtre réutilisable
const FilterButton = ({ label, active, onClick }: { label: string; active: boolean; onClick: () => void; }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
      active
        ? 'bg-accent-light dark:bg-accent text-white'
        : 'bg-light-secondary dark:bg-dark-secondary text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
    }`}
  >
    {label}
  </button>
);

const Projects = () => {
  const { locale } = useLanguage();
  const dictionary = locale === 'fr' ? fr : en;

  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'all'>('all');

  const categories: (ProjectCategory | 'all')[] = ['all', 'professional', 'personal', 'academic', 'freelance'];

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);
  
  const categoryTranslations: Record<ProjectCategory | 'all', string> = locale === 'fr' 
    ? { all: 'Tous', professional: 'Professionnels', personal: 'Personnels', academic: 'Académiques', freelance: 'Freelance' }
    : { all: 'All', professional: 'Professional', personal: 'Personal', academic: 'Academic', freelance: 'Freelance' };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <SectionTitle>{dictionary.sectionTitles.projects}</SectionTitle>

        {/* Barre de Filtre */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map(cat => (
            <FilterButton
              key={cat}
              label={categoryTranslations[cat]}
              active={activeFilter === cat}
              onClick={() => setActiveFilter(cat)}
            />
          ))}
        </div>

        {/* Grille des Projets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const projectText = dictionary.projects[project.id as keyof typeof dictionary.projects];
            const isVideo = project.mainImageUrl.endsWith('.mp4') || project.mainImageUrl.endsWith('.webm');
            const isGif = project.mainImageUrl.endsWith('.gif'); 
            return (
              <div key={project.id} className="bg-light-secondary dark:bg-dark-secondary rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:-translate-y-2">
                <div className="relative h-48 w-full">
                  {isVideo ? (
                    <video
                      src={project.mainImageUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : isGif ? (
                    
                    <img 
                      src={project.mainImageUrl}
                      alt={projectText.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Image 
                      src={project.mainImageUrl} 
                      alt={projectText.title} 
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold mb-2 text-light-text dark:text-dark-text">{projectText.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">{projectText.shortDescription}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map(tech => (
                      <span key={tech} className="bg-accent/10 text-accent-light dark:text-accent text-xs font-semibold px-2 py-1 rounded-full">{tech}</span>
                    ))}
                  </div>

                  <div className="mt-auto flex justify-end gap-4 pt-4 border-t border-light-border dark:border-dark-border">
                    {project.repoUrl && 
                      <Link href={project.repoUrl} target="_blank" className="text-gray-500 hover:text-accent transition-colors">
                        Code
                      </Link>}
                    {project.liveUrl && 
                      <Link href={project.liveUrl} target="_blank" className="text-accent-light dark:text-accent font-semibold hover:underline">
                        Voir le site
                      </Link>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;