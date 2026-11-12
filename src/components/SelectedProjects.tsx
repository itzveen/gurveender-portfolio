import React from 'react';

interface SelectedProjectsProps {
  onSelectProject?: (projectId: string) => void;
  onExploreOtherProjects?: () => void;
}

export const SelectedProjects: React.FC<SelectedProjectsProps> = ({ onSelectProject, onExploreOtherProjects }) => {
  const projects = [
    {
      id: 'dental',
      role: 'Project Manager',
      title: 'Dental X-ray Application',
      description: 'Mobile app for dental clinics to manage and upload dental X-ray images with patient workflows.',
      image: '/assets/proj-dental.png',
    },
    {
      id: 'simatkul',
      role: 'Quality Assurance',
      title: 'SIMATKUL',
      description: 'Academic management system for course scheduling with automated conflict detection & API validation.',
      image: '/assets/proj-simatkul.png',
    },
    {
      id: 'panenin',
      role: 'Project Manager',
      title: 'Panenin — AI Smart Farming',
      description: 'AI-based smart farming app supporting agricultural decisions, weather tracking, and farmer consultation.',
      image: '/assets/proj-panenin.png',
    },
    {
      id: 'ais',
      role: 'Project Management & Business Analysis',
      title: 'Academic Information System (SIA)',
      description: 'Academic information system delivered with changing requirements, C4 modeling, and weekly milestone tracking.',
      image: '/assets/proj-ais.png',
    },
  ];

  return (
    <section
      id="projects"
      className="relative bg-[#FAF7F2] w-full min-h-screen flex flex-col justify-center py-14 sm:py-16 lg:py-20 px-6 sm:px-12 xl:px-24"
    >
      <div className="max-w-[1680px] w-full mx-auto flex flex-col justify-between gap-6 sm:gap-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3">
          <div>
            <h2 className="font-serif font-normal text-[#4A2525] text-[clamp(36px,5vw,80px)] leading-tight tracking-tight">
              Selected Projects
            </h2>
            <p className="font-sans text-xs sm:text-sm md:text-base text-[#654635] mt-1">
              Case studies in Project Management, Quality Assurance, and Product Delivery.
            </p>
          </div>

          <button
            onClick={onExploreOtherProjects}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-[1.5px] border-[#4A2525] text-[#4A2525] hover:bg-[#4A2525] hover:text-[#FAF7F2] font-sans font-medium text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all duration-200 cursor-pointer flex-shrink-0"
          >
            <span>Explore Other Technical Projects</span>
            <span>→</span>
          </button>
        </div>

        {/* 2x2 Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 py-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#F5EFE6] rounded-[16px] p-4 sm:p-5 xl:p-6 border border-[#E6DACB] flex flex-col sm:flex-row gap-4 sm:gap-5 items-center sm:items-stretch justify-between hover:shadow-md hover:border-[#4A2525]/30 transition-all duration-300"
            >
              {/* Screenshot Preview */}
              <div className="w-full sm:w-[160px] md:w-[180px] xl:w-[200px] h-[150px] sm:h-auto min-h-[140px] bg-white/70 rounded-[12px] overflow-hidden flex-shrink-0 flex items-center justify-center p-2.5 border border-[#E6DACB]/70 shadow-inner">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Project Info */}
              <div className="flex flex-col justify-between flex-1 py-0.5 text-center sm:text-left w-full">
                <div>
                  <span className="font-sans font-semibold text-[11px] sm:text-xs uppercase tracking-[1.28px] text-[#654635] block mb-1">
                    {project.role}
                  </span>
                  <h3 className="font-serif font-normal text-xl sm:text-2xl lg:text-[26px] text-[#4A2525] leading-tight mb-2">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#292321]/90 leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="flex justify-center sm:justify-start">
                  <button
                    onClick={() => onSelectProject && onSelectProject(project.id)}
                    className="inline-flex items-center gap-1.5 border-[1.5px] border-[#4A2525] text-[#4A2525] hover:bg-[#4A2525] hover:text-[#FAF7F2] font-sans font-medium text-xs sm:text-sm px-4 py-1.5 rounded-full transition-all duration-200 cursor-pointer"
                  >
                    <span>View Project Details</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom indicator */}
        <div className="pt-1 text-right">
          <a
            href="#contact"
            className="text-[11px] sm:text-xs uppercase tracking-widest text-[#654635] hover:text-[#4A2525] transition-colors"
          >
            Get in Touch ↓
          </a>
        </div>
      </div>
    </section>
  );
};
