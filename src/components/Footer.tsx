import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Copy, Check, ArrowUpRight, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="pt-20 pb-12 bg-[#06070a] border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Call to action card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#11141c] to-[#0d0f15] border border-white/10 text-center relative overflow-hidden mb-16 shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[150px] bg-indigo-500/10 blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-300 font-mono mb-4">
            <span>Ready to scale your next product?</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight max-w-xl mx-auto">
            Let's build reliable, user-loved software together.
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 max-w-md mx-auto mt-3">
            Open for full-time or internship opportunities in Product Management, Quality Assurance, and Software Engineering.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-neutral-950 font-medium text-sm hover:bg-neutral-200 transition-all shadow-md active:scale-95"
            >
              <Mail className="w-4 h-4 text-neutral-900" />
              <span>Send an Email</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-neutral-900 border border-white/15 text-neutral-200 font-medium text-sm hover:bg-neutral-800 transition-all hover:border-white/30"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300 font-mono text-xs">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-neutral-400" />
                  <span className="font-mono text-xs">Copy Email</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={PERSONAL_INFO.vercel}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
              <span>Previous Vercel</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
