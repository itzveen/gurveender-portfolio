import React from 'react';

export const AboutMe: React.FC = () => {
  return (
    <section
      id="about"
      className="relative bg-[#FAF7F2] w-full min-h-screen flex flex-col justify-center py-14 sm:py-16 lg:py-20 px-6 sm:px-12 xl:px-24"
    >
      <div className="max-w-[1680px] w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Heading, Bio & Pull Quote */}
          <div className="lg:col-span-6 flex flex-col gap-5 sm:gap-6 lg:gap-8">
            <h2 className="font-serif font-normal text-[#4A2525] text-[clamp(36px,5.5vw,90px)] leading-tight tracking-tight">
              About Me
            </h2>

            <p className="font-sans font-normal text-sm sm:text-base lg:text-lg xl:text-[20px] text-[#292321] leading-relaxed max-w-[850px]">
              I work on both sides of a software project: planning and coordination, and testing and quality. As a project manager on academic projects, I&apos;ve taken systems from requirements and SRS through to delivery. I test web applications manually and through APIs, and I&apos;ve built full-stack applications myself. I&apos;m a software engineering student at Universitas Gadjah Mada.
            </p>

            <div className="pt-3 sm:pt-4 border-t border-[#D3C4B4]">
              <blockquote className="font-serif italic text-xl sm:text-2xl lg:text-3xl xl:text-[42px] text-[#4A2525] leading-snug max-w-[850px]">
                Planning, testing, and building across the software lifecycle.
              </blockquote>
            </div>
          </div>

          {/* Right Column: 3 Distinct Cards */}
          <div className="lg:col-span-6 flex flex-col gap-3.5 sm:gap-4 lg:gap-5">
            {/* Card 1: Project Management */}
            <div className="bg-[#F5EFE6] rounded-[16px] p-5 sm:p-6 lg:p-7 border border-[#E6DACB] hover:shadow-md transition-shadow">
              <span className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#A58D7F] block mb-1">
                01
              </span>
              <h3 className="font-serif font-normal text-xl sm:text-2xl lg:text-[32px] xl:text-[36px] text-[#4A2525] leading-tight mb-1.5">
                Project Management
              </h3>
              <p className="font-sans text-xs sm:text-sm lg:text-base text-[#654635] leading-normal">
                Requirements, timelines, and team coordination.
              </p>
            </div>

            {/* Card 2: Quality Assurance (Highlight / Mahogany) */}
            <div className="bg-[#4A2525] rounded-[16px] p-5 sm:p-6 lg:p-7 shadow-md hover:shadow-lg transition-shadow">
              <span className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#A58D7F] block mb-1">
                02
              </span>
              <h3 className="font-serif font-normal text-xl sm:text-2xl lg:text-[32px] xl:text-[36px] text-[#FAF7F2] leading-tight mb-1.5">
                Quality Assurance
              </h3>
              <p className="font-sans text-xs sm:text-sm lg:text-base text-[#FAF7F2]/90 leading-normal">
                Manual and API testing, bug reporting, UAT support.
              </p>
            </div>

            {/* Card 3: Software Engineering */}
            <div className="bg-[#F5EFE6] rounded-[16px] p-5 sm:p-6 lg:p-7 border border-[#E6DACB] hover:shadow-md transition-shadow">
              <span className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#A58D7F] block mb-1">
                03
              </span>
              <h3 className="font-serif font-normal text-xl sm:text-2xl lg:text-[32px] xl:text-[36px] text-[#4A2525] leading-tight mb-1.5">
                Software Engineering
              </h3>
              <p className="font-sans text-xs sm:text-sm lg:text-base text-[#654635] leading-normal">
                Full-stack web development and technical collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
