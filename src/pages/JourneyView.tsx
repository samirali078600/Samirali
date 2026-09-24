import React from 'react';
import { Milestone, CheckCircle2 } from 'lucide-react';
import { journeyTimeline } from '../data/personal.js';

export const JourneyView: React.FC = () => {
  return (
    <div className="py-10 max-w-3xl mx-auto">
      {/* Section Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-2">
          My Journey
        </h1>
        <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400">
          Academic Progress & Development Timeline
        </p>
      </div>

      {/* Timeline */}
      <div className="relative border-l-2 border-neutral-200 dark:border-neutral-800 ml-4 sm:ml-6 space-y-8 pl-6 sm:pl-8 py-2">
        {journeyTimeline.map((item, index) => (
          <div key={item.year} className="relative group">
            {/* Timeline node */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-white dark:bg-neutral-900 border-2 border-neutral-900 dark:border-white transition-transform group-hover:scale-110" />

            <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 shadow-xs transition-colors group-hover:border-neutral-400 dark:group-hover:border-neutral-700">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white">
                  {item.year}
                </span>
              </div>
              <h2 className="text-base font-bold text-neutral-900 dark:text-white mb-1">
                {item.title}
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
