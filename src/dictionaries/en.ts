// src/dictionaries/en.ts

export const en = {
  common: {
    topbar: "Version 2.0 — Updated February 22, 2026",
  },
  contact: {
    invitation: "I'm currently looking for new opportunities. My inbox is always open. Whether you have a question or just want to say hi, I'll get back to you!",
    email: "gabriel.nomo@facsciences-uy1.cm",
    button: "Say Hello!",
  },

about: {
  paragraph1: "Completing my engineering degree at ENSPY, I focus my work on the digitalization process of Cameroon. My background started with mathematics, which provided me with rigor and logic. Today, I use these skills to design software that is not only functional but above all well-organized and reliable.",
  paragraph2: "Drawing on over a dozen academic, personal, and professional projects notably the IMA platform and my Pynfi application .I have learned to manage projects from start to finish: from understanding requirements to deployment. My goal is to build simple, secure, and useful tools, integrating AI where it adds real value. I am always striving for clean work while continuing to learn on the ground."
},

  experience: {
    'icorp': {
      title: "Project Manager & Laravel Developer",
      company: "ICORP",
      description: "Led the end-to-end design, management, and development of the IMA platform, an ERP-like application for managing competitive exam preparation."
    },
    'cenadi': {
    title: "Software Development & AI Intern",
    company: "CENADI",
    description: "Designed an AI agent specialized in Cameroonian tax optimization. Integrated a high-performance full-stack architecture combining FastAPI (AI Backend) and Next.js to transform complex tax rules into a decision-support tool."
  },
    'decatechs': {
      title: "Symfony Developer Intern",
      company: "Decatechs",
      description: "Contributed to the development of a school management ERP, using the Symfony framework to implement new features."
    }
  },

  // SEO Metadata
  metadata: {
    title: "Gabriel Nomo - Full-Stack Developer",
    description: "Portfolio of Gabriel Nomo, a developer specializing in Laravel, Next.js, and AI integration.",
  },

  // Navigation
  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
  },

  // Hero Section
 hero: {
  title: "NOMO BODIANGA GABRIEL",
  subtitle_1: "Software Design Engineer & Artificial Intelligence",
  tagline: "I transform complex ideas into scalable and secure software solutions. From requirements analysis to deployment, I design robust systems tailored to production requirements.",
  download_cv: "Download CV",
  project_link: "Discover my projects",
},

  // Section Titles
  sectionTitles: {
    about: "About Me",
    skills: "Technical Skills",
    projects: "Featured Projects",
    leadership: "Leadership & Engagement",
    education: "Education",
    certifications: "Certifications",
    contact: "Get in Touch",
    experience: "Professional Experience",
  },

  // Textual content by entity (linked by ID)
  
  skills: {
    backend: "Back-End",
    frontend: "Front-End",
    ai_data: "AI & Data",
    databases: "Databases",
    tools_methods: "Design, Tools & Methods",
  },

  // projects: {
  //   'ima-platform': {
  //     title: "IMA Platform (ERP)",
  //     shortDescription: "Led the end-to-end design, management, and development of an ERP-like application for managing competitive exams.",
  //     longDescription: "...", // More details to be added later for a dedicated page
  //   },
  //   'ai-tax-assistant': {
  //     title: "AI Tax Assistant",
  //     shortDescription: "Designed and developed an AI agent for fiscal optimization (FastAPI & Next.js).",
  //     longDescription: "...",
  //   },
  //   'pynfi': {
  //     title: "Pynfi - Finance Management",
  //     shortDescription: "End-to-end development of a financial management application with data visualization.",
  //     longDescription: "...",
  //   },
  //   'blog-website': {
  //     title: "Blog Website (Internship)",
  //     shortDescription: "Creation of a complete corporate blog using the Symfony framework.",
  //     longDescription: "...",
  //   },
  //   'portfolio-v2': {
  //     title: "Portfolio v2 (This site)",
  //     shortDescription: "Complete rebuild of my portfolio with a modular, typed, and multilingual architecture using Next.js and Tailwind CSS.",
  //     longDescription: "...",
  //   },
  //   'learn-laravel': {
  //     title: "'Learn Laravel' Tutorial",
  //     shortDescription: "A public repository to help students get started with the Laravel framework.",
  //     longDescription: "...",
  //   },
  //   'snake-game': {
  //     title: "Snake Game in JavaScript",
  //     shortDescription: "A fun project to master core JavaScript concepts.",
  //     longDescription: "...",
  //   },
  //   'portfolio-v1': {
  //     title: "Portfolio v1",
  //     shortDescription: "First version of my portfolio developed with Next.js and TypeScript.",
  //     longDescription: "...",
  //   },
  // },

  leadership: {
    'club-gi': {
      role: "President of the Computer Engineering Club",
      organization: "ENSPY",
      descriptionPoints: [
        "Mentored a team of 24 members on concrete projects to master key technologies (Laravel, React, Spring Boot, etc.).",
        "Organized workshops and a hackathon (+60 students) to accelerate skill development and professional readiness for junior members.",
      ],
    },
  },

  education: {
    'engineering-degree': {
      degree: "Engineering Degree in Computer Science (Master's equivalent)",
      institution: "National Advanced School of Engineering of Yaoundé (ENSPY)",
      details: "Specializing in software development and artificial intelligence.",
      status: "In progress - 5th year",
    },
    'bachelor-maths': {
      degree: "Bachelor's Degree in Mathematics",
      institution: "University of Yaoundé I",
      details: "",
      status: "Graduated in 2023",
    },
  },

  certifications: {
    'java-epfl': {
      title: "Introduction to Object-Oriented Programming (in Java)",
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
  // --- TOP 3 FEATURED ---
  'pynfi': {
    title: "Pynfi — Finance Management SaaS",
    shortDescription: "Secure budget tracking application in production.",
    problem: "The difficulty for individuals to centralize and analyze financial flows privately.",
    role: "Designer and Full-Stack Developer (Personal Project).",
    solution: "SaaS platform providing granular management of income and expenses with interactive dashboards.",
    features: ["Category tracking", "Dynamic charts", "Multi-budget management", "Data protection"],
    architecture: "Laravel 11 monolithic architecture using the Repository Pattern.",
    challenges: "Optimizing aggregation calculations to maintain smooth chart rendering.",
    results: "Product deployed and operational on pynfi.com.",
    perspectives: "AI integration for automatic categorization."
  },
  'ima-platform': {
    title: "IMA Platform (ERP)",
    shortDescription: "Complete ERP for managing a competitive exam prep center.",
    problem: "Heavy manual management of registrations and payments for over a thousand students.",
    role: "Lead Developer & Project Manager (Team of 3).",
    solution: "Centralized system managing the entire administrative and financial cycle of the center.",
    features: ["Automated registrations", "Payment tracking", "Access management", "Financial reporting"],
    architecture: "Laravel & MySQL stack designed for transactional reliability.",
    challenges: "Ensuring stability to support over 1,200 active users.",
    results: "Industrialized system successfully delivered to ICORP.",
    perspectives: "Development of an integrated e-learning module."
  },
  'transens': {
    title: "TranSens Ecosystem",
    shortDescription: "Multimodal transport solution via microservices.",
    problem: "Lack of real-time coordination in urban transport networks.",
    role: "Project Manager & Lead Developer.",
    solution: "Web/Mobile ecosystem for tracking and managing multimodal transport.",
    features: ["Kafka streaming", "PostGIS geolocation", "Driver Mobile App", "Supervisor Dashboard"],
    architecture: "Microservices: Spring Boot (WebFlux), Kafka, Redis, PostgreSQL.",
    challenges: "Managing asynchronous communication between critical services.",
    results: "Validated prototype with a full functional demo.",
    perspectives: "Scale-up towards a Smart City architecture."
  },

  // --- OTHER PROJECTS (Simplified Version) ---
  'ai-tax-assistant': {
    title: "AI Tax Assistant",
    shortDescription: "AI agent for tax optimization assistance (FastAPI & Next.js).",
    problem: "Complexity of tax rules for local businesses.",
    solution: "Conversational interface connected to a tax knowledge base.",
    features: ["NLP processing", "Document analysis", "User dashboard"]
  },
  'blog-website': {
    title: "Corporate Blog",
    shortDescription: "Dynamic content platform developed with Symfony.",
    solution: "MVC architecture allowing smooth management of articles and comments."
  },
  'learn-laravel': {
    title: "Learn Laravel Tutorial",
    shortDescription: "Open-source resource for learning the framework.",
    solution: "Structured repository covering core Laravel concepts."
  },
  'snake-game': {
    title: "JS Snake Game",
    shortDescription: "Fun project to master Vanilla JavaScript and the DOM.",
    solution: "Pure algorithmic logic without frameworks."
  },
  'portfolio-v2': {
    title: "Portfolio v2.0",
    shortDescription: "This site: multi-language engineering showcase under Next.js.",
    solution: "Modular and typed architecture with advanced i18n management."
  },
  'portfolio-v1': {
    title: "Portfolio v1.0",
    shortDescription: "First iteration of the portfolio in Next.js.",
    solution: "Initial version focused on presenting core skills."
  }
},
};