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

export const projects = [
  {
    id: "satquery-ai",
    title: "SatQuery AI",
    // Update the image path here:
    image: "/assets/aistudio/satquery_ai_mockup.jpg", 
    // ... other fields
  },
  {
    id: "assignment-system",
    title: "Online Assignment Submission System",
    image: "/assets/aistudio/assignment_system_mockup.jpg",
  },
  {
    id: "bmw-showcase",
    title: "BMW Aesthetic Showcase",
    image: "/assets/aistudio/bmw_showcase_mockup.jpg",
  },
  {
    id: "booking-platform",
    title: "IPL & Movie Ticket Booking Platform",
    image: "/assets/aistudio/booking_platform_mockup.jpg",
  },
  {
    id: "graphics-editor",
    title: "2D Graphics Editor in C",
    image: "/assets/aistudio/graphics_editor_mockup.jpg",
  }
];
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
