import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import { Navbar, NavView } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './pages/HomeView';
import { AboutView } from './pages/AboutView';
import { SkillsView } from './pages/SkillsView';
import { ProjectsView } from './pages/ProjectsView';
import { EducationView } from './pages/EducationView';
import { CertificatesView } from './pages/CertificatesView';
import { JourneyView } from './pages/JourneyView';
import { ResumeView } from './pages/ResumeView';
import { ContactView } from './pages/ContactView';
import { SocialView } from './pages/SocialView';
import { ArrowLeft } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<NavView>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '') as NavView;
      const validViews: NavView[] = [
        'home',
        'about',
        'skills',
        'projects',
        'education',
        'certificates',
        'journey',
        'resume',
        'social',
        'contact',
      ];
      if (validViews.includes(hash)) {
        return hash;
      }
    }
    return 'home';
  });

  // Keep URL hash synchronized
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as NavView;
      const validViews: NavView[] = [
        'home',
        'about',
        'skills',
        'projects',
        'education',
        'certificates',
        'journey',
        'resume',
        'social',
        'contact',
      ];
      if (validViews.includes(hash)) {
        setCurrentView(hash);
      } else if (!hash) {
        setCurrentView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (view: NavView) => {
    setCurrentView(view);
    if (view === 'home') {
      window.history.pushState(null, '', ' ');
    } else {
      window.location.hash = view;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView onNavigate={handleNavigate} />;
      case 'about':
        return <AboutView />;
      case 'skills':
        return <SkillsView />;
      case 'projects':
        return <ProjectsView />;
      case 'education':
        return <EducationView />;
      case 'certificates':
        return <CertificatesView />;
      case 'journey':
        return <JourneyView />;
      case 'resume':
        return <ResumeView />;
      case 'social':
        return <SocialView />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView onNavigate={handleNavigate} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors selection:bg-neutral-900 selection:text-white dark:selection:bg-neutral-100 dark:selection:text-neutral-950">
        {/* Navigation Bar with Three-Dot Menu */}
        <Navbar currentView={currentView} onNavigate={handleNavigate} />

        {/* Main Content Area */}
        <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 pt-4 pb-12">
          {/* Back to Home link when on inner views */}
          {currentView !== 'home' && (
            <div className="pt-2 pb-4">
              <button
                onClick={() => handleNavigate('home')}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Home</span>
              </button>
            </div>
          )}

          {renderCurrentView()}
        </main>

        {/* Footer */}
        <Footer onNavigate={handleNavigate} />
      </div>
    </ThemeProvider>
  );
}
