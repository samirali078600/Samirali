import React, { useState } from 'react';
import { personalInfo } from '../data/personal.js';

interface ProfilePhotoProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
}

export const ProfilePhoto: React.FC<ProfilePhotoProps> = ({ size = 'hero', className = '' }) => {
  const [imgSrc, setImgSrc] = useState<string>(personalInfo.profilePhoto);
  const [fallbackAttempt, setFallbackAttempt] = useState<number>(0);

  const handleError = () => {
    if (fallbackAttempt === 0) {
      // First fallback: Samir's actual GitHub profile picture
      setFallbackAttempt(1);
      setImgSrc(personalInfo.fallbackAvatar);
    } else {
      // Second fallback: show elegant monogram SA
      setFallbackAttempt(2);
    }
  };

  const dimensions = {
    sm: 'w-10 h-10 text-sm',
    md: 'w-16 h-16 text-lg',
    lg: 'w-24 h-24 text-2xl',
    hero: 'w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 text-4xl',
  }[size];

  if (fallbackAttempt >= 2) {
    return (
      <div
        className={`${dimensions} rounded-full bg-neutral-100 dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 flex items-center justify-center font-bold text-neutral-800 dark:text-neutral-100 shadow-sm select-none ${className}`}
        aria-label={personalInfo.name}
      >
        <span>SA</span>
      </div>
    );
  }

  return (
    <div
      className={`relative inline-block ${dimensions} rounded-full overflow-hidden p-1 bg-gradient-to-tr from-neutral-200 via-neutral-100 to-neutral-300 dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-900 ring-1 ring-neutral-200/80 dark:ring-neutral-800 shadow-sm ${className}`}
    >
      <img
        src={imgSrc}
        alt={`Profile photo of ${personalInfo.name}`}
        onError={handleError}
        className="w-full h-full object-cover rounded-full bg-neutral-100 dark:bg-neutral-800 transition-opacity duration-300"
        loading="eager"
      />
    </div>
  );
};
