import React, { useEffect, useState } from 'react';

export const AmbientBackground: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Precision architectural drafting grid */}
      <div className="absolute inset-0 bg-architectural-grid opacity-60" />

      {/* Floating ambient warmth & sage glow orbs that shift subtly on scroll */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[130px] opacity-40 transition-transform duration-1000 ease-out"
        style={{
          top: '-10%',
          right: '-5%',
          background: 'radial-gradient(circle, rgba(226, 232, 240, 0.7) 0%, rgba(138, 154, 134, 0.18) 50%, transparent 80%)',
          transform: `translate3d(0, ${scrollY * 0.08}px, 0)`,
        }}
      />
      <div
        className="absolute w-[700px] h-[700px] rounded-full blur-[140px] opacity-35 transition-transform duration-1000 ease-out"
        style={{
          top: '35%',
          left: '-10%',
          background: 'radial-gradient(circle, rgba(217, 119, 6, 0.08) 0%, rgba(244, 241, 234, 0.5) 50%, transparent 80%)',
          transform: `translate3d(0, ${-scrollY * 0.05}px, 0)`,
        }}
      />
      <div
        className="absolute w-[650px] h-[650px] rounded-full blur-[150px] opacity-30 transition-transform duration-1000 ease-out"
        style={{
          bottom: '5%',
          right: '5%',
          background: 'radial-gradient(circle, rgba(138, 154, 134, 0.15) 0%, rgba(203, 213, 225, 0.3) 60%, transparent 80%)',
          transform: `translate3d(0, ${scrollY * 0.03}px, 0)`,
        }}
      />

      {/* Subtle drafting crosshair markers in perimeter corners */}
      <div className="absolute top-24 left-8 text-[#64748B]/20 font-mono text-xs select-none">
        +
      </div>
      <div className="absolute top-24 right-8 text-[#64748B]/20 font-mono text-xs select-none">
        +
      </div>
      <div className="absolute bottom-16 left-8 text-[#64748B]/20 font-mono text-xs select-none">
        +
      </div>
      <div className="absolute bottom-16 right-8 text-[#64748B]/20 font-mono text-xs select-none">
        +
      </div>
    </div>
  );
};
