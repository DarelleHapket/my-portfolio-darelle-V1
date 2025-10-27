// src/data/index.ts
import { SkillsData, Project, Certification, Education, Leadership,Experience } from "@/types";

// --- Imports Compétences ---
import { backendSkills } from "./skills/backend";
import { frontendSkills } from "./skills/frontend";
import { aiDataSkills } from "./skills/ai-data";
import { databaseSkills } from "./skills/databases";
import { toolsAndMethodsSkills } from "./skills/tools-methods";

// --- Imports Projets ---
import { imaPlatform } from "./projects/ima-platform";
import { aiTaxAssistant } from "./projects/ai-tax-assistant";
import { pynfi } from "./projects/pynfi";
import { snakeGame } from "./projects/snake-game";
import { blogWebsite } from "./projects/blog-website";
import { learnLaravel } from "./projects/learn-laravel";
import { portfolioV1 } from "./projects/portfolio-v1";
import { portfolioV2 } from "./projects/portfolio-v2";

// --- Imports Certifications ---
import { javaEpfl } from "./certifications/java-epfl";
import { webDevUcdavis } from "./certifications/web-dev-ucdavis";
import { cDartmouth } from "./certifications/c-dartmouth";

// --- Imports Formation ---
import { engineeringDegree } from "./education/engineering-degree";
import { bachelorMaths } from "./education/bachelor-maths";

// --- Imports Leadership ---
import { clubGi } from "./leadership/club-gi";

// --Imports Experiences ---
import { icorpExperience } from "./experience/icorp";
import { cenadiExperience } from "./experience/cenadi";


// ============================================
//         ASSEMBLAGE DES DONNÉES
// ============================================

export const skillsData: SkillsData = {
  backend: backendSkills,
  frontend: frontendSkills,
  ai_data: aiDataSkills,
  databases: databaseSkills,
  tools_methods: toolsAndMethodsSkills,
};

export const projectsData: Project[] = [
  imaPlatform,
  aiTaxAssistant,
  pynfi,
  blogWebsite,
  portfolioV2,
  learnLaravel,
  snakeGame,
  portfolioV1,
];

export const certificationsData: Certification[] = [
  javaEpfl,
  webDevUcdavis,
  cDartmouth,
];

export const educationData: Education[] = [
  engineeringDegree,
  bachelorMaths,
];

export const leadershipData: Leadership[] = [
  clubGi,
];

export const experienceData: Experience[] = [
  icorpExperience,
  cenadiExperience,
];