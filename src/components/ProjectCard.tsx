import React, { useState, useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { 
  FileText, 
  ExternalLink, 
  ShieldCheck, 
  Target, 
  Code2, 
  CheckCircle2, 
  Calendar, 
  Layers,
  Sparkles
} from 'lucide-react';
import { GithubIcon, GoogleDriveIcon, NotionIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
  activeLens: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, activeLens }) => {
  // Determine available tabs for this project
  const hasPm = !!project.pmSpec;
  const hasQa = !!project.qaSpec;
  const hasDev = !!project.devSpec;

  const getInitialTab = (): 'PM' | 'QA' | 'DEV' => {
    if (activeLens === 'PM' && hasPm) return 'PM';
    if (activeLens === 'QA' && hasQa) return 'QA';
    if (activeLens === 'DEV' && hasDev) return 'DEV';
    if (hasPm) return 'PM';
    if (hasQa) return 'QA';
    return 'DEV';
  };

  const [activeTab, setActiveTab] = useState<'PM' | 'QA' | 'DEV'>(getInitialTab);

  // Sync tab when lens changes
  useEffect(() => {
    if (activeLens === 'PM' && hasPm) setActiveTab('PM');
    else if (activeLens === 'QA' && hasQa) setActiveTab('QA');
    else if (activeLens === 'DEV' && hasDev) setActiveTab('DEV');
  }, [activeLens, hasPm, hasQa, hasDev]);

  return (
    <article className="rounded-2xl bg-[#0e1117] border border-white/[0.08] hover:border-white/20 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-lg">
      <div>
        {/* Card Header */}
        <div className="p-6 border-b border-white/[0.06] bg-gradient-to-b from-white/[0.02] to-transparent">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-medium tracking-wide uppercase border ${
                project.category === 'HYBRID' 
                  ? 'bg-purple-500/10 text-purple-300 border-purple-500/25'
                  : project.category === 'QA'
                  ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/25'
                  : project.category === 'PM'
                  ? 'bg-indigo-500/10 text-indigo-300 border-indigo-500/25'
                  : 'bg-cyan-500/10 text-cyan-300 border-cyan-500/25'
              }`}>
                {project.badge}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-mono">
              <Calendar className="w-3.5 h-3.5" />
              <span>{project.timeline}</span>
            </div>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {project.title}
          </h3>
          <p className="text-xs font-medium text-neutral-400 mt-1">
            {project.subtitle}
          </p>

          <p className="text-sm text-neutral-300 mt-3 leading-relaxed">
            {project.overview}
          </p>

          {/* Quick Stats Grid */}
          <div className="mt-4 grid grid-cols-3 gap-2 pt-3 border-t border-white/[0.06]">
            {project.impactMetrics.map((metric, i) => (
              <div key={i} className="p-2 rounded-lg bg-black/30 border border-white/5">
                <div className="text-[10px] text-neutral-500 uppercase font-mono tracking-wider">
                  {metric.label}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white mt-0.5 truncate">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dual-Lens Interactive Tab Switcher */}
        <div className="px-6 pt-4 pb-2 border-b border-white/[0.06] bg-neutral-950/40">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-neutral-500 mr-1 hidden sm:inline">Inspect:</span>
            {hasPm && (
              <button
                onClick={() => setActiveTab('PM')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === 'PM'
                    ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Target className="w-3.5 h-3.5" />
                <span>Product & PRD</span>
              </button>
            )}

            {hasQa && (
              <button
                onClick={() => setActiveTab('QA')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === 'QA'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>QA & Test Strategy</span>
              </button>
            )}

            {hasDev && (
              <button
                onClick={() => setActiveTab('DEV')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === 'DEV'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Engineering & Tech</span>
              </button>
            )}
          </div>
        </div>

        {/* Tab Content Section */}
        <div className="p-6 space-y-4">
          {/* PM TAB CONTENT */}
          {activeTab === 'PM' && project.pmSpec && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="text-xs text-neutral-300 bg-indigo-950/30 p-3 rounded-xl border border-indigo-500/20 leading-relaxed">
                <span className="font-semibold text-indigo-300">PM Focus: </span>
                {project.pmSpec.summary}
              </div>

              <div>
                <div className="text-xs font-mono uppercase text-neutral-500 tracking-wider mb-2">
                  Key Scope & Execution
                </div>
                <ul className="space-y-2">
                  {project.pmSpec.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables / External Links */}
              {project.pmSpec.deliverables && project.pmSpec.deliverables.length > 0 && (
                <div className="pt-2">
                  <div className="text-xs font-mono uppercase text-neutral-500 tracking-wider mb-2">
                    Artifacts & Documents
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.pmSpec.deliverables.map((doc, idx) => (
                      <a
                        key={idx}
                        href={doc.url || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-neutral-900 border border-white/10 hover:border-indigo-400/50 hover:bg-neutral-800 text-neutral-200 hover:text-white transition-all"
                      >
                        {doc.type === 'drive' ? (
                          <GoogleDriveIcon className="w-3.5 h-3.5" />
                        ) : doc.type === 'notion' ? (
                          <NotionIcon className="w-3.5 h-3.5" />
                        ) : (
                          <FileText className="w-3.5 h-3.5 text-indigo-400" />
                        )}
                        <span>{doc.name}</span>
                        <ExternalLink className="w-3 h-3 text-neutral-500 ml-1" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* QA TAB CONTENT */}
          {activeTab === 'QA' && project.qaSpec && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="text-xs text-neutral-300 bg-emerald-950/30 p-3 rounded-xl border border-emerald-500/20 leading-relaxed">
                <span className="font-semibold text-emerald-300">QA Architecture: </span>
                {project.qaSpec.summary}
              </div>

              {/* Test Stats Pill if available */}
              {project.qaSpec.testStats && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {project.qaSpec.testStats.map((stat, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-neutral-900/80 border border-white/5">
                      <div className="text-sm font-bold text-emerald-400 font-mono">{stat.count}</div>
                      <div className="text-[10px] text-neutral-400 mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}

              <div>
                <div className="text-xs font-mono uppercase text-neutral-500 tracking-wider mb-2">
                  Testing Rigor & Methodology
                </div>
                <ul className="space-y-2">
                  {project.qaSpec.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* QA Deliverables */}
              {project.qaSpec.deliverables && project.qaSpec.deliverables.length > 0 && (
                <div className="pt-2">
                  <div className="text-xs font-mono uppercase text-neutral-500 tracking-wider mb-2">
                    Test Suites & Repositories
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.qaSpec.deliverables.map((doc, idx) => (
                      <a
                        key={idx}
                        href={doc.url || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-neutral-900 border border-white/10 hover:border-emerald-400/50 hover:bg-neutral-800 text-neutral-200 hover:text-white transition-all"
                      >
                        {doc.type === 'github' ? (
                          <GithubIcon className="w-3.5 h-3.5 text-emerald-400" />
                        ) : doc.type === 'drive' ? (
                          <GoogleDriveIcon className="w-3.5 h-3.5" />
                        ) : (
                          <FileText className="w-3.5 h-3.5 text-emerald-400" />
                        )}
                        <span>{doc.name}</span>
                        <ExternalLink className="w-3 h-3 text-neutral-500 ml-1" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* DEV TAB CONTENT */}
          {activeTab === 'DEV' && project.devSpec && (
            <div className="space-y-4 animate-in fade-in duration-200">
              {/* Tech Stack Chips */}
              <div>
                <div className="text-xs font-mono uppercase text-neutral-500 tracking-wider mb-2">
                  Technologies Used
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.devSpec.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-cyan-950/40 text-cyan-300 border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs font-mono uppercase text-neutral-500 tracking-wider mb-2">
                  Implementation Highlights
                </div>
                <ul className="space-y-2">
                  {project.devSpec.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dev Deliverables */}
              {project.devSpec.deliverables && (
                <div className="pt-2">
                  <div className="text-xs font-mono uppercase text-neutral-500 tracking-wider mb-2">
                    Source Code & Deliverables
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.devSpec.deliverables.map((doc, idx) => (
                      <a
                        key={idx}
                        href={doc.url || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-neutral-900 border border-white/10 hover:border-cyan-400/50 hover:bg-neutral-800 text-neutral-200 hover:text-white transition-all"
                      >
                        <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{doc.name}</span>
                        <ExternalLink className="w-3 h-3 text-neutral-500 ml-1" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
