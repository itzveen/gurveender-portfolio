import React from 'react';

interface OtherTechnicalProjectsProps {
  onBack?: () => void;
}

export const OtherTechnicalProjects: React.FC<OtherTechnicalProjectsProps> = ({ onBack }) => {
  const projects = [
    {
      category: 'Frontend Development',
      title: 'CinePlex — Cinema Booking',
      description:
        'A cinema booking frontend for browsing movies, checking showtimes, selecting seats, and completing the booking flow with smooth state transitions.',
      github: 'https://github.com/kaurgurveend/CinePlex',
      technologies: [
        { name: 'HTML', icon: '/assets/html.svg' },
        { name: 'CSS', icon: '/assets/css.svg' },
        { name: 'JavaScript', icon: '/assets/javascript.svg' },
      ],
    },
    {
      category: 'Full Stack Development',
      title: 'Veen Moda — Inventory System',
      description:
        'A Laravel-based inventory system for a fabric store, featuring role-based access control, real-time stock tracking, and activity audit logs.',
      github: 'https://github.com/kaurgurveend/Management-System---Veen-Moda',
      technologies: [
        { name: 'Laravel', icon: '/assets/laravel.svg' },
        { name: 'PHP', icon: '/assets/php.svg' },
        { name: 'MySQL', icon: '/assets/mysql.svg' },
      ],
    },
    {
      category: 'Full Stack Development',
      title: 'Evently — Virtual Event Organizer',
      description:
        'An event management web app for creating events, registering participants, tracking ticket availability, and collecting attendee feedback.',
      github: 'https://github.com/kaurgurveend/Evently-Website',
      technologies: [
        { name: 'PHP', icon: '/assets/php.svg' },
        { name: 'MySQL', icon: '/assets/mysql.svg' },
        { name: 'Bootstrap', icon: '/assets/bootstrap.svg' },
      ],
    },
    {
      category: 'Frontend Development',
      title: 'Age Calculator',
      description:
        'A responsive web application that accurately calculates exact age in years, months, and days with custom date boundary validations.',
      github: 'https://github.com/kaurgurveend/Age-Calculator',
      technologies: [
        { name: 'HTML', icon: '/assets/html.svg' },
        { name: 'CSS', icon: '/assets/css.svg' },
        { name: 'JavaScript', icon: '/assets/javascript.svg' },
      ],
    },
  ];

  return (
    <section
      id="other-projects"
      className="relative bg-[#4A2525] w-full min-h-screen flex flex-col justify-center py-10 sm:py-14 px-6 sm:px-12 xl:px-24"
    >
      <div className="max-w-[1680px] w-full mx-auto flex flex-col justify-between gap-6 sm:gap-8">
        {/* Top Header with Back Button */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="font-serif font-normal text-[#FAF7F2] text-[clamp(32px,4.5vw,72px)] leading-tight tracking-tight">
              Other Technical Projects
            </h2>
            <p className="font-sans font-medium text-xs sm:text-sm md:text-base text-[#A58D7F] mt-1">
              Beyond planning and testing, I also build software hands-on.
            </p>
          </div>

          {onBack && (
            <button
              onClick={onBack}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-[1.5px] border-[#FAF7F2] text-[#FAF7F2] hover:bg-[#FAF7F2] hover:text-[#4A2525] font-sans font-medium text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all duration-200 cursor-pointer flex-shrink-0"
            >
              ← Back to Projects
            </button>
          )}
        </div>

        {/* 2x2 Grid of 4 Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 py-2">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-[#FAF7F2] rounded-[16px] p-5 sm:p-6 flex flex-col justify-between border border-[#FAF7F2]/10 hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300"
            >
              {/* Card Body */}
              <div>
                <span className="font-sans font-semibold text-[11px] sm:text-xs uppercase tracking-[1.28px] text-[#654635] block mb-1">
                  {project.category}
                </span>
                <h3 className="font-serif font-normal text-xl sm:text-2xl lg:text-[26px] text-[#4A2525] leading-tight mb-2">
                  {project.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#292321]/90 leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              {/* Technologies & GitHub CTA */}
              <div className="pt-4 border-t border-[#D3C4B4]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  {project.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="bg-[#F5EFE6] px-2.5 py-1 rounded-md flex items-center gap-1.5 border border-[#E6DACB]"
                    >
                      <img src={tech.icon} alt={tech.name} className="h-4 w-4 object-contain" />
                      <span className="font-sans text-xs font-medium text-[#4A2525]">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 border border-[#4A2525] text-[#4A2525] hover:bg-[#4A2525] hover:text-[#FAF7F2] font-sans font-medium text-xs px-4 py-2 rounded-full transition-all"
                >
                  <span>View GitHub</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Back Link at bottom */}
        {onBack && (
          <div className="text-center pt-2">
            <button
              onClick={onBack}
              className="text-xs uppercase tracking-widest text-[#FAF7F2]/80 hover:text-[#FAF7F2] underline cursor-pointer"
            >
              ← Back to Selected Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
