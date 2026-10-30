import React, { useState } from 'react';
import {
  Code2,
  Cpu,
  Layers,
  Layout,
  Server,
  Terminal,
  CheckCircle,
  Sparkles,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillMatrix: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-4 h-4 text-[#505F76]" />;
      case 'Server':
        return <Server className="w-4 h-4 text-[#8A9A86]" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-[#D97706]" />;
      case 'Code2':
        return <Code2 className="w-4 h-4 text-[#1E293B]" />;
      default:
        return <Terminal className="w-4 h-4" />;
    }
  };

  const displayedCategories =
    selectedCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#E2DDD4]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <span className="text-xs font-mono text-[#8A9A86] tracking-widest uppercase mb-2 block">
            03. Competency & Stack
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0F172A] font-normal tracking-tight [text-wrap:balance]">
            Interactive Skill Matrix
          </h2>
        </div>
        <p className="text-sm text-[#64748B] max-w-md font-normal leading-relaxed">
          From low-level pointer arithmetic in C to asynchronous FastAPI microservices and client-side reactive architectures.
        </p>
      </div>

      {/* Category Filter Controls */}
      <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-[#E9E6DF] border border-[#D8D2C6] mb-10 w-fit flex-wrap">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all duration-150 cursor-pointer ${
            selectedCategory === 'all'
              ? 'bg-[#FAF7F2] text-[#0F172A] shadow-sm font-semibold'
              : 'text-[#64748B] hover:text-[#1E293B]'
          }`}
        >
          All Domains
        </button>
        {SKILL_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all duration-150 cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-[#FAF7F2] text-[#0F172A] shadow-sm font-semibold'
                : 'text-[#64748B] hover:text-[#1E293B]'
            }`}
          >
            {getCategoryIcon(cat.iconName)}
            <span>{cat.name}</span>
          </button>
        ))}
      </div>

      {/* Categorized Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {displayedCategories.map((cat) => (
          <div
            key={cat.id}
            className="rounded-2xl bg-[#F4F1EA] border border-[#E2DDD4] p-6 sm:p-8 shadow-sm flex flex-col justify-between"
          >
            <div>
              {/* Category Title Bar */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E2DDD4]">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-[#FAF7F2] border border-[#E2DDD4]">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#0F172A]">
                    {cat.name}
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#8A9A86] tracking-wider uppercase">
                  {cat.skills.length} Technologies
                </span>
              </div>

              {/* Skills List with Proficiency Bars */}
              <div className="space-y-6">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                      <span className="font-semibold text-[#1E293B]">
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-2 text-[#64748B]">
                        <span className="text-[11px]">{skill.experience}</span>
                        <span>·</span>
                        <span className="text-[#0F172A] font-semibold">
                          {skill.proficiency}%
                        </span>
                      </div>
                    </div>

                    {/* Architectural Progress Track */}
                    <div className="h-1.5 w-full bg-[#E2DDD4] rounded-full overflow-hidden mb-1.5">
                      <div
                        className="h-full bg-[#1E293B] rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>

                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Architectural Footer Meta */}
            <div className="mt-8 pt-4 border-t border-[#E2DDD4] flex items-center justify-between text-[11px] font-mono text-[#64748B]">
              <span>VALIDATED VIA GITHUB REPOSITORIES</span>
              <span className="text-[#8A9A86]">PROD-TESTED</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
