import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { HomePage } from './components/HomePage';
import { FeaturesPage } from './components/FeaturesPage';
import { HowItWorksPage } from './components/HowItWorksPage';
import { SkillDashboard } from './components/SkillDashboard';
import { MarketplacePage } from './components/MarketplacePage';
import { CommunityPage } from './components/CommunityPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { Navigation } from './components/Navigation';
import { MouseFollower } from './components/MouseFollower';
import { AuthModal } from './components/AuthModal';

type Page = 'home' | 'features' | 'how-it-works' | 'skills' | 'marketplace' | 'community' | 'about' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [user, setUser] = useState<{ email: string; name: string } | null>(null);

  // Set dark theme by default
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // Smooth scroll behavior
  useEffect(() => {
    document.body.style.scrollBehavior = 'smooth';
    return () => {
      document.body.style.scrollBehavior = 'auto';
    };
  }, []);

  const renderPage = () => {
    const pageVariants = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 }
    };

    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} onShowAuth={() => setShowAuthModal(true)} user={user} />;
      case 'features':
        return <FeaturesPage onNavigate={setCurrentPage} />;
      case 'how-it-works':
        return <HowItWorksPage onNavigate={setCurrentPage} />;
      case 'skills':
        return <SkillDashboard onNavigate={setCurrentPage} user={user} />;
      case 'marketplace':
        return <MarketplacePage onNavigate={setCurrentPage} user={user} />;
      case 'community':
        return <CommunityPage onNavigate={setCurrentPage} user={user} />;
      case 'about':
        return <AboutPage onNavigate={setCurrentPage} />;
      case 'contact':
        return <ContactPage onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} onShowAuth={() => setShowAuthModal(true)} user={user} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <MouseFollower />
      <Navigation 
        currentPage={currentPage} 
        onNavigate={setCurrentPage}
        user={user}
        onShowAuth={() => setShowAuthModal(true)}
        onLogout={() => setUser(null)}
      />
      
      <motion.main
        key={currentPage}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pt-20"
      >
        {renderPage()}
      </motion.main>

      <AuthModal 
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={(userData) => {
          setUser(userData);
          setShowAuthModal(false);
        }}
      />
    </div>
  );
}