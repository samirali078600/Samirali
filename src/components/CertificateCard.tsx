import React, { useState } from 'react';
import { Award, ExternalLink, Download, FileText } from 'lucide-react';

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image?: string;
  file?: string;
  description: string;
}

interface CertificateCardProps {
  certificate: Certificate;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({ certificate }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden shadow-xs hover:border-neutral-400 dark:hover:border-neutral-700 transition-all flex flex-col justify-between">
      <div>
        {/* Certificate Preview */}
        <div className="w-full aspect-4/3 bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center overflow-hidden border-b border-neutral-200 dark:border-neutral-800">
          {certificate.image && !imgError ? (
            <img
              src={certificate.image}
              alt={certificate.title}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center justify-center p-6 text-center text-neutral-400 dark:text-neutral-500">
              <Award className="w-12 h-12 stroke-1 mb-2" />
              <span className="text-xs font-mono">{certificate.issuer}</span>
            </div>
          )}
        </div>

        {/* Certificate Info */}
        <div className="p-5">
          <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 mb-2 font-mono">
            <span>{certificate.issuer}</span>
            <span>{certificate.date}</span>
          </div>

          <h3 className="font-bold text-base text-neutral-900 dark:text-white mb-2">
            {certificate.title}
          </h3>

          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {certificate.description}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-5 pt-0 flex items-center gap-2">
        {certificate.file && (
          <>
            <a
              href={certificate.file}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition-opacity"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>View Certificate</span>
            </a>
            <a
              href={certificate.file}
              download
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>
          </>
        )}
      </div>
    </div>
  );
};
