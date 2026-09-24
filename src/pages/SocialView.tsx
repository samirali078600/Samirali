import React from 'react';
import { ExternalLink, Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { socialLinks, personalInfo } from '../data/personal.js';

export const SocialView: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github className="w-5 h-5" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />;
      case 'instagram':
        return <Instagram className="w-5 h-5" />;
      default:
        return <Mail className="w-5 h-5" />;
    }
  };

  return (
    <div className="py-10 max-w-2xl mx-auto">
      {/* Section Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-2">
          Social Links
        </h1>
        <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400">
          Official Online Profiles & Direct Channels
        </p>
      </div>

      <div className="space-y-3">
        {socialLinks.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target={item.name === 'Email' ? '_self' : '_blank'}
            rel={item.name === 'Email' ? undefined : 'noopener noreferrer'}
            className="flex items-center justify-between p-4 sm:p-5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:border-neutral-400 dark:hover:border-neutral-700 transition-all group shadow-xs"
          >
            <div className="flex items-center gap-4">
              <div className="p-2.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 group-hover:scale-105 transition-transform">
                {getIcon(item.icon)}
              </div>
              <div>
                <h2 className="text-sm font-bold text-neutral-900 dark:text-white">
                  {item.name}
                </h2>
                <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  {item.handle}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-xs font-medium text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
              <span>{item.name === 'Email' ? 'Compose' : 'Visit Profile'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
