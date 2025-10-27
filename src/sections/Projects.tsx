// src/sections/Projects.tsx
import { en } from '@/dictionaries/en';
import { projectsData } from '@/data';
import Image from 'next/image';
import Link from 'next/link';

interface SectionProps { dictionary: typeof en; }

const Projects = ({ dictionary }: SectionProps) => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-light-text dark:text-dark-text">
          {dictionary.sectionTitles.projects}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => {
            const projectText = dictionary.projects[project.id as keyof typeof dictionary.projects];
            return (
              <div key={project.id} className="bg-light-secondary dark:bg-dark-secondary rounded-lg shadow-lg overflow-hidden group">
                <div className="relative h-48">
                  <Image src={project.mainImageUrl} alt={projectText.title} layout="fill" objectFit="cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{projectText.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 h-16">{projectText.shortDescription}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map(tech => (
                      <span key={tech} className="bg-accent/10 text-accent-light dark:text-accent text-xs font-semibold px-2 py-1 rounded-full">{tech}</span>
                    ))}
                  </div>
                  <div className="flex justify-end gap-4">
                    {project.repoUrl && <Link href={project.repoUrl} target="_blank" className="text-gray-500 hover:text-accent transition-colors">GitHub</Link>}
                    {project.liveUrl && <Link href={project.liveUrl} target="_blank" className="text-accent-light dark:text-accent font-semibold hover:underline">Voir le site</Link>}
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