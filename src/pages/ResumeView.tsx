import React, { useState, useEffect } from 'react';
import { FileText, Download, ExternalLink, AlertCircle, CheckCircle } from 'lucide-react';
import { personalInfo, skillsData, educationData } from '../data/personal.js';

export const ResumeView: React.FC = () => {
  const [fileExists, setFileExists] = useState<boolean | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  useEffect(() => {
    // Check if the resume file actually exists in /public/resume/
    fetch(personalInfo.resumePath, { method: 'HEAD' })
      .then((res) => {
        // If content-type is pdf or 200 OK
        if (res.ok && res.headers.get('content-type')?.includes('pdf')) {
          setFileExists(true);
        } else if (res.ok && res.status === 200) {
          setFileExists(true);
        } else {
          setFileExists(false);
        }
      })
      .catch(() => {
        setFileExists(false);
      });
  }, []);

  const handleAction = (type: 'view' | 'download') => {
    if (fileExists) {
      if (type === 'view') {
        window.open(personalInfo.resumePath, '_blank');
      } else {
        const link = document.createElement('a');
        link.href = personalInfo.resumePath;
        link.download = 'Samir-Ali-Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } else {
      setStatusMessage('The PDF file (samir-ali-resume.pdf) is pending upload to /public/resume/. Verified academic summary is provided below.');
    }
  };

  return (
    <div className="py-10 max-w-3xl mx-auto">
      {/* Section Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-2">
          Curriculum Vitae / Resume
        </h1>
        <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400">
          Official Academic Profile & Technical Qualifications
        </p>
      </div>

      {/* Action Bar */}
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 sm:p-8 mb-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-base font-bold text-neutral-900 dark:text-white">
                Samir-Ali-Resume.pdf
              </h2>
              <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                Format: PDF · Expected at: /resume/samir-ali-resume.pdf
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleAction('view')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-medium text-xs hover:opacity-90 transition-opacity cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>View Resume</span>
            </button>

            <button
              onClick={() => handleAction('download')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 font-medium text-xs hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>

        {statusMessage && (
          <div className="mt-4 p-3.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-xs text-amber-800 dark:text-amber-300 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <p>{statusMessage}</p>
          </div>
        )}
      </div>

      {/* In-Page Real Resume Summary */}
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs font-sans">
        {/* Name & Contact */}
        <div className="border-b border-neutral-200 dark:border-neutral-800 pb-6">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
            {personalInfo.name}
          </h2>
          <p className="text-sm font-medium text-neutral-600 dark:text-neutral-300 mt-1">
            {personalInfo.title}
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-500 dark:text-neutral-400 font-mono mt-3">
            <span>{personalInfo.location}</span>
            <span>·</span>
            <span>{personalInfo.email}</span>
            <span>·</span>
            <span>GNIT (2024–2028)</span>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-xs font-mono font-bold tracking-wider text-neutral-400 uppercase mb-3">
            Education
          </h3>
          <div className="space-y-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <h4 className="font-bold text-neutral-900 dark:text-white text-sm">
                {educationData[0].degree}
              </h4>
              <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                {educationData[0].duration}
              </span>
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              {educationData[0].institution} · {educationData[0].location}
            </p>
          </div>
        </div>

        {/* Technical Skills Summary */}
        <div>
          <h3 className="text-xs font-mono font-bold tracking-wider text-neutral-400 uppercase mb-3">
            Technical Skills
          </h3>
          <div className="space-y-2 text-xs">
            <div>
              <span className="font-semibold text-neutral-800 dark:text-neutral-200">Programming: </span>
              <span className="text-neutral-600 dark:text-neutral-400 font-mono">{skillsData.programming.join(', ')}</span>
            </div>
            <div>
              <span className="font-semibold text-neutral-800 dark:text-neutral-200">Web Technologies: </span>
              <span className="text-neutral-600 dark:text-neutral-400 font-mono">{skillsData.web.join(', ')}</span>
            </div>
            <div>
              <span className="font-semibold text-neutral-800 dark:text-neutral-200">Database: </span>
              <span className="text-neutral-600 dark:text-neutral-400 font-mono">{skillsData.database.join(', ')}</span>
            </div>
            <div>
              <span className="font-semibold text-neutral-800 dark:text-neutral-200">Developer Tools: </span>
              <span className="text-neutral-600 dark:text-neutral-400 font-mono">{skillsData.tools.join(', ')}</span>
            </div>
            <div>
              <span className="font-semibold text-neutral-800 dark:text-neutral-200">Core CS: </span>
              <span className="text-neutral-600 dark:text-neutral-400 font-mono">{skillsData.core.join(', ')}</span>
            </div>
          </div>
        </div>

        {/* Real Profile Statement */}
        <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-mono">
          <p>
            Authentic academic record for Samir Ali. No unverified employment, internships, or certifications are claimed.
          </p>
        </div>
      </div>
    </div>
  );
};
