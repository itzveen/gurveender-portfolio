import React from 'react';
import { EXPERIENCES, LEADERSHIP, CERTIFICATIONS } from '../data/portfolioData';
import { Briefcase, Award, Users, CheckCircle2, MapPin, Calendar } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-b border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career & Academic Journey</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Professional Experience & Leadership
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-2">
            Hands-on internships in Software Quality Assurance and Project Management, complemented by academic teaching assistantships at UGM.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6 mb-16">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#0d1017] border border-white/[0.08] hover:border-white/15 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-lg sm:text-xl font-bold text-white">{exp.role}</h3>
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 border border-white/10 text-neutral-300">
                      {exp.type}
                    </span>
                  </div>
                  <div className="text-sm font-medium text-indigo-400 mt-0.5">{exp.company}</div>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-neutral-500 sm:text-right">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-2 mb-5">
                {exp.highlights.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Skills badges */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-neutral-900 text-neutral-300 border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 2-Column Grid: Leadership & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Leadership & Activities */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#0c0f16] border border-white/[0.08]">
            <div className="flex items-center gap-2 text-sm font-bold text-white mb-5">
              <Users className="w-4 h-4 text-indigo-400" />
              <span>Leadership & Hackathons</span>
            </div>

            <div className="space-y-4">
              {LEADERSHIP.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-neutral-900/50 border border-white/5">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm font-semibold text-white">{item.role}</h4>
                    <span className="text-[11px] font-mono text-neutral-500">{item.period}</span>
                  </div>
                  <div className="text-xs text-indigo-300 font-medium mt-0.5 mb-1.5">{item.organization}</div>
                  <p className="text-xs text-neutral-300 leading-relaxed">{item.summary}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Verified Training */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#0c0f16] border border-white/[0.08]">
            <div className="flex items-center gap-2 text-sm font-bold text-white mb-5">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>Certifications & Verified Training</span>
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-neutral-900/50 border border-white/5 flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-semibold text-white">{cert.title}</h4>
                    <div className="text-xs text-emerald-400 font-medium mt-0.5">{cert.issuer}</div>
                    <div className="text-[11px] font-mono text-neutral-500 mt-1">{cert.credentialId}</div>
                  </div>
                  <span className="text-xs font-mono text-neutral-400 px-2 py-1 rounded bg-black/40 border border-white/5 shrink-0">
                    {cert.date}
                  </span>
                </div>
              ))}

              <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/20 text-xs text-neutral-300 leading-relaxed">
                <span className="text-indigo-300 font-semibold">Continuous Learning: </span>
                Active student in Software Engineering Technology at UGM with an ongoing GPA of 3.81/4.00, continuously integrating QA automation into modern product delivery.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
