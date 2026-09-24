import React from 'react';
import { ArrowRight, Mail, Github, Linkedin, Instagram } from 'lucide-react';
import { personalInfo } from '../data/personal.js';
import { ProfilePhoto } from '../components/ProfilePhoto';
import { NavView } from '../components/Navbar';

interface HomeViewProps {
  onNavigate: (view: NavView) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <section className="min-h-[calc(100vh-10rem)] flex flex-col justify-center items-center py-12 sm:py-20 text-center">
      <div className="max-w-2xl mx-auto px-4">
        {/* Profile Photo */}
        <div className="mb-8 flex justify-center">
          <ProfilePhoto size="hero" />
        </div>

        {/* Hero Salutation and Name */}
        <div className="space-y-2 mb-4">
          <p className="text-base sm:text-lg font-medium text-neutral-500 dark:text-neutral-400">
            Hi, I'm
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            {personalInfo.name}
          </h1>
        </div>

        {/* Subtitle / Title */}
        <p className="text-lg sm:text-xl font-semibold text-neutral-700 dark:text-neutral-300 mb-6">
          {personalInfo.title}
        </p>

        {/* Short Introduction */}
        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xl mx-auto mb-10">
          "{personalInfo.shortBio}"
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10">
          <button
            onClick={() => onNavigate('projects')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-medium text-sm hover:opacity-90 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 cursor-pointer shadow-xs"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 font-medium text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>Contact Me</span>
          </button>
        </div>

        {/* Small Social Icons */}
        <div className="flex items-center justify-center gap-4 text-neutral-500 dark:text-neutral-400">
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Samir Ali's GitHub Profile"
            className="p-2.5 rounded-full hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Samir Ali's LinkedIn Profile"
            className="p-2.5 rounded-full hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href={personalInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Samir Ali's Instagram Profile"
            className="p-2.5 rounded-full hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
