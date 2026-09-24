import React, { useState } from 'react';
import { projects } from '../data/projects.js';
import { ExternalLink, Globe, Code, Calculator, Sparkles, MoonStar, Terminal, CheckCircle2 } from 'lucide-react';

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const ProjectsView: React.FC = () => {
  return (
    <div className="py-8 max-w-5xl mx-auto">
      {/* Clean Header: No unnecessary long subtitles or category pills */}
      <div className="mb-6 flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">
            Projects
          </h1>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 font-mono">
            Total {projects.length} Websites & Projects
          </p>
        </div>
      </div>

      {/* Grid of Numbered Websites with Small Image and Small Website Name below */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
        {projects.map((project: ProjectItem, index: number) => {
          const projectNumber = index + 1;
          const hasLive = Boolean(project.liveUrl && project.liveUrl.trim().length > 0);

          return (
            <ProjectThumbnailCard
              key={project.id}
              project={project}
              number={projectNumber}
              hasLive={hasLive}
            />
          );
        })}
      </div>
    </div>
  );
};

interface ProjectThumbnailCardProps {
  project: ProjectItem;
  number: number;
  hasLive: boolean;
}

const ProjectThumbnailCard: React.FC<ProjectThumbnailCardProps> = ({
  project,
  number,
  hasLive,
}) => {
  const [imgError, setImgError] = useState(false);

  // Helper icon for placeholder
  const getPlaceholderIcon = () => {
    switch (project.category.toLowerCase()) {
      case 'calculators':
        return <Calculator className="w-6 h-6 text-neutral-400" />;
      case 'islamic':
        return <MoonStar className="w-6 h-6 text-neutral-400" />;
      case 'ai':
        return <Sparkles className="w-6 h-6 text-neutral-400" />;
      case 'tools':
        return <Terminal className="w-6 h-6 text-neutral-400" />;
      default:
        return <Globe className="w-6 h-6 text-neutral-400" />;
    }
  };

  const cardContent = (
    <div className="group relative flex flex-col bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-2 sm:p-2.5 transition-all duration-200 hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-sm">
      {/* Number Badge (1, 2, 3...) */}
      <div className="absolute top-3 left-3 z-10 px-1.5 py-0.5 rounded-md bg-neutral-900/80 dark:bg-white/90 text-white dark:text-neutral-950 text-[10px] font-mono font-bold shadow-xs backdrop-blur-xs">
        {number}
      </div>

      {/* Chota sa Image */}
      <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-800/80 flex items-center justify-center border border-neutral-100 dark:border-neutral-800">
        {!imgError ? (
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <div className="flex flex-col items-center justify-center p-2 text-center">
            {getPlaceholderIcon()}
          </div>
        )}

        {hasLive && (
          <div className="absolute top-1.5 right-1.5 p-1 rounded-md bg-white/80 dark:bg-neutral-900/80 text-neutral-700 dark:text-neutral-300 shadow-xs">
            <ExternalLink className="w-3 h-3" />
          </div>
        )}
      </div>

      {/* Image ke niche website name chota sa */}
      <div className="pt-2 px-1 text-center">
        <p className="text-xs font-medium text-neutral-800 dark:text-neutral-200 leading-snug line-clamp-2 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
          {number}. {project.title}
        </p>
      </div>
    </div>
  );

  if (hasLive) {
    return (
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        title={`Visit ${project.title}`}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 rounded-xl"
      >
        {cardContent}
      </a>
    );
  }

  return <div>{cardContent}</div>;
};
