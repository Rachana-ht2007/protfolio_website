import React from 'react';
import { ArrowDown, Linkedin, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO, TECH_TICKER } from '../data/portfolioData';

interface HeroProps {
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects }) => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* 2-Column Architectural Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* Left Column: Typographic Hierarchy */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Floating Availability Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#E9E6DF]/80 border border-[#D8D2C6] text-xs font-mono text-[#1E293B] mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#8A9A86]" />
            <span className="tracking-wide">{PERSONAL_INFO.statusBadge}</span>
          </div>

          {/* Main Title: Newsreader font, large editorial scale with balanced wrapping */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#0F172A] leading-[1.12] mb-6 [text-wrap:balance]">
            Rachana H T
            <span className="block text-2xl sm:text-3xl lg:text-4xl text-[#64748B] font-light mt-2">
              Full-Stack Developer & AI Specialist
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#45474C] font-normal leading-relaxed max-w-2xl mb-8">
            {PERSONAL_INFO.heroSubtitle}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            {/* Primary Filled CTA with hover glow */}
            <button
              onClick={onExploreProjects}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-medium text-[#FAF7F2] bg-[#1E293B] rounded-lg hover:bg-[#0F172A] transition-all duration-200 shadow-[0_4px_14px_rgba(30,41,59,0.18)] hover:shadow-[0_6px_20px_rgba(30,41,59,0.28)] hover:-translate-y-0.5 cursor-pointer group"
            >
              <span>Explore Projects</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>

            {/* Secondary Outlined CTA */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-medium text-[#1E293B] bg-transparent hover:bg-[#E9E6DF] border border-[#64748B]/35 hover:border-[#1E293B] rounded-lg transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              <Linkedin className="w-4 h-4 text-[#505F76]" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>

          {/* Location & Institution Meta */}
          <div className="flex items-center gap-3 text-xs font-mono text-[#64748B] tracking-wider uppercase">
            <span>REVA University</span>
            <span>·</span>
            <span>B.Tech AI & Data Science</span>
            <span>·</span>
            <span>Bangalore, India</span>
          </div>
        </div>

        {/* Right Column: Architectural Glassmorphism Interactive Developer Card */}
        <div className="lg:col-span-5 relative">
          {/* Decorative drafting corner reticles */}
          <div className="absolute -top-3 -left-3 text-[#64748B]/40 font-mono text-sm select-none z-20">
            +
          </div>
          <div className="absolute -top-3 -right-3 text-[#64748B]/40 font-mono text-sm select-none z-20">
            +
          </div>
          <div className="absolute -bottom-3 -left-3 text-[#64748B]/40 font-mono text-sm select-none z-20">
            +
          </div>
          <div className="absolute -bottom-3 -right-3 text-[#64748B]/40 font-mono text-sm select-none z-20">
            +
          </div>

          {/* Interactive Developer Code Card */}
          <InteractiveCodeCard />
        </div>
      </div>
    </section>
  );
};

{/* Interactive Developer Card Component */}
const InteractiveCodeCard: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'ts' | 'py' | 'c'>('ts');
  const [copied, setCopied] = React.useState(false);
  const [executing, setExecuting] = React.useState(false);
  const [executionLog, setExecutionLog] = React.useState<string | null>(null);

  const snippets = {
    ts: {
      filename: 'developer.ts',
      lang: 'TypeScript',
      code: `// Rachana H T — Engineer Spec
export interface Engineer {
  name: "Rachana H T";
  institution: "REVA University (SCIT)";
  degree: "B.Tech AI & Data Science";
  specialization: [
    "Full-Stack Architectures",
    "Computer Vision & Geo-AI",
    "Low-Level Systems in C"
  ];
  cohort: "Top-Tier Placement Batch";
  hackathonWins: 2;
  status: "Available for Collaboration";
}

export function buildIntelligentSystem(spec: SystemSpec) {
  return createPipeline({
    frontend: "React 19 + Vite + Tailwind",
    cloud: "Supabase + PostgreSQL + RLS",
    inference: "FastAPI + Asynchronous Python"
  });
}`,
      output: `[INFO] tsc --noEmit : 0 errors
[SUCCESS] Initialized Engineer contract for Rachana H T
[STATUS] REVA University Tier-1 Placement Cohort verified
[SYS] 60 FPS UI pipeline online`,
    },
    py: {
      filename: 'satquery_pipeline.py',
      lang: 'Python 3.12',
      code: `# SatQuery AI: Geospatial Sentinel Inference
import cv2
import numpy as np

async def extract_coastal_contours(tile_buffer: bytes):
    """Detect shoreline erosion & vessel coordinates"""
    raster = np.frombuffer(tile_buffer, dtype=np.uint8)
    gray = cv2.imdecode(raster, cv2.IMREAD_GRAYSCALE)
    _, thresh = cv2.threshold(gray, 180, 255, cv2.THRESH_BINARY)
    contours, _ = cv2.findContours(
        thresh, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE
    )
    return {
        "vessels_detected": 3,
        "coastal_shift_delta": "1.2m erosion",
        "inference_latency": "0.41s"
    }`,
      output: `[FASTAPI] Worker thread spawned on /api/v1/geo-inference
[CV2] Contours extracted: 14 polygon points
[METRIC] Latency: 0.41s · SIH Internal 1st Place winner`,
    },
    c: {
      filename: 'raster_engine.c',
      lang: 'ANSI C',
      code: `/* 2D Graphics Engine: Bresenham Rasterizer */
#include <stdio.h>
#include <stdlib.h>

void bresenham_line(int x0, int y0, int x1, int y1) {
    int dx = abs(x1 - x0), dy = -abs(y1 - y0);
    int sx = x0 < x1 ? 1 : -1, sy = y0 < y1 ? 1 : -1;
    int err = dx + dy;
    
    while (1) {
        set_framebuffer_pixel(x0, y0, 0xFFFFFFFF);
        if (x0 == x1 && y0 == y1) break;
        int e2 = 2 * err;
        if (e2 >= dy) { err += dy; x0 += sx; }
        if (e2 <= dx) { err += dx; y0 += sy; }
    }
}`,
      output: `[GCC] gcc -O3 raster_engine.c -o raster
[ASM] Compiled to pure integer arithmetic (0 float instructions)
[MEM] Framebuffer initialized: 1920x1080 virtual raster`,
    },
  };

  const currentSnippet = snippets[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = () => {
    setExecuting(true);
    setExecutionLog(null);
    setTimeout(() => {
      setExecuting(false);
      setExecutionLog(currentSnippet.output);
    }, 450);
  };

  return (
    <div className="relative rounded-2xl p-4 sm:p-5 bg-[#F4F1EA]/95 border border-[#E2DDD4] shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06),0_16px_36px_-8px_rgba(100,116,139,0.08)] backdrop-blur-md">
      {/* Editor Header Bar with Tabs and Window Dots */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E2DDD4]">
        {/* Window controls */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E2DDD4] border border-[#CBD5E1]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E2DDD4] border border-[#CBD5E1]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E2DDD4] border border-[#CBD5E1]" />
          </div>

          {/* Interactive File Tabs */}
          <div className="flex items-center gap-1">
            {(['ts', 'py', 'c'] as const).map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setExecutionLog(null);
                  }}
                  className={`px-2.5 py-1 text-xs font-mono rounded-md transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#1E293B] text-[#FAF7F2] font-medium shadow-sm'
                      : 'text-[#64748B] hover:text-[#1E293B] hover:bg-[#E9E6DF]'
                  }`}
                >
                  {snippets[tab].filename}
                </button>
              );
            })}
          </div>
        </div>

        {/* Action icons: Copy & Run */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md text-[#64748B] hover:text-[#0F172A] hover:bg-[#E9E6DF] transition-colors cursor-pointer text-xs font-mono flex items-center gap-1"
            title="Copy code"
          >
            {copied ? (
              <span className="text-[11px] text-[#8A9A86] font-medium">Copied!</span>
            ) : (
              <span className="text-[11px]">Copy</span>
            )}
          </button>

          <button
            onClick={handleRun}
            disabled={executing}
            className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-[#1E293B] text-[#FAF7F2] hover:bg-[#0F172A] transition-colors cursor-pointer flex items-center gap-1 shadow-sm"
          >
            <Sparkles className="w-3 h-3 text-[#D97706]" />
            <span>{executing ? 'Running...' : 'Run'}</span>
          </button>
        </div>
      </div>

      {/* Code Editor Body */}
      <div className="rounded-xl overflow-hidden bg-[#0F172A] border border-[#1E293B] p-4 text-[#FAF7F2] font-mono text-[11px] sm:text-xs leading-relaxed max-h-[310px] overflow-y-auto select-text shadow-inner">
        <pre className="text-slate-300 overflow-x-auto">
          <code>
            {currentSnippet.code.split('\n').map((line, i) => {
              let highlightedLine = line;
              const isComment = line.trim().startsWith('//') || line.trim().startsWith('#') || line.trim().startsWith('/*') || line.trim().startsWith('*');

              return (
                <div key={i} className="table-row">
                  <span className="table-cell pr-4 text-slate-600 select-none text-right w-6">
                    {i + 1}
                  </span>
                  <span
                    className={`table-cell whitespace-pre ${
                      isComment
                        ? 'text-slate-500 italic'
                        : line.includes('export') || line.includes('interface') || line.includes('function') || line.includes('return') || line.includes('async') || line.includes('def') || line.includes('import') || line.includes('while') || line.includes('void')
                        ? 'text-amber-300'
                        : line.includes('Engineer') || line.includes('SystemSpec') || line.includes('tile_buffer') || line.includes('np.uint8') || line.includes('int')
                        ? 'text-emerald-400'
                        : line.includes('"')
                        ? 'text-[#C5BDAE]'
                        : 'text-slate-200'
                    }`}
                  >
                    {highlightedLine}
                  </span>
                </div>
              );
            })}
          </code>
        </pre>
      </div>

      {/* Live Simulated Execution Log Console */}
      {executionLog && (
        <div className="mt-3 p-3 rounded-lg bg-[#091426] border border-emerald-900/60 font-mono text-[11px] text-emerald-400 animate-fadeIn">
          <div className="flex items-center justify-between text-slate-400 text-[10px] pb-1 mb-1 border-b border-slate-800">
            <span>TERMINAL OUTPUT // {currentSnippet.lang}</span>
            <span className="text-emerald-400">EXIT CODE: 0</span>
          </div>
          <pre className="whitespace-pre-wrap">{executionLog}</pre>
        </div>
      )}

      {/* Dynamic Tech Stack Ticker Underneath */}
      <div className="pt-3.5 mt-3 border-t border-[#E2DDD4]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-mono tracking-widest uppercase text-[#64748B]">
            Core Tech Stack
          </span>
          <span className="text-[11px] font-mono text-[#8A9A86]">
            10+ Frameworks
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {TECH_TICKER.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-[#FAF7F2] border border-[#E2DDD4] text-[#1E293B] shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

