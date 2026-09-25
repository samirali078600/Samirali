import React, { useState } from 'react';
import { projects } from '../data/projects.js';
import { ExternalLink, Globe, Calculator, Sparkles, MoonStar, Terminal, CheckCircle2 } from 'lucide-react';

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

/**
 * Ensures any external URL properly opens with https:// even if the user
 * only provided the domain (e.g., 'alquran-alkareem1.vercel.app').
 */
export const formatExternalUrl = (url?: string): string => {
  if (!url) return '';
  const trimmed = url.trim();
  if (!trimmed) return '';
  if (/^(https?:\/\/|mailto:|\/\/)/i.test(trimmed)) {
    return trimmed;
  }
  return `https://${trimmed}`;
};

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
          const liveUrl = formatExternalUrl(project.liveUrl);

          return (
            <ProjectThumbnailCard
              key={project.id}
              project={project}
              number={projectNumber}
              hasLive={hasLive}
              liveUrl={liveUrl}
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
  liveUrl: string;
}

const ProjectThumbnailCard: React.FC<ProjectThumbnailCardProps> = ({
  project,
  number,
  hasLive,
  liveUrl,
}) => {
  const [imgError, setImgError] = useState(false);

  // Helper theme colors & icon for clean placeholders
  const getCategoryMeta = () => {
    switch (project.category.toLowerCase()) {
      case 'calculators':
        return {
          icon: <Calculator className="w-6 h-6 text-sky-500 dark:text-sky-400" />,
          bg: 'bg-sky-50/70 dark:bg-sky-950/30 text-sky-700 dark:text-sky-300',
        };
      case 'islamic':
        return {
          icon: <MoonStar className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
          bg: 'bg-emerald-50/80 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300',
        };
      case 'ai':
        return {
          icon: <Sparkles className="w-6 h-6 text-purple-500 dark:text-purple-400" />,
          bg: 'bg-purple-50/80 dark:bg-purple-950/30 text-purple-700 dark:text-purple-300',
        };
      case 'tools':
        return {
          icon: <Terminal className="w-6 h-6 text-amber-500 dark:text-amber-400" />,
          bg: 'bg-amber-50/80 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300',
        };
      default:
        return {
          icon: <Globe className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />,
          bg: 'bg-indigo-50/80 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-300',
        };
    }
  };

  const meta = getCategoryMeta();

  const cardContent = (
    <div className="group relative flex flex-col bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-2 sm:p-2.5 transition-all duration-200 hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-md h-full">
      {/* Number Badge (1, 2, 3...) */}
      <div className="absolute top-3 left-3 z-10 px-1.5 py-0.5 rounded-md bg-neutral-900/85 dark:bg-white/90 text-white dark:text-neutral-950 text-[10px] font-mono font-bold shadow-xs backdrop-blur-xs">
        {number}
      </div>

      {/* Live Badge (if project has working live URL) */}
      {hasLive && (
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-emerald-600 text-white text-[9px] font-medium shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span>Live</span>
          <ExternalLink className="w-2.5 h-2.5 ml-0.5 opacity-90" />
        </div>
      )}

      {/* Chota sa Image / Thumbnail */}
      <div className={`relative w-full aspect-[4/3] rounded-lg overflow-hidden flex items-center justify-center border border-neutral-100 dark:border-neutral-800/80 ${meta.bg}`}>
        {!imgError ? (
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <div className="flex flex-col items-center justify-center p-3 text-center transition-transform group-hover:scale-110 duration-200">
            {meta.icon}
          </div>
        )}
      </div>

      {/* Image ke niche website name chota sa */}
      <div className="pt-2 px-1 text-center mt-auto">
        <p className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 leading-snug line-clamp-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          {number}. {project.title}
        </p>
        {hasLive && (
          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium inline-block mt-0.5">
            Click to open ↗
          </span>
        )}
      </div>
    </div>
  );

  if (hasLive) {
    return (
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        title={`Visit ${project.title}: ${liveUrl}`}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-xl cursor-pointer"
      >
        {cardContent}
      </a>
    );
  }

  return <div className="cursor-default">{cardContent}</div>;
};
