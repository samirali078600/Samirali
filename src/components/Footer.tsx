import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { personalInfo } from '../data/personal.js';
import { NavView } from './Navbar';

interface FooterProps {
  onNavigate: (view: NavView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-800/80 bg-white/50 dark:bg-neutral-950/50 py-8 mt-16 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Real copyright & affiliation */}
        <div className="text-center sm:text-left">
          <p className="text-xs text-neutral-600 dark:text-neutral-400">
            © {new Date().getFullYear()} {personalInfo.name} · {personalInfo.college}
          </p>
          <p className="text-[11px] text-neutral-400 dark:text-neutral-500 font-mono mt-0.5">
            {personalInfo.degree} ({personalInfo.duration})
          </p>
        </div>

        {/* Quick Nav & Social Links */}
        <div className="flex items-center gap-4 text-neutral-500 dark:text-neutral-400">
          <button
            onClick={() => onNavigate('home')}
            className="text-xs hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            Home
          </button>
          <span className="text-neutral-300 dark:text-neutral-700">·</span>
          <button
            onClick={() => onNavigate('projects')}
            className="text-xs hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            Projects
          </button>
          <span className="text-neutral-300 dark:text-neutral-700">·</span>
          <button
            onClick={() => onNavigate('contact')}
            className="text-xs hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            Contact
          </button>
          <span className="text-neutral-300 dark:text-neutral-700">·</span>

          <div className="flex items-center gap-2 ml-1">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href={personalInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
