// src/dictionaries/fr.ts

export const fr = {

  // Métadonnées SEO
  metadata: {
    title: "Gabriel Nomo - Développeur Full-Stack",
    description: "Portfolio de Gabriel Nomo, développeur spécialisé en Laravel, Next.js et l'intégration d'IA.",
  },

  // Navigation
  nav: {
    home: "Accueil",
    about: "À propos",
    skills: "Compétences",
    projects: "Projets",
    contact: "Contact",
  },

  // Section Héro
  hero: {
    title: "NOMO BODIANGA GABRIEL",
    subtitle_1: "Développeur Full-Stack",
    subtitle_2: "Spécialiste Laravel",
    subtitle_3: "Spécialiste Next.js",
    tagline: "Je transforme des idées complexes en applications web robustes et évolutives, de l'architecture back-end à l'interface utilisateur.",
    download_cv: "Télécharger le CV",
  },

  // Titres des sections
  sectionTitles: {
    about: "À Propos de Moi",
    skills: "Compétences Techniques",
    projects: "Projets Phares",
    leadership: "Leadership & Engagement",
    education: "Formation",
    certifications: "Certifications",
    contact: "Me Contacter",
  },

  // Contenu textuel par entité (lié par ID)
  
  skills: {
    backend: "Back-End",
    frontend: "Front-End",
    ai_data: "IA & Data",
    databases: "Bases de Données",
    tools_methods: "Conception, Outils & Méthodes",
  },

  projects: {
    'ima-platform': {
      title: "Plateforme IMA (ERP)",
      shortDescription: "Conception, pilotage et développement de A à Z d'une application de type ERP pour la gestion des concours.",
      longDescription: "...", // On ajoutera plus de détails plus tard si une page dédiée est créée
    },
    'ai-tax-assistant': {
      title: "Assistant Fiscal IA",
      shortDescription: "Conception et développement d'un agent IA d'assistance à l'optimisation fiscale (FastAPI & Next.js).",
      longDescription: "...",
    },
    'pynfi': {
      title: "Pynfi - Gestion Financière",
      shortDescription: "Développement de A à Z d'une application de gestion financière avec visualisation de données.",
      longDescription: "...",
    },
    'blog-website': {
      title: "Site Web de Blog (Stage)",
      shortDescription: "Création d'un blog d'entreprise complet avec le framework Symfony.",
      longDescription: "...",
    },
    'portfolio-v2': {
      title: "Portfolio v2 (Ce site)",
      shortDescription: "Refonte de mon portfolio avec une architecture modulaire, typée et multilingue sous Next.js et Tailwind CSS.",
      longDescription: "...",
    },
    'learn-laravel': {
      title: "Tutoriel 'Learn Laravel'",
      shortDescription: "Un dépôt public pour aider les étudiants à démarrer avec le framework Laravel.",
      longDescription: "...",
    },
    'snake-game': {
      title: "Jeu Snake en JavaScript",
      shortDescription: "Un projet ludique pour maîtriser les concepts fondamentaux de JavaScript.",
      longDescription: "...",
    },
    'portfolio-v1': {
      title: "Portfolio v1",
      shortDescription: "Première version de mon portfolio développée avec Next.js et TypeScript.",
      longDescription: "...",
    },
  },

  leadership: {
    'club-gi': {
      role: "Président du Club Génie Informatique",
      organization: "ENSPY",
      descriptionPoints: [
        "Mentorat d'une équipe de 24 membres sur des projets concrets pour la maîtrise de technologies clés (Laravel, React, Spring Boot, etc.).",
        "Organisation d'ateliers et d'un hackathon (+60 étudiants) pour accélérer la montée en compétence et l'insertion professionnelle des cadets.",
      ],
    },
  },

  education: {
    'engineering-degree': {
      degree: "Diplôme d'Ingénieur en Génie Informatique",
      institution: "École Nationale Supérieure Polytechnique de Yaoundé (ENSPY)",
      details: "Spécialisation en développement logiciel et intelligence artificielle.",
      status: "En cours - 5e année",
    },
    'bachelor-maths': {
      degree: "Licence en Mathématiques",
      institution: "Université de Yaoundé I",
      details: "",
      status: "Obtenu en 2023",
    },
  },

  certifications: {
    'java-epfl': {
      title: "Introduction à la programmation orientée objet (en Java)",
      institution: "École Polytechnique Fédérale de Lausanne",
    },
    'web-dev-ucdavis': {
      title: "Introduction to Web Development",
      institution: "University of California, Davis",
    },
    'c-dartmouth': {
      title: "C Programming: Getting Started - 1",
      institution: "Dartmouth College",
    },
  },
};