import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Cover } from './components/Cover';
import { AboutMe } from './components/AboutMe';
import { ProfessionalExpertise } from './components/ProfessionalExpertise';
import { ToolsTechnologies } from './components/ToolsTechnologies';
import { ProfessionalExperience } from './components/ProfessionalExperience';
import { SelectedProjects } from './components/SelectedProjects';
import { CaseStudies } from './components/CaseStudies';
import { OtherTechnicalProjects } from './components/OtherTechnicalProjects';
import { Contact } from './components/Contact';

type PageView = 'home' | 'project-detail' | 'other-projects';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const handleSelectProject = (projectId: string) => {
    setSelectedProjectId(projectId);
    setCurrentPage('project-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedProjectId(null);
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 80);
  };

  const handleOpenOtherProjects = () => {
    setCurrentPage('other-projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavbarNavigate = (href: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setSelectedProjectId(null);
      setTimeout(() => {
        if (href === '#' || !href) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const id = href.replace('#', '');
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      if (href === '#' || !href) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const id = href.replace('#', '');
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // ===== PAGE: Project Detail =====
  if (currentPage === 'project-detail' && selectedProjectId) {
    return (
      <div className="min-h-screen bg-[#FAF7F2] text-[#292321] selection:bg-[#4A2525]/20 selection:text-[#4A2525]">
        <Navbar onNavigate={handleNavbarNavigate} />
        <main className="pt-16">
          <CaseStudies selectedId={selectedProjectId} onClose={handleBackToHome} />
        </main>
      </div>
    );
  }

  // ===== PAGE: Other Technical Projects =====
  if (currentPage === 'other-projects') {
    return (
      <div className="min-h-screen bg-[#4A2525] text-[#292321] selection:bg-[#FAF7F2]/20 selection:text-[#FAF7F2]">
        <Navbar onNavigate={handleNavbarNavigate} />
        <main className="pt-16 animate-fade-in-up">
          <OtherTechnicalProjects onBack={handleBackToHome} />
        </main>
      </div>
    );
  }

  // ===== PAGE: Home (default) =====
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#292321] selection:bg-[#4A2525]/20 selection:text-[#4A2525]">
      {/* Top Floating Navigation */}
      <Navbar onNavigate={handleNavbarNavigate} />

      <main className="animate-fade-in-up">
        {/* 01 Cover — Hero with name & portrait */}
        <Cover />

        {/* 02 About Me */}
        <AboutMe />

        {/* 03 Professional Expertise */}
        <ProfessionalExpertise />

        {/* 04 Tools & Technologies */}
        <ToolsTechnologies />

        {/* 05 Professional Experience */}
        <ProfessionalExperience />

        {/* 06 Selected Projects (4 cards) — click navigates to separate page */}
        <SelectedProjects
          onSelectProject={handleSelectProject}
          onExploreOtherProjects={handleOpenOtherProjects}
        />

        {/* 07 Contact */}
        <Contact />
      </main>
    </div>
  );
};

export default App;
