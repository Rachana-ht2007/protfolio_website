import React, { useEffect, useState, useRef } from 'react';
import { STATS } from '../data/portfolioData';

interface SingleCounterProps {
  end: number;
  suffix: string;
  duration?: number;
  startCount: boolean;
}

const SingleCounter: React.FC<SingleCounterProps> = ({
  end,
  suffix,
  duration = 1800,
  startCount,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCount) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutQuart(progress);
      setCount(Math.floor(easedProgress * end));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [end, duration, startCount]);

  return (
    <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tabular-nums tracking-tight">
      {count}
      <span className="text-[#8A9A86] ml-0.5">{suffix}</span>
    </span>
  );
};

export const StatsCounter: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="max-w-7xl mx-auto px-6 sm:px-8 my-8 sm:my-12"
    >
      <div className="relative rounded-2xl bg-[#F4F1EA] border border-[#E2DDD4] p-6 sm:p-8 lg:p-10 shadow-[0_1px_3px_rgba(15,23,42,0.03),0_6px_16px_-4px_rgba(100,116,139,0.05)]">
        {/* Subtle grid line accents */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#E2DDD4]">
          {STATS.map((stat, idx) => (
            <div
              key={stat.id}
              className={`flex flex-col justify-between ${
                idx !== 0 ? 'pt-6 sm:pt-0 sm:pl-6 lg:pl-8' : ''
              }`}
            >
              <div>
                <SingleCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  startCount={inView}
                />
                <h2 className="text-sm sm:text-base font-semibold text-[#1E293B] mt-2 mb-1">
                  {stat.label}
                </h2>
              </div>
              <p className="text-xs text-[#64748B] font-normal leading-relaxed mt-2">
                {stat.context}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
