import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  MoreVertical, 
  X, 
  Sun, 
  Moon, 
  Home, 
  User, 
  Code2, 
  FolderGit2, 
  GraduationCap, 
  Award, 
  Milestone, 
  FileText, 
  Share2, 
  Mail,
  Check
} from 'lucide-react';
import { useTheme } from './ThemeContext';
import { personalInfo } from '../data/personal.js';

export type NavView = 
  | 'home'
  | 'about'
  | 'skills'
  | 'projects'
  | 'education'
  | 'certificates'
  | 'journey'
  | 'resume'
  | 'social'
  | 'contact';

interface NavbarProps {
  currentView: NavView;
  onNavigate: (view: NavView) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle ESC key and scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const menuItems = [
    { id: 'about' as NavView, label: 'About', icon: User },
    { id: 'skills' as NavView, label: 'Skills', icon: Code2 },
    { id: 'projects' as NavView, label: 'Projects', icon: FolderGit2 },
    { id: 'education' as NavView, label: 'Education', icon: GraduationCap },
    { id: 'certificates' as NavView, label: 'Certificates', icon: Award },
    { id: 'journey' as NavView, label: 'My Journey', icon: Milestone },
    { id: 'resume' as NavView, label: 'Resume', icon: FileText },
    { id: 'social' as NavView, label: 'Social Links', icon: Share2 },
    { id: 'contact' as NavView, label: 'Contact', icon: Mail },
  ];

  const handleItemClick = (view: NavView) => {
    onNavigate(view);
    setIsOpen(false);
  };

  const handleThemeToggleClick = () => {
    toggleTheme();
  };

  const drawerContent = isOpen && mounted ? (
    <div className="fixed inset-0 z-[9999] flex justify-end" role="dialog" aria-modal="true" aria-label="Navigation Menu">
      {/* Dimmed backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-out Menu Panel - strictly 80% on mobile, max-w-xs on desktop */}
      <div 
        className="relative w-[80%] max-w-xs sm:max-w-sm h-full bg-white dark:bg-neutral-900 border-l border-neutral-200 dark:border-neutral-800 p-4 sm:p-6 flex flex-col justify-between shadow-2xl z-10 overflow-y-auto animate-in slide-in-from-right duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Menu Header */}
          <div className="flex items-center justify-between pb-4 border-b border-neutral-200 dark:border-neutral-800">
            <div>
              <h2 className="font-bold text-neutral-900 dark:text-white text-base">
                {personalInfo.name}
              </h2>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Menu & Navigation
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="p-2 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links list */}
          <nav className="mt-4 space-y-1" aria-label="Portfolio sections">
            {/* Home item */}
            <button
              onClick={() => handleItemClick('home')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors text-left cursor-pointer ${
                currentView === 'home'
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                  : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <Home className="w-4 h-4 opacity-80" />
                <span>Home</span>
              </div>
              {currentView === 'home' && <Check className="w-4 h-4" />}
            </button>

            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors text-left cursor-pointer ${
                    isActive
                      ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950'
                      : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 opacity-80" />
                    <span>{item.label}</span>
                  </div>
                  {isActive && <Check className="w-4 h-4" />}
                </button>
              );
            })}

            {/* Dark / Light Mode item in the menu list */}
            <button
              onClick={handleThemeToggleClick}
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white transition-colors text-left cursor-pointer mt-2 border-t border-neutral-100 dark:border-neutral-800/80 pt-3"
            >
              <div className="flex items-center gap-3">
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-500" />
                ) : (
                  <Moon className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                )}
                <span>Dark / Light Mode</span>
              </div>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                {theme === 'dark' ? 'Dark' : 'Light'}
              </span>
            </button>
          </nav>
        </div>

        {/* Drawer Footer */}
        <div className="pt-6 mt-6 border-t border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center justify-between px-2">
            <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
              Current Mode
            </span>
            <button
              onClick={handleThemeToggleClick}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors cursor-pointer"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-500" />
                  <span>Switch to Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-neutral-600" />
                  <span>Switch to Dark</span>
                </>
              )}
            </button>
          </div>
          <p className="mt-4 text-[11px] text-neutral-400 dark:text-neutral-500 px-2 font-mono">
            GNIT Kolkata · 2024–2028
          </p>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-neutral-950/95 border-b border-neutral-200/80 dark:border-neutral-800/80 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Brand Name on the Left: Samir Ali */}
          <button
            onClick={() => onNavigate('home')}
            className="text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 rounded-md p-1 -ml-1 transition-all"
          >
            <span className="font-bold text-lg tracking-tight text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
              {personalInfo.name}
            </span>
            <span className="hidden sm:inline-block ml-2 text-xs font-medium text-neutral-500 dark:text-neutral-400">
              · GNIT Kolkata
            </span>
          </button>

          {/* Right Action: Quick Theme Toggle & Three-Dot Menu Button */}
          <div className="flex items-center gap-2">
            {/* Quick Sun/Moon Toggle Button */}
            <button
              onClick={handleThemeToggleClick}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 cursor-pointer"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-500" />
              ) : (
                <Moon className="w-5 h-5 text-neutral-700" />
              )}
            </button>

            {/* Three-Dot Menu Button (⋮) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen((prev) => !prev);
              }}
              aria-expanded={isOpen}
              aria-label="Open portfolio navigation menu"
              title="Menu"
              className={`p-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 cursor-pointer ${
                isOpen
                  ? 'bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-white'
                  : 'text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800'
              }`}
            >
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Render drawer at body level via React Portal to prevent any stacking context clipping */}
      {drawerContent ? createPortal(drawerContent, document.body) : null}
    </>
  );
};
