import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative bg-[#4A2525] w-full min-h-screen flex flex-col justify-center py-12 sm:py-16 lg:py-20 px-6 sm:px-12 xl:px-24 overflow-hidden"
    >
      {/* Background Decor graphic */}
      <div className="absolute right-[-150px] bottom-[-150px] lg:right-[-80px] lg:bottom-[-80px] w-[350px] sm:w-[450px] lg:w-[650px] aspect-square pointer-events-none select-none opacity-30 lg:opacity-60">
        <img
          src="/assets/contact-decor.svg"
          alt="Contact Decor"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="relative z-10 max-w-[1680px] w-full mx-auto flex flex-col justify-between flex-1 gap-6 sm:gap-8 my-auto">
        {/* Top Tag & Headline */}
        <div>
          <p className="font-sans font-medium text-xs sm:text-sm text-[#A58D7F] tracking-[1.28px] uppercase mb-2 sm:mb-4">
            Thank you for exploring my portfolio
          </p>

          <h2 className="font-serif font-normal text-[#FAF7F2] text-[clamp(32px,5.5vw,86px)] leading-[1.08] tracking-tight max-w-[1100px]">
            Let&apos;s Build Something Meaningful.
          </h2>
        </div>

        {/* Subtitle & Value Proposition */}
        <p className="font-sans font-normal text-xs sm:text-base lg:text-lg xl:text-xl text-[#FAF7F2]/90 leading-relaxed max-w-[850px]">
          Open to opportunities in IT project management, business analysis, quality assurance, and software engineering, where clear planning and careful testing help a product ship well.
        </p>

        {/* Contact Link Chips */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-[1000px] pt-1 sm:pt-2">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=gurveenderjeetkaur@gmail.com&su=Opportunity%20%2F%20Collaboration%20Inquiry%20%E2%80%94%20Gurveender%20Jeet%20Kaur&body=Hi%20Gurveender%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%20with%20you%20regarding%20...%0A%0ABest%20regards%2C"
            target="_blank"
            rel="noopener noreferrer"
            title="Buka compose email di Gmail"
            className="group border-[1.5px] border-[#FAF7F2] text-[#FAF7F2] hover:bg-[#FAF7F2] hover:text-[#4A2525] font-sans font-medium text-xs sm:text-sm md:text-base px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-200 flex items-center justify-between gap-2"
          >
            <span className="truncate">Email · gurveenderjeetkaur@gmail.com</span>
            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform flex-shrink-0">↗</span>
          </a>

          <a
            href="https://www.linkedin.com/in/gurveenderjeetkaur"
            target="_blank"
            rel="noopener noreferrer"
            className="group border-[1.5px] border-[#FAF7F2] text-[#FAF7F2] hover:bg-[#FAF7F2] hover:text-[#4A2525] font-sans font-medium text-xs sm:text-sm md:text-base px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-200 flex items-center justify-between gap-2"
          >
            <span className="truncate">LinkedIn · linkedin.com/in/gurveenderjeetkaur</span>
            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform flex-shrink-0">↗</span>
          </a>

          <a
            href="https://github.com/kaurgurveend"
            target="_blank"
            rel="noopener noreferrer"
            className="group border-[1.5px] border-[#FAF7F2] text-[#FAF7F2] hover:bg-[#FAF7F2] hover:text-[#4A2525] font-sans font-medium text-xs sm:text-sm md:text-base px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-200 flex items-center justify-between gap-2"
          >
            <span className="truncate">GitHub · github.com/kaurgurveend</span>
            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform flex-shrink-0">↗</span>
          </a>

          <a
            href="https://gurveen-portofolio.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group border-[1.5px] border-[#FAF7F2] text-[#FAF7F2] hover:bg-[#FAF7F2] hover:text-[#4A2525] font-sans font-medium text-xs sm:text-sm md:text-base px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-200 flex items-center justify-between gap-2"
          >
            <span className="truncate">Portfolio · gurveen-portofolio.vercel.app</span>
            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform flex-shrink-0">↗</span>
          </a>
        </div>

        {/* Footer Credit */}
        <div className="pt-4 sm:pt-6 border-t border-[#FAF7F2]/20 flex justify-between items-center text-xs text-[#FAF7F2]/60">
          <p>© 2026 Gurveender Jeet Kaur. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};
