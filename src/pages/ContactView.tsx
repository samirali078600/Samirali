import React, { useState } from 'react';
import { Mail, Github, Linkedin, Instagram, Copy, Check, Send } from 'lucide-react';
import { personalInfo } from '../data/personal.js';

export const ContactView: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-10 max-w-2xl mx-auto">
      {/* Section Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-2">
          Contact
        </h1>
        <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400">
          Get in Touch Directly
        </p>
      </div>

      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-8 shadow-xs">
        <div>
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
            Let's Connect
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Feel free to reach out to me for project collaborations, software discussions, or academic inquiries.
          </p>
        </div>

        {/* Email Direct Contact Card */}
        <div className="p-5 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase">
                Email Address
              </p>
              <p className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-white select-all">
                {personalInfo.email}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={personalInfo.emailUrl}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-medium text-xs hover:opacity-90 transition-opacity"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Email</span>
            </a>

            <button
              onClick={copyEmail}
              aria-label="Copy email address"
              className="p-2 rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
              title="Copy to clipboard"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Real Social Profiles */}
        <div>
          <h3 className="text-xs font-mono font-bold tracking-wider text-neutral-400 uppercase mb-4">
            Direct Social Profiles
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700 transition-colors group bg-neutral-50/50 dark:bg-neutral-800/30"
            >
              <Github className="w-5 h-5 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors" />
              <div>
                <p className="text-xs font-bold text-neutral-900 dark:text-white">
                  GitHub
                </p>
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400 font-mono">
                  samirali078600
                </p>
              </div>
            </a>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700 transition-colors group bg-neutral-50/50 dark:bg-neutral-800/30"
            >
              <Linkedin className="w-5 h-5 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors" />
              <div>
                <p className="text-xs font-bold text-neutral-900 dark:text-white">
                  LinkedIn
                </p>
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400 font-mono">
                  Samir Ali
                </p>
              </div>
            </a>

            <a
              href={personalInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700 transition-colors group bg-neutral-50/50 dark:bg-neutral-800/30"
            >
              <Instagram className="w-5 h-5 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors" />
              <div>
                <p className="text-xs font-bold text-neutral-900 dark:text-white">
                  Instagram
                </p>
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400 font-mono">
                  @samirali___7866
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
