import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export const ProjectGallery: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filterTabs: { key: ProjectCategory; label: string; count: number }[] = [
    { key: 'all', label: 'All Projects', count: PROJECTS.length },
    {
      key: 'fullstack',
      label: 'Full-Stack & Web',
      count: PROJECTS.filter((p) => p.category === 'fullstack').length,
    },
    {
      key: 'aiml',
      label: 'AI & ML',
      count: PROJECTS.filter((p) => p.category === 'aiml').length,
    },
    {
      key: 'lowlevel',
      label: 'C & Low-Level',
      count: PROJECTS.filter((p) => p.category === 'lowlevel').length,
    },
  ];

  const filteredProjects =
    filter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 md:py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#E2DDD4]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <span className="text-xs font-mono text-[#8A9A86] tracking-widest uppercase mb-2 block">
            02. Curated Systems & Software
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0F172A] font-normal tracking-tight [text-wrap:balance]">
            Interactive Project Gallery
          </h2>
        </div>
        <p className="text-sm text-[#64748B] max-w-md font-normal leading-relaxed">
          Production systems spanning computer vision satellite analysis, real-time cloud portals, and low-level algorithmic graphics in C.
        </p>
      </div>

      {/* Interactive Tag-Based Filter Tabs */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-10 pb-4 border-b border-[#E2DDD4]">
        <div className="inline-flex items-center gap-1.5 p-1.5 rounded-xl bg-[#E9E6DF] border border-[#D8D2C6]">
          {filterTabs.map((tab) => {
            const isActive = filter === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all duration-150 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#FAF7F2] text-[#0F172A] shadow-sm font-semibold'
                    : 'text-[#64748B] hover:text-[#1E293B]'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-[#1E293B] text-[#FAF7F2]' : 'bg-[#D8D2C6]/50 text-[#64748B]'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        <span className="text-xs font-mono text-[#64748B]">
          Showing {filteredProjects.length} of {PROJECTS.length} Architectural Systems
        </span>
      </div>

      {/* Asymmetric Project Grid (Bento style) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => (
          <div
            key={project.id}
            className={
              idx === 0
                ? 'md:col-span-2 lg:col-span-2'
                : 'col-span-1'
            }
          >
            <ProjectCard
              project={project}
              onOpenModal={(p) => setActiveModalProject(p)}
              index={idx}
            />
          </div>
        ))}
      </div>

      {/* Interactive Project Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
