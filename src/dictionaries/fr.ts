// src/dictionaries/fr.ts

export const fr = {

  // À ajouter dans l'objet fr
common: {
  topbar: "Version 2.0 — Mise à jour le 22 février 2026",
},
  contact: {
    invitation: "Je suis actuellement à la recherche de nouvelles opportunités. N'hésitez pas à me contacter. Je serai ravi d'échanger avec vous.",
    email: "gabriel.nomo@facsciences-uy1.cm",
    button: "Dites Bonjour !",
  },

about: {
  paragraph1: "En fin de formation de mon cycle ingénieur à l'ENSPY, j'oriente mon travail vers le processus de digitalisation du Cameroun. Mon parcours a commencé par les mathématiques, ce qui m'a apporté la rigueur et la logique. Aujourd'hui, je m'en sers pour concevoir des logiciels qui ne sont pas seulement fonctionnels, mais surtout bien organisés et fiables.",
  paragraph2: "S'appuyant sur plus d'une dizaine de projets académiques, personnels et professionnels notamment la plateforme IMA et mon application Pynfi, j'ai appris à gérer un projet du début à la fin : de la compréhension du besoin jusqu'au déploiement. Mon but est de construire des outils simples, sécurisés et utiles, en intégrant l'IA là où elle apporte une vraie valeur. Je cherche toujours à produire un travail propre tout en continuant d'apprendre sur le terrain."
},

  experience: {
    'icorp': {
      title: "Chef de Projet & Développeur Laravel",
      company: "ICORP",
      description: "Conception, pilotage et développement de A à Z de la plateforme IMA, une application de type ERP pour la gestion des prepas concours."
    },
    'cenadi': {
    title: "Stagiaire Développement Logiciel & IA",
    company: "CENADI",
    description: "Conception d'un agent IA spécialisé dans l'optimisation fiscale camerounaise. Intégration d'une architecture full-stack performante associant FastAPI (Backend IA) et Next.js, pour transformer des règles fiscales complexes en un outil d'aide à la décision."
  },
    'decatechs': {
      title: "Stagiaire Développeur Symfony",
      company: "Decatechs",
      description: "Contribution au développement d'un ERP de gestion scolaire, en utilisant le framework Symfony pour implémenter de nouvelles fonctionnalités."
    }
  },

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
  subtitle_1: "Ingénieur de Conception Logiciel & Intelligence Artificielle",
  tagline: "Je transforme vos idées complexes en solutions logicielles scalables et sécurisées. De l'analyse des besoins au déploiement, je conçois des systèmes robustes adaptés aux exigences de production.",
  download_cv: "Télécharger le CV",
  project_link: "Découvrir mes projets",
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
    experience: "Expérience Professionnelle", 
  },

  // Contenu textuel par entité (lié par ID)
  
  skills: {
    backend: "Back-End",
    frontend: "Front-End",
    ai_data: "IA & Data",
    databases: "Bases de Données",
    tools_methods: "Conception, Outils & Méthodes",
  },

  // projects: {
  //   'ima-platform': {
  //     title: "Plateforme IMA (ERP)",
  //     shortDescription: "Conception, pilotage et développement de A à Z d'une application de type ERP pour la gestion des concours.",
  //     longDescription: "...", // On ajoutera plus de détails plus tard si une page dédiée est créée
  //   },
  //   'ai-tax-assistant': {
  //     title: "Assistant Fiscal IA",
  //     shortDescription: "Conception et développement d'un agent IA d'assistance à l'optimisation fiscale (FastAPI & Next.js).",
  //     longDescription: "...",
  //   },
  //   'pynfi': {
  //     title: "Pynfi - Gestion Financière",
  //     shortDescription: "Développement de A à Z d'une application de gestion financière avec visualisation de données.",
  //     longDescription: "...",
  //   },
  //   'blog-website': {
  //     title: "Site Web de Blog (Stage)",
  //     shortDescription: "Création d'un blog d'entreprise complet avec le framework Symfony.",
  //     longDescription: "...",
  //   },
  //   'portfolio-v2': {
  //     title: "Portfolio v2 (Ce site)",
  //     shortDescription: "Refonte de mon portfolio avec une architecture modulaire, typée et multilingue sous Next.js et Tailwind CSS.",
  //     longDescription: "...",
  //   },
  //   'learn-laravel': {
  //     title: "Tutoriel 'Learn Laravel'",
  //     shortDescription: "Un dépôt public pour aider les étudiants à démarrer avec le framework Laravel.",
  //     longDescription: "...",
  //   },
  //   'snake-game': {
  //     title: "Jeu Snake en JavaScript",
  //     shortDescription: "Un projet ludique pour maîtriser les concepts fondamentaux de JavaScript.",
  //     longDescription: "...",
  //   },
  //   'portfolio-v1': {
  //     title: "Portfolio v1",
  //     shortDescription: "Première version de mon portfolio développée avec Next.js et TypeScript.",
  //     longDescription: "...",
  //   },
  // },

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
  projects: {
  // --- TOP 3 PHARE ---
  'pynfi': {
    title: "Pynfi — SaaS de Gestion Financière",
    shortDescription: "Application sécurisée de suivi budgétaire en production.",
    problem: "La difficulté pour les particuliers de centraliser et d'analyser leurs flux financiers de manière privée.",
    role: "Concepteur et Développeur Full-Stack (Projet Personnel).",
    solution: "Plateforme SaaS permettant une gestion granulaire des revenus et dépenses avec tableaux de bord interactifs.",
    features: ["Suivi par catégories", "Graphiques dynamiques", "Gestion multi-budgets", "Protection des données"],
    architecture: "Architecture monolithique Laravel 11 utilisant le Pattern Repository.",
    challenges: "Optimisation des calculs d'agrégation pour maintenir la fluidité des graphiques.",
    results: "Produit déployé et utilisé sur pynfi.com.",
    perspectives: "Intégration d'IA pour la catégorisation automatique."
  },
  'ima-platform': {
    title: "Plateforme IMA (ERP)",
    shortDescription: "ERP complet pour la gestion d'un centre de préparation aux concours.",
    problem: "Gestion manuelle lourde des inscriptions et des paiements pour plus d'un millier d'étudiants.",
    role: "Lead Developer & Chef de Projet (Équipe de 3).",
    solution: "Système centralisé gérant tout le cycle administratif et financier du centre.",
    features: ["Inscriptions automatisées", "Suivi des paiements", "Gestion des accès", "Reporting financier"],
    architecture: "Stack Laravel & MySQL conçue pour la fiabilité transactionnelle.",
    challenges: "Garantir la stabilité pour supporter plus de 1 200 utilisateurs actifs.",
    results: "Système industrialisé et livré avec succès à ICORP.",
    perspectives: "Développement d'un module de e-learning intégré."
  },
  'transens': {
    title: "Écosystème TranSens",
    shortDescription: "Solution de transport multimodal via microservices.",
    problem: "Manque de coordination temps réel dans les réseaux de transport urbain.",
    role: "Chef de Projet & Lead Developer.",
    solution: "Écosystème Web/Mobile permettant le suivi et la gestion du transport multimodal.",
    features: ["Streaming Kafka", "Géolocalisation PostGIS", "App Mobile Chauffeur", "Dashboard Superviseur"],
    architecture: "Microservices : Spring Boot (WebFlux), Kafka, Redis, PostgreSQL.",
    challenges: "Gestion de la communication asynchrone entre services critiques.",
    results: "Prototype validé avec démo fonctionnelle complète.",
    perspectives: "Passage à une architecture Smart City à plus grande échelle."
  },

  // --- AUTRES PROJETS (Version Simplifiée) ---
  'ai-tax-assistant': {
    title: "Assistant Fiscal IA",
    shortDescription: "Agent IA d'aide à l'optimisation fiscale (FastAPI & Next.js).",
    problem: "Complexité des règles fiscales pour les entreprises locales.",
    solution: "Interface conversationnelle connectée à une base de connaissances fiscales.",
    features: ["Traitement NLP", "Analyse documentaire", "Dashboard utilisateur"]
  },
  'blog-website': {
    title: "Blog d'Entreprise",
    shortDescription: "Plateforme de contenu dynamique développée sous Symfony.",
    solution: "Architecture MVC permettant une gestion fluide des articles et commentaires."
  },
  'learn-laravel': {
    title: "Tutoriel Learn Laravel",
    shortDescription: "Ressource open-source pour l'apprentissage du framework.",
    solution: "Dépôt structuré couvrant les concepts fondamentaux de Laravel."
  },
  'snake-game': {
    title: "Jeu Snake JS",
    shortDescription: "Projet ludique pour maîtriser JavaScript Vanilla et le DOM.",
    solution: "Logique algorithmique pure sans framework."
  },
  'portfolio-v2': {
    title: "Portfolio v2.0",
    shortDescription: "Ce site : vitrine d'ingénierie multilingue sous Next.js.",
    solution: "Architecture modulaire et typée avec gestion poussée de l'i18n."
  },
  'portfolio-v1': {
    title: "Portfolio v1.0",
    shortDescription: "Première itération du portfolio en Next.js.",
    solution: "Version initiale centrée sur la présentation des compétences de base."
  }
},
};