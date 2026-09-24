import React, { useState } from 'react';
import { ExternalLink, Github, Code, Sparkles, MoonStar, Calculator, Terminal } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
  status: string;
  date: string;
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [imgError, setImgError] = useState(false);

  // Check whether real URLs actually exist
  const hasLiveDemo = Boolean(project.liveUrl && project.liveUrl.trim().length > 0);
  const hasGitHub = Boolean(project.githubUrl && project.githubUrl.trim().length > 0);

  // Category Icon helper for placeholder
  const getCategoryIcon = () => {
    switch (project.category.toLowerCase()) {
      case 'calculators':
        return <Calculator className="w-8 h-8 text-neutral-400" />;
      case 'islamic':
        return <MoonStar className="w-8 h-8 text-neutral-400" />;
      case 'ai':
        return <Sparkles className="w-8 h-8 text-neutral-400" />;
      case 'tools':
        return <Terminal className="w-8 h-8 text-neutral-400" />;
      default:
        return <Code className="w-8 h-8 text-neutral-400" />;
    }
  };

  return (
    <article className="group flex flex-col justify-between bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-200">
      <div>
        {/* Project Visual / Header */}
        <div className="relative w-full aspect-video bg-neutral-100 dark:bg-neutral-800/80 overflow-hidden flex items-center justify-center border-b border-neutral-200 dark:border-neutral-800">
          {!imgError ? (
            <img
              src={project.image}
              alt={project.title}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          ) : (
            <div className="flex flex-col items-center justify-center p-4 text-center">
              <div className="p-3 rounded-full bg-neutral-200/60 dark:bg-neutral-800 mb-2">
                {getCategoryIcon()}
              </div>
              <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                {project.category}
              </span>
            </div>
          )}
        </div>

        {/* Card Content */}
        <div className="p-5">
          {/* Metadata Row: Category · Status · Date (Clean unboxed typography) */}
          <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mb-2 font-mono">
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.status}</span>
            <span aria-hidden="true">·</span>
            <span>{project.date}</span>
          </div>

          {/* Project Title */}
          <h3 className="text-lg font-bold text-neutral-900 dark:text-white tracking-tight mb-2">
            {project.title}
          </h3>

          {/* Real Description */}
          <p className="text-sm text-neutral-600 dark:text-neutral-300 line-clamp-3 leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Technologies Used (Clean inline items with subtle border) */}
          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-neutral-100 dark:border-neutral-800/60">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons: ONLY rendered when real URLs exist! */}
      {(hasLiveDemo || hasGitHub) && (
        <div className="p-5 pt-0 flex items-center gap-2">
          {hasLiveDemo && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition-opacity"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          {hasGitHub && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          )}
        </div>
      )}
    </article>
  );
};
