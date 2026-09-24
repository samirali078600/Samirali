import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';
import { educationData } from '../data/personal.js';

export const EducationView: React.FC = () => {
  return (
    <div className="py-10 max-w-3xl mx-auto">
      {/* Section Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-2">
          Education
        </h1>
        <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400">
          Academic Qualification & University Information
        </p>
      </div>

      <div className="space-y-6">
        {educationData.map((edu, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-xs"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-2 flex-1">
                <h2 className="text-xl font-bold text-neutral-900 dark:text-white">
                  {edu.degree}
                </h2>
                <p className="text-base font-medium text-neutral-700 dark:text-neutral-300">
                  {edu.institution}
                </p>

                <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs font-mono text-neutral-500 dark:text-neutral-400 pt-1">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.duration}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {edu.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-neutral-100 dark:border-neutral-800 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed flex items-start gap-3">
              <BookOpen className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
              <p>
                Department of Information Technology. Studying computer science fundamentals, data structures, algorithms, database systems, operating systems, and web technologies.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
