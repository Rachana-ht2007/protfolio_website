import React from 'react';
import { ArrowUp, Heart, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#E2DDD4] bg-[#FAF7F2] py-12 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-[#64748B]">
        {/* Left side: Brand identity & institution */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-serif font-medium text-[#0F172A] text-sm">
            {PERSONAL_INFO.name}
          </span>
          <span className="hidden sm:inline">·</span>
          <span>B.Tech AI & Data Science · REVA University</span>
          <span className="hidden sm:inline">·</span>
          <span>Bangalore, India</span>
        </div>

        {/* Right side: Back to top button & architectural status */}
        <div className="flex items-center gap-6">
          <span className="text-[11px] text-[#8A9A86]">
            LAT 12.9716° N · LON 77.5946° E
          </span>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F4F1EA] border border-[#E2DDD4] text-[#1E293B] hover:text-[#0F172A] hover:bg-[#E9E6DF] transition-colors cursor-pointer"
            aria-label="Back to Top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
