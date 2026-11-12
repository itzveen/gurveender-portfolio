import React from 'react';

export const ProfessionalExperience: React.FC = () => {
  const experiences = [
    {
      role: 'Project Manager Intern',
      company: 'Mahreen Indonesia',
      date: 'June 2026 – August 2026',
      tag: 'Professional internship',
      bullets: [
        'Cross-functional coordination across teams',
        'Task allocation & backlog prioritization',
        'Project progress monitoring & deadline tracking',
        'Follow-ups on deliverables & team alignment',
        'Weekly and monthly stakeholder reporting',
      ],
    },
    {
      role: 'Quality Assurance Intern',
      company: 'PT Kreasi Bali Sasmita Nusantara',
      date: 'September 2026 – December 2026',
      tag: 'Professional internship',
      bullets: [
        'Manual web application testing & scenario execution',
        'Structured test case execution & traceability',
        'Bug identification, severity categorization & reporting',
        'Comprehensive QA documentation & test summaries',
        'UAT support & developer regression verification',
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative bg-[#FAF7F2] w-full min-h-screen flex flex-col justify-center py-14 sm:py-16 lg:py-20 px-6 sm:px-12 xl:px-24"
    >
      <div className="max-w-[1680px] w-full mx-auto flex flex-col justify-between gap-6 sm:gap-8">
        {/* Header */}
        <div>
          <h2 className="font-serif font-normal text-[#4A2525] text-[clamp(36px,5.5vw,90px)] leading-tight tracking-tight">
            Professional Experience
          </h2>
          <p className="font-sans text-xs sm:text-sm md:text-base text-[#654635] mt-1">
            Industry internship tenures in product management coordination and quality engineering.
          </p>
        </div>

        {/* 2-Card Horizontal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 py-2">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-[#F5EFE6] rounded-[16px] p-5 sm:p-7 xl:p-8 border border-[#E6DACB] hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[1.28px] font-semibold text-[#654635]">
                    {exp.date}
                  </span>
                  <span className="inline-block border border-[#4A2525] text-[#4A2525] text-[11px] sm:text-xs font-sans font-medium px-3 py-0.5 rounded-full">
                    {exp.tag}
                  </span>
                </div>

                <h3 className="font-serif font-normal text-xl sm:text-2xl lg:text-[30px] xl:text-[34px] text-[#4A2525] leading-tight mb-1">
                  {exp.role}
                </h3>
                <p className="font-sans font-medium text-base sm:text-lg lg:text-xl text-[#654635] mb-4 sm:mb-5">
                  {exp.company}
                </p>

                <ul className="flex flex-col gap-2 font-sans text-xs sm:text-sm md:text-base text-[#292321] leading-relaxed">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="text-[#A58D7F] text-base leading-none mt-0.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-right pt-1">
          <a
            href="#projects"
            className="text-[11px] sm:text-xs uppercase tracking-widest text-[#654635] hover:text-[#4A2525] transition-colors"
          >
            Explore Selected Projects ↓
          </a>
        </div>
      </div>
    </section>
  );
};
