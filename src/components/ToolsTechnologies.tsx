import React from 'react';

export const ToolsTechnologies: React.FC = () => {
  const pmTools = [
    { name: 'Jira', icon: '/assets/jira.svg' },
    { name: 'Notion', icon: '/assets/notion.svg' },
    { name: 'Google Workspace', icon: '/assets/workspace.svg', wide: true },
    { name: 'Microsoft Excel', icon: '/assets/excel.svg' },
    { name: 'Draw.io', icon: '/assets/drawio.svg' },
  ];

  const qaTools = [
    { name: 'Postman', icon: '/assets/postman.svg' },
    {
      name: 'Playwright',
      icon: '/assets/playwright.svg',
      badge: 'Exploring',
      dashed: true,
    },
    { name: 'Selenium', icon: '/assets/selenium.svg' },
    { name: 'Appium', icon: '/assets/appium.svg' },
  ];

  const devTools = [
    { name: 'GitHub', icon: '/assets/github.svg' },
    { name: 'Python', icon: '/assets/python.svg' },
    { name: 'JavaScript', icon: '/assets/javascript.svg' },
    { name: 'PHP', icon: '/assets/php.svg' },
    { name: 'Laravel', icon: '/assets/laravel.svg' },
    { name: 'Kotlin', icon: '/assets/kotlin.svg' },
    { name: 'React Native', icon: '/assets/reactnative.svg' },
    { name: 'HTML', icon: '/assets/html.svg' },
    { name: 'CSS', icon: '/assets/css.svg' },
    { name: 'CI/CD', isCiCd: true },
  ];

  return (
    <section
      id="tools"
      className="relative bg-[#FAF7F2] w-full min-h-screen flex flex-col justify-center py-14 sm:py-16 lg:py-20 px-6 sm:px-12 xl:px-24"
    >
      <div className="max-w-[1680px] w-full mx-auto flex flex-col justify-between gap-6 sm:gap-8">
        {/* Header */}
        <div>
          <h2 className="font-serif font-normal text-[#4A2525] text-[clamp(36px,5.5vw,90px)] leading-tight tracking-tight">
            Tools &amp; Technologies
          </h2>
          <p className="font-sans text-xs sm:text-sm md:text-base text-[#654635] mt-1">
            Stack and software instruments utilized across testing, coordination, and building.
          </p>
        </div>

        {/* 3-Section Layout */}
        <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 py-2">
          {/* Row 1: PM & Collaboration */}
          <div className="bg-[#F5EFE6] rounded-[16px] p-5 sm:p-6 border border-[#E6DACB] flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="lg:w-[320px] flex-shrink-0">
              <span className="font-sans text-[11px] sm:text-xs uppercase tracking-wider text-[#A58D7F] font-semibold block mb-0.5">
                Category · 5 Tools
              </span>
              <h3 className="font-serif font-normal text-xl sm:text-2xl lg:text-[26px] text-[#4A2525] leading-tight">
                Project Management &amp; Collaboration
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {pmTools.map((tool) => (
                <div
                  key={tool.name}
                  className="bg-[#FAF7F2] rounded-[12px] px-3.5 py-2 sm:px-4 sm:py-2.5 flex items-center gap-2.5 sm:gap-3 border border-[#D3C4B4]/50 shadow-sm hover:-translate-y-0.5 transition-transform"
                >
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className={`h-6 w-6 sm:h-7 sm:w-7 object-contain ${tool.wide ? 'w-auto max-w-[80px] sm:max-w-[90px]' : ''}`}
                  />
                  <span className="font-sans text-xs sm:text-sm md:text-base font-medium text-[#4A2525]">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: QA & Testing */}
          <div className="bg-[#F5EFE6] rounded-[16px] p-5 sm:p-6 border border-[#E6DACB] flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="lg:w-[320px] flex-shrink-0">
              <span className="font-sans text-[11px] sm:text-xs uppercase tracking-wider text-[#A58D7F] font-semibold block mb-0.5">
                Category · 4 Tools
              </span>
              <h3 className="font-serif font-normal text-xl sm:text-2xl lg:text-[26px] text-[#4A2525] leading-tight">
                Quality Assurance &amp; Testing
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {qaTools.map((tool) => (
                <div
                  key={tool.name}
                  className={`bg-[#FAF7F2] rounded-[12px] px-3.5 py-2 sm:px-4 sm:py-2.5 flex items-center gap-2.5 sm:gap-3 shadow-sm hover:-translate-y-0.5 transition-transform ${
                    tool.dashed
                      ? 'border-2 border-dashed border-[#4A2525]'
                      : 'border border-[#D3C4B4]/50'
                  }`}
                >
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="h-6 w-6 sm:h-7 sm:w-7 object-contain"
                  />
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-xs sm:text-sm md:text-base font-medium text-[#4A2525]">
                      {tool.name}
                    </span>
                    {tool.badge && (
                      <span className="text-[9px] sm:text-[10px] uppercase font-sans font-semibold bg-[#4A2525]/10 text-[#4A2525] px-2 py-0.5 rounded-full">
                        {tool.badge}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 3: Dev & Engineering */}
          <div className="bg-[#F5EFE6] rounded-[16px] p-5 sm:p-6 border border-[#E6DACB] flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="lg:w-[320px] flex-shrink-0">
              <span className="font-sans text-[11px] sm:text-xs uppercase tracking-wider text-[#A58D7F] font-semibold block mb-0.5">
                Category · 10 Instruments
              </span>
              <h3 className="font-serif font-normal text-xl sm:text-2xl lg:text-[26px] text-[#4A2525] leading-tight">
                Software Development &amp; DevOps
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {devTools.map((tool) => (
                <div
                  key={tool.name}
                  className="bg-[#FAF7F2] rounded-[12px] px-3.5 py-2 sm:px-4 sm:py-2.5 flex items-center gap-2.5 sm:gap-3 border border-[#D3C4B4]/50 shadow-sm hover:-translate-y-0.5 transition-transform"
                >
                  {tool.isCiCd ? (
                    <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-[#4A2525] text-[#FAF7F2] text-[10px] sm:text-xs font-bold flex items-center justify-center">
                      ∞
                    </div>
                  ) : (
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className="h-6 w-6 sm:h-7 sm:w-7 object-contain"
                    />
                  )}
                  <span className="font-sans text-xs sm:text-sm md:text-base font-medium text-[#4A2525]">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom indicator */}
        <div className="flex justify-end pt-1">
          <a
            href="#experience"
            className="text-[11px] sm:text-xs uppercase tracking-widest text-[#654635] hover:text-[#4A2525] transition-colors"
          >
            Explore Professional Experience ↓
          </a>
        </div>
      </div>
    </section>
  );
};
