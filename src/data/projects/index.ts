import { Project } from "@/types";

export const farcal: Project = {
  id: "farcal",
  category: "academic",
  period: "Mai 2025",
  mainImageUrl: "/images/projects/farcal.png",
  technologies: ["React Native", "Expo"],
  liveUrl: "https://farcal-dev.yowyob.com/en",
  figmaUrl: "https://www.figma.com/design/ZFkSSBP5GdrHqRhlGBYUg3/Untitled?node-id=0-1",
  isFeatured: true,
  isActive: true,
};

export const caas: Project = {
  id: "caas",
  category: "academic",
  period: "2026",
  mainImageUrl: "/images/projects/caas.png",
  technologies: ["Spring Boot", "Java", "API REST", "MySQL"],
  repoUrl: "https://gitlab.com/chat-multi-tenant/caas-backend",
  isFeatured: true,
  isActive: true,
};

export const todoApp: Project = {
  id: "todo-app",
  category: "academic",
  period: "2024",
  mainImageUrl: "/images/projects/todo.png",
  technologies: ["React", "Spring Boot", "MySQL"],
  repoUrl: "https://github.com/DarelleHapket/frontendTodoAPPP",
  isFeatured: false,
  isActive: true,
};

export const easyRent: Project = {
  id: "easy-rent",
  category: "academic",
  period: "2024",
  mainImageUrl: "/images/projects/easyrent.png",
  technologies: ["React Native", "Expo"],
  isFeatured: false,
  isActive: false,
};

export const validationForm: Project = {
  id: "validation-form",
  category: "academic",
  period: "2023",
  mainImageUrl: "/images/projects/form.png",
  technologies: ["JavaScript", "HTML5", "CSS3"],
  repoUrl: "https://github.com/DarelleHapket/validationFormulaireJS",
  isFeatured: false,
  isActive: true,
};

export const portfolioProject: Project = {
  id: "portfolio",
  category: "academic",
  period: "2025",
  mainImageUrl: "/images/projects/portfolio.png",
  technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  isFeatured: false,
  isActive: false, // ← false
};