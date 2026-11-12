import React from 'react';
import { SKILL_GROUPS } from '../data/portfolioData';
import { Target, ShieldCheck, Code2, Layers } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 border-b border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Capability Matrix</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Technical & Product Capabilities
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-2">
            Structured toolkit categorized into strategic product definition, software validation rigor, and core coding stacks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, idx) => {
            const isPM = group.accent === 'indigo';
            const isQA = group.accent === 'emerald';

            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-[#0d1017] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    {isPM && <Target className="w-5 h-5 text-indigo-400" />}
                    {isQA && <ShieldCheck className="w-5 h-5 text-emerald-400" />}
                    {!isPM && !isQA && <Code2 className="w-5 h-5 text-cyan-400" />}

                    <h3 className="text-base font-bold text-white tracking-tight">
                      {group.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all ${
                          isPM
                            ? 'bg-indigo-950/30 text-indigo-300 border-indigo-500/20 hover:border-indigo-400/40'
                            : isQA
                            ? 'bg-emerald-950/30 text-emerald-300 border-emerald-500/20 hover:border-emerald-400/40'
                            : 'bg-cyan-950/30 text-cyan-300 border-cyan-500/20 hover:border-cyan-400/40'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-neutral-500 font-mono">
                  {isPM && "Focus: Problem definition & Agile delivery"}
                  {isQA && "Focus: Zero-defect & scalable automation"}
                  {!isPM && !isQA && "Focus: Clean code & rapid prototyping"}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
