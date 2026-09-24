import React from 'react';
import { Terminal, Globe, Database, Wrench, Layers } from 'lucide-react';
import { skillsData } from '../data/personal.js';

export const SkillsView: React.FC = () => {
  const categories = [
    {
      title: 'Programming',
      icon: Terminal,
      skills: skillsData.programming,
      note: 'Core languages studied and practiced',
    },
    {
      title: 'Web Development',
      icon: Globe,
      skills: skillsData.web,
      note: 'Frontend foundational technologies',
    },
    {
      title: 'Database',
      icon: Database,
      skills: skillsData.database,
      note: 'Relational database management',
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: skillsData.tools,
      note: 'Version control and code editor workflows',
    },
    {
      title: 'Core Computer Science',
      icon: Layers,
      skills: skillsData.core,
      note: 'Fundamental engineering coursework',
    },
  ];

  return (
    <div className="py-10 max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-2">
          Technical Skills
        </h1>
        <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400">
          Technologies & Fundamentals Learned
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.title}
              className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 shadow-xs"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="font-bold text-base text-neutral-900 dark:text-white">
                    {category.title}
                  </h2>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    {category.note}
                  </p>
                </div>
              </div>

              {/* Skills list - clean text tags with subtle border */}
              <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800/80">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-neutral-50 dark:bg-neutral-800/70 border border-neutral-200/90 dark:border-neutral-700/80 text-neutral-800 dark:text-neutral-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
