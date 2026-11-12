import React from 'react';

export const Cover: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative bg-[#FAF7F2] w-full min-h-[580px] sm:min-h-[640px] h-[100dvh] max-h-[1080px] flex flex-col justify-between pt-16 sm:pt-20 pb-4 px-4 sm:px-8 md:px-12 xl:px-24 overflow-hidden select-none"
    >
      {/* Top Hairline Rule & Header Labels */}
      <div className="w-full max-w-[1680px] mx-auto flex-shrink-0 z-20">
        <div className="w-full h-[1.5px] bg-[#4A2525] mb-2 sm:mb-3" />
        <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center text-[9px] sm:text-[11px] md:text-xs font-sans font-medium tracking-[1.28px] uppercase gap-0.5 sm:gap-2">
          <p className="text-[#654635] whitespace-nowrap">
            Professional Portfolio
          </p>
          <p className="text-[#4A2525] text-left sm:text-right">
            Project Management · Quality Assurance · Software Engineering
          </p>
        </div>
      </div>

      {/* Main Composition Area */}
      <div className="relative w-full max-w-[1680px] mx-auto flex-1 flex flex-col items-center justify-center my-auto overflow-visible py-2">
        {/* Top Centered Title: Gurveender */}
        <h1 className="font-serif font-normal text-[#4A2525] text-[clamp(40px,8vw,160px)] leading-none text-center tracking-tight z-10 select-none mb-2 sm:mb-4 lg:mb-6">
          Gurveender
        </h1>

        {/* Center Visual: Halo + Portrait Photo */}
        <div className="relative z-20 w-[190px] xs:w-[230px] sm:w-[300px] md:w-[380px] lg:w-[440px] xl:w-[480px] flex items-end justify-center">
          {/* Halo SVG - ratio 720:638 */}
          <img
            src="/assets/halo.svg"
            alt="Portrait halo"
            className="w-full h-auto object-contain object-bottom pointer-events-none z-0 select-none"
          />

          {/* Portrait Photo - Sized so head matches halo height seamlessly */}
          <img
            src="/assets/portrait-cropped.png"
            alt="Gurveender Jeet Kaur"
            className="absolute bottom-0 z-10 w-[85.5%] h-auto object-contain object-bottom drop-shadow-md pointer-events-none select-none"
          />
        </div>

        {/* Flanking Names: Jeet (left) & Kaur (right) */}
        <div className="absolute inset-x-0 bottom-2 sm:bottom-6 lg:bottom-10 flex justify-between items-baseline px-2 sm:px-6 md:px-10 lg:px-16 z-30 pointer-events-none">
          <span className="font-serif italic font-normal text-[#4A2525] text-[clamp(28px,6.5vw,140px)] leading-none select-none">
            Jeet
          </span>
          <span className="font-serif italic font-normal text-[#4A2525] text-[clamp(28px,6.5vw,140px)] leading-none select-none">
            Kaur
          </span>
        </div>
      </div>

      {/* Bottom Sub-indicator */}
      <div className="w-full max-w-[1680px] mx-auto flex justify-center flex-shrink-0 pt-1 z-20">
        <a
          href="#about"
          className="text-[10px] sm:text-xs uppercase tracking-widest text-[#654635] hover:text-[#4A2525] flex items-center gap-1.5 transition-colors py-1"
        >
          <span>Explore Profile</span>
          <span className="animate-bounce">↓</span>
        </a>
      </div>
    </section>
  );
};
