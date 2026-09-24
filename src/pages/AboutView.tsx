import React from 'react';
import { MapPin, Calendar, GraduationCap, Code } from 'lucide-react';
import { personalInfo } from '../data/personal.js';
import { ProfilePhoto } from '../components/ProfilePhoto';

export const AboutView: React.FC = () => {
  return (
    <div className="py-10 max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-2">
          About Me
        </h1>
        <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400">
          Personal Background & Academic Status
        </p>
      </div>

      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-6 border-b border-neutral-200 dark:border-neutral-800">
          <ProfilePhoto size="lg" />
          <div className="space-y-1.5">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white">
              {personalInfo.name}
            </h2>
            <p className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
              {personalInfo.title}
            </p>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-neutral-500 dark:text-neutral-400 pt-1 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {personalInfo.location}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {personalInfo.duration}
              </span>
            </div>
          </div>
        </div>

        {/* Real Narrative */}
        <div className="space-y-4 text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
          {personalInfo.aboutParagraphs.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>

        {/* Quick Academic Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200/80 dark:border-neutral-800">
            <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 text-xs font-mono mb-1">
              <GraduationCap className="w-4 h-4 text-neutral-600 dark:text-neutral-300" />
              <span>COLLEGE</span>
            </div>
            <p className="text-sm font-semibold text-neutral-900 dark:text-white">
              {personalInfo.college}
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
              {personalInfo.degree}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200/80 dark:border-neutral-800">
            <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 text-xs font-mono mb-1">
              <Code className="w-4 h-4 text-neutral-600 dark:text-neutral-300" />
              <span>CURRENT FOCUS</span>
            </div>
            <p className="text-sm font-semibold text-neutral-900 dark:text-white">
              Web & Software Development
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
              Building practical projects & tools
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
