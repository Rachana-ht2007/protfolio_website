/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { AmbientBackground } from './components/AmbientBackground';
import { CustomCursor } from './components/CustomCursor';
import { Hero } from './components/Hero';
import { StatsCounter } from './components/StatsCounter';
import { AboutSection } from './components/AboutSection';
import { ProjectGallery } from './components/ProjectGallery';
import { SkillMatrix } from './components/SkillMatrix';
import { TimelineSection } from './components/TimelineSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const handleExploreProjects = () => {
    const projectsElem = document.getElementById('projects');
    if (projectsElem) {
      projectsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#0F172A] relative selection:bg-[#E2DDD4] selection:text-[#0F172A]">
      {/* Precision ambient background & subtle interactive cursor */}
      <AmbientBackground />
      <CustomCursor />

      {/* Top Bar Navigation */}
      <Navbar />

      {/* Main Single-Page Portfolio Flow */}
      <main className="relative z-10">
        <Hero onExploreProjects={handleExploreProjects} />
        <StatsCounter />
        <AboutSection />
        <ProjectGallery />
        <SkillMatrix />
        <TimelineSection />
        <ContactSection />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}
