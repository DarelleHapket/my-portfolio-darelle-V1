// src/dictionaries/fr.ts

export const fr = {
  common: {
    topbar: "Portfolio v1.0 — Développeuse Full-Stack & Data Analytics",
  },

  nav: {
    home: "Accueil",
    about: "À propos",
    skills: "Compétences",
    projects: "Projets",
    contact: "Contact",
  },

  hero: {
    title: "DARELLE HAPKET",
    subtitle: "Développeuse Full-Stack & Data Analytics",
    tagline: "Je construis des produits numériques complets en combinant une logique back-end solide, des interfaces modernes et une lecture fine des données.",
    cta_projects: "Voir mes projets",
    cta_contact: "Me contacter",
  },

  sectionTitles: {
    about: "À propos de moi",
    skills: "Mes Compétences",
    experience: "Expérience Professionnelle",
    projects: "Mes Projets",
    certifications: "Certifications",
    leadership: "Vie Associative & Engagement",
    education: "Formation",
    contact: "Me Contacter",
  },

  about: {
  heading: "Développeuse Full-Stack & Data Analytics",
  paragraph1: "Élève Ingénieure en 5e année à l'ENSPY, je prépare mon Diplôme d'Ingénieure de Conception en Génie Informatique avec une spécialisation en développement Full-Stack et analyse de données. Mon approche privilégie la qualité du code, l'expérience utilisateur et les bonnes pratiques de développement.",
  paragraph2: "Habituée aux environnements compétitifs et aux délais serrés, je construis des solutions robustes, maintenables et orientées vers un impact concret.",
  stats: {
    projects: "Projets réalisés",
    hackathons: "Hackathons",
    experience: "Années d'expérience",
  },
},

  skills: {
    backend: "Back-End",
    frontend: "Front-End",
    ai_data: "Data & Analyse",
    databases: "Bases de Données",
    tools_methods: "Outils & Méthodes",
  },

  experience: {
    irex: {
      title: "Stagiaire DevOps",
      company: "Irex",
      location: "Yaoundé, Cameroun",
      description: "Déploiement de conteneurs Docker, administration système sous Rocky Linux et automatisation via scripts Bash. Initiation aux pipelines CI/CD.",
      points: [
        "Déploiement et gestion de conteneurs Docker pour l'isolation des environnements de développement.",
        "Administration système sous Rocky Linux : installation, configuration et mises à jour.",
        "Rédaction de scripts Bash pour automatiser les backups, le déploiement et le nettoyage de logs.",
        "Initiation aux pipelines CI/CD : intégration et livraison continues.",
      ],
    },
  },

  projects: {
    farcal: {
      title: "FARCAL — Calcul de Tarifs Taxi",
      shortDescription: "Application mobile de calcul de tarifs de taxi adaptée à la ville de Yaoundé.",
      category: "mobile",
    },
    caas: {
      title: "CaaS — Chat as a Service",
      shortDescription: "Système de chat multitenant permettant à plusieurs plateformes d'intégrer un module de messagerie via API.",
      category: "web",
    },
    "todo-app": {
      title: "TodoApp Full-Stack",
      shortDescription: "Application de gestion de tâches avec authentification complète.",
      category: "web",
    },
    "easy-rent": {
      title: "EasyRent",
      shortDescription: "Application mobile de gestion de location de véhicules.",
      category: "mobile",
    },
    "validation-form": {
      title: "Validation de Formulaire",
      shortDescription: "Système complet de validation avec JavaScript vanilla.",
      category: "web",
    },
    portfolio: {
      title: "Portfolio",
      shortDescription: "Site portfolio responsive avec animations et dark mode.",
      category: "web",
    },
  },

  certifications: {
    "intro-ai": {
      title: "Introduction à l'Intelligence Artificielle",
      institution: "Coursera",
    },
    "django-rest": {
      title: "Django REST Framework",
      institution: "Coursera",
    },
  },

  leadership: {
    "club-gi": {
      role: "Membre Active — Club Génie Informatique",
      organization: "ENSPY — Polytechnique",
      descriptionPoints: [
        "Participation aux ateliers et aux projets collaboratifs au sein du club GI",
      ],
    },
    "hackverse-2025": {
      role: "Participante — HackVerse 2025",
      organization: "ENSPY",
      descriptionPoints: [
        "Solution complète conçue et développée en équipe sous 24h. 2ème prix remporté parmi plusieurs équipes participantes.",
      ],
    },
   "hackverse-ia": {
  role: "Participante — HackVerse IA",
  organization: "Zindi",
  descriptionPoints: [
    "Challenge Data Science & IA : analyse de données, modélisation et soumission de solution en Machine Learning. 2ème place remportée.",
  ],
},
  },

  education: {
    enspy: {
      degree: "Diplôme d'Ingénieure en Génie Informatique",
      institution: "École Nationale Supérieure Polytechnique de Yaoundé (ENSPY)",
      details: "Spécialisation développement logiciel & Intelligence Artificielle",
      status: "En cours — 5e année",
    },
    uy1: {
      degree: "Licence en Informatique",
      institution: "Université de Yaoundé I",
      details: "",
      status: "Diplômée en 2023",
    },
  },

  contact: {
    invitation: "Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter. Je serais ravie de vous accompagner dans la réalisation de vos idées.",
    email: "darellehapket@gmail.com",
    phone: "+237 655 271 306",
    location: "Yaoundé, Cameroun",
    button: "Envoyer un message",
    form: {
      name: "Nom complet",
      email: "Email",
      subject: "Sujet",
      message: "Message",
      send: "Envoyer le message",
      sending: "Envoi en cours...",
      success: "Message envoyé avec succès !",
    },
  },

  footer: {
    description: "Développeuse Full-Stack & Data Analytics, je construis des produits numériques durables.",
    builtWith: "Conçu avec Next.js & Tailwind CSS",
    copyright: "Tous droits réservés.",
    backToTop: "Retour en haut",
  },

  filters: {
    all: "Tous",
    web: "Web App",
    mobile: "Mobile",
    data: "Data",
  },
};
