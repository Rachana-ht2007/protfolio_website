import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest('button') ||
          target.closest('a') ||
          target.closest('[role="button"]') ||
          target.classList.contains('interactive-cursor'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Precision inner reticle dot */}
      <div
        className="fixed pointer-events-none z-50 rounded-full transition-transform duration-75 ease-out"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          width: isHovered ? '8px' : '4px',
          height: isHovered ? '8px' : '4px',
          backgroundColor: '#1E293B',
          transform: `translate(-50%, -50%)`,
          opacity: 0.8,
        }}
      />
      {/* Ambient soft outer aura */}
      <div
        className="fixed pointer-events-none z-40 rounded-full transition-all duration-300 ease-out border"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          width: isHovered ? '44px' : '28px',
          height: isHovered ? '44px' : '28px',
          borderColor: isHovered ? 'rgba(30, 41, 59, 0.4)' : 'rgba(100, 116, 139, 0.25)',
          backgroundColor: isHovered ? 'rgba(138, 154, 134, 0.08)' : 'transparent',
          transform: `translate(-50%, -50%)`,
        }}
      />
    </>
  );
};
