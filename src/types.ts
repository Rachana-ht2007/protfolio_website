export type ProjectCategory = 'all' | 'fullstack' | 'aiml' | 'lowlevel';

export interface ProjectArchitecture {
  client: string;
  server: string;
  database: string;
  dataFlow: string[];
  keyChallenges: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  categoryLabel: string;
  recognition?: string;
  summary: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  demoType: 'satquery' | 'assignment' | 'bmw' | 'booking' | 'graphics';
  architecture: ProjectArchitecture;
  metrics: { label: string; value: string }[];
}

export interface Milestone {
  id: string;
  year: string;
  period: string;
  title: string;
  organization: string;
  badge?: string;
  description: string;
  achievements: string[];
  skillsApplied: string[];
}


export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  skills: {
    name: string;
    proficiency: number;
    experience: string;
    description: string;
  }[];
}
