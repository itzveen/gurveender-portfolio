import React, { useState } from 'react';
import { Terminal, Play, CheckCircle2, RotateCcw, ShieldCheck, Bug, Sparkles } from 'lucide-react';

interface TestCase {
  id: string;
  suite: string;
  name: string;
  duration: string;
  status: 'passed' | 'running';
  edgeCaseNote: string;
}

export const InteractiveTestTerminal: React.FC = () => {
  const allTests: TestCase[] = [
    {
      id: '1',
      suite: 'SIMATKUL // API Suite (Postman/Newman)',
      name: 'POST /api/v1/schedule/validate -> Detect Room & Lecturer Collision',
      duration: '42ms',
      status: 'passed',
      edgeCaseNote: 'Prevent double-booking when 2 departments reserve Hall-A simultaneously.'
    },
    {
      id: '2',
      suite: 'SIMATKUL // Playwright POM (E2E)',
      name: 'e2e/schedule_builder.spec.ts -> Drag-and-drop course slot auto-snap',
      duration: '312ms',
      status: 'passed',
      edgeCaseNote: 'Validates calendar grid boundary and visual overlap warnings.'
    },
    {
      id: '3',
      suite: 'Tentang Dental // Mobile API',
      name: 'POST /v1/xray/upload -> Large DICOM (25MB) payload with network jitter',
      duration: '820ms',
      status: 'passed',
      edgeCaseNote: 'Tested chunked retry resilience; verified image integrity hash.'
    },
    {
      id: '4',
      suite: 'AIS UGM // Security & Role Perms',
      name: 'GET /api/v1/grades/batch -> Unauthorized student token rejection (403)',
      duration: '18ms',
      status: 'passed',
      edgeCaseNote: 'Ensured RBAC forbids cross-faculty score inspection.'
    }
  ];

  const [isRunning, setIsRunning] = useState(false);
  const [completedIndex, setCompletedIndex] = useState(allTests.length);

  const runSimulation = () => {
    setIsRunning(true);
    setCompletedIndex(0);

    let current = 0;
    const interval = setInterval(() => {
      current++;
      setCompletedIndex(current);
      if (current >= allTests.length) {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 450);
  };

  return (
    <section className="py-16 border-b border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Interactive Verification Simulator</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-bold text-white tracking-tight">
              Real-World Test Suite & Edge-Case Validator
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-xl">
              Preview how automated validation verifies critical user journeys across SIMATKUL and Tentang Dental before PM release sign-off.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={runSimulation}
              disabled={isRunning}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 text-neutral-950 font-mono text-xs font-semibold hover:bg-emerald-400 transition-all active:scale-95 disabled:opacity-50 shadow-md shadow-emerald-500/10"
            >
              {isRunning ? (
                <>
                  <RotateCcw className="w-3.5 h-3.5 animate-spin" />
                  <span>Running Test Suites...</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Re-run Automation Matrix</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Terminal Window */}
        <div className="rounded-2xl bg-[#090b10] border border-white/10 shadow-2xl overflow-hidden font-mono text-xs">
          {/* Terminal Titlebar */}
          <div className="px-4 py-3 bg-[#0f131a] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="text-neutral-400 text-[11px] ml-2">gurveender@ugm-qa-runner:~</span>
            </div>
            <div className="text-[11px] text-neutral-500 flex items-center gap-2">
              <span>Playwright + Postman CLI</span>
              <span className="text-emerald-400 font-bold">4 passed</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-4 sm:p-6 space-y-3 bg-[#07090e]">
            {allTests.map((test, idx) => {
              const isVisible = idx < completedIndex;
              return (
                <div
                  key={test.id}
                  className={`p-3 rounded-xl border transition-all duration-300 ${
                    isVisible
                      ? 'bg-neutral-900/60 border-white/10 opacity-100'
                      : 'bg-neutral-900/10 border-dashed border-white/5 opacity-40'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      {isVisible ? (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          PASS
                        </span>
                      ) : (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-neutral-800 text-neutral-400">
                          QUEUED
                        </span>
                      )}
                      <span className="text-neutral-400 text-[11px]">{test.suite}</span>
                    </div>
                    {isVisible && (
                      <span className="text-neutral-500 text-[11px]">{test.duration}</span>
                    )}
                  </div>

                  <div className="text-neutral-200 font-medium text-xs mt-1.5">
                    {test.name}
                  </div>

                  <div className="mt-1.5 text-[11px] text-neutral-400 flex items-start gap-1.5 bg-black/40 p-2 rounded border border-white/5">
                    <Bug className="w-3 h-3 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong className="text-neutral-300">Edge Case Validated:</strong> {test.edgeCaseNote}</span>
                  </div>
                </div>
              );
            })}

            {/* Terminal Footer Summary */}
            <div className="pt-2 text-[11px] text-neutral-400 flex flex-wrap items-center justify-between border-t border-white/10 gap-2">
              <div className="flex items-center gap-3">
                <span className="text-emerald-400 font-semibold">Test Suites: 4 passed, 4 total</span>
                <span className="text-neutral-500">•</span>
                <span>Zero Critical Flaws</span>
              </div>
              <div className="text-neutral-500">
                UAT Sign-off: <span className="text-indigo-400">Approved for PM Release</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
