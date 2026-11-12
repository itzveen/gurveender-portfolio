import React from 'react';

export const ProfessionalExpertise: React.FC = () => {
  const cards = [
    {
      num: '01',
      title: 'Project Management',
      items: [
        'Project planning',
        'Requirements gathering',
        'Timeline management',
        'Task coordination',
        'Progress monitoring',
        'Project documentation',
        'UAT coordination',
      ],
    },
    {
      num: '02',
      title: 'Quality Assurance',
      items: [
        'Manual testing',
        'Functional testing',
        'API testing',
        'Test case design',
        'Bug identification and reporting',
        'UAT support',
        'Test automation exploration',
      ],
    },
    {
      num: '03',
      title: 'Software Engineering',
      items: [
        'Web development',
        'Frontend and backend development',
        'API integration',
        'Software development fundamentals',
        'Version control',
        'CI/CD workflows',
      ],
    },
  ];

  return (
    <section
      id="expertise"
      className="relative bg-[#F5EFE6] w-full min-h-screen flex flex-col justify-center py-14 sm:py-16 lg:py-20 px-6 sm:px-12 xl:px-24"
    >
      <div className="max-w-[1680px] w-full mx-auto flex flex-col justify-between gap-6 sm:gap-8">
        <div>
          <h2 className="font-serif font-normal text-[#4A2525] text-[clamp(36px,5.5vw,90px)] leading-tight tracking-tight">
            Professional Expertise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 py-2">
          {cards.map((card) => (
            <div
              key={card.num}
              className="bg-[#FAF7F2] rounded-[16px] p-6 sm:p-7 xl:p-9 border border-[#D3C4B4]/60 hover:border-[#4A2525]/30 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <span className="font-serif text-2xl sm:text-3xl text-[#A58D7F] mb-2 block">
                {card.num}
              </span>
              <h3 className="font-serif font-normal text-xl sm:text-2xl lg:text-[28px] xl:text-[34px] text-[#4A2525] leading-tight mb-4 sm:mb-5">
                {card.title}
              </h3>

              <ul className="flex flex-col gap-2 sm:gap-2.5 font-sans text-xs sm:text-sm lg:text-base text-[#292321] leading-relaxed">
                {card.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="size-1.5 rounded-full bg-[#A58D7F] flex-shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-end pt-1">
          <a
            href="#tools"
            className="text-[11px] sm:text-xs uppercase tracking-widest text-[#654635] hover:text-[#4A2525] transition-colors"
          >
            Explore Tools &amp; Technologies ↓
          </a>
        </div>
      </div>
    </section>
  );
};
