import React from 'react';

export const TableOfContents: React.FC = () => {
  const leftItems = [
    { num: '01', title: 'About Me', href: '#about' },
    { num: '02', title: 'Professional Expertise', href: '#expertise' },
    { num: '03', title: 'Tools & Technologies', href: '#tools' },
    { num: '04', title: 'Professional Experience', href: '#experience' },
  ];

  const rightItems = [
    { num: '05', title: 'Selected Projects', href: '#projects' },
    { num: '06', title: 'Case Studies', href: '#case-studies' },
    { num: '07', title: 'Other Technical Projects', href: '#other-projects' },
    { num: '08', title: 'Contact', href: '#contact' },
  ];

  return (
    <section
      id="contents"
      className="relative bg-[#4A2525] w-full min-h-screen flex flex-col justify-center py-20 px-6 sm:px-12 xl:px-24"
    >
      <div className="max-w-[1680px] w-full mx-auto">
        {/* Title */}
        <h2 className="font-serif font-normal text-[#FAF7F2] text-[clamp(48px,6vw,96px)] leading-none mb-12 lg:mb-20">
          Contents
        </h2>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-6">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            {leftItems.map((item) => (
              <a
                key={item.num}
                href={item.href}
                className="group block relative py-5 border-b border-[#A58D7F]/60 hover:border-[#FAF7F2] transition-colors"
              >
                <div className="flex items-baseline gap-6 sm:gap-10">
                  <span className="font-serif text-2xl sm:text-3xl lg:text-[40px] text-[#A58D7F] group-hover:text-[#FAF7F2] transition-colors duration-200">
                    {item.num}
                  </span>
                  <span className="font-serif text-3xl sm:text-4xl lg:text-[54px] text-[#FAF7F2] tracking-tight group-hover:translate-x-2 transition-transform duration-200">
                    {item.title}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            {rightItems.map((item) => (
              <a
                key={item.num}
                href={item.href}
                className="group block relative py-5 border-b border-[#A58D7F]/60 hover:border-[#FAF7F2] transition-colors"
              >
                <div className="flex items-baseline gap-6 sm:gap-10">
                  <span className="font-serif text-2xl sm:text-3xl lg:text-[40px] text-[#A58D7F] group-hover:text-[#FAF7F2] transition-colors duration-200">
                    {item.num}
                  </span>
                  <span className="font-serif text-3xl sm:text-4xl lg:text-[54px] text-[#FAF7F2] tracking-tight group-hover:translate-x-2 transition-transform duration-200">
                    {item.title}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
