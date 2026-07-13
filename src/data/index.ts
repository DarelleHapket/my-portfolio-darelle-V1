// src/data/index.ts

import { backendSkills } from "./skills/backend";
import { frontendSkills } from "./skills/frontend";
import { aiDataSkills } from "./skills/ai-data";
import { databaseSkills, toolsAndMethodsSkills } from "./skills/tools-methods";
import { SkillsData } from "@/types";

import {
  farcal, caas, todoApp, easyRent, validationForm, portfolioProject
} from "./projects/index";

import {
  irexExperience,
  enspyEducation, uy1Education,
  introAI, djangoRest,
  clubGi, hackverse2025, hackverseIA,
} from "./entities";

// ==========================================
// SKILLS
// ==========================================
export const skillsData: SkillsData = {
  backend:       backendSkills,
  frontend:      frontendSkills,
  ai_data:       aiDataSkills,
  databases:     databaseSkills,
  tools_methods: toolsAndMethodsSkills,
};

// ==========================================
// PROJECTS
// ==========================================
export const projectsData = [farcal, caas, todoApp, easyRent, validationForm, portfolioProject];

// ==========================================
// EXPERIENCE
// ==========================================
export const experienceData = [irexExperience];

// ==========================================
// EDUCATION
// ==========================================
export const educationData = [enspyEducation, uy1Education];

// ==========================================
// CERTIFICATIONS
// ==========================================
export const certificationsData = [introAI, djangoRest];

// ==========================================
// LEADERSHIP
// ==========================================
export const leadershipData = [clubGi, hackverse2025, hackverseIA];
