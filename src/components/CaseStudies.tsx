import React from 'react';

interface CaseStudiesProps {
  selectedId: string;
  onClose: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ selectedId, onClose }) => {
  return (
    <div id="case-study-detail" className="w-full flex flex-col animate-fade-in-up">
      {/* ================= 01 DENTAL X-RAY ================= */}
      {selectedId === 'dental' && (
        <article className="relative bg-[#FAF7F2] w-full min-h-[calc(100vh-4rem)] flex flex-col border-b border-[#D3C4B4]">
          {/* Slim Mahogany Header */}
          <header className="bg-[#4A2525] w-full py-3.5 sm:py-4.5 px-4 sm:px-8 xl:px-16 flex-shrink-0 shadow-md">
            <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <h2 className="font-serif font-normal text-[#FAF7F2] text-xl sm:text-2xl lg:text-[32px] leading-tight tracking-tight mb-1">
                  Dental X-ray Application
                </h2>
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-[#FAF7F2]/90">
                  <span className="border border-[#FAF7F2]/40 px-2.5 py-0.5 rounded-full bg-[#FAF7F2]/10 font-medium">Project Manager</span>
                  <span className="border border-[#FAF7F2]/40 px-2.5 py-0.5 rounded-full bg-[#FAF7F2]/10">Academic project</span>
                  <span className="border border-[#FAF7F2]/40 px-2.5 py-0.5 rounded-full bg-[#FAF7F2]/10">February – June 2026</span>
                  <span className="border border-[#FAF7F2]/40 px-2.5 py-0.5 rounded-full bg-[#FAF7F2]/10">Team of three</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-[1.5px] border-[#FAF7F2] text-[#FAF7F2] hover:bg-[#FAF7F2] hover:text-[#4A2525] font-sans font-medium text-xs sm:text-sm px-4 sm:px-5 py-2 rounded-full transition-all duration-200 flex-shrink-0 cursor-pointer"
              >
                ← Back to Projects
              </button>
            </div>
          </header>

          {/* Body Content - Responsive 2 Columns */}
          <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 xl:px-16 py-6 sm:py-8 flex-1 flex flex-col justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7 xl:gap-12 items-start">
              {/* Left Column: Overview, Contributions, Deliverables, Links */}
              <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5">
                <div>
                  <p className="font-sans font-semibold text-xs text-[#654635] uppercase tracking-[1.28px] mb-1.5">
                    01 Overview
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-[#292321] leading-relaxed">
                    Mobile application for dental clinics, focused on managing and uploading dental X-ray images with patient diagnosis records. I led requirements planning, documentation, and sprint coordination to keep the team aligned with clinical workflows.
                  </p>
                </div>

                <div>
                  <p className="font-sans font-semibold text-xs text-[#654635] uppercase tracking-[1.28px] mb-1.5">
                    02 My Contributions
                  </p>
                  <div className="flex flex-col gap-1 font-sans text-xs text-[#292321] leading-relaxed">
                    <p>• Requirements gathering &amp; clinic workflow mapping</p>
                    <p>• Software Requirements Specification (SRS) formulation</p>
                    <p>• Project timeline management &amp; task milestones</p>
                    <p>• User manual &amp; end-user documentation</p>
                    <p>• Development sprint coordination &amp; progress monitoring</p>
                    <p>• User Acceptance Testing (UAT) execution</p>
                    <p className="text-[#654635] font-medium pl-3">
                      Selenium &amp; Appium · 3-person cross-functional team
                    </p>
                  </div>
                </div>

                {/* Key Deliverables on Left Column */}
                <div>
                  <p className="font-sans font-semibold text-xs text-[#654635] uppercase tracking-[1.28px] mb-2">
                    Key Deliverables
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      'Software Requirements Specification (SRS)',
                      'Project timeline',
                      'User manual',
                      'Project planning documentation',
                      'UAT documentation',
                    ].map((deliverable, dIdx) => (
                      <span
                        key={dIdx}
                        className="border border-[#4A2525]/30 text-[#4A2525] font-sans font-medium text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full bg-[#FAF7F2]"
                      >
                        {deliverable}
                      </span>
                    ))}
                  </div>
                </div>

                {/* External Action Badges */}
                <div className="flex flex-wrap gap-2.5 pt-1">
                  <a
                    href="https://github.com/itzveen/Testing---Tentang-Dental.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 border-[1.5px] border-[#4A2525] text-[#4A2525] hover:bg-[#4A2525] hover:text-[#FAF7F2] font-sans font-medium text-xs px-4 py-2 rounded-full transition-all duration-200"
                  >
                    <span>Automation GitHub</span>
                    <span>↗</span>
                  </a>
                  <a
                    href="https://drive.google.com/drive/folders/1EfZAvEr1rVuz1b4Zk1KzWG0Py_WpkP8r?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 border-[1.5px] border-[#4A2525] text-[#4A2525] hover:bg-[#4A2525] hover:text-[#FAF7F2] font-sans font-medium text-xs px-4 py-2 rounded-full transition-all duration-200"
                  >
                    <span>View Drive Artifacts</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Path, Tools, Visual Screenshots */}
              <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
                {/* Project Path */}
                <div>
                  <p className="font-sans font-semibold text-xs text-[#654635] uppercase tracking-[1.28px] mb-2">
                    Project Path
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                    {[
                      { num: '01', title: 'Requirements' },
                      { num: '02', title: 'Planning' },
                      { num: '03', title: 'Timeline' },
                      { num: '04', title: 'Dev Sprint' },
                      { num: '05', title: 'UAT' },
                      { num: '06', title: 'Delivery' },
                    ].map((step, idx) => (
                      <div
                        key={idx}
                        className="bg-[#F5EFE6] rounded-[12px] p-2.5 flex flex-col justify-between h-[74px] sm:h-[78px] border border-[#E6DACB]"
                      >
                        <span className="font-serif text-xl sm:text-2xl text-[#A58D7F] leading-none">{step.num}</span>
                        <span className="font-sans text-[10px] sm:text-[11px] font-medium text-[#4A2525] leading-tight">
                          {step.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Tools */}
                <div>
                  <p className="font-sans font-semibold text-xs text-[#654635] uppercase tracking-[1.28px] mb-2">
                    Project Tools
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5">
                    <div className="bg-[#F5EFE6] rounded-[12px] px-3.5 py-2 sm:py-2.5 flex items-center gap-2.5 border border-[#E6DACB]">
                      <img src="/assets/jira.svg" alt="Jira" className="size-5 sm:size-5.5 object-contain" />
                      <div>
                        <p className="font-sans font-semibold text-xs text-[#4A2525]">Jira</p>
                        <p className="font-sans text-[11px] text-[#654635]">Task management &amp; sprints</p>
                      </div>
                    </div>
                    <div className="bg-[#F5EFE6] rounded-[12px] px-3.5 py-2 sm:py-2.5 flex items-center gap-2.5 border border-[#E6DACB]">
                      <img src="/assets/drawio.svg" alt="Draw.io" className="size-5 sm:size-5.5 object-contain" />
                      <div>
                        <p className="font-sans font-semibold text-xs text-[#4A2525]">Draw.io</p>
                        <p className="font-sans text-[11px] text-[#654635]">Use cases &amp; UML diagrams</p>
                      </div>
                    </div>
                    <div className="bg-[#F5EFE6] rounded-[12px] px-3.5 py-2 sm:py-2.5 flex items-center gap-2.5 border border-[#E6DACB]">
                      <img src="/assets/workspace.svg" alt="Google Workspace" className="h-4 sm:h-4.5 w-auto object-contain" />
                      <div>
                        <p className="font-sans font-semibold text-xs text-[#4A2525]">Google Workspace</p>
                        <p className="font-sans text-[11px] text-[#654635]">SRS, Docs, Sheets</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Screenshots & Previews */}
                <div>
                  <p className="font-sans font-semibold text-xs text-[#654635] uppercase tracking-[1.28px] mb-2">
                    Screenshots &amp; Document Artifacts
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
                    <div className="bg-[#F5EFE6] rounded-[12px] p-2 border border-[#E6DACB] flex flex-col items-center">
                      <img src="/assets/dental-screen-1.png" alt="Dental App Interface" className="h-[110px] sm:h-[135px] object-contain rounded" />
                      <span className="text-[10px] sm:text-[11px] text-[#654635] mt-1.5 font-medium">App Interface</span>
                    </div>
                    <div className="bg-[#F5EFE6] rounded-[12px] p-2 border border-[#E6DACB] flex flex-col items-center">
                      <img src="/assets/dental-doc-srs.png" alt="SRS Document" className="h-[110px] sm:h-[135px] object-contain rounded" />
                      <span className="text-[10px] sm:text-[11px] text-[#654635] mt-1.5 font-medium">SRS Document</span>
                    </div>
                    <div className="bg-[#F5EFE6] rounded-[12px] p-2 border border-[#E6DACB] flex flex-col items-center">
                      <img src="/assets/dental-doc-manual.png" alt="User Manual" className="h-[110px] sm:h-[135px] object-contain rounded" />
                      <span className="text-[10px] sm:text-[11px] text-[#654635] mt-1.5 font-medium">User Manual</span>
                    </div>
                    <div className="bg-[#F5EFE6] rounded-[12px] p-2 border border-[#E6DACB] flex flex-col items-center">
                      <img src="/assets/dental-doc-timeline.png" alt="Timeline" className="h-[110px] sm:h-[135px] object-contain rounded" />
                      <span className="text-[10px] sm:text-[11px] text-[#654635] mt-1.5 font-medium">Timeline</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      )}

      {/* ================= 02 SIMATKUL ================= */}
      {selectedId === 'simatkul' && (
        <article className="relative bg-[#FAF7F2] w-full min-h-[calc(100vh-4rem)] flex flex-col border-b border-[#D3C4B4]">
          <header className="bg-[#4A2525] w-full py-3.5 sm:py-4.5 px-4 sm:px-8 xl:px-16 flex-shrink-0 shadow-md">
            <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <h2 className="font-serif font-normal text-[#FAF7F2] text-xl sm:text-2xl lg:text-[32px] leading-tight tracking-tight mb-1">
                  SIMATKUL
                </h2>
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-[#FAF7F2]/90">
                  <span className="border border-[#FAF7F2]/40 px-2.5 py-0.5 rounded-full bg-[#FAF7F2]/10 font-medium">Quality Assurance</span>
                  <span className="border border-[#FAF7F2]/40 px-2.5 py-0.5 rounded-full bg-[#FAF7F2]/10">Academic project</span>
                  <span className="border border-[#FAF7F2]/40 px-2.5 py-0.5 rounded-full bg-[#FAF7F2]/10">August – December 2026</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-[1.5px] border-[#FAF7F2] text-[#FAF7F2] hover:bg-[#FAF7F2] hover:text-[#4A2525] font-sans font-medium text-xs sm:text-sm px-4 sm:px-5 py-2 rounded-full transition-all duration-200 flex-shrink-0 cursor-pointer"
              >
                ← Back to Projects
              </button>
            </div>
          </header>

          <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 xl:px-16 py-6 sm:py-8 flex-1 flex flex-col justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7 xl:gap-12 items-start">
              {/* Left Column */}
              <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5">
                <div>
                  <p className="font-sans font-semibold text-xs text-[#654635] uppercase tracking-[1.28px] mb-1.5">01 Overview</p>
                  <p className="font-sans text-xs sm:text-sm text-[#292321] leading-relaxed">
                    Academic management system supporting university course scheduling and administration, ensuring conflict-free timetable allocation across lecturers, lecture halls, and students.
                  </p>
                </div>

                <div>
                  <p className="font-sans font-semibold text-xs text-[#654635] uppercase tracking-[1.28px] mb-1.5">02 My Contributions</p>
                  <div className="flex flex-col gap-1 font-sans text-xs text-[#292321] leading-relaxed">
                    <p>• 43 manual test cases &amp; 58 API Swagger test cases</p>
                    <p>• Postman API test collection design &amp; boundary tests</p>
                    <p>• Conflict detection algorithm validation</p>
                    <p>• Structured bug reporting &amp; developer follow-up</p>
                    <p>• Regression testing &amp; UAT support</p>
                    <p>• Playwright Page Object Model (POM) exploration</p>
                  </div>
                </div>

                {/* Key Deliverables on Left */}
                <div>
                  <p className="font-sans font-semibold text-xs text-[#654635] uppercase tracking-[1.28px] mb-2">Key Deliverables</p>
                  <div className="flex flex-wrap gap-1.5">
                    {['Test cases matrix', 'API test suite', 'Bug reports', 'QA documentation'].map((d, i) => (
                      <span key={i} className="border border-[#4A2525]/30 text-[#4A2525] font-sans font-medium text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full bg-[#FAF7F2]">{d}</span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap gap-2.5 pt-1">
                  <a href="https://github.com/itzveen/simatkul-qa.git" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 border-[1.5px] border-[#4A2525] text-[#4A2525] hover:bg-[#4A2525] hover:text-[#FAF7F2] font-sans font-medium text-xs px-4 py-2 rounded-full transition-all duration-200">View QA Repo ↗</a>
                  <a href="https://drive.google.com/drive/folders/1XpW9iEZFjrbBQbZUiFbvhh-Swofxw0uE?usp=drive_link" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 border-[1.5px] border-[#4A2525] text-[#4A2525] hover:bg-[#4A2525] hover:text-[#FAF7F2] font-sans font-medium text-xs px-4 py-2 rounded-full transition-all duration-200">View Documentation ↗</a>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
                <div>
                  <p className="font-sans font-semibold text-xs text-[#654635] uppercase tracking-[1.28px] mb-2">Testing Workflow</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                    {[{ num: '01', title: 'Planning' },{ num: '02', title: 'API Tests' },{ num: '03', title: 'Bug Reports' },{ num: '04', title: 'Dev Sync' },{ num: '05', title: 'Retest' }].map((step, idx) => (
                      <div key={idx} className="bg-[#F5EFE6] rounded-[12px] p-2.5 flex flex-col justify-between h-[74px] sm:h-[78px] border border-[#E6DACB]">
                        <span className="font-serif text-xl sm:text-2xl text-[#A58D7F] leading-none">{step.num}</span>
                        <span className="font-sans text-[10px] sm:text-[11px] font-medium text-[#4A2525] leading-tight">{step.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-2.5 items-center">
                  <div className="sm:col-span-6 flex gap-2 sm:gap-2.5">
                    <div className="flex-1 bg-[#F5EFE6] rounded-[12px] px-3.5 py-2 sm:py-2.5 flex items-center gap-2 sm:gap-2.5 border border-[#E6DACB]">
                      <img src="/assets/postman.svg" alt="Postman" className="size-5 sm:size-5.5 object-contain" />
                      <div><p className="font-sans font-semibold text-xs text-[#4A2525]">Postman</p><p className="font-sans text-[11px] text-[#654635]">API Test Suite</p></div>
                    </div>
                    <div className="flex-1 bg-[#F5EFE6] rounded-[12px] px-3.5 py-2 sm:py-2.5 flex items-center gap-2 sm:gap-2.5 border border-[#E6DACB]">
                      <img src="/assets/playwright.svg" alt="Playwright" className="size-5 sm:size-5.5 object-contain" />
                      <div><p className="font-sans font-semibold text-xs text-[#4A2525]">Playwright</p><p className="font-sans text-[11px] text-[#654635]">E2E Tests</p></div>
                    </div>
                  </div>
                  <div className="sm:col-span-6 bg-[#F5EFE6] border-l-3 border-[#4A2525] px-3 py-2 sm:py-2.5 rounded-r-[12px]">
                    <p className="font-sans text-xs text-[#4A2525] italic leading-tight">
                      <strong className="not-italic font-semibold text-[#654635]">Key Finding:</strong> API testing surfaced edge cases in duplicate course validation.
                    </p>
                  </div>
                </div>

                <div>
                  <p className="font-sans font-semibold text-xs text-[#654635] uppercase tracking-[1.28px] mb-2">Testing Evidence</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5">
                    <div className="bg-[#F5EFE6] rounded-[12px] p-2 border border-[#E6DACB]"><img src="/assets/simatkul-dashboard.png" alt="Test Dashboard" className="w-full h-[120px] sm:h-[135px] object-cover rounded" /><p className="font-sans text-[10px] sm:text-[11px] text-center text-[#654635] mt-1.5 font-medium">QA Dashboard</p></div>
                    <div className="bg-[#F5EFE6] rounded-[12px] p-2 border border-[#E6DACB]"><img src="/assets/simatkul-api.png" alt="API Test Suite" className="w-full h-[120px] sm:h-[135px] object-cover rounded" /><p className="font-sans text-[10px] sm:text-[11px] text-center text-[#654635] mt-1.5 font-medium">Postman Suite</p></div>
                    <div className="bg-[#F5EFE6] rounded-[12px] p-2 border border-[#E6DACB]"><img src="/assets/simatkul-bug.png" alt="Bug Report" className="w-full h-[120px] sm:h-[135px] object-cover rounded" /><p className="font-sans text-[10px] sm:text-[11px] text-center text-[#654635] mt-1.5 font-medium">Bug Report</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      )}

      {/* ================= 03 PANENIN ================= */}
      {selectedId === 'panenin' && (
        <article className="relative bg-[#FAF7F2] w-full min-h-[calc(100vh-4rem)] flex flex-col border-b border-[#D3C4B4]">
          <header className="bg-[#4A2525] w-full py-3.5 sm:py-4.5 px-4 sm:px-8 xl:px-16 flex-shrink-0 shadow-md">
            <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <h2 className="font-serif font-normal text-[#FAF7F2] text-xl sm:text-2xl lg:text-[32px] leading-tight tracking-tight mb-1">
                  PanenIn — AI Smart Farming
                </h2>
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-[#FAF7F2]/90">
                  <span className="border border-[#FAF7F2]/40 px-2.5 py-0.5 rounded-full bg-[#FAF7F2]/10 font-medium">Project Manager</span>
                  <span className="border border-[#FAF7F2]/40 px-2.5 py-0.5 rounded-full bg-[#FAF7F2]/10">Academic project</span>
                  <span className="border border-[#FAF7F2]/40 px-2.5 py-0.5 rounded-full bg-[#FAF7F2]/10">May 2026</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-[1.5px] border-[#FAF7F2] text-[#FAF7F2] hover:bg-[#FAF7F2] hover:text-[#4A2525] font-sans font-medium text-xs sm:text-sm px-4 sm:px-5 py-2 rounded-full transition-all duration-200 flex-shrink-0 cursor-pointer"
              >
                ← Back to Projects
              </button>
            </div>
          </header>

          <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 xl:px-16 py-6 sm:py-8 flex-1 flex flex-col justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7 xl:gap-12 items-start">
              {/* Left Column */}
              <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5">
                <div>
                  <p className="font-sans font-semibold text-xs text-[#654635] uppercase tracking-[1.28px] mb-1.5">01 Overview</p>
                  <p className="font-sans text-xs sm:text-sm text-[#292321] leading-relaxed">
                    AI-assisted smart farming application combining real-time weather monitoring, farming calculators, and AI crop consultation. As PM, I defined user needs, managed MVP scoping, and coordinated design and development sprints.
                  </p>
                </div>

                <div>
                  <p className="font-sans font-semibold text-xs text-[#654635] uppercase tracking-[1.28px] mb-1.5">02 My Contributions</p>
                  <div className="flex flex-col gap-1 font-sans text-xs text-[#292321] leading-relaxed">
                    <p>• User problem validation &amp; MVP scope definition</p>
                    <p>• Business requirements document &amp; user story mapping</p>
                    <p>• Delivery timeline &amp; sprint roadmap planning</p>
                    <p>• Notion task management &amp; backlog grooming</p>
                    <p>• Pitch deck preparation &amp; product delivery</p>
                  </div>
                </div>

                {/* Key Deliverables on Left */}
                <div>
                  <p className="font-sans font-semibold text-xs text-[#654635] uppercase tracking-[1.28px] mb-2">Key Deliverables</p>
                  <div className="flex flex-wrap gap-1.5">
                    {['Project timeline', 'Requirement documentation', 'Pitch deck', 'Sprint planning documents'].map((d, i) => (
                      <span key={i} className="border border-[#4A2525]/30 text-[#4A2525] font-sans font-medium text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full bg-[#FAF7F2]">{d}</span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap gap-2.5 pt-1">
                  <a href="https://app.notion.com/p/PanenIn-10-25-Mei-2026-ce32eb71785d42a99059e1a9c0f5c0c3?source=copy_link" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 border-[1.5px] border-[#4A2525] text-[#4A2525] hover:bg-[#4A2525] hover:text-[#FAF7F2] font-sans font-medium text-xs px-4 py-2 rounded-full transition-all duration-200"><span>Notion Workspace</span><span>↗</span></a>
                  <a href="https://drive.google.com/drive/folders/1tKrX5Xd_0Ed2xxlBB-ANkx4iZU9aiWHq?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 border-[1.5px] border-[#4A2525] text-[#4A2525] hover:bg-[#4A2525] hover:text-[#FAF7F2] font-sans font-medium text-xs px-4 py-2 rounded-full transition-all duration-200"><span>View Documentation</span><span>↗</span></a>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
                <div>
                  <p className="font-sans font-semibold text-xs text-[#654635] uppercase tracking-[1.28px] mb-2">Planning Path</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                    {[{ num: '01', title: 'Needs' },{ num: '02', title: 'Scope' },{ num: '03', title: 'Concept' },{ num: '04', title: 'Timeline' },{ num: '05', title: 'Pitch' }].map((step, idx) => (
                      <div key={idx} className="bg-[#F5EFE6] rounded-[12px] p-2.5 flex flex-col justify-between h-[74px] sm:h-[78px] border border-[#E6DACB]">
                        <span className="font-serif text-xl sm:text-2xl text-[#A58D7F] leading-none">{step.num}</span>
                        <span className="font-sans text-[10px] sm:text-[11px] font-medium text-[#4A2525] leading-tight">{step.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-sans font-semibold text-xs text-[#654635] uppercase tracking-[1.28px] mb-2">Proposed Functionality</p>
                  <div className="flex flex-wrap gap-1.5">
                    {['Weather monitoring', 'Farming calculator', 'Smart notifications', 'AI consultation'].map((f, i) => (
                      <span key={i} className="border border-[#4A2525]/30 text-[#4A2525] font-sans font-medium text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full bg-[#FAF7F2]">{f}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-sans font-semibold text-xs text-[#654635] uppercase tracking-[1.28px] mb-2">Project Previews</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5">
                    <div className="bg-[#F5EFE6] rounded-[12px] p-2 border border-[#E6DACB]"><img src="/assets/panenin-overview.png" alt="PanenIn Overview" className="w-full h-[120px] sm:h-[135px] object-cover rounded" /><p className="font-sans text-[10px] sm:text-[11px] text-center text-[#654635] mt-1.5 font-medium">App Overview</p></div>
                    <div className="bg-[#F5EFE6] rounded-[12px] p-2 border border-[#E6DACB]"><img src="/assets/panenin-pitch.png" alt="Pitch Deck" className="w-full h-[120px] sm:h-[135px] object-cover rounded" /><p className="font-sans text-[10px] sm:text-[11px] text-center text-[#654635] mt-1.5 font-medium">Pitch Deck</p></div>
                    <div className="bg-[#F5EFE6] rounded-[12px] p-2 border border-[#E6DACB]"><img src="/assets/panenin-notion.png" alt="Notion Task Board" className="w-full h-[120px] sm:h-[135px] object-cover rounded" /><p className="font-sans text-[10px] sm:text-[11px] text-center text-[#654635] mt-1.5 font-medium">Notion Board</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      )}

      {/* ================= 04 AIS ================= */}
      {selectedId === 'ais' && (
        <article className="relative bg-[#FAF7F2] w-full min-h-[calc(100vh-4rem)] flex flex-col border-b border-[#D3C4B4]">
          <header className="bg-[#4A2525] w-full py-3.5 sm:py-4.5 px-4 sm:px-8 xl:px-16 flex-shrink-0 shadow-md">
            <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <h2 className="font-serif font-normal text-[#FAF7F2] text-xl sm:text-2xl lg:text-[32px] leading-tight tracking-tight mb-1">
                  Academic Information System (SIA)
                </h2>
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-[#FAF7F2]/90">
                  <span className="border border-[#FAF7F2]/40 px-2.5 py-0.5 rounded-full bg-[#FAF7F2]/10 font-medium">Project Management · BA</span>
                  <span className="border border-[#FAF7F2]/40 px-2.5 py-0.5 rounded-full bg-[#FAF7F2]/10">AIS</span>
                  <span className="border border-[#FAF7F2]/40 px-2.5 py-0.5 rounded-full bg-[#FAF7F2]/10">August – December 2025</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-[1.5px] border-[#FAF7F2] text-[#FAF7F2] hover:bg-[#FAF7F2] hover:text-[#4A2525] font-sans font-medium text-xs sm:text-sm px-4 sm:px-5 py-2 rounded-full transition-all duration-200 flex-shrink-0 cursor-pointer"
              >
                ← Back to Projects
              </button>
            </div>
          </header>

          <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 xl:px-16 py-6 sm:py-8 flex-1 flex flex-col justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7 xl:gap-12 items-start">
              {/* Left Column */}
              <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5">
                <div>
                  <p className="font-sans font-semibold text-xs text-[#654635] uppercase tracking-[1.28px] mb-1.5">01 Overview</p>
                  <p className="font-sans text-xs sm:text-sm text-[#292321] leading-relaxed">
                    Academic information system supporting academic administration processes, delivered under dynamic requirement changes, milestone tracking, and a strict delivery timeline.
                  </p>
                </div>

                <div>
                  <p className="font-sans font-semibold text-xs text-[#654635] uppercase tracking-[1.28px] mb-1.5">02 My Contributions</p>
                  <div className="flex flex-col gap-1 font-sans text-xs text-[#292321] leading-relaxed">
                    <p>• Requirements gathering &amp; scope control analysis</p>
                    <p>• MVP definition &amp; feature prioritization</p>
                    <p>• Business Requirements Document (BRD) &amp; SRS</p>
                    <p>• C4 system architecture &amp; UML sequence diagrams</p>
                    <p>• Sprint milestone tracking &amp; weekly status reports</p>
                    <p>• End-user documentation &amp; user manual</p>
                  </div>
                </div>

                {/* Key Deliverables on Left */}
                <div>
                  <p className="font-sans font-semibold text-xs text-[#654635] uppercase tracking-[1.28px] mb-2">Key Deliverables</p>
                  <div className="flex flex-wrap gap-1.5">
                    {['BRD', 'SRS', 'UML & C4 diagrams', 'MVP definition', 'Weekly reports', 'User manual'].map((d, i) => (
                      <span key={i} className="border border-[#4A2525]/30 text-[#4A2525] font-sans font-medium text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full bg-[#FAF7F2]">{d}</span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="pt-1">
                  <a href="https://drive.google.com/drive/folders/15-8hkq06LXRMmY5kNDBIrpIlEPsaJITi?usp=drive_link" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 border-[1.5px] border-[#4A2525] text-[#4A2525] hover:bg-[#4A2525] hover:text-[#FAF7F2] font-sans font-medium text-xs px-4 py-2 rounded-full transition-all duration-200"><span>View Documentation</span><span>↗</span></a>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
                <div>
                  <p className="font-sans font-semibold text-xs text-[#654635] uppercase tracking-[1.28px] mb-2">Scope-Control Approach</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                    {[{ num: '01', title: 'Changes' },{ num: '02', title: 'Review' },{ num: '03', title: 'Scope' },{ num: '04', title: 'Agreed' },{ num: '05', title: 'Reports' }].map((step, idx) => (
                      <div key={idx} className="bg-[#F5EFE6] rounded-[12px] p-2.5 flex flex-col justify-between h-[74px] sm:h-[78px] border border-[#E6DACB]">
                        <span className="font-serif text-xl sm:text-2xl text-[#A58D7F] leading-none">{step.num}</span>
                        <span className="font-sans text-[10px] sm:text-[11px] font-medium text-[#4A2525] leading-tight">{step.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-sans font-semibold text-xs text-[#654635] uppercase tracking-[1.28px] mb-2">Project Previews</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5">
                    <div className="bg-[#F5EFE6] rounded-[12px] p-2 border border-[#E6DACB]"><img src="/assets/ais-dashboard.png" alt="Manager Dashboard" className="w-full h-[120px] sm:h-[135px] object-cover rounded" /><p className="font-sans text-[10px] sm:text-[11px] text-center text-[#654635] mt-1.5 font-medium">Dashboard</p></div>
                    <div className="bg-[#F5EFE6] rounded-[12px] p-2 border border-[#E6DACB]"><img src="/assets/ais-srs.png" alt="Requirements SRS" className="w-full h-[120px] sm:h-[135px] object-cover rounded" /><p className="font-sans text-[10px] sm:text-[11px] text-center text-[#654635] mt-1.5 font-medium">SRS Doc</p></div>
                    <div className="bg-[#F5EFE6] rounded-[12px] p-2 border border-[#E6DACB]"><img src="/assets/ais-weekly.png" alt="Weekly Report" className="w-full h-[120px] sm:h-[135px] object-cover rounded" /><p className="font-sans text-[10px] sm:text-[11px] text-center text-[#654635] mt-1.5 font-medium">Weekly Report</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      )}
    </div>
  );
};
