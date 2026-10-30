import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Milestones', href: '#milestones' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'glass-scrim border-b border-[#E2DDD4] py-3.5 shadow-[0_2px_12px_rgba(15,23,42,0.04)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark (single text element) */}
        <a
          href="#"
          className="group flex items-center gap-2 text-lg sm:text-xl font-serif font-medium tracking-tight text-[#0F172A] whitespace-nowrap shrink-0"
        >
          <span>{PERSONAL_INFO.name}</span>
          <span className="text-xs font-mono text-[#8A9A86] font-normal tracking-wider opacity-70 group-hover:opacity-100 transition-opacity">
            [AI/DS]
          </span>
        </a>

        {/* Zone 2: Navigation links (single-line, subtle hover underline) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#64748B]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative py-1 text-[#45474C] hover:text-[#0F172A] transition-colors whitespace-nowrap shrink-0 group"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#1E293B] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#FAF7F2] bg-[#1E293B] rounded-lg hover:bg-[#0F172A] transition-all duration-200 shadow-[0_2px_8px_rgba(30,41,59,0.12)] hover:shadow-[0_4px_16px_rgba(30,41,59,0.2)] hover:-translate-y-0.5 whitespace-nowrap shrink-0"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#1E293B] hover:text-[#0F172A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#64748B]/20"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-scrim border-b border-[#E2DDD4] px-6 py-5 shadow-lg">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#1E293B] hover:text-[#0F172A] py-1 border-b border-[#E2DDD4]/40"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-2.5 px-4 text-sm font-medium text-[#FAF7F2] bg-[#1E293B] rounded-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
