import React from 'react';
import { PERSONAL_INFO, QUICK_METRICS } from '../data/portfolioData';
import { ArrowDownRight, Mail, ExternalLink, ShieldCheck, Target, Layers } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  activeLens: string;
}

export const Hero: React.FC<HeroProps> = ({ activeLens }) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-white/[0.08] overflow-hidden">
      {/* Background ambient gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-indigo-500/10 via-emerald-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Availability Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-neutral-300 mb-6 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-medium">Open to PM & QA Opportunities</span>
          <span className="text-neutral-500">•</span>
          <span className="text-neutral-400 font-mono text-[11px]">{PERSONAL_INFO.location}</span>
        </div>

        {/* Hero Title & Identity */}
        <div className="max-w-4xl space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
            Bridging{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-300 to-indigo-200">
              Product Vision
            </span>{' '}
            with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
              Engineering Rigor
            </span>
            .
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 max-w-3xl leading-relaxed">
            I am <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>, a Software Engineering student at Universitas Gadjah Mada (UGM). I don't just specify what to build—I stress-test system boundaries, design test automation architectures, and ensure zero critical leaks before production release.
          </p>

          {/* Lens Context Helper Pill */}
          {activeLens !== 'ALL' && (
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-lg bg-neutral-900 border border-white/15 text-xs text-neutral-300 font-mono animate-in fade-in">
              <span className="text-neutral-400">Current Perspective:</span>
              {activeLens === 'PM' && (
                <span className="text-indigo-400 font-semibold flex items-center gap-1">
                  <Target className="w-3.5 h-3.5" /> Product Manager (Discovery, PRD, Sprints)
                </span>
              )}
              {activeLens === 'QA' && (
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> QA Engineer (Playwright, API, Edge Cases)
                </span>
              )}
              {activeLens === 'DEV' && (
                <span className="text-cyan-400 font-semibold flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5" /> Full-Stack Engineering (Kotlin, Python, Web)
                </span>
              )}
            </div>
          )}
        </div>

        {/* Action Buttons & Socials */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-neutral-950 font-medium text-sm hover:bg-neutral-200 transition-all shadow-md active:scale-95"
          >
            Explore Case Studies
            <ArrowDownRight className="w-4 h-4 text-neutral-900" />
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 border border-white/15 text-white font-medium text-sm hover:bg-neutral-800 transition-all hover:border-white/30"
          >
            <Mail className="w-4 h-4 text-neutral-400" />
            Contact Direct
          </a>

          <div className="h-6 w-[1px] bg-white/10 hidden sm:block mx-1" />

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white hover:border-white/20 transition-all"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white hover:border-white/20 transition-all"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Impact Metrics Proof Strip */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {QUICK_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-neutral-900/60 border border-white/[0.08] hover:border-white/15 transition-all"
            >
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">
                {metric.value}
              </div>
              <div className="text-xs font-semibold text-neutral-200 mt-1">{metric.label}</div>
              <div className="text-[11px] text-neutral-500 font-mono mt-0.5">{metric.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
