// src/dictionaries/en.ts

export const en = {
  common: {
    topbar: "Portfolio v1.0 — Full-Stack Developer & Data Analytics",
  },

  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
  },

  hero: {
    title: "DARELLE HAPKET",
    subtitle: "Full-Stack Developer & Data Analytics",
    tagline: "I build complete digital products combining solid back-end logic, modern interfaces, and insightful data analysis.",
    cta_projects: "View my projects",
    cta_contact: "Contact me",
  },

  sectionTitles: {
    about: "About Me",
    skills: "My Skills",
    experience: "Professional Experience",
    projects: "My Projects",
    certifications: "Certifications",
    leadership: "Community & Engagement",
    education: "Education",
    contact: "Get in Touch",
  },

 about: {
  heading: "Full-Stack Developer & Data Analytics",
  paragraph1: "5th-year Engineering student in Computer Science at ENSPY, preparing my Software Design Engineering Degree with a specialization in Full-Stack development and data analytics. My approach prioritizes code quality, user experience, and development best practices.",
  paragraph2: "Used to competitive environments and tight deadlines, I build robust, maintainable solutions focused on concrete impact.",
  stats: {
    projects: "Projects completed",
    hackathons: "Hackathons",
    experience: "Years of experience",
  },
},

  skills: {
    backend: "Back-End",
    frontend: "Front-End",
    ai_data: "Data & Analytics",
    databases: "Databases",
    tools_methods: "Tools & Methods",
  },

  experience: {
    irex: {
      title: "DevOps Intern",
      company: "Irex",
      location: "Yaoundé, Cameroon",
      description: "Docker container deployment, system administration on Rocky Linux and automation via Bash scripts. Introduction to CI/CD pipelines.",
      points: [
        "Deployment and management of Docker containers for development environment isolation.",
        "System administration on Rocky Linux: installation, configuration and updates.",
        "Writing Bash scripts to automate backups, deployment and log cleanup.",
        "Introduction to CI/CD pipelines: continuous integration and delivery.",
      ],
    },
  },

  projects: {
    farcal: {
      title: "FARCAL — Taxi Fare Calculator",
      shortDescription: "Mobile app for calculating taxi fares adapted to the city of Yaoundé.",
      category: "mobile",
    },
    caas: {
      title: "CaaS — Chat as a Service",
      shortDescription: "Multi-tenant chat system allowing multiple platforms to integrate a messaging module via API.",
      category: "web",
    },
    "todo-app": {
      title: "TodoApp Full-Stack",
      shortDescription: "Task management application with complete authentication.",
      category: "web",
    },
    "easy-rent": {
      title: "EasyRent",
      shortDescription: "Mobile vehicle rental management application.",
      category: "mobile",
    },
    "validation-form": {
      title: "Form Validation",
      shortDescription: "Complete form validation system with vanilla JavaScript.",
      category: "web",
    },
    portfolio: {
      title: "Portfolio",
      shortDescription: "Responsive portfolio website with animations and dark mode.",
      category: "web",
    },
  },

  certifications: {
    "intro-ai": {
      title: "Introduction to Artificial Intelligence",
      institution: "Coursera",
    },
    "django-rest": {
      title: "Django REST Framework",
      institution: "Coursera",
    },
  },

  leadership: {
    "club-gi": {
      role: "Active Member — Computer Engineering Club",
      organization: "ENSPY — Polytechnique",
      descriptionPoints: [
        "Participation in workshops, collaborative projects within the GI Club.",
      ],
    },
    "hackverse-2025": {
      role: "Participant — HackVerse 2025",
      organization: "ENSPY",
      descriptionPoints: [
        "Complete solution designed and developed as a team in 24h. 2nd prize won among multiple competing teams.",
      ],
    },
    "hackverse-ia": {
  role: "Participant — HackVerse IA",
  organization: "Zindi",
  descriptionPoints: [
    "Data Science & AI challenge: data analysis, modeling and submission of Machine Learning solution. 2nd place won.",
  ],
},
  },

  education: {
    enspy: {
      degree: "Engineering Degree in Computer Science",
      institution: "National Advanced School of Engineering of Yaoundé (ENSPY)",
      details: "Specializing in software development & Artificial Intelligence",
      status: "In progress — 5th year",
    },
    uy1: {
      degree: "Bachelor's Degree in Computer Science",
      institution: "University of Yaoundé I",
      details: "",
      status: "Graduated in 2023",
    },
  },

  contact: {
    invitation: "Have a project in mind? Feel free to contact me to discuss it. I would love to help you bring your ideas to life.",
    email: "darellehapket@gmail.com",
    phone: "+237 655 271 306",
    location: "Yaoundé, Cameroon",
    button: "Send a message",
    form: {
      name: "Full name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send message",
      sending: "Sending...",
      success: "Message sent successfully!",
    },
  },

  footer: {
    description: "Full-Stack Developer & Data Analytics, building durable digital products.",
    builtWith: "Built with Next.js & Tailwind CSS",
    copyright: "All rights reserved.",
    backToTop: "Back to top",
  },

  filters: {
    all: "All",
    web: "Web App",
    mobile: "Mobile",
    data: "Data",
  },
};
