import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { certificates } from '../data/certificates.js';
import { CertificateCard, Certificate } from '../components/CertificateCard';

export const CertificatesView: React.FC = () => {
  return (
    <div className="py-10 max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-2">
          Certificates
        </h1>
        <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400">
          Verified Credentials & Course Completions
        </p>
      </div>

      {certificates.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert: Certificate) => (
            <CertificateCard key={cert.id} certificate={cert} />
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-10 text-center space-y-4 max-w-lg mx-auto">
          <div className="w-12 h-12 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mx-auto text-neutral-400 dark:text-neutral-500">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-neutral-900 dark:text-white mb-1">
              Certificates will be added here.
            </h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Real certifications and credentials will appear dynamically as they are completed and uploaded. No unverified records are displayed.
            </p>
          </div>
          <div className="pt-2 flex items-center justify-center gap-2 text-xs font-mono text-neutral-400 dark:text-neutral-500">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Strictly real credentials only</span>
          </div>
        </div>
      )}
    </div>
  );
};
