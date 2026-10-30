import React, { useState } from 'react';
import { Award, CheckCircle2, ChevronDown, ChevronUp, Clock, MapPin, Milestone } from 'lucide-react';
import { TIMELINE_MILESTONES } from '../data/portfolioData';

export const TimelineSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('sih-winner');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="milestones" className="py-20 md:py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#E2DDD4]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs font-mono text-[#8A9A86] tracking-widest uppercase mb-2 block">
            04. Milestones & Accolades
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0F172A] font-normal tracking-tight [text-wrap:balance]">
            Architectural Roadmap
          </h2>
        </div>
        <p className="text-sm text-[#64748B] max-w-md font-normal leading-relaxed">
          Chronological record of competitive hackathon victories, academic distinctions, and algorithmic certifications.
        </p>
      </div>

      {/* Vertical Architectural Roadmap */}
      <div className="relative pl-6 sm:pl-10 border-l border-[#64748B]/30 space-y-10 sm:space-y-12">
        {TIMELINE_MILESTONES.map((item, index) => {
          const isExpanded = expandedId === item.id;
          return (
            <div key={item.id} className="relative group">
              {/* Node Marker on vertical axis */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#FAF7F2] border-2 border-[#1E293B] group-hover:scale-125 transition-transform duration-200" />

              {/* Milestone Card */}
              <div className="rounded-2xl bg-[#F4F1EA] border border-[#E2DDD4] p-6 sm:p-8 shadow-sm transition-all duration-200 hover:shadow-md hover:border-[#64748B]/30">
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#64748B] mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[#8A9A86] font-semibold">{item.period}</span>
                    <span>·</span>
                    <span>{item.organization}</span>
                  </div>

                  {item.badge && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E9E6DF] border border-[#D8D2C6] text-[11px] font-mono text-[#1E293B]">
                      <Award className="w-3 h-3 text-[#D97706]" />
                      <span>{item.badge}</span>
                    </span>
                  )}
                </div>

                {/* Milestone Title */}
                <div
                  onClick={() => toggleExpand(item.id)}
                  className="flex items-center justify-between cursor-pointer group/title"
                >
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#0F172A] group-hover/title:text-[#505F76] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <button
                    className="p-1 text-[#64748B] hover:text-[#0F172A] rounded transition-colors"
                    aria-label="Toggle details"
                  >
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#45474C] leading-relaxed mt-2.5">
                  {item.description}
                </p>

                {/* Expandable Key Outcomes & Skills Applied */}
                {isExpanded && (
                  <div className="mt-5 pt-4 border-t border-[#E2DDD4] space-y-4">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] block mb-2">
                        Key Outcomes & Responsibilities:
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#1E293B]">
                        {item.achievements.map((ach, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#8A9A86] shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] block mb-2">
                        Technologies & Competencies Exercised:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.skillsApplied.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 text-[11px] font-mono rounded bg-[#FAF7F2] border border-[#E2DDD4] text-[#1E293B]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
