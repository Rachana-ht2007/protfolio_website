import React from 'react';
import { Award, ExternalLink, Github, Sparkles } from 'lucide-react';
import { Project } from '../types';
import { SchematicDrawer } from './SchematicDrawer';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
  index: number;
}

// Helper to ensure images from the public folder load correctly with leading slash
const getImagePath = (imagePath: string) => {
  if (!imagePath) return '';
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  return imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenModal,
  index,
}) => {
  return (
    <div className="group relative rounded-2xl bg-[#F4F1EA] border border-[#E2DDD4] p-5 sm:p-7 shadow-[0_1px_3px_rgba(15,23,42,0.03),0_6px_16px_-4px_rgba(100,116,139,0.05)] hover:shadow-[0_8px_24px_-4px_rgba(15,23,42,0.08),0_20px_40px_-8px_rgba(100,116,139,0.1)] transition-all duration-300 hover:border-[#64748B]/35 flex flex-col justify-between">
      {/* Top Meta Bar: Clean unboxed metadata with typographic separators */}
      <div>
        <div className="flex items-center justify-between gap-3 text-xs font-mono text-[#64748B] mb-3">
          <div className="flex items-center gap-2">
            <span className="text-[#8A9A86] font-semibold">
              0{index + 1} //
            </span>
            <span>{project.categoryLabel}</span>
          </div>

          {project.recognition && (
            <span className="inline-flex items-center gap-1.5 text-[11px] text-[#D97706] font-medium">
              <Award className="w-3.5 h-3.5" />
              <span>{project.recognition}</span>
            </span>
          )}
        </div>

        {/* Project Image Mockup with Hover Zoom */}
        <div
          onClick={() => onOpenModal(project)}
          className="relative rounded-xl overflow-hidden aspect-[16/10] bg-[#E9E6DF] border border-[#E2DDD4] mb-5 cursor-pointer group/img"
        >
          <img
            src={getImagePath(project.image)}
            alt={project.title}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover/img:scale-105"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          {/* Subtle gradient scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
          
          <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-[#FAF7F2]/90 backdrop-blur-sm border border-[#E2DDD4] text-xs font-mono text-[#1E293B] opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 shadow-sm flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#D97706]" />
            <span>Interactive Demo</span>
          </div>
        </div>

        {/* Title & Tagline */}
        <h3
          onClick={() => onOpenModal(project)}
          className="font-serif text-xl sm:text-2xl font-medium text-[#0F172A] hover:text-[#505F76] transition-colors cursor-pointer mb-1 tracking-tight"
        >
          {project.title}
        </h3>
        <p className="text-xs font-mono text-[#64748B] mb-3">
          {project.tagline}
        </p>

        {/* Summary Description */}
        <p className="text-xs sm:text-sm text-[#45474C] leading-relaxed mb-4">
          {project.summary}
        </p>

        {/* Tech Stack Pills (clean subtle stone tags) */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[11px] font-mono rounded bg-[#FAF7F2] border border-[#E2DDD4] text-[#1E293B]"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-1.5 py-0.5 text-[11px] font-mono text-[#64748B]">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Card Actions & Embedded Schematic Drawer */}
      <div>
        <div className="flex items-center justify-between gap-3 pt-2">
          {/* Primary Action Button: Open Interactive Modal & Demo */}
          <button
            onClick={() => onOpenModal(project)}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono font-medium rounded-lg bg-[#1E293B] text-[#FAF7F2] hover:bg-[#0F172A] transition-colors cursor-pointer shadow-sm hover:shadow"
          >
            <span>View Case Study & Demo</span>
            <ExternalLink className="w-3 h-3 opacity-80" />
          </button>

          {/* GitHub Repo Button */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-[#1E293B] hover:text-[#0F172A] bg-transparent hover:bg-[#E9E6DF] border border-[#64748B]/30 rounded-lg transition-colors cursor-pointer"
            title="Inspect Source Code on GitHub"
          >
            <Github className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>

        {/* Collapsible Architectural System Schematic */}
        <SchematicDrawer
          architecture={project.architecture}
          projectTitle={project.title}
        />
      </div>
    </div>
  );
};