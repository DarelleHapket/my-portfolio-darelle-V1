// src/types/index.ts

export type ProjectCategory = "professional" | "personal" | "academic" | "freelance";

export interface Skill {
  name: string;
  percentage: number;
  icon?: string;
}

export interface Project {
  id: string;
  category: ProjectCategory;
  period: string;
  mainImageUrl: string;
  technologies: string[];
  repoUrl?: string;
  liveUrl?: string;
  figmaUrl?: string;
  isFeatured: boolean;
  isActive: boolean;
}

export interface ProjectDetail {
  title?: string;
  shortDescription?: string;
  problem?: string;
  role?: string;
  solution?: string;
  features?: string[];
  architecture?: string;
  challenges?: string;
  results?: string;
  perspectives?: string;
}

export interface Leadership {
  id: string;
  startDate: string;
  endDate: string;
}

export interface Education {
  id: string;
  startDate: string;
  endDate: string | "current";
}

export interface Certification {
  id: string;
  imageUrl: string;
  pdfUrl?: string;
}

export interface Experience {
  id: string;
  period: string;
}

export type SkillsData = {
  [categoryKey: string]: Skill[];
};
