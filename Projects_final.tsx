"use client";

import { useState, useEffect } from "react";
import { en } from "@/dictionaries/en";
import { projectsData } from "@/data";

type Filter = "all" | "web" | "mobile";

// Détails des projets
const projectDetails: Record<string, {
  problem?: string;
  role?: string;
  solution?: string;
  features?: string[];
  architecture?: string;
  challenges?: string;
  results?: string;
  perspectives?: string;
}> = {
  farcal: {
    problem: "Absence d'un outil fiable pour estimer les tarifs de taxi dans la ville de Yaoundé, source de conflits entre chauffeurs et passagers.",
    role: "Développeuse Frontend Mobile (Projet Académique — ENSPY).",
    solution: "Application mobile multiplateforme permettant de calculer le tarif exact d'un trajet selon la zone et le type de véhicule.",
    features: ["Calcul de tarif par zone", "Interface intuitive mobile-first", "Support multiplateforme iOS & Android", "Design adapté aux usagers de Yaoundé"],
    architecture: "React Native + Expo pour le développement multiplateforme.",
    challenges: "Modéliser fidèlement le système tarifaire local complexe de Yaoundé.",
    results: "Application déployée et accessible sur farcal-dev.yowyob.com.",
    perspectives: "Intégration GPS et calcul de tarif en temps réel.",
  },
  caas: {
    problem: "Les plateformes qui souhaitent intégrer un module de messagerie doivent développer leur propre système de chat, coûteux en temps et en ressources.",
    role: "Développeuse Back-End (Projet Personnel).",
    solution: "Système de Chat as a Service multitenant permettant à plusieurs applications d'intégrer un module de messagerie via une API unifiée.",
    features: ["Architecture multitenant", "API REST documentée", "Isolation des données par tenant", "Intégration simplifiée via API"],
    architecture: "Spring Boot avec architecture REST, base de données MySQL.",
    challenges: "Garantir l'isolation complète des données entre les différents tenants.",
    results: "Backend fonctionnel disponible sur GitLab.",
    perspectives: "Ajout WebSocket pour messagerie temps réel.",
  },
  "todo-app": {
    problem: "Besoin d'une application de gestion de tâches complète avec authentification sécurisée.",
    role: "Développeuse Full-Stack (Projet Académique).",
    solution: "Application web de gestion de tâches avec système d'authentification, CRUD complet et interface React.",
    features: ["Authentification JWT", "CRUD des tâches", "Interface React responsive", "API REST Spring Boot"],
    architecture: "React côté frontend, Spring Boot pour l'API REST, MySQL pour la persistance.",
    challenges: "Implémenter correctement la sécurité JWT entre le front et le back.",
    results: "Application fonctionnelle avec code source disponible sur GitHub.",
    perspectives: "Ajout de notifications et partage de tâches entre utilisateurs.",
  },
  "validation-form": {
    problem: "Apprendre et maîtriser la validation de formulaire en JavaScript vanilla sans framework.",
    role: "Développeuse Frontend (Projet Personnel).",
    solution: "Système complet de validation de formulaire avec feedback visuel en temps réel.",
    features: ["Validation en temps réel", "Messages d'erreur personnalisés", "Validation email et mot de passe", "Design responsive"],
    architecture: "JavaScript vanilla, HTML5, CSS3 — sans aucun framework.",
    challenges: "Gérer tous les cas limites de validation sans bibliothèque externe.",
    results: "Projet open source disponible sur GitHub.",
    perspectives: "Extension en composant réutilisable.",
  },
};

const Projects = ({ dictionary }: { dictionary: typeof en }) => {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const [mounted, setMounted] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const activeProjects = projectsData.filter((p) => p.isActive);

  const filtered = activeFilter === "all"
    ? activeProjects
    : activeProjects.filter((p) => {
        const proj = dictionary.projects[p.id as keyof typeof dictionary.projects];
        return proj?.category === activeFilter;
      });

  const filters: { key: Filter; label: string }[] = [
    { key: "all",    label: dictionary.filters.all },
    { key: "web",    label: dictionary.filters.web },
    { key: "mobile", label: dictionary.filters.mobile },
  ];

  const selectedData = selectedProject ? projectDetails[selectedProject] : null;
  const selectedProjectData = projectsData.find(p => p.id === selectedProject);
  const selectedProjText = selectedProject
    ? dictionary.projects[selectedProject as keyof typeof dictionary.projects]
    : null;

  return (
    <section id="projects" className="py-20 bg-light-background dark:bg-dark-background transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-light-text dark:text-dark-text section-title-underline">
            {dictionary.sectionTitles.projects}
          </h2>
        </div>

        {/* Filtres */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {filters.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                activeFilter === key
                  ? "bg-accent text-white border-accent shadow-md"
                  : "bg-transparent text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-accent hover:text-accent"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Grille projets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => {
            const proj = dictionary.projects[project.id as keyof typeof dictionary.projects];
            if (!proj) return null;

            return (
              <div
                key={project.id}
                className="bg-white dark:bg-dark-secondary rounded-2xl overflow-hidden shadow-md card-hover border border-light-border dark:border-dark-border group relative"
              >
                {/* Image */}
                <div className="h-44 relative overflow-hidden">
                  {project.mainImageUrl ? (
                    <img
                      src={project.mainImageUrl}
                      alt={proj.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) fallback.classList.remove("hidden");
                      }}
                    />
                  ) : null}
                  <div className={`${project.mainImageUrl ? "hidden" : ""} absolute inset-0 hero-gradient flex items-center justify-center`}>
                    <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>

                  {/* Overlay hover avec bouton Détails */}
                  {projectDetails[project.id] && (
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button
                        onClick={() => setSelectedProject(project.id)}
                        className="px-5 py-2.5 bg-white text-gray-900 font-bold rounded-full hover:bg-accent hover:text-white transition-colors text-sm"
                      >
                        Détails Techniques
                      </button>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-5">
                  <p className="text-xs font-mono text-accent mb-1">{project.period}</p>
                  <h3 className="font-bold text-light-text dark:text-dark-text mb-2">{proj.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{proj.shortDescription}</p>

                  {/* Tags tech */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs bg-blue-50 dark:bg-accent/10 text-accent px-2 py-1 rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Liens */}
                  <div className="flex gap-2 flex-wrap">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                        className="text-xs px-3 py-1.5 bg-accent text-white rounded-full hover:bg-accent-light transition-colors flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Demo
                      </a>
                    )}
                    {project.repoUrl && (
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"
                        className="text-xs px-3 py-1.5 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Code
                      </a>
                    )}
                    {project.figmaUrl && (
                      <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer"
                        className="text-xs px-3 py-1.5 bg-[#F24E1E] text-white rounded-full hover:bg-[#d43c0f] transition-colors flex items-center gap-1">
                        Figma
                      </a>
                    )}
                    {projectDetails[project.id] && (
                      <button
                        onClick={() => setSelectedProject(project.id)}
                        className="text-xs px-3 py-1.5 border border-accent text-accent rounded-full hover:bg-accent hover:text-white transition-colors"
                      >
                        Détails
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL DÉTAILS */}
      {selectedProject && selectedData && selectedProjText && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-dark-secondary rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header modal */}
            <div className="sticky top-0 bg-white dark:bg-dark-secondary p-6 border-b border-light-border dark:border-dark-border flex justify-between items-start z-10">
              <div>
                <p className="text-xs font-mono text-accent uppercase tracking-widest mb-1">
                  {selectedProjectData?.category}
                </p>
                <h3 className="text-xl font-bold text-light-text dark:text-dark-text">
                  {selectedProjText.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors ml-4"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Contenu modal */}
            <div className="p-6 grid md:grid-cols-2 gap-8">

              {/* Colonne gauche */}
              <div className="space-y-6">
                {selectedData.problem && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Problème</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{selectedData.problem}</p>
                  </div>
                )}
                {selectedData.role && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Mon Rôle</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{selectedData.role}</p>
                  </div>
                )}
                {selectedData.architecture && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Architecture</h4>
                    <div className="bg-gray-900 rounded-lg p-4">
                      <code className="text-xs text-green-400 font-mono leading-relaxed whitespace-pre-wrap">
                        {selectedData.architecture}
                      </code>
                    </div>
                  </div>
                )}
              </div>

              {/* Colonne droite */}
              <div className="space-y-6">
                {selectedData.solution && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Solution</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{selectedData.solution}</p>
                  </div>
                )}
                {selectedData.features && selectedData.features.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Fonctionnalités</h4>
                    <ul className="space-y-1">
                      {selectedData.features.map((f, i) => (
                        <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                          <span className="text-accent mt-0.5">▹</span>{f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Footer modal */}
            {(selectedData.results || selectedData.challenges || selectedData.perspectives) && (
              <div className="px-6 pb-6 grid md:grid-cols-3 gap-6 border-t border-light-border dark:border-dark-border pt-6">
                {selectedData.results && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Résultats</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold">{selectedData.results}</p>
                  </div>
                )}
                {selectedData.challenges && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Challenges</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold">{selectedData.challenges}</p>
                  </div>
                )}
                {selectedData.perspectives && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Perspectives</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold">{selectedData.perspectives}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
