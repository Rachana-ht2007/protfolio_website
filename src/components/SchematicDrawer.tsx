import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Cpu, Database, GitBranch, Layers, Server } from 'lucide-react';
import { ProjectArchitecture } from '../types';

interface SchematicDrawerProps {
  architecture: ProjectArchitecture;
  projectTitle: string;
}

export const SchematicDrawer: React.FC<SchematicDrawerProps> = ({
  architecture,
  projectTitle,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-4 pt-4 border-t border-[#E2DDD4]">
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-xs font-mono text-[#64748B] hover:text-[#1E293B] py-1 cursor-pointer transition-colors group"
      >
        <span className="flex items-center gap-2">
          <Layers className="w-3.5 h-3.5 text-[#505F76]" />
          <span className="tracking-wide">
            {isOpen ? 'Close System Schematic' : 'View Architectural Schematic & Data Flow'}
          </span>
        </span>
        <span className="flex items-center gap-1 text-[11px] text-[#8A9A86] group-hover:text-[#1E293B]">
          {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </span>
      </button>

      {/* Collapsible Architecture Drawer */}
      {isOpen && (
        <div className="relative mt-4 rounded-xl p-5 bg-[#FAF7F2] border border-[#64748B]/30 shadow-inner">
          {/* Corner drafting crosshairs */}
          <span className="absolute top-2 left-2 text-[#64748B]/40 font-mono text-[10px] select-none">+</span>
          <span className="absolute top-2 right-2 text-[#64748B]/40 font-mono text-[10px] select-none">+</span>
          <span className="absolute bottom-2 left-2 text-[#64748B]/40 font-mono text-[10px] select-none">+</span>
          <span className="absolute bottom-2 right-2 text-[#64748B]/40 font-mono text-[10px] select-none">+</span>

          <div className="text-xs font-mono text-[#64748B] mb-3 pb-2 border-b border-[#E2DDD4] flex items-center justify-between">
            <span>SPEC: {projectTitle.toUpperCase()}</span>
            <span className="text-[#8A9A86]">ARCH-DOC-V1</span>
          </div>

          {/* Stack Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div className="p-3 rounded-lg bg-[#F4F1EA] border border-[#E2DDD4]">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#505F76] mb-1">
                <Cpu className="w-3 h-3" />
                <span>CLIENT LAYER</span>
              </div>
              <p className="text-xs text-[#1E293B] leading-relaxed">
                {architecture.client}
              </p>
            </div>

            <div className="p-3 rounded-lg bg-[#F4F1EA] border border-[#E2DDD4]">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#8A9A86] mb-1">
                <Server className="w-3 h-3" />
                <span>SERVER / ENGINE</span>
              </div>
              <p className="text-xs text-[#1E293B] leading-relaxed">
                {architecture.server}
              </p>
            </div>

            <div className="p-3 rounded-lg bg-[#F4F1EA] border border-[#E2DDD4]">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#D97706] mb-1">
                <Database className="w-3 h-3" />
                <span>DATA PERSISTENCE</span>
              </div>
              <p className="text-xs text-[#1E293B] leading-relaxed">
                {architecture.database}
              </p>
            </div>
          </div>

          {/* Data Flow Pipeline Sequence */}
          <div className="pt-2">
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#64748B] mb-2">
              <GitBranch className="w-3 h-3 text-[#1E293B]" />
              <span>DATA FLOW PIPELINE</span>
            </div>
            <ol className="space-y-1.5 text-xs text-[#45474C] pl-1 font-mono">
              {architecture.dataFlow.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#8A9A86] shrink-0 font-semibold">{idx + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Key Architectural Challenge */}
          <div className="mt-3.5 pt-3 border-t border-[#E2DDD4] text-xs text-[#64748B]">
            <span className="font-mono text-[11px] text-[#1E293B] font-medium mr-2">Key Challenge:</span>
            <span className="text-[#45474C]">{architecture.keyChallenges}</span>
          </div>
        </div>
      )}
    </div>
  );
};
