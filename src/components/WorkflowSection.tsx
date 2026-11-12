import React from 'react';
import { WORKFLOW_LAYERS } from '../data/portfolioData';
import { CheckCircle2, ArrowRight, Sparkles, Terminal, FileCheck, Layers, Eye } from 'lucide-react';

export const WorkflowSection: React.FC = () => {
  return (
    <section id="workflow" className="py-20 border-b border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Amin Hamzah Inspired Layered Methodology</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            How I Bridge Product Strategy & Quality Execution
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-3 leading-relaxed">
            Most product breakdowns stop at wireframes, while typical QA portfolios only list test execution. Here is the unified 4-layer methodology I apply across projects to eliminate communication gaps between business and engineering.
          </p>
        </div>

        {/* 4-Layer Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {WORKFLOW_LAYERS.map((layer, idx) => {
            const isPM = layer.accent === 'pm';
            const isQA = layer.accent === 'qa';
            const isHybrid = layer.accent === 'hybrid';

            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-[#0c0f16] border border-white/[0.08] hover:border-white/20 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Accent glow on top right */}
                <div className={`absolute top-0 right-0 w-32 h-32 blur-3xl pointer-events-none -z-10 transition-opacity ${
                  isPM 
                    ? 'bg-indigo-500/10 group-hover:bg-indigo-500/20'
                    : isQA 
                    ? 'bg-emerald-500/10 group-hover:bg-emerald-500/20'
                    : isHybrid 
                    ? 'bg-purple-500/10 group-hover:bg-purple-500/20'
                    : 'bg-cyan-500/10 group-hover:bg-cyan-500/20'
                }`} />

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-neutral-500 px-2.5 py-1 rounded-md bg-neutral-900 border border-white/5">
                      STAGE {layer.step}
                    </span>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-md border ${
                      isPM
                        ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
                        : isQA
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                        : isHybrid
                        ? 'bg-purple-500/10 text-purple-400 border-purple-500/20'
                        : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
                    }`}>
                      {layer.role}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {layer.phase}
                </h3>
                <div className="text-xs font-medium text-neutral-400 mt-1 mb-3">
                  {layer.headline}
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                  {layer.description}
                </p>

                {/* Tool Pills */}
                <div className="pt-4 border-t border-white/[0.06]">
                  <div className="text-[11px] font-mono uppercase text-neutral-500 tracking-wider mb-2">
                    Artifacts & Toolset:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {layer.tools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-neutral-900 text-neutral-300 border border-white/10"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
