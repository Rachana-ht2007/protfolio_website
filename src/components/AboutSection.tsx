import React, { useState } from 'react';
import { BookOpen, Compass, Layers, Milestone, Terminal, UserCheck } from 'lucide-react';
import { ABOUT_TABS } from '../data/portfolioData';

type TabKey = 'background' | 'highlights' | 'focus';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('background');

  const tabList: { key: TabKey; label: string; icon: React.ReactNode }[] = [
    { key: 'background', label: 'Background', icon: <BookOpen className="w-3.5 h-3.5" /> },
    { key: 'highlights', label: 'Highlights', icon: <Milestone className="w-3.5 h-3.5" /> },
    { key: 'focus', label: 'Current Focus', icon: <Compass className="w-3.5 h-3.5" /> },
  ];

  const currentTab = ABOUT_TABS[activeTab];

  return (
    <section id="about" className="py-20 md:py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#E2DDD4]">
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs font-mono text-[#8A9A86] tracking-widest uppercase mb-2 block">
            01. Narrative & Trajectory
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0F172A] font-normal tracking-tight [text-wrap:balance]">
            About Rachana H T
          </h2>
        </div>
        <p className="text-sm text-[#64748B] max-w-md font-normal leading-relaxed">
          From biological systems to neural network computational paradigms: bridging scientific curiosity with full-stack craftsmanship.
        </p>
      </div>

      {/* Two-Column Architectural Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Left Column: Interactive Tabs & Detailed Narrative */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          {/* Segmented Tab Controls */}
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-xl bg-[#E9E6DF] border border-[#D8D2C6] mb-8 w-fit">
            {tabList.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg transition-all duration-150 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#FAF7F2] text-[#0F172A] shadow-sm font-semibold'
                      : 'text-[#64748B] hover:text-[#1E293B]'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Narrative Content */}
          <div className="relative rounded-2xl bg-[#F4F1EA] border border-[#E2DDD4] p-6 sm:p-8 lg:p-10 shadow-sm transition-all duration-200">
            <h3 className="font-serif text-xl sm:text-2xl text-[#0F172A] font-medium mb-4 leading-snug">
              {currentTab.lead}
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-[#45474C] leading-relaxed">
              {currentTab.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Architectural Footer Annotation */}
            <div className="mt-8 pt-6 border-t border-[#E2DDD4] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#64748B]">
              <div className="flex items-center gap-2">
                <UserCheck className="w-3.5 h-3.5 text-[#8A9A86]" />
                <span>Verified Academic Credentials · REVA SCIT</span>
              </div>
              <span className="text-[#8A9A86]">BATCH // TIER-1</span>
            </div>
          </div>
        </div>

        {/* Right Column: Architectural Engineering Tenets */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="rounded-2xl bg-[#F4F1EA] border border-[#E2DDD4] p-6 sm:p-7 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-[#FAF7F2] border border-[#E2DDD4] text-[#1E293B]">
                <Layers className="w-4 h-4 text-[#505F76]" />
              </div>
              <h4 className="font-serif text-lg font-medium text-[#0F172A]">
                First-Principles Architecture
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-[#45474C] leading-relaxed">
              Every system starts with clear state boundaries, strict TypeScript contracts, and modular interfaces. No magic libraries when clean native code performs better.
            </p>
          </div>

          <div className="rounded-2xl bg-[#F4F1EA] border border-[#E2DDD4] p-6 sm:p-7 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-[#FAF7F2] border border-[#E2DDD4] text-[#1E293B]">
                <Terminal className="w-4 h-4 text-[#8A9A86]" />
              </div>
              <h4 className="font-serif text-lg font-medium text-[#0F172A]">
                Low-Level Rigor to Cloud AI
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-[#45474C] leading-relaxed">
              Understanding memory pointers and integer math in C gives me a granular perspective on how neural network tensors compute and how database transactions run on disk.
            </p>
          </div>

          <div className="rounded-2xl bg-[#F4F1EA] border border-[#E2DDD4] p-6 sm:p-7 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-[#FAF7F2] border border-[#E2DDD4] text-[#1E293B]">
                <Compass className="w-4 h-4 text-[#D97706]" />
              </div>
              <h4 className="font-serif text-lg font-medium text-[#0F172A]">
                Human-Centered Pragmatism
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-[#45474C] leading-relaxed">
              Whether building an automated assignment grading portal or a satellite intelligence map, technology is only as valuable as the friction it eliminates for real human users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
